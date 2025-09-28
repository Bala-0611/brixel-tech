
// FIX: Imported ReactElement to correctly type component props without relying on the global JSX namespace.
import type { ReactElement } from 'react';

export interface Service {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}