import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',

  // Make the URL /post/<file-name>/ instead of /post/folder/file/
slug: ({ id }) => id.split('/').pop()!.replace(/\.(md|mdx)$/, ''),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      draft: z.boolean().default(false),
      // cover image lives next to the .mdx file
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { posts };
