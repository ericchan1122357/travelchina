'use client';

import { TravelStory } from '../types';

interface TravelStoriesSectionProps {
  title: string;
  stories: TravelStory[];
  onReadMoreClick: (storyId: string) => void;
}

const TravelStoriesSection = ({
  title,
  stories,
  onReadMoreClick,
}: TravelStoriesSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* 图片 */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* 内容 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {story.summary}
                </p>

                {/* 作者信息和日期 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={story.author.avatar}
                      alt={story.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {story.author.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {story.destination}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(story.date).toLocaleDateString('zh-CN')}
                  </span>
                </div>

                {/* 阅读更多按钮 */}
                <button
                  onClick={() => onReadMoreClick(story.id)}
                  className="w-full bg-china-red text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  阅读更多
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelStoriesSection; 