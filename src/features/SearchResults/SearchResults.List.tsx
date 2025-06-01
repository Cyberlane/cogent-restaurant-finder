import { Paper, SimpleGrid } from '@mantine/core';

import { useRestaurants } from '../../hooks/useRestaurants';
import type { SearchResults } from '../../types/foursquare.type';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import SearchResultSkeleton from './SearchResults.Skeleton';

export type ResultsProps = {
  results: SearchResults;
};

const Results = () => {
  const { data: restaurants, isLoading } = useRestaurants();

  if (isLoading) {
    return <SearchResultSkeleton />;
  }

  if (restaurants == null || restaurants.results.length === 0) {
    return (
      <Paper p="lg" shadow="xl">
        No Restaurants Found
      </Paper>
    );
  }
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {restaurants.results.map((restaurant) => (
        <RestaurantCard key={restaurant.fsq_id} restaurant={restaurant} />
      ))}
    </SimpleGrid>
  );
};

export default Results;
