import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/app/auth/useAuth';
import { IUser, ILogin } from '@/model/model';
import { Button, Form, Input, Flex, Switch, Segmented } from 'antd';
import { setStorageItem, clearStorageItem } from '@/service/Storage';
import {
  ThemeMode,
  applyTheme,
  getStoredTheme,
  setStoredTheme
} from '@/service/Theme';

const SunIcon = () => (
  <svg
    className="theme-icon-svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 2.5V5M12 19V21.5M4.93 4.93L6.7 6.7M17.3 17.3L19.07 19.07M2.5 12H5M19 12H21.5M4.93 19.07L6.7 17.3M17.3 6.7L19.07 4.93"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="theme-icon-svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M15.5 3.8a8.7 8.7 0 1 0 4.7 14.7A8.1 8.1 0 0 1 15.5 3.8Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

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
  const [isVisible, setIsVisible] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getStoredTheme());

  const { login } = useAuth();

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    applyTheme(themeMode);
    setStoredTheme(themeMode);
  }, [themeMode]);

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
        setLoading(false);
      });
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="login-container">
      {/* Animated background elements */}
      <div className="login-bg">
        <div className="login-bg-shape login-bg-shape-1"></div>
        <div className="login-bg-shape login-bg-shape-2"></div>
        <div className="login-bg-shape login-bg-shape-3"></div>
      </div>

      <div className={`login-card ${isVisible ? 'login-card-visible' : ''}`}>
        <div className="login-header">
          <div className="login-logo">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="login-title">{t('login')}</h1>
          <p className="login-subtitle">Enterprise Management System</p>
        </div>

        {error && (
          <div className="login-error">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="12"
                y1="8"
                x2="12"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16" r="1" fill="currentColor" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <Form onFinish={onFinish} form={form} className="login-form-animated">
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: t('pleaseInputUsername') }]}
            colon={false}
          >
            <div className="login-input-wrapper">
              <div className="login-input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Input placeholder={t('username')} className="login-input" />
            </div>
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: t('pleaseInputPassword') }]}
            hasFeedback
            validateStatus={error ? 'error' : ''}
            colon={false}
          >
            <div className="login-input-wrapper">
              <div className="login-input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Input.Password
                placeholder={t('password')}
                className="login-input"
              />
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="login-submit-btn"
              block
            >
              {loading ? t('loggingIn') : t('submit')}
            </Button>
          </Form.Item>
        </Form>

        <div className="login-footer">
          <Flex gap={12} vertical align="center">
            <Switch
              checked={themeMode === 'dark-enterprise'}
              onChange={(checked) =>
                setThemeMode(checked ? 'dark-enterprise' : 'classic-enterprise')
              }
              checkedChildren={
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%'
                  }}
                >
                  <MoonIcon />
                </div>
              }
              unCheckedChildren={
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%'
                  }}
                >
                  <SunIcon />
                </div>
              }
              className="theme-icon-switch"
              aria-label={t('themeSwitch')}
            />
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
    </div>
  );
};

export default Login;
