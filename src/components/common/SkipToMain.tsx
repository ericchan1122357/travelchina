import { useState } from 'react';

const SkipToMain = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    >
      跳转到主要内容
    </a>
  );
};

export default SkipToMain; 