'use client';

import React from 'react';
import Link from 'next/link';
import { TravelGuide, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { TranslationValue } from '../utils/translations/types';

interface GuideCardProps {
  guide: TravelGuide;
  currentLanguage: Language;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, currentLanguage }) => {
  const { title, description, iconName, url, category } = guide;
  
  // 构建默认 URL
  const guideUrl = url || `/guides/${category.toLowerCase()}/${title.toLowerCase().replace(/\s+/g, '-')}`;

  // 根据类别返回图标和颜色
  const getIconAndColor = (category: string) => {
    const icons: Record<string, { icon: React.ReactNode; bgColor: string; textColor: string }> = {
      visa: {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        ),
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-600'
      },
      transportation: {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        ),
        bgColor: 'bg-green-100',
        textColor: 'text-green-600'
      },
      culture: {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
          </svg>
        ),
        bgColor: 'bg-red-100',
        textColor: 'text-red-600'
      },
      payment: {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
        ),
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-600'
      },
      internet: {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
        ),
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-600'
      },
      safety: {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        ),
        bgColor: 'bg-teal-100',
        textColor: 'text-teal-600'
      }
    };

    return icons[category] || { 
      icon: <div className="w-6 h-6" />, 
      bgColor: 'bg-gray-100', 
      textColor: 'text-gray-600' 
    };
  };

  const { icon, bgColor, textColor } = getIconAndColor(category);

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  return (
    <Link 
      href={guideUrl}
      className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
    >
      <div className="flex flex-col h-full">
        <div className={`w-12 h-12 ${bgColor} ${textColor} rounded-full flex items-center justify-center mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex items-center text-sm font-medium mt-auto">
          <span className={textColor}>{t('readMore')}</span>
          <svg 
            className={`ml-1 w-4 h-4 ${textColor}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard; 