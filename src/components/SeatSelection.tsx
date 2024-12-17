import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSeatStore } from '../store/seatStore';
import { useBookingStore } from '../store/bookingStore';
import { useAuthStore } from '../store/authStore';

const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export default function SeatSelection() {
  const navigate = useNavigate();
  const { user, openLoginModal } = useAuthStore();
  const { seatMap, initializeSeatMap, toggleSeat, getSelectedSeats } = useSeatStore();
  const { setSelectedSeats } = useBookingStore();

  useEffect(() => {
    initializeSeatMap();
  }, []);

  const getSeatStatus = (status: string) => {
    switch (status) {
      case 'booked':
        return 'bg-gray-400 cursor-not-allowed';
      case 'selected':
        return 'bg-green-500 text-white';
      default:
        return 'bg-white hover:bg-gray-100';
    }
  };

  const handleSeatClick = (seatId: string) => {
    if (!user) {
      openLoginModal();
      return;
    }
    toggleSeat(seatId);
  };

  const selectedSeats = getSelectedSeats();
  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handleProceed = () => {
    if (selectedSeats.length === 0) return;
    setSelectedSeats(selectedSeats);
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="w-full h-16 bg-gray-300 rounded-lg mb-12 flex items-center justify-center text-gray-600">
            SCREEN
          </div>

          <div className="space-y-4">
            {ROWS.map((row) => (
              <div key={row} className="flex items-center space-x-2">
                <span className="w-6 text-center font-medium">{row}</span>
                <div className="flex-1 grid grid-cols-12 gap-2">
                  {seatMap
                    .filter((seat) => seat.row === row)
                    .map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatClick(seat.id)}
                        disabled={seat.status === 'booked'}
                        className={`w-8 h-8 rounded-t-lg text-sm font-medium ${getSeatStatus(
                          seat.status
                        )}`}
                      >
                        {seat.number}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-white border rounded mr-2"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
              <span>Booked</span>
            </div>
          </div>

          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">
                  Selected Seats: {selectedSeats.length}
                </p>
                <p className="text-gray-600">Total Amount: ₹{totalAmount}</p>
              </div>
              <button
                onClick={handleProceed}
                disabled={selectedSeats.length === 0}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}