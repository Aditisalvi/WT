import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../store/bookingStore';
import { CreditCard, Calendar } from 'lucide-react';

export default function Payment() {
  const navigate = useNavigate();
  const { selectedSeats, bookingDetails } = useBookingStore();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Tickets ({selectedSeats.length})</span>
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

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <CreditCard className="h-5 w-5 mr-2" />
                <span>Credit/Debit Card</span>
              </label>
              {/* Add more payment methods as needed */}
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePayment}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Pay ₹{totalAmount + 28}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}