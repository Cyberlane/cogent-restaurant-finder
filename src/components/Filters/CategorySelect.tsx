import { Select } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useRestaurantStore } from '../../store/useRestaurantStore';
import type { Category } from '../../types/foursquare.type';

const CategorySelect = () => {
  const { t } = useTranslation();
  const { category, clearCategory, setCategory } = useRestaurantStore();
  const [selected, setSelected] = useState<string>(
    category == null ? 'All' : category,
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

  useEffect(() => {
    setSelected(category == null ? 'All' : category);
  }, [category]);

  return (
    <Select
      data={[
        { value: 'All', label: t('category.all') },
        { value: 'Restaurant', label: t('category.restaurant') },
        { value: 'Food Court', label: t('category.foodCourt') },
        { value: 'Food Truck', label: t('category.foodTruck') },
        { value: 'Food Stand', label: t('category.foodStand') },
      ]}
      label={t('filter.category')}
      value={selected}
      onChange={setSelectedCategory}
      radius="md"
    />
  );
};

export default CategorySelect;
