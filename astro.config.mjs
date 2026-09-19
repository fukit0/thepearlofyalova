import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export const SITE_URL = 'https://www.thepearlofyalova.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru', 'ar'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
