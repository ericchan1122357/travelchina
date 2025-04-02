// 声明全局requestIdleCallback和cancelIdleCallback类型
declare global {
  interface Window {
    requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback: (handle: number) => void;
  }
}

'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { getAllThemes, getCitiesByTheme, getCityImageUrl, getCityDescription } from './utils/destinationThemes';

const themeColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-orange-500',
];

// 搜索参数处理组件
interface SearchParamsHandlerProps {
  searchParams: Record<string, string> | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<string | null>>;
  pathname: string;
}

function SearchParamsHandler({ searchParams, setSelectedCity, pathname }: SearchParamsHandlerProps) {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  
  useEffect(() => {
    const city = searchParams?.city;
    if (city) {
      console.log(`URL参数 - 城市: ${city}, 语言: ${currentLanguage}`);
      setSelectedCity(city);
      
      // 从URL中构建出城市详情页的URL
      // 获取当前URL并解析出基础路径
      const currentUrl = new URL(window.location.href);
      const pathParts = currentUrl.pathname.split('/').filter(Boolean);
      
      // 检查是否有语言前缀
      let basePath = '';
      if (pathParts.length > 0 && pathParts[0].length === 2) {
        basePath = `/${pathParts[0]}`;
      }
      
      // 构造城市详情页的URL
      const cityDetailUrl = `${basePath}/destinations/${city}`;
      
      // 导航到城市详情页
      router.push(cityDetailUrl);
    }
  }, [searchParams, setSelectedCity, currentLanguage, router, pathname]);

  return null;
}

// 目的地列表页面
export default function DestinationsPage() {
  const params = useSearchParams();
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const pathname = window.location?.pathname || '';
  
  // 将URLSearchParams转换为简单对象
  const searchParams = useMemo(() => {
    if (!params) return null;
    const result: Record<string, string> = {};
    params.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }, [params]);
  
  // 获取所有主题
  const themes = getAllThemes();
  
  // 更新筛选城市列表
  useEffect(() => {
    let cities: string[] = [];
    
    if (activeTheme) {
      cities = getCitiesByTheme(activeTheme);
    } else {
      // 如果没有选择主题，获取所有城市
      themes.forEach(theme => {
        cities.push(...getCitiesByTheme(theme.id));
      });
      
      // 移除重复项
      cities = [...new Set(cities)];
    }
    
    // 如果有搜索词，根据搜索词过滤
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      cities = cities.filter(city => 
        city.toLowerCase().includes(term) || 
        (getCityDescription(city, currentLanguage)?.toLowerCase().includes(term) || false)
      );
    }
    
    setFilteredCities(cities);
  }, [activeTheme, searchTerm, themes, currentLanguage]);
  
  // 确保语言改变时，UI也随之更新
  useEffect(() => {
    let cities: string[] = [];
    
    if (activeTheme) {
      cities = getCitiesByTheme(activeTheme);
    } else {
      // 如果没有选择主题，获取所有城市
      themes.forEach(theme => {
        cities.push(...getCitiesByTheme(theme.id));
      });
      
      // 移除重复项
      cities = [...new Set(cities)];
    }
    
    setFilteredCities(cities);
  }, [currentLanguage, activeTheme, themes]);
  
  // 处理主题筛选
  const handleThemeFilter = (themeId: string) => {
    if (activeTheme === themeId) {
      setActiveTheme(null);
    } else {
      setActiveTheme(themeId);
    }
  };
  
  // 选择城市 - 使用useCallback优化
  const handleCitySelect = useCallback((city: string) => {
    // 从URL中解析基础路径和语言前缀
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(Boolean);
    
    // 检查是否有语言前缀
    let basePath = '';
    if (pathParts.length > 0 && pathParts[0].length === 2) {
      basePath = `/${pathParts[0]}`;
    }
    
    // 构造城市详情页的URL
    const cityDetailUrl = `${basePath}/destinations/${city}`;
    
    // 导航到城市详情页
    router.push(cityDetailUrl);
  }, [router]);
  
  // 清除筛选
  const clearFilters = () => {
    setActiveTheme(null);
    setSearchTerm('');
  };
  
  // 获取翻译文本
  const getTranslation = (key: string) => {
    const translations: { [key: string]: { [lang: string]: string } } = {
      'pageTitle': {
        'zh': '探索目的地',
        'en': 'Explore Destinations',
        'fr': 'Explorer les Destinations',
        'de': 'Destinationen Erkunden',
        'es': 'Explorar Destinos',
        'ja': '目的地を探る',
        'ko': '목적지 탐색',
        'ru': 'Исследуйте направления',
      },
      'searchPlaceholder': {
        'zh': '搜索目的地...',
        'en': 'Search destinations...',
        'fr': 'Rechercher des destinations...',
        'de': 'Destinationen suchen...',
        'es': 'Buscar destinos...',
        'ja': '目的地を検索...',
        'ko': '목적지 검색...',
        'ru': 'Поиск направлений...',
      },
      'filterByTheme': {
        'zh': '按主题筛选',
        'en': 'Filter by Theme',
        'fr': 'Filtrer par Thème',
        'de': 'Nach Thema Filtern',
        'es': 'Filtrar por Tema',
        'ja': 'テーマで絞り込む',
        'ko': '테마별 필터링',
        'ru': 'Фильтр по теме',
      },
      'allDestinations': {
        'zh': '所有目的地',
        'en': 'All Destinations',
        'fr': 'Toutes les Destinations',
        'de': 'Alle Destinationen',
        'es': 'Todos los Destinos',
        'ja': 'すべての目的地',
        'ko': '모든 목적지',
        'ru': 'Все направления',
      },
      'clearFilters': {
        'zh': '清除筛选',
        'en': 'Clear Filters',
        'fr': 'Effacer les Filtres',
        'de': 'Filter Löschen',
        'es': 'Borrar Filtros',
        'ja': 'フィルターをクリア',
        'ko': '필터 지우기',
        'ru': 'Очистить фильтры',
      },
      'noResults': {
        'zh': '没有找到匹配的目的地',
        'en': 'No destinations found',
        'fr': 'Aucune destination trouvée',
        'de': 'Keine Destinationen gefunden',
        'es': 'No se encontraron destinos',
        'ja': '目的地が見つかりませんでした',
        'ko': '목적지를 찾을 수 없습니다',
        'ru': 'Направления не найдены',
      },
      'learnMore': {
        'zh': '了解更多',
        'en': 'Learn More',
        'fr': 'En Savoir Plus',
        'de': 'Mehr Erfahren',
        'es': 'Saber Más',
        'ja': '詳細を見る',
        'ko': '더 알아보기',
        'ru': 'Узнать больше',
      }
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 搜索参数处理 */}
      <SearchParamsHandler 
        searchParams={searchParams} 
        setSelectedCity={setSelectedCity}
        pathname={pathname}
      />
      
      {/* 页面内容 */}
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {getTranslation('pageTitle')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'zh' 
              ? '发现中国迷人的目的地。' 
              : 'Discover fascinating destinations around China.'}
          </p>
        </div>
        
        {/* 搜索和筛选区域 */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* 搜索框 */}
            <div className="relative w-full md:w-1/3">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={getTranslation('searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* 主题筛选 */}
            <div className="w-full md:w-2/3">
              <div className="flex items-center justify-between w-full md:justify-end">
                <div className="md:hidden text-sm font-medium text-gray-700">
                  {getTranslation('filterByTheme')}
                </div>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="md:hidden flex items-center bg-white px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {activeTheme 
                    ? themes.find(t => t.id === activeTheme)?.name[currentLanguage] 
                    : getTranslation('allDestinations')}
                  <ChevronDownIcon className="ml-2 w-5 h-5 text-gray-500" />
                </button>
                
                {/* 移动端筛选下拉菜单 */}
                {isFilterOpen && (
                  <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 right-4 top-48 md:hidden">
                    <button
                      onClick={() => {
                        setActiveTheme(null);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 ${!activeTheme ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      {getTranslation('allDestinations')}
                    </button>
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          handleThemeFilter(theme.id);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 ${activeTheme === theme.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                      >
                        {theme.name[currentLanguage]}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* 桌面端主题标签 */}
                <div className="hidden md:flex flex-wrap justify-end gap-2">
                  <button
                    onClick={clearFilters}
                    className={`text-sm px-3 py-1 rounded-full border border-gray-300 ${
                      !activeTheme && searchTerm === '' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {getTranslation('clearFilters')}
                  </button>
                  {themes.map((theme, index) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeFilter(theme.id)}
                      className={`text-sm px-3 py-1 rounded-full border ${
                        activeTheme === theme.id 
                          ? `${themeColors[index % themeColors.length]} text-white` 
                          : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-300'
                      }`}
                    >
                      {theme.name[currentLanguage]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 城市卡片网格 */}
        <div className="max-w-7xl mx-auto">
          {filteredCities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCities.map((city) => (
                <div 
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      {getCityImageUrl(city) ? (
                        <img 
                          src={getCityImageUrl(city)} 
                          alt={city} 
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span>{city} Image</span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {city.charAt(0).toUpperCase() + city.slice(1)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {getCityDescription(city, currentLanguage)}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCitySelect(city);
                      }}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      {getTranslation('learnMore')} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {getTranslation('noResults')}
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {getTranslation('clearFilters')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 