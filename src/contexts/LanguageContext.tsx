import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// 支持的语言类型
export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  languages: { code: Language; name: string }[];
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 支持的语言列表
const supportedLanguages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'ru', name: 'Русский' }
];

// localStorage键名
const LANGUAGE_KEY = 'travel_app_language';

interface LanguageProviderProps {
  children: ReactNode;
}

// 语言提供者组件
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 初始语言状态，优先从localStorage获取，若没有则使用浏览器语言或默认中文
  const [currentLanguage, setCurrentLanguage] = useState<Language>('zh');

  // 页面加载时从localStorage读取语言设置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
      if (savedLanguage && isSupportedLanguage(savedLanguage)) {
        setCurrentLanguage(savedLanguage as Language);
      } else {
        // 检测浏览器语言
        const browserLang = detectBrowserLanguage();
        setCurrentLanguage(browserLang);
      }
    }
  }, []);

  // 设置语言函数
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_KEY, lang);
    }
  };

  // 检查是否为支持的语言
  function isSupportedLanguage(lang: string): boolean {
    return supportedLanguages.some(l => l.code === lang);
  }

  // 检测浏览器语言
  function detectBrowserLanguage(): Language {
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = window.navigator.language.split('-')[0];
      
      // 检查是否为支持的语言
      if (isSupportedLanguage(browserLang)) {
        return browserLang as Language;
      }
    }
    
    // 默认返回中文
    return 'zh';
  }

  // 上下文值
  const contextValue = {
    currentLanguage,
    setLanguage,
    languages: supportedLanguages
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义语言Hook
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// 获取当前语言的多语言文本
export function getTextByLanguage(texts: Record<Language, string>, language: Language): string {
  return texts[language] || texts.en || '';
}

// 获取当前语言的季节名称
export function getSeasonName(month: number, language: Language): string {
  const seasons: Record<Language, string[]> = {
    zh: ['冬季', '冬季', '春季', '春季', '春季', '夏季', '夏季', '夏季', '秋季', '秋季', '秋季', '冬季'],
    en: ['Winter', 'Winter', 'Spring', 'Spring', 'Spring', 'Summer', 'Summer', 'Summer', 'Autumn', 'Autumn', 'Autumn', 'Winter'],
    ja: ['冬', '冬', '春', '春', '春', '夏', '夏', '夏', '秋', '秋', '秋', '冬'],
    ko: ['겨울', '겨울', '봄', '봄', '봄', '여름', '여름', '여름', '가을', '가을', '가을', '겨울'],
    fr: ['Hiver', 'Hiver', 'Printemps', 'Printemps', 'Printemps', 'Été', 'Été', 'Été', 'Automne', 'Automne', 'Automne', 'Hiver'],
    de: ['Winter', 'Winter', 'Frühling', 'Frühling', 'Frühling', 'Sommer', 'Sommer', 'Sommer', 'Herbst', 'Herbst', 'Herbst', 'Winter'],
    es: ['Invierno', 'Invierno', 'Primavera', 'Primavera', 'Primavera', 'Verano', 'Verano', 'Verano', 'Otoño', 'Otoño', 'Otoño', 'Invierno'],
    ru: ['Зима', 'Зима', 'Весна', 'Весна', 'Весна', 'Лето', 'Лето', 'Лето', 'Осень', 'Осень', 'Осень', 'Зима']
  };
  
  // 确保月份在1-12之间
  const normalizedMonth = ((month - 1) % 12 + 12) % 12;
  return seasons[language][normalizedMonth];
} 