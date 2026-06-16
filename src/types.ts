export interface Movie {
  id: string;
  title: string;
  role: string;
  year: string;
  director?: string;
  genre: 'Action' | 'Drama' | 'Comedy' | 'Thriller' | 'All';
  description: string;
  posterUrl: string;
  rating?: string;
}

export interface WebSeries {
  id: string;
  title: string;
  role: string;
  year: string;
  platform: string;
  description: string;
  roleHighlight: string;
  posterUrl: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl: string;
  category: 'Showreel' | 'Song' | 'Interview';
  duration?: string;
}

export interface GalleryItem {
  id: string;
  category: 'Movies' | 'Events' | 'Behind the Scenes' | 'Television' | 'Promotional Shoots';
  imageUrl: string;
  alt: string;
  title?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  source: string;
  date: string;
  description: string;
  url?: string;
  type: 'Interview' | 'Award' | 'Press Release' | 'Event';
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface ContactSubmission extends ContactFormInput {
  id: string;
  timestamp: string;
  status: 'new' | 'read' | 'resolved';
}

export interface TVSerial {
  id: string;
  title: string;
  channel: 'Sun TV' | 'Vijay TV' | 'Zee Tamil' | 'Colors TV' | 'Raj TV';
  genre: string;
  year: string;
  role: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  filterType: 'Television' | 'Film' | 'Digital' | 'Music' | 'Special';
  imagePlaceholderId: string;
}

