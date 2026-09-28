export const LOCALES = ['de', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'de';

export const LOCALE_META: Record<
  Locale,
  { htmlLang: string; ogLocale: string; label: string }
> = {
  de: { htmlLang: 'de-CH', ogLocale: 'de_CH', label: 'DE' },
  en: { htmlLang: 'en-CH', ogLocale: 'en_CH', label: 'EN' },
  es: { htmlLang: 'es', ogLocale: 'es_ES', label: 'ES' },
};

export type LocalizedString =
  | string
  | {
      de: string;
      en: string;
      es: string;
    };

export function t(value: LocalizedString | undefined, locale: Locale): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[locale] ?? value.de ?? '';
}

export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === '' ? '/' : clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
