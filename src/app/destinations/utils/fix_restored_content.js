const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 修复内容
try {
  console.log('开始修复恢复的内容...');
  
  // 读取当前文件内容
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`文件大小: ${content.length} 字符`);
  
  // 创建备份
  const timestamp = Date.now();
  const backupPath = `${filePath}.before_fix_${timestamp}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建备份: ${backupPath}`);
  
  // 修复各种语法问题
  // 1. 查找并修复字符串拼接错误
  let fixedContent = content;
  
  // 修复模板字符串语法
  const templateStringRegex = /content: "\s*<p>.*?<\/p>(\s*<p>.*?<\/p>)*?"\s*content:/gs;
  const templateStringMatches = fixedContent.match(templateStringRegex);
  
  if (templateStringMatches) {
    console.log(`找到 ${templateStringMatches.length} 处模板字符串拼接错误`);
    
    for (const match of templateStringMatches) {
      const replacement = match
        .replace(/content: "(\s*<p>)/g, 'content: `$1')
        .replace(/(<\/p>)"\s*content:/g, '$1`');
      
      fixedContent = fixedContent.replace(match, replacement);
    }
  } else {
    console.log('未找到模板字符串拼接错误');
  }
  
  // 2. 修复未闭合的模板字符串
  const unclosedTemplateRegex = /content: `(\s*<p>.*?<\/p>(\s*<p>.*?<\/p>)*?)(?!`)/gs;
  const unclosedMatches = fixedContent.match(unclosedTemplateRegex);
  
  if (unclosedMatches) {
    console.log(`找到 ${unclosedMatches.length} 处未闭合的模板字符串`);
    
    for (const match of unclosedMatches) {
      if (!match.trim().endsWith('`')) {
        const replacement = `${match}\``;
        fixedContent = fixedContent.replace(match, replacement);
      }
    }
  } else {
    console.log('未找到未闭合的模板字符串');
  }
  
  // 3. 修复未闭合的对象
  // 检查并纠正对象括号的配对
  const braceStack = [];
  let inString = false;
  let inTemplateString = false;
  let stringChar = '';
  let fixedBraces = '';
  
  for (let i = 0; i < fixedContent.length; i++) {
    const char = fixedContent[i];
    const prevChar = i > 0 ? fixedContent[i - 1] : '';
    
    // 处理字符串
    if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
      if (!inString && !inTemplateString) {
        inString = char !== '`';
        inTemplateString = char === '`';
        stringChar = char;
      } else if ((inString && char === stringChar) || (inTemplateString && char === '`')) {
        inString = false;
        inTemplateString = false;
      }
    }
    
    // 只在非字符串内部检查括号
    if (!inString && !inTemplateString) {
      if (char === '{') {
        braceStack.push(i);
      } else if (char === '}') {
        if (braceStack.length > 0) {
          braceStack.pop();
        }
      }
    }
  }
  
  // 如果还有未闭合的括号，在文件结尾加上相应数量的右括号
  if (braceStack.length > 0) {
    console.log(`发现 ${braceStack.length} 处未闭合的左花括号，添加对应的右花括号`);
    fixedContent += '}'.repeat(braceStack.length);
  }
  
  // 4. 特别处理：转义单引号
  fixedContent = fixedContent.replace(/(\s*<p>.*?)(\w)'(\w)/g, '$1$2\'$3');
  
  // 5. 修复英文撇号问题(常见于法语内容)
  fixedContent = fixedContent.replace(/(\s*<p>.*?[Dd])'([a-zA-Z])/g, '$1\'$2');
  
  // 6. 修复特殊的错误模式：末尾多余的逗号
  fixedContent = fixedContent.replace(/,(\s*)\}/g, '$1}');
  
  // 7. 修复破损的函数定义和导出
  const brokenFunction = fixedContent.indexOf('export function getDestinationContent') === -1;
  const brokenExport = fixedContent.indexOf('export const destinationContents') === -1;
  
  if (brokenFunction || brokenExport) {
    console.log('添加缺失的函数定义和导出');
    
    // 添加缺失的函数和导出
    fixedContent += `
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
  }
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, fixedContent);
  console.log('文件已修复并保存');
  
  // 对比文件大小
  const newSize = fs.statSync(filePath).size;
  console.log(`修复后文件大小: ${newSize} 字节`);
  
} catch (error) {
  console.error('修复内容时出错:', error);
} 