export interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  language: string;
  genre: string[];
  duration: string;
  description: string;
  cast: string[];
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  showTimes: ShowTime[];
}

export interface ShowTime {
  id: string;
  time: string;
  price: {
    standard: number;
    premium: number;
  };
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  price: number;
  type: 'standard' | 'premium';
  status: 'available' | 'booked' | 'selected';
}

export interface BookingDetails {
  movieId: string;
  theaterId: string;
  showTimeId: string;
  seats: Seat[];
  totalAmount: number;
  date: string;
}