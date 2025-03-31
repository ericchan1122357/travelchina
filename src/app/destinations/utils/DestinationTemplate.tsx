'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationContent, DestinationContent, DestinationSection } from './destinationContent';
import { getThemesForCity, getCitiesByTheme, getThemeName } from './destinationThemes';
import Image from 'next/image';

interface DestinationTemplateProps {
  destinationSlug: string;
}

// 将HTML字符串安全转换为React元素
const createMarkup = (html: string) => {
  return { __html: html };
};

// 渲染内容部分
const ContentSection = ({ section }: { section: DestinationSection }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 pb-2">{section.title}</h2>
      <div 
        className="text-gray-700 text-lg leading-relaxed"
        dangerouslySetInnerHTML={createMarkup(section.content as string)}
      />
    </div>
  );
};

// 推荐城市卡片组件
const RecommendedCityCard = ({ cityId, cityName, onClick }: { cityId: string, cityName: string, onClick: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center w-full h-36 border border-gray-100"
    >
      <div className="font-medium text-xl text-gray-800">{cityName}</div>
    </button>
  );
};

// 目的地页面通用模板
export default function DestinationTemplate({ destinationSlug }: DestinationTemplateProps) {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  
  // 获取当前目的地和语言的内容
  const content = getDestinationContent(destinationSlug, currentLanguage);
  
  // 获取相关城市的翻译文本
  const getRelatedCitiesText = () => {
    switch (currentLanguage) {
      case 'zh': return '建议一同游览';
      case 'en': return 'Recommended Places to Visit';
      case 'fr': return 'Lieux recommandés à visiter';
      case 'de': return 'Empfohlene Besichtigungsorte';
      case 'es': return 'Lugares recomendados para visitar';
      case 'ja': return 'おすすめの観光地';
      case 'ko': return '추천 방문 장소';
      case 'ru': return 'Рекомендуемые места для посещения';
      default: return 'Recommended Places to Visit';
    }
  };
  
  // 获取开始定制旅程的翻译文本
  const getPlanJourneyText = () => {
    switch (currentLanguage) {
      case 'zh': return '开始定制旅程';
      case 'en': return 'Start Planning Your Journey';
      case 'fr': return 'Commencer à planifier votre voyage';
      case 'de': return 'Beginnen Sie mit der Planung Ihrer Reise';
      case 'es': return 'Comience a planificar su viaje';
      case 'ja': return '旅行プランを始める';
      case 'ko': return '여행 계획 시작하기';
      case 'ru': return 'Начать планирование путешествия';
      default: return 'Start Planning Your Journey';
    }
  };

  // 查找相关城市
  const findRelatedCities = () => {
    // 获取当前城市所属的主题
    const cityThemes = getThemesForCity(destinationSlug);
    
    if (cityThemes.length === 0) return [];
    
    // 从第一个主题中获取相关城市（除了当前城市）
    const relatedCities = getCitiesByTheme(cityThemes[0].id)
      .filter(city => city !== destinationSlug)
      .slice(0, 4); // 最多显示4个相关城市
      
    return relatedCities;
  };
  
  // 获取城市名称
  const getCityName = (cityId: string) => {
    // 简单示例，实际应该有一个函数来获取各语言的城市名称
    switch(cityId) {
      case 'beijing': return currentLanguage === 'zh' ? '北京' : 'Beijing';
      case 'shanghai': return currentLanguage === 'zh' ? '上海' : 'Shanghai';
      case 'xian': return currentLanguage === 'zh' ? '西安' : "Xi'an";
      case 'chengdu': return currentLanguage === 'zh' ? '成都' : 'Chengdu';
      case 'hangzhou': return currentLanguage === 'zh' ? '杭州' : 'Hangzhou';
      case 'guilin': return currentLanguage === 'zh' ? '桂林' : 'Guilin';
      case 'huangshan': return currentLanguage === 'zh' ? '黄山' : 'Huangshan';
      case 'zhangjiajie': return currentLanguage === 'zh' ? '张家界' : 'Zhangjiajie';
      case 'jiuzhaigou': return currentLanguage === 'zh' ? '九寨沟' : 'Jiuzhaigou';
      case 'chongqing': return currentLanguage === 'zh' ? '重庆' : 'Chongqing';
      default: return cityId;
    }
  };
  
  // 处理城市点击
  const handleCityClick = (cityId: string) => {
    router.push(`/destinations?city=${cityId}`, { scroll: true });
  };
  
  const relatedCities = findRelatedCities();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部横幅区域 - 苹果风格设计 */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* 横幅图片 */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image 
              src="/images/destinations/map-placeholder.svg"
              alt={`${content.title} Panorama`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        {/* 标题区域使用毛玻璃效果 */}
        <div className="absolute bottom-0 left-0 w-full backdrop-blur-xl bg-white/70 py-12">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">{content.title}</h1>
            <p className="text-2xl max-w-3xl text-gray-700">{content.subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* 主要内容区域 */}
      <main className="container mx-auto py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* 文章内容区域 */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mb-16">
            {content.sections && content.sections.length > 0 ? (
              content.sections.map((section, index) => (
                <ContentSection key={`${destinationSlug}-section-${index}`} section={section} />
              ))
            ) : (
              <div className="text-center py-24">
                <p className="text-gray-500 italic text-xl">
                  {currentLanguage === 'zh' 
                    ? '更详细的内容正在编写中，敬请期待...' 
                    : 'More detailed content is being prepared. Stay tuned...'}
                </p>
              </div>
            )}
            
            {/* 建议一同游览 - 新增部分 */}
            {relatedCities.length > 0 && (
              <div className="mt-20">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800 pb-2">{getRelatedCitiesText()}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {relatedCities.map(cityId => (
                    <RecommendedCityCard
                      key={cityId}
                      cityId={cityId}
                      cityName={getCityName(cityId)}
                      onClick={() => handleCityClick(cityId)}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* 开始定制旅程 - 新增部分 */}
            <div className="mt-24 text-center">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">{getPlanJourneyText()}</h2>
              <Link href="/planner" className="inline-block bg-china-red hover:bg-red-700 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-xl">
                {currentLanguage === 'zh' ? '规划您的旅程' : 'Plan your journey'}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 