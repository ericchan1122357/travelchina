const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始重写destinations文件...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_rewrite_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);
  
  // 直接替换整个问题代码块，确保每次使用双引号来包围法语内容
  const XianFirstImpressionIndex = content.indexOf(`title: "Premières Impressions"`);
  if (XianFirstImpressionIndex > 0) {
    // 找到这个部分的起始位置
    const startSection = content.slice(0, XianFirstImpressionIndex + 500);
    // 找到反引号的起始和结束位置
    const backtickStart = startSection.lastIndexOf("content: `");
    if (backtickStart > 0) {
      const restContent = content.slice(backtickStart);
      const backtickEnd = restContent.indexOf("`,") + backtickStart;
      
      // 将文件内容分割成三部分：前部分，中间（问题）部分，和后部分
      const beforeSection = content.slice(0, backtickStart);
      const afterSection = content.slice(backtickEnd + 1);
      
      // 创建新的修复过的内容块
      const fixedSection = `content: \`
        <p>Xi'an, autrefois connue sous le nom de Chang'an, est l'une des capitales anciennes les plus célèbres de Chine, ayant servi de capitale impériale ou de centre politique pour treize dynasties, notamment les Zhou, Qin, Han et Tang. Point de départ de la Route de la Soie, cette ville a une histoire de plus de 3 100 ans avec plus de 1 100 ans en tant que capitale, nourrissant la splendide civilisation chinoise.</p>
        <p>Le Xi'an d'aujourd'hui mélange parfaitement l'ancien et le moderne. De magnifiques murailles entourent le centre-ville animé, tandis que des sites du patrimoine culturel de renommée mondiale comme l'Armée de Terre Cuite et la Grande Pagode de l'Oie Sauvage côtoient des quartiers commerciaux animés. Le Quartier Musulman aux saveurs islamiques emplit l'air d'arômes alléchants, et la Cité Lumineuse de la Grande Tang, de style dynastie Tang, éblouit avec ses jeux de lumière, mettant en valeur à la fois le profond patrimoine culturel et la vitalité moderne de cette capitale millénaire.</p>\``;
      
      // 组合新的内容
      const newContent = beforeSection + fixedSection + afterSection;
      
      // 保存修复后的内容
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('文件已修复并保存');
    } else {
      console.log('未找到content字段，无法修复');
    }
  } else {
    console.log('未找到Premières Impressions部分，无法修复');
  }
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 