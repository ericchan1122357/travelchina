import { Language } from '../types';
import { TranslationValue } from './translations/types';

interface CtaStats {
  cities: string;
  itineraries: string;
  users: string;
}

// 获取当前季节的标题
export const getCurrentSeasonTitle = (language: Language): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  
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
  
  switch (language) {
    case 'zh':
      return `${year}年${seasonText}推荐目的地`;
    case 'ja':
      return `${year}年${seasonText}のおすすめ目的地`;
    case 'ko':
      return `${year}年 ${seasonText} 推천 목的지`;
    default:
      return `Featured Destinations for ${seasonText} ${year}`;
  }
};

export const translations: Record<Language, TranslationValue> = {
  zh: {
    destinations: '目的地',
    stories: '故事',
    guides: '指南',
    planner: '行程规划',
    viewAllDestinations: '查看所有目的地',
    'season.spring': '春季',
    'season.summer': '夏季',
    'season.autumn': '秋季',
    'season.winter': '冬季',
    heroTitle: '发现中国之美',
    heroSubtitle: '让我们为您规划完美旅程',
    startPlanning: '开始规划',
    'planner.dining.moderate.title': '适中',
    'planner.dining.adventurous.title': '冒险',
    'planner.plan.accommodation': '住宿',
    'planner.interests.history': '历史',
    'planner.interests.culture': '文化',
    'planner.interests.nature': '自然',
    'planner.interests.food': '美食',
    'planner.accommodation.budget': '经济型',
    'planner.accommodation.comfort': '舒适型',
    'planner.dining.types.local': '当地美食',
    'planner.dining.styles.casual': '休闲',
    ctaStats: '50+ 城市, 200+ 行程, 10000+ 用户'
  },
  en: {
    destinations: 'Destinations',
    stories: 'Stories',
    guides: 'Guides',
    planner: 'Trip Planner',
    viewAllDestinations: 'View All Destinations',
    'season.spring': 'Spring',
    'season.summer': 'Summer',
    'season.autumn': 'Autumn',
    'season.winter': 'Winter',
    heroTitle: 'Discover China',
    heroSubtitle: 'Let us plan your perfect journey',
    startPlanning: 'Start Planning',
    'planner.dining.moderate.title': 'Moderate',
    'planner.dining.adventurous.title': 'Adventurous',
    'planner.plan.accommodation': 'Accommodation',
    'planner.interests.history': 'History',
    'planner.interests.culture': 'Culture',
    'planner.interests.nature': 'Nature',
    'planner.interests.food': 'Food',
    'planner.accommodation.budget': 'Budget',
    'planner.accommodation.comfort': 'Comfort',
    'planner.dining.types.local': 'Local Food',
    'planner.dining.styles.casual': 'Casual',
    ctaStats: '50+ Cities, 200+ Itineraries, 10000+ Users'
  },
  ja: {
    destinations: '目的地',
    stories: 'ストーリー',
    guides: 'ガイド',
    planner: 'プランナー',
    viewAllDestinations: 'すべての目的地を見る',
    'season.spring': '春',
    'season.summer': '夏',
    'season.autumn': '秋',
    'season.winter': '冬',
    heroTitle: '中国の魅力を発見',
    heroSubtitle: '完璧な旅行プランをご提案',
    startPlanning: '計画を始める',
    'planner.dining.moderate.title': '普通',
    'planner.dining.adventurous.title': '冒険的',
    'planner.plan.accommodation': '宿泊',
    'planner.interests.history': '歴史',
    'planner.interests.culture': '文化',
    'planner.interests.nature': '自然',
    'planner.interests.food': '食事',
    'planner.accommodation.budget': '予算重視',
    'planner.accommodation.comfort': '快適さ重視',
    'planner.dining.types.local': '郷土料理',
    'planner.dining.styles.casual': 'カジュアル',
    ctaStats: '50+ 都市, 200+ プラン, 10000+ ユーザー'
  },
  ko: {
    destinations: '목적지',
    stories: '스토리',
    guides: '가이드',
    planner: '플래너',
    viewAllDestinations: '모든 목적지 보기',
    'season.spring': '봄',
    'season.summer': '여름',
    'season.autumn': '가을',
    'season.winter': '겨울',
    heroTitle: '중국의 매력을 발견하세요',
    heroSubtitle: '완벽한 여행 계획을 제안합니다',
    startPlanning: '계획 시작하기',
    'planner.dining.moderate.title': '보통',
    'planner.dining.adventurous.title': '모험적',
    'planner.plan.accommodation': '숙박',
    'planner.interests.history': '역사',
    'planner.interests.culture': '문화',
    'planner.interests.nature': '자연',
    'planner.interests.food': '음식',
    'planner.accommodation.budget': '예산 중시',
    'planner.accommodation.comfort': '편안함 중시',
    'planner.dining.types.local': '향토 요리',
    'planner.dining.styles.casual': '캐주얼',
    ctaStats: '50+ 도시, 200+ 일정, 10000+ 사용자'
  },
  fr: {
    destinations: 'Destinations',
    stories: 'Histoires',
    guides: 'Guides',
    planner: 'Planificateur',
    viewAllDestinations: 'Voir toutes les destinations',
    'season.spring': 'Printemps',
    'season.summer': 'Été',
    'season.autumn': 'Automne',
    'season.winter': 'Hiver',
    heroTitle: 'Découvrez la Chine',
    heroSubtitle: 'Laissez-nous planifier votre voyage parfait',
    startPlanning: 'Commencer à planifier',
    'planner.dining.moderate.title': 'Modéré',
    'planner.dining.adventurous.title': 'Aventureux',
    'planner.plan.accommodation': 'Hébergement',
    'planner.interests.history': 'Histoire',
    'planner.interests.culture': 'Culture',
    'planner.interests.nature': 'Nature',
    'planner.interests.food': 'Gastronomie',
    'planner.accommodation.budget': 'Budget',
    'planner.accommodation.comfort': 'Confort',
    'planner.dining.types.local': 'Cuisine locale',
    'planner.dining.styles.casual': 'Décontracté',
    ctaStats: '50+ villes, 200+ itinéraires, 10000+ utilisateurs'
  },
  de: {
    destinations: 'Reiseziele',
    stories: 'Geschichten',
    guides: 'Reiseführer',
    planner: 'Reiseplaner',
    viewAllDestinations: 'Alle Reiseziele anzeigen',
    'season.spring': 'Frühling',
    'season.summer': 'Sommer',
    'season.autumn': 'Herbst',
    'season.winter': 'Winter',
    heroTitle: 'Entdecken Sie China',
    heroSubtitle: 'Lassen Sie uns Ihre perfekte Reise planen',
    startPlanning: 'Planung beginnen',
    'planner.dining.moderate.title': 'Moderat',
    'planner.dining.adventurous.title': 'Abenteuerlich',
    'planner.plan.accommodation': 'Unterkunft',
    'planner.interests.history': 'Geschichte',
    'planner.interests.culture': 'Kultur',
    'planner.interests.nature': 'Natur',
    'planner.interests.food': 'Essen',
    'planner.accommodation.budget': 'Budget',
    'planner.accommodation.comfort': 'Komfort',
    'planner.dining.types.local': 'Lokale Küche',
    'planner.dining.styles.casual': 'Casual',
    ctaStats: '50+ Städte, 200+ Reiserouten, 10000+ Benutzer'
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