import React from 'react';
import { DestinationSection } from '../destinations/utils/destinationContent';

interface DestinationContentProps {
  sections: DestinationSection[];
}

export default function DestinationContent({ sections }: DestinationContentProps) {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <section key={index} className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </section>
      ))}
    </div>
  );
} 