import { Paper, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const OpenNow = ({ isOpen }: { isOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    <Paper shadow="md" p="md" mb="md">
      <Text size="md">
        {t('overview.currentStatus')}:{' '}
        {isOpen ? t('overview.open') : t('overview.closed')}
      </Text>
    </Paper>
  );
};

export default OpenNow;
