import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Star } from 'lucide-react';
import { movies } from '../data/movies';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={movie.imageUrl} 
                alt={movie.title} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{movie.rating}/5</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="ml-1">{movie.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-600">{movie.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Cast</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map(actor => (
                      <span key={actor} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate(`/movie/${id}/booking`)}
                className="w-full md:w-auto px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}