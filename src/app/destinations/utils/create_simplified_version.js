const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

try {
  console.log('开始创建极简版本...');
  
  // 读取当前文件内容
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`原始文件大小: ${content.length} 字符`);
  
  // 创建备份
  const timestamp = Date.now();
  const backupPath = `${filePath}.backup_full_${timestamp}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建完整备份: ${backupPath}`);
  
  // 极简版本内容
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
        content: \`<p>北京，一座有着3000多年历史、800多年建都史的城市，见证了中国千年的历史变迁。</p>\`
      }
    ]
  },
  en: {
    title: "Beijing Capital",
    subtitle: "Ancient and modern elements intertwined in the eastern imperial capital",
    sections: [
      {
        title: "First Impressions",
        content: \`<p>Beijing, a city with over 3000 years of history and 800 years as a capital, has witnessed China's historical changes through the millennia.</p>\`
      }
    ]
  },
  fr: {
    title: "Pékin, la Capitale",
    subtitle: "Un mélange d'ancien et de moderne dans la capitale impériale orientale",
    sections: [
      {
        title: "Premières Impressions",
        content: \`<p>Pékin, une ville avec plus de 3000 ans d'histoire et 800 ans comme capitale, a été témoin des changements historiques de la Chine à travers les millénaires.</p>\`
      }
    ]
  },
  de: {
    title: "Peking Hauptstadt",
    subtitle: "Alte und moderne Elemente verwoben in der östlichen Kaiserhauptstadt",
    sections: [
      {
        title: "Erste Eindrücke",
        content: \`<p>Peking, eine Stadt mit über 3000 Jahren Geschichte und 800 Jahren als Hauptstadt, hat Chinas historische Veränderungen über die Jahrtausende miterlebt.</p>\`
      }
    ]
  },
  es: {
    title: "Pekín: Sinfonía de lo antiguo y lo moderno",
    subtitle: "Explore el encanto real y el atractivo moderno de la capital de China",
    sections: [
      {
        title: "Primeras impresiones",
        content: \`<p>Pekín, una ciudad con más de 3000 años de historia y 800 años como capital, ha sido testigo de los cambios históricos de China a través de los milenios.</p>\`
      }
    ]
  },
  ko: {
    title: "베이징 수도",
    subtitle: "동방 제국 수도에서 얽힌 고대와 현대",
    sections: [
      {
        title: "첫인상",
        content: \`<p>베이징은 3000년 이상의 역사와 800년의 수도 역사를 가진 도시로, 수천 년에 걸친 중국의 역사적 변화를 목격했습니다.</p>\`
      }
    ]
  },
  ru: {
    title: "Пекин - столица",
    subtitle: "Древность и современность переплетаются в восточной императорской столице",
    sections: [
      {
        title: "Первые впечатления",
        content: \`<p>Пекин, город с более чем 3000-летней историей и 800 годами в качестве столицы, был свидетелем исторических изменений Китая на протяжении тысячелетий.</p>\`
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
        content: \`<p>上海，中国最大的经济中心和国际化大都市，融合了东西方文化精华。</p>\`
      }
    ]
  },
  en: {
    title: "Shanghai: The Charm of the Oriental Pearl",
    subtitle: "An international metropolis where modern and traditional cultures blend",
    sections: [
      {
        title: "City Overview",
        content: \`<p>Shanghai, China's largest economic center and international metropolis, combines the essence of Eastern and Western cultures.</p>\`
      }
    ]
  },
  fr: {
    title: "Shanghai: Le charme de la perle de l'Orient",
    subtitle: "Une métropole internationale où se mêlent cultures moderne et traditionnelle",
    sections: [
      {
        title: "Aperçu de la ville",
        content: \`<p>Shanghai, le plus grand centre économique de Chine et métropole internationale, combine l'essence des cultures orientale et occidentale.</p>\`
      }
    ]
  },
  de: {
    title: "Shanghai: Der Charme der orientalischen Perle",
    subtitle: "Eine internationale Metropole, in der moderne und traditionelle Kulturen verschmelzen",
    sections: [
      {
        title: "Stadtübersicht",
        content: \`<p>Shanghai, Chinas größtes Wirtschaftszentrum und internationale Metropole, vereint die Essenz östlicher und westlicher Kulturen.</p>\`
      }
    ]
  },
  es: {
    title: "Shanghai: El encanto de la Perla de Oriente",
    subtitle: "Una metrópolis internacional donde se mezclan las culturas moderna y tradicional",
    sections: [
      {
        title: "Visión general de la ciudad",
        content: \`<p>Shanghai, el mayor centro económico de China y metrópolis internacional, combina la esencia de las culturas oriental y occidental.</p>\`
      }
    ]
  },
  ko: {
    title: "상하이: 동방명주의 매력",
    subtitle: "현대와 전통문화가 어우러지는 국제 대도시",
    sections: [
      {
        title: "도시 개요",
        content: \`<p>상하이는 중국 최대의 경제 중심지이자 국제 대도시로, 동양과 서양 문화의 정수를 결합했습니다.</p>\`
      }
    ]
  },
  ru: {
    title: "Шанхай: Очарование восточной жемчужины",
    subtitle: "Международный мегаполис, где сочетаются современная и традиционная культуры",
    sections: [
      {
        title: "Обзор города",
        content: \`<p>Шанхай, крупнейший экономический центр Китая и международный мегаполис, сочетает в себе сущность восточной и западной культур.</p>\`
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
        content: \`<p>西安，曾用名长安，是中国历史上最著名的古都之一，是"丝绸之路"的起点。</p>\`
      }
    ]
  },
  en: {
    title: "Xian",
    subtitle: "Ancient Capital of Thirteen Dynasties",
    sections: [
      {
        title: "First Impressions",
        content: \`<p>Xi'an, formerly known as Chang'an, is one of the most famous ancient capitals in China and the starting point of the Silk Road.</p>\`
      }
    ]
  },
  fr: {
    title: "Xian",
    subtitle: "Ancienne Capitale de Treize Dynasties",
    sections: [
      {
        title: "Premières Impressions",
        content: \`<p>Xi'an, autrefois connue sous le nom de Chang'an, est l'une des capitales anciennes les plus célèbres de Chine et le point de départ de la Route de la Soie.</p>\`
      }
    ]
  },
  de: {
    title: "Xian",
    subtitle: "Antike Hauptstadt von Dreizehn Dynastien",
    sections: [
      {
        title: "Erste Eindrücke",
        content: \`<p>Xi'an, früher bekannt als Chang'an, ist eine der berühmtesten alten Hauptstädte Chinas und der Ausgangspunkt der Seidenstraße.</p>\`
      }
    ]
  },
  es: {
    title: "Xian",
    subtitle: "Antigua Capital de Trece Dinastías",
    sections: [
      {
        title: "Primeras impresiones",
        content: \`<p>Xi'an, anteriormente conocida como Chang'an, es una de las capitales antiguas más famosas de China y el punto de partida de la Ruta de la Seda.</p>\`
      }
    ]
  },
  ko: {
    title: "시안",
    subtitle: "13개 왕조의 고대 수도",
    sections: [
      {
        title: "첫인상",
        content: \`<p>시안(예전 이름 창안)은 중국에서 가장 유명한 고대 수도 중 하나이며 실크로드의 출발점입니다.</p>\`
      }
    ]
  },
  ru: {
    title: "Сиань",
    subtitle: "Древняя столица тринадцати династий",
    sections: [
      {
        title: "Первые впечатления",
        content: \`<p>Сиань, ранее известный как Чанъань, - одна из самых известных древних столиц Китая и начальная точка Шелкового пути.</p>\`
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
        content: \`<p>成都是四川省省会，以其悠闲的生活方式、美食和大熊猫而闻名。</p>\`
      }
    ]
  },
  en: {
    title: "Chengdu",
    subtitle: "Capital of Leisure",
    sections: [
      {
        title: "First Impressions",
        content: \`<p>Chengdu is the capital of Sichuan Province, known for its laid-back lifestyle, delicious food, and giant pandas.</p>\`
      }
    ]
  },
  fr: {
    title: "Chengdu",
    subtitle: "Capitale du Loisir",
    sections: [
      {
        title: "Premières Impressions",
        content: \`<p>Chengdu est la capitale de la province du Sichuan, connue pour son mode de vie décontracté, sa cuisine délicieuse et ses pandas géants.</p>\`
      }
    ]
  },
  de: {
    title: "Chengdu",
    subtitle: "Hauptstadt der Freizeit",
    sections: [
      {
        title: "Erste Eindrücke",
        content: \`<p>Chengdu ist die Hauptstadt der Provinz Sichuan, bekannt für ihren entspannten Lebensstil, köstliches Essen und Riesenpandas.</p>\`
      }
    ]
  },
  es: {
    title: "Chengdu",
    subtitle: "Capital del Ocio",
    sections: [
      {
        title: "Primeras impresiones",
        content: \`<p>Chengdu es la capital de la provincia de Sichuan, conocida por su estilo de vida relajado, deliciosa comida y pandas gigantes.</p>\`
      }
    ]
  },
  ko: {
    title: "청두",
    subtitle: "여가의 수도",
    sections: [
      {
        title: "첫인상",
        content: \`<p>청두는 쓰촨성의 성도로, 여유로운 생활 방식, 맛있는 음식, 그리고 자이언트 판다로 유명합니다.</p>\`
      }
    ]
  },
  ru: {
    title: "Чэнду",
    subtitle: "Столица досуга",
    sections: [
      {
        title: "Первые впечатления",
        content: \`<p>Чэнду - столица провинции Сычуань, известная своим непринужденным образом жизни, вкусной едой и гигантскими пандами.</p>\`
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
        content: \`<p>桂林是一座被大自然眷顾的城市，以其独特的喀斯特地貌而闻名于世。</p>\`
      }
    ]
  },
  en: {
    title: "Guilin",
    subtitle: "City of Poetic Landscapes with the Finest Mountains and Waters under Heaven",
    sections: [
      {
        title: "First Impressions",
        content: \`<p>Guilin is a city blessed by nature, renowned worldwide for its unique karst topography.</p>\`
      }
    ]
  },
  fr: {
    title: "Guilin",
    subtitle: "Ville poétique aux plus beaux paysages de montagnes et d'eaux sous le ciel",
    sections: [
      {
        title: "Premières Impressions",
        content: \`<p>Guilin est une ville bénie par la nature, renommée dans le monde entier pour sa topographie karstique unique.</p>\`
      }
    ]
  },
  de: {
    title: "Guilin",
    subtitle: "Stadt der poetischen Landschaften mit den schönsten Bergen und Gewässern unter dem Himmel",
    sections: [
      {
        title: "Erste Eindrücke",
        content: \`<p>Guilin ist eine von der Natur gesegnete Stadt, die weltweit für ihre einzigartige Karstlandschaft bekannt ist.</p>\`
      }
    ]
  },
  es: {
    title: "Guilin",
    subtitle: "Ciudad de paisajes poéticos con las mejores montañas y aguas bajo el cielo",
    sections: [
      {
        title: "Primeras impresiones",
        content: \`<p>Guilin es una ciudad bendecida por la naturaleza, reconocida mundialmente por su única topografía kárstica.</p>\`
      }
    ]
  },
  ko: {
    title: "구이린",
    subtitle: "천하에서 가장 아름다운 산수를 품은 시적인 도시",
    sections: [
      {
        title: "첫인상",
        content: \`<p>구이린은 자연의 축복을 받은 도시로, 독특한 카르스트 지형으로 세계적으로 유명합니다.</p>\`
      }
    ]
  },
  ru: {
    title: "Гуйлинь",
    subtitle: "Город поэтических пейзажей с лучшими горами и водами под небесами",
    sections: [
      {
        title: "Первые впечатления",
        content: \`<p>Гуйлинь - город, благословленный природой, всемирно известный своей уникальной карстовой топографией.</p>\`
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

  // 写入简化版内容
  fs.writeFileSync(filePath, simplifiedContent);
  console.log('极简版内容已写入');
  
  // 对比文件大小
  const newSize = fs.statSync(filePath).size;
  console.log(`简化后文件大小: ${newSize} 字节`);
  
} catch (error) {
  console.error('创建极简版内容时出错:', error);
} 