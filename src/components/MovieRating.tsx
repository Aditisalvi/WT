import React from 'react';
import { Star } from 'lucide-react';

interface MovieRatingProps {
  rating: number;
}

export function MovieRating({ rating }: MovieRatingProps) {
  return (
    <div className="flex items-center space-x-1 text-sm text-gray-600">
      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
      <span>{rating}/5</span>
    </div>
  );
}