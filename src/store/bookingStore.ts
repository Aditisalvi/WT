import { create } from 'zustand';
import { BookingDetails, Seat } from '../types';

interface BookingStore {
  selectedSeats: Seat[];
  bookingDetails: BookingDetails | null;
  setSelectedSeats: (seats: Seat[]) => void;
  setBookingDetails: (details: BookingDetails) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  selectedSeats: [],
  bookingDetails: null,
  setSelectedSeats: (seats) => set({ selectedSeats: seats }),
  setBookingDetails: (details) => set({ bookingDetails: details }),
  clearBooking: () => set({ selectedSeats: [], bookingDetails: null }),
}));