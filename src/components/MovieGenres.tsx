import React from 'react';

interface MovieGenresProps {
  genres: string[];
}

export function MovieGenres({ genres }: MovieGenresProps) {
  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {genres.map((genre) => (
        <span 
          key={genre} 
          className="text-xs px-2 py-1 bg-gray-100 rounded-full"
        >
          {genre}
        </span>
      ))}
    </div>
  );
}