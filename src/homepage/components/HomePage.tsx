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
import WhySection from './WhySection';
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
  ctaData,
  whyChina,
  whyUs
} from '@/homepage/utils/mockData';

// 缓存视频加载状态，确保页面间导航不会重新加载视频
let globalVideoPreloaded = false;

const HomePage = () => {
  const router = useRouter();
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const [isVideoPreloaded, setIsVideoPreloaded] = useState(globalVideoPreloaded);

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  // 优化的视频预加载
  useEffect(() => {
    // 如果视频已全局预加载，则无需再次加载
    if (globalVideoPreloaded) {
      return;
    }

    const preloadVideo = () => {
      // 创建一个link预加载标签
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = '/videos/banner-video.mp4';
      link.type = 'video/mp4';
      
      // 添加高优先级提示
      link.setAttribute('importance', 'high');
      
      // 添加fetchpriority属性
      link.setAttribute('fetchpriority', 'high');
      
      document.head.appendChild(link);

      // 创建一个隐藏的video元素进行预加载
      const video = document.createElement('video');
      video.style.display = 'none';
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.src = '/videos/banner-video.mp4';
      
      // 设置视频加载事件
      video.onloadeddata = () => {
        setIsVideoPreloaded(true);
        globalVideoPreloaded = true;  // 设置全局状态
        
        // 保存在sessionStorage中，确保页面刷新后也能使用缓存
        try {
          sessionStorage.setItem('videoPreloaded', 'true');
        } catch (e) {
          console.warn('无法在sessionStorage中存储视频加载状态');
        }
        
        // 暂停预加载的视频
        video.pause();
        // 清理DOM
        document.body.removeChild(video);
      };

      // 开始加载
      document.body.appendChild(video);
      video.load();
    };

    // 检查sessionStorage中是否有缓存状态
    try {
      const cached = sessionStorage.getItem('videoPreloaded');
      if (cached === 'true') {
        setIsVideoPreloaded(true);
        globalVideoPreloaded = true;
        return;
      }
    } catch (e) {
      console.warn('无法读取sessionStorage');
    }

    // 没有缓存，开始预加载
    if (!isVideoPreloaded) {
      preloadVideo();
    }

    // 添加资源提示
    const hint = document.createElement('link');
    hint.rel = 'preconnect';
    hint.href = window.location.origin;
    document.head.appendChild(hint);

    return () => {
      if (hint.parentNode) {
        document.head.removeChild(hint);
      }
    };
  }, [isVideoPreloaded]);

  // 准备WhySection数据
  const whyChinaData = {
    title: t('why.china.title') as string,
    points: [
      {
        id: 'culture',
        title: t('why.china.culture.title') as string,
        description: t('why.china.culture.desc') as string
      },
      {
        id: 'landscapes',
        title: t('why.china.landscapes.title') as string,
        description: t('why.china.landscapes.desc') as string
      },
      {
        id: 'cuisine',
        title: t('why.china.cuisine.title') as string,
        description: t('why.china.cuisine.desc') as string
      }
    ]
  };

  const whyUsData = {
    title: t('why.us.title') as string,
    points: [
      {
        id: 'personalization',
        title: t('why.us.personalization.title') as string,
        description: t('why.us.personalization.desc') as string
      },
      {
        id: 'data',
        title: t('why.us.data.title') as string,
        description: t('why.us.data.desc') as string
      },
      {
        id: 'worryfree',
        title: t('why.us.worryfree.title') as string,
        description: t('why.us.worryfree.desc') as string
      }
    ]
  };

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
            videoPreloaded={isVideoPreloaded}
          >
            <ValueProposition 
              values={valueProps.map((prop: ValueProp, index: number) => ({
                ...prop,
                title: t(`value.${index + 1}.title` as keyof TranslationValue) as string,
                description: t(`value.${index + 1}.desc` as keyof TranslationValue) as string
              }))} 
            />
          </HeroBanner>
          
          <div style={{ order: 1, position: 'relative', zIndex: 1 }}>
            <WhySection 
              whyChina={whyChinaData}
              whyUs={whyUsData}
            />
          </div>
          
          <div style={{ order: 2, position: 'relative', zIndex: 1 }}>
            <DestinationSection 
              title={t('destinationsTitle') as string}
              destinations={featuredDestinations}
              currentLanguage={currentLanguage}
            />
          </div>
          
          <div style={{ order: 3, position: 'relative', zIndex: 1 }}>
            <TravelStoriesSection 
              title={t('storiesTitle') as string}
              stories={travelStories} 
              onReadMoreClick={(storyId: string) => {
                window.location.href = `/stories/${storyId}`;
              }}
              currentLanguage={currentLanguage}
            />
          </div>
          
          <div style={{ order: 4, position: 'relative', zIndex: 1 }}>
            <GuidesSection 
              title={t('guidesTitle') as string}
              guides={travelGuides}
              currentLanguage={currentLanguage}
            />
          </div>
          
          <div style={{ order: 5, position: 'relative', zIndex: 1 }}>
            <CallToAction 
              data={{
                ...ctaData,
                title: t('ctaTitle') as string,
                subtitle: t('ctaSubtitle') as string,
                buttonText: t('startPlanning') as string
              }}
            />
          </div>
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