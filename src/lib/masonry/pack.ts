import type { MasonryItemInput, MasonryPackResult, MasonryPlacement } from './types.ts';

/**
 * Shortest-column masonry packing.
 *
 * Placement order follows input order (already sorted). Each item goes into the
 * column with the smallest current height; ties prefer the leftmost column.
 * Positions are computed from intrinsic aspect ratios — image download order
 * cannot change the layout.
 */
export function packMasonry(
  items: readonly MasonryItemInput[],
  columnCount: number,
  containerWidth: number,
  gap: number,
  /**
   * Optional extra height per item (e.g. caption reserve), same units as width (px).
   * Length must match `items` when provided.
   */
  extraHeights: readonly number[] = [],
): MasonryPackResult {
  const columns = Math.max(1, Math.floor(columnCount));
  const safeGap = Math.max(0, gap);
  const width = Math.max(0, containerWidth);

  if (items.length === 0 || width === 0) {
    return { placements: [], height: 0, columns, columnWidth: 0 };
  }

  const columnWidth = Math.max(0, (width - safeGap * (columns - 1)) / columns);
  const colHeights = new Array<number>(columns).fill(0);
  const placements: MasonryPlacement[] = [];

  for (let index = 0; index < items.length; index++) {
    const item = items[index]!;
    const aspect = item.width > 0 && item.height > 0 ? item.width / item.height : 1;
    const imageHeight = columnWidth / aspect;
    const extra = extraHeights[index] ?? 0;
    const blockHeight = imageHeight + extra;

    let bestCol = 0;
    for (let c = 1; c < columns; c++) {
      if (colHeights[c]! < colHeights[bestCol]!) bestCol = c;
    }

    const left = bestCol * (columnWidth + safeGap);
    const top = colHeights[bestCol]!;

    placements.push({
      index,
      column: bestCol,
      left,
      top,
      width: columnWidth,
      height: imageHeight,
    });

    colHeights[bestCol] = top + blockHeight + safeGap;
  }

  // Drop the trailing gap after the last item in each column.
  let height = 0;
  for (const h of colHeights) {
    const columnHeight = Math.max(0, h - safeGap);
    if (columnHeight > height) height = columnHeight;
  }

  return { placements, height, columns, columnWidth };
}

/** Resolve column count from sorted breakpoints (ascending minWidth). */
export function columnsForWidth(
  width: number,
  breakpoints: readonly { minWidth: number; columns: number }[],
): number {
  let columns = 1;
  for (const bp of breakpoints) {
    if (width >= bp.minWidth) columns = bp.columns;
  }
  return Math.max(1, columns);
}
