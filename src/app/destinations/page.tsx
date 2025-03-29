'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import OptimizedImage from '@/homepage/components/common/OptimizedImage';

export default function DestinationsIndex() {
  const { currentLanguage } = useLanguage();
  
  // 获取页面标题
  const getPageTitle = () => {
    switch (currentLanguage) {
      case 'zh': return '探索目的地';
      case 'en': return 'Explore Destinations';
      case 'fr': return 'Explorer les Destinations';
      case 'de': return 'Reiseziele Entdecken';
      case 'es': return 'Explorar Destinos';
      case 'ja': return '目的地を探索';
      case 'ko': return '목적지 탐색';
      case 'ru': return 'Исследуйте направления';
      default: return 'Explore Destinations';
    }
  };
  
  // 获取页面描述
  const getPageDescription = () => {
    switch (currentLanguage) {
      case 'zh': return '探索中国各地的迷人景点，从繁华都市到自然风光，发现每个地方的独特魅力';
      case 'en': return 'Explore fascinating attractions across China, from bustling cities to natural landscapes, and discover the unique charm of each place';
      case 'fr': return 'Explorez les attractions fascinantes à travers la Chine, des villes animées aux paysages naturels, et découvrez le charme unique de chaque endroit';
      case 'de': return 'Entdecken Sie faszinierende Attraktionen in ganz China, von geschäftigen Städten bis hin zu Naturlandschaften, und entdecken Sie den einzigartigen Charme jedes Ortes';
      default: return 'Explore fascinating attractions across China, from bustling cities to natural landscapes, and discover the unique charm of each place';
    }
  };
  
  // 目的地数据
  const destinations = [
    {
      id: 'beijing',
      imageUrl: '/images/destinations/beijing.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '北京';
          case 'en': return 'Beijing';
          case 'fr': return 'Pékin';
          case 'de': return 'Peking';
          case 'es': return 'Pekín';
          case 'ja': return '北京';
          case 'ko': return '베이징';
          case 'ru': return 'Пекин';
          default: return 'Beijing';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '千年古都，承载着丰富的历史文化遗产';
          case 'en': return 'Ancient capital with rich historical and cultural heritage';
          default: return 'Ancient capital with rich historical and cultural heritage';
        }
      }
    },
    {
      id: 'shanghai',
      imageUrl: '/images/destinations/shanghai.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '上海';
          case 'en': return 'Shanghai';
          default: return 'Shanghai';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '国际化大都市，东方明珠';
          case 'en': return 'International metropolis, the Pearl of the Orient';
          default: return 'International metropolis, the Pearl of the Orient';
        }
      }
    },
    {
      id: 'xian',
      imageUrl: '/images/destinations/xian.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '西安';
          case 'en': return "Xi'an";
          default: return "Xi'an";
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '古丝绸之路的起点，兵马俑的家园';
          case 'en': return 'Starting point of the ancient Silk Road, home to the Terracotta Warriors';
          default: return 'Starting point of the ancient Silk Road, home to the Terracotta Warriors';
        }
      }
    },
    {
      id: 'chengdu',
      imageUrl: '/images/destinations/chengdu.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '成都';
          case 'en': return 'Chengdu';
          default: return 'Chengdu';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '休闲天府之国，熊猫之乡';
          case 'en': return 'Leisurely land of abundance, home of pandas';
          default: return 'Leisurely land of abundance, home of pandas';
        }
      }
    }
  ];
  
  // 获取查看详情文本
  const getViewDetailsText = () => {
    switch (currentLanguage) {
      case 'zh': return '查看详情';
      case 'en': return 'View Details';
      case 'fr': return 'Voir les détails';
      case 'de': return 'Details anzeigen';
      case 'es': return 'Ver detalles';
      case 'ja': return '詳細を見る';
      case 'ko': return '세부 정보보기';
      case 'ru': return 'Посмотреть детали';
      default: return 'View Details';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部横幅 */}
      <div className="bg-china-red text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{getPageTitle()}</h1>
          <p className="text-xl max-w-2xl">{getPageDescription()}</p>
        </div>
      </div>
      
      {/* 目的地列表 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(destination => (
            <Link 
              key={destination.id} 
              href={`/destinations/${destination.id}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-48 md:h-64">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">{destination.getName()} Image</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-70"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">{destination.getName()}</h2>
                  <p className="text-gray-600 mb-4">{destination.getDescription()}</p>
                  <div className="inline-flex items-center text-china-red group-hover:underline">
                    {getViewDetailsText()}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 