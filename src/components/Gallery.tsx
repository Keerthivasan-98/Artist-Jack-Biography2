import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

type CategoryType = 'All' | 'Movies' | 'Events' | 'Behind the Scenes' | 'Television' | 'Promotional Shoots';

export default function Gallery() {
  const { t, gallery } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  const activeImage = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-[20%] left-[-10rem] w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <p className="text-xs font-mono font-medium tracking-[0.3em] text-[#D4AF37] uppercase mb-3">{t('gallery.captures')}</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none">
              {t('gallery.title')}<span className="text-[#D4AF37]">.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mt-6" />
          </div>

          {/* Categories select row */}
          <div className="flex flex-wrap gap-2 bg-[#121212]/50 border border-white/5 p-1 rounded-lg backdrop-blur-sm self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-category-${cat}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null); // Clear lightbox scope when filter switches
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry/Flex Grid */}
        <motion.div
          id="gallery-grid"
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
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
                  <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/10 transition-all duration-500 z-10" />
                  
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
        <AnimatePresence>
          {lightboxIndex !== null && activeImage && (
            <motion.div
              id="gallery-lightbox"
              className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-lg z-[100] flex flex-col justify-between p-4 md:p-8"
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
                    onClick={() => setLightboxIndex(null)}
                    className="p-2 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/5 hover:border-yellow-500 rounded-full text-slate-300 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Lightbox Primary Photo Display Area */}
              <div className="relative w-full flex-grow flex items-center justify-center py-4 z-10 select-none">
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
                  <img
                    src={activeImage.imageUrl}
                    alt={activeImage.alt}
                    className="max-w-full max-h-[68vh] object-contain rounded-xl select-none"
                    referrerPolicy="no-referrer"
                  />
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
        </AnimatePresence>
      </div>
    </section>
  );
}
