import MarkedMap, { type MapMarker } from '../../components/MarkedMap';
import {
  officeMarker,
  restaurantToMarker,
} from '../../components/MarkedMap.utils';
import { useRestaurants } from '../../hooks/useRestaurants';

const SearchResultsMap = () => {
  const { data } = useRestaurants();
  const markers: MapMarker[] = [];
  const restaurants = data?.results ?? [];

  for (const restaurant of restaurants) {
    markers.push(restaurantToMarker(restaurant));
  }
  // We add this after, so it renders on top of the others when there are multiple
  markers.push(officeMarker);

  return <MarkedMap markers={markers} />;
};

export default SearchResultsMap;
