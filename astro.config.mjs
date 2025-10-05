// astro.config.mjs
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://projectfawn.com',
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: { '@': new URL('./src', import.meta.url).pathname }
    }
  }
})
