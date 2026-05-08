import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Button,
  Select,
  Space,
  Flex
} from 'antd';
import dayjs from 'dayjs';
import { ColumnConfig, SelectOption } from '@/service/TableConfig';

import type { FormProps } from 'antd';

export type DataAction = 'view' | 'add' | 'edit' | 'delete';

interface DataDetailViewProps {
  displayColumns: any[];
  data: any;
  handleDataChange: (action: DataAction, data: any) => Promise<void>;
  handleShowAudit: (id: string) => void;
}

export type DataDetailViewRef = {};

const DataDetailView: React.ForwardRefExoticComponent<
  DataDetailViewProps & React.RefAttributes<DataDetailViewRef>
> = React.forwardRef<DataDetailViewRef, DataDetailViewProps>(
  (props: DataDetailViewProps, ref: React.ForwardedRef<DataDetailViewRef>) => {
    const [t] = useTranslation();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const [dataAction, setDataAction] = useState<DataAction>('view');

    form.resetFields();
    if (dataAction === 'add') {
      form.setFieldsValue(null);
    } else {
      form.setFieldsValue({ ...props.data });
    }

    const renderFormField = (field: ColumnConfig) => {
      const getRules = () => {
        const rules: any[] = [];
        if (field.required) {
          rules.push({
            required: true,
            message: `Please input ${field.label}!`
          });
        }
        if (field.type === 'email') {
          rules.push({ type: 'email', message: 'Please enter a valid email!' });
        }
        return rules;
      };

      switch (field.type) {
        case 'number':
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? value : ''
              })}
            >
              <InputNumber
                disabled={field.readonly}
                style={{ width: '100%' }}
              />
            </Form.Item>
          );
        case 'time':
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? dayjs(value) : undefined
              })}
            >
              <TimePicker disabled={field.readonly} style={{ width: '100%' }} />
            </Form.Item>
          );
        case 'date':
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? dayjs(value) : undefined
              })}
            >
              <DatePicker disabled={field.readonly} style={{ width: '100%' }} />
            </Form.Item>
          );
        case 'datetime':
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? dayjs(value) : undefined
              })}
            >
              <DatePicker
                disabled={field.readonly}
                showTime
                style={{ width: '100%' }}
              />
            </Form.Item>
          );
        case 'email':
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? value : ''
              })}
            >
              <Input disabled={field.readonly} type="email" />
            </Form.Item>
          );
        case 'boolean':
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              valuePropName="checked"
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? value : ''
              })}
            >
              <Input disabled={field.readonly} type="checkbox" />
            </Form.Item>
          );
        case 'single_select':
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              valuePropName="checked"
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? value : ''
              })}
            >
              <Select
                disabled={field.readonly}
                options={field.options?.map((opt: SelectOption) => {
                  return { label: t(opt.key), value: opt.value };
                })}
              />
            </Form.Item>
          );

        default:
          return (
            <Form.Item
              key={field.key}
              name={field.key}
              label={field.title}
              rules={getRules()}
              getValueProps={(value) => ({
                value: value ? value : ''
              })}
            >
              <Input disabled={field.readonly} />
            </Form.Item>
          );
      }
    };

    const handleSubmit: FormProps['onFinish'] = async (values) => {
      setLoading(true);
      try {
        const formattedValues = { ...values };

        for (const [key, value] of Object.entries(formattedValues)) {
          if (value && typeof value === 'object' && value !== null) {
            if ('format' in value && typeof value.format === 'function') {
              const field = props.displayColumns.find((f) => f.name === key);
              if (field && field.type === 'datetime') {
                formattedValues[key] = value.format(`YYYY-MM-DDTHH:mm:ss`);
              } else if (field && field.type === 'time') {
                formattedValues[key] = value.format(`HH:mm:ss`);
              } else {
                formattedValues[key] = value.format('YYYY-MM-DD');
              }
            } else if (value instanceof Date) {
              const year = value.getFullYear();
              const month = String(value.getMonth() + 1).padStart(2, '0');
              const day = String(value.getDate()).padStart(2, '0');
              formattedValues[key] = `${year}-${month}-${day}`;
            }
          }
        }

        await props.handleDataChange(dataAction, formattedValues);
        setDataAction('view');
      } catch (error) {
        console.error('Error adding item:', error);
      } finally {
        setLoading(false);
      }
    };

    const handleAddNew = () => {
      form.resetFields();
      form.setFieldsValue(null);
      setDataAction('add');
    };

    const handleCancel = () => {
      setDataAction('view');
    };

    return (
      <div>
        <Flex
          align="center"
          gap={5}
          justify="space-between"
          style={{ marginBottom: 20 }}
        >
          <h3>Item Details</h3>
          <Flex gap={5} align="center" justify="space-between">
            <Button type="primary" onClick={handleAddNew}>
              New
            </Button>
            <Button
              type="primary"
              onClick={() => setDataAction('edit')}
              disabled={!props.data}
            >
              Edit
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => props.handleDataChange('delete', props.data)}
              disabled={!props.data}
            >
              Delete
            </Button>
            <Button
              type="default"
              onClick={() => props.handleShowAudit(props.data?.id)}
              disabled={!props.data}
            >
              Audit log
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <Form
            key={'data-form'}
            form={form}
            layout="vertical"
            disabled={loading || dataAction === 'view'}
            onFinish={handleSubmit}
            preserve={false}
            style={{ width: '100%' }}
          >
            {(dataAction === 'add' || dataAction === 'edit') && (
              <Flex gap={5}>
                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      Save
                    </Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                  </Space>
                </Form.Item>
              </Flex>
            )}
            {props.displayColumns.map((field) => renderFormField(field))}
          </Form>
        </Flex>
      </div>
    );
  }
);

export default DataDetailView;
