import { Container, Group, Loader, Tabs } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import Filters from '../components/Filters/Filters';
import RestaurantListMap from '../components/Map';
import RandomButton from '../components/RandomButton';
import SearchBar from '../components/SearchBar';
import Results from '../components/SearchResults';
import Sort from '../components/Sort';
import { useRestaurants } from '../hooks/useRestaurants';

const HomePage = () => {
  const { t } = useTranslation();
  const { data: restaurants, isLoading } = useRestaurants();

  return (
    <Container size="xl" px="md" py="xl">
      <Group justify="space-between" wrap="nowrap">
        <SearchBar />
        <RandomButton />
      </Group>

      <Filters />
      <Sort />

      {isLoading || restaurants == null ? (
        <Loader />
      ) : (
        <Tabs mt="lg" defaultValue="list" keepMounted={false}>
          <Tabs.List>
            <Tabs.Tab value="list">{t('home.list')}</Tabs.Tab>
            <Tabs.Tab value="map">{t('home.map')}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="list" pt="xs">
            <Results results={restaurants} />
          </Tabs.Panel>
          <Tabs.Panel value="map" pt="xs">
            <RestaurantListMap restaurants={restaurants.results ?? []} />
          </Tabs.Panel>
        </Tabs>
      )}
    </Container>
  );
};

export default HomePage;
