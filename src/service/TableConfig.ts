const TABLE_CONFIG_MAP: Record<string, any[]> = {
  students: [
    { title: 'ID', dataIndex: 'id', key: 'id', type: 'text', width: 220 },
    { title: 'Name', dataIndex: 'name', key: 'name', type: 'text', width: 150 },
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
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      type: 'datetime',
      width: 150
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      type: 'text',
      width: 150
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      type: 'datetime',
      width: 150
    },
    {
      title: 'Updated By',
      dataIndex: 'updatedBy',
      key: 'updatedBy',
      type: 'text',
      width: 150
    }
  ]
};

const getTableFields = (tableName: string, isAudit?: boolean) => {
  let columns: any[] = TABLE_CONFIG_MAP[tableName];
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
        width: 220
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        type: 'text',
        width: 100
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
      width: 150
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      type: 'text',
      width: 150
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      type: 'datetime',
      width: 150
    },
    {
      title: 'Updated By',
      dataIndex: 'updatedBy',
      key: 'updatedBy',
      type: 'text',
      width: 150
    }
  ];
};

export default TABLE_CONFIG_MAP;
export { getTableFields };
