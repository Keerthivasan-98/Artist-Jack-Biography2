import { motion } from 'motion/react';
import { Play, Sparkles, Film, ArrowDown, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import artistJackImage from '../../assets/images/galleryImages/Actor JackPrabhu.png';
import cinemaBg from '../assets/images/hero/cinema-bg.png';

interface HeroProps {
  onCTA1Click: () => void; // Explore Journey
  onCTA2Click: () => void; // Watch Showreel
}

export default function Hero({ onCTA1Click, onCTA2Click }: HeroProps) {
  const { t, stats } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] pt-16 overflow-hidden select-none"
    >
      {/* Cinematic Industry Animated Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.15]"
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          backgroundImage: `url(${cinemaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Cinematic Grid & Glow Effect Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(212,175,55,0.08),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(18,18,18,0.9),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A] pointer-events-none" />
      
      {/* Subtle animated light beams */}
      <div className="absolute -top-40 left-1/4 w-[1px] h-[500px] bg-gradient-to-b from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 transform rotate-12 blur-sm" />
      <div className="absolute -bottom-40 right-1/4 w-[1px] h-[500px] bg-gradient-to-b from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 transform rotate-12 blur-sm" />

      <div className="max-w-7xl mx-auto px-6 w-full pt-12 pb-28 md:pt-20 md:pb-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left: Text Contents */}
        <div className="flex-1 text-center lg:text-left">
          {/* Tag / Status */}
          <motion.div
            id="hero-tag"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-[#D4AF37] rounded-full text-xs font-mono tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={11} className="animate-pulse" />
            {t('hero.tag')}
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-name"
            className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-gray-400 block text-2xl md:text-3xl font-mono font-medium tracking-[0.2em] mb-2">{t('hero.artist')}</span>
            JACK PRABHU<span className="text-[#D4AF37]">.</span>
          </motion.h1>

          {/* Profession Subheading */}
          <motion.div
            id="hero-profession"
            className="text-base md:text-xl font-mono font-medium text-[#D4AF37] tracking-wider mb-6 flex justify-center lg:justify-start items-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>{t('hero.actor')}</span>
          </motion.div>

          {/* Short Bio Description */}
          <motion.p
            id="hero-desc"
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('hero.desc')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            id="hero-ctas"
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              id="hero-cta-explore"
              onClick={onCTA1Click}
              className="px-6 py-3.5 bg-yellow-500 hover:bg-[#D4AF37] text-black font-semibold text-xs tracking-wider rounded-md uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)] transform hover:-translate-y-0.5"
            >
              <Award size={14} className="text-black" />
              {t('hero.cta.explore')}
            </button>
            <button
              id="hero-cta-reel"
              onClick={onCTA2Click}
              className="px-6 py-3.5 border border-white/10 hover:border-yellow-500/40 bg-[#121212]/40 hover:bg-yellow-500/5 text-xs text-white font-semibold tracking-wider rounded-md uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:shadow-[0_4px_20px_rgba(255,255,255,0.03)]"
            >
              <Play size={12} className="text-yellow-500 group-hover:scale-110 transition-transform" />
              {t('hero.cta.reel')}
            </button>
          </motion.div>

          {/* Stats Counter Grid */}
          <motion.div
            id="hero-stats"
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-md mx-auto lg:mx-0 border-t border-white/5 pt-8 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#D4AF37] tracking-tight">{stat.value}</span>
                <span className="text-[10px] font-mono font-medium uppercase text-gray-500 tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Premium Portrait Mask */}
        <div className="flex-1 w-full max-w-sm md:max-w-md flex justify-center relative">
          <motion.div
            id="hero-portrait-frame"
            className="relative w-72 h-96 md:w-80 md:h-[450px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            {/* Ambient gold rings in background */}
            <div className="absolute -inset-4 rounded-3xl bg-[#D4AF37]/5 blur-3xl group-hover:bg-[#D4AF37]/10 transition-all duration-700 animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-600/30 via-transparent to-yellow-500/10 rounded-2xl opacity-60" />

            {/* Custom Modern Frame border accent */}
            <div className="absolute inset-0 border border-yellow-500/10 rounded-2xl pointer-events-none group-hover:border-[#D4AF37]/30 transition-colors duration-500" />
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-xl" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] rounded-br-xl" />

            {/* Primary Portrait Mask Box */}
            <div className="w-full h-full rounded-2xl overflow-hidden bg-[#070707] flex items-center justify-center relative border border-white/5 shadow-2xl">
              {/* Overlay shadow for cinema aspect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/5 to-transparent z-10 pointer-events-none" />
              
              {/* Actual photo matching the user's uploaded image perfectly */}
              <img
                src={artistJackImage}
                alt="Actor Jack Prabhu dramatic studio portrait"
                className="w-full h-full object-cover brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic location and tag overlays inside frame */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-[9px] font-mono text-[#D4AF37]/80 uppercase tracking-widest">{t('hero.resident')}</p>
                    <p className="text-xs text-white font-medium font-serif mt-0.5">{t('hero.chennai')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{t('hero.open_for')}</p>
                    <p className="text-xs text-green-400 font-medium font-mono flex items-center justify-end gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                      ON SET
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Smooth scroll-down mouse animation clicker */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-10" onClick={onCTA1Click}>
        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Scroll Down</span>
        <motion.div
          id="hero-scroll-indicator"
          className="w-4 h-7 border border-white/20 rounded-full flex items-start justify-center p-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1.5 bg-[#D4AF37] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
