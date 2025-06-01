import { Select } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useRestaurantStore } from '../../store/useRestaurantStore';
import type { Price } from '../../types/foursquare.type';

const BudgetSelect = () => {
  const { t } = useTranslation();
  const { minPrice, setBudgetPrice, clearPrices } = useRestaurantStore();
  const [budget, setBudget] = useState<string>(
    minPrice == null ? 'All' : ''.repeat(minPrice),
  );

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

  useEffect(() => {
    setBudget(minPrice == null ? 'All' : '¥'.repeat(minPrice));
  }, [minPrice]);

  return (
    <Select
      data={[
        { value: 'All', label: t('budget.all') },
        { value: '¥', label: '¥' },
        { value: '¥¥', label: '¥¥' },
        { value: '¥¥¥', label: '¥¥¥' },
        { value: '¥¥¥¥', label: '¥¥¥¥' },
      ]}
      label={t('filter.budget')}
      value={budget}
      onChange={setSelectedBudget}
      radius="md"
    />
  );
};

export default BudgetSelect;
