import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import marker from '../assets/images/marker.svg';
import officeMarker from '../assets/images/office-marker.svg';
import { ENV } from '../common/env';
import type { Restaurant } from '../types/foursquare.type';

export type RestaurantMapProps = {
  restaurants: Restaurant[];
};

type RenderMarker = {
  id: string;
  position: [number, number];
  name: string;
  icon: L.Icon;
};

type FitBoundsProps = {
  bounds: [number, number][];
};

const MarkerIcon = new L.Icon({
  iconUrl: marker,
  iconSize: new L.Point(30, 30),
});

const OfficeIcon = new L.Icon({
  iconUrl: officeMarker,
  iconSize: new L.Point(30, 30),
});

const FitBounds = ({ bounds }: FitBoundsProps) => {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds);
  }, [map, bounds]);
  return null;
};

const RestaurantListMap = ({ restaurants }: RestaurantMapProps) => {
  const { t } = useTranslation();
  const markers: RenderMarker[] = [
    {
      id: 'cogent-labs-office',
      position: [ENV.VITE_OFFICE_LAT, ENV.VITE_OFFICE_LNG],
      name: t('map.officeName'),
      icon: OfficeIcon,
    },
  ];
  for (const restaurant of restaurants) {
    markers.push({
      id: restaurant.fsq_id,
      position: [
        restaurant.geocodes.main.latitude,
        restaurant.geocodes.main.longitude,
      ],
      name: restaurant.name,
      icon: MarkerIcon,
    });
  }

  const bounds = markers.map((m) => m.position);

  return (
    <div style={{ height: '500px' }}>
      <MapContainer
        zoom={1}
        style={{ width: '100%', height: '100%', zIndex: 0 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={marker.icon}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        <FitBounds bounds={bounds} />
      </MapContainer>
    </div>
  );
};

export default RestaurantListMap;
