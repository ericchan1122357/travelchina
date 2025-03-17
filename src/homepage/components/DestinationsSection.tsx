'use client';

import { useState } from 'react';
import { Destination } from '../types';
import OptimizedImage from './common/OptimizedImage';
import Link from 'next/link';

interface DestinationsSectionProps {
  destinations: Destination[];
}

const DestinationsSection: React.FC<DestinationsSectionProps> = ({ destinations }) => {
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const seasons = ['all', 'spring', 'summer', 'autumn', 'winter'];

  const filteredDestinations = selectedSeason === 'all'
    ? destinations
    : destinations.filter(dest => dest.season === selectedSeason);

  return (
    <section 
      className="py-16"
      aria-labelledby="destinations-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="destinations-title"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            探索中国
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            发现中国最美丽的旅游目的地，体验独特的文化和自然风光
          </p>
        </div>

        {/* 季节性标题 */}
        <div 
          className="flex justify-center space-x-4 mb-8"
          role="tablist"
          aria-label="选择季节"
        >
          {seasons.map(season => (
            <button
              key={season}
              onClick={() => setSelectedSeason(season)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${selectedSeason === season
                  ? 'bg-china-red text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              role="tab"
              aria-selected={selectedSeason === season}
              aria-controls={`season-${season}`}
            >
              {season === 'all' ? '全部' : 
               season === 'spring' ? '春季' :
               season === 'summer' ? '夏季' :
               season === 'autumn' ? '秋季' : '冬季'}
            </button>
          ))}
        </div>

        {/* 水平滚动区域 */}
        <div className="relative">
          <div 
            className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
            role="region"
            aria-label="目的地列表"
            tabIndex={0}
          >
            <div className="flex space-x-6 min-w-max">
              {filteredDestinations.map((destination) => (
                <Link
                  key={destination.id}
                  href={destination.url || '#'}
                  className="group flex-none w-80 focus:outline-none focus:ring-2 focus:ring-china-red focus:ring-offset-2 rounded-lg"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <OptimizedImage
                      src={destination.imageUrl}
                      alt={`${destination.name}的风景照片`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {destination.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/20 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection; 