const works = [
  {
    id: 'obra-principal',
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
    sampleUrl: '',
    purchaseLinks: [
      { label: 'Adquirí tu ejemplar', url: '#' },
    ],
    featured: true,
  },
];

export const site = {
  name: 'Nombre del autor',
  canonicalName: 'Nombre del autor',
  searchVariants: [] as string[],
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

  // El modelo admite varias obras desde el inicio. Clase 1 muestra una como principal;
  // las clases superiores pueden exponer más sin cambiar el modelo de identidad.
  works,
  featuredBook: works.find((work) => work.featured) ?? works[0],

  // Clase 1: seleccionar hasta tres hitos por valor estratégico, no por orden cronológico.
  activity: [
    {
      title: 'Actividad, entrevista o antecedente destacado',
      type: 'Actividad',
      source: 'Fuente / institución',
      url: '#',
      description: 'Contexto breve y verificable sobre el antecedente.',
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
