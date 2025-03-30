'use client';

import { useState } from 'react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { LanguageSwitcher } from '@/app/components/language-switcher';
import { getEnglishContent } from './english';
import { getGermanContent } from './german';
import { getFrenchContent } from './french';
import { getSpanishContent } from './spanish';
import { getKoreanContent } from './korean';
import { getJapaneseContent } from './japanese';

// 丽江页面组件
export default function LijiangPage() {
  const [language, setLanguage] = useState('english');

  // 根据选择的语言返回对应内容
  const getContent = () => {
    switch (language) {
      case 'english':
        return getEnglishContent();
      case 'german':
        return getGermanContent();
      case 'french':
        return getFrenchContent();
      case 'spanish':
        return getSpanishContent();
      case 'korean':
        return getKoreanContent();
      case 'japanese':
        return getJapaneseContent();
      default:
        return getEnglishContent();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* 语言切换器 */}
        <div className="mb-6">
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        </div>
        
        {/* 页面标题 */}
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {language === 'english' && 'Lijiang - Ancient City of Diverse Cultures'}
          {language === 'german' && 'Lijiang - Alte Stadt der vielfältigen Kulturen'}
          {language === 'french' && 'Lijiang - Ancienne Cité aux Cultures Diverses'}
          {language === 'spanish' && 'Lijiang - Ciudad Antigua de Culturas Diversas'}
          {language === 'korean' && '리장 - 다양한 문화의 고대 도시'}
          {language === 'japanese' && '麗江 - 多様な文化の古代都市'}
        </h1>
        
        {/* 主要内容区域 */}
        <div className="prose prose-lg max-w-none">
          {getContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}