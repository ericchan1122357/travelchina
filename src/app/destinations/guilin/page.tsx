'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationContent } from '../utils/destinationContent';

export default function GuilinPage() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 标题内容多语言实现
  const getTitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '桂林：山水甲天下';
      case 'en':
        return 'Guilin: Mountains and Waters Unrivaled Under Heaven';
      case 'fr':
        return 'Guilin: Montagnes et eaux sans égales sous le ciel';
      case 'de':
        return 'Guilin: Berge und Gewässer unübertroffen unter dem Himmel';
      case 'es':
        return 'Guilin: Montañas y aguas sin rival bajo el cielo';
      case 'ja':
        return '桂林：山水は天下一';
      case 'ko':
        return '구이린: 천하제일의 산수';
      case 'ru':
        return 'Гуйлинь: Горы и воды, непревзойденные под небесами';
      default:
        return 'Guilin: Mountains and Waters Unrivaled Under Heaven';
    }
  };
  
  // 子标题多语言实现
  const getSubtitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '诗意漓江行，探索喀斯特地貌奇观';
      case 'en':
        return 'Poetic Li River Journey, Exploring Karst Landscape Wonders';
      case 'fr':
        return 'Voyage poétique le long de la rivière Li, exploration des merveilles du paysage karstique';
      case 'de':
        return 'Poetische Reise am Li-Fluss, Erkundung der Karstlandschaft-Wunder';
      case 'es':
        return 'Viaje poético por el río Li, explorando las maravillas del paisaje kárstico';
      case 'ja':
        return '詩情あふれる漓江の旅、カルスト地形の奇観を探る';
      case 'ko':
        return '시정이 넘치는 리강 여행, 카르스트 지형 경이로움 탐험';
      case 'ru':
        return 'Поэтическое путешествие по реке Ли, изучение чудес карстового ландшафта';
      default:
        return 'Poetic Li River Journey, Exploring Karst Landscape Wonders';
    }
  };
  
  // 返回按钮文本多语言实现
  const getBackButtonTextByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '返回';
      case 'en':
        return 'Back';
      case 'fr':
        return 'Retour';
      case 'de':
        return 'Zurück';
      case 'es':
        return 'Volver';
      case 'ja':
        return '戻る';
      case 'ko':
        return '돌아가기';
      case 'ru':
        return 'Назад';
      default:
        return 'Back';
    }
  };
  
  // 获取当前语言的城市内容
  const cityContent = getDestinationContent('guilin', currentLanguage);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部横幅区域 */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* 横幅图片占位符 */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">桂林漓江山水全景图片</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{getTitleByLanguage()}</h1>
          <p className="text-xl max-w-2xl">{getSubtitleByLanguage()}</p>
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
              {getBackButtonTextByLanguage()}
            </button>
          </div>
          
          {/* 文章内容区域 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {cityContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{section.title}</h2>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content as string }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 