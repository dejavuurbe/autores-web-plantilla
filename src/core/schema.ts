import { site } from '../content/site';

const validExternalUrls = (urls: string[]) =>
  urls.filter((url) => url && url !== '#' && /^https?:\/\//.test(url));

const authorId = `${site.url}#author`;

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': authorId,
    name: site.canonicalName || site.name,
    alternateName: site.searchVariants.length ? site.searchVariants : undefined,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    sameAs: validExternalUrls(site.social.map((item) => item.url)),
  };
}

export function worksSchema() {
  return site.works.map((book) => ({
    '@type': 'Book',
    '@id': `${site.url}#${book.id}`,
    name: book.title,
    alternateName: book.aliases?.length ? book.aliases : undefined,
    author: { '@id': authorId },
    isbn: book.isbn || undefined,
    datePublished: book.year || undefined,
    publisher: book.publisher || undefined,
    numberOfPages: book.pages ? Number(book.pages) || undefined : undefined,
    genre: book.genre || undefined,
    description: book.synopsis,
    url: site.url,
  }));
}

export function identityGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema(),
      ...worksSchema(),
      {
        '@type': 'WebSite',
        '@id': `${site.url}#website`,
        url: site.url,
        name: `${site.canonicalName} — sitio oficial`,
        about: { '@id': authorId },
      },
    ],
  };
}

// Compatibilidad con páginas existentes.
export function bookSchema() {
  return { '@context': 'https://schema.org', ...worksSchema()[0] };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
