import { Select } from '@mantine/core';
import { useCallback } from 'react';

import type { Price } from '../../types/foursquare.type';

interface BudgetSelectProps {
  minPrice: Price | undefined;
  clearPrices: () => void;
  setBudgetPrice: (val: Price) => void;
  t: (key: string) => string;
}

const BudgetSelect: React.FC<BudgetSelectProps> = ({
  minPrice,
  clearPrices,
  setBudgetPrice,
  t,
}) => {
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

  return (
    <Select
      data={[
        { value: 'All', label: t('budget.all') },
        { value: '¥', label: t('budget.cheap') },
        { value: '¥¥', label: t('budget.moderate') },
        { value: '¥¥¥', label: t('budget.expensive') },
        { value: '¥¥¥¥', label: t('budget.veryExpensive') },
      ]}
      label={t('filter.budget')}
      value={selectedBudget}
      onChange={setSelectedBudget}
      radius="md"
    />
  );
};

export default BudgetSelect;
