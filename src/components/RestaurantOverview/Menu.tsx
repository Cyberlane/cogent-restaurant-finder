import { Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const Menu = ({ menu }: { menu: string | undefined }) => {
  const { t } = useTranslation();
  if (menu == null) {
    return null;
  }
  return (
    <Text>
      {t('overview.menu')}:{' '}
      <a href={menu} target="_blank" rel="noreferrer">
        {menu}
      </a>
    </Text>
  );
};

export default Menu;
