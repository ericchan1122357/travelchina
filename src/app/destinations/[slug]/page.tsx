'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import DestinationTemplate from '../utils/DestinationTemplate';
import Link from 'next/link';

// 专用页面的目的地列表（这些有自己的独立页面）
const CUSTOM_DESTINATIONS = ['beijing', 'shanghai'];

// 支持的一般目的地列表
const SUPPORTED_DESTINATIONS = ['xian', 'chengdu', 'hangzhou', 'guilin', 'huangshan', 'kunming'];

export default function DestinationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 如果目的地不在支持列表中，返回404
  if (!SUPPORTED_DESTINATIONS.includes(slug) && !CUSTOM_DESTINATIONS.includes(slug)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            {currentLanguage === 'zh' ? '目的地未找到' : 'Destination not found'}
          </p>
          <Link 
            href="/" 
            className="px-4 py-2 bg-china-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            {currentLanguage === 'zh' ? '返回首页' : 'Go to Homepage'}
          </Link>
        </div>
      </div>
    );
  }

  // 如果是专用页面的目的地，重定向到专用页面
  if (CUSTOM_DESTINATIONS.includes(slug)) {
    router.push(`/destinations/${slug}`);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-china-red"></div>
      </div>
    );
  }
  
  // 使用通用模板渲染目的地页面
  return <DestinationTemplate destinationSlug={slug} />;
} 