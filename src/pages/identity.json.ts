import type { APIRoute } from 'astro';
import { site } from '../content/site';
import { deliveryReport } from '../core/validate';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify({
    canonicalName: site.canonicalName,
    publicName: site.name,
    role: site.role,
    officialUrl: site.url,
    location: site.location,
    variants: site.searchVariants,
    officialProfiles: site.social.filter((item) => item.state === 'confirmed' && item.url && /^https?:\/\//.test(item.url)).map((item) => ({ label: item.label, platform: item.platform, url: item.url })),
    lifecycle: site.lifecycle,
    completion: deliveryReport(),
    works: site.works.map((work) => ({ id: work.id, title: work.title, aliases: work.aliases })),
  }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
