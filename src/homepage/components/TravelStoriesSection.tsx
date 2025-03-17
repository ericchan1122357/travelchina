'use client';

import { useState, useRef } from 'react';
import { TravelStory } from '../types';
import OptimizedImage from './common/OptimizedImage';

interface TravelStoriesSectionProps {
  title: string;
  stories: TravelStory[];
  onReadMoreClick: (storyId: string) => void;
}

const TravelStoriesSection = ({
  title,
  stories,
  onReadMoreClick,
}: TravelStoriesSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
      aria-labelledby="stories-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          id="stories-title"
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
              aria-label="向左滚动"
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
              aria-label="向右滚动"
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

          {/* 故事卡片容器 */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
            role="region"
            aria-label="旅行故事列表"
            tabIndex={0}
          >
            <div className="flex space-x-6 min-w-max">
              {stories.map((story) => (
                <article
                  key={story.id}
                  className="flex-none w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300
                           focus:outline-none focus:ring-2 focus:ring-china-red focus:ring-offset-2"
                >
                  {/* 故事图片 */}
                  <div className="relative aspect-w-16 aspect-h-9">
                    <OptimizedImage
                      src={story.imageUrl}
                      alt={`${story.title}的配图`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 故事内容 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>

                    {/* 作者信息 */}
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <OptimizedImage
                          src={story.author.avatar}
                          alt={`${story.author.name}的头像`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {story.author.name}
                        </p>
                        <p className="text-sm text-gray-500">{story.destination}</p>
                      </div>
                    </div>

                    {/* 阅读更多按钮 */}
                    <button
                      onClick={() => onReadMoreClick(story.id)}
                      className="w-full mt-4 bg-china-red text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300
                               focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                      aria-label={`阅读更多关于${story.title}的内容`}
                    >
                      阅读更多
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStoriesSection; 