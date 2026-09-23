import { site } from '../content/site';

const realUrl = (value: string) => /^https?:\/\//.test(value) && value !== 'https://example.com';

export function validateSite() {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!site.canonicalName || site.canonicalName === 'Nombre del autor') errors.push('Falta el nombre canónico definitivo.');
  if (!realUrl(site.url)) errors.push('Falta configurar el dominio oficial.');
  if (!site.featuredBook) errors.push('Debe existir una obra principal.');
  if (site.featuredBook?.isbn?.startsWith('000-')) warnings.push('ISBN de ejemplo pendiente de reemplazo o eliminación.');
  if (!site.featuredBook?.synopsis) errors.push('La obra principal necesita una sinopsis.');
  if (!site.author.photo || site.author.photo.includes('placeholder')) warnings.push('Foto definitiva del autor pendiente.');
  if (!site.featuredBook?.cover || site.featuredBook.cover.includes('placeholder')) warnings.push('Portada definitiva pendiente.');

  const purchase = site.featuredBook?.purchaseLinks?.filter((item) => /^https?:\/\//.test(item.url)) ?? [];
  if (!purchase.length) warnings.push('No hay enlace real de compra/acceso para la obra principal.');

  return { errors, warnings, ok: errors.length === 0 };
}

export function assertPublishable() {
  const result = validateSite();
  if (!result.ok) throw new Error(`Sitio no publicable:\n- ${result.errors.join('\n- ')}`);
  return result;
}
