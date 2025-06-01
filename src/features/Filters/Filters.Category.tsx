import { Select } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as constants from '../../constants';
import { useRestaurantStore } from '../../store/useRestaurantStore';
import type { Category } from '../../types/foursquare.type';

const FilterCategory = () => {
  const { t } = useTranslation();
  const { category, clearCategory, setCategory } = useRestaurantStore();
  const [selected, setSelected] = useState<string>(
    category == null ? constants.ALL : category,
  );

  const setSelectedCategory = useCallback(
    (value: string | null) => {
      if (value == null || value === constants.ALL) {
        clearCategory();
      } else {
        setCategory(value as Category);
      }
    },
    [clearCategory, setCategory],
  );

  useEffect(() => {
    setSelected(category == null ? constants.ALL : category);
  }, [category]);

  return (
    <Select
      data={[
        { value: constants.ALL, label: t('category.all') },
        {
          value: constants.CATEGORY_RESTAURANT,
          label: t('category.restaurant'),
        },
        {
          value: constants.CATEGORY_FOOD_COURT,
          label: t('category.foodCourt'),
        },
        {
          value: constants.CATEGORY_FOOD_TRUCK,
          label: t('category.foodTruck'),
        },
        {
          value: constants.CATEGORY_FOOD_STAND,
          label: t('category.foodStand'),
        },
      ]}
      label={t('filter.category')}
      value={selected}
      onChange={setSelectedCategory}
      radius="md"
    />
  );
};

export default FilterCategory;
