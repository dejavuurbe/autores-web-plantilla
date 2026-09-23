export type SiteLevel = 1 | 2 | 3;

const works = [
  {
    id: 'obra-principal',
    title: 'Título de la obra',
    subtitle: 'Subtítulo o frase de presentación',
    cover: '/images/portada-placeholder.svg',
    synopsis: 'Sinopsis breve orientada al lector. Debe explicar con claridad la propuesta del libro sin convertirse en una descripción genérica.',
    genre: 'Género',
    year: '2026',
    pages: '000',
    isbn: '000-0-00-000000-0',
    publisher: 'Editorial / Independiente',
    sampleUrl: '',
    purchaseLinks: [{ label: 'Adquirí tu ejemplar', url: '#' }],
    featured: true,
    aliases: [] as string[],
  },
];

export const site = {
  level: 1 as SiteLevel,
  name: 'Nombre del autor',
  canonicalName: 'Nombre del autor',
  searchVariants: [] as string[],
  role: 'Escritor/a',
  tagline: 'Una frase breve que exprese su identidad autoral.',
  description: 'Descripción clara del autor, su obra y los temas centrales de su trabajo.',
  url: 'https://example.com',
  email: 'contacto@example.com',
  location: 'Ciudad, País',
  social: [
    { label: 'Instagram', url: '#' },
    { label: 'Facebook', url: '#' },
  ],
  author: {
    shortBio: 'Biografía breve para la portada. Debe responder rápidamente quién es el autor y qué escribe.',
    longBio: 'Biografía extendida. Sustituir por información verificada, trayectoria, publicaciones y actividad cultural relevante.',
    photo: '/images/autor-placeholder.svg',
  },

  // Núcleo escalable: el modelo conserva todos los datos aunque el nivel visible muestre una selección.
  works,
  featuredBook: works.find((work) => work.featured) ?? works[0],

  activity: [
    {
      title: 'Actividad, entrevista o antecedente destacado',
      type: 'Actividad',
      source: 'Fuente / institución',
      url: '#',
      description: 'Contexto breve y verificable sobre el antecedente.',
    },
  ],

  // Mapa derivado del diagnóstico. No se muestra como texto ni se usa para keyword stuffing.
  recovery: {
    incompleteRecall: [] as string[],
    spellingVariants: [] as string[],
    disambiguationNotes: [] as string[],
  },

  faq: [
    {
      question: '¿Quién es Nombre del autor?',
      answer: 'Respuesta directa y verificable, pensada también para buscadores y sistemas de respuesta.',
    },
    {
      question: '¿De qué trata su obra principal?',
      answer: 'Respuesta breve que resume la propuesta de la obra sin reemplazar la sinopsis completa.',
    },
  ],
};

export type SiteData = typeof site;
