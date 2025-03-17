'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

type SeasonType = 'spring' | 'summer' | 'autumn' | 'winter' | 'all-season';

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { name, description, imageUrl, season, activities } = destination;

  const seasonColors: Record<SeasonType, string> = {
    spring: 'bg-green-100 text-green-800',
    summer: 'bg-yellow-100 text-yellow-800',
    autumn: 'bg-orange-100 text-orange-800',
    winter: 'bg-blue-100 text-blue-800',
    'all-season': 'bg-purple-100 text-purple-800'
  };

  const seasonColor = seasonColors[season.toLowerCase() as SeasonType] || seasonColors['all-season'];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-w-16 aspect-h-9">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${seasonColor}`}>
            {season}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        {activities && activities.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {activities.slice(0, 3).map((activity, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {activity}
                </span>
              ))}
              {activities.length > 3 && (
                <span className="text-xs text-gray-500">+{activities.length - 3} more</span>
              )}
            </div>
          </div>
        )}
        
        <Link
          href={`/destinations/${name.toLowerCase()}`}
          className="inline-flex items-center text-china-red hover:text-red-700"
        >
          了解更多
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard; 