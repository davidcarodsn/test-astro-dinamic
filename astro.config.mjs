import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  root: 'dist',
  publicDir: 'public',
  compressHTML: true,
  integrations: [react()],

});