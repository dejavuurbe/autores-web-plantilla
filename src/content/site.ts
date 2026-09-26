export type SiteLevel = 1 | 2 | 3;
export type PendingState = 'confirmed' | 'pending' | 'omitted';
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x' | 'linkedin' | 'web';

type Link = { label: string; url: string };
type Social = { platform: SocialPlatform; label: string; state: PendingState; url?: string };
type ActivityItem = { title: string; type: string; source: string; url: string; description: string };

const works = [
  {
    id: 'obra-principal',
    title: 'Obra principal — Pendiente de confirmación',
    subtitle: '',
    cover: '/images/portada-placeholder.svg',
    coverState: 'pending' as PendingState,
    synopsis: 'Sinopsis pendiente de confirmación.',
    genre: '',
    year: '',
    pages: '',
    isbn: '',
    publisher: '',
    editorialState: {
      genre: 'pending' as PendingState,
      year: 'pending' as PendingState,
      pages: 'pending' as PendingState,
      isbn: 'pending' as PendingState,
      publisher: 'pending' as PendingState,
    },
    sampleUrl: '',
    purchaseLinks: [] as Link[],
    purchaseState: 'pending' as PendingState,
    featured: true,
    aliases: [] as string[],
  },
];

export const site = {
  level: 1 as SiteLevel,
  name: 'Nombre público — Pendiente de confirmación',
  canonicalName: '',
  searchVariants: [] as string[],
  role: 'Identidad autoral pendiente de confirmación',
  tagline: 'Presentación pendiente de confirmación.',
  description: 'Sitio en construcción. Los datos pendientes se identificarán de forma visible y no se completarán con información inventada.',
  url: 'https://example.com',
  email: '',
  emailState: 'pending' as PendingState,
  location: '',
  footerLine: 'Sitio de autor en construcción',
  credit: {
    enabled: true,
    label: 'Diseño y desarrollo web por',
    url: 'https://dejavuurbe.github.io/pierre-menard-web/proyecto/',
  },
  social: [
    { platform: 'instagram', label: 'Instagram', state: 'pending' },
    { platform: 'facebook', label: 'Facebook', state: 'pending' },
  ] as Social[],
  author: {
    shortBio: 'Biografía breve pendiente de confirmación.',
    longBio: 'Biografía pendiente de confirmación.',
    photo: '/images/autor-placeholder.svg',
    photoState: 'pending' as PendingState,
    bioState: 'pending' as PendingState,
  },

  works,
  featuredBook: works.find((work) => work.featured) ?? works[0],

  activity: [] as ActivityItem[],
  activityState: 'pending' as PendingState,

  lifecycle: {
    infrastructure: 'PENDIENTE DE PUBLICACIÓN',
    delivery: 'EN CONSTRUCCIÓN',
  },

  recovery: {
    incompleteRecall: [] as string[],
    spellingVariants: [] as string[],
    disambiguationNotes: [] as string[],
  },

  faq: [] as { question: string; answer: string }[],
};

export type SiteData = typeof site;
