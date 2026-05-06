import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Upload, Input, Flex, Modal, notification } from 'antd';
import type { UploadRequestOption } from '@rc-component/upload/lib/interface';
import { IEntity } from '@/model/model';
import { DataAction } from '../components/DataDetailView';
import './styles.scss';

import {
  createSingleStudent,
  updateSingleStudent,
  deleteSingleStudent,
  importStudents,
  exportStudents
} from '@/api/modules/Students';
import { searchStudentAudits } from '@/api/modules/StudentAudits';

import ResizeableView from '../components/ResizableView/ResizableView';
import DataListView, { DataListViewRef } from '../components/DataListView';
import DataDetailView from '../components/DataDetailView';
import DataAuditView from '../components/DataAuditView';
import {
  DownloadFile,
  downloadFile,
  transformResponse,
  openNotificationWithIcon
} from '@/service/Utils';

import { getTables, getTableFields, TableData } from '@/service/TableConfig';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [t] = useTranslation();

  const [api, contextHolder] = notification.useNotification();
  const [activeTable, setActiveTable] = useState<string>('students');
  const [auditData, setAuditData] = useState<TableData[]>([]);
  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);

  const dataListViewRef = useRef<DataListViewRef>(null);

  const [selectedItem, setSelectedItem] = useState<TableData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Available tables
  const [availableTables, setAvailableTables] = useState(getTables());

  const fetchAuditData = async (id: string) => {
    setLoading(true);
    setError(null);
    let result: Promise<any>;

    switch (activeTable) {
      case 'students':
        result = searchStudentAudits({ ids: [id] }, { limit: 1000, offset: 0 });
        break;
      default:
        throw new Error('Unknown table');
    }

    result
      .then((res) => {
        setAuditData(() => res.data?.data);
      })
      .catch((error) => {
        const message = error.response.data.status.message;
        openNotificationWithIcon(
          api,
          'error',
          'Error',
          t('errorFetchingAuditData', { error: message })
        );
      })
      .finally(() => {
        setLoading(false);
      });
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
    setAvailableTables(getTables(e.target.value));
  };

  // Handle adding a new item via the modal
  const handleAddNewItem = async (newItemData: any) => {
    let newItemResult: Promise<any>;

    // Call the appropriate create API function based on table type
    switch (activeTable) {
      case 'students':
        newItemResult = createSingleStudent(newItemData);
        break;

      default:
        throw new Error('Unknown table for creation');
    }

    newItemResult
      .then((newItem: any) => {
        // Show success message
        openNotificationWithIcon(
          api,
          'success',
          'Success',
          `Successfully created new ${activeTable} item`
        );
        setSelectedItem(newItem.data);

        // Refetch data to update the UI
        // await fetchData();
        dataListViewRef.current?.reload();
      })
      .catch((error) => {
        const message = error.response.data.status.message;
        openNotificationWithIcon(
          api,
          'error',
          'Error',
          t('errorAddingNewItem', { error: message })
        );
      });
  };

  // Handle editing an item via the modal
  const handleUpdateItem = async (editedData: any) => {
    // Ensure selectedItem and its id exist
    if (!selectedItem || !selectedItem.id) {
      openNotificationWithIcon(api, 'error', 'Error', t('noRecordSelected'));
      return;
    }

    let updatedResult: Promise<any>;

    // Call the appropriate update API function based on table type
    switch (activeTable) {
      case 'students':
        updatedResult = updateSingleStudent(selectedItem.id, editedData);
        break;
      default:
        throw new Error('Unknown table for update');
    }

    updatedResult
      .then((updatedItem: any) => {
        // Show success message
        openNotificationWithIcon(
          api,
          'success',
          'Success',
          `Successfully updated ${activeTable} item`
        );

        // Clear selection
        setSelectedItem(updatedItem.data);

        // Refetch data to update the UI
        dataListViewRef.current?.reload();
      })
      .catch((error) => {
        const message = error.response.data.status.message;
        openNotificationWithIcon(
          api,
          'error',
          'Error',
          t('errorUpdatingRecord', { error: message })
        );
      });
  };

  // Handle delete action
  const handleDeleteItem = async () => {
    if (!selectedItem) {
      openNotificationWithIcon(api, 'error', 'Error', t('noRecordSelected'));
      return;
    }

    // Call the appropriate delete API function based on table type
    let deleteResult: Promise<any>;

    switch (activeTable) {
      case 'students':
        deleteResult = deleteSingleStudent((selectedItem as IEntity).id);
        break;
      default:
        throw new Error('Unknown table for deletion');
    }

    deleteResult
      .then(() => {
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
        dataListViewRef.current?.reload();
      })
      .catch((error) => {
        const message = error.response.data.status.message;
        openNotificationWithIcon(
          api,
          'error',
          'Error',
          t('errorDeletingRecord', { error: message })
        );
      });
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
        const message = error.response.data.status.message;
        openNotificationWithIcon(
          api,
          'error',
          'Error',
          t('errorImportingData', { error: message })
        );
      });
  };

  // Handle logout
  const handleLogout = () => {
    // Remove user from session storage
    sessionStorage.removeItem('user');

    // Redirect to login page
    navigate('/login');
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
    switch (action) {
      case 'add':
        handleAddNewItem(data);
        break;
      case 'edit':
        handleUpdateItem(data);
        break;
      case 'delete':
        Modal.confirm({
          title: t('deleteRecord'),
          content: t('deleteRecordContent'),
          cancelText: t('cancel'),
          onOk: () => {
            handleDeleteItem();
          }
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="admin-dashboard">
      {contextHolder}
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
            <Input
              placeholder="Search tables..."
              size="large"
              value={searchTerm}
              onChange={handleSearch}
              allowClear
            />
          </div>
          <nav className="table-list">
            {availableTables.map((table) => (
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
            <h2>{availableTables.find((t) => t.id === activeTable)?.name}</h2>
            <Flex justify="right" align="center">
              <div className="content-actions">
                <Flex gap={5} justify="end">
                  <Upload
                    customRequest={handleImport}
                    showUploadList={false}
                    maxCount={1}
                  >
                    <Button type="primary">Import</Button>
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
                ref={dataListViewRef}
                tableName={activeTable}
                defaultPageSize={10}
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
