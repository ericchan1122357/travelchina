import { Language } from '../types';
import { TranslationValue } from './translations/types';
import { zhTranslations } from './translations/zh';
import { enTranslations } from './translations/en';
import { jaTranslations } from './translations/ja';
import { koTranslations } from './translations/ko';
import { frTranslations } from './translations/fr';
import { deTranslations } from './translations/de';

interface CtaStats {
  cities: string;
  itineraries: string;
  users: string;
}

// 获取当前季节的标题
export const getCurrentSeasonTitle = (language: Language): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  
  let season: 'spring' | 'summer' | 'autumn' | 'winter';
  
  if (month >= 3 && month <= 5) {
    season = 'spring';
  } else if (month >= 6 && month <= 8) {
    season = 'summer';
  } else if (month >= 9 && month <= 11) {
    season = 'autumn';
  } else {
    season = 'winter';
  }
  
  const seasonKey = `season.${season}` as keyof TranslationValue;
  const seasonText = translations[language][seasonKey];
  
  switch (language) {
    case 'zh':
      return `${year}年${seasonText}推荐目的地`;
    case 'ja':
      return `${year}年${seasonText}のおすすめ目的地`;
    case 'ko':
      return `${year}年 ${seasonText} 推천 목的지`;
    default:
      return `Featured Destinations for ${seasonText} ${year}`;
  }
};

export const translations: Record<Language, TranslationValue> = {
  zh: zhTranslations,
  en: enTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  fr: frTranslations,
  de: deTranslations
};

export const getTranslation = (
  language: Language, 
  key: keyof TranslationValue
): TranslationValue[keyof TranslationValue] => {
  const translation = translations[language];
  if (!translation) {
    console.warn(`Translation not found for language: ${language}`);
    return translations['en'][key] || key;
  }

  // 特殊处理destinationsTitle
  if (key === 'destinationsTitle') {
    return getCurrentSeasonTitle(language);
  }

  return translation[key];
};

export const getBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    // 检查浏览器语言是否在支持的语言列表中
    const supportedLanguages: Language[] = ['en', 'zh', 'ja', 'ko', 'fr', 'de'];
    return supportedLanguages.includes(browserLang as Language) ? browserLang as Language : 'en';
  }
  return 'en';
}; 