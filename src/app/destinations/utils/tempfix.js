const fs = require('fs');
const path = require('path');

// 读取原始文件
const filePath = path.join(__dirname, 'destinationContent.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 替换问题行中的单引号
content = content.replace(/Xi'an, autrefois connue sous le nom de Chang'an/g, 
                         "Xi&#39;an, autrefois connue sous le nom de Chang&#39;an");

// 替换第二个问题行
content = content.replace(/Le Xi'an d'aujourd'hui/g, 
                         "Le Xi&#39;an d'aujourd'hui");

// 写入修复后的内容到新文件
fs.writeFileSync(path.join(__dirname, 'destinationContent.ts.fixed'), content);

console.log('修复完成，请检查 destinationContent.ts.fixed 文件'); 