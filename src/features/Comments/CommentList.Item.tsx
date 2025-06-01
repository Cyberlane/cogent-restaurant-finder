import { Text, Timeline } from '@mantine/core';
import { IconMessageDots } from '@tabler/icons-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import type { Tip } from '../../types/foursquare.type';

dayjs.extend(relativeTime);

type TipItemProps = {
  tip: Tip;
};

const CommentListItem = ({ tip }: TipItemProps) => {
  const { i18n } = useTranslation();
  const [timeAgo, setTimeAgo] = useState<string>(
    dayjs(tip.created_at).fromNow(),
  );

  useEffect(() => {
    dayjs.locale(i18n.language);
    setTimeAgo(dayjs(tip.created_at).fromNow());
  }, [i18n.language, tip]);

  return (
    <Timeline.Item bullet={<IconMessageDots size={12} />}>
      <Text c="dimmed" size="sm">
        {tip.text}
      </Text>
      <Text size="xs" mt={4}>
        {timeAgo}
      </Text>
    </Timeline.Item>
  );
};

export default CommentListItem;
