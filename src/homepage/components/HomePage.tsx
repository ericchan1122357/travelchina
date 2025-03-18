'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Language } from '../types';
import { getTranslation, TranslationValue } from '../utils/translations';
import NavBar from './NavBar';
import HeroBanner from './HeroBanner';
import ValueProposition from './ValueProposition';
import DestinationSection from './DestinationSection';
import TravelStoriesSection from './TravelStoriesSection';
import GuidesSection from './GuidesSection';
import CallToAction from './CallToAction';
import Footer from './Footer';

// 示例数据
import { 
  heroData,
  valueProps,
  featuredDestinations,
  travelStories,
  travelGuides,
  ctaData
} from '../utils/mockData';

const HomePage = () => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  const handleCtaClick = () => {
    router.push('/planner');
  };

  const handleReadMoreClick = (storyId: string) => {
    router.push(`/stories/${storyId}`);
  };

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  // 错误边界
  try {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar 
          currentLanguage={currentLanguage} 
          onLanguageChange={handleLanguageChange} 
        />
        
        <main className="flex-grow pt-16">
          <HeroBanner 
            data={{
              ...heroData,
              title: t('heroTitle') as string,
              subtitle: t('heroSubtitle') as string,
              ctaText: t('startPlanning') as string
            }}
            onCtaClick={handleCtaClick} 
          />
          
          <ValueProposition 
            values={valueProps.map((prop, index) => ({
              ...prop,
              title: t(`valueProp${index + 1}Title` as keyof TranslationValue) as string,
              description: t(`valueProp${index + 1}Desc` as keyof TranslationValue) as string
            }))} 
          />
          
          <DestinationSection 
            title={t('destinationsTitle') as string}
            destinations={featuredDestinations} 
          />
          
          <TravelStoriesSection 
            title={t('storiesTitle') as string}
            stories={travelStories} 
            onReadMoreClick={handleReadMoreClick} 
          />
          
          <GuidesSection 
            title={t('guidesTitle') as string}
            guides={travelGuides} 
          />
          
          <CallToAction 
            data={{
              ...ctaData,
              title: t('ctaTitle') as string,
              subtitle: t('ctaSubtitle') as string,
              buttonText: t('startPlanning') as string
            }}
            onCtaClick={handleCtaClick} 
          />
        </main>
        
        <Footer 
          currentLanguage={currentLanguage} 
          onLanguageChange={handleLanguageChange} 
        />
      </div>
    );
  } catch (error) {
    console.error('HomePage rendering error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">页面加载出错</h1>
          <p className="text-gray-600">抱歉，页面加载时遇到了问题。请刷新页面重试。</p>
        </div>
      </div>
    );
  }
};

export default HomePage; 