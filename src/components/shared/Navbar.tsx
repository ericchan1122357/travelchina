'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage, Language } from '@/contexts/LanguageContext';

export default function Navbar() {
  const pathname = usePathname() || '';
  const router = useRouter();
  const { currentLanguage, setLanguage } = useLanguage();

  const getTranslatedString = (key: string) => {
    const translations: Record<string, Record<Language, string>> = {
      'destinations': {
        'zh': '目的地',
        'en': 'Destinations',
        'fr': 'Destinations',
        'de': 'Reiseziele',
        'es': 'Destinos',
        'ja': '目的地',
        'ko': '여행지',
        'ru': 'Направления',
      },
      'guides': {
        'zh': '攻略',
        'en': 'Guides',
        'fr': 'Guides',
        'de': 'Reiseführer',
        'es': 'Guías',
        'ja': 'ガイド',
        'ko': '가이드',
        'ru': 'Гиды',
      },
      'stories': {
        'zh': '故事',
        'en': 'Stories',
        'fr': 'Histoires',
        'de': 'Geschichten',
        'es': 'Historias',
        'ja': 'ストーリー',
        'ko': '이야기',
        'ru': 'Истории',
      },
      'planner': {
        'zh': '行程规划',
        'en': 'Trip Planner',
        'fr': 'Planificateur',
        'de': 'Reiseplaner',
        'es': 'Planificador',
        'ja': '旅程プランナー',
        'ko': '여행 플래너',
        'ru': 'Планировщик',
      },
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    setLanguage(newLanguage);
    
    // 将语言选择保存到localStorage，以便在页面刷新后保持选择
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  // 处理导航点击
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // 如果是目的地页面，且当前在详情页，需要重新导航到列表页
    if (href === '/destinations' && pathname.startsWith('/destinations') && pathname.includes('?city=')) {
      e.preventDefault();
      router.push('/destinations');
    }
  };

  const navItems = [
    { href: '/destinations', label: getTranslatedString('destinations') },
    { href: '/guides', label: getTranslatedString('guides') },
    { href: '/stories', label: getTranslatedString('stories') },
    { href: '/planner', label: getTranslatedString('planner') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-red-600 text-xl font-bold">China Free Travel</span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname === item.href || (item.href === '/destinations' && pathname.startsWith('/destinations'))
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <select
              value={currentLanguage}
              onChange={handleLanguageChange}
              className="ml-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
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
    </nav>
  );
} 