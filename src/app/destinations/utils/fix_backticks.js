const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始修复模板字符串内的问题...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_backticks_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 修复模板字符串内部的转义问题
  // 在模板字符串中，不需要对单引号进行转义
  // 我们一次性处理所有内容，而不是按行
  let insideBackticks = false;
  let newContent = '';
  
  for (let i = 0; i < content.length; i++) {
    // 检测模板字符串的开始或结束
    if (content[i] === '`') {
      insideBackticks = !insideBackticks;
      newContent += content[i];
    } 
    // 在模板字符串内部，处理转义的单引号
    else if (insideBackticks && content[i] === '\\' && i + 1 < content.length && content[i + 1] === '\'') {
      // 跳过反斜杠，只保留单引号
      newContent += '\'';
      i++; // 跳过下一个字符（单引号）
    } 
    // 其他字符正常添加
    else {
      newContent += content[i];
    }
  }
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('文件已修复并保存');
  
  // 验证修复是否成功
  const verifiedContent = fs.readFileSync(filePath, 'utf8');
  let testBackticks = false;
  let hasEscapedQuote = false;
  
  for (let i = 0; i < verifiedContent.length; i++) {
    if (verifiedContent[i] === '`') {
      testBackticks = !testBackticks;
    } else if (testBackticks && verifiedContent[i] === '\\' && i + 1 < verifiedContent.length && verifiedContent[i + 1] === '\'') {
      hasEscapedQuote = true;
      console.log(`在位置 ${i} 处找到转义的单引号：${verifiedContent.substring(i-10, i+10)}`);
    }
  }
  
  if (!hasEscapedQuote) {
    console.log('验证通过：模板字符串内不再有转义的单引号');
  } else {
    console.log('警告：仍有一些转义的单引号未被修复');
  }
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 