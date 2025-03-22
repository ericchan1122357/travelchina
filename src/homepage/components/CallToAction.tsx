'use client';

import { CallToActionData } from '../types';

interface CallToActionProps {
  data: CallToActionData;
}

const CallToAction = ({ data }: CallToActionProps) => {
  // 计算完整的planner URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const plannerUrl = `${baseUrl}/planner`;

  return (
    <section className="relative py-24">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 内容 */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {data.title}
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          {data.subtitle}
        </p>

        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-china-red">
                {stat.value}
              </div>
              <div className="text-lg text-gray-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA按钮 */}
        <div className="relative" style={{ zIndex: 100 }}>
          <a
            href={plannerUrl}
            className="inline-flex items-center px-8 py-3 border-2 border-china-red bg-china-red text-white 
                   text-lg font-semibold rounded-lg hover:bg-red-700 hover:border-red-700 
                   transition-colors duration-300 cursor-pointer active:bg-red-800 active:scale-95 active:border-red-800
                   transform transition-transform text-center no-underline"
            style={{ position: 'relative', zIndex: 999 }}
          >
            {data.buttonText}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 