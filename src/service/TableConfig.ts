import { IStudent } from '@/api/types';
type TableConfig = {
  id: string;
  name: string;
  icon: React.ReactElement | string;
  columns: ColumnConfigs;
};

type ColumnConfig = {
  title: string;
  dataIndex: string;
  key: string;
  type: 'text' | 'number' | 'date' | 'datetime';
  width: number;
  readonly?: boolean;
};

type ColumnConfigs = ColumnConfig[];

type TableData = IStudent;

const TABLE_CONFIG_MAP: Record<string, TableConfig> = {
  students: {
    id: 'students',
    name: 'Students',
    icon: '👤',
    columns: [
      { title: 'ID', dataIndex: 'id', key: 'id', type: 'text', width: 220 },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        type: 'text',
        width: 150
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        type: 'number',
        width: 200
      },
      {
        title: 'Height',
        dataIndex: 'height',
        key: 'height',
        type: 'number',
        width: 150
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
        type: 'date',
        width: 150
      }
    ]
  }
};

const getTableFields = (tableName: string, isAudit?: boolean) => {
  let columns: ColumnConfigs = TABLE_CONFIG_MAP[tableName]?.columns;

  if (!columns) {
    return [];
  }
  if (isAudit) {
    columns = [
      {
        title: 'Audit ID',
        dataIndex: 'auditId',
        key: 'auditId',
        type: 'text',
        width: 220,
        readonly: true
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        type: 'text',
        width: 100,
        readonly: true
      },
      ...columns
    ];
  }

  return [
    ...columns,
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      type: 'datetime',
      width: 150,
      readonly: true
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      type: 'text',
      width: 150,
      readonly: true
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      type: 'datetime',
      width: 150,
      readonly: true
    },
    {
      title: 'Updated By',
      dataIndex: 'updatedBy',
      key: 'updatedBy',
      type: 'text',
      width: 150,
      readonly: true
    }
  ];
};

const getTables = () => {
  return Object.values(TABLE_CONFIG_MAP).map((config) => ({
    id: config.id,
    name: config.name,
    icon: config.icon
  }));
};

export default TABLE_CONFIG_MAP;
export { getTableFields, getTables };
export type { TableConfig, ColumnConfig, ColumnConfigs, TableData };
