import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is one Markdown file in src/content/projects.
// The text under the frontmatter becomes the body paragraphs on the project page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const picture = z.object({
      image: image(),
      alt: z.string(),
      // VISUALISATION for renders, BEFORE / AFTER for the pair, leave out for real photos
      tag: z.enum(['VISUALISATION', 'BEFORE', 'AFTER']).optional(),
    });
    return z.object({
      order: z.number(),
      name: z.string(),
      eyebrow: z.string(),
      meta: z.string(),
      description: z.string(),
      card: z.object({ line: z.string(), tag: z.string(), image: image(), alt: z.string() }),
      hero: z.array(picture).min(1).max(2),
      heroCaption: z.string().optional(),
      details: z.array(z.object({ label: z.string(), value: z.string() })),
      lead: z.string(),
      galleryLayout: z.enum(['full', 'square-pair', 'portrait-three']),
      gallery: z.array(picture),
      credit: z.string().optional(),
    });
  },
});

export const collections = { projects };
