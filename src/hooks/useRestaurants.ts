import { useQuery } from '@tanstack/react-query';

import { FourSquareApiInstance } from '../api/foursquare';
import { useRestaurantStore } from '../store/useRestaurantStore';

export const useRestaurants = () => {
  const { minPrice, maxPrice, sortBy, search, openingTime, category } =
    useRestaurantStore();
  const openKey = JSON.stringify({ openingTime });

  const query = useQuery({
    queryKey: ['search', minPrice, maxPrice, sortBy, search, openKey, category],
    queryFn: () =>
      FourSquareApiInstance.findRestaurants({
        query: search,
        minPrice,
        maxPrice,
        category,
        sortBy,
        open: openingTime,
      }),
    staleTime: 1000 * 60 * 60, // 1 hour of cache
    refetchOnWindowFocus: false, // personal choice, I find this annoying on websites
  });

  return query;
};
