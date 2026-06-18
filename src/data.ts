import { Movie, WebSeries, VideoItem, GalleryItem, MediaItem, TVSerial, Award } from './types';

import aanandhaRaagamImg from '../assets/images/serialImage/Aanandha Raagam Sun tv.jpg';
import chandralekhaImg from '../assets/images/serialImage/Chandralekha Sun tv.jpg';
import kuladeivamImg from '../assets/images/serialImage/Kuladeivam sun tv.jpg';
import mahalakshmiImg from '../assets/images/serialImage/Mahalakshmi sun tv.jpg';
import saravananMeenakshiImg from '../assets/images/serialImage/Saravanan Meenakshi Vijay TV.jpg';
import valliImg from '../assets/images/serialImage/Valli Sun tv.jpg';

const imageModules = import.meta.glob('../assets/images/galleryImages/*.{jpg,jpeg,png,webp}', { eager: true });
const dynamicGalleryImages: GalleryItem[] = [];
const categories = ['Movies', 'Events', 'Behind the Scenes', 'Television', 'Promotional Shoots'] as const;

let i = 0;
for (const path in imageModules) {
  const mod = imageModules[path] as any;
  const imageUrl = mod.default || mod;
  const category = categories[i % categories.length];
  dynamicGalleryImages.push({
    id: `dyn_g_${i}`,
    category,
    imageUrl,
    alt: `Gallery Image ${i}`,
    title: `Gallery Capture ${i + 1}`
  });
  i++;
}

const videoModules = import.meta.glob('../assets/videos/*.{mp4,webm,ogg}', { eager: true });
const dynamicLocalVideos: VideoItem[] = [];

let v_i = 0;
for (const path in videoModules) {
  const mod = videoModules[path] as any;
  const videoUrl = mod.default || mod;
  dynamicLocalVideos.push({
    id: `local_v_${v_i}`,
    title: `Featured Capture ${v_i + 1}`,
    localUrl: videoUrl,
    category: 'Showreel',
    duration: ''
  });
  v_i++;
}

export const MOVIES: Movie[] = [
  {
    id: 'm1',
    title: 'Kaatrin Mozhi',
    role: 'Supporting Actor / actor',
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
    title: 'Aanandha Raagam',
    channel: 'Sun TV',
    genre: 'Family Drama',
    year: '2022 - Present',
    role: 'Supporting Actor',
    description: 'A popular family drama where Jack delivered an impactful supporting performance.',
    imageUrl: aanandhaRaagamImg
  },
  {
    id: 'tv2',
    title: 'Chandralekha',
    channel: 'Sun TV',
    genre: 'Drama',
    year: '2014 - 2022',
    role: 'Key Cast Member',
    description: 'One of the longest-running Tamil soap operas featuring complex family dynamics and intense plot twists.',
    imageUrl: chandralekhaImg
  },
  {
    id: 'tv3',
    title: 'Kuladeivam',
    channel: 'Sun TV',
    genre: 'Family Drama',
    year: '2015 - 2018',
    role: 'Ensemble Cast',
    description: 'A hit television series revolving around the lives of an elderly couple and their family.',
    imageUrl: kuladeivamImg
  },
  {
    id: 'tv4',
    title: 'Mahalakshmi',
    channel: 'Sun TV',
    genre: 'Drama',
    year: '2017 - 2019',
    role: 'Supporting Role',
    description: 'A classic television narrative showcasing strong performances in a multi-generational storyline.',
    imageUrl: mahalakshmiImg
  },
  {
    id: 'tv5',
    title: 'Saravanan Meenakshi',
    channel: 'Vijay TV',
    genre: 'Romance / Drama',
    year: '2011 - 2018',
    role: 'Notable Character',
    description: 'A wildly popular romantic drama that defined a generation of television viewing on Vijay TV.',
    imageUrl: saravananMeenakshiImg
  },
  {
    id: 'tv6',
    title: 'Valli',
    channel: 'Sun TV',
    genre: 'Drama',
    year: '2012 - 2019',
    role: 'Cast Member',
    description: 'A dramatic tale of resilience and family duties, standing as one of Sun TV\'s flagship programs.',
    imageUrl: valliImg
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Gurkha Movie | Full Comedy Scene | Part 1',
    youtubeId: 'dGXJ1rc0RtA',
    thumbnailUrl: 'https://img.youtube.com/vi/dGXJ1rc0RtA/hqdefault.jpg',
    category: 'Showreel',
    duration: '4:21'
  },
  {
    id: 'v2',
    title: 'Asuraguru Movie Part 1 | Vikram Prabhu, Yogi Babu',
    youtubeId: '9jHaIAFh0LM',
    thumbnailUrl: 'https://img.youtube.com/vi/9jHaIAFh0LM/hqdefault.jpg',
    category: 'Showreel',
    duration: '6:18'
  },
  {
    id: 'v3',
    title: 'If Kaatrin Mozhi was a thriller movie',
    youtubeId: 'Kn6txoX7q3w',
    thumbnailUrl: 'https://img.youtube.com/vi/Kn6txoX7q3w/hqdefault.jpg',
    category: 'Showreel',
    duration: '1:44'
  },
  ...[
    'lOCxLaCwTgY', 'fWIFCFFb4PU', 'sdcsPN7YNso', '2p5IEH2NU5k', 'pFbQNsmhyz8',
    'zce9ubIR2Vc', '-wacO822eNs', 'a2LpoYhZWZU', 'n7PBNCMMt70', 'HARpiJxJB38',
    'Bcwe9TgvuRY', 's4DzbUWJIb8', '-l48SP1D0F0', '2KXMITa8w9Q', '4DRpHW5nHYg',
    'SG6JM5TeXMU', 'HPXCGjdEA6g', '2Mew4Qyr7OU', 'eDZ0uUbfeTI'
  ].map((id, idx) => ({
    id: `v${idx + 4}`,
    title: `Featured Media ${idx + 1}`,
    youtubeId: id,
    thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    category: 'Showreel',
    duration: ''
  })),
  ...dynamicLocalVideos
];

export const GALLERY: GalleryItem[] = [
  ...dynamicGalleryImages
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
  { label: 'Feature Films', value: '20+' },
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
    category: 'Best Independent actor & actor',
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
