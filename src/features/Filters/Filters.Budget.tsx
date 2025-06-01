import { Select } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as constants from '../../constants';
import { useRestaurantStore } from '../../store/useRestaurantStore';
import type { Price } from '../../types/foursquare.type';

const priceRange = {
  cheap: constants.JPY,
  moderate: constants.JPY.repeat(2),
  expensive: constants.JPY.repeat(3),
  veryExpensive: constants.JPY.repeat(4),
};

const FilterBudget = () => {
  const { t } = useTranslation();
  const { minPrice, setBudgetPrice, clearPrices } = useRestaurantStore();
  const [budget, setBudget] = useState<string>(
    minPrice == null ? constants.ALL : ''.repeat(minPrice),
  );

  const setSelectedBudget = useCallback(
    (value: string | null) => {
      if (value == null || value === constants.ALL) {
        clearPrices();
      } else {
        // We are looking at the length as a way to go from ¥¥¥ to 3, etc
        const price = value.length as Price;
        setBudgetPrice(price);
      }
    },
    [clearPrices, setBudgetPrice],
  );

  useEffect(() => {
    setBudget(
      minPrice == null ? constants.ALL : constants.JPY.repeat(minPrice),
    );
  }, [minPrice]);

  return (
    <Select
      data={[
        { value: constants.ALL, label: t('budget.all') },
        { value: priceRange.cheap, label: priceRange.cheap },
        { value: priceRange.moderate, label: priceRange.moderate },
        { value: priceRange.expensive, label: priceRange.expensive },
        { value: priceRange.veryExpensive, label: priceRange.veryExpensive },
      ]}
      label={t('filter.budget')}
      value={budget}
      onChange={setSelectedBudget}
      radius="md"
    />
  );
};

export default FilterBudget;
