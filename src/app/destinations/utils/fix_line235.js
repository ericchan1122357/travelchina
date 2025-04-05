const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始修复第235行...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_line235_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 获取文件的行
  const lines = content.split('\n');
  
  // 检查并直接替换第235行
  console.log('原始第235行:', lines[234]);
  
  // 直接替换整行，确保正确的格式
  lines[234] = '    subtitle: "Un mélange d\'ancien et de moderne dans la capitale impériale orientale",';
  
  console.log('修复后第235行:', lines[234]);
  
  // 将修改后的行重新连接成字符串
  const fixedContent = lines.join('\n');
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('文件已修复并保存');
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 