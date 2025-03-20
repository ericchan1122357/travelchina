import { Language, TranslationValue } from './types';
import { zhTranslations } from './zh';
import { enTranslations } from './en';
import { frTranslations } from './fr';
import { deTranslations } from './de';
import { jaTranslations } from './ja';
import { koTranslations } from './ko';

export const translations: Record<Language, TranslationValue> = {
  zh: zhTranslations,
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  ja: jaTranslations,
  ko: koTranslations
};

export * from './types'; 