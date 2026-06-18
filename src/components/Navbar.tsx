import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Disc, Globe, ChevronDown } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES, LanguageCode } from '../translations';
import logoImg from '../../assets/images/logo/logo-jack.png';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setCurrentPage: (page: 'home' | 'privacy' | 'terms') => void;
}

export default function Navbar({ activeSection, setActiveSection, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'filmography', label: t('nav.filmography') },
    { id: 'webseries', label: t('nav.webseries') },
    { id: 'television', label: t('nav.television') },
    { id: 'awards', label: t('nav.awards') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'media', label: t('nav.media') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    (window as any).__isProgrammaticScroll = Date.now();
    setIsOpen(false);
    setActiveSection(id);
    setCurrentPage('home');

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - 80; // offset of the navigation bar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-yellow-500/10 py-3 shadow-2xl'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logoImg} alt="Actor Jack Prabhu Logo" className="h-17 w-auto object-contain scale-[1.3] origin-left drop-shadow-[0_0_8px_rgba(212,175,55,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all duration-300" />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-[#121212]/30 border border-white/5 p-1 rounded-full px-2 backdrop-blur-sm">
          {navItems.map((item, i) => (
            <motion.a
              key={item.id}
              id={`nav-item-desktop-${item.id}`}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-colors duration-300 ${activeSection === item.id ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {activeSection === item.id && (
                <motion.span
                  id={`nav-active-pill-${item.id}`}
                  layoutId="activeTab"
                  className="absolute inset-0 bg-yellow-500 rounded-full"
                  style={{ originY: '0px' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Desktop Controls (Language Selector & Quick Inquire CTA) */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Desktop Language Selector */}
          <div className="relative" id="language-selector-desktop">
            <button
              id="lang-selector-btn"
              onClick={() => setIsLangOpen(!isLangOpen)}
              onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-[#121212]/40 text-xs font-mono font-medium text-gray-300 hover:text-white hover:border-yellow-500/20 transition-all duration-300"
            >
              <Globe size={13} className="text-[#D4AF37]" />
              <span>{LANGUAGES.find(l => l.code === language)?.label}</span>
              <ChevronDown size={11} className={`text-gray-500 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  id="lang-dropdown-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-32 bg-[#0D0D0D] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 z-50"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      id={`lang-option-${lang.code}`}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors ${language === lang.code
                        ? 'text-black bg-[#D4AF37] font-semibold'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Menu button */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} className="text-[#D4AF37]" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            className="fixed inset-x-0 top-[60px] h-[calc(100vh-60px)] bg-[#0A0A0A] border-t border-white/5 z-40 flex flex-col justify-between p-8 overflow-y-auto lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col space-y-3 my-auto text-center py-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  id={`nav-item-mobile-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-xl font-serif tracking-wide py-1 border-b border-white/5 transition-all block ${activeSection === item.id
                    ? 'text-[#D4AF37] font-semibold scale-105'
                    : 'text-gray-400 hover:text-white'
                    }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.25 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Language Selector Grid */}
            <div className="border-t border-b border-white/5 py-4 flex flex-col space-y-3" id="language-selector-mobile">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">
                Language / மொழி / ഭാവ
              </span>
              <div className="grid grid-cols-3 gap-2">
                {LANGUAGES.map((lang) => {
                  const isSelected = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      id={`lang-mobile-option-${lang.code}`}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`py-1.5 text-[11px] font-mono rounded-lg border transition-all ${isSelected
                        ? 'border-[#D4AF37] bg-yellow-500/10 text-[#D4AF37] font-bold'
                        : 'border-white/5 bg-white/5 text-gray-400'
                        }`}
                    >
                      {lang.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* In-drawer contacts & socials */}
            <div className="border-t border-white/5 pt-6 flex flex-col space-y-2 items-center text-center">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Chennai, India</span>
              <p className="text-xs text-gray-400">jack@actorjack.com</p>
              <div className="flex gap-4">
                <a
                  id="mobile-drawer-ig"
                  href="https://www.instagram.com/actor_jack_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D4AF37] border-b border-[#D4AF37]/20 flex items-center gap-1.5"
                >
                  <FaInstagram size={12} /> Instagram
                </a>
                <a
                  id="mobile-drawer-yt"
                  href="https://youtube.com/@actorjack.07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
                >
                  <FaYoutube size={12} /> YouTube
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
