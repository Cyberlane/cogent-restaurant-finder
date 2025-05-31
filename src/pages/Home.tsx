import { Container, Group, Loader } from '@mantine/core';

import Filters from '../components/Filters/Filters';
import RandomButton from '../components/RandomButton';
import SearchBar from '../components/SearchBar';
import Results from '../components/SearchResults';
import Sort from '../components/Sort';
import { useRestaurants } from '../hooks/useRestaurants';

const HomePage = () => {
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
        <Results results={restaurants} />
      )}
    </Container>
  );
};

export default HomePage;
