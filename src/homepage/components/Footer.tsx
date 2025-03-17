'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Language } from '../types';

interface FooterProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const Footer = ({ currentLanguage, onLanguageChange }: FooterProps) => {
  const languageOptions: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'es', label: 'Español' },
    { code: 'ru', label: 'Русский' }
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo和简介 */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-china-red">
              中国旅游
            </Link>
            <p className="mt-4 text-gray-400">
              发现中国的魅力，体验独特的文化之旅。我们致力于为您提供最佳的旅行体验和专业的规划建议。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-white">
                  目的地
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-gray-400 hover:text-white">
                  旅行故事
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white">
                  实用指南
                </Link>
              </li>
              <li>
                <Link href="/planner" className="text-gray-400 hover:text-white">
                  行程规划
                </Link>
              </li>
            </ul>
          </div>

          {/* 语言和联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">语言选择</h3>
            <select
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 w-full"
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
            </select>

            <h3 className="text-lg font-semibold mt-6 mb-4">联系我们</h3>
            <div className="space-y-2 text-gray-400">
              <p>邮箱：contact@chinatravel.com</p>
              <p>电话：+86 123 4567 8900</p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {year} 中国旅游. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 