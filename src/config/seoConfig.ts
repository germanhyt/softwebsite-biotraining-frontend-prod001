export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'BioTraining - Capacitación Profesional',
  description: 'Plataforma líder en capacitación profesional y desarrollo de habilidades. Cursos especializados para impulsar tu carrera.',
  keywords: [
    'capacitación',
    'entrenamiento',
    'cursos profesionales',
    'desarrollo profesional',
    'biotraining',
    'educación online',
  ],
  author: 'BioTraining',
  siteUrl: 'https://biotraining.com',
  siteName: 'BioTraining',
  locale: 'es_ES',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterSite: '@biotraining',
  twitterCreator: '@biotraining',
};

export interface PageSEO {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

export const getPageSEO = (pageSEO: PageSEO = {}): SEOConfig & PageSEO => {
  return {
    ...defaultSEO,
    ...pageSEO,
    title: pageSEO.title ? `${pageSEO.title} | ${defaultSEO.siteName}` : defaultSEO.title,
  };
};
