'use client';

import { useState, useRef } from 'react';
import { TravelGuide, Language } from '../types';
import OptimizedImage from './common/OptimizedImage';
import { getTranslation, TranslationValue } from '../utils/translations';

interface GuidesSectionProps {
  title: string;
  guides: TravelGuide[];
  currentLanguage: Language;
}

const GuidesSection = ({
  title,
  guides,
  currentLanguage
}: GuidesSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key) as string;

  const checkScrollButtons = () => {
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

    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="py-16 bg-gray-50"
      aria-labelledby="guides-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          id="guides-title"
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          {title}
        </h2>
        
        {/* 滚动容器 */}
        <div className="relative">
          {/* 左侧箭头 */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-china-red focus:ring-offset-2"
              aria-label={t('scrollLeft')}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          )}

          {/* 右侧箭头 */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-china-red focus:ring-offset-2"
              aria-label={t('scrollRight')}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          )}

          {/* 指南卡片滚动区域 */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar"
            onScroll={checkScrollButtons}
          >
            {guides.map((guide) => (
              <article
                key={guide.id}
                className="flex-none w-full sm:w-96 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <OptimizedImage
                    src={guide.imageUrl}
                    alt={t(`guide.${guide.id}.title` as keyof TranslationValue)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t(`guide.${guide.id}.title` as keyof TranslationValue)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`guide.${guide.id}.description` as keyof TranslationValue)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {t(`guide.${guide.id}.category` as keyof TranslationValue)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {guide.publishDate}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
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

export default GuidesSection; 