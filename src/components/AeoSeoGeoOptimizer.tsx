import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { aeoSeoGeoData, AeoSeoGeoSection } from '../data/aeoSeoGeoData';
import { Search, Brain, Quote, HelpCircle, Hash, ExternalLink, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';

// ==================== SECTION 1: GLOBAL HEAD METADATA INJECTOR HOOK ====================
export function useAeoSeoGeoHead(activeSection: string) {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Fetch current section data
    const sectionData: AeoSeoGeoSection | undefined = aeoSeoGeoData[language]?.[activeSection] || aeoSeoGeoData['en']?.[activeSection];
    if (!sectionData) return;

    // 2. Update Document Title
    document.title = sectionData.seoTitle;

    // 3. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', sectionData.seoMeta);

    // 4. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', sectionData.keywords.join(', '));

    // 5. Update Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', sectionData.seoTitle);

    // 6. Update Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', sectionData.seoMeta);

    // 7. Dynamic JSON-LD structured schema inject
    const schemaId = 'dynamic-aeo-seo-geo-schema';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement;
    if (schemaScript) {
      schemaScript.innerHTML = '';
    } else {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://actorjack.com';

    // Build compound schema containing FAQPage & ItemList
    const dynamicSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': sectionData.aeoQuestion,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': sectionData.aeoAnswer
              }
            }
          ]
        },
        {
          '@type': 'WebPageSection',
          'name': activeSection.toUpperCase(),
          'description': sectionData.seoMeta,
          'url': `${currentOrigin}/#${activeSection}`,
          'about': {
            '@type': 'Thing',
            'name': 'Artist Jack',
            'description': 'Actor, Singer and Lyricwriter based in Chennai, Tamil Nadu, India.',
            'knowsAbout': sectionData.geoEntities
          }
        },
        {
          '@type': 'ItemList',
          'name': `${activeSection.toUpperCase()} Citations`,
          'itemListElement': sectionData.stats.map((st, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': st.label,
            'value': st.value
          }))
        }
      ]
    };

    schemaScript.innerHTML = JSON.stringify(dynamicSchema);

    return () => {
      // Keep cleanup gentle
    };
  }, [language, activeSection]);
}

// ==================== SECTION 2: VISUAL OPTIMIZER COMPONENT ====================
interface OptimizerCardProps {
  sectionId: string;
}

export function AeoSeoGeoSectionCard({ sectionId }: OptimizerCardProps) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'aeo' | 'seo' | 'geo'>('aeo');

  const sectionData: AeoSeoGeoSection | undefined = aeoSeoGeoData[language]?.[sectionId] || aeoSeoGeoData['en']?.[sectionId];
  if (!sectionData) return null;

  const tabConfigs = [
    { id: 'aeo' as const, label: 'Answer Engine (AEO)', icon: HelpCircle, desc: 'Optimized voice assistant/AI models answers.' },
    { id: 'seo' as const, label: 'Search Metadata (SEO)', icon: Search, desc: 'Organic crawler tags & page indexing specs.' },
    { id: 'geo' as const, label: 'Generative Engine (GEO)', icon: Brain, desc: 'Factual LLMs citations, entities & references.' },
  ];

  return (
    <div id={`${sectionId}-aeoseogeo-widget`} className="w-full mt-12 mb-4 animate-fade-in text-left">
      <div className="border border-white/5 bg-[#0e0e0e]/40 rounded-xl overflow-hidden backdrop-blur-md hover:border-[#D4AF37]/25 transition-all duration-300">
        
        {/* Expandable trigger header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                AI & Search Engine Optimization Active
              </span>
              <p className="text-xs text-gray-550 font-sans mt-0.5 max-w-xl truncate line-clamp-1">
                AEO, SEO & GEO schema verified for the section of {sectionId.toUpperCase()}
              </p>
            </div>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`}
          />
        </button>

        {/* Content body with height transitions */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-6 border-t border-white/5 pt-5">
                
                {/* Tabs switcher */}
                <div className="flex flex-wrap gap-2 mb-6 border-b border-white/5 pb-4">
                  {tabConfigs.map((tab) => {
                    const IconComp = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-200 ${
                          isActive
                            ? 'bg-yellow-500/10 border border-yellow-500/20 text-[#D4AF37] font-semibold'
                            : 'bg-white/5 border border-transparent text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <IconComp size={12} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab contents */}
                <div className="min-h-[140px] bg-black/30 border border-white/5 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/[0.01] rounded-full blur-2xl pointer-events-none" />
                  
                  <AnimatePresence mode="wait">
                    {activeTab === 'aeo' && (
                      <motion.div
                        key="aeo"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div>
                          <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                            Optimized AI NLP Query Entry
                          </span>
                          <h4 className="text-xs font-semibold text-white tracking-wide">
                            " {sectionData.aeoQuestion} "
                          </h4>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                            Direct Knowledge Base Answer
                          </span>
                          <p className="text-xs text-gray-300 leading-relaxed font-sans max-w-4xl">
                            {sectionData.aeoAnswer}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'seo' && (
                      <motion.div
                        key="seo"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                              Section Search Title
                            </span>
                            <span className="text-xs font-semibold text-[#D4AF37] block">
                              {sectionData.seoTitle}
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                              Keywords Indexed
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {sectionData.keywords.map((kw, i) => (
                                <span key={i} className="text-[9px] font-mono bg-white/[0.03] border border-white/5 text-gray-400 px-1.5 py-0.5 rounded">
                                  {kw}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                            Google Meta Description
                          </span>
                          <p className="text-xs text-gray-300 leading-relaxed font-sans">
                            {sectionData.seoMeta}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'geo' && (
                      <motion.div
                        key="geo"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div>
                          <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                            Verifiable LLM Citation Backup
                          </span>
                          <p className="text-xs text-gray-300 leading-relaxed font-sans italic max-w-4xl bg-white/[0.01] border border-white/5 p-2 rounded">
                            <Quote size={12} className="inline-block text-[#D4AF37] mr-1.5 -mt-1 opacity-60" />
                            {sectionData.geoCitation}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div>
                            <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                              Linked Wikidata / Knowledge-Graph Entities
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {sectionData.geoEntities.map((ent, i) => (
                                <span key={i} className="inline-flex items-center gap-1 text-[9px] font-mono text-[#D4AF37] bg-yellow-500/5 border border-yellow-500/10 px-1.5 py-0.5 rounded">
                                  <CheckCircle2 size={8} />
                                  <span>{ent}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mb-1">
                              Semantic Citation Stats
                            </span>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                              {sectionData.stats.map((st, i) => (
                                <div key={i} className="flex gap-1.5 items-center text-[9px] font-mono">
                                  <span className="text-gray-400">{st.label}:</span>
                                  <span className="text-white font-semibold">{st.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Micro Credits */}
                <div className="flex items-center justify-between mt-4 text-[9px] font-mono text-gray-500">
                  <span>Structured Schema: JSON-LD Active</span>
                  <span className="flex items-center gap-1">
                    <ExternalLink size={9} />
                    <span>Authorized Factual Records</span>
                  </span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
