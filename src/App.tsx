import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickFilters from './components/QuickFilters';
import MovieGrid from './components/MovieGrid';
import MovieDetails from './components/MovieDetails';
import TheaterSelection from './components/TheaterSelection';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';
import BookingConfirmation from './components/BookingConfirmation';
import LoginModal from './components/auth/LoginModal';
import SignupModal from './components/auth/SignupModal';

function HomePage() {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickFilters />
        <MovieGrid />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:id/booking" element={<TheaterSelection />} />
          <Route path="/movie/:id/seats" element={<SeatSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        </Routes>
        <LoginModal />
        <SignupModal />
      </div>
    </Router>
  );
}

export default App;