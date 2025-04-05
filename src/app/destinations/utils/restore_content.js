const fs = require('fs');
const path = require('path');

// 文件路径
const currentFilePath = path.join(__dirname, 'destinationContent.ts');
const backupFilePattern = 'destinationContent.ts.bak_replace_';

// 恢复内容
try {
  console.log('开始从备份文件恢复内容...');
  
  // 寻找最新的备份文件
  const files = fs.readdirSync(__dirname);
  const backupFiles = files.filter(file => file.startsWith(backupFilePattern))
                           .sort().reverse(); // 按时间戳倒序排列
  
  if (backupFiles.length === 0) {
    throw new Error('未找到备份文件!');
  }
  
  const latestBackupFile = path.join(__dirname, backupFiles[0]);
  console.log(`找到最新备份文件: ${latestBackupFile}`);
  
  // 读取文件内容
  const backupContent = fs.readFileSync(latestBackupFile, 'utf8');
  const currentContent = fs.readFileSync(currentFilePath, 'utf8');
  
  console.log(`备份文件大小: ${backupContent.length} 字符`);
  console.log(`当前文件大小: ${currentContent.length} 字符`);
  
  // 创建恢复前的备份
  const timestamp = Date.now();
  const newBackupPath = `${currentFilePath}.before_restore_${timestamp}`;
  fs.writeFileSync(newBackupPath, currentContent);
  console.log(`已创建恢复前备份: ${newBackupPath}`);
  
  // 提取基础结构和定义
  const typeDefinitionRegex = /\/\/ 旅游目的地内容类型定义[\s\S]*?type Language = [^;]+;/;
  const typeDefinitionMatch = currentContent.match(typeDefinitionRegex);
  
  if (!typeDefinitionMatch) {
    throw new Error('无法找到类型定义部分!');
  }
  
  // 合并内容
  let restoredContent = '';
  
  // 1. 加入类型定义部分
  restoredContent += typeDefinitionMatch[0] + '\n\n';
  
  // 2. 从备份中提取城市内容部分
  // 对于每个城市，我们需要提取它们的内容定义
  const cities = ['beijing', 'shanghai', 'xian', 'chengdu', 'guilin'];
  
  // 从备份文件中提取城市内容
  for (const city of cities) {
    const cityRegex = new RegExp(`const ${city}Content[\\s\\S]*?};`, 'g');
    const cityMatch = backupContent.match(cityRegex);
    
    if (cityMatch && cityMatch[0]) {
      restoredContent += cityMatch[0] + '\n\n';
      console.log(`已提取 ${city} 内容`);
    } else {
      console.warn(`警告: 未能从备份中找到 ${city} 内容`);
      
      // 如果在备份中找不到，就从当前文件提取
      const currentCityMatch = currentContent.match(cityRegex);
      if (currentCityMatch && currentCityMatch[0]) {
        restoredContent += currentCityMatch[0] + '\n\n';
        console.log(`从当前文件中提取 ${city} 内容`);
      } else {
        console.error(`错误: 无法找到 ${city} 内容!`);
      }
    }
  }
  
  // 3. 添加getDestinationContent函数和导出部分
  const exportRegex = /\/\/ 根据城市ID获取对应内容[\s\S]*?export type[^;]+;/;
  const exportMatch = currentContent.match(exportRegex);
  
  if (exportMatch) {
    restoredContent += exportMatch[0];
    console.log('已添加函数和导出部分');
  } else {
    throw new Error('无法找到函数和导出部分!');
  }
  
  // 写入恢复后的内容
  fs.writeFileSync(currentFilePath, restoredContent, 'utf8');
  console.log('内容已成功恢复!');
  
  // 验证文件大小
  const restoredSize = fs.statSync(currentFilePath).size;
  console.log(`恢复后文件大小: ${restoredSize} 字节`);
  
} catch (error) {
  console.error('恢复内容时出错:', error);
} 