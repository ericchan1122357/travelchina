'use client';

import React from 'react';
import Link from 'next/link';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';
import { TranslationValue } from '../utils/translations/types';

interface NavBarProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentLanguage, onLanguageChange }) => {
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key) as string;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" style={{ zIndex: 1000 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-china-red">
              {t('nav.logo')}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/destinations" className="text-gray-700 hover:text-china-red">
              {t('destinations')}
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-china-red">
              {t('guides')}
            </Link>
            <Link href="/stories" className="text-gray-700 hover:text-china-red">
              {t('stories')}
            </Link>
            <Link href="/planner" className="text-gray-700 hover:text-china-red">
              {t('planner')}
            </Link>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <select
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-china-red focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="es">Español</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 