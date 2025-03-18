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
    skipToContent: '跳转到主要内容'
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
    skipToContent: 'Skip to main content'
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
    footerDescription: '中国を探索し、無限の可能性を発見。最高の旅行体験を提供することをお約束します。',
    skipToContent: '跳转到主要内容'
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
    footerDescription: '중국을 탐험하고 무한한 가능성을 발견하세요. 최고의 여행 경험을 제공하겠습니다.',
    skipToContent: '跳转到主要内容'
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
    footerDescription: 'Explorez la Chine, découvrez des possibilités infinies. Nous nous engageons à vous offrir la meilleure expérience de voyage.',
    skipToContent: '跳转到主要内容'
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
    footerDescription: 'Entdecken Sie China, erleben Sie unendliche Möglichkeiten. Wir verpflichten uns, Ihnen das beste Reiseerlebnis zu bieten.',
    skipToContent: '跳转到主要内容'
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
    skipToContent: '跳转到主要内容'
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
    footerDescription: 'Исследуйте Китай, откройте для себя бесконечные возможности. Мы стремимся предоставить вам лучший опыт путешествий.',
    skipToContent: '跳转到主要内容'
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