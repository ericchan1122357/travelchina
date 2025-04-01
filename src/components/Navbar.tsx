'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { currentLanguage } = useLanguage();

  const getTranslatedString = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      'home': {
        'zh': '首页',
        'en': 'Home',
        'fr': 'Accueil',
        'de': 'Startseite',
        'es': 'Inicio',
        'ja': 'ホーム',
        'ko': '홈',
        'ru': 'Главная',
      },
      'destinations': {
        'zh': '目的地',
        'en': 'Destinations',
        'fr': 'Destinations',
        'de': 'Reiseziele',
        'es': 'Destinos',
        'ja': '目的地',
        'ko': '목적지',
        'ru': 'Направления',
      },
      'guides': {
        'zh': '指南',
        'en': 'Guides',
        'fr': 'Guides',
        'de': 'Reiseführer',
        'es': 'Guías',
        'ja': 'ガイド',
        'ko': '가이드',
        'ru': 'Путеводители',
      },
      'stories': {
        'zh': '故事',
        'en': 'Stories',
        'fr': 'Histoires',
        'de': 'Geschichten',
        'es': 'Historias',
        'ja': 'ストーリー',
        'ko': '스토리',
        'ru': 'Истории',
      },
    };
    
    return translations[key][currentLanguage] || translations[key]['en'];
  };

  const navItems = [
    { href: '/', label: 'home' },
    { href: '/destinations', label: 'destinations' },
    { href: '/guides', label: 'guides' },
    { href: '/stories', label: 'stories' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Travel China
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === item.href
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {getTranslatedString(item.label)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 