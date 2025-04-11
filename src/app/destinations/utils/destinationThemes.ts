// 定义主题接口
export interface ThemeItem {
  id: string;
  name: string;
}

// 为兼容性定义Theme类型别名
export type Theme = ThemeItem;

// 主题列表
const themes: ThemeItem[] = [
  {
    id: 'must-visit',
    name: 'Must Visit'
  },
  {
    id: 'natural',
    name: 'Natural Scenery'
  },
  {
    id: 'food',
    name: 'Food Paradise'
  },
  {
    id: 'historical',
    name: 'Historical Sites'
  },
  {
    id: 'modern',
    name: 'Modern Cityscape'
  }
];

// 城市所属主题映射
const cityThemes: Record<string, string[]> = {
  'beijing': ['must-visit', 'historical', 'food'],
  'shanghai': ['must-visit', 'modern', 'food'],
  'xian': ['must-visit', 'historical', 'food'],
  'chengdu': ['must-visit', 'food', 'natural'],
  'hangzhou': ['must-visit', 'natural', 'food'],
  'suzhou': ['natural', 'historical'],
  'guangzhou': ['modern', 'food'],
  'guilin': ['natural', 'must-visit'],
  'huangshan': ['natural', 'must-visit'],
  'sanya': ['natural', 'must-visit'],
  'lijiang': ['natural', 'historical'],
  'kunming': ['natural'],
  'nanjing': ['historical'],
  'xiamen': ['natural', 'food', 'modern'],
  'shenzhen': ['modern', 'must-visit'],
  'chongqing': ['food', 'must-visit', 'natural'],
  'harbin': ['natural', 'must-visit'],
  'dali': ['natural', 'historical'],
  'zhuhai': ['natural', 'modern'],
  'qingdao': ['natural', 'food', 'modern'],
  'wuhan': ['historical', 'modern'],
  'changsha': ['food', 'modern']
};

// 获取所有主题
export function getAllThemes(): ThemeItem[] {
  return themes;
}

// 获取所有主题 (别名，兼容新的函数名)
export function getThemes(): ThemeItem[] {
  return themes;
}

// 获取主题名称
export function getThemeName(themeId: string): string {
  const theme = themes.find(t => t.id === themeId);
  if (theme) {
    return theme.name;
  }
  return themeId;
}

// 根据主题ID获取城市列表
export function getCitiesByTheme(themeId: string): string[] {
  // 根据主题ID过滤城市
  return Object.entries(cityThemes)
    .filter(([_, themes]) => themes.includes(themeId))
    .map(([city, _]) => city);
}

// 检查一个城市是否属于指定主题
export function isCityInTheme(cityId: string, themeId: string): boolean {
  return cityThemes[cityId]?.includes(themeId) || false;
}

// 获取城市所属的主题
export function getThemesForCity(cityId: string): ThemeItem[] {
  const cityThemeIds = cityThemes[cityId] || [];
  return themes.filter(theme => cityThemeIds.includes(theme.id));
}

// 获取城市图片URL
export function getCityImageUrl(cityId: string): string {
  // 这里可以根据实际情况返回城市图片的URL
  // 示例：可以从公共文件夹或CDN获取图片
  const defaultImages: Record<string, string> = {
    'beijing': '/images/destinations/beijing.jpg',
    'shanghai': '/images/destinations/shanghai.jpg',
    'xian': '/images/destinations/xian.jpg',
    'chengdu': '/images/destinations/chengdu.jpg',
    'hangzhou': '/images/destinations/hangzhou.jpg',
    'suzhou': '/images/destinations/suzhou.jpg',
    'guangzhou': '/images/destinations/guangzhou.jpg',
    'guilin': '/images/destinations/guilin.jpg',
    'huangshan': '/images/destinations/huangshan.jpg',
    'sanya': '/images/destinations/sanya.jpg',
    'lijiang': '/images/destinations/lijiang.jpg',
    'kunming': '/images/destinations/kunming.jpg',
    'nanjing': '/images/destinations/nanjing.jpg',
    'xiamen': '/images/destinations/xiamen.jpg',
    'shenzhen': '/images/destinations/shenzhen.jpg',
    'chongqing': '/images/destinations/chongqing.jpg',
    'harbin': '/images/destinations/harbin.jpg',
    'dali': '/images/destinations/dali.jpg',
    'zhuhai': '/images/destinations/zhuhai.jpg',
    'qingdao': '/images/destinations/qingdao.jpg',
    'wuhan': '/images/destinations/wuhan.jpg',
    'changsha': '/images/destinations/changsha.jpg'
  };
  
  return defaultImages[cityId] || '';
}

// 获取城市描述
export function getCityDescription(cityId: string): string {
  // 城市描述映射
  const cityDescriptions: Record<string, string> = {
    'beijing': 'China\'s capital, a cultural center with a long history and modern charm',
    'shanghai': 'International metropolis, a modern port city blending Eastern and Western cultures',
    'xian': 'Ancient capital, starting point of the Silk Road, home to the Terracotta Warriors',
    'chengdu': 'Leisure paradise, a southwestern city known for pandas and cuisine',
    'hangzhou': 'Paradise on earth, a city representing West Lake scenery and tea culture',
    'guilin': 'Best landscape under heaven, the most beautiful representative of karst landforms',
    'suzhou': 'Garden city, famous for its classical Chinese gardens and silk production',
    'guangzhou': 'Southern gateway, known for Cantonese cuisine and international trade',
    'huangshan': 'Magical mountain, with uniquely shaped granite peaks often shrouded in mist',
    'sanya': 'Tropical paradise, China\'s southernmost city with beautiful beaches',
    'lijiang': 'Ancient town, with well-preserved old town featuring Naxi ethnic culture',
    'kunming': 'City of eternal spring, capital of Yunnan with year-round pleasant climate',
    'nanjing': 'Ancient capital, rich in historical sites and cultural heritage',
    'xiamen': 'Garden on the sea, a beautiful coastal city with colonial history',
    'shenzhen': 'Innovation hub, transformed from a fishing village to a technology center',
    'chongqing': 'Mountain city, famous for hot pot and stunning mountain-river scenery',
    'harbin': 'Ice city, renowned for its winter ice festival and Russian influences',
    'dali': 'Cultural mix, featuring Bai ethnic culture and beautiful Erhai Lake',
    'zhuhai': 'Coastal garden, one of China\'s first special economic zones',
    'qingdao': 'Coastal beauty, known for European architecture, beaches, and beer',
    'wuhan': 'River city, important transportation hub at the intersection of the Yangtze River',
    'changsha': 'Entertainment capital, vibrant city known for food and media industry'
  };
  
  return cityDescriptions[cityId] || 'A beautiful destination in China';
}

// 获取城市名称
export function getCityName(cityId: string): string {
  // 英文城市名称映射
  const cityNames: Record<string, string> = {
    'beijing': 'Beijing',
    'shanghai': 'Shanghai',
    'xian': 'Xi\'an',
    'chengdu': 'Chengdu',
    'hangzhou': 'Hangzhou',
    'guilin': 'Guilin',
    'suzhou': 'Suzhou',
    'guangzhou': 'Guangzhou',
    'huangshan': 'Huangshan',
    'sanya': 'Sanya',
    'lijiang': 'Lijiang',
    'kunming': 'Kunming',
    'nanjing': 'Nanjing',
    'xiamen': 'Xiamen',
    'shenzhen': 'Shenzhen',
    'chongqing': 'Chongqing',
    'harbin': 'Harbin',
    'dali': 'Dali',
    'zhuhai': 'Zhuhai',
    'qingdao': 'Qingdao',
    'wuhan': 'Wuhan',
    'changsha': 'Changsha'
  };
  
  return cityNames[cityId] || cityId;
} 