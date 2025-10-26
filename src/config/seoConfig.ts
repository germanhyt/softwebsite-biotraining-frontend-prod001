export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
  };
}

export const defaultSEO: SEOConfig = {
  title: 'Biotraining Academy | Cursos de Biotecnología y Ciencias de la Salud',
  description: 'Potencia tus conocimientos con cursos especializados en biotecnología y ciencias de la salud. Docentes expertos, certificación reconocida y metodología práctica.',
  canonical: 'https://www.biotraining.pe',
  og: {
    title: 'Biotraining Academy - Formación Profesional en Biotecnología',
    description: 'Impulsa tu carrera en biotecnología con formación de nivel profesional. Cursos virtuales en vivo con expertos del sector.',
    image: '/og-image.jpg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@biotraining',
    creator: '@biotraining',
  },
};

export const pageSEO = {
  home: {
    title: 'Biotraining Academy | Impulsa tu carrera en biotecnología',
    description: 'Contamos con cursos especializados, docentes expertos y certificación reconocida. Aprende biotecnología molecular, qPCR, bases de datos biológicas y más.',
  },
  cursos: {
    title: 'Nuestros Cursos | Biotraining Academy',
    description: 'Descubre nuestra oferta de cursos en biotecnología: qPCR, diseño de primers, bases de datos biológicas y diagnóstico molecular POC.',
  },
  nosotros: {
    title: 'Conócenos | Biotraining Academy',
    description: 'Somos un equipo de profesionales comprometidos con la excelencia en la formación biotecnológica y ciencias de la salud.',
  },
  contacto: {
    title: 'Contáctanos | Biotraining Academy',
    description: 'Escríbenos para conocer más sobre nuestros cursos y capacitaciones. Estamos aquí para ayudarte a potenciar tu perfil profesional.',
  },
  empresas: {
    title: 'Cursos para Empresas | Biotraining Academy',
    description: 'Formación integral para que tu equipo domine herramientas, equipos y procedimientos clave en salud y biotecnología.',
  },
};
