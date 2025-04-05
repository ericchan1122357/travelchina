const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

console.log('开始修复destinationContents对象中的逗号问题...');

// 读取文件内容
try {
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);
  
  // 创建备份
  const backupPath = `${filePath}.bak_comma_fix_${Date.now()}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建备份文件: ${backupPath}`);

  // 使用正则表达式修复逗号问题
  const regex = /(chengdu: chengduContent)\s+\/\/[^\n]*\s*,\s*(guilin: guilinContent)/;
  const fixed = content.replace(regex, '$1,\n  // 可以继续添加其他城市\n  $2');
  
  if (content !== fixed) {
    // 写入修复后的内容
    fs.writeFileSync(filePath, fixed);
    console.log('成功修复逗号问题并保存文件!');
  } else {
    console.log('未找到需要修复的逗号问题，或者正则表达式无法匹配到问题区域');
  }
} catch (err) {
  console.error('处理文件时出错:', err);
} 