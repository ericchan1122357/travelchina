import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Language } from '../../homepage/types';
import { getTranslation } from '../../homepage/utils/translations';
import { TranslationValue } from '../../homepage/utils/translations/types';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.destinations'), href: '/destinations' },
    { name: t('nav.guides'), href: '/guides' },
    { name: t('nav.stories'), href: '/stories' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              {t('nav.logo')}
            </Link>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  router.pathname === item.href
                    ? 'border-red-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 语言切换器 */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <select
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
            >
              <option value="zh">{t('language.zh')}</option>
              <option value="en">{t('language.en')}</option>
              <option value="ja">{t('language.ja')}</option>
              <option value="ko">{t('language.ko')}</option>
              <option value="fr">{t('language.fr')}</option>
              <option value="de">{t('language.de')}</option>
              <option value="es">{t('language.es')}</option>
              <option value="ru">{t('language.ru')}</option>
            </select>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">
                {t('footer.openMenu')}
              </span>
              {/* 菜单图标 */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* 关闭图标 */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  router.pathname === item.href
                    ? 'bg-red-50 border-red-500 text-red-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4">
              <select
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                value={currentLanguage}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
              >
                <option value="zh">{t('language.zh')}</option>
                <option value="en">{t('language.en')}</option>
                <option value="ja">{t('language.ja')}</option>
                <option value="ko">{t('language.ko')}</option>
                <option value="fr">{t('language.fr')}</option>
                <option value="de">{t('language.de')}</option>
                <option value="es">{t('language.es')}</option>
                <option value="ru">{t('language.ru')}</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 