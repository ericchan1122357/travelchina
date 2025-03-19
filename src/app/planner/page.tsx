'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/homepage/types';
import Questionnaire from '@/components/planner/Questionnaire';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PlannerPage() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 页面标题区域 */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('planner.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('planner.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 问卷区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* 进度指示器 */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {t('planner.progress')}
                </span>
                <span className="text-sm font-medium text-gray-700">1/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>

            {/* 问卷组件 */}
            <Questionnaire language={currentLanguage} />
          </div>
        </div>
      </section>
    </main>
  );
} 