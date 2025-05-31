import { Text } from '@mantine/core';

import type { Location } from '../types/foursquare.type';

export type RestaurantAddressProps = {
  location: Location | undefined;
};

const RestaurantAddress = ({ location }: RestaurantAddressProps) => {
  if (location?.formatted_address == null) {
    return null;
  }
  return (
    <Text mt="sm" size="sm" c="dimmed">
      {location.formatted_address}
    </Text>
  );
};

export default RestaurantAddress;
