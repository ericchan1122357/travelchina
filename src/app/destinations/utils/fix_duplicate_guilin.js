const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

console.log('开始修复重复的guilin项...');

// 读取文件内容
try {
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);
  
  // 创建备份
  const backupPath = `${filePath}.bak_duplicate_fix_${Date.now()}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建备份文件: ${backupPath}`);

  // 通过行分割和处理来修复重复问题
  const lines = content.split('\n');
  let seenGuilinInSwitch = false;
  let skipNextTwo = 0;
  
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // 跳过前面被标记要删除的行
    if (skipNextTwo > 0) {
      skipNextTwo--;
      continue;
    }
    
    // 检查switch语句中的case 'guilin'
    if (trimmedLine === "case 'guilin':" || trimmedLine === "case \"guilin\":" || 
        trimmedLine === "case \'guilin\':" || trimmedLine === "case \\\"guilin\\\":") {
      if (seenGuilinInSwitch) {
        console.log(`发现重复的case 'guilin'，行: ${i + 1}`);
        // 跳过这个case及后面两行(cityContent赋值和break语句)
        skipNextTwo = 2;
        continue;
      } else {
        seenGuilinInSwitch = true;
      }
    }
    
    fixedLines.push(line);
  }
  
  // 写入修复后的内容
  const fixedContent = fixedLines.join('\n');
  fs.writeFileSync(filePath, fixedContent);
  console.log('成功修复case语句中的重复guilin项并保存文件!');
} catch (err) {
  console.error('处理文件时出错:', err);
} 