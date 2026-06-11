import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Input, Flex, Select, Button, Switch } from 'antd';
import CRUDView from '@/components/CRUDView';
import { useAuth } from '@/app/auth/useAuth';
import { getTables } from '@/service/TableConfig';
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

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  const { user, logout } = useAuth();

  const [activeTable, setActiveTable] = useState<string>('students');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const availableTables = useMemo(() => getTables(searchTerm), [searchTerm]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getStoredTheme());

  useEffect(() => {
    applyTheme(themeMode);
    setStoredTheme(themeMode);
  }, [themeMode]);

  const handleTableSelect = (tableId: string) => {
    setActiveTable(tableId);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  const handleTableNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>{t('adminDashboard')}</h1>
        <div className="user-info">
          <Flex gap={15} justify="center" align="space-between">
            <h2>{t('adminUser', { name: user?.username })}</h2>
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              options={[
                { value: 'zh_CN', label: '中文简体' },
                { value: 'zh_HK', label: '中文繁體' },
                { value: 'en_US', label: 'English' }
              ]}
              style={{ width: 120 }}
            />
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
            <button className="btn btn-secondary" onClick={handleLogout}>
              {t('logout')}
            </button>
          </Flex>
        </div>
      </header>

      <div className="admin-content">
        <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-toggle">
            <Button
              type="text"
              icon={isSidebarCollapsed ? <span>▶</span> : <span>◀</span>}
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="toggle-button"
            />
          </div>
          <div className="search-box">
            <Input
              placeholder={t('searchTables')}
              size="large"
              value={searchTerm}
              onChange={handleTableNameSearch}
              allowClear
            />
          </div>
          <nav className="table-list">
            {availableTables.map((table) => (
              <div
                key={table.id}
                className={`table-item ${activeTable === table.id ? 'active' : ''}`}
                onClick={() => handleTableSelect(table.id)}
              >
                <span className="table-icon">{table.icon}</span>
                <span className="table-name">{table.name}</span>
              </div>
            ))}
          </nav>
        </div>
        <div className="main-content">
          <CRUDView
            tableId={activeTable}
            tableName={
              availableTables.find((table) => table.id === activeTable)?.name ||
              'Unknown Table'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
