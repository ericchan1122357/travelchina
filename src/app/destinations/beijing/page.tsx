'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/homepage/utils/translations';
import { TranslationValue } from '@/homepage/utils/translations/types';

export default function BeijingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentLanguage } = useLanguage();
  
  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  useEffect(() => {
    // 模拟内容加载
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-china-red"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部大图区域 */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* 大图背景 */}
        <div className="absolute inset-0">
          <Image 
            src="/images/destinations/beijing-hero.jpg" 
            fill
            className="object-cover"
            alt={t('beijing.title')}
            priority
          />
        </div>
        
        {/* 标题文字层 */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/70">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              {t('beijing.title')}
            </h1>
            <p className="text-xl text-white/90">
              {t('beijing.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* 内容导航栏 */}
      <nav className="sticky top-0 bg-white shadow-md z-30">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 overflow-x-auto py-4 text-gray-600">
            <li><a href="#basic-info" className="hover:text-china-red">{t('beijing.nav.basicInfo')}</a></li>
            <li><a href="#culture-history" className="hover:text-china-red">{t('beijing.nav.culture')}</a></li>
            <li><a href="#attractions" className="hover:text-china-red">{t('beijing.nav.attractions')}</a></li>
            <li><a href="#experiences" className="hover:text-china-red">{t('beijing.nav.experiences')}</a></li>
          </ul>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="container mx-auto px-4 py-8">
        {/* 开篇印象 */}
        <section className="mb-12">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              {t('beijing.overview')}
            </p>
          </div>
        </section>

        {/* 基本信息卡片组 */}
        <section id="basic-info" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('beijing.basicInfo.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 最佳游览季节卡片 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{t('beijing.basicInfo.bestSeason.title')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>{t('beijing.basicInfo.bestSeason.spring')}</li>
                <li>{t('beijing.basicInfo.bestSeason.autumn')}</li>
              </ul>
            </div>
            {/* 气候特点卡片 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{t('beijing.basicInfo.climate.title')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>{t('beijing.basicInfo.climate.spring')}</li>
                <li>{t('beijing.basicInfo.climate.summer')}</li>
                <li>{t('beijing.basicInfo.climate.autumn')}</li>
                <li>{t('beijing.basicInfo.climate.winter')}</li>
              </ul>
            </div>
            {/* 当地交通卡片 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{t('beijing.basicInfo.transport.title')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>{t('beijing.basicInfo.transport.subway')}</li>
                <li>{t('beijing.basicInfo.transport.bus')}</li>
                <li>{t('beijing.basicInfo.transport.taxi')}</li>
                <li>{t('beijing.basicInfo.transport.bike')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 文化历史部分 */}
        <section id="culture-history" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('beijing.culture.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">{t('beijing.culture.history.title')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>{t('beijing.culture.history.ancient')}</li>
                <li>{t('beijing.culture.history.yuan')}</li>
                <li>{t('beijing.culture.history.ming')}</li>
                <li>{t('beijing.culture.history.modern')}</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">{t('beijing.culture.features.title')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>{t('beijing.culture.features.royal')}</li>
                <li>{t('beijing.culture.features.hutong')}</li>
                <li>{t('beijing.culture.features.opera')}</li>
                <li>{t('beijing.culture.features.courtyard')}</li>
              </ul>
            </div>
            {/* 图片展示区 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48">
                <Image 
                  src="/images/destinations/beijing-culture-1.jpg" 
                  fill
                  className="object-cover rounded-lg"
                  alt={t('beijing.culture.features.royal')}
                />
              </div>
              <div className="relative h-48">
                <Image 
                  src="/images/destinations/beijing-culture-2.jpg" 
                  fill
                  className="object-cover rounded-lg"
                  alt={t('beijing.culture.features.hutong')}
                />
              </div>
              <div className="relative h-48">
                <Image 
                  src="/images/destinations/beijing-culture-3.jpg" 
                  fill
                  className="object-cover rounded-lg"
                  alt={t('beijing.culture.features.opera')}
                />
              </div>
              <div className="relative h-48">
                <Image 
                  src="/images/destinations/beijing-culture-4.jpg" 
                  fill
                  className="object-cover rounded-lg"
                  alt={t('beijing.culture.features.courtyard')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 必游景点部分 */}
        <section id="attractions" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('beijing.attractions.title')}</h2>
          
          {/* 皇家宫殿与园林 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{t('beijing.attractions.palace.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 故宫卡片 */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/images/destinations/forbidden-city.jpg" 
                    fill
                    className="object-cover"
                    alt={t('beijing.attractions.palace.forbidden.title')}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{t('beijing.attractions.palace.forbidden.title')}</h4>
                  <p className="text-gray-600">{t('beijing.attractions.palace.forbidden.desc')}</p>
                </div>
              </div>
              
              {/* 颐和园卡片 */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/images/destinations/summer-palace.jpg" 
                    fill
                    className="object-cover"
                    alt={t('beijing.attractions.palace.summer.title')}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{t('beijing.attractions.palace.summer.title')}</h4>
                  <p className="text-gray-600">{t('beijing.attractions.palace.summer.desc')}</p>
                </div>
              </div>
              
              {/* 天坛卡片 */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/images/destinations/temple-of-heaven.jpg" 
                    fill
                    className="object-cover"
                    alt={t('beijing.attractions.palace.temple.title')}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{t('beijing.attractions.palace.temple.title')}</h4>
                  <p className="text-gray-600">{t('beijing.attractions.palace.temple.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 长城景区 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{t('beijing.attractions.greatwall.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 慕田峪长城卡片 */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/images/destinations/mutianyu.jpg" 
                    fill
                    className="object-cover"
                    alt={t('beijing.attractions.greatwall.mutianyu.title')}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{t('beijing.attractions.greatwall.mutianyu.title')}</h4>
                  <p className="text-gray-600">{t('beijing.attractions.greatwall.mutianyu.desc')}</p>
                </div>
              </div>
              
              {/* 八达岭长城卡片 */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src="/images/destinations/badaling.jpg" 
                    fill
                    className="object-cover"
                    alt={t('beijing.attractions.greatwall.badaling.title')}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{t('beijing.attractions.greatwall.badaling.title')}</h4>
                  <p className="text-gray-600">{t('beijing.attractions.greatwall.badaling.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特色体验部分 */}
        <section id="experiences" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('beijing.experiences.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 文化体验 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{t('beijing.experiences.culture.title')}</h3>
              <ul className="space-y-4">
                <li>{t('beijing.experiences.culture.opera')}</li>
                <li>{t('beijing.experiences.culture.hutong')}</li>
                <li>{t('beijing.experiences.culture.tea')}</li>
                <li>{t('beijing.experiences.culture.tour')}</li>
              </ul>
            </div>
            {/* 春季特色活动 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{t('beijing.experiences.spring.title')}</h3>
              <ul className="space-y-4">
                <li>{t('beijing.experiences.spring.xiangshan')}</li>
                <li>{t('beijing.experiences.spring.yuyuantan')}</li>
                <li>{t('beijing.experiences.spring.summer')}</li>
                <li>{t('beijing.experiences.spring.botanical')}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* 底部导航 */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/destinations" className="text-china-red hover:underline">
                {t('beijing.nav.back')}
              </Link>
            </div>
            <div>
              <Link 
                href="/planner" 
                className="bg-china-red text-white px-6 py-2 rounded-lg hover:bg-red-700"
              >
                {t('beijing.nav.plan')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 