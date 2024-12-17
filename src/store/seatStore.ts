import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Seat } from '../types';

interface SeatState {
  seatMap: Seat[];
  initializeSeatMap: () => void;
  toggleSeat: (seatId: string) => void;
  getSelectedSeats: () => Seat[];
  clearSelection: () => void;
}

export const useSeatStore = create<SeatState>()(
  persist(
    (set, get) => ({
      seatMap: [],
      initializeSeatMap: () => {
        const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        const SEATS_PER_ROW = 12;
        
        const seatMap = ROWS.flatMap(row =>
          Array.from({ length: SEATS_PER_ROW }, (_, index) => ({
            id: `${row}${index + 1}`,
            row,
            number: index + 1,
            price: row < 'D' ? 400 : 200,
            type: row < 'D' ? 'premium' : 'standard',
            status: Math.random() > 0.8 ? 'booked' : 'available'
          }))
        );
        
        set({ seatMap });
      },
      toggleSeat: (seatId) => {
        set(state => ({
          seatMap: state.seatMap.map(seat =>
            seat.id === seatId && seat.status !== 'booked'
              ? { ...seat, status: seat.status === 'selected' ? 'available' : 'selected' }
              : seat
          )
        }));
      },
      getSelectedSeats: () => {
        return get().seatMap.filter(seat => seat.status === 'selected');
      },
      clearSelection: () => {
        set(state => ({
          seatMap: state.seatMap.map(seat =>
            seat.status === 'selected' ? { ...seat, status: 'available' } : seat
          )
        }));
      },
    }),
    {
      name: 'seat-storage',
    }
  )
);