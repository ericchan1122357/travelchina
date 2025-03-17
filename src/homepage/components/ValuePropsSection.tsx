'use client';

import { ValueProp } from '../types';
import Image from 'next/image';

interface ValuePropsSectionProps {
  valueProps: ValueProp[];
}

const ValuePropsSection: React.FC<ValuePropsSectionProps> = ({ valueProps }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们提供专业的旅游攻略和个性化服务，让您的中国之旅更加完美
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
                {prop.title}
              </h3>
              <p className="text-gray-600">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection; 