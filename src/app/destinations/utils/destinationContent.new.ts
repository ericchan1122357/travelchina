import { guilinContent } from './guilinContent.def';
import { xianContent } from './xianContent';
import { chengduContent } from './chengduContent';
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

// 默认内容模板，用于尚未完全实现的城市
const defaultImplementation: Record<Language, DestinationContent> = {
  zh: {
    title: "内容开发中",
    subtitle: "敬请期待完整内容",
    sections: []
  },
  en: {
    title: "Content in Development",
    subtitle: "Please stay tuned for complete content",
    sections: []
  },
  ja: {
    title: "開発中のコンテンツ",
    subtitle: "完全なコンテンツをお楽しみに",
    sections: []
  },
  ko: {
    title: "개발 중인 콘텐츠",
    subtitle: "전체 콘텐츠를 기대해 주세요",
    sections: []
  },
  fr: {
    title: "Contenu en développement",
    subtitle: "Restez à l'écoute pour le contenu complet",
    sections: []
  },
  de: {
    title: "Inhalt in Entwicklung",
    subtitle: "Bitte bleiben Sie dran für vollständige Inhalte",
    sections: []
  },
  es: {
    title: "Contenido en desarrollo",
    subtitle: "Estén atentos para contenido completo",
    sections: []
  },
  ru: {
    title: "Содержание в разработке",
    subtitle: "Следите за обновлениями для полного контента",
    sections: []
  }
};

// 北京的多语言内容（简化示例）
const beijingContent: Record<Language, DestinationContent> = {
  zh: {
    title: "帝都北京",
    subtitle: "古老与现代交织的东方帝都",
    sections: []
  },
  en: {
    title: "Beijing Capital",
    subtitle: "Ancient and modern intertwined in the oriental imperial capital",
    sections: []
  },
  ja: { title: '北京', subtitle: '', sections: [] },
  ko: { title: '베이징', subtitle: '', sections: [] },
  fr: { title: 'Pékin', subtitle: '', sections: [] },
  de: { title: 'Peking', subtitle: '', sections: [] },
  es: { title: 'Pekín', subtitle: '', sections: [] },
  ru: { title: 'Пекин', subtitle: '', sections: [] }
};

// 上海的多语言内容（简化示例）
const shanghaiContent: Record<Language, DestinationContent> = {
  zh: {
    title: "魔都上海",
    subtitle: "现代与传统交融的国际化大都市",
    sections: []
  },
  en: {
    title: "Shanghai Metropolis",
    subtitle: "A global city where modernity meets tradition",
    sections: []
  },
  ja: { title: '上海', subtitle: '', sections: [] },
  ko: { title: '상하이', subtitle: '', sections: [] },
  fr: { title: 'Shanghai', subtitle: '', sections: [] },
  de: { title: 'Shanghai', subtitle: '', sections: [] },
  es: { title: 'Shanghái', subtitle: '', sections: [] },
  ru: { title: 'Шанхай', subtitle: '', sections: [] }
};

// 汇总所有目的地的内容
export const destinationContents: Record<string, Record<Language, DestinationContent>> = {
  beijing: beijingContent,
  shanghai: shanghaiContent,
  xian: xianContent,
  chengdu: chengduContent,
  guilin: guilinContent
};

// 获取特定目的地和语言的内容
export function getDestinationContent(cityId: string, language: Language): DestinationContent {
  // 根据城市ID获取相应的内容
  let cityContent: Record<Language, DestinationContent> | undefined;
  
  // 记录日志，以便调试
  console.log(`Getting content for city: ${cityId}, language: ${language}`);
  
  switch(cityId) {
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
    // 可以添加其他城市...
    default:
      // 默认返回空对象
      console.log(`City content not found for: ${cityId}`);
      return {
        title: cityId.charAt(0).toUpperCase() + cityId.slice(1),
        subtitle: '',
        sections: []
      };
  }
  
  // 如果请求的语言内容是空的（sections长度为0），则使用英文内容
  if (cityContent && cityContent[language] && cityContent[language].sections.length === 0) {
    console.log(`Using English content as fallback for language: ${language}`);
    return {
      ...cityContent[language],
      sections: cityContent['en'].sections
    };
  }
  
  // 检查请求的语言是否存在
  if (cityContent && !cityContent[language]) {
    console.log(`Language ${language} not found, using English as fallback`);
    return cityContent['en'];
  }
  
  // 返回请求的语言内容
  if (cityContent && cityContent[language]) {
    return cityContent[language];
  }
  
  // 最终使用英文作为备用
  return {
    title: cityId.charAt(0).toUpperCase() + cityId.slice(1),
    subtitle: '',
    sections: []
  };
} 