import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';
import { useBookingStore } from '../store/bookingStore';
import { movies } from '../data/movies';
import { theaters } from '../data/theaters';

export default function BookingConfirmation() {
  const navigate = useNavigate();
  const { bookingDetails, selectedSeats } = useBookingStore();
  
  if (!bookingDetails) {
    navigate('/');
    return null;
  }

  const movie = movies.find(m => m.id === bookingDetails.movieId);
  const theater = theaters.find(t => t.id === bookingDetails.theaterId);
  const showTime = theater?.showTimes.find(st => st.id === bookingDetails.showTimeId);
  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
            <p className="text-gray-600">Booking ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">{movie?.title}</h3>
              <div className="flex items-center text-gray-600 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(bookingDetails.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{showTime?.time}</span>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-medium mb-2">Theater</h4>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">{theater?.name}</p>
                  <p className="text-gray-600">{theater?.location}</p>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-medium mb-2">Seats</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSeats.map(seat => (
                  <span key={seat.id} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {seat.row}{seat.number}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Payment Details</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Ticket Price</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Convenience Fee</span>
                  <span>₹28</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Total Amount</span>
                  <span>₹{totalAmount + 28}</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full mt-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Book Another Movie
          </button>
        </div>
      </div>
    </div>
  );
}