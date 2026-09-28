import { marked } from 'marked';
import type { Locale } from './i18n';
import { contact, SITE } from './site';
import { getPagePath, type PageKey } from './routes';

const PATH_TOKENS: Record<string, PageKey> = {
  home: 'home',
  portraits: 'portraits',
  portfolio: 'portfolio',
  pricing: 'pricing',
  about: 'about',
  contact: 'contact',
  events: 'events',
  privacy: 'privacy',
  terms: 'terms',
  legal: 'legal',
};

export function applyContentTokens(html: string, locale: Locale): string {
  let out = html;

  for (const [token, key] of Object.entries(PATH_TOKENS)) {
    const path = getPagePath(key, locale);
    out = out.replaceAll(`{{${token}}}`, path);
    // marked URL-encodes {{token}} inside markdown links before we can replace
    out = out.replaceAll(`%7B%7B${token}%7D%7D`, path);
  }

  const legalForm =
    typeof contact.legal_form === 'object'
      ? contact.legal_form[locale]
      : contact.legal_form;
  const mwst =
    typeof contact.mwst_status === 'object'
      ? contact.mwst_status[locale]
      : contact.mwst_status;

  const replacements: Record<string, string> = {
    business_name: SITE.legalName,
    owner: SITE.owner,
    address: SITE.address,
    email: SITE.email,
    phone: SITE.phone,
    che: SITE.che,
    legal_form: legalForm,
    mwst: mwst,
  };

  for (const [token, value] of Object.entries(replacements)) {
    out = out.replaceAll(`{{${token}}}`, value);
  }

  return out;
}

/** Convert markdown legal copy to HTML after token replacement. */
export function markdownToHtml(md: string): string {
  return marked.parse(md, { async: false }) as string;
}

/** Apply tokens then, if content looks like markdown, convert to HTML. */
export function renderLegalBody(raw: string, locale: Locale): string {
  const withTokens = applyContentTokens(raw, locale);
  const trimmed = withTokens.trimStart();
  if (trimmed.startsWith('<')) return withTokens;
  return markdownToHtml(withTokens);
}
