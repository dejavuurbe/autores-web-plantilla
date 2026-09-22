export const site = {
  name: 'Nombre del autor',
  role: 'Escritor/a',
  tagline: 'Una frase breve que exprese su identidad autoral.',
  description:
    'Descripción clara del autor, su obra y los temas centrales de su trabajo.',
  url: 'https://example.com',
  email: 'contacto@example.com',
  location: 'Ciudad, País',
  social: [
    { label: 'Instagram', url: '#' },
    { label: 'Facebook', url: '#' },
  ],
  author: {
    shortBio:
      'Biografía breve para la portada. Debe responder rápidamente quién es el autor y qué escribe.',
    longBio:
      'Biografía extendida. Sustituir por información verificada, trayectoria, publicaciones y actividad cultural relevante.',
    photo: '/images/autor-placeholder.svg',
  },
  featuredBook: {
    title: 'Título de la obra',
    subtitle: 'Subtítulo o frase de presentación',
    cover: '/images/portada-placeholder.svg',
    synopsis:
      'Sinopsis breve orientada al lector. Debe explicar con claridad la propuesta del libro sin convertirse en una descripción genérica.',
    genre: 'Género',
    year: '2026',
    pages: '000',
    isbn: '000-0-00-000000-0',
    publisher: 'Editorial / Independiente',
    buyUrl: '#',
    buyLabel: 'Adquirí tu ejemplar',
  },
  press: [
    {
      title: 'Entrevista o nota destacada',
      source: 'Medio',
      url: '#',
      description: 'Contexto breve sobre la aparición.',
    },
  ],
  faq: [
    {
      question: '¿Quién es Nombre del autor?',
      answer:
        'Respuesta directa y verificable, pensada también para buscadores y sistemas de respuesta.',
    },
    {
      question: '¿De qué trata su obra principal?',
      answer:
        'Respuesta breve que resume la propuesta de la obra sin reemplazar la sinopsis completa.',
    },
  ],
};

export type SiteData = typeof site;
