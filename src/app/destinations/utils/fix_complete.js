const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

console.log('开始全面修复destinationContent.ts文件...');

// 读取文件内容
try {
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);
  
  // 创建备份
  const backupPath = `${filePath}.bak_complete_fix_${Date.now()}`;
  fs.writeFileSync(backupPath, content);
  console.log(`创建备份文件: ${backupPath}`);

  // 确保destinationContents对象包含guilin
  const destContentPattern = /export\s+const\s+destinationContents\s*:\s*Record\s*<string,\s*Record\s*<Language,\s*DestinationContent>>\s*=\s*{([^}]*)}/;
  const match = content.match(destContentPattern);
  
  if (match) {
    console.log('找到destinationContents对象');
    
    let objectContent = match[1];
    
    // 检查是否已经包含guilin
    if (!objectContent.includes('guilin: guilinContent')) {
      console.log('添加guilin到destinationContents对象');
      
      // 给对象添加guilin
      const lastComma = objectContent.lastIndexOf(',');
      const insertPos = lastComma !== -1 ? lastComma + 1 : objectContent.length;
      
      // 创建新的对象内容，添加guilin
      const newObjectContent = 
        objectContent.slice(0, insertPos) + 
        '\n  guilin: guilinContent,' + 
        objectContent.slice(insertPos);
      
      // 替换内容
      content = content.replace(match[0], `export const destinationContents: Record<string, Record<Language, DestinationContent>> = {${newObjectContent}}`);
    } else {
      console.log('destinationContents对象已包含guilin');
      
      // 移除重复的guilin项
      const guilinPattern = /guilin:\s*guilinContent,/g;
      const guilinMatches = [...objectContent.matchAll(guilinPattern)];
      
      if (guilinMatches.length > 1) {
        console.log(`发现${guilinMatches.length}个guilin项，移除重复项`);
        
        // 移除除第一个之外的所有guilin项
        let newObjectContent = objectContent;
        for (let i = 1; i < guilinMatches.length; i++) {
          const matchPos = newObjectContent.indexOf('guilin: guilinContent,', i > 1 ? guilinMatches[i-1].index + 1 : 0);
          if (matchPos !== -1) {
            newObjectContent = newObjectContent.slice(0, matchPos) + newObjectContent.slice(matchPos + 'guilin: guilinContent,'.length);
          }
        }
        
        // 替换内容
        content = content.replace(match[0], `export const destinationContents: Record<string, Record<Language, DestinationContent>> = {${newObjectContent}}`);
      }
    }
  } else {
    console.log('未找到destinationContents对象，无法修复');
  }
  
  // 修复switch语句中的case 'guilin'重复项
  const switchPattern = /switch\s*\(\s*(?:cityId|destination\.toLowerCase\(\))\s*\)\s*{([^}]*)}/;
  const switchMatch = content.match(switchPattern);
  
  if (switchMatch) {
    console.log('找到switch语句');
    
    let switchContent = switchMatch[1];
    
    // 检查是否已经包含guilin case
    const guilinCasePattern = /case\s+['"]guilin['"]\s*:/g;
    const guilinCaseMatches = [...switchContent.matchAll(guilinCasePattern)];
    
    if (guilinCaseMatches.length > 1) {
      console.log(`发现${guilinCaseMatches.length}个case 'guilin'，移除重复项`);
      
      // 通过行分割来处理
      const lines = switchContent.split('\n');
      let seenGuilinCase = false;
      let skipNextTwo = 0;
      
      const fixedLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();
        
        // 跳过前面标记要删除的行
        if (skipNextTwo > 0) {
          skipNextTwo--;
          continue;
        }
        
        // 检查是否是guilin case
        if (trimmedLine.match(/case\s+['"]guilin['"]\s*:/)) {
          if (seenGuilinCase) {
            console.log(`移除重复的case 'guilin'，行: ${i}`);
            // 跳过这个case及后面两行
            skipNextTwo = 2;
            continue;
          } else {
            seenGuilinCase = true;
          }
        }
        
        fixedLines.push(line);
      }
      
      // 创建修正后的switch内容
      const fixedSwitchContent = fixedLines.join('\n');
      
      // 替换内容
      content = content.replace(switchMatch[0], `switch (cityId) {${fixedSwitchContent}}`);
    } else if (guilinCaseMatches.length === 0) {
      console.log('switch语句中未找到case "guilin"，添加此case');
      
      // 给switch添加guilin case
      const defaultPos = switchContent.indexOf('default:');
      const insertPos = defaultPos !== -1 ? switchContent.lastIndexOf('\n', defaultPos) : switchContent.length;
      
      // 创建新的switch内容，添加guilin case
      const newSwitchContent = 
        switchContent.slice(0, insertPos) + 
        `\n      case 'guilin':\n        cityContent = guilinContent;\n        break;` + 
        switchContent.slice(insertPos);
      
      // 替换内容
      content = content.replace(switchMatch[0], `switch (cityId) {${newSwitchContent}}`);
    } else {
      console.log('switch语句已包含一个case "guilin"');
    }
  } else {
    console.log('未找到switch语句，无法修复');
  }
  
  // 写入修复后的内容
  fs.writeFileSync(filePath, content);
  console.log('成功修复文件并保存!');
} catch (err) {
  console.error('处理文件时出错:', err);
} 