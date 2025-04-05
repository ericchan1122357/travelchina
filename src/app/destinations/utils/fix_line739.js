const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始修复第739行...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_line739_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 获取文件的行
  const lines = content.split('\n');
  
  // 检查第739行
  console.log('原始第739行:', lines[738]);
  
  // 直接替换为正确格式的行
  lines[738] = '    title: "Shanghai: Le charme de la perle de l\'Orient",';
  
  console.log('修复后第739行:', lines[738]);
  
  // 将修改后的行重新连接成字符串
  const fixedContent = lines.join('\n');
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('文件已修复并保存');
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 