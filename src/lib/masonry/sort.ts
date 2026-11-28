/**
 * Extract a leading integer from a filename stem (e.g. "29.webp" → 29, "portrait_030" → 30).
 * Returns null when no digits are present.
 */
export function extractNumericKey(filename: string): number | null {
  const stem = filename.replace(/^.*\//, '').replace(/\.[^.]+$/, '');
  const match = stem.match(/(\d+)/);
  if (!match) return null;
  return Number.parseInt(match[1]!, 10);
}

/**
 * Descending numeric order by the first number in the filename.
 * Ties (or missing numbers) fall back to reverse natural string compare for determinism.
 */
export function compareNumericDesc(a: string, b: string): number {
  const na = extractNumericKey(a);
  const nb = extractNumericKey(b);
  if (na !== null && nb !== null && na !== nb) return nb - na;
  if (na !== null && nb === null) return -1;
  if (na === null && nb !== null) return 1;
  return b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' });
}

export function sortFilenamesNumericDesc(filenames: string[]): string[] {
  return [...filenames].sort(compareNumericDesc);
}
