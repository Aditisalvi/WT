import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[400px] bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2000)',
          filter: 'brightness(0.4)'
        }}
      />
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Entertainment
          </h1>
          <p className="text-xl text-gray-300">
            Movies
          </p>
        </div>
      </div>
    </div>
  );
}