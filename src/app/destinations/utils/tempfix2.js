const fs = require('fs');
const path = require('path');

// 读取原始文件
const filePath = path.join(__dirname, 'destinationContent.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 找到法语部分的内容并在整个内容区域内完全替换所有可能的引号问题
const frenchSectionPattern = /(title: "Xi'an",\s+subtitle: "Ancienne Capitale de Treize Dynasties",\s+sections: \[\s+\{\s+title: "Premières Impressions",\s+content: `\s+)(<p>.*?<\/p>\s+<p>.*?<\/p>\s+)(`\s+\},)/s;

// 提取法语部分内容
const match = content.match(frenchSectionPattern);
if (match) {
  // 替换内容中的所有单引号
  const frenchContent = match[2]
    .replace(/Xi'an/g, "Xi&#39;an")
    .replace(/Chang'an/g, "Chang&#39;an")
    .replace(/d'aujourd'hui/g, "d&#39;aujourd&#39;hui")
    .replace(/l'une/g, "l&#39;une")
    .replace(/l'ancien/g, "l&#39;ancien")
    .replace(/l'Armée/g, "l&#39;Armée")
    .replace(/l'Oie/g, "l&#39;Oie")
    .replace(/l'air/g, "l&#39;air");

  // 替换整个匹配的部分
  content = content.replace(match[0], match[1] + frenchContent + match[3]);
}

// 对第二处法语内容（如果有）执行相同操作
// ... 可以根据需要添加

// 写入修复后的内容到新文件
fs.writeFileSync(path.join(__dirname, 'destinationContent.ts.fixed2'), content);

console.log('修复完成，请检查 destinationContent.ts.fixed2 文件'); 