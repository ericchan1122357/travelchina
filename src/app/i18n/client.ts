'use client';

import { useEffect, useState } from 'react';
import { useLanguageContext } from '../context/LanguageContext';

// 基本翻译字典
const translations: Record<string, Record<string, string>> = {
  zh: {
    appName: '全球旅行指南',
    // 其他中文翻译...
  },
  en: {
    appName: 'Global Travel Guide',
    // 其他英文翻译...
  },
  fr: {
    appName: 'Guide de Voyage Global',
    // 其他法语翻译...
  },
  de: {
    appName: 'Globaler Reiseführer',
    // 其他德语翻译...
  },
  es: {
    appName: 'Guía de Viaje Global',
    // 其他西班牙语翻译...
  },
  ja: {
    appName: 'グローバル旅行ガイド',
    // 其他日语翻译...
  },
  ko: {
    appName: '글로벌 여행 가이드',
    // 其他韩语翻译...
  },
  ru: {
    appName: 'Глобальный путеводитель',
    // 其他俄语翻译...
  }
};

// i18n钩子
export function useI18n() {
  const { language } = useLanguageContext();
  const [isClient, setIsClient] = useState(false);
  
  // 确保只在客户端渲染
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // 翻译函数
  const t = (key: string, fallback?: string): string => {
    if (!isClient) return fallback || key;
    
    const currentTranslations = translations[language] || {};
    return currentTranslations[key] || fallback || key;
  };
  
  return { t, language };
} 