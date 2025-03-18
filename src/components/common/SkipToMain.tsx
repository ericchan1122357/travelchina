import { useState } from 'react';
import { Language } from '../../homepage/types';
import { getTranslation, TranslationValue } from '../../homepage/utils/translations';

interface SkipToMainProps {
  currentLanguage: Language;
}

const SkipToMain: React.FC<SkipToMainProps> = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);

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