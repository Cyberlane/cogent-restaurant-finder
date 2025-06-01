import type { Photo } from '../types/foursquare.type';
import PhotoCarousel from './PhotoCarousel';

export type PhotoGridProps = {
  photos: Photo[];
};

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  const height = 400;
  return <PhotoCarousel photos={photos} height={height} />;
};

export default PhotoGrid;
