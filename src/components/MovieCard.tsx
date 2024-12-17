import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types';
import { MovieRating } from './MovieRating';
import { MovieGenres } from './MovieGenres';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div 
      className="relative group cursor-pointer"
      onClick={() => onClick(movie)}
    >
      <div className="aspect-[2/3] overflow-hidden rounded-lg">
        <img 
          src={movie.imageUrl} 
          alt={movie.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-lg">{movie.title}</h3>
        <MovieRating rating={movie.rating} />
        <p className="text-sm text-gray-500">{movie.language}</p>
        <MovieGenres genres={movie.genre} />
      </div>
    </div>
  );
}