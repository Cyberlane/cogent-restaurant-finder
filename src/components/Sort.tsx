import { Group, SegmentedControl, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useRestaurantStore } from '../store/useRestaurantStore';
import type { SortBy } from '../types/foursquare.type';

const Sort = () => {
  const { t } = useTranslation();
  const { setSortBy, sortBy } = useRestaurantStore();

  return (
    <Group gap={4}>
      <Text size="sm">{t('sort.sortBy')}:</Text>
      <SegmentedControl
        value={sortBy}
        onChange={(val) => setSortBy(val as SortBy)}
        color="blue"
        mb={10}
        data={[
          { label: t('sort.relevance'), value: 'relevance' },
          { label: t('sort.ratings'), value: 'rating' },
          { label: t('sort.distance'), value: 'distance' },
          { label: t('sort.popularity'), value: 'popularity' },
        ]}
      />
    </Group>
  );
};

export default Sort;
