import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

type CategoryType = 'All' | 'Movies' | 'Events' | 'Behind the Scenes' | 'Television' | 'Promotional Shoots';

export default function Gallery() {
  const { t, gallery } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const categories: CategoryType[] = [
    'All',
    'Movies',
    'Events',
    'Behind the Scenes',
    'Television',
    'Promotional Shoots',
  ];

  // Filter gallery items based on selection
  const filteredGallery = gallery.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayedGallery = showAll ? filteredGallery : filteredGallery.slice(0, 10);

  const handlePrev = (e?: React.MouseEvent | KeyboardEvent) => {
    if (e?.stopPropagation) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = (e?: React.MouseEvent | KeyboardEvent) => {
    if (e?.stopPropagation) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };
    if (lightboxIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const activeImage = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-[20%] left-[-10rem] w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-4"
          >
            <Camera size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              {t('gallery.captures')}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 text-left"
          >
            {t('gallery.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed text-left max-w-3xl mb-12"
          >
            {t('gallery.desc')}
          </motion.p>

          {/* Categories select row */}
          <div className="flex flex-wrap justify-start gap-2 mb-16 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const categoryIcons: Record<string, string> = {
                'All': '',
                'Movies': '🍿',
                'Events': '🎤',
                'Behind the Scenes': '📸',
                'Television': '📺',
                'Promotional Shoots': '✨'
              };
              return (
                <button
                  key={cat}
                  id={`gallery-category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null); // Clear lightbox scope when filter switches
                    setShowAll(false);
                  }}
                  className={`relative px-4 py-2 border rounded-full text-xs font-mono tracking-wider transition-all duration-300 whitespace-nowrap ${
                    isSelected
                      ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                      : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeGalleryFilter"
                      className="absolute inset-0 bg-[#D4AF37]/10 rounded-full z-0 border border-[#D4AF37]"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 uppercase">
                    {categoryIcons[cat] && <span>{categoryIcons[cat]}</span>}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Masonry/Flex Grid */}
        <motion.div
          id="gallery-grid"
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedGallery.map((item, index) => (
              <motion.div
                key={item.id}
                id={`gallery-item-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#121212]/50 border border-white/5 cursor-pointer shadow-lg hover:border-yellow-500/20"
                onClick={() => setLightboxIndex(index)}
              >
                
                {/* Image tag with lazy load aspect */}
                <div className="relative overflow-hidden w-full h-full">
                  <div className="absolute inset-0 bg-[#0A0A0A]/10 group-hover:bg-[#0A0A0A]/40 transition-all duration-500 z-10" />
                  
                  {/* Zoom indicator hover icon */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/70 border border-white/10 backdrop-blur-sm">
                    <ZoomIn size={14} className="text-[#D4AF37]" />
                  </div>

                  {/* Standard Image Rendering with no-referrer policy */}
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-all duration-500 select-none pointer-events-none rounded-2xl"
                    referrerPolicy="no-referrer"
                  />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/60 to-transparent z-20 text-left transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest">{item.category}</span>
                    {item.title && (
                      <h4 className="text-sm font-serif font-bold text-white mt-1">{item.title}</h4>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show All / Show Less Button */}
        {filteredGallery.length > 10 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  const galleryElement = document.getElementById('gallery');
                  if (galleryElement) {
                    const offsetTop = galleryElement.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                } else {
                  setShowAll(true);
                }
              }}
              className="px-6 py-2.5 border border-[#D4AF37]/30 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 text-[#D4AF37] font-mono tracking-widest text-xs uppercase rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.05)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'Show All'}
            </button>
          </motion.div>
        )}

        {/* Empty placeholder spacer if no data */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-20 bg-[#121212]/20 border border-white/5 rounded-3xl">
            <Camera className="mx-auto text-gray-600 mb-4 animate-pulse" size={40} />
            <p className="text-gray-400 text-sm font-mono">No photobook assets loaded for this filter.</p>
          </div>
        )}

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="gallery" />

        {/* Full screen Lightbox overlay */}
        {typeof window !== 'undefined' && createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && activeImage && (
            <motion.div
              id="gallery-lightbox"
              className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-lg z-[9999] flex flex-col justify-between p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Back close element wrap */}
              <div className="absolute inset-0 cursor-default" onClick={() => setLightboxIndex(null)} />

              {/* Lightbox Header */}
              <div className="relative w-full flex justify-between items-center text-left py-2 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-1 px-2.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[10px] font-mono text-[#D4AF37]">
                    {activeImage.category}
                  </div>
                  {activeImage.title && <span className="text-xs text-gray-300 font-serif font-semibold">{activeImage.title}</span>}
                </div>
                
                <div className="flex gap-2 items-center">
                  <span className="text-[10px] font-mono text-gray-500 mr-2">
                    {lightboxIndex + 1} / {filteredGallery.length}
                  </span>
                  
                  <button
                    id="lightbox-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(null);
                    }}
                    className="p-2 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/5 hover:border-yellow-500 rounded-full text-slate-300 flex items-center justify-center transition-all cursor-pointer relative z-[99999] pointer-events-auto"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Lightbox Primary Photo Display Area */}
              <div 
                className="relative w-full flex-grow flex items-center justify-center py-4 z-10 select-none cursor-pointer"
                onClick={() => setLightboxIndex(null)}
              >
                {/* Previous Button Controller */}
                <button
                  id="lightbox-prev-btn"
                  onClick={handlePrev}
                  className="absolute left-0 p-4 bg-black/60 hover:bg-yellow-500 hover:text-black border border-white/5 hover:border-yellow-500 rounded-full text-white cursor-pointer transition-all hover:scale-110 flex items-center justify-center z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Main Lightbox Image Frame */}
                <motion.div
                  key={lightboxIndex}
                  id="lightbox-active-picture"
                  className="max-w-4xl max-h-[70vh] flex items-center justify-center relative p-1 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeImage.imageUrl.endsWith('.mp4') ? (
                    <video
                      src={activeImage.imageUrl}
                      className="max-w-full max-h-[68vh] object-contain rounded-xl select-none"
                      controls
                      autoPlay
                      loop
                    />
                  ) : (
                    <img
                      src={activeImage.imageUrl}
                      alt={activeImage.alt}
                      className="max-w-full max-h-[68vh] object-contain rounded-xl select-none"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </motion.div>

                {/* Next Button Controller */}
                <button
                  id="lightbox-next-btn"
                  onClick={handleNext}
                  className="absolute right-0 p-4 bg-black/60 hover:bg-yellow-500 hover:text-black border border-white/5 hover:border-yellow-500 rounded-full text-white cursor-pointer transition-all hover:scale-110 flex items-center justify-center z-20"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Lightbox Footer text details */}
              <div className="relative w-full text-center pb-2 z-10 text-xs text-gray-500 font-mono">
                {activeImage.alt}
              </div>

            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      </div>
    </section>
  );
}
