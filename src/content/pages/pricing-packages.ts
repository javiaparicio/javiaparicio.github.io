import pricingData from '../editable/pricing.json';

export type Locale = 'de' | 'en' | 'es';

export type LocalizedString = Record<Locale, string>;

export type PricingPackage = {
  id: 'professional-portrait' | 'personal-branding' | 'teams';
  price: number;
  currency: 'CHF';
  name: LocalizedString;
  description: LocalizedString;
  includes: Record<Locale, string[]>;
  priceLabel: LocalizedString;
};

/**
 * Pricing packages — edit `src/content/editable/pricing.json`.
 */
export const pricingPackages = pricingData.packages as PricingPackage[];

export const pricingIncludedInAll = pricingData.includedInAll as Record<
  Locale,
  string[]
>;

export const pricingFaqTitle = pricingData.faqTitle as LocalizedString;

export const pricingFaq = pricingData.faq as Array<{
  question: LocalizedString;
  answer: LocalizedString;
}>;
