import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Heart, Youtube, Instagram, MessageCircle, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <Instagram size={16} />,
      url: 'https://www.instagram.com/actor_jack_official',
      id: 'footer-social-instagram',
      label: 'Instagram',
    },
    {
      icon: <Youtube size={16} />,
      url: 'https://youtube.com/@actorjack.07',
      id: 'footer-social-youtube',
      label: 'YouTube',
    },
    {
      icon: <MessageCircle size={16} />,
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
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 text-left relative overflow-hidden">
      <div className="absolute bottom-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-10">
          
          {/* Bio text block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1 px-2 border border-yellow-500/20 bg-yellow-500/5 rounded">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold">AJ</span>
              </div>
              <span className="text-sm font-serif font-bold tracking-widest text-white uppercase">{t('footer.brand') || 'ARTIST JACK'}</span>
            </div>
            
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed font-sans">
              {t('footer.desc') || 'Tamil Actor, Independent Musician, and Singer based in Chennai. Presenting cinematic truth and acoustic sound to audiences across movies, television, and digital platforms.'}
            </p>
          </div>

          {/* Navigation Links column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-4">{t('footer.navigations') || 'Navigations'}</h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.home') || 'Home'}</a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.about') || 'About'}</a>
                </li>
                <li>
                  <a href="#filmography" onClick={(e) => handleNavClick(e, 'filmography')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.filmography') || 'Film Credits'}</a>
                </li>
                <li>
                  <a href="#videos" onClick={(e) => handleNavClick(e, 'videos')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.videos') || 'Videos'}</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-4">{t('footer.sections') || 'Sections'}</h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#webseries" onClick={(e) => handleNavClick(e, 'webseries')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.webseries') || 'Web Series'}</a>
                </li>
                <li>
                  <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.gallery') || 'Gallery'}</a>
                </li>
                <li>
                  <a href="#media" onClick={(e) => handleNavClick(e, 'media')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.media') || 'Media'}</a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-500 hover:text-[#D4AF37] transition-all">{t('nav.contact') || 'Contact'}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social connections */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-4">{t('footer.channels') || 'Official Channels'}</h5>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#121212] border border-white/5 hover:border-yellow-500/30 hover:bg-[#D4AF37]/5 text-gray-400 hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center shrink-0"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <p className="text-[10px] text-gray-600 leading-normal font-sans pt-1">
              {t('footer.social_info') || 'Follow Artist Jack on social handles to get instant previews of updates from filmmaking studios and recording boxes.'}
            </p>
          </div>

        </div>

        {/* Copyright block */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-600 font-mono">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>{t('footer.rights') ? t('footer.rights').replace('2026', new Date().getFullYear().toString()) : `© ${new Date().getFullYear()} Artist Jack. All rights reserved.`}</span>
          </div>

          <div className="flex items-center gap-4">
            <span>{t('hero.chennai') || 'Chennai, Tamil Nadu, India'}</span>
            <button
              id="back-to-top-btn"
              onClick={handleScrollToTop}
              className="p-1 px-2.5 bg-[#D4AF37]/5 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded text-[10px] font-mono flex items-center gap-1 tracking-wider transition-all duration-300 cursor-pointer text-[#D4AF37]"
            >
              <ArrowUp size={11} />
              {t('footer.top') || 'TOP'}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
