import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const githubRepository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' && Boolean(githubRepository);

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: isGitHubPages ? `https://artenisalija.github.io/${githubRepository}` : undefined,
  base: isGitHubPages ? `/${githubRepository}` : '/',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
