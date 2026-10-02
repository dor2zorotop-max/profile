import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().default(false),
    locale: z.enum(['zh', 'en']).default('zh'),
    subtitle: z.string().optional(),
    year: z.string().optional(),
    period: z.string().optional(),
    status: z.string().optional(),
    role: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    github: z.string().optional(),
    paper: z.string().optional(),
    demo: z.string().optional(),
    video: z.string().optional(),
    videoPoster: z.string().optional(),
  }),
});

export const collections = { projects };
