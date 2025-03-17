import { Language } from '../types';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  zh: {
    // 导航栏
    destinations: '目的地',
    stories: '旅行故事',
    guides: '实用指南',
    planner: '行程规划',
    
    // 首页内容
    heroTitle: '探索神奇中国',
    heroSubtitle: '从历史古迹到现代都市，发现令人惊叹的文化与自然之美',
    startPlanning: '开始规划',
    
    // 价值主张
    valueProp1Title: '个性化行程规划',
    valueProp1Desc: '根据您的兴趣和时间，为您量身定制完美旅行计划',
    valueProp2Title: '深度文化体验',
    valueProp2Desc: '深入了解中国丰富的历史文化，体验地道民俗活动',
    valueProp3Title: '智能行程优化',
    valueProp3Desc: '基于大数据分析，推荐最佳游览路线和时间',
    
    // 目的地
    destinationsTitle: '2024春季推荐目的地',
    
    // 旅行故事
    storiesTitle: '旅行者的中国故事',
    readMore: '阅读更多',
    
    // 旅行指南
    guidesTitle: '中国旅行实用指南',
    
    // CTA
    ctaTitle: '开启您的中国之旅',
    ctaSubtitle: '让我们帮您规划一次难忘的旅行体验',
    
    // 页脚
    aboutUs: '关于我们',
    contact: '联系我们',
    privacy: '隐私政策',
    terms: '使用条款'
  },
  en: {
    // Navigation
    destinations: 'Destinations',
    stories: 'Travel Stories',
    guides: 'Travel Guides',
    planner: 'Trip Planner',
    
    // Homepage Content
    heroTitle: 'Explore Amazing China',
    heroSubtitle: 'From historic sites to modern cities, discover the stunning culture and natural beauty',
    startPlanning: 'Start Planning',
    
    // Value Propositions
    valueProp1Title: 'Personalized Planning',
    valueProp1Desc: 'Customize your perfect travel plan based on your interests and time',
    valueProp2Title: 'Cultural Experience',
    valueProp2Desc: 'Immerse yourself in China\'s rich history and authentic local culture',
    valueProp3Title: 'Smart Itinerary',
    valueProp3Desc: 'AI-powered recommendations for optimal routes and timing',
    
    // Destinations
    destinationsTitle: 'Featured Destinations for Spring 2024',
    
    // Travel Stories
    storiesTitle: 'Travelers\' Stories in China',
    readMore: 'Read More',
    
    // Travel Guides
    guidesTitle: 'Essential China Travel Guides',
    
    // CTA
    ctaTitle: 'Start Your China Journey',
    ctaSubtitle: 'Let us help you plan an unforgettable travel experience',
    
    // Footer
    aboutUs: 'About Us',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  }
};

export const getTranslation = (language: Language, key: string): string => {
  return translations[language]?.[key] || translations['en'][key] || key;
}; 