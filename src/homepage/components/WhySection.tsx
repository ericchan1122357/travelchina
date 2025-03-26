'use client';

import { useEffect, useState } from 'react';

interface WhySectionProps {
  whyChina: {
    title: string;
    points: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  whyUs: {
    title: string;
    points: {
      id: string;
      title: string;
      description: string;
    }[];
  };
}

const WhySection = ({ whyChina, whyUs }: WhySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionElement = document.getElementById('why-section');
      
      if (sectionElement && scrollPosition > sectionElement.offsetTop + 100) {
        setIsVisible(true);
      }
    };

    // 初始检查
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="why-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Why China */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 relative">
            {whyChina.title}
            <span className="block w-24 h-1 bg-china-red mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChina.points.map((point, index) => (
              <div 
                key={point.id} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <h3 className="text-xl font-semibold mb-3 text-china-red">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Us */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 relative">
            {whyUs.title}
            <span className="block w-24 h-1 bg-china-red mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.points.map((point, index) => (
              <div 
                key={point.id} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ 
                  transitionDelay: `${(index + 3) * 200}ms`,
                }}
              >
                <h3 className="text-xl font-semibold mb-3 text-china-red">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection; 