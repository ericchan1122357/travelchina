import { useState } from 'react';
import { getTranslation } from '@/homepage/utils/translations';
import { TranslationValue } from '@/homepage/utils/translations/types';
import { useLanguage } from '@/contexts/LanguageContext';

const SkipToMain: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentLanguage } = useLanguage();

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50
        bg-white text-gray-900
        px-4 py-2 rounded-md
        transform transition-transform duration-200
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500
        shadow-lg
      `}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      aria-label={t('skipToContent') as string}
    >
      {t('skipToContent') as string}
    </a>
  );
};

export default SkipToMain; 