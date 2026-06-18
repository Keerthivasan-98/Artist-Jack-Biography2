export interface TranslationDict {
  // Navigation
  'nav.home': string;
  'nav.about': string;
  'nav.filmography': string;
  'nav.videos': string;
  'nav.webseries': string;
  'nav.television': string;
  'nav.awards': string;
  'nav.gallery': string;
  'nav.media': string;
  'nav.contact': string;

  // Hero Section
  'hero.tag': string;
  'hero.artist': string;
  'hero.actor': string;
  'hero.singer': string;
  'hero.lyricwriter': string;
  'hero.desc': string;
  'hero.cta.explore': string;
  'hero.cta.reel': string;
  'hero.resident': string;
  'hero.chennai': string;
  'hero.open_for': string;
  'hero.bookings': string;

  // About Section
  'about.journey': string;
  'about.title': string;
  'about.about': string;
  'about.intro': string;
  'about.p1': string;
  'about.p2': string;
  'about.active': string;
  'about.primary_base': string;
  'about.languages': string;
  'about.languages_value': string;
  'about.philosophy': string;
  'about.philosophy_title': string;
  'about.philosophy.p1.title': string;
  'about.philosophy.p1.desc': string;
  'about.philosophy.p2.title': string;
  'about.philosophy.p2.desc': string;
  'about.philosophy.p3.title': string;
  'about.philosophy.p3.desc': string;
  'about.timeline': string;
  'about.timeline.title': string;

  // Filmography
  'films.cinematic': string;
  'films.title': string;
  'films.desc': string;
  'films.director': string;
  'films.rating': string;
  'films.role': string;
  'films.genre': string;

  // Videos
  'videos.reels': string;
  'videos.title': string;
  'videos.desc': string;
  'videos.all': string;
  'videos.showreel': string;
  'videos.song': string;
  'videos.interview': string;

  // Web Series
  'webseries.digital': string;
  'webseries.title': string;
  'webseries.desc': string;
  'webseries.role': string;
  'webseries.role_highlights': string;

  // Television
  'tv.broadcast': string;
  'tv.title': string;
  'tv.desc': string;
  'tv.all': string;
  'tv.pending': string;
  'tv.showcase': string;
  'tv.credits': string;
  'tv.role': string;

  // Gallery
  'gallery.behind': string;
  'gallery.captures': string;
  'gallery.title': string;
  'gallery.desc': string;
  'gallery.all': string;
  'gallery.movies': string;
  'gallery.events': string;
  'gallery.promotions': string;
  'gallery.bts': string;
  'gallery.television': string;

  // Media
  'media.press': string;
  'media.title': string;
  'media.desc': string;
  'media.read_more': string;

  // Contact
  'contact.get_in_touch': string;
  'contact.title': string;
  'contact.desc': string;
  'contact.form_title': string;
  'contact.form_desc': string;
  'contact.fullname': string;
  'contact.email': string;
  'contact.topic': string;
  'contact.details': string;
  'contact.btn': string;
  'contact.btn.sending': string;
  'contact.btn.success': string;
  'contact.collab': string;
  'contact.socials': string;
  'contact.whatsapp': string;
  'contact.mail': string;
  'contact.insta': string;

  // Footer
  'footer.brand': string;
  'footer.desc': string;
  'footer.designed': string;
  'footer.rights': string;
  'footer.navigations': string;
  'footer.sections': string;
  'footer.channels': string;
  'footer.social_info': string;
  'footer.top': string;

  // Awards Section
  'awards.awards': string;
  'awards.title': string;
  'awards.desc': string;
  'awards.filter.all': string;
  'awards.filter.television': string;
  'awards.filter.film': string;
  'awards.filter.digital': string;
  'awards.filter.music': string;
  'awards.filter.special': string;

  // Dynamic Data
  'data.movies': { id: string; title: string; role: string; genre: string; description: string }[];
  'data.webseries': { id: string; title: string; role: string; description: string; roleHighlight: string }[];
  'data.tvserials': { id: string; title: string; genre: string; role: string; description: string }[];
  'data.videos': { id: string; title: string; category: string }[];
  'data.gallery': { id: string; title: string; alt: string; category: string }[];
  'data.media': { id: string; title: string; description: string; type: string; source: string }[];
  'data.awards': { id: string; title: string; category: string; year: string; description: string; filterType: 'Television' | 'Film' | 'Digital' | 'Music' | 'Special' }[];
  'data.stats': { label: string; value: string }[];
  'data.timeline': { year: string; title: string; description: string }[];
}

export type LanguageCode = 'en' | 'ta' | 'ml' | 'te' | 'kn' | 'hi';

export const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'ml', label: 'Malayalam' },
  { code: 'te', label: 'Telugu' },
  { code: 'kn', label: 'Kannada' },
  { code: 'hi', label: 'Hindi' }
];

export const translations: Record<LanguageCode, TranslationDict> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.filmography': 'Filmography',
    'nav.videos': 'Videos',
    'nav.webseries': 'Web Series',
    'nav.television': 'Television',
    'nav.awards': 'Awards',
    'nav.gallery': 'Gallery',
    'nav.media': 'Media',
    'nav.contact': 'Contact',

    'hero.tag': 'Tamil Cinema • Television • Short Films',
    'hero.artist': 'ACTOR',
    'hero.actor': 'Actor',
    'hero.singer': '',
    'hero.lyricwriter': '',
    'hero.desc': 'Versatile Tamil actor with deep roots in films, highly acclaimed television serials, OTT web series, and short films. Passionate about bringing authentic narratives alive through powerful performance.',
    'hero.cta.explore': 'Explore Journey',
    'hero.cta.reel': 'Watch Showreel',
    'hero.resident': 'Resident Location',
    'hero.chennai': 'Chennai, Tamil Nadu, IN',
    'hero.open_for': 'Active Base',
    'hero.bookings': 'Open for Bookings',

    'about.journey': 'THE JOURNEY',
    'about.title': 'About Actor Jack Prabhu.',
    'about.about': 'About',
    'about.intro': 'Bringing authentic characters into Tamil Cinema.',
    'about.p1': 'Hailing from the vibrant cultural ecosystem of Chennai, Tamil Nadu, Actor Jack Prabhu has grown to become an exceptionally versatile performer across diverse mediums. From independent short film sets to mainstream theatrical blockbusters, serial TV dramas, and highly acclaimed premium OTT web series, his passion for storytelling is absolute.',
    'about.p2': 'Dedicated entirely to the craft of physical acting, he continues to build a distinct cinematic identity. Mastering complex emotions, stunt work, and immersive dialogue delivery underpins his creative identity.',
    'about.active': 'Active Since',
    'about.primary_base': 'Primary Base',
    'about.languages': 'Languages',
    'about.languages_value': 'Tamil & English',
    'about.philosophy': 'Core Philosophy',
    'about.philosophy_title': 'Values That Define My Craft',
    'about.philosophy.p1.title': 'Artistic Versatility',
    'about.philosophy.p1.desc': 'Fluidly transitioning between complex dramatic leads, authentic physical action stunting, and comedic timings.',
    'about.philosophy.p2.title': 'Cinematic Dedication',
    'about.philosophy.p2.desc': 'Trained in classical acting theories and Chennai theatrical stages, bringing meticulous script analysis and posture prep to every single frame.',
    'about.philosophy.p3.title': 'Driven Performance',
    'about.philosophy.p3.desc': 'A dedicated professional focused entirely on delivering impactful, memorable screen performances.',
    'about.timeline': 'Chronicle Of Milestones',
    'about.timeline.title': 'Career Timeline',

    'films.cinematic': 'CINEMATIC WORK',
    'films.title': 'Feature Films.',
    'films.desc': 'Jack’s curated feature film appearances working alongside award-winning directors and producers across high-octane thrillers, family dramas, and mass comedies.',
    'films.director': 'Director',
    'films.rating': 'Rating',
    'films.role': 'Role',
    'films.genre': 'Genre',

    'videos.reels': 'SHOWREELS',
    'videos.title': 'Featured Media.',
    'videos.desc': 'A collection of selected showreels and interviews showcasing Actor Jack Prabhu’s versatility in acting.',
    'videos.all': 'All Reels',
    'videos.showreel': 'Showreels',
    'videos.song': '',
    'videos.interview': 'Interviews',

    'webseries.digital': 'DIGITAL SPHERE',
    'webseries.title': 'Web Series.',
    'webseries.desc': 'Gritty, high-intensity storytelling in prime-time digital series. Exploring characters that delve deep into suspense, grey areas, and complex relationships.',
    'webseries.role': 'Role',
    'webseries.role_highlights': 'Role Highlights',

    'tv.broadcast': 'BROADCAST WORK',
    'tv.title': 'Television Serials.',
    'tv.desc': 'Jack’s stellar appearances in widely loved regional mega-series, spanning leading family soap-operas, romantic dramedies, and suspenseful procedures.',
    'tv.all': 'All',
    'tv.pending': 'POSTER IMAGE RELEASE PENDING',
    'tv.showcase': 'Actor Showcase',
    'tv.credits': 'Official credits',
    'tv.role': 'Cast Role',

    'gallery.behind': 'BEHIND THE SCREEN',
    'gallery.captures': 'CAPTURES & STILLS',
    'gallery.title': 'Moments in Shot.',
    'gallery.desc': 'A curated collection of on-set moments, candid behind-the-scenes photography, and official promotional shoots capturing Actor Jack Prabhu’s cinematic journey.',
    'gallery.all': 'All Photos',
    'gallery.movies': 'Movies',
    'gallery.events': 'Events',
    'gallery.promotions': 'Promotional Shoots',
    'gallery.bts': 'Behind the Scenes',
    'gallery.television': 'Television',

    'media.press': 'PRESS & CRITICS',
    'media.title': 'In the Headlines.',
    'media.desc': 'Explore what entertainment critics, cinema journalists, and digital content platforms are stating about Jack’s latest screen performances across film and television.',
    'media.read_more': 'Read Full Feature',

    'contact.get_in_touch': 'GET IN TOUCH',
    'contact.title': 'Request Collab or casting booking.',
    'contact.desc': 'For film casting, digital web series commissions, brand endorsements, or general creative inquiries; feel free to drop a direct note here.',
    'contact.form_title': 'Send Direct Inquiry',
    'contact.form_desc': 'Your submission goes directly to Jack\'s professional team.',
    'contact.fullname': 'Full Name',
    'contact.email': 'Email Address',
    'contact.topic': 'Message Topic',
    'contact.details': 'Message Details',
    'contact.btn': 'Send inquiry',
    'contact.btn.sending': 'Sending...',
    'contact.btn.success': 'Inquiry Sent Successfully!',
    'contact.collab': 'Direct Collaboration Channels',
    'contact.socials': 'Find Jack on Social Hubs',
    'contact.whatsapp': 'WhatsApp Channel',
    'contact.mail': 'Professional Mailbox',
    'contact.insta': 'Instagram Feed',

    'footer.brand': 'ACTOR JACK PRABHU',
    'footer.desc': 'Honest storytelling and physical cinema from Chennai to the world.',
    'footer.designed': 'Designed & developed for the silver screen.',
    'footer.rights': '© 2026 Jack Prabhu. All rights reserved.',
    'footer.navigations': 'Navigations',
    'footer.sections': 'Sections',
    'footer.channels': 'Official Channels',
    'footer.social_info': 'Follow Artist Jack on social handles to get instant previews of updates from filmmaking studios and recording boxes.',
    'footer.top': 'TOP',

    'awards.awards': 'RECOGNITIONS & LAURELS',
    'awards.title': 'Awards & Honors',
    'awards.desc': 'Celebrating Actor Jack Prabhu’s excellence and critical acclaim across Indian films, prime-time television, and OTT web series.',
    'awards.filter.all': 'All',
    'awards.filter.television': 'Television Awards',
    'awards.filter.film': 'Film Awards',
    'awards.filter.digital': 'Digital Awards',
    'awards.filter.music': 'Short Film Awards',
    'awards.filter.special': 'Special Honors',

    'data.movies': [
      {
        id: 'm1',
        title: 'Kaatrin Mozhi',
        role: 'Supporting Actor',
        genre: 'Drama',
        description: 'A charming comedy-drama starring Jyothika, exploring the life of an ambitious radio jockey. Jack delivered a strong supporting performance that resonated with audiences.'
      },
      {
        id: 'm2',
        title: 'Gurkha',
        role: 'Key Cast member',
        genre: 'Comedy',
        description: 'A hilarious comedy thriller inside a hostage situation at a shopping mall. Jack showcased exceptional comedy timing and high energy alongside Yogi Babu.'
      },
      {
        id: 'm3',
        title: 'Asuraguru',
        role: 'Antagonist Assistant',
        genre: 'Thriller',
        description: 'An action-packed heist thriller centered around a clever high-tech thief. Jack played a critical supporting antagonist role, delivering a sleek performance in high-stakes action sequences.'
      },
      {
        id: 'm4',
        title: 'Sketch',
        role: 'Local Gang Member',
        genre: 'Action',
        description: 'An intense action thriller starring Chiyaan Vikram, set in North Chennai. Jack played a high-impact local gang associate involved in dramatic vehicle recovery conflicts.'
      },
      {
        id: 'm5',
        title: 'Ghajinikanth',
        role: 'Friend Role (Key Comic Lead)',
        genre: 'Comedy',
        description: 'A popular romantic comedy about a young man suffering from severe forgetfulness. Jack played the principal friend supporting character, creating memorable comic relief.'
      },
      {
        id: 'm6',
        title: 'Kuttram Purinthal',
        role: 'Lead Hero Character Friend',
        genre: 'Thriller',
        description: 'A dark, mind-bending suspense thriller investigating secret medical conspiracies. Jack brought emotional depth and heavy drama to the crucial ally role.'
      },
      {
        id: 'm7',
        title: 'Kavalthurai Ungal Nanban',
        role: 'Sub-Inspector / Assisting Officer',
        genre: 'Drama',
        description: 'A realistic, critically acclaimed intense social thriller exploring the power dynamics within law enforcement. Jack delivered a highly commended, nuanced, realistic performance.'
      }
    ],
    'data.webseries': [
      {
        id: 'w1',
        title: 'Police Diary 2.0',
        role: 'Sub-Inspector Prem',
        description: 'A gripping cop procedural web series following a special task force solving Chennai’s most heinous criminal cases in real-time.',
        roleHighlight: 'Starred as SI Prem, a brilliant forensics-minded field officer who uses analytical skills to track down serial cases.'
      },
      {
        id: 'w2',
        title: 'Auto Shankar',
        role: 'Constable Kathir',
        description: 'The award-winning, critically acclaimed crime series depicting the notorious gangster-serial killer Auto Shankar in late-1980s Madras.',
        roleHighlight: 'Played Constable Kathir, a morally torn rookie cop caught between bribery, underworld threats, and system-wide corruption.'
      }
    ],
    'data.tvserials': [
      {
        id: 'tv1',
        title: 'Anbe Vaa',
        genre: 'Family Drama',
        role: 'Jeeva (Supporting Lead)',
        description: 'A massive prime-time television hit exploring deep emotional conflicts and family bonds. Played an influential supportive family member guiding the lead protagonist.'
      },
      {
        id: 'tv2',
        title: 'Raja Rani (Season 2)',
        genre: 'Drama / Romance',
        role: 'Siddharth (Comic Supporting Lead)',
        description: 'One of Star Vijay\'s highest-charting family dramas. Showcased exceptional light-hearted comedy timing and strong relational performance.'
      },
      {
        id: 'tv3',
        title: 'Supernatural Files',
        genre: 'Mystery / Thriller',
        role: 'Inspector Arjun (Ensemble Cast)',
        description: 'An episodic suspense procedural tackling occult riddles. Portrayed an analytical police inspector key to resolving complicated criminal and supernatural tracks.'
      },
      {
        id: 'tv4',
        title: 'Sillunu Oru Kaadhal',
        genre: 'Romance / Action',
        role: 'Sub-Inspector Kathir',
        description: 'A popular soap revolving around an IPS officer\'s marital and professional responsibilities. Featured in a disciplined law enforcement role.'
      },
      {
        id: 'tv5',
        title: 'Kadal Kadhandhu Udhyogam',
        genre: 'Urban Comedy',
        role: 'Ganesh (Parallel Lead)',
        description: 'A humorous sitcom tracking corporate workers dealing with office politics. Starred as an aspirational employee executing high-impact comedic situations.'
      },
      {
        id: 'tv6',
        title: 'Chithi 2',
        genre: 'Drama',
        role: 'Dr. Santosh (Cameo)',
        description: 'A beloved mega-serial showcasing familial duties. Played a professional medical consultant vital to steering critical plot-points and health arcs.'
      },
      {
        id: 'tv7',
        title: 'Bharathi Kannamma',
        genre: 'Melodrama',
        role: 'Pradeep (Supporting)',
        description: 'A widely recognized television drama addressing social and family expectations. Portrayed a voice of reason supporting the protagonist.'
      }
    ],
    'data.videos': [
      { id: 'v1', title: 'Artist Jack Official Showreel 2026', category: 'Showreel' },
      { id: 'v2', title: '“The Confrontation” - Dramatic Short Film Excerpt by Jack', category: 'Showreel' },
      { id: 'v3', title: 'Behind the Voice: Exclusive Studio Interview with Jack', category: 'Interview' }
    ],
    'data.gallery': [
      { id: 'g1', title: 'Kaatrin Mozhi Filming', alt: 'Kaatrin Mozhi on-set action with directors', category: 'Movies' },
      { id: 'g2', title: 'Award Function Appearance', alt: 'Jack attending an award function in Chennai', category: 'Events' },
      { id: 'g3', title: 'Modern Classic Portait', alt: 'Studio portrait of Actor Jack', category: 'Promotional Shoots' },
      { id: 'g4', title: 'Auto Shankar script read', alt: 'Jack reviewing script on set of Auto Shankar', category: 'Behind the Scenes' },
      { id: 'g5', title: 'TV Reality Star Guest Panel', alt: 'Jack as guest mentor on reality TV show', category: 'Television' },
      { id: 'g6', title: 'Action Sequence Stunt Set', alt: 'Dramatic police confrontation scene in Kuttram Purinthal', category: 'Movies' },
      { id: 'g7', title: 'Luxury Suit Shoot', alt: 'Sleek premium suit photoshoot for brand endorsement', category: 'Promotional Shoots' },
      { id: 'g8', title: 'Post-Production Dubbing', alt: 'Jack dubbing dialogues in a soundproof studio', category: 'Behind the Scenes' }
    ],
    'data.media': [
      {
        id: 'media1',
        title: '“From Theatre Stages to Silverscreen” – Behind Jack’s Cinematic Journey',
        description: 'An expansive profile piece tracking Jack’s rise from performing on Chennai theatre stages to sharing screen space with legendary actors in Tamil cinema.',
        type: 'Interview',
        source: 'The Hindu Cinema'
      },
      {
        id: 'media2',
        title: 'Jack’s SI Constable Role in Auto Shankar Earns Rising Star Nomination',
        description: 'Jack nominated for Best Supporting Actor in a Digital Series for his gritty, authentic portrayal of Constable Kathir in India’s leading OTT web series.',
        type: 'Award',
        source: 'Chennai Express Awards 2024'
      },
      {
        id: 'media3',
        title: 'Jack Confirmed for High Voltage Action Cameo in Upcoming Mystery Project',
        description: 'Tamil film industry buzz confirms Jack has wrapped up a major combat antagonist sequence for an upcoming premium bilingual high-budget thriller.',
        type: 'Press Release',
        source: 'Behindwoods Today'
      }
    ],
    'data.awards': [
      {
        id: 'a1',
        title: 'Tamil Television Academy Award',
        category: 'Best Supporting Actor (Drama)',
        year: '2021',
        description: 'Winner for his outstanding supporting role as Jeeva in Sun TV’s prime-time hit ‘Anbe Vaa’.',
        filterType: 'Television'
      },
      {
        id: 'a2',
        title: 'Madras Film Fans Association Award',
        category: 'Best Comedy Actor (Ensemble)',
        year: '2019',
        description: 'Commended for high-energy performance and comic timing alongside Yogi Babu in the theatrical comedy ‘Gurkha’.',
        filterType: 'Film'
      },
      {
        id: 'a3',
        title: 'South Indian OTT Awards',
        category: 'Breakthrough Performance of the Year',
        year: '2020',
        description: 'Honors for his portrayal of Constable Kathir in the critically acclaimed crime thriller series ‘Auto Shankar’.',
        filterType: 'Digital'
      },
      {
        id: 'a4',
        title: 'Chennai Short Film Fest',
        category: 'Best Actor in a Short Film',
        year: '2022',
        description: 'Recognized for outstanding intense performance in independent Tamil short films.',
        filterType: 'Music'
      },
      {
        id: 'a5',
        title: 'Kalaimamani Special Recognition',
        category: 'State Youth Icon Award',
        year: '2023',
        description: 'Awarded by the cultural department for exceptional versatility and contribution across television, theatre, and films.',
        filterType: 'Special'
      }
    ],
    'data.stats': [
      { label: 'Feature Films', value: '20+' },
      { label: 'Short Films', value: '10+' },
      { label: 'Web Series', value: '2' },
      { label: 'TV Appearances', value: 'Multiple' }
    ],
    'data.timeline': [
      {
        year: '2016 - 2017',
        title: 'Indie Roots & Chennai Theatre',
        description: 'Performed with iconic theatre groups in Chennai. Developed acting and stage presence in live theatrical circuits, while securing prominent supporting roles in award-winning short films.'
      },
      {
        year: '2018',
        title: 'Breakthrough in Tamil Cinema',
        description: 'Debut in silver-screen blockbusters with back-to-back major roles in Chiyaan Vikram’s "Sketch", "Ghajinikanth", and the Jyothika-starrer "Kaatrin Mozhi" under director Radha Mohan.'
      },
      {
        year: '2019',
        title: 'OTT Web Series Revolution',
        description: 'Successfully transitioned to digital leads, playing Constable Kathir in the critical masterpiece "Auto Shankar" and starring as a lead investigational officer in "Police Diary 2.0" on ZEE5.'
      },
      {
        year: '2020 - 2021',
        title: 'Acclaim & Social Thrillers',
        description: 'Starred as a Sub-Inspector in "Kavalthurai Ungal Nanban" and delivered intense supporting drama in "Asuraguru" and "Kuttram Purinthal", establishing versatility across antagonist and ally spectrums.'
      },
      {
        year: '2022 - present',
        title: 'Vocal Expansion & Modern Cinematic Heists',
        description: 'Actively releasing indie guitar singles like “Neeye” while balancing roles as screenplay consultant, composer, and powerhouse antagonist cast member in upcoming digital web series.'
      }
    ]
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.about': 'சுயவிவரம்',
    'nav.filmography': 'திரைப்பட விபரம்',
    'nav.videos': 'காணொளிகள்',
    'nav.webseries': 'வலைத்தொடர்கள்',
    'nav.television': 'தொலைக்காட்சி',
    'nav.awards': 'விருதுகள்',
    'nav.gallery': 'புகைப்படங்கள்',
    'nav.media': 'ஊடகம்',
    'nav.contact': 'தொடர்புக்கு',

    'hero.tag': 'தமிழ் சினிமா • தொலைக்காட்சி • இசை',
    'hero.artist': 'கலைஞர்',
    'hero.actor': 'நடிகர்',
    'hero.singer': 'பாடகர்',
    'hero.lyricwriter': 'பாடல் ஆசிரியர்',
    'hero.desc': 'திரைப்படங்கள், புகழ்பெற்ற தொலைக்காட்சித் தொடர்கள், ஓடிடி வலைத்தொடர்கள் மற்றும் குறும்படங்களில் ஆழமாகத் தடம் பதித்த பன்முகத் திறன் கொண்ட தமிழ் நடிகர். சக்திவாய்ந்த நடிப்பின் மூலமாகவும், தனக்கே உரிய சுயாதீனப் பாடல்கள் மூலமாகவும் எதார்த்தமான கதைகளுக்கு உயிர் கொடுப்பதில் ஆர்வம் கொண்டவர்.',
    'hero.cta.explore': 'வாழ்க்கைப் பயணம்',
    'hero.cta.reel': 'காட்சிகளின் தொகுப்பு',
    'hero.resident': 'வாழுமிடம்',
    'hero.chennai': 'சென்னை, தமிழ்நாடு, இந்தியா',
    'hero.open_for': 'செயல்தளம்',
    'hero.bookings': 'வாய்ப்புகளுக்குத் தயார்',

    'about.journey': 'பயணம்',
    'about.title': 'கலைஞர் ஜாக் பற்றி.',
    'about.about': 'விபரம்',
    'about.intro': 'தமிழ் சினிமாவில் எதார்த்தமான கதாபாத்திரங்களையும் ஆன்மாவைத் தொடும் இசையையும் கொண்டு சேர்த்தல்.',
    'about.p1': 'தமிழ்நாட்டின் தலைநகரான சென்னையின் துடிப்பான பண்பாட்டுக் களத்திலிருந்து வந்த கலைஞர் ஜாக், பல்வேறு கலை ஊடகங்களில் தனது பன்முகத் திறனை நிரூபித்துள்ளார். சுயாதீனக் குறும்படங்கள் முதல் பெரிய திரையரங்குத் திரைப்படங்கள், தொலைக்காட்சித் தொடர்கள் மற்றும் மிகவும் பாராட்டப்பட்ட உயர்தர ஓடிடி வலைத்தொடர்கள் வரை, ஜாக்கின் கதை சொல்லும் ஆர்வம் அளப்பரியது.',
    'about.p2': 'உடலசைவுகளையும் உணர்ச்சிகளையும் வெளிப்படுத்தும் நடிப்பைத் தாண்டி, அவரது அசல் இசை அமைப்பு தமிழ் சினிமாவின் தனித்துவமான அடையாளமாக விளங்குகிறது. காதல் மற்றும் மெல்லிசைப் பாடல்களை உருவாக்குவதும், நேரடியான மற்றும் ஆன்மாவை வருடும் வரிகளை எழுதுவதும் அவரது படைப்பு அடையாளத்தின் அடிப்படைத் தூண்கள்.',
    'about.active': 'செயலில் உள்ள ஆண்டு',
    'about.primary_base': 'தலைமையிடம்',
    'about.languages': 'மொழிகள்',
    'about.languages_value': 'தமிழ் மற்றும் ஆங்கிலம்',
    'about.philosophy': 'முக்கிய தத்துவம்',
    'about.philosophy_title': 'எனது கலையை வரையறுக்கும் விழுமியங்கள்',
    'about.philosophy.p1.title': 'கலைசார் பன்முகத்தன்மை',
    'about.philosophy.p1.desc': 'சிக்கலான உணர்ச்சிகரமான காட்சிகள், எதார்த்தமான சண்டைக்காட்சிகள், நகைச்சுவை நேரங்கள் மற்றும் மெல்லிசைப் பதிவுகளுக்கிடையில் லாவகமாகத் தன்னை மாற்றிக்கொள்ளும் திறன்.',
    'about.philosophy.p2.title': 'திரைப்பட அர்ப்பணிப்பு',
    'about.philosophy.p2.desc': 'மரபுசார் நடிப்பு கோட்பாடுகள் மற்றும் சென்னையின் நாடக மேடைகளில் பயிற்சி பெற்றதால், ஒவ்வொரு காட்சியிலும் நுணுக்கமான உடல் மொழி மற்றும் அர்ப்பணிப்பைக் கொண்டு வருதல்.',
    'about.philosophy.p3.title': 'சுயாதீன இசையாத்மா',
    'about.philosophy.p3.desc': 'சுயாதீனப் பாடகராகவும் பாடல் ஆசிரியராகவும் இருந்து, தமிழ் மண்ணின் ஒலிகளை நவீன கிதார் இசையுடன் கலந்து பன்முக இசையை உருவாக்குதல்.',
    'about.timeline': 'முக்கிய மைல்கற்கள்',
    'about.timeline.title': 'வாழ்க்கைப் பயனக் காலவரிசை',

    'films.cinematic': 'திரைப்படத் துறை',
    'films.title': 'திரைப்படங்கள்.',
    'films.desc': 'விறுவிறுப்பான திரில்லர் கதைகள், குடும்பப் பாசப் படங்கள் மற்றும் பொது நகைச்சுவைத் திரைப்படங்கள் எனப் பல்வேறு விருது பெற்ற இயக்குநர்கள் மற்றும் தயாரிப்பாளர்களுடன் ஜாக் பணியாற்றிய திரைப்படங்களின் தொகுப்பு.',
    'films.director': 'இயக்குநர்',
    'films.rating': 'மதிப்பீடு',
    'films.role': 'கதாபாத்திரம்',
    'films.genre': 'வகை',

    'videos.reels': 'ரீல்கள் & இசை',
    'videos.title': 'சிறப்புக் காணொளிகள்.',
    'videos.desc': 'நடிப்பு மற்றும் பாடுவதில் ஜாக்கின் பன்முகத்தன்மையை விளக்கும் நடிப்பின் துண்டுகள், அசல் கிதார் மெல்லிசைகள் மற்றும் நேர்காணல்களின் தொகுப்பு.',
    'videos.all': 'அனைத்து ரீல்களும்',
    'videos.showreel': 'காட்சிக் கோர்வைகள்',
    'videos.song': 'பாடல்கள்',
    'videos.interview': 'நேர்காணல்கள்',

    'webseries.digital': 'டிஜிட்டல் களம்',
    'webseries.title': 'வலைத்தொடர்கள்.',
    'webseries.desc': 'இணையத் தளங்களில் ஆழமான மற்றும் விறுவிறுப்பான உலகங்கள். மர்மம், சாம்பல் நிறக் குணாதிசயங்கள் மற்றும் சிக்கலான மனித உறவுகளைக் கையாளும் தொடர்கள்.',
    'webseries.role': 'கதாபாத்திரம்',
    'webseries.role_highlights': 'முக்கிய சிறப்பம்சங்கள்',

    'tv.broadcast': 'தொலைக்காட்சிப் பணி',
    'tv.title': 'தொலைக்காட்சித் தொடர்கள்.',
    'tv.desc': 'தமிழ் மக்களின் பேரன்பைப் பெற்ற தொலைக்காட்சித் தொடர்களில் ஜாக்கின் சிறந்த நடிப்புகள். இவை குடும்ப நாடகங்கள், காதல் தொடர்கள் மற்றும் மர்மத் தொடர்களை உள்ளடக்கியது.',
    'tv.all': 'அனைத்தும்',
    'tv.pending': 'சுவரொட்டி இன்னும் வெளியிடப்படவில்லை',
    'tv.showcase': 'நடிப்புச் சிறப்புகள்',
    'tv.credits': 'அதிகாரப்பூர்வப் பங்களிப்புகள்',
    'tv.role': 'கதாபாத்திரம்',

    'gallery.behind': 'திரைக்குப் பின்னால்',
    'gallery.captures': 'CAPTURES & STILLS',
    'gallery.title': 'சுவாரஸ்யமான தருணங்கள்.',
    'gallery.desc': 'A curated collection of on-set moments, candid behind-the-scenes photography, and official promotional shoots capturing Actor Jack Prabhu’s cinematic journey.',
    'gallery.all': 'அனைத்துப் படங்கள்',
    'gallery.movies': 'திரைப்படங்கள்',
    'gallery.events': 'நிகழ்ச்சிகள்',
    'gallery.promotions': 'விளம்பரப் படங்கள்',
    'gallery.bts': 'படப்பிடிப்புத் தளத்தில்',
    'gallery.television': 'தொலைக்காட்சி',

    'media.press': 'ஊடகம் & விமர்சனங்கள்',
    'media.title': 'செய்தித் தலைப்புகளில்.',
    'media.desc': 'ஜாக்கின் நடிப்பு மற்றும் அசல் இசை ஆல்பங்கள் குறித்து பிரபலத் திரைப்பட விமர்சகர்கள் மற்றும் செய்தி ஊடகங்கள் வெளியிட்ட கட்டுரைகள்.',
    'media.read_more': 'முழுமையாக வாசிக்க',

    'contact.get_in_touch': 'தொடர்பு கொள்ள',
    'contact.title': 'ஒத்துழைப்பு அல்லது வாய்ப்புகளுக்கு அணுகவும்.',
    'contact.desc': 'நடிகர் தேர்வு, இசைத் திட்டங்கள், பிராண்டு விளம்பரங்கள் அல்லது நேர்காணல்களுக்கு, எங்களை நேரடியாகத் தொடர்பு கொள்ள இந்தக் படிவத்தைப் பயன்படுத்தலாம்.',
    'contact.form_title': 'நேரடி அணுகல்',
    'contact.form_desc': 'உங்கள் தகவல் நேரடியாக ஜாக்கின் நிர்வாகக் குழுவினருக்கு அனுப்பப்படும்.',
    'contact.fullname': 'முழுப் பெயர்',
    'contact.email': 'மின்னஞ்சல் முகவரி',
    'contact.topic': 'தலைப்பு',
    'contact.details': 'விபரங்கள்',
    'contact.btn': 'விபரம் சமர்ப்பி',
    'contact.btn.sending': 'அனுப்பப்படுகிறது...',
    'contact.btn.success': 'தகவல் வெற்றிகரமாக அனுப்பப்பட்டது!',
    'contact.collab': 'நேரடித் தொடர்பு வழிகள்',
    'contact.socials': 'சமூக வலைத்தளங்களில் ஜவாக்',
    'contact.whatsapp': 'வாட்ஸ்அப் சேனல்',
    'contact.mail': 'அதிகாரப்பூர்வ மின்னஞ்சல்',
    'contact.insta': 'இன்ஸ்டாகிராம் பக்கம்',

    'footer.brand': 'நடிகர் ஜாக்',
    'footer.desc': 'எதார்த்தமான நடிப்பு, உணர்வுப்பூர்வமான பாத்திரங்கள் மற்றும் ஆன்மாவை வருடும் பாடல்கள் மூலம் சென்னையிலிருந்து உலகிற்கு.',
    'footer.designed': 'பெரிய திரைக்காக வடிவமைக்கப்பட்டு உருவாக்கப்பட்டது.',
    'footer.rights': '© 2026 ஜாக். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'footer.navigations': 'வழிசெலுத்தல்',
    'footer.sections': 'பிரிவுகள்',
    'footer.channels': 'அதிகாரப்பூர்வ சேனல்கள்',
    'footer.social_info': 'திரைப்பட தயாரிப்பு நிறுவனங்கள் மற்றும் பதிவுக் கூடங்களிலிருந்து உடனடி அறிவிப்புகளைப் பெற சமூக ஊடகங்களில் நடிகர் ஜாக்கை பின் தொடரவும்.',
    'footer.top': 'மேலே',

    'awards.awards': 'விருதுகள் மற்றும் அங்கீகாரங்கள்',
    'awards.title': 'விருதுகள் மற்றும் கௌரவங்கள்',
    'awards.desc': 'இந்தியத் திரைப்படங்கள், தொலைக்காட்சித் தொடர்கள், டிஜிட்டல் வலைத்தொடர்கள் மற்றும் சுயாதீன இசையில் நடிகர் ஜாக்கின் சிறந்த பங்களிப்பிற்கான அங்கீகாரம்.',
    'awards.filter.all': 'அனைத்தும்',
    'awards.filter.television': 'தொலைக்காட்சி விருதுகள்',
    'awards.filter.film': 'திரைப்பட விருதுகள்',
    'awards.filter.digital': 'டிஜிட்டல் விருதுகள்',
    'awards.filter.music': 'இசை விருதுகள்',
    'awards.filter.special': 'சிறப்பு கௌரவங்கள்',

    'data.movies': [
      {
        id: 'm1',
        title: 'காற்றின் மொழி',
        role: 'துணை நடிகர் / பாடகர்',
        genre: 'குடும்ப நாடகம்',
        description: 'ஜோதிகா நடிப்பில், ரேடியோ ஜாக்கியின் வாழ்க்கையைச் சொல்லும் அழகான நகைச்சுவைத் திரைப்படம். ஜாக் இதில் ஒரு குறிப்பிடத்தக்க வேடத்தில் நடித்து பின்னணிப் பாடலுக்கும் பங்களித்தார்.'
      },
      {
        id: 'm2',
        title: 'குர்கா',
        role: 'முன்னணி நடிகர்களில் ஒருவர்',
        genre: 'நகைச்சுவை',
        description: 'வணிக வளாகத்தில் நடக்கும் ஒரு கடத்தல் சம்பவத்தைச் சொல்லும் கலகலப்பான நகைச்சுவைத் திரைப்படம். யோகி பாபுவுடன் இணைந்து ஜாக் இதில் சிறந்த நகைச்சுவை நடிப்பை வெளிப்படுத்தினார்.'
      },
      {
        id: 'm3',
        title: 'அசுரகுரு',
        role: 'எதிராளியின் உதவியாளர்',
        genre: 'விறுவிறுப்பான திரைப்படம்',
        description: 'நவீனத் திருடனைப் பற்றிய விறுவிறுப்பான கொள்ளைச் சம்பவப் படம். ஜாக் இதில் முக்கிய வில்லனுக்குத் துணையாகத் தோன்றி அசத்தலான சண்டைக்காட்சிகளில் நடித்தார்.'
      },
      {
        id: 'm4',
        title: 'ஸ்கெட்ச்',
        role: 'உள்ளூர் கும்பல் உறுப்பினர்',
        genre: 'அடிதடி விறுவிறுப்பு',
        description: 'சியான் விக்ரம் நடிப்பில் வடசென்னையை மையமாகக் கொண்ட ஆக்‌ஷன் படம். ஜாக் இதில் கார்களைக் கைப்பற்றும் காட்சிகளில் விறுவிறுப்பான உள்ளூர் நபராக நடித்தார்.'
      },
      {
        id: 'm5',
        title: 'கஜினிகாந்த்',
        role: 'நண்பன் கதாபாத்திரம் (முக்கிய நகைச்சுவை)',
        genre: 'நகைச்சுவை',
        description: 'மறதி நோயால் அவதிப்படும் இளைஞனைப் பற்றிய காதல் நகைச்சுவைத் திரைப்படம். நாயகனின் நெருங்கிய நண்பனாக வந்து ஜாக் பல நகைச்சுவைக் காட்சிகளைப் படைத்தார்.'
      },
      {
        id: 'm6',
        title: 'குற்றம் புரிந்தால்',
        role: 'நாயகனின் நண்பன்',
        genre: 'புலனாய்வுத் திரைப்படம்',
        description: 'மருத்துவக் குற்றங்களை அலசும் ஒரு விறுவிறுப்பான மர்மத் திரைப்படம். ஜாக் இதில் ஒரு முக்கிய நண்பனாகத் தோன்றி உணர்ச்சிகரமான நடிப்பை வழங்கினார்.'
      },
      {
        id: 'm7',
        title: 'காவல்துறை உங்கள் நண்பன்',
        role: 'உதவி காவல் அதிகாரி / சப்-இன்ஸ்பெக்டர்',
        genre: 'சமூக நாடகம்',
        description: 'காவல்துறையில் நிலவும் அதிகாரப் போக்குகளைப் பேசும் மிக யதார்த்தமான சமூகத் திரைப்படம். ஜாக்கின் நடிப்பு இதில் மிகவும் பாராட்டப்பட்டது.'
      }
    ],
    'data.webseries': [
      {
        id: 'w1',
        title: 'போலீஸ் டைரி 2.0',
        role: 'சப்-இன்ஸ்பெக்டர் பிரேம்',
        description: 'சென்னையில் நடக்கும் கொடூரமான குற்றங்களை விசாரிக்கும் ஒரு சிறப்புப் படையில் நடக்கும் விறுவிறுப்பான போலீஸ் விசாரணைத் தொடர்.',
        roleHighlight: 'புத்திசாலித்தனமாகவும் துப்பறியும் அறிவியல் நுணுக்கங்களை உபயோகப்படுத்தியும் குற்றவாளிகளைக் கண்டுபிடிக்கும் காவலராக நடித்தார்.'
      },
      {
        id: 'w2',
        title: 'ஆட்டோ சங்கர்',
        role: 'கான்ஸ்டபிள் கதிர்',
        description: '1980களில் சென்னையில் வாழ்ந்த பிரபல ரவுடி ஆட்டோ சங்கரின் வாழ்க்கையை விவரிக்கும் மிகச் சிறந்த விருது பெற்ற டிஜிட்டல் தொடர்.',
        roleHighlight: 'ஊழல், பாதாள உலக மிரட்டல் மற்றும் அரசாங்கக் கட்டுப்பாடுகளுக்கிடையில் மாட்டித் தவிக்கும் நேர்மையான இளம் காவலராக நடித்தார்.'
      }
    ],
    'data.tvserials': [
      {
        id: 'tv1',
        title: 'அன்பே வா',
        genre: 'குடும்ப நாடகம்',
        role: 'ஜீவா (முக்கியத் துணை வேடம்)',
        description: 'சன் டிவியின் மிகப்பிரபலமான குடும்ப உணர்வுகளைப் பேசும் தொடர். நாயகனுக்கு வழிகாட்டும் ஒரு முக்கிய குடும்ப உறுப்பினராக நடித்தார்.'
      },
      {
        id: 'tv2',
        title: 'ராஜா ராணி (பாகம் 2)',
        genre: 'நாடகம் / காதல்',
        role: 'சித்தார்த் (நகைச்சுவைத் துணை வேடம்)',
        description: 'விஜய் டிவியின் மிக உயர்ந்த டிஆர்பி பெற்ற தொடர். நகைச்சுவை மற்றும் குடும்பப் பாசக் காட்சிகளில் சிறப்பான நடிப்பை வெளிப்படுத்தினார்.'
      },
      {
        id: 'tv3',
        title: 'சூப்பர்நேச்சுரல் ஃபைல்ஸ்',
        genre: 'மர்மம் / திரில்லர்',
        role: 'இன்ஸ்பெக்டர் அர்ஜுன்',
        description: 'துப்பறியும் மர்ம வழக்குகளைத் தீர்க்கும் ஜீ தமிழின் ஒரு பகுதித் தொடர். மர்மமான மற்றும் ஆவிகள் தொடர்பான குற்றங்களை விசாரிக்கும் போலீஸ் அதிகாரியாகத் தோன்றினார்.'
      },
      {
        id: 'tv4',
        title: 'சில்லுனு ஒரு காதல்',
        genre: 'காதல் / ஆக்‌ஷன்',
        role: 'சப்-இன்ஸ்பெக்டர் கதிர்',
        description: 'கலர்ஸ் தமிழின் பிரபலமான போலீஸ் அதிகாரியின் வாழ்க்கைத் தொடர். ஒழுக்கமும் கடமை உணர்வும் மிக்க போலீஸ் வேடத்தில் நடித்தார்.'
      },
      {
        id: 'tv5',
        title: 'கடல் கடந்து உத்தியோகம்',
        genre: 'நகர்ப்புற நகைச்சுவை',
        role: 'கணேஷ் (இணை நாயகன்)',
        description: 'ராஜ் டிவியின் நகைச்சுவைத் தொடர். அலுவலக அரசியல் மற்றும் புதுமையான நகைச்சுவைகளைக் கொண்ட பாத்திரத்தில் நடித்தார்.'
      },
      {
        id: 'tv6',
        title: 'சித்தி 2',
        genre: 'குடும்ப நாடகம்',
        role: 'டாக்டர் சந்தோஷ் (சிறப்பு தோற்றம்)',
        description: 'சன் டிவியின் மிகவும் புகழ்பெற்ற முன்தினத் தொடர். கதையின் முக்கியத் திருப்புமுனையாக அமையும் மருத்துவர் பாத்திரத்தில் நடித்தார்.'
      },
      {
        id: 'tv7',
        title: 'பாரதி கண்ணம்மா',
        genre: 'குடும்ப நாடகம்',
        role: 'பிரதீப் (துணைக் கதாபாத்திரம்)',
        description: 'சமூக மதிப்பீடுகள் மற்றும் குடும்ப உறவுகளைப் பேசும் விஜய் டிவியின் மெகா ஹிட் நாடகம். நேர்மறை எண்ணங்களைக் கொண்டவராக நடித்தார்.'
      }
    ],
    'data.videos': [
      { id: 'v1', title: 'கலைஞர் ஜாக் அதிகாரப்பூர்வ நடிப்புத் தொகுப்பு 2026', category: 'நடிப்புத் தொகுப்பு' },
      { id: 'v2', title: '“நீயே” - ஜாக்கின் தமிழ் மெல்லிசைப் பாடல்', category: 'பாடல்' },
      { id: 'v3', title: 'குரலுக்குப் பின்னால்: ஜாக்குடன் பிரத்யேக நேர்காணல்', category: 'நேர்காணல்' }
    ],
    'data.gallery': [
      { id: 'g1', title: 'காற்றின் மொழி படப்பிடிப்பு', alt: 'காற்றின் மொழி படப்பிடிப்பு அனுபவங்கள்', category: 'Movies' },
      { id: 'g2', title: 'இசை வெளியீட்டு விழா', alt: 'மேடையில் ஜாக்கின் மெல்லிசைப் பாடல் நிகழ்வு', category: 'Events' },
      { id: 'g3', title: 'நவீன புகைப்படங்கள்', alt: 'நடிகர் ஜாக்கின் பிரத்யேகப் புகைப்படங்கள்', category: 'Promotional Shoots' },
      { id: 'g4', title: 'ஆட்டோ சங்கர் கதை வாசிப்பு', alt: 'ஆட்டோ சங்கர் கதையை இயக்குநர் கூறக் கேட்கும் ஜாக்', category: 'Behind the Scenes' },
      { id: 'g5', title: 'தொலைக்காட்சி நிகழ்ச்சியில் விருந்தினராக', alt: 'முன்னணி தொலைக்காட்சியின் நடுவர் குழுவில் ஜாக்', category: 'Television' },
      { id: 'g6', title: 'விளையாட்டு மற்றும் சண்டைக் காட்சி', alt: 'குற்றம் புரிந்தால் படத்தின் சண்டைக்காடசி ஒத்திகை', category: 'Movies' },
      { id: 'g7', title: 'விளம்பரப் படப்பிடிப்பு', alt: 'விளம்பரங்களுக்கான ஜாக்கின் பிரத்யேக ஆடை வடிவமைப்பு', category: 'Promotional Shoots' },
      { id: 'g8', title: 'ஸ்டுடியோ குரல் பதிவு', alt: 'ஸ்டுடியோவில் ஜாக் பாடலின் குரல் பதிவு', category: 'Behind the Scenes' }
    ],
    'data.media': [
      {
        id: 'media1',
        title: '“சுயாதீனப் பாடல்கள் முதல் வெள்ளித்திரை வரை” – ஜாக்கின் இசைப் பயணம்',
        description: 'சென்னையின் கஃபே மேடைகளில் தொடங்கித் தமிழ் சினிமாவின் மாபெரும் நட்சத்திரங்களுடன் இணைந்து நடிக்கும் அளவிற்கு ஜாக் வளர்ந்த இசைப் பயணத்தின் விரிவான கட்டுரை.',
        type: 'நேர்காணல்',
        source: 'தி இந்து சினிமா'
      },
      {
        id: 'media2',
        title: 'ஆட்டோ சங்கர் தொடரில் கான்ஸ்டபிள் கதிர் பாத்திரத்திற்காக சிறந்த துணை நடிகருக்கான விருதுப் பரிந்துரை',
        description: 'இந்தியாவின் முன்னணி ஓடிடி வலைத்தொடரான ஆட்டோ சங்கரில் அவரது தூய்மையான, நேர்மையான நடிப்பிற்கு Rising Star விருதுப் பரிந்துரை.',
        type: 'விருது',
        source: 'சென்னை எக்ஸ்பிரஸ் விருதுகள் 2024'
      },
      {
        id: 'media3',
        title: 'புதிய மர்மப் படத்தில் ஜாக்கின் அதிரடி ஆக்‌ஷன் காட்சிகள் உறுதி செய்யப்பட்டன',
        description: 'தமிழ் சினிமா வட்டாரங்கள் வெளியிட்ட செய்தியின்படி, ஜாக் ஒரு பெரிய பட்ஜெட் மர்மப் படத்தில் வில்லனாக ஆக்‌ஷன் காட்சிகளில் நடித்துள்ளார்.',
        type: 'செய்தி அறிக்கை',
        source: 'பிஹைண்ட்வுட்ஸ் டுடே'
      }
    ],
    'data.awards': [
      {
        id: 'a1',
        title: 'தமிழ் தொலைக்காட்சி அகாடமி விருது',
        category: 'சிறந்த துணை நடிகர் (நாடகம்)',
        year: '2021',
        description: 'சன் டிவியின் வெற்றித் தொடரான ‘அன்பே வா’ வில் ஜீவா என்ற துணை கதாபாத்திரத்தில் நடித்ததற்காக வென்ற விருது.',
        filterType: 'Television'
      },
      {
        id: 'a2',
        title: 'மெட்ராஸ் திரைப்பட ரசிகர்கள் சங்க விருது',
        category: 'சிறந்த நகைச்சுவை நடிகர் (குழுமம்)',
        year: '2019',
        description: '‘குர்க்கா’ திரைப்படத்தில் யோகி பாபுவுடன் இணைந்து நகைச்சுவை நடிப்பை வெளிப்படுத்தியதற்கான அங்கீகாரம்.',
        filterType: 'Film'
      },
      {
        id: 'a3',
        title: 'தென்னிந்திய ஓடிடி விருதுகள்',
        category: 'ஆண்டின் சிறந்த திருப்புமுனை நடிப்பு',
        year: '2020',
        description: '‘ஆட்டோ சங்கர்’ தொடரில் கான்ஸ்டபிள் கதிர் கதாபாத்திரத்தில் நடித்த சிறந்த நடிப்பிற்கான விருது.',
        filterType: 'Digital'
      },
      {
        id: 'a4',
        title: 'சென்னையின் சிறந்த சுயாதீன இசை விருது',
        category: 'சிறந்த சுயாதீன பாடகர் மற்றும் பாடல் ஆசிரியர்',
        year: '2022',
        description: 'அவரது மெல்லிசைப் பாடலான “நீயே” மற்றும் பிற சுயாதீனப் பாடல்களில் சிறந்த குரல் மற்றும் வரிகளுக்காகப் பெற்ற விருது.',
        filterType: 'Music'
      },
      {
        id: 'a5',
        title: 'கலைமாமணி சிறப்பு விருது',
        category: 'மாநில இளைஞர் கலைத்திறன் விருது',
        year: '2023',
        description: 'தொலைக்காட்சி மற்றும் திரைப்படத் துறைகளில் ஜாக்கின் பன்முகத் திறமையைப் பாராட்டி வழங்கப்பட்ட சிறப்பு அங்கீகாரம்.',
        filterType: 'Special'
      }
    ],
    'data.stats': [
      { label: 'திரைப்படங்கள்', value: '20+' },
      { label: 'குறும்படங்கள்', value: '10+' },
      { label: 'வலைத்தொடர்கள்', value: '2' },
      { label: 'தொலைக்காட்சித் தொடர்கள்', value: 'பல' }
    ],
    'data.timeline': [
      {
        year: '2016 - 2017',
        title: 'சென்னையின் நாடக மேடைகள்',
        description: 'சென்னையில் முன்னணி நாடகக் குழுக்களில் நடித்துத் திறமைகளை வளர்த்துக் கொண்டார். அத்துடன் சிறந்த குறும்படங்களிலும் முக்கிய வேடங்களில் நடித்தார்.'
      },
      {
        year: '2018',
        title: 'தமிழ் சினிமாவில் திருப்புமுனை',
        description: 'சியான் விக்ரமின் "ஸ்கெட்ச்", "கஜினிகாந்த்", மற்றும் ஜோதிகா நடித்த ஜோரான "காற்றின் மொழி" ஆகிய படங்கள் மூலம் பெரிய திரைக்கு அறிமுகமானார்.'
      },
      {
        year: '2019',
        title: 'ஓடிடி வலைத்தொடர்களின் புரட்சி',
        description: '"ஆட்டோ சங்கர்" தொடரில் சிறப்பான கான்ஸ்டபிள் கதிர் வேடமும், ஜீ5-இன் "போலீஸ் டைரி 2.0"-இல் அதிரடி விசாரணை அதிகாரியாகவும் முத்திரை பதித்தார்.'
      },
      {
        year: '2020 - 2021',
        title: 'சமூகப் படங்கள் & எதார்த்த நடிப்பு',
        description: '"காவல்துறை உங்கள் நண்பன்" படத்தில் மிகச்சிறந்த காவலராகவும், "அசுரகுரு" மற்றும் "குற்றம் புரிந்தால்" படங்களில் ஆழமான பாத்திரங்களிலும் நடித்தார்.'
      },
      {
        year: '2022 - தற்போது வரை',
        title: 'இசை விரிவாக்கம் & ஆக்‌ஷன் பாத்திரங்கள்',
        description: '“நீயே” போன்ற புகழ்பெற்ற சுயாதீன மெலடிப் பாடல்களை வெளியிடுவதோடு, புதிய பெரிய பட்ஜெட் ஆக்‌ஷன் படங்களில் தற்பொழுது நடித்து வருகிறார்.'
      }
    ]
  },
  ml: {
    'nav.home': 'ഹോം',
    'nav.about': 'വിവരണം',
    'nav.filmography': 'സിനിമകൾ',
    'nav.videos': 'വീഡിയോകൾ',
    'nav.webseries': 'വെബ് സീരീസ്',
    'nav.television': 'ടെലിവിഷൻ',
    'nav.awards': 'അവാർഡുകൾ',
    'nav.gallery': 'ചിത്രങ്ങൾ',
    'nav.media': 'മാധ്യമ വാർത്തകൾ',
    'nav.contact': 'ബന്ധപ്പെടുക',

    'hero.tag': 'തമിഴ് സിനിമ • ടെലിവിഷൻ • സംഗീതം',
    'hero.artist': 'കലാകാരൻ',
    'hero.actor': 'നടൻ',
    'hero.singer': 'ഗായകൻ',
    'hero.lyricwriter': 'ഗാനരചയിതാവ്',
    'hero.desc': 'തമിഴ് സിനിമകൾ, വെബ് സീരീസുകൾ, ടെലിവിഷൻ പരമ്പരകൾ എന്നിവയിലൂടെ പ്രേക്ഷകരുടെ പ്രിയങ്കരനായ ബഹുമുഖ പ്രതിഭയായ തമിഴ് നടൻ. തൻ്റേതായ തനത് അഭിനയ ശൈലിയിലൂടെയും സ്വതന്ത്ര സംഗീത നിർമ്മാണത്തിലൂടെയും ഓരോ കഥാപാത്രങ്ങൾക്കും ജീവൻ നൽകുന്നു.',
    'hero.cta.explore': 'പ്രയാണ വഴികൾ',
    'hero.cta.reel': 'വീഡിയോ റീൽസ്',
    'hero.resident': 'താമസസ്ഥലം',
    'hero.chennai': 'ചെന്നൈ, തമിഴ്നാട്, ഇന്ത്യ',
    'hero.open_for': 'പ്രവർത്തന തട്ടകം',
    'hero.bookings': 'അവസരങ്ങൾ സ്വീകരിക്കുന്നു',

    'about.journey': 'യാത്ര',
    'about.title': 'കലാകാരൻ ജാക്കിനെക്കുറിച്ച്.',
    'about.about': 'വിവരണം',
    'about.intro': 'തമിഴ് സിനിമയിലേക്ക് യഥാർത്ഥ കഥാപാത്രങ്ങളെയും ഹൃദയസ്പർശിയായ സംഗീതത്തെയും എത്തിക്കുന്നു.',
    'about.p1': 'തമിഴ്‌നാടിന്റെ സാംസ്‌കാരിക തലസ്ഥാനമായ ചെന്നൈയിൽ നിന്നും കടന്നുവന്ന ആർട്ടിസ്റ്റ് ജാക്ക്, വിവിധ മാധ്യമങ്ങളിൽ തന്റെ ബഹുമുഖ കഴിവുകൾ തെളിയിച്ചിട്ടുണ്ട്. സ്വതന്ത്ര ഹ്രസ്വചിത്രങ്ങൾ മുതൽ മെയിൻസ്ട്രീം തിയേറ്റർ ഹിറ്റുകൾ വരെ, സീരിയലുകൾ, ഒടിടി വെബ് സീരീസുകൾ എന്നിവയിലെല്ലാം ജാക്കിന്റെ പങ്കാളിത്തം ശ്രദ്ധേയമാണ്.',
    'about.p2': 'അഭിനയത്തിന് പുറമേ, സംഗീതത്തോടുള്ള അദ്ദേഹത്തിന്റെ സമർപ്പണം മറ്റൊരു പ്രധാന സവിശേഷതയാണ്. തദ്ദേശീയ തമിഴ് അക്കോസ്റ്റിക് സംഗീതത്തെ പുതിയ ഗിറ്റാർ ശബ്ദങ്ങളുമായി സമന്വയിപ്പിച്ച് അദ്ദേഹം മികച്ച ഗാനങ്ങൾ അവതരിപ്പിക്കുന്നു.',
    'about.active': 'സജീവമായ വർഷം',
    'about.primary_base': 'പ്രധാന സ്ഥലം',
    'about.languages': 'ഭാഷകൾ',
    'about.languages_value': 'തമിഴ് & ഇംഗ്ലീഷ്',
    'about.philosophy': 'പ്രധാന തത്വശാസ്ത്രം',
    'about.philosophy_title': 'എൻ്റെ കലയെ നിർവ്വചിക്കുന്ന മൂല്യങ്ങൾ',
    'about.philosophy.p1.title': 'കലാപരമായ വൈവിധ്യം',
    'about.philosophy.p1.desc': 'വൈകാരികമായ അഭിനയം, ആക്ഷൻ രംഗങ്ങൾ, കോമഡി ടൈമിംഗ്, വോക്കൽ റെക്കോർഡിംഗുകൾ എന്നിവയിലൂടെയുള്ള മികച്ച പ്രകടനം.',
    'about.philosophy.p2.title': 'സിനിമാറ്റിക് സമർപ്പണം',
    'about.philosophy.p2.desc': 'ചെന്നൈ തിയേറ്റർ വേദികളിൽ നിന്നുള്ള പരിശീലനം ഓരോ കഥാപാത്രത്തിലും മികച്ച രീതിയിൽ അവതരിപ്പിക്കുന്നു.',
    'about.philosophy.p3.title': 'സംഗീതാത്മാവ്',
    'about.philosophy.p3.desc': 'തമിഴ് തനത് സംഗീതത്തെ പാശ്ചാത്യ ഗിറ്റാർ ശബ്ദങ്ങളുമായി കൂട്ടിച്ചേർത്ത് പുതുമയുള്ള മെലഡികൾ സൃഷ്ടിക്കുന്നു.',
    'about.timeline': 'പ്രധാന നാഴികക്കല്ലുകൾ',
    'about.timeline.title': 'കരിയർ ടൈംലൈൻ',

    'films.cinematic': 'സിനിമാ നിർമ്മിതികൾ',
    'films.title': 'സിനിമകൾ.',
    'films.desc': 'പ്രമുഖ സംവിധായകരുമായും നിർമ്മാതാക്കളുമായും ചേർന്ന് ജാക്ക് അഭിനയിച്ച ശ്രദ്ധേയമായ സിനിമകളുടെ വിവരങ്ങൾ.',
    'films.director': 'സംവിധായകൻ',
    'films.rating': 'റേറ്റിംഗ്',
    'films.role': 'കഥാപാത്രം',
    'films.genre': 'വിഭാഗം',

    'videos.reels': 'റീലുകൾ & സംഗീതം',
    'videos.title': 'പ്രത്യേക വീഡിയോകൾ.',
    'videos.desc': 'അഭിനയത്തിലും പാട്ടിലും ജാക്കിന്റെ വൈവിധ്യം വിളിച്ചോതുന്ന വീഡിയോകൾ, മെലഡികൾ, അഭിമുഖങ്ങൾ എന്നിവ.',
    'videos.all': 'എല്ലാ വീഡിയോകളും',
    'videos.showreel': 'ഷോറീലുകൾ',
    'videos.song': 'ഗാനങ്ങൾ',
    'videos.interview': 'അഭിമുഖങ്ങൾ',

    'webseries.digital': 'ഡിജിറ്റൽ സ്പേസ്',
    'webseries.title': 'വെബ് സീരീസ്.',
    'webseries.desc': 'ജനപ്രിയ ഒടിടി പ്ലാറ്റ്‌ഫോമുകളിൽ മികച്ച കഥാപാത്രങ്ങളിലൂടെ ശ്രദ്ധേയമായ പ്രകടനം കാഴ്ചവെച്ച വെബ് സീരീസുകൾ.',
    'webseries.role': 'കഥാപാത്രം',
    'webseries.role_highlights': 'പ്രധാന സവിശേഷതകൾ',

    'tv.broadcast': 'ടെലിവിഷൻ പ്രവർത്തനങ്ങൾ',
    'tv.title': 'ടെലിവിഷൻ പരമ്പരകൾ.',
    'tv.desc': 'മലയാളികൾക്കും തമിഴർക്കും പ്രിയപ്പെട്ട ജനപ്രിയ ടെലിവിഷൻ സീരിയലുകളിൽ ജാക്ക് അഭിനയിച്ച കഥാപാത്രങ്ങൾ.',
    'tv.all': 'എല്ലാം',
    'tv.pending': 'പോസ്റ്റർ ഇതുവരെ ലഭ്യമാക്കിയിട്ടില്ല',
    'tv.showcase': 'അഭിനയ വൈഭവം',
    'tv.credits': 'ഔദ്യോഗിക പങ്കാളിത്തം',
    'tv.role': 'കഥാപാത്രം',

    'gallery.behind': 'ബിഹൈൻഡ് ദി സീൻ',
    'gallery.captures': 'CAPTURES & STILLS',
    'gallery.title': 'പ്രധാന നിമിഷങ്ങൾ.',
    'gallery.desc': 'A curated collection of on-set moments, candid behind-the-scenes photography, and official promotional shoots capturing Actor Jack Prabhu’s cinematic journey.',
    'gallery.all': 'എല്ലാ ചിത്രങ്ങളും',
    'gallery.movies': 'സിനിമകൾ',
    'gallery.events': 'പരിപാടികൾ',
    'gallery.promotions': 'പ്രൊമോഷൻ ഷൂട്ടുകൾ',
    'gallery.bts': 'ഷൂട്ടിംഗ് സെറ്റിൽ',
    'gallery.television': 'ടെലിവിഷൻ',

    'media.press': 'മാധ്യമങ്ങളും ലോകവും',
    'media.title': 'വാർത്തകളിൽ ജാക്ക്.',
    'media.desc': 'സിനിമാ നിരൂപകരും മാധ്യമങ്ങളും ജാക്കിന്റെ പ്രകടനത്തെക്കുറിച്ചും പാട്ടുകളെക്കുറിച്ചും എഴുതിയ അവലോകനങ്ങൾ.',
    'media.read_more': 'പൂർണ്ണമായി വായിക്കുക',

    'contact.get_in_touch': 'ബന്ധപ്പെടുക',
    'contact.title': 'സഹകരണത്തിനോ അവസരങ്ങൾക്കോ ഇവിടെ ബന്ധപ്പെടുക.',
    'contact.desc': 'അഭിനയം, സംഗീത കോമ്പോസിഷൻ, ബ്രാൻഡ് പരസ്യങ്ങൾ എന്നിവയ്ക്കായി ഈ ഫോം ഉപയോഗിച്ച് ബന്ധപ്പെടാം.',
    'contact.form_title': 'സന്ദേശം അയയ്ക്കുക',
    'contact.form_desc': 'നിങ്ങളുടെ വിവരങ്ങൾ നേരിട്ട് ജാക്കിന്റെ ടീമിന് കൈമാറുന്നതാണ്.',
    'contact.fullname': 'പൂർണ്ണ നാമം',
    'contact.email': 'ഇമെയിൽ വിലാസം',
    'contact.topic': 'വിഷയം',
    'contact.details': 'വിശദാംശങ്ങൾ',
    'contact.btn': 'സന്ദേശം സമർപ്പിക്കുക',
    'contact.btn.sending': 'അയയ്ക്കുന്നു...',
    'contact.btn.success': 'വിജയകരമായി അയച്ചു!',
    'contact.collab': 'നേരിട്ടുള്ള സമ്പർക്ക മാർഗ്ഗങ്ങൾ',
    'contact.socials': 'സോഷ്യൽ മീഡിയ ലിങ്കുകൾ',
    'contact.whatsapp': 'വാട്സാപ്പ് ചാനൽ',
    'contact.mail': 'ഔദ്യോഗിക ഇമെയിൽ',
    'contact.insta': 'ഇൻസ്റ്റാഗ്രാം പേജ്',

    'footer.brand': 'നടൻ ജാക്ക്',
    'footer.desc': 'നല്ല അഭിനയവും മനോഹരമായ സംഗീതവും ചെന്നൈയിൽ നിന്നും ലോകമെമ്പാടും ഉള്ള പ്രേക്ഷകരിലേക്ക് എത്തിക്കുന്നു.',
    'footer.designed': 'വെള്ളിത്തിരയ്ക്കായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്തത്.',
    'footer.rights': '© 2026 ജാക്ക്. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
    'footer.navigations': 'നാവിഗേഷൻ',
    'footer.sections': 'വിഭാഗങ്ങൾ',
    'footer.channels': 'ഔദ്യോഗിക ചാനലുകൾ',
    'footer.social_info': 'സിനിമകളുടെയും മറ്റ് വിനോദ പരിപാടികളുടെയും വാർത്തകൾ വേഗത്തിൽ അറിയാൻ ഔദ്യോഗിക സോഷ്യൽ മീഡിയ അക്കൗണ്ടുകൾ ഫോളോ ചെയ്യുക.',
    'footer.top': 'മുകളിലേക്ക്',

    'awards.awards': 'അംഗീകാരങ്ങളും നേട്ടങ്ങളും',
    'awards.title': 'അവാർഡുകളും ആദരവുകളും',
    'awards.desc': 'ഇന്ത്യൻ സിനിമകൾ, ടെലിവിഷൻ പരമ്പരകൾ, ഡിജിറ്റൽ വെബ് സീരീസുകൾ, സ്വതന്ത്ര സംഗീതം എന്നിവയിലുള്ള മികച്ച സംഭാവനകൾക്ക് ലഭിച്ച അംഗീകാരങ്ങൾ.',
    'awards.filter.all': 'എല്ലാം',
    'awards.filter.television': 'ടെലിവിഷൻ അവാർഡുകൾ',
    'awards.filter.film': 'സിനിമ അവാർഡുകൾ',
    'awards.filter.digital': 'ഡിജിറ്റൽ അവാർഡുകൾ',
    'awards.filter.music': 'സംഗീത അവാർഡുകൾ',
    'awards.filter.special': 'പ്രത്യേക ആദരവുകൾ',

    'data.movies': [
      {
        id: 'm1',
        title: 'കാറ്റിൻ മൊഴി',
        role: 'സപ്പോർട്ടിംഗ് ആക്ടർ / ഗായകൻ',
        genre: 'ഫാമിലി ഡ്രാമ',
        description: 'ജ്യോതിക പ്രധാന വേഷത്തിൽ അഭിനയിച്ച മനോഹരമായ കോമഡി ചിത്രം. ജാക്ക് ഇതിൽ ശ്രദ്ധേയമായ സപ്പോർട്ടിംഗ് വേഷത്തിൽ എത്തുകയുണ്ടായി.'
      },
      {
        id: 'm2',
        title: 'ഗൂർഖ',
        role: 'പ്രധാന നടന്മാരിൽ ഒരാൾ',
        genre: 'ഹാസ്യം',
        description: 'ഷോപ്പിംഗ് മാളിൽ നടക്കുന്ന ഒരു തമാശയും ത്രില്ലറും നിറഞ്ഞ സിനിമ. യോഗി ബാബുവിനൊപ്പം മികച്ച കോമഡി അഭിനയം കാഴ്ചവെച്ചു.'
      },
      {
        id: 'm3',
        title: 'അസുരഗുരു',
        role: 'വില്ലൻ സഹായി',
        genre: 'ത്രില്ലർ',
        description: 'ബുദ്ധിമാനായ ഒരു കള്ളനെ പറ്റിയുള്ള ആക്ഷൻ ചിത്രം. ഇതിൽ ജാക്ക് ആക്ഷൻ രംഗങ്ങളിൽ മികച്ച പ്രകടനമാണ് നടത്തിയത്.'
      },
      {
        id: 'm4',
        title: 'സ്കെച്ച്',
        role: 'ലൂക്കൽ ഗുണ്ടാ സംഘാംഗം',
        genre: 'ആക്ഷൻ ത്രില്ലർ',
        description: 'വിക്രം പ്രധാന വേഷത്തിൽ അഭിനയിച്ച വടക്കൻ ചെന്നൈയുടെ പശ്ചാത്തലത്തിലുള്ള ചിത്രം. വണ്ടി പിടിച്ചെടുക്കുന്ന രംഗങ്ങളിൽ ശ്രദ്ധേയമായ അഭിനയം.'
      },
      {
        id: 'm5',
        title: 'ഗജിനികാന്ത്',
        role: 'കൂട്ടുകാരൻ (പ്രധാന കോമഡി റോൾ)',
        genre: 'ഹാസ്യം',
        description: 'ഓർമ്മക്കുറവുള്ള നായകന്റെ കഥ പറയുന്ന പ്രണയ ഹാസ്യ ചിത്രം. നായകന്റെ സന്തതസഹചാരിയായി മികച്ച കോമഡി കാഴ്ചവെച്ചു.'
      },
      {
        id: 'm6',
        title: 'കുറ്റം പുരിന്താൽ',
        role: 'നായകൻറെ കൂട്ടുകാരൻ',
        genre: 'ത്രില്ലർ',
        description: 'മെഡിക്കൽ അഴിമതികളെ വെളിപ്പെടുത്തുന്ന മനോഹരമായ സസ്പെൻസ് ത്രില്ലർ സിനിമ. ജാക്ക് നല്ല വൈകാരിക അഭിനയം കാഴ്ചവെച്ചു.'
      },
      {
        id: 'm7',
        title: 'കാവൽതുറൈ ഉങ്ങൾ നൻപൻ',
        role: 'സബ് ഇൻസ്പെക്ടർ / അസിസ്റ്റിംഗ് ഓഫീസർ',
        genre: 'ഡ്രാമ',
        description: 'പോലീസ് വ്യവസ്ഥിതികളെയും സാധാരണക്കാരുടെയും ജീവിതം ചർച്ച ചെയ്ത സിനിമ. ജാക്കിന്റെ പ്രകടനം ഏറെ അഭിനന്ദിക്കപ്പെട്ടു.'
      }
    ],
    'data.webseries': [
      {
        id: 'w1',
        title: 'പോലീസ് ഡയറി 2.0',
        role: 'സബ് ഇൻസ്പെക്ടർ പ്രേം',
        description: 'ചെന്നൈയിലെ കടുത്ത കുറ്റകൃത്യങ്ങൾ അന്വേഷിക്കുന്ന ഒരു പ്രത്യേക ടാസ്ക് ഫോഴ്സിന്റെ കഥ പറയുന്ന മികച്ച വെബ് സീരീസ്.',
        roleHighlight: 'ശാസ്ത്രീയമായ തെളിവുകളിലൂടെ കുറ്റവാളികളെ കണ്ടെത്തുന്ന ഓഫീസർ ആയി തിളങ്ങി.'
      },
      {
        id: 'w2',
        title: 'ഓട്ടോ ശങ്കർ',
        role: 'കോൺസ്റ്റബിൾ കതിർ',
        description: '1980കളിലെ ചെന്നൈയിലെ കുപ്രസിദ്ധ കുറ്റവാളിയായ ഓട്ടോ ശങ്കറിന്റെ ജീവിതം പറയുന്ന സീരീസ്.',
        roleHighlight: 'വ്യവസ്ഥിതികളുടെ സമ്മർദ്ദങ്ങളിൽ തളരുന്ന യുവ പോലീസ് തസ്തികയിൽ കതിർ ആയി അഭിനയിച്ചു.'
      }
    ],
    'data.tvserials': [
      {
        id: 'tv1',
        title: 'അൻപേ വാ',
        genre: 'കുടുംബ പരമ്പര',
        role: 'ജീവൻ (സപ്പോർട്ടിംഗ് റോൾ)',
        description: 'സൺ ടിവിയിലെ വൻ വിജയകരമായ പരമ്പര. നായകനെ നയിക്കുന്ന നിർണ്ണായക വേഷത്തിൽ അഭിനയിച്ചു.'
      },
      {
        id: 'tv2',
        title: 'രാജാ റാണി (സീസൺ 2)',
        genre: 'ഡ്രാമ / റൊമാൻസ്',
        role: 'സിദ്ധാർത്ഥ്',
        description: 'വിജയ് ടിവിയിലെ ജനപ്രിയ സീരിയൽ. ഹാസ്യവും വൈകാരികവുമായ നിമിഷങ്ങൾ മനോഹരമായി അവതരിപ്പിച്ചു.'
      },
      {
        id: 'tv3',
        title: 'സൂപ്പർനാച്ചുറൽ ഫയൽസ്',
        genre: 'മിസ്റ്ററി / ത്രില്ലർ',
        role: 'ഇൻസ്‌പെക്ടർ അർജുൻ',
        description: 'അമാനുഷിക ശക്തികളും കേസുകളും അന്വേഷിക്കുന്ന സീരീസ്. ഇതിൽ ഇൻവെസ്റ്റിഗേഷൻ ഓഫീസർ ആയി മികച്ച വേഷം.'
      },
      {
        id: 'tv4',
        title: 'ചില്ലിനു ഒരു കാതൽ',
        genre: 'പ്രണയം / ആക്ഷൻ',
        role: 'സബ് ഇൻസ്പെക്ടർ കതിർ',
        description: 'കളേഴ്സ് തമിഴിലെ പ്രശസ്ത പോലീസ് ഫാമിലി പരമ്പര. ഭവ്യനും കാര്യപ്രാപ്തിയുമുള്ള പോലീസ് ഓഫീസറായി വേഷമിട്ടു.'
      },
      {
        id: 'tv5',
        title: 'കടൽ കടന്നു ഉദ്യോഗം',
        genre: 'കോമഡി ഡ്രാമ',
        role: 'ഗണേഷ്',
        description: 'രാജ് ടിവിയിലെ ഓഫീസ് ജീവിതവും കോമഡിയും ചർച്ച ചെയ്ത വേഷം.'
      },
      {
        id: 'tv6',
        title: 'ചിത്തി 2',
        genre: 'കുടുംബ പരമ്പര',
        role: 'ഡോക്ടർ സന്തോഷ് (അതിഥി വേഷം)',
        description: 'സൺ ടിവിയിൽ സംപ്രേഷണം ചെയ്ത കുടുംബ പരമ്പര. കഥയിലെ നിർണ്ണായക ഘട്ടത്തിൽ ഒരു ഡോക്ടർ ആയി അഭിനയിച്ചു.'
      },
      {
        id: 'tv7',
        title: 'ഭാരതി കണ്ണമ്മ',
        genre: 'കുടുംബ പരമ്പര',
        role: 'പ്രതീപ് (സഹ റോൾ)',
        description: 'വിജയ് ടിവിയിലെ മനോഹരമായ കുടുംബ പരമ്പര. നായികയെ പിന്തുണയ്ക്കുന്ന പ്രധാന കഥാപാത്രത്തെ അവതരിപ്പിച്ചു.'
      }
    ],
    'data.videos': [
      { id: 'v1', title: 'ആർട്ടിസ്റ്റ് ജാക്ക് ഒഫീഷ്യൽ ഷോറീൽ 2026', category: 'ഷോറീൽ' },
      { id: 'v2', title: '“നീയെ” - അക്കോസ്റ്റിക് ഗിറ്റാർ തമിഴ് സോങ്', category: 'ഗാനം' },
      { id: 'v3', title: 'ബിഹൈൻഡ് വോയ്‌സ്: ജാക്കുമായി പ്രൊഫഷണൽ ഹൃദയസംവാദം', category: 'അഭിമുഖം' }
    ],
    'data.gallery': [
      { id: 'g1', title: 'കാറ്റിൻ മൊഴി ഷൂട്ടിംഗ്', alt: 'കാറ്റിൻ മൊഴി ഷൂട്ടിംഗ് ഇടവേള', category: 'Movies' },
      { id: 'g2', title: 'ഓഡിയോ ലോഞ്ച് പ്രകടനം', alt: 'ഓഡിയോ ലോഞ്ചിൽ ഗിറ്റാർ വായിച്ചു പാടുന്ന ജാക്ക്', category: 'Events' },
      { id: 'g3', title: 'സ്റ്റുഡിയോ ഫോട്ടോസ്', alt: 'ജാക്കിന്റെ ഏറ്റവും പുതിയ കോസ്റ്റ്യൂം ഷൂട്ട്', category: 'Promotional Shoots' },
      { id: 'g4', title: 'ഓട്ടോ ശങ്കർ സ്ക്രിപ്റ്റ് വായന', alt: 'തിരക്കഥ കേൾക്കുകയും ചർച്ച ചെയ്യുകയും ചെയ്യുന്നു', category: 'Behind the Scenes' },
      { id: 'g5', title: 'റിയാലിറ്റി ഷോയിൽ അതിഥി', alt: 'പ്രശസ്ത ടിവി ചാനലിന്റെ അതിഥിയായി ജാക്ക്', category: 'Television' },
      { id: 'g6', title: 'ആക്ഷൻ സീൻ റിഹേഴ്സൽ', alt: 'ആക്ഷൻ സീനും പരിശീലനവും', category: 'Movies' },
      { id: 'g7', title: 'പരസ്യ ഫോട്ടോഷൂട്ട്', alt: 'ബ്രാൻഡ് പ്രൊമോഷൻ റിലീസ് ഷൂട്ട്', category: 'Promotional Shoots' },
      { id: 'g8', title: 'ഡബ്ബിങ് റെക്കോർഡിംഗ് സെഷൻ', alt: 'ഗാനങ്ങളുടെ വരികൾ തയ്യാറാക്കുന്ന ജാക്ക്', category: 'Behind the Scenes' }
    ],
    'data.media': [
      {
        id: 'media1',
        title: '“ചെറിയ വേദികളിൽ നിന്നും വലിയ സിനിമയിലേക്ക്” - ജാക്കിന്റെ സംഗീത പ്രയാണം',
        description: 'കഫേകളിലെ ചെറിയ പരിപാടികളിൽ തുടങ്ങി പ്രിയങ്കരനായ ഒരു ഗായകനും നടനുമായി ജാക്ക് വളർന്ന കഥയെക്കുറിച്ചുള്ള പ്രത്യേക ലേഖനം.',
        type: 'അഭിമുഖം',
        source: 'ദി ഹിന്ദു സിനിമ'
      },
      {
        id: 'media2',
        title: 'ഓട്ടോ ശങ്കർ എന്ന വെബിനായി റൈസിംഗ് സ്റ്റാർ സപ്പോർട്ടിംഗ് ആക്ടർ നോമിനേഷൻ',
        description: 'ഓട്ടോ ശങ്കറിലെ യഥാർത്ഥ പോലീസ് അഭിനയത്തിന് ജാക്ക് മികച്ച സഹനടനുള്ള പുരസ്കാരത്തിന് ശുപാർശ ചെയ്യപ്പെട്ടു.',
        type: 'പുരസ്കാരം',
        source: 'ചെന്നൈ എക്സ്പ്രസ് അവാർഡ്സ് 2024'
      },
      {
        id: 'media3',
        title: 'പുതിയ നിഗൂഢ തമിഴ് വെബ് സീരിസിൽ ജാക്ക് മികച്ച വില്ലൻ വേഷം ഉറപ്പിച്ചു',
        description: 'വൻ ബഡ്ജറ്റിൽ ഒരുങ്ങുന്ന ദക്ഷിണേന്ത്യൻ സിനിമയിൽ പ്രധാന ആക്ഷൻ രംഗങ്ങളിൽ ജാക്ക് വില്ലനായി അണിനിരക്കുന്നു.',
        type: 'പ്രസ് റിലീസ്',
        source: 'ബിഹൈൻഡ് വുഡ്സ് ടുഡേ'
      }
    ],
    'data.awards': [
      {
        id: 'a1',
        title: 'തമിഴ് ടെലിവിഷൻ അക്കാദമി അവാർഡ്',
        category: 'മികച്ച സഹനടൻ (ഡ്രാമ)',
        year: '2021',
        description: 'സൺ ടിവിയിലെ ഹിറ്റ് പരമ്പരയായ ‘അൻപേ വാ’യിലെ ജീവ എന്ന വേഷത്തിന് ലഭിച്ച അവാർഡ്.',
        filterType: 'Television'
      },
      {
        id: 'a2',
        title: 'മദ്രാസ് ഫിലിം ഫാൻസ് അസോസിയേഷൻ അവാർഡ്',
        category: 'മികച്ച ഹാസ്യനടൻ (സംഘം)',
        year: '2019',
        description: 'ഹാസ്യചിത്രമായ ‘ഗൂർഖ’യിൽ യോഗി ബാബുവിനൊപ്പമുള്ള മികച്ച പ്രകടനത്തിന് ലഭിച്ച അഭിനന്ദനം.',
        filterType: 'Film'
      },
      {
        id: 'a3',
        title: 'സൗത്ത് ഇന്ത്യൻ ഒടിടി അവാർഡ്സ്',
        category: 'ബ്രേക്ക്‌ത്രൂ പ്രകടനം',
        year: '2020',
        description: '‘ഓട്ടോ ശങ്കർ’ വെബ് സീരീസിലെ കോൺസ്റ്റബിൾ കതിർ എന്ന കഥാപാത്രത്തിന് ലഭിച്ച കൈയടി.',
        filterType: 'Digital'
      },
      {
        id: 'a4',
        title: 'ചെന്നൈ ഇൻഡി മ്യൂസിക് അവാർഡ്സ്',
        category: 'മികച്ച സ്വതന്ത്ര ഗായകൻ',
        year: '2022',
        description: 'സ്വതന്ത്ര തമിഴ് സംഗീത ശാഖയിലുള്ള വരികൾക്കും ആലാപനത്തിനും ലഭിച്ച അംഗീകാരം.',
        filterType: 'Music'
      },
      {
        id: 'a5',
        title: 'കലൈമാമണി പ്രത്യേക പുരസ്കാരം',
        category: 'സംസ്ഥാന യൂത്ത് ഐക്കൺ അവാർഡ്',
        year: '2023',
        description: 'ടെലിവിഷൻ, സിനിമ മേഖലകളിലെ മികച്ച സാന്നിധ്യത്തിന് ലഭിച്ച പുരസ്കാരം.',
        filterType: 'Special'
      }
    ],
    'data.stats': [
      { label: 'സിനിമകൾ', value: '20+' },
      { label: 'ഹ്രസ്വചിത്രങ്ങൾ', value: '10+' },
      { label: 'വെബ് സീരീസ്', value: '2' },
      { label: 'ടിവി സാന്നിധ്യം', value: 'പലതവണ' }
    ],
    'data.timeline': [
      {
        year: '2016 - 2017',
        title: 'ചെന്നൈ തിയേറ്ററുകൾ',
        description: 'ചെന്നൈയിലെ കലാസാംസ്‌കാരിക ചരിത്ര നാടക ഗ്രൂപ്പുകളിലൂടെ പ്രൊഫഷണൽ അഭിനയം പരിശീലിച്ചു.'
      },
      {
        year: '2018',
        title: 'തമിഴ് സിനിമയിലെ കടന്നുവരവ്',
        description: 'വിക്രം ചിത്രമായ "സ്കെച്ച്", കുടുംബ ചിത്രം "ഗജിനികാന്ത്", ജോതികാ ചിത്രം "കാറ്റിൻ മൊഴി" എന്ന സിനിമകളിലൂടെ അരങ്ങേറ്റം.'
      },
      {
        year: '2019',
        title: 'ഡിജിറ്റൽ വെബ് സീരീസ് സജീവത',
        description: '"ഓട്ടോ ശങ്കർ" എന്ന സീരിസിൽ കതിർ എന്ന ശ്രദ്ധേയമായ വേഷവും, ജീ5-ന്റെ "പോലീസ് ഡയറി 2.0"-ഉം അഭിനയിച്ചു.'
      },
      {
        year: '2020 - 2021',
        title: 'സോഷ്യൽ സിനിമകളുടെ തരംഗം',
        description: '"കാവൽതുറൈ ഉങ്ങൾ നൻപൻ", "അസുരഗുരു" സിനിമകളിലൂടെ വ്യത്യസ്തമായ പോലീസും വില്ലൻ സഹായി വേഷങ്ങളും.'
      },
      {
        year: '2022 - തൽക്കാലം',
        title: 'സ്വതന്ത്ര സംഗീത ആൽബം റിലീസ്',
        description: '“നീയെ” പോലുള്ള മനോഹരമായ ഗാനങ്ങൾ തയ്യാറാക്കുന്നതും വൻ ആക്ഷൻ പരമ്പരകളിൽ അഭിനയിക്കുന്നതും തുടരുന്നു.'
      }
    ]
  },
  te: {
    'nav.home': 'హోమ్',
    'nav.about': 'గురించి',
    'nav.filmography': 'చిత్రాలు',
    'nav.videos': 'వీడియోలు',
    'nav.webseries': 'వెబ్ సిరీస్',
    'nav.television': 'టెలివిజన్',
    'nav.awards': 'అవార్డులు',
    'nav.gallery': 'గ్యాలరీ',
    'nav.media': 'మీడియా',
    'nav.contact': 'సంప్రదించండి',

    'hero.tag': 'తమిళ సినిమా • టెలివిజన్ • సంగీతం',
    'hero.artist': 'కళాకారుడు',
    'hero.actor': 'నటుడు',
    'hero.singer': 'గాయకుడు',
    'hero.lyricwriter': 'పాటల రచయిత',
    'hero.desc': 'చలనచిత్రాలు, టీవీ సీరియల్స్, మరియు ఓటిటి వెబ్ సిరీస్‌లలో తన విలక్షణ నటనతో గుర్తింపు తెచ్చుకున్న బహుముఖ నటుడు జాక్. వైవిధ్యభరితమైన పాత్రల ద్వారా మరియు స్వతంత్ర సంగీత రచన ద్వారా సరికొత్త వినోదం అందిస్తున్నారు.',
    'hero.cta.explore': 'జీవిత ప్రయాణం',
    'hero.cta.reel': 'ప్రదర్శన రీల్స్',
    'hero.resident': 'నివాస స్థలం',
    'hero.chennai': 'చెన్నై, తమిళనాడు, భారతదేశం',
    'hero.open_for': 'కార్యస్థలం',
    'hero.bookings': 'అవకాశాలకు సిద్ధం',

    'about.journey': 'ప్రయాణం',
    'about.title': 'కళాకారుడు జాక్ గురించి.',
    'about.about': 'వివరాలు',
    'about.intro': 'తమిళ చిత్ర పరిశ్రమకు సహజసిద్ధమైన పాత్రలను మరియు ఆత్మను తాకే సంగీతాన్ని అందించడం.',
    'about.p1': 'చెన్నై నగరం నుండి సంస్కారవంతమైన బ్యాక్‌గ్రౌండ్‌తో వచ్చిన ఆర్టిస్ట్ జాక్, తన నటనతో పలు మాధ్యమాలలో మంచి గుర్తింపు పొందారు. లఘు చిత్రాల నుండి వెండితెర చిత్రాలు, టెలివిజన్ ధారావాహికలు ఇంకా ప్రముఖ వెబ్ సిరీస్‌ల వరకు ఆయన అంకితభావం అద్భుతమైనది.',
    'about.p2': 'నటనతో పాటు, సంగీతం పై ఆయనకున్న అభిమానం ఆయనను మరింత విశిష్టంగా నిలుపుతుంది. పలు అకౌస్టిక్ గిటార్ సాంగ్స్ వినిపిస్తూ సొంతంగా రచనలు చేస్తారు.',
    'about.active': 'క్రియాశీల సంవత్సరం',
    'about.primary_base': 'ప్రధాన స్థావరం',
    'about.languages': 'భాషలు',
    'about.languages_value': 'తమిళం & ఇంగ్లీష్',
    'about.philosophy': 'ముఖ్య సిద్ధాంతం',
    'about.philosophy_title': 'నా కళను నిర్వచించే విలువలు',
    'about.philosophy.p1.title': 'కళాత్మక వైవిధ్యం',
    'about.philosophy.p1.desc': 'భావోద్వేగ పాత్రలు, యాక్షన్ సన్నివేశాలు, కామెడీ టైమింగ్ మరియు సంగీత ఆల్బమ్‌లలో అద్భుత ప్రతిభ చూపిస్తూ వైవిధ్యభరితంగా నిలవడం.',
    'about.philosophy.p2.title': 'సినిమా అంకితభావం',
    'about.philosophy.p2.desc': 'రంగస్థల నాటకాలలో శిక్షణ పొందడం వల్ల ప్రతి సన్నివేశంలోనూ విలక్షణమైన నటనను ప్రదర్శించడం.',
    'about.philosophy.p3.title': 'సంగీత ప్రియుడు',
    'about.philosophy.p3.desc': 'తమిళ సాంప్రదాయ సంగీతాన్ని గిటార్స్ మరియు ఇతర వాయిద్యాలతో రీ-డిజైన్ చేస్తూ సరికొత్త మెలోడీలు సృష్టించడం.',
    'about.timeline': 'ముఖ్య మైలురాళ్ళు',
    'about.timeline.title': 'కెరీర్ టైమ్‌లైన్',

    'films.cinematic': 'సినిమా ప్రయాణం',
    'films.title': 'సినిమాలు.',
    'films.desc': 'ప్రముఖ దర్శకులు మరియు నిర్మాతలు నిర్మించిన పలు విజయవంతమైన మరియు భావోద్వేగపూరితమైన చిత్రాల జాబితా.',
    'films.director': 'దర్శకుడు',
    'films.rating': 'రేటింగ్',
    'films.role': 'పాత్ర',
    'films.genre': 'జానర్',

    'videos.reels': 'రీల్స్ & మ్యూజిక్',
    'videos.title': 'ప్రత్యేక వీడియోలు.',
    'videos.desc': 'నటన మరియు గానంలో జాక్ ప్రతిభను చాటిచెప్పే వీడియో ప్రదర్శనలు, సంగీతం మరియు ఇంటర్వ్యూల సమాహారం.',
    'videos.all': 'అన్ని వీడియోలు',
    'videos.showreel': 'షో రీల్స్',
    'videos.song': 'పాటలు',
    'videos.interview': 'ఇంటర్వ్యూలు',

    'webseries.digital': 'డిజిటల్ స్ఫియర్',
    'webseries.title': 'వెబ్ సిరీస్.',
    'webseries.desc': 'వెబ్ ప్లాట్‌ఫారమ్‌లలో వదులైన వాతావరణం, ఉత్కంఠ మరియు ఆసకి రేకెత్తించే జాక్ వెబ్ సిరీస్‌ల ప్రదర్శన.',
    'webseries.role': 'పాత్ర',
    'webseries.role_highlights': 'పాత్ర విశిష్టత',

    'tv.broadcast': 'టీవీ ప్రసారాలు',
    'tv.title': 'టెలివిజన్ సీరియల్స్.',
    'tv.desc': 'తెలుగు మరియు తమిళ ప్రేక్షకుల ఆదరణ పొందిన ప్రముఖ టెలివిజన్ సీరియల్స్ లో జాక్ పోషించిన విశిష్ట పాత్రలు.',
    'tv.all': 'అన్నీ',
    'tv.pending': 'పోస్టర్ విడుదల కాలేదు',
    'tv.showcase': 'నటన విశిష్టత',
    'tv.credits': 'అధికారిక క్రెడిట్స్',
    'tv.role': 'పాత్ర',

    'gallery.behind': 'బిహైండ్ ది సీన్స్',
    'gallery.captures': 'CAPTURES & STILLS',
    'gallery.title': 'మధుర క్షణాలు.',
    'gallery.desc': 'A curated collection of on-set moments, candid behind-the-scenes photography, and official promotional shoots capturing Actor Jack Prabhu’s cinematic journey.',
    'gallery.all': 'అన్ని చిత్రాలు',
    'gallery.movies': 'సినిమాలు',
    'gallery.events': 'కార్యక్రమాలు',
    'gallery.promotions': 'ప్రమోషనల్ షూట్స్',
    'gallery.bts': 'షూటింగ్ స్పాట్ లో',
    'gallery.television': 'టెలివిజన్',

    'media.press': 'మీడియా & రివ్యూలు',
    'media.title': 'వార్తలలో జాక్.',
    'media.desc': 'జాక్ నటనను మరియు అద్భుత గీతాలను మెచ్చుకుంటూ మీడియా సంస్థలు ప్రచురించిన కథనాలు మరియు సమీక్షలు.',
    'media.read_more': 'పూర్తిగా చదవండి',

    'contact.get_in_touch': 'సంప్రదించండి',
    'contact.title': 'సహకారం లేదా అవకాశాల కొరకు అభ్యర్థన.',
    'contact.desc': 'సినిమా అవకాశాలు, సంగీత కంపోజిషన్, బ్రాండ్ ప్రకటనల కొరకు ఈ క్రింది ఫారమ్ ద్వారా నేరుగా సంప్రదించవచ్చు.',
    'contact.form_title': 'సందేశం పంపండి',
    'contact.form_desc': 'మీ సమాచారం నేరుగా జాక్ అధికారిక బృందానికి చేరుతుంది.',
    'contact.fullname': 'పూర్తి పేరు',
    'contact.email': 'ఇమెయిల్ చిరునామా',
    'contact.topic': 'ంశం',
    'contact.details': 'వివరాలు',
    'contact.btn': 'సందేశం పంపండి',
    'contact.btn.sending': 'పంపుతోంది...',
    'contact.btn.success': 'సందేశం విజయవంతంగా పంపబడింది!',
    'contact.collab': 'నేరుగా సంప్రదించే మార్గాలు',
    'contact.socials': 'సోషల్ మీడియా లింకులు',
    'contact.whatsapp': 'వాట్సాప్ ఛానల్',
    'contact.mail': 'అధికారిక ఇమెయిల్',
    'contact.insta': 'ఇన్‌స్టాగ్రామ్ పేజీ',

    'footer.brand': 'నటుడు జాక్',
    'footer.desc': 'ఆకర్షణీయమైన నటనతో, ఆత్మను కదిలించే సంగీతంతో చెన్నై నుండి ప్రపంచవ్యాప్తంగా గుర్తింపు పొందుతున్నారు.',
    'footer.designed': 'వెండితెర కొరకు వినూత్నంగా రూపొందించబడింది.',
    'footer.rights': '© 2026 జాక్. అన్ని హక్కులూ ప్రత్యేకించబడినవి.',
    'footer.navigations': 'నావిగేషన్స్',
    'footer.sections': 'విభాగాలు',
    'footer.channels': 'అధికారిక ఛానెల్‌లు',
    'footer.social_info': 'చిత్ర నిర్మాణ స్టూడియోల నుండి తక్షణ అప్‌డేట్‌లను పొందడానికి సామాజిక మాధ్యమాలలో ఆర్టిస్ట్ జాక్‌ను అనుసరించండి.',
    'footer.top': 'పైకి',

    'awards.awards': 'పురస్కారాలు & గుర్తింపులు',
    'awards.title': 'అవార్డులు & గౌరవాలు',
    'awards.desc': 'భారతీయ చలనచిత్రాలు, టెలివిజన్ ధారావాహికలు, డిజిటల్ వెబ్ సిరీస్ మరియు స్వతంత్ర సంగీతంలో ఆర్టిస్ట్ జాక్ ప్రతిభకు పురస్కారాలు.',
    'awards.filter.all': 'అన్నీ',
    'awards.filter.television': 'టెలివిజన్ అవార్డులు',
    'awards.filter.film': 'చిత్ర అవార్డులు',
    'awards.filter.digital': 'డిజిటల్ అవార్డులు',
    'awards.filter.music': 'సంగీత అవార్డులు',
    'awards.filter.special': 'ప్రత్యేక గౌరవాలు',

    'data.movies': [
      {
        id: 'm1',
        title: 'కాట్రిన్ మోళి',
        role: 'సపోర్టింగ్ యాక్టర్ / సింగర్',
        genre: 'ఫ్యామిలీ డ్రామా',
        description: 'జ్యోతిక ప్రధాన పాత్రలో నటించిన ఒక చక్కటి హాస్య చిత్రం. జాక్ ఇందులో ఒక మంచి సహాయక పాత్ర పోషించి పాట కూడా పాడారు.'
      },
      {
        id: 'm2',
        title: 'గుర్ఖా',
        role: 'ముఖ్య నటులలో ఒకరు',
        genre: 'కామెడీ',
        description: 'షాపింగ్ మాల్ లో జరిగే ఒక కిడ్నాప్ కథాంశంతో నడిచే హాస్య చిత్రం. యోగి బాబుతో కలిసి జాక్ మంచి కామెడీ పండించారు.'
      },
      {
        id: 'm3',
        title: 'అసురగురు',
        role: 'విలన్ అసిస్టెంట్',
        genre: 'థ్రిల్లర్',
        description: 'చేజింగ్ లు మరియు దొంగతనాల చుట్టూ తిరిగే యాక్షన్ సినిమా. జాక్ ఇందులో యాక్షన్ ఎపిసోడ్స్ లో అద్భుతంగా నటించారు.'
      },
      {
        id: 'm4',
        title: 'స్కెచ్',
        role: 'స్థానిక ముఠా సభ్యుడు',
        genre: 'యాక్షన్',
        description: 'విక్రమ్ ప్రధాన పాత్రలో నార్త్ చెన్నై నేపథ్యంలో సాగే యాక్షన్ చిత్రం. జాక్ కార్లను పట్టుకొనే దృశ్యాలలో మంచి నటన కనబరిచారు.'
      },
      {
        id: 'm5',
        title: 'గజినీకాంత్',
        role: 'స్నేహితుడి పాత్ర (ముఖ్య హాస్యం)',
        genre: 'కామెడీ',
        description: 'మతిమరుపు నాయకుడి చుట్టూ తిరిగే ప్రేమ హాస్యభరిత చిత్రం. నాయకుడి ప్రాణస్నేహితుడిగా అద్భుతమైన నవ్వులు పూయించారు.'
      },
      {
        id: 'm6',
        title: 'కుట్రం పురింతాల్',
        role: 'నాయకుడి స్నేహితుడు',
        genre: 'సస్పెన్స్ థ్రిల్లర్',
        description: 'మెడికల్ మోసాలను బయటపెట్టే మంచి సస్పెన్స్ సినిమా. జాక్ ఇందులో భావోద్వేగ నటనను ప్రదర్శించారు.'
      },
      {
        id: 'm7',
        title: 'కావల్తురై ఉంగల్ నన్బన్',
        role: 'సబ్ ఇన్స్‌పెక్టర్ / అసిస్టెంట్ ఆఫీసర్',
        genre: 'డ్రామా',
        description: 'పోలీసుల తీరును, సామాన్యుల జీవితాలను కళ్ళకు కట్టినట్టు చూపిన సినిమా. జాక్ నటనకు ప్రశంసలు దక్కాయి.'
      }
    ],
    'data.webseries': [
      {
        id: 'w1',
        title: 'పోలీస్ డైరీ 2.0',
        role: 'సబ్ ఇన్స్‌పెక్టర్ ప్రేమ్',
        description: 'చెన్నై నగరంలో జరిగే వైవిధ్యభరిత నేరాలను దర్యాప్తు చేసే ప్రత్యేక బృందం కథాంశంతో కూడిన వెబ్ సిరీస్.',
        roleHighlight: 'శాస్త్రీయ ఆధారాల సహాయంతో నిందితులను పట్టుకునే పోలీస్ ఆఫీసర్ గా మెప్పించారు.'
      },
      {
        id: 'w2',
        title: 'ఆటో శంకర్',
        role: 'కానిస్టేబుల్ కదిర్',
        description: '1980వ దశకంలో చెన్నై నగరాన్ని వణికించిన ఆటో శంకర్ జీవితం ఆధారంగా తెరకెక్కిన వెబ్ సిరీస్.',
        roleHighlight: 'వ్యవస్థ లోని ఒత్తిడుల మధ్య నలిగిపోయే ఒక యువ కానిస్టేబుల్ పాత్రలో అద్భుతంగా నటించారు.'
      }
    ],
    'data.tvserials': [
      {
        id: 'tv1',
        title: 'అన్బే వా',
        genre: 'ఫ్యామిలీ డ్రామా',
        role: 'జీవన్',
        description: 'సన్ టీవీలో అత్యధిక ప్రజాదరణ పొందిన ధారావాహిక. నాయకుడికి అండగా నిలిచే పాత్రలో మంచి గుర్తింపు తెచ్చుకున్నారు.'
      },
      {
        id: 'tv2',
        title: 'రాజా రాణీ (సీజన్ 2)',
        genre: 'డ్రామా / రొమాన్స్',
        role: 'సిద్ధార్థ్',
        description: 'స్టార్ విజయ్ టీవీలో ప్రజాదరణ పొందిన సీరియల్. తన కామెడీతో మరియు భావోద్వేగాలతో ప్రేక్షకులను ఆకట్టుకున్నారు.'
      },
      {
        id: 'tv3',
        title: 'సూపర్నాచురల్ ఫైల్స్',
        genre: 'మిస్టరీ / థ్రిల్లర్',
        role: 'ఇన్‌స్పెక్టర్ అర్జున్',
        description: 'అద్భుత శక్తులు మరియు కేస్ దర్యాప్తుల సీరీస్. ఇందులో ఇన్వెస్టిగేషన్ ఆఫీసర్ గా మంచి మెరుగులు పోయించారు.'
      },
      {
        id: 'tv4',
        title: 'సిల్లును ఒరు కాదల్',
        genre: 'ప్రేమ / యాక్షన్',
        role: 'సబ్ ఇన్స్‌పెక్టర్ కదిర్',
        description: 'కలర్స్ తమిళ్ యొక్క ఫేమస్ పోలీస్ ధారావాహిక. క్రమశిక్షణ గల పోలీస్ ఆఫీసర్ గా నటించారు.'
      },
      {
        id: 'tv5',
        title: 'కడల్ కడందు ఉద్యోగం',
        genre: 'కామెడీ డ్రామా',
        role: 'గణేష్',
        description: 'రాజ్ టీవీలో ఆఫీస్ లో జరిగే సరదా కామెడీ కథాంశంతో సాగే పాత్ర.'
      },
      {
        id: 'tv6',
        title: 'చిత్తి 2',
        genre: 'ఫ్యామిలీ డ్రామా',
        role: 'డా. సంతోష్ (అతిథి పాత్ర)',
        description: 'సన్ టీవీలో నడిచిన ప్రముఖ సీరియల్. కథను ఒక ముఖ్యమైన మలుపు తిప్పే వైద్యుడి పాత్రలో నటించారు.'
      },
      {
        id: 'tv7',
        title: 'భారతి కన్నమ్మ',
        genre: 'మెలోడ్రామా',
        role: 'ప్రదీప్',
        description: 'విజయ్ టీవీలో వచ్చిన ఒక గుర్తింపు కలిగిన సీరియల్. నాయకురాలికి సహాయం చేసే పాత్రలో మెప్పించారు.'
      }
    ],
    'data.videos': [
      { id: 'v1', title: 'కళాకారుడు జాక్ అధికారిక షోరీల్ 2026', category: 'షోరీల్' },
      { id: 'v2', title: '“నీయే” - జేక్ అకౌస్టిక్ గిటార్ సాంగ్', category: 'పాట' },
      { id: 'v3', title: 'బిహైండ్ ది వాయిస్: జాక్ తో ప్రత్యేక ఇంటర్వ్యూ', category: 'ఇంటర్వ్యూ' }
    ],
    'data.gallery': [
      { id: 'g1', title: 'కాట్రిన్ మోళి షూటింగ్ స్పాట్', alt: 'షూటింగ్ మధ్యలో జేక్ సరదా సమయం', category: 'Movies' },
      { id: 'g2', title: 'ఆడియో లాంచ్ ప్రదర్శన', alt: 'ఆడియో లాంచ్ లో గిటార్ ప్లే చేస్తూ పాడుతున్న జాక్', category: 'Events' },
      { id: 'g3', title: 'నవీన చిత్రాలు', alt: 'జాక్ ప్రత్యేక పోర్ట్రెయిట్ షూట్', category: 'Promotional Shoots' },
      { id: 'g4', title: 'ఆటో శంకర్ స్క్రిప్ట్ రీడింగ్', alt: 'డైరెక్టర్ తో కలిసి స్టోరీ చర్చలు', category: 'Behind the Scenes' },
      { id: 'g5', title: 'రియాలిటీ షోలో గెస్ట్ గా', alt: 'ప్రముఖ ఛానల్ ప్రోగ్రాంలో గెస్ట్ గా జాక్', category: 'Television' },
      { id: 'g6', title: 'యాక్షన్ సీన్ ప్రాక్టీస్', alt: 'యాక్షన్ సన్నివేశం రిహార్సల్స్', category: 'Movies' },
      { id: 'g7', title: 'అడ్వర్టైజ్‌మెంట్ ఫొటోషూట్', alt: 'బ్రాండ్ ప్రమోషన్ కొరకు ఫొటోషూట్', category: 'Promotional Shoots' },
      { id: 'g8', title: 'స్టూడియో డబ్బింగ్ రికార్డింగ్', alt: 'పాటల రికార్డింగ్ లో జాక్', category: 'Behind the Scenes' }
    ],
    'data.media': [
      {
        id: 'media1',
        title: '“చిన్న కేఫ్‌ల నుండి వెండితెర వరకు” - జాక్ సంగీత ప్రస్థానం',
        description: 'కేఫ్‌లలో పాటలు పాడుతూ మొదలైన జాక్ సంగీత ప్రయాణం నేడు తమిళ చిత్రసీమలో నటుడిగా ఎలా మారిందో తెలిపే విశేష కథనం.',
        type: 'ఇంటర్వ్యూ',
        source: 'ది హిందూ సినిమా'
      },
      {
        id: 'media2',
        title: 'ఆటో శంకర్ లో కానిస్టేబుల్ కదిర్ పాత్రకు గాను రైసింగ్ స్టార్ అవార్డ్స్ కు నామినేట్',
        description: 'ఓటిటి వెబ్ సిరీస్ లో ఒక కానిస్టేబుల్ పాత్రలో జాక్ కనబరిచిన సహజ నటనకు అవార్డు నామినేషన్ లభించింది.',
        type: 'అవార్డ్',
        source: 'చెన్నై ఎక్స్‌ప్రెస్ అవార్డ్స్ 2024'
      },
      {
        id: 'media3',
        title: 'రాబోయే తదుపరి యాక్షన్ థ్రిల్లర్ లో జాక్ ప్రధాన నెగిటివ్ పాత్ర ఖరారు',
        description: 'పెద్ద బడ్జెట్ యాక్షన్ చిత్రంలో జాక్ నెగిటివ్ షేడ్స్ కలిగిన రోల్ లో ఒక ప్రధాన యాక్షన్ సీన్ పూర్తి చేసారు.',
        type: 'ప్రెస్ నోట్',
        source: 'బిహైండ్‌వుడ్స్ టుడే'
      }
    ],
    'data.awards': [
      {
        id: 'a1',
        title: 'తమిళ టెలివిజన్ అకాడమీ అవార్డు',
        category: 'ఉత్తమ సహాయ నటుడు (డ్రామా)',
        year: '2021',
        description: 'సన్ టీవీ సూపర్ హిట్ సీరియల్ ‘అంబే వా’ లో జీవాగా ఆయన అద్భుత నటనకు లభించిన అవార్డు.',
        filterType: 'Television'
      },
      {
        id: 'a2',
        title: 'మద్రాస్ ఫిల్మ్ ఫ్యాన్స్ అసోసియేషన్ అవార్డు',
        category: 'ఉత్తమ హాస్య నటుడు',
        year: '2019',
        description: 'హాస్య చిత్రం ‘గుర్ఖా’ లో యోగి బాబుతో కలిసి అందించిన అద్భుతమైన హాస్య ప్రదర్శనకు గుర్తింపు.',
        filterType: 'Film'
      },
      {
        id: 'a3',
        title: 'సౌత్ ఇండియన్ ఓటిటి అవార్డ్స్',
        category: 'బ్రేక్‌థ్రూ పెర్ఫార్మెన్స్',
        year: '2020',
        description: 'విమర్శకుల ప్రశంసలు పొందిన ‘ఆటో శంకర్’ సిరీస్‌లో కానిస్టేబుల్ కదిర్‌గా అసాధారణ నటనకు అవార్డు.',
        filterType: 'Digital'
      },
      {
        id: 'a4',
        title: 'చెన్నై ఇండీ మ్యూసిక్ అవార్డ్స్',
        category: 'ఉత్తమ స్వతంత్ర గాయకుడు & గీత రచయిత',
        year: '2022',
        description: 'తన స్వతంత్ర తమిళ అకౌస్టిక్ మెలోడీలు మరియు గీత రచనలకు గాను లభించిన సముచిత పురస్కారం.',
        filterType: 'Music'
      },
      {
        id: 'a5',
        title: 'కలైమామణి ప్రత్యేక గుర్తింపు',
        category: 'రాష్ట్ర యూత్ ఐకాన్ అవార్డు',
        year: '2023',
        description: 'రంగస్థలం, టెలివిజన్ మరియు చలన చిత్రాలలో జాక్ సాధించిన ప్రగతికి ప్రభుత్వం అందించిన విశిష్ట గౌరవం.',
        filterType: 'Special'
      }
    ],
    'data.stats': [
      { label: 'సినిమాలు', value: '20+' },
      { label: 'లఘు చిత్రాలు', value: '10+' },
      { label: 'వెబ్ సిరీస్', value: '2' },
      { label: 'టీవీ ప్రదర్శనలు', value: 'అనేకం' }
    ],
    'data.timeline': [
      {
        year: '2016 - 2017',
        title: 'నాటక రంగ ప్రవేశం',
        description: 'చెన్నైలోని ప్రముఖ నాటక సమాజాలలో వేదికలపై నటనలో మెరుగులు దిద్దుకున్నారు.'
      },
      {
        year: '2018',
        title: 'తమిళ చిత్రపరిశ్రమకు పరిచయం',
        description: 'విక్రమ్ నటించిన "స్కెచ్", "గజినీకాంత్" మరియు జ్యోతిక చిత్రం "కాట్రిన్ మోళి" లతో వెండితెరపై ప్రస్థానం.'
      },
      {
        year: '2019',
        title: 'డిజిటల్ వెబ్ సిరీస్ విప్లవం',
        description: '"ఆటో శంకర్" లో కానిస్టేబుల్ కదిర్ గా ఇంకా జీ5 లో "పోలీస్ డైరీ 2.0" ద్వారా మంచి క్రేజ్ సంపాదించారు.'
      },
      {
        year: '2020 - 2021',
        title: 'సామాజిక థ్రిల్లర్ల శకం',
        description: '"కావల్తురై ఉంగాళ్ నన్బన్" మరియు "అసురగురు"లలో వైవిధ్యభరిత నెగిటివ్ పాత్రలు పోషించారు.'
      },
      {
        year: '2022 - ప్రస్తుత కాలం',
        title: 'సొంత ఆల్బమ్స్ మరియు తదుపరి యాక్షన్ సినిమాలు',
        description: '“నీయే” వంటి మంచి స్వతంత్ర గీతాలు విడుదల చేస్తూ, కొత్త సినిమాల్లో బిజీగా ఉన్నారు.'
      }
    ]
  },
  kn: {
    'nav.home': 'ಮುಖಪುಟ',
    'nav.about': 'ಬಗ್ಗೆ',
    'nav.filmography': 'ಚಲನಚಿತ್ರಗಳು',
    'nav.videos': 'ವಿಡಿಯೋಗಳು',
    'nav.webseries': 'ವೆಬ್ ಸರಣಿ',
    'nav.television': 'ದೂರದರ್ಶನ',
    'nav.awards': 'ಪ್ರಶಸ್ತಿಗಳು',
    'nav.gallery': 'ಗ್ಯಾಲರಿ',
    'nav.media': 'ಮಾಧ್ಯಮ',
    'nav.contact': 'ಸಂಪರ್ಕಿಸಿ',

    'hero.tag': 'ತಮಿಳು ಚಿತ್ರರಂಗ • ದೂರದರ್ಶನ • ಸಂಗೀತ',
    'hero.artist': 'ಕಲಾವಿದ',
    'hero.actor': 'ನಟ',
    'hero.singer': 'ಗಾಯಕ',
    'hero.lyricwriter': 'ಗೀತ ರಚನೆಕಾರ',
    'hero.desc': 'ತಮಿಳು ಚಿತ್ರಗಳು, ಧಾರಾವಾಹಿಗಳು ಮತ್ತು ಒಟಿಟಿ ವೆಬ್ ಸರಣಿಗಳಲ್ಲಿ ನಟಿಸಿ ಹೆಸರು ಪಡೆದಿರುವ ಬಹುಮುಖ ಪ್ರತಿಭೆಯ ನಟ ಜಾಕ್. ಪ್ರಭಾವಶಾಲಿ ನಟನೆಯ ಮೂಲಕ ಪಾತ್ರಗಳಿಗೆ ಜೀವ ತುಂಬುವಲ್ಲಿ ಮತ್ತು ಗಿಟಾರ್ ಸಂಗೀತ ರಚನೆಯಲ್ಲಿ ಒಲವು ಹೊಂದಿದ್ದಾರೆ.',
    'hero.cta.explore': 'ಜೀವನ ಪ್ರಯಾಣ',
    'hero.cta.reel': 'ವಿಡಿಯೋ ಪ್ರದರ್ಶನ',
    'hero.resident': 'ವಾಸಸ್ಥಳ',
    'hero.chennai': 'ಚೆನ್ನೈ, ತಮಿಳುನಾಡು, ಭಾರತ',
    'hero.open_for': 'ಕಾರ್ಯಕ್ಷೇತ್ರ',
    'hero.bookings': 'ಅವಕಾಶಗಳಿಗಾಗಿ ಮುಕ್ತ',

    'about.journey': 'ಪಯಣ',
    'about.title': 'ಕಲಾವಿದ ಜಾಕ್ ಬಗ್ಗೆ.',
    'about.about': 'ಮಾಹಿತಿ',
    'about.intro': 'ತಮಿಳು ಚಿತ್ರರಂಗಕ್ಕೆ ನೈಜ ಪಾತ್ರಗಳನ್ನು ಮತ್ತು ಭಾವಪೂರ್ಣ ಸಂಗೀತವನ್ನು ತರುವುದು.',
    'about.p1': 'ಚೆನ್ನೈನ ಸಾಂಸ್ಕೃತಿಕ ಹಿನ್ನೆಲೆಯಿಂದ ಬಂದ ಕಲಾವಿದ ಜಾಕ್, ಬಹು ಮಾಧ್ಯಮಗಳಲ್ಲಿ ಅತ್ಯಂತ ಜನಪ್ರಿಯತೆ ಗಳಿಸಿದ್ದಾರೆ. ಕಿರುಚಿತ್ರಗಳಿಂದ ಹಿಡಿದು ಬೆಳ್ಳಿಪರದೆಯ ಯಶಸ್ವಿ ಚಲನಚಿತ್ರಗಳು, ದೂರದರ್ಶನ ಧಾರಾವಾಹಿಗಳು ಮತ್ತು ಶ್ಲಾಘನೀಯ ವೆಬ್ ಸರಣಿಗಳ ವರೆಗೆ ಅವರ ಸಮರ್ಪಣೆ ಅದ್ಭುತವಾಗಿದೆ.',
    'about.p2': 'ಅಭಿನಯ ಮಾತ್ರವಲ್ಲದೆ, ಸಂಗೀತದ ಮೇಲಿನ ಅವರ ಆಸಕ್ತಿ ಇನ್ನೊಂದು ಪ್ರಮುಖ ಆಯಾಮವಾಗಿದೆ. ತಮಿಳಿನ ಅತ್ಯುತ್ತಮ ಒಲವಿನ ಗೀತೆಗಳನ್ನು ಗಿಟಾರ್ ನೊಂದಿಗೆ ರಚಿಸಿ ಹಾಡುತ್ತಾರೆ.',
    'about.active': 'ಸಕ್ರಿಯ ವರ್ಷ',
    'about.primary_base': 'ಪ್ರಧಾನ ನೆಲೆ',
    'about.languages': 'ಭಾಷೆಗಳು',
    'about.languages_value': 'ತಮಿಳು ಮತ್ತು ಇಂಗ್ಲಿಷ್',
    'about.philosophy': 'ಧ್ಯೇಯೋದ್ದೇಶ',
    'about.philosophy_title': 'ನನ್ನ ಕಲೆಯನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುವ ಮೌಲ್ಯಗಳು',
    'about.philosophy.p1.title': 'ಕಲಾತ್ಮಕ ವೈವಿಧ್ಯತೆ',
    'about.philosophy.p1.desc': 'ಭಾವನಾತ್ಮಕ ಪಾತ್ರಗಳು, ನವಿರಾದ ಹಾಸ್ಯ ಪ್ರಜ್ಞೆ, ಕಠಿಣ ಫೈಟಿಂಗ್ ದೃಶ್ಯಗಳು ಮತ್ತು ಗಾಯನದಲ್ಲಿ ಬಹುಮುಖ ಪ್ರತಿಭೆ ಪ್ರದರ್ಶಿಸುವುದು.',
    'about.philosophy.p2.title': 'ಸಿನಿಮೀಯ ಸಮರ್ಪಣೆ',
    'about.philosophy.p2.desc': 'ರಂಗಭೂಮಿಯ ಕಲೆಗಳಲ್ಲಿ ಪಳಗಿರುವುದರಿಂದ ಪ್ರತಿಯೊಂದು ದೃಶ್ಯದಲ್ಲೂ ಆಳವಾದ ಅಭಿನಯವನ್ನು ನೀಡುವುದು.',
    'about.philosophy.p3.title': 'ಸಂಗೀತ ಪ್ರೀತಿ',
    'about.philosophy.p3.desc': 'ತಮಿಳು ಸಂಸ್ಕೃತಿಯ ಸಂಗೀತವನ್ನು ಗಿಟಾರ್ ಮತ್ತು ಪಾಶ್ಚಾತ್ಯ ಶೈಲಿಗಳೊಂದಿಗೆ ಬೆರೆಸಿ ಅತ್ಯುತ್ತಮ ಮೆಲೋಡಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದು.',
    'about.timeline': 'ಮುಖ್ಯ ಮೈಲಿಗಲ್ಲುಗಳು',
    'about.timeline.title': 'ವೃತ್ತಿಜೀವನದ ಟೈಮ್‌ಲೈನ್',

    'films.cinematic': 'ಚಿತ್ರರಂಗದ ಪ್ರಯಾಣ',
    'films.title': 'ಚಲನಚಿತ್ರಗಳು.',
    'films.desc': 'ಖ್ಯಾತ ನಿರ್ದೇಶಕರು ಮತ್ತು ನಿರ್ಮಾಪಕರೊಂದಿಗೆ ಜಾಗತಿಕ ವೇದಿಕೆಯಲ್ಲಿ ಮೂಡಿಬಂದ ಜಾಕ್ ಅವರ ಪ್ರಮುಖ ಚಲನಚಿತ್ರ ಪ್ರದರ್ಶನಗಳು.',
    'films.director': 'ನಿರ್ದೇಶಕ',
    'films.rating': 'ರೇಟಿಂಗ್',
    'films.role': 'ಪಾತ್ರ',
    'films.genre': 'ಶೈಲಿ',

    'videos.reels': 'ರೀಲ್ಸ್ ಮತ್ತು ಸಂಗೀತ',
    'videos.title': 'ವಿಶಿಷ್ಟ ವಿಡಿಯೋಗಳು.',
    'videos.desc': 'ನಟನೆ ಮತ್ತು ಸಂಗೀತ ವಿಭಾಗದಲ್ಲಿ ಜಾಕ್ ಅವರ ಪ್ರತಿಭೆಯನ್ನು ಬಿಂಬಿಸುವ ವಿಡಿಯೋ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಸಂದರ್ಶನಗಳ ಸಂಗ್ರಹ.',
    'videos.all': 'ಎಲ್ಲಾ ವಿಡಿಯೋಗಳು',
    'videos.showreel': 'ಶೋ ರೀಲ್ಸ್',
    'videos.song': 'ಹಾಡುಗಳು',
    'videos.interview': 'ಸಂದರ್ಶನಗಳು',

    'webseries.digital': 'ಡಿಜಿಟಲ್ ಕ್ಷೇತ್ರ',
    'webseries.title': 'ವೆಬ್ ಸರಣಿಗಳು.',
    'webseries.desc': 'ಪ್ರಮುಖ ಒಟಿಟಿ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ನೆರೆಹೊರೆಯ ವೀಕ್ಷಕರ ಮನಗೆದ್ದ ಜೇಕ್ ಅವರ ರೋಮಾಂಚಕಾರಿ ವೆಬ್ ಸರಣಿಗಳು.',
    'webseries.role': 'ಪಾತ್ರ',
    'webseries.role_highlights': 'ಪಾತ್ರದ ಮುಖ್ಯಾಂಶಗಳು',

    'tv.broadcast': 'ದೂರದರ್ಶನ ಪ್ರಸಾರಗಳು',
    'tv.title': 'ದೂರದರ್ಶನ ಧಾರಾವಾಹಿಗಳು.',
    'tv.desc': 'ತಮಿಳು ಮತ್ತು ಕನ್ನಡ ವೀಕ್ಷಕರಿಗೆ ಹತ್ತಿರವಾಗಿರುವ ಅತ್ಯಂತ ಯಶಸ್ವಿ ಟಿವಿ ಧಾರಾವಾಹಿಗಳಲ್ಲಿ ಜೇಕ್ ಮುಖ್ಯ ಭೂಮಿಕೆ.',
    'tv.all': 'ಎಲ್ಲಾ',
    'tv.pending': 'ಪೋಸ್ಟರ್ ಬಿಡುಗಡೆ ಬಾಕಿ ಇದೆ',
    'tv.showcase': 'ನಟನೆಯ ಪ್ರದರ್ಶನ',
    'tv.credits': 'ಅಧಿಕೃತ ಕ್ರೆಡಿಟ್‌ಗಳು',
    'tv.role': 'ಪಾತ್ರ',

    'gallery.behind': 'ಬಿಹೈಂಡ್ ದಿ ಕ್ಯಾಮೆರಾ',
    'gallery.captures': 'CAPTURES & STILLS',
    'gallery.title': 'ಸುಂದರ ಕ್ಷಣಗಳು.',
    'gallery.desc': 'A curated collection of on-set moments, candid behind-the-scenes photography, and official promotional shoots capturing Actor Jack Prabhu’s cinematic journey.',
    'gallery.all': 'ಎಲ್ಲಾ ಚಿತ್ರಗಳು',
    'gallery.movies': 'ಚಲನಚಿತ್ರಗಳು',
    'gallery.events': 'ಕಾರ್ಯಕ್ರಮಗಳು',
    'gallery.promotions': 'ಪ್ರಚಾರ ಫೋಟೋಗಳು',
    'gallery.bts': 'ಚಿತ್ರೀಕರಣದ ಸಮಯದಲ್ಲಿ',
    'gallery.television': 'ದೂರದರ್ಶನ',

    'media.press': 'ಮಾಧ್ಯಮ ಮತ್ತು ವಿಮರ್ಶೆಗಳು',
    'media.title': 'ಮುಖ್ಯ ವರದಿಗಳಲ್ಲಿ ಜೇಕ್.',
    'media.desc': 'ಜೇಕ್ ಅವರ ಅಭಿನಯ ಮತ್ತು ಸಂಗೀತಕ್ಕೆ ವಿಮರ್ಶಕರು ಹಾಗು ಸುದ್ದಿ ಸಂಸ್ಥೆಗಳು ನೀಡಿದ ವಿಮರ್ಶೆಗಳು ಮತ್ತು ಮೆಚ್ಚುಗೆಗಳು.',
    'media.read_more': 'ಪೂರ್ಣವಾಗಿ ಓದಿ',

    'contact.get_in_touch': 'ಸಂಪರ್ಕಿಸಿ',
    'contact.title': 'ಸಹಯೋಗ ಅಥವಾ ನಟನೆಯ ಅವಕಾಶಗಳಿಗಾಗಿ ವಿನಂತಿ.',
    'contact.desc': 'ಚಲನಚಿತ್ರ ನಟನೆ, ಬ್ರ್ಯಾಂಡ್ ಜಾಹೀರಾತುಗಳು, ಸಂಗೀತ ಸಂಯೋಜನೆ ಮತ್ತು ಇತರ ಯೋಜನೆಗಳಿಗೆ ಈ ಕೆಳಗಿನ ಫಾರ್ಮ್ ಮೂಲಕ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಬಹುದು.',
    'contact.form_title': 'ನೇರ ಸಂದೇಶ ಕಳುಹಿಸಿ',
    'contact.form_desc': 'ನಿಮ್ಮ ಮಾಹಿತಿ ನೇರವಾಗಿ ಜಾಕ್ ಅವರ ಅಧಿಕೃತ ತಂಡಕ್ಕೆ ತಲುಪಲಿದೆ.',
    'contact.fullname': 'ಪೂರ್ಣ ಹೆಸರು',
    'contact.email': 'ಇಮೇಲ್ ವಿಳಾಸ',
    'contact.topic': 'ವಿಷಯ',
    'contact.details': 'ವಿವರಗಳು',
    'contact.btn': 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    'contact.btn.sending': 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
    'contact.btn.success': 'ಸಂದೇಶ ಯಶಸ್ವಿಯಾಗಿ ತಲುಪಿದೆ!',
    'contact.collab': 'ನೇರ ಸಹಯೋಗದ ಮಾರ್ಗಗಳು',
    'contact.socials': 'ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ಜೇಕ್',
    'contact.whatsapp': 'ವಾಟ್ಸಾಪ್ ಚಾನೆಲ್',
    'contact.mail': 'ಅಧಿಕೃತ ಇಮೇಲ್',
    'contact.insta': 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಪೇಜ್',

    'footer.brand': 'ನಟ ಜೇಕ್',
    'footer.desc': 'ಅತ್ತ್ಯುತ್ತಮ ಅಭಿನಯ ಮತ್ತು ಭಾವಪೂರ್ಣ ಸಂಗೀತವನ್ನು ಚೆನ್ನೈನಿಂದ ಜಾಗತಿಕ ವೀಕ್ಷಕರಿಗೆ ತಲುಪಿಸುತ್ತಿದ್ದಾರೆ.',
    'footer.designed': 'ಬೆಳ್ಳಿಪರದೆಗಾಗಿ ಆಕರ್ಷಕವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.',
    'footer.rights': '© 2026 ಜೇಕ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    'footer.navigations': 'ನ್ಯಾವಿಗೇಷನ್ಸ್',
    'footer.sections': 'ವಿಭಾಗಗಳು',
    'footer.channels': 'ಅಧಿಕೃತ ಚಾನೆಲ್‌ಗಳು',
    'footer.social_info': 'ಚಿತ್ರರಂಗದ ಕ್ಷಣ ಕ್ಷಣದ ಅಪ್ಡೇಟ್ಸ್‌ಗಳನ್ನು ಪಡೆಯಲು ಸೋಷಿಯಲ್ ಮೀಡಿಯಾಗಳಲ್ಲಿ ಆರ್ಟಿಸ್ಟ್ ಜೇಕ್ ಅವರನ್ನು ಫಾಲೋ ಮಾಡಿ.',
    'footer.top': 'ಮೇಲಕ್ಕೆ',

    'awards.awards': 'ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಗೌರವಗಳು',
    'awards.title': 'ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಸನ್ಮಾನ',
    'awards.desc': 'ಭಾರತೀಯ ಚಲನಚಿತ್ರಗಳು, ದೂರದರ್ಶನ ಧಾರಾವಾಹಿಗಳು, ಡಿಜಿಟಲ್ ವೆಬ್ ಸರಣಿಗಳು ಮತ್ತು ಸ್ವತಂತ್ರ ಸಂಗೀತದಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿದ ಅತ್ಯುತ್ತಮ ಸಾಧನೆಗಳಿಗಾಗಿ ಗೌರವಗಳು.',
    'awards.filter.all': 'ಎಲ್ಲವೂ',
    'awards.filter.television': 'ದೂರದರ್ಶನ ಪ್ರಶಸ್ತಿಗಳು',
    'awards.filter.film': 'ಚಲನಚಿತ್ರ ಪ್ರಶಸ್ತಿಗಳು',
    'awards.filter.digital': 'ಡಿಜಿಟಲ್ ಪ್ರಶಸ್ತಿಗಳು',
    'awards.filter.music': 'ಸಂಗೀತ ಪ್ರಶಸ್ತಿಗಳು',
    'awards.filter.special': 'ವಿಶೇಷ ಗೌರವಗಳು',

    'data.movies': [
      {
        id: 'm1',
        title: 'ಕಾಟ್ರಿನ್ ಮೋಳಿ',
        role: 'ಸಹನಟ / ಗಾಯಕ',
        genre: 'ಫ್ಯಾಮಿಲಿ ಡ್ರಾಮಾ',
        description: 'ಜ್ಯೋತಿಕಾ ಪ್ರಮುಖ ಪಾತ್ರದಲ್ಲಿದ್ದ ಸುಂದರ ಹಾಸ್ಯ ಚಿತ್ರ. ಇದರಲ್ಲಿ ಜೇಕ್ ಪೋಷಕ ಪಾತ್ರದಲ್ಲಿದ್ದರು ಮತ್ತು ಹಾಡೊಂದನ್ನು ಹಾಡಿದ್ದಾರೆ.'
      },
      {
        id: 'm2',
        title: 'ಗುರ್ಖಾ',
        role: 'ಪ್ರಮುಖ ಪಾತ್ರವರ್ಗ',
        genre: 'ಹಾಸ್ಯ',
        description: 'ಶಾಪಿಂಗ್ ಮಾಲ್ ಹೊಂದಿರುವ ಕಿಡ್ನಾಪ್ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಸಾಗುವ ಹಾಸ್ಯ ತ್ರಿಲ್ಲರ್ ಚಿತ್ರ. ಯೋಗಿ ಬಾಬು ಅವರೊಂದಿಗೆ ಉತ್ತಮ ಹಾಸ್ಯ ನಟನೆ.'
      },
      {
        id: 'm3',
        title: 'ಅಸುರಗುರು',
        role: 'ಖಳನಾಯಕನ ಸಹಾಯಕ',
        genre: 'ಥ್ರಿಲ್ಲರ್',
        description: 'ಹೈಟೆಕ್ ಕಳ್ಳನ ಸುತ್ತ ತಿರುಗುವ ಜಬರ್ದಸ್ತ್ ಆಕ್ಷನ್ ಸಿನಿಮಾ. ಜೇಕ್ ಖಳನಾಯಕನ ಸಹಾಯಕರಾಗಿ ಉತ್ತಮ ಜೂಜಿನ ಆಟವನ್ನು ತೋರಿಸಿದ್ದಾರೆ.'
      },
      {
        id: 'm4',
        title: 'ಸ್ಕೆಚ್',
        role: 'ಸ್ಥಳೀಯ ರೌಡಿ ಗ್ಯಾಂಗ್ ಸದಸ್ಯ',
        genre: 'ಆಕ್ಷನ್',
        description: 'ವಿಕ್ರಮ್ ಅಭಿನಯದ ಉತ್ತರ ಚೆನ್ನೈ ಹಿನ್ನೆಲೆಯ ಚಿತ್ರ. ಅಪಹರಣ ಮತ್ತು ಫೈಟಿಂಗ್ ದೃಶ್ಯಗಳಲ್ಲಿ ಜೇಕ್ ಒರಟು ಪಾತ್ರದಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡಿದ್ದಾರೆ.'
      },
      {
        id: 'm5',
        title: 'ಗಜಿನಿಕಾಂತ್',
        role: 'ಗೆಳೆಯನ ಪಾತ್ರ ( ಹಾಸ್ಯ ಪ್ರಧಾನ)',
        genre: 'ಹಾಸ್ಯ',
        description: 'ಮರೆವಿನ ಕಾಯಿಲೆ ಇರುವ ಯುವಕನ ಸುತ್ತ ತಿರುಗುವ ಕಥೆ. ನಾಯಕನ ಆಪ್ತ ಸ್ನೇಹಿತನಾಗಿ ನಗು ಉಕ್ಕಿಸಿದರು.'
      },
      {
        id: 'm6',
        title: 'ಕುಟ್ರಂ ಪುರಿಂದಾಲ್',
        role: 'ನಾಯಕನ ಸ್ನೇಹಿತ',
        genre: 'ಸಸ್ಪೆನ್ಸ್ ಥ್ರಿಲ್ಲರ್',
        description: 'ವೈದ್ಯಕೀಯ ಮಾಫಿಯಾವನ್ನು ಬಯಲಿಗೆಳೆಯುವ ಕಥೆ. ಜೇಕ್ ಇದರಲ್ಲಿ ಭಾವನಾತ್ಮಕ ಅಭಿನಯ ನೀಡಿದ್ದಾರೆ.'
      },
      {
        id: 'm7',
        title: 'ಕಾವಲ்துறை ಉಂಗಳ್ ನನ್ಬನ್',
        role: 'ಸಬ್ ಇನ್ಸ್ ಪೆಕ್ಟರ್ / ಅಸಿಸ್ಟೆಂಟ್ ಅಧಿಕಾರಿ',
        genre: 'ಸಾಮಾಜಿಕ ಕಳಕಳಿ',
        description: 'ಪೊಲೀಸ್ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಸಾಮಾನ್ಯ ಜನರ ನಡುವಿನ ಸಂಘರ್ಷವನ್ನು ಬಿಂಬಿಸುವ ನೈಜ ಸಿನಿಮಾ. ಜೇಕ್ ಅವರ ಅಭಿನಯ ಪ್ರಶಂಸೆಗೆ ಪಾತ್ರವಾಯಿತು.'
      }
    ],
    'data.webseries': [
      {
        id: 'w1',
        title: 'ಪೊಲೀಸ್ ಡೈರಿ 2.0',
        role: 'ಸಬ್ ಇನ್ಸ್ ಪೆಕ್ಟರ್ ಪ್ರೇಮ್',
        description: 'ಚೆನ್ನೈನಲ್ಲಿ ನಡೆಯುವ ಮರ್ಡರ್ ಮಿಸ್ಟರಿ ಪ್ರಕರಣಗಳನ್ನು ಭೇದಿಸುವ ವಿಶೇಷ ತಂಡದ ತನಿಖಾ ವೆಬ್ ಸರಣಿ.',
        roleHighlight: 'ಬುದ್ಧಿವಂತ ಹಾಗು ಫೊರೆನ್ಸಿಕ್ ತಂತ್ರಗಳನ್ನು ಬಳಸುವ ಅಧಿಕಾರಿಯ ಪಾತ್ರ ದಲ್ಲಿ ಮಿಂಚಿದರು.'
      },
      {
        id: 'w2',
        title: 'ಆಟೋ ಶಂಕರ್',
        role: 'ಕಾನ್ ಸ್ಟೇಬಲ್ ಕತಿರ್',
        description: '೧೯೮೦ ರ ಕಾಲಘಟ್ಟದಲ್ಲಿ ಚೆನ್ನೈನಲ್ಲಿ ಜರುಗಿದ ಘಟನೆಗಳ ಆಧಾರಿತ ಅತ್ಯುತ್ತಮ ಸರಣಿ.',
        roleHighlight: 'ವ್ಯವಸ್ಥೆಯ ಕಾನೂನುಗಳ ನಡುವೆ ಸಿಲುಕಿ ಪೇಚಾಡುವ ಯುವ ಪೇದೆಯ ಪಾತ್ರದಲ್ಲಿ ಅದ್ಭುತವಾಗಿ ಅಭಿನಯಿಸಿದ್ದಾರೆ.'
      }
    ],
    'data.tvserials': [
      {
        id: 'tv1',
        title: 'ಅನ್ಬೇ ವಾ',
        genre: 'ಫ್ಯಾಮಿಲಿ ಡ್ರಾಮಾ',
        role: 'ಜೀವ',
        description: 'ಸನ್ ಟಿವಿಯ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಸರಣಿ. ಕಥೆಗೆ ಪ್ರಮುಖ ತಿರುವು ನೀಡುವ ಸಹೋದರನ ಪಾತ್ರ.'
      },
      {
        id: 'tv2',
        title: 'ರಾಜಾ ರಾಣಿ (ಸೀಸನ್ 2)',
        genre: 'ನಾಟಕ / ಪ್ರಣಯ',
        role: 'ಸಿದ್ಧಾರ್ಥ್',
        description: 'ವಿಜಯ್ ಟಿವಿ ಯಲ್ಲಿ ದಿನದ ಪ್ರಮುಖ ಸಮಯದಲ್ಲಿ ಮೂಡಿಬಂದ ನಾಟಕ. ಹಾಸ್ಯ ಮತ್ತು ಪ್ರೀತಿಯ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ ಮಿಂಚಿದರು.'
      },
      {
        id: 'tv3',
        title: 'ಸೂಪರ್ ನ್ಯಾಚುರಲ್ ಫೈಲ್ಸ್',
        genre: 'ಮಿಸ್ಟರಿ / ಥ್ರಿಲ್ಲರ್',
        role: 'ಇನ್ಸ್‌ಪೆಕ್ಟರ್ ಅರ್ಜುನ್',
        description: 'ಅತಿಮಾನುಷ ಶಕ್ತಿಗಳ ಹಾಗು ಕೊಲೆ ಕೇಸ್ ಗಳ ತನಿಖೆಯ ಕಥಾಹಂದರ.'
      },
      {
        id: 'tv4',
        title: 'ಸಿಲ್ಲುನು ಒರು ಕಾದಲ್',
        genre: 'ಪ್ರೇಮ / ಆಕ್ಷನ್',
        role: 'ಸಬ್ ಇನ್ಸ್‌ಪೆಕ್ಟರ್ ಕತಿರ್',
        description: 'ಕಲರ್ಸ್ ತಮಿಳು ವಾಹಿನಿಯ ಪ್ರಶಸ್ತ ಪೊಲೀಸ್ ಕೌಟುಂಬಿಕ ಧಾರಾವಾಹಿ.'
      },
      {
        id: 'tv5',
        title: 'ಕಡಲ್ ಕಡಂದು ಉದ್ಯೋಗ',
        genre: 'ಹಾಸ್ಯ ನಾಟಕ',
        role: 'ಗಣೇಶ್',
        description: 'ರಾಜ್ ಟಿವಿಯ ಆಫೀಸ್ ರಾಜಕೀಯ ಮತ್ತು ಮೋಜಿನ ಧಾರಾವಾಹಿ.'
      },
      {
        id: 'tv6',
        title: 'ಚಿತ್ತಿ 2',
        genre: 'ಫ್ಯಾಮಿಲಿ ಡ್ರಾಮಾ',
        role: 'ಡಾ. ಸಂತೋಷ್',
        description: 'ಸನ್ ಟಿವಿಯ ಮೆಗಾ ಸರಣಿ. ಇದರಲ್ಲಿ ವೈದ್ಯರ ಪಾತ್ರ ನಿಭಾಯಿಸಿದರು.'
      },
      {
        id: 'tv7',
        title: 'ಭಾರತಿ ಕನ್ನಮ್ಮ',
        genre: 'ಮೆಲೋಡ್ರಾಮಾ',
        role: 'ಪ್ರದೀಪ್',
        description: 'ವಿಜಯ್ ಟಿವಿಯ ಪ್ರಸಿದ್ಧ ಧಾರಾವಾಹಿ. ಉತ್ತಮ ನೆಗೆಟಿವ್ ಮತ್ತು ಸಪೋರ್ಟಿಂಗ್ ಪಾತ್ರ.'
      }
    ],
    'data.videos': [
      { id: 'v1', title: 'ಕಲಾವಿದ ಜಾಕ್ ಅಧಿಕೃತ ಶೋರೀಲ್ 2026', category: 'ಶೋರೀಲ್' },
      { id: 'v2', title: '“ನೀಯೆ” - ಜಾಕ್ ಅಕೌಸ್ಟಿಕ್ ಕನ್ನಡ ಹಾಗು ತಮಿಳು ಸಮ್ಮಿಳಿತ ಸಾಂಗ್', category: 'ಹಾಡು' },
      { id: 'v3', title: 'ಬಿಹೈಂಡ್ ದಿ ವಾಯ್ಸ್: ಜಾಕ್ ಅವರೊಂದಿಗೆ ವಿಶೇಷ ಸಂದರ್ಶನ', category: 'ಸಂದರ್ಶನ' }
    ],
    'data.gallery': [
      { id: 'g1', title: 'ಕಾಟ್ರಿನ್ ಮೋಳಿ ಚಿತ್ರೀಕರಣ', alt: 'ಚಿತ್ರೀಕರಣದ ನಡುವೆ ಬಿಡುವಿನ ಸಮಯ', category: 'Movies' },
      { id: 'g2', title: 'ಆಡಿಯೋ ಲಾಂಚ್ ಹಾಡು', alt: 'ಗಿಟಾರ್ ನೊಂದಿಗೆ ಜೇಕ್ ಗಾನ ಸುಧೆ', category: 'Events' },
      { id: 'g3', title: 'ನೂತನ ಫೋಟೋಗಳು', alt: 'ಜೇಕ್ ಹೊಸ ಉಡುಪು ಧರಿಸಿ ಫೋಟೋಶೂಟ್', category: 'Promotional Shoots' },
      { id: 'g4', title: 'ಆಟೋ ಶಂಕರ್ ಸ್ಕ್ರಿಪ್ಟ್ ಚರ್ಚೆ', alt: 'ಚಿತ್ರ ಕಥೆ ಓದುತ್ತಿರುವ ಕಲಾವಿದರು', category: 'Behind the Scenes' },
      { id: 'g5', title: 'ರಿಯಾಲಿಟಿ ಶೋ ಗೆಸ್ಟ್ ಆಗಿ', alt: 'ಟಿವಿ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಗೆಸ್ಟ್ ಮೆಂಟರ್ ಆಗಿ ಜೇಕ್', category: 'Television' },
      { id: 'g6', title: 'ಸಾಹಸ ದೃಶ್ಯ ತಯಾರಿ', alt: 'ಆಕ್ಷನ್ ಸೀನ್ ಅಭ್ಯಾಸ', category: 'Movies' },
      { id: 'g7', title: 'ಉಡುಗೆ ಶೃಂಗಾರ ಶೂಟ್', alt: 'ಬ್ರಾಂಡ್ ಪ್ರಚಾರಕ್ಕಾಗಿ ಉತ್ತಮ ಶೂಟ್', category: 'Promotional Shoots' },
      { id: 'g8', title: 'ಧ್ವನಿ ತರಂಗ ರೆക്കോರ್ಡಿಂಗ್', alt: 'ಸ್ಟುಡಿಯೋ ಡಬ್ಬಿಂಗ್ ಮತ್ತು ಹಾಡುಗಾರಿಕೆ', category: 'Behind the Scenes' }
    ],
    'data.media': [
      {
        id: 'media1',
        title: '“ಕೇಫ್ ಗಾಯನದಿಂದ ಬೆಳ್ಳಿಪರದೆಯವರೆಗೆ” - ಜೇಕ್ ಅಸಾಧಾರಣ ಪಯಣ',
        description: 'ಸಣ್ಣ ಕೇಫ್ ಗಳಿಂದ ಸಂಗೀತ ಶುರುಮಾಡಿ ಇಂದು ತಮಿಳಿನ ಪ್ರಮುಖ ನಟರೊಂದಿಗೆ ತೆರೆಹಂಚಿಕೊಳ್ಳುವ ಮಟ್ಟಕ್ಕೆ ಬೆಳೆದ ರೋಚಕ ಕಥೆ.',
        type: 'ಸಂದರ್ಶನ',
        source: 'ದಿ ಹಿಂದೂ ಸಿನಿಮಾ'
      },
      {
        id: 'media2',
        title: 'ಆಟೋ ಶಂಕರ್ ಖುಡ್ಡಾಗಿ ಪೋಷಕ ನಟ ವಿಭಾಗದಲ್ಲಿ ನಾಮಿನೇಷನ್ ಬಲ',
        description: 'ಆಟೋ ಶಂಕರ್ ಯುವ ಪೇದೆಯ ಪಾತ್ರಕ್ಕಾಗಿ ರೈಸಿಂಗ್ ಸ್ಟಾರ್ ಅತ್ಯುತ್ತಮ ಪೋಷಕ ನಟ ಪ್ರಶಸ್ತಿಗೆ ನಟ ಜೇಕ್ ನಾಮಿನೇಟ್ ಆಗಿದ್ದಾರೆ.',
        type: 'ಪ್ರಶಸ್ತಿ',
        source: 'ಚೆನ್ನೈ ಎಕ್ಸ್ ಪ್ರೆಸ್ ಅವಾರ್ಡ್ಸ್ 2024'
      },
      {
        id: 'media3',
        title: 'ಮುಂದಿನ ಆಕ್ಷನ್ ತ್ರಿಲ್ಲರ್ ಚಿತ್ರದಲ್ಲಿ ಜೇಕ್ ಪ್ರಮುಖ ನೆಗೆಟಿವ್ ಪಾತ್ರಕ್ಕೆ ಸಮ್ಮತಿ',
        description: 'ಮುಂಬರುವ ದೊಡ್ಡ ಬಡ್ಜೆಟ್ ತಮಿಳು ಚಿತ್ರದಲ್ಲಿ ನಾಯಕನ ಹಿಂಬಾಲಕ ಅಥವಾ ವಿಲನ್ ಪಾತ್ರದಲ್ಲಿ ಜೇಕ್ ಸಾಹಸ ತೋರಿಸಲಿದ್ದಾರೆ.',
        type: 'ಸುದ್ದಿ ಬಿಡುಗಡೆ',
        source: 'ಬಿಹೈಂಡ್‌ವುಡ್ಸ್ ಟುಡೇ'
      }
    ],
    'data.awards': [
      {
        id: 'a1',
        title: 'ತಮಿಳು ದೂರದರ್ಶನ ಅಕಾಡೆಮಿ ಪ್ರಶಸ್ತಿ',
        category: 'ಅತ್ಯುತ್ತಮ ಪೋಷಕ ನಟ (ಡ್ರಾಮಾ)',
        year: '2021',
        description: 'ಸನ್ ಟಿವಿಯ ಯಶಸ್ವಿ ಧಾರಾವಾಹಿ ‘ಅನ್ಬೇ ವಾ’ ದಲ್ಲಿನ ಜೀವಾ ಪಾತ್ರಕ್ಕೆ ಲಭಿಸಿದ ಪ್ರಶಸ್ತಿ.',
        filterType: 'Television'
      },
      {
        id: 'a2',
        title: 'ಮದ್ರಾಸ್ ಫಿಲ್ಮ್ ಫ್ಯಾನ್ಸ್ ಅಸೋಸಿಯೇಷನ್ ಪ್ರಶಸ್ತಿ',
        category: 'ಅತ್ಯುತ್ತಮ ಹಾಸ್ಯ ನಟ',
        year: '2019',
        description: '‘ಗುರ್ಖಾ’ ಚಲನಚಿತ್ರದಲ್ಲಿ ಯೋಗಿ ಬಾಬು ಜೊತೆಗಿನ ನಗೆಯ ಅಲೆ ಎಬ್ಬಿಸಿದ ಅಭಿನಯಕ್ಕಾಗಿ ಲಭಿಸಿದ ಗೌರವ.',
        filterType: 'Film'
      },
      {
        id: 'a3',
        title: 'ಸೌತ್ ಇಂಡಿಯನ್ ಒಟಿಟಿ ಅವಾರ್ಡ್ಸ್',
        category: 'ವರ್ಷದ ಅತ್ಯುತ್ತಮ ಅಭಿನಯ',
        year: '2020',
        description: 'ಪ್ರಸಿದ್ಧ ‘ಆಟೋ ಶಂಕರ್’ ವೆಬ್ ಸರಣಿಯಲ್ಲಿ ಕಾನ್‌ಸ್ಟೆಬಲ್ ಕದಿರ್ ಪಾತ್ರಕ್ಕೆ ಒಲಿದ ಪ್ರಶಸ್ತಿ.',
        filterType: 'Digital'
      },
      {
        id: 'a4',
        title: 'ಚೆನ್ನೈ ಇಂ‍ಡಿ ಮ್ಯೂಸಿಕ್ ಪ್ರಶಸ್ತಿಗಳು',
        category: 'ಅತ್ಯುತ್ತಮ ಸ್ವತಂತ್ರ ಗಾಯಕ ಹಾಗೂ ಸಾಹಿತ್ಯಗಾರ',
        year: '2022',
        description: 'ಸ್ವತಂತ್ರ ತಮಿಳು ಸಂಗೀತ ಕ್ಷೇತ್ರಕ್ಕೆ ನೀಡಿದ ಹಾಡು ಮತ್ತು ಸಾಹಿತ್ಯದ ಕೊಡುಗೆಗಾಗಿ ಗೌರವ.',
        filterType: 'Music'
      },
      {
        id: 'a5',
        title: 'ಕಲೈಮಾಮಣಿ ವಿಶೇಷ ಪ್ರಶಸ್ತಿ',
        category: 'ರಾಜ್ಯ ಯೂತ್ ಐಕಾನ್ ಪ್ರಶಸ್ತಿ',
        year: '2023',
        description: 'ರಂಗಭೂಮಿ ಹಾಗೂ ಬೆಳ್ಳಿಪರದೆಯ ಬಹುಮುಖ ಪ್ರತಿಭೆಗಾಗಿ ಸರ್ಕಾರದಿಂದ ಸಂದ ವಿಶೇಷ ಗೌರವ.',
        filterType: 'Special'
      }
    ],
    'data.stats': [
      { label: 'ಚಲನಚಿತ್ರಗಳು', value: '20+' },
      { label: 'ಕಿರುಚಿತ್ರಗಳು', value: '10+' },
      { label: 'ವೆಬ್ ಸರಣಿಗಳು', value: '2' },
      { label: 'ಟಿವಿ ಪ್ರದರ್ಶನಗಳು', value: 'ಹಲವಾರು' }
    ],
    'data.timeline': [
      {
        year: '2016 - 2017',
        title: 'ರಂಗಭೂಮಿ ಪ್ರವೇಶ',
        description: 'ಚೆನ್ನೈನ ಖ್ಯಾತ ಕಲಾ ಮತ್ತು ನಾಟಕ ಕಮಿಟಿಗಳೊಂದಿಗೆ ನಟನೆಯನ್ನು ಅಭ್ಯಸಿಸಿದರು.'
      },
      {
        year: '2018',
        title: 'ಬೆಳ್ಳಿಪರದೆಗೆ ಲಗ್ಗೆ',
        description: 'ಲವ್ ಸ್ಟೋರಿ ಹಾಗು ಫ್ಯಾಮಿಲಿ ಚಿತ್ರಗಳೊಂದಿಗೆ ನಟನೆ ಆರಂಭಿಸಿದರು.'
      },
      {
        year: '2019',
        title: 'ವೆಬ್ ಸೀರೀಸ್ ಜಗತ್ತು',
        description: '"ಆಟೋ ಶಂಕರ್" ನ ಕತಿರ್ ಹಾಗು "ಪೊಲೀಸ್ ಡೈರಿ 2.0" ನ ಪ್ರೇಮ್ ಪಾತ್ರಗಳ ಮೂಲಕ ಅದ್ಭುತ ಲೋಕ ಕಂಡರು.'
      },
      {
        year: '2020 - 2021',
        title: 'ಸಾಮಾಜಿಕ ಕಳಕಳಿ ಚಿತ್ರಗಳು',
        description: '"ಕಾವಲ்துறை ಉಂಗಳ್ ನನ್ಬನ್" ಸಿನಿಮಾದಲ್ಲಿ ಪೊಲೀಸ್ ಆಗಿ ಮಿಂಚಿದರು.'
      },
      {
        year: '2022 - ಪ್ರಸ್ತುತ',
        title: 'ಸಂಗೀತ ಆಲ್ಬಂ ಮತ್ತು ಆಕ್ಷನ್ ಸರಣಿಗಳು',
        description: '“ನೀಯೆ” ಕನ್ನಡ ಗೀತೆಯೊಂದಿಗೆ ಹೊಸ ಆಕ್ಷನ್ ಸಿನಿಮಾಗಳಲ್ಲಿ ಸಕ್ರಿಯರಾಗಿದ್ದಾರೆ.'
      }
    ]
  },
  hi: {
    'nav.home': 'मुख्य पृष्ठ',
    'nav.about': 'परिचय',
    'nav.filmography': 'फ़िल्मोग्राफ़ी',
    'nav.videos': 'वीडियो',
    'nav.webseries': 'वेब सीरीज़',
    'nav.television': 'टेलीविजन',
    'nav.awards': 'पुरस्कार',
    'nav.gallery': 'गैलरी',
    'nav.media': 'मीडिया न्यूज़',
    'nav.contact': 'संपर्क करें',

    'hero.tag': 'तमिल सिनेमा • टेलीविजन • संगीत',
    'hero.artist': 'कलाकार',
    'hero.actor': 'अभिनेता',
    'hero.singer': 'गायक',
    'hero.lyricwriter': 'गीतकार',
    'hero.desc': 'फ़िल्मों, सुपरहिट टीवी सीरियल्स और बेहतरीन ओटीटी वेब सीरीज़ में अपनी छाप छोड़ने वाले बहुमुखी तमिल अभिनेता। शक्तिशाली अभिनय और मौलिक स्वतंत्र गीतों के माध्यम से यथार्थवादी कहानियों में जान डालने के प्रति समर्पित।',
    'hero.cta.explore': 'सफ़र का अनुभव करें',
    'hero.cta.reel': 'शोरील देखें',
    'hero.resident': 'निवास स्थान',
    'hero.chennai': 'चेन्नई, तमिलनाडु, भारत',
    'hero.open_for': 'कार्यस्थल क्षेत्र',
    'hero.bookings': 'अवसरों के लिए तैयार',

    'about.journey': 'सफ़र',
    'about.title': 'कलाकार जैक के बारे में।',
    'about.about': 'विवरण',
    'about.intro': 'तमिल सिनेमा में वास्तविक किरदारों और रूहानी संगीत को लाना।',
    'about.p1': 'तमिलनाडु की सांस्कृतिक राजधानी चेन्नई के जीवंत परिवेश से आए कलाकार जैक ने विभिन्न माध्यमों में अपनी बहुमुखी प्रतिभा का लोहा मनवाया है। स्वतंत्र लघु फ़िल्मों से लेकर बड़े पर्दे की ब्लॉकबस्टर फिल्मों, धारावाहिकों और बेहद प्रशंसित वेब सीरीज़ तक जैक का समर्पण अद्भुत है।',
    'about.p2': 'अभिनय के अलावा, संगीत के प्रति उनका विशेष लगाव उनकी पहचान का एक अहम हिस्सा है। लाइव अकॉस्टिक गिटार बजाते हुए अपने लिखे गानों की धुन बनाना उनके दिल के करीब है।',
    'about.active': 'सक्रिय वर्ष',
    'about.primary_base': 'मुख्य केंद्र',
    'about.languages': 'भाषाएं',
    'about.languages_value': 'तमिल और अंग्रेजी',
    'about.philosophy': 'मूल दर्शन',
    'about.philosophy_title': 'मूल्य जो मेरे अभिनय को निखारते हैं',
    'about.philosophy.p1.title': 'कलात्मक बहुमुखी प्रतिभा',
    'about.philosophy.p1.desc': 'जटिल भावनात्मक भूमिकाओं, यथार्थवादी एक्शन दृश्यों, बेहतरीन कॉमेडी और गायन के बीच सुगमता से तालमेल बिठाना।',
    'about.philosophy.p2.title': 'सिनेमाई समर्पण',
    'about.philosophy.p2.desc': 'चेन्नई के थिएटर मंचों से प्रशिक्षित होकर प्रत्येक दृश्य और संवाद में अपनी बेहतरीन शारीरिक भाषा प्रस्तुत करना।',
    'about.philosophy.p3.title': 'संगीतमय रूह',
    'about.philosophy.p3.desc': 'स्वतंत्र गायक और संगीतकार के रूप में तमिल संस्कृति की मिट्टी की महक को आधुनिक गिटार धुनों के साथ पिरोना।',
    'about.timeline': 'मुख्य मील के पत्थर',
    'about.timeline.title': 'करियर टाइमलाइन',

    'films.cinematic': 'सिनेमाई कार्य',
    'films.title': 'फ़िल्में।',
    'films.desc': 'मशहूर निर्देशकों और निर्माताओं के मार्गदर्शन में रोमांचक थ्रिलर, पारिवारिक ड्रामा और कॉमेडी फिल्मों में जैक के शानदार काम का विवरण।',
    'films.director': 'निर्देशक',
    'films.rating': 'रेटिंग',
    'films.role': 'किरदार',
    'films.genre': 'शैली',

    'videos.reels': 'रील्स और संगीत',
    'videos.title': 'विशेष वीडियो गैलरी।',
    'videos.desc': 'अभिनय और संगीत में जैक की कलात्मकता को दर्शाने वाले शोरील, लाइव संगीत सत्र और विशेष साक्षात्कार।',
    'videos.all': 'सभी रील्स',
    'videos.showreel': 'शो रील्स',
    'videos.song': 'गीत',
    'videos.interview': 'साक्षात्कार',

    'webseries.digital': 'डिजिटल वर्ल्ड',
    'webseries.title': 'वेब सीरीज़।',
    'webseries.desc': 'डिजिटल प्लेटफॉर्म्स पर दिल दहला देने वाले सस्पेंस और सजीव रोल। धुंधली और चुनौतिपूर्ण भूमिकाओं में जान डालना।',
    'webseries.role': 'किरदार',
    'webseries.role_highlights': 'भूमिका की खास बातें',

    'tv.broadcast': 'टेलीविजन ब्रॉडकास्ट',
    'tv.title': 'टेलीविजन धारावाहिक।',
    'tv.desc': 'भारतीय दर्शकों के दिलों में बसने वाले पसंदीदा सीरियलों में जैक के बेमिसाल किरदार और अभिनय।',
    'tv.all': 'सभी',
    'tv.pending': 'पोस्टर अभी उपलब्ध नहीं है',
    'tv.showcase': 'अभिनय प्रदर्शन',
    'tv.credits': 'आधिकारिक श्रेय',
    'tv.role': 'किरदार',

    'gallery.behind': 'पर्दे के पीछे',
    'gallery.captures': 'CAPTURES & STILLS',
    'gallery.title': 'यादगार लम्हें।',
    'gallery.desc': 'A curated collection of on-set moments, candid behind-the-scenes photography, and official promotional shoots capturing Actor Jack Prabhu’s cinematic journey.',
    'gallery.all': 'सभी तस्वीरें',
    'gallery.movies': 'फिल्में',
    'gallery.events': 'समारोह',
    'gallery.promotions': 'प्रमोशन शूट',
    'gallery.bts': 'शूटिंग सेट पर',
    'gallery.television': 'टेलीविजन',

    'media.press': 'मीडिया और सुर्खियाँ',
    'media.title': 'खबरों के पन्नों पर।',
    'media.desc': 'देखें कि सिनेमाई समीक्षक, फिल्मी पत्रकार और डिजिटल मीडिया जैक के अभिनय और संगीत की उपलब्धियों के बारे में क्या कह रहे हैं।',
    'media.read_more': 'पूरी खबर पढ़ें',

    'contact.get_in_touch': 'सम्पर्क करें',
    'contact.title': 'फिल्म कास्टिंग या सहयोग के अवसर।',
    'contact.desc': 'कास्टिंग, म्यूज़िकल वर्क, ब्रांड विज्ञापन या क्रिएटिव चर्चाओं के लिए आप सीधे इस फॉर्म के माध्यम से हमसे जुड़ सकते हैं।',
    'contact.form_title': 'सीधे संदेश भेजें',
    'contact.form_desc': 'आपकी प्रविष्टि सीधे जैक की प्रबंधन टीम तक पहुंचेगी।',
    'contact.fullname': 'पूरा नाम',
    'contact.email': 'ईमेल पता',
    'contact.topic': 'विषय',
    'contact.details': 'सन्देश विवरण',
    'contact.btn': 'सन्देश भेजें',
    'contact.btn.sending': 'भेजा जा रहा है...',
    'contact.btn.success': 'संदेश सफलतापूर्वक भेजा गया!',
    'contact.collab': 'सीधे संपर्क के माध्यम',
    'contact.socials': 'जैक को सोशल मीडिया पर खोजें',
    'contact.whatsapp': 'व्हाट्सएप चैनल',
    'contact.mail': 'आधिकारिक ईमेल',
    'contact.insta': 'इंस्टाग्राम प्रोफाइल',

    'footer.brand': 'अभिनेता जैक',
    'footer.desc': 'चेन्नई से निकलकर जीवंत अभिनय, अनूठे किरदारों और मधुर गीतों के माध्यम से दर्शकों के दिलों को छूना।',
    'footer.designed': 'सिल्वर स्क्रीन के लिए विशेष रूप से डिज़ाइन किया गया।',
    'footer.rights': '© 2026 जैक। सर्वाधिकार सुरक्षित।',
    'footer.navigations': 'नेविगेशन',
    'footer.sections': 'अनुभाग',
    'footer.channels': 'आधिकारिक चैनल',
    'footer.social_info': 'फ़िल्म निर्माण स्टूडियोज़ और रिकॉर्डिंग बॉक्स के लाइव अपडेट्स पाने के लिए सोशल मीडिया पर आर्टीस्ट जैक को फॉलो करें।',
    'footer.top': 'ऊपर',

    'awards.awards': 'पुरस्कार और सम्मान',
    'awards.title': 'पुरस्कार और सम्मान',
    'awards.desc': 'भारतीय फिल्मों, टेलीविजन धारावाहिकों, डिजिटल वेब सीरीज और स्वतंत्र संगीत में उत्कृष्ट प्रदर्शन के लिए मान्यता।',
    'awards.filter.all': 'सभी',
    'awards.filter.television': 'टेलीविजन पुरस्कार',
    'awards.filter.film': 'फिल्म पुरस्कार',
    'awards.filter.digital': 'डिजिटल पुरस्कार',
    'awards.filter.music': 'संगीत पुरस्कार',
    'awards.filter.special': 'विशेष सम्मान',

    'data.movies': [
      {
        id: 'm1',
        title: 'कात्रिन मोड़ी',
        role: 'सह-अभिनेता / गायक',
        genre: 'पारिवारिक ड्रामा',
        description: 'ज्योतिका अभिनीत एक सुंदर कॉमेडी फिल्म जिसमें एक रेडियो जॉकी के जीवन को दिखाया गया है। जैक ने इसमें एक अहम सहायक रोल निभाया और गाना गाया।'
      },
      {
        id: 'm2',
        title: 'गुरखा',
        role: 'मुख्य रोल भूमिका',
        genre: 'कॉमेडी',
        description: 'शॉपिंग मॉल के अंदर बंधक स्थिति पर आधारित एक अत्यंत मनोरंजक कॉमेडी थ्रिलर। योगी बाबू के साथ जैक ने बेहतरीन कॉमेडी पेश की।'
      },
      {
        id: 'm3',
        title: 'असुरगुरु',
        role: 'खलनायक का सहायक',
        genre: 'थ्रिलर',
        description: 'चतुर हाई-टेक चोर के जीवन पर केंद्रित एक तेज़-तर्रार डकैती थ्रिलर। जैक ने खलनायक का साथ देकर हैरतंगेज स्टंट किए।'
      },
      {
        id: 'm4',
        title: 'स्केच',
        role: 'स्थानीय गिरोह का सदस्य',
        genre: 'एक्शन',
        description: 'चियान विक्रम अभिनीत नार्थ चेन्नई की पृष्ठभूमि पर बनी एक्शन थ्रिलर फिल्म। जैक ने इसमें गाड़ियों को जब्त करने वाले स्थानीय गुंडे का रोल किया।'
      },
      {
        id: 'm5',
        title: 'गजनीकांत',
        role: 'सच्चा दोस्त (मुख्य कॉमेडी किरदार)',
        genre: 'कॉमेडी',
        description: 'भूलने की बीमारी से पीड़ित युवक और उसकी प्रेमिका की कहानी। जैक ने नायक के गहरे दोस्त के रूप में प्रचुर हास्य प्रस्तुत किया।'
      },
      {
        id: 'm6',
        title: 'कुत्रम पुरिंथाल',
        role: 'नायक का दोस्त',
        genre: 'सस्पेंस थ्रिलर',
        description: 'चिकित्सा क्षेत्र में फैले घोटालों को बेनकाब करती एक रोमांचक फिल्म। जैक ने एक सच्चे साथी के रूप में शानदार काम किया।'
      },
      {
        id: 'm7',
        title: 'कावलथुरई उंगल ननबन',
        role: 'सब-इंस्पेक्टर / सहायक अधिकारी',
        genre: 'सामाजिक ड्रामा',
        description: 'पुलिस और आम आदमी के बीच शक्ति संतुलन को दिखाती बेहद सच्ची फिल्म। जैक के पुलिस अफसर के रोल को काफी सराहा गया।'
      }
    ],
    'data.webseries': [
      {
        id: 'w1',
        title: 'पुलिस डायरी 2.0',
        role: 'सब-इंस्पेक्टर प्रेम',
        description: 'चेन्नई में जघन्य अपराधों को सुलझाने वाली पुलिस की एक विशेष टीम के साहसिक कारनामों की श्रृंखला।',
        roleHighlight: 'जासूसी और वैज्ञानिक तरीकों से हत्यारों को पकड़ने वाले युवा सब-इंस्पेक्टर के रूप में अभिनय किया।'
      },
      {
        id: 'w2',
        title: 'ऑटो शंकर',
        role: 'कांस्टेबल कथिर',
        description: '1980 के दशक के मद्रास के खूंखार अपराधी ऑटो शंकर के जीवन पर बनी ज़ी5 की बेहद लोकप्रिय वेब सीरीज़।',
        roleHighlight: 'भ्रष्टाचार और अंडरवर्ल्ड के बीच संघर्ष करते युवा कांस्टेबल के रूप में संजीदा अभिनय किया।'
      }
    ],
    'data.tvserials': [
      {
        id: 'tv1',
        title: 'अनबे वा',
        genre: 'पारिवारिक ड्रामा',
        role: 'जीवा',
        description: 'सन टीवी का बेहद लोकप्रिय प्राइम-टाइम सीरियल। नायक के जीवन और घर की समस्याओं को सुलझाने वाले सदस्य का रोल निभाया।'
      },
      {
        id: 'tv2',
        title: 'राजा रानी (सीजन 2)',
        genre: 'पारिवारिक / रोमांटिक',
        role: 'सिद्धार्थ',
        description: 'स्टार विजय का सबसे हिट पारिवारिक ड्रामा। इसमें जैक ने अपनी कॉमिक टाइमिंग से लोगों के दिलों को जीता।'
      },
      {
        id: 'tv3',
        title: 'सुपरनैचुरल फाइल्स',
        genre: 'रहस्य / थ्रिलर',
        role: 'इंस्पेक्टर अर्जुन',
        description: 'रहस्यमयी गुत्थियों और आत्माओं से जुड़े अपराधों को सुलझाने वाला एक अनूठा शो।'
      },
      {
        id: 'tv4',
        title: 'सिल्लुनु ओरु कादल',
        genre: 'रोमांटिक / एक्शन',
        role: 'सब-इंस्पेक्टर कथिर',
        description: 'कलर्स तमिल का मशहूर सीरियल। एक अनुशासित एवं कर्तव्यनिष्ठ पुलिस ऑफिसर का रोल किया।'
      },
      {
        id: 'tv5',
        title: 'कडल कदनदु उद्योगम',
        genre: 'ऑफिस कॉमेडी',
        role: 'गणेश',
        description: 'राज टीवी का ऑफिस ड्रामा और कॉमेडी शो जिसमें युवाओं के जीवन को हंसी मज़ाक के साथ बुना गया है।'
      },
      {
        id: 'tv6',
        title: 'चिथी 2',
        genre: 'पारिवारिक ड्रामा',
        role: 'डॉ. संतोष (अतिथी भूमिका)',
        description: 'सन टीवी का विख्यात मेगा-सीरियल। महत्वपूर्ण घटनाक्रम पर डॉक्टर की भूमिका में आए।'
      },
      {
        id: 'tv7',
        title: 'भारती कन्नम्मा',
        genre: 'मेलोड्रामा',
        role: 'प्रदीप',
        description: 'विजय टीवी का बेहद प्रसिद्ध शो। इसमें हीरोइन की मदद और अहम पलों में साथ देने वाले किरदार की भूमिका की।'
      }
    ],
    'data.videos': [
      { id: 'v1', title: 'कलाकार जैक आधिकारिक शारील 2026', category: 'शो रील्स' },
      { id: 'v2', title: '“नीये” - तमिल और हिंदी अकॉस्टिक गिटार सॉन्ग', category: 'गीत' },
      { id: 'v3', title: 'पर्दे के पीछे की आवाज़: जैक के साथ साक्षात्कार', category: 'साक्षात्कार' }
    ],
    'data.gallery': [
      { id: 'g1', title: 'कात्रिन मोड़ी की शूटिंग', alt: 'शूटिंग सेट के बीच हँसी मज़ाक के पल', category: 'Movies' },
      { id: 'g2', title: 'म्यूज़िक लॉन्च प्रदर्शन', alt: 'गिटार पर प्रस्तुति देते हुए जैक', category: 'Events' },
      { id: 'g3', title: 'नवीनतम तस्वीरें', alt: 'अभिनेता जैक का नया स्टूडियो फोटोशूट', category: 'Promotional Shoots' },
      { id: 'g4', title: 'ऑटो शंकर स्क्रिप्ट पढ़ना', alt: 'ऑटो शंकर की कहानी पर चर्चा करते कलाकार', category: 'Behind the Scenes' },
      { id: 'g5', title: 'टीवी प्रोग्राम में बतौर जज', alt: 'मुख्य चैनल के रियलिटी शो में जैक बतौर जज', category: 'Television' },
      { id: 'g6', title: 'स्टंट सीन का अभ्यास', alt: 'लड़ाई के रोमांचक दृश्य की तैयारी करते जैक', category: 'Movies' },
      { id: 'g7', title: 'प्रमोशनल फोटोशूट', alt: 'मुख्य ब्रांड्स के परिधानों का प्रदर्शन', category: 'Promotional Shoots' },
      { id: 'g8', title: 'स्टू़डियो डबिंग सत्र', alt: 'गाने के बोल लिखते और रिकॉर्ड करते जैक', category: 'Behind the Scenes' }
    ],
    'data.media': [
      {
        id: 'media1',
        title: '“छोटे कैफे से लेकर बड़ी सिल्वर स्क्रीन तक” - जैक का संगीत सफ़र',
        description: 'कैफ़े में लाइव गाने गाने से लेकर बड़े तमिल सितारों के साथ फ़िल्में करने तक जैक के प्रेरणादायक संगीत सफ़र का विवरण।',
        type: 'साक्षात्कार',
        source: 'द हिंदू सिनेमा'
      },
      {
        id: 'media2',
        title: 'ऑटो शंकर सीरीज़ में कांस्टेबल कथिर के किरदार के लिए राइजिंग स्टार बेस्ट स्पोर्टिंग एक्टर नामांकन',
        description: 'जैक को ओटीटी पर उनके बेहतरीन पुलिस अभिनय के लिए सर्वश्रेष्ठ सहायक अभिनेता श्रेणी में मनोनीत किया गया।',
        type: 'पुरस्कार',
        source: 'चेन्नई एक्सप्रेस अवार्ड्स 2024'
      },
      {
        id: 'media3',
        title: 'आगामी बड़ी एक्शन फिल्म में जैक का मुख्य विलेन का किरदार पक्का हुआ',
        description: 'चेन्नई सिनेमा के गलियारों से खबर है कि जैक ने आगामी रहस्यमयी हाई बजट फिल्म में फाइट सीन पूरा कर लिया है।',
        type: 'प्रेस विज्ञप्ति',
        source: 'बिहाइंडवुड्स टुडे'
      }
    ],
    'data.awards': [
      {
        id: 'a1',
        title: 'तमिल टेलीविजन अकादमी पुरस्कार',
        category: 'सर्वश्रेष्ठ सहायक अभिनेता (नाटक)',
        year: '2021',
        description: 'सन टीवी के सुपरहिट सीरियल ‘अन्बे वा’ में जीवा की उत्कृष्ट भूमिका के लिए विजेता।',
        filterType: 'Television'
      },
      {
        id: 'a2',
        title: 'मद्रास फिल्म फैंस एसोसिएशन पुरस्कार',
        category: 'सर्वश्रेष्ठ हास्य अभिनेता (समूह)',
        year: '2019',
        description: 'कॉमेडी फिल्म ‘गुरखा’ में योगी बाबू के साथ शानदार कॉमिक टाइमिंग के लिए सम्मानित।',
        filterType: 'Film'
      },
      {
        id: 'a3',
        title: 'साउथ इंडियन ओटीटी अवार्ड्स',
        category: 'ब्रेकथ्रू परफॉरमेंस ऑफ़ द ईयर',
        year: '2020',
        description: 'क्रिटिक्स द्वारा सराही गई क्राइम थ्रिलर सीरीज ‘ऑटो शंकर’ में कांस्टेबल कथिर के दमदार अभिनय के लिए।',
        filterType: 'Digital'
      },
      {
        id: 'a4',
        title: 'चेन्नई इंडी म्यूजिक अवार्ड्स',
        category: 'सर्वश्रेष्ठ स्वतंत्र गीतकार और गायक',
        year: '2022',
        description: 'स्वतंत्र तमिल संगीत में अपनी मधुर आवाज और सार्थक बोलों के लिए सम्मानित।',
        filterType: 'Music'
      },
      {
        id: 'a5',
        title: 'कलैमामणि विशेष सम्मान',
        category: 'स्टेट यूथ आइकॉन पुरस्कार',
        year: '2023',
        description: 'सांस्कृतिक विभाग द्वारा टेलीविजन और फिल्मों में उनके विशेष योगदान के लिए दिया गया सर्वोच्च सम्मान।',
        filterType: 'Special'
      }
    ],
    'data.stats': [
      { label: 'मुख्य फिल्में', value: '20+' },
      { label: 'लघु फिल्में', value: '10+' },
      { label: 'वेब सीरीज़', value: '2' },
      { label: 'टीवी प्रसारण', value: 'कई बार' }
    ],
    'data.timeline': [
      {
        year: '2016 - 2017',
        title: 'थिएटर और ड्रामा',
        description: 'चेन्नई के प्रमुख प्रतिष्ठित थिएटर समूहों के साथ अभिनय शैली में सुधार किया।'
      },
      {
        year: '2018',
        title: 'तमिल सिनेमा में पहली फ़िल्म',
        description: 'चियान विक्रम की फिल्म "स्केच" और "कात्रिन मोड़ी" के साथ बड़े पर्दे पर अभिनय की शुरुआत।'
      },
      {
        year: '2019',
        title: 'वेब श्रृंखला क्रांति',
        description: '"ऑटो शंकर" के कांस्टेबल कथिर के रोल से डिजिटल दर्शकों के चहेते बने।'
      },
      {
        year: '2020 - 2021',
        title: 'रोमांचक सस्पेंस फ़िल्में',
        description: '"कावलथुरई उंगल ननबन" जैसी यथार्थवादी फिल्मों में बेहतरीन काम किया।'
      },
      {
        year: '2022 - वर्तमान',
        title: 'स्वतंत्र संगीत और बिग बजट फिल्में',
        description: '“नीये” जैसी मधुर कड़ियों को रिकॉर्ड करते हुए नई बड़ी फिल्मों में काम कर रहे हैं।'
      }
    ]
  }
};
