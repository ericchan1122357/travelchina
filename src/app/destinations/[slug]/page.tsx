'use client';

import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { useRouter, useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import DestinationTemplate from '../utils/DestinationTemplate';

// 专用页面的目的地列表（这些有自己的独立页面）
const CUSTOM_DESTINATIONS = ['beijing', 'shanghai'];

// 支持的一般目的地列表
const SUPPORTED_DESTINATIONS = ['xian', 'chengdu', 'hangzhou', 'guilin', 'huangshan', 'kunming'];

export default function DestinationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  useEffect(() => {
    // 添加监听popstate事件来处理浏览器返回按钮
    const handlePopState = () => {
      // 当用户点击浏览器返回按钮时，检查当前URL是否包含目的地slug
      // 如果是城市详情页，则返回到destinations列表页
      const url = new URL(window.location.href);
      
      // 从URL中提取语言前缀
      const pathParts = url.pathname.split('/').filter(Boolean);
      let basePath = '';
      if (pathParts.length > 0 && pathParts[0].length === 2) {
        basePath = `/${pathParts[0]}`;
      }
      
      // 构造目的地列表页URL
      const destinationsUrl = `${basePath}/destinations`;
      
      // 检查sessionStorage中的直接访问标记
      const isDirectAccess = sessionStorage.getItem('directCityAccess') === 'true';
      
      // 如果是直接访问或者从city详情回退，则替换当前历史记录
      if (isDirectAccess || url.pathname.includes('/destinations/')) {
        // 替换当前历史记录，这样会跳过当前页面
        window.location.replace(destinationsUrl);
        // 清除标记
        sessionStorage.removeItem('directCityAccess');
      }
    };

    // 注册popstate事件监听器
    window.addEventListener('popstate', handlePopState);

    // 页面加载时检查是否需要设置直接访问标记
    // 只有直接通过URL访问时设置标记
    if (window.history.length <= 2) {
      sessionStorage.setItem('directCityAccess', 'true');
    }

    return () => {
      // 组件卸载时移除事件监听器
      window.removeEventListener('popstate', handlePopState);
    };
  }, [slug]);

  // 如果目的地不在支持列表中，返回404
  if (!SUPPORTED_DESTINATIONS.includes(slug) && !CUSTOM_DESTINATIONS.includes(slug)) {
    return notFound();
  }

  // 对于特定目的地（如北京、上海），使用specialDestinations中的路由而不是模板
  if (CUSTOM_DESTINATIONS.includes(slug)) {
    const basePath = currentLanguage === 'en' ? '' : `/${currentLanguage}`;
    const destinationPath = `${basePath}/destinations/${slug}`;
    
    return (
      <div className="min-h-screen">
        <iframe 
          src={destinationPath} 
          className="w-full min-h-screen border-none"
          title={`${slug} destination`}
        />
      </div>
    );
  }
  
  // 使用通用模板渲染目的地页面
  return <DestinationTemplate params={{ slug }} />;
} 