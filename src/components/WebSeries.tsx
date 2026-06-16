import { motion } from 'motion/react';
import { Tv, ShieldAlert, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

export default function WebSeries() {
  const { t, webSeries } = useLanguage();

  return (
    <section
      id="webseries"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-[50%] right-[-10rem] w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-medium tracking-[0.3em] text-[#D4AF37] uppercase mb-3">{t('webseries.digital')}</p>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none">
            {t('webseries.title')}<span className="text-[#D4AF37]">.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mt-6 mx-auto md:mx-0" />
        </div>

        {/* Dynamic Bento-Grid Web Series Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {webSeries.map((series, index) => {
            const isAutoShankar = series.id === 'w2';
            return (
              <motion.div
                key={series.id}
                id={`series-bento-${series.id}`}
                className="group flex flex-col md:flex-row bg-[#121212]/30 border border-white/5 hover:border-yellow-500/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl transition-all duration-500"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                
                {/* Visual Cover Side */}
                <div className="w-full md:w-[45%] shrink-0 relative aspect-[4/5] md:aspect-auto overflow-hidden bg-[#121212]">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0C0C0C]/90 to-transparent z-10" />
                  
                  {/* Streaming Service Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-[#D4AF37] text-black px-3 py-1 rounded text-[10px] font-mono font-black tracking-widest uppercase">
                    {series.platform}
                  </div>

                  {/* Series Year Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 border border-white/5 text-white px-2 py-0.5 rounded text-[10px] font-mono uppercase">
                    {series.year}
                  </div>

                  <img
                    src={series.posterUrl}
                    alt={`${series.title} Series Banner`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Text Side */}
                <div className="p-8 flex flex-col justify-between flex-grow text-left relative">
                  
                  {/* Context elements inside series layout */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] mb-2">
                      <Tv size={13} />
                      Special Digital Series
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-all mb-2">
                      {series.title}
                    </h3>
                    
                    <p className="text-[11px] font-mono text-gray-400 border-b border-white/5 pb-3 mb-4 text-left">
                      {t('webseries.role')}: <span className="text-white font-bold">{series.role}</span>
                    </p>

                    <p className="text-xs text-gray-400 font-sans leading-relaxed mb-6">
                      {series.description}
                    </p>
                  </div>

                  {/* Special Highlight Block */}
                  <div className="p-4 bg-yellow-500/5 border-l-2 border-[#D4AF37] rounded-r-md mt-auto text-left">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-yellow-500 uppercase tracking-widest mb-1">
                      {isAutoShankar ? <Award size={11} /> : <ShieldAlert size={11} />}
                      {t('webseries.role_highlights')}
                    </div>
                    <p className="text-xs text-gray-300 antialiased font-semibold italic">
                      {series.roleHighlight}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="webseries" />

      </div>
    </section>
  );
}
