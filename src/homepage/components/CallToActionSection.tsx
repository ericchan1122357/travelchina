'use client';

import { CallToActionData } from '../types';
import OptimizedImage from './common/OptimizedImage';

interface CallToActionSectionProps {
  data: CallToActionData;
  onCtaClick: () => void;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  data,
  onCtaClick,
}) => {
  return (
    <section 
      className="relative py-16"
      aria-labelledby="cta-title"
    >
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
      >
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 
            id="cta-title"
            className="text-3xl font-bold mb-4"
          >
            {data.title}
          </h2>
          <p className="text-xl max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        {/* 统计数据 */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          role="list"
          aria-label="统计数据"
        >
          {data.stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              role="listitem"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA按钮 */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-red-700 transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={data.buttonText}
          >
            {data.buttonText}
          </button>
        </div>

        {/* 信任标识 */}
        <div 
          className="mt-16 text-center"
          role="region"
          aria-label="合作伙伴"
        >
          <p className="text-white/60 text-sm mb-4">值得信赖的合作伙伴</p>
          <div 
            className="flex justify-center items-center space-x-8"
            role="list"
            aria-label="合作伙伴列表"
          >
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">TripAdvisor</span>
            </div>
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">Lonely Planet</span>
            </div>
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">National Geographic</span>
            </div>
            <div 
              className="w-24 h-12 bg-white/10 rounded flex items-center justify-center"
              role="listitem"
            >
              <span className="text-white/40 text-sm">CNN Travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 