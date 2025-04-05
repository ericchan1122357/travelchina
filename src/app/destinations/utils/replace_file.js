const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 生成简化的内容
try {
  console.log('开始创建简化版destinationContent.ts...');
  
  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_replace_${timestamp}`;
  
  // 读取原始文件
  const originalContent = fs.readFileSync(filePath, 'utf8');
  
  // 创建备份
  fs.writeFileSync(backupFilePath, originalContent);
  console.log(`创建备份文件: ${backupFilePath}`);
  
  // 简化的内容（仅保留英文部分）
  const simplifiedContent = `// 旅游目的地内容类型定义
interface DestinationSection {
  title: string;
  content: string;
}

interface DestinationContent {
  title: string;
  subtitle: string;
  sections: DestinationSection[];
}

// 语言类型
type Language = 'zh' | 'en' | 'fr' | 'de' | 'es' | 'ko' | 'ru';

// 北京内容
const beijingContent: Record<Language, DestinationContent> = {
  zh: {
    title: '北京：东方之都',
    subtitle: '古今交融的东方帝都',
    sections: [
      {
        title: '初印象',
        content: \`
        <p>北京，一座有着3000多年历史、800多年建都史的城市，见证了中国千年的历史变迁。作为中国的首都，这里既有雄伟的古代建筑如故宫、天坛、颐和园，也有鸟巢、水立方等现代建筑奇观，完美地融合了古典与现代的元素。</p>
        <p>漫步北京的胡同和四合院，体验老北京的传统生活方式；徜徉在王府井、三里屯等繁华商业区，感受这座大都市的现代活力。北京是一座让游客流连忘返的城市，等待着您的探索。</p>
        \`
      }
    ]
  },
  en: {
    title: "Beijing Capital",
    subtitle: "Ancient and modern elements intertwined in the eastern imperial capital",
    sections: [
      {
        title: "First Impressions",
        content: \`
        <p>Beijing, a city with over 3000 years of history and 800 years as a capital, has witnessed China's historical changes through the millennia. As the Chinese capital, it features both majestic ancient architectures like the Forbidden City, Temple of Heaven, and Summer Palace, as well as modern architectural wonders like the Bird's Nest and Water Cube, perfectly blending ancient and modern elements.</p>
        <p>Stroll through Beijing's hutongs and courtyards to experience the traditional lifestyle of old Beijing; wander through bustling commercial areas like Wangfujing and Sanlitun to experience the modern vitality of this metropolis. Beijing is a city that captivates visitors, waiting for your exploration.</p>
        \`
      }
    ]
  },
  fr: {
    title: "Pékin, la Capitale",
    subtitle: "Un mélange d'ancien et de moderne dans la capitale impériale orientale",
    sections: [
      {
        title: "Premières Impressions",
        content: "Contenu en français pour Pékin"
      }
    ]
  },
  de: {
    title: "Peking Hauptstadt",
    subtitle: "Alte und moderne Elemente verwoben in der östlichen Kaiserhauptstadt",
    sections: [
      {
        title: "Erste Eindrücke",
        content: "Deutscher Inhalt für Peking"
      }
    ]
  },
  es: {
    title: "Pekín: Sinfonía de lo antiguo y lo moderno",
    subtitle: "Explore el encanto real y el atractivo moderno de la capital de China",
    sections: [
      {
        title: "Primeras impresiones",
        content: "Contenido en español para Pekín"
      }
    ]
  },
  ko: {
    title: "베이징 수도",
    subtitle: "동방 제국 수도에서 얽힌 고대와 현대",
    sections: [
      {
        title: "첫인상",
        content: "베이징에 대한 한국어 콘텐츠"
      }
    ]
  },
  ru: {
    title: "Пекин - столица",
    subtitle: "Древность и современность переплетаются в восточной императорской столице",
    sections: [
      {
        title: "Первые впечатления",
        content: "Контент на русском языке для Пекина"
      }
    ]
  }
};

// 上海内容
const shanghaiContent: Record<Language, DestinationContent> = {
  zh: {
    title: '上海：东方明珠的魅力',
    subtitle: '现代与传统交融的国际化大都市',
    sections: [
      {
        title: '城市概览',
        content: "上海的中文内容"
      }
    ]
  },
  en: {
    title: "Shanghai: The Charm of the Oriental Pearl",
    subtitle: "An international metropolis where modern and traditional cultures blend",
    sections: [
      {
        title: "City Overview",
        content: "Shanghai content in English"
      }
    ]
  },
  fr: {
    title: "Shanghai: Le charme de la perle de l'Orient",
    subtitle: "Une métropole internationale où se mêlent cultures moderne et traditionnelle",
    sections: [
      {
        title: "Aperçu de la ville",
        content: "Contenu en français pour Shanghai"
      }
    ]
  },
  de: {
    title: "Shanghai: Der Charme der orientalischen Perle",
    subtitle: "Eine internationale Metropole, in der moderne und traditionelle Kulturen verschmelzen",
    sections: [
      {
        title: "Stadtübersicht",
        content: "Deutscher Inhalt für Shanghai"
      }
    ]
  },
  es: {
    title: "Shanghai: El encanto de la Perla de Oriente",
    subtitle: "Una metrópolis internacional donde se mezclan las culturas moderna y tradicional",
    sections: [
      {
        title: "Visión general de la ciudad",
        content: "Contenido en español para Shanghai"
      }
    ]
  },
  ko: {
    title: "상하이: 동방명주의 매력",
    subtitle: "현대와 전통문화가 어우러지는 국제 대도시",
    sections: [
      {
        title: "도시 개요",
        content: "상하이에 대한 한국어 콘텐츠"
      }
    ]
  },
  ru: {
    title: "Шанхай: Очарование восточной жемчужины",
    subtitle: "Международный мегаполис, где сочетаются современная и традиционная культуры",
    sections: [
      {
        title: "Обзор города",
        content: "Контент на русском языке для Шанхая"
      }
    ]
  }
};

// 西安内容
const xianContent: Record<Language, DestinationContent> = {
  zh: {
    title: '西安',
    subtitle: '十三朝古都',
    sections: [
      {
        title: '初印象',
        content: "西安的中文内容"
      }
    ]
  },
  en: {
    title: "Xian",
    subtitle: "Ancient Capital of Thirteen Dynasties",
    sections: [
      {
        title: "First Impressions",
        content: "Xian content in English"
      }
    ]
  },
  fr: {
    title: "Xian",
    subtitle: "Ancienne Capitale de Treize Dynasties",
    sections: [
      {
        title: "Premières Impressions",
        content: "Contenu en français pour Xian"
      }
    ]
  },
  de: {
    title: "Xian",
    subtitle: "Antike Hauptstadt von Dreizehn Dynastien",
    sections: [
      {
        title: "Erste Eindrücke",
        content: "Deutscher Inhalt für Xian"
      }
    ]
  },
  es: {
    title: "Xian",
    subtitle: "Antigua Capital de Trece Dinastías",
    sections: [
      {
        title: "Primeras impresiones",
        content: "Contenido en español para Xian"
      }
    ]
  },
  ko: {
    title: "시안",
    subtitle: "13개 왕조의 고대 수도",
    sections: [
      {
        title: "첫인상",
        content: "시안에 대한 한국어 콘텐츠"
      }
    ]
  },
  ru: {
    title: "Сиань",
    subtitle: "Древняя столица тринадцати династий",
    sections: [
      {
        title: "Первые впечатления",
        content: "Контент на русском языке для Сианя"
      }
    ]
  }
};

// 成都内容
const chengduContent: Record<Language, DestinationContent> = {
  zh: {
    title: '成都',
    subtitle: '休闲之都',
    sections: [
      {
        title: '初印象',
        content: "成都的中文内容"
      }
    ]
  },
  en: {
    title: "Chengdu",
    subtitle: "Capital of Leisure",
    sections: [
      {
        title: "First Impressions",
        content: "Chengdu content in English"
      }
    ]
  },
  fr: {
    title: "Chengdu",
    subtitle: "Capitale du Loisir",
    sections: [
      {
        title: "Premières Impressions",
        content: "Contenu en français pour Chengdu"
      }
    ]
  },
  de: {
    title: "Chengdu",
    subtitle: "Hauptstadt der Freizeit",
    sections: [
      {
        title: "Erste Eindrücke",
        content: "Deutscher Inhalt für Chengdu"
      }
    ]
  },
  es: {
    title: "Chengdu",
    subtitle: "Capital del Ocio",
    sections: [
      {
        title: "Primeras impresiones",
        content: "Contenido en español para Chengdu"
      }
    ]
  },
  ko: {
    title: "청두",
    subtitle: "여가의 수도",
    sections: [
      {
        title: "첫인상",
        content: "청두에 대한 한국어 콘텐츠"
      }
    ]
  },
  ru: {
    title: "Чэнду",
    subtitle: "Столица досуга",
    sections: [
      {
        title: "Первые впечатления",
        content: "Контент на русском языке для Чэнду"
      }
    ]
  }
};

// 桂林内容
const guilinContent: Record<Language, DestinationContent> = {
  zh: {
    title: '桂林',
    subtitle: '山水甲天下的诗画之城',
    sections: [
      {
        title: '初印象',
        content: "桂林的中文内容"
      }
    ]
  },
  en: {
    title: "Guilin",
    subtitle: "City of Poetic Landscapes with the Finest Mountains and Waters under Heaven",
    sections: [
      {
        title: "First Impressions",
        content: "Guilin content in English"
      }
    ]
  },
  fr: {
    title: "Guilin",
    subtitle: "Ville poétique aux plus beaux paysages de montagnes et d'eaux sous le ciel",
    sections: [
      {
        title: "Premières Impressions",
        content: "Contenu en français pour Guilin"
      }
    ]
  },
  de: {
    title: "Guilin",
    subtitle: "Stadt der poetischen Landschaften mit den schönsten Bergen und Gewässern unter dem Himmel",
    sections: [
      {
        title: "Erste Eindrücke",
        content: "Deutscher Inhalt für Guilin"
      }
    ]
  },
  es: {
    title: "Guilin",
    subtitle: "Ciudad de paisajes poéticos con las mejores montañas y aguas bajo el cielo",
    sections: [
      {
        title: "Primeras impresiones",
        content: "Contenido en español para Guilin"
      }
    ]
  },
  ko: {
    title: "구이린",
    subtitle: "천하에서 가장 아름다운 산수를 품은 시적인 도시",
    sections: [
      {
        title: "첫인상",
        content: "구이린에 대한 한국어 콘텐츠"
      }
    ]
  },
  ru: {
    title: "Гуйлинь",
    subtitle: "Город поэтических пейзажей с лучшими горами и водами под небесами",
    sections: [
      {
        title: "Первые впечатления",
        content: "Контент на русском языке для Гуйлиня"
      }
    ]
  }
};

// 根据城市ID获取对应内容
export function getDestinationContent(cityId: string, language: Language): DestinationContent | null {
  let cityContent: Record<Language, DestinationContent> | null = null;
  
  switch (cityId) {
    case 'beijing':
      cityContent = beijingContent;
      break;
    case 'shanghai':
      cityContent = shanghaiContent;
      break;
    case 'xian':
      cityContent = xianContent;
      break;
    case 'chengdu':
      cityContent = chengduContent;
      break;
    case 'guilin':
      cityContent = guilinContent;
      break;
  }
  
  return cityContent ? cityContent[language] : null;
}

// 导出所有城市的内容
export const destinationContents: Record<string, Record<Language, DestinationContent>> = {
  beijing: beijingContent,
  shanghai: shanghaiContent,
  xian: xianContent,
  chengdu: chengduContent,
  // 可以继续添加其他城市
  guilin: guilinContent
};

export type { DestinationSection, DestinationContent, Language };
`;
  
  // 保存简化的内容
  fs.writeFileSync(filePath, simplifiedContent, 'utf8');
  console.log('文件已替换为简化版本');
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 