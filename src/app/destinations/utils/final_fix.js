const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始全面修复所有剩余问题...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_final_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 获取文件的行
  let lines = content.split('\n');
  let fixCount = 0;

  // 手动修复已知的问题行
  // 修复第934行
  if (lines[933].includes("Xi\\'an\"'") || lines[933].endsWith("\"',")) {
    lines[933] = '    title: "Xi\'an",';
    console.log('修复了第934行');
    fixCount++;
  }

  // 遍历所有行寻找可能的问题
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 检查常见问题模式
    if (line.includes("\"',") || line.includes("\"'")) {
      // 修复格式问题
      let fixed = line.replace(/\"',/g, '",').replace(/\"'/g, '"');
      if (fixed !== line) {
        lines[i] = fixed;
        console.log(`修复了第 ${i+1} 行: ${line} -> ${fixed}`);
        fixCount++;
      }
    }
    
    // 检查标题行的多重引号问题
    if (line.includes("title:") || line.includes("subtitle:")) {
      // 处理单引号内嵌单引号的问题
      if ((line.match(/'/g) || []).length > 2) {
        // 如果有多于2个单引号，可能存在问题
        let fixed = line;
        
        // 如果行以多余的引号结尾，修复它
        if (fixed.endsWith("',")) {
          fixed = fixed.replace(/',$/, '",');
        } else if (fixed.endsWith("'")) {
          fixed = fixed.replace(/'$/, '"');
        }
        
        // 如果使用单引号括起整个字符串，且内部有单引号，转为双引号括起
        if (fixed.includes("\'") && fixed.startsWith("    title: '") || fixed.startsWith("    subtitle: '")) {
          fixed = fixed.replace(/^(\s+(?:title|subtitle): )'(.+)'(,?)$/, '$1"$2"$3');
        }
        
        if (fixed !== line) {
          lines[i] = fixed;
          console.log(`修复了第 ${i+1} 行标题的引号问题: ${line} -> ${fixed}`);
          fixCount++;
        }
      }
    }
    
    // 修复结尾引号问题
    if (line.endsWith('",\'') || line.endsWith('\',\"')) {
      let fixed = line.replace(/",\'$/, '",').replace(/\',\"$/, '",');
      if (fixed !== line) {
        lines[i] = fixed;
        console.log(`修复了第 ${i+1} 行的结尾引号问题: ${line} -> ${fixed}`);
        fixCount++;
      }
    }
    
    // 修复多余的转义字符
    if (line.includes('\\\'')) {
      // 在双引号字符串内部，单引号不需要转义
      if (line.includes('"') && line.match(/"/g).length >= 2) {
        let fixed = line.replace(/\\'/g, "'");
        if (fixed !== line) {
          lines[i] = fixed;
          console.log(`修复了第 ${i+1} 行的多余转义字符: ${line} -> ${fixed}`);
          fixCount++;
        }
      }
    }
  }
  
  // 将修改后的行重新连接成字符串
  const fixedContent = lines.join('\n');
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log(`文件已修复并保存，共修复了 ${fixCount} 处问题`);
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 