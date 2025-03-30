'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import OptimizedImage from '@/homepage/components/common/OptimizedImage';
import { getAllThemes, getThemeName, getCitiesByTheme } from './utils/destinationThemes';
import DestinationTemplate from './utils/DestinationTemplate';
import { MagnifyingGlassIcon as SearchIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// 搜索参数提取组件
function DestinationParamsHandler({ setSelectedCity }: { setSelectedCity: (city: string | null) => void }) {
  const searchParams = useSearchParams();
  const cityParam = searchParams ? searchParams.get('city') : null;
  
  useEffect(() => {
    setSelectedCity(cityParam);
  }, [cityParam, setSelectedCity]);
  
  return null;
}

export default function DestinationsIndex() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 状态管理
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [expandedThemes, setExpandedThemes] = useState<Record<string, boolean>>({});
  const [filteredDestinations, setFilteredDestinations] = useState<any[]>([]);
  const themes = getAllThemes();
  
  // 初始化展开的主题
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {};
    themes.forEach(theme => {
      initialExpanded[theme.id] = true; // 默认全部展开
    });
    setExpandedThemes(initialExpanded);
  }, [themes]);

  // 获取城市数据
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
    },
    {
      id: 'chongqing',
      imageUrl: '/images/destinations/chongqing.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '重庆';
          case 'en': return 'Chongqing';
          case 'fr': return 'Chongqing';
          case 'de': return 'Chongqing';
          case 'es': return 'Chongqing';
          case 'ja': return '重慶';
          case 'ko': return '충칭';
          case 'ru': return 'Чунцин';
          default: return 'Chongqing';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '山城雾都，火锅之都，长江三峡门户';
          case 'en': return 'Mountain city, fog capital, hotpot paradise, gateway to the Three Gorges';
          default: return 'Mountain city, fog capital, hotpot paradise, gateway to the Three Gorges';
        }
      }
    },
    {
      id: 'hangzhou',
      imageUrl: '/images/destinations/hangzhou.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '杭州';
          case 'en': return 'Hangzhou';
          case 'fr': return 'Hangzhou';
          case 'de': return 'Hangzhou';
          case 'es': return 'Hangzhou';
          case 'ja': return '杭州';
          case 'ko': return '항저우';
          case 'ru': return 'Ханчжоу';
          default: return 'Hangzhou';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '上有天堂，下有苏杭，西湖风景名胜';
          case 'en': return 'Paradise on earth, home to the beautiful West Lake';
          default: return 'Paradise on earth, home to the beautiful West Lake';
        }
      }
    },
    {
      id: 'guilin',
      imageUrl: '/images/destinations/guilin.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '桂林';
          case 'en': return 'Guilin';
          default: return 'Guilin';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '山水甲天下，喀斯特地貌的代表';
          case 'en': return 'Best landscape under heaven, representative of karst topography';
          default: return 'Best landscape under heaven, representative of karst topography';
        }
      }
    },
    {
      id: 'huangshan',
      imageUrl: '/images/destinations/huangshan.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '黄山';
          case 'en': return 'Huangshan';
          default: return 'Huangshan';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '奇松怪石云海温泉，徽州古村落的人文胜境';
          case 'en': return 'Famous for peculiar pines, rocks, cloud sea, and ancient Hui villages';
          default: return 'Famous for peculiar pines, rocks, cloud sea, and ancient Hui villages';
        }
      }
    },
    // 添加更多城市
    {
      id: 'zhangjiajie',
      imageUrl: '/images/destinations/zhangjiajie.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '张家界';
          case 'en': return 'Zhangjiajie';
          default: return 'Zhangjiajie';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '影片《阿凡达》取景地，石英砂岩峰林地貌';
          case 'en': return 'Avatar film location, known for quartzite sandstone peak forest landforms';
          default: return 'Avatar film location, known for quartzite sandstone peak forest landforms';
        }
      }
    },
    {
      id: 'jiuzhaigou',
      imageUrl: '/images/destinations/jiuzhaigou.jpg',
      getName: () => {
        switch (currentLanguage) {
          case 'zh': return '九寨沟';
          case 'en': return 'Jiuzhaigou';
          default: return 'Jiuzhaigou';
        }
      },
      getDescription: () => {
        switch (currentLanguage) {
          case 'zh': return '童话世界般的彩池与瀑布，四季如画';
          case 'en': return 'Fairytale-like colorful pools and waterfalls, beautiful in all four seasons';
          default: return 'Fairytale-like colorful pools and waterfalls, beautiful in all four seasons';
        }
      }
    }
  ];

  // 翻译函数
  const translate = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'searchPlaceholder': {
        'zh': '搜索城市...',
        'en': 'Search cities...',
        'fr': 'Rechercher des villes...',
        'de': 'Städte suchen...',
        'es': 'Buscar ciudades...',
        'ja': '都市を検索...',
        'ko': '도시 검색...',
        'ru': 'Поиск городов...',
      },
      'pageTitle': {
        'zh': '探索目的地',
        'en': 'Explore Destinations',
        'fr': 'Explorer les Destinations',
        'de': 'Reiseziele Entdecken',
        'es': 'Explorar Destinos',
        'ja': '目的地を探索',
        'ko': '목적지 탐색',
        'ru': 'Исследуйте направления',
      },
      'selectDestination': {
        'zh': '请从左侧选择一个目的地',
        'en': 'Please select a destination from the left',
        'fr': 'Veuillez sélectionner une destination à gauche',
        'de': 'Bitte wählen Sie links ein Reiseziel aus',
        'es': 'Por favor, seleccione un destino de la izquierda',
        'ja': '左側から目的地を選択してください',
        'ko': '왼쪽에서 목적지를 선택하세요',
        'ru': 'Пожалуйста, выберите направление слева',
      }
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };

  // 搜索和过滤功能
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredDestinations(destinations);
    } else {
      const filtered = destinations.filter(destination => {
        const name = destination.getName().toLowerCase();
        return name.includes(searchTerm.toLowerCase());
      });
      setFilteredDestinations(filtered);
    }
  }, [searchTerm, currentLanguage, destinations]);

  // 初始化过滤后的城市列表
  useEffect(() => {
    setFilteredDestinations(destinations);
  }, [destinations]);

  // 切换主题展开/折叠状态
  const toggleTheme = (themeId: string) => {
    setExpandedThemes(prev => ({
      ...prev,
      [themeId]: !prev[themeId]
    }));
  };

  // 选择城市
  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId);
    router.push(`/destinations?city=${cityId}`, { scroll: false });
  };

  // 查找城市对象
  const findCityById = (cityId: string) => {
    return destinations.find(city => city.id === cityId);
  };

  // 检查城市是否存在于当前筛选结果中
  const isCityInFilteredResults = (cityId: string) => {
    return filteredDestinations.some(city => city.id === cityId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 使用 Suspense 包装 useSearchParams 的使用 */}
      <Suspense fallback={null}>
        <DestinationParamsHandler setSelectedCity={setSelectedCity} />
      </Suspense>
      
      {/* 顶部横幅 */}
      <div className="bg-china-red text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{translate('pageTitle')}</h1>
        </div>
      </div>
      
      {/* 主内容区 */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* 左侧导航区 */}
          <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-6">
            {/* 搜索框 */}
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  className="w-full py-2 px-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-china-red focus:border-transparent"
                  placeholder={translate('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* 城市分类目录 */}
            <div className="overflow-auto max-h-[calc(100vh-250px)]">
              {searchTerm.trim() === '' ? (
                // 按主题分类显示
                themes.map(theme => (
                  <div key={theme.id} className="border-b last:border-0">
                    <button
                      className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => toggleTheme(theme.id)}
                    >
                      <span className="font-medium">{getThemeName(theme.id, currentLanguage)}</span>
                      {expandedThemes[theme.id] ? 
                        <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : 
                        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                      }
                    </button>
                    
                    {expandedThemes[theme.id] && (
                      <div className="pl-4 pb-2">
                        {getCitiesByTheme(theme.id).map(cityId => {
                          const city = findCityById(cityId);
                          if (!city) return null;
                          
                          return (
                            <button
                              key={cityId}
                              className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                                selectedCity === cityId ? 'bg-china-red text-white' : 'hover:bg-gray-100'
                              }`}
                              onClick={() => handleCitySelect(cityId)}
                            >
                              {city.getName()}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                // 搜索结果
                <div className="p-4">
                  {filteredDestinations.length > 0 ? (
                    filteredDestinations.map(city => (
                      <button
                        key={city.id}
                        className={`block w-full text-left py-2 px-4 mb-2 rounded transition-colors ${
                          selectedCity === city.id ? 'bg-china-red text-white' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => handleCitySelect(city.id)}
                      >
                        {city.getName()}
                      </button>
                    ))
                  ) : (
                    <p className="text-gray-500 py-4 text-center">没有找到匹配的城市</p>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* 右侧内容展示区 */}
          <div className="w-full md:w-3/4 bg-white shadow-md rounded-lg overflow-hidden">
            {selectedCity ? (
              <DestinationTemplate destinationSlug={selectedCity} />
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">{translate('selectDestination')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 