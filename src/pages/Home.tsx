import { Button, Container, Group, Loader, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import Filters from '../components/Filters/Filters';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';
import Sort from '../components/Sort';
import { useRestaurants } from '../hooks/useRestaurants';

const HomePage = () => {
  const { data: restaurants, isLoading } = useRestaurants();
  const { t } = useTranslation();

  return (
    <Container size="xl" px="md" py="xl">
      <Group justify="space-between" wrap="nowrap">
        <SearchBar />
        <Button radius="md">{t('search.randomSearch')}</Button>
      </Group>

      <Filters />
      <Sort />

      {isLoading || restaurants == null ? (
        <Loader />
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {restaurants.results.map((restaurant) => (
            <RestaurantCard key={restaurant.fsq_id} restaurant={restaurant} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default HomePage;
