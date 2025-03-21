import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language } from '../homepage/types';

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 从localStorage获取保存的语言设置
const getSavedLanguage = (): Language | null => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language');
    return saved as Language | null;
  }
  return null;
};

// 获取浏览器语言
const getBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language.split('-')[0];
    // 检查浏览器语言是否在支持的语言列表中
    const supportedLanguages: Language[] = ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'ru'];
    return supportedLanguages.includes(browserLang as Language) ? browserLang as Language : 'en';
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 初始化语言设置
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // 优先使用保存的语言设置
    const savedLanguage = getSavedLanguage();
    if (savedLanguage) {
      return savedLanguage;
    }
    // 其次使用浏览器语言
    return getBrowserLanguage();
  });

  // 当语言改变时保存到localStorage
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 