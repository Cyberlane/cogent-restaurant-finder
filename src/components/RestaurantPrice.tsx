import { Text } from '@mantine/core';
import * as constants from '../constants';

export type RestaurantPriceProps = {
  price: number | undefined;
};

const RestaurantPrice = ({ price }: RestaurantPriceProps) => {
  const priceRange = price ?? 0;
  return (
    <Text mt="sm" size="sm">
      {constants.JPY.repeat(priceRange)}
      <span style={{ color: 'var(--mantine-color-dimmed)' }}>
        {constants.JPY.repeat(4 - priceRange)}
      </span>
    </Text>
  );
};

export default RestaurantPrice;
