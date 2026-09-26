import { site } from '../content/site';

const isHttpUrl = (value?: string) => Boolean(value && /^https?:\/\//.test(value));

export function deliveryReport() {
  const pending: string[] = [];
  if (site.author.photoState === 'pending') pending.push('Foto real del autor');
  if (site.author.bioState === 'pending') pending.push('Biografía confirmada');
  if (site.featuredBook.coverState === 'pending') pending.push('Portada real');
  if (site.featuredBook.purchaseState === 'pending') pending.push('Enlace de compra confirmado');
  for (const [label, state] of Object.entries(site.featuredBook.editorialState)) {
    if (state === 'pending') pending.push(`Dato editorial: ${label}`);
  }
  if (site.emailState === 'pending') pending.push('Correo de contacto confirmado');
  for (const item of site.social) if (item.state === 'pending') pending.push(`Enlace de ${item.label}`);
  if (site.activityState === 'pending') pending.push('Actividad revisada');
  return {
    infrastructure: site.lifecycle.infrastructure,
    delivery: site.lifecycle.delivery,
    pending,
    hasUnresolvedItems: pending.length > 0,
    canBeMarkedFinished: false,
    note: 'La revisión visual, pruebas de enlaces y aprobación humana deben completarse por separado. Build correcto no significa TERMINADA.',
  };
}

export function validateSite() {
  const errors: string[] = [];
  const warnings: string[] = [];
  if (!site.name.trim()) errors.push('Falta el nombre público del autor.');
  if (!isHttpUrl(site.url) || site.url === 'https://example.com') warnings.push('URL oficial pendiente de configurar.');
  if (!site.featuredBook) errors.push('Debe existir una obra principal.');
  if (!site.featuredBook?.synopsis) warnings.push('Sinopsis pendiente.');
  if (!site.author.photo) warnings.push('Foto pendiente.');
  if (!site.featuredBook?.cover) warnings.push('Portada pendiente.');
  const report = deliveryReport();
  if (report.hasUnresolvedItems) warnings.push(...report.pending.map((item) => `${item}: Pendiente.`));
  return { errors, warnings, ok: errors.length === 0, lifecycle: report };
}

export function assertPublishable() {
  const result = validateSite();
  if (!result.ok) throw new Error(`Sitio no construible:\n- ${result.errors.join('\n- ')}`);
  return result;
}
