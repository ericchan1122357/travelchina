"use client"

import React from 'react';
import Image from 'next/image';
import { 
  getChineseContent, 
  getEnglishContent, 
  getGermanContent, 
  getFrenchContent, 
  getSpanishContent, 
  getKoreanContent 
} from './index';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Lijiang() {
  // 使用全局语言上下文
  const { currentLanguage } = useLanguage();
  
  // 根据当前语言返回对应的内容
  const getContent = () => {
    // 将语言代码映射到对应的内容函数
    switch (currentLanguage) {
      case "zh":
        return getChineseContent();
      case "en":
        return getEnglishContent();
      case "de":
        return getGermanContent();
      case "fr":
        return getFrenchContent();
      case "es":
        return getSpanishContent();
      case "ko":
        return getKoreanContent();
      default:
        return getChineseContent();
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">丽江 / Lijiang</h1>
          <div className="relative w-full h-[50vh] rounded-xl overflow-hidden">
            <Image
              src="/images/lijiang/lijiang-banner.jpg"
              alt="丽江古城风景"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        
        {/* 内容区域 */}
        <div className="space-y-6">
          {getContent()}
        </div>
      </div>
    </main>
  );
}