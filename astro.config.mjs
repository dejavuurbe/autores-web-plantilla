import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
});
