const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始修复特定行...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_specific_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 手动修复第1030行附近的问题
  // 我们将文件内容按行分割
  const lines = content.split('\n');
  
  // 寻找并替换包含问题的行
  for (let i = 0; i < lines.length; i++) {
    // 第1030行附近的问题（Xi'an和Chang'an）
    if (lines[i].includes("Xi'an") || lines[i].includes("Chang'an")) {
      lines[i] = lines[i].replace(/Xi'an/g, "Xi\\'an").replace(/Chang'an/g, "Chang\\'an");
      console.log(`修复了第 ${i+1} 行`);
    }
    
    // 检查并修复其他可能有问题的法语文本中的单引号
    if (lines[i].includes("d'") || lines[i].includes("l'") || lines[i].includes(" l'")) {
      lines[i] = lines[i].replace(/ l'/g, " l\\'").replace(/d'/g, "d\\'").replace(/L'/g, "L\\'");
      console.log(`修复了第 ${i+1} 行中的法语撇号`);
    }
  }
  
  // 将修改后的行重新连接成字符串
  const fixedContent = lines.join('\n');
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('文件已修复并保存');
  
  // 验证问题行是否已修复
  const verifyContent = fs.readFileSync(filePath, 'utf8').split('\n');
  const problematicLine = verifyContent[1029]; // 第1030行实际上是索引1029
  
  if (problematicLine.includes("Xi\\'an") && problematicLine.includes("Chang\\'an")) {
    console.log('验证通过：问题行已修复');
  } else {
    console.log('警告：问题行可能未完全修复');
    console.log(problematicLine);
  }
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 