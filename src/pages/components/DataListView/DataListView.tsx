import { useState } from 'react';
import { Table } from 'antd';

export default ({
  filteredData,
  columns,
  selectedItem,
  handleItemSelect
}: {
  filteredData: any[];
  columns: any[];
  selectedItem: any;
  handleItemSelect: (item: any) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (filteredData.length === 0) {
    return <div className="no-data">No data available</div>;
  }

  return (
    <div className="table-container">
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => handleItemSelect(record)
        })}
        rowClassName={(record, index) =>
          selectedItem?.id === record.id ? 'ant-table-row-selected' : ''
        }
        pagination={false}
        scroll={{ y: 500 }}
      />
    </div>
  );
};
