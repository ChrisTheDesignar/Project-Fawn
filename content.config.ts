import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.string(),
    author:      z.string(),
    slug:        z.string(),              // ← required!
    category:    z.string().optional(),
    tags:        z.array(z.string()).optional(),
    image:       z.string().optional(),
    draft:       z.boolean().optional(),
  }),
});

export const collections = {
  posts,
};


