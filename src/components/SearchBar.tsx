import { ActionIcon, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useRestaurantStore } from '../store/useRestaurantStore';

const SearchBar = () => {
  const { t } = useTranslation();
  const { setSearch } = useRestaurantStore();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      search: '',
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => setSearch(values.search))}
      style={{ flex: 1 }}
    >
      <TextInput
        placeholder={t('search.placeholder')}
        leftSection={<IconSearch />}
        radius="md"
        size="md"
        key={form.key('search')}
        rightSection={
          <ActionIcon type="submit">
            <IconArrowRight />
          </ActionIcon>
        }
        {...form.getInputProps('search')}
        styles={{ root: { flex: 1 } }}
      />
    </form>
  );
};

export default SearchBar;
