import type { MasonryBreakpoint, MasonryGalleryConfig } from './types.ts';

/**
 * Default breakpoints from the gallery brief (container width → columns).
 * Sorted ascending by minWidth.
 */
export const DEFAULT_MASONRY_BREAKPOINTS: MasonryBreakpoint[] = [
  { minWidth: 0, columns: 1 },
  { minWidth: 480, columns: 2 },
  { minWidth: 768, columns: 3 },
  { minWidth: 1024, columns: 4 },
];

export const DEFAULT_MASONRY_GAP_PX = 12;

export const DEFAULT_MASONRY_CONFIG: MasonryGalleryConfig = {
  gap: DEFAULT_MASONRY_GAP_PX,
  breakpoints: DEFAULT_MASONRY_BREAKPOINTS,
  eagerCount: 2,
};

/** Caption band reserved when a figcaption is present (matches gallery caption styles). */
export const CAPTION_RESERVE_PX = 28;
