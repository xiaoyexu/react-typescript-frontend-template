import React, { useState, useEffect } from 'react';
import { Modal, Spin, Empty, Descriptions, Typography, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { getSystemInfo, ISystemInfoResponse } from '@/api/modules/SystemInfo';

const { Text } = Typography;

interface VersionInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const VersionInfoModal: React.FC<VersionInfoModalProps> = ({
  open,
  onClose
}) => {
  const [t] = useTranslation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ISystemInfoResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open && !data) {
      fetchInfo();
    }
  }, [open]);

  const fetchInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getSystemInfo({}, { loading: false });
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch version info'
      );
    } finally {
      setLoading(false);
    }
  };

  const backendItems = [
    {
      key: 'commitMessage',
      label: t('commitMessage'),
      children: (
        <Text copyable style={{ fontFamily: 'Monaco, Consolas, monospace' }}>
          {data?.git.commit.message.short || '-'}
        </Text>
      ),
      span: 2
    },
    {
      key: 'userName',
      label: t('userName'),
      children: <Text copyable>{data?.git.commit.user.name || '-'}</Text>,
      span: 1
    },
    {
      key: 'buildTime',
      label: t('buildTime'),
      children: <Text>{data?.build.time || '-'}</Text>,
      span: 1
    },
    {
      key: 'buildVersion',
      label: t('buildVersion'),
      children: (
        <Text copyable style={{ fontFamily: 'Monaco, Consolas, monospace' }}>
          {data?.build.version || '-'}
        </Text>
      ),
      span: 1
    },
    {
      key: 'buildArtifact',
      label: t('buildArtifact'),
      children: <Text>{data?.build.artifact || '-'}</Text>,
      span: 1
    },
    {
      key: 'buildGroup',
      label: t('buildGroup'),
      children: <Text>{data?.build.group || '-'}</Text>,
      span: 1
    }
  ];

  const frontendItems = [
    {
      key: 'version',
      label: t('version'),
      children: (
        <Text copyable style={{ fontFamily: 'Monaco, Consolas, monospace' }}>
          {__APP_VERSION__}
        </Text>
      ),
      span: 2
    },
    {
      key: 'gitCommit',
      label: t('gitCommit'),
      children: (
        <Text copyable style={{ fontFamily: 'Monaco, Consolas, monospace' }}>
          {__GIT_COMMIT__}
        </Text>
      ),
      span: 1
    },
    {
      key: 'branch',
      label: t('branch'),
      children: <Text>{__GIT_BRANCH__}</Text>,
      span: 1
    },
    {
      key: 'buildTime',
      label: t('buildTime'),
      children: <Text>{new Date(__BUILD_TIME__).toLocaleString()}</Text>,
      span: 1
    },
    {
      key: 'environment',
      label: t('environment'),
      children: <Text>{__APP_ENV__}</Text>,
      span: 1
    }
  ];

  return (
    <Modal
      title={t('versionInfo')}
      open={open}
      onCancel={onClose}
      footer={null}
      width={700}
      bodyStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
    >
      {loading && (
        <div style={{ textAlign: 'center', padding: 40 }}>
          <Spin size="large" />
        </div>
      )}

      {error && (
        <Empty
          description={<span style={{ color: '#ff4d4f' }}>{error}</span>}
        />
      )}

      {data && !loading && (
        <>
          <Card
            size="small"
            title={t('backendInfo')}
            style={{ marginBottom: 16 }}
          >
            <Descriptions
              bordered
              column={2}
              size="small"
              items={backendItems}
            />
          </Card>

          <Card size="small" title={t('frontendInfo')}>
            <Descriptions
              bordered
              column={2}
              size="small"
              items={frontendItems}
            />
          </Card>
        </>
      )}
    </Modal>
  );
};

export default VersionInfoModal;
