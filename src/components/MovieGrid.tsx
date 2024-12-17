import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../types';
import { useFilterStore } from '../store/filterStore';

export default function MovieGrid() {
  const navigate = useNavigate();
  const { movies } = useMovies();
  const { language, genre, format } = useFilterStore();

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`);
  };

  if (movies.length === 0) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">No movies found</h2>
        <p className="text-gray-600">
          Try adjusting your filters to find more movies
        </p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">
        {language || genre || format ? 'Filtered Movies' : 'Recommended Movies'}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onClick={handleMovieClick}
          />
        ))}
      </div>
    </div>
  );
}