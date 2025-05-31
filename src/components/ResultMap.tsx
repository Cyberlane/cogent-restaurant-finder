import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useTranslation } from 'react-i18next';
import { ENV } from '../common/env';
import type { Restaurant } from '../types/foursquare.type';

export type RestaurantMapProps = {
  restaurants: Restaurant[];
};

type RenderMarker = {
  id: string;
  position: [number, number];
  name: string;
};

type FitBoundsProps = {
  bounds: [number, number][];
};

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
    });
  }

  const bounds = markers.map((m) => m.position);

  return (
    <div style={{ height: '500px' }}>
      <MapContainer
        zoom={1}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        <FitBounds bounds={bounds} />
      </MapContainer>
    </div>
  );
};

export default RestaurantListMap;
