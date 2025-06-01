import { Container, Group, Loader, NavLink, Tabs, Text } from '@mantine/core';
import { IconMap } from '@tabler/icons-react';
import { useParams } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import MarkedMap from '../components/MarkedMap';
import { restaurantToMarker } from '../components/MarkedMap.utils';
import PhotoGrid from '../components/PhotoGrid';
import Rating from '../components/Rating';
import RestaurantAddress from '../components/RestaurantAddress';
import RestaurantPrice from '../components/RestaurantPrice';
import TipList from '../features/Comments/CommentsList';
import Overview from '../features/RestaurantOverview/RestaurantOverview';
import { useRestaurantDetails } from '../hooks/useRestaurantDetails';

const DetailsPage = () => {
  const params = useParams({ from: '/$id' });
  const { data: details, isLoading } = useRestaurantDetails(params.id);
  const { t } = useTranslation();

  if (isLoading || details == null) {
    return (
      <Container size="sm" py="xl">
        <Loader />
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl">
      <Text size="xl" w={700} mt="md">
        {details.name}
      </Text>
      <Group mt="xs">
        <Rating rating={details.rating} />
        <Text size="sm" c="dimmed">
          ({details.rating})
        </Text>
      </Group>
      <RestaurantPrice price={details.price} />
      <RestaurantAddress location={details.location} />
      {/* keepMounted is needed to prevent a render issue with the map */}
      <Tabs mt="lg" defaultValue="overview" keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab value="overview">{t('tabs.overview')}</Tabs.Tab>
          <Tabs.Tab value="photos">{t('tabs.photos')}</Tabs.Tab>
          <Tabs.Tab value="tips">{t('tabs.tips')}</Tabs.Tab>
          <Tabs.Tab value="map">{t('tabs.map')}</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview" pt="xs">
          <Overview restaurant={details} />
        </Tabs.Panel>
        <Tabs.Panel value="photos" pt="xs">
          <PhotoGrid photos={details.photos ?? []} />
        </Tabs.Panel>
        <Tabs.Panel value="tips" pt="xs">
          <TipList restaurantId={params.id} tips={details.tips ?? []} />
        </Tabs.Panel>
        <Tabs.Panel value="map" pt="xs" style={{ height: '500px' }}>
          <NavLink
            mb="md"
            href={`https://www.google.com/maps?q=${details?.geocodes.main.latitude},${details?.geocodes.main.longitude}`}
            target="_blank"
            label={t('map.openInGoogle')}
            leftSection={<IconMap style={{ marginRight: '10px' }} />}
            active
          />
          <MarkedMap markers={[restaurantToMarker(details)]} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default DetailsPage;
