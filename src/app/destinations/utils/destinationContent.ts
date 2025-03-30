import { Language } from '@/contexts/LanguageContext';

// 定义内容的结构类型
export interface DestinationSection {
  title: string;
  content: React.ReactNode;
}

export interface DestinationContent {
  title: string;
  subtitle: string;
  sections: DestinationSection[];
}

// 北京的多语言内容
const beijingContent: Record<Language, DestinationContent> = {
  zh: {
    title: '北京：千年帝都的古今交响',
    subtitle: '探索中国首都的皇家风韵与现代魅力',
    sections: [
      {
        title: '开篇印象',
        content: `
          <p>
            雄伟的紫禁城金瓦闪耀，蜿蜒的长城盘踞群山，胡同里传来三轮车的铃声，CBD的玻璃幕墙映照晚霞...这里是北京，一座融合了古老与现代、传统与创新的城市。作为拥有三千年建城史、八百多年建都史的古都，北京承载着中华文明的精髓，也展现着现代中国的勃勃生机。
          </p>
          
          <h3>最具代表性特色：</h3>
          <ul>
            <li>世界最大的皇家宫殿建筑群——紫禁城</li>
            <li>人类历史上最伟大的建筑工程——万里长城</li>
            <li>独具特色的四合院胡同文化</li>
            <li>现代化国际大都市的繁华与活力</li>
          </ul>
        `
      },
      {
        title: '基本信息速览',
        content: `
          <h3>最佳游览季节</h3>
          <ul>
            <li>春季（3-5月）：气温宜人，花开成海</li>
            <li>秋季（9-10月）：天高气爽，红叶似火</li>
          </ul>
          
          <h3>气候特点</h3>
          <ul>
            <li>春季：温暖舒适，偶有沙尘</li>
            <li>夏季：炎热多雨</li>
            <li>秋季：凉爽干燥</li>
            <li>冬季：寒冷干燥</li>
          </ul>
        `
      },
      {
        title: '必游景点',
        content: `
          <h3>皇家宫殿与园林</h3>
          
          <h4>1. 故宫博物院（紫禁城）</h4>
          <p>
            世界上最大的宫殿建筑群，明清24位皇帝的居所。占地72万平方米，建筑群金碧辉煌，气势恢宏。太和殿是中国最大的木结构建筑，象征着皇权的至高点。
          </p>
          
          <h4>2. 颐和园</h4>
          <p>
            世界上规模最大、保存最完整的皇家园林，慈禧太后的避暑胜地。昆明湖碧波荡漾，占地约占颐和园的四分之三。长廊是世界上最长的彩绘长廊，每一格都是一幅画。
          </p>
        `
      }
    ]
  },
  en: {
    title: 'Beijing: Ancient Capital\'s Symphony of Past and Present',
    subtitle: 'Explore the Royal Charm and Modern Appeal of China\'s Capital',
    sections: [
      {
        title: 'First Impressions',
        content: `
          <p>
            The magnificent Forbidden City with gleaming golden roof tiles, the Great Wall winding through mountains, the sound of tricycle bells in hutongs, the glass curtain walls of the CBD reflecting the sunset... This is Beijing, a city that blends ancient and modern, tradition and innovation. With 3,000 years of urban history and 800 years as a capital, Beijing carries the essence of Chinese civilization while showcasing the vibrant energy of modern China.
          </p>
          
          <h3>Most Representative Features:</h3>
          <ul>
            <li>The world's largest royal palace complex - The Forbidden City</li>
            <li>One of humanity's greatest engineering projects - The Great Wall</li>
            <li>The distinctive courtyard houses and hutong culture</li>
            <li>The prosperity and vitality of a modern international metropolis</li>
          </ul>
        `
      },
      {
        title: 'Basic Information Overview',
        content: `
          <h3>Best Seasons to Visit</h3>
          <ul>
            <li>Spring (March-May): Pleasant temperatures, flowers in bloom</li>
            <li>Autumn (September-October): Clear skies, comfortable weather, red leaves</li>
          </ul>
          
          <h3>Climate Characteristics</h3>
          <ul>
            <li>Spring: Warm and comfortable, occasional sandstorms</li>
            <li>Summer: Hot and rainy</li>
            <li>Autumn: Cool and dry</li>
            <li>Winter: Cold and dry</li>
          </ul>
        `
      },
      {
        title: 'Must-Visit Attractions',
        content: `
          <h3>Royal Palaces and Gardens</h3>
          
          <h4>1. The Palace Museum (Forbidden City)</h4>
          <p>
            The world's largest palace complex, home to 24 emperors of the Ming and Qing dynasties. Covering 720,000 square meters, the buildings are magnificent and overwhelming. The Hall of Supreme Harmony is China's largest wooden structure, symbolizing the pinnacle of imperial power.
          </p>
          
          <h4>2. Summer Palace</h4>
          <p>
            The world's largest and most well-preserved royal garden, Empress Dowager Cixi's summer retreat. The shimmering Kunming Lake occupies about three-quarters of the Summer Palace's area. The Long Corridor is the world's longest painted corridor, with each section featuring a unique painting.
          </p>
        `
      }
    ]
  },
  fr: {
    title: 'Pékin: Symphonie de l\'ancien et du moderne',
    subtitle: 'Explorez le charme royal et l\'attrait moderne de la capitale chinoise',
    sections: [
      {
        title: 'Premières impressions',
        content: `
          <p>
            La magnifique Cité Interdite aux tuiles dorées étincelantes, la Grande Muraille serpentant à travers les montagnes, le son des cloches de tricycle dans les hutongs, les murs-rideaux en verre du CBD reflétant le coucher du soleil... C'est Pékin, une ville qui mélange l'ancien et le moderne, la tradition et l'innovation. Avec 3000 ans d'histoire urbaine et 800 ans comme capitale, Pékin porte l'essence de la civilisation chinoise tout en montrant l'énergie vibrante de la Chine moderne.
          </p>
          
          <h3>Caractéristiques les plus représentatives:</h3>
          <ul>
            <li>Le plus grand complexe de palais royal au monde - La Cité Interdite</li>
            <li>L'un des plus grands projets d'ingénierie de l'humanité - La Grande Muraille</li>
            <li>Les maisons à cour distinctive et la culture des hutongs</li>
            <li>La prospérité et la vitalité d'une métropole internationale moderne</li>
          </ul>
        `
      },
      {
        title: 'Aperçu des informations de base',
        content: `
          <h3>Meilleures saisons pour visiter</h3>
          <ul>
            <li>Printemps (mars-mai): Températures agréables, fleurs en fleur</li>
            <li>Automne (septembre-octobre): Ciel clair, temps confortable, feuilles rouges</li>
          </ul>
          
          <h3>Caractéristiques climatiques</h3>
          <ul>
            <li>Printemps: Chaud et confortable, tempêtes de sable occasionnelles</li>
            <li>Été: Chaud et pluvieux</li>
            <li>Automne: Frais et sec</li>
            <li>Hiver: Froid et sec</li>
          </ul>
        `
      }
    ]
  },
  de: {
    title: 'Peking: Symphonie aus Vergangenheit und Gegenwart',
    subtitle: 'Entdecken Sie den königlichen Charme und die moderne Anziehungskraft der chinesischen Hauptstadt',
    sections: []
  },
  es: {
    title: 'Pekín: Sinfonía de lo antiguo y lo moderno',
    subtitle: 'Explore el encanto real y el atractivo moderno de la capital de China',
    sections: []
  },
  ja: {
    title: '北京：古都の古今交響曲',
    subtitle: '中国の首都の王室の魅力と現代の魅力を探る',
    sections: []
  },
  ko: {
    title: '베이징: 고대 수도의 과거와 현재의 교향곡',
    subtitle: '중국 수도의 왕실 매력과 현대적 매력 탐험',
    sections: []
  },
  ru: {
    title: 'Пекин: симфония древнего и современного',
    subtitle: 'Исследуйте королевское очарование и современную привлекательность столицы Китая',
    sections: []
  }
};

// 上海的多语言内容
const shanghaiContent: Record<Language, DestinationContent> = {
  zh: {
    title: '上海：东方明珠的魅力',
    subtitle: '现代与传统交融的国际化大都市',
    sections: [
      {
        title: '城市概览',
        content: `
          <p>
            上海是中国最大的经济中心城市，这里有外滩的万国建筑博览，陆家嘴的现代摩天大楼，也有豫园的传统园林和老城厢的市井生活。作为中国改革开放的窗口，上海展现了中国现代化发展的成就。
          </p>
        `
      }
    ]
  },
  en: {
    title: 'Shanghai: The Charm of the Oriental Pearl',
    subtitle: 'An international metropolis where modern and traditional cultures blend',
    sections: [
      {
        title: 'City Overview',
        content: `
          <p>
            Shanghai is China's largest economic center, featuring the international architectural exposition on the Bund, modern skyscrapers in Lujiazui, traditional gardens of Yu Garden, and old town life. As a window of China's reform and opening up, Shanghai showcases the achievements of China's modernization.
          </p>
        `
      }
    ]
  },
  fr: {
    title: 'Shanghai: Le charme de la perle de l\'Orient',
    subtitle: 'Une métropole internationale où se mêlent cultures moderne et traditionnelle',
    sections: []
  },
  de: {
    title: 'Shanghai: Der Charme der orientalischen Perle',
    subtitle: 'Eine internationale Metropole, in der moderne und traditionelle Kulturen verschmelzen',
    sections: []
  },
  es: {
    title: 'Shanghai: El encanto de la Perla de Oriente',
    subtitle: 'Una metrópolis internacional donde se mezclan las culturas moderna y tradicional',
    sections: []
  },
  ja: {
    title: '上海：東洋の真珠の魅力',
    subtitle: '現代と伝統文化が融合する国際都市',
    sections: []
  },
  ko: {
    title: '상하이: 동방명주의 매력',
    subtitle: '현대와 전통문화가 어우러지는 국제 대도시',
    sections: []
  },
  ru: {
    title: 'Шанхай: Очарование восточной жемчужины',
    subtitle: 'Международный мегаполис, где сочетаются современная и традиционная культуры',
    sections: []
  }
};

// 汇总所有目的地的内容
export const destinationContents: Record<string, Record<Language, DestinationContent>> = {
  beijing: beijingContent,
  shanghai: shanghaiContent,
  // 可以继续添加其他城市
};

// 获取特定目的地和语言的内容
export function getDestinationContent(destination: string, language: Language): DestinationContent {
  // 如果没有该目的地或该语言的内容，返回英文或默认内容
  if (!destinationContents[destination]) {
    return {
      title: destination.charAt(0).toUpperCase() + destination.slice(1),
      subtitle: 'Discover this amazing destination',
      sections: []
    };
  }
  
  // 如果该语言没有内容，返回英文内容
  if (!destinationContents[destination][language]) {
    return destinationContents[destination]['en'] || {
      title: destination.charAt(0).toUpperCase() + destination.slice(1),
      subtitle: 'Discover this amazing destination',
      sections: []
    };
  }
  
  return destinationContents[destination][language];
} 