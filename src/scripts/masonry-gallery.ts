import {
  CAPTION_RESERVE_PX,
  columnsForWidth,
  packMasonry,
  type MasonryBreakpoint,
  type MasonryItemInput,
} from '../lib/masonry/index.ts';

type GalleryEl = HTMLElement & { __masonryWired?: boolean };

function parseBreakpoints(raw: string | undefined): MasonryBreakpoint[] {
  if (!raw) {
    return [
      { minWidth: 0, columns: 1 },
      { minWidth: 480, columns: 2 },
      { minWidth: 768, columns: 3 },
      { minWidth: 1024, columns: 4 },
    ];
  }
  try {
    const parsed = JSON.parse(raw) as MasonryBreakpoint[];
    return Array.isArray(parsed) && parsed.length
      ? parsed
      : parseBreakpoints(undefined);
  } catch {
    return parseBreakpoints(undefined);
  }
}

function readItems(gallery: HTMLElement): {
  elements: HTMLElement[];
  items: MasonryItemInput[];
  extras: number[];
} {
  const elements = Array.from(
    gallery.querySelectorAll<HTMLElement>('[data-masonry-item]'),
  );
  const items: MasonryItemInput[] = [];
  const extras: number[] = [];

  for (const el of elements) {
    const w = Number(el.dataset.width || '1');
    const h = Number(el.dataset.height || '1');
    const id = el.dataset.id || String(items.length);
    items.push({ id, width: w > 0 ? w : 1, height: h > 0 ? h : 1 });
    const hasCaption = el.dataset.hasCaption === '1';
    extras.push(hasCaption ? CAPTION_RESERVE_PX : 0);
  }

  return { elements, items, extras };
}

function applyPack(gallery: HTMLElement): void {
  const gap = Number(gallery.dataset.gap || '12');
  const breakpoints = parseBreakpoints(gallery.dataset.breakpoints);
  const maxWidthAttr = gallery.dataset.maxWidth;
  const maxWidth = maxWidthAttr ? Number(maxWidthAttr) : undefined;

  const measured = gallery.clientWidth;
  const width =
    maxWidth && maxWidth > 0 ? Math.min(measured, maxWidth) : measured;
  if (width <= 0) return;

  const columnCount = columnsForWidth(width, breakpoints);
  const { elements, items, extras } = readItems(gallery);
  const result = packMasonry(items, columnCount, width, gap, extras);

  gallery.style.height = `${result.height}px`;
  gallery.dataset.columns = String(result.columns);
  gallery.dataset.packed = '1';

  for (let i = 0; i < result.placements.length; i++) {
    const p = result.placements[i]!;
    const el = elements[p.index];
    if (!el) continue;
    el.style.width = `${p.width}px`;
    el.style.left = `${p.left}px`;
    el.style.top = `${p.top}px`;
    el.style.position = 'absolute';
  }
}

function wireGallery(gallery: GalleryEl): void {
  if (gallery.__masonryWired) return;
  gallery.__masonryWired = true;

  let frame = 0;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => applyPack(gallery));
  };

  applyPack(gallery);

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => schedule());
    ro.observe(gallery);
  } else {
    window.addEventListener('resize', schedule, { passive: true });
  }
}

function init(): void {
  document.querySelectorAll<GalleryEl>('[data-masonry-gallery]').forEach(wireGallery);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
