'use client';

import { ReactNode } from 'react';
import { useEffect, useState, useRef } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // 手动控制按钮跟随效果
      if (containerRef.current && ctaButtonRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        
        // 当横幅在视口中时，使按钮保持在合适位置
        if (containerTop <= 0 && containerTop > -containerHeight) {
          // 计算按钮的相对位置（距离横幅底部的距离）
          const relativePosition = Math.min(Math.abs(containerTop) / 2, containerHeight / 2);
          ctaButtonRef.current.style.transform = `translateY(${relativePosition}px)`;
        } else {
          ctaButtonRef.current.style.transform = 'translateY(0)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 优化的视频预加载
  useEffect(() => {
    const preloadVideo = async () => {
      try {
        if (videoRef.current) {
          videoRef.current.preload = 'auto';
          videoRef.current.src = '/videos/banner-video.mp4';
          
          // 设置视频属性
          videoRef.current.loop = true;
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          
          // 开始加载视频
          await videoRef.current.load();
          
          // 确保视频自动播放
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error('视频自动播放失败:', error);
            });
          }
        }
      } catch (error) {
        console.error('视频预加载失败:', error);
        setVideoError(true);
      }
    };

    preloadVideo();
  }, []);

  // 计算视差效果
  const parallaxOffset = Math.min(scrollY * 0.5, 100); // 限制最大偏移

  // 使用相对路径而不是绝对URL
  const plannerUrl = `/planner`;

  return (
    <div 
      ref={containerRef}
      className="relative h-[56.25vw] max-h-[85vh] overflow-hidden bg-black"
      role="banner"
      aria-label="主页横幅"
      style={{ 
        gridTemplateColumns: 'none',  // 清除任何网格设置
        backgroundImage: 'none',       // 清除背景图像
      }}
    >
      {/* 背景层 */}
      <div className="absolute inset-0 bg-black" style={{ background: 'black', backgroundImage: 'none' }}>
        {!videoError ? (
          <div className="absolute inset-0" style={{ background: 'black', backgroundImage: 'none' }}>
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ 
                transform: 'translateZ(0)',
                background: 'black',
                backgroundImage: 'none',
                border: 'none',
                outline: 'none',
                gridTemplateColumns: 'none',
                gridTemplateRows: 'none',
                gridGap: '0',
                gap: '0'
              }}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transform: `translate3d(0, ${parallaxOffset}px, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  perspective: 1000,
                  WebkitPerspective: 1000,
                  background: 'black',
                  backgroundImage: 'none',
                  filter: 'brightness(1.2) contrast(1.1)', // 增加亮度和对比度
                  boxShadow: 'none',
                  border: 'none',
                  outline: 'none',
                  opacity: isVideoLoaded ? 1 : 0
                }}
                onLoadedData={() => setIsVideoLoaded(true)}
                onError={() => {
                  console.error('视频加载失败，切换到图片背景');
                  setVideoError(true);
                }}
              />
            </div>
          </div>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${data.backgroundImageUrl})`,
              transform: `translate3d(0, ${parallaxOffset}px, 0)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              perspective: 1000,
              WebkitPerspective: 1000,
              filter: 'brightness(1.2) contrast(1.1)' // 增加亮度和对比度
            }}
          />
        )}
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>
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
          <div 
            ref={ctaButtonRef}
            className="relative" 
            style={{ 
              position: 'relative',
              zIndex: 100,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <a
              href={plannerUrl}
              className="group relative inline-flex items-center bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-red-700 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]
                     transition-all duration-300 ease-out
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent 
                     cursor-pointer text-center no-underline overflow-hidden animate-fade-in-delay-2"
              aria-label={data.ctaText}
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