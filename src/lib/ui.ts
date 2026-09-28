import type { Locale } from './i18n';
import type { PageKey } from './routes';
import uiData from '../content/editable/ui.json';
import metaData from '../content/editable/meta.json';

type Localized = { de: string; en: string; es: string };

/**
 * UI chrome (nav, form labels, gallery) — edit `src/content/editable/ui.json`.
 * Page bodies: `src/content/editable/pages/*.md`
 */
export const ui = uiData;

export function uiT(
  group: keyof typeof ui,
  key: string,
  locale: Locale,
): string {
  const g = ui[group] as Record<string, Localized>;
  const entry = g[key];
  if (!entry) return key;
  return entry[locale] ?? entry.de;
}

/** Document / SEO titles — edit `meta.json` → pageTitles */
export const pageTitles = metaData.pageTitles as Record<PageKey, Localized>;

/** Visible H1 on content pages — edit `meta.json` → pageHeadings */
export const pageHeadings = metaData.pageHeadings as Record<PageKey, Localized>;

/** Meta descriptions — edit `meta.json` → pageDescriptions */
export const pageDescriptions = metaData.pageDescriptions as Record<
  PageKey,
  Localized
>;
