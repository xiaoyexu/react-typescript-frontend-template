import React, { useState, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Upload, Input, Flex, Modal, notification } from 'antd';
import { IEntity } from '@/model/model';
import ResizeableView from '@/components/ResizableView';
import DataListView, { DataListViewRef } from './DataListView';
import DataDetailView, { DataAction } from './DataDetailView';
import DataAuditView from './DataAuditView';
import { DownloadFile, downloadFile, transformResponse } from '@/service/Utils';
import {
  getTableFields,
  TableData,
  getTableConfig,
  TableConfig
} from '@/service/TableConfig';
import notify from '@/service/Notification';

import type { UploadRequestOption } from '@rc-component/upload/lib/interface';
import DataSearchView from './DataSearchView';

interface TableDataViewProps {
  tableId: string;
  tableName: string;
  defaultPageSize?: number;
}

export type TableDataViewRef = {};

const TableDataView: React.ForwardRefExoticComponent<
  TableDataViewProps & React.RefAttributes<TableDataViewRef>
> = React.forwardRef<TableDataViewRef, TableDataViewProps>(
  (props: TableDataViewProps, ref: React.ForwardedRef<TableDataViewRef>) => {
    const [t] = useTranslation();

    const [api, contextHolder] = notification.useNotification();
    const dataListViewRef = useRef<DataListViewRef>(null);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(
      props.defaultPageSize || 10
    );
    const [searchParam, setSearchParam] = useState<any>({});

    const [loading, setLoading] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');
    const [data, setData] = useState<TableData[]>([]);
    const [auditData, setAuditData] = useState<TableData[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [selectedItem, setSelectedItem] = useState<TableData | null>(null);

    const [showAuditModal, setShowAuditModal] = useState<boolean>(false);

    const tableConfig = getTableConfig(props.tableId);

    React.useImperativeHandle(ref, () => ({}));

    const getTableFieldsForDetail = () => {
      return getTableFields(props.tableId);
    };

    const getTableFieldsForList = () => {
      return getTableFields(props.tableId);
    };

    const getTableFieldsForAuditList = () => {
      return getTableFields(props.tableId, true);
    };

    const onSearch = (value: string) => {
      let payload: any = {};
      if (value != '') {
        payload = { keyword: value };
      }
      setSearchParam(payload);
      setCurrentPage(() => 1);
      handleFetchData(payload, pageSize, currentPage);
    };

    const handleItemSelect = (item: TableData) => {
      setSelectedItem(item);
    };

    const handleShowAudit = (id: string) => {
      fetchAuditData(tableConfig, id);
      setShowAuditModal(true);
    };

    const handleDataChange = async (action: DataAction, data: any) => {
      const tableConfig: TableConfig = getTableConfig(props.tableId);

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

    const handleFetchData = async (
      request: any,
      limit?: number,
      offset?: number,
      sortBy?: string
    ) => {
      const tableConfig = getTableConfig(props.tableId);
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
            t('error'),
            t('errorFetchingData', { error: error.message })
          );
        })
        .finally(() => {
          setLoading(false);
        });
    };

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
          error(
            api,
            t('error'),
            t('errorFetchingAuditData', { error: message })
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
            t('success'),
            t('itemAddedSuccessfully', { tableName: props.tableId })
          );
          setSelectedItem(newItem.data);
          dataListViewRef.current?.reload();
        })
        .catch((error) => {
          notify.error(api, t('error'), t('errorAddingNewItem', { error }));
        });
    };

    const handleUpdateItem = async (
      tableConfig: TableConfig,
      editedData: any
    ) => {
      if (!selectedItem || !selectedItem.id) {
        notify.error(api, t('error'), t('noRecordSelected'));
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
            t('success'),
            t('itemUpdatedSuccessfully', { tableName: props.tableId })
          );

          setSelectedItem(updatedItem.data);
          dataListViewRef.current?.reload();
        })
        .catch((error) => {
          error(api, t('error'), t('errorUpdatingRecord', error));
        });
    };

    const handleDeleteItem = async (tableConfig: TableConfig) => {
      if (!selectedItem) {
        notify.error(api, t('error'), t('noRecordSelected'));
        return;
      }

      let deleteResult: Promise<any> = tableConfig.proxy.delete(
        (selectedItem as IEntity).id
      );

      deleteResult
        .then(() => {
          notify.success(
            api,
            t('success'),
            t('itemDeletedSuccessfully', {
              tableName: props.tableId,
              id: selectedItem.id
            })
          );

          setSelectedItem(null);
          dataListViewRef.current?.reload();
        })
        .catch((error) => {
          notify.error(api, t('error'), t('errorDeletingRecord', error));
        });
    };

    const handleExport = async () => {
      if (!props.tableId) return;

      const tableConfig = getTableConfig(props.tableId);
      tableConfig.proxy
        .export(
          {},
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
      if (!props.tableId) return;

      const tableConfig = getTableConfig(props.tableId);

      const formData = new FormData();
      formData.append('file', options.file);

      let importFunc: Promise<any> = tableConfig.proxy.import(formData);

      return importFunc
        .then((res) => {
          notify.info(api, t('success'), t('dataImportedSuccessfully'));
        })
        .catch((error) => {
          notify.error(api, t('error'), t('errorImportingData', error));
        });
    };

    const onPaginationChange = (page: number, pageSize: number) => {
      setCurrentPage(page);
      setPageSize(pageSize);
    };

    const onPageSizeChange = (value: number) => {
      setPageSize(value);
    };

    useLayoutEffect(() => {
      // Fetch data when the table ID changes
      setSelectedItem(null);
    }, [props.tableId]);

    return (
      <>
        {contextHolder}
        <div className="content-header">
          <h2>{props.tableName}</h2>
          <Flex justify="right" align="center">
            <div className="content-actions">
              <Flex gap={5} justify="end">
                <Upload
                  customRequest={handleImport}
                  showUploadList={false}
                  maxCount={1}
                >
                  <Button type="primary">{t('import')}</Button>
                </Upload>

                <Button type="primary" onClick={handleExport}>
                  {t('export')}
                </Button>
              </Flex>
            </div>
          </Flex>
        </div>
        <ResizeableView
          leftView={
            <>
              <DataSearchView
                keyword={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onSearch={onSearch}
              />
              <DataListView
                ref={dataListViewRef}
                tableName={props.tableId}
                searchParam={searchParam}
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                columns={getTableFieldsForList()}
                data={data}
                selectedItem={selectedItem}
                handleFetchData={handleFetchData}
                handleItemSelect={handleItemSelect}
                onPageSizeChange={onPageSizeChange}
                onPaginationChange={onPaginationChange}
              />
            </>
          }
          rightView={
            <DataDetailView
              tableConfig={tableConfig}
              displayColumns={getTableFieldsForDetail()}
              data={selectedItem}
              handleDataChange={handleDataChange}
              handleShowAudit={handleShowAudit}
            />
          }
        />
        <DataAuditView
          columns={getTableFieldsForAuditList()}
          filteredData={auditData}
          open={showAuditModal}
          handleOk={() => setShowAuditModal(false)}
        />
      </>
    );
  }
);

export default TableDataView;
