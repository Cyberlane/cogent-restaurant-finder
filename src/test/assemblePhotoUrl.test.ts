import { describe, expect, it } from 'vitest';

import type { Photo } from '../types/foursquare.type';
import { assemblePhotoUrl } from '../utils/url';

describe('assemblePhotoUrl', () => {
  it('should should never allow a height above the max', () => {
    const photo = {
      height: 1000,
      width: 200,
      prefix: 'https://www.google.com/',
      suffix: '/picture',
    } as Photo;
    expect(assemblePhotoUrl(photo, 500)).toBe(
      'https://www.google.com/100x500/picture',
    );
  });
});
