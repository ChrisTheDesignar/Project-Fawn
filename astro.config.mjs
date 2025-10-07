// astro.config.mjs
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  site: 'https://projectfawn.com',
  integrations: [mdx()],
  // Astro v5 supports top-level alias (preferred)
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  // If you’d rather keep it under Vite, this also works:
  // vite: {
  //   resolve: {
  //     alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  //   }
  // }
})
