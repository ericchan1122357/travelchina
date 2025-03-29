'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

// 目前支持的目的地列表
const SUPPORTED_DESTINATIONS = ['beijing', 'shanghai', 'xian', 'chengdu'];

export default function DestinationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 如果目的地不在支持列表中，返回404
  if (!SUPPORTED_DESTINATIONS.includes(slug)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            {currentLanguage === 'zh' ? '目的地未找到' : 'Destination not found'}
          </p>
          <button 
            onClick={() => router.back()} 
            className="px-4 py-2 bg-china-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            {currentLanguage === 'zh' ? '返回' : 'Go Back'}
          </button>
        </div>
      </div>
    );
  }

  // 如果是北京页面，重定向到专用页面
  if (slug === 'beijing') {
    router.push('/destinations/beijing');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-china-red"></div>
      </div>
    );
  }
  
  // 获取目的地相关信息的函数
  const getDestinationInfo = () => {
    // 这里可以根据slug和currentLanguage获取相应的目的地信息
    // 在实际应用中，可能需要从API或数据库获取
    
    if (slug === 'shanghai') {
      if (currentLanguage === 'zh') {
        return {
          title: '上海：东方明珠的魅力',
          subtitle: '现代与传统交融的国际化大都市',
          content: '上海是中国最大的经济中心城市，这里有外滩的万国建筑博览，陆家嘴的现代摩天大楼，也有豫园的传统园林和老城厢的市井生活...'
        };
      } else {
        return {
          title: 'Shanghai: The Charm of the Oriental Pearl',
          subtitle: 'An international metropolis where modern and traditional cultures blend',
          content: 'Shanghai is China&apos;s largest economic center, featuring the international architectural exposition on the Bund, modern skyscrapers in Lujiazui, traditional gardens of Yu Garden, and old town life...'
        };
      }
    } else if (slug === 'xian') {
      if (currentLanguage === 'zh') {
        return {
          title: '西安：千年古都的历史印记',
          subtitle: '丝绸之路的起点，中华文明的摇篮',
          content: '西安，古称长安，是中国历史上最悠久的都城之一，这里有世界闻名的兵马俑，雄伟的古城墙，以及丰富的历史文化遗产...'
        };
      } else {
        return {
          title: 'Xi&apos;an: Historical Imprint of an Ancient Capital',
          subtitle: 'The starting point of the Silk Road and the cradle of Chinese civilization',
          content: 'Xi&apos;an, formerly known as Chang&apos;an, is one of the oldest capitals in Chinese history, home to the world-famous Terracotta Warriors, magnificent ancient city walls, and rich historical and cultural heritage...'
        };
      }
    } else if (slug === 'chengdu') {
      if (currentLanguage === 'zh') {
        return {
          title: '成都：天府之国的休闲生活',
          subtitle: '熊猫故乡，美食天堂',
          content: '成都是四川省省会，素有"天府之国"的美誉。这里有憨态可掬的大熊猫，令人垂涎的川菜美食，还有悠闲自得的生活方式...'
        };
      } else {
        return {
          title: 'Chengdu: Leisure Life in the Land of Abundance',
          subtitle: 'Home of pandas and a paradise for food lovers',
          content: 'Chengdu is the capital of Sichuan Province, known as the "Land of Abundance." It is home to the adorable giant pandas, mouth-watering Sichuan cuisine, and a leisurely lifestyle...'
        };
      }
    }
    
    // 默认返回
    return {
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      subtitle: 'Discover the beauty of this destination',
      content: 'Content coming soon...'
    };
  };
  
  const destinationInfo = getDestinationInfo();
  
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
    <div className="min-h-screen bg-gray-50">
      {/* 顶部横幅区域 */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* 这里放置主要的横幅图片 */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">{destinationInfo.title} Panorama Image</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{destinationInfo.title}</h1>
          <p className="text-xl max-w-2xl">{destinationInfo.subtitle}</p>
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
            <p className="text-gray-700 mb-6 leading-relaxed">
              {destinationInfo.content}
            </p>
            
            <div className="text-center py-20">
              <p className="text-gray-500 italic">
                {currentLanguage === 'zh' 
                  ? '更详细的内容正在编写中，敬请期待...' 
                  : 'More detailed content is being prepared. Stay tuned...'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 