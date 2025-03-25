'use client';

import Image from 'next/image';
import { ValueProp } from '../types';

interface ValuePropositionProps {
  values: ValueProp[];
}

const ValueProposition = ({ values }: ValuePropositionProps) => {
  return (
    <section className="py-4">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.id} className="text-center p-3">
              <div className="relative w-12 h-12 mx-auto mb-3">
                <Image
                  src={value.iconUrl}
                  alt={value.title}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">
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