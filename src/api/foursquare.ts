import { ENV } from '../common/env';
import { Categories } from '../types/foursquare.type';
import type {
  Category,
  DayOfWeek,
  OpenAt,
  OpenNow,
  Price,
  Restaurant,
  SearchResults,
  SortBy,
} from '../types/foursquare.type';

const AllCategories = Object.values(Categories).join(',');
const AllFields = [
  'fsq_id',
  'name',
  'price',
  'geocodes',
  'location',
  'categories',
  'menu',
  'distance',
  'description',
  'email',
  'tel',
  'website',
  'verified',
  'social_media',
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
  category?: Category;
  sortBy?: SortBy;
};

export class FourSquareApi {
  private _baseUrl = 'https://api.foursquare.com/v3/places';
  private _dayMap: Record<DayOfWeek, number> = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
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
    category,
    sortBy,
  }: FetchRestaurantsProps) {
    // const params = new Record<string, string>();
    const params = new URLSearchParams({
      ll: `${ENV.VITE_OFFICE_LAT},${ENV.VITE_OFFICE_LNG}`,
      fields: AllFields,
    });

    if (category != null) {
      params.append('categories', `${Categories[category]}`);
    } else {
      params.append('categories', AllCategories);
    }

    params.append('radius', `${radius}`);
    params.append('limit', `${limit}`);

    if (query != null) {
      params.append('query', query);
    }

    if (minPrice != null) {
      params.append('min_price', `${minPrice}`);
    }

    if (maxPrice != null) {
      params.append('max_price', `${maxPrice}`);
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

  public async getPlaceDetails(fsq_id: string): Promise<Restaurant> {
    const params = new URLSearchParams({
      fields: AllFields,
    });
    const result = await this.get<Restaurant>({
      path: fsq_id,
      queryParams: params,
    });

    return result;
  }
}

export const FourSquareApiInstance = new FourSquareApi();
