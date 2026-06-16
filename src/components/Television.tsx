import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Sparkles, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

type ChannelFilter = 'All' | 'Sun TV' | 'Vijay TV' | 'Zee Tamil' | 'Colors TV' | 'Raj TV';

export default function Television() {
  const { t, television } = useLanguage();
  const [selectedChannel, setSelectedChannel] = useState<ChannelFilter>('All');

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs font-mono font-medium tracking-[0.3em] text-[#D4AF37] uppercase mb-3">
              {t('tv.broadcast')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none">
              {t('tv.title')}<span className="text-[#D4AF37]">.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mt-6 mx-auto md:mx-0" />
          </div>

          <p className="text-sm text-gray-400 max-w-md text-center md:text-left font-sans leading-relaxed">
            {t('tv.desc')}
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 mb-12 border-b border-white/5 pb-8">
          {channels.map((channel) => {
            const isSelected = selectedChannel === channel;
            return (
              <button
                key={channel}
                id={`filter-btn-${channel.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedChannel(channel)}
                className={`relative px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                  isSelected
                    ? 'text-black font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isSelected && (
                  <motion.span
                    id={`active-filter-bg-${channel.replace(/\s+/g, '-').toLowerCase()}`}
                    layoutId="activeChannelFilter"
                    className="absolute inset-0 bg-[#D4AF37] rounded-lg"
                    style={{ originY: '0px' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{channel}</span>
              </button>
            );
          })}
        </div>

        {/* Television Cards Grid */}
        <motion.div
          id="tv-cards-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSerials.map((serial, index) => {
              const theme = getChannelTheme(serial.channel);
              
              return (
                <motion.div
                  key={serial.id}
                  id={`tv-card-${serial.id}`}
                  className="group flex flex-col bg-[#121212]/30 border border-white/5 hover:border-yellow-500/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 h-full animate-fade-in"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  
                  {/* Poster Placeholder Visuals */}
                  <div className={`relative aspect-[16/10] md:aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#111111] bg-gradient-to-b ${theme.placeholderGrad} border-b border-white/5 flex flex-col justify-between p-6`}>
                    
                    {/* Glowing background bubble */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${theme.glow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700`} />
                    
                    {/* Top badges */}
                    <div className="flex justify-between items-center z-10 w-full">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${theme.text}`}>
                        {serial.channel}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 bg-black/60 px-2 py-0.5 rounded border border-white/5">
                        <Calendar size={11} className="text-[#D4AF37]" />
                        {serial.year}
                      </div>
                    </div>

                    {/* Central artistic TV placeholder graphic */}
                    <div className="flex flex-col items-center justify-center py-2 z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/30 group-hover:bg-yellow-500/5 transition-all duration-500 mb-2">
                        <Tv size={28} className="text-gray-400 group-hover:text-[#D4AF37] transition-all duration-500" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] opacity-60 uppercase">
                        {t('tv.pending')}
                      </span>
                    </div>

                    {/* Bottom tagline / genre badges */}
                    <div className="flex justify-between items-center z-10 w-full border-t border-white/5 pt-3">
                      <div className="flex items-center gap-1 text-[10px] font-mono text-gray-400">
                        <Tag size={10} className="text-gray-500" />
                        {serial.genre}
                      </div>
                      <div className="text-[10px] font-mono text-gray-500 italic">
                        {serial.title.toUpperCase()} • BROADCAST
                      </div>
                    </div>
                  </div>

                  {/* Info Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left">
                    <div>
                      {/* Character played */}
                      <div className="flex items-center gap-1 text-xs text-amber-500/90 font-mono mb-2">
                        <Sparkles size={11} />
                        {t('tv.role')}: {serial.role}
                      </div>

                      <h3 className="text-lg font-serif font-black text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                        {serial.title}
                      </h3>

                      <p className="text-xs text-gray-400 font-sans leading-relaxed">
                        {serial.description}
                      </p>
                    </div>

                    {/* TV performance tag badge */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        {t('tv.showcase')}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">
                        <ShieldCheck size={11} className="text-[#D4AF37]" />
                        {t('tv.credits')}
                      </div>
                    </div>

                  </div>
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

      </div>
    </section>
  );
}
