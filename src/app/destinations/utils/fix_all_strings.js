const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始全面修复字符串问题...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_all_strings_fix_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 获取文件的行
  let lines = content.split('\n');
  let fixCount = 0;
  
  // 对每一行进行检查和修复
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 检查是否包含单引号字符串，并且有错误的反斜杠转义结尾
    if (line.includes("'") && (line.endsWith("\\',") || line.endsWith("\\'") || line.endsWith("\\'"))) {
      let fixed = line;
      
      // 修复不同的问题模式
      if (line.endsWith("\\',")) {
        fixed = line.replace("\\',", "',");
      } else if (line.endsWith("\\'")) {
        fixed = line.replace("\\'", "'");
      } else if (line.endsWith("\\'")) {
        fixed = line.replace("\\'", "'");
      }
      
      // 检查字符串中的其他错误转义
      if (line.includes("\\',")) {
        fixed = fixed.replace(/\\',/g, "',");
      }
      
      // 对于西班牙语和其他语言的标题，检查特定模式
      if (line.includes("title:") && line.includes("\\',")) {
        fixed = fixed.replace(/\\',/g, "',");
      }
      
      // 如果进行了修复，更新行并记录
      if (fixed !== line) {
        lines[i] = fixed;
        console.log(`修复了第 ${i+1} 行: ${line} -> ${fixed}`);
        fixCount++;
      }
    }
    
    // 检查未关闭的单引号字符串（句法错误）
    if ((line.match(/'/g) || []).length % 2 === 1 && !line.includes('`')) {
      // 可能是未关闭的字符串，检查下一行
      if (i + 1 < lines.length && !lines[i + 1].includes("'")) {
        // 尝试修复，假设字符串应该在行尾关闭
        if (line.endsWith(",")) {
          // 已经有逗号，检查倒数第二个字符
          if (line[line.length - 2] !== "'") {
            // 在逗号前添加引号
            const fixed = line.slice(0, -1) + "'" + line.slice(-1);
            lines[i] = fixed;
            console.log(`修复了第 ${i+1} 行的未关闭字符串: ${line} -> ${fixed}`);
            fixCount++;
          }
        } else if (!line.endsWith("'")) {
          // 没有逗号，添加引号和逗号
          const fixed = line + "',";
          lines[i] = fixed;
          console.log(`修复了第 ${i+1} 行的未关闭字符串: ${line} -> ${fixed}`);
          fixCount++;
        }
      }
    }
    
    // 特别处理第771行
    if (i === 770) {
      if (line.includes("ciudad\\',")) {
        lines[i] = line.replace("ciudad\\',", "ciudad',");
        console.log(`修复了第771行的特定问题`);
        fixCount++;
      } else {
        // 直接替换整行，确保正确
        lines[i] = "        title: 'Visión general de la ciudad',";
        console.log(`替换了第771行`);
        fixCount++;
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