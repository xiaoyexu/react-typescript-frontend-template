import React, { useEffect, useState } from 'react';
import { Input, Flex, Table, Pagination, Select } from 'antd';
import { TableData } from '@/service/TableConfig';

import './styles.scss';

const { Search } = Input;

export interface DataListViewProps {
  tableName: string;
  defaultPageSize?: number;
  totalCount: number;
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
}

export type DataListViewRef = {
  reload: () => void;
};

const DataListView: React.ForwardRefExoticComponent<
  DataListViewProps & React.RefAttributes<DataListViewRef>
> = React.forwardRef<DataListViewRef, DataListViewProps>(
  (props: DataListViewProps, ref: React.ForwardedRef<DataListViewRef>) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(
      props.defaultPageSize || 10
    );
    // const [totalPage, setTotalPage] = useState<number>(0);
    const [keyword, setKeyword] = useState<string>('');
    const [searchParam, setSearchParam] = useState<any>({});

    React.useImperativeHandle(ref, () => ({
      reload() {
        props.handleFetchData(searchParam, pageSize, currentPage);
      }
    }));

    const onPaginationChange = (page: number, pageSize: number) => {
      setCurrentPage(page);
      setPageSize(pageSize);
    };

    const onPageSizeChange = (value: number) => {
      setPageSize(value);
    };

    const onSearch = (value: string) => {
      let payload: any = {};
      if (value != '') {
        payload = { keyword: value };
      }
      setSearchParam(payload);
      setCurrentPage(() => 1);
      props.handleFetchData(payload, pageSize, currentPage);
    };

    useEffect(() => {
      props.handleFetchData(searchParam, pageSize, currentPage);
    }, [pageSize, currentPage]);

    return (
      <div className="table-container h-full">
        <Flex vertical gap={10}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            size="large"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            enterButton
            allowClear
          />
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
                defaultCurrent={currentPage}
                total={props.totalCount}
                pageSize={pageSize}
                onChange={onPaginationChange}
              />
            </Flex>
            <Flex align="center" gap={5}>
              <Flex justify="center">
                <label>Page Size:</label>
              </Flex>
              <Select
                defaultValue={10}
                onChange={onPageSizeChange}
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
