import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award as AwardIcon, Medal, Star, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

type AwardFilter = 'All' | 'Television' | 'Film' | 'Digital' | 'Music' | 'Special';

export default function Awards() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<AwardFilter>('All');

  const awardsList = (t('data.awards') as any[]) || [];

  const filterTabs: { id: AwardFilter; label: string }[] = [
    { id: 'All', label: t('awards.filter.all') },
    { id: 'Television', label: t('awards.filter.television') },
    { id: 'Film', label: t('awards.filter.film') },
    { id: 'Digital', label: t('awards.filter.digital') },
    { id: 'Music', label: t('awards.filter.music') },
    { id: 'Special', label: t('awards.filter.special') },
  ];

  const filteredAwards = selectedFilter === 'All'
    ? awardsList
    : awardsList.filter((award) => award.filterType === selectedFilter);

  // Helper to resolve an appropriate icon dynamically based on filterType/id
  const getAwardIcon = (type: string) => {
    switch (type) {
      case 'Television':
        return <AwardIcon className="w-8 h-8 text-[#D4AF37]" />;
      case 'Film':
        return <Trophy className="w-8 h-8 text-[#D4AF37]" />;
      case 'Digital':
        return <Medal className="w-8 h-8 text-[#D4AF37]" />;
      case 'Music':
        return <Star className="w-8 h-8 text-[#D4AF37]" />;
      default:
        return <Trophy className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="awards"
      className="relative py-24 sm:py-32 bg-[#080808] border-b border-white/5 overflow-hidden"
    >
      {/* Background radial accent flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            <Trophy size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              {t('awards.awards')}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 text-left"
          >
            {t('awards.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed text-left max-w-3xl"
          >
            {t('awards.desc')}
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-start gap-2 mb-16 overflow-x-auto pb-4 scrollbar-none">
          {filterTabs.map((tab, idx) => (
            <motion.button
              key={tab.id}
              id={`awards-filter-tab-${tab.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedFilter(tab.id)}
              className={`relative px-4 py-2 border rounded-full text-xs font-mono tracking-wider transition-all duration-300 whitespace-nowrap ${
                selectedFilter === tab.id
                  ? 'border-[#D4AF37] text-black font-semibold'
                  : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {selectedFilter === tab.id && (
                <motion.span
                  layoutId="activeAwardsTab"
                  className="absolute inset-0 bg-[#D4AF37] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Award Cards Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAwards.map((award, index) => (
              <motion.div
                layout
                key={award.id}
                id={`award-card-${award.id}`}
                className="group relative bg-[#0D0D0D]/80 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-yellow-500/15 hover:bg-[#121212]/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Visual highlights & gradients inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-tr-2xl pointer-events-none group-hover:from-yellow-500/10 transition-all duration-500" />
                <div className="absolute -inset-px rounded-2xl bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Award image/logo placeholder container */}
                  <div className="w-14 h-14 rounded-xl border border-yellow-500/25 bg-yellow-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.05)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    {getAwardIcon(award.filterType)}
                  </div>

                  {/* Year Tag & Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 text-[10px] text-gray-550 font-mono">
                      <Calendar size={11} className="text-[#D4AF37]/70" />
                      <span>{award.year}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30" />
                    <span className="text-[10px] text-[#D4AF37]/90 font-mono tracking-wider font-semibold uppercase">
                      {award.category}
                    </span>
                  </div>

                  {/* Award Title */}
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-all duration-300 mb-3 line-clamp-1">
                    {award.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-gray-400 font-sans leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                    {award.description}
                  </p>
                </div>

                {/* Subtly dynamic card indicator */}
                <div className="flex items-center gap-1.5 border-t border-white/5 pt-4">
                  <Star size={11} className="text-[#D4AF37]" />
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    Industry Recognition
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAwards.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-gray-500 font-mono text-xs"
          >
            No awards found in this category.
          </motion.div>
        )}

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="awards" />

      </div>
    </section>
  );
}
