"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../destinations/utils/destinationContent';

// 默认语言
const DEFAULT_LANGUAGE: Language = "zh";

// 创建上下文接口
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// 创建上下文
const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
});

// 使用上下文的钩子
export const useLanguageContext = () => useContext(LanguageContext);

// 提供者Props接口
interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

// 上下文提供者组件
export function LanguageProvider({ 
  children, 
  initialLanguage = DEFAULT_LANGUAGE 
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // 初次加载时从localStorage读取保存的语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // 当语言改变时，保存到localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
} 