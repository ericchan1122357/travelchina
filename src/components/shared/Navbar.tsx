"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// 导航链接结构
type NavItem = {
  href: string;
  labelKey: string;
};

// 可用的语言列表
const AVAILABLE_LANGUAGES = ['en', 'zh', 'fr', 'de', 'es', 'ja', 'ko', 'ru'];

// 导航栏组件
export default function Navbar() {
  const { currentLanguage, setLanguage } = useLanguage();
  const pathname = usePathname() || '';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 监听滚动以改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 导航链接
  const navLinks: NavItem[] = [
    { href: '/destinations', labelKey: 'destinations' },
    { href: '/guides', labelKey: 'guides' },
    { href: '/stories', labelKey: 'stories' },
    { href: '/planner', labelKey: 'planner' },
  ];
  
  // 获取翻译
  const getTranslation = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      brand: {
        en: 'China Free Travel',
        zh: '中国自由行',
        fr: 'Voyage Libre en Chine',
        de: 'China Freie Reise',
        es: 'Viaje Libre a China',
        ja: '中国自由旅行',
        ko: '중국 자유 여행',
        ru: 'Свободное Путешествие по Китаю',
      },
      destinations: {
        en: 'Destinations',
        zh: '目的地',
        fr: 'Destinations',
        de: 'Reiseziele',
        es: 'Destinos',
        ja: '目的地',
        ko: '목적지',
        ru: 'Направления',
      },
      guides: {
        en: 'Guides',
        zh: '旅游指南',
        fr: 'Guides',
        de: 'Reiseführer',
        es: 'Guías',
        ja: 'ガイド',
        ko: '가이드',
        ru: 'Гиды',
      },
      stories: {
        en: 'Stories',
        zh: '旅行故事',
        fr: 'Histoires',
        de: 'Geschichten',
        es: 'Historias',
        ja: 'ストーリー',
        ko: '이야기',
        ru: 'Истории',
      },
      planner: {
        en: 'Trip Planner',
        zh: '行程规划',
        fr: 'Planificateur',
        de: 'Reiseplaner',
        es: 'Planificador',
        ja: '旅行プランナー',
        ko: '여행 플래너',
        ru: 'Планировщик',
      },
    };
    
    return translations[key]?.[currentLanguage] || translations[key]?.['en'] || key;
  };
  
  // 处理语言切换
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as Language);
    
    // 保持当前页面路径，但更新语言
    const currentPathParts = pathname.split('/').filter(Boolean);
    let newPath = '/' + lang;
    
    // 如果当前路径包含语言代码（前两个字符是语言代码）
    if (currentPathParts.length > 0 && AVAILABLE_LANGUAGES.includes(currentPathParts[0])) {
      // 替换语言代码
      newPath = '/' + lang + '/' + currentPathParts.slice(1).join('/');
    } else if (currentPathParts.length > 0) {
      // 如果当前路径不包含语言代码，直接添加
      newPath = '/' + lang + '/' + currentPathParts.join('/');
    }
    
    // 处理URL参数
    const currentUrl = new URL(window.location.href);
    const searchParams = currentUrl.search;
    
    // 构建新URL并重定向
    window.location.href = newPath + searchParams;
  };
  
  // 处理目的地点击
  const handleDestinationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 从当前URL解析基础路径和语言前缀
    const currentPathParts = pathname.split('/').filter(Boolean);
    let basePath = '';
    
    // 如果当前路径包含语言代码
    if (currentPathParts.length > 0 && AVAILABLE_LANGUAGES.includes(currentPathParts[0])) {
      basePath = '/' + currentPathParts[0];
    }
    
    // 构造目的地列表页URL
    const destinationsUrl = `${basePath}/destinations`;
    
    // 清除会话存储中可能存在的标志
    sessionStorage.removeItem('isFromCityDetail');
    
    // 使用location.replace来替换当前历史记录，确保返回按钮行为正确
    window.location.replace(destinationsUrl);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-red-600">{getTranslation('brand')}</span>
            </Link>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {navLinks.map((item) => (
                item.labelKey === 'destinations' ? (
                  <button
                    key={item.labelKey}
                    onClick={handleDestinationsClick}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname.includes(item.href)
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {getTranslation(item.labelKey)}
                  </button>
                ) : (
                  <Link
                    key={item.labelKey}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname.includes(item.href)
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    {getTranslation(item.labelKey)}
                  </Link>
                )
              ))}
            </div>
            
            {/* 语言切换器 */}
            <div className="relative ml-4 border-l border-gray-200 pl-4">
              <select
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="block w-20 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              >
                <option value="en">EN</option>
                <option value="zh">中文</option>
                <option value="fr">FR</option>
                <option value="de">DE</option>
                <option value="es">ES</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              item.labelKey === 'destinations' ? (
                <button
                  key={item.labelKey}
                  onClick={(e) => {
                    handleDestinationsClick(e);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname.includes(item.href)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                  } w-full text-left`}
                >
                  {getTranslation(item.labelKey)}
                </button>
              ) : (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname.includes(item.href)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                  }`}
                >
                  {getTranslation(item.labelKey)}
                </Link>
              )
            ))}
            
            {/* 移动端语言切换器 */}
            <div className="px-3 py-2 border-t border-gray-200 mt-2 pt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {currentLanguage === 'zh' ? '语言' : 'Language'}
              </label>
              <select
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              >
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="ru">Русский</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 