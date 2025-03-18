import { HeroBannerData, ValueProp, Destination, TravelStory, TravelGuide, CallToActionData, Stat } from '../types';

// Hero横幅数据
export const heroData: HeroBannerData = {
  backgroundImageUrl: '/images/hero-bg.jpg',
  title: '',  // 由translations提供
  subtitle: '', // 由translations提供
  ctaText: ''  // 由translations提供
};

// 价值主张数据
export const valueProps: ValueProp[] = [
  {
    id: '1',
    iconUrl: '/icons/personalization.svg',
    title: '',  // 由translations提供
    description: ''  // 由translations提供
  },
  {
    id: '2',
    iconUrl: '/icons/culture.svg',
    title: '',  // 由translations提供
    description: ''  // 由translations提供
  },
  {
    id: '3',
    iconUrl: '/icons/smart.svg',
    title: '',  // 由translations提供
    description: ''  // 由translations提供
  }
];

// 精选目的地数据
export const featuredDestinations: Destination[] = [
  {
    id: '1',
    name: '北京',
    imageUrl: '/images/destinations/beijing.jpg',
    description: '探索中国首都的历史文化',
    activities: ['长城', '故宫', '天坛'],
    season: 'spring',
    featured: true
  },
  {
    id: '2',
    name: '上海',
    imageUrl: '/images/destinations/shanghai.jpg',
    description: '体验现代都市的繁华魅力',
    activities: ['外滩', '豫园', '南京路'],
    season: 'autumn',
    featured: true
  },
  {
    id: '3',
    name: '西安',
    imageUrl: '/images/destinations/xian.jpg',
    description: '感受古都的历史底蕴',
    activities: ['兵马俑', '古城墙', '大雁塔'],
    season: 'spring',
    featured: true
  }
];

// 旅行故事数据
export const travelStories: TravelStory[] = [
  {
    id: '1',
    title: '徒步长城的难忘经历',
    description: '一段关于在长城上徒步的精彩故事...',
    content: '这是一段精彩的长城徒步故事的详细内容...',
    imageUrl: '/images/stories/great-wall.jpg',
    author: {
      name: '张三',
      avatar: '/images/avatars/zhangsan.jpg'
    },
    destination: '北京',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: '在西湖边的诗意时光',
    description: '漫步西湖，感受杭州的诗意之美...',
    content: '这是一段关于西湖游览的详细内容...',
    imageUrl: '/images/stories/west-lake.jpg',
    author: {
      name: '李四',
      avatar: '/images/avatars/lisi.jpg'
    },
    destination: '杭州',
    date: '2024-01-10'
  }
];

// 旅行指南数据
export const travelGuides: TravelGuide[] = [
  {
    id: '1',
    title: '初次访华必备指南',
    description: '为首次来华旅行的游客提供全面的基础信息',
    category: '基础攻略',
    content: '关于签证、交通、住宿等基本信息...',
    imageUrl: '/images/guides/first-time.jpg'
  },
  {
    id: '2',
    title: '中国美食探索指南',
    description: '带您了解中国八大菜系和地方特色美食',
    category: '美食攻略',
    content: '各地特色美食推荐与饮食文化解读...',
    imageUrl: '/images/guides/food.jpg'
  }
];

// CTA区域数据
export const ctaData: CallToActionData = {
  backgroundImageUrl: '/images/cta-bg.jpg',
  title: '',  // 由translations提供
  subtitle: '', // 由translations提供
  buttonText: '', // 由translations提供
  stats: [
    { label: 'cities', value: '50+' },
    { label: 'itineraries', value: '200+' },
    { label: 'users', value: '10000+' }
  ]
}; 