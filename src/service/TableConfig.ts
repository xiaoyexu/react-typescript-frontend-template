import { IStudent } from '@/api/types';
import {
  searchStudents,
  createSingleStudent,
  updateSingleStudent,
  deleteSingleStudent,
  importStudents,
  exportStudents
} from '@/api/modules/Students';
import {
  searchUsers,
  createSingleUser,
  updateSingleUser,
  deleteSingleUser,
  importUsers,
  exportUsers
} from '@/api/modules/Users';
import {
  searchRoles,
  createSingleRole,
  updateSingleRole,
  deleteSingleRole,
  importRoles,
  exportRoles
} from '@/api/modules/Roles';

import { searchStudentAudits } from '@/api/modules/StudentAudits';
import { searchUserAudits } from '@/api/modules/UserAudits';
import { searchRoleAudits } from '@/api/modules/RoleAudits';

type ApiProxy = {
  search(query?: any, pagination?: any, config?: any): Promise<any>;
  create(data: any): Promise<any>;
  update(id: any, data: any): Promise<any>;
  delete(id: any): Promise<any>;
  import(data: FormData): Promise<any>;
  export(query?: any, pagination?: any, config?: any): Promise<any>;
  searchAudits(query?: any, pagination?: any, config?: any): Promise<any>;
};

type TableConfig = {
  id: string;
  name: string;
  icon: React.ReactNode;
  columns: ColumnConfigs;
  proxy: ApiProxy;
  extraFunctions?: React.ReactNode[];
};

type ColumnConfig = {
  label?: string;
  title: string;
  dataIndex: string;
  key: string;
  type:
    | 'text'
    | 'email'
    | 'boolean'
    | 'number'
    | 'date'
    | 'datetime'
    | 'time'
    | 'single_select'
    | 'textarea';
  width: number;
  required?: boolean;
  options?: SelectOptions;
  readonly?: boolean;
  fixed?: string;
  className?: string;
  render?: (value: any, record: TableData, index: number) => React.ReactNode;
  extraFunctions?: React.ReactNode[];
};

type SelectOption = {
  key: string;
  value: string;
};

type SelectOptions = SelectOption[];

type ColumnConfigs = ColumnConfig[];

type TableData = IStudent;

const TABLE_CONFIG_MAP: Record<string, TableConfig> = {
  students: {
    id: 'students',
    name: 'Students',
    icon: '👤',
    columns: [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        type: 'text',
        width: 220,
        fixed: 'start',
        className: 'fixed-column '
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        type: 'text',
        width: 150,
        fixed: 'start',
        className: 'fixed-column'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        type: 'single_select',
        options: [
          { key: 'a1', value: '1' },
          { key: 'a2', value: '2' },
          { key: 'a3', value: '3' }
        ],
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
    ],
    proxy: {
      search: searchStudents,
      create: createSingleStudent,
      update: updateSingleStudent,
      delete: deleteSingleStudent,
      import: importStudents,
      export: exportStudents,
      searchAudits: searchStudentAudits
    }
  },
  users: {
    id: 'users',
    name: 'Users',
    icon: '👥',
    columns: [
      {
        title: 'ID (Blank for New)',
        dataIndex: 'id',
        key: 'id',
        width: 330,
        type: 'text',
        fixed: 'start'
      },
      {
        title: 'Account Name',
        dataIndex: 'accountName',
        key: 'accountName',
        width: 220,
        type: 'text',
        required: true
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        width: 150,
        type: 'text',
        required: true
      }
    ],
    proxy: {
      search: searchUsers,
      create: createSingleUser,
      update: updateSingleUser,
      delete: deleteSingleUser,
      import: importUsers,
      export: exportUsers,
      searchAudits: searchUserAudits
    }
  },
  roles: {
    id: 'roles',
    name: 'Roles',
    icon: '🔐',
    columns: [
      {
        title: 'ID (Blank for New)',
        dataIndex: 'id',
        key: 'id',
        width: 330,
        type: 'text'
      },
      {
        title: 'Authority',
        dataIndex: 'authority',
        key: 'authority',
        width: 400,
        type: 'textarea',
        required: true
      }
    ],
    proxy: {
      search: searchRoles,
      create: createSingleRole,
      update: updateSingleRole,
      delete: deleteSingleRole,
      import: importRoles,
      export: exportRoles,
      searchAudits: searchRoleAudits
    }
  }
};

const getTableConfig = (tableName: string) => {
  return TABLE_CONFIG_MAP[tableName];
};

const getTableFields = (
  tableName: string,
  isAudit?: boolean
): ColumnConfigs => {
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

const getTables = (name?: string) => {
  let result = Object.values(TABLE_CONFIG_MAP).map((config) => ({
    id: config.id,
    name: config.name,
    icon: config.icon
  }));
  if (name) {
    result = result.filter(
      (table) =>
        table.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > 0
    );
  }
  return result;
};

export default TABLE_CONFIG_MAP;
export { getTableConfig, getTableFields, getTables };
export type {
  TableConfig,
  ColumnConfig,
  ColumnConfigs,
  SelectOption,
  SelectOptions,
  TableData
};
