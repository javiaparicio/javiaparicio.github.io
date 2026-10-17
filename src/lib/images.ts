import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import type { Locale } from './i18n';

const IMAGE_GLOB = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/projects/*/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
);

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

/** Natural sort: 2 before 10, case-insensitive, numeric-aware. */
export function naturalCompare(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

/** Reverse natural sort: portrait_030 before portrait_029. */
export function naturalCompareDesc(a: string, b: string): number {
  return naturalCompare(b, a);
}

function parseGlobPath(path: string): { slug: string; filename: string } | null {
  const match = path.match(
    /\/src\/content\/projects\/([^/]+)\/images\/([^/]+)$/,
  );
  if (!match) return null;
  const [, slug, filename] = match;
  if (!IMAGE_EXT.test(filename)) return null;
  return { slug, filename };
}

export type ProjectImage = {
  filename: string;
  src: ImageMetadata;
  alt: string;
  /** Sanitized caption HTML (plain text, or a single https link). */
  captionHtml: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export type Caption = {
  name?: string;
  de?: string;
  en?: string;
  es?: string;
  url?: string;
};

function captionLabel(caption: Caption | undefined, locale: Locale): string {
  if (!caption) return '';
  if (caption.name?.trim()) return caption.name.trim();
  return (caption[locale] || caption.de || '').trim();
}

/** Plain caption, or the same text wrapped in an https link. */
export function renderCaptionHtml(label: string, url?: string): string {
  const text = escapeHtml(label.trim());
  if (!text) return '';
  if (url && /^https:\/\//i.test(url)) {
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  }
  return text;
}

export function listProjectImagePaths(slug: string): string[] {
  const paths = Object.keys(IMAGE_GLOB)
    .map(parseGlobPath)
    .filter((p): p is { slug: string; filename: string } => !!p && p.slug === slug)
    .map((p) => p.filename)
    .sort(naturalCompareDesc);
  return paths;
}

export async function getProjectImages(
  slug: string,
  locale: Locale,
  captions?: Record<string, Caption>,
  fallbackAlt = '',
): Promise<ProjectImage[]> {
  const entries: { filename: string; path: string }[] = [];

  for (const [path, _loader] of Object.entries(IMAGE_GLOB)) {
    const parsed = parseGlobPath(path);
    if (!parsed || parsed.slug !== slug) continue;
    entries.push({ filename: parsed.filename, path });
  }

  entries.sort((a, b) => naturalCompareDesc(a.filename, b.filename));

  const images: ProjectImage[] = [];
  for (const entry of entries) {
    const mod = await IMAGE_GLOB[entry.path]!();
    const caption = captions?.[entry.filename];
    const label = captionLabel(caption, locale) || fallbackAlt.trim();
    const captionHtml = renderCaptionHtml(label, caption?.url);
    const cleanAlt = label;
    images.push({
      filename: entry.filename,
      src: mod.default,
      alt: cleanAlt,
      captionHtml,
    });
  }
  return images;
}

export function resolveCover(
  images: ProjectImage[],
  coverFilename?: string,
): ProjectImage | undefined {
  if (!images.length) return undefined;
  if (coverFilename) {
    const found = images.find((img) => img.filename === coverFilename);
    if (found) return found;
  }
  return images[0];
}

export type OptimizedSlide = {
  filename: string;
  alt: string;
  captionHtml: string;
  width: number;
  height: number;
  thumbSrc: string;
  fullSrc: string;
  srcset: string;
};

export async function optimizeGalleryImages(
  images: ProjectImage[],
  options?: { thumbWidths?: number[]; fullWidth?: number },
): Promise<OptimizedSlide[]> {
  const thumbWidths = options?.thumbWidths ?? [400, 800, 1200];
  const fullWidth = options?.fullWidth ?? 2400;

  const slides: OptimizedSlide[] = [];
  for (const image of images) {
    const thumbs = await Promise.all(
      thumbWidths.map((w) =>
        getImage({
          src: image.src,
          width: w,
          format: 'webp',
          quality: 82,
        }),
      ),
    );
    const full = await getImage({
      src: image.src,
      width: fullWidth,
      format: 'webp',
      quality: 85,
    });

    const srcset = thumbs.map((t, i) => `${t.src} ${thumbWidths[i]}w`).join(', ');
    const largest = thumbs[thumbs.length - 1]!;

    slides.push({
      filename: image.filename,
      alt: image.alt,
      captionHtml: image.captionHtml,
      width: image.src.width,
      height: image.src.height,
      thumbSrc: largest.src,
      fullSrc: full.src,
      srcset,
    });
  }
  return slides;
}
