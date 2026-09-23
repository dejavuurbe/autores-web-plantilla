import type { APIRoute } from 'astro';
import { site } from '../content/site';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(site.works.map((work) => ({
    id: work.id,
    title: work.title,
    aliases: work.aliases,
    synopsis: work.synopsis,
    genre: work.genre,
    year: work.year,
    pages: work.pages,
    isbn: work.isbn,
    publisher: work.publisher,
    sampleUrl: work.sampleUrl || undefined,
    purchaseLinks: work.purchaseLinks.filter((item) => /^https?:\/\//.test(item.url)),
    featured: work.featured,
  })), null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
