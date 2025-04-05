const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

console.log('开始全面修复模板字符串中的单引号问题...');

// 读取文件内容
try {
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);
  
  // 创建备份
  const backupPath = `${filePath}.bak_quotes_fix_${Date.now()}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建备份文件: ${backupPath}`);

  // 更先进的单引号转义函数
  function escapeAllQuotesInBackticks(text) {
    // 用于存储结果
    let result = '';
    // 是否在模板字符串内
    let insideBackticks = false;
    // 累积字符
    let buffer = '';
    
    // 逐字符处理
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const prevChar = i > 0 ? text[i-1] : '';
      
      // 遇到反引号(`)，切换状态
      if (char === '`') {
        if (insideBackticks) {
          // 结束模板字符串，将缓冲区内容添加到结果中
          result += buffer;
          buffer = '';
        }
        insideBackticks = !insideBackticks;
        result += char;
        continue;
      }
      
      if (insideBackticks) {
        // 在模板字符串内，处理单引号
        if (char === "'" && prevChar !== '\\') {
          // 未转义的单引号，添加转义符
          buffer += "\\'";
        } else {
          buffer += char;
        }
      } else {
        // 不在模板字符串内，直接复制
        result += char;
      }
    }
    
    // 添加剩余的缓冲区内容
    if (buffer.length > 0) {
      result += buffer;
    }
    
    return result;
  }

  // 应用修复
  const fixedContent = escapeAllQuotesInBackticks(content);
  
  // 保存修复后的文件
  fs.writeFileSync(filePath, fixedContent);
  console.log('文件已修复，所有模板字符串中的单引号都已转义');
  
  // 验证文件中是否还有未转义的单引号
  console.log('进行验证检查...');
  let verificationPassed = true;
  const sections = fixedContent.split('`');
  
  for (let i = 1; i < sections.length; i += 2) {
    const section = sections[i];
    const unescapedQuotes = section.match(/(?<!\\)'/g);
    
    if (unescapedQuotes) {
      verificationPassed = false;
      console.log(`警告：在模板字符串第 ${i} 段中仍有 ${unescapedQuotes.length} 个未转义的单引号`);
    }
  }
  
  if (verificationPassed) {
    console.log('验证通过：所有模板字符串中的单引号都已正确转义');
  } else {
    console.log('验证失败：仍有未转义的单引号，请检查输出');
  }
  
} catch (err) {
  console.error('处理文件时出错:', err);
} 