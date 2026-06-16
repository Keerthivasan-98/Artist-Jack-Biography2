import { Movie, WebSeries, VideoItem, GalleryItem, MediaItem, TVSerial, Award } from './types';

export const MOVIES: Movie[] = [
  {
    id: 'm1',
    title: 'Kaatrin Mozhi',
    role: 'Supporting Actor / Singer',
    year: '2018',
    director: 'Radha Mohan',
    genre: 'Drama',
    description: 'A charming comedy-drama starring Jyothika, exploring the life of an ambitious radio jockey. Jack delivered a strong supporting performance and contributed to the vocal backing track.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Kaatrin_Mozhi_poster.jpg',
    rating: '8.1/10'
  },
  {
    id: 'm2',
    title: 'Gurkha',
    role: 'Key Cast member',
    year: '2019',
    director: 'Sam Anton',
    genre: 'Comedy',
    description: 'A hilarious comedy thriller inside a hostage situation at a shopping mall. Jack showcased exceptional comedy timing and high energy alongside Yogi Babu.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/7/76/Gurkha_film_poster.jpg',
    rating: '7.5/10'
  },
  {
    id: 'm3',
    title: 'Asuraguru',
    role: 'Antagonist Assistant',
    year: '2020',
    director: 'A. Raajdheep',
    genre: 'Thriller',
    description: 'An action-packed heist thriller centered around a clever high-tech thief. Jack played a critical supporting antagonist role, delivering a sleek performance in high-stakes action sequences.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Asuraguru_poster.jpg',
    rating: '7.2/10'
  },
  {
    id: 'm4',
    title: 'Sketch',
    role: 'Local Gang Member',
    year: '2018',
    director: 'Vijay Chander',
    genre: 'Action',
    description: 'An intense action thriller starring Chiyaan Vikram, set in North Chennai. Jack played a high-impact local gang associate involved in dramatic vehicle recovery conflicts.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Sketch_Release_Poster.jpg',
    rating: '7.8/10'
  },
  {
    id: 'm5',
    title: 'Ghajinikanth',
    role: 'Friend Role (Key Comic Lead)',
    year: '2018',
    director: 'Santhosh P. Jayakumar',
    genre: 'Comedy',
    description: 'A popular romantic comedy about a young man suffering from severe forgetfulness. Jack played the principal friend supporting character, creating memorable comic relief.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Ghajinikanth.jpg',
    rating: '7.0/10'
  },
  {
    id: 'm6',
    title: 'Kuttram Purinthal',
    role: 'Lead Hero Character Friend',
    year: '2021',
    director: 'Disney',
    genre: 'Thriller',
    description: 'A dark, mind-bending suspense thriller investigating secret medical conspiracies. Jack brought emotional depth and heavy drama to the crucial ally role.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Kuttram_Purinthal.jpg',
    rating: '8.3/10'
  },
  {
    id: 'm7',
    title: 'Kavalthurai Ungal Nanban',
    role: 'Sub-Inspector / Assisting Officer',
    year: '2020',
    director: 'RDM',
    genre: 'Drama',
    description: 'A realistic, critically acclaimed intense social thriller exploring the power dynamics within law enforcement. Jack delivered a highly commended, nuanced, realistic performance.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Kavalthurai_Ungal_Nanban.jpg',
    rating: '8.5/10'
  }
];

export const WEB_SERIES: WebSeries[] = [
  {
    id: 'w1',
    title: 'Police Diary 2.0',
    role: 'Sub-Inspector Prem',
    year: '2019',
    platform: 'ZEE5',
    description: 'A gripping cop procedural web series following a special task force solving Chennai’s most heinous criminal cases in real-time.',
    roleHighlight: 'Starred as SI Prem, a brilliant forensics-minded field officer who uses analytical skills to track down serial cases.',
    posterUrl: 'https://akamaividz2.zee5.com/image/upload/w_500,h_750,c_scale,f_auto,q_auto:eco/resources/0-6-2145/portrait/1920x7709903f0d0cdb247e28093e2354859a58947c9349f7bad44f98efc81c0408e206f.jpg'
  },
  {
    id: 'w2',
    title: 'Auto Shankar',
    role: 'Constable Kathir',
    year: '2019',
    platform: 'ZEE5',
    description: 'The award-winning, critically acclaimed crime series depicting the notorious gangster-serial killer Auto Shankar in late-1980s Madras.',
    roleHighlight: 'Played Constable Kathir, a morally torn rookie cop caught between bribery, underworld threats, and system-wide corruption.',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Auto_Shankar_%28TV_series%29.jpg'
  }
];

export const TV_SERIALS: TVSerial[] = [
  {
    id: 'tv1',
    title: 'Anbe Vaa',
    channel: 'Sun TV',
    genre: 'Family Drama',
    year: '2021 - 2022',
    role: 'Jeeva (Supporting Lead)',
    description: 'A massive prime-time television hit exploring deep emotional conflicts and family bonds. Played an influential supportive family member guiding the lead protagonist.'
  },
  {
    id: 'tv2',
    title: 'Raja Rani (Season 2)',
    channel: 'Vijay TV',
    genre: 'Drama / Romance',
    year: '2022',
    role: 'Siddharth (Comic Supporting Lead)',
    description: 'One of Star Vijay\'s highest-charting family dramas. Showcased exceptional light-hearted comedy timing and strong relational performance.'
  },
  {
    id: 'tv3',
    title: 'Supernatural Files',
    channel: 'Zee Tamil',
    genre: 'Mystery / Thriller',
    year: '2020',
    role: 'Inspector Arjun (Ensemble Cast)',
    description: 'An episodic suspense procedural tackling occult riddles. Portrayed an analytical police inspector key to resolving complicated criminal and supernatural tracks.'
  },
  {
    id: 'tv4',
    title: 'Sillunu Oru Kaadhal',
    channel: 'Colors TV',
    genre: 'Romance / Action',
    year: '2021',
    role: 'Sub-Inspector Kathir',
    description: 'A popular soap revolving around an IPS officer\'s marital and professional responsibilities. Featured in a disciplined law enforcement role.'
  },
  {
    id: 'tv5',
    title: 'Kadal Kadhandhu Udhyogam',
    channel: 'Raj TV',
    genre: 'Urban Comedy',
    year: '2020',
    role: 'Ganesh (Parallel Lead)',
    description: 'A humorous sitcom tracking corporate workers dealing with office politics. Starred as an aspirational employee executing high-impact comedic situations.'
  },
  {
    id: 'tv6',
    title: 'Chithi 2',
    channel: 'Sun TV',
    genre: 'Drama',
    year: '2020',
    role: 'Dr. Santosh (Cameo)',
    description: 'A beloved mega-serial showcasing familial duties. Played a professional medical consultant vital to steering critical plot-points and health arcs.'
  },
  {
    id: 'tv7',
    title: 'Bharathi Kannamma',
    channel: 'Vijay TV',
    genre: 'Melodrama',
    year: '2021',
    role: 'Pradeep (Supporting)',
    description: 'A widely recognized television drama addressing social and family expectations. Portrayed a voice of reason supporting the protagonist.'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Artist Jack Official Showreel 2026',
    youtubeId: 'dGXJ1rc0RsA',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop',
    category: 'Showreel',
    duration: '3:15'
  },
  {
    id: 'v2',
    title: '“Neeye” - Indie Tamil Acoustic Session by Jack',
    youtubeId: '9jHaIAFh0LM',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600&auto=format&fit=crop',
    category: 'Song',
    duration: '4:02'
  },
  {
    id: 'v3',
    title: 'Behind the Voice: Exclusive Studio Interview with Jack',
    youtubeId: 'Kn6txoX7q3w',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop',
    category: 'Interview',
    duration: '12:45'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Movies',
    imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop',
    alt: 'Kaatrin Mozhi on-set action with directors',
    title: 'Kaatrin Mozhi Filming'
  },
  {
    id: 'g2',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
    alt: 'Jack performing on stage at audio launch',
    title: 'Audio Launch Performance'
  },
  {
    id: 'g3',
    category: 'Promotional Shoots',
    imageUrl: 'https://images.unsplash.com/photo-1485206412491-9a79559348a2?q=80&w=600&auto=format&fit=crop',
    alt: 'Studio portrait of Actor Jack',
    title: 'Modern Classic Portait'
  },
  {
    id: 'g4',
    category: 'Behind the Scenes',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop',
    alt: 'Jack reviewing script on set of Auto Shankar',
    title: 'Auto Shankar script read'
  },
  {
    id: 'g5',
    category: 'Television',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop',
    alt: 'Jack as guest mentor on reality TV show',
    title: 'TV Reality Star Guest Panel'
  },
  {
    id: 'g6',
    category: 'Movies',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop',
    alt: 'Dramatic police confrontation scene in Kuttram Purinthal',
    title: 'Action Sequence Stunt Set'
  },
  {
    id: 'g7',
    category: 'Promotional Shoots',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    alt: 'Sleek premium suit photoshoot for brand endorsement',
    title: 'Luxury Suit Shoot'
  },
  {
    id: 'g8',
    category: 'Behind the Scenes',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
    alt: 'Jack recording vocals in soundproof studio',
    title: 'Unplugged Dubbing Session'
  }
];

export const MEDIA: MediaItem[] = [
  {
    id: 'media1',
    title: '“From Indie Songs to Silverscreen” – Behind Jack’s Musical Journey',
    source: 'The Hindu Cinema',
    date: 'Dec 2025',
    description: 'An expansive profile piece tracking Jack’s rise from performing acoustic covers in Chennai cafés to sharing screen space with legendary actors in Tamil cinema.',
    type: 'Interview'
  },
  {
    id: 'media2',
    title: 'Jack’s SI Constable Role in Auto Shankar Earns Rising Star Nomination',
    source: 'Chennai Express Awards 2024',
    date: 'Aug 2024',
    description: 'Jack nominated for Best Supporting Actor in a Digital Series for his gritty, authentic portrayal of Constable Kathir in India’s leading OTT web series.',
    type: 'Award'
  },
  {
    id: 'media3',
    title: 'Jack Confirmed for High Voltage Action Cameo in Upcoming Mystery Project',
    source: 'Behindwoods Today',
    date: 'Mar 2026',
    description: 'Tamil film industry buzz confirms Jack has wrapped up a major combat antagonist sequence for an upcoming premium bilingual high-budget thriller.',
    type: 'Press Release'
  }
];

export const STATS = [
  { label: 'Feature Films', value: '7+' },
  { label: 'Short Films', value: '10+' },
  { label: 'Web Series', value: '2' },
  { label: 'TV Appearances', value: 'Multiple' }
];

export const TIMELINE = [
  {
    year: '2016 - 2017',
    title: 'Indie Roots & Chennai Theatre',
    description: 'Performed with iconic theatre groups in Chennai. Developed singing and songwriting styles in live musical circuits, while securing prominent supporting roles in award-winning short films.'
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
];

export const AWARDS: Award[] = [
  {
    id: 'a1',
    title: 'Tamil Television Academy Award',
    category: 'Best Supporting Actor (Drama)',
    year: '2021',
    description: 'Winner for his outstanding supporting role as Jeeva in Sun TV’s prime-time hit ‘Anbe Vaa’.',
    filterType: 'Television',
    imagePlaceholderId: 'tv-academy'
  },
  {
    id: 'a2',
    title: 'Madras Film Fans Association Award',
    category: 'Best Comedy Actor (Ensemble)',
    year: '2019',
    description: 'Commended for high-energy performance and comic timing alongside Yogi Babu in the theatrical comedy ‘Gurkha’.',
    filterType: 'Film',
    imagePlaceholderId: 'film-fans'
  },
  {
    id: 'a3',
    title: 'South Indian OTT Awards',
    category: 'Breakthrough Performance of the Year',
    year: '2020',
    description: 'Honors for his portrayal of Constable Kathir in the critically acclaimed crime thriller series ‘Auto Shankar’.',
    filterType: 'Digital',
    imagePlaceholderId: 'ott-awards'
  },
  {
    id: 'a4',
    title: 'Chennai Indie Music Awards',
    category: 'Best Independent Lyricist & Singer',
    year: '2022',
    description: 'Recognized for outstanding vocal performance and meaningful lyrics in independent Tamil acoustic folk compositions.',
    filterType: 'Music',
    imagePlaceholderId: 'indie-music'
  },
  {
    id: 'a5',
    title: 'Kalaimamani Special Recognition',
    category: 'State Youth Icon Award',
    year: '2023',
    description: 'Awarded by the cultural department for exceptional versatility and contribution across television, theatre, and films.',
    filterType: 'Special',
    imagePlaceholderId: 'kalaimamani'
  }
];
