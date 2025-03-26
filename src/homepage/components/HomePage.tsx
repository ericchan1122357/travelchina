'use client';

import { useRouter } from 'next/navigation';
import { getTranslation } from '@/homepage/utils/translations';
import { TranslationValue } from '@/homepage/utils/translations/types';
import NavBar from './NavBar';
import HeroBanner from './HeroBanner';
import ValueProposition from './ValueProposition';
import DestinationSection from './DestinationSection';
import TravelStoriesSection from './TravelStoriesSection';
import GuidesSection from './GuidesSection';
import CallToAction from './CallToAction';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ValueProp } from '@/homepage/types';
import { useEffect } from 'react';

// 示例数据
import { 
  heroData,
  valueProps,
  featuredDestinations,
  travelStories,
  travelGuides,
  ctaData
} from '@/homepage/utils/mockData';

const HomePage = () => {
  const router = useRouter();
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  // 预加载视频
  useEffect(() => {
    const preloadVideo = () => {
      const video = new Audio();
      video.src = '/videos/banner-video.mp4';
    };
    preloadVideo();
  }, []);

  // 错误边界
  try {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar 
          currentLanguage={currentLanguage} 
          onLanguageChange={setCurrentLanguage} 
        />
        
        <main className="flex-grow">
          <HeroBanner 
            data={{
              ...heroData,
              title: t('heroTitle') as string,
              subtitle: t('heroSubtitle') as string,
              ctaText: t('startPlanning') as string
            }}
          >
            <ValueProposition 
              values={valueProps.map((prop: ValueProp, index: number) => ({
                ...prop,
                title: t(`value.${index + 1}.title` as keyof TranslationValue) as string,
                description: t(`value.${index + 1}.desc` as keyof TranslationValue) as string
              }))} 
            />
          </HeroBanner>
          
          <DestinationSection 
            title={t('destinationsTitle') as string}
            destinations={featuredDestinations}
            currentLanguage={currentLanguage}
          />
          
          <TravelStoriesSection 
            title={t('storiesTitle') as string}
            stories={travelStories} 
            onReadMoreClick={(storyId: string) => {
              window.location.href = `/stories/${storyId}`;
            }}
            currentLanguage={currentLanguage}
          />
          
          <GuidesSection 
            title={t('guidesTitle') as string}
            guides={travelGuides}
            currentLanguage={currentLanguage}
          />
          
          <CallToAction 
            data={{
              ...ctaData,
              title: t('ctaTitle') as string,
              subtitle: t('ctaSubtitle') as string,
              buttonText: t('startPlanning') as string
            }}
          />
        </main>
        
        <Footer 
          currentLanguage={currentLanguage} 
          onLanguageChange={setCurrentLanguage} 
        />
      </div>
    );
  } catch (error) {
    console.error('Error rendering HomePage:', error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};

export default HomePage; 