const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
console.log('开始修复文件...');
let content = fs.readFileSync(filePath, 'utf8');

// 创建备份
const backupPath = `${filePath}.before_fix_${Date.now()}`;
console.log(`创建备份: ${backupPath}`);
fs.writeFileSync(backupPath, content);

// 修复第一个问题：Xian法语描述中重复的content字段
const problematicPattern = /(<p>Le Xian d aujourd hui.*?cette capitale millénaire\.<\/p>)"content: "/s;
content = content.replace(problematicPattern, '$1", ');

// 修复其他可能的语法错误
const badSyntaxPattern = /content: "(.*?)content: "/gs;
const fixedContent = content.replace(badSyntaxPattern, 'content: "');

// 保存修复后的文件
fs.writeFileSync(filePath, fixedContent);
console.log('文件修复完成！'); 