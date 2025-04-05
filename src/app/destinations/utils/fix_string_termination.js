const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始修复未终止的字符串问题...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_string_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 获取文件的行
  const lines = content.split('\n');
  
  // 修复第726行
  console.log('原始第726行:', lines[725]);
  
  // 检查并修复第726行的问题
  if (lines[725].endsWith("\\',")) {
    lines[725] = lines[725].replace("\\',", "',");
    console.log('修复了第726行的转义问题');
  } else if (lines[725].endsWith("\\',")) {
    lines[725] = lines[725].replace("\\',", "',");
    console.log('修复了第726行的转义问题');
  } else if (lines[725].endsWith("\\'")) {
    lines[725] = lines[725].replace("\\'", "'");
    console.log('修复了第726行的转义问题');
  } else if (lines[725].includes("blend\\',")) {
    lines[725] = lines[725].replace("blend\\',", "blend',");
    console.log('修复了第726行的转义问题');
  } else {
    // 如果以上条件都不匹配，则直接替换整行
    lines[725] = "    subtitle: 'An international metropolis where modern and traditional cultures blend',";
    console.log('替换了整个第726行');
  }
  
  console.log('修复后第726行:', lines[725]);
  
  // 将修改后的行重新连接成字符串
  const fixedContent = lines.join('\n');
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('文件已修复并保存');
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 