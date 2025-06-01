import { Group } from '@mantine/core';

import BudgetSelect from './BudgetSelect';
import CategorySelect from './CategorySelect';
import TimeSelect from './TimeSelect';

const Filters = () => {
  return (
    <>
      <Group grow gap="sm" mb={10}>
        <CategorySelect />
        <BudgetSelect />
      </Group>
      <Group>
        <TimeSelect />
      </Group>
    </>
  );
};

export default Filters;
