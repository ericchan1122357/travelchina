import { getTranslation } from '@/homepage/utils/translations';
import { TranslationValue } from '@/homepage/utils/translations/types';
import { Language } from '@/homepage/types';

export function useTranslation(language: Language) {
  const t = (key: keyof TranslationValue, params?: Record<string, string | number>): string => {
    const translation = getTranslation(language, key);
    
    if (typeof translation !== 'string') {
      return String(translation);
    }
    
    if (params) {
      return Object.entries(params).reduce(
        (str, [key, value]) => str.replace(`{{${key}}}`, String(value)),
        translation
      );
    }
    
    return translation;
  };

  return { t };
} 