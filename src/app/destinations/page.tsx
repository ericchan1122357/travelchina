'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { getAllThemes, getCitiesByTheme, getThemeName, ThemeItem } from './utils/destinationThemes';
import DestinationTemplate from './utils/DestinationTemplate';

// 提取使用searchParams的逻辑到单独组件
function SearchParamsHandler({ setSelectedCity }: { setSelectedCity: (cityId: string | null) => void }) {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const city = searchParams?.get('city');
    if (city) {
      setSelectedCity(city);
    }
  }, [searchParams, setSelectedCity]);
  
  return null;
}

export default function DestinationsPage() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  
  // 状态管理
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>([]);
  
  // 获取所有主题
  const allThemes = getAllThemes();
  
  // 获取所有目的地，默认显示"必游之地"主题下的城市
  useEffect(() => {
    const defaultTheme = 'must-visit';
    setActiveTheme(defaultTheme);
    setFilteredDestinations(getCitiesByTheme(defaultTheme));
  }, []);
  
  // 处理搜索
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term && activeTheme) {
      // 如果搜索词为空且有活动主题，则显示该主题下的所有城市
      setFilteredDestinations(getCitiesByTheme(activeTheme));
    } else if (!term && !activeTheme) {
      // 如果搜索词为空且没有活动主题，则显示必游之地主题下的城市
      setFilteredDestinations(getCitiesByTheme('must-visit'));
    } else {
      // 如果有搜索词，则在当前活动主题的城市中搜索
      let citiesToFilter = activeTheme
        ? getCitiesByTheme(activeTheme)
        : getCitiesByTheme('must-visit');
      
      // 按名称搜索
      const filtered = citiesToFilter.filter(city => {
        // 获取当前语言的城市名
        let cityName = '';
        switch (currentLanguage) {
          case 'zh':
            cityName = getChineseCityName(city);
            break;
          default:
            cityName = city.charAt(0).toUpperCase() + city.slice(1);
            break;
        }
        return cityName.toLowerCase().includes(term.toLowerCase());
      });
      setFilteredDestinations(filtered);
    }
  };
  
  // 切换主题
  const handleThemeClick = (themeId: string) => {
    setActiveTheme(themeId);
    setSearchTerm('');
    setFilteredDestinations(getCitiesByTheme(themeId));
  };
  
  // 选择城市
  const handleCitySelect = (city: string) => {
    router.push(`/destinations?city=${city}`);
    setSelectedCity(city);
  };
  
  // 获取对应语言的城市中文名
  const getChineseCityName = (cityId: string) => {
    // 映射城市ID到中文名
    const cityNames: Record<string, string> = {
      'beijing': '北京',
      'shanghai': '上海',
      'xian': '西安',
      'chengdu': '成都',
      'hangzhou': '杭州',
      'suzhou': '苏州',
      'guangzhou': '广州',
      'qingdao': '青岛',
      'guilin': '桂林',
      'lhasa': '拉萨',
      'sanya': '三亚',
      'chongqing': '重庆',
      'xiamen': '厦门',
      'shenzhen': '深圳',
      'nanjing': '南京',
      'kunming': '昆明',
      'wuhan': '武汉',
      'tianjin': '天津',
      'guiyang': '贵阳',
      'zhangjiajie': '张家界',
      // 可以添加更多城市
    };
    
    return cityNames[cityId] || cityId;
  };
  
  // 获取城市描述
  const getCityDescription = (cityId: string) => {
    // 映射城市ID到描述
    const cityDescriptions: Record<string, Record<string, string>> = {
      'beijing': {
        'zh': '中国首都，拥有悠久历史和现代魅力的文化中心',
        'en': 'China\'s capital, a cultural center with a long history and modern charm',
      },
      'shanghai': {
        'zh': '国际化大都市，融合东西方文化的现代化港口城市',
        'en': 'International metropolis, a modern port city blending Eastern and Western cultures',
      },
      'xian': {
        'zh': '古都风采，丝绸之路的起点，拥有兵马俑等世界遗产',
        'en': 'Ancient capital, starting point of the Silk Road, home to the Terracotta Warriors',
      },
      'chengdu': {
        'zh': '休闲天堂，以熊猫和美食闻名的西南城市',
        'en': 'Leisure paradise, a southwestern city known for pandas and cuisine',
      },
      'hangzhou': {
        'zh': '人间天堂，西湖美景和茶文化的代表城市',
        'en': 'Paradise on earth, a city representing West Lake scenery and tea culture',
      },
      // 可以添加更多城市的描述
    };
    
    return cityDescriptions[cityId]?.[currentLanguage] || cityDescriptions[cityId]?.['en'] || '';
  };
  
  // 获取翻译文本
  const getTranslatedString = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'pageTitle': {
        'zh': '探索目的地',
        'en': 'Explore Destinations',
        'fr': 'Explorer les Destinations',
        'de': 'Reiseziele Erkunden',
        'es': 'Explorar Destinos',
        'ja': '目的地を探る',
        'ko': '목적지 탐색',
        'ru': 'Исследуйте Направления',
      },
      'searchPlaceholder': {
        'zh': '搜索目的地...',
        'en': 'Search destinations...',
        'fr': 'Rechercher des destinations...',
        'de': 'Reiseziele suchen...',
        'es': 'Buscar destinos...',
        'ja': '目的地を検索...',
        'ko': '목적지 검색...',
        'ru': 'Поиск направлений...',
      },
      'noResults': {
        'zh': '没有找到匹配的目的地',
        'en': 'No matching destinations found',
        'fr': 'Aucune destination correspondante trouvée',
        'de': 'Keine passenden Reiseziele gefunden',
        'es': 'No se encontraron destinos coincidentes',
        'ja': '一致する目的地が見つかりません',
        'ko': '일치하는 목적지를 찾을 수 없습니다',
        'ru': 'Соответствующие направления не найдены',
      },
      'allThemes': {
        'zh': '所有主题',
        'en': 'All Themes',
        'fr': 'Tous les Thèmes',
        'de': 'Alle Themen',
        'es': 'Todos los Temas',
        'ja': 'すべてのテーマ',
        'ko': '모든 테마',
        'ru': 'Все темы',
      },
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* 使用Suspense包裹处理URL参数的组件 */}
      <Suspense fallback={null}>
        <SearchParamsHandler setSelectedCity={setSelectedCity} />
      </Suspense>
      
      {/* 如果选择了城市，显示城市详情 */}
      {selectedCity ? (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <DestinationTemplate destinationSlug={selectedCity} />
        </Suspense>
      ) : (
        // 否则显示目的地选择页面
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">{getTranslatedString('pageTitle')}</h1>
          
          {/* 搜索栏 */}
          <div className="relative mb-8">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                className="flex-1 bg-transparent border-0 outline-none px-3 py-1 text-gray-800 placeholder-gray-500"
                placeholder={getTranslatedString('searchPlaceholder')}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          {/* 主题导航标签 - 苹果风格扁平设计 */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              {allThemes.map((theme: ThemeItem) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeClick(theme.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTheme === theme.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {getThemeName(theme.id, currentLanguage)}
                </button>
              ))}
            </div>
          </div>
          
          {/* 城市卡片网格 */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((city) => (
                <div
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md cursor-pointer transition-shadow"
                >
                  {/* 图片容器 */}
                  <div className="h-48 bg-gray-200 relative">
                    {/* 这里可以添加实际的城市图片 */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      {currentLanguage === 'zh' ? getChineseCityName(city) : city.charAt(0).toUpperCase() + city.slice(1)} Image
                    </div>
                  </div>
                  
                  {/* 内容 */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {currentLanguage === 'zh' ? getChineseCityName(city) : city.charAt(0).toUpperCase() + city.slice(1)}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {getCityDescription(city) || `Explore the beauty and culture of ${city.charAt(0).toUpperCase() + city.slice(1)}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              {getTranslatedString('noResults')}
            </div>
          )}
        </div>
      )}
    </div>
  );
} 