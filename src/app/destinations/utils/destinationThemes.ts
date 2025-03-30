import { useLanguage } from '@/contexts/LanguageContext';

export interface ThemeItem {
  id: string;
  cities: string[];
}

export interface Theme {
  id: string;
  nameZh: string;
  nameEn: string;
  nameFr: string;
  nameDe: string;
  nameEs: string;
  nameJa: string;
  nameKo: string;
  nameRu: string;
  cities: string[];
}

// 定义不同主题下的城市分类
export const destinationThemes: Theme[] = [
  {
    id: 'must-visit',
    nameZh: '经典必游',
    nameEn: 'Classic Must-Visit',
    nameFr: 'Classiques à visiter',
    nameDe: 'Klassiker zum Besuchen',
    nameEs: 'Clásicos imprescindibles',
    nameJa: '定番観光地',
    nameKo: '필수 방문지',
    nameRu: 'Классические достопримечательности',
    cities: ['beijing', 'shanghai', 'xian', 'guilin', 'hangzhou', 'chengdu']
  },
  {
    id: 'natural-scenery',
    nameZh: '自然风光',
    nameEn: 'Natural Scenery',
    nameFr: 'Paysages naturels',
    nameDe: 'Naturlandschaften',
    nameEs: 'Paisajes naturales',
    nameJa: '自然の風景',
    nameKo: '자연 경관',
    nameRu: 'Природные пейзажи',
    cities: ['huangshan', 'zhangjiajie', 'jiuzhaigou', 'guilin', 'hangzhou', 'yunnan', 'sanya']
  },
  {
    id: 'historical-sites',
    nameZh: '历史名胜',
    nameEn: 'Historical Sites',
    nameFr: 'Sites historiques',
    nameDe: 'Historische Stätten',
    nameEs: 'Sitios históricos',
    nameJa: '歴史的名所',
    nameKo: '역사 유적지',
    nameRu: 'Исторические места',
    cities: ['beijing', 'xian', 'luoyang', 'nanjing', 'kaifeng', 'pingyao', 'dunhuang']
  },
  {
    id: 'modern-cities',
    nameZh: '绚丽都市',
    nameEn: 'Modern Cities',
    nameFr: 'Villes modernes',
    nameDe: 'Moderne Städte',
    nameEs: 'Ciudades modernas',
    nameJa: '現代都市',
    nameKo: '현대 도시',
    nameRu: 'Современные города',
    cities: ['shanghai', 'beijing', 'shenzhen', 'guangzhou', 'chongqing', 'tianjin', 'suzhou']
  },
  {
    id: 'food-capitals',
    nameZh: '美食之都',
    nameEn: 'Food Capitals',
    nameFr: 'Capitales gastronomiques',
    nameDe: 'Gastronomische Hauptstädte',
    nameEs: 'Capitales gastronómicas',
    nameJa: 'グルメの都',
    nameKo: '음식의 수도',
    nameRu: 'Гастрономические столицы',
    cities: ['chengdu', 'xian', 'chongqing', 'guangzhou', 'hangzhou', 'tianjin', 'wuhan']
  },
  {
    id: 'cultural-experience',
    nameZh: '文化体验',
    nameEn: 'Cultural Experience',
    nameFr: 'Expérience culturelle',
    nameDe: 'Kulturelles Erlebnis',
    nameEs: 'Experiencia cultural',
    nameJa: '文化体験',
    nameKo: '문화 체험',
    nameRu: 'Культурный опыт',
    cities: ['beijing', 'suzhou', 'hangzhou', 'lijiang', 'lhasa', 'pingyao', 'qufu']
  },
  {
    id: 'water-towns',
    nameZh: '水乡古镇',
    nameEn: 'Water Towns',
    nameFr: 'Villes d\'eau',
    nameDe: 'Wasserstädte',
    nameEs: 'Pueblos acuáticos',
    nameJa: '水郷古鎮',
    nameKo: '수향 고진',
    nameRu: 'Водные города',
    cities: ['zhouzhuang', 'wuzhen', 'xitang', 'tongli', 'nanxun', 'zhujiajiao', 'fenghuang']
  },
  {
    id: 'silk-road',
    nameZh: '丝路风情',
    nameEn: 'Silk Road',
    nameFr: 'Route de la soie',
    nameDe: 'Seidenstraße',
    nameEs: 'Ruta de la Seda',
    nameJa: 'シルクロード',
    nameKo: '실크로드',
    nameRu: 'Шелковый путь',
    cities: ['xian', 'dunhuang', 'turpan', 'kashgar', 'urumqi', 'jiayuguan', 'lanzhou']
  }
];

// 获取主题的名称，基于当前语言
export function getThemeName(themeId: string, language: string): string {
  const theme = destinationThemes.find(theme => theme.id === themeId);
  if (!theme) return themeId;

  switch (language) {
    case 'zh': return theme.nameZh;
    case 'en': return theme.nameEn;
    case 'fr': return theme.nameFr;
    case 'de': return theme.nameDe;
    case 'es': return theme.nameEs;
    case 'ja': return theme.nameJa;
    case 'ko': return theme.nameKo;
    case 'ru': return theme.nameRu;
    default: return theme.nameEn;
  }
}

// 获取特定主题下的所有城市
export function getCitiesByTheme(themeId: string): string[] {
  const theme = destinationThemes.find(theme => theme.id === themeId);
  return theme ? theme.cities : [];
}

// 获取所有主题
export function getAllThemes(): Theme[] {
  return destinationThemes;
}

// 检查城市是否属于特定主题
export function isCityInTheme(cityId: string, themeId: string): boolean {
  const theme = destinationThemes.find(theme => theme.id === themeId);
  return theme ? theme.cities.includes(cityId) : false;
}

// 获取一个城市所属的所有主题
export function getThemesForCity(cityId: string): Theme[] {
  return destinationThemes.filter(theme => theme.cities.includes(cityId));
} 