import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dbscan.org',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
