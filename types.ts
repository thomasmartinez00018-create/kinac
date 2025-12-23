
import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  iconUrl?: string; // New field for custom images/emojis
  category: 'clinical' | 'group';
  promo?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
