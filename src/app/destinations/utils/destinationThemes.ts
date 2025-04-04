import { useLanguage } from '@/contexts/LanguageContext';

// 定义主题接口
export interface ThemeItem {
  id: string;
  name: {
    en: string;
    zh: string;
    fr: string;
    de: string;
    es: string;
    ja: string;
    ko: string;
    ru: string;
  };
}

// 为兼容性定义Theme类型别名
export type Theme = ThemeItem;

// 主题列表
const themes: ThemeItem[] = [
  {
    id: 'must-visit',
    name: {
      en: 'Must Visit',
      zh: '必游之地',
      fr: 'Incontournables',
      de: 'Unbedingt Besuchen',
      es: 'Imprescindibles',
      ja: '必見の場所',
      ko: '꼭 가봐야 할 곳',
      ru: 'Обязательно Посетить',
    }
  },
  {
    id: 'natural',
    name: {
      en: 'Natural Scenery',
      zh: '自然风光',
      fr: 'Paysages Naturels',
      de: 'Naturlandschaften',
      es: 'Paisajes Naturales',
      ja: '自然の景観',
      ko: '자연 경관',
      ru: 'Природные Пейзажи',
    }
  },
  {
    id: 'food',
    name: {
      en: 'Food Paradise',
      zh: '美食天堂',
      fr: 'Paradis Culinaire',
      de: 'Essensparadies',
      es: 'Paraíso Gastronómico',
      ja: 'グルメの楽園',
      ko: '음식 천국',
      ru: 'Кулинарный Рай',
    }
  },
  {
    id: 'historical',
    name: {
      en: 'Historical Sites',
      zh: '历史古迹',
      fr: 'Sites Historiques',
      de: 'Historische Stätten',
      es: 'Sitios Históricos',
      ja: '歴史的遺跡',
      ko: '역사적 유적지',
      ru: 'Исторические Места',
    }
  },
  {
    id: 'modern',
    name: {
      en: 'Modern Cityscape',
      zh: '现代都市',
      fr: 'Paysage Urbain Moderne',
      de: 'Moderne Stadtlandschaft',
      es: 'Paisaje Urbano Moderno',
      ja: '現代都市景観',
      ko: '현대 도시 경관',
      ru: 'Современный Городской Пейзаж',
    }
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

// 获取特定语言的主题名称
export function getThemeName(themeId: string, language: string = 'en'): string {
  const theme = themes.find(t => t.id === themeId);
  if (theme) {
    return theme.name[language as keyof typeof theme.name] || theme.name.en;
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
export function getCityDescription(cityId: string, language: string = 'en'): string {
  // 城市描述映射
  const cityDescriptions: Record<string, Record<string, string>> = {
    'beijing': {
      'zh': '中国首都，拥有悠久历史和现代魅力的文化中心',
      'en': 'China\'s capital, a cultural center with a long history and modern charm',
      'fr': 'Capitale de la Chine, centre culturel avec une longue histoire et un charme moderne',
      'de': 'Chinas Hauptstadt, ein Kulturzentrum mit langer Geschichte und modernem Charme',
      'es': 'Capital de China, centro cultural con una larga historia y encanto moderno',
      'ja': '中国の首都、長い歴史と現代的な魅力を持つ文化の中心',
      'ko': '중국의 수도, 오랜 역사와 현대적 매력이 있는 문화 중심지',
      'ru': 'Столица Китая, культурный центр с долгой историей и современным очарованием',
    },
    'shanghai': {
      'zh': '国际化大都市，融合东西方文化的现代化港口城市',
      'en': 'International metropolis, a modern port city blending Eastern and Western cultures',
      'fr': 'Métropole internationale, ville portuaire moderne mêlant cultures orientale et occidentale',
      'de': 'Internationale Metropole, eine moderne Hafenstadt, die östliche und westliche Kulturen verbindet',
      'es': 'Metrópolis internacional, una moderna ciudad portuaria que mezcla culturas orientales y occidentales',
      'ja': '国際的な大都市、東洋と西洋の文化が融合する現代的な港湾都市',
      'ko': '국제 대도시, 동양과 서양 문화가 어우러진 현대적인 항구 도시',
      'ru': 'Международный мегаполис, современный портовый город, сочетающий восточную и западную культуры',
    },
    'xian': {
      'zh': '古都风采，丝绸之路的起点，拥有兵马俑等世界遗产',
      'en': 'Ancient capital, starting point of the Silk Road, home to the Terracotta Warriors',
      'fr': 'Ancienne capitale, point de départ de la Route de la Soie, abrite les Guerriers de terre cuite',
      'de': 'Alte Hauptstadt, Ausgangspunkt der Seidenstraße, Heimat der Terrakotta-Armee',
      'es': 'Antigua capital, punto de partida de la Ruta de la Seda, hogar de los Guerreros de Terracota',
      'ja': '古代の都、シルクロードの起点、兵馬俑のある世界遺産',
      'ko': '고대 수도, 실크로드의 출발점, 병마용이 있는 세계 유산',
      'ru': 'Древняя столица, начальная точка Шелкового пути, дом для Терракотовой армии',
    },
    'chengdu': {
      'zh': '休闲天堂，以熊猫和美食闻名的西南城市',
      'en': 'Leisure paradise, a southwestern city known for pandas and cuisine',
      'fr': 'Paradis du loisir, ville du sud-ouest connue pour ses pandas et sa cuisine',
      'de': 'Freizeitparadies, eine südwestliche Stadt, bekannt für Pandas und Küche',
      'es': 'Paraíso de ocio, una ciudad del suroeste conocida por los pandas y la cocina',
      'ja': 'レジャーの楽園、パンダと料理で知られる中国南西部の都市',
      'ko': '여가의 천국, 판다와 요리로 유명한 중국 남서부 도시',
      'ru': 'Рай для отдыха, юго-западный город, известный пандами и кухней',
    },
    'hangzhou': {
      'zh': '人间天堂，西湖美景和茶文化的代表城市',
      'en': 'Paradise on earth, a city representing West Lake scenery and tea culture',
      'fr': 'Paradis sur terre, ville représentant les paysages du lac de l\'Ouest et la culture du thé',
      'de': 'Paradies auf Erden, eine Stadt, die die Landschaft des Westsees und die Teekultur repräsentiert',
      'es': 'Paraíso en la tierra, una ciudad que representa el paisaje del Lago Oeste y la cultura del té',
      'ja': '地上の楽園、西湖の景色と茶文化を代表する都市',
      'ko': '지상의 낙원, 서호 경치와 차 문화를 대표하는 도시',
      'ru': 'Рай на земле, город, представляющий пейзажи Западного озера и чайную культуру',
    },
    'guilin': {
      'zh': '山水甲天下，喀斯特地貌最美的代表城市',
      'en': 'Best landscape under heaven, the most beautiful representative of karst landforms',
      'fr': 'Le plus beau paysage sous le ciel, le représentant le plus beau des formes de relief karstiques',
      'de': 'Beste Landschaft unter dem Himmel, der schönste Vertreter von Karstlandformen',
      'es': 'El mejor paisaje bajo el cielo, el representante más hermoso de las formas de relieve kárstico',
      'ja': '天国で最高の風景、カルスト地形の最も美しい代表',
      'ko': '하늘 아래 최고의 풍경, 카르스트 지형의 가장 아름다운 대표',
      'ru': 'Лучший пейзаж под небом, самый красивый представитель карстовых форм рельефа',
    },
    'suzhou': {
      'zh': '园林之城，江南水乡的典型代表',
      'en': 'City of gardens, typical representative of Jiangnan water towns',
      'fr': 'Ville des jardins, représentant typique des villes d\'eau de Jiangnan',
      'de': 'Stadt der Gärten, typischer Vertreter der Wasserstädte von Jiangnan',
      'es': 'Ciudad de jardines, representante típico de las ciudades acuáticas de Jiangnan',
      'ja': '庭園の都市、江南水郷の典型的な代表',
      'ko': '정원의 도시, 강남 수향의 전형적인 대표',
      'ru': 'Город садов, типичный представитель водных городов Цзяннаня',
    },
    'nanjing': {
      'zh': '六朝古都，历史文化名城',
      'en': 'Ancient capital of six dynasties, a city with rich history and culture',
      'fr': 'Ancienne capitale de six dynasties, une ville à l\'histoire et à la culture riches',
      'de': 'Alte Hauptstadt von sechs Dynastien, eine Stadt mit reicher Geschichte und Kultur',
      'es': 'Antigua capital de seis dinastías, una ciudad con rica historia y cultura',
      'ja': '六朝の古都、歴史と文化が豊かな都市',
      'ko': '육조의 고도, 풍부한 역사와 문화를 가진 도시',
      'ru': 'Древняя столица шести династий, город с богатой историей и культурой',
    },
    'xiamen': {
      'zh': '海上花园，厦门是一座风景秀丽的海滨城市',
      'en': 'Garden on the sea, Xiamen is a beautiful coastal city',
      'fr': 'Jardin sur la mer, Xiamen est une belle ville côtière',
      'de': 'Garten am Meer, Xiamen ist eine schöne Küstenstadt',
      'es': 'Jardín en el mar, Xiamen es una hermosa ciudad costera',
      'ja': '海の上の庭園、アモイは美しい沿岸都市です',
      'ko': '바다 위의 정원, 샤먼은 아름다운 해안 도시입니다',
      'ru': 'Сад на море, Сямынь - красивый прибрежный город',
    },
    'lijiang': {
      'zh': '纳西古城，世界文化遗产，古朴而美丽的山城',
      'en': 'Naxi ancient town, a World Cultural Heritage site, a rustic and beautiful mountain city',
      'fr': 'Ancienne ville de Naxi, site du patrimoine culturel mondial, une ville de montagne rustique et magnifique',
      'de': 'Naxi alte Stadt, eine Weltkulturerbestätte, eine rustikale und schöne Bergstadt',
      'es': 'Antigua ciudad de Naxi, Patrimonio Cultural de la Humanidad, una ciudad montañosa rústica y hermosa',
      'ja': 'ナシ族の古都、世界文化遺産、素朴で美しい山岳都市',
      'ko': '나시 고대 도시, 세계 문화 유산, 소박하고 아름다운 산악 도시',
      'ru': 'Древний город Наси, объект Всемирного культурного наследия, деревенский и красивый горный город',
    },
    'guangzhou': {
      'zh': '羊城，岭南文化中心和美食天堂',
      'en': 'City of Rams, cultural center of Lingnan and food paradise',
      'fr': 'Ville des Béliers, centre culturel de Lingnan et paradis de la nourriture',
      'de': 'Stadt der Widder, kulturelles Zentrum von Lingnan und kulinarisches Paradies',
      'es': 'Ciudad de los Carneros, centro cultural de Lingnan y paraíso gastronómico',
      'ja': '羊の街、嶺南文化の中心と食の楽園',
      'ko': '양의 도시, 링난 문화의 중심지이자 음식의 천국',
      'ru': 'Город баранов, культурный центр Линнань и гастрономический рай',
    },
    'huangshan': {
      'zh': '黄山市，因黄山风景区而闻名的山水胜地',
      'en': 'Huangshan City, famous for Huangshan scenic area with stunning mountains and waters',
      'fr': 'Ville de Huangshan, célèbre pour la zone pittoresque de Huangshan avec ses montagnes et ses eaux magnifiques',
      'de': 'Stadt Huangshan, bekannt für das landschaftlich reizvolle Gebiet Huangshan mit atemberaubenden Bergen und Gewässern',
      'es': 'Ciudad de Huangshan, famosa por el área escénica de Huangshan con impresionantes montañas y aguas',
      'ja': '黄山市、素晴らしい山と水の黄山風景区で有名',
      'ko': '황산시, 멋진 산과 물이 있는 황산 경치 지역으로 유명한 곳',
      'ru': 'Город Хуаншань, известный живописным районом Хуаншань с потрясающими горами и водами',
    },
    'sanya': {
      'zh': '三亚，中国最南端的热带滨海旅游城市',
      'en': 'Sanya, China\'s southernmost tropical coastal tourism city',
      'fr': 'Sanya, ville touristique côtière tropicale la plus méridionale de Chine',
      'de': 'Sanya, Chinas südlichste tropische Küstentourismusstadt',
      'es': 'Sanya, la ciudad turística costera tropical más meridional de China',
      'ja': '三亜、中国最南端の熱帯沿岸観光都市',
      'ko': '싼야, 중국 최남단의 열대 해안 관광 도시',
      'ru': 'Санья, самый южный тропический прибрежный туристический город Китая',
    },
    'kunming': {
      'zh': '昆明，"春城"，四季如春的云南省会',
      'en': 'Kunming, "City of Eternal Spring", the capital of Yunnan Province with spring-like weather year-round',
      'fr': 'Kunming, "Ville du Printemps Éternel", la capitale de la province du Yunnan avec un climat printanier toute l\'année',
      'de': 'Kunming, "Stadt des ewigen Frühlings", die Hauptstadt der Provinz Yunnan mit frühlingshaftem Wetter das ganze Jahr über',
      'es': 'Kunming, "Ciudad de la Eterna Primavera", la capital de la provincia de Yunnan con clima primaveral durante todo el año',
      'ja': '昆明、「永遠の春の都市」、一年中春のような天気の雲南省の州都',
      'ko': '쿤밍, "영원한 봄의 도시", 사계절 내내 봄같은 날씨의 윈난성 수도',
      'ru': 'Куньмин, "Город вечной весны", столица провинции Юньнань с весенней погодой круглый год',
    },
    'shenzhen': {
      'zh': '深圳，中国改革开放的窗口，现代化创新科技之都',
      'en': 'Shenzhen, window of China\'s reform and opening up, modern city of innovation and technology',
      'fr': 'Shenzhen, fenêtre de la réforme et de l\'ouverture de la Chine, ville moderne d\'innovation et de technologie',
      'de': 'Shenzhen, Fenster für Chinas Reform und Öffnung, moderne Stadt der Innovation und Technologie',
      'es': 'Shenzhen, ventana de la reforma y apertura de China, ciudad moderna de innovación y tecnología',
      'ja': '深セン、中国の改革開放の窓口、現代的なイノベーションとテクノロジーの都市',
      'ko': '선전, 중국의 개혁 개방의 창구, 혁신과 기술의 현대 도시',
      'ru': 'Шэньчжэнь, окно реформ и открытости Китая, современный город инноваций и технологий',
    },
    'chongqing': {
      'zh': '重庆，山城火锅之都，长江与嘉陵江交汇的立体城市',
      'en': 'Chongqing, mountain city and hotpot capital, a three-dimensional city where Yangtze River meets Jialing River',
      'fr': 'Chongqing, ville de montagne et capitale du hotpot, une ville tridimensionnelle où le fleuve Yangtze rencontre la rivière Jialing',
      'de': 'Chongqing, Bergstadt und Hotpot-Hauptstadt, eine dreidimensionale Stadt, wo der Jangtse auf den Jialing-Fluss trifft',
      'es': 'Chongqing, ciudad montañosa y capital del hotpot, una ciudad tridimensional donde el río Yangtze se encuentra con el río Jialing',
      'ja': '重慶、山の街と火鍋の首都、長江と嘉陵江が交わる立体的な都市',
      'ko': '충칭, 산악 도시이자 훠궈의 수도, 양쯔강과 자링강이 만나는 3차원 도시',
      'ru': 'Чунцин, горный город и столица хотпота, трехмерный город, где река Янцзы встречается с рекой Цзялин',
    },
    'harbin': {
      'zh': '哈尔滨，冰雪之都，东方小巴黎，中俄文化交融的北方城市',
      'en': 'Harbin, city of ice and snow, "Oriental Paris", a northern city with Chinese and Russian cultural fusion',
      'fr': 'Harbin, ville de glace et de neige, "Paris orientale", une ville du nord avec une fusion culturelle chinoise et russe',
      'de': 'Harbin, Stadt aus Eis und Schnee, "Paris des Ostens", eine nördliche Stadt mit chinesisch-russischer Kulturfusion',
      'es': 'Harbin, ciudad de hielo y nieve, "París Oriental", una ciudad del norte con fusión cultural china y rusa',
      'ja': 'ハルビン、氷と雪の街、「東洋のパリ」、中国とロシアの文化が融合する北方都市',
      'ko': '하얼빈, 얼음과 눈의 도시, "동양의 파리", 중국과 러시아 문화가 융합된 북방 도시',
      'ru': 'Харбин, город льда и снега, "Восточный Париж", северный город с китайско-русским культурным слиянием',
    },
    'dali': {
      'zh': '大理，风花雪月之地，白族文化与苍山洱海的自然美景',
      'en': 'Dali, land of wind, flowers, snow and moon, natural beauty of Bai culture, Cangshan Mountain and Erhai Lake',
      'fr': 'Dali, terre de vent, de fleurs, de neige et de lune, beauté naturelle de la culture Bai, montagne Cangshan et lac Erhai',
      'de': 'Dali, Land des Windes, der Blumen, des Schnees und des Mondes, natürliche Schönheit der Bai-Kultur, des Cangshan-Berges und des Erhai-Sees',
      'es': 'Dali, tierra de viento, flores, nieve y luna, belleza natural de la cultura Bai, montaña Cangshan y lago Erhai',
      'ja': '大理、風、花、雪、月の地、白族の文化と蒼山と洱海の自然の美しさ',
      'ko': '다리, 바람, 꽃, 눈과 달의 땅, 바이족 문화와 창산 산맥 및 얼하이 호수의 자연미',
      'ru': 'Дали, земля ветра, цветов, снега и луны, природная красота культуры Бай, горы Цаншань и озера Эрхай',
    },
    'zhuhai': {
      'zh': '珠海，浪漫海滨城市，珠江口西岸的花园式海滨城市',
      'en': 'Zhuhai, romantic coastal city, garden-style coastal city on the west bank of the Pearl River estuary',
      'fr': 'Zhuhai, ville côtière romantique, ville côtière de style jardin sur la rive ouest de l\'estuaire de la rivière des Perles',
      'de': 'Zhuhai, romantische Küstenstadt, gartenartige Küstenstadt am Westufer des Perlflusses',
      'es': 'Zhuhai, ciudad costera romántica, ciudad costera con estilo de jardín en la orilla oeste del estuario del río Perla',
      'ja': '珠海、ロマンチックな海岸都市、珠江河口の西岸にある庭園スタイルの海岸都市',
      'ko': '주하이, 로맨틱한 해안 도시, 주강 하구의 서쪽 해안에 위치한 정원 스타일의 해안 도시',
      'ru': 'Чжухай, романтический прибрежный город, прибрежный город в стиле сада на западном берегу устья Жемчужной реки',
    },
    'qingdao': {
      'zh': '青岛，红瓦绿树碧海蓝天的啤酒之都，山海城相映成趣的海滨城市',
      'en': 'Qingdao, beer capital with red tiles, green trees, blue sea and sky, a coastal city where mountains, ocean, and urban areas create beautiful harmony',
      'fr': 'Qingdao, capitale de la bière avec des tuiles rouges, des arbres verts, une mer bleue et un ciel, une ville côtière où les montagnes, l\'océan et les zones urbaines créent une belle harmonie',
      'de': 'Qingdao, Bierhauptstadt mit roten Ziegeln, grünen Bäumen, blauem Meer und Himmel, eine Küstenstadt, in der Berge, Ozean und urbane Gebiete eine schöne Harmonie schaffen',
      'es': 'Qingdao, capital de la cerveza con tejas rojas, árboles verdes, mar azul y cielo, una ciudad costera donde las montañas, el océano y las áreas urbanas crean una hermosa armonía',
      'ja': '青島、赤い屋根瓦、緑の木々、青い海と空のビールの首都、山、海、都市部が美しい調和を生み出す海岸都市',
      'ko': '칭다오, 붉은 기와, 푸른 나무, 파란 바다와 하늘이 있는 맥주의 수도, 산, 바다, 도시 지역이 아름다운 조화를 이루는 해안 도시',
      'ru': 'Циндао, пивная столица с красной черепицей, зелеными деревьями, синим морем и небом, прибрежный город, где горы, океан и городские районы создают прекрасную гармонию',
    },
    'wuhan': {
      'zh': '武汉，长江中游重镇，九省通衢的历史文化名城',
      'en': 'Wuhan, major city in the middle reaches of the Yangtze River, historical and cultural city connecting nine provinces',
      'fr': 'Wuhan, grande ville du cours moyen du fleuve Yangtze, ville historique et culturelle reliant neuf provinces',
      'de': 'Wuhan, Großstadt im mittleren Lauf des Jangtse, historische und kulturelle Stadt, die neun Provinzen verbindet',
      'es': 'Wuhan, ciudad importante en el curso medio del río Yangtze, ciudad histórica y cultural que conecta nueve provincias',
      'ja': '武漢、長江中流域の主要都市、九つの省をつなぐ歴史文化都市',
      'ko': '우한, 양쯔강 중류의 주요 도시, 9개 성을 연결하는 역사 문화 도시',
      'ru': 'Ухань, крупный город в среднем течении реки Янцзы, исторический и культурный город, соединяющий девять провинций',
    },
    'changsha': {
      'zh': '长沙，湖南省会，辣味文化和娱乐之都',
      'en': 'Changsha, capital of Hunan Province, city of spicy culture and entertainment',
      'fr': 'Changsha, capitale de la province du Hunan, ville de la culture épicée et du divertissement',
      'de': 'Changsha, Hauptstadt der Provinz Hunan, Stadt der würzigen Kultur und Unterhaltung',
      'es': 'Changsha, capital de la provincia de Hunan, ciudad de cultura picante y entretenimiento',
      'ja': '長沙、湖南省の州都、スパイシーな文化とエンターテイメントの街',
      'ko': '창사, 후난성의 수도, 매운 문화와 엔터테인먼트의 도시',
      'ru': 'Чанша, столица провинции Хунань, город острой культуры и развлечений',
    }
  };
  
  return cityDescriptions[cityId]?.[language] || cityDescriptions[cityId]?.['en'] || '';
} 