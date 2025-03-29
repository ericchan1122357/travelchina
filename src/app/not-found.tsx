'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/homepage/utils/translations';
import { Language } from '@/homepage/types';
import { TranslationValue } from '@/homepage/utils/translations/types';

export default function NotFound() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage as Language, key);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-china-red mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{t('error.notFound')}</h2>
        <p className="text-gray-600 mb-8">{t('error.pageNotFound')}</p>
        <div className="space-x-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            {t('nav.back')}
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-china-red text-white rounded hover:bg-red-700 transition-colors"
          >
            {t('nav.home')}
          </button>
        </div>
      </div>
    </div>
  )
} 