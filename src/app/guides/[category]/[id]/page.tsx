'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TravelGuide } from '@/homepage/types';
import { travelGuides } from '@/homepage/utils/mockData';
import { Language } from '@/homepage/types';
import { getTranslation } from '@/homepage/utils/translations';
import { TranslationValue } from '@/homepage/utils/translations/types';
import { useLanguage } from '@/contexts/LanguageContext';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function GuidePage() {
  const params = useParams();
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const [guide, setGuide] = useState<TravelGuide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage as Language, key);

  useEffect(() => {
    if (!params?.category || !params?.id) {
      router.push('/404');
      return;
    }

    try {
      // 从 mockData 中查找对应的指南
      const foundGuide = travelGuides.find(g => {
        const matchesCategory = g.categorySlug === params.category;
        const matchesId = g.id === params.id;
        const matchesUrl = g.url === `/guides/${params.category}/${params.id}`;
        return matchesCategory && (matchesId || matchesUrl);
      });

      if (foundGuide) {
        setGuide(foundGuide);
        setError(null);
      } else {
        router.push('/404');
      }
    } catch (err) {
      console.error('Error loading guide:', err);
      setError('Failed to load guide');
    } finally {
      setLoading(false);
    }
  }, [params, router]);

  // 加载状态
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-china-red"></div>
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('error.notFound')}</h1>
        <p className="text-gray-600">{t('error.guideNotFound')}</p>
        <button 
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-china-red text-white rounded hover:bg-red-700 transition-colors"
        >
          {t('nav.back')}
        </button>
      </div>
    );
  }

  if (!guide) {
    return null;
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{guide.title}</h1>
            <p className="text-xl text-gray-600">{guide.description}</p>
          </header>

          <div className="prose prose-lg max-w-none">
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
    </ErrorBoundary>
  );
} 