import {
  Card,
  Container,
  Fieldset,
  Group,
  SimpleGrid,
  Skeleton,
  Tabs,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';

import Filters from '../components/Filters/Filters';
import RestaurantListMap from '../components/Map';
import RandomButton from '../components/RandomButton';
import SearchBar from '../components/SearchBar';
import Results from '../components/SearchResults';
import Sort from '../components/Sort';
import { useRestaurants } from '../hooks/useRestaurants';

const ListSkeleton = () => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      <Card>
        <Skeleton height={50} />
        <Skeleton height={20} mt={10} />
        <Skeleton height={160} mt={10} />
      </Card>
      <Card>
        <Skeleton height={50} />
        <Skeleton height={20} mt={10} />
        <Skeleton height={160} mt={10} />
      </Card>
    </SimpleGrid>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const { data: restaurants, isLoading } = useRestaurants();

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
          {isLoading || restaurants == null ? (
            <ListSkeleton />
          ) : (
            <Results results={restaurants} />
          )}
        </Tabs.Panel>
        <Tabs.Panel value="map" pt="xs">
          <RestaurantListMap restaurants={restaurants?.results ?? []} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default HomePage;
