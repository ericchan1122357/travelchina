'use client';

import React from 'react';
import DestinationTemplate from '../utils/DestinationTemplate';
import { getDestinationContent } from '../utils/destinationContent';

// 支持的目的地列表
const supportedDestinations = [
  'beijing', 'shanghai', 'hangzhou', 'chengdu', 'xian', 
  'guilin', 'suzhou', 'nanjing', 'xiamen', 'lijiang',
  'paris', 'london', 'newyork', 'tokyo', 'rome', 
  'barcelona', 'sydney', 'dubai', 'singapore', 'bangkok'
];

interface DestinationPageProps {
  params: {
    slug: string;
  };
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = params;
  
  // 检查是否为支持的目的地
  const isSupported = supportedDestinations.includes(slug);
  
  if (!isSupported) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-red-500">
          目的地不存在
        </h1>
        <p className="text-center mt-4">
          抱歉，我们目前不提供关于 {slug} 的信息。请选择其他目的地。
        </p>
      </div>
    );
  }
  
  // 获取目的地内容
  const content = getDestinationContent(slug);
  
  // 渲染目的地模板
  return <DestinationTemplate 
    title={content.title}
    subtitle={content.subtitle}
    sections={content.sections}
  />;
} 