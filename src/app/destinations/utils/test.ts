import { DestinationContent, DestinationSection, Language } from './types';

// 测试创建一个内容对象
const testSection: DestinationSection = {
  title: "测试标题",
  content: "<p>测试内容</p>"
};

const testContent: DestinationContent = {
  title: "测试目的地",
  subtitle: "测试副标题",
  sections: [testSection]
};

// 测试使用Language类型
const languageTest = (lang: Language) => {
  console.log(`当前语言: ${lang}`);
  return lang;
};

// 导出用于测试
export { testSection, testContent, languageTest }; 