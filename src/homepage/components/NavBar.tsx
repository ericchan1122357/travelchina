'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '../types';

interface NavBarProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  currentLanguage = 'en',
  onLanguageChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languageOptions: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'es', label: 'Español' }
  ];

  const languageLabels: Record<Language, string> = {
    en: 'EN',
    zh: '中文',
    fr: 'FR',
    de: 'DE',
    ja: '日本語',
    ko: '한국어',
    es: 'ES',
    ru: 'RU'
  };

  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language);
    setIsLanguageMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-china-red">
              中国旅游
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/destinations" className="text-gray-600 hover:text-china-red">
              目的地
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-china-red">
              旅行故事
            </Link>
            <Link href="/guides" className="text-gray-600 hover:text-china-red">
              实用指南
            </Link>
            <Link href="/planner" className="text-gray-600 hover:text-china-red">
              行程规划
            </Link>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-white border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-china-red focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/destinations"
              className="block px-3 py-2 text-gray-600 hover:text-china-red"
              onClick={() => setIsMenuOpen(false)}
            >
              目的地
            </Link>
            <Link
              href="/stories"
              className="block px-3 py-2 text-gray-600 hover:text-china-red"
              onClick={() => setIsMenuOpen(false)}
            >
              旅行故事
            </Link>
            <Link
              href="/guides"
              className="block px-3 py-2 text-gray-600 hover:text-china-red"
              onClick={() => setIsMenuOpen(false)}
            >
              实用指南
            </Link>
            <Link
              href="/planner"
              className="block px-3 py-2 text-gray-600 hover:text-china-red"
              onClick={() => setIsMenuOpen(false)}
            >
              行程规划
            </Link>
            <div className="px-3 py-2">
              <select
                value={currentLanguage}
                onChange={(e) => {
                  onLanguageChange(e.target.value as Language);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-white border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="zh">中文</option>
                <option value="en">English</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 