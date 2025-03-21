import { zhTranslations } from './zh';
import { enTranslations } from './en';
import { frTranslations } from './fr';
import { deTranslations } from './de';
import { jaTranslations } from './ja';
import { koTranslations } from './ko';
import { esTranslations } from './es';
import { ruTranslations } from './ru';
import { Language, TranslationValue } from './types';

export const translations: Record<Language, TranslationValue> = {
  zh: zhTranslations,
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  es: esTranslations,
  ru: ruTranslations,
};

export const getTranslation = (language: Language, key: keyof TranslationValue): string => {
  return translations[language][key] || translations['en'][key] || key;
};

export type { Language, TranslationValue } from './types'; 