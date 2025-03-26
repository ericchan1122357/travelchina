'use client';

import { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { HeroBannerData } from '../types';
import OptimizedImage from './common/OptimizedImage';

interface HeroBannerProps {
  data: HeroBannerData;
  children?: ReactNode;
}

const HeroBanner = ({ data, children }: HeroBannerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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

  // 使用相对路径而不是绝对URL
  const plannerUrl = `/planner`;

  return (
    <div 
      className="relative h-[85vh] overflow-hidden"
      role="banner"
      aria-label="主页横幅"
    >
      {/* 背景层 */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`object-cover w-full h-full transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={parallaxStyle}
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => {
              console.error('视频加载失败，切换到图片背景');
              setVideoError(true);
            }}
          >
            <source src="/videos/banner-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${data.backgroundImageUrl})`,
              ...parallaxStyle
            }}
          />
        )}
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
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
          <div className="relative" style={{ zIndex: 100 }}>
            <a
              href={plannerUrl}
              className="group relative inline-flex items-center bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-red-700 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]
                     transition-all duration-300 ease-out
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent 
                     cursor-pointer text-center no-underline overflow-hidden animate-fade-in-delay-2"
              aria-label={data.ctaText}
              style={{ position: 'relative', zIndex: 999 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                {data.ctaText}
                <svg 
                  className="ml-0 w-0 h-5 group-hover:w-5 group-hover:ml-2 transition-all duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </a>
          </div>
        </div>
      </div>

      {/* 在这里渲染子组件 */}
      {children && (
        <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-7xl px-3 sm:px-4">
          {children}
        </div>
      )}

      {/* 向下滚动指示器 */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
        role="presentation"
        aria-hidden="true"
        style={{ zIndex: 50 }}
      >
        <svg
          className="w-5 h-5 text-white opacity-70"
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