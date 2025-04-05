const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取原文件
let content = fs.readFileSync(filePath, 'utf8');

// 创建备份
const backupPath = `${filePath}.bak_fix_${Date.now()}`;
fs.writeFileSync(backupPath, content, 'utf8');
console.log(`已创建备份文件: ${backupPath}`);

// 替换法语内容中的单引号
function escapeQuotesInBackticks(text) {
  // 分割文本，以反引号为分界
  const segments = text.split('`');
  for (let i = 1; i < segments.length; i += 2) {
    // 仅处理偶数索引的段落，这些是反引号之间的内容
    if (i < segments.length) {
      // 将单引号替换为转义的单引号，但保留已经转义的单引号
      segments[i] = segments[i].replace(/(?<!\\)'/g, "\\'");
    }
  }
  // 重新组合文本
  return segments.join('`');
}

// 应用替换
const fixedContent = escapeQuotesInBackticks(content);

// 保存修复后的文件
fs.writeFileSync(filePath, fixedContent, 'utf8');
console.log('文件已修复，模板字符串中的单引号已转义');
