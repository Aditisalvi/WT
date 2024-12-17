import { create } from 'zustand';

interface FilterState {
  language: string | null;
  genre: string | null;
  format: string | null;
  setLanguage: (language: string | null) => void;
  setGenre: (genre: string | null) => void;
  setFormat: (format: string | null) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  language: null,
  genre: null,
  format: null,
  setLanguage: (language) => set({ language }),
  setGenre: (genre) => set({ genre }),
  setFormat: (format) => set({ format }),
  clearFilters: () => set({ language: null, genre: null, format: null }),
}));