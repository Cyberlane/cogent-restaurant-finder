import { Card, Group, NavLink, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useFormatDistance } from '../hooks/useFormatDistance';
import type { Restaurant } from '../types/foursquare.type';
import PhotoCarousel from './PhotoCarousel';
import Rating from './Rating';

export type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = (props: RestaurantCardProps) => {
  const { restaurant } = props;
  const { t } = useTranslation();
  const formatDistance = useFormatDistance();

  const photos = restaurant.photos ?? [];

  return (
    <Card withBorder radius="md" shadow="sm" p="md">
      <a href={`/${restaurant.fsq_id}`}>
        <Text fw={600} size="lg" mb="xs" style={{ cursor: 'pointer' }}>
          {restaurant.name}
        </Text>
      </a>
      <Text size="sm" mb="sm">
        {formatDistance(restaurant.distance)}
      </Text>
      <PhotoCarousel photos={photos} height={160} />
      <Text size="sm" c="dimmed">
        {t('card.tips')}: {restaurant.stats?.total_tips ?? 0}
      </Text>
      <Group gap={4} mt="xs">
        <Rating rating={restaurant.rating} />
        <Text size="xs" c="dimmed">
          ({restaurant.rating ?? t('rating.unrated')})
        </Text>
      </Group>
      <NavLink
        href={`/${restaurant.fsq_id}`}
        label={t('card.viewDetails')}
        variant="filled"
        active
        mt="md"
        style={{ textAlign: 'center' }}
      />
    </Card>
  );
};

export default RestaurantCard;
