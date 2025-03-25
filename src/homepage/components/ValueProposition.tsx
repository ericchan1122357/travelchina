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
            <div key={value.id} className="text-center px-4 py-2">
              <div className="bg-black/30 backdrop-blur-sm rounded-md p-2">
                <h3 className="text-base font-bold text-yellow-300 mb-1 drop-shadow-md">
                  {value.title}
                </h3>
                <p className="text-white text-sm break-words drop-shadow-md">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 