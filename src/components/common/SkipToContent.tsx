import { useEffect, useState } from 'react';

const SkipToContent = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    >
      跳转到主要内容
    </a>
  );
};

export default SkipToContent; 