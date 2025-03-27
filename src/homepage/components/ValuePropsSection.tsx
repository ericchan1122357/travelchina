'use client';

import { ValueProp } from '../types';
import Image from 'next/image';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';
import { TranslationValue } from '../utils/translations/types';

interface ValuePropsSectionProps {
  valueProps: ValueProp[];
  currentLanguage: Language;
}

const ValuePropsSection: React.FC<ValuePropsSectionProps> = ({ valueProps, currentLanguage }) => {
  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'zh' 
              ? '我们提供专业的旅游攻略和个性化服务，让您的中国之旅更加完美'
              : 'We provide professional travel guides and personalized services to make your China journey perfect'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={prop.id}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-china-red rounded-full flex items-center justify-center mb-4">
                <Image
                  src={prop.iconUrl}
                  alt={prop.title}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(`valueProp${index + 1}Title` as keyof TranslationValue) as string}
              </h3>
              <p className="text-gray-600">
                {t(`valueProp${index + 1}Desc` as keyof TranslationValue) as string}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection; 