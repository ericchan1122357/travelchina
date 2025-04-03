'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckIcon, XMarkIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationContent, DestinationContent, DestinationSection } from './destinationContent';
import { getThemesForCity, getCitiesByTheme } from './destinationThemes';

interface DestinationTemplateProps {
  destinationSlug: string;
}

// 将HTML字符串安全转换为React元素
export function createMarkup(html: string) {
  // 为景点名称添加样式 (h3标签)
  let styledHtml = html.replace(
    /<h3>(.*?)<\/h3>/g, 
    '<h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">$1</h3>'
  );
  
  // 为重要信息添加样式 (strong标签)
  styledHtml = styledHtml.replace(
    /<strong>(.*?)<\/strong>/g,
    '<strong class="font-semibold text-gray-800 dark:text-gray-200">$1</strong>'
  );
  
  // 添加图片/视频容器空间
  styledHtml = styledHtml.replace(
    /<h3 class=".*?">(.*?)<\/h3>/g,
    '<h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">$1</h3><div class="media-container mb-6 mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-2 border border-dashed border-gray-300 dark:border-gray-600"><p class="text-center text-gray-500 dark:text-gray-400 py-12">图片/视频空间</p></div>'
  );
  
  // 为段落添加样式
  styledHtml = styledHtml.replace(
    /<p>(.*?)<\/p>/g,
    '<p class="mb-4 leading-relaxed">$1</p>'
  );

  // 为列表添加样式
  styledHtml = styledHtml.replace(
    /<ul>([\s\S]*?)<\/ul>/g,
    '<ul class="list-disc pl-5 my-4 space-y-2">$1</ul>'
  );
  
  styledHtml = styledHtml.replace(
    /<li>(.*?)<\/li>/g,
    '<li class="ml-4 mb-2">$1</li>'
  );
  
  return { __html: styledHtml };
}

// 渲染内容部分
const ContentSection = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h3:text-xl prose-h3:my-4 prose-p:mb-4 prose-strong:text-gray-800 dark:prose-strong:text-gray-200 prose-ul:my-4 prose-li:ml-4 prose-li:mb-2">
        {typeof content === 'string' ? (
          <div dangerouslySetInnerHTML={createMarkup(content)} />
        ) : (
          content
        )}
      </div>
    </div>
  );
};

// 目的地页面通用模板
export default function DestinationTemplate({ destinationSlug }: DestinationTemplateProps) {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const [isAddedToPlan, setIsAddedToPlan] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [relatedCities, setRelatedCities] = useState<string[]>([]);
  const [content, setContent] = useState<DestinationContent>({
    title: '',
    subtitle: '',
    sections: []
  });
  const [contentLoaded, setContentLoaded] = useState(false);
  
  // 在组件挂载时处理浏览器返回按钮
  useEffect(() => {
    // 从URL中解析基础路径和语言前缀
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(Boolean);
    
    // 检查是否有语言前缀
    let basePath = '';
    if (pathParts.length > 0 && ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'ru'].includes(pathParts[0])) {
      basePath = `/${pathParts[0]}`;
    }
    
    // 构造目的地列表页URL
    const destinationsListUrl = `${basePath}/destinations`;
    
    // 在会话存储中设置一个标志，表示这是一个城市详情页
    sessionStorage.setItem('isFromCityDetail', 'true');
    
    // 添加popstate事件监听器
    const handlePopState = () => {
      if (sessionStorage.getItem('isFromCityDetail') === 'true') {
        // 清除会话存储中的标志
        sessionStorage.removeItem('isFromCityDetail');
        // 使用location.replace避免在历史记录中添加新条目
        window.location.replace(destinationsListUrl);
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // 清理函数
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  // 获取当前目的地和语言的内容 - 确保每当语言变化时重新获取
  useEffect(() => {
    // 获取内容并设置状态
    const destinationContent = getDestinationContent(destinationSlug, currentLanguage);
    setContent(destinationContent);
    setContentLoaded(true);
    
    // 如果内容加载但为空，尝试最多3次重新加载
    let retryCount = 0;
    const maxRetries = 3;
    
    const retryLoadingContent = () => {
      if (destinationContent.sections.length === 0 && retryCount < maxRetries) {
        retryCount++;
        console.log(`Retry ${retryCount}/${maxRetries} loading content for ${destinationSlug} in ${currentLanguage}`);
        
        // 500ms后重试
        setTimeout(() => {
          const newContent = getDestinationContent(destinationSlug, currentLanguage);
          setContent(newContent);
        }, 500);
      }
    };
    
    retryLoadingContent();
    
    console.log(`Language changed to ${currentLanguage}, updating content for ${destinationSlug}`);
  }, [destinationSlug, currentLanguage]);
  
  // 强制刷新内容
  const refreshContent = () => {
    const freshContent = getDestinationContent(destinationSlug, currentLanguage);
    setContent(freshContent);
    console.log("Content manually refreshed");
  };
  
  // 获取相关城市
  useEffect(() => {
    // 获取当前城市所在的主题
    const themes = getThemesForCity(destinationSlug);
    if (themes.length > 0) {
      // 选择第一个主题中的城市作为相关城市
      let cities = getCitiesByTheme(themes[0].id);
      // 移除当前城市
      cities = cities.filter(city => city !== destinationSlug);
      // 最多显示5个相关城市
      setRelatedCities(cities.slice(0, 5));
    }
  }, [destinationSlug]);
  
  // 检查本地存储，看是否已经将该城市添加到计划中
  useEffect(() => {
    const plannedCities = JSON.parse(localStorage.getItem('plannedCities') || '[]');
    if (plannedCities.includes(destinationSlug)) {
      setIsAddedToPlan(true);
    }
  }, [destinationSlug]);
  
  // 将城市添加到旅行计划
  const addToPlan = () => {
    const plannedCities = JSON.parse(localStorage.getItem('plannedCities') || '[]');
    if (!plannedCities.includes(destinationSlug)) {
      plannedCities.push(destinationSlug);
      localStorage.setItem('plannedCities', JSON.stringify(plannedCities));
    }
    setIsAddedToPlan(true);
    setShowConfirmation(true);
  };
  
  // 取消旅行计划
  const cancelPlan = () => {
    const plannedCities = JSON.parse(localStorage.getItem('plannedCities') || '[]');
    const updatedPlannedCities = plannedCities.filter((city: string) => city !== destinationSlug);
    localStorage.setItem('plannedCities', JSON.stringify(updatedPlannedCities));
    setIsAddedToPlan(false);
    setShowConfirmation(false);
  };
  
  // 前往规划页面
  const goToPlannerPage = () => {
    // 从URL中解析基础路径和语言前缀
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(Boolean);
    
    // 检查是否有语言前缀
    let basePath = '';
    if (pathParts.length > 0 && pathParts[0].length === 2) {
      basePath = `/${pathParts[0]}`;
    }
    
    // 构造规划页面URL
    const plannerUrl = `${basePath}/planner`;
    window.location.href = plannerUrl;
  };
  
  // 返回到目的地列表页
  const goToDestinationsList = () => {
    // 从URL中解析基础路径和语言前缀
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(Boolean);
    
    // 检查是否有语言前缀
    let basePath = '';
    if (pathParts.length > 0 && ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'ru'].includes(pathParts[0])) {
      basePath = `/${pathParts[0]}`;
    }
    
    // 构造目的地列表页URL
    const destinationsUrl = `${basePath}/destinations`;
    
    // 清除会话存储中的标志，因为我们主动导航
    sessionStorage.removeItem('isFromCityDetail');
    
    // 使用location.replace替换当前历史记录
    window.location.replace(destinationsUrl);
  };
  
  // 继续浏览，关闭确认框
  const continueBrowsing = () => {
    setShowConfirmation(false);
  };
  
  // 获取翻译文本
  const getTranslation = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'suggestedVisits': {
        'zh': '建议一同游览',
        'en': 'Suggested visits',
        'fr': 'Visites suggérées',
        'de': 'Vorgeschlagene Besuche',
        'es': 'Visitas sugeridas',
        'ja': 'おすすめの観光地',
        'ko': '함께 둘러보기 추천',
        'ru': 'Рекомендуемые посещения',
      },
      'addToPlan': {
        'zh': '加入旅行计划',
        'en': 'Add to travel plan',
        'fr': 'Ajouter au plan de voyage',
        'de': 'Zum Reiseplan hinzufügen',
        'es': 'Añadir al plan de viaje',
        'ja': '旅行プランに追加',
        'ko': '여행 계획에 추가',
        'ru': 'Добавить в план путешествия',
      },
      'startPlanning': {
        'zh': '开始定制行程',
        'en': 'Start customizing itinerary',
        'fr': 'Commencer à personnaliser l\'itinéraire',
        'de': 'Beginnen Sie mit der Anpassung der Reiseroute',
        'es': 'Empieza a personalizar el itinerario',
        'ja': '旅程のカスタマイズを開始',
        'ko': '일정 맞춤 설정 시작',
        'ru': 'Начать настройку маршрута',
      },
      'continueBrowsing': {
        'zh': '继续游览',
        'en': 'Continue browsing',
        'fr': 'Continuer à naviguer',
        'de': 'Weiter stöbern',
        'es': 'Seguir navegando',
        'ja': '閲覧を続ける',
        'ko': '계속 둘러보기',
        'ru': 'Продолжить просмотр',
      },
      'cancelPlan': {
        'zh': '取消旅行计划',
        'en': 'Cancel travel plan',
        'fr': 'Annuler le plan de voyage',
        'de': 'Reiseplan abbrechen',
        'es': 'Cancelar plan de viaje',
        'ja': '旅行プランをキャンセル',
        'ko': '여행 계획 취소',
        'ru': 'Отменить план путешествия',
      },
      'addedToPlan': {
        'zh': '已加入计划',
        'en': 'Added to plan',
        'fr': 'Ajouté au plan',
        'de': 'Zum Plan hinzugefügt',
        'es': 'Añadido al plan',
        'ja': 'プランに追加済み',
        'ko': '계획에 추가됨',
        'ru': 'Добавлено в план',
      },
      'browseOtherCities': {
        'zh': '浏览其他城市',
        'en': 'Browse other cities',
        'fr': 'Parcourir d\'autres villes',
        'de': 'Andere Städte durchsuchen',
        'es': 'Explorar otras ciudades',
        'ja': '他の都市を閲覧',
        'ko': '다른 도시 둘러보기',
        'ru': 'Просмотреть другие города',
      }
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };
  
  // 如果内容加载中，显示加载状态
  if (!contentLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  return (
    <div className="bg-white">
      {/* 顶部横幅区域 */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* 横幅图片 */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          {/* 如果你有图片可以放在这里，否则显示一个占位符 */}
          <p className="text-gray-500">{content.title} Panorama Image</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{content.title}</h1>
          <p className="text-xl max-w-2xl">{content.subtitle}</p>
        </div>
      </div>
      
      {/* 主要内容区域 */}
      <main className="container mx-auto py-8 px-6">
        <div className="max-w-4xl mx-auto">          
          {/* 文章内容区域 */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            {content.sections && content.sections.length > 0 ? (
              content.sections.map((section, index) => (
                <ContentSection key={`${destinationSlug}-section-${index}`} title={section.title} content={section.content} />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 italic">
                  {currentLanguage === 'zh' 
                    ? '更详细的内容正在编写中，敬请期待...' 
                    : 'More detailed content is being prepared. Stay tuned...'}
                </p>
              </div>
            )}
            
            {/* 文章底部推荐区域 */}
            <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 左侧：建议一同游览 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{getTranslation('suggestedVisits')}</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedCities.map(cityId => {
                    // 从URL中解析基础路径和语言前缀
                    const currentUrl = new URL(window.location.href);
                    const pathParts = currentUrl.pathname.split('/').filter(Boolean);
                    
                    // 检查是否有语言前缀
                    let basePath = '';
                    if (pathParts.length > 0 && pathParts[0].length === 2) {
                      basePath = `/${pathParts[0]}`;
                    }
                    
                    return (
                      <button
                        key={cityId}
                        onClick={() => {
                          const cityUrl = `${basePath}/destinations?city=${cityId}`;
                          window.location.href = cityUrl;
                        }}
                        className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium transition-colors"
                      >
                        {cityId.charAt(0).toUpperCase() + cityId.slice(1)}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* 右侧：加入旅行计划 */}
              <div className="mb-8 mt-6">
                {!showConfirmation ? (
                  <button
                    onClick={addToPlan}
                    className={`flex items-center justify-center w-full px-4 py-3 rounded-xl ${
                      isAddedToPlan 
                        ? 'bg-green-50 text-green-600 border border-green-200' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    } font-medium transition-colors`}
                  >
                    {isAddedToPlan ? (
                      <>
                        <CheckIcon className="w-5 h-5 mr-2" />
                        {getTranslation('addedToPlan')}
                      </>
                    ) : (
                      <>
                        <PlusIcon className="w-5 h-5 mr-2" />
                        {getTranslation('addToPlan')}
                      </>
                    )}
                  </button>
                ) : (
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-blue-800 font-medium mb-4">{getTranslation('addedToPlan')}</p>
                    <div className="flex gap-3">
                      <button
                        onClick={goToPlannerPage}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm"
                      >
                        <CheckIcon className="w-4 h-4 mr-1" />
                        {getTranslation('startPlanning')}
                      </button>
                      <button
                        onClick={cancelPlan}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium text-sm"
                      >
                        <XMarkIcon className="w-4 h-4 mr-1" />
                        {getTranslation('cancelPlan')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* 浏览其他城市按钮 */}
            <div className="mt-6 text-center">
              <button
                onClick={goToDestinationsList}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                {getTranslation('browseOtherCities')}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 