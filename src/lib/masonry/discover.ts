import type { ImageMetadata } from 'astro';
import { compareNumericDesc } from './sort.ts';

export type DiscoveredImage = {
  filename: string;
  path: string;
  src: ImageMetadata;
};

type GlobModule = { default: ImageMetadata };
type GlobMap = Record<string, () => Promise<GlobModule>>;
type EagerGlobMap = Record<string, GlobModule>;

function filenameFromPath(path: string): string {
  return path.replace(/^.*\//, '');
}

function isWebpFilename(filename: string): boolean {
  return /\.webp$/i.test(filename);
}

/**
 * Discover WebP images from an `import.meta.glob` map, sort numeric descending,
 * and load Astro ImageMetadata (includes intrinsic width/height at build time).
 *
 * Vite requires a static glob string at the call site, e.g.:
 * ```ts
 * const modules = import.meta.glob<{ default: ImageMetadata }>(
 *   '/src/content/projects/portraits/images/*.{webp}',
 * );
 * const images = await discoverNumericWebp(modules);
 * ```
 */
export async function discoverNumericWebp(
  modules: GlobMap | EagerGlobMap,
): Promise<DiscoveredImage[]> {
  const entries = Object.keys(modules)
    .map((path) => ({ path, filename: filenameFromPath(path) }))
    .filter((e) => isWebpFilename(e.filename))
    .sort((a, b) => compareNumericDesc(a.filename, b.filename));

  const images: DiscoveredImage[] = [];
  for (const entry of entries) {
    const loader = modules[entry.path];
    if (!loader) continue;
    const mod = typeof loader === 'function' ? await loader() : loader;
    images.push({
      filename: entry.filename,
      path: entry.path,
      src: mod.default,
    });
  }
  return images;
}
