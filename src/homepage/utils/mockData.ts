import { 
  HeroBannerData, 
  ValueProp, 
  Destination, 
  TravelStory, 
  TravelGuide, 
  CallToActionData 
} from '../types';

// Hero横幅数据
export const heroData: HeroBannerData = {
  title: "探索神奇中国",
  subtitle: "从历史古迹到现代都市，发现令人惊叹的文化与自然之美",
  ctaText: "开始规划",
  backgroundImageUrl: "/images/hero-banner.jpg"
};

// 价值主张数据
export const valueProps: ValueProp[] = [
  {
    id: "1",
    title: "个性化行程规划",
    description: "根据您的兴趣和时间，为您量身定制完美旅行计划",
    iconUrl: "/images/icons/personalized.svg"
  },
  {
    id: "2",
    title: "深度文化体验",
    description: "深入了解中国丰富的历史文化，体验地道民俗活动",
    iconUrl: "/images/icons/culture.svg"
  },
  {
    id: "3",
    title: "智能行程优化",
    description: "基于大数据分析，推荐最佳游览路线和时间",
    iconUrl: "/images/icons/smart.svg"
  }
];

// 精选目的地数据
export const featuredDestinations: Destination[] = [
  {
    id: "1",
    name: "北京",
    description: "探索中国首都的皇家建筑群，感受现代与传统的完美融合",
    imageUrl: "/images/destinations/beijing.jpg",
    season: "春秋",
    featured: true,
    activities: ["长城徒步", "故宫参观", "胡同美食", "颐和园游览"]
  },
  {
    id: "2",
    name: "西安",
    description: "丝绸之路的起点，感受千年古都的历史底蕴",
    imageUrl: "/images/destinations/xian.jpg",
    season: "春秋",
    featured: true,
    activities: ["兵马俑", "古城墙骑行", "回民街美食", "大雁塔"]
  },
  {
    id: "3",
    name: "桂林",
    description: "如画的喀斯特地貌，清澈的漓江，被誉为\"世界上最美丽的山水\"",
    imageUrl: "/images/destinations/guilin.jpg",
    season: "春夏秋",
    featured: true,
    activities: ["漓江游船", "阳朔骑行", "龙脊梯田", "银子岩"]
  }
];

// 旅行故事数据
export const travelStories: TravelStory[] = [
  {
    id: "1",
    title: "徒步长城：走进历史的天际线",
    summary: "一段难忘的长城徒步之旅，探索明长城最美的司马台段",
    content: "这是一段精彩的长城徒步故事...",
    author: {
      name: "Sarah Chen",
      avatar: "/images/avatars/sarah.jpg"
    },
    date: "2024-02-15",
    destination: "北京",
    imageUrl: "/images/stories/great-wall.jpg"
  },
  {
    id: "2",
    title: "寻味成都：舌尖上的川菜之旅",
    summary: "探索成都的街头小巷，品尝最地道的川菜美食",
    content: "这是一段美食探索的故事...",
    author: {
      name: "Mike Zhang",
      avatar: "/images/avatars/mike.jpg"
    },
    date: "2024-02-10",
    destination: "成都",
    imageUrl: "/images/stories/chengdu-food.jpg"
  }
];

// 旅行指南数据
export const travelGuides: TravelGuide[] = [
  {
    id: "1",
    title: "中国签证办理指南",
    summary: "详细介绍各类签证的申请流程和所需材料",
    content: "这是签证办理的详细指南...",
    category: "实用信息",
    imageUrl: "/images/guides/visa.jpg"
  },
  {
    id: "2",
    title: "中国交通攻略",
    summary: "火车、飞机、地铁等各类交通工具的使用指南",
    content: "这是交通出行的详细指南...",
    category: "交通",
    imageUrl: "/images/guides/transportation.jpg"
  },
  {
    id: "3",
    title: "中国文化礼仪",
    summary: "了解中国的基本礼仪和文化禁忌",
    content: "这是文化礼仪的详细指南...",
    category: "文化",
    imageUrl: "/images/guides/culture.jpg"
  }
];

// CTA区域数据
export const ctaData: CallToActionData = {
  title: "开启您的中国之旅",
  subtitle: "让我们帮您规划一次难忘的旅行体验",
  buttonText: "开始规划",
  backgroundImageUrl: "/images/cta-background.jpg",
  stats: [
    { label: "目的地城市", value: "100+" },
    { label: "精品行程", value: "500+" },
    { label: "满意用户", value: "10000+" }
  ]
}; 