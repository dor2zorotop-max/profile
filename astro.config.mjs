import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';
export default defineConfig({
  site: process.env.SITE_URL || 'https://dor2zorotop-max.github.io',
  base,
  output: 'static',
});
