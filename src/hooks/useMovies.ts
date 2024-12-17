import { useMemo } from 'react';
import { useFilterStore } from '../store/filterStore';
import { movies } from '../data/movies';
import { Movie } from '../types';

export function useMovies() {
  const { language, genre, format } = useFilterStore();

  return useMemo(() => {
    let filteredMovies = [...movies];

    if (language) {
      filteredMovies = filteredMovies.filter(movie => movie.language === language);
    }

    if (genre) {
      filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genre));
    }

    // Note: Format filter would require adding format information to the movie type and data
    
    return {
      movies: filteredMovies,
      getMovieById: (id: string) => movies.find(m => m.id === id),
      filterMoviesByGenre: (genre: string) => 
        movies.filter(m => m.genre.includes(genre)),
      filterMoviesByLanguage: (language: string) =>
        movies.filter(m => m.language === language),
    };
  }, [language, genre, format]);
}