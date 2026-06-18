import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Sparkles, Calendar, Tag, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';
import { TVSerial } from '../types';

type ChannelFilter = 'All' | 'Sun TV' | 'Vijay TV' | 'Zee Tamil' | 'Colors TV' | 'Raj TV';

export default function Television() {
  const { t, television } = useLanguage();
  const [selectedChannel, setSelectedChannel] = useState<ChannelFilter>('All');
  const [lightboxSerial, setLightboxSerial] = useState<TVSerial | null>(null);

  const channels: ChannelFilter[] = ['All', 'Sun TV', 'Vijay TV', 'Zee Tamil', 'Colors TV', 'Raj TV'];

  const filteredSerials = selectedChannel === 'All'
    ? television
    : television.filter(serial => serial.channel === selectedChannel);

  // Helper to map channel to a signature visual theme color gradient for the poster placeholder and badges
  const getChannelTheme = (channel: string) => {
    switch (channel) {
      case 'Sun TV':
        return {
          glow: 'bg-amber-500/10',
          text: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
          solid: 'bg-amber-500 text-black',
          placeholderGrad: 'from-amber-950/40 via-[#121212] to-[#0D0D0D]',
        };
      case 'Vijay TV':
        return {
          glow: 'bg-[#E50914]/10',
          text: 'text-red-400 border-red-500/20 bg-red-500/5',
          solid: 'bg-[#E50914] text-white',
          placeholderGrad: 'from-red-950/30 via-[#121212] to-[#0D0D0D]',
        };
      case 'Zee Tamil':
        return {
          glow: 'bg-purple-500/10',
          text: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
          solid: 'bg-[#8213A0] text-white',
          placeholderGrad: 'from-purple-950/40 via-[#121212] to-[#0D0D0D]',
        };
      case 'Colors TV':
        return {
          glow: 'bg-cyan-500/10',
          text: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
          solid: 'bg-[#00ADC6] text-black',
          placeholderGrad: 'from-cyan-950/40 via-[#121212] to-[#0D0D0D]',
        };
      case 'Raj TV':
        return {
          glow: 'bg-yellow-500/15',
          text: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5',
          solid: 'bg-yellow-500 text-black',
          placeholderGrad: 'from-yellow-950/30 via-[#121212] to-[#0D0D0D]',
        };
      default:
        return {
          glow: 'bg-gray-500/10',
          text: 'text-gray-400 border-gray-500/20 bg-gray-500/5',
          solid: 'bg-gray-500 text-black',
          placeholderGrad: 'from-zinc-900 via-zinc-950 to-[#0A0A0A]',
        };
    }
  };

  return (
    <section
      id="television"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Decorative ambient blurred backgrounds */}
      <div className="absolute top-1/4 left-[-10rem] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10rem] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <Tv size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              {t('tv.broadcast')}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 text-left"
          >
            {t('tv.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed text-left max-w-3xl"
          >
            {t('tv.desc')}
          </motion.p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-start gap-2 mb-16 overflow-x-auto pb-4 scrollbar-none">
          {channels.map((channel) => {
            const isSelected = selectedChannel === channel;
            const channelIcons: Record<string, string> = {
              'All': '',
              'Sun TV': '☀️',
              'Vijay TV': '⭐',
              'Zee Tamil': '🎬',
              'Colors TV': '🌈',
              'Raj TV': '👑'
            };
            return (
              <button
                key={channel}
                id={`filter-btn-${channel.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedChannel(channel)}
                className={`relative px-4 py-2 border rounded-full text-xs font-mono tracking-wider transition-all duration-300 whitespace-nowrap ${
                  isSelected
                    ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                    : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {isSelected && (
                  <motion.span
                    id={`active-filter-bg-${channel.replace(/\s+/g, '-').toLowerCase()}`}
                    layoutId="activeChannelFilter"
                    className="absolute inset-0 bg-[#D4AF37]/10 rounded-full z-0 border border-[#D4AF37]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 uppercase">
                  {channelIcons[channel] && <span>{channelIcons[channel]}</span>}
                  {channel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Television Cards Grid */}
        <motion.div
          id="tv-cards-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSerials.map((serial, index) => {
              const theme = getChannelTheme(serial.channel);
              
              return (
                <motion.div
                  key={serial.id}
                  id={`tv-card-${serial.id}`}
                  onClick={() => {
                    if (serial.imageUrl) setLightboxSerial(serial);
                  }}
                  className={`group relative flex flex-col h-full bg-[#121212]/30 border border-white/5 hover:border-yellow-500/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-[0_4px_30px_rgba(212,175,55,0.03)] transition-all duration-300 animate-fade-in ${serial.imageUrl ? 'cursor-pointer' : ''}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  
                  {/* Poster Box */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#121212]">
                    
                    {/* Subtle vignette layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-70" />
                    <div className="absolute inset-0 bg-[#0A0A0A]/10 group-hover:bg-[#0A0A0A]/40 transition-all duration-500 z-10" />

                    {/* Channel Badge */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-semibold text-[#D4AF37] border border-yellow-500/20 shadow-md">
                      <Tv size={11} className="text-[#D4AF37]" />
                      {serial.channel}
                    </div>

                    {/* TV Year Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-[#D4AF37] text-black px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider">
                      {serial.year}
                    </div>

                    {/* TV Poster Image */}
                    {serial.imageUrl ? (
                      <img
                        src={serial.imageUrl}
                        alt={`${serial.title} Poster`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 select-none"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] z-0">
                        <Tv size={40} className="text-gray-600 mb-2" />
                        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">{t('tv.pending')}</span>
                      </div>
                    )}

                    {/* Genre Badge overlay */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/25 text-[#D4AF37] rounded text-[9px] font-mono font-bold uppercase tracking-widest">
                        {serial.genre}
                      </span>
                    </div>
                  </div>

                  {/* Details Container */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-all duration-300 line-clamp-1 mb-1">
                      {serial.title}
                    </h4>
                    <p className="text-[11px] font-mono text-gray-500 mb-4 flex items-center gap-1.5 border-b border-white/5 pb-2">
                      <Tv size={11} className="text-[#D4AF37]" />
                      {t('tv.role')}: <span className="text-gray-300 font-semibold">{serial.role}</span>
                    </p>

                    <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                      {serial.description}
                    </p>
                  </div>

                  {/* Accent border at card bottom */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-600 to-[#D4AF37] group-hover:w-full transition-all duration-500 z-50" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when filters return nothing */}
        {filteredSerials.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-mono text-sm">No television credits listed on this network currently.</p>
          </div>
        )}

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="television" />

        {/* Full screen Lightbox overlay */}
        {typeof window !== 'undefined' && createPortal(
          <AnimatePresence>
            {lightboxSerial !== null && lightboxSerial.imageUrl && (
              <motion.div
                id="tv-lightbox"
                className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-lg z-[9999] flex flex-col justify-between p-4 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back close element wrap */}
                <div className="absolute inset-0 cursor-default" onClick={() => setLightboxSerial(null)} />

                {/* Lightbox Header */}
                <div className="relative w-full flex justify-between items-center text-left py-2 z-10 pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="p-1 px-2.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[10px] font-mono text-[#D4AF37]">
                      {lightboxSerial.channel}
                    </div>
                    <span className="text-xs text-gray-300 font-serif font-semibold">{lightboxSerial.title}</span>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxSerial(null);
                    }}
                    className="p-2 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/5 hover:border-yellow-500 rounded-full text-slate-300 flex items-center justify-center transition-all cursor-pointer relative z-[99999] pointer-events-auto"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Lightbox Primary Photo Display Area */}
                <div className="relative w-full flex-grow flex items-center justify-center py-4 z-10 select-none pointer-events-none">
                  <motion.div
                    className="max-w-4xl max-h-[70vh] flex items-center justify-center relative p-1 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl pointer-events-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={lightboxSerial.imageUrl}
                      alt={lightboxSerial.title}
                      className="max-w-full max-h-[68vh] object-contain rounded-xl select-none"
                    />
                  </motion.div>
                </div>

                {/* Lightbox Footer text details */}
                <div className="relative w-full text-center pb-2 z-10 text-xs text-gray-500 font-mono">
                  {lightboxSerial.role} • {lightboxSerial.genre}
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
