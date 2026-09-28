import {
  DEFAULT_LOCALE,
  type Locale,
  localePath,
} from './i18n';

/** Stable page keys used across the site */
export type PageKey =
  | 'home'
  | 'portfolio'
  | 'portraits'
  | 'events'
  | 'pricing'
  | 'about'
  | 'contact'
  | 'legal'
  | 'terms'
  | 'privacy'
  | 'danke'
  | 'linktree';

export const PAGE_PATHS: Record<
  PageKey,
  { de: string; en: string; es: string }
> = {
  home: { de: '/', en: '/', es: '/' },
  portfolio: { de: '/portfolio/', en: '/portfolio/', es: '/portfolio/' },
  portraits: { de: '/portraits/', en: '/portraits/', es: '/retratos/' },
  events: { de: '/events/', en: '/events/', es: '/eventos/' },
  pricing: { de: '/preise/', en: '/pricing/', es: '/precios/' },
  about: { de: '/ueber-mich/', en: '/about/', es: '/sobre-mi/' },
  contact: { de: '/kontakt/', en: '/contact/', es: '/contacto/' },
  legal: { de: '/impressum/', en: '/legal/', es: '/aviso-legal/' },
  terms: { de: '/agb/', en: '/terms/', es: '/condiciones/' },
  privacy: { de: '/datenschutz/', en: '/privacy/', es: '/privacidad/' },
  danke: { de: '/danke/', en: '/thank-you/', es: '/gracias/' },
  linktree: { de: '/linktree/', en: '/linktree/', es: '/linktree/' },
};

/** Project slug → page key for dedicated gallery URLs */
export const PROJECT_PAGE: Record<string, PageKey> = {
  portraits: 'portraits',
  events: 'events',
};

export function getPagePath(key: PageKey, locale: Locale): string {
  const paths = PAGE_PATHS[key];
  const path = paths[locale];
  if (locale === DEFAULT_LOCALE) return path;
  if (path === '/') return `/${locale}/`;
  return `/${locale}${path}`;
}

export function absoluteUrl(path: string, site = 'https://javiapariciofoto.ch'): string {
  const base = site.replace(/\/$/, '');
  if (path.startsWith('http')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function hreflangMap(key: PageKey): Record<Locale, string> {
  return {
    de: absoluteUrl(getPagePath(key, 'de')),
    en: absoluteUrl(getPagePath(key, 'en')),
    es: absoluteUrl(getPagePath(key, 'es')),
  };
}

export function projectHref(slug: string, locale: Locale): string {
  const key = PROJECT_PAGE[slug];
  if (key) return getPagePath(key, locale);
  return localePath(locale, `/portfolio/${slug}/`);
}
