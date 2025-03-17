'use client';

import Image from 'next/image';
import { ValueProp } from '../types';

interface ValuePropositionProps {
  values: ValueProp[];
}

const ValueProposition = ({ values }: ValuePropositionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src={value.iconUrl}
                  alt={value.title}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
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