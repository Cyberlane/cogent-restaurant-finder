import { Group, Select } from '@mantine/core';
import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useRestaurantStore } from '../store/useRestaurantStore';
import {
  Categories,
  type Category,
  type Price,
} from '../types/foursquare.type';

const AllCategories = Object.keys(Categories);

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

  const selectedCategory = category == null ? 'All' : category;
  const selectedBudget = minPrice == null ? 'All' : ''.repeat(minPrice);

  const setSelectedBudget = useCallback(
    (value: string | null) => {
      if (value == null || value === 'All') {
        clearPrices();
      } else {
        const price = value.length as Price;
        setBudgetPrice(price);
      }
    },
    [clearPrices, setBudgetPrice],
  );

  const setSelectedCategory = useCallback(
    (value: string | null) => {
      if (value == null || value === 'All') {
        clearCategory();
      } else {
        setCategory(value as Category);
      }
    },
    [clearCategory, setCategory],
  );

  return (
    <Group grow gap="sm">
      <Select
        data={['All', ...AllCategories]}
        label={t('filter.category')}
        value={selectedCategory}
        onChange={setSelectedCategory}
        radius="md"
      />
      <Select
        data={['All', '¥', '¥¥', '¥¥¥', '¥¥¥¥']}
        label={t('filter.budget')}
        value={selectedBudget}
        onChange={setSelectedBudget}
        radius="md"
      />
    </Group>
  );
};

export default Filters;
