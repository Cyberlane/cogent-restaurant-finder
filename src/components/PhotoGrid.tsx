import type { Photo } from '../types/foursquare.type';
import PhotoCarousel from './PhotoCarousel';

export type PhotoGridProps = {
  photos: Photo[];
  height?: number;
};

const PhotoGrid = ({ photos, height = 400 }: PhotoGridProps) => {
  return <PhotoCarousel photos={photos} height={height} />;
};

export default PhotoGrid;
