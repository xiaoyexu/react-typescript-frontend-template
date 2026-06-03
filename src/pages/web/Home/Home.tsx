import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Input, Flex, Select } from 'antd';
import CRUDView from '@/components/CRUDView';
import { getTables } from '@/service/TableConfig';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();

  const [activeTable, setActiveTable] = useState<string>('students');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [availableTables, setAvailableTables] = useState(getTables());

  const handleTableSelect = (tableId: string) => {
    setActiveTable(tableId);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  const handleTableNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setAvailableTables(getTables(e.target.value));
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          <Flex gap={15} justify="center" align="space-between">
            <h2>Admin User</h2>
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
            <button className="btn btn-secondary" onClick={handleLogout}>
              {t('logout')}
            </button>
          </Flex>
        </div>
      </header>

      <div className="admin-content">
        <div className="sidebar">
          <div className="search-box">
            <Input
              placeholder="Search tables..."
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
