import L from 'leaflet';

import duotoneMarker from '../assets/images/duotone-marker.svg';
import marker from '../assets/images/marker.svg';
import { ENV } from '../common/env';
import type { Restaurant } from '../types/foursquare.type';
import type { MapMarker } from './MarkedMap';

export const MarkerIcon = new L.Icon({
  iconUrl: marker,
  iconSize: new L.Point(30, 30),
});

export const OfficeIcon = new L.Icon({
  iconUrl: duotoneMarker,
  iconSize: new L.Point(30, 30),
});

export const officeMarker: MapMarker = {
  id: 'cogent-labs-office',
  position: [ENV.VITE_OFFICE_LAT, ENV.VITE_OFFICE_LNG],
  name: 'Cogent Labs',
  icon: OfficeIcon,
};

export const restaurantToMarker = (restaurant: Restaurant): MapMarker => ({
  id: restaurant.fsq_id,
  position: [
    restaurant.geocodes.main.latitude,
    restaurant.geocodes.main.longitude,
  ],
  name: restaurant.name,
  icon: MarkerIcon,
});
