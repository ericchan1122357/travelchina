'use client';

import { ReactNode } from 'react';
import { useEffect, useState, useRef } from 'react';
import { HeroBannerData } from '../types';
import OptimizedImage from './common/OptimizedImage';

interface HeroBannerProps {
  data: HeroBannerData;
  children?: ReactNode;
  videoPreloaded?: boolean;  // 新增属性，标识视频是否已预加载
}

const HeroBanner = ({ data, children, videoPreloaded = false }: HeroBannerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(videoPreloaded);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // 控制按钮固定位置
      if (containerRef.current && ctaButtonRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const navbarHeight = 64; // 导航栏高度，约为16rem = 64px
        
        // 确保在横幅可见时，按钮保持在横幅区域内的固定位置
        if (containerRect.bottom > navbarHeight) {
          // 使按钮固定在横幅内合适位置，根据红色方框所示位置
          ctaButtonRef.current.style.position = 'absolute';
          ctaButtonRef.current.style.transform = 'none';
          ctaButtonRef.current.style.top = '60%'; // 位于英雄横幅的60%位置
          ctaButtonRef.current.style.left = '32%'; // 将按钮放置在红色方框所示位置
        } else {
          // 当横幅不可见或被导航栏遮挡时，隐藏按钮
          ctaButtonRef.current.style.position = 'absolute';
          ctaButtonRef.current.style.top = '-9999px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 初始调用一次，确保页面加载时正确设置
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 优化的视频预加载和播放控制
  useEffect(() => {
    // 如果视频已经预加载，不需要重新加载
    if (videoPreloaded && videoRef.current) {
      videoRef.current.src = '/videos/banner-video.mp4';
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
      videoRef.current.defaultMuted = true;
      
      // 尝试播放预加载的视频
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('预加载视频播放失败:', error);
        });
      }
      
      // 标记为已加载
      setIsVideoLoaded(true);
      return;
    }
    
    const preloadVideo = async () => {
      try {
        if (videoRef.current) {
          // 设置视频预加载
          videoRef.current.preload = 'auto';
          videoRef.current.src = '/videos/banner-video.mp4';
          
          // 强制设置视频属性
          videoRef.current.loop = true;
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          videoRef.current.autoplay = true;
          
          // 确保视频可以自动播放
          videoRef.current.defaultMuted = true;

          // 监听是否可以播放
          videoRef.current.addEventListener('canplaythrough', () => {
            // 尝试播放
            const playPromise = videoRef.current!.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                console.error('自动播放失败，尝试另一种方式:', error);
                
                // 监听用户交互，然后尝试播放
                const handleUserInteraction = () => {
                  videoRef.current!.play().catch(e => 
                    console.error('交互后播放仍失败:', e)
                  );
                  
                  // 移除事件监听
                  document.removeEventListener('click', handleUserInteraction);
                  document.removeEventListener('touchstart', handleUserInteraction);
                };
                
                document.addEventListener('click', handleUserInteraction);
                document.addEventListener('touchstart', handleUserInteraction);
              });
            }
          });
          
          // 确保正确加载
          await videoRef.current.load();
        }
      } catch (error) {
        console.error('视频预加载失败:', error);
        setVideoError(true);
      }
    };

    preloadVideo();

    // 组件卸载时清理
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        videoRef.current.load();
      }
    };
  }, [videoPreloaded]);

  // 计算视差效果
  const parallaxOffset = Math.min(scrollY * 0.5, 100); // 限制最大偏移

  // 使用相对路径而不是绝对URL
  const plannerUrl = `/planner`;

  return (
    <div 
      ref={containerRef}
      className="relative h-[56.25vw] max-h-[85vh] overflow-hidden hero-container"
      role="banner"
      aria-label="主页横幅"
      style={{ 
        backgroundColor: '#000', 
        gridTemplate: 'none',
        display: 'block',
        border: 'none', // 防止边框产生网格
        outline: 'none',
        backgroundImage: 'none' // 移除任何可能的背景图像
      }}
    >
      {/* 纯黑色背景层 - 用于防止任何网格透过 */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: '#000',
          zIndex: 1
        }}
      />

      {/* 背景层 */}
      <div 
        className="absolute inset-0 video-container"
        style={{ 
          backgroundColor: '#000',
          backgroundImage: 'none',
          display: 'block',
          zIndex: 2,
          border: 'none',
          outline: 'none'
        }}
      >
        {!videoError ? (
          <div 
            className="absolute inset-0 video-container" 
            style={{ 
              backgroundColor: '#000',
              backgroundImage: 'none',
              display: 'block',
              border: 'none',
              outline: 'none'
            }}
          >
            <div 
              className="absolute inset-0 overflow-hidden video-container" 
              style={{ 
                backgroundColor: '#000',
                backgroundImage: 'none',
                display: 'block',
                border: 'none',
                outline: 'none',
                boxShadow: 'none'
              }}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full video-background"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transform: `translate3d(0, ${parallaxOffset}px, 0)`,
                  display: 'block',
                  backgroundColor: '#000',
                  backgroundImage: 'none',
                  filter: 'brightness(1.2) contrast(1.1)', // 增加亮度和对比度
                  border: 'none',
                  outline: 'none',
                  opacity: isVideoLoaded ? 1 : 0,
                  transition: 'opacity 1000ms ease-in-out',
                  boxShadow: 'none'
                }}
                onLoadedData={() => setIsVideoLoaded(true)}
                onError={() => {
                  console.error('视频加载失败，切换到图片背景');
                  setVideoError(true);
                }}
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
          </div>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${data.backgroundImageUrl})`,
              transform: `translate3d(0, ${parallaxOffset}px, 0)`,
              filter: 'brightness(1.2) contrast(1.1)', // 增加亮度和对比度
              border: 'none',
              outline: 'none',
              boxShadow: 'none'
            }}
          />
        )}
        {/* 渐变遮罩 */}
        <div 
          className="absolute inset-0 pointer-events-none gradient-overlay"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
            display: 'block',
            zIndex: 3,
            border: 'none',
            outline: 'none',
            boxShadow: 'none'
          }}
        ></div>
      </div>

      {/* 内容 */}
      <div className="relative h-full flex flex-col justify-center items-start" style={{ zIndex: 4 }}>
        <div className="max-w-7xl mx-auto px-8 w-full text-white">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in"
            aria-label={data.title}
          >
            {data.title}
          </h1>
          <p 
            className="text-xl md:text-2xl mb-12 max-w-2xl animate-fade-in-delay"
            aria-label={data.subtitle}
          >
            {data.subtitle}
          </p>
          <div 
            ref={ctaButtonRef}
            className="inline-block hero-cta-button"
            style={{
              position: 'absolute',
              zIndex: 5, // 降低z-index，确保导航栏可以覆盖它
              transform: 'none'
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
        <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-7xl px-3 sm:px-4" style={{ zIndex: 4 }}>
          {children}
        </div>
      )}

      {/* 向下滚动指示器 */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
        role="presentation"
        aria-hidden="true"
        style={{ zIndex: 4 }} // 降低z-index确保不会超过导航栏
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