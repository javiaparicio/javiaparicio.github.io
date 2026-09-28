import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';
import { t } from './i18n';
import {
  getProjectImages,
  optimizeGalleryImages,
  resolveCover,
  type OptimizedSlide,
  type ProjectImage,
} from './images';
import { projectHref } from './routes';

export type ProjectEntry = CollectionEntry<'projects'>;

export async function getAllProjects(includeDrafts = false): Promise<ProjectEntry[]> {
  const all = await getCollection('projects');
  return all
    .filter((p) => includeDrafts || !p.data.draft)
    .sort((a, b) => {
      const da = a.data.date?.getTime() ?? 0;
      const db = b.data.date?.getTime() ?? 0;
      return db - da;
    });
}

export async function getFeaturedProjects(): Promise<ProjectEntry[]> {
  const projects = await getAllProjects();
  return projects.filter((p) => p.data.featured);
}

export async function getProjectBySlug(
  slug: string,
  includeDrafts = false,
): Promise<ProjectEntry | undefined> {
  const projects = await getAllProjects(includeDrafts);
  return projects.find((p) => projectSlug(p) === slug);
}

/** Normalize content-collection id from glob loader (`portraits/project` → `portraits`) */
export function projectSlug(entry: ProjectEntry): string {
  return entry.id.replace(/\/project$/, '').replace(/^\.\//, '');
}

export type ResolvedProject = {
  entry: ProjectEntry;
  slug: string;
  images: ProjectImage[];
  slides: OptimizedSlide[];
  cover?: ProjectImage;
  href: string;
  title: string;
  description: string;
};

export async function resolveProject(
  entry: ProjectEntry,
  locale: Locale,
  fallbackAlt = '',
): Promise<ResolvedProject> {
  const slug = projectSlug(entry);
  const images = await getProjectImages(
    slug,
    locale,
    entry.data.captions,
    fallbackAlt,
  );
  const cover = resolveCover(images, entry.data.cover);
  const slides = await optimizeGalleryImages(images);
  return {
    entry,
    slug,
    images,
    slides,
    cover,
    href: projectHref(slug, locale),
    title: t(entry.data.title, locale),
    description: t(entry.data.description, locale),
  };
}
