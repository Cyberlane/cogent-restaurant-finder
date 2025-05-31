import { Group } from '@mantine/core';

import BudgetSelect from './BudgetSelect';
import CategorySelect from './CategorySelect';

const Filters = () => {
  return (
    <Group grow gap="sm" mb={10}>
      <CategorySelect />
      <BudgetSelect />
    </Group>
  );
};

export default Filters;
