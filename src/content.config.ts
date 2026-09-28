import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.union([
  z.string(),
  z.object({
    de: z.string(),
    en: z.string(),
    es: z.string(),
  }),
]);

const projects = defineCollection({
  loader: glob({
    pattern: '*/project.md',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: localized,
    description: localized.optional(),
    category: z.enum([
      'portraits',
      'personal-branding',
      'teams',
      'editorial',
      'other',
    ]),
    location: z.string().optional(),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    layout: z
      .enum(['editorial', 'grid', 'masonry', 'hero-grid', 'full-width', 'salon'])
      .default('editorial'),
    seoTitle: localized.optional(),
    seoDescription: localized.optional(),
    /** Optional alt/caption keyed by filename (e.g. "01.webp") */
    captions: z
      .record(
        z.string(),
        z.object({
          de: z.string(),
          en: z.string(),
          es: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { projects };
