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

  const handleCtaClick = () => {
    // 使用直接跳转方式，避免路由系统冲突
    console.log('点击开始规划按钮，准备跳转到/planner页面');
    
    // 由于项目混合使用了next/router和next/navigation
    // 使用原生跳转方法更可靠
    window.location.href = '/planner';
  };

  const handleReadMoreClick = (storyId: string) => {
    // 使用原生跳转方法，与handleCtaClick保持一致
    window.location.href = `/stories/${storyId}`;
  };

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  // 错误边界
  try {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar 
          currentLanguage={currentLanguage} 
          onLanguageChange={setCurrentLanguage} 
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
            values={valueProps.map((prop: ValueProp, index: number) => ({
              ...prop,
              title: t(`value.${index + 1}.title` as keyof TranslationValue) as string,
              description: t(`value.${index + 1}.desc` as keyof TranslationValue) as string
            }))} 
          />
          
          <DestinationSection 
            title={t('destinationsTitle') as string}
            destinations={featuredDestinations}
            currentLanguage={currentLanguage}
          />
          
          <TravelStoriesSection 
            title={t('storiesTitle') as string}
            stories={travelStories} 
            onReadMoreClick={handleReadMoreClick}
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
            onCtaClick={handleCtaClick} 
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