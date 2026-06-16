import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Calendar, ExternalLink, Award, Play, X, Video, Film, Headphones, Disc } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

export default function Media() {
  const { t, media, videos } = useLanguage();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const activeVideo = videos.find((v) => v.youtubeId === activeVideoId);

  return (
    <section
      id="media"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-yellow-500/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5rem] w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ==================== SUB-SECTION 1: VIDEOS & REELS ==================== */}
        <div className="mb-24">
          <div className="text-center md:text-left mb-16">
            <p className="text-xs font-mono font-medium tracking-[0.3em] text-[#D4AF37] uppercase mb-3">
              {t('videos.reels') || 'Reels & Videos'}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none">
              {t('videos.title') || 'Featured Videos'}<span className="text-[#D4AF37]">.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mt-6 mx-auto md:mx-0" />
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => {
              const isSong = video.category === 'Song' || video.category === 'பாடல்' || video.category === 'গান' || video.category === 'പാട്ട്';
              const isInterview = video.category === 'Interview' || video.category === 'நேர்காணல்' || video.category === 'അഭിമുഖം';
              return (
                <motion.div
                  key={video.id}
                  id={`media-video-card-${video.id}`}
                  className="group relative flex flex-col bg-[#121212]/30 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-[#D4AF37]/5 hover:border-yellow-500/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  
                  {/* Video Cover Aspect Box */}
                  <div
                    className="relative aspect-video w-full overflow-hidden bg-[#121212] cursor-pointer"
                    onClick={() => setActiveVideoId(video.youtubeId)}
                  >
                    
                    {/* Glass overlays */}
                    <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/25 transition-all duration-500 z-10" />
                    
                    {/* Category Pill Tag */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/80 border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                      {isSong && <Headphones size={10} />}
                      {isInterview && <Disc size={10} className="animate-spin text-yellow-500" style={{ animationDuration: '4s' }} />}
                      {!isSong && !isInterview && <Video size={10} />}
                      {video.category}
                    </div>

                    {/* Video Duration */}
                    {video.duration && (
                      <div className="absolute bottom-4 right-4 z-20 bg-black/90 text-white border border-white/5 px-2 py-0.5 rounded text-[10px] font-mono">
                        {video.duration}
                      </div>
                    )}

                    {/* Play circle button overlay animation */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        id={`play-btn-circle-media-${video.id}`}
                        className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] text-black cursor-pointer group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300"
                      >
                        <Play size={18} className="fill-black translate-x-0.5" />
                      </motion.div>
                    </div>

                    {/* Picture Thumbnail Cover */}
                    <img
                      src={video.thumbnailUrl}
                      alt={`${video.title} Video Thumbnail`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info Text Box */}
                  <div className="p-5 flex flex-col items-start text-left flex-grow">
                    <h4
                      onClick={() => setActiveVideoId(video.youtubeId)}
                      className="text-base font-serif font-bold text-white hover:text-[#D4AF37] cursor-pointer transition-colors line-clamp-2 leading-snug mb-2"
                    >
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-auto flex items-center gap-1 font-mono">
                      <Film size={11} className="text-[#D4AF37]" />
                      YouTube Embed Video • Free Streaming
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/5 my-20" />

        {/* ==================== SUB-SECTION 3: PRESS COVERAGE ==================== */}
        <div>
          <div className="text-center md:text-left mb-16">
            <p className="text-xs font-mono font-medium tracking-[0.3em] text-[#D4AF37] uppercase mb-3">
              {t('media.press') || 'Press Mentions'}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none">
              {t('media.title') || 'Media Coverage'}<span className="text-[#D4AF37]">.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mt-6 mx-auto md:mx-0" />
          </div>

          {/* Media Mentions Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {media.map((item, index) => {
              const isAward = item.type === 'Award' || item.type === 'விருது' || item.type === 'അവാർഡ്';
              return (
                <motion.div
                  key={item.id}
                  id={`media-item-${item.id}`}
                  className="group relative flex flex-col bg-[#121212]/30 border border-white/5 hover:border-yellow-500/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[#D4AF37]/5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Media Type Emblem */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                      {isAward ? <Award size={10} /> : <Newspaper size={10} />}
                      {item.type}
                    </div>
                    
                    <span className="text-[10px] font-mono text-gray-400 tracking-wider flex items-center gap-1">
                      <Calendar size={11} className="text-[#D4AF37]/60" />
                      {item.date}
                    </span>
                  </div>

                  {/* Media Headline */}
                  <h3 className="text-lg md:text-xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-all mb-4 leading-snug">
                    &ldquo;{item.title}&rdquo;
                  </h3>

                  {/* Media Publisher */}
                  <p className="text-xs font-mono text-gray-400 mb-4 pb-3 border-b border-white/5 text-left">
                    {t('media.publisher') || 'Publisher'}: <span className="text-gray-300 font-semibold">{item.source}</span>
                  </p>

                  {/* Media Copy */}
                  <p className="text-xs md:text-sm text-gray-450 font-sans leading-relaxed flex-grow text-left">
                    {item.description}
                  </p>

                  {/* Action button mock */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{t('media.archived') || 'Archived Publication'}</span>
                    <div className="text-xs font-mono font-semibold text-[#D4AF37] group-hover:text-white flex items-center gap-1 transition-colors">
                      {t('media.read') || 'Read Article'}
                      <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Accent glow on top header corner */}
                  <div className="absolute top-0 right-12 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* Cinematic horizontal promo banner */}
          <motion.div
            id="media-promo-banner"
            className="mt-16 bg-[#121212]/40 border border-white/5 p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glowing element inside banner */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.02),transparent_40%)]" />

            <div className="space-y-2 relative z-10 text-left">
              <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold block">{t('media.pitch') || 'Exclusive Interview Pitch'}</span>
              <h4 className="text-lg font-serif font-bold text-white">{t('media.kit_title') || 'Press kits, showreels, and full cast profiles are available.'}</h4>
              <p className="text-xs text-gray-400 font-sans">{t('media.kit_desc') || 'For cinematic collaboration bookings, casting briefs, and musical licensing agreements.'}</p>
            </div>

            <a
              id="media-cta-contact-redirect"
              href="#contact"
              className="px-5 py-3 border border-yellow-500/20 bg-[#D4AF37]/5 hover:bg-[#D4AF37] hover:text-black font-semibold text-xs tracking-wider rounded-md text-[#D4AF37] uppercase transition-all duration-300 relative z-10 shrink-0 select-none shadow-[0_0_15px_rgba(212,175,55,0.05)]"
            >
              {t('media.kit_button') || 'Request Press Kit'}
            </a>
          </motion.div>
        </div>

        {/* Dynamic Lightbox Modal Player */}
        <AnimatePresence>
          {activeVideoId !== null && activeVideo && (
            <motion.div
              id="video-lightbox-overlay"
              className="fixed inset-0 bg-[#0A0A0A]/95 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Backdrop boundary trigger */}
              <div className="absolute inset-0 cursor-default" onClick={() => setActiveVideoId(null)} />

              {/* Player Container wrap */}
              <motion.div
                id="video-lightbox-frame"
                className="relative w-full max-w-4xl bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10"
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header detail */}
                <div className="p-4 bg-[#121212] border-b border-white/5 flex justify-between items-center text-left">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">{activeVideo.category} PLAYBACK</span>
                    <h5 className="text-sm font-serif font-bold text-white mt-0.5 line-clamp-1">{activeVideo.title}</h5>
                  </div>
                  <button
                    id="video-lightbox-close"
                    onClick={() => setActiveVideoId(null)}
                    className="p-1 px-2.5 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/5 hover:border-yellow-500 rounded-md text-xs font-mono font-bold tracking-widest text-[#D4AF37] flex items-center gap-1 transition-all"
                  >
                    <X size={14} />
                    CLOSE
                  </button>
                </div>

                {/* Active Video Player Screen */}
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="media" />

      </div>
    </section>
  );
}
