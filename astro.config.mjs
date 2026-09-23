import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS && repository);
const site = process.env.SITE_URL || (isGitHubPages
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${repository}/`
  : 'https://example.com');
const base = process.env.BASE_PATH || (isGitHubPages ? `/${repository}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
});
