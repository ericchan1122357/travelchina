'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckIcon, XMarkIcon, PlusIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationContent, DestinationContent, DestinationSection } from './destinationContent';
import { getThemesForCity, getCitiesByTheme } from './destinationThemes';
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
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{section.title}</h2>
      <div 
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={createMarkup(section.content as string)}
      />
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
  
  // 获取当前目的地和语言的内容
  const content = getDestinationContent(destinationSlug, currentLanguage);
  
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
    } else {
      setIsAddedToPlan(false);
    }
  }, [destinationSlug]);
  
  // 返回目的地列表页面
  const goBackToList = () => {
    router.push('/destinations');
  };
  
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
  
  // 从旅行计划中删除城市
  const removeFromPlan = () => {
    const plannedCities = JSON.parse(localStorage.getItem('plannedCities') || '[]');
    const updatedCities = plannedCities.filter((city: string) => city !== destinationSlug);
    localStorage.setItem('plannedCities', JSON.stringify(updatedCities));
    setIsAddedToPlan(false);
    setShowConfirmation(false);
  };
  
  // 前往规划页面
  const goToPlannerPage = () => {
    router.push('/planner');
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
        'de': 'Reiseplan stornieren',
        'es': 'Cancelar el plan de viaje',
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
            {/* 浏览其他城市按钮 */}
            <div className="flex justify-end mb-6">
              <button
                onClick={goBackToList}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowUturnLeftIcon className="w-5 h-5 mr-1" />
                {getTranslation('browseOtherCities')}
              </button>
            </div>
            
            {content.sections && content.sections.length > 0 ? (
              content.sections.map((section, index) => (
                <ContentSection key={`${destinationSlug}-section-${index}`} section={section} />
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
            <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 左侧：建议一同游览 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{getTranslation('suggestedVisits')}</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedCities.map(cityId => (
                    <button
                      key={cityId}
                      onClick={() => router.push(`/destinations?city=${cityId}`)}
                      className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium transition-colors"
                    >
                      {cityId.charAt(0).toUpperCase() + cityId.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* 右侧：加入旅行计划 */}
              <div className="mt-8">
                {!showConfirmation ? (
                  <button
                    onClick={addToPlan}
                    className={`flex items-center justify-center w-full px-4 py-3 rounded-xl ${
                      isAddedToPlan 
                        ? 'bg-green-50 text-green-600 border border-green-200' 
                        : 'bg-red-600 hover:bg-red-700 text-white'
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
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-green-700 font-medium mb-4">{getTranslation('addedToPlan')}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={removeFromPlan}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50"
                      >
                        <XMarkIcon className="w-4 h-4 mr-1" />
                        {getTranslation('cancelPlan')}
                      </button>
                      <button
                        onClick={continueBrowsing}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm"
                      >
                        {getTranslation('continueBrowsing')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 