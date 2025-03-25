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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="text-center px-4 py-1">
              <h3 className="text-base font-bold text-white mb-1 drop-shadow-md">
                {value.title}
              </h3>
              <p className="text-white text-sm whitespace-nowrap overflow-hidden overflow-ellipsis drop-shadow-md">
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