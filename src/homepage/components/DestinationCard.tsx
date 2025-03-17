'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { name, description, imageUrl, season, tags, url } = destination;

  const seasonColors = {
    spring: 'bg-green-100 text-green-800',
    summer: 'bg-yellow-100 text-yellow-800',
    autumn: 'bg-orange-100 text-orange-800',
    winter: 'bg-blue-100 text-blue-800',
    all: 'bg-purple-100 text-purple-800'
  };

  // 根据季节返回对应的标签样式
  const getSeasonClass = (season: 'spring' | 'summer' | 'autumn' | 'winter' | 'all') => {
    return seasonColors[season] || 'bg-gray-100 text-gray-800';
  };

  // 获取季节的中文名称
  const getSeasonName = (season: 'spring' | 'summer' | 'autumn' | 'winter' | 'all') => {
    const seasonNames = {
      spring: '春季',
      summer: '夏季',
      autumn: '秋季',
      winter: '冬季',
      all: '全年'
    };
    return seasonNames[season];
  };

  return (
    <div className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
      {/* 图片容器 */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <span 
            className={`${getSeasonClass(season)} text-xs font-medium px-2.5 py-1 rounded-full`}
          >
            {getSeasonName(season)}
          </span>
        </div>
      </div>

      {/* 内容 */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        {/* 标签 */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{tags.length - 3}
            </span>
          )}
        </div>
        
        {/* 链接 */}
        <Link
          href={url}
          className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center group-hover:underline"
        >
          了解更多
          <svg 
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard; 