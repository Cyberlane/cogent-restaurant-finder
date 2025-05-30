import { create } from 'zustand';

import type {
  Category,
  OpenAt,
  OpenNow,
  Price,
  SortBy,
} from '../types/foursquare.type';

type OpeningTime = Omit<OpenAt, 'detailed'>;

export type RestaurantStore = {
  // Category
  category: Category | undefined;
  setCategory: (val: Category) => void;
  clearCategory: () => void;
  // Prices
  minPrice: Price | undefined;
  maxPrice: Price | undefined;
  setBudgetPrice: (price: Price) => void;
  clearPrices: () => void;
  // Sort
  sortBy: SortBy | undefined;
  setSortBy: (val: SortBy) => void;
  clearSortBy: () => void;
  // Search
  search: string;
  setSearch: (val: string) => void;
  // Opening Hours
  openingTime: OpenAt | OpenNow | undefined;
  setOpenNow: (val: boolean) => void;
  setOpenSpecificTime: (val: OpeningTime) => void;
  clearOpening: () => void;
};

export const useRestaurantStore = create<RestaurantStore>((set) => ({
  category: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  sortBy: undefined,
  search: '',
  openingTime: undefined,
  setCategory: (val) => set({ category: val }),
  clearCategory: () => set({ category: undefined }),
  setBudgetPrice: (val) => set({ minPrice: val, maxPrice: val }),
  clearPrices: () => set({ minPrice: undefined, maxPrice: undefined }),
  setSortBy: (val) => set({ sortBy: val }),
  clearSortBy: () => set({ sortBy: undefined }),
  setSearch: (val) => set({ search: val }),
  setOpenNow: (val) => set({ openingTime: { detailed: false, now: val } }),
  setOpenSpecificTime: (val) =>
    set({ openingTime: { detailed: true, ...val } }),
  clearOpening: () => set({ openingTime: undefined }),
}));
