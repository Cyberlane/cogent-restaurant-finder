import { Timeline } from '@mantine/core';

import type { Tip } from '../../types/foursquare.type';
import CommentListItem from './CommentList.Item';

export type TipListProps = {
  restaurantId: string;
  tips: Tip[];
};

const CommentList = ({ restaurantId, tips }: TipListProps) => {
  return (
    <Timeline bulletSize={24} lineWidth={2}>
      {tips.map((tip) => (
        <CommentListItem
          key={`tips-${restaurantId}-${tip.created_at}`}
          tip={tip}
        />
      ))}
    </Timeline>
  );
};

export default CommentList;
