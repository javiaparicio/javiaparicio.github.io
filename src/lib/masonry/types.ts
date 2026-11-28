/** Breakpoint → column count. `maxWidth` is exclusive upper bound in CSS px; omit for the last tier. */
export type MasonryBreakpoint = {
  /** Match when container width is >= this value (px). */
  minWidth: number;
  columns: number;
};

export type MasonryItemInput = {
  /** Stable id (usually filename). */
  id: string;
  width: number;
  height: number;
};

export type MasonryPlacement = {
  /** Item index in the sorted input array. */
  index: number;
  column: number;
  left: number;
  top: number;
  width: number;
  height: number;
};

export type MasonryPackResult = {
  placements: MasonryPlacement[];
  /** Total gallery height in px (tallest column, without trailing gap). */
  height: number;
  columns: number;
  columnWidth: number;
};

export type MasonryGalleryConfig = {
  gap: number;
  breakpoints: MasonryBreakpoint[];
  maxWidth?: number;
  eagerCount: number;
};
