import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../../assets/images/logo/logo-jack.png';

interface FooterProps {
  setCurrentPage?: (page: 'home' | 'privacy' | 'terms') => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <FaInstagram size={18} />,
      url: 'https://www.instagram.com/actor_jack_official',
      id: 'footer-social-instagram',
      label: 'Instagram',
    },
    {
      icon: <FaYoutube size={18} />,
      url: 'https://youtube.com/@actorjack.07',
      id: 'footer-social-youtube',
      label: 'YouTube',
    },
    {
      icon: <FaWhatsapp size={18} />,
      url: 'https://whatsapp.com/channel/0029Vaj18oXDJ6Gyp2Kaev18',
      id: 'footer-social-whatsapp',
      label: 'WhatsApp Channel',
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (setCurrentPage) setCurrentPage('home');

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-20 pb-6 text-left relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-12">

          {/* Bio text block */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="flex items-center gap-3 group cursor-pointer inline-block" onClick={(e) => handleNavClick(e, 'home')}>
                <img src={logoImg} alt="Actor Jack Prabhu Logo" className="h-20 md:h-30 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500" />
              </a>

              <p className="mt-6 text-sm text-gray-400 max-w-sm leading-relaxed font-sans">
                {t('footer.desc') || 'Tamil Actor based in Chennai. Presenting cinematic truth to audiences across movies, television, and digital platforms.'}
              </p>
            </div>

            <div className="mt-8">
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-[#D4AF37] transition-colors group">
                <span className="border-b border-[#D4AF37]/30 group-hover:border-[#D4AF37] pb-1 transition-colors">Let's work together</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Navigation Links column */}
          <motion.div variants={itemVariants} className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-xs font-mono font-semibold tracking-widest text-white uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-sm"></span>
                {t('footer.navigations') || 'Navigations'}
              </h5>
              <ul className="space-y-3.5 text-sm">
                {['home', 'about', 'filmography', 'videos'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={(e) => handleNavClick(e, item)} className="group flex items-center text-gray-400 hover:text-white transition-all">
                      <span className="w-0 overflow-hidden group-hover:w-3 group-hover:mr-2 h-[1px] bg-[#D4AF37] transition-all duration-300"></span>
                      {t(`nav.${item}`) || item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono font-semibold tracking-widest text-white uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-sm opacity-50"></span>
                {t('footer.sections') || 'Sections'}
              </h5>
              <ul className="space-y-3.5 text-sm">
                {['webseries', 'gallery', 'media', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={(e) => handleNavClick(e, item)} className="group flex items-center text-gray-400 hover:text-white transition-all">
                      <span className="w-0 overflow-hidden group-hover:w-3 group-hover:mr-2 h-[1px] bg-[#D4AF37] transition-all duration-300"></span>
                      {t(`nav.${item}`) || item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social connections */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-mono font-semibold tracking-widest text-white uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-transparent border border-[#D4AF37] rounded-sm"></span>
                {t('footer.channels') || 'Connect'}
              </h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    id={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-gray-400 hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center shrink-0 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(212,175,55,0.15)]"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-8 text-xs text-gray-500 leading-relaxed font-sans">
              {t('footer.social_info') || 'Follow Actor Jack Prabhu on social handles to get instant previews of updates from filmmaking studios.'}
            </p>
          </motion.div>

        </div>

        {/* Massive Text Watermark */}
        <motion.div
          variants={itemVariants}
          className="w-full py-12 flex justify-center items-center overflow-hidden select-none pointer-events-none opacity-[0.03]"
        >
          <span className="text-[12vw] md:text-[10vw] font-serif font-black whitespace-nowrap leading-none tracking-tighter bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent pb-4">
            JACK PRABHU
          </span>
        </motion.div>

        {/* Copyright block */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/5 text-xs text-gray-500 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span>{t('footer.rights') ? t('footer.rights').replace('2026', new Date().getFullYear().toString()) : `© ${new Date().getFullYear()} Actor Jack Prabhu. All rights reserved.`}</span>
            <div className="hidden md:block w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <button onClick={() => { if (setCurrentPage) { setCurrentPage('privacy'); window.scrollTo(0, 0); } }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Privacy Policy</button>
              <span className="text-white/20">|</span>
              <button onClick={() => { if (setCurrentPage) { setCurrentPage('terms'); window.scrollTo(0, 0); } }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Terms & Conditions</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="hidden sm:inline-block">{t('hero.chennai') || 'Chennai, Tamil Nadu, India'}</span>
            <button
              id="back-to-top-btn"
              onClick={handleScrollToTop}
              className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-[#D4AF37] border border-[#D4AF37] transition-all duration-500 cursor-pointer text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.9)] hover:animate-pulse"
              aria-label="Back to top"
            >
              <span className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-40 animate-ping group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
              <ArrowUp size={16} className="relative z-10 animate-bounce group-hover:animate-none group-hover:-translate-y-1 group-hover:scale-125 transition-all duration-300" />
            </button>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
