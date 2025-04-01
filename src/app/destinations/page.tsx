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
  
  // 获取对应语言的城市名称
  const getCityName = (cityId: string) => {
    // 映射城市ID到各语言名称
    const cityNames: Record<string, Record<string, string>> = {
      'beijing': {
        'zh': '北京',
        'en': 'Beijing',
        'ja': '北京',
        'ko': '베이징',
        'fr': 'Pékin',
        'de': 'Peking',
        'es': 'Pekín',
        'ru': 'Пекин',
      },
      'shanghai': {
        'zh': '上海',
        'en': 'Shanghai',
        'ja': '上海',
        'ko': '상하이',
        'fr': 'Shanghai',
        'de': 'Shanghai',
        'es': 'Shanghái',
        'ru': 'Шанхай',
      },
      'xian': {
        'zh': '西安',
        'en': 'Xi\'an',
        'ja': '西安',
        'ko': '시안',
        'fr': 'Xi\'an',
        'de': 'Xi\'an',
        'es': 'Xi\'an',
        'ru': 'Сиань',
      },
      'chengdu': {
        'zh': '成都',
        'en': 'Chengdu',
        'ja': '成都',
        'ko': '청두',
        'fr': 'Chengdu',
        'de': 'Chengdu',
        'es': 'Chengdu',
        'ru': 'Чэнду',
      },
      'hangzhou': {
        'zh': '杭州',
        'en': 'Hangzhou',
        'ja': '杭州',
        'ko': '항저우',
        'fr': 'Hangzhou',
        'de': 'Hangzhou',
        'es': 'Hangzhou',
        'ru': 'Ханчжоу',
      },
    };
    
    return cityNames[cityId]?.[currentLanguage] || cityNames[cityId]?.['en'] || cityId.charAt(0).toUpperCase() + cityId.slice(1);
  };
  
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
        const cityName = getCityName(city);
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
  
  // 获取城市描述
  const getCityDescription = (cityId: string) => {
    // 映射城市ID到描述
    const cityDescriptions: Record<string, Record<string, string>> = {
      'beijing': {
        'zh': '中国首都，拥有悠久历史和现代魅力的文化中心',
        'en': 'China\'s capital, a cultural center with a long history and modern charm',
        'ja': '中国の首都、長い歴史と現代的な魅力を持つ文化の中心',
        'ko': '중국의 수도, 오랜 역사와 현대적 매력을 가진 문화 중심지',
        'fr': 'La capitale de la Chine, un centre culturel avec une longue histoire et un charme moderne',
        'de': 'Die Hauptstadt Chinas, ein Kulturzentrum mit langer Geschichte und modernem Charme',
        'es': 'La capital de China, un centro cultural con una larga historia y un encanto moderno',
        'ru': 'Столица Китая, культурный центр с долгой историей и современным очарованием',
      },
      'shanghai': {
        'zh': '国际化大都市，融合东西方文化的现代化港口城市',
        'en': 'International metropolis, a modern port city blending Eastern and Western cultures',
        'ja': '国際都市、東洋と西洋の文化が融合する現代的な港湾都市',
        'ko': '국제 대도시, 동양과 서양 문화가 어우러진 현대적인 항구 도시',
        'fr': 'Métropole internationale, port moderne où se mêlent cultures orientale et occidentale',
        'de': 'Internationale Metropole, moderne Hafenstadt, die östliche und westliche Kulturen verbindet',
        'es': 'Metrópolis internacional, ciudad portuaria moderna que combina culturas orientales y occidentales',
        'ru': 'Международный мегаполис, современный портовый город, сочетающий восточную и западную культуры',
      },
      'xian': {
        'zh': '古都风采，丝绸之路的起点，拥有兵马俑等世界遗产',
        'en': 'Ancient capital, starting point of the Silk Road, home to the Terracotta Warriors',
        'ja': '古都の風格、シルクロードの起点、兵馬俑などの世界遺産がある',
        'ko': '고도의 우아함, 실크로드의 출발점, 병마용 등 세계 문화유산을 보유',
        'fr': 'Ancienne capitale, point de départ de la Route de la Soie, abrite les Guerriers de terre cuite',
        'de': 'Alte Hauptstadt, Ausgangspunkt der Seidenstraße, Heimat der Terrakotta-Armee',
        'es': 'Capital antigua, punto de partida de la Ruta de la Seda, hogar de los Guerreros de Terracota',
        'ru': 'Древняя столица, начало Шелкового пути, дом для терракотовых воинов',
      },
      'chengdu': {
        'zh': '休闲天堂，以熊猫和美食闻名的西南城市',
        'en': 'Leisure paradise, a southwestern city known for pandas and cuisine',
        'ja': 'レジャーパラダイス、パンダと料理で知られる中国南西部の都市',
        'ko': '레저 천국, 판다와 요리로 유명한 중국 남서부 도시',
        'fr': 'Paradis des loisirs, ville du sud-ouest connue pour ses pandas et sa cuisine',
        'de': 'Freizeitparadies, eine südwestliche Stadt, bekannt für Pandas und Küche',
        'es': 'Paraíso del ocio, ciudad del suroeste conocida por los pandas y la gastronomía',
        'ru': 'Рай для отдыха, город на юго-западе, известный пандами и кухней',
      },
      'hangzhou': {
        'zh': '人间天堂，西湖美景和茶文化的代表城市',
        'en': 'Paradise on earth, a city representing West Lake scenery and tea culture',
        'ja': '地上の楽園、西湖の景色と茶文化を代表する都市',
        'ko': '지상의 낙원, 서호의 아름다운 풍경과 차 문화를 대표하는 도시',
        'fr': 'Paradis sur terre, ville représentant le paysage du lac Ouest et la culture du thé',
        'de': 'Paradies auf Erden, Stadt, die für die Landschaft des Westsees und die Teekultur steht',
        'es': 'Paraíso en la tierra, una ciudad que representa el paisaje del Lago Oeste y la cultura del té',
        'ru': 'Рай на земле, город, представляющий пейзажи Западного озера и чайную культуру',
      },
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
          
          {/* 目的地列表 */}
          <div className="grid grid-cols-1 gap-6">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((city) => (
                <div 
                  key={city}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {getCityName(city)}
                    </h2>
                    <p className="text-gray-600">{getCityDescription(city)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                {getTranslatedString('noResults')}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 