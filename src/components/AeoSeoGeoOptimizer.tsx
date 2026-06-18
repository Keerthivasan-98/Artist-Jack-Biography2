import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { aeoSeoGeoData, AeoSeoGeoSection } from '../data/aeoSeoGeoData';

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

    // 6b. Update Twitter Title
    let twTitle = document.querySelector('meta[property="twitter:title"]');
    if (!twTitle) {
      twTitle = document.createElement('meta');
      twTitle.setAttribute('property', 'twitter:title');
      document.head.appendChild(twTitle);
    }
    twTitle.setAttribute('content', sectionData.seoTitle);

    // 6c. Update Twitter Description
    let twDesc = document.querySelector('meta[property="twitter:description"]');
    if (!twDesc) {
      twDesc = document.createElement('meta');
      twDesc.setAttribute('property', 'twitter:description');
      document.head.appendChild(twDesc);
    }
    twDesc.setAttribute('content', sectionData.seoMeta);

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

    // Build compound schema containing Person, FAQPage & ItemList
    const dynamicSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          'name': 'Actor Jack Prabhu',
          'jobTitle': 'Actor',
          'description': 'Actor based in Chennai, Tamil Nadu, India.',
          'url': 'https://actorjack.com',
          'sameAs': [
            'https://www.instagram.com/actorjackprabhu/',
            'https://www.facebook.com/actorjackprabhu/',
            'https://www.imdb.com/name/nm10629579/'
          ],
          'knowsAbout': sectionData.geoEntities
        },
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
            'name': 'Actor Jack Prabhu',
            'description': 'Actor based in Chennai, Tamil Nadu, India.',
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
  // The background optimizer hook (useAeoSeoGeoHead) runs invisibly in App.tsx.
  // The user requested to remove this visual diagnostic widget from the UI.
  return null;
}

