import { motion } from 'motion/react';
import { Sparkles, Trophy, Heart, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

export default function About() {
  const { t, timeline } = useLanguage();

  const highlights = [
    {
      icon: <Sparkles className="text-[#D4AF37]" size={20} />,
      title: t('about.philosophy.p1.title'),
      desc: t('about.philosophy.p1.desc')
    },
    {
      icon: <Trophy className="text-[#D4AF37]" size={20} />,
      title: t('about.philosophy.p2.title'),
      desc: t('about.philosophy.p2.desc')
    },
    {
      icon: <Heart className="text-[#D4AF37]" size={20} />,
      title: t('about.philosophy.p3.title'),
      desc: t('about.philosophy.p3.desc')
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow flares */}
      <div className="absolute top-[30%] -right-80 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] -left-80 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-medium tracking-[0.3em] text-[#D4AF37] uppercase mb-3">{t('about.journey')}</p>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none">
            {t('about.title')}<span className="text-[#D4AF37]">.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mt-6 mx-auto md:mx-0" />
        </div>

        {/* Intro & Core Bio Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xl md:text-2xl font-serif text-white font-medium">
              {t('about.intro')}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {t('about.p1')}
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {t('about.p2')}
            </p>
            
            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase">{t('about.active')}</p>
                <p className="text-lg font-serif font-semibold text-white mt-1">2016</p>
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase">{t('about.primary_base')}</p>
                <p className="text-lg font-serif font-semibold text-white mt-1">Chennai, IN</p>
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase">{t('about.languages')}</p>
                <p className="text-lg font-serif font-semibold text-white mt-1">{t('about.languages_value')}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121212]/50 border border-white/5 p-8 rounded-2xl backdrop-blur-sm shadow-xl text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-4">{t('about.philosophy')}</span>
            <h4 className="text-lg font-serif text-white font-medium mb-6">{t('about.philosophy_title')}</h4>
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-1.5">{item.title}</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">{t('about.timeline')}</span>
            <h3 className="text-2xl md:text-4xl font-bold font-serif text-white">{t('about.timeline_title')}</h3>
          </div>

          {/* Vertical Timeline Structure */}
          <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
            {/* Center line (on sm screens and above) */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/40 via-yellow-500/10 to-transparent transform -translate-x-1/2 hidden sm:block" />
            {/* Mobile side line */}
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/40 via-yellow-500/10 to-transparent sm:hidden" />

            <div className="space-y-12 relative z-10">
              {timeline.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    className="relative flex flex-col sm:flex-row items-stretch animate-fade-in"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Time indicator Dot */}
                    <div className="absolute left-[-1.35rem] sm:left-1/2 top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37] flex items-center justify-center transform sm:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                    </div>

                    {/* Timeline card container */}
                    <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 text-left' : 'sm:pl-12 sm:order-last text-left'}`}>
                      <div className="bg-[#121212]/30 border border-white/5 hover:border-yellow-500/20 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(212,175,55,0.03)] cursor-default">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs font-mono font-semibold tracking-wider text-[#D4AF37] mb-4">
                          <Calendar size={11} />
                          {step.year}
                        </span>
                        <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-all mb-2 flex items-center gap-1">
                          {step.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Empty placeholder spacer on desktop */}
                    <div className="hidden sm:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="about" />

      </div>
    </section>
  );
}
