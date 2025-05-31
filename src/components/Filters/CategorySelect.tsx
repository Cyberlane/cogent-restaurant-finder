import { Select } from '@mantine/core';
import { useCallback } from 'react';

import type { Category } from '../../types/foursquare.type';

interface CategorySelectProps {
  category: Category | undefined;
  clearCategory: () => void;
  setCategory: (val: Category) => void;
  t: (key: string) => string;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  category,
  clearCategory,
  setCategory,
  t,
}) => {
  const selectedCategory = category == null ? 'All' : category;

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
    <Select
      data={[
        { value: 'All', label: t('category.all') },
        { value: 'Restaurant', label: t('category.restaurant') },
        { value: 'Food Court', label: t('category.foodCourt') },
        { value: 'Food Truck', label: t('category.foodTruck') },
        { value: 'Food Stand', label: t('category.foodStand') },
      ]}
      label={t('filter.category')}
      value={selectedCategory == null ? 'All' : selectedCategory}
      onChange={setSelectedCategory}
      radius="md"
    />
  );
};

export default CategorySelect;
