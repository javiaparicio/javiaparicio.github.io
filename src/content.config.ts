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
    /** Optional caption keyed by filename. `name` if it is the same in every language; otherwise de/en/es. Optional https `url` turns the caption into a link. */
    captions: z
      .record(
        z.string(),
        z.object({
          name: z.string().optional(),
          de: z.string().optional(),
          en: z.string().optional(),
          es: z.string().optional(),
          url: z
            .string()
            .regex(/^https:\/\//, 'Caption url must start with https://')
            .optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { projects };
