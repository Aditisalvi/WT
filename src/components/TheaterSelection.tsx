import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { theaters } from '../data/theaters';
import { useBookingStore } from '../store/bookingStore';

export default function TheaterSelection() {
  const { id: movieId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const setBookingDetails = useBookingStore(state => state.setBookingDetails);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const handleShowTimeSelect = (theaterId: string, showTimeId: string) => {
    setBookingDetails({
      movieId: movieId!,
      theaterId,
      showTimeId,
      seats: [],
      totalAmount: 0,
      date: selectedDate.toISOString(),
    });
    navigate(`/movie/${movieId}/seats`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Date Selection */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {dates.map((date) => (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center p-3 rounded-lg min-w-[100px] ${
                  date.toDateString() === selectedDate.toDateString()
                    ? 'bg-red-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-sm">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                <span className="text-lg font-bold">{date.getDate()}</span>
                <span className="text-sm">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Theaters List */}
        <div className="space-y-6">
          {theaters.map((theater) => (
            <div key={theater.id} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{theater.name}</h3>
              <p className="text-gray-600 mb-4">{theater.location}</p>
              
              <div className="flex flex-wrap gap-4">
                {theater.showTimes.map((showTime) => (
                  <button
                    key={showTime.id}
                    onClick={() => handleShowTimeSelect(theater.id, showTime.id)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <span className="font-medium">{showTime.time}</span>
                    <div className="text-xs text-gray-500 mt-1">
                      ₹{showTime.price.standard} - ₹{showTime.price.premium}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}