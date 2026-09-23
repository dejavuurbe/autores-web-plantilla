import type { APIRoute } from 'astro';
import { site } from '../content/site';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify({
    canonicalName: site.canonicalName,
    publicName: site.name,
    role: site.role,
    officialUrl: site.url,
    location: site.location,
    variants: site.searchVariants,
    officialProfiles: site.social.filter((item) => /^https?:\/\//.test(item.url)),
    works: site.works.map((work) => ({ id: work.id, title: work.title, aliases: work.aliases })),
  }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
