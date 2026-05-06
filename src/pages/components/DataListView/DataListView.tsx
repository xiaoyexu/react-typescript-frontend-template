import React, { useEffect, useState } from 'react';
import { Input, Flex, Table, Pagination } from 'antd';
import { searchStudents } from '@/api/modules/Students';
import { TableData } from '@/service/TableConfig';

const { Search } = Input;

export interface DataListViewProps {
  tableName: string;
  defaultPageSize?: number;
  columns: any[];
  selectedItem: TableData | null;
  handleItemSelect: (item: TableData) => void;
}

export type DataListViewRef = {
  reload: () => void;
};

// export default ({
//   tableName,
//   defaultPageSize = 10,
//   columns,
//   selectedItem,
//   handleItemSelect
// }: DataListViewProps) => {

const DataListView: React.ForwardRefExoticComponent<
  DataListViewProps & React.RefAttributes<DataListViewRef>
> = React.forwardRef<DataListViewRef, DataListViewProps>(
  (props: DataListViewProps, ref: React.ForwardedRef<DataListViewRef>) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(
      props.defaultPageSize || 10
    );
    const [totalPage, setTotalPage] = useState<number>(0);
    const [data, setData] = useState<TableData[]>([]);
    const [keyword, setKeyword] = useState<string>('');
    const [searchParam, setSearchParam] = useState<any>({});

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    React.useImperativeHandle(ref, () => ({
      reload() {
        handlefetchData(searchParam, pageSize, currentPage);
      }
    }));

    // if (loading) {
    //   return <div className="loading">Loading...</div>;
    // }

    // if (error) {
    //   return <div className="error">{error}</div>;
    // }

    // if (filteredData.length === 0) {
    //   return <div className="no-data">No data available</div>;
    // }

    const onPaginationChange = (page: number, pageSize: number) => {
      setCurrentPage(page);
      setPageSize(pageSize);
    };

    const onSearch = (value: string) => {
      let payload: any = {};
      if (value != '') {
        payload = { keyword: value };
      }
      setSearchParam(payload);
      setCurrentPage(() => 1);
      handlefetchData(payload, pageSize, currentPage);
    };

    const handlefetchData = async (
      request: any,
      limit?: number,
      offset?: number,
      sortBy?: string
    ) => {
      setLoading(true);
      setError(null);

      try {
        let result: any;

        switch (props.tableName) {
          case 'students':
            result = await searchStudents(request, { limit, offset, sortBy });
            break;
          default:
            throw new Error('Unknown table');
        }

        // Assuming the API returns data in a standard format
        if (result && result.data) {
          setData(result.data?.data || result.data || []);
          setTotalPage(result.data?.total || 0);
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

    useEffect(() => {
      handlefetchData(searchParam, pageSize, currentPage);
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
            dataSource={data}
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
          <Flex justify="center">
            <Pagination
              defaultCurrent={currentPage}
              total={totalPage}
              pageSize={pageSize}
              onChange={onPaginationChange}
            />
          </Flex>
        </Flex>
      </div>
    );
  }
);

export default DataListView;
