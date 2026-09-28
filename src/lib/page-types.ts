---
/**
 * Shared page helpers for locale-aware content pages.
 */
import type { Locale } from '../lib/i18n';
import type { PageKey } from '../lib/routes';

export type ContentPageProps = {
  locale: Locale;
  pageKey: PageKey;
};
