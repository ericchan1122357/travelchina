'use client';

import Image from 'next/image';
import { ValueProp } from '../types';

interface ValuePropositionProps {
  values: ValueProp[];
}

const ValueProposition = ({ values }: ValuePropositionProps) => {
  return (
    <section className="py-3">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((value) => (
            <div key={value.id} className="text-center p-2">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
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