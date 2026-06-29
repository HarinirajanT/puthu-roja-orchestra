import type { Locale } from "./types";
import { en } from "./en";
import { ta } from "./ta";

export const translations = { en, ta } as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export type { Locale, Translations } from "./types";
