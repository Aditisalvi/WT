import React from 'react';
import { useFilterStore } from '../store/filterStore';

const languages = ['Hindi', 'English', 'Tamil', 'Telugu', 'Malayalam', 'Japanese', 'Marathi', 'Multi Language'];
const genres = ['Drama', 'Romantic', 'Action', 'Adventure', 'Comedy', 'Animation', 'Musical', 'Thriller', 'Fantasy', 'Historical', 'Horror', 'Anime', 'Classic', 'Crime', 'Documentary', 'Family', 'Period'];
const formats = ['2D', '3D', 'MX4D 3D', '4DX', '4DX 3D', 'IMAX 2D', 'IMAX 3D', 'MX4D'];

export default function QuickFilters() {
  const { language, genre, format, setLanguage, setGenre, setFormat, clearFilters } = useFilterStore();

  const handleLanguageClick = (selectedLanguage: string) => {
    if (language === selectedLanguage) {
      setLanguage(null);
    } else {
      setLanguage(selectedLanguage);
    }
  };

  const handleGenreClick = (selectedGenre: string) => {
    if (genre === selectedGenre) {
      setGenre(null);
    } else {
      setGenre(selectedGenre);
    }
  };

  const handleFormatClick = (selectedFormat: string) => {
    if (format === selectedFormat) {
      setFormat(null);
    } else {
      setFormat(selectedFormat);
    }
  };

  return (
    <div className="py-6 space-y-6">
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Languages</h3>
          {language && (
            <button 
              onClick={() => setLanguage(null)}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageClick(lang)}
              className={`px-4 py-2 rounded-full text-sm ${
                language === lang
                  ? 'bg-red-500 text-white'
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Genres</h3>
          {genre && (
            <button 
              onClick={() => setGenre(null)}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => handleGenreClick(g)}
              className={`px-4 py-2 rounded-full text-sm ${
                genre === g
                  ? 'bg-red-500 text-white'
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Format</h3>
          {format && (
            <button 
              onClick={() => setFormat(null)}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {formats.map((f) => (
            <button
              key={f}
              onClick={() => handleFormatClick(f)}
              className={`px-4 py-2 rounded-full text-sm ${
                format === f
                  ? 'bg-red-500 text-white'
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {(language || genre || format) && (
        <button
          onClick={clearFilters}
          className="w-full py-3 text-red-500 font-medium hover:bg-red-50 rounded-lg"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}