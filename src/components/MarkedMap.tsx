import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet';

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

export type MapMarker = {
  id: string;
  position: [number, number];
  name: string;
  icon: L.Icon;
};

export type MarkedMapProps = {
  markers: MapMarker[];
};

const MarkedMap = ({ markers }: MarkedMapProps) => {
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

export default MarkedMap;
