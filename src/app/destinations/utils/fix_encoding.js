const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

console.log('开始修复文件编码和单引号问题...');

// 读取文件内容
try {
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);
  
  // 创建备份
  const backupPath = `${filePath}.bak_encoding_fix_${Date.now()}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建备份文件: ${backupPath}`);

  // 修复单引号问题 (特别是法语内容部分)
  let fixedContent = '';
  let inBackticks = false;
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = i < content.length - 1 ? content[i + 1] : '';
    const prevChar = i > 0 ? content[i - 1] : '';
    
    // 检测是否进入或离开反引号字符串
    if (char === '`') {
      inBackticks = !inBackticks;
      fixedContent += char;
      continue;
    }
    
    // 在反引号内转义单引号
    if (inBackticks && char === "'" && prevChar !== '\\') {
      fixedContent += "\\'";
    } else {
      fixedContent += char;
    }
  }
  
  // 保存修复后的文件
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('文件已修复并保存');

  // 验证是否成功 - 检查法语内容部分
  const frenchCheck = fixedContent.includes("Xi\\'an, autrefois connue sous le nom de Chang\\'an");
  if (frenchCheck) {
    console.log('验证通过: 法语内容中的单引号已正确转义');
  } else {
    console.log('警告: 法语内容中的单引号可能未正确转义');
  }
  
} catch (err) {
  console.error('处理文件时出错:', err);
} 