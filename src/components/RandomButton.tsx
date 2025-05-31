import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useNavigate } from '@tanstack/react-router';
import { useRestaurants } from '../hooks/useRestaurants';
import type { Restaurant } from '../types/foursquare.type';
import { getRandomNumber } from '../utils/random';

const RandomButton = () => {
  const { t } = useTranslation();
  const { data: restaurants } = useRestaurants();
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    if (restaurants == null || restaurants.results.length === 0) {
      return;
    }
    const random = getRandomNumber(0, restaurants.results.length - 1);
    const selected: Restaurant = (restaurants.results[random] ??
      restaurants.results[0]) as Restaurant;
    navigate({
      to: '/$id',
      params: {
        id: selected.fsq_id,
      },
    });
  }, [navigate, restaurants]);

  return (
    <Button radius="md" onClick={onClick}>
      {t('search.randomSearch')}
    </Button>
  );
};

export default RandomButton;
