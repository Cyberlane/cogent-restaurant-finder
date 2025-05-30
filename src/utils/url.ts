import type { PhotoResult } from '../types/foursquare.type';

export const joinUrl = (prefix: string, suffix: string): string => {
  const trimmedPrefix = prefix.replace(/\/+$/, '');
  const trimmedSuffix = suffix.replace(/^\/+/, '');

  return `${trimmedPrefix}/${trimmedSuffix}`;
};

export const assemblePhotoUrl = (photo: PhotoResult, max: number): string => {
  const scaleFactor = max / photo.height;
  const scaledHeight = max;
  const scaledWidth = Math.floor(photo.width * scaleFactor);

  return `${photo.prefix}${scaledWidth}x${scaledHeight}${photo.suffix}`;
};
