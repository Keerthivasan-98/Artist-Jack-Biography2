import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, FilmIcon, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

export default function Filmography() {
  const { t, movies } = useLanguage();
  const [selectedGenre, setSelectedGenre] = useState<'All' | 'Action' | 'Drama' | 'Comedy' | 'Thriller'>('All');

  const genres: ('All' | 'Action' | 'Drama' | 'Comedy' | 'Thriller')[] = [
    'All',
    'Action',
    'Drama',
    'Comedy',
    'Thriller',
  ];

  const filteredMovies = movies.filter((movie) => {
    if (selectedGenre === 'All') return true;
    return movie.genre === selectedGenre;
  });

  return (
    <section
      id="filmography"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.05),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-4"
          >
            <FilmIcon size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              {t('films.cinematic')}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 text-left leading-snug"
          >
            {t('films.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed text-left max-w-3xl"
          >
            {t('films.desc')}
          </motion.p>
        </div>

        {/* Genre Filters Row */}
        <div className="flex flex-wrap justify-start gap-3 mb-16 overflow-x-auto pb-4 scrollbar-none">
          {genres.map((genre) => {
            const isSelected = selectedGenre === genre;
            const genreIcons: Record<string, string> = {
              'All': '',
              'Action': '🔥',
              'Drama': '🎭',
              'Comedy': '😂',
              'Thriller': '🔪'
            };
            return (
              <button
                key={genre}
                id={`genre-filter-${genre.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedGenre(genre)}
                className={`relative px-4 py-2 border rounded-full text-xs font-mono tracking-wider transition-all duration-300 whitespace-nowrap ${
                  isSelected
                    ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                    : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeFilmTab"
                    className="absolute inset-0 bg-[#D4AF37]/10 rounded-full z-0 border border-[#D4AF37]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 uppercase">
                  {genreIcons[genre] && <span>{genreIcons[genre]}</span>}
                  {genre}
                </span>
              </button>
            );
          })}
        </div>

        {/* Movie Cards Container with layout animation */}
        <motion.div
          id="filmography-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                id={`movie-card-${movie.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col h-full bg-[#121212]/30 border border-white/5 hover:border-yellow-500/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-[0_4px_30px_rgba(212,175,55,0.03)] transition-all duration-300"
              >
                
                {/* Poster Box */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#121212]">
                  
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-70" />
                  <div className="absolute inset-0 bg-[#0A0A0A]/10 group-hover:bg-[#0A0A0A]/40 transition-all duration-500 z-10" />

                  {/* Rating Badge */}
                  {movie.rating && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-semibold text-[#D4AF37] border border-yellow-500/20 shadow-md">
                      <Star size={11} className="fill-[#D4AF37]" />
                      {movie.rating}
                    </div>
                  )}

                  {/* Movie Year Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-[#D4AF37] text-black px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider">
                    {movie.year}
                  </div>

                  {/* Movie Poster Image (Unsplash Cinema Background Placeholder) */}
                  <img
                    src={movie.posterUrl}
                    alt={`${movie.title} Movie Poster`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Genre Badge overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/25 text-[#D4AF37] rounded text-[9px] font-mono font-bold uppercase tracking-widest">
                      {movie.genre}
                    </span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-all duration-300 line-clamp-1 mb-1">
                    {movie.title}
                  </h4>
                  <p className="text-[11px] font-mono text-gray-500 mb-4 flex items-center gap-1.5 border-b border-white/5 pb-2">
                    <Film size={11} className="text-[#D4AF37]" />
                    {t('films.role')}: <span className="text-gray-300 font-semibold">{movie.role}</span>
                  </p>
                  
                  {movie.director && (
                    <p className="text-[11px] font-mono text-gray-400 mb-3 block">
                      {t('films.director')}: <span className="text-white font-medium">{movie.director}</span>
                    </p>
                  )}

                  <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                    {movie.description}
                  </p>
                </div>

                {/* Accent border at card bottom */}
                <div className="h-1 w-0 bg-gradient-to-r from-yellow-600 to-[#D4AF37] group-hover:w-full transition-all duration-500 shrink-0" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* If no movies match (fallback) */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-20 bg-[#121212]/20 border border-white/5 rounded-3xl">
            <FilmIcon className="mx-auto text-gray-600 mb-4 animate-bounce" size={40} />
            <p className="text-gray-400 text-sm font-mono">No film recordings found in this genre.</p>
          </div>
        )}

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="filmography" />

      </div>
    </section>
  );
}
