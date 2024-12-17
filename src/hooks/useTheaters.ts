import { useMemo } from 'react';
import { theaters } from '../data/theaters';
import { Theater, ShowTime } from '../types';

export function useTheaters() {
  return useMemo(() => ({
    theaters,
    getTheaterById: (id: string) => theaters.find(t => t.id === id),
    getShowTimeById: (theaterId: string, showTimeId: string) => {
      const theater = theaters.find(t => t.id === theaterId);
      return theater?.showTimes.find(st => st.id === showTimeId);
    },
  }), []);
}