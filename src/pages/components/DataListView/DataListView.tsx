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

// const renderTableContent = () => {
//     if (loading) {
//       return <div className="loading">Loading...</div>;
//     }

//     if (error) {
//       return <div className="error">{error}</div>;
//     }

//     if (filteredData.length === 0) {
//       return <div className="no-data">No data available</div>;
//     }

//     // Determine columns based on table type
//     let columns: any[] = [];

//     if (activeTable === 'students') {
//       columns = [
//         { title: 'ID', dataIndex: 'id', key: 'id', width: 220 },
//         { title: 'Name', dataIndex: 'name', key: 'name', width: 150 },
//         {
//           title: 'Age',
//           dataIndex: 'age',
//           key: 'age',
//           width: 200
//         },
//         {
//           title: 'Height',
//           dataIndex: 'height',
//           key: 'height',
//           width: 150
//         },
//         {
//           title: 'Birthday',
//           dataIndex: 'birthday',
//           key: 'birthday',
//           width: 150
//         },
//         {
//           title: 'Created At',
//           dataIndex: 'createdAt',
//           key: 'createdAt',
//           width: 150
//         },
//         {
//           title: 'Created By',
//           dataIndex: 'createdBy',
//           key: 'createdBy',
//           width: 150
//         },
//         {
//           title: 'Updated At',
//           dataIndex: 'updatedAt',
//           key: 'updatedAt',
//           width: 150
//         },
//         {
//           title: 'Updated By',
//           dataIndex: 'updatedBy',
//           key: 'updatedBy',
//           width: 150
//         }
//       ];
//     }

//     return (

//     );
//   };
