// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.helios-hilfen.de',
  // Unterseiten als impressum.html statt impressum/index.html bauen:
  // Cloudflare liefert sie dann direkt unter /impressum aus.
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
