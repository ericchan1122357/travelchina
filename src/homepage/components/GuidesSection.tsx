'use client';

import { TravelGuide } from '../types';

interface GuidesSectionProps {
  title: string;
  guides: TravelGuide[];
}

const GuidesSection = ({ title, guides }: GuidesSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* 图片 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={guide.imageUrl}
                  alt={guide.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* 内容 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-china-red/10 text-china-red">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-600">
                  {guide.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection; 