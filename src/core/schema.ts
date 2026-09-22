import { site } from '../content/site';

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    sameAs: site.social.map((item) => item.url).filter((url) => url !== '#'),
  };
}

export function bookSchema() {
  const book = site.featuredBook;
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: { '@type': 'Person', name: site.name },
    isbn: book.isbn,
    datePublished: book.year,
    description: book.synopsis,
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
