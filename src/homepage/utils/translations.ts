import { Language } from '../types';

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
}

interface Translations {
  [key: string]: TranslationValue;
}

export const translations: Translations = {
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
    destinationsTitle: '2024年春季推荐目的地',
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
    'guide.2.category': '园林建筑'
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
    destinationsTitle: 'Featured Destinations for Spring 2024',
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
    'guide.2.category': 'Historical Site'
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
    destinationsTitle: '2024年春のおすすめ目的地',
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
    'guide.2.category': '园林建筑'
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
    destinationsTitle: '2024년 봄 추천 목적지',
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
    'guide.2.category': '园林建筑'
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
    destinationsTitle: 'Destinations Recommandées pour le Printemps 2024',
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
    footerTerms: 'Conditions d\'Utilisation',
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
    'destination.3.description': 'Ville culturelle de l\'ancienne capitale',
    'destination.3.activities.hiking': 'Vélo sur les remparts',
    'destination.3.activities.culture': 'Armée de terre cuite',
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
    'guide.2.category': '园林建筑'
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
    destinationsTitle: 'Empfohlene Reiseziele für den Frühling 2024',
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
    'guide.2.category': '园林建筑'
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
    destinationsTitle: 'Destinos Destacados para la Primavera 2024',
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
    'guide.2.category': '园林建筑'
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
    destinationsTitle: 'Рекомендуемые Направления на Весну 2024',
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
    'guide.2.category': '园林建筑'
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
  return translation[key];
}; 