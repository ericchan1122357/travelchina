// 声明全局requestIdleCallback和cancelIdleCallback类型
declare global {
  interface Window {
    requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback: (handle: number) => void;
  }
}

'use client';

import React, { useState, useEffect, Suspense, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { getAllThemes, getCitiesByTheme, getThemeName, ThemeItem } from './utils/destinationThemes';
import DestinationTemplate from './utils/DestinationTemplate';

// 城市数据预加载 - 避免每次加载页面重新计算
const DEFAULT_THEME = 'must-visit';
const PRELOADED_CITIES = getCitiesByTheme(DEFAULT_THEME);
const ALL_THEMES = getAllThemes();

// 提取使用searchParams的逻辑到单独组件
function SearchParamsHandler({ setSelectedCity }: { setSelectedCity: (cityId: string | null) => void }) {
  const searchParams = useSearchParams();
  const { currentLanguage } = useLanguage();
  const pathname = usePathname();
  
  useEffect(() => {
    // 检查是否从从城市列表页导航到城市详情页
    const pendingNavigation = sessionStorage.getItem('pendingCityDetailNavigation');
    if (pendingNavigation) {
      // 清除导航状态
      sessionStorage.removeItem('pendingCityDetailNavigation');
      
      // 不需要额外处理，因为这是正常的前进导航
      console.log('正常导航到城市详情页');
    }
    
    // 处理URL中的city参数
    const city = searchParams?.get('city');
    if (city) {
      console.log(`URL params - city: ${city}, language: ${currentLanguage}`);
      setSelectedCity(city);
      
      // 设置返回按钮处理
      const handlePopState = function(event: PopStateEvent) {
        // 点击返回按钮时，如果URL中仍然包含city参数，表示我们需要手动导航
        // 而不是依赖浏览器的默认行为
        if (window.location.href.includes('?city=')) {
          // 获取当前URL并解析出基础路径和语言前缀
          const currentUrl = new URL(window.location.href);
          const pathParts = currentUrl.pathname.split('/').filter(Boolean);
          
          // 检查是否有语言前缀
          let basePath = '';
          if (pathParts.length > 0 && pathParts[0].length === 2) {
            basePath = `/${pathParts[0]}`;
          }
          
          // 构造目的地列表页URL
          const destinationsUrl = `${basePath}/destinations`;
          
          // 阻止默认行为
          event.preventDefault();
          event.stopPropagation();
          
          // 跳转到目的地列表页
          console.log('通过返回按钮导航到目的地列表页');
          window.location.href = destinationsUrl;
          
          // 返回false表示我们已经处理了这个事件
          return false;
        }
      };
      
      // 添加一个特殊标记到body元素，表示这是城市详情页
      document.body.setAttribute('data-city-detail', city);
      
      // 添加弹出状态变化处理程序
      window.addEventListener('popstate', handlePopState);
      
      // 在组件卸载时删除事件监听器
      return () => {
        window.removeEventListener('popstate', handlePopState);
        document.body.removeAttribute('data-city-detail');
      };
    }
  }, [searchParams, setSelectedCity, currentLanguage, pathname]);
  
  return null;
}

export default function DestinationsPage() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const pathname = usePathname();
  
  // 状态管理
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<string | null>(DEFAULT_THEME);
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>(PRELOADED_CITIES);
  const [isLoading, setIsLoading] = useState(false);
  
  // 使用useMemo缓存获取的主题数据，避免重新计算
  const allThemes = useMemo(() => ALL_THEMES, []);
  
  // 优化后的搜索处理函数
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term && activeTheme) {
      // 如果搜索词为空且有活动主题，则显示该主题下的所有城市
      setFilteredDestinations(getCitiesByTheme(activeTheme));
    } else if (!term && !activeTheme) {
      // 如果搜索词为空且没有活动主题，则显示必游之地主题下的城市
      setFilteredDestinations(PRELOADED_CITIES);
    } else {
      // 如果有搜索词，则在当前活动主题的城市中搜索
      let citiesToFilter = activeTheme
        ? getCitiesByTheme(activeTheme)
        : PRELOADED_CITIES;
      
      // 优化搜索函数，使用本地变量以减少状态更新
      const searchTermLower = term.toLowerCase();
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
        return cityName.toLowerCase().includes(searchTermLower);
      });
      setFilteredDestinations(filtered);
    }
  }, [activeTheme, currentLanguage]);
  
  // 切换主题 - 使用useCallback优化
  const handleThemeClick = useCallback((themeId: string) => {
    setIsLoading(true);
    setActiveTheme(themeId);
    setSearchTerm('');
    
    // 使用requestAnimationFrame延迟非关键更新，让UI先响应
    requestAnimationFrame(() => {
      setFilteredDestinations(getCitiesByTheme(themeId));
      setIsLoading(false);
    });
  }, []);
  
  // 选择城市 - 使用useCallback优化
  const handleCitySelect = useCallback((city: string) => {
    // 获取当前URL并解析出基础路径
    const currentUrl = new URL(window.location.href);
    const pathParts = currentUrl.pathname.split('/').filter(Boolean);
    
    // 检查是否有语言前缀
    let basePath = '';
    if (pathParts.length > 0 && pathParts[0].length === 2) {
      basePath = `/${pathParts[0]}`;
    }
    
    // 构造城市详情页的URL
    const cityDetailUrl = `${basePath}/destinations?city=${city}`;
    
    // 使用一种完全不同的方法：先设置一个中间页面，再导航到目标页面
    // 这样就能强制创建一个可回退的历史记录点
    
    // 1. 先获取当前的滚动位置，保存起来
    const scrollPosition = window.scrollY;
    document.body.style.cursor = 'wait'; // 显示等待光标
    
    // 2. 禁用当前页面的点击事件，防止用户在导航过程中进行操作
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255,255,255,0.01)';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);
    
    // 3. 使用sessionStorage存储关键信息
    sessionStorage.setItem('pendingCityDetailNavigation', city);
    sessionStorage.setItem('originUrl', window.location.href);
    
    // 4. 执行导航
    // 先将当前页面替换为自身（但带有特殊参数），这样在历史记录中创建一个新的条目
    // 然后再导航到目标页面
    window.history.replaceState(
      { isDestinationsList: true, scrollPosition },
      '',
      window.location.href + (window.location.href.includes('?') ? '&' : '?') + '_dest_list=true'
    );
    
    // 5. 在短暂延迟后导航到城市详情页
    setTimeout(() => {
      window.location.href = cityDetailUrl;
    }, 50);
    
    // 设置城市选择状态
    setSelectedCity(city);
  }, [router]);
  
  // 为了确保语言变化时UI更新，添加对currentLanguage的依赖
  useEffect(() => {
    if (activeTheme) {
      setFilteredDestinations(getCitiesByTheme(activeTheme));
    }
    
    // 如果有选中的城市，确保内容更新
    if (selectedCity) {
      console.log(`Language changed to ${currentLanguage}, refreshing city: ${selectedCity}`);
      // 这里不重置selectedCity，仅通知系统语言已更改，由DestinationTemplate处理
    }
  }, [currentLanguage, activeTheme, selectedCity]);
  
  // 缓存城市描述获取函数，避免在渲染过程中重复创建
  const getCityDescriptionCached = useCallback((cityId: string) => {
    return getCityDescription(cityId, currentLanguage);
  }, [currentLanguage]);
  
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
  
  // 将城市描述数据提取出来，并添加语言参数
  const getCityDescription = (cityId: string, language: string) => {
    // 映射城市ID到描述
    const cityDescriptions: Record<string, Record<string, string>> = {
      'beijing': {
        'zh': '中国首都，拥有悠久历史和现代魅力的文化中心',
        'en': 'China\'s capital, a cultural center with a long history and modern charm',
        'fr': 'Capitale de la Chine, centre culturel avec une longue histoire et un charme moderne',
        'de': 'Chinas Hauptstadt, ein Kulturzentrum mit langer Geschichte und modernem Charme',
        'es': 'Capital de China, centro cultural con una larga historia y encanto moderno',
        'ja': '中国の首都、長い歴史と現代的な魅力を持つ文化の中心',
        'ko': '중국의 수도, 오랜 역사와 현대적 매력이 있는 문화 중심지',
        'ru': 'Столица Китая, культурный центр с долгой историей и современным очарованием',
      },
      'shanghai': {
        'zh': '国际化大都市，融合东西方文化的现代化港口城市',
        'en': 'International metropolis, a modern port city blending Eastern and Western cultures',
        'fr': 'Métropole internationale, ville portuaire moderne mêlant cultures orientale et occidentale',
        'de': 'Internationale Metropole, eine moderne Hafenstadt, die östliche und westliche Kulturen verbindet',
        'es': 'Metrópolis internacional, una moderna ciudad portuaria que mezcla culturas orientales y occidentales',
        'ja': '国際的な大都市、東洋と西洋の文化が融合する現代的な港湾都市',
        'ko': '국제 대도시, 동양과 서양 문화가 어우러진 현대적인 항구 도시',
        'ru': 'Международный мегаполис, современный портовый город, сочетающий восточную и западную культуры',
      },
      'xian': {
        'zh': '古都风采，丝绸之路的起点，拥有兵马俑等世界遗产',
        'en': 'Ancient capital, starting point of the Silk Road, home to the Terracotta Warriors',
        'fr': 'Ancienne capitale, point de départ de la Route de la Soie, abrite les Guerriers de terre cuite',
        'de': 'Alte Hauptstadt, Ausgangspunkt der Seidenstraße, Heimat der Terrakotta-Armee',
        'es': 'Antigua capital, punto de partida de la Ruta de la Seda, hogar de los Guerreros de Terracota',
        'ja': '古代の都、シルクロードの起点、兵馬俑のある世界遺産',
        'ko': '고대 수도, 실크로드의 출발점, 병마용이 있는 세계 유산',
        'ru': 'Древняя столица, начальная точка Шелкового пути, дом для Терракотовой армии',
      },
      'chengdu': {
        'zh': '休闲天堂，以熊猫和美食闻名的西南城市',
        'en': 'Leisure paradise, a southwestern city known for pandas and cuisine',
        'fr': 'Paradis du loisir, ville du sud-ouest connue pour ses pandas et sa cuisine',
        'de': 'Freizeitparadies, eine südwestliche Stadt, bekannt für Pandas und Küche',
        'es': 'Paraíso de ocio, una ciudad del suroeste conocida por los pandas y la cocina',
        'ja': 'レジャーの楽園、パンダと料理で知られる中国南西部の都市',
        'ko': '여가의 천국, 판다와 요리로 유명한 중국 남서부 도시',
        'ru': 'Рай для отдыха, юго-западный город, известный пандами и кухней',
      },
      'hangzhou': {
        'zh': '人间天堂，西湖美景和茶文化的代表城市',
        'en': 'Paradise on earth, a city representing West Lake scenery and tea culture',
        'fr': 'Paradis sur terre, ville représentant les paysages du lac de l\'Ouest et la culture du thé',
        'de': 'Paradies auf Erden, eine Stadt, die die Landschaft des Westsees und die Teekultur repräsentiert',
        'es': 'Paraíso en la tierra, una ciudad que representa el paisaje del Lago Oeste y la cultura del té',
        'ja': '地上の楽園、西湖の景色と茶文化を代表する都市',
        'ko': '지상의 낙원, 서호 경치와 차 문화를 대표하는 도시',
        'ru': 'Рай на земле, город, представляющий пейзажи Западного озера и чайную культуру',
      },
      // 可以添加更多城市的描述
    };
    
    return cityDescriptions[cityId]?.[language] || cityDescriptions[cityId]?.['en'] || '';
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
        <DestinationTemplate params={{ slug: selectedCity }} />
      ) : (
        // 否则显示目的地选择页面
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {getTranslatedString('pageTitle')}
          </h1>

          {/* 搜索和主题过滤部分 */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              {/* 搜索框 */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder={getTranslatedString('searchPlaceholder')}
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              {/* 主题选择区域 - 仅在桌面显示 */}
              <div className="hidden sm:flex flex-wrap gap-2 min-h-[40px]">
                {/* "所有主题"按钮 */}
                <button
                  onClick={() => {
                    setActiveTheme(null);
                    setFilteredDestinations(PRELOADED_CITIES);
                  }}
                  className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                    activeTheme === null
                      ? 'bg-china-red text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getTranslatedString('allThemes')}
                </button>
                
                {/* 主题按钮 */}
                {allThemes.slice(0, 5).map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeClick(theme.id)}
                    className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                      activeTheme === theme.id
                        ? 'bg-china-red text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getThemeName(theme.id, currentLanguage)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* 主题选择区域 - 仅在移动设备显示 */}
            <div className="flex sm:hidden overflow-x-auto pb-2 gap-2 hide-scrollbar">
              {/* "所有主题"按钮 */}
              <button
                onClick={() => {
                  setActiveTheme(null);
                  setFilteredDestinations(PRELOADED_CITIES);
                }}
                className={`flex-shrink-0 px-4 py-1.5 text-sm rounded-full transition-colors ${
                  activeTheme === null
                    ? 'bg-china-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getTranslatedString('allThemes')}
              </button>
              
              {/* 主题按钮 */}
              {allThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeClick(theme.id)}
                  className={`flex-shrink-0 px-4 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                    activeTheme === theme.id
                      ? 'bg-china-red text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getThemeName(theme.id, currentLanguage)}
                </button>
              ))}
            </div>
          </div>

          {/* 城市列表 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((cityId) => (
                <button
                  key={cityId}
                  onClick={() => handleCitySelect(cityId)}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <div className="relative aspect-video">
                    <img
                      src={`/images/destinations/${cityId.toLowerCase()}/main.jpg`}
                      alt={cityId}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // 图片加载错误时使用默认图片
                        e.currentTarget.src = '/images/destinations/default.jpg';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {currentLanguage === 'zh' 
                        ? getChineseCityName(cityId) 
                        : cityId.charAt(0).toUpperCase() + cityId.slice(1)}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {getCityDescription(cityId, currentLanguage)}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-gray-500">
                {getTranslatedString('noResults')}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 