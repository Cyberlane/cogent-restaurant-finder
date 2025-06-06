import { NavLink, Paper } from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export type WebsiteProps = {
  website: string | undefined;
};

const Website = ({ website }: WebsiteProps) => {
  const { t } = useTranslation();
  if (website == null) {
    return null;
  }

  return (
    <Paper shadow="md" p="md" mb="md">
      <NavLink
        href={website}
        target="_blank"
        leftSection={<IconWorld style={{ marginRight: '8px' }} />}
        label={t('overview.website')}
        variant="filled"
        active
      />
    </Paper>
  );
};

export default Website;
