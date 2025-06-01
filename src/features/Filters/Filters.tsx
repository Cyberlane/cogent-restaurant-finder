import { SimpleGrid } from '@mantine/core';

import FilterBudget from './Filters.Budget';
import FilterCategory from './Filters.Category';
import FilterTimeOfWeek from './Filters.TimeOfWeek';

const Filters = () => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      <FilterCategory />
      <FilterBudget />
      <FilterTimeOfWeek />
    </SimpleGrid>
  );
};

export default Filters;
