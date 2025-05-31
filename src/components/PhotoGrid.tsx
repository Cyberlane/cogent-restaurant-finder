import { Image, SimpleGrid } from '@mantine/core';

import type { Photo } from '../types/foursquare.type';
import { assemblePhotoUrl } from '../utils/url';

export type PhotoGridProps = {
  photos: Photo[];
};

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
      {photos.map((photo) => (
        <Image key={photo.id} src={assemblePhotoUrl(photo, 360)} radius="md" />
      ))}
    </SimpleGrid>
  );
};

export default PhotoGrid;
