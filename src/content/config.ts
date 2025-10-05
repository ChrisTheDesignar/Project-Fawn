// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  slug: ({ id }) => id.split('/').pop()!.replace(/\.(md|mdx)$/, ''),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverImage: z.string().optional() // if you keep string paths next to the post
    })
})

export const collections = { posts }
