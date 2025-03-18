'use client';

import React from 'react';
import Link from 'next/link';
import { Language } from '../types';

interface NavBarProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-china-red">China Travel Guide</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/destinations" className="text-gray-700 hover:text-china-red">
              Destinations
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-china-red">
              Travel Guides
            </Link>
            <Link href="/stories" className="text-gray-700 hover:text-china-red">
              Travel Stories
            </Link>
            <Link href="/planner" className="text-gray-700 hover:text-china-red">
              Trip Planner
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