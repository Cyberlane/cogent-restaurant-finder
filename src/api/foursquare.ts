import { ENV } from '../common/env';
import { Categories } from '../types/foursquare.type';
import type {
  DayOfWeek,
  OpenAt,
  OpenNow,
  Price,
  SearchResults,
  SortBy,
} from '../types/foursquare.type';

const AllCategories = Object.values(Categories).join(',');
const AllFields = [
  'fsq_id',
  'price',
  'menu',
  'description',
  'email',
  'tel',
  'website',
  'verified',
  'hours',
  'hours_popular',
  'rating',
  'stats',
  'photos',
  'tips',
  'tastes',
  'features',
].join(',');

export type OpeningTime = OpenAt | OpenNow;

type GetProps = {
  path: string;
  queryParams?: URLSearchParams;
};

export type FetchRestaurantsProps = {
  query?: string;
  minPrice?: Price;
  maxPrice?: Price;
  radius?: number; // Meters
  limit?: number;
  open?: OpeningTime;
  sortBy?: SortBy;
};

export class FourSquareApi {
  private _baseUrl = 'https://api.foursquare.com/v3/places';
  private _dayMap: Record<DayOfWeek, number> = {
    Monday: 1,
    Tuesday: 2,
    Wedsnesday: 3,
    Thurday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  private async get<T>({ path, queryParams }: GetProps) {
    const url = new URL(this._baseUrl);
    url.pathname = `${url.pathname}/${path}`;

    if (queryParams != null) {
      for (const [key, value] of queryParams.entries()) {
        url.searchParams.append(key, `${value}`);
      }
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: ENV.VITE_FOURSQUARE_API_KEY,
      },
    });

    if (!response.ok) {
      // This could be improved after looking better at their API documentation
      throw new Error(`An error occured with status code: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  }

  private ensureValidNumber(input: number, min: number, max: number): number {
    const rounded = Math.round(input);
    return Math.max(min, Math.min(max, rounded));
  }

  private formatOpeningTime(opening: OpenAt): string {
    const dow = this._dayMap[opening.dayOfWeek];
    const rawHour = this.ensureValidNumber(opening.hour, 0, 23);
    const rawMinute = this.ensureValidNumber(opening.minute, 0, 59);

    const hour = rawHour.toString().padStart(2, '0');
    const minute = rawMinute.toString().padStart(2, '0');
    return `${dow}T${hour}${minute}`;
  }

  public async findRestaurants({
    query,
    minPrice,
    maxPrice,
    radius = 1000,
    limit = 50, // API limit is 50
    open,
    sortBy,
  }: FetchRestaurantsProps) {
    // const params = new Record<string, string>();
    const params = new URLSearchParams({
      ll: `${ENV.VITE_OFFICE_LAT},${ENV.VITE_OFFICE_LNG}`,
      categories: AllCategories,
      fields: AllFields,
    });

    params.append('radius', `${radius}`);
    params.append('limit', `${limit}`);

    if (query != null) {
      params.append('query', query);
    }

    if (minPrice != null) {
      params.append('minPrice', `${minPrice}`);
    }

    if (maxPrice != null) {
      params.append('maxPrice', `${maxPrice}`);
    }

    if (open != null) {
      if (open.detailed) {
        const openAt = this.formatOpeningTime(open);
        params.append('open_at', openAt);
      } else {
        params.append('open_now', open.now ? 'true' : 'false');
      }
    }

    if (sortBy != null) {
      params.append('sort', sortBy);
    }

    const result = await this.get<SearchResults>({
      path: 'search',
      queryParams: params,
    });

    return result;
  }

  public async getPlaceDetails(fsq_id: string): Promise<unknown> {
    const result = await this.get<unknown>({
      path: fsq_id,
    });

    return result;
  }

  public async getPlacePhotos(fsq_id: string): Promise<unknown> {
    const result = await this.get<unknown>({
      path: `${fsq_id}/photos`,
    });

    return result;
  }
}

export const FourSquareApiInstance = new FourSquareApi();
