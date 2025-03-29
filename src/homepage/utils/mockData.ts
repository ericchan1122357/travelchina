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

// Why China 数据
export const whyChina = {
  title: 'Why China',
  points: [
    {
      id: 'culture',
      title: '文化瑰宝',
      description: '五千年历史孕育的丰富文化遗产，从古老的长城到精美的兵马俑，从传统京剧到精致园林，中国拥有56个民族的独特文化。'
    },
    {
      id: 'landscapes',
      title: '壮美风景',
      description: '从壮丽的喀斯特地貌到辽阔的青藏高原，从繁华的现代都市到宁静的古镇水乡，中国多元的地理景观让每次旅行都充满惊喜。'
    },
    {
      id: 'cuisine',
      title: '美食天堂',
      description: '八大菜系，无数地方特色，中国的饮食文化丰富多样。无论是北京烤鸭、四川火锅还是粤式点心，总有一种美食能打动您的味蕾。'
    }
  ]
};

// Why Us 数据
export const whyUs = {
  title: 'Why Us',
  points: [
    {
      id: 'personalization',
      title: '个性化行程',
      description: '根据您的兴趣、预算和时间定制专属旅行计划，让每一次旅行都完美契合您的期待，创造属于您的独特体验。'
    },
    {
      id: 'data',
      title: '大数据支持',
      description: '基于7000万旅行者的真实体验和评价，我们的推荐系统能为您筛选出最适合的景点、住宿和美食，确保行程质量。'
    },
    {
      id: 'worry-free',
      title: '无忧体验',
      description: '从语言障碍到文化差异，我们全方位解决旅行中的各种挑战，提供详尽的文化指南和实用贴士，让您的中国之旅轻松无忧。'
    }
  ]
};

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
    imageUrl: '/images/guides/first-time.jpg',
    publishDate: '2024-01-15'
  },
  {
    id: '2',
    title: '中国美食探索指南',
    description: '带您了解中国八大菜系和地方特色美食',
    category: '美食攻略',
    content: '各地特色美食推荐与饮食文化解读...',
    imageUrl: '/images/guides/food.jpg',
    publishDate: '2024-01-20'
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