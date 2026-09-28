import type { Locale } from '../../lib/i18n';
import { applyContentTokens, markdownToHtml } from '../../lib/content';

export type LocalizedHtml = Record<Locale, string>;

/**
 * Marketing page bodies — edit Markdown under `src/content/editable/pages/`.
 *
 * Voice: DE Sie | EN you | ES usted
 * Link tokens: {{home}} {{portraits}} {{portfolio}} {{pricing}} {{about}}
 * {{contact}} {{events}} {{privacy}} {{terms}} {{legal}}
 */
const rawPages = import.meta.glob('../editable/pages/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

type PageName = 'about' | 'pricing' | 'danke' | 'contact';

function loadPageMd(name: PageName, locale: Locale): string {
  const key = `../editable/pages/${name}.${locale}.md`;
  const raw = rawPages[key];
  if (!raw) throw new Error(`Missing editable page: ${key}`);

  // Resolve {{tokens}} before markdown so link hrefs are not URL-encoded
  let html = markdownToHtml(applyContentTokens(raw, locale));
  if (name === 'about') {
    html = html.replaceAll('<h2>', '<hr class="content-divider">\n<h2>');
  }
  return html;
}

function loadLocalized(name: PageName): LocalizedHtml {
  return {
    de: loadPageMd(name, 'de'),
    en: loadPageMd(name, 'en'),
    es: loadPageMd(name, 'es'),
  };
}

export const pageCopy = {
  about: loadLocalized('about'),
  pricing: loadLocalized('pricing'),
  contact: loadLocalized('contact'),
  danke: loadLocalized('danke'),
} as const satisfies Record<string, LocalizedHtml>;

export type PageCopyKey = keyof typeof pageCopy;
