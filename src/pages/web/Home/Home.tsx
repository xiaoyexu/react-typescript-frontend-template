import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Upload, Input, Flex, Modal, notification } from 'antd';
import type { UploadRequestOption } from '@rc-component/upload/lib/interface';
import { IEntity } from '@/model/model';
import { DataAction } from '@/components/DataDetailView';
import ResizeableView from '@/components/ResizableView/ResizableView';
import DataListView, { DataListViewRef } from '@/components/DataListView';
import DataDetailView from '@/components/DataDetailView';
import DataAuditView from '@/components/DataAuditView';
import { DownloadFile, downloadFile, transformResponse } from '@/service/Utils';
import {
  getTables,
  getTableFields,
  TableData,
  getTableConfig,
  TableConfig
} from '@/service/TableConfig';
import notify from '@/service/Notification';

import './styles.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [t] = useTranslation();

  const [api, contextHolder] = notification.useNotification();
  const [activeTable, setActiveTable] = useState<string>('students');

  const [data, setData] = useState<TableData[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [auditData, setAuditData] = useState<TableData[]>([]);

  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);
  const dataListViewRef = useRef<DataListViewRef>(null);

  const [selectedItem, setSelectedItem] = useState<TableData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [availableTables, setAvailableTables] = useState(getTables());

  const fetchAuditData = async (tableConfig: TableConfig, id: string) => {
    setLoading(true);

    let result = tableConfig.proxy.searchAudits(
      { ids: [id] },
      { limit: 1000, offset: 0 }
    );

    result
      .then((res) => {
        setAuditData(() => res.data?.data);
      })
      .catch((error) => {
        const message = error.response.data.status.message;
        error(api, t('Error'), t('errorFetchingAuditData', { error: message }));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleTableSelect = (tableId: string) => {
    setActiveTable(tableId);
    setSelectedItem(null);
  };

  const handleItemSelect = (item: TableData) => {
    setSelectedItem(item);
  };

  const handleTableNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setAvailableTables(getTables(e.target.value));
  };

  const handleFetchData = async (
    request: any,
    limit?: number,
    offset?: number,
    sortBy?: string
  ) => {
    const tableConfig = getTableConfig(activeTable);
    setLoading(true);

    let searchResult: Promise<any> = tableConfig.proxy.search(request, {
      limit,
      offset,
      sortBy
    });

    searchResult
      .then((res) => {
        setData(res.data?.data || []);
        setTotalCount(res.data?.total || 0);
      })
      .catch((error) => {
        error(
          api,
          t('Error'),
          t('errorFetchingData', { error: error.message })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddNewItem = async (
    tableConfig: TableConfig,
    newItemData: any
  ) => {
    let newItemResult: Promise<any> = tableConfig.proxy.create(newItemData);

    newItemResult
      .then((newItem: any) => {
        notify.success(
          api,
          t('Success'),
          `Successfully created new ${activeTable} item`
        );
        setSelectedItem(newItem.data);
        dataListViewRef.current?.reload();
      })
      .catch((error) => {
        notify.error(api, t('Error'), t('errorAddingNewItem', error));
      });
  };

  const handleUpdateItem = async (
    tableConfig: TableConfig,
    editedData: any
  ) => {
    if (!selectedItem || !selectedItem.id) {
      notify.error(api, t('Error'), t('noRecordSelected'));
      return;
    }

    let updatedResult: Promise<any> = tableConfig.proxy.update(
      selectedItem.id,
      editedData
    );

    updatedResult
      .then((updatedItem: any) => {
        notify.success(
          api,
          t('Success'),
          `Successfully updated ${activeTable} item`
        );

        setSelectedItem(updatedItem.data);
        dataListViewRef.current?.reload();
      })
      .catch((error) => {
        error(api, t('Error'), t('errorUpdatingRecord', error));
      });
  };

  const handleDeleteItem = async (tableConfig: TableConfig) => {
    if (!selectedItem) {
      notify.error(api, 'Error', t('noRecordSelected'));
      return;
    }

    let deleteResult: Promise<any> = tableConfig.proxy.delete(
      (selectedItem as IEntity).id
    );

    deleteResult
      .then(() => {
        notify.success(
          api,
          t('Success'),
          `Successfully deleted ${activeTable} item with ID: ${selectedItem.id}`
        );

        setSelectedItem(null);
        dataListViewRef.current?.reload();
      })
      .catch((error) => {
        notify.error(api, t('Error'), t('errorDeletingRecord', error));
      });
  };

  const handleExport = async () => {
    if (!activeTable) return;

    const tableConfig = getTableConfig(activeTable);
    tableConfig.proxy
      .export(
        searchTerm,
        { limit: 1000, offset: 1 },
        {
          responseType: 'blob',
          transformResponse: [transformResponse]
        }
      )
      .then((file: any) => {
        downloadFile(file as unknown as DownloadFile);
      });
  };

  const handleImport = async (
    options: UploadRequestOption,
    _: { defaultRequest: (option: UploadRequestOption) => void }
  ) => {
    if (!activeTable) return;

    const tableConfig = getTableConfig(activeTable);

    const formData = new FormData();
    formData.append('file', options.file);

    let importFunc: Promise<any> = tableConfig.proxy.import(formData);

    return importFunc
      .then((res) => {
        notify.info(api, 'Info', 'Imported');
      })
      .catch((error) => {
        notify.error(api, t('Error'), t('errorImportingData', error));
      });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
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
    const tableConfig = getTableConfig(activeTable);
    fetchAuditData(tableConfig, id);
    setShowAuditModal(true);
  };

  const handleDataChange = async (action: DataAction, data: any) => {
    const tableConfig: TableConfig = getTableConfig(activeTable);

    switch (action) {
      case 'add':
        handleAddNewItem(tableConfig, data);
        break;
      case 'edit':
        handleUpdateItem(tableConfig, data);
        break;
      case 'delete':
        Modal.confirm({
          title: t('deleteRecord'),
          content: t('deleteRecordContent'),
          cancelText: t('cancel'),
          onOk: () => {
            handleDeleteItem(tableConfig);
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
              onChange={handleTableNameSearch}
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
                totalCount={totalCount}
                columns={getTableFieldsForList()}
                data={data}
                selectedItem={selectedItem}
                handleFetchData={handleFetchData}
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
