import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string().default('Branding'),
    author: z.string().default('Eiko Visual'),
    authorRole: z.string().default('Brand Strategist'),
    authorAvatar: z.string().default('/assets/blog/author-avatar.png'),
    featuredImage: z.string(),
    ctaHeading: z.string().optional(),
    ctaDescription: z.string().optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string().optional(),
    slug: z.string(),
    cardTitle: z.string(),
    cardSummary: z.string(),
    cardImage: z.string(),
    cardTags: z.array(z.string()),
    order: z.number(),
    featuredOnHome: z.boolean().default(false),
    yearBadge: z.string().default('©2025'),
    heroTitlePrefix: z.string(),
    heroTitleHighlight: z.string(),
    topGallery: z.array(z.string()),
    summaryText: z.string(),
    clientName: z.string(),
    clientScope: z.string(),
    projectDate: z.string(),
    middleGalleryRow1: z.array(z.string()),
    challengeText: z.string(),
    deliverables: z.array(z.string()),
    middleGalleryRow2: z.array(z.string()).optional(),
    solutionHeading: z.string().default('Solusi Kami'),
    solutionHtml: z.string(),
    valuePoints: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    ctaBadge2: z.string().default('Digital Agency'),
    ctaHeading: z.string(),
    ctaDescription: z.string().optional(),
    relatedArticlesHeadingPrefix: z.string().optional(),
    relatedArticlesHeadingHighlight: z.string().optional(),
    relatedArticleSlugs: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, projects };
