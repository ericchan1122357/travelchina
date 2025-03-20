import { useEffect, useState } from 'react';
import { Language, TranslationValue } from '../../homepage/utils/translations/types';
import { getTranslation } from '../../homepage/utils/translations';

interface SkipToContentProps {
  currentLanguage: Language;
}

const SkipToContent: React.FC<SkipToContentProps> = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a
      href="#main-content"
      className={`fixed top-0 left-0 z-50 bg-china-red text-white px-4 py-2 transform -translate-y-full focus:translate-y-0 transition-transform duration-200 ${
        isVisible ? 'focus:translate-y-0' : ''
      }`}
      onClick={() => setIsVisible(false)}
      aria-label={t('skipToContent') as string}
    >
      {t('skipToContent') as string}
    </a>
  );
};

export default SkipToContent; 