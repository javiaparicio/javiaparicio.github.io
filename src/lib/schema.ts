import { SITE } from './site';

export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export type Faq = { question: string; answer: string };

/**
 * Serialize JSON-LD for a <script> tag: JSON.stringify drops `undefined`,
 * and `<`, `>`, `&`, U+2028/U+2029 are escaped so the payload cannot close the tag.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
