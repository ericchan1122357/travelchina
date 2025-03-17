'use client';

import { useState, useRef } from 'react';
import { Destination } from '../types';
import DestinationCard from './DestinationCard';

interface DestinationSectionProps {
  title: string;
  destinations: Destination[];
}

const DestinationSection: React.FC<DestinationSectionProps> = ({
  title,
  destinations
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // 检查是否可以向左滚动
    setShowLeftArrow(container.scrollLeft > 0);
    
    // 检查是否可以向右滚动
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowRightArrow(container.scrollLeft < maxScrollLeft - 10); // 添加容差值
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          
          {/* 桌面端显示的查看全部链接 */}
          <a href="/destinations" className="hidden md:block text-red-600 hover:text-red-700 font-medium">
            查看全部目的地
          </a>
        </div>
        
        {/* 滚动容器 */}
        <div className="relative">
          {/* 左滚动按钮 */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none hidden md:block"
              aria-label="向左滚动"
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
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
          
          {/* 右滚动按钮 */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none hidden md:block"
              aria-label="向右滚动"
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
            查看全部目的地
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* 自定义样式以隐藏滚动条但保留功能 */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default DestinationSection; 