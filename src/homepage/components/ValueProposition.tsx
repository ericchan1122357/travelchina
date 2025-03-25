'use client';

import Image from 'next/image';
import { ValueProp } from '../types';

interface ValuePropositionProps {
  values: ValueProp[];
}

const ValueProposition = ({ values }: ValuePropositionProps) => {
  return (
    <section className="py-2">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {values.map((value) => (
            <div key={value.id} className="text-center px-1 py-1">
              <h3 className="text-sm font-semibold text-gray-800 mb-0.5">
                {value.title}
              </h3>
              <p className="text-gray-600 text-xs">
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