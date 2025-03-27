'use client';

import { CallToActionData, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { TranslationValue } from '../utils/translations/types';

interface CallToActionSectionProps {
  data: CallToActionData;
  onCtaClick: () => void;
  currentLanguage: Language;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  data,
  onCtaClick,
  currentLanguage
}) => {
  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${data.backgroundImageUrl})`
      }}
    >
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('ctaTitle') as string}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('ctaSubtitle') as string}
          </p>
          <button
            onClick={onCtaClick}
            className="bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-red-700 transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={t('ctaButton') as string}
          >
            {t('ctaButton') as string}
          </button>
        </div>

        {/* 信任标识 */}
        <div 
          className="mt-16 text-center"
          role="region"
          aria-label={t('main.partners.title')}
        >
          <p className="text-white/60 text-sm mb-4">
            {t('main.partners.description')}
          </p>
          <div 
            className="flex justify-center items-center space-x-8"
            role="list"
            aria-label={t('main.partners.title')}
          >
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">TripAdvisor</span>
            </div>
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">Lonely Planet</span>
            </div>
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">National Geographic</span>
            </div>
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">CNN Travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 