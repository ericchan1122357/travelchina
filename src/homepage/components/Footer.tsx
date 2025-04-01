'use client';

import Link from 'next/link';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';
import { TranslationValue } from '../utils/translations/types';

interface FooterProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const Footer = ({ currentLanguage, onLanguageChange }: FooterProps) => {
  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
    { code: 'ru', label: 'Русский' }
  ];

  const year = new Date().getFullYear();

  return (
    <footer 
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-label="页脚"
    >
      {/* 装饰性背景图案 */}
      <div 
        className="absolute inset-0 opacity-5"
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo和简介 */}
          <div className="col-span-1 md:col-span-2">
            <Link 
              href="/" 
              className="text-2xl font-bold text-china-red"
              aria-label={currentLanguage === 'zh' ? '返回首页' : 'Back to Home'}
            >
              China Free Travel
            </Link>
            <p className="mt-4 text-gray-400">
              {t('footerDescription') as string}
            </p>
            {/* 社交媒体链接 */}
            <div 
              className="mt-6 flex space-x-4"
              role="list"
              aria-label="社交媒体链接"
            >
              <a 
                href="#" 
                className="text-gray-400 hover:text-china-red transition-colors duration-300"
                role="listitem"
                aria-label="访问我们的Facebook页面"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-china-red transition-colors duration-300"
                role="listitem"
                aria-label="访问我们的Twitter页面"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-china-red transition-colors duration-300"
                role="listitem"
                aria-label="访问我们的Instagram页面"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {currentLanguage === 'zh' ? '快速链接' : 'Quick Links'}
            </h3>
            <ul 
              className="space-y-2"
              role="list"
              aria-label="快速链接"
            >
              <li>
                <Link 
                  href="/destinations" 
                  className="text-gray-400 hover:text-china-red transition-colors duration-300"
                  role="listitem"
                >
                  {t('destinations') as string}
                </Link>
              </li>
              <li>
                <Link 
                  href="/stories" 
                  className="text-gray-400 hover:text-china-red transition-colors duration-300"
                  role="listitem"
                >
                  {t('stories') as string}
                </Link>
              </li>
              <li>
                <Link 
                  href="/guides" 
                  className="text-gray-400 hover:text-china-red transition-colors duration-300"
                  role="listitem"
                >
                  {t('guides') as string}
                </Link>
              </li>
              <li>
                <Link 
                  href="/planner" 
                  className="text-gray-400 hover:text-china-red transition-colors duration-300"
                  role="listitem"
                >
                  {t('planner') as string}
                </Link>
              </li>
            </ul>
          </div>

          {/* 语言和联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {currentLanguage === 'zh' ? '语言选择' : 'Language'}
            </h3>
            <select
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-china-red"
              aria-label={currentLanguage === 'zh' ? '选择语言' : 'Select Language'}
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>

            <h3 className="text-lg font-semibold mt-6 mb-4">
              {t('footerContact') as string}
            </h3>
            <div 
              className="space-y-2 text-gray-400"
              role="list"
              aria-label="联系方式"
            >
              <p 
                className="flex items-center"
                role="listitem"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a 
                  href="mailto:contact@chinatravel.com"
                  className="hover:text-china-red transition-colors duration-300"
                >
                  contact@chinatravel.com
                </a>
              </p>
              <p 
                className="flex items-center"
                role="listitem"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a 
                  href="tel:+8612345678900"
                  className="hover:text-china-red transition-colors duration-300"
                >
                  +86 123 4567 8900
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          role="contentinfo"
        >
          <p>© {year} China Free Travel. {currentLanguage === 'zh' ? '保留所有权利' : 'All rights reserved'}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 