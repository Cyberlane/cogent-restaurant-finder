import { useQuery } from '@tanstack/react-query';

import { FourSquareApiInstance } from '../api/foursquare';

export const useRestaurantDetails = (fsq_id: string) => {
  const query = useQuery({
    queryKey: ['details', fsq_id],
    queryFn: () => FourSquareApiInstance.getPlaceDetails(fsq_id),
    staleTime: 1000 * 60 * 60, // 1 hour of cache
    refetchOnWindowFocus: false, // personal choice
  });

  return query;
};
