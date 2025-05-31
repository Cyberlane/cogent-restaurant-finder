import { Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useRestaurantStore } from '../../store/useRestaurantStore';
import BudgetSelect from './BudgetSelect';
import CategorySelect from './CategorySelect';

const Filters = () => {
  const {
    category,
    setCategory,
    clearCategory,
    minPrice,
    setBudgetPrice,
    clearPrices,
  } = useRestaurantStore();
  const { t } = useTranslation();

  return (
    <Group grow gap="sm">
      <CategorySelect
        category={category}
        clearCategory={clearCategory}
        setCategory={setCategory}
        t={t}
      />
      <BudgetSelect
        minPrice={minPrice}
        clearPrices={clearPrices}
        setBudgetPrice={setBudgetPrice}
        t={t}
      />
    </Group>
  );
};

export default Filters;
