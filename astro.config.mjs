// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://studiokuona.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
