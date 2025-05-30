import { ActionIcon, TextInput } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

const onSearch = (x: string) => {};

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <TextInput
      placeholder={t('search.placeholder')}
      leftSection={<IconSearch />}
      onKeyDown={(e) => e.key === 'Enter' && onSearch(e.currentTarget.value)}
      radius="md"
      size="md"
      rightSection={
        <ActionIcon>
          <IconArrowRight />
        </ActionIcon>
      }
      styles={{ root: { flex: 1 } }}
    />
  );
};

export default SearchBar;
