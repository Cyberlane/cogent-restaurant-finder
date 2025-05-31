import { Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const Website = ({ website }: { website: string | undefined }) => {
  const { t } = useTranslation();
  if (website == null) {
    return null;
  }

  return (
    <Text>
      {t('overview.website')}:{' '}
      <a href={website} target="_blank" rel="noreferrer">
        {website}
      </a>
    </Text>
  );
};

export default Website;
