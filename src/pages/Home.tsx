import { Container, Fieldset, Group, Tabs } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import Filters from '../features/Filters/Filters';
import RandomButton from '../features/RandomRestaurant/RandomButton';
import SearchBar from '../features/Search/SearchBar';
import SearchResults from '../features/SearchResults/SearchResults.List';
import RestaurantListMap from '../features/SearchResults/SearchResults.Map';
import Sort from '../features/Sort/Sort';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container size="xl" px="md" py="xl">
      <Fieldset legend="Search">
        <Group justify="space-between" wrap="nowrap">
          <SearchBar />
          <RandomButton />
        </Group>
      </Fieldset>
      <Fieldset legend="Filters">
        <Filters />
      </Fieldset>
      <Fieldset legend="Sort">
        <Sort />
      </Fieldset>
      <Tabs mt="lg" defaultValue="list" keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab value="list">{t('home.list')}</Tabs.Tab>
          <Tabs.Tab value="map">{t('home.map')}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="list" pt="xs">
          <SearchResults />
        </Tabs.Panel>
        <Tabs.Panel value="map" pt="xs">
          <RestaurantListMap />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default HomePage;
