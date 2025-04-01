'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationContent } from './destinationContent';

interface DestinationTemplateProps {
  destinationSlug: string;
}

export default function DestinationTemplate({ destinationSlug }: DestinationTemplateProps) {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  
  // 获取目的地内容
  const content = getDestinationContent(destinationSlug, currentLanguage);
  
  // 返回到目的地列表
  const handleBackClick = () => {
    router.push('/destinations');
  };
  
  // 获取翻译文本
  const getTranslation = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'backToDestinations': {
        'zh': '返回目的地列表',
        'en': 'Back to Destinations',
        'fr': 'Retour aux Destinations',
        'de': 'Zurück zu Reisezielen',
        'es': 'Volver a Destinos',
        'ja': '目的地リストに戻る',
        'ko': '목적지 목록으로 돌아가기',
        'ru': 'Назад к направлениям',
      },
      'loadingContent': {
        'zh': '正在加载内容...',
        'en': 'Loading content...',
        'fr': 'Chargement du contenu...',
        'de': 'Inhalt wird geladen...',
        'es': 'Cargando contenido...',
        'ja': 'コンテンツを読み込んでいます...',
        'ko': '콘텐츠 로딩 중...',
        'ru': 'Загрузка контента...',
      },
      'noContent': {
        'zh': '该目的地暂无内容',
        'en': 'No content available for this destination',
        'fr': 'Aucun contenu disponible pour cette destination',
        'de': 'Kein Inhalt für dieses Reiseziel verfügbar',
        'es': 'No hay contenido disponible para este destino',
        'ja': 'この目的地のコンテンツはありません',
        'ko': '이 목적지에 대한 콘텐츠가 없습니다',
        'ru': 'Нет доступного контента для этого направления',
      },
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };
  
  // 判断是否有内容
  const hasContent = content.sections && content.sections.length > 0;
  
  // 每当语言变化时，重新获取内容
  useEffect(() => {
    // 这个effect是为了确保当语言变化时，组件会重新渲染
    // content已经在组件重新渲染时通过getDestinationContent更新了
  }, [currentLanguage, destinationSlug]);
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* 返回按钮 */}
      <button
        onClick={handleBackClick}
        className="flex items-center text-china-red hover:underline mb-6 transition-colors"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-1" />
        <span>{getTranslation('backToDestinations')}</span>
      </button>
      
      {/* 目的地内容 */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        {/* 标题区 */}
        <div className="p-8 bg-gradient-to-r from-china-red to-red-600 text-white">
          <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
          <p className="text-lg">{content.subtitle}</p>
        </div>
        
        {/* 内容区 */}
        <div className="p-8">
          {hasContent ? (
            content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.content}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">{getTranslation('noContent')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}