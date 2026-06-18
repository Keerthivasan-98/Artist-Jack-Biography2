/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useAeoSeoGeoHead } from './components/AeoSeoGeoOptimizer';
import About from './components/About';
import Filmography from './components/Filmography';
import WebSeries from './components/WebSeries';
import Television from './components/Television';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import  TermsConditions from './components/TermsConditions';



export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  // Animated Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic AEO, SEO, GEO head tags and metadata sync
  useAeoSeoGeoHead(activeSection);

  // Inject JSON-LD Person Schema recursively for SEO
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Actor Jack Prabhu',
      'alternateName': 'Jack',
      'jobTitle': 'Actor',
      'gender': 'Male',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Chennai',
        'addressRegion': 'Tamil Nadu',
        'addressCountry': 'India',
      },
      'url': 'https://actorjack.com',
      'image': 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=800&auto=format&fit=crop',
      'sameAs': [
        'https://youtube.com/@actorjack.07',
        'https://www.instagram.com/actor_jack_official',
        'https://whatsapp.com/channel/0029Vaj18oXDJ6Gyp2Kaev18',
      ],
      'nationality': {
        '@type': 'Country',
        'name': 'India',
      },
      'knowsAbout': [
        'Tamil Cinema',
        'Acting',
        'Singing',
        'Songwriting',
        'Television Appearances',
        'Digital Web Series',
      ],
      'performerIn': [
        { '@type': 'Movie', 'name': 'Kaatrin Mozhi', 'dateCreated': '2018' },
        { '@type': 'Movie', 'name': 'Gurkha', 'dateCreated': '2019' },
        { '@type': 'Movie', 'name': 'Asuraguru', 'dateCreated': '2020' },
        { '@type': 'Movie', 'name': 'Sketch', 'dateCreated': '2018' },
        { '@type': 'Movie', 'name': 'Ghajinikanth', 'dateCreated': '2018' },
        { '@type': 'Movie', 'name': 'Kuttram Purinthal', 'dateCreated': '2021' },
         { '@type': 'Movie', 'name': 'Kavalthurai Ungal Nanban', 'dateCreated': '2020' }
      ],
    };

    const script = document.createElement('script');
    script.id = 'jack-person-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('jack-person-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Scroll spy implementation using a robust scroll event listener
  useEffect(() => {
    const sections = ['home', 'about', 'filmography', 'webseries', 'television', 'awards', 'gallery', 'media', 'contact'];
    
    const handleScroll = () => {
      // Ignore scroll spy updates if we are in a programmatic smooth scroll window
      if (
        (window as any).__isProgrammaticScroll &&
        Date.now() - (window as any).__isProgrammaticScroll < 1200
      ) {
        return;
      }

      let currentSection = 'home';
      const threshold = window.innerHeight * 0.3; // 30% from the top of the viewport

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Safeguard for scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        currentSection = sections[sections.length - 1];
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Quick navigational actions triggered from CTA buttons on landing
  const handleScrollToSegment = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      (window as any).__isProgrammaticScroll = Date.now();
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div id="portfolio-container" className="min-h-screen bg-[#0A0A0A] text-white selection:bg-yellow-500 selection:text-black">
      {/* Animated Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-[#D4AF37] to-yellow-300 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Dynamic Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' ? (
        <main id="portfolio-main-grid" className="relative">
        <Hero
          onCTA1Click={() => handleScrollToSegment('about')}
          onCTA2Click={() => handleScrollToSegment('media')}
        />
        <About />
        <Filmography />
        <WebSeries />
        <Television />
        <Awards />
        <Gallery />
        <Media />
        <Contact />
        </main>
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicy setCurrentPage={setCurrentPage} />
      ) : (
        <TermsConditions setCurrentPage={setCurrentPage} />
      )}

      {/* Footer credits and social hubs */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
