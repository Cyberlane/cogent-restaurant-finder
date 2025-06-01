import { Carousel } from '@mantine/carousel';
import { Button, Card, Group, Image, Text } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import type { Restaurant } from '../types/foursquare.type';
import { assemblePhotoUrl } from '../utils/url';
import Rating from './Rating';

export type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = (props: RestaurantCardProps) => {
  const { restaurant } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const photos = restaurant.photos ?? [];
  const photoUrls = photos.map((p) => assemblePhotoUrl(p, 320));

  return (
    <Card withBorder radius="md" shadow="sm" p="md">
      <Text fw={600} size="lg" mb="sm">
        {restaurant.name}
      </Text>
      <Carousel withIndicators height={160}>
        {photoUrls.map((url) => (
          <Carousel.Slide key={url}>
            <Image src={url} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Text size="sm" c="dimmed">
        {t('card.tips')}: {restaurant.stats?.total_tips ?? 0}
      </Text>
      <Group gap={4} mt="xs">
        <Rating rating={restaurant.rating} />
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
