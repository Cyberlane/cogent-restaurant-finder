export type SearchResults = {
  results: Restaurant[];
};

export type Restaurant = {
  fsq_id: string;
  name: string;
  geocodes: GeoCodeResult;
  categories: CategoryResult[];
  photos?: PhotoResult[];
  tips?: TipResult[];
  menu?: string;
  location?: LocationResult;
  rating?: number; // 0.0 - 10.0
  price?: Price;
  distance: number;
  link: string; // hypermedia for details
};

export type Category =
  | 'Restaurant'
  | 'Food Court'
  | 'Food Truck'
  | 'Food Stand';
export const Categories: Record<Category, number> = {
  Restaurant: 13065,
  'Food Court': 13052,
  'Food Truck': 13054,
  'Food Stand': 13053,
};

// Price range between 1 (most affordable) and 4 (most expensive)
export type Price = 1 | 2 | 3 | 4;
export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wedsnesday'
  | 'Thurday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type OpenAt = {
  detailed: true;
  dayOfWeek: DayOfWeek;
  hour: number;
  minute: number;
};

export type OpenNow = {
  detailed: false;
  now: boolean;
};

export type SortBy = 'relevance' | 'rating' | 'distance' | 'popularity';

export type GeoCodeIdentity =
  | 'main'
  | 'roof'
  | 'drop_off'
  | 'front_door'
  | 'road';
export type GeoCodeValue = {
  latitude: number;
  longitude: number;
};

export type GeoCodeResult = {
  main: GeoCodeValue;
} & Partial<Record<Exclude<GeoCodeIdentity, 'main'>, GeoCodeValue>>;

export type CategoryResult = {
  id: number;
  name: string;
  short_name: string;
  plural_name: string;
};

export type PhotoResult = {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: TipResult;
};

export type TipResult = {
  id: string;
  created_at: string;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
};

export type LocationResult = {
  address: string;
  address_extended: string;
  admin_region: string;
  census_block: string;
  country: string;
  cross_stress: string;
  dma: string;
  formatted_address: string;
  locality: string;
  neighborhood: string[];
  po_box: string;
  post_town: string;
  postcode: string;
  region: string;
};
