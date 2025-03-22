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

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  // 强制跳转函数 - 使用完整的绝对URL
  const forceNavigateToPlanner = (e: React.MouseEvent) => {
    e.preventDefault();
    // 获取当前域名
    const baseUrl = window.location.origin;
    // 直接修改location到完整URL
    window.location.href = `${baseUrl}/planner`;
    return false;
  };

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
          
          {/* 备用跳转区域 - 直接HTML链接和iframe组合 */}
          <div className="py-8 bg-gray-100 text-center">
            <p className="text-lg mb-4">如果上面的按钮无法跳转，请尝试以下链接：</p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <a 
                href="/planner"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg m-2"
                onClick={forceNavigateToPlanner}
              >
                方式1: 直接跳转到规划页
              </a>
              
              <form action="/planner" method="get" style={{display: 'inline'}} className="m-2">
                <button 
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg"
                >
                  方式2: 表单提交跳转
                </button>
              </form>
              
              <a 
                href={`${typeof window !== 'undefined' ? window.location.origin : ''}/planner`}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg m-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                方式3: 新窗口打开
              </a>
              
              <a 
                href="/directplanner.html"
                className="px-6 py-2 bg-amber-500 text-white rounded-lg m-2"
              >
                方式4: 使用静态HTML页面
              </a>
            </div>
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