'use client';

import Image from 'next/image';
import { TravelStory } from '../types';

interface TravelStoryCardProps {
  story: TravelStory;
  onReadMore: (storyId: string) => void;
}

const TravelStoryCard: React.FC<TravelStoryCardProps> = ({ story, onReadMore }) => {
  const { id, title, description, imageUrl, author, date, destination } = story;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="md:flex">
        {/* 图片部分 - 在移动端显示在顶部，桌面端显示在左侧 */}
        <div className="md:flex-shrink-0 relative">
          <div className="h-56 md:h-full md:w-48 lg:w-64 relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        
        {/* 内容部分 */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-4">
            {/* 用户头像 */}
            <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
              <Image
                src={author.avatar || '/default-avatar.png'}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-900">{author.name}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
          
          {/* 标题和摘要 */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
          </div>
          
          {/* 目的地和阅读更多 */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              目的地: {destination}
            </span>
            
            <button
              onClick={() => onReadMore(id)}
              className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center"
            >
              阅读全文
              <svg 
                className="ml-1 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelStoryCard; 