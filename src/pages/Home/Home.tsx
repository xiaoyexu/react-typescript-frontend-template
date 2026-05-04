import React, { BaseSyntheticEvent, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  Space,
  Form,
  Button,
  Upload,
  UploadFile,
  UploadProps,
  message,
  Flex
} from 'antd';
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

import { IImportStudentResponse, IStudent, IStudents } from '@/api/types';
import ResizeableView from '../components/ResizableView/ResizableView';
import DataListView from '../components/DataListView';
import DataDetailView from '../components/DataDetailView';
import { DownloadFile, downloadFile, transformResponse } from '@/service/Utils';

// Import AddItemModal component
// import AddItemModal from '../components/AddItemModal';
// Import EditItemModal component
// import EditItemModal from '../components/EditItemModal';

type TableData = IStudent;

const Home: React.FC = () => {
  const [activeTable, setActiveTable] = useState<string>('students');
  const [data, setData] = useState<TableData[]>([]);
  const [dataAction, setDataAction] = useState<DataAction>('view');

  const [selectedItem, setSelectedItem] = useState<TableData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  //   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  //   const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  //   const [editItemData, setEditItemData] = useState<any>(null);

  const navigate = useNavigate();

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

  // Handle edit action
  const handleEdit = async () => {
    if (!selectedItem) return;

    // Set the item data to be edited and open the edit modal
    // setEditItemData(selectedItem);
    // setIsEditModalOpen(true);
    setDataAction('edit');
  };

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
        alert(
          `Successfully deleted ${activeTable} item with ID: ${selectedItem.id}`
        );

        // Clear selection
        setSelectedItem(null);

        // Refetch data to update the UI
        await fetchData();
      } catch (err) {
        console.error('Error deleting item:', err);
        alert('Error deleting item');
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

  const handleImport = async () => {
    // if (selectedFile == null) {
    //   alert('no file selected');
    //   return;
    // }
    // const formData = new FormData();
    // formData.append('file', selectedFile, selectedFile.name);
    // if (!activeTable) return;
    // switch (activeTable) {
    //   case 'students':
    //     importStudents(formData).then((res: any) => {
    //       alert(`${res.data}`);
    //       ref.current.value = '';
    //       setSelectedFile(null);
    //     });
    //     break;
    //   default:
    //     throw new Error('Unknown table for deletion');
    // }

    console.log(`handleUpload`);

    // if (!activeTable) return;
    // const formData = new FormData();
    // if (!fileList || fileList.length == 0) {
    //   return;
    // }

    // fileList.forEach((file) => {
    //   formData.append('file', file.originFileObj as Blob);
    // });

    // switch (activeTable) {
    //   case 'students':
    //     importStudents(formData)
    //       .then((res: IImportStudentResponse) => {
    //         alert(`${res.status?.message}`);
    //         // setFileList([]);
    //       })
    //       .catch((error: any) => {
    //         console.error('Error importing students:', error);
    //         alert('Error importing students');
    //       });
    //     break;
    //   default:
    //     throw new Error('Unknown table for deletion');
    // }
  };

  // Handle logout
  const handleLogout = () => {
    // Remove user from session storage
    sessionStorage.removeItem('user');

    // Redirect to login page
    navigate('/login');
  };

  // Handle add new action
  const handleAddNew = async () => {
    // Open the modal to add a new item
    // console.log('ad new');
    // setIsModalOpen(true);
    setDataAction('add');
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

      console.log(`update`);
      // Update the item in the local data array
      setData((prevData) =>
        prevData.map((item) =>
          item.id === selectedItem.id ? updatedItem.data : item
        )
      );

      // Show success message
      alert(`Successfully updated ${activeTable} item`);

      // Close the edit modal
      //   setIsEditModalOpen(false);

      // Clear selection
      setSelectedItem(updatedItem.data);
      setDataAction('view');

      // Refetch data to update the UI
      await fetchData();
    } catch (err) {
      console.error('Error updating item:', err);
      alert('Error updating item');
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
      alert(`Successfully created new ${activeTable} item`);

      // Refetch data to update the UI
      await fetchData();
    } catch (err) {
      console.error('Error adding new item:', err);
      alert('Error adding new item');
    }
  };

  let columns: any[] = [];

  if (activeTable === 'students') {
    columns = [
      { title: 'ID', dataIndex: 'id', key: 'id', width: 220 },
      { title: 'Name', dataIndex: 'name', key: 'name', width: 150 },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 200
      },
      {
        title: 'Height',
        dataIndex: 'height',
        key: 'height',
        width: 150
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
        width: 150
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: 150
      },
      {
        title: 'Created By',
        dataIndex: 'createdBy',
        key: 'createdBy',
        width: 150
      },
      {
        title: 'Updated At',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        width: 150
      },
      {
        title: 'Updated By',
        dataIndex: 'updatedBy',
        key: 'updatedBy',
        width: 150
      }
    ];
  }

  const handleAuditLogClick = () => {
    // Navigate to the audit log page with table type and item ID
    // navigate(`/audit-log/${activeTable}/${selectedItem.id}`);
  };

  const getDisplayFields = () => {
    switch (activeTable) {
      case 'students':
        return [
          { name: 'id', label: 'ID', type: 'text' },
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'age', label: 'Age', type: 'text' },
          { name: 'height', label: 'Height', type: 'number' },
          { name: 'birthday', label: 'Birthday', type: 'date' },
          { name: 'createdAt', label: 'Created At', type: 'datetime' },
          { name: 'createdBy', label: 'Created By', type: 'text' },
          { name: 'updatedAt', label: 'Updated At', type: 'datetime' },
          { name: 'updatedBy', label: 'Updated By', type: 'text' }
        ];
      default:
        return [];
    }
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

  const handleCustomRequest = async (
    options: UploadRequestOption,
    _: { defaultRequest: (option: UploadRequestOption) => void }
  ) => {
    if (!activeTable) return;
    const formData = new FormData();
    formData.append('file', options.file);
    switch (activeTable) {
      case 'students':
        return importStudents(formData)
          .then((res: IImportStudentResponse) => {
            alert(`${res.status?.message}`);
          })
          .catch((error: any) => {
            alert(`Error importing students: ${error.message}`);
          });
      default:
        return Promise.reject(new Error('Unknown table for deletion'));
    }
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
                    customRequest={handleCustomRequest}
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
                columns={columns}
                selectedItem={selectedItem}
                handleItemSelect={handleItemSelect}
              />
            }
            rightView={
              <DataDetailView
                displayColumns={getDisplayFields()}
                data={selectedItem}
                handleDataChange={handleDataChange}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
