export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'technical' | 'soft';
}

export interface Experience {
  title: string;
  period: string;
  company?: string;
  description?: string;
}

export interface Education {
  degree: string;
  period: string;
  grade?: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}