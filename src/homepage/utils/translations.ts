import { Language } from '../types';

// 获取当前季节的标题
export const getCurrentSeasonTitle = (language: Language): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0-11 转换为 1-12
  
  let season: 'spring' | 'summer' | 'autumn' | 'winter';
  
  if (month >= 3 && month <= 5) {
    season = 'spring';
  } else if (month >= 6 && month <= 8) {
    season = 'summer';
  } else if (month >= 9 && month <= 11) {
    season = 'autumn';
  } else {
    season = 'winter';
  }
  
  const seasonKey = `season.${season}` as keyof TranslationValue;
  const seasonText = translations[language][seasonKey];
  
  // 根据语言返回不同格式
  switch (language) {
    case 'zh':
      return `${year}年${seasonText}推荐目的地`;
    case 'ja':
      return `${year}年${seasonText}のおすすめ目的地`;
    case 'ko':
      return `${year}년 ${seasonText} 추천 목적지`;
    default:
      return `Featured Destinations for ${seasonText} ${year}`;
  }
};

interface CtaStats {
  cities: string;
  itineraries: string;
  users: string;
}

export interface TranslationValue {
  destinations: string;
  stories: string;
  guides: string;
  planner: string;
  viewAllDestinations: string;
  'season.spring': string;
  'season.summer': string;
  'season.autumn': string;
  'season.winter': string;
  heroTitle: string;
  heroSubtitle: string;
  startPlanning: string;
  valueProp1Title: string;
  valueProp1Desc: string;
  valueProp2Title: string;
  valueProp2Desc: string;
  valueProp3Title: string;
  valueProp3Desc: string;
  destinationsTitle: string;
  destinationDescription: string;
  destinationActivities: string;
  destinationSeason: string;
  storiesTitle: string;
  readMore: string;
  storyAuthor: string;
  storyDestination: string;
  storyDate: string;
  guidesTitle: string;
  guideCategory: string;
  guideContent: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaStats: CtaStats;
  footerAbout: string;
  footerContact: string;
  footerPrivacy: string;
  footerTerms: string;
  footerDescription: string;
  skipToContent: string;
  scrollLeft: string;
  scrollRight: string;
  'destination.1.name': string;
  'destination.1.description': string;
  'destination.1.activities.hiking': string;
  'destination.1.activities.culture': string;
  'destination.1.activities.food': string;
  'destination.2.name': string;
  'destination.2.description': string;
  'destination.2.activities.hiking': string;
  'destination.2.activities.culture': string;
  'destination.2.activities.food': string;
  'destination.3.name': string;
  'destination.3.description': string;
  'destination.3.activities.hiking': string;
  'destination.3.activities.culture': string;
  'destination.3.activities.food': string;
  'story.1.title': string;
  'story.1.description': string;
  'story.1.destination': string;
  'story.2.title': string;
  'story.2.description': string;
  'story.2.destination': string;
  'story.3.title': string;
  'story.3.description': string;
  'story.3.destination': string;
  'guide.1.title': string;
  'guide.1.description': string;
  'guide.1.category': string;
  'guide.2.title': string;
  'guide.2.description': string;
  'guide.2.category': string;
  'planner.title': string;
  'planner.subtitle': string;
  'planner.progress': string;
  'planner.comingSoon': string;
  'planner.back': string;
  'planner.next': string;
  'planner.submit': string;
  'planner.basicInfo.travelDates': string;
  'planner.basicInfo.startDate': string;
  'planner.basicInfo.endDate': string;
  'planner.basicInfo.travelType': string;
  'planner.basicInfo.travelTypes.solo': string;
  'planner.basicInfo.travelTypes.couple': string;
  'planner.basicInfo.travelTypes.family': string;
  'planner.basicInfo.travelTypes.friends': string;
  'planner.basicInfo.budget': string;
  'planner.step': string;
  'planner.nextStep': string;
  'planner.error': string;
  'planner.loading': string;
  'planner.special.accessibility.title': string;
  'planner.special.accessibility.wheelchair': string;
  'planner.special.accessibility.elevator': string;
  'planner.special.accessibility.groundFloor': string;
  'planner.special.medical.title': string;
  'planner.special.medical.firstAid': string;
  'planner.special.medical.hospitalNearby': string;
  'planner.special.medical.medicineStorage': string;
  'planner.special.dietary.title': string;
  'planner.special.dietary.halal': string;
  'planner.special.dietary.kosher': string;
  'planner.special.dietary.allergies': string;
  'planner.special.dietary.allergy.peanuts': string;
  'planner.special.dietary.allergy.seafood': string;
  'planner.special.dietary.allergy.dairy': string;
  'planner.special.dietary.allergy.eggs': string;
  'planner.special.dietary.allergy.gluten': string;
  'planner.special.dietary.allergy.soy': string;
  'planner.special.other.title': string;
  'planner.special.other.placeholder': string;
  'planner.finish': string;
  'planner.error.general': string;
  'planner.step1': string;
  'planner.step2': string;
  'planner.step3': string;
  'planner.step4': string;
  'planner.plan.duration': string;
  'planner.plan.days': string;
  'planner.plan.budget': string;
  'planner.plan.day': string;
  'planner.plan.accommodation': string;
  'planner.plan.activities': string;
  'planner.plan.hours': string;
  'planner.plan.meals': string;
  'planner.plan.breakfast': string;
  'planner.plan.lunch': string;
  'planner.plan.dinner': string;
  'planner.plan.specialNotes': string;
  'planner.destinations.recommendedRoutes': string;
  'planner.destinations.route1': string;
  'planner.destinations.route2': string;
  'planner.destinations.route3': string;
  'planner.destinations.route1.description': string;
  'planner.destinations.route2.description': string;
  'planner.destinations.route3.description': string;
}

interface Translations {
  [key: string]: TranslationValue;
}

export const translations: Record<Language, TranslationValue> = {
  zh: {
    // 导航栏
    destinations: '目的地',
    stories: '旅行故事',
    guides: '旅行指南',
    planner: '行程规划',
    viewAllDestinations: '查看全部目的地',
    
    // 季节
    'season.spring': '春季',
    'season.summer': '夏季',
    'season.autumn': '秋季',
    'season.winter': '冬季',
    
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
    destinationsTitle: '2026年夏季推荐目的地',
    destinationDescription: '探索中国最迷人的目的地，体验独特的文化与自然之美',
    destinationActivities: '特色活动',
    destinationSeason: '最佳季节',
    
    // 旅行故事
    storiesTitle: '旅行者的中国故事',
    readMore: '阅读更多',
    storyAuthor: '作者',
    storyDestination: '目的地',
    storyDate: '发布日期',
    
    // 旅行指南
    guidesTitle: '中国旅行实用指南',
    guideCategory: '分类',
    guideContent: '内容',
    
    // CTA
    ctaTitle: '开启您的中国之旅',
    ctaSubtitle: '让我们帮您规划一次难忘的旅行体验',
    ctaButton: '开始规划',
    ctaStats: {
      cities: '目的地城市',
      itineraries: '精品行程',
      users: '满意用户'
    },
    
    // 底部导航
    footerAbout: '关于我们',
    footerContact: '联系我们',
    footerPrivacy: '隐私政策',
    footerTerms: '服务条款',
    footerDescription: '探索中国，发现无限可能。我们致力于为您提供最优质的旅行体验。',
    skipToContent: '跳转到主要内容',
    scrollLeft: '向左滚动',
    scrollRight: '向右滚动',
    'destination.1.name': '北京',
    'destination.1.description': '中国首都，历史文化名城',
    'destination.1.activities.hiking': '长城徒步',
    'destination.1.activities.culture': '故宫文化',
    'destination.1.activities.food': '北京烤鸭',
    'destination.2.name': '上海',
    'destination.2.description': '现代化国际大都市',
    'destination.2.activities.hiking': '外滩漫步',
    'destination.2.activities.culture': '豫园文化',
    'destination.2.activities.food': '小笼包',
    'destination.3.name': '西安',
    'destination.3.description': '古都文化之城',
    'destination.3.activities.hiking': '城墙骑行',
    'destination.3.activities.culture': '兵马俑',
    'destination.3.activities.food': '肉夹馍',
    'story.1.title': '探索长城：一段难忘的徒步之旅',
    'story.1.description': '跟随我们的脚步，一起探索世界七大奇迹之一的长城，感受历史的震撼与自然的壮美。',
    'story.1.destination': '北京',
    'story.2.title': '江南水乡：乌镇古镇之旅',
    'story.2.description': '漫步在乌镇的小桥流水间，体验江南水乡的独特魅力，感受千年古镇的历史韵味。',
    'story.2.destination': '浙江',
    'story.3.title': '丝绸之路：敦煌莫高窟探秘',
    'story.3.description': '走进莫高窟，感受佛教艺术的瑰宝，探索丝绸之路上的文化交融。',
    'story.3.destination': '甘肃',
    'guide.1.title': '北京故宫',
    'guide.1.description': '中国明清两代的皇宫',
    'guide.1.category': '历史遗迹',
    'guide.2.title': '上海豫园',
    'guide.2.description': '中国古典园林之杰作',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI智能旅行规划',
    'planner.subtitle': '根据您的偏好，为您量身定制完美的中国之旅',
    'planner.progress': '完成进度',
    'planner.comingSoon': '问卷内容即将推出...',
    'planner.back': '上一步',
    'planner.next': '下一步',
    'planner.submit': '提交',
    'planner.basicInfo.travelDates': '旅行时间',
    'planner.basicInfo.startDate': '开始日期',
    'planner.basicInfo.endDate': '结束日期',
    'planner.basicInfo.travelType': '旅行类型',
    'planner.basicInfo.travelTypes.solo': '独自旅行',
    'planner.basicInfo.travelTypes.couple': '情侣旅行',
    'planner.basicInfo.travelTypes.family': '家庭旅行',
    'planner.basicInfo.travelTypes.friends': '朋友旅行',
    'planner.basicInfo.budget': '预算范围',
    'planner.step': '第 {{current}}/{{total}} 步',
    'planner.nextStep': '更多精彩内容即将推出...',
    'planner.error': '发生错误，请稍后重试',
    'planner.loading': '加载中...',
    'planner.special.accessibility.title': '无障碍设施',
    'planner.special.accessibility.wheelchair': '轮椅',
    'planner.special.accessibility.elevator': '电梯',
    'planner.special.accessibility.groundFloor': '地面层',
    'planner.special.medical.title': '医疗需求',
    'planner.special.medical.firstAid': '急救',
    'planner.special.medical.hospitalNearby': '附近医院',
    'planner.special.medical.medicineStorage': '药品存储',
    'planner.special.dietary.title': '饮食限制',
    'planner.special.dietary.halal': '清真',
    'planner.special.dietary.kosher': '犹太',
    'planner.special.dietary.allergies': '过敏',
    'planner.special.dietary.allergy.peanuts': '花生',
    'planner.special.dietary.allergy.seafood': '海鲜',
    'planner.special.dietary.allergy.dairy': '乳制品',
    'planner.special.dietary.allergy.eggs': '鸡蛋',
    'planner.special.dietary.allergy.gluten': '麸质',
    'planner.special.dietary.allergy.soy': '大豆',
    'planner.special.other.title': '其他需求',
    'planner.special.other.placeholder': '请输入其他需求',
    'planner.finish': '完成',
    'planner.error.general': '发生错误，请稍后重试',
    'planner.step1': '基本信息',
    'planner.step2': '目的地偏好',
    'planner.step3': '兴趣偏好',
    'planner.step4': '特殊需求',
    'planner.plan.duration': '行程天数',
    'planner.plan.days': '天',
    'planner.plan.budget': '预算',
    'planner.plan.day': '第',
    'planner.plan.accommodation': '住宿',
    'planner.plan.activities': '活动安排',
    'planner.plan.hours': '小时',
    'planner.plan.meals': '餐饮安排',
    'planner.plan.breakfast': '早餐',
    'planner.plan.lunch': '午餐',
    'planner.plan.dinner': '晚餐',
    'planner.plan.specialNotes': '特别注意事项',
    'planner.destinations.recommendedRoutes': '推荐路线',
    'planner.destinations.route1': '经典江南水乡',
    'planner.destinations.route2': '丝绸之路探索',
    'planner.destinations.route3': '长城文化之旅',
    'planner.destinations.route1.description': '游览苏州、杭州等江南水乡，体验传统园林文化',
    'planner.destinations.route2.description': '探索西安、敦煌等古丝绸之路重镇，感受东西方文化交融',
    'planner.destinations.route3.description': '游览北京、八达岭等长城景点，了解中国历史文化'
  },
  en: {
    // Navigation
    destinations: 'Destinations',
    stories: 'Travel Stories',
    guides: 'Travel Guides',
    planner: 'Trip Planner',
    viewAllDestinations: 'View All Destinations',
    
    // Seasons
    'season.spring': 'Spring',
    'season.summer': 'Summer',
    'season.autumn': 'Autumn',
    'season.winter': 'Winter',
    
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
    destinationsTitle: 'Featured Destinations for Summer 2026',
    destinationDescription: 'Explore China\'s most fascinating destinations and experience unique culture and natural beauty',
    destinationActivities: 'Featured Activities',
    destinationSeason: 'Best Season',
    
    // Travel Stories
    storiesTitle: 'Travelers\' Stories in China',
    readMore: 'Read More',
    storyAuthor: 'Author',
    storyDestination: 'Destination',
    storyDate: 'Published Date',
    
    // Travel Guides
    guidesTitle: 'Essential China Travel Guides',
    guideCategory: 'Category',
    guideContent: 'Content',
    
    // CTA
    ctaTitle: 'Start Your China Journey',
    ctaSubtitle: 'Let us help you plan an unforgettable travel experience',
    ctaButton: 'Start Planning',
    ctaStats: {
      cities: 'Destination Cities',
      itineraries: 'Premium Itineraries',
      users: 'Satisfied Users'
    },
    
    // Footer
    footerAbout: 'About Us',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    footerDescription: 'Explore China, discover endless possibilities. We are committed to providing you with the best travel experience.',
    skipToContent: 'Skip to main content',
    scrollLeft: 'Scroll left',
    scrollRight: 'Scroll right',
    'destination.1.name': 'Beijing',
    'destination.1.description': 'Capital of China, historical and cultural city',
    'destination.1.activities.hiking': 'Great Wall Hiking',
    'destination.1.activities.culture': 'Forbidden City Culture',
    'destination.1.activities.food': 'Peking Duck',
    'destination.2.name': 'Shanghai',
    'destination.2.description': 'Modern international metropolis',
    'destination.2.activities.hiking': 'Bund Walking',
    'destination.2.activities.culture': 'Yu Garden Culture',
    'destination.2.activities.food': 'Xiaolongbao',
    'destination.3.name': 'Xi\'an',
    'destination.3.description': 'Ancient capital cultural city',
    'destination.3.activities.hiking': 'City Wall Cycling',
    'destination.3.activities.culture': 'Terracotta Warriors',
    'destination.3.activities.food': 'Roujiamo',
    'story.1.title': 'Exploring the Great Wall: An Unforgettable Hiking Journey',
    'story.1.description': 'Follow our footsteps as we explore one of the Seven Wonders of the World, experiencing the awe of history and natural beauty.',
    'story.1.destination': 'Beijing',
    'story.2.title': 'Water Towns of Jiangnan: A Journey to Wuzhen',
    'story.2.description': 'Stroll through Wuzhen\'s bridges and waterways, experiencing the unique charm of Jiangnan water towns and the historical atmosphere of this ancient town.',
    'story.2.destination': 'Zhejiang',
    'story.3.title': 'Silk Road: Exploring the Mogao Caves',
    'story.3.description': 'Step into the Mogao Caves to experience the treasures of Buddhist art and explore the cultural fusion along the Silk Road.',
    'story.3.destination': 'Gansu',
    'guide.1.title': 'The Great Wall',
    'guide.1.description': 'One of the Seven Wonders of the World',
    'guide.1.category': 'Historical Site',
    'guide.2.title': 'The Summer Palace',
    'guide.2.description': 'A masterpiece of classical Chinese garden design',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI Travel Planner',
    'planner.subtitle': 'Get your personalized China travel plan based on your preferences',
    'planner.progress': 'Progress',
    'planner.comingSoon': 'Questionnaire coming soon...',
    'planner.back': 'Back',
    'planner.next': 'Next',
    'planner.submit': 'Submit',
    'planner.basicInfo.travelDates': 'Travel Dates',
    'planner.basicInfo.startDate': 'Start Date',
    'planner.basicInfo.endDate': 'End Date',
    'planner.basicInfo.travelType': 'Travel Type',
    'planner.basicInfo.travelTypes.solo': 'Solo Travel',
    'planner.basicInfo.travelTypes.couple': 'Couple Travel',
    'planner.basicInfo.travelTypes.family': 'Family Travel',
    'planner.basicInfo.travelTypes.friends': 'Friends Travel',
    'planner.basicInfo.budget': 'Budget Range',
    'planner.step': 'Step {{current}}/{{total}}',
    'planner.nextStep': 'More exciting content coming soon...',
    'planner.error': 'An error occurred, please try again later',
    'planner.loading': 'Loading...',
    'planner.special.accessibility.title': 'Accessibility',
    'planner.special.accessibility.wheelchair': 'Wheelchair',
    'planner.special.accessibility.elevator': 'Elevator',
    'planner.special.accessibility.groundFloor': 'Ground Floor',
    'planner.special.medical.title': 'Medical Needs',
    'planner.special.medical.firstAid': 'First Aid',
    'planner.special.medical.hospitalNearby': 'Nearby Hospital',
    'planner.special.medical.medicineStorage': 'Medicine Storage',
    'planner.special.dietary.title': 'Dietary Restrictions',
    'planner.special.dietary.halal': 'Halal',
    'planner.special.dietary.kosher': 'Kosher',
    'planner.special.dietary.allergies': 'Allergies',
    'planner.special.dietary.allergy.peanuts': 'Peanuts',
    'planner.special.dietary.allergy.seafood': 'Seafood',
    'planner.special.dietary.allergy.dairy': 'Dairy',
    'planner.special.dietary.allergy.eggs': 'Eggs',
    'planner.special.dietary.allergy.gluten': 'Gluten',
    'planner.special.dietary.allergy.soy': 'Soy',
    'planner.special.other.title': 'Other Needs',
    'planner.special.other.placeholder': 'Please enter other needs',
    'planner.finish': 'Finish',
    'planner.error.general': 'An error occurred, please try again later',
    'planner.step1': 'Basic Information',
    'planner.step2': 'Destination Preference',
    'planner.step3': 'Interest Preference',
    'planner.step4': 'Special Requirements',
    'planner.plan.duration': 'Duration',
    'planner.plan.days': 'days',
    'planner.plan.budget': 'Budget',
    'planner.plan.day': 'Day',
    'planner.plan.accommodation': 'Accommodation',
    'planner.plan.activities': 'Activities',
    'planner.plan.hours': 'hours',
    'planner.plan.meals': 'Meals',
    'planner.plan.breakfast': 'Breakfast',
    'planner.plan.lunch': 'Lunch',
    'planner.plan.dinner': 'Dinner',
    'planner.plan.specialNotes': 'Special Notes',
    'planner.destinations.recommendedRoutes': 'Recommended Routes',
    'planner.destinations.route1': 'Classic Jiangnan Watertown',
    'planner.destinations.route2': 'Silk Road Exploration',
    'planner.destinations.route3': 'Great Wall Cultural Tour',
    'planner.destinations.route1.description': 'Visit Suzhou, Hangzhou and other water towns, experience traditional garden culture',
    'planner.destinations.route2.description': 'Explore Xi\'an, Dunhuang and other ancient Silk Road cities, feel the fusion of Eastern and Western cultures',
    'planner.destinations.route3.description': 'Visit Beijing, Badaling and other Great Wall sites, learn about Chinese history and culture'
  },
  ja: {
    // ナビゲーション
    destinations: '目的地',
    stories: '旅行記',
    guides: '旅行ガイド',
    planner: '旅行プランナー',
    viewAllDestinations: 'すべての目的地を見る',
    
    // 季節
    'season.spring': '春',
    'season.summer': '夏',
    'season.autumn': '秋',
    'season.winter': '冬',
    
    // 首页内容
    heroTitle: '素晴らしい中国を探索',
    heroSubtitle: '歴史的遺跡から現代都市まで、魅力的な文化と自然の美しさを発見',
    startPlanning: 'プランニング開始',
    
    // 価値提案
    valueProp1Title: 'パーソナライズされたプランニング',
    valueProp1Desc: 'あなたの興味と時間に基づいて完璧な旅行プランをカスタマイズ',
    valueProp2Title: '文化的体験',
    valueProp2Desc: '中国の豊かな歴史と本物の現地文化に没入',
    valueProp3Title: 'スマートな旅程',
    valueProp3Desc: 'AIによる最適なルートとタイミングの推奨',
    
    // 目的地
    destinationsTitle: '2026年夏のおすすめ目的地',
    destinationDescription: '中国の最も魅力的な目的地を探索し、ユニークな文化と自然の美しさを体験',
    destinationActivities: 'おすすめアクティビティ',
    destinationSeason: 'ベストシーズン',
    
    // 旅行記
    storiesTitle: '中国での旅行者ストーリー',
    readMore: '続きを読む',
    storyAuthor: '著者',
    storyDestination: '目的地',
    storyDate: '公開日',
    
    // 旅行ガイド
    guidesTitle: '中国旅行必携ガイド',
    guideCategory: 'カテゴリー',
    guideContent: '内容',
    
    // CTA
    ctaTitle: '中国旅行を始めましょう',
    ctaSubtitle: '忘れられない旅行体験を一緒に計画しましょう',
    ctaButton: 'プランニング開始',
    ctaStats: {
      cities: '目的地都市',
      itineraries: 'プレミアムプラン',
      users: '満足ユーザー'
    },
    
    // フッター
    footerAbout: '会社概要',
    footerContact: 'お問い合わせ',
    footerPrivacy: 'プライバシーポリシー',
    footerTerms: '利用規約',
    footerDescription: '中国を探索し、無限の可能性を発見してください。最高の旅行体験を提供することをお約束します。',
    skipToContent: '跳转到主要内容',
    scrollLeft: '左にスクロール',
    scrollRight: '右にスクロール',
    'destination.1.name': '北京',
    'destination.1.description': '中国の首都、歴史文化都市',
    'destination.1.activities.hiking': '万里の長城ハイキング',
    'destination.1.activities.culture': '紫禁城文化',
    'destination.1.activities.food': '北京ダック',
    'destination.2.name': '上海',
    'destination.2.description': '近代的な国際大都市',
    'destination.2.activities.hiking': 'バンド散歩',
    'destination.2.activities.culture': '豫園文化',
    'destination.2.activities.food': '小籠包',
    'destination.3.name': '西安',
    'destination.3.description': '古都文化都市',
    'destination.3.activities.hiking': '城壁サイクリング',
    'destination.3.activities.culture': '兵馬俑',
    'destination.3.activities.food': '肉夾饃',
    'story.1.title': '万里の長城を探索：忘れられないハイキングの旅',
    'story.1.description': '世界七不思議の一つである万里の長城を探索し、歴史の感動と自然の美しさを体験しましょう。',
    'story.1.destination': '北京',
    'story.2.title': '江南水郷：烏鎮古鎮の旅',
    'story.2.description': '烏鎮の小橋と水路を散策し、江南水郷の独特な魅力と千年の古鎮の歴史的雰囲気を感じましょう。',
    'story.2.destination': '浙江省',
    'story.3.title': 'シルクロード：敦煌莫高窟の探検',
    'story.3.description': '莫高窟に入り、仏教芸術の宝庫を体験し、シルクロード沿いの文化融合を探索しましょう。',
    'story.3.destination': '甘粛省',
    'guide.1.title': '北京故宫',
    'guide.1.description': '中国明清两代的皇宫',
    'guide.1.category': '历史遗迹',
    'guide.2.title': '上海豫园',
    'guide.2.description': '中国古典园林之杰作',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI旅行プランナー',
    'planner.subtitle': 'あなたの好みに基づいて、パーソナライズされた中国旅行プランを作成',
    'planner.progress': '進捗状況',
    'planner.comingSoon': 'アンケートは近日公開...',
    'planner.back': '戻る',
    'planner.next': '次へ',
    'planner.submit': '送信',
    'planner.basicInfo.travelDates': '旅行期間',
    'planner.basicInfo.startDate': '開始日',
    'planner.basicInfo.endDate': '終了日',
    'planner.basicInfo.travelType': '旅行タイプ',
    'planner.basicInfo.travelTypes.solo': '一人旅',
    'planner.basicInfo.travelTypes.couple': 'カップル旅行',
    'planner.basicInfo.travelTypes.family': '家族旅行',
    'planner.basicInfo.travelTypes.friends': '友達旅行',
    'planner.basicInfo.budget': '予算範囲',
    'planner.step': 'ステップ {{current}}/{{total}}',
    'planner.nextStep': 'より多くのエキサイティングなコンテンツが近日公開...',
    'planner.error': 'エラーが発生しました。後でもう一度お試しください',
    'planner.loading': '読み込み中...',
    'planner.special.accessibility.title': 'アクセシビリティ',
    'planner.special.accessibility.wheelchair': '車椅子',
    'planner.special.accessibility.elevator': 'エレベーター',
    'planner.special.accessibility.groundFloor': '地面',
    'planner.special.medical.title': '医療要件',
    'planner.special.medical.firstAid': '救急',
    'planner.special.medical.hospitalNearby': '近くの病院',
    'planner.special.medical.medicineStorage': '薬品保管',
    'planner.special.dietary.title': '飲食制限',
    'planner.special.dietary.halal': 'ハラル',
    'planner.special.dietary.kosher': 'コッホ',
    'planner.special.dietary.allergies': 'アレルゲ',
    'planner.special.dietary.allergy.peanuts': '落花生',
    'planner.special.dietary.allergy.seafood': '海鮮',
    'planner.special.dietary.allergy.dairy': '乳製品',
    'planner.special.dietary.allergy.eggs': '卵',
    'planner.special.dietary.allergy.gluten': 'グルテン',
    'planner.special.dietary.allergy.soy': '大豆',
    'planner.special.other.title': 'その他の要件',
    'planner.special.other.placeholder': 'その他の要件を入力してください',
    'planner.finish': '完了',
    'planner.error.general': 'エラーが発生しました。後でもう一度お試しください',
    'planner.step1': '基本情報',
    'planner.step2': '目的地の選択',
    'planner.step3': '興味・関心',
    'planner.step4': '特別な要件',
    'planner.plan.duration': '期間',
    'planner.plan.days': '日間',
    'planner.plan.budget': '予算',
    'planner.plan.day': '日目',
    'planner.plan.accommodation': '宿泊',
    'planner.plan.activities': 'アクティビティ',
    'planner.plan.hours': '時間',
    'planner.plan.meals': '食事',
    'planner.plan.breakfast': '朝食',
    'planner.plan.lunch': '昼食',
    'planner.plan.dinner': '夕食',
    'planner.plan.specialNotes': '特別注意事項',
    'planner.destinations.recommendedRoutes': 'おすすめルート',
    'planner.destinations.route1': '江南水郷クラシック',
    'planner.destinations.route2': 'シルクロード探検',
    'planner.destinations.route3': '万里の長城文化ツアー',
    'planner.destinations.route1.description': '蘇州、杭州などの水郷を訪れ、伝統的な庭園文化を体験',
    'planner.destinations.route2.description': '西安、敦煌など古代シルクロードの都市を探検し、東西文化の融合を感じる',
    'planner.destinations.route3.description': '北京、八達嶺など長城の名所を訪れ、中国の歴史文化を学ぶ'
  },
  ko: {
    // 네비게이션
    destinations: '목적지',
    stories: '여행 이야기',
    guides: '여행 가이드',
    planner: '여행 플래너',
    viewAllDestinations: '모든 목적지 보기',
    
    // 계절
    'season.spring': '봄',
    'season.summer': '여름',
    'season.autumn': '가을',
    'season.winter': '겨울',
    
    // 首页内容
    heroTitle: '놀라운 중국 탐험',
    heroSubtitle: '역사적 유적지부터 현대 도시까지, 매혹적인 문화와 자연의 아름다움을 발견하세요',
    startPlanning: '계획 시작하기',
    
    // 가치 제안
    valueProp1Title: '맞춤형 계획',
    valueProp1Desc: '귀하의 관심사와 시간에 맞춘 완벽한 여행 계획',
    valueProp2Title: '문화 체험',
    valueProp2Desc: '중국의 풍부한 역사와 진정한 현지 문화 체험',
    valueProp3Title: '스마트 일정',
    valueProp3Desc: 'AI 기반 최적 경로 및 타이밍 추천',
    
    // 목적지
    destinationsTitle: '2026년 여름 추천 목적지',
    destinationDescription: '중국의 가장 매력적인 목적지를 탐험하고 독특한 문화와 자연의 아름다움을 경험하세요',
    destinationActivities: '추천 활동',
    destinationSeason: '최적 계절',
    
    // 여행 이야기
    storiesTitle: '중국 여행자 이야기',
    readMore: '더 읽기',
    storyAuthor: '작성자',
    storyDestination: '목적지',
    storyDate: '게시일',
    
    // 여행 가이드
    guidesTitle: '중국 여행 필수 가이드',
    guideCategory: '카테고리',
    guideContent: '내용',
    
    // CTA
    ctaTitle: '중국 여행을 시작하세요',
    ctaSubtitle: '잊지 못할 여행 경험을 함께 계획하세요',
    ctaButton: '계획 시작하기',
    ctaStats: {
      cities: '목적지 도시',
      itineraries: '프리미엄 여행',
      users: '만족한 사용자'
    },
    
    // 푸터
    footerAbout: '회사 소개',
    footerContact: '문의하기',
    footerPrivacy: '개인정보 처리방침',
    footerTerms: '이용약관',
    footerDescription: '중국의 매력을 발견하고 무한한 가능성을 경험하세요. 최고의 여행 경험을 제공하기 위해 노력하고 있습니다.',
    skipToContent: '跳转到主要内容',
    scrollLeft: '왼쪽으로 스크롤',
    scrollRight: '오른쪽으로 스크롤',
    'destination.1.name': '베이징',
    'destination.1.description': '중국의 수도, 역사문화 도시',
    'destination.1.activities.hiking': '만리장성 하이킹',
    'destination.1.activities.culture': '자금성 문화',
    'destination.1.activities.food': '베이징 오리',
    'destination.2.name': '상하이',
    'destination.2.description': '현대적인 국제 대도시',
    'destination.2.activities.hiking': '번드 산책',
    'destination.2.activities.culture': '위원 문화',
    'destination.2.activities.food': '샤오롱바오',
    'destination.3.name': '시안',
    'destination.3.description': '고도 문화 도시',
    'destination.3.activities.hiking': '성벽 자전거',
    'destination.3.activities.culture': '병마용',
    'destination.3.activities.food': '로우자모',
    'story.1.title': '만리장성 탐험: 잊을 수 없는 하이킹 여정',
    'story.1.description': '세계 7대 불가사의 중 하나인 만리장성을 탐험하며 역사의 감동과 자연의 아름다움을 경험해보세요.',
    'story.1.destination': '베이징',
    'story.2.title': '강남 수향: 오진 고진 여행',
    'story.2.description': '오진의 다리와 수로를 거닐며 강남 수향의 독특한 매력과 천년 고진의 역사적 분위기를 느껴보세요.',
    'story.2.destination': '저장성',
    'story.3.title': '실크로드: 돈황 모고굴 탐험',
    'story.3.description': '모고굴에 들어가 불교 예술의 보물을 경험하고 실크로드를 따라 문화 융합을 탐험해보세요.',
    'story.3.destination': '간쑤성',
    'guide.1.title': 'The Great Wall',
    'guide.1.description': 'One of the Seven Wonders of the World',
    'guide.1.category': 'Historical Site',
    'guide.2.title': 'The Summer Palace',
    'guide.2.description': 'A masterpiece of classical Chinese garden design',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI 여행 플래너',
    'planner.subtitle': '귀하의 선호도에 따라 맞춤형 중국 여행 계획을 받아보세요',
    'planner.progress': '진행 상황',
    'planner.comingSoon': '설문이 곧 시작됩니다...',
    'planner.back': '이전',
    'planner.next': '다음',
    'planner.submit': '제출',
    'planner.basicInfo.travelDates': '여행 기간',
    'planner.basicInfo.startDate': '시작일',
    'planner.basicInfo.endDate': '종료일',
    'planner.basicInfo.travelType': '여행 유형',
    'planner.basicInfo.travelTypes.solo': '솔로 여행',
    'planner.basicInfo.travelTypes.couple': '커플 여행',
    'planner.basicInfo.travelTypes.family': '가족 여행',
    'planner.basicInfo.travelTypes.friends': '친구 여행',
    'planner.basicInfo.budget': '예산 범위',
    'planner.step': '단계 {{current}}/{{total}}',
    'planner.nextStep': '더 많은 흥미로운 콘텐츠가 곧 출시됩니다...',
    'planner.error': '오류가 발생했습니다. 나중에 다시 시도해주세요',
    'planner.loading': '로딩 중...',
    'planner.special.accessibility.title': '접근성',
    'planner.special.accessibility.wheelchair': '휠체어',
    'planner.special.accessibility.elevator': '엘레베이터',
    'planner.special.accessibility.groundFloor': '지상 층',
    'planner.special.medical.title': '의료 요건',
    'planner.special.medical.firstAid': '응급 처치',
    'planner.special.medical.hospitalNearby': '주변 병원',
    'planner.special.medical.medicineStorage': '약품 보관',
    'planner.special.dietary.title': '식이요법 제한',
    'planner.special.dietary.halal': '하라드',
    'planner.special.dietary.kosher': '코헤',
    'planner.special.dietary.allergies': '알러지',
    'planner.special.dietary.allergy.peanuts': '땅콩',
    'planner.special.dietary.allergy.seafood': '해산물',
    'planner.special.dietary.allergy.dairy': '유제품',
    'planner.special.dietary.allergy.eggs': '난류',
    'planner.special.dietary.allergy.gluten': '글루텐',
    'planner.special.dietary.allergy.soy': '대두',
    'planner.special.other.title': '기타 요구사항',
    'planner.special.other.placeholder': '기타 요구사항을 입력해주세요',
    'planner.finish': '완료',
    'planner.error.general': '오류가 발생했습니다. 나중에 다시 시도해주세요',
    'planner.step1': '기본 정보',
    'planner.step2': '목적지 선호도',
    'planner.step3': '관심사',
    'planner.step4': '특별 요구사항',
    'planner.plan.duration': '기간',
    'planner.plan.days': '일',
    'planner.plan.budget': '예산',
    'planner.plan.day': '일차',
    'planner.plan.accommodation': '숙박',
    'planner.plan.activities': '활동',
    'planner.plan.hours': '시간',
    'planner.plan.meals': '식사',
    'planner.plan.breakfast': '아침',
    'planner.plan.lunch': '점심',
    'planner.plan.dinner': '저녁',
    'planner.plan.specialNotes': '특별 주의사항',
    'planner.destinations.recommendedRoutes': '추천 코스',
    'planner.destinations.route1': '전통 강남 수향',
    'planner.destinations.route2': '실크로드 탐험',
    'planner.destinations.route3': '만리장성 문화 여행',
    'planner.destinations.route1.description': '쑤저우, 항저우 등 강남 수향을 방문하여 전통 정원 문화 체험',
    'planner.destinations.route2.description': '시안, 둔황 등 고대 실크로드 도시를 탐험하고 동서양 문화의 융합 체험',
    'planner.destinations.route3.description': '베이징, 바달링 등 장성 명소를 방문하여 중국 역사 문화 이해'
  },
  fr: {
    // Navigation
    destinations: 'Destinations',
    stories: 'Récits de Voyage',
    guides: 'Guides de Voyage',
    planner: 'Planificateur de Voyage',
    viewAllDestinations: 'Voir Toutes les Destinations',
    
    // Saisons
    'season.spring': 'Printemps',
    'season.summer': 'Été',
    'season.autumn': 'Automne',
    'season.winter': 'Hiver',
    
    // Homepage Content
    heroTitle: 'Explorez la Chine Merveilleuse',
    heroSubtitle: 'Des sites historiques aux villes modernes, découvrez une culture et une beauté naturelle étonnantes',
    startPlanning: 'Commencer à Planifier',
    
    // Propositions de Valeur
    valueProp1Title: 'Planification Personnalisée',
    valueProp1Desc: 'Personnalisez votre voyage parfait selon vos intérêts et votre temps',
    valueProp2Title: 'Expérience Culturelle',
    valueProp2Desc: 'Immergez-vous dans la riche histoire et la culture authentique de la Chine',
    valueProp3Title: 'Itinéraire Intelligent',
    valueProp3Desc: 'Recommandations basées sur l\'IA pour les meilleurs itinéraires et moments',
    
    // Destinations
    destinationsTitle: 'Destinations Recommandées pour le Printemps 2025',
    destinationDescription: 'Explorez les destinations les plus fascinantes de Chine et découvrez une culture et une beauté naturelle uniques',
    destinationActivities: 'Activités Recommandées',
    destinationSeason: 'Meilleure Saison',
    
    // Récits de Voyage
    storiesTitle: 'Récits de Voyageurs en Chine',
    readMore: 'Lire Plus',
    storyAuthor: 'Auteur',
    storyDestination: 'Destination',
    storyDate: 'Date de Publication',
    
    // Guides de Voyage
    guidesTitle: 'Guides Essentiels pour la Chine',
    guideCategory: 'Catégorie',
    guideContent: 'Contenu',
    
    // CTA
    ctaTitle: 'Commencez Votre Voyage en Chine',
    ctaSubtitle: 'Laissez-nous vous aider à planifier une expérience de voyage inoubliable',
    ctaButton: 'Commencer la Planification',
    ctaStats: {
      cities: 'Villes de Destination',
      itineraries: 'Itinéraires Premium',
      users: 'Utilisateurs Satisfaits'
    },
    
    // Pied de Page
    footerAbout: 'À Propos',
    footerContact: 'Contact',
    footerPrivacy: 'Politique de Confidentialité',
    footerTerms: 'Términos de Servicio',
    footerDescription: 'Découvrez la Chine, explorez des possibilités infinies. Nous nous engageons à vous offrir la meilleure expérience de voyage.',
    skipToContent: '跳转到主要内容',
    scrollLeft: 'Défiler à gauche',
    scrollRight: 'Défiler à droite',
    'destination.1.name': 'Pékin',
    'destination.1.description': 'Capitale de la Chine, ville historique et culturelle',
    'destination.1.activities.hiking': 'Randonnée sur la Grande Muraille',
    'destination.1.activities.culture': 'Culture de la Cité Interdite',
    'destination.1.activities.food': 'Canard laqué de Pékin',
    'destination.2.name': 'Shanghai',
    'destination.2.description': 'Métropole internationale moderne',
    'destination.2.activities.hiking': 'Promenade sur le Bund',
    'destination.2.activities.culture': 'Culture du Jardin Yu',
    'destination.2.activities.food': 'Xiaolongbao',
    'destination.3.name': 'Xi\'an',
    'destination.3.description': 'Ville culturelle de la antigua capital',
    'destination.3.activities.hiking': 'Vélo sur les remparts',
    'destination.3.activities.culture': 'Armée de terracota',
    'destination.3.activities.food': 'Roujiamo',
    'story.1.title': 'Explorer la Grande Muraille : Un Voyage de Randonnée Inoubliable',
    'story.1.description': 'Suivez nos pas alors que nous explorons l\'une des Sept Merveilles du Monde, ressentant l\'émerveillement de l\'histoire et de la beauté naturelle.',
    'story.1.destination': 'Pékin',
    'story.2.title': 'Villes d\'Eau du Jiangnan : Un Voyage à Wuzhen',
    'story.2.description': 'Flânez à travers les ponts et les cours d\'eau de Wuzhen, découvrant le charme unique des villes d\'eau du Jiangnan et l\'atmosphère historique de cette ville ancienne.',
    'story.2.destination': 'Zhejiang',
    'story.3.title': 'Route de la Soie : Explorando las Cuevas de Mogao',
    'story.3.description': 'Pénétrez dans les Grottes de Mogao pour découvrir les trésors de l\'art bouddhique et explorer la fusion culturelle le long de la Route de la Soie.',
    'story.3.destination': 'Gansu',
    'guide.1.title': 'The Great Wall',
    'guide.1.description': 'One of the Seven Wonders of the World',
    'guide.1.category': 'Historical Site',
    'guide.2.title': 'The Summer Palace',
    'guide.2.description': 'A masterpiece of classical Chinese garden design',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI Travel Planner',
    'planner.subtitle': 'Get your personalized China travel plan based on your preferences',
    'planner.progress': 'Progress',
    'planner.comingSoon': 'Questionnaire coming soon...',
    'planner.back': 'Back',
    'planner.next': 'Next',
    'planner.submit': 'Submit',
    'planner.basicInfo.travelDates': 'Dates de Voyage',
    'planner.basicInfo.startDate': 'Date de Départ',
    'planner.basicInfo.endDate': 'Date de Retour',
    'planner.basicInfo.travelType': 'Type de Voyage',
    'planner.basicInfo.travelTypes.solo': 'Voyage en Solo',
    'planner.basicInfo.travelTypes.couple': 'Voyage en Couple',
    'planner.basicInfo.travelTypes.family': 'Voyage en Famille',
    'planner.basicInfo.travelTypes.friends': 'Voyage entre Amis',
    'planner.basicInfo.budget': 'Budget',
    'planner.step': 'Étape {{current}}/{{total}}',
    'planner.nextStep': 'Plus de contenu passionnant à venir...',
    'planner.error': 'Une erreur est survenue, veuillez réessayer plus tard',
    'planner.loading': 'Chargement...',
    'planner.special.accessibility.title': 'Accessibilité',
    'planner.special.accessibility.wheelchair': 'Fauteuil roulant',
    'planner.special.accessibility.elevator': 'Ascenseur',
    'planner.special.accessibility.groundFloor': 'Rez-de-chaussée',
    'planner.special.medical.title': 'Besoin en matière médicale',
    'planner.special.medical.firstAid': 'Premiers Soins',
    'planner.special.medical.hospitalNearby': 'Hôpital à proximité',
    'planner.special.medical.medicineStorage': 'Stockage de médicaments',
    'planner.special.dietary.title': 'Régime Alimentaire',
    'planner.special.dietary.halal': 'Halal',
    'planner.special.dietary.kosher': 'Kosher',
    'planner.special.dietary.allergies': 'Allergies',
    'planner.special.dietary.allergy.peanuts': 'Arachides',
    'planner.special.dietary.allergy.seafood': 'Fruits de Mer',
    'planner.special.dietary.allergy.dairy': 'Lait',
    'planner.special.dietary.allergy.eggs': 'Œufs',
    'planner.special.dietary.allergy.gluten': 'Gluten',
    'planner.special.dietary.allergy.soy': 'Soja',
    'planner.special.other.title': 'Autres besoins',
    'planner.special.other.placeholder': 'Veuillez entrer d\'autres besoins',
    'planner.finish': 'Terminé',
    'planner.error.general': 'Une erreur est survenue, veuillez réessayer plus tard',
    'planner.step1': 'Informations de base',
    'planner.step2': 'Préférences de destination',
    'planner.step3': 'Préférences d\'intérêt',
    'planner.step4': 'Besoins spéciaux',
    'planner.plan.duration': 'Durée',
    'planner.plan.days': 'jours',
    'planner.plan.budget': 'Budget',
    'planner.plan.day': 'Jour',
    'planner.plan.accommodation': 'Hébergement',
    'planner.plan.activities': 'Activités',
    'planner.plan.hours': 'heures',
    'planner.plan.meals': 'Repas',
    'planner.plan.breakfast': 'Petit-déjeuner',
    'planner.plan.lunch': 'Déjeuner',
    'planner.plan.dinner': 'Dîner',
    'planner.plan.specialNotes': 'Notes spéciales',
    'planner.destinations.recommendedRoutes': 'Itinéraires Recommandés',
    'planner.destinations.route1': 'Villes d\'eau classiques du Jiangnan',
    'planner.destinations.route2': 'Exploration de la Route de la Soie',
    'planner.destinations.route3': 'Tour Culturel de la Grande Muraille',
    'planner.destinations.route1.description': 'Visitez Suzhou, Hangzhou et autres villes d\'eau, découvrez la culture des jardins traditionnels',
    'planner.destinations.route2.description': 'Explorez Xi\'an, Dunhuang et autres villes anciennes de la Route de la Soie, ressentez la fusion des cultures orientale et occidentale',
    'planner.destinations.route3.description': 'Visitez Pékin, Badaling et autres sites de la Grande Muraille, découvrez l\'histoire et la culture chinoises'
  },
  de: {
    // Navigation
    destinations: 'Reiseziele',
    stories: 'Reisegeschichten',
    guides: 'Reiseführer',
    planner: 'Reiseplaner',
    viewAllDestinations: 'Alle Reiseziele Anzeigen',
    
    // Jahreszeiten
    'season.spring': 'Frühling',
    'season.summer': 'Sommer',
    'season.autumn': 'Herbst',
    'season.winter': 'Winter',
    
    // Homepage Content
    heroTitle: 'Entdecken Sie das Wunderbare China',
    heroSubtitle: 'Von historischen Stätten bis zu modernen Städten, entdecken Sie faszinierende Kultur und natürliche Schönheit',
    startPlanning: 'Planung Starten',
    
    // Wertversprechen
    valueProp1Title: 'Personalisierte Planung',
    valueProp1Desc: 'Passen Sie Ihre perfekte Reise nach Ihren Interessen und Zeit an',
    valueProp2Title: 'Kulturelles Erlebnis',
    valueProp2Desc: 'Tauchen Sie ein in Chinas reiche Geschichte und authentische Kultur',
    valueProp3Title: 'Intelligente Routenplanung',
    valueProp3Desc: 'KI-basierte Empfehlungen für optimale Routen und Zeiten',
    
    // Reiseziele
    destinationsTitle: 'Empfohlene Reiseziele für den Frühling 2025',
    destinationDescription: 'Entdecken Sie die faszinierendsten Reiseziele Chinas und erleben Sie einzigartige Kultur und natürliche Schönheit',
    destinationActivities: 'Empfohlene Aktivitäten',
    destinationSeason: 'Beste Reisezeit',
    
    // Reisegeschichten
    storiesTitle: 'Reisegeschichten aus China',
    readMore: 'Weiterlesen',
    storyAuthor: 'Autor',
    storyDestination: 'Reiseziel',
    storyDate: 'Veröffentlichungsdatum',
    
    // Reiseführer
    guidesTitle: 'Wichtige Reiseführer für China',
    guideCategory: 'Kategorie',
    guideContent: 'Inhalt',
    
    // CTA
    ctaTitle: 'Beginnen Sie Ihre Chinareise',
    ctaSubtitle: 'Lassen Sie uns Ihnen helfen, ein unvergessliches Reiseerlebnis zu planen',
    ctaButton: 'Planung Beginnen',
    ctaStats: {
      cities: 'Reisezielstädte',
      itineraries: 'Premium-Reisen',
      users: 'Zufriedene Nutzer'
    },
    
    // Footer
    footerAbout: 'Über Uns',
    footerContact: 'Kontakt',
    footerPrivacy: 'Datenschutzerklärung',
    footerTerms: 'Nutzungsbedingungen',
    footerDescription: 'Entdecken Sie China, erleben Sie unendliche Möglichkeiten. Wir setzen uns dafür ein, Ihnen das beste Reiseerlebnis zu bieten.',
    skipToContent: '跳转到主要内容',
    scrollLeft: 'Nach links scrollen',
    scrollRight: 'Nach rechts scrollen',
    'destination.1.name': 'Peking',
    'destination.1.description': 'Hauptstadt Chinas, historische und kulturelle Stadt',
    'destination.1.activities.hiking': 'Wandern auf der Großen Mauer',
    'destination.1.activities.culture': 'Verbotene Stadt Kultur',
    'destination.1.activities.food': 'Pekingente',
    'destination.2.name': 'Shanghai',
    'destination.2.description': 'Moderne internationale Metropole',
    'destination.2.activities.hiking': 'Spaziergang am Bund',
    'destination.2.activities.culture': 'Yu-Garten Kultur',
    'destination.2.activities.food': 'Xiaolongbao',
    'destination.3.name': 'Xi\'an',
    'destination.3.description': 'Kulturstadt der alten Hauptstadt',
    'destination.3.activities.hiking': 'Radfahren auf der Stadtmauer',
    'destination.3.activities.culture': 'Terrakotta-Armee',
    'destination.3.activities.food': 'Roujiamo',
    'story.1.title': 'Die Große Mauer erkunden: Eine unvergessliche Wanderung',
    'story.1.description': 'Folgen Sie unseren Spuren, während wir eines der Sieben Weltwunder erkunden und die Ehrfurcht vor der Geschichte und natürlichen Schönheit erleben.',
    'story.1.destination': 'Peking',
    'story.2.title': 'Wasserstädte Jiangnans: Eine Reise nach Wuzhen',
    'story.2.description': 'Schlendern Sie durch die Brücken und Wasserwege Wuzhens und erleben Sie den einzigartigen Charme der Wasserstädte Jiangnans und die historische Atmosphäre dieser alten Stadt.',
    'story.2.destination': 'Zhejiang',
    'story.3.title': 'Seidenstraße: Die Mogao-Grotten erkunden',
    'story.3.description': 'Betreten Sie die Mogao-Grotten, um die Schätze der buddhistischen Kunst zu erleben und die kulturelle Fusion entlang der Seidenstraße zu erkunden.',
    'story.3.destination': 'Gansu',
    'guide.1.title': 'The Great Wall',
    'guide.1.description': 'One of the Seven Wonders of the World',
    'guide.1.category': 'Historical Site',
    'guide.2.title': 'The Summer Palace',
    'guide.2.description': 'A masterpiece of classical Chinese garden design',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI Travel Planner',
    'planner.subtitle': 'Get your personalized China travel plan based on your preferences',
    'planner.progress': 'Progress',
    'planner.comingSoon': 'Questionnaire coming soon...',
    'planner.back': 'Back',
    'planner.next': 'Next',
    'planner.submit': 'Submit',
    'planner.basicInfo.travelDates': 'Reisedaten',
    'planner.basicInfo.startDate': 'Abreisedatum',
    'planner.basicInfo.endDate': 'Rückreisedatum',
    'planner.basicInfo.travelType': 'Reiseart',
    'planner.basicInfo.travelTypes.solo': 'Solo-Reise',
    'planner.basicInfo.travelTypes.couple': 'Paar-Reise',
    'planner.basicInfo.travelTypes.family': 'Familienreise',
    'planner.basicInfo.travelTypes.friends': 'Freundesreise',
    'planner.basicInfo.budget': 'Budget',
    'planner.step': 'Schritt {{current}}/{{total}}',
    'planner.nextStep': 'Weitere spannende Inhalte kommen bald...',
    'planner.error': 'Ein Fehler ist aufgetreten, bitte versuchen Sie es später erneut',
    'planner.loading': 'Wird geladen...',
    'planner.special.accessibility.title': 'Barrierefreiheit',
    'planner.special.accessibility.wheelchair': 'Rollstuhl',
    'planner.special.accessibility.elevator': 'Aufzug',
    'planner.special.accessibility.groundFloor': 'Erdgeschoss',
    'planner.special.medical.title': 'Medizinische Anforderungen',
    'planner.special.medical.firstAid': 'Notfallbehandlung',
    'planner.special.medical.hospitalNearby': 'Klinik in der Nähe',
    'planner.special.medical.medicineStorage': 'Medikamentenspeicherung',
    'planner.special.dietary.title': 'Ernährungsbeschränkungen',
    'planner.special.dietary.halal': 'Halal',
    'planner.special.dietary.kosher': 'Koscher',
    'planner.special.dietary.allergies': 'Allergien',
    'planner.special.dietary.allergy.peanuts': 'Erdnüsse',
    'planner.special.dietary.allergy.seafood': 'Meeresfrüchte',
    'planner.special.dietary.allergy.dairy': 'Milchprodukte',
    'planner.special.dietary.allergy.eggs': 'Eier',
    'planner.special.dietary.allergy.gluten': 'Gluten',
    'planner.special.dietary.allergy.soy': 'Soja',
    'planner.special.other.title': 'Andere Anforderungen',
    'planner.special.other.placeholder': 'Bitte geben Sie andere Anforderungen ein',
    'planner.finish': 'Fertig',
    'planner.error.general': 'Ein Fehler ist aufgetreten, bitte versuchen Sie es später erneut',
    'planner.step1': 'Grundinformationen',
    'planner.step2': 'Reiseziel-Präferenzen',
    'planner.step3': 'Interessen-Präferenzen',
    'planner.step4': 'Besondere Anforderungen',
    'planner.plan.duration': 'Dauer',
    'planner.plan.days': 'Tage',
    'planner.plan.budget': 'Budget',
    'planner.plan.day': 'Tag',
    'planner.plan.accommodation': 'Unterkunft',
    'planner.plan.activities': 'Aktivitäten',
    'planner.plan.hours': 'Stunden',
    'planner.plan.meals': 'Mahlzeiten',
    'planner.plan.breakfast': 'Frühstück',
    'planner.plan.lunch': 'Mittagessen',
    'planner.plan.dinner': 'Abendessen',
    'planner.plan.specialNotes': 'Besondere Hinweise',
    'planner.destinations.recommendedRoutes': 'Empfohlene Routen',
    'planner.destinations.route1': 'Klassische Jiangnan-Wasserstädte',
    'planner.destinations.route2': 'Seidenstraßen-Erkundung',
    'planner.destinations.route3': 'Kulturelle Tour zur Großen Mauer',
    'planner.destinations.route1.description': 'Besuchen Sie Suzhou, Hangzhou und andere Wasserstädte, erleben Sie die traditionelle Gartenkultur',
    'planner.destinations.route2.description': 'Erkunden Sie Xi\'an, Dunhuang und andere alte Städte der Seidenstraße, spüren Sie die Verschmelzung von östlicher und westlicher Kultur',
    'planner.destinations.route3.description': 'Besuchen Sie Peking, Badaling und andere Stätten der Großen Mauer, lernen Sie die chinesische Geschichte und Kultur kennen'
  },
  es: {
    // Navegación
    destinations: 'Destinos',
    stories: 'Historias de Viaje',
    guides: 'Guías de Viaje',
    planner: 'Planificador de Viajes',
    viewAllDestinations: 'Ver Todos los Destinos',
    
    // Estaciones
    'season.spring': 'Primavera',
    'season.summer': 'Verano',
    'season.autumn': 'Otoño',
    'season.winter': 'Invierno',
    
    // Homepage Content
    heroTitle: 'Explora la Maravillosa China',
    heroSubtitle: 'Desde sitios históricos hasta ciudades modernas, descubre una cultura y belleza natural asombrosas',
    startPlanning: 'Comenzar a Planificar',
    
    // Propuestas de Valor
    valueProp1Title: 'Planificación Personalizada',
    valueProp1Desc: 'Personaliza tu viaje perfecto según tus intereses y tiempo',
    valueProp2Title: 'Experiencia Cultural',
    valueProp2Desc: 'Sumérgete en la rica historia y cultura auténtica de China',
    valueProp3Title: 'Itinerario Inteligente',
    valueProp3Desc: 'Recomendaciones basadas en IA para rutas y momentos óptimos',
    
    // Destinos
    destinationsTitle: 'Destinos Destacados para la Primavera 2025',
    destinationDescription: 'Explora los destinos más fascinantes de China y experimenta una cultura y belleza natural únicas',
    destinationActivities: 'Actividades Destacadas',
    destinationSeason: 'Mejor Época',
    
    // Historias de Viaje
    storiesTitle: 'Historias de Viajeros en China',
    readMore: 'Leer Más',
    storyAuthor: 'Autor',
    storyDestination: 'Destino',
    storyDate: 'Fecha de Publicación',
    
    // Guías de Viaje
    guidesTitle: 'Guías Esenciales para China',
    guideCategory: 'Categoría',
    guideContent: 'Contenido',
    
    // CTA
    ctaTitle: 'Comienza Tu Viaje a China',
    ctaSubtitle: 'Déjanos ayudarte a planificar una experiencia de viaje inolvidable',
    ctaButton: 'Comenzar Planificación',
    ctaStats: {
      cities: 'Ciudades Destino',
      itineraries: 'Itinerarios Premium',
      users: 'Usuarios Satisfechos'
    },
    
    // Pie de Página
    footerAbout: 'Sobre Nosotros',
    footerContact: 'Contacto',
    footerPrivacy: 'Política de Privacidad',
    footerTerms: 'Términos de Servicio',
    footerDescription: 'Explora China, descubre posibilidades infinitas. Nos comprometemos a brindarte la mejor experiencia de viaje.',
    skipToContent: '跳转到主要内容',
    scrollLeft: 'Desplazar a la izquierda',
    scrollRight: 'Desplazar a la derecha',
    'destination.1.name': 'Pekín',
    'destination.1.description': 'Capital de China, ciudad histórica y cultural',
    'destination.1.activities.hiking': 'Senderismo en la Gran Muralla',
    'destination.1.activities.culture': 'Cultura de la Ciudad Prohibida',
    'destination.1.activities.food': 'Pato laqueado de Pekín',
    'destination.2.name': 'Shanghái',
    'destination.2.description': 'Metrópoli internacional moderna',
    'destination.2.activities.hiking': 'Paseo por el Bund',
    'destination.2.activities.culture': 'Cultura del Jardín Yu',
    'destination.2.activities.food': 'Xiaolongbao',
    'destination.3.name': 'Xi\'an',
    'destination.3.description': 'Ciudad cultural de la antigua capital',
    'destination.3.activities.hiking': 'Ciclismo en la muralla',
    'destination.3.activities.culture': 'Ejército de terracota',
    'destination.3.activities.food': 'Roujiamo',
    'story.1.title': 'Explorando la Gran Muralla: Un Viaje de Senderismo Inolvidable',
    'story.1.description': 'Sigue nuestros pasos mientras exploramos una de las Siete Maravillas del Mundo, experimentando el asombro de la historia y la belleza natural.',
    'story.1.destination': 'Pekín',
    'story.2.title': 'Ciudades de Agua de Jiangnan: Un Viaje a Wuzhen',
    'story.2.description': 'Pasea por los puentes y vías fluviales de Wuzhen, experimentando el encanto único de las ciudades de agua de Jiangnan y la atmósfera histórica de esta antigua ciudad.',
    'story.2.destination': 'Zhejiang',
    'story.3.title': 'Ruta de la Seda: Explorando las Cuevas de Mogao',
    'story.3.description': 'Adéntrate en las Cuevas de Mogao para experimentar los tesoros del arte budista y explorar la fusión cultural a lo largo de la Ruta de la Seda.',
    'story.3.destination': 'Gansu',
    'guide.1.title': 'The Great Wall',
    'guide.1.description': 'One of the Seven Wonders of the World',
    'guide.1.category': 'Historical Site',
    'guide.2.title': 'The Summer Palace',
    'guide.2.description': 'A masterpiece of classical Chinese garden design',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI Travel Planner',
    'planner.subtitle': 'Get your personalized China travel plan based on your preferences',
    'planner.progress': 'Progress',
    'planner.comingSoon': 'Questionnaire coming soon...',
    'planner.back': 'Back',
    'planner.next': 'Next',
    'planner.submit': 'Submit',
    'planner.basicInfo.travelDates': 'Fechas de Viaje',
    'planner.basicInfo.startDate': 'Fecha de Inicio',
    'planner.basicInfo.endDate': 'Fecha de Fin',
    'planner.basicInfo.travelType': 'Tipo de Viaje',
    'planner.basicInfo.travelTypes.solo': 'Viaje Individual',
    'planner.basicInfo.travelTypes.couple': 'Viaje en Pareja',
    'planner.basicInfo.travelTypes.family': 'Viaje Familiar',
    'planner.basicInfo.travelTypes.friends': 'Viaje con Amigos',
    'planner.basicInfo.budget': 'Presupuesto',
    'planner.step': 'Paso {{current}}/{{total}}',
    'planner.nextStep': 'Más contenido emocionante próximamente...',
    'planner.error': 'Ocurrió un error, por favor inténtelo de nuevo más tarde',
    'planner.loading': 'Cargando...',
    'planner.special.accessibility.title': 'Accesibilidad',
    'planner.special.accessibility.wheelchair': 'Silla de ruedas',
    'planner.special.accessibility.elevator': 'Ascensor',
    'planner.special.accessibility.groundFloor': 'Planta baja',
    'planner.special.medical.title': 'Necesidades Médicas',
    'planner.special.medical.firstAid': 'Atención de Emergencia',
    'planner.special.medical.hospitalNearby': 'Hospital Cercano',
    'planner.special.medical.medicineStorage': 'Almacenamiento de Medicamentos',
    'planner.special.dietary.title': 'Restricciones Alimentarias',
    'planner.special.dietary.halal': 'Halal',
    'planner.special.dietary.kosher': 'Kosher',
    'planner.special.dietary.allergies': 'Alergias',
    'planner.special.dietary.allergy.peanuts': 'Cacahuetes',
    'planner.special.dietary.allergy.seafood': 'Mariscos',
    'planner.special.dietary.allergy.dairy': 'Lácteos',
    'planner.special.dietary.allergy.eggs': 'Huevos',
    'planner.special.dietary.allergy.gluten': 'Gluten',
    'planner.special.dietary.allergy.soy': 'Soja',
    'planner.special.other.title': 'Otras necesidades',
    'planner.special.other.placeholder': 'Por favor, ingrese otras necesidades',
    'planner.finish': 'Completar',
    'planner.error.general': 'Ha ocurrido un error, por favor inténtelo de nuevo más tarde',
    'planner.step1': 'Información básica',
    'planner.step2': 'Preferencias de destino',
    'planner.step3': 'Preferencias de interés',
    'planner.step4': 'Requisitos especiales',
    'planner.plan.duration': 'Duración',
    'planner.plan.days': 'días',
    'planner.plan.budget': 'Presupuesto',
    'planner.plan.day': 'Día',
    'planner.plan.accommodation': 'Alojamiento',
    'planner.plan.activities': 'Actividades',
    'planner.plan.hours': 'horas',
    'planner.plan.meals': 'Comidas',
    'planner.plan.breakfast': 'Desayuno',
    'planner.plan.lunch': 'Almuerzo',
    'planner.plan.dinner': 'Cena',
    'planner.plan.specialNotes': 'Notas especiales',
    'planner.destinations.recommendedRoutes': 'Rutas Recomendadas',
    'planner.destinations.route1': 'Ciudades Acuáticas Clásicas de Jiangnan',
    'planner.destinations.route2': 'Exploración de la Ruta de la Seda',
    'planner.destinations.route3': 'Tour Cultural de la Gran Muralla',
    'planner.destinations.route1.description': 'Visite Suzhou, Hangzhou y otras ciudades acuáticas, experimente la cultura tradicional de los jardines',
    'planner.destinations.route2.description': 'Explore Xi\'an, Dunhuang y otras ciudades antiguas de la Ruta de la Seda, sienta la fusión de las culturas oriental y occidental',
    'planner.destinations.route3.description': 'Visite Pekín, Badaling y otros sitios de la Gran Muralla, conozca la historia y cultura china'
  },
  ru: {
    // Навигация
    destinations: 'Направления',
    stories: 'Истории Путешествий',
    guides: 'Путеводители',
    planner: 'Планировщик Путешествий',
    viewAllDestinations: 'Показать Все Направления',
    
    // Сезоны
    'season.spring': 'Весна',
    'season.summer': 'Лето',
    'season.autumn': 'Осень',
    'season.winter': 'Зима',
    
    // Homepage Content
    heroTitle: 'Исследуйте Удивительный Китай',
    heroSubtitle: 'От исторических мест до современных городов, откройте для себя потрясающую культуру и природную красоту',
    startPlanning: 'Начать Планирование',
    
    // Ценностные Предложения
    valueProp1Title: 'Персонализированное Планирование',
    valueProp1Desc: 'Настройте свое идеальное путешествие в соответствии с вашими интересами и временем',
    valueProp2Title: 'Культурный Опыт',
    valueProp2Desc: 'Погрузитесь в богатую историю и подлинную культуру Китая',
    valueProp3Title: 'Умный Маршрут',
    valueProp3Desc: 'Рекомендации на основе ИИ для оптимальных маршрутов и времени',
    
    // Направления
    destinationsTitle: 'Рекомендуемые Направления на Весну 2025',
    destinationDescription: 'Исследуйте самые увлекательные направления Китая и познакомьтесь с уникальной культурой и природной красотой',
    destinationActivities: 'Рекомендуемые Мероприятия',
    destinationSeason: 'Лучшее Время',
    
    // Истории Путешествий
    storiesTitle: 'Истории Путешественников в Китае',
    readMore: 'Читать Далее',
    storyAuthor: 'Автор',
    storyDestination: 'Направление',
    storyDate: 'Дата Публикации',
    
    // Путеводители
    guidesTitle: 'Основные Путеводители по Китаю',
    guideCategory: 'Категория',
    guideContent: 'Содержание',
    
    // CTA
    ctaTitle: 'Начните Свое Путешествие в Китай',
    ctaSubtitle: 'Позвольте нам помочь вам спланировать незабываемое путешествие',
    ctaButton: 'Начать Планирование',
    ctaStats: {
      cities: 'Города Назначения',
      itineraries: 'Премиум Маршруты',
      users: 'Довольные Пользователи'
    },
    
    // Подвал
    footerAbout: 'О Нас',
    footerContact: 'Контакты',
    footerPrivacy: 'Политика Конфиденциальности',
    footerTerms: 'Условия Использования',
    footerDescription: 'Исследуйте Китай, откройте для себя бесконечные возможности. Мы стремимся предоставить вам лучший туристический опыт.',
    skipToContent: '跳转到主要内容',
    scrollLeft: 'Прокрутить влево',
    scrollRight: 'Прокрутить вправо',
    'destination.1.name': 'Пекин',
    'destination.1.description': 'Столица Китая, исторический и культурный город',
    'destination.1.activities.hiking': 'Поход по Великой стене',
    'destination.1.activities.culture': 'Культура Запретного города',
    'destination.1.activities.food': 'Пекинская утка',
    'destination.2.name': 'Шанхай',
    'destination.2.description': 'Современный международный мегаполис',
    'destination.2.activities.hiking': 'Прогулка по набережной Вайтань',
    'destination.2.activities.culture': 'Культура сада Юйюань',
    'destination.2.activities.food': 'Сяолунбао',
    'destination.3.name': 'Сиань',
    'destination.3.description': 'Культурный город древней столицы',
    'destination.3.activities.hiking': 'Велосипед по городской стене',
    'destination.3.activities.culture': 'Терракотовая армия',
    'destination.3.activities.food': 'Роуцзямо',
    'story.1.title': 'Исследование Великой Китайской Стены: Незабываемое Путешествие',
    'story.1.description': 'Следуйте за нами, пока мы исследуем одно из Семи Чудес Света, переживая благоговение перед историей и природной красотой.',
    'story.1.destination': 'Пекин',
    'story.2.title': 'Водные Города Цзяннани: Путешествие в Учжэнь',
    'story.2.description': 'Прогуляйтесь по мостам и водным путям Учжэня, познавая уникальное очарование водных городов Цзяннани и историческую атмосферу этого древнего города.',
    'story.2.destination': 'Чжэцзян',
    'story.3.title': 'Шелковый Путь: Исследование Пещер Могао',
    'story.3.description': 'Войдите в Пещеры Могао, чтобы познать сокровища буддийского искусства и исследовать культурное слияние вдоль Шелкового Пути.',
    'story.3.destination': 'Ганьсу',
    'guide.1.title': 'The Great Wall',
    'guide.1.description': 'One of the Seven Wonders of the World',
    'guide.1.category': 'Historical Site',
    'guide.2.title': 'The Summer Palace',
    'guide.2.description': 'A masterpiece of classical Chinese garden design',
    'guide.2.category': '园林建筑',
    'planner.title': 'AI Travel Planner',
    'planner.subtitle': 'Get your personalized China travel plan based on your preferences',
    'planner.progress': 'Progress',
    'planner.comingSoon': 'Questionnaire coming soon...',
    'planner.back': 'Back',
    'planner.next': 'Next',
    'planner.submit': 'Submit',
    'planner.basicInfo.travelDates': 'Даты Путешествия',
    'planner.basicInfo.startDate': 'Дата Начала',
    'planner.basicInfo.endDate': 'Дата Окончания',
    'planner.basicInfo.travelType': 'Тип Путешествия',
    'planner.basicInfo.travelTypes.solo': 'Соло-Путешествие',
    'planner.basicInfo.travelTypes.couple': 'Путешествие для Пары',
    'planner.basicInfo.travelTypes.family': 'Семейное Путешествие',
    'planner.basicInfo.travelTypes.friends': 'Путешествие с Друзьями',
    'planner.basicInfo.budget': 'Бюджет',
    'planner.step': 'Шаг {{current}}/{{total}}',
    'planner.nextStep': 'Скоро появится больше интересного контента...',
    'planner.error': 'Произошла ошибка, пожалуйста, попробуйте позже',
    'planner.loading': 'Загрузка...',
    'planner.special.accessibility.title': 'Доступность',
    'planner.special.accessibility.wheelchair': 'Коляска',
    'planner.special.accessibility.elevator': 'Лифт',
    'planner.special.accessibility.groundFloor': 'Этаж',
    'planner.special.medical.title': 'Медицинские Требования',
    'planner.special.medical.firstAid': 'Неотложная Помощь',
    'planner.special.medical.hospitalNearby': 'Ближайший Медицинский Центр',
    'planner.special.medical.medicineStorage': 'Хранение Медицинских Средств',
    'planner.special.dietary.title': 'Диетические Ограничения',
    'planner.special.dietary.halal': 'Халяль',
    'planner.special.dietary.kosher': 'Кошер',
    'planner.special.dietary.allergies': 'Аллергии',
    'planner.special.dietary.allergy.peanuts': 'Арахис',
    'planner.special.dietary.allergy.seafood': 'Морепродукты',
    'planner.special.dietary.allergy.dairy': 'Молочные Продукты',
    'planner.special.dietary.allergy.eggs': 'Яйца',
    'planner.special.dietary.allergy.gluten': 'Глютен',
    'planner.special.dietary.allergy.soy': 'Соя',
    'planner.special.other.title': 'Другие требования',
    'planner.special.other.placeholder': 'Пожалуйста, введите другие требования',
    'planner.finish': 'Завершить',
    'planner.error.general': 'Произошла ошибка, пожалуйста, попробуйте позже',
    'planner.step1': 'Основная информация',
    'planner.step2': 'Предпочтения по направлению',
    'planner.step3': 'Интересы',
    'planner.step4': 'Особые требования',
    'planner.plan.duration': 'Продолжительность',
    'planner.plan.days': 'дней',
    'planner.plan.budget': 'Бюджет',
    'planner.plan.day': 'День',
    'planner.plan.accommodation': 'Размещение',
    'planner.plan.activities': 'Мероприятия',
    'planner.plan.hours': 'часов',
    'planner.plan.meals': 'Питание',
    'planner.plan.breakfast': 'Завтрак',
    'planner.plan.lunch': 'Обед',
    'planner.plan.dinner': 'Ужин',
    'planner.plan.specialNotes': 'Особые примечания',
    'planner.destinations.recommendedRoutes': 'Рекомендуемые маршруты',
    'planner.destinations.route1': 'Классические водные города Цзяннань',
    'planner.destinations.route2': 'Исследование Шелкового пути',
    'planner.destinations.route3': 'Культурный тур по Великой стене',
    'planner.destinations.route1.description': 'Посетите Сучжоу, Ханчжоу и другие водные города, познакомьтесь с традиционной культурой садов',
    'planner.destinations.route2.description': 'Исследуйте Сиань, Дуньхуан и другие древние города Шелкового пути, почувствуйте слияние восточной и западной культур',
    'planner.destinations.route3.description': 'Посетите Пекин, Бадалин и другие места Великой стены, изучите китайскую историю и культуру'
  }
};

export const getTranslation = (
  language: Language, 
  key: keyof TranslationValue
): TranslationValue[keyof TranslationValue] => {
  const translation = translations[language];
  if (!translation) {
    console.warn(`Translation not found for language: ${language}`);
    return translations['en'][key] || key;
  }

  // 特殊处理destinationsTitle
  if (key === 'destinationsTitle') {
    return getCurrentSeasonTitle(language);
  }

  return translation[key];
}; 