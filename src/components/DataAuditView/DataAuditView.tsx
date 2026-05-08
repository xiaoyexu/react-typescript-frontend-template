import React from 'react';
import { Modal, Button, Table } from 'antd';

interface DataAuditViewProps {
  filteredData: any[];
  columns: any[];
  open: boolean;
  handleOk: () => void;
}

export type DataAuditViewRef = {};

const DataAuditView: React.ForwardRefExoticComponent<
  DataAuditViewProps & React.RefAttributes<DataAuditViewRef>
> = React.forwardRef<DataAuditViewRef, DataAuditViewProps>(
  (props: DataAuditViewProps, ref: React.ForwardedRef<DataAuditViewRef>) => {
    return (
      <Modal
        open={props.open}
        mask={{ closable: true, enabled: true }}
        closable={false}
        footer={[<Button onClick={props.handleOk}>Ok</Button>]}
        width={800}
      >
        <div className="table-container">
          <Table
            dataSource={props.filteredData}
            columns={props.columns}
            rowKey="auditId"
            pagination={false}
            scroll={{ y: 500 }}
          />
        </div>
      </Modal>
    );
  }
);

export default DataAuditView;
