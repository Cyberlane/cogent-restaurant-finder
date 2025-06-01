import { Select } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as constants from '../../constants';
import { Categories } from '../../constants';
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
        ...Object.entries(Categories).map(([name, value]) => ({
          value: name,
          label: t(value.key),
        })),
      ]}
      label={t('filter.category')}
      value={selected}
      onChange={setSelectedCategory}
      radius="md"
    />
  );
};

export default FilterCategory;
