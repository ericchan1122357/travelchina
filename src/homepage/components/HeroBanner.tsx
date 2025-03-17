'use client';

import { HeroBannerData } from '../types';

interface HeroBannerProps {
  data: HeroBannerData;
  onCtaClick: () => void;
}

const HeroBanner = ({ data, onCtaClick }: HeroBannerProps) => {
  return (
    <div className="relative h-screen">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
      >
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* 内容 */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
            {data.subtitle}
          </p>
          <button
            onClick={onCtaClick}
            className="bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-red-700 transition-colors duration-300 animate-fade-in-delay-2"
          >
            {data.ctaText}
          </button>
        </div>
      </div>

      {/* 向下滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner; 