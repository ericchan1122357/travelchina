'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { TravelGuide } from '@/homepage/types';
import { travelGuides } from '@/homepage/utils/mockData';
import { Language } from '@/homepage/types';
import { getTranslation } from '@/homepage/utils/translations';
import { TranslationValue } from '@/homepage/utils/translations/types';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GuidePage() {
  const params = useParams();
  const { currentLanguage } = useLanguage();
  const [guide, setGuide] = useState<TravelGuide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage as Language, key);

  useEffect(() => {
    if (!params?.category || !params?.id) {
      setError('Invalid URL parameters');
      setLoading(false);
      return;
    }

    // 从 mockData 中查找对应的指南
    const foundGuide = travelGuides.find(g => {
      const matchesCategory = g.category.toLowerCase() === params.category;
      const matchesId = g.id === params.id;
      const matchesUrl = g.url === `/guides/${params.category}/${params.id}`;
      return matchesCategory && (matchesId || matchesUrl);
    });

    if (foundGuide) {
      setGuide(foundGuide);
      setError(null);
    } else {
      setError('Guide not found');
    }
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-china-red"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('error.notFound')}</h1>
        <p className="text-gray-600">{t('error.guideNotFound')}</p>
      </div>
    );
  }

  if (!guide) {
    return null;
  }

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{guide.title}</h1>
          <p className="text-xl text-gray-600">{guide.description}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* 这里可以添加更多的内容展示，比如图片、分段等 */}
          <div className="my-8">
            <img
              src={guide.imageUrl}
              alt={guide.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('guide.content')}</h2>
            <div className="text-gray-600">
              {guide.content}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 