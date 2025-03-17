'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Language } from '../types';
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
    // 在实际应用中，可能需要加载不同语言的内容或更改URL
  };

  const handleCtaClick = () => {
    router.push('/planner');
  };

  const handleReadMoreClick = (storyId: string) => {
    router.push(`/stories/${storyId}`);
  };

  // 错误边界
  try {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar 
          currentLanguage={currentLanguage} 
          onLanguageChange={handleLanguageChange} 
        />
        
        <main className="flex-grow pt-16"> {/* pt-16 为顶部导航栏留出空间 */}
          <HeroBanner 
            data={heroData} 
            onCtaClick={handleCtaClick} 
          />
          
          <ValueProposition values={valueProps} />
          
          <DestinationSection 
            title="2024春季推荐目的地" 
            destinations={featuredDestinations} 
          />
          
          <TravelStoriesSection 
            title="旅行者的中国故事" 
            stories={travelStories} 
            onReadMoreClick={handleReadMoreClick} 
          />
          
          <GuidesSection 
            title="中国旅行实用指南" 
            guides={travelGuides} 
          />
          
          <CallToAction 
            data={ctaData} 
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