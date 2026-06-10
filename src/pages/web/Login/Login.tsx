import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/app/auth/useAuth';
import { IUser, ILogin } from '@/model/model';
import { Button, Form, Input, Flex, Segmented } from 'antd';
import { setStorageItem, clearStorageItem } from '@/service/Storage';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLoginOk = (user: IUser) => {
    setStorageItem('user', JSON.stringify(user));
    navigate('/');
  };

  const handleLoginError = (err: any) => {
    setError(t('invalidUsernameOrPassword'));
    clearStorageItem('user');
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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{t('login')}</h2>
        {error && <div className="error-message">{error}</div>}
        <Form onFinish={onFinish} form={form}>
          <Form.Item<FieldType>
            label={t('username')}
            name="username"
            rules={[{ required: true, message: t('pleaseInputUsername') }]}
            style={{ marginBottom: 12 }}
            colon={false}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
          >
            <Input style={{ height: '40px' }} />
          </Form.Item>
          <Form.Item<FieldType>
            label={t('password')}
            name="password"
            rules={[{ required: true, message: t('pleaseInputPassword') }]}
            hasFeedback
            validateStatus={error ? 'error' : ''}
            style={{ marginBottom: 12 }}
            colon={false}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
          >
            <Input.Password style={{ height: '40px' }} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Flex gap={15} justify="center" align="center">
              <Button type="primary" htmlType="submit">
                {t('submit')}
              </Button>
            </Flex>
          </Form.Item>
        </Form>
        <Flex gap={15} justify="center" align="center">
          <div className="language-switcher">
            <Segmented
              options={[
                { label: '简', value: 'zh_CN' },
                { label: '繁', value: 'zh_HK' },
                { label: 'En', value: 'en_US' }
              ]}
              value={i18n.language}
              onChange={changeLanguage}
            />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Login;
