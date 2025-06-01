import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

import type { Photo } from '../types/foursquare.type';
import { assemblePhotoUrl } from '../utils/url';

export type PhotoCarouselProps = {
  photos: Photo[];
  height: number;
};

const PhotoCarousel = ({ photos, height }: PhotoCarouselProps) => {
  if (photos.length === 0) {
    return null;
  }

  const urls = photos.map((p) => assemblePhotoUrl(p, height * 2));

  return (
    <Carousel withIndicators height={height}>
      {urls.map((url) => (
        <Carousel.Slide key={url}>
          <Image src={url} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
