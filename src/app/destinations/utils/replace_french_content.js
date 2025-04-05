const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'destinationContent.ts');

// 读取文件内容
try {
  console.log('开始替换法语内容...');
  let content = fs.readFileSync(filePath, 'utf8');
  console.log(`成功读取文件，长度: ${content.length}字符`);

  // 创建备份文件
  const timestamp = Date.now();
  const backupFilePath = `${filePath}.bak_french_replace_${timestamp}`;
  fs.writeFileSync(backupFilePath, content);
  console.log(`创建备份文件: ${backupFilePath}`);

  // 直接替换有问题的段落
  const updatedContent = content.replace(
    /content: `\s+<p>Xi\\?'an, autrefois.*?<\/p>\s+<p>Le Xi\\?'an.*?<\/p>\s+`/s,
    `content: \`
        <p>Xi'an, autrefois connue sous le nom de Chang'an, est l'une des capitales anciennes les plus célèbres de Chine, ayant servi de capitale impériale ou de centre politique pour treize dynasties, notamment les Zhou, Qin, Han et Tang. Point de départ de la Route de la Soie, cette ville a une histoire de plus de 3 100 ans avec plus de 1 100 ans en tant que capitale, nourrissant la splendide civilisation chinoise.</p>
        <p>Le Xi'an d'aujourd'hui mélange parfaitement l'ancien et le moderne. De magnifiques murailles entourent le centre-ville animé, tandis que des sites du patrimoine culturel de renommée mondiale comme l'Armée de Terre Cuite et la Grande Pagode de l'Oie Sauvage côtoient des quartiers commerciaux animés. Le Quartier Musulman aux saveurs islamiques emplit l'air d'arômes alléchants, et la Cité Lumineuse de la Grande Tang, de style dynastie Tang, éblouit avec ses jeux de lumière, mettant en valeur à la fois le profond patrimoine culturel et la vitalité moderne de cette capitale millénaire.</p>
        \``
  );
  
  // 保存修复后的内容
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log('文件已修复并保存');
  
} catch (error) {
  console.error('处理文件时出错:', error);
} 