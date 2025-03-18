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
  },
  ja: {
    // ナビゲーション
    destinations: '目的地',
    stories: '旅行ストーリー',
    guides: '旅行ガイド',
    planner: '旅行プランナー',
    
    // ホームページコンテンツ
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
    
    // 旅行ストーリー
    storiesTitle: '旅行者の中国ストーリー',
    readMore: '続きを読む',
    
    // 旅行ガイド
    guidesTitle: '中国旅行必須ガイド',
    
    // CTA
    ctaTitle: '中国の旅を始めましょう',
    ctaSubtitle: '忘れられない旅行体験をプランニングするお手伝いをさせていただきます',
    
    // フッター
    aboutUs: '私たちについて',
    contact: 'お問い合わせ',
    privacy: 'プライバシーポリシー',
    terms: '利用規約'
  },
  ko: {
    // 네비게이션
    destinations: '목적지',
    stories: '여행 이야기',
    guides: '여행 가이드',
    planner: '여행 플래너',
    
    // 홈페이지 콘텐츠
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
    
    // 여행 이야기
    storiesTitle: '여행자들의 중국 이야기',
    readMore: '더 읽기',
    
    // 여행 가이드
    guidesTitle: '중국 여행 필수 가이드',
    
    // CTA
    ctaTitle: '중국 여행을 시작하세요',
    ctaSubtitle: '잊지 못할 여행 경험을 계획하는 것을 도와드립니다',
    
    // 푸터
    aboutUs: '회사 소개',
    contact: '문의하기',
    privacy: '개인정보 처리방침',
    terms: '이용약관'
  },
  fr: {
    // Navigation
    destinations: 'Destinations',
    stories: 'Histoires de Voyage',
    guides: 'Guides de Voyage',
    planner: 'Planificateur de Voyage',
    
    // Contenu de la Page d'Accueil
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
    
    // Histoires de Voyage
    storiesTitle: 'Histoires de Voyageurs en Chine',
    readMore: 'Lire Plus',
    
    // Guides de Voyage
    guidesTitle: 'Guides de Voyage Essentiels pour la Chine',
    
    // CTA
    ctaTitle: 'Commencez Votre Voyage en Chine',
    ctaSubtitle: 'Laissez-nous vous aider à planifier une expérience de voyage inoubliable',
    
    // Pied de Page
    aboutUs: 'À Propos de Nous',
    contact: 'Contact',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions d\'Utilisation'
  },
  de: {
    // Navigation
    destinations: 'Reiseziele',
    stories: 'Reisegeschichten',
    guides: 'Reiseführer',
    planner: 'Reiseplaner',
    
    // Startseite Inhalt
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
    destinationsTitle: 'Empfohlene Reiseziele für Frühling 2024',
    
    // Reisegeschichten
    storiesTitle: 'Reisegeschichten aus China',
    readMore: 'Weiterlesen',
    
    // Reiseführer
    guidesTitle: 'Wichtige China-Reiseführer',
    
    // CTA
    ctaTitle: 'Beginnen Sie Ihre Chinareise',
    ctaSubtitle: 'Lassen Sie uns Ihnen helfen, ein unvergessliches Reiseerlebnis zu planen',
    
    // Footer
    aboutUs: 'Über Uns',
    contact: 'Kontakt',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen'
  },
  es: {
    // Navegación
    destinations: 'Destinos',
    stories: 'Historias de Viaje',
    guides: 'Guías de Viaje',
    planner: 'Planificador de Viajes',
    
    // Contenido de la Página Principal
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
    destinationsTitle: 'Destinos Destacados para Primavera 2024',
    
    // Historias de Viaje
    storiesTitle: 'Historias de Viajeros en China',
    readMore: 'Leer Más',
    
    // Guías de Viaje
    guidesTitle: 'Guías de Viaje Esenciales para China',
    
    // CTA
    ctaTitle: 'Comienza tu Viaje a China',
    ctaSubtitle: 'Déjanos ayudarte a planificar una experiencia de viaje inolvidable',
    
    // Pie de Página
    aboutUs: 'Sobre Nosotros',
    contact: 'Contacto',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio'
  },
  ru: {
    // Навигация
    destinations: 'Направления',
    stories: 'Истории Путешествий',
    guides: 'Путеводители',
    planner: 'Планировщик Путешествий',
    
    // Содержание Главной Страницы
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
    
    // Истории Путешествий
    storiesTitle: 'Истории Путешественников в Китае',
    readMore: 'Читать Далее',
    
    // Путеводители
    guidesTitle: 'Основные Путеводители по Китаю',
    
    // CTA
    ctaTitle: 'Начните Свое Путешествие в Китай',
    ctaSubtitle: 'Позвольте нам помочь вам спланировать незабываемое путешествие',
    
    // Подвал
    aboutUs: 'О Нас',
    contact: 'Контакты',
    privacy: 'Политика Конфиденциальности',
    terms: 'Условия Использования'
  }
};

export const getTranslation = (language: Language, key: string): string => {
  return translations[language]?.[key] || translations['en'][key] || key;
}; 