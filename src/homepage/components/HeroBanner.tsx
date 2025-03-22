'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HeroBannerData } from '../types';
import OptimizedImage from './common/OptimizedImage';

interface HeroBannerProps {
  data: HeroBannerData;
}

const HeroBanner = ({ data }: HeroBannerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
    transition: 'transform 0.1s ease-out'
  };

  const handlePlannerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/planner');
  };

  return (
    <div 
      className="relative h-screen overflow-hidden"
      role="banner"
      aria-label="主页横幅"
    >
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${data.backgroundImageUrl})`,
          ...parallaxStyle
        }}
      >
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      </div>

      {/* 内容 */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in"
            aria-label={data.title}
          >
            {data.title}
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay"
            aria-label={data.subtitle}
          >
            {data.subtitle}
          </p>
          <button
            onClick={handlePlannerClick}
            className="inline-block bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                   hover:bg-red-700 transition-colors duration-300 animate-fade-in-delay-2
                   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent 
                   cursor-pointer"
            aria-label={data.ctaText}
          >
            {data.ctaText}
          </button>
        </div>
      </div>

      {/* 向下滚动指示器 */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        role="presentation"
        aria-hidden="true"
      >
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