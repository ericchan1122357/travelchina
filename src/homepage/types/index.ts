// 语言类型
export type Language = 'en' | 'zh' | 'ja' | 'ko';

// 目的地数据类型
export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  season: string;
  featured: boolean;
  activities: string[];
  tags?: string[];  // 可选的标签数组
  url?: string;     // 可选的URL
}

// 旅行故事数据类型
export interface TravelStory {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: Author;
  date: string;
  destination: string;
  imageUrl: string;
}

// 旅行指南数据类型
export interface TravelGuide {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  imageUrl: string;
}

// 价值主张数据类型
export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}

// Hero区域数据类型
export interface HeroBannerData {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImageUrl: string;
}

// 作者类型
export interface Author {
  name: string;
  avatar: string;
}

// 统计数据类型
export interface Stat {
  label: string;
  value: string;
}

// 二次转化区域数据类型
export interface CallToActionData {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImageUrl: string;
  stats: Stat[];
} 