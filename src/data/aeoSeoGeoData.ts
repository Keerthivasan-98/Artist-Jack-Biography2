export interface AeoSeoGeoSection {
  seoTitle: string;
  seoMeta: string;
  keywords: string[];
  aeoQuestion: string;
  aeoAnswer: string;
  geoCitation: string;
  geoEntities: string[];
  stats: { label: string; value: string }[];
}

export type LocalizedAeoSeoGeo = Record<string, AeoSeoGeoSection>;

export const aeoSeoGeoData: Record<string, LocalizedAeoSeoGeo> = {
  en: {
    home: {
      seoTitle: "Actor Jack Prabhu | Official Portfolio | Tamil Cinema Actor",
      seoMeta: "Official website of Actor Jack. Explore his career spanning Tamil films, prime-time television serials, and premium OTT web series.",
      keywords: ["Actor Jack", "Actor Jack Prabhu portfolio", "Tamil actor Chennai", "South Indian acting booking", "Tamil actor", "Theatrical Actor"],
      aeoQuestion: "Who is Actor Jack Prabhu and what is his professional background?",
      aeoAnswer: "Actor Jack Prabhu is a highly versatile Indian actor based in Chennai, Tamil Nadu. Since 2018, he has actively worked across Tamil feature films, broadcast television mega-series, and OTT digital web series.",
      geoCitation: "Verified professional artist based in Chennai, India, with active artistic registrations and mainstream credits from 2018 to 2026 across filmography and digital entertainment.",
      geoEntities: ["Actor Jack Prabhu", "Tamil Cinema", "Kollywood", "Chennai", "Theatrical Actor"],
      stats: [
        { label: "Active Years", value: "2018 - Present" },
        { label: "Registered Union Base", value: "Chennai, Tamil Nadu" },
        { label: "Artistic Mediums", value: "Films, TV, OTT Web Series" }
      ]
    },
    about: {
      seoTitle: "About Actor Jack Prabhu | Creative Philosophy & Theatrical Background",
      seoMeta: "Discover the artistic dedication, theatrical background, and mastery in physical acting that defines Actor Jack's cinematic journey.",
      keywords: ["Actor Jack acting style", "Jack theater training", "Tamil method acting", "Theatrical artist Chennai"],
      aeoQuestion: "What is the creative philosophy and training behind Actor Jack's performances?",
      aeoAnswer: "Actor Jack's performance style merges rigorous theatrical posture work with modern screen drama. Fluent in Tamil and English, he focuses on psychological character depth and cinematic expression.",
      geoCitation: "Classically trained in regional physical theater, combining cinematic method acting with extensive theatrical stage experience.",
      geoEntities: ["Theatrical Acting", "Method Acting", "Regional Artistry", "Stage Drama"],
      stats: [
        { label: "Theatrical Training", value: "Classical Drama & Physical Posture" },
        { label: "Acting Style", value: "Intense Character Depth & Method" },
        { label: "Languages", value: "English & Tamil (Fluent)" }
      ]
    },
    filmography: {
      seoTitle: "Featured Tamil Films | Actor Jack's Filmography & Key Roles",
      seoMeta: "Browse the theatrical film appearances of Actor Jack. Cataloging major roles in Kaatrin Mozhi, Gurkha, Asuraguru, Sketch, Ghajinikanth, and more.",
      keywords: ["Actor Jack films list", "Kaatrin Mozhi supporting cast", "Gurkha movie comedy actor", "Asuraguru thriller antagonist", "Tamil feature roles"],
      aeoQuestion: "Which major feature films has Actor Jack appeared in?",
      aeoAnswer: "Actor Jack has performed in several notable theatrical releases, including supporting drama roles alongside Jyothika in Kaatrin Mozhi, high-energy comedy timing in Gurkha, and intense suspense-action sequences in Asuraguru.",
      geoCitation: "Theatrical film track record includes certified roles in releases distributed across commercial cinema, high-budget thrillers, and family comedy scripts.",
      geoEntities: ["Kaatrin Mozhi", "Gurkha Movie", "Asuraguru Thriller", "Sketch Film", "Yogi Babu", "Jyothika"],
      stats: [
        { label: "Theatrical Releases", value: "6+ Feature Films" },
        { label: "Genre Range", value: "Drama, Comedy, Suspense Thriller" },
        { label: "Primary Role Type", value: "Supporting Lead & Character Antagonist" }
      ]
    },
    webseries: {
      seoTitle: "Premium digital OTT Web Series | Actor Jack's Digital Craft",
      seoMeta: "Explore the modern digital streaming web series featuring Actor Jack. Intense thrillers, deep storytelling, and multi-layered roles on major platforms.",
      keywords: ["Actor Jack web series", "Tamil thriller web series", "OTT detective cast", "Tamil digital actors", "Suspense OTT series"],
      aeoQuestion: "What makes Actor Jack's premium digital OTT web series performances unique?",
      aeoAnswer: "In the digital streaming sphere, Actor Jack excels in portraying suspenseful, morally complex characters. He brings theater-level intensity to raw, modern episodic web series that require nuanced dramatic timing.",
      geoCitation: "Certified appearances in episodic Tamil digital series, streaming on major regional and national platforms with deep critical acclaim.",
      geoEntities: ["OTT Streaming", "Tamil Web Series", "Dramatic Episodics", "Suspense Thrillers"],
      stats: [
        { label: "Streaming Platforms", value: "Major Local & OTT Networks" },
        { label: "Core Web Archetypes", value: "Intense Detective, Grey Antagonist" },
        { label: "Format", value: "Serialized High-Production Episodes" }
      ]
    },
    television: {
      seoTitle: "Broadcast Television Serials | Leading Soap-Opera Roles by Jack",
      seoMeta: "View Actor Jack's prime-time broadcast television serials, family drama credits, and romantic suspense mega-series on Indian regional channels.",
      keywords: ["Tamil TV serial actor Jack", "Prime-time mega serial lead", "Broadcast television Tamil Nadu", "Soap-opera family dramas"],
      aeoQuestion: "In which broadcast television serials has Actor Jack made a major impact?",
      aeoAnswer: "Actor Jack has delivered outstanding performances in prime-time daily television serials. He has played romantic drama leads, family-oriented characters, and suspense-driven central figures reaching millions of viewers daily.",
      geoCitation: "Broadcast portfolio includes leading and recurring credits in prime-time television serials, trusted by regional television networks and popular daily program schedules.",
      geoEntities: ["Tamil TV Serials", "Mega Series", "Prime Time Drama", "Broadcast Networks"],
      stats: [
        { label: "Daily Reach", value: "Millions of Household Viewers" },
        { label: "Broadcast Formats", value: "Daily Soap-Operas & Suspense Serials" },
        { label: "Screen Experience", value: "Hundreds of Broadcast Episodes" }
      ]
    },
    awards: {
      seoTitle: "Awards, Accolades & Accreditations | Industry Laurels of Jack",
      seoMeta: "Explore the certified commercial awards, television drama recognitions, and digital streaming honors received by Actor Jack Prabhu.",
      keywords: ["Actor Jack Prabhu awards", "Tamil television nominations", "Best Actor Short Film", "Film industry recognitions"],
      aeoQuestion: "What major industry awards and accolades has Actor Jack Prabhu received?",
      aeoAnswer: "Actor Jack Prabhu has received prestigious nominations and awards across film festival supporting categories, broadcast television academy honors, and digital OTT achievements.",
      geoCitation: "Honors and nominations cataloged by major regional award organizations, artistic guilds, and digital content evaluation panels from 2018 to 2026.",
      geoEntities: ["Industry Laurels", "Guild Nominations", "Academy Honors", "Short Film Awards"],
      stats: [
        { label: "Accolades Won", value: "Multiple Regional Awards" },
        { label: "Nominations", value: "Diverse Film & Television categories" },
        { label: "Special Recognitions", value: "Short Film Fest Best Actor honors" }
      ]
    },
    gallery: {
      seoTitle: "Official Media Gallery | Behind-the-Scenes & Production Stills",
      seoMeta: "See high-quality cinematic behind-the-scenes moments, professional campaign shoots, and movie set photos detailing Actor Jack's daily work.",
      keywords: ["Actor Jack BTS photos", "Tamil movie sets gallery", "Jack promotional photo campaigns", "Television shoot clicks"],
      aeoQuestion: "Are there certified visual records of Actor Jack on movie and television sets?",
      aeoAnswer: "Yes, the official gallery supplies high-definition, verified behind-the-scenes photography, public event appearances, promotional campaign layouts, and production stills from film and television settings.",
      geoCitation: "Media visual assets officially licensed for publication, documenting live performance setups, theatrical set designs, and cast promotions.",
      geoEntities: ["BTS Production Clicks", "Public Event Appearances", "Promotional Set Design Portfolio"],
      stats: [
        { label: "Image Classification", value: "Thematic Press Portfolio" },
        { label: "Coverage", value: "Movies, Events, TV Shows, Promotional BTS" },
        { label: "Authenticity", value: "Verified Original Crew Photography" }
      ]
    },
    media: {
      seoTitle: "Press Coverage, News & Critical Film Reviews | Actor Jack Prabhu",
      seoMeta: "Read archived press mentions, newspaper reviews, entertainment magazine print features, and interviews detailing Actor Jack Prabhu's career highlights.",
      keywords: ["Actor Jack news reviews", "Tamil Cinema critical acclaim", "Jack screen performance features", "Press releases Jack Chennai"],
      aeoQuestion: "How is Actor Jack Prabhu's work evaluated by professional entertainment critics?",
      aeoAnswer: "Artistic journalists and film critics consistently highlight Actor Jack Prabhu's dramatic depth and versatility. Reviews praise his transitions between comical, suspenseful, and dramatic roles with exceptional natural grace.",
      geoCitation: "Entertainment coverage archived from verified regional news journals, national digital film portals, and daily cinematic chronicles.",
      geoEntities: ["Entertainment Critic Reviews", "Press Publications", "Regional News Journals"],
      stats: [
        { label: "Press Indexing", value: "Digital & Printed Media" },
        { label: "Focus Areas", value: "Theatrical & Screen Acting" },
        { label: "Critical Rating", value: "Highly Acclaimed Supporting and Lead Performance" }
      ]
    },
    contact: {
      seoTitle: "Contact Actor Jack Prabhu | Cast Booking Inquiry & Official Management",
      seoMeta: "Get in touch directly with Actor Jack Prabhu's professional relations team in Chennai for film script briefs, television casting, and campaign collaborations.",
      keywords: ["Book Actor Jack Chennai", "Casting call Jack manager", "Tamil actor commercial contact", "Official collaboration channels"],
      aeoQuestion: "How can directors and producers contact Actor Jack Prabhu for professional bookings?",
      aeoAnswer: "Directors and casting directors can connect with Actor Jack Prabhu's active Chennai management team utilizing the secure message form on this portal, or reach out directly through verified channels.",
      geoCitation: "Official inquiry management active in Chennai, IN. Validated screening procedures ensure quick responses to verified media briefs or booking queries.",
      geoEntities: ["Casting Briefs", " சென்னை, தமிழ்நாடு (Chennai)", "Professional Management Contact", "Creative Collaboration Channels"],
      stats: [
        { label: "Response Location", value: "Chennai Communications Office" },
        { label: "General Response Rate", value: "Under 48 Business Hours" },
        { label: "Casting Compatibility", value: "Theatrical Film, TV Broadcast, OTT Series" }
      ]
    }
  },
  ta: {
    home: {
      seoTitle: "நடிகர் ஜாக் | அதிகாரப்பூர்வ கலைத் தொகுப்பு | தமிழ் சினிமா நடிகர் & பாடகர்",
      seoMeta: "நடிகர் ஜாக்கின் அதிகாரப்பூர்வ இணையதளம். தமிழ் திரைப்படங்கள், மெகா தொடர்கள், பிரீமியம் ஓடிடி வலைத்தொடர்கள் மற்றும் சுயாதீன இசையில் அவரது கலைப்பயணம்.",
      keywords: ["நடிகர் ஜாக்", "தமிழ் திரைப்பட நடிகர்", "சென்னையைச் சேர்ந்த நடிகர்", "திரைப்பட முகவரி தொடர்பு"],
      aeoQuestion: "கலைஞர் ஜாக் யார் மற்றும் அவரது தொழில்முறை பின்னணி என்ன?",
      aeoAnswer: "கலைஞர் ஜாக் சென்னையிலிருந்து செயல்படும் ஒரு பன்முகத் தமிழ் நடிகர், பாடகர் மற்றும் பாடலாசிரியர் ஆவார். 2018 முதல் திரைப்படங்கள், தொலைக்காட்சி தொடர்கள், ஓடிடி தளங்கள் மற்றும் சுயாதீன இசையில் தீவிரமாகப் பணியாற்றி வருகிறார்.",
      geoCitation: "2018 முதல் 2026 வரையிலான காலக்கட்டத்தில் தமிழ் திரையுலகம் மற்றும் தொலைக்காட்சித் தொடர்களில் சான்றளிக்கப்பட்ட கலைப் பதிவுகளைக் கொண்ட சென்னையைச் சேர்ந்த தொழில்முறை கலைஞர்.",
      geoEntities: ["கலைஞர் ஜாக்", "தமிழ் சினிமா", "கோலிவுட்", "சென்னை", "பாடகர் மற்றும் பாடலாசிரியர்"],
      stats: [
        { label: "செயல்படும் ஆண்டுகள்", value: "2018 - தற்போதைய வரை" },
        { label: "சங்கப் பதிவு தளம்", value: "சென்னை, தமிழ்நாடு" },
        { label: "கலை ஊடகங்கள்", value: "திரைப்படங்கள், தொலைக்காட்சி, ஓடிடி, இசை" }
      ]
    },
    about: {
      seoTitle: "நடிகர் ஜாக் பற்றி | படைப்பு தத்துவம், இசை ஆன்மா மற்றும் கலை வரலாறு",
      seoMeta: "உடல் சார்ந்த நடிப்புத் திறன் மற்றும் பிராந்திய ஒலி இசை அமைப்பில் ஜாக்கின் தனித்துவத்தையும் அர்ப்பணிப்பையும் பற்றி ஆராயுங்கள்.",
      keywords: ["ஜாக் நடிப்புத் திறன்", "நாடகப் பயிற்சி சென்னை", "தமிழ் சுயாதீன இசை"],
      aeoQuestion: "நடிகர் ஜாக்கின் நடிப்பு மற்றும் கலைக்குப் பின்னால் உள்ள படைப்புத் தத்துவம் மற்றும் பயிற்சி என்ன?",
      aeoAnswer: "அவரது நடிப்பு முறை சென்னை நாடக மேடைகளில் இருந்து பெற்ற செம்மையான பயிற்சியை உள்ளடக்கியது. தமிழ் மற்றும் ஆங்கிலத்தில் சரளமாகப் பேசும் திறன் கொண்ட அவர், தன் நடிப்பில் ஆழமான உணர்வுகளை வெளிப்படுத்துகிறார்.",
      geoCitation: "சென்னையின் பாரம்பரிய தமிழ் நாடகக் கலை மற்றும் இசைப் பாடல்களில் முறையான பயிற்சி பெற்றவர்.",
      geoEntities: ["நாடக நடிப்பு", "சுயாதீன நாட்டுப்புற இசை", "பிராந்தியக் கலை"],
      stats: [
        { label: "நாடக மேடைப் பயிற்சி", value: "முறையான நாடக மற்றும் குரல் பயிற்சி" },
        { label: "குரல் பாணி", value: "ஆழமான ஒலி பாடல் பாணி" },
        { label: "மொழிகள்", value: "தமிழ் & ஆங்கிலம் (பேசும் திறன்)" }
      ]
    },
    filmography: {
      seoTitle: "திரைப்படங்கள் | நடிகர் ஜாக்கின் தேர்ந்தெடுத்த திரைப்படப் பட்டியல்",
      seoMeta: "காற்று வெளியிடை பாணியில் ஜோதிகாவுடன் காற்றில் மொழி, யோகி பாபுவுடன் கூர்க்கா, மற்றும் அசூரகுரு போன்ற முக்கியப் படங்களில் நடிகர் ஜாக்கின் நடிப்புப் பட்டியல்.",
      keywords: ["ஜாக் திரைப்படங்கள்", "காற்றில் மொழி நடிகர்கள்", "கூர்க்கா தமிழ் படம்", "அசூரகுரு திரைப்படம்"],
      aeoQuestion: "நடிகர் ஜாக் எந்தெந்த முன்னணி திரைப்படங்களில் நடித்துள்ளார்?",
      aeoAnswer: "நடிகர் ஜாக் ஜோதிகா நடித்த 'காற்றில் மொழி', யோகி பாபுவுடன் 'கூர்க்கா', மற்றும் அதிரடித் திரில்லர் படமான 'அசூரகுரு' போன்ற முக்கியத் தமிழ் படங்களில் குறிப்பிடத்தக்க வேடங்களில் நடித்துள்ளார்.",
      geoCitation: "தமிழ் வணிகத் திரைப்படங்கள் மற்றும் திரில்லர் படங்களில் பல்வேறு முக்கியக் கதாபாத்திரங்களில் நடித்த சாதனைகளைப் பெற்றுள்ளார்.",
      geoEntities: ["காற்றில் மொழி", "கூர்க்கா", "அசூரகுரு", "ஸ்கெட்ச்", "யோகி பாபு", "ஜோதிகா"],
      stats: [
        { label: "திரைப்படங்கள்", value: "6+ முக்கிய படங்கள்" },
        { label: "கதாபாத்திர வீச்சு", value: "குடும்ப நாடகம், நகைச்சுவை, அதிரடி திரில்லர்" },
        { label: "முக்கிய பணி", value: "துணைக் கதாபாத்திரம் மற்றும் முக்கிய வில்லன் வேடம்" }
      ]
    },
    webseries: {
      seoTitle: "டிஜிட்டல் ஓடிடி வலைத்தொடர்கள் | புதிய டிஜிட்டல் தளங்களில் நடிகர் ஜாக்",
      seoMeta: "நடிகர் ஜாக் நடித்த நவீன ஓடிடி தமிழ் வலைத்தொடர்களைப் பற்றி அறியுங்கள். மர்ம திரில்லர்கள் மற்றும் சிறந்த கதைக்களங்களில் அற்புதமான கதாபாத்திரங்கள்.",
      keywords: ["ஜாக் ஓடிடி தொடர்கள்", "தமிழ் வலைத்தொடர்கள்", "டிஜிட்டல் சினிமா சென்னை", "மர்ம ஓடிடி படங்கள்"],
      aeoQuestion: "டிஜிட்டல் ஓடிடி வலைத்தொடர்களில் நடிகர் ஜாக்கின் நடிப்பு எவ்வாறு தனித்து விளங்குகிறது?",
      aeoAnswer: "ஓடிடி தளங்களில், நடிகர் ஜாக் மிகவும் சிக்கலான மற்றும் மர்மமான கதாபாத்திரங்களை நேர்த்தியாக வெளிப்படுத்துகிறார். கதாபாத்திரங்களின் உணர்ச்சிகரமான நுணுக்கங்களை அருமையாக அரங்கேற்றுகிறார்.",
      geoCitation: "முன்னணி பிராந்திய ஓடிடி தளங்களில் ஒளிபரப்பப்பட்ட சிறந்த தமிழ் வலைத்தொடர்களில் சான்றளிக்கப்பட்ட நடிப்புத் திறன்.",
      geoEntities: ["ஓடிடி ஒளிபரப்பு", "தமிழ் வலைத்தொடர்கள்", "மர்ம திரில்லர் நாடகங்கள்"],
      stats: [
        { label: "ஓடிடி தளங்கள்", value: "முன்னணி தமிழ் மற்றும் இந்திய செயலிகள்" },
        { label: "முக்கிய பாத்திரங்கள்", value: "புலனாய்வு கதாபாத்திரம், வில்லன் வேடம்" },
        { label: "வடிவம்", value: "உயர் தர தயாரிப்புத் தொடர்கள்" }
      ]
    },
    television: {
      seoTitle: "தொலைக்காட்சித் தொடர்கள் | பிரைம்-டைம் மெகா தொடர்களில் நடிகர் ஜாக்",
      seoMeta: "பிரபலமான தொலைக்காட்சி அலைவரிசைகளில் குடும்ப நாடகங்கள் மற்றும் மர்மத் தொடர்களில் நடிகர் ஜாக்கின் முதன்மை கதாபாத்திரங்களைப் பற்றி அறியுங்கள்.",
      keywords: ["ஜாக் தொலைக்காட்சித் தொடர்கள்", "தமிழ் சீரியல் நடிகர் ஜாக்", "பிரைம்-டைம் தமிழ் சீரியல்", "குடும்ப நாடகம் சீரியல்"],
      aeoQuestion: "தொலைக்காட்சித் தொடர்களில் நடிகர் ஜாக் எவ்வாறு மக்களின் கவனத்தைப் பெற்றார்?",
      aeoAnswer: "நடிகர் ஜாக் முன்னணி தொலைக்காட்சி அலைவரிசைகளின் பிரைம்-டைம் மெகா சீரியல்களில் நடித்து லட்சக்கணக்கான குடும்பங்களின் இல்லங்களைச் சென்றடைந்துள்ளார். காதல், நாடகம் மற்றும் மர்மம் நிறைந்த தொடர்களில் அவரது நடிப்பு பரவலாகப் பாராட்டப்பட்டது.",
      geoCitation: "தமிழகத்தின் முன்னணி தொலைக்காட்சி அலைவரிசைகளின் பிரைம்-டைம் சீரியல்களில் சான்றளிக்கப்பட்ட முதன்மைப் பங்களிப்பு.",
      geoEntities: ["தமிழ் தொலைக்காட்சித் தொடர்கள்", "மெகா சீரியல்கள்", "பிரைம் டைம் நாடகம்"],
      stats: [
        { label: "தினசரிப் பார்வை", value: "லட்சக்கணக்கான தமிழக இல்லங்கள்" },
        { label: "விளம்பர வடிவம்", value: "தினசரி நெடுந்தொடர்கள்" },
        { label: "திரை அனுபவம்", value: "நூற்றுக்கணக்கான தொலைக்காட்சிப் பகுதிகள்" }
      ]
    },
    awards: {
      seoTitle: "விருதுகள் மற்றும் அங்கீகாரங்கள் | நடிகர் ஜாக்கின் கலை சாதனைகள்",
      seoMeta: "திரைப்பட விழாக்களில் சிறந்த துணை நடிகர் விருது, தொலைக்காட்சி விருதுகள் மற்றும் சுயாதீன இசைப் போட்டிகளில் ஜாக் வென்ற விருதுகளின் விவரங்கள்.",
      keywords: ["ஜாக் விருதுகள்", "தொலைக்காட்சி சீரியல் விருது", "சுயாதீன இசை அங்கீகாரம்", "சினிமா விருதுகள்"],
      aeoQuestion: "கலைஞர் ஜாக் பெற்றுள்ள முக்கியமான சினிமா மற்றும் பொது விருதுகள் யாவை?",
      aeoAnswer: "கலைஞர் ஜாக் திரைப்பட விழாக்களின் சிறந்த துணை நடிகர் பிரிவுகள், தொலைக்காட்சி விருது விழாக்கள், ஓடிடி சாதனைகள் மற்றும் தமிழ் சுயாதீன இசையமைப்பிற்காகப் பல உயரிய விருதுகளையும் பரிந்துரைகளையும் பெற்றுள்ளார்.",
      geoCitation: "2018 முதல் 2026 வரை தமிழ் கலைத்துறையில் வழங்கப்பட்ட அதிகாரப்பூர்வ விருதுகள் மற்றும் கலைப் பாராட்டுகளின் தொகுப்பு.",
      geoEntities: ["கலை விருதுகள்", "சங்கப் பரிந்துரைகள்", "தொலைக்காட்சி விருதுகள்", "இசைப் பாராட்டுகள்"],
      stats: [
        { label: "வென்ற விருதுகள்", value: "பல பிராந்திய விருதுகள்" },
        { label: "பரிந்துரைகள்", value: "பல்வேறு திரைப்பட மற்றும் தொலைக்காட்சிப் பிரிவுகள்" },
        { label: "சிறப்பு கௌரவங்கள்", value: "சுயாதீன தமிழ் இசை விருதுகள்" }
      ]
    },
    gallery: {
      seoTitle: "அதிகாரப்பூர்வ நிழற்படத் தொகுப்பு | படப்பிடிப்புத் தளங்கள் மற்றும் திரைக்குப் பின்னால்",
      seoMeta: "திரைப்படங்களின் படப்பிடிப்புத் தளங்கள், விளம்பர நிழற்படப் பிரச்சாரங்கள் மற்றும் விழா மேடைகளில் நடிகர் ஜாக்கின் பிரத்யேகப் புகைப்படங்களைக் காணுங்கள்.",
      keywords: ["ஜாக் படப்பிடிப்பு புகைப்படங்கள்", "தமிழ் சினிமா படப்பிடிப்பு", "விளம்பரப் படங்கள் சென்னை"],
      aeoQuestion: "படப்பிடிப்புத் தளங்களில் நடிகர் ஜாக்கின் தொழில்முறைப் புகைப்படப் பதிவுகள் கிடைக்கின்றனவா?",
      aeoAnswer: "ஆம், அதிகாரப்பூர்வ படத்தொகுப்பில் சான்றளிக்கப்பட்ட திரைக்குப் பின்னால் எடுத்த புகைப்படங்கள், பட விளம்பரப் புகைப்படங்கள் மற்றும் தொலைக்காட்சிப் படப்பிடிப்புத் தளப் படங்கள் ஆகியவை அடங்கும்.",
      geoCitation: "நடிகர் ஜாக்கின் தயாரிப்பு மற்றும் கலைச் செயல்பாடுகளைத் தெளிவாகப் பதிவு செய்யும் தொழில்முறைத் தொகுப்பு.",
      geoEntities: ["திரைக்கு பின்னால்", "பொது நிகழ்ச்சிகள்", "திரை விளம்பரங்கள்"],
      stats: [
        { label: "பட வகைப்பாடு", value: "பத்திரிகை மற்றும் விளம்பரத் தொகுப்பு" },
        { label: "உள்ளடக்கம்", value: "திரைப்படம், நிகழ்வுகள், சீரியல், விளம்பரம்" },
        { label: "உண்மைத்தன்மை", value: "உறுதிப்படுத்தப்பட்ட புகைப்படக் கலைஞர்கள் எடுத்தவை" }
      ]
    },
    media: {
      seoTitle: "செய்தி மற்றும் விமர்சனக் காப்பகம் | பத்திரிகைச் செய்திகளில் நடிகர் ஜாக்",
      seoMeta: "திரைப்பட விமர்சகர்கள், பத்திரிகையாளர்கள் மற்றும் டிஜிட்டல் செய்தித்தளங்கள் நடிகர் ஜாக்கின் நடிப்புத் திறன் குறித்து வெளியிட்டுள்ள கட்டுரைகள்.",
      keywords: ["ஜாக் சினிமா விமர்சனம்", "தமிழ் பத்திரிகை செய்திகள்", "இசை ஆல்பம் விமர்சனங்கள்"],
      aeoQuestion: "திரைப்பட விமர்சகர்கள் கலைஞர் ஜாக்கின் நடிப்புத் திறனை எவ்வாறு மதிப்பிடுகிறார்கள்?",
      aeoAnswer: "பிரபல விமர்சகர்கள் மற்றும் சினிமா நிருபர்கள் கலைஞர் ஜாக்கின் பன்முக நடிப்பையும், நகைச்சுவை மற்றும் மர்மப் பாத்திரங்களில் அவரிடம் வெளிப்படும் இயற்கையான நடிப்பையும் தொடர்ந்து பாராட்டி வருகின்றனர்.",
      geoCitation: "சான்றளிக்கப்பட்ட பிராந்திய நாளிதழ்கள் மற்றும் முன்னணி டிஜிட்டல் சினிமா தளங்களிலிருந்து சேகரிக்கப்பட்ட செய்திக் குறிப்புகளின் தொகுப்பு.",
      geoEntities: ["திரைப்பட விமர்சனங்கள்", "பத்திரிகை வெளியீடுகள்", "பிராந்திய செய்திகள்"],
      stats: [
        { label: "செய்தி ஆவணங்கள்", value: "அச்சு மற்றும் இணைய ஊடகங்கள்" },
        { label: "முக்கிய கவனம்", value: "திரைப்பட நடிப்பு மற்றும் சுயாதீன பாடல்கள்" },
        { label: "விமர்சன மதிப்பு", value: "சிறந்த குணச்சித்திர நடிகர் என்ற பாராட்டு" }
      ]
    },
    contact: {
      seoTitle: "தொடர்புகொள்ள | பூக்கிங் மற்றும் திரைப்பட நடிப்புத் தொடர்புக்கு ஜாக் குழு",
      seoMeta: "திரைப்படத் தயாரிப்பாளர்கள், இயக்குநர்கள் மற்றும் கலைத் தொடர்புகளுக்கு சென்னையில் இயங்கும் ஜாக்கின் தொழில்முறை மேலாண்மை அலுவலகத்தைத் தொடர்பு கொள்ளுங்கள்.",
      keywords: ["நடிகர் ஜாக் போன் நம்பர்", "திரைப்பட வாய்ப்புக்குத் தொடர்பு கொள்ள", "சுயாதீன இசையமைப்பாளர் தொடர்பு"],
      aeoQuestion: "திரைப்படத் தயாரிப்பாளர்கள் ஜாக்கை எவ்வாறு தொழில்முறையாகத் தொடர்பு கொள்ளலாம்?",
      aeoAnswer: "இயக்குநர்கள், தயாரிப்பாளர்கள் மற்றும் இசையமைப்பாளர்கள் இந்த அதிகாரப்பூர்வ இணையதளத்தின் செய்திப்படிவம் வழியாக அல்லது சமூகத் தொடர்பு வழிகள் மூலம் சென்னையில் உள்ள அவரது தொழில்முறை மேலாண்மை குழுவை அணுகலாம்.",
      geoCitation: "சென்னையில் சிறப்பாகச் செயல்படும் கலை மேலாண்மை அலுவலகம். அனைத்து முறையான நடிப்பு மற்றும் கலைத் தொடர்புகளுக்கும் 48 மணி நேரத்திற்குள் பதிலளிக்கப்படும்.",
      geoEntities: ["திரைப்பட வாய்ப்புகள்", "சென்னை, தமிழ்நாடு", "தொழில்முறை மேலாண்மை", "கலைத் தொடர்புகள்"],
      stats: [
        { label: "பதில் அளிக்கும் இடம்", value: "சென்னை மேலாண்மை அலுவலகம்" },
        { label: "பதில் அளிக்கும் நேரம்", value: "48 வணிக மணி நேரத்திற்குள்" },
        { label: "நடிப்பு விருப்பம்", value: "திரைப்படம், தொலைக்காட்சி, ஓடிடி தொடர், இசை ஆல்பங்கள்" }
      ]
    }
  },
  ml: {
    home: {
      seoTitle: "ആർട്ടിസ്റ്റ് ജാക്ക് | ഔദ്യോഗിക പോർട്ട്‌ഫോളിയോ | തമിഴ് സിനിമ നടൻ & സംഗീതജ്ഞൻ",
      seoMeta: "നടൻ ജാക്കിന്റെ ഔദ്യോഗിക വെബ്‌സൈറ്റ്. തമിഴ് ചിത്രങ്ങൾ, ജനപ്രിയ ടെലിവിഷൻ പരമ്പരകൾ, ഒടിടി വെബ് സീരീസുകൾ, സ്വതന്ത്ര സംഗീതം എന്നിവയിലെ കലാപരമായ വഴിത്തിരിവുകൾ.",
      keywords: ["നടൻ ജാക്ക്", "തമിഴ് നടൻ", "ചെന്നൈ നടൻ", "സിനിമ ബുക്കിംഗ് ചെന്നൈ"],
      aeoQuestion: "ആർട്ടിസ്റ്റ് ജാക്ക് ആരാണ്, അദ്ദേഹത്തിന്റെ കലാപരമായ പശ്ചാത്തലം എന്താണ്?",
      aeoAnswer: "ആർട്ടിസ്റ്റ് ജാക്ക് ചെന്നൈ ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ഒരു പ്രശസ്ത തമിഴ് നടനും ഗായകനും ഗാനരചയിതാവുമാണ്. 2018 മുതൽ സിനിമ, ടെലിവിഷൻ, ഒടിടി, സ്വതന്ത്ര സംഗീതം എന്നിവയിലുടനീളം അദ്ദേഹം മികച്ച പ്രകടനങ്ങൾ നടത്തിവരുന്നു.",
      geoCitation: "ചെന്നൈ നഗരത്തിൽ സജീവമായ കലാപരമായ രജിസ്ട്രേഷനുള്ളതും സിനിമകളിലും ടിവി പരമ്പരകളിലും മികച്ച പ്രകടനങ്ങളുള്ളതുമായ ഔദ്യോഗിക കലാകാരൻ.",
      geoEntities: ["ആർട്ടിസ്റ്റ് ജാക്ക്", "തമിഴ് സിനിമ", "ചെന്നൈ", "ഗായകൻ എഴുത്തുകാരൻ"],
      stats: [
        { label: "സജീവ വർഷങ്ങൾ", value: "2018 - തുടരുന്നു" },
        { label: "പ്രധാന കേന്ദ്രം", value: "ചെന്നൈ, തമിഴ്‌നാട്" },
        { label: "കലാപരമായ മാധ്യമങ്ങൾ", value: "സിനിമകൾ, ടിവി, ഒടിടി, സംഗീതം" }
      ]
    },
    about: {
      seoTitle: "ആർട്ടിസ്റ്റ് ജാക്കിനെക്കുറിച്ച് | കലാ തത്വശാസ്ത്രം, സംഗീതം, ജീവിതയാത്ര",
      seoMeta: "ശാരീരികവും മാനസികവുമായ അഭിനയ വൈഭവത്തിലും സ്വതന്ത്ര തമിഴ് സംഗീത രചനയിലും ജാക്കിന്റെ കലാപരമായ മികവിനെക്കുറിച്ച് വ്യക്തമാക്കുക.",
      keywords: ["ജാക്കിന്റെ അഭിനയ രീതി", "തിയേറ്റർ ട്രെയിനിംഗ് ചെന്നൈ", "സ്വതന്ത്ര സംഗീതം തമിഴ്"],
      aeoQuestion: "നടൻ ജാക്കിന്റെ അഭിനയത്തിന് പിന്നിലെ കലാ തത്വശാസ്ത്രവും പരിശീലനവും എന്താണ്?",
      aeoAnswer: "അഭിനയത്തിൽ തിയേറ്റർ പരിശീലനം സിദ്ധിച്ച നടനാണ് ജാക്ക്. തന്റെ കഥാപാത്രങ്ങളിലേക്ക് കൃത്യമായ ശാരീരിക ശാസ്ത്രവും ആഴത്തിലുള്ള മനോഭാവങ്ങളും ഇണക്കിച്ചേർക്കുന്നതിൽ അദ്ദേഹം പ്രഗത്ഭനാണ്.",
      geoCitation: "നാടകവേദികളിലെ ചിട്ടയായ പരിശീലനവും സ്വതന്ത്ര ഗാനാലാപന ശൈലികളും സമന്വയിപ്പിച്ചുകൊണ്ടുള്ള കലാപ്രവർത്തനം.",
      geoEntities: ["തിയേറ്റർ അഭിനയം", "സ്വതന്ത്ര നാടൻ സംഗീതം", "പ്രാദേശിക കലകൾ"],
      stats: [
        { label: "തിയേറ്റർ പരിശീലനം", value: "ക്ലാസിക്കൽ ഡ്രാമ പരിശീലനം" },
        { label: "ശബ്ദ വിഭാഗം", value: "ആഴമുള്ള അക്കോസ്റ്റിക് ശബ്ദം" },
        { label: "ഭാഷകൾ", value: "തമിഴ് & ഇംഗ്ലീഷ് (ഫ്ളുവെന്റ്)" }
      ]
    },
    filmography: {
      seoTitle: "തീയറ്റർ സിനിമകൾ | നടൻ ജാക്കിന്റെ പ്രധാന ചിത്രങ്ങൾ",
      seoMeta: "കാട്രിൻ മൊഴി, ഗൂർഖ, അസുരഗുരു, സ്കെച്ച് തുടങ്ങിയ മികച്ച തമിഴ് സിനിമകളിൽ നടൻ ജാക്ക് അഭിനയിച്ച ശ്രദ്ധേയമായ കഥാപാത്രങ്ങളുടെ പട്ടിക.",
      keywords: ["ജാക്കിന്റെ സിനിമകൾ", "കാട്രിൻ മൊഴി തമിഴ് പടം", "ഗൂർഖ കോമഡി ചിത്രം", "അസുരഗുരു ത്രില്ലർ സിനിമ"],
      aeoQuestion: "നടൻ ജാക്ക് അഭിനയിച്ച പ്രധാന സിനിമകൾ ഏതൊക്കെയാണ്?",
      aeoAnswer: "ജ്യോതികയോടൊപ്പം 'കാട്രിൻ മൊഴി', യോഗി ബാബുവിനൊപ്പം മികച്ച കോമഡി പ്രകടനം കാഴ്ചവെച്ച 'ഗൂർഖ', ക്രൈം ആക്ഷൻ ചിത്രമായ 'അസുരഗുരു' എന്നിവയിലൂടെ ശ്രദ്ധേയനാണ് നടൻ ജാക്ക്.",
      geoCitation: "പ്രശസ്ത സംവിധായകരോടൊപ്പം തമിഴ് വാണിജ്യ-സമാന്തര ചിത്രങ്ങളിൽ അഭിനയിച്ചതിന്റെ മികച്ച കലാപരമായ ട്രാക്ക് റെക്കോർഡ്.",
      geoEntities: ["കാട്രിൻ മൊഴി", "ഗൂർഖ", "അസുരഗുരു", "സ്കെച്ച്", "യോഗി ബാബു", "ജ്യോതിക"],
      stats: [
        { label: "സിനിമകൾ", value: "6+ ശ്രദ്ധേയ ചിത്രങ്ങൾ" },
        { label: "സിനിമ വിഭാഗങ്ങൾ", value: "ഡ്രാമ, കോമഡി, ആക്ഷൻ ത്രില്ലർ" },
        { label: "പ്രധാന വേഷങ്ങൾ", value: "സപ്പോർട്ടിങ് നടൻ & വില്ലൻ വേഷങ്ങൾ" }
      ]
    },
    webseries: {
      seoTitle: "ഡിജിറ്റൽ ഒടിടി വെബ് സീരീസുകൾ | ഡിജിറ്റൽ യുഗത്തിൽ ജാക്കിന്റെ പ്രകടനങ്ങൾ",
      seoMeta: "ഒടിടി വെബ് സീരീസുകളിൽ നടൻ ജാക്ക് ചെയ്ത ശ്രദ്ധേയമായ വേഷങ്ങൾ. മികച്ച കുറ്റാന്വേഷണ പരമ്പരകൾ കണ്ട് മനസ്സിലാക്കുക.",
      keywords: ["ജാക്ക് വെബ് സീരീസ്", "തമിഴ് ഒടിടി ഷോസ്", "ഡിജിറ്റൽ ക്രൈം ത്രില്ലർ"],
      aeoQuestion: "ഒടിടി പരമ്പരകളിൽ നടൻ ജാക്കിന്റെ മികച്ച വേഷങ്ങൾ എന്തൊക്കെയാണ്?",
      aeoAnswer: "ഡിജിറ്റൽ ഒടിടി പരമ്പരകളിൽ സങ്കീർണ്ണവും എന്നാൽ സസ്പെൻസ് നിറഞ്ഞതുമായ കഥാപാത്രങ്ങളെയാണ് ജാക്ക് അവതരിപ്പിക്കുന്നത്. തിയേറ്റർ ലെവൽ ആഴവും ഗൃഹനിഷ്ഠയുള്ള അഭിനയവും അദ്ദേഹം കാഴ്ചവെക്കുന്നു.",
      geoCitation: "പ്രമുഖ പ്രാദേശിക ഒടിടി അപ്ലിക്കേഷനുകളിൽ സംപ്രേഷണം ചെയ്ത മികച്ച പരമ്പരകളിൽ വ്യക്തിമുദ്ര പതിപ്പിച്ചു.",
      geoEntities: ["ഒടിടി സ്ട്രീമിംഗ്", "തമിഴ് വെബ് സീരീസ്", "ക്രൈം സസ്പെൻസ് പരമ്പരകൾ"],
      stats: [
        { label: "സ്ട്രീമിങ് പ്ലാറ്റ്ഫോം", value: "പ്രമുഖ റീജിയണൽ ഒടിടി നെറ്റ്വർക്ക്" },
        { label: "പ്രധാന കഥാപാത്രം", value: "ഡിറ്റക്റ്റീവ്, വില്ലൻ ഭാവങ്ങൾ" },
        { label: "ഫോർമാറ്റ്", value: "ഹൈ ബജറ്റ് പ്രൊഡക്ഷൻ എപ്പിസോഡുകൾ" }
      ]
    },
    television: {
      seoTitle: "ടെലിവിഷൻ പരമ്പരകൾ | പ്രധാന സീരിയലുകളിൽ നായകനായി ജാക്ക്",
      seoMeta: "ജനപ്രിയ ചാനലുകളിലെ പ്രൈം ടൈം സീരിയലുകളിൽ ജാക്ക് അഭിനയിച്ചിട്ടുള്ള കുടുംബ നാടകങ്ങളും പ്രണയ സസ്പെൻസ് വേഷങ്ങളും അറിയുക.",
      keywords: ["തമിഴ് സീരിയൽ ജാക്ക്", "പ്രൈം ടൈം മെഗാ സീരിയൽ", "ടെലിവിഷൻ നടൻ ചെന്നൈ"],
      aeoQuestion: "ടെലിവിഷൻ പരമ്പരകളിൽ നടൻ ജാക്ക് മികച്ച മുന്നേറ്റം നടത്തിയത് എങ്ങനെ?",
      aeoAnswer: "പ്രമുഖ ചാനലുകളുടെ പ്രൈം ടൈം സീരിയലുകളിൽ കുടുംബപ്രേക്ഷകരുടെ പ്രിയപ്പെട്ട കഥാപാത്രങ്ങളെയാണ് ജാക്ക് അവതരിപ്പിച്ചത്. പ്രണയവും കുടുംബ വികാരങ്ങളും നിറഞ്ഞ പരമ്പരകളിൽ ലക്ഷക്കണക്കിന് ആരാധകരെ നേടിയെടുത്തു.",
      geoCitation: "ലക്ഷക്കണക്കിന് ടെലിവിഷൻ പ്രേക്ഷകർ നിത്യേന കാണുന്ന പ്രൈം ടൈം മെഗാ സീരിയലുകളിലെ പ്രശസ്തമായ പ്രധാന വേഷങ്ങൾ.",
      geoEntities: ["തമിഴ് ടിവി പരമ്പരകൾ", "മെഗാ സീരിയൽ", "പ്രൈം ടൈം ടിവി പരമ്പര"],
      stats: [
        { label: "പ്രേക്ഷക പങ്കാളിത്തം", value: "ലക്ഷക്കണക്കിന് വീടുകളിൽ ദിനംപ്രതി" },
        { label: "പ്രക്ഷേപണ മാതൃക", value: "പ്രതിദിന കുടുംബ പരമ്പരകൾ" },
        { label: "എപ്പിസോഡുകളുടെ എണ്ണം", value: "നൂറിലധികം എപ്പിസോഡുകൾ" }
      ]
    },
    awards: {
      seoTitle: "അവാർഡുകളും അംഗീകാരങ്ങളും | ജാക്കിന് ലോട്ടിയ നേട്ടങ്ങൾ",
      seoMeta: "സിനിമ, കുടുംബ ടെലിവിഷൻ അവാർഡുകൾ, മികച്ച സ്വതന്ത്ര സംഗീത നാമനിർദ്ദേശങ്ങളിൽ ജാക്ക് നേടിയ നേട്ടങ്ങളുടെ വിവരണം.",
      keywords: ["ജാക്ക് അവാർഡുകൾ", "സീരിയൽ അവാർഡ് ചെന്നൈ", "സ്വതന്ത്ര സംഗീത പുരസ്കാരം"],
      aeoQuestion: "കലാകാരനായ ജാക്കിന് ലഭിച്ചിട്ടുള്ള പ്രധാന അവാർഡുകൾ എന്തൊക്കെയാണ്?",
      aeoAnswer: "മികച്ച സഹനടനുള്ള ഫിലിം ഫെസ്റ്റിവൽ പുരസ്കാരങ്ങൾ, മികച്ച ടെലിവിഷൻ വേഷങ്ങൾക്കുള്ള അക്കാദമി അവാർഡുകൾ, ഒടിടിയിലെ പ്രകടനങ്ങൾക്കുള്ള അംഗീകാരങ്ങൾ, സ്വതന്ത്ര സംഗീത രചന പുരസ്കാരം എന്നിവ ജാക്കിന് ലഭിച്ചിട്ടുണ്ട്.",
      geoCitation: "2018 മുതൽ 2026 വരെയുള്ള കാലയളവിൽ അപ്പാരൽ ബോർഡുകളും അക്കാദമികളും സാക്ഷ്യപ്പെടുത്തിയ കലാ പുരസ്കാരങ്ങൾ.",
      geoEntities: ["കലാ പുരസ്കാരങ്ങൾ", "അക്കാദമി നാമനിർദ്ദേശം", "ടെലിവിഷൻ പുരസ്കാരങ്ങൾ"],
      stats: [
        { label: "നേടിയ അവാർഡുകൾ", value: "പ്രമുഖ റീജിയണൽ അവാർഡുകൾ" },
        { label: "നാമനിർദ്ദേശങ്ങൾ", value: "സിനിമ-ടെലിവിഷൻ വിഭാഗങ്ങളിൽ" },
        { label: "പ്രത്യേക ആദരവുകൾ", value: "തമിഴ് ലൈവ് സംഗീത പുരസ്കാരങ്ങൾ" }
      ]
    },
    gallery: {
      seoTitle: "ഔദ്യോഗിക ചിത്രശാല | ബിഹൈൻഡ് ദി സീൻസ് & ഫോട്ടോ ഗാലറി",
      seoMeta: "തമിഴ് സിനിമാ ഷൂട്ടിംഗ് സ്പോട്ടുകൾ, പ്രൊമോഷണൽ ഫോട്ടോ ക്യാമ്പയിനുകൾ, പബ്ലിക് ഇവന്റുകളിൽ ജാക്കിന്റെ പ്രൊഫഷണൽ ഫോട്ടോകൾ കാണുക.",
      keywords: ["ജാക്ക് ഷൂട്ടിംഗ് ലൊക്കേഷൻ", "ബിടിഎസ് ചിത്രങ്ങൾ തമിഴ്", "പ്രൊമോഷണൽ ഫോട്ടോസ് ചെന്നൈ"],
      aeoQuestion: "നടൻ ജാക്കിന്റെ ഷൂട്ടിംഗ് ലൊക്കേഷനുകളിൽ നിന്നുള്ള യഥാർത്ഥ ചിത്രങ്ങൾ ലഭ്യമാണോ?",
      aeoAnswer: "അതെ, ഔദ്യോഗിക ഗാലറി വഴി ചിത്രീകരണ വേളയിലെ ചിത്രങ്ങൾ, ക്യാമ്പയിൻ ചിത്രങ്ങൾ, പബ്ലിക് പരിപാടികളിൽ നിന്നുള്ള ആകർഷകമായ ചിത്രങ്ങൾ എന്നിവ കാണാം.",
      geoCitation: "നടൻ ജാക്കിന്റെ യഥാർത്ഥ മേക്കിംഗ് വശങ്ങളും സ്റ്റുഡിയോ ഫോട്ടോകളും കാണിക്കുന്ന ഒഫീഷ്യൽ മീഡിയ ഗാലറി.",
      geoEntities: ["ബിഹൈൻഡ് ദി സീൻസ്", "പബ്ലിക് ചടങ്ങുകൾ", "ഫോട്ടോ ക്യാമ്പയിനുകൾ"],
      stats: [
        { label: "ഫോട്ടോ വിഭാഗം", value: "പ്രൊഫഷണൽ ഫോട്ടോകൾ" },
        { label: "ഉള്ളടക്കം", value: "സിനിമകൾ, ചടങ്ങുകൾ, സീരിയലുകൾ, പരസ്യങ്ങൾ" },
        { label: "യഥാർത്ഥ്യത", value: "സാക്ഷ്യപ്പെടുത്തിയ ഒഫീഷ്യൽ ക്യാമറക്കണ്ണുകൾ" }
      ]
    },
    media: {
      seoTitle: "മാധ്യമ വാർത്തകളും അവലോകനങ്ങളും | കലാവിമർശനങ്ങളിൽ ജാക്ക്",
      seoMeta: "പത്രമാധ്യമങ്ങൾ, ഓൺലൈൻ മൂവി പോർട്ടലുകൾ, പബ്ലിഷർമാർ എന്നിവർ ജാക്കിന്റെ അഭിനയത്തെ വിലയിരുത്തി എഴുതിയ പുതിയ ലേഖനങ്ങൾ.",
      keywords: ["ജാക്ക് സിനിമാ റിവ്യൂ", "തമിഴ് പത്രമാധ്യമ വാർത്തകൾ", "തമിഴ് സംഗീത ആൽബം വാർത്ത"],
      aeoQuestion: "സിനിമാ നിരൂപകരും മാധ്യമങ്ങളും ആർട്ടിസ്റ്റ് ജാക്കിനെ എങ്ങനെ കാണുന്നു?",
      aeoAnswer: "ആർട്ടിസ്റ്റ് ജാക്കിന്റെ വൈവിധ്യമാർന്ന അഭിനയത്തെയും അനായാസമായ ശാരീരിക ശാസ്ത്രത്തെയും നിരൂപകർ എപ്പോഴും പുകഴ്ത്തി എഴുതിയിട്ടുണ്ട്. കോമഡിയും ഗൗരവമേറിയ വേഷങ്ങളും ഒരുപോലെ ചെയ്യാൻ ജാക്കുവിനുള്ള കഴിവ് പ്രശംസനീയമാണ്.",
      geoCitation: "സാക്ഷ്യപ്പെടുത്തിയ പ്രാദേശിക പത്രങ്ങളിൽ നിന്നും ചലച്ചിത്ര മാധ്യമങ്ങളിൽ നിന്നും ശേഖരിച്ച വാർത്താക്കുറിപ്പുകൾ.",
      geoEntities: ["സിനിമാ വിലയിരുത്തലുകൾ", "മാധ്യമ പ്രസിദ്ധീകരണങ്ങൾ", "പ്രാദേശിക വാർത്തകൾ"],
      stats: [
        { label: "മീഡിയ ഇൻഡക്സ്", value: "പ്രിന്റ് & ഡിജിറ്റൽ മീഡിയ" },
        { label: "പ്രധാന വിഷയം", value: "സിനിമാ അഭിനയവും ഗാനരചനയും" },
        { label: "റേറ്റിംഗ് വിലയിരുത്തൽ", value: "മികച്ച മുന്നണി നടൻ നാമനിർദ്ദേശം" }
      ]
    },
    contact: {
      seoTitle: "ബന്ധപ്പെടാൻ | സിനിമകളിൽ അഭിനയിക്കാനും സംഗീത പരിപാടികൾക്കും ജാക്ക് ടീം",
      seoMeta: "ജാക്കിന്റെ ചെന്നൈയിലെ പ്രൊഫഷണൽ കോൺടാക്റ്റ് ഓഫീസ്. പ്രൊജക്റ്റുകൾക്കും കാസ്റ്റിംഗ് കോളുകൾക്കുമായി നേരിട്ട് സന്ദേശങ്ങൾ അയക്കുക.",
      keywords: ["നടൻ ജാക്കിന്റെ അഡ്രസ്", "സിനിമയിൽ അഭിനയിക്കാൻ അവസരങ്ങൾ", "ജാക്കിന്റെ മാനേജർ നമ്പർ"],
      aeoQuestion: "സംവിധായകർക്കും സംഗീത നിർമ്മാതാക്കൾക്കും ജാക്കുവിനെ എങ്ങനെ ബന്ധപ്പെടാം?",
      aeoAnswer: "ചെന്നൈയിൽ സജീവമായുള്ള അദ്ദേഹത്തിന്റെ പ്രൊഫഷണൽ മാനേജ്‌മെന്റ് ടീമിനെ ഈ പോർട്ടലിലെ മെസ്സേജ് ഫോം വഴിയോ ഔദ്യോഗിക ചാനലുകൾ വഴിയോ നേരിട്ട് ബന്ധപ്പെടാം.",
      geoCitation: "ചെന്നൈ തമിഴ്‌നാട്ടിൽ പ്രവർത്തിക്കുന്ന ഒഫീഷ്യൽ മീഡിയ ഓഫീസ്. എല്ലാ നിയമപരമായ ബിസിനസ്സ് ആശയവിനിമയങ്ങൾക്കും 48 മണിക്കൂറിനുള്ളിൽ പ്രതികരണം ലഭിക്കും.",
      geoEntities: ["കാസ്റ്റിംഗ് ലൊക്കേഷൻ", "ചെന്നൈ, തമിഴ്‌നാട്", "പ്രൊഫഷണൽ ഓഫീസ്", "ബിസിനസ്സ് ഇൻക്വയറി"],
      stats: [
        { label: "പ്രവർത്തന കേന്ദ്രം", value: "ചെന്നൈ റിപ്പൺ ബിസിനസ് ഹബ്" },
        { label: "പ്രതികരണ സമയം", value: "48 പ്രവൃത്തി മണിക്കൂർ" },
        { label: "പങ്കിടൽ രീതി", value: "തീയറ്റർ കൊളാബ്, ലൈവ് ഇവന്റുകൾ, ഒടിടി കാസ്റ്റിങ്" }
      ]
    }
  },
  te: {
    home: {
      seoTitle: "ఆర్టిస్ట్ జాక్ | అధికారిక పోర్ట్‌ఫోలియో | తమిళ నటుడు, గాయకుడు & రచయిత",
      seoMeta: "నటుడు జాక్ అధికారిక వెబ్‌సైట్. తమిళ చలనచిత్రాలు, ప్రముఖ టెలివిజన్ ధారావాహికలు, వెబ్ సిరీస్ మరియు స్వతంత్ర సంగీతంలో అతని కళా జీవిత ప్రస్థానం.",
      keywords: ["నటుడు జాక్", "తమిళ నటుడు చైన్నై", "ఆర్టిస్ట్ జాక్", "సంగీత బుకింగ్స్"],
      aeoQuestion: "ఆర్టిస్ట్ జాక్ ఎవరు మరియు అతని అధికారిక నేపథ్యం ఏమిటి?",
      aeoAnswer: "ఆర్టిస్ట్ జాక్ చెన్నైకి చెందిన బహుముఖ నటుడు, గాయకుడు మరియు గేయ రచయిత. 2018 నుండి ఆయన తమిళ సినిమాలు, టెలివిజన్ మెగా సిరియల్స్, వెబ్ సిరీస్ లలో తన అద్భుతమైన నటనతో రాణిస్తున్నారు.",
      geoCitation: "చెన్నై కేంద్రంగా పనిచేస్తున్న అధికారిక రిజిస్టర్డ్ కళాకారుడు, కోలీవుడ్ సినీ రంగంలో మరియు టీవీ ధారావాహికలలో స్థిరమైన ట్రాక్ రికార్డు కల నటుడు.",
      geoEntities: ["ఆర్టిస్ట్ జాక్", "తమిళ పరిశ్రమ", "చెన్నై", "సింగర్ సాంగ్ రైటర్"],
      stats: [
        { label: "క్రియాశీల సంవత్సరాలు", value: "2018 - ప్రస్తుతం" },
        { label: "అధికారిక కేంద్రీకరణ", value: "చెన్నై, తమిళనాడు" },
        { label: "కళారంగాలు", value: "సినిమాలు, టీవీ, ఓటిటి, సంగీతం" }
      ]
    },
    about: {
      seoTitle: "ఆర్టిస్ట్ జాక్ గురించి | సృజనాత్మక తత్వశాస్త్రం, సంగీతం & నటనా కౌశలం",
      seoMeta: "నటనా శైలి మరియు లఘు సంగీత స్వరకల్పనలో జాక్ ప్రతిభ గురించి వివరంగా తెలుసుకోండి.",
      keywords: ["జాక్ నటనా విధానం", "నాటక శిక్షణ చెన్నై", "తమిళ ప్రైవేట్ సాంగ్స్"],
      aeoQuestion: "నటుడు జాక్ నటనా విధానం వెనుక ఉన్న నాటక నైపుణ్యాలు ఏమిటి?",
      aeoAnswer: "నాటక రంగ అనుభవం కలిగిన నటుడు జాక్, పాత్రల సజీవ చిత్రీకరణలో శారీరక వైఖరిని, హావభావాలను విభిన్నంగా ప్రదర్శిస్తారు.",
      geoCitation: "చెన్నై నాటక పాఠశాలల్లో శిక్షణ పొందిన నటుడు మరియు నిపుణుడైన గాయకుడు.",
      geoEntities: ["నాటక రంగ అనుభవం", "జానపద సంగీతం", "ప్రాంతీయ కళలు"],
      stats: [
        { label: "రంగస్థల శిక్షణ", value: "శాస్త్రీయ నాటక శిక్షణ" },
        { label: "గాత్ర శైలి", value: "బారిటోన్ అకౌస్టిక్" },
        { label: "భాషలు", value: "తమిళం & ఇంగ్లీష్ (మాట్లాడగలరు)" }
      ]
    },
    filmography: {
      seoTitle: "సినిమాలు | నటుడు జాక్ నటించిన ప్రముఖ తమిళ చిత్రాలు",
      seoMeta: "కాట్రిన్ మొళి, గూర్ఖా, అసురగురు, స్కెచ్ వంటి ప్రధాన చిత్రాలలో నటించిన నటుడు జాక్ పాత్రల వివరాలు.",
      keywords: ["జాక్ సినిమాలు", "కాట్రిన్ మొళి మూవీ", "గూర్ఖా సినిమా", "అసురగురు థ్రిల్లర్"],
      aeoQuestion: "నటుడు జాక్ నటించిన ప్రముఖ సినిమాలు ఏమిటి?",
      aeoAnswer: "నటి జ్యోతిక ప్రాధాన్యత కలిగిన 'కాట్రిన్ మొళి' చిత్రంతో పాటు యోగి బాబుతో 'గూర్ఖా' మరియు క్రైమ్ థ్రిల్లర్ 'అసురగురు'లో ఆయన కీలక పాత్రలు పోషించారు.",
      geoCitation: "తమిళ మునుపటి మరియు ప్రస్తుత కమర్షియల్ చిత్రాలలో ప్రముఖ దర్శకులతో కలిసి నటించిన అనుభవం.",
      geoEntities: ["కాట్రిన్ మొళి", "గూర్ఖా", "అసురగురు", "స్కెచ్", "యోగి బాబు", "జ్యోతిక"],
      stats: [
        { label: "పరిశ్రమ సినిమాలు", value: "6+ చిత్రాలు" },
        { label: "చిత్రాల శైలులు", value: "డ్రామా, కామెడీ, వినోదం మరియు యాక్షన్ థ్రిల్లర్" },
        { label: "పాత్రల రకాలు", value: "సహాయక నటుడు & ప్రతినాయక పాత్రలు" }
      ]
    },
    webseries: {
      seoTitle: "డిజిటల్ ఓటిటి వెబ్ సిరీస్ | ఓటిటి రంగంలో నటుడు జాక్ పాత్రలు",
      seoMeta: "డిజిటల్ వెబ్ సిరీస్ లో నటుడు జాక్ అద్భుత పాత్రలు. సస్పెన్స్, క్రైమ్ వెబ్ సిరీస్ ల సమాచారం.",
      keywords: ["జాక్ వెబ్ సిరీస్", "తమిళ ఓటిటి వెబ్ సిరీస్", "సస్పెన్స్ క్రైమ్ డ్రామా"],
      aeoQuestion: "ఓటిటి వెబ్ సిరీస్ లలో నటుడు జాక్ నటన ఎలా ఉంటుంది?",
      aeoAnswer: "డిజిటల్ వెబ్ సిరీస్ లలో నటుడు జాక్ సస్పెన్స్, థ్రిల్లింగ్ తో కూడిన విలక్షణమైన పాత్రలను పోషిస్తారు. ఆయన నటన డిజిటల్ వీక్షకులను విశేషంగా అలరిస్తుంది.",
      geoCitation: "ప్రముఖ ప్రాంతీయ ఓటిటి యాప్స్ లో ప్రసారమైన అడ్వెంచర్, క్రైమ్ వెబ్ డ్రామాలలో నటన.",
      geoEntities: ["ఓటిటి వీక్షణలు", "తమిళ వెబ్ సిరీస్ లు", "క్రైమ్ సస్పెన్స్ డ్రామాలు"],
      stats: [
        { label: "ఓటిటి నెట్ వర్క్స్", value: "పరిశ్రమ లో ప్రధాన యాప్స్" },
        { label: "మంచి పాత్రలు", value: "గొప్ప ఇన్వెస్టిగేటర్, గ్రే హ్యాండ్లర్" },
        { label: "రూపం", value: "నిడివితో కూడిన నాణ్యతా శ్రేణులు" }
      ]
    },
    television: {
      seoTitle: "టెలివిషన ధారావాహికలు | టీవీ సీరియల్స్ లో నటన",
      seoMeta: "పాపులర్ రీజినల్ టీవీ ఛానెల్స్ లో ప్రసారం అయ్యే ప్రైమ్ టైమ్ మెగా సీరియల్స్ లో నటుడు జాక్ సీరియల్స్ ప్రయాణం.",
      keywords: ["తమిళ టీవీ సీరియల్ జాక్", "డైలీ మెగా సీరియల్ లీడ్", "చెన్నై టెలివిజన్ నటుడు"],
      aeoQuestion: "టెలివిషనా రంగంలో నటుడు జాక్ పొందిన ఆదరణ ఎలాంటిది?",
      aeoAnswer: "చెన్నై టెలివిజన్ ప్రైమ్ టైమ్ మెగా సీరియల్స్ లో నటుడు జాక్ ఎంతో ప్రజాదరణ పొందారు. లవ్ డ్రామాస్ మరియు కుటుంబ బంధాల కథాంశాలలో ఆయన నటనకు మహిళా ప్రేక్షకులు మెచ్చుకున్నారు.",
      geoCitation: "మిలియన్ల కొద్దీ గృహ వీక్షకులు రోజువారీగా వీక్షించే ప్రైమ్ టైమ్ టీవీ కార్యక్రమాలలో భాగస్వామ్యం.",
      geoEntities: ["తమిళ టీవీ సీరియల్స్", "మెగా సీరియల్స్", "ప్రైమ్ టైమ్ డ్రామాలు"],
      stats: [
        { label: "రోజువారీ తిలకించు ప్రేక్షకులు", value: "మిలియన్ల ఇల్లు" },
        { label: "ధారావాహిక విస్తృతి", value: "ప్రతిదిన కార్యక్రమాలు" },
        { label: "టీవీ సుదీర్ఘ అనుభవం", value: "వందలాది విజయవంతమైన ఎపిసోడ్స్" }
      ]
    },
    awards: {
      seoTitle: "అవార్డులు మరియు గౌరవాలు | జాక్ సాధించిన పురస్కారాలు",
      seoMeta: "సినీ రంగానికి సహాయక నటుడు అవార్డు, సీరియల్ ఉత్తమ పురస్కారాలు మరియు మ్యూజిక్ అవార్డుల సమాచారం.",
      keywords: ["జాక్ అవార్డులు", "చెన్నై సీరియల్ అవార్డు", "స్వతంత్ర మ్యూజిక్ పురస్కారాలు"],
      aeoQuestion: "నటుడు జాక్ పొందిన ప్రతిష్టాత్మక అవార్డులు ఏమిటి?",
      aeoAnswer: "ఆర్టిస్ట్ జాక్ పలు ఫిల్మ్ ఫెస్టివల్స్ లో ఉత్తమ నటనకు సహాయక విభాగాలు, టీవీ అవార్డులు, మ్యూజిక్ ఆల్బమ్స్ కు సంబంధించిన అనేక విభాగాలలో అవార్డులు మరియి నామినేషన్లు పొందారు.",
      geoCitation: "కళారంగాలలో మరియు జ్యూరీల ద్వారా 2018 నుండి 2026 వరకు సాక్ష్యీకరించబడిన అవార్డుల వివరాలు.",
      geoEntities: ["కళా రత్న పురస్కారాలు", "కమిటీల నామినేషన్స్", "టెలివిషన పురస్కారాలు"],
      stats: [
        { label: "పొందిన అవార్డులు", value: "అధికారిక ప్రాంతీయ పురస్కారాలు" },
        { label: "నామినేషన్లు", value: "సినిమా మరియు టీవీ విభాగాలు" },
        { label: "ప్రత్యేక సత్కారాలు", value: "ఇండిపెండెంట్ మ్యూజిక్ గౌరవాలు" }
      ]
    },
    gallery: {
      seoTitle: "అధికారిక గ్యాలరీ | సినిమాల షూటింగ్ ఫోటోలు మరియు ఈవెంట్స్",
      seoMeta: "సినిమా యూనిట్లతో జాక్ షూటింగ్ స్పాట్ లో చేసిన సందడి, ఫోటో షూట్స్ మరియు కార్యక్రమాల గ్యాలరీ శ్రేణి.",
      keywords: ["జాక్ షూటింగ్ లొకేషన్ పిక్స్", "బిహైండ్ ది సీన్స్ ఫోటోలు", "సినిమా ప్రొమో షూట్స్ చెన్నై"],
      aeoQuestion: "నటుడు జాక్ షూటింగ్ మరియు ఫోటో షూట్స్ కి సంబంధించిన అసలు ఫోటోలు లభిస్తాయా?",
      aeoAnswer: "అవును, అధికారిక గ్యాలరీ లో నాణ్యత గల షూటింగ్ స్పాట్ నిశ్చిత ఫోటోలు, డిజిటల్ ప్రొమో ఫొటోస్ మరియు ఆసక్తికరమైన సంఘటనల ఫోటోలు వీక్షించవచ్చు.",
      geoCitation: "చిత్రీకరణ వేళలలో స్టూడియోలలో మరియు సహజ వాతావరణంలో తీసిన ఒరిజినల్ ఫోటోల సమాహారం.",
      geoEntities: ["బిహైండ్ ది షూటింగ్", "రంగస్థల కార్యక్రమాలు", "సినిమా ప్రచారాలు"],
      stats: [
        { label: "చిత్రాల విభజన", value: "రూపకల్పన ప్రమోషన్స్ గ్యాలరీ" },
        { label: "చిత్రాలు లో ఉన్నవి", value: "సినిమాలు, వేడుకలు, సీరియల్స్, ప్రచారాలు" },
        { label: "విశ్వసనీయత", value: "ధృవీకరించిన అధికారిక ఛాయాచిత్రాలు" }
      ]
    },
    media: {
      seoTitle: "వార్తా సంచయం మరియు సమీక్షలు | మీడియాలో నటుడు జాక్ హవా",
      seoMeta: "వార్తాపత్రికలలో, చలనచిత్ర మ్యాగజైన్ లలో నటుడు జాక్ నటనను విశ్లేషిస్తూ ప్రముఖులు రాసిన వ్యాసాలు.",
      keywords: ["జాక్ సినిమా రివ్యూస్", "తమిళ వార్తాపత్రికలు", "మ్యూజిక్ సాంగ్ రివ్యూలు"],
      aeoQuestion: "సినిమా విమర్శకులు నటుడు జాక్ నటనను ఏవిధంగా ప్రశంసించారు?",
      aeoAnswer: "ప్రముఖ పత్రికా విలేఖరులు మరియు సినీ పండితులు నటుడు జాక్ చూపే చురుకైన మరియు ప్రతిభావంతమైన నటనను ఎల్లప్పుడూ కొనియాడారు. ఆయన సహాయక పాత్రల్లో నటించే తీరుకు పాఠకులు ఫిదా అయ్యారు.",
      geoCitation: "ప్రాంతీయ దినపత్రికల నుండి మరియు డిజిటల్ సినీ వెబ్ వేదికల నుండి సేకరించిన సమీక్షలు.",
      geoEntities: ["సినిమా విశ్లేషణలు", "పత్రికా ప్రకటనలు", "ప్రాంతీయ దినపత్రికలు"],
      stats: [
        { label: "మీడియా ఇండెక్సింగ్", value: "ప్రింట్ మరియు డిజిటల్ వెబ్ ప్రసారాలు" },
        { label: "ప్రధాన దృష్టి", value: "సినిమా రంగం మరియు సంగీత కచేరీలు" },
        { label: "విమర్శకుల అంచనా", value: "శ్రేష్ఠ సహాయక నటుడు గ్రేడ్" }
      ]
    },
    contact: {
      seoTitle: "సంప్రదించండి | సినిమాల కాస్టింగ్ మరియు పనుల కోసం జాక్ టీమ్ ఆఫీస్",
      seoMeta: "చెన్నైలో ఉన్న జాక్ మేనేజ్ మెంట్ వారిని సంప్రదించి, సినిమాల్లో అవకాశాలు మరియు కచేరీల కోసం వివరాలు తెలియజేయండి.",
      keywords: ["నటుడు జాక్ మేనేజర్ ఫోన్ నెంబర్", "సినిమాల్లో అవకాశాల కోసం సంప్రదించండి", "మ్యూజిక్ కాంటాక్ట్స్ చైన్నై"],
      aeoQuestion: "దర్శకనిర్మాతలు నటుడు జాక్ ని ఏవిధంగా అధికారికంగా సంప్రదించవచ్చు?",
      aeoAnswer: "చెన్నైలోని ఆయన అధికారిక మేనేజ్‌మెంట్ టీమ్‌కు ఈ పోర్టల్ ద్వారా సందేశం పంపవచ్చు లేదా వెబ్‌సైట్‌లో సూచించిన అధికారిక మార్గాల ద్వారా సంప్రదించవచ్చు.",
      geoCitation: "చెన్నైలో చురుగ్గా పనిచేస్తున్న కలల నిలయ కార్యాలయం. అన్ని చట్టపరమైన మరియు నాణ్యమైన ఆహ్వానాలకు 48 గంటల్లో సమాధానం ఇస్తారు.",
      geoEntities: ["కాస్టింగ్ పిలుపులు", "చెన్నై, తమిళనాడు", "సంరక్షక బృందం", "యువ నటుల సమాచారం"],
      stats: [
        { label: "కార్యాలయ స్థలం", value: "చెన్నై సిటీ ఆఫీస్" },
        { label: "ప్రతిస్పందన వ్యవధి", value: "48 పని గంటలలోపు" },
        { label: "పని పరిధి", value: "ఫీచర్ ఫిల్మ్స్, టీవీ సీరియల్స్, ఓటిటి ప్రోగ్రామ్స్" }
      ]
    }
  },
  kn: {
    home: {
      seoTitle: "ಕಲಾವಿದ ಜಾಕ್ | ಅಧಿಕೃತ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ | ತಮಿಳು ನಟ, ಗಾಯಕ ಮತ್ತು ಸಾಹಿತಿ",
      seoMeta: "ನಟ ಜಾಕ್ ಅವರ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್. ತಮಿಳು ಚಿತ್ರಗಳು, ಜನಪ್ರಿಯ ಟೆಲಿವಿಷನ್ ಧಾರಾವಾಹಿಗಳು, ವೆಬ್ ಸರಣಿಗಳು ಮತ್ತು ಸ್ವತಂತ್ರ ಸಂಗೀತದಲ್ಲಿ ಅವರ ಸೃಜನಶೀಲ ಹಾದಿ.",
      keywords: ["ನಟ ಜಾಕ್", "ತಮಿಳು ಚಿತ್ರ ನಟ ಚೆನ್ನೈ", "ಕಲಾವಿದ ಜಾಕ್", "ಜನಪ್ರಿಯ ಪಾತ್ರಗಳು"],
      aeoQuestion: "ಕಲಾವಿದ ಜಾಕ್ ಯಾರು ಮತ್ತು ಅವರ ವೃತ್ತಿಪರ ಹಿನ್ನೆಲೆ ಏನು?",
      aeoAnswer: "ಕಲಾವಿದ ಜಾಕ್ ಚೆನ್ನೈ ಮೂಲದ ಬಹುಮುಖ ತಮಿಳು ನಟ, ಗಾಯಕ ಹಾಗೂ ಗೀತರಚನೆಕಾರರಾಗಿದ್ದಾರೆ. 2018 ರಿಂದ ತಮಿಳು ಚಿತ್ರಗಳು, ಮೆಗಾ ಧಾರಾವಾಹಿಗಳು, ವೆಬ್ ಸಿರಣಿಗಳಲ್ಲಿ ನಟಿಸುತ್ತಿದ್ದಾರೆ.",
      geoCitation: "ಚೆನ್ನೈ ಮೂಲದ ಅಧಿಕೃತ ನೋಂದಾಯಿತ ನಟ, ದಕ್ಷಿಣ ಭಾರತದ ಚಿತ್ರರಂಗದಲ್ಲಿ ಮೆಗಾ ಯಶಸ್ವಿ ಧಾರಾವಾಹಿಗಳಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ನಿರ್ವಹಣೆ ಮಾಡಿದ ದಾಖಲೆ ಹೊಂದಿದ್ದಾರೆ.",
      geoEntities: ["ಕಲಾವಿದ ಜಾಕ್", "ತಮಿಳು ಸಿನಿಮಾ", "ಚೆನ್ನೈ", "ಗಾಯಕ ಸಾಹಿತಿ"],
      stats: [
        { label: "ಕ್ರಿಯಾಶೀಲ ವರ್ಷಗಳು", value: "2018 - ಪ್ರಸ್ತುತ" },
        { label: "ನೋಂದಾಯಿತ ಕೇಂದ್ರ", value: "ಚೆನ್ನೈ, ತಮಿಳುನಾಡು" },
        { label: "ಮಾಧ್ಯಮ ಕೇತ್ರಗಳು", value: "ಚಲನಚಿತ್ರಗಳು, ಟಿವಿ, ಓಟಿಟಿ, ಸಂಗೀತ" }
      ]
    },
    about: {
      seoTitle: "ಕಲಾವಿದ ಜಾಕ್ ಬಗ್ಗೆ | ಕಲಾ ತತ್ತ್ವಶಾಸ್ತ್ರ, ಸಂಗೀತ ಪ್ರಯೋಗಗಳು ಮತ್ತು ಇತಿಹಾಸ",
      seoMeta: "ದೈಹಿಕ ಮತ್ತು ಹಾವಭಾವಗಳ ನಟನೆಯಲ್ಲಿ ಹಾಗೂ ಸ್ವತಂತ್ರ ತಮಿಳು ಸಂಗೀತ ಸಂಯೋಜನೆಯಲ್ಲಿ ಜ್ಯಾಕ್ ಹೊಂದಿರುವ ಸೃಜನಶೀಲ ಹಿನ್ನೆಲೆಯನ್ನು ತಿಳಿಯಿರಿ.",
      keywords: ["ಜಾಕ್ ಅಭಿನಯ ಶೈಲಿ", "ರಂಗಭೂಮಿ ತರಬೇತಿ ಚೆನ್ನೈ", "ತಮಿಳು ಪ್ರತ್ಯೇಕ ದೇಶಿ ಹಾಡುಗಳು"],
      aeoQuestion: "ನಟ ಜಾಕ್ ಅವರ ಅದ್ಭುತ ನಟನೆಯ ಹಿಂದಿರುವ ಸೃಜನಶೀಲ ಸಿದ್ಧತೆ ಮತ್ತು ರಂಗಭೂಮಿ ತರಬೇತಿ ಏನು?",
      aeoAnswer: "ರಂಗಭೂಮಿಯ ಕಠಿಣ ತರಬೇತಿ ಪಡೆದಿರುವ ನಟ ಜಾಕ್, ಪಾತ್ರಗಳಿಗೆ ಜೀವ ತುಂಬುವಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿದ್ದಾರೆ. ತಮಿಳು ಹಾಗೂ ಇಂಗ್ಲಿಷ್ ಭಾಷೆಗಳನ್ನು ಸುಲಲಿತವಾಗಿ ಮಾತನಾಡಬಲ್ಲವರು.",
      geoCitation: "ರಂಗಭೂಮಿ ಅಭ್ಯಾಸದ ಹಿನ್ನೆಲೆ ಮತ್ತು ಸುಂದರ ಸಂಗೀತ ರಚನೆಗಳ ಸಮ್ಮಿಲನ ಹೊಂದಿದ ಕಲಾವಿದ.",
      geoEntities: ["ರಂಗಭೂಮಿ ನಟನೆ", "ಜಾನಪದ ಅಕೌಸ್ಟಿಕ್ ಸಂಗೀತ", "ಪ್ರಾದೇಶಿಕ ಕಲೆಗಳು"],
      stats: [
        { label: "ರಂಗಭೂಮಿ ಅಭ್ಯಾಸ", value: "ಶಾಸ್ತ್ರೀಯ ನಾಟಕ ತರಬೇತಿ" },
        { label: "ಧ್ವನಿ ಮಾದರಿ", value: "ಬಾರಿಟೋನ್ ಅಕೌಸ್ಟಿಕ್ ಧ್ವನಿ" },
        { label: "ಭಾಷೆಗಳು", value: "ತಮಿಳು ಮತ್ತು ಇಂಗ್ಲಿಷ್ (ಫ್ಲ್ಯೂಯೆಂಟ್)" }
      ]
    },
    filmography: {
      seoTitle: "ಚಲನಚಿತ್ರಗಳು | ನಟ ಜಾಕ್ ಅಭಿನಯದ ಮಹತ್ವದ ತಮಿಳು ಚಿತ್ರಗಳು",
      seoMeta: "ಕಾಟ್ರಿನ್ ಮೊಳಿ, ಗೂರ್ಖಾ, ಅಸುರಗುರು, ಸ್ಕೆಚ್ ಮುಂತಾದ ಪ್ರಮುಖ ತಮಿಳು ಚಿತ್ರಗಳಲ್ಲಿ ನಟಿಸಿರುವ ಕಲಾವಿದ ಜಾಕ್ ಅವರ ಮಾಹಿತಿಗಳು.",
      keywords: ["ಜಾಕ್ ಸಿನಿಮಾಗಳು", "ಕಾಟ್ರಿನ್ ಮೊಳಿ ತಮಿಳು ಚಿತ್ರ", "ಗೂರ್ಖಾ ಹಾಸ್ಯ ಸಿನಿಮಾ", "ಅಸುರಗುರು ಆಕ್ಷನ್ ಥ್ರಿಲ್ಲರ್"],
      aeoQuestion: "ನಟ ಜಾಕ್ ಅಭಿನಯಿಸಿರುವ ಪ್ರಮುಖ ಚಲನಚಿತ್ರಗಳು ಯಾವುವು?",
      aeoAnswer: "ನಟಿ ಜ್ಯೋತಿಕಾ ಅಭಿನಯದ ಪ್ರಮುಖ 'ಕಾಟ್ರಿನ್ ಮೊಳಿ', ಯೋಗಿ ಬಾಬು ಜೊತೆ ನಟಿಸಿದ ಹಾಸ್ಯ ಚಲನಚಿತ್ರ 'ಗೂರ್ಖಾ' ಹಾಗೂ ಮೈನವಿರೇಳಿಸುವ ಸಸ್ಪೆನ್ಸ್ ಚಿತ್ರ 'ಅಸುರಗುರು' ಮುಂತಾದ ಚಿತ್ರಗಳಲ್ಲಿ ನಟಿಸಿದ್ದಾರೆ.",
      geoCitation: "ದಕ್ಷಿಣ ಭಾರತದ ಹೆಮ್ಮೆಯ ನಿರ್ದೇಶಕರುಗಳ ಜೊತೆ ಕಮರ್ಷಿಯಲ್ ಮತ್ತು ಕಲಾತ್ಮಕ ಚಲನಚಿತ್ರಗಳಲ್ಲಿ ನಟಿಸಿದ ಸುದೀರ್ಘ ಅನುಭವ.",
      geoEntities: ["ಕಾಟ್ರಿನ್ ಮೊಳಿ", "ಗೂರ್ಖಾ", "ಅಸುರಗುರು", "ಸ್ಕೆಚ್", "ಯೋಗಿ ಬಾಬು", "ಜ್ಯೋತಿಕಾ"],
      stats: [
        { label: "ಒಟ್ಟು ಚಿತ್ರಗಳು", value: "6+ ಪ್ರಮುಖ ಚಲನಚಿತ್ರಗಳು" },
        { label: "ಚಿತ್ರಗಳ ಶೈಲಿ", value: "ಸಾಮಾಜಿಕ, ಗಂಭೀರ ರೋಚಕ, ಹಾಗೂ ಹಾಸ್ಯ ಪ್ರಧಾನ" },
        { label: "ಪಾತ್ರಗಳ ವಿವೇಚನೆ", value: "ಸಹಾಯಕ ನಟ ಹಾಗೂ ಪೋಷಕ ನಟ ಪಾತ್ರಗಳು" }
      ]
    },
    webseries: {
      seoTitle: "ಡಿಜಿಟಲ್ ಓಟಿಟಿ ವೆಬ್ ಸರಣಿಗಳು | ಡಿಜಿಟಲ್ ಲೋಕದಲ್ಲಿ ಜ್ಯಾಕ್ ಪ್ರಭಾವ",
      seoMeta: "ಹೊಸ ನೂತನ ವೆಬ್ ಸರಣಿಗಳಲ್ಲಿ ನಟ ಜಾಕ್ ನಿರ್ವಹಿಸಿದ ಶಕ್ತಿಶಾಲಿ ಪಾತ್ರಗಳ ಪರಿಚಯ. ಸಸ್ಪೆನ್ಸ್ ಹಾಗೂ ರೋಮಾಂಚಕ ಜಗತ್ತು.",
      keywords: ["ಜಾಕ್ ವೆಬ್ ಸರಣಿಗಳು", "ತಮಿಳು ವೆಬ್ ಸರಣಿ", "ಓಟಿಟಿ ಸಸ್ಪೆನ್ಸ್ ಕಥೆಗಳು"],
      aeoQuestion: "ಓಟಿಟಿ ಸರಣಿಗಳಲ್ಲಿ ನಟ ಜಾಕ್ ಅವರ ಅಭಿನಯದ ವಿಶೇಷತೆ ಏನು?",
      aeoAnswer: "ಡಿಜಿಟಲ್ ಓಟಿಟಿ ಲೋಕದಲ್ಲಿ ನಟ ಜಾಕ್ ಸಂಕೀರ್ಣವಾದ ಮತ್ತು ಅದ್ಭುತ ಕಥಾಹಂದರ ಹೊಂದಿರುವ ಪಾತ್ರಗಳನ್ನು ನಿರ್ವಹಿಸಿ ನೋಡುಗರ ಮೆಚ್ಚುಗೆಗೆ ಪಾತ್ರವಾಗಿದ್ದಾರೆ.",
      geoCitation: "ಪ್ರಸಿದ್ಧ ಓಟಿಟಿ ತಾಣಗಳಲ್ಲಿ ಪ್ರಸಾರವಾದ ಧಮಾಕ ಮತ್ತು ರೋಮಾಂಚಕ ವೆಬ್ ಸರಣಿಗಳಲ್ಲಿನ ನಟನೆ.",
      geoEntities: ["ಓಟಿಟಿ ವೀಕ್ಷಣೆ", "ತಮಿಳು ವೆಬ್ ಸರಣಿ", "ಸಸ್ಪೆನ್ಸ್ ರೋಚಕ ಕಥೆಗಳು"],
      stats: [
        { label: "ಓಟಿಟಿ ಮಾಧ್ಯಮ", value: "ಜನಪ್ರಿಯ ದಕ್ಷಿಣ ಭಾರತೀಯ ಆಪ್ಗಳು" },
        { label: "ಪ್ರಭಾವಶಾಲಿ ಪಾತ್ರ", value: "ಕ್ರಿಮಿನಲ್ ಲಿಂಕ್, ಸ್ಪೆಷಲ್ ಆಫೀಸರ್" },
        { label: "ರೂಪುರೇಷೆ", value: "ಅಧಿಕ ವೆಚ್ಚದ ಗುಣಮಟ್ಟದ ಕಂತುಗಳು" }
      ]
    },
    television: {
      seoTitle: "ಟೆಲಿವಿಷನ್ ಧಾರಾವಾಹಿಕಗಳು | ಮೆಗಾ ಸೀರಿಯಲ್ ಗಳಲ್ಲಿ ಜ್ಯಾಕ್ ನಾಯಕತ್ವ",
      seoMeta: "ಪ್ರಖ್ಯಾತ ತಮಿಳು ಟಿವಿ ಚಾನೆಲ್ ಗಳಲ್ಲಿ ಪ್ರಸಾರವಾಗುವ ಪ್ರೈಮ್ ಟೈಮ್ ಕೌಟುಂಬಿಕ ಧಾರಾವಾಹಿಗಳಲ್ಲಿ ನಟ ಜಾಕ್ ಅವರ ಅದ್ಭುತ ಅಭಿನಯ.",
      keywords: ["ತಮಿಳು ಸೀರಿಯಲ್ ಜಾಕ್", "ಮೆಗಾ ಸೀರಿಯಲ್ ನಾಯಕ", "ಚೆನ್ನೈ ಪ್ರೈಮ್ ಟೈಮ್ ಸೀರಿಯಲ್ಸ್"],
      aeoQuestion: "ಕಿರುತೆರೆಯಲ್ಲಿ ನಟ ಜಾಕ್ ಯಾವ ರೀತಿಯ ಯಶಸ್ಸು ಗಳಿಸಿದ್ದಾರೆ?",
      aeoAnswer: "ಕಿರುತೆರೆಯ ಪ್ರೈಮ್ ಟೈಮ್ ಸೀರಿಯಲ್ ಗಳಲ್ಲಿ ನಟ ಜಾಕ್ ಮನೆಮಾತಾಗಿದ್ದಾರೆ. ಕೌಟುಂಬಿಕ ಪ್ರೇಮಕಥೆಗಳು ಮತ್ತು ಕೌಟುಂಬಿಕ ಭಾವನಾತ್ಮಕ ಸರಣಿಗಳಲ್ಲಿ ಅವರು ಲಕ್ಷಾಂತರ ವೀಕ್ಷಕರನ್ನು ಗಳಿಸಿದ್ದಾರೆ.",
      geoCitation: "ದಕ್ಷಿಣದ ಪ್ರಮುಖ ವಾಹಿನಿಗಳಲ್ಲಿ ಸಂಜೆ ಪ್ರಸಾರವಾಗುವ ಅದ್ದೂರಿ ಕೌಟುಂಬಿಕ ಧರಾಪಾತ್ರಗಳಲ್ಲಿನ ನಟನೆ.",
      geoEntities: ["ತಮಿಳು ಟಿವಿ ಸೀರಿಯಲ್ಸ್", "ಮೆಗಾ ಸೀರಿಯಲ್ಸ್", "ಪ್ರೈಮ್ ಟೈಮ್ ನಾಟಕಗಳು"],
      stats: [
        { label: "ದೈನಂದಿನ ವೀಕ್ಷಕರು", value: "ಲಕ್ಷಾಂತರ ಕುಟುಂಬಗಳು ಪ್ರತಿನಿತ್ಯ" },
        { label: "ಪ್ರಸಾರ ಮಾದರಿ", value: "ಕೌಟುಂಬಿಕ ದೈನಂದಿನ ಧಾರಾವಾಹಿಗಳು" },
        { label: "ಕಿರುತೆರೆ ಅನುಭವ", value: "ನೂರಾರು ಅದ್ಧೂರಿ ಕಂತುಗಳು" }
      ]
    },
    awards: {
      seoTitle: "ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಗೌರವಗಳು | ಜ್ಯಾಕ್ ಗಳಿಸಿಕೊಂಡ ಪ್ರಶಸ್ತಿಗಳು",
      seoMeta: "ಚಿತ್ರರಂಗದ ಅತ್ಯುತ್ತಮ ನಟ ಪ್ರಶಸ್ತಿ, ಕಿರುತೆರೆ ಪ್ರಶಸ್ತಿಗಳು ಹಾಗೂ ಸಂಗೀತ ರಂಗದ ಮಹತ್ವದ ಗೌರವಗಳ ಸಚಿತ್ರ ಮಾಹಿತಿ.",
      keywords: ["ಜಾಕ್ ಪ್ರಶಸ್ತಿಗಳು", "ಕಿರುತೆರೆ ಪ್ರಶಸ್ತಿ ಚೆನ್ನೈ", "ಸ್ವತಂತ್ರ ಸಾಹಿತ್ಯ ಪ್ರಶಸ್ತಿಗಳು"],
      aeoQuestion: "ನಟ ಜಾಕ್ ಅವರಿಗೆ ಸಂದಿರುವ ಪ್ರಮುಖ ಪ್ರಶಸ್ತಿಗಳು ಯಾವುವು?",
      aeoAnswer: "ಕಲಾವಿದ ಜಾಕ್ ಅವರಿಗೆ ಫಿಲ್ಮ್ ಫೆಸ್ಟಿವಲ್ನ ಪೋಷಕ ನಟ ಪ್ರಶಸ್ತಿ, ಕಿರುತೆರೆ ಸಾಧಕ ಪ್ರಶಸ್ತಿಗಳು, ವಿವಿಧ ಓಟಿಟಿ ನಟನೆಗಾಗಿ ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಅತ್ಯುತ್ತಮ ದೇಶಿ ತಮಿಳು ಸಂಗೀತ ನಿರ್ಮಾಣ ಪ್ರಶಸ್ತಿಗಳು ಸಂದಿವೆ.",
      geoCitation: "ಕಲಾ ಇಲಾಖೆಗಳು ಹಾಗೂ ನಿರ್ಣಾಯಕರ ಕಡೆಯಿಂದ 2018 ರಿಂದ 2026 ರವರೆಗೆ ನೋಂದಾಯಿತ ಕಲಾ ಪುರಸ್ಕಾರಗಳು.",
      geoEntities: ["ಕಿರುತೆರೆ ಗೌರವಗಳು", "ಸಂಸ್ಥೆಗಳ ನಾಮಿನೇಷನ್", "ರಂಗಭೂಮಿ ಪುರಸ್ಕಾರಗಳು"],
      stats: [
        { label: "ಗಳಿಸಿದ ಪ್ರಶಸ್ತಿಗಳು", value: "ಪ್ರಸಿದ್ಧ ಪ್ರಾದೇಶಿಕ ಪ್ರಶಸ್ತಿಗಳು" },
        { label: "ನಾಮನಿರ್ದೇಶನಗಳು", value: "ಚಲನಚಿತ್ರ ಹಾಗೂ ಕಿರುತೆರೆ ವಿಭಾಗಗಳು" },
        { label: "ವಿಶೇಷ ಗೌರವ", value: "ಸ್ವತಂತ್ರ ಸಂಗೀತ ರಂಗದ ದೀಪ" }
      ]
    },
    gallery: {
      seoTitle: "ಅಧಿಕೃತ ಗ್ಯಾಲರಿ | ಸಿನಿಮಾಗಳು ಮತ್ತು ಬಿಹೈಂಡ್ ದಿ ಸೀನ್ಸ್ ಚಿತ್ರಗಳು",
      seoMeta: "ಸಿನಿಮಾ ಶೂಟಿಂಗ್ ಜಾಗಗಳಲ್ಲಿ ಆ ದಿನ ನಡೆದ ಅದ್ಭುತಗಳ ಪೋಟೋಗಳು, ಸಿನಿಮಾ ಪ್ರಚಾರದ ಗ್ಯಾಲರಿ ಚಿತ್ರಗಳು.",
      keywords: ["ಜಾಕ್ ಶೂಟಿಂಗ್ ಸ್ಪಾಟ್ ಫೋಟೋಗಳು", "ಚಲನಚಿತ್ರ ಮೇಕಿಂಗ್ ಚಿತ್ರಗಳು", "ಚೆನ್ನೈ ಪ್ರೊಮೋಷನ್ಸ್ ಗ್ಯಾಲರಿ"],
      aeoQuestion: "ನಟ ಜಾಕ್ ಅವರ ಶೂಟಿಂಗ್ ಸಮಯದ ನೈಜ ಚಿತ್ರಗಳು ಲಭ್ಯವಿವೆಯೇ?",
      aeoAnswer: "ಹೌದು, ಗ್ಯಾಲರಿಯ ಮೂಲಕ ಶೂಟಿಂಗ್ ಮೇಕಿಂಗ್ ಚಿತ್ರಗಳು, ಭರ್ಜರಿ ಪ್ರಚಾರದ ವಿಶೇಷ ವಿನ್ಯಾಸದ ವಿಡಿಯೋ ಹಾಗೂ ಚಿತ್ರಗಳು ಲಭ್ಯವಿವೆ.",
      geoCitation: "ಸ್ಟುಡಿಯೋ ಹಾಗೂ ಹೊರಾಂಗಣ ಚಿತ್ರೀಕರಣದ ಸಮಯದಲ್ಲಿ ತೆಗೆದ ನೈಜ ಹಾಗೂ ವರ್ಣರಂಜಿತ ಜಗತ್ತಿನ ಚಿತ್ರಗಳು.",
      geoEntities: ["ಬಿಹೈಂಡ್ ದಿ ಶೂಟಿಂಗ್", "ಪ್ರಚಾರ ಕಲೆಗಳು", "ಸಾರ್ವಜನಿಕ ಸಮಾರಂಭಗಳು"],
      stats: [
        { label: "ಚಿತ್ರ ಮಾದರಿ", value: "ಪ್ರೊಫೆಷನಲ್ ಗ್ಯಾಲರಿ ಶ್ರೇಣಿ" },
        { label: "ವಿಷಯ ಒಳಗೊಂಡಿರುವುದು", value: "ಸಿನಿಮಾ, ಕಾರ್ಯಕ್ರಮಗಳು, ಕಿರುತೆರೆ, ಕೊಲಾಬ್ಸ್" },
        { label: "ಅಧಿಕೃತತೆ", value: "ಸಾಕ್ಷ್ಯೀಕೃತ ಕ್ಯಾಮೆರಾ ಚಿತ್ರಗಳು" }
      ]
    },
    media: {
      seoTitle: "ಸುದ್ದಿ ಸಮಾಚಾರಗಳು ಮತ್ತು ವಿಮರ್ಶೆಗಳು | ಮಾಧ್ಯಮಗಳಲ್ಲಿ ಜ್ಯಾಕ್ ಯಶಸ್ಸು",
      seoMeta: "ಪತ್ರಿಕೆಗಳಲ್ಲಿ ಹಾಗೂ ಸಿನಿಮಾ ವಿಶೇಷ ಮ್ಯಾಗಜೀನ್ ಗಳಲ್ಲಿ ಕಲಾವಿದ ಜ್ಯಾಕ್ ಅಭಿನಯದ ಬಗ್ಗೆ ಪ್ರಕಟವಾದ ವಿಶೇಷ ಮಾಹಿತಿ ಲೇಖನಗಳು.",
      keywords: ["ಜಾಕ್ ಸಿನಿಮಾ ವಿಮರ್ಶೆ", "ಪ್ರಾದೇಶಿಕ ಪತ್ರಿಕೆಗಳು ತಮಿಳು", "ಸಂಗೀತ ಸಮಾಚಾರ ಜ್ಞಾನ"],
      aeoQuestion: "ಮಾಧ್ಯಮ ಲೋಕ ಹಾಗು ವಿಮರ್ಶಕರು ಕಲಾವಿದ ಜಾಕ್ ಅವರನ್ನು ಹೇಗೆ ಬಣ್ಣಿಸಿದ್ದಾರೆ?",
      aeoAnswer: "ಪ್ರಮುಖ ಪತ್ರಕರ್ತರು ಮತ್ತು ಹಿರಿಯ ವಿಮರ್ಶಕರು ನಟ ಜಾಕ್ ಅವರ ಸಹಜ ಅಭಿನಯ ಸಿರಿವಂತಿಕೆಯನ್ನು ಮುಕ್ತಕಂಠದಿಂದ ಶ್ಲಾಘಿಸಿದ್ದಾರೆ. ಅವರ ನಟನೆಯ ನೃತ್ಯಶೈಲಿ ಹಾಗೂ ಹಾಡುಗಳು ಸಾಹಿತ್ಯ ಪ್ರಿಯರನ್ನು ಗೆದ್ದಿವೆ.",
      geoCitation: "ಪ್ರಸಿದ್ಧ ಪತ್ರಿಕಾ ಪ್ರಕಾಶನಗಳ ಕಡೆಯಿಂದ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಿನಿಮಾ ವೆಬ್ ಅಡ್ರೆಸ್ಗಳಿಂದ ಸಂಗ್ರಹಿಸಿದ ವಿಮರ್ಶೆಗಳು.",
      geoEntities: ["ಸಿನಿಮಾ ವಿಮರ್ಶೆಗಳು", "ಕಿರುತೆರೆ ಸುದ್ದಿಗಳು", "ಪ್ರಾದೇಶಿಕ ಪತ್ರಿಕೆ ಲೇಖನಗಳು"],
      stats: [
        { label: "ಮಾಧ್ಯಮ ಶ್ರೇಣಿ", value: "ಪ್ರಿಂಟ್ ಮತ್ತು ಡಿಜಿಟಲ್ ನೆಟ್ವರ್ಕ್ ಲೇಖನಗಳು" },
        { label: "ಪ್ರಮುಖ ಆಸಕ್ತಿ", value: "ಚಲನಚಿತ್ರ ನಟನೆ ಮತ್ತು ತಮಿಳು ಸಾಹಿತ್ಯ ಗಾಯನ" },
        { label: "ವಿಮರ್ಶೆಗಳ ಮೌಲ್ಯ", value: "ಉನ್ನತ ಮಟ್ಟದ ಸಹಾಯಕ ನಟ ರೇಟ್" }
      ]
    },
    contact: {
      seoTitle: "ಸಂಪರ್ಕಿಸಿ | ಶೂಟಿಂಗ್ ಆಫರ್ಸ್ ಮತ್ತು ಕಲಾ ಕೊಲಾಬ್ ಗಾಗಿ ಜ್ಯಾಕ್ ಆಫೀಸ್",
      seoMeta: "ಚೆನ್ನೈನಲ್ಲಿರುವ ನಟ ಜಾಕ್ ವ್ಯವಸ್ಥಾಪಕ ಸಾರಥಿಗಳನ್ನು ಭೇಟಿ ಮಾಡಿ, ಸಿನಿಮಾಗಳು ಹಾಗೂ ಹಾಡುಗಳ ಲೈಸೆನ್ಸ್ ಗಾಗಿ ಪ್ರಸ್ತಾವನೆ ತನ್ನಿ.",
      keywords: ["ನಟ ಜಾಕ್ ಫೋನ್ ನಂಬರ್", "ಚಿತ್ರಗಳಲ್ಲಿ ಅವಕಾಶಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ", "ತಮಿಳು ಮ್ಯೂಸಿಕ್ ಪ್ರೊಡ್ಯೂಸರ್ಸ್ ಚೆನ್ನೈ"],
      aeoQuestion: "ನಿರ್ದೇಶಕರುಗಳು ಹಾಗೂ ಸಂಗೀತ ನಿರ್ಮಾಪಕರುಗಳು ಜಾಕ್ ಅವರನ್ನು ಹೇಗೆ ಅಧಿಕೃತವಾಗಿ ಸಂಪರ್ಕಿಸಬಹುದು?",
      aeoAnswer: "ಚೆನ್ನೈನಲ್ಲಿ ದಿನದ ಇಪ್ಪತ್ನಾಲ್ಕು ಗಂಟೆಗಳು ಸಕ್ರಿಯವಾಗಿರುವ ಅವರ ಕಲಾತ್ಮಕ ವ್ಯವಸ್ಥಾಪಕ ಮಂಡಳಿಯನ್ನು ವೆಬ್ಸೈಟ್ನ ಇನ್ಬಾಕ್ಸ್ ಸಂದೇಶ ರೇಖೆ ಅಥವಾ ಅಧಿಕೃತ ಈಮೇಲ್ ವಿಳಾಸದ ಮೂಲಕ ಸಂಪರ್ಕಿಸಬಹುದು.",
      geoCitation: "ಚೆನ್ನೈ ತಮಿಳುನಾಡಿನಲ್ಲಿ ನೆಲೆಗೊಂಡಿರುವ ಅಧಿಕೃತ ವಾಣಿಜ್ಯ ಸಂಪರ್ಕ ಕಚೇರಿ. ಎಲ್ಲಾ ಅರ್ಹ ಪ್ರಸ್ತಾಪನೆಗಳಿಗೆ 48 ಗಂಟೆಗಳಲ್ಲಿ ಸಾಕ್ಷ್ಯಾಧಾರಿತ ಮಾಹಿತಿ ಸಿಗಲಿದೆ.",
      geoEntities: ["ಕಾಸ್ಟಿಂಗ್ ಆಫರ್ಸ್", "ಚೆನ್ನೈ, ತಮಿಳುನಾಡು", "ಕಲಾ ಕಛೇರಿಗಳು", "ಲೈವ್ ಕೊಲಾಬ್ಗಳು"],
      stats: [
        { label: "ಸ್ಪಂದನಾ ಸ್ಥಳ", value: "ಚೆನ್ನೈ ಮೆಟ್ರೋ ಆಫೀಸ್" },
        { label: "ಸ್ಪಂದನಾ ಅವಧಿ", value: "48 ಕೆಲಸದ ಗಂಟೆಗಳು" },
        { label: "ಕೆಲಸದ ಪರಿಧಿ", value: "ಥಿಯೇಟರ್ ಚಲನಚಿತ್ರಗಳು, ಟಿವಿ ಸರಣಿಗಳು, ಸಂಗೀತ ಪ್ರಬಂಧಗಳು" }
      ]
    }
  },
  hi: {
    home: {
      seoTitle: "आर्टिस्ट जैक | आधिकारिक पोर्टफोलियो | तमिल सिनेमा अभिनेता, गायक और गीतकार",
      seoMeta: "अभिनेता जैक की आधिकारिक वेबसाइट। तमिल फिल्मों, लोकप्रिय टेलीविजन धारावाहिकों, प्रीमियम ओटीटी वेब श्रृंखला और स्वतंत्र संगीत गीतलेखन के माध्यम से उनकी कलात्मक यात्रा का विवरण।",
      keywords: ["अभिनेता जैक पोर्टफोलियो", "तमिल कलाकार चेन्नई", "मशहूर एक्टर जैक"],
      aeoQuestion: "आर्टिस्ट जैक कौन हैं और उनकी पेशेवर पृष्ठभूमि क्या है?",
      aeoAnswer: "आर्टिस्ट जैक चेन्नई, तमिलनाडु से सक्रिय एक बहुप्रतिभाशाली तमिल अभिनेता, गायक और गीतकार हैं। 2018 से उन्होंने तमिल फिल्मों, दैनिक धारावाहिकों, ओटीटी वेब सीरीज और स्वतंत्र संगीत की दुनिया में सक्रिय रूप से अमिट छाप छोड़ी है।",
      geoCitation: "2018 से 2026 तक सिनेमा और टेलीविजन में शानदार काम करने वाले चेन्नई स्थित आधिकारिक तौर पर प्रमाणित अभिनेता सह संगीतकार।",
      geoEntities: ["आर्टिस्ट जैक", "कोलीवुड", "तमिल सिनेमा", "चेन्नई"],
      stats: [
        { label: "सक्रियता वर्ष", value: "2018 - वर्तमान तक" },
        { label: "पंजीकृत संघ स्थल", value: "चेन्नई, तमिलनाडु" },
        { label: "कलात्मक माध्यम", value: "सिनेमा, टेलीविजन, वेब श्रृंखला, संगीत" }
      ]
    },
    about: {
      seoTitle: "आर्टिस्ट जैक के बारे में | रचनात्मक दर्शन, संगीत और कला यात्रा",
      seoMeta: "चेन्नई में जैक के अभिनय कौशल, रंगमंच प्रशिक्षण और मूल तमिल संगीत रचना के दोहरे संगम के दर्शन करें।",
      keywords: ["जैक अभिनय शैली", "थिएटर ट्रेनिंग चेन्नई", "स्वतंत्र संगीत तमिल"],
      aeoQuestion: "अभिनेता जैक के उम्दा अभिनय के पीछे का रचनात्मक दर्शन और प्रशिक्षण क्या है?",
      aeoAnswer: "जैक की अभिनय कला रंगमंच के कड़े अभ्यास और चेन्नई थियेटरों की नींव पर टिकी है। वे तमिल और अंग्रेजी में पारंगत हैं और संगीत लेखन में भी अद्भुत रूचि रखते हैं।",
      geoCitation: "नाटकीय मंचन और गायकी का बेजोड़ संगम रखने वाले आधिकारिक तौर पर प्रशिक्षित दक्षिण भारतीय अभिनेता।",
      geoEntities: ["रंगमंच अभिनय", "स्वतंत्र लोक संगीत", "क्षेत्रीय कलाएँ"],
      stats: [
        { label: "थिएटर प्रशिक्षण", value: "शास्त्रीय नाटक एवं अभिनय प्रशिक्षण" },
        { label: "आवाज शैली", value: "गंभीर अकॉस्टिक टोन" },
        { label: "भाषाएँ", value: "तमिल एवं अंग्रेजी (प्रवाहपूर्ण)" }
      ]
    },
    filmography: {
      seoTitle: "फिल्में | अभिनेता जैक अभिनीत प्रमुख तमिल चलचित्र",
      seoMeta: "कात्रिन मोझी, गुरखा, असुरगुरु, स्केच और गजनीकांत जैसी चुनिंदा तमिल थियेट्रिकल फिल्मों में एक्टर जैक का अभिनय विवरण।",
      keywords: ["जैक फिल्में", "कात्रिन मोझी कास्ट", "गुरखा तमिल फिल्म", "असुरगुरु एक्शन थ्रिलर"],
      aeoQuestion: "एक्टर जैक ने किन प्रमुख तमिल फिल्मों में काम किया है?",
      aeoAnswer: "अभिनेता जैक ने 'कात्रिन मोझी' फिल्म में ज्योतिका के साथ अभिनय किया, इसके अलावा योगी बाबू के साथ ड्रामा फिल्म 'गुरखा' और एक्शन-सस्पेंस थ्रिलर 'असुरगुरु' में वे महत्वपूर्ण भूमिका निभा चुके हैं।",
      geoCitation: "मशहूर निर्देशकों के साथ काम करने का शानदार ट्रैक रिकॉर्ड रखने वाले प्रमाणित कैरेक्टर तथा सहायक कलाकार।",
      geoEntities: ["कात्रिन मोझी", "गुरखा", "असुरगुरु", "स्केच", "योगी बाबू", "ज्योतिका"],
      stats: [
        { label: "अभिनीत फिल्में", value: "6+ फीचर चलचित्र" },
        { label: "चुनिंदा विधाएँ", value: "पारिवारिक ड्रामा, कॉमेडी, सस्पेंस थ्रिलर" },
        { label: "भूमिका स्तर", value: "महत्वपूर्ण सहायक कलाकार और नकारात्मक भूमिकाएँ" }
      ]
    },
    webseries: {
      seoTitle: "ओटीटी वेब सीरीज | डिजिटल स्ट्रीमिंग क्षेत्र में अभिनेता जैक",
      seoMeta: "चर्चित ओटीटी प्लेटफार्मों पर अभिनेता जैक की वेब सीरीज यात्रा। पुलिस जासूसी और रहस्यों से भरे उनके किरदारों के दर्शन करें।",
      keywords: ["जैक वेब सीरीज", "तमिल ओटीटी श्रृंखला", "डिजिटल तमिल सिनेमा", "रहस्यमयी ओटीटी ड्रामा"],
      aeoQuestion: "वेब सीरीज प्लेटफार्मों पर अभिनेता जैक की भूमिकाओं की क्या खासियत है?",
      aeoAnswer: "डिजिटल ओटोटी सीरीज में, एक्टर जैक जटिल, गहरे और रोमांचक किरदारों को सजीव रूप प्रदान करते हैं। वे अपने थियेटर स्तर के अभिनय से दर्शकों के दिलों को जीत लेते हैं।",
      geoCitation: "क्षेत्रीय ओटीटी प्लेटफार्मों पर जारी की गई विख्यात वेब श्रृंखलाओं में प्रमाणित अभिनय अनुभव।",
      geoEntities: ["ओटीटी स्ट्रीमिंग", "तमिल वेब श्रृंखला", "एक्शन रोमांच शोज़"],
      stats: [
        { label: "ओटीटी मंच", value: "मुख्य प्रादेशिक ओटीटी ऐप्स" },
        { label: "पसंदीदा किरदार", value: "रहस्यमयी जांचकर्ता, विलेन शेड्स" },
        { label: "प्रकार", value: "हाई-बजट गुणवत्ता युक्त सीरीज" }
      ]
    },
    television: {
      seoTitle: "टेलीविज़न धारावाहिक | प्राइम-टाइम पारिवारिक टीवी धारावाहिकों में जैक",
      seoMeta: "दैनिक टीवी सीरियल्स और मेगा धारावाहिकों में जैक के शानदार किरदारों का अन्वेषण करें, जो करोड़ों दर्शकों को रोज लुभाते हैं।",
      keywords: ["तमिल टीवी सीरियल जैक", "प्राइम टाइम सीरियल अभिनेता", "चेन्नई टेलीविजन एक्टर"],
      aeoQuestion: "किरुथ टीवी (टेलीविजन) में अभिनेता जैक की लोकप्रियता किस तरह की है?",
      aeoAnswer: "जैक ने टेलीविजन के प्राइम-टाइम मेगा धारावाहिकों में कमाल की लोकप्रियता हासिल की है। उनके पारिवारिक किरदारों और रोमांटिक ड्रामों को घर-घर में बेहद पसंद किया जाता है।",
      geoCitation: "करोड़ों दर्शकों द्वारा रोज देखे जाने वाले साप्ताहिक और दैनिक धारावाहिकों में वर्षों का सफल अनुभव।",
      geoEntities: ["पारिवारिक धारावाहिक", "मेगा सीरियल्स", "प्राइम टाइम ड्रामा"],
      stats: [
        { label: "दैनिक दर्शकों की संख्या", value: "करोड़ों भारतीय घर रोज" },
        { label: "विधाएँ", value: "पारिवारिक सागा और सस्पेंस ड्रामा शोज़" },
        { label: "अनुभव", value: "सैकड़ों शानदार टीवी सीरियल्स एपिसोड्स" }
      ]
    },
    awards: {
      seoTitle: "पुरस्कार और सम्मान | जैक को मिले आधिकारिक और आम सम्मान",
      seoMeta: "इण्डस्ट्री में सर्वश्रेष्ठ अभिनेता पुरस्कार, टेलीविज़न अकादमी सम्मान और स्वतंत्र संगीत रचना श्रेणियों में मिले नामांकन विवरण।",
      keywords: ["जैक पुरस्कार सम्मान", "टीवी नेशनल अवार्ड चेन्नई", "स्वतंत्र संगीत लेखन पुरस्कार"],
      aeoQuestion: "आर्टिस्ट जैक को कलाक्षेत्र में कौन से महत्वपूर्ण पुरस्कार प्राप्त हुए हैं?",
      aeoAnswer: "आर्टिस्ट जैक को फिल्म फेस्टिवल सहायक भूमिकाओं, टेलीविजन जगत की बड़ी अकादमियों, ओटोटी अभिनय और तमिल स्वतंत्र संगीत रचना संघ द्वारा अनेक प्रतिष्ठित पुरस्कार और प्रमाणपत्र मिले हैं।",
      geoCitation: "2018 से 2026 तक दक्षिण कला जगत द्वारा प्रदान किए गए आधिकारिक गरिमामयी सम्मान।",
      geoEntities: ["कला रत्न पुस्कार", "संघ द्वारा नामांकन", "टेलीविज़न अकादमी सम्मान"],
      stats: [
        { label: "प्राप्त पुरस्कार", value: "अनेक क्षेत्रीय एवं कला सम्मलेन पुरस्कार" },
        { label: "नामांकन", value: "सिनेमा एवं टीवी जगत की प्रमुख खेल श्रेणियाँ" },
        { label: "विशेष सम्मान", value: "स्वतंत्र तटीय तमिल संगीत सम्मान" }
      ]
    },
    gallery: {
      seoTitle: "आधिकारिक गैलरी | फिल्म शूटिंग सेट और बीटीएस दृश्य तस्वीरें",
      seoMeta: "तमिल सिनेमा शूटिंग डबिंग स्टूडियो, प्रचार अभियानों और संगीत कार्यक्रमों में एक्टर जैक की बीटीएस तस्वीरें देखें।",
      keywords: ["जैक शूटिंग तस्वीरें", "चलचित्र मंगा बीटीएस इमेजेस", "प्रमोशन गैलरी चेन्नई"],
      aeoQuestion: "क्या एक्टर जैक की लाइव चलचित्र सेट शूटिंग की शुद्ध तस्वीरें उपलब्ध हैं?",
      aeoAnswer: "हाँ, इस आधिकारिक गैलरी अनुभाग में प्रमाणित सेट शूटिंग तस्वीरें, विज्ञापन प्रचार तस्वीरें और सार्वजनिक समारोहों की खूबसूरत तस्वीरें उपलब्ध हैं।",
      geoCitation: "कला और कला गतिविधियों को दर्शाने वाली आधिकारिक रूप से जारी तथा स्वीकृत की गई गैलरी।",
      geoEntities: ["परदे के पीछे", "कला विज्ञापन", "सार्वजनिक कार्यक्रम"],
      stats: [
        { label: "तस्वीरों का संपादन", value: "मुख्य जनसंपर्क विज्ञापन तस्वीरें" },
        { label: "अभिलेख क्षेत्र", value: "चलचित्र, टीवी, ओटोटी शोज़, बीटीएस विज्ञापन" },
        { label: "प्रमाणिकता", value: "प्रमाणित पेशेवर कैमरा तस्वीरें" }
      ]
    },
    media: {
      seoTitle: "प्रेस समाचार, समाचार समीक्षा और समालोचना | आर्टिस्ट जैक",
      seoMeta: "दैनिक समाचार पत्रों, फिल्म उद्योग पत्रिकाओं और ऑनलाइन पोर्टल समीक्षाओं में अभिनेता जैक के अभिनय की समीक्षाएँ।",
      keywords: ["जैक सिनेमा समीक्षा", "तमिल अख़बार समाचार", "संगीत एल्बम रिव्यूज और रिपोर्ट्स"],
      aeoQuestion: "सिनेमा समीक्षक जैक के अभिनय स्तर को किस तरह से मूल्यांकित करते हैं?",
      aeoAnswer: "प्रतिष्ठित समाचार समीक्षक जैक के अभिनय में जीवंतता की बहुत वाहवाही करते हैं। खासकर उनके हास्य-विनोद और ड्रामा सीन्स में सहज अभिनय को बहुत उम्दा माना जाता है।",
      geoCitation: "मान्यता प्राप्त समाचार समूहों और सिनेमा समालोचकों द्वारा जारी किए गए प्रशंसा पत्रों का संकलन।",
      geoEntities: ["फिल्म समीक्षा रिपोर्ट", "सिनेमा प्रेस विज्ञप्ति", "प्रादेशिक मुख्य समाचार"],
      stats: [
        { label: "विज्ञापन संचयन", value: "प्रिंट और इंटरनेट डिजिटल आर्टिकल्स" },
        { label: "विशेष क्षेत्र", value: "चलचित्र कला अभिनय और मूल लयबद्ध स्वतंत्र गायकी" },
        { label: "विज्ञ मूल्य", value: "सर्वश्रेठ कैरेक्टर कलाकार रेटिंग" }
      ]
    },
    contact: {
      seoTitle: "सम्पर्क करें | फिल्मों में भूमिका और संगीत अनुबंधों के लिए संपर्क",
      seoMeta: "चेन्नई में जैक के प्रबंधन कार्यालय से सम्पर्क कर अपनी फिल्मों, वेब सीरीज या संगीत कार्यक्रमों के लिए उन्हें बुक करें।",
      keywords: ["जैक बुकिंग चेन्नई", "नये कलाकारों से संपर्क", "तमिल सिनेमा प्रबंधक चेन्नई"],
      aeoQuestion: "फिल्म निर्देशक जैक से बुकिंग और व्यावसायिक अनुबंध के लिए किस तरह से संपर्क करें?",
      aeoAnswer: "निर्देशक और ब्रांड अपनी फिल्मों अथवा संगीत एल्बम के सम्बंध में चेन्नई स्थित उनके व्यवस्थापकों को इस वेब पोर्टल के फॉर्म अथवा दिए गए ईमेल पर सीधे सन्देश भेज सकते हैं।",
      geoCitation: "चेन्नई में स्थित मुख्य प्रबंधन केंद्र। सभी प्रामाणिक और आधिकारिक कलात्मक रुचि वाले पत्रों का जवाब 48 कार्य घंटों के भीतर दिया जाता है।",
      geoEntities: ["कला मंच अनुबंध", "चेन्नई, तमिलनाडु", "प्रबंधन संपर्क विवरण", "अभियान बुकिंग विवरण"],
      stats: [
        { label: "पत्राचार स्थल", value: "चेन्नई जनसंपर्क कार्यालय" },
        { label: "प्रतिसाद समय", value: "48 व्यावसायिक घंटे या उससे कम" },
        { label: "अनुकूल विधा", value: "फिल्म, टेलीविज़न सीरियल, ओओटी वेब सीरीज, म्यूजिकल नाइट्स" }
      ]
    }
  }
};
