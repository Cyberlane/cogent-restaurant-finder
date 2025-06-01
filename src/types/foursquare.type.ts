export type SearchResults = {
  results: Restaurant[];
};

export type Restaurant = {
  fsq_id: string;
  name: string;
  geocodes: GeoCodeResult;
  categories: CategoryResult[];
  photos?: Photo[];
  tips?: Tip[];
  menu?: string;
  location?: Location;
  rating?: number; // 0.0 - 10.0
  price?: Price;
  distance: number;
  link: string; // hypermedia for details
  stats?: {
    total_photos: number;
    total_ratings: number;
    total_tips: number;
  };
  hours: {
    display: string;
    is_local_holiday: boolean;
    open_now: boolean;
    regular?: RegularHours[];
  };
  hours_popular: RegularHours[];
  tastes?: string[];
  website?: string;
  features?: {
    food_and_drink?: {
      meals: Meals;
    };
    services: Services;
    payment?: Payment;
  };
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

export type Services = {
  delivery: boolean;
  takeout: boolean;
};

export type Payment = {
  credit_cards: {
    accepts_credit_cards: boolean;
    amex: boolean;
  };
};

export type Meals = {
  bar_snacks: boolean;
  breakfast: boolean;
  brunch: boolean;
  dessert: boolean;
  dinner: boolean;
  happy_hour: boolean;
  lunch: boolean;
  tasting_menu: boolean;
};

export type RegularHours = {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  open: string;
  close: string;
};

// Price range between 1 (most affordable) and 4 (most expensive)
export type Price = 1 | 2 | 3 | 4;
export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
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

export type Photo = {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip;
};

export type Tip = {
  created_at: string;
  text: string;
};

export type Location = {
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
