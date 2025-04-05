const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始处理模板字符串中的单引号...');
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_template_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 函数：转义模板字符串中的单引号
  function escapeTemplateStringQuotes(text) {
    const result = [];
    let inTemplateString = false;
    let i = 0;

    while (i < text.length) {
      // 检测模板字符串的开始或结束
      if (text[i] === '`') {
        inTemplateString = !inTemplateString;
        result.push(text[i]);
        i++;
      } 
      // 在模板字符串内时，处理单引号
      else if (inTemplateString && text[i] === "'") {
        // 检查是否已经转义
        if (i > 0 && text[i-1] !== '\\') {
          result.push("\\'");
        } else {
          result.push(text[i]);
        }
        i++;
      } 
      // 其他字符原样保留
      else {
        result.push(text[i]);
        i++;
      }
    }

    return result.join('');
  }

  // 应用转义函数
  const fixedContent = escapeTemplateStringQuotes(content);
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('文件已修复并保存');

  // 验证修复是否成功
  const modifiedContent = fs.readFileSync(filePath, 'utf8');
  let inTemplateString = false;
  let hasUnescapedQuote = false;

  for (let i = 0; i < modifiedContent.length; i++) {
    if (modifiedContent[i] === '`') {
      inTemplateString = !inTemplateString;
    } else if (inTemplateString && modifiedContent[i] === "'" && (i === 0 || modifiedContent[i-1] !== '\\')) {
      hasUnescapedQuote = true;
      console.log(`警告：在位置 ${i} 处仍有未转义的单引号`);
      console.log(modifiedContent.substring(Math.max(0, i-20), Math.min(modifiedContent.length, i+20)));
    }
  }

  if (!hasUnescapedQuote) {
    console.log('验证通过：所有模板字符串中的单引号已正确转义');
  } else {
    console.log('警告：仍有一些未转义的单引号');
  }

} catch (error) {
  console.error('处理文件时出错:', error);
} 