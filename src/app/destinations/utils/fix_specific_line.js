const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 修复特定行的内容
try {
  console.log('开始修复特定问题行...');
  
  // 读取当前文件内容
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`文件大小: ${content.length} 字符`);
  
  // 创建备份
  const timestamp = Date.now();
  const backupPath = `${filePath}.before_specific_fix_${timestamp}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建备份: ${backupPath}`);
  
  // 查找并修复问题行
  const problematicPattern = /title: "Premières Impressions",\s+content: "([^"]*)"content:/;
  
  // 使用正则表达式测试查找问题
  const match = content.match(problematicPattern);
  if (match) {
    console.log('找到特定问题区域!');
    
    // 分割有问题的内容
    const parts = content.split(problematicPattern);
    if (parts.length >= 3) {
      const beforeProblem = parts[0];
      const problemContent = match[1];
      const afterProblem = parts[parts.length - 1];
      
      // 修复后的内容 - 使用模板字符串替换
      const fixedContent = `${beforeProblem}title: "Premières Impressions",
        content: \`${problemContent}\`,${afterProblem}`;
      
      // 保存修复后的内容
      fs.writeFileSync(filePath, fixedContent);
      console.log('特定问题已修复!');
    } else {
      console.error('无法正确分割问题区域');
    }
  } else {
    console.log('未找到特定问题区域，尝试其他方式修复...');
    
    // 尝试直接修复字符串连接问题
    const lineByLine = content.split('\n');
    let inProblemArea = false;
    let problemStartLine = -1;
    let problemEndLine = -1;
    
    // 查找问题区域
    for (let i = 0; i < lineByLine.length; i++) {
      const line = lineByLine[i];
      
      if (line.includes('title: "Premières Impressions"')) {
        inProblemArea = true;
        problemStartLine = i + 1; // 下一行是content开始
      } else if (inProblemArea && line.includes('content:') && problemStartLine !== -1) {
        inProblemArea = false;
        problemEndLine = i;
        break;
      }
    }
    
    // 如果找到了问题区域
    if (problemStartLine !== -1 && problemEndLine !== -1) {
      console.log(`找到问题区域: 从行 ${problemStartLine} 到行 ${problemEndLine}`);
      
      // 提取内容文本并修复
      const contentLines = lineByLine.slice(problemStartLine, problemEndLine);
      let contentText = contentLines.join('\n');
      
      // 分析并修复这段内容
      contentText = contentText.replace(/content: "(.+?)("content:|",)/g, 'content: `$1`,');
      
      // 替换回原文件
      lineByLine.splice(problemStartLine, problemEndLine - problemStartLine, contentText);
      
      // 保存修复后的内容
      fs.writeFileSync(filePath, lineByLine.join('\n'));
      console.log('尝试修复了问题区域!');
    } else {
      console.log('未能定位具体问题区域，尝试直接替换可能的错误模式...');
      
      // 直接替换可能的错误模式
      const directFixedContent = content
        .replace(/content: "([^"]*)"\s*content:/g, 'content: `$1`,\n        content:')
        .replace(/content: "([^"]*)"\s*title:/g, 'content: `$1`,\n        title:')
        .replace(/content: "([^"]*)"\s*}/g, 'content: `$1`\n        }')
        .replace(/(\w)'(\w)/g, "$1\\'$2"); // 转义单引号
      
      // 保存修复后的内容
      fs.writeFileSync(filePath, directFixedContent);
      console.log('已应用直接替换规则!');
    }
  }
  
  console.log('修复尝试完成');
  
} catch (error) {
  console.error('修复特定行内容时出错:', error);
} 