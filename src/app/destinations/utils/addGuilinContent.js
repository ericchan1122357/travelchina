const fs = require('fs');
const path = require('path');

// 文件路径
const destinationContentPath = path.join(__dirname, 'destinationContent.ts');
const guilinContentPath = path.join(__dirname, 'temp/guilinContent.ts');

console.log('开始处理...');
console.log('destinationContentPath:', destinationContentPath);
console.log('guilinContentPath:', guilinContentPath);

// 检查文件是否存在
if (!fs.existsSync(destinationContentPath)) {
  console.error('错误: destinationContent.ts 文件不存在!');
  process.exit(1);
}

if (!fs.existsSync(guilinContentPath)) {
  console.error('错误: guilinContent.ts 文件不存在!');
  process.exit(1);
}

try {
  // 读取文件内容
  let destinationContent = fs.readFileSync(destinationContentPath, 'utf8');
  const guilinContent = fs.readFileSync(guilinContentPath, 'utf8');

  console.log('已读取文件内容');
  console.log('destinationContent长度:', destinationContent.length);
  console.log('guilinContent长度:', guilinContent.length);

  // 从guilinContent中提取出export const guilinContent部分
  const guilinContentMatch = guilinContent.match(/export const guilinContent[^;]*;/s);

  if (guilinContentMatch) {
    console.log('成功提取guilinContent对象');

    const guilinContentStr = guilinContentMatch[0];
    console.log('guilinContentStr长度:', guilinContentStr.length);

    // 先创建备份
    const backupPath = `${destinationContentPath}.bak_${Date.now()}`;
    fs.writeFileSync(backupPath, destinationContent, 'utf8');
    console.log(`已创建备份文件: ${backupPath}`);

    // 将桂林内容写入单独的文件以便导入
    const guilinDefPath = path.join(__dirname, 'guilinContent.def.ts');
    fs.writeFileSync(guilinDefPath, guilinContentStr, 'utf8');
    console.log(`已创建guilinContent定义文件: ${guilinDefPath}`);

    // 现在简单地在destinationContent.ts开头添加导入语句
    const importStatement = `import { guilinContent } from './guilinContent.def';\n\n`;
    let newContent = importStatement + destinationContent;

    // 修改destinationContents对象
    newContent = newContent.replace(
      /destinationContents: Record<string, Record<Language, DestinationContent>> = {[^}]*}/s,
      (match) => match.replace('}', ',\n  guilin: guilinContent\n}')
    );

    // 修改getDestinationContent函数的switch语句
    newContent = newContent.replace(
      /switch\(cityId\) {[^}]*case 'chengdu':[^}]*?break;/s,
      (match) => `${match}\n    case 'guilin':\n      cityContent = guilinContent;\n      break;`
    );

    // 写入文件
    fs.writeFileSync(destinationContentPath, newContent, 'utf8');
    console.log('桂林内容已成功添加到destinationContent.ts文件中');
  } else {
    console.error('无法从guilinContent.ts中提取guilinContent对象');
    console.log('文件内容示例:', guilinContent.slice(0, 500));
  }
} catch (error) {
  console.error('发生错误:', error);
} 