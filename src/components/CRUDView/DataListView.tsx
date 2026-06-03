import React, { useLayoutEffect } from 'react';
import { Flex, Table, Pagination, Select } from 'antd';
import { TableData } from '@/service/TableConfig';

export interface DataListViewProps {
  tableName: string;
  searchParam: any;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  columns: any[];
  data: TableData[];
  selectedItem: TableData | null;
  handleFetchData: (
    request: any,
    limit?: number,
    offset?: number,
    sortBy?: string
  ) => void;
  handleItemSelect: (item: TableData) => void;
  onPaginationChange: (page: number, pageSize: number) => void;
  onPageSizeChange: (value: number) => void;
}

export type DataListViewRef = {
  reload: () => void;
};

const DataListView: React.ForwardRefExoticComponent<
  DataListViewProps & React.RefAttributes<DataListViewRef>
> = React.forwardRef<DataListViewRef, DataListViewProps>(
  (props: DataListViewProps, ref: React.ForwardedRef<DataListViewRef>) => {
    React.useImperativeHandle(ref, () => ({
      reload() {
        props.handleFetchData(
          props.searchParam,
          props.pageSize,
          props.currentPage
        );
      }
    }));

    useLayoutEffect(() => {
      props.handleFetchData(
        props.searchParam,
        props.pageSize,
        props.currentPage
      );
    }, [props.tableName, props.pageSize, props.currentPage]);

    return (
      <div className="table-container h-full">
        <Flex vertical gap={10}>
          <Table
            className="h-full"
            dataSource={props.data}
            columns={props.columns}
            rowKey="id"
            onRow={(record) => ({
              onClick: () => props.handleItemSelect(record)
            })}
            rowClassName={(record, index) =>
              props.selectedItem?.id === record.id
                ? 'ant-table-row-selected'
                : ''
            }
            pagination={false}
            scroll={{ y: 'calc(100vh)' }}
          />
          <Flex justify="space-between">
            <Flex justify="center" align="start">
              <Pagination
                defaultCurrent={props.currentPage}
                total={props.totalCount}
                pageSize={props.pageSize}
                onChange={props.onPaginationChange}
              />
            </Flex>
            <Flex align="center" gap={5}>
              <Flex justify="center">
                <label>Page Size:</label>
              </Flex>
              <Select
                defaultValue={10}
                onChange={props.onPageSizeChange}
                options={[
                  { label: '5', value: 5 },
                  { label: '10', value: 10 },
                  { label: '20', value: 20 },
                  { label: '50', value: 50 },
                  { label: '100', value: 100 }
                ]}
              />
            </Flex>
          </Flex>
        </Flex>
      </div>
    );
  }
);

export default DataListView;
