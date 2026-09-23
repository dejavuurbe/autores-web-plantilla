import { site } from '../content/site';

const validExternalUrls = (urls: string[]) =>
  urls.filter((url) => url && url !== '#' && /^https?:\/\//.test(url));

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}#author`,
    name: site.canonicalName || site.name,
    alternateName: site.searchVariants.length ? site.searchVariants : undefined,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    sameAs: validExternalUrls(site.social.map((item) => item.url)),
  };
}

export function bookSchema() {
  const book = site.featuredBook;
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${site.url}#${book.id}`,
    name: book.title,
    author: { '@id': `${site.url}#author` },
    isbn: book.isbn || undefined,
    datePublished: book.year || undefined,
    bookEdition: book.publisher || undefined,
    numberOfPages: book.pages ? Number(book.pages) || undefined : undefined,
    genre: book.genre || undefined,
    description: book.synopsis,
    url: site.url,
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
