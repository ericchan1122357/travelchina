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
import { useEffect, useState } from 'react';

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
  const [isVideoPreloaded, setIsVideoPreloaded] = useState(false);

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  // 优化的视频预加载
  useEffect(() => {
    const preloadVideo = async () => {
      try {
        // 创建一个link预加载标签
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = '/videos/banner-video.mp4';
        document.head.appendChild(link);

        // 使用Fetch API预加载视频
        const response = await fetch('/videos/banner-video.mp4', {
          method: 'GET',
          headers: {
            'Accept': 'video/mp4'
          },
          cache: 'force-cache'
        });
        
        if (response.ok) {
          const blob = await response.blob();
          // 创建一个视频元素来预热视频
          const video = document.createElement('video');
          video.style.display = 'none';
          video.preload = 'auto';
          video.src = URL.createObjectURL(blob);
          document.body.appendChild(video);
          
          // 开始加载视频
          await video.load();
          setIsVideoPreloaded(true);

          // 清理
          URL.revokeObjectURL(video.src);
          document.body.removeChild(video);
          document.head.removeChild(link);
        }
      } catch (error) {
        console.error('视频预加载失败:', error);
      }
    };

    if (!isVideoPreloaded) {
      preloadVideo();
    }
  }, [isVideoPreloaded]);

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