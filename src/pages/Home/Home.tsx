import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Upload, Flex, notification } from 'antd';
import type { UploadRequestOption } from '@rc-component/upload/lib/interface';
import { IEntity } from '@/model/model';
import { DataAction } from '../components/DataDetailView';
import './styles.scss';

import {
  searchStudents,
  createSingleStudent,
  updateSingleStudent,
  deleteSingleStudent,
  importStudents,
  exportStudents
} from '@/api/modules/Students';
import { searchStudentAudits } from '@/api/modules/StudentAudits';
import { IStudent, IStudentAudit } from '@/api/types';
import ResizeableView from '../components/ResizableView/ResizableView';
import DataListView from '../components/DataListView';
import DataDetailView from '../components/DataDetailView';
import DataAuditView from '../components/DataAuditView';
import {
  DownloadFile,
  downloadFile,
  transformResponse,
  openNotificationWithIcon
} from '@/service/Utils';
import { getTableFields } from '@/service/TableConfig';

type TableData = IStudent;
type AuditTableData = IStudentAudit;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [activeTable, setActiveTable] = useState<string>('students');
  const [data, setData] = useState<TableData[]>([]);
  const [auditData, setAuditData] = useState<TableData[]>([]);
  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<TableData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Available tables
  const tables = [{ id: 'students', name: 'Students', icon: '👤' }];

  // Fetch data based on active table
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      let result: any;

      switch (activeTable) {
        case 'students':
          result = await searchStudents({});
          break;
        default:
          throw new Error('Unknown table');
      }

      // Assuming the API returns data in a standard format
      if (result && result.data) {
        setData(result.data?.data || result.data || []);
      } else {
        setError('Invalid API response format');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAuditData = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      let result: any;

      switch (activeTable) {
        case 'students':
          result = await searchStudentAudits(
            { ids: [id] },
            { limit: 1000, offset: 0 }
          );
          break;
        default:
          throw new Error('Unknown table');
      }

      // Assuming the API returns data in a standard format
      if (result && result.data) {
        setAuditData(() => result.data?.data || result.data || []);
      } else {
        setError('Invalid API response format');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle table selection
  const handleTableSelect = (tableId: string) => {
    setActiveTable(tableId);
    setSelectedItem(null);
  };

  // Handle item selection
  const handleItemSelect = (item: TableData) => {
    setSelectedItem(item);
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on search term
  const filteredData = data.filter((item) => {
    if (!searchTerm) return true;

    // Simple search - check if searchTerm exists in any string property
    return Object.values(item).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Fetch data when active table changes
  useEffect(() => {
    fetchData();
  }, [activeTable]);

  // Handle delete action
  const handleDelete = async () => {
    if (!selectedItem) return;

    // Confirm deletion
    if (
      window.confirm(
        `Are you sure you want to delete this ${activeTable} item?`
      )
    ) {
      try {
        // Call the appropriate delete API function based on table type
        let deleteResult;

        switch (activeTable) {
          case 'students':
            deleteResult = await deleteSingleStudent(
              (selectedItem as IEntity).id
            );
            break;
          default:
            throw new Error('Unknown table for deletion');
        }

        // Remove the item from the local data array
        setData((prevData) =>
          prevData.filter((item) => item.id !== selectedItem.id)
        );

        // Show success message
        openNotificationWithIcon(
          api,
          'success',
          'Success',
          `Successfully deleted ${activeTable} item with ID: ${selectedItem.id}`
        );

        // Clear selection
        setSelectedItem(null);

        // Refetch data to update the UI
        await fetchData();
      } catch (err) {
        console.error('Error deleting item:', err);
        openNotificationWithIcon(api, 'error', 'Error', 'Error deleting item');
      }
    }
  };

  const handleExport = async () => {
    if (!activeTable) return;

    switch (activeTable) {
      case 'students':
        exportStudents(
          {},
          { limit: 1000, offset: 1 },
          {
            responseType: 'blob',
            transformResponse: [transformResponse]
          }
        ).then((file: any) => {
          downloadFile(file as unknown as DownloadFile);
        });
        break;
      default:
        throw new Error('Unknown table for deletion');
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Remove user from session storage
    sessionStorage.removeItem('user');

    // Redirect to login page
    navigate('/login');
  };

  // Handle editing an item via the modal
  const handleEditItem = async (editedData: any) => {
    try {
      let updatedItem: any;

      // Ensure selectedItem and its id exist
      if (!selectedItem || !selectedItem.id) {
        throw new Error('No selected item to update');
      }

      // Call the appropriate update API function based on table type
      switch (activeTable) {
        case 'students':
          updatedItem = await updateSingleStudent(selectedItem.id, editedData);
          break;
        default:
          throw new Error('Unknown table for update');
      }

      // Update the item in the local data array
      setData((prevData) =>
        prevData.map((item) =>
          item.id === selectedItem.id ? updatedItem.data : item
        )
      );

      // Show success message
      openNotificationWithIcon(
        api,
        'success',
        'Success',
        `Successfully updated ${activeTable} item`
      );

      // Close the edit modal
      //   setIsEditModalOpen(false);

      // Clear selection
      setSelectedItem(updatedItem.data);

      // Refetch data to update the UI
      await fetchData();
    } catch (err) {
      console.error('Error updating item:', err);
      openNotificationWithIcon(api, 'error', 'Error', 'Error updating item');
    }
  };

  // Handle adding a new item via the modal
  const handleAddNewItem = async (newItemData: any) => {
    try {
      let newItem: any;

      // Call the appropriate create API function based on table type
      switch (activeTable) {
        case 'students':
          newItem = await createSingleStudent(newItemData);
          break;

        default:
          throw new Error('Unknown table for creation');
      }

      // Add the new item to the local data array
      setData((prevData) => [...prevData, newItem]);

      // Show success message
      openNotificationWithIcon(
        api,
        'success',
        'Success',
        `Successfully created new ${activeTable} item`
      );

      setSelectedItem(newItem.data);

      // Refetch data to update the UI
      await fetchData();
    } catch (err) {
      console.error('Error adding new item:', err);
      openNotificationWithIcon(api, 'error', 'Error', 'Error adding new item');
    }
  };

  const getTableFieldsForDetail = () => {
    return getTableFields(activeTable);
  };

  const getTableFieldsForList = () => {
    return getTableFields(activeTable);
  };

  const getTableFieldsForAuditList = () => {
    return getTableFields(activeTable, true);
  };

  const handleShowAudit = (id: string) => {
    fetchAuditData(id);
    setShowAuditModal(true);
  };

  const handleDataChange = async (action: DataAction, data: any) => {
    console.log(`Action: ${action}, Data: ${JSON.stringify(data)}`);
    switch (action) {
      case 'add':
        // Handle add logic
        handleAddNewItem(data);
        break;
      case 'edit':
        // Handle edit logic
        handleEditItem(data);
        break;
      case 'view':
        // Handle view logic
        break;
      case 'delete':
        // Handle delete logic
        handleDelete();
        break;
      default:
        break;
    }
  };

  const handleImport = async (
    options: UploadRequestOption,
    _: { defaultRequest: (option: UploadRequestOption) => void }
  ) => {
    if (!activeTable) return;
    const formData = new FormData();
    formData.append('file', options.file);

    let importFunction: Promise<any>;

    switch (activeTable) {
      case 'students':
        importFunction = importStudents(formData);
        break;
      default:
        return Promise.reject(new Error('Unknown table for import'));
    }

    return importFunction
      .then((res) => {
        openNotificationWithIcon(api, 'info', 'Info', 'Imported');
      })
      .catch((error) => {
        openNotificationWithIcon(api, 'error', 'Error', error.message);
      });
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          <Flex gap={15} justify="center" align="space-between">
            <h2>Admin User</h2>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </Flex>
        </div>
      </header>

      <div className="admin-content">
        <div className="sidebar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search tables..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <nav className="table-list">
            {tables.map((table) => (
              <div
                key={table.id}
                className={`table-item ${activeTable === table.id ? 'active' : ''}`}
                onClick={() => handleTableSelect(table.id)}
              >
                <span className="table-icon">{table.icon}</span>
                <span className="table-name">{table.name}</span>
              </div>
            ))}
          </nav>
        </div>

        <div className="main-content">
          <div className="content-header">
            <h2>{tables.find((t) => t.id === activeTable)?.name}</h2>
            <Flex justify="right" align="center">
              <div className="content-actions">
                <Flex gap={5} justify="end">
                  <Upload
                    customRequest={handleImport}
                    showUploadList={false}
                    maxCount={1}
                  >
                    <Button type="primary">
                      {/* onClick={handleImport} */}
                      Import
                    </Button>
                  </Upload>

                  <Button type="primary" onClick={handleExport}>
                    Export
                  </Button>
                </Flex>
              </div>
            </Flex>
          </div>
          <ResizeableView
            leftView={
              <DataListView
                filteredData={filteredData}
                columns={getTableFieldsForList()}
                selectedItem={selectedItem}
                handleItemSelect={handleItemSelect}
              />
            }
            rightView={
              <DataDetailView
                displayColumns={getTableFieldsForDetail()}
                data={selectedItem}
                handleDataChange={handleDataChange}
                handleShowAudit={handleShowAudit}
              />
            }
          />
        </div>
      </div>
      <DataAuditView
        columns={getTableFieldsForAuditList()}
        filteredData={auditData}
        open={showAuditModal}
        handleOk={() => setShowAuditModal(false)}
      />
    </div>
  );
};

export default Home;
