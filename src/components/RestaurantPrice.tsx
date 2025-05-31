import { Text } from '@mantine/core';

export type RestaurantPriceProps = {
  price: number | undefined;
};

const RestaurantPrice = ({ price }: RestaurantPriceProps) => {
  const priceRange = price ?? 0;
  return (
    <Text mt="sm" size="sm">
      {'¥'.repeat(priceRange)}
      <span style={{ color: 'var(--mantine-color-dimmed)' }}>
        {'¥'.repeat(4 - priceRange)}
      </span>
    </Text>
  );
};

export default RestaurantPrice;
