import { Group, SegmentedControl, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const Sort = () => {
  const { t } = useTranslation();

  return (
    <Group gap={4}>
      <Text size="sm">{t('sort.sortBy')}:</Text>
      <SegmentedControl
        // value={sortOption}
        // onChange={setSortOption}
        data={[
          { label: t('sort.ratings'), value: 'rating' },
          { label: t('sort.distance'), value: 'distance' },
        ]}
      />
    </Group>
  );
};

export default Sort;
