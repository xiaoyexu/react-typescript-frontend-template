import { Modal, Button, Table } from 'antd';

export default ({
  filteredData,
  columns,
  open,
  handleOk
}: {
  filteredData: any[];
  columns: any[];
  open: boolean;
  handleOk: () => void;
}) => {
  console.log(`Filtered Data: ${JSON.stringify(filteredData)}`);
  console.log(`Columns: ${JSON.stringify(columns)}`);

  if (filteredData.length === 0) {
    return <div className="no-data">No data available</div>;
  }

  return (
    <Modal
      open={open}
      mask={{ closable: true, enabled: true }}
      closable={false}
      footer={[<Button onClick={handleOk}>Ok</Button>]}
      width={800}
    >
      <div className="table-container">
        <Table
          dataSource={filteredData}
          columns={columns}
          rowKey="auditId"
          pagination={false}
          scroll={{ y: 500 }}
        />
      </div>
    </Modal>
  );
};
