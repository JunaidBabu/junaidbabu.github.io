// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://junaidbabu.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      customPages: [
        'https://junaidbabu.github.io/alphabets-vibe/',
        'https://junaidbabu.github.io/Tic-Tac-Vibe/',
        'https://junaidbabu.github.io/Phonics-Buddy/'
      ]
    })
  ]
});