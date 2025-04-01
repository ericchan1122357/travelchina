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

  // 当语言变化时重新过滤目的地
  useEffect(() => {
    if (activeTheme) {
      if (searchTerm) {
        handleSearch({ target: { value: searchTerm } } as React.ChangeEvent<HTMLInputElement>);
      } else {
        setFilteredDestinations(getCitiesByTheme(activeTheme));
      }
    }
  }, [currentLanguage]);
  
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
        let cityName = getLocalizedCityName(city, currentLanguage);
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
  
  // 获取对应语言的城市名称
  const getLocalizedCityName = (cityId: string, language: string) => {
    // 映射城市ID到各语言名称
    const cityNames: Record<string, Record<string, string>> = {
      'beijing': {
        'zh': '北京',
        'en': 'Beijing',
        'fr': 'Pékin',
        'de': 'Peking',
        'es': 'Pekín',
        'ja': '北京',
        'ko': '베이징',
        'ru': 'Пекин',
      },
      'shanghai': {
        'zh': '上海',
        'en': 'Shanghai',
        'fr': 'Shanghai',
        'de': 'Shanghai',
        'es': 'Shanghái',
        'ja': '上海',
        'ko': '상하이',
        'ru': 'Шанхай',
      },
      'xian': {
        'zh': '西安',
        'en': 'Xi\'an',
        'fr': 'Xi\'an',
        'de': 'Xi\'an',
        'es': 'Xi\'an',
        'ja': '西安',
        'ko': '시안',
        'ru': 'Сиань',
      },
      'chengdu': {
        'zh': '成都',
        'en': 'Chengdu',
        'fr': 'Chengdu',
        'de': 'Chengdu',
        'es': 'Chengdu',
        'ja': '成都',
        'ko': '청두',
        'ru': 'Чэнду',
      },
      'hangzhou': {
        'zh': '杭州',
        'en': 'Hangzhou',
        'fr': 'Hangzhou',
        'de': 'Hangzhou',
        'es': 'Hangzhou',
        'ja': '杭州',
        'ko': '항저우',
        'ru': 'Ханчжоу',
      },
      'suzhou': {
        'zh': '苏州',
        'en': 'Suzhou',
        'fr': 'Suzhou',
        'de': 'Suzhou',
        'es': 'Suzhou',
        'ja': '蘇州',
        'ko': '쑤저우',
        'ru': 'Сучжоу',
      },
      'guangzhou': {
        'zh': '广州',
        'en': 'Guangzhou',
        'fr': 'Canton',
        'de': 'Guangzhou',
        'es': 'Cantón',
        'ja': '広州',
        'ko': '광저우',
        'ru': 'Гуанчжоу',
      },
      'qingdao': {
        'zh': '青岛',
        'en': 'Qingdao',
        'fr': 'Qingdao',
        'de': 'Qingdao',
        'es': 'Qingdao',
        'ja': '青島',
        'ko': '칭다오',
        'ru': 'Циндао',
      },
      'guilin': {
        'zh': '桂林',
        'en': 'Guilin',
        'fr': 'Guilin',
        'de': 'Guilin',
        'es': 'Guilin',
        'ja': '桂林',
        'ko': '구이린',
        'ru': 'Гуйлинь',
      },
      'lhasa': {
        'zh': '拉萨',
        'en': 'Lhasa',
        'fr': 'Lhassa',
        'de': 'Lhasa',
        'es': 'Lhasa',
        'ja': 'ラサ',
        'ko': '라싸',
        'ru': 'Лхаса',
      },
      'sanya': {
        'zh': '三亚',
        'en': 'Sanya',
        'fr': 'Sanya',
        'de': 'Sanya',
        'es': 'Sanya',
        'ja': '三亜',
        'ko': '산야',
        'ru': 'Санья',
      },
      'chongqing': {
        'zh': '重庆',
        'en': 'Chongqing',
        'fr': 'Chongqing',
        'de': 'Chongqing',
        'es': 'Chongqing',
        'ja': '重慶',
        'ko': '충칭',
        'ru': 'Чунцин',
      },
      'xiamen': {
        'zh': '厦门',
        'en': 'Xiamen',
        'fr': 'Xiamen',
        'de': 'Xiamen',
        'es': 'Xiamen',
        'ja': '厦門',
        'ko': '샤먼',
        'ru': 'Сямынь',
      },
      'shenzhen': {
        'zh': '深圳',
        'en': 'Shenzhen',
        'fr': 'Shenzhen',
        'de': 'Shenzhen',
        'es': 'Shenzhen',
        'ja': '深セン',
        'ko': '선전',
        'ru': 'Шэньчжэнь',
      },
      'kunming': {
        'zh': '昆明',
        'en': 'Kunming',
        'fr': 'Kunming',
        'de': 'Kunming',
        'es': 'Kunming',
        'ja': '昆明',
        'ko': '쿤밍',
        'ru': 'Куньмин',
      },
      'tianjin': {
        'zh': '天津',
        'en': 'Tianjin',
        'fr': 'Tianjin',
        'de': 'Tianjin',
        'es': 'Tianjin',
        'ja': '天津',
        'ko': '톈진',
        'ru': 'Тяньцзинь',
      },
      'nanjing': {
        'zh': '南京',
        'en': 'Nanjing',
        'fr': 'Nanjing',
        'de': 'Nanjing',
        'es': 'Nanjing',
        'ja': '南京',
        'ko': '난징',
        'ru': 'Нанкин',
      },
      'wuhan': {
        'zh': '武汉',
        'en': 'Wuhan',
        'fr': 'Wuhan',
        'de': 'Wuhan',
        'es': 'Wuhan',
        'ja': '武漢',
        'ko': '우한',
        'ru': 'Ухань',
      },
      'guiyang': {
        'zh': '贵阳',
        'en': 'Guiyang',
        'fr': 'Guiyang',
        'de': 'Guiyang',
        'es': 'Guiyang',
        'ja': '貴陽',
        'ko': '구이양',
        'ru': 'Гуйян',
      },
      'zhangjiajie': {
        'zh': '张家界',
        'en': 'Zhangjiajie',
        'fr': 'Zhangjiajie',
        'de': 'Zhangjiajie',
        'es': 'Zhangjiajie',
        'ja': '張家界',
        'ko': '장자제',
        'ru': 'Чжанцзяцзе',
      },
    };
    
    return cityNames[cityId]?.[language] || cityNames[cityId]?.['en'] || cityId.charAt(0).toUpperCase() + cityId.slice(1);
  };
  
  // 获取城市描述
  const getCityDescription = (cityId: string) => {
    // 映射城市ID到各语言描述
    const cityDescriptions: Record<string, Record<string, string>> = {
      'beijing': {
        'zh': '中国首都，拥有悠久历史和现代魅力的文化中心',
        'en': 'China\'s capital, a cultural center with a long history and modern charm',
        'fr': 'Capitale de la Chine, un centre culturel avec une longue histoire et un charme moderne',
        'de': 'Chinas Hauptstadt, ein Kulturzentrum mit langer Geschichte und modernem Charme',
        'es': 'La capital de China, un centro cultural con una larga historia y encanto moderno',
        'ja': '中国の首都、長い歴史と現代的な魅力を持つ文化の中心',
        'ko': '중국의 수도, 오랜 역사와 현대적 매력을 가진 문화 중심지',
        'ru': 'Столица Китая, культурный центр с долгой историей и современным шармом',
      },
      'shanghai': {
        'zh': '国际化大都市，融合东西方文化的现代化港口城市',
        'en': 'International metropolis, a modern port city blending Eastern and Western cultures',
        'fr': 'Métropole internationale, ville portuaire moderne mélangeant cultures orientale et occidentale',
        'de': 'Internationale Metropole, eine moderne Hafenstadt, die östliche und westliche Kulturen verbindet',
        'es': 'Metrópolis internacional, una moderna ciudad portuaria que combina culturas orientales y occidentales',
        'ja': '国際的な大都市、東洋と西洋の文化を融合させた現代的な港湾都市',
        'ko': '국제 대도시, 동양과 서양 문화가 어우러진 현대적인 항구 도시',
        'ru': 'Международный мегаполис, современный портовый город, сочетающий восточную и западную культуры',
      },
      'xian': {
        'zh': '古都风采，丝绸之路的起点，拥有兵马俑等世界遗产',
        'en': 'Ancient capital, starting point of the Silk Road, home to the Terracotta Warriors',
        'fr': 'Ancienne capitale, point de départ de la Route de la Soie, abritant les Guerriers de terre cuite',
        'de': 'Alte Hauptstadt, Ausgangspunkt der Seidenstraße, Heimat der Terrakotta-Armee',
        'es': 'Antigua capital, punto de partida de la Ruta de la Seda, hogar de los Guerreros de Terracota',
        'ja': '古都、シルクロードの起点、兵馬俑などの世界遺産',
        'ko': '고대 수도, 실크로드의 시작점, 병마용 등의 세계 유산',
        'ru': 'Древняя столица, начало Шелкового пути, дом терракотовых воинов',
      },
      'chengdu': {
        'zh': '休闲天堂，以熊猫和美食闻名的西南城市',
        'en': 'Leisure paradise, a southwestern city known for pandas and cuisine',
        'fr': 'Paradis des loisirs, ville du sud-ouest connue pour ses pandas et sa cuisine',
        'de': 'Freizeitparadies, eine südwestliche Stadt, bekannt für Pandas und Küche',
        'es': 'Paraíso del ocio, una ciudad del suroeste conocida por los pandas y la cocina',
        'ja': 'レジャーパラダイス、パンダと料理で有名な南西部の都市',
        'ko': '레저 파라다이스, 판다와 요리로 유명한 남서부 도시',
        'ru': 'Рай для отдыха, юго-западный город, известный пандами и кухней',
      },
      'hangzhou': {
        'zh': '人间天堂，西湖美景和茶文化的代表城市',
        'en': 'Paradise on earth, a city representing West Lake scenery and tea culture',
        'fr': 'Paradis sur terre, une ville représentant le paysage du lac de l\'Ouest et la culture du thé',
        'de': 'Paradies auf Erden, eine Stadt, die die Landschaft des Westsees und die Teekultur repräsentiert',
        'es': 'Paraíso en la tierra, una ciudad que representa el paisaje del Lago Oeste y la cultura del té',
        'ja': '地上の楽園、西湖の景色と茶文化を代表する都市',
        'ko': '지상의 낙원, 서호 경치와 차 문화를 대표하는 도시',
        'ru': 'Рай на земле, город, представляющий пейзаж Западного озера и чайную культуру',
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
          
          {/* 目的地卡片列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((cityId) => (
                <div
                  key={cityId}
                  onClick={() => handleCitySelect(cityId)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">{getLocalizedCityName(cityId, currentLanguage)} Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{getLocalizedCityName(cityId, currentLanguage)}</h3>
                    <p className="text-gray-600">{getCityDescription(cityId)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">{getTranslatedString('noResults')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 