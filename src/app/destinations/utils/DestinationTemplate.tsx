'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationContent, DestinationContent, DestinationSection } from './destinationContent';

interface DestinationTemplateProps {
  destinationSlug: string;
}

// 将HTML字符串安全转换为React元素
const createMarkup = (html: string) => {
  return { __html: html };
};

// 渲染内容部分
const ContentSection = ({ section }: { section: DestinationSection }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{section.title}</h2>
      <div 
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={createMarkup(section.content as string)}
      />
    </div>
  );
};

// 目的地页面通用模板
export default function DestinationTemplate({ destinationSlug }: DestinationTemplateProps) {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  
  // 获取当前目的地和语言的内容
  const content = getDestinationContent(destinationSlug, currentLanguage);
  
  // 获取返回按钮文本
  const getBackButtonText = () => {
    switch (currentLanguage) {
      case 'zh': return '返回';
      case 'en': return 'Back';
      case 'fr': return 'Retour';
      case 'de': return 'Zurück';
      case 'es': return 'Volver';
      case 'ja': return '戻る';
      case 'ko': return '돌아가기';
      case 'ru': return 'Назад';
      default: return 'Back';
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 顶部横幅区域 */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* 横幅图片 */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">{content.title} Panorama Image</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{content.title}</h1>
          <p className="text-xl max-w-2xl">{content.subtitle}</p>
        </div>
      </div>
      
      {/* 主要内容区域 */}
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <div className="mb-6">
            <button 
              onClick={() => router.back()} 
              className="flex items-center text-china-red hover:underline"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              {getBackButtonText()}
            </button>
          </div>
          
          {/* 文章内容区域 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {content.sections && content.sections.length > 0 ? (
              content.sections.map((section, index) => (
                <ContentSection key={`${destinationSlug}-section-${index}`} section={section} />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 italic">
                  {currentLanguage === 'zh' 
                    ? '更详细的内容正在编写中，敬请期待...' 
                    : 'More detailed content is being prepared. Stay tuned...'}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 