import { useQuery } from '@tanstack/react-query';

import { FourSquareApiInstance } from '../api/foursquare';

export const useRestaurantPhotos = (fsq_id: string) => {
  const query = useQuery({
    queryKey: ['photos', fsq_id],
    queryFn: () => FourSquareApiInstance.getPlacePhotos(fsq_id),
    staleTime: 1000 * 60 * 60, // 1 hour of cache
    refetchOnWindowFocus: false, // personal choice
  });

  return query;
};
