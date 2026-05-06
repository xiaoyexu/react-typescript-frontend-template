import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login } from '../../api/modules/User';
import { ILoginResponse } from '@/api/types';
import { IUser, ILogin } from '@/model/model';
import { jwtDecode } from 'jwt-decode';
import { Button, Modal, Form, Input, Flex, Alert } from 'antd';
import { setStorageItem, clearStorageItem } from '@/service/Storage';

interface TokenPayload {
  username: string;
  displayName: string;
  role: string;
}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [t, _] = useTranslation();
  const navigate = useNavigate();

  const handleLoginOk = (user: IUser) => {
    setStorageItem('user', JSON.stringify(user));
    navigate('/');
  };

  const handleLoginError = (err: any) => {
    setError('Invalid username or password');
    clearStorageItem('user');
  };

  const onFinish = async (values: FieldType) => {
    if (values.username == null || values.password == null) {
      return;
    }

    setLoading(true);
    setError('');

    let loginData: ILogin = {
      username: values.username,
      password: values.password
    };

    // Call the actual login API
    login(loginData)
      .then((res: ILoginResponse) => {
        let responseData = res as ILoginResponse;
        let token = responseData.data;
        let accessToken = token?.accessToken || '';
        let refreshToken = token?.refreshToken || '';
        let result = jwtDecode<TokenPayload>(accessToken);
        let user: IUser = {
          username: result.username,
          displayName: result.displayName,
          role: result.role,
          accessToken: accessToken,
          refreshToken: refreshToken
        };
        handleLoginOk(user);
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
        <Form onFinish={onFinish}>
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
