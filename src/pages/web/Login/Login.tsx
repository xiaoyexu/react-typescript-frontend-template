import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/app/auth/useAuth';
import { Button, Form, Input, Flex } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [t] = useTranslation();
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLoginError = (err: any) => {
    setError('Invalid username or password');
  };

  const onFinish = async (values: FieldType) => {
    if (values.username == null || values.password == null) {
      return;
    }

    setLoading(true);
    setError('');

    login?.(values.username, values.password)
      .then(() => {
        navigate('/');
      })
      .catch((err: any) => {
        handleLoginError(err);
      })
      .finally(() => {
        form.resetFields();
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <Form onFinish={onFinish} form={form}>
          <Form.Item<FieldType>
            label={t('username')}
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label={t('password')}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            hasFeedback
            validateStatus={error ? 'error' : ''}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Flex gap={15} justify="center" align="center">
              <Button type="primary" htmlType="submit">
                {t('submit')}
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
