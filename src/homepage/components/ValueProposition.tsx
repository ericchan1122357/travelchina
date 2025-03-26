'use client';

import Image from 'next/image';
import { ValueProp } from '../types';
import { useEffect, useState } from 'react';

interface ValuePropositionProps {
  values: ValueProp[];
}

const ValueProposition = ({ values }: ValuePropositionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-3">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.id} 
              className={`text-center px-6 py-1 transform transition-all duration-700 ease-out 
                         ${isVisible 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                animationDelay: `${index * 200}ms`
              }}
            >
              <h3 className="text-white text-lg font-bold mb-2 hover:scale-105 transition-transform duration-300">
                {value.title}
              </h3>
              <p className="text-white/80 text-sm mx-auto break-words hover:text-white transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 