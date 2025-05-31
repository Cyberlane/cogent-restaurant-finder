import { Paper, SimpleGrid } from '@mantine/core';

import type { SearchResults } from '../types/foursquare.type';
import RestaurantCard from './RestaurantCard';

export type ResultsProps = {
  results: SearchResults;
};

const Results = ({ results }: ResultsProps) => {
  if (results.results.length === 0) {
    return (
      <Paper p="lg" shadow="xl">
        No Restaurants Found
      </Paper>
    );
  }
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {results.results.map((restaurant) => (
        <RestaurantCard key={restaurant.fsq_id} restaurant={restaurant} />
      ))}
    </SimpleGrid>
  );
};

export default Results;
