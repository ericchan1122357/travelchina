'use client';

import { useState, useRef } from 'react';
import { Destination, Language } from '../types';
import DestinationCard from './DestinationCard';
import { getTranslation, getCurrentSeasonTitle } from '../utils/translations';
import { TranslationValue } from '../utils/translations/types';

interface DestinationSectionProps {
  title?: string;
  destinations: Destination[];
  currentLanguage: Language;
}

const DestinationSection: React.FC<DestinationSectionProps> = ({
  destinations,
  currentLanguage
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key) as string;

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const newScrollPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {getCurrentSeasonTitle(currentLanguage)}
          </h2>
          
          {/* 桌面端显示的查看全部链接 */}
          <a href="/destinations" className="hidden md:block text-red-600 hover:text-red-700 font-medium">
            {t('viewAllDestinations')}
          </a>
        </div>
        
        {/* 滚动容器 */}
        <div className="relative">
          {/* 左滚动按钮 */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none hidden md:block"
              aria-label={t('scrollLeft')}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {/* 目的地卡片滚动区域 */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar"
            onScroll={handleScroll}
          >
            {destinations.map((destination) => (
              <div key={destination.id} className="flex-shrink-0 w-full sm:w-80">
                <DestinationCard 
                  destination={destination}
                  currentLanguage={currentLanguage}
                />
              </div>
            ))}
          </div>
          
          {/* 右滚动按钮 */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none hidden md:block"
              aria-label={t('scrollRight')}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        
        {/* 移动端显示的查看全部链接 */}
        <div className="mt-6 text-center md:hidden">
          <a href="/destinations" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
            {t('viewAllDestinations')}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* 自定义样式以隐藏滚动条但保留功能 */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default DestinationSection; 