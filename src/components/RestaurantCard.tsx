import { Button, Card, Group, Image, Rating, Text } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import type { Restaurant } from '../types/foursquare.type';
import { assemblePhotoUrl } from '../utils/url';

export type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = (props: RestaurantCardProps) => {
  const { restaurant } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [photo] = restaurant.photos ?? [];
  const photoUrl = photo ? assemblePhotoUrl(photo, 320) : null;

  return (
    <Card withBorder radius="md" shadow="sm" p="md">
      {photoUrl == null ? null : <Image src={photoUrl} h={160} radius="sm" />}
      <Text fw={600} size="lg" mt="sm">
        {restaurant.name}
      </Text>
      <Text size="sm" c="dimmed">
        {restaurant.menu} • {restaurant.price}
      </Text>
      <Group gap={4} mt="xs">
        <Rating value={restaurant.rating ?? 0} readOnly size="sm" />
        <Text size="xs" c="dimmed">
          ({restaurant.rating ?? t('rating.unrated')})
        </Text>
      </Group>
      <Button
        mt="md"
        fullWidth
        variant="light"
        onClick={() =>
          navigate({
            to: '/$id',
            params: { id: restaurant.fsq_id },
          })
        }
      >
        {t('card.viewDetails')}
      </Button>
    </Card>
  );
};

export default RestaurantCard;
