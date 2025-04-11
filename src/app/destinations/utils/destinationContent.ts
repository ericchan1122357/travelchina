import { guilinContent } from './guilinContent.def';
import { xianContent } from './xianContent';
import { chengduContent } from './chengduContent';
import { hangzhouContent } from './hangzhouContent';
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
  chengdu: chengduContent,
  xian: xianContent,
  guilin: guilinContent,
  hangzhou: hangzhouContent
};

// 获取特定目的地和语言的内容
export const getDestinationContent = (destinationId: string, language: Language): DestinationContent => {
  // Convert language parameter to lowercase for case-insensitive matching
  const lang = language.toLowerCase() as Language;
  
  // Get the destination content based on destinationId
  let destination: Record<Language, DestinationContent> | undefined;
  
  switch (destinationId) {
    case 'beijing':
      destination = beijingContent;
      break;
    case 'shanghai':
      destination = shanghaiContent;
      break;
    case 'chengdu':
      destination = chengduContent;
      break;
    case 'xian':
      destination = xianContent;
      break;
    case 'guilin':
      destination = guilinContent;
      break;
    case 'hangzhou':
      destination = hangzhouContent;
      break;
    // ... other destinations
    default:
      // If destination is not found, return the default template
      return defaultImplementation[lang] || defaultImplementation['en'];
  }
  
  // Check if the requested language is available for this destination
  // Order of preference: Requested language -> English -> First available language
  if (destination && destination[lang]) {
    return destination[lang];
  } else if (destination && destination['en']) {
    // Fallback to English if available
    return destination['en'];
  } else if (destination) {
    // Fallback to first available language for this destination
    const availableLanguage = Object.keys(destination)[0] as Language;
    return destination[availableLanguage];
  }
  
  // If nothing is available, return the default template
  return defaultImplementation[lang] || defaultImplementation['en'];
}; 