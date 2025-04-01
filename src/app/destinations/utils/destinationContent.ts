import React from 'react';
import { ReactNode } from 'react';
import { Language } from '@/contexts/LanguageContext';

// 定义内容的结构类型
export interface DestinationSection {
  title: string;
  content: ReactNode;
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
    title: '北京：古代の都の過去と現在の交響曲',
    subtitle: '中国の首都の王室の魅力と現代の魅力を探る',
    sections: [
      {
        title: '第一印象',
        content: `
          <p>
            金色の屋根瓦が輝く壮大な紫禁城、山々を縫うように続く万里の長城、胡同で聞こえる三輪車の鈴の音、夕日を映すCBDのガラスのカーテンウォール...これが北京です。古代と現代、伝統と革新が融合する都市です。3,000年の都市の歴史と800年の首都としての歴史を持つ北京は、中国文明の精髓を担いながら、現代中国の活気あるエネルギーを示しています。
          </p>
          
          <h3>最も代表的な特徴：</h3>
          <ul>
            <li>世界最大の王宮複合施設 - 紫禁城（故宮）</li>
            <li>人類最大の工学プロジェクトの一つ - 万里の長城</li>
            <li>独特の四合院と胡同文化</li>
            <li>現代国際都市の繁栄と活力</li>
          </ul>
        `
      },
      {
        title: '基本情報の概要',
        content: `
          <h3>訪問に最適な季節</h3>
          <ul>
            <li>春（3月〜5月）：快適な気温、花が咲き誇る</li>
            <li>秋（9月〜10月）：晴れた空、心地よい天気、紅葉</li>
          </ul>
          
          <h3>気候の特徴</h3>
          <ul>
            <li>春：暖かく快適、時折砂嵐</li>
            <li>夏：暑く雨が多い</li>
            <li>秋：涼しく乾燥</li>
            <li>冬：寒く乾燥</li>
          </ul>
        `
      },
      {
        title: '必見の観光スポット',
        content: `
          <h3>王宮と庭園</h3>
          
          <h4>1. 故宮博物院（紫禁城）</h4>
          <p>
            世界最大の宮殿複合施設で、明・清朝の24人の皇帝の住居。720,000平方メートルを占め、建物は壮大で圧巻です。太和殿は中国最大の木造建築物で、皇帝権力の頂点を象徴しています。
          </p>
          
          <h4>2. 頤和園</h4>
          <p>
            世界最大かつ最もよく保存された王立庭園で、西太后の夏の避暑地。きらめく昆明湖は頤和園の面積の約4分の3を占めています。長廊は世界最長の彩色回廊で、各セクションにユニークな絵画が描かれています。
          </p>
        `
      }
    ]
  },
  ko: {
    title: '베이징: 고대 수도의 과거와 현재의 교향곡',
    subtitle: '중국 수도의 왕실 매력과 현대적 매력 탐험',
    sections: [
      {
        title: '첫인상',
        content: `
          <p>
            금빛 지붕 타일이 빛나는 웅장한 자금성, 산을 따라 구불구불 이어지는 만리장성, 후통에서 들리는 삼륜차 벨 소리, 일몰을 반사하는 CBD의 유리 커튼월... 이것이 베이징입니다. 고대와 현대, 전통과 혁신이 어우러진 도시입니다. 3,000년의 도시 역사와 800년의 수도 역사를 가진 베이징은 중국 문명의 정수를 담으면서도 현대 중국의 활기찬 에너지를 보여줍니다.
          </p>
          
          <h3>가장 대표적인 특징:</h3>
          <ul>
            <li>세계 최대의 왕궁 단지 - 자금성</li>
            <li>인류 최대의 공학 프로젝트 중 하나 - 만리장성</li>
            <li>독특한 사합원과 후통 문화</li>
            <li>현대 국제 대도시의 번영과 활력</li>
          </ul>
        `
      },
      {
        title: '기본 정보 개요',
        content: `
          <h3>방문하기 좋은 계절</h3>
          <ul>
            <li>봄(3월-5월): 쾌적한 기온, 꽃이 만발함</li>
            <li>가을(9월-10월): 맑은 하늘, 편안한 날씨, 붉은 단풍</li>
          </ul>
          
          <h3>기후 특성</h3>
          <ul>
            <li>봄: 따뜻하고 쾌적, 가끔 모래 폭풍</li>
            <li>여름: 덥고 비가 많음</li>
            <li>가을: 시원하고 건조함</li>
            <li>겨울: 춥고 건조함</li>
          </ul>
        `
      }
    ]
  },
  ru: {
    title: 'Пекин: симфония древнего и современного',
    subtitle: 'Исследуйте королевское очарование и современную привлекательность столицы Китая',
    sections: [
      {
        title: 'Первые впечатления',
        content: `
          <p>
            Великолепный Запретный город с блестящими золотыми крышами, Великая стена, извивающаяся по горам, звуки велорикш в хутонгах, стеклянные фасады делового центра, отражающие закат... Это Пекин, город, сочетающий древнее и современное, традицию и инновации. С 3000-летней историей города и 800-летней историей столицы, Пекин несет в себе сущность китайской цивилизации, демонстрируя при этом энергию современного Китая.
          </p>
          
          <h3>Наиболее характерные особенности:</h3>
          <ul>
            <li>Крупнейший в мире дворцовый комплекс - Запретный город</li>
            <li>Один из величайших инженерных проектов человечества - Великая стена</li>
            <li>Характерные дворы-усадьбы и культура хутонгов</li>
            <li>Процветание и энергия современного международного мегаполиса</li>
          </ul>
        `
      },
      {
        title: 'Обзор основной информации',
        content: `
          <h3>Лучшие сезоны для посещения</h3>
          <ul>
            <li>Весна (март-май): Приятная температура, цветущие цветы</li>
            <li>Осень (сентябрь-октябрь): Ясное небо, комфортная погода, красные листья</li>
          </ul>
          
          <h3>Климатические особенности</h3>
          <ul>
            <li>Весна: Тепло и комфортно, иногда песчаные бури</li>
            <li>Лето: Жарко и дождливо</li>
            <li>Осень: Прохладно и сухо</li>
            <li>Зима: Холодно и сухо</li>
          </ul>
        `
      }
    ]
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
      },
      {
        title: '必游景点',
        content: `
          <h3>1. 外滩</h3>
          <p>
            外滩是上海的标志性景点，沿黄浦江一侧矗立着52幢风格迥异的万国建筑，被誉为"万国建筑博览会"，这些建筑大多建于19世纪末20世纪初，展示了上海曾经的国际大都市地位。
          </p>
          
          <h3>2. 豫园</h3>
          <p>
            豫园是上海市中心一个著名的古典园林，始建于明代嘉靖年间。园内亭台楼阁、假山池塘，体现了江南园林"虽由人作，宛自天开"的特色。
          </p>
          
          <h3>3. 陆家嘴金融区</h3>
          <p>
            陆家嘴金融区是上海的现代地标区域，这里聚集了上海中心大厦、金茂大厦、环球金融中心等摩天大楼，特别是上海中心大厦，高632米，是中国第一高楼。
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
      },
      {
        title: 'Must-Visit Attractions',
        content: `
          <h3>1. The Bund</h3>
          <p>
            The Bund is Shanghai's iconic landmark, with 52 buildings of various styles along the Huangpu River, known as the "Exhibition of International Architecture." Most of these buildings were built in the late 19th and early 20th centuries, showcasing Shanghai's former status as an international metropolis.
          </p>
          
          <h3>2. Yu Garden</h3>
          <p>
            Yu Garden is a famous classical garden in the center of Shanghai, built during the Ming Dynasty's Jiajing era. The garden features pavilions, artificial hills, and ponds, embodying the characteristic of Jiangnan gardens: "though man-made, it appears natural."
          </p>
          
          <h3>3. Lujiazui Financial District</h3>
          <p>
            Lujiazui Financial District is Shanghai's modern landmark area, gathering skyscrapers such as Shanghai Tower, Jin Mao Tower, and Shanghai World Financial Center. Notably, Shanghai Tower, standing at 632 meters, is China's tallest building.
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
    subtitle: '現代と伝統が融合する国際都市',
    sections: [
      {
        title: '都市の概要',
        content: `
          <p>
            上海は中国最大の経済センターであり、外灘の国際建築博覧会、陸家嘴の現代的な超高層ビル、豫園の伝統的な庭園、旧市街の生活を特徴としています。中国の改革開放の窓口として、上海は中国の現代化の成果を示しています。
          </p>
        `
      },
      {
        title: '必見の観光スポット',
        content: `
          <h3>1. 外灘（ワイタン）</h3>
          <p>
            外灘は上海の象徴的なランドマークで、黄浦江に沿って52棟の様々なスタイルの建物が立ち並び、「国際建築博覧会」として知られています。これらの建物のほとんどは19世紀末から20世紀初頭に建てられ、上海の国際都市としての地位を示しています。
          </p>
          
          <h3>2. 豫園（ユーユェン）</h3>
          <p>
            豫園は上海市中心部にある有名な古典的庭園で、明朝の嘉靖年間に建てられました。園内には亭、築山、池があり、江南庭園の特色である「人工でありながら自然に見える」という特徴を体現しています。
          </p>
          
          <h3>3. 陸家嘴金融地区（ルジャズイ）</h3>
          <p>
            陸家嘴金融地区は上海の現代的なランドマークエリアで、上海タワー、金茂タワー、上海環球金融中心などの超高層ビルが集まっています。特に上海タワーは632メートルの高さを誇り、中国一の高層ビルです。
          </p>
        `
      }
    ]
  },
  ko: {
    title: '상하이: 동방명주의 매력',
    subtitle: '현대와 전통문화가 어우러지는 국제 대도시',
    sections: [
      {
        title: '도시 개요',
        content: `
          <p>
            상하이는 중국 최대의 경제 중심지로, 외탄의 국제 건축 전시회, 루자쭈이의 현대적인 고층 빌딩, 예원의 전통 정원, 그리고 구시가지의 생활을 특징으로 합니다. 중국의 개혁 개방의 창구로서, 상하이는 중국 현대화의 성과를 보여줍니다.
          </p>
        `
      },
      {
        title: '필수 관광지',
        content: `
          <h3>1. 외탄(와이탄)</h3>
          <p>
            외탄은 상하이의 상징적인 명소로, 황푸강을 따라 52개의 다양한 스타일의 건물이 서 있으며, "국제 건축 전시회"로 알려져 있습니다. 이 건물들의 대부분은 19세기 말과 20세기 초에 지어졌으며, 상하이의 국제 대도시로서의 위상을 보여줍니다.
          </p>
          
          <h3>2. 예원(위위안)</h3>
          <p>
            예원은 상하이 중심부에 위치한 유명한 고전 정원으로, 명나라 가정 시대에 건설되었습니다. 정원에는 정자, 인공 언덕, 연못이 있어 강남 정원의 특징인 "인공이지만 자연스러워 보인다"는 특징을 구현하고 있습니다.
          </p>
          
          <h3>3. 루자쭈이 금융지구</h3>
          <p>
            루자쭈이 금융지구는 상하이의 현대적인 랜드마크 지역으로, 상하이 타워, 진마오 타워, 상하이 월드 파이낸셜 센터와 같은 고층 건물이 모여 있습니다. 특히 상하이 타워는 632미터 높이로 중국에서 가장 높은 건물입니다.
          </p>
        `
      }
    ]
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
export function getDestinationContent(cityId: string, language: Language): DestinationContent {
  // 根据城市ID获取相应的内容
  let cityContent: Record<Language, DestinationContent> | undefined;
  
  switch(cityId) {
    case 'beijing':
      cityContent = beijingContent;
      break;
    case 'shanghai':
      cityContent = shanghaiContent;
      break;
    // 可以添加其他城市...
    default:
      // 默认返回空对象
      return {
        title: cityId.charAt(0).toUpperCase() + cityId.slice(1),
        subtitle: '',
        sections: []
      };
  }
  
  // 如果请求的语言内容是空的（sections长度为0），则使用英文内容
  if (cityContent && cityContent[language] && cityContent[language].sections.length === 0) {
    return {
      ...cityContent[language],
      sections: cityContent['en'].sections
    };
  }
  
  // 返回请求的语言内容，如果不存在则返回英文内容
  return cityContent ? (cityContent[language] || cityContent['en']) : {
    title: cityId.charAt(0).toUpperCase() + cityId.slice(1),
    subtitle: '',
    sections: []
  };
} 