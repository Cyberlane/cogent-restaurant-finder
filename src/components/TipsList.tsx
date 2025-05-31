import { Paper, Text } from '@mantine/core';

import type { Tip } from '../types/foursquare.type';

export type TipListProps = {
  restaurantId: string;
  tips: Tip[];
};

const TipList = ({ restaurantId, tips }: TipListProps) => {
  return tips.map((tip) => (
    <Paper
      key={`tips-${restaurantId}-${tip.created_at}`}
      withBorder
      p="sm"
      mt="sm"
    >
      <Text size="xs">{tip.created_at}</Text>
      <Text size="sm">{tip.text}</Text>
    </Paper>
  ));
};

export default TipList;
