import en from './en';
import fi from './fi';

export type Lang = 'en' | 'fi';
export type { Locale } from './en';

export const locales = { en, fi } as const;

export function getLocale(lang: Lang) {
  return locales[lang];
}
