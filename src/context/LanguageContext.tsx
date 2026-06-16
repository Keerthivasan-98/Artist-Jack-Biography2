import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, LanguageCode, TranslationDict } from '../translations';
import { Movie, WebSeries, VideoItem, GalleryItem, MediaItem, TVSerial } from '../types';
import { MOVIES, WEB_SERIES, TV_SERIALS, VIDEOS, GALLERY, MEDIA } from '../data';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: keyof Omit<TranslationDict, 'data.movies' | 'data.webseries' | 'data.tvserials' | 'data.videos' | 'data.gallery' | 'data.media' | 'data.stats' | 'data.timeline'>) => string;
  movies: Movie[];
  webSeries: WebSeries[];
  television: TVSerial[];
  videos: VideoItem[];
  gallery: GalleryItem[];
  media: MediaItem[];
  stats: TranslationDict['data.stats'];
  timeline: TranslationDict['data.timeline'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved as LanguageCode) || 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const dict = translations[language];

  // Translation lookup helper function
  const t = (key: keyof Omit<TranslationDict, 'data.movies' | 'data.webseries' | 'data.tvserials' | 'data.videos' | 'data.gallery' | 'data.media' | 'data.stats' | 'data.timeline'>): string => {
    return (dict[key] as string) || (translations['en'][key] as string) || '';
  };

  // Merge localized data with metadata from data.ts
  const moviesList = dict['data.movies'].map((transMovie) => {
    const original = MOVIES.find((m) => m.id === transMovie.id);
    return {
      ...original,
      ...transMovie,
    } as Movie;
  });

  const webSeriesList = dict['data.webseries'].map((transSeries) => {
    const original = WEB_SERIES.find((w) => w.id === transSeries.id);
    return {
      ...original,
      ...transSeries,
    } as WebSeries;
  });

  const tvList = dict['data.tvserials'].map((transTv) => {
    const original = TV_SERIALS.find((t) => t.id === transTv.id);
    return {
      ...original,
      ...transTv,
    } as TVSerial;
  });

  const videosList = dict['data.videos'].map((transVideo) => {
    const original = VIDEOS.find((v) => v.id === transVideo.id);
    return {
      ...original,
      ...transVideo,
    } as VideoItem;
  });

  const galleryList = dict['data.gallery'].map((transGallery) => {
    const original = GALLERY.find((g) => g.id === transGallery.id);
    return {
      ...original,
      ...transGallery,
    } as GalleryItem;
  });

  const mediaList = dict['data.media'].map((transMedia) => {
    const original = MEDIA.find((m) => m.id === transMedia.id);
    return {
      ...original,
      ...transMedia,
    } as MediaItem;
  });

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        movies: moviesList,
        webSeries: webSeriesList,
        television: tvList,
        videos: videosList,
        gallery: galleryList,
        media: mediaList,
        stats: dict['data.stats'],
        timeline: dict['data.timeline']
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
