const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始将模板字符串转换为双引号字符串...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_convert_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 替换法语内容中的Xi'an为Xian（去掉英文单引号）
  content = content.replace(/Xi'an/g, "Xian").replace(/Chang'an/g, "Chang-an");
  console.log('已替换所有Xi\'an为Xian');
  
  // 替换所有法语内容中的撇号为空格
  content = content.replace(/d'aujourd'hui/g, "d aujourd hui")
                   .replace(/l'ancien/g, "l ancien")
                   .replace(/d'arômes/g, "d aromes")
                   .replace(/l'air/g, "l air")
                   .replace(/l'une/g, "l une")
                   .replace(/l'Armée/g, "l Armee")
                   .replace(/l'Oie/g, "l Oie");
  console.log('已替换所有法语撇号');
  
  // 保存修改后的内容
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('文件已修复并保存 - 步骤1');
  
  // 重新读取文件进行第二阶段处理
  content = fs.readFileSync(filePath, 'utf8');
  
  // 正则表达式来找到所有的模板字符串
  const regex = /content:\s*`([\s\S]*?)`/g;
  let match;
  let newContent = content;
  
  // 循环处理每个模板字符串
  while ((match = regex.exec(content)) !== null) {
    const fullMatch = match[0];
    const templateContent = match[1];
    
    // 将HTML内容中的双引号转换为单引号
    const sanitizedContent = templateContent
      .replace(/"/g, "'") // 将双引号转换为单引号
      .replace(/\n/g, " ") // 将换行符转换为空格
      .replace(/\s+/g, " "); // 将多个空白字符压缩为一个空格
    
    // 创建新的字符串形式（使用双引号）
    const newString = `content: "${sanitizedContent}"`;
    
    // 替换原始文本
    newContent = newContent.replace(fullMatch, newString);
  }
  
  // 保存修改后的内容
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('文件已修复并保存 - 最终步骤');
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 