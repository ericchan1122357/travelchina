'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BeijingPage() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 标题内容多语言实现
  const getTitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '北京：千年帝都的古今交响';
      case 'en':
        return 'Beijing: Ancient Capital\'s Symphony of Past and Present';
      case 'fr':
        return 'Pékin: Symphonie de l\'ancien et du moderne';
      case 'de':
        return 'Peking: Symphonie aus Vergangenheit und Gegenwart';
      case 'es':
        return 'Pekín: Sinfonía de lo antiguo y lo moderno';
      case 'ja':
        return '北京：古都の古今交響曲';
      case 'ko':
        return '베이징: 고대 수도의 과거와 현재의 교향곡';
      case 'ru':
        return 'Пекин: симфония древнего и современного';
      default:
        return 'Beijing: Ancient Capital\'s Symphony of Past and Present';
    }
  };
  
  // 子标题多语言实现
  const getSubtitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '探索中国首都的皇家风韵与现代魅力';
      case 'en':
        return 'Explore the Royal Charm and Modern Appeal of China\'s Capital';
      case 'fr':
        return 'Explorez le charme royal et l\'attrait moderne de la capitale chinoise';
      case 'de':
        return 'Entdecken Sie den königlichen Charme und die moderne Anziehungskraft der chinesischen Hauptstadt';
      case 'es':
        return 'Explore el encanto real y el atractivo moderno de la capital de China';
      case 'ja':
        return '中国の首都の王室の魅力と現代の魅力を探る';
      case 'ko':
        return '중국 수도의 왕실 매력과 현대적 매력 탐험';
      case 'ru':
        return 'Исследуйте королевское очарование и современную привлекательность столицы Китая';
      default:
        return 'Explore the Royal Charm and Modern Appeal of China\'s Capital';
    }
  };
  
  // 返回按钮文本多语言实现
  const getBackButtonTextByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '返回';
      case 'en':
        return 'Back';
      case 'fr':
        return 'Retour';
      case 'de':
        return 'Zurück';
      case 'es':
        return 'Volver';
      case 'ja':
        return '戻る';
      case 'ko':
        return '돌아가기';
      case 'ru':
        return 'Назад';
      default:
        return 'Back';
    }
  };
  
  // 根据语言获取文章内容
  const getContentByLanguage = () => {
    const language = currentLanguage;
    
    if (language === 'zh') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">开篇印象</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            雄伟的紫禁城金瓦闪耀，蜿蜒的长城盘踞群山，胡同里传来三轮车的铃声，CBD的玻璃幕墙映照晚霞...这里是北京，一座融合了古老与现代、传统与创新的城市。作为拥有三千年建城史、八百多年建都史的古都，北京承载着中华文明的精髓，也展现着现代中国的勃勃生机。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">最具代表性特色：</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>世界最大的皇家宫殿建筑群——紫禁城</li>
            <li>人类历史上最伟大的建筑工程——万里长城</li>
            <li>独具特色的四合院胡同文化</li>
            <li>现代化国际大都市的繁华与活力</li>
          </ul>
          
          <div className="my-8">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京全景图片</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本信息速览</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">最佳游览季节</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春季（3-5月）：气温宜人，花开成海</li>
            <li>秋季（9-10月）：天高气爽，红叶似火</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京传统美食</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京的美食文化源远流长，既有宫廷菜系的精致典雅，也有市井小吃的朴实美味。以下是几种不容错过的北京传统美食：
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京烤鸭</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最负盛名的美食代表，有着"舌尖上的国宝"之称。正宗的北京烤鸭皮酥脆、肉嫩香，传统吃法是用薄饼包裹烤鸭片、甜面酱和葱丝等配料。全聚德、大董、便宜坊等老字号是品尝地道烤鸭的首选之地。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京烤鸭图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 炸酱面</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            老北京的家常美食，被誉为"中国十大面条"之一。由煸炒的肉酱浇在煮好的手擀面上，配以黄瓜丝、豆芽等新鲜蔬菜，咸香扑鼻，味道浓郁。老磁器口和老北京炸酱面馆是品尝正宗炸酱面的好去处。
          </p>
        </>
      );
    } else if (language === 'en') {
      return (
        <>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">气候特点</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春季：温暖舒适，偶有沙尘</li>
            <li>夏季：炎热多雨</li>
            <li>秋季：凉爽干燥</li>
            <li>冬季：寒冷干燥</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">当地交通概况</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>地铁网络发达，覆盖主要景区</li>
            <li>公交线路密集，可达偏远景点</li>
            <li>出租车起步价13元</li>
            <li>共享单车遍布全城</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化与历史速览</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">历史沿革</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>商周时期：蓟城初建</li>
            <li>元朝：正式定都，称大都</li>
            <li>明清两代：定都北京，建紫禁城</li>
            <li>现代：发展成为国际化大都市</li>
          </ul>
          
          <div className="my-8">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">历史古迹图片</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必游景点</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">皇家宫殿与园林</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 故宫博物院（紫禁城）</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界上最大的宫殿建筑群，明清24位皇帝的居所。占地72万平方米，建筑群金碧辉煌，气势恢宏。太和殿是中国最大的木结构建筑，象征着皇权的至高点。后三宫是皇帝和后妃们的生活区，充满生活气息。珍宝馆和钟表馆收藏了无数稀世珍宝。春季御花园内牡丹绽放，角楼前玉兰盛开，美不胜收。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">故宫图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 颐和园</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界上规模最大、保存最完整的皇家园林，慈禧太后的避暑胜地。昆明湖碧波荡漾，占地约占颐和园的四分之三。长廊是世界上最长的彩绘长廊，每一格都是一幅画。佛香阁巍峨耸立，是园中至高点。春季园内桃花、杏花、玉兰次第开放，垂柳拂水。昆明湖畔春色旖旎，是皇家园林最动人的季节。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 天坛公园</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            明清皇帝祭天的神圣场所，中国现存最大的祭祀建筑群。祈年殿金顶蓝瓦，是古代祭天的主要建筑。圜丘坛三层汉白玉砌成，独特的音响效果令人称奇。回音壁是古代建筑声学的奇迹。春季园内梅花、玉兰、海棠次第绽放。晨曦中的天坛，展现出庄严肃穆的帝王气度。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">天坛公园图片</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">长城景区</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 慕田峪长城</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            明代に建設され、北京で最も壮観な長城区間の一つです。中国の壮大な防御工事の象徴であり、春には山々が緑に覆われ、野生の花が咲きます。ケーブルカーで簡単にアクセスでき、トボガンで下りることができます。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">长城图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 八達嶺長城</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            万里长城的精华段落，也是最早对外开放的长城景区。北七楼、南三楼，雄伟壮观。关城建筑保存完好，是明代军事建筑的典范。春日登长城，可见山花点缀城墙。举目远眺，群山起伏，长城如巨龙盘踞。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">特色街区与胡同</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 南鑼鼓巷</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            最具代表性的老北京胡同，八百年历史文化积淀。青砖灰瓦，四合院落，展现老北京的传统生活。胡同内汇集各式老字号和创意文化店铺。传统与现代交融，展现活力与古韵。春日漫步胡同，感受最地道的北京生活。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 什刹海地区</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            老北京三海之一，历史文化氛围浓厚。银锭桥畔，垂柳依依。恭王府见证王府生活的奢华。后海酒吧街展现现代夜生活的魅力。春季荷花初露，游船点点，风光旖旎。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">什刹海图片</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">现代建筑与场馆</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 奥林匹克公园</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            2008年奥运会主会场，现代建筑的杰作。鸟巢独特的钢结构设计，成为北京新地标。水立方的水立方状外表，夜晚流光溢彩。春季园区内郁金香绽放，与现代建筑交相辉映。日落时分，现代建筑在金色阳光中熠熠生辉。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798艺术区</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            废弃工厂改造的艺术区，当代艺术的聚集地。保留了德式工业建筑的特色。画廊、艺术装置、涂鸦艺术随处可见。春季户外艺术展览增多，艺术家户外创作。工业遗存与艺术创新的完美融合。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798艺术区图片</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">自然风光与公园</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 香山公园</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京西郊第一胜地，历史名园。双清别墅、香山寺、碧云寺等人文景观众多。春季山间杜鹃花盛开，漫山遍野。登高远眺，北京城尽收眼底。皇家园林与自然风光的完美结合。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 北京植物园</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最大的植物园，品种丰富多样。春季樱花园、牡丹园、芍药园次第绽放。温室内珍稀植物四季常青。展现北方园林的独特魅力。自然教育与景观欣赏的理想去处。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">宗教建筑</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 雍和宫</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            清代最大的藏传佛教寺院，前身是雍亲王府。26米高的旃檀佛像，为世界之最。建筑风格融合汉族与藏族特色。珍藏大量佛教文物和艺术珍品。庄严肃穆中透露皇家气派。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">雍和宫图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 法源寺</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最古老的寺院之一，历史可追溯到晋代。古建筑群保存完好，展现古代建筑艺术。珍藏众多佛教文物和历代碑刻。春季古树开花，园林景色优美。城市中的一片净土，远离尘嚣。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">博物馆与文化场所</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 国家博物馆</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            中国最大的博物馆，藏品数量世界第一。《复兴之路》展现中国近现代历史。《古代中国》展示五千年文明发展。定期举办国际顶级文物展览。中华文明的瑰宝殿堂。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 首都博物馆</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            展示北京历史文化的专业博物馆。再现老北京的城市变迁。展示传统民俗文化。珍藏大量北京地区出土文物。了解北京历史文化的窗口。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">博物馆图片</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">特色体验</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">文化体验</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>京剧表演欣赏</li>
            <li>四合院住宿体验</li>
            <li>茶文化品鉴</li>
            <li>胡同深度游</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京传统美食</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京的美食文化源远流长，既有宫廷菜系的精致典雅，也有市井小吃的朴实美味。以下是几种不容错过的北京传统美食：
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京烤鸭</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最负盛名的美食代表，有着"舌尖上的国宝"之称。正宗的北京烤鸭皮酥脆、肉嫩香，传统吃法是用薄饼包裹烤鸭片、甜面酱和葱丝等配料。全聚德、大董、便宜坊等老字号是品尝地道烤鸭的首选之地。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京烤鸭图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 炸酱面</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            老北京的家常美食，被誉为"中国十大面条"之一。由煸炒的肉酱浇在煮好的手擀面上，配以黄瓜丝、豆芽等新鲜蔬菜，咸香扑鼻，味道浓郁。老磁器口和老北京炸酱面馆是品尝正宗炸酱面的好去处。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">炸酱面图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 涮羊肉（北京火锅）</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            源于元朝的宫廷美食，已有800多年历史。精选羊肉切成薄片，蘸以特制麻酱汁，在沸腾的铜锅中快速涮熟食用。东来顺和鹿鸣春是百年老字号，提供最正宗的北京涮羊肉体验。冬季来北京，一顿热气腾腾的涮羊肉是最温暖的享受。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">涮羊肉图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. 烧饼与艾窝窝</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京传统的面点小吃。烧饼酥脆可口，有甜咸两种口味；艾窝窝则是清明时节的特色美食，以艾叶和糯米为主料，清香软糯。门框胡同的旺顺斋和护国寺小吃店都提供这些传统点心。
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            这座千年古都承载着太多的历史与文化，每一个转角都可能藏着一段动人的故事，每一处景点都值得细细品味。春日的北京，更是一幅色彩斑斓的画卷，等待着您去探索和发现。从皇家气派到市井生活，从传统文化到现代艺术，北京展现了多元魅力，带给游客独特的人文体验。
          </p>
        </>
      );
    } else if (currentLanguage === 'en') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">First Impression</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The magnificent Forbidden City with its glittering golden tiles, the Great Wall winding through mountains, the sound of tricycle bells in hutongs, the glass curtain walls of the CBD reflecting the sunset... This is Beijing, a city that blends ancient and modern, tradition and innovation. As a capital with a 3,000-year history of city building and an 800-year history as a capital, Beijing carries the essence of Chinese civilization and showcases the vibrant energy of modern China.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Most Representative Features:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>The world&apos;s largest royal palace complex - the Forbidden City</li>
            <li>One of the greatest engineering projects in human history - the Great Wall</li>
            <li>The unique courtyard house and hutong culture</li>
            <li>The prosperity and vitality of a modern international metropolis</li>
          </ul>
          
          <div className="my-8">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Beijing Panorama Image</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Basic Information Overview</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Visiting Seasons</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Spring (March-May): Pleasant temperatures, blooming flowers</li>
            <li>Autumn (September-October): Clear skies, comfortable weather, red foliage</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Climate Characteristics</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Spring: Warm and comfortable, occasional sandstorms</li>
            <li>Summer: Hot and rainy</li>
            <li>Autumn: Cool and dry</li>
            <li>Winter: Cold and dry</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Local Transportation Overview</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Well-developed subway network covering major attractions</li>
            <li>Dense bus routes reaching remote scenic spots</li>
            <li>Taxi starting fare: 13 yuan</li>
            <li>Shared bicycles available throughout the city</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Cultural and Historical Overview</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Historical Development</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Shang and Zhou Dynastien: Initial establishment as Ji City</li>
            <li>Yuan Dynasty: Offiziell als Hauptstadt etabliert, genannt Dadu</li>
            <li>Ming and Qing Dynastien: Capital of Beijing, built the Forbidden City</li>
            <li>Modern Era: Developed into an international metropolis</li>
          </ul>
          
          <div className="my-8">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Historical Sites Image</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Must-Visit Attractions</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Royal Palaces and Gardens</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. The Palace Museum (Forbidden City)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The world&apos;s largest palace complex, home to 24 emperors of the Ming and Qing dynasties. Covering 720,000 square meters, the buildings are magnificent and awe-inspiring. The Hall of Supreme Harmony is China&apos;s largest wooden structure, symbolizing the pinnacle of imperial power. The Three Back Palaces were the living quarters of emperors and concubines, filled with domestic atmosphere. The Treasure Gallery and Clock Exhibition Hall house countless rare treasures. In spring, peonies bloom in the Imperial Garden, and magnolias flower in front of the corner towers, creating breathtaking scenery.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Forbidden City Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Summer Palace</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The world&apos;s largest and most well-preserved royal garden, Empress Dowager Cixi&apos;s summer retreat. Kunming Lake with its sparkling waters occupies about three-quarters of the Summer Palace area. The Long Corridor is the world&apos;s longest painted gallery, with each section featuring a unique painting. The Tower of Buddhist Incense stands majestically as the highest point in the garden. In spring, peach blossoms, apricot flowers, and magnolias bloom in succession, with weeping willows brushing the water&apos;s surface. The lakeside in spring presents the most enchanting season of this royal garden.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Temple of Heaven Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A sacred place where Ming and Qing emperors worshipped heaven, China&apos;s largest existing sacrificial building complex. The Hall of Prayer for Good Harvests with its golden top and blue tiles is the main building for ancient heaven worship. The Circular Mound Altar is constructed with three layers of white marble, creating unique acoustic effects that amaze visitors. The Echo Wall is a miracle of ancient architectural acoustics. In spring, plum blossoms, magnolias, and begonia flowers bloom in succession. The Temple of Heaven at dawn displays the solemn and majestic imperial atmosphere.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Temple of Heaven Park Image</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Great Wall Sections</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Mutianyu Great Wall</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of the best-preserved sections of the Great Wall, with steep mountain terrain. Winding along mountain peaks, it presents a magnificent spectacle. The remains of 23 Ming Dynasty watchtowers witness the vicissitudes of history. In spring, wildflowers bloom abundantly, and the Wall is surrounded by lush greenery. On clear days, visitors can see distant overlapping mountains, creating spectacular views.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Great Wall Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Badaling Great Wall</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The essence of the Great Wall and the earliest section opened to the public. With seven towers to the north and three to the south, it presents a magnificent view. The fort buildings are well-preserved, exemplifying Ming Dynasty military architecture. Climbing the Great Wall in spring, visitors can see wildflowers decorating the walls. Looking into the distance, the undulating mountains and the Great Wall resembling a giant dragon create an unforgettable sight.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Characteristic Districts and Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of the most representative old Beijing hutongs with 800 years of historical and cultural accumulation. Gray tiles and brick walls, courtyard houses display traditional Beijing life. The hutong gathers various time-honored brands and creative cultural shops. Traditional and modern elements merge, showing vitality and ancient charm. Walking through the hutong in spring allows visitors to experience the most authentic Beijing life.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shichahai Area</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of old Beijing&apos;s three lakes, with a strong historical and cultural atmosphere. Weeping willows line the banks of the Silver Ingot Bridge. Prince Gong&apos;s Mansion testifies to the luxury of noble life. The Houhai Bar Street showcases the charm of modern nightlife. Springtime, lotus flowers bloom, boats dot the water, creating a picturesque scene.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shichahai Image</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Modern Architecture and Venues</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Olympic Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The main venue of the 2008 Olympics, a masterpiece of modern architecture. The Bird&apos;s Nest&apos;s unique steel structure design has become a new landmark of Beijing. The Water Cube&apos;s water cube exterior glows with changing colors at night. In spring, tulips bloom in the park, creating a beautiful contrast with the modern buildings. At sunset, the modern architecture shines in the golden sunlight.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 Art District</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An art district converted from abandoned factories, a gathering place for contemporary art. It preserves the characteristics of German industrial architecture. Galleries, art installations, and graffiti art can be seen everywhere. In spring, outdoor art exhibitions increase, and artists create outdoors. It represents a perfect integration of industrial heritage and artistic innovation.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798 Art District Image</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Natural Scenery and Parks</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Fragrant Hills Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The premier scenic spot in Beijing&apos;s western suburbs, a historic garden. It features numerous cultural landscapes such as the Shuangqing Villa, the Xiangshan Temple, and the Biyun Temple. In spring, azaleas bloom throughout the mountains. From the top, visitors can overlook the entire Beijing city. It represents a perfect combination of royal gardens and natural scenery.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Beijing Botanical Garden</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beijing&apos;s largest botanical garden with a rich variety of species. In spring, the cherry garden, peony garden, and peach blossom garden bloom in succession. Rare plants in the greenhouse remain green throughout the four seasons. It showcases the unique charm of northern gardens. It&apos;s an ideal place for natural education and landscape appreciation.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Religious Architecture</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe Temple (Lama Temple)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The largest Tibetan Buddhist temple of the Qing Dynasty, formerly the residence of Prince Yong. The 26-meter-high sandalwood Buddha statue is the world&apos;s tallest. The architectural style combines Han and Tibetan features. It houses a large collection of Buddhist artifacts and art treasures. Solemn and dignified, it reveals royal grandeur.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan Temple</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of Beijing&apos;s oldest temples, with history dating back to the Jin Dynasty. The ancient building complex is well-preserved, showcasing ancient architectural art. It houses numerous Buddhist artifacts and historical stone inscriptions. Ancient trees bloom in spring, creating beautiful garden scenery. It&apos;s a pure land in the city, away from the hustle and bustle.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Museums and Cultural Venues</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. National Museum of China</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            China&apos;s largest museum, with the world&apos;s largest collection. &quot;The Road to Rejuvenation&quot; exhibition showcases China&apos;s modern history. &quot;Ancient China&quot; displays the development of five thousand years of civilization. It regularly hosts top-level international relic exhibitions. It is the treasure house of Chinese civilization.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Capital Museum</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A professional museum showcasing Beijing&apos;s history and culture. It recreates old Beijing&apos;s urban changes, displays traditional folk culture, and houses a large collection of relics unearthed in the Beijing area. It serves as a window to understand Beijing&apos;s history and culture.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">特色体验</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">文化体验</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>京剧表演欣赏</li>
            <li>四合院住宿体验</li>
            <li>茶文化品鉴</li>
            <li>胡同深度游</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京传统美食</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京的美食文化源远流长，既有宫廷菜系的精致典雅，也有市井小吃的朴实美味。以下是几种不容错过的北京传统美食：
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京烤鸭</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beijing&apos;s most famous dish, often referred to as "the treasure on the tip of the tongue." Authentic Peking duck is characterized by its crispy skin and tender, flavorful meat. The traditional way to enjoy it is to wrap the duck slices with thin pancakes, sweet bean sauce, and julienned scallions. Time-honored restaurants like Quanjude, Da Dong, and Bianyifang are the premier places to taste authentic Peking duck.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Zhajiang Noodles</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing home-cooked dish, often listed among China&apos;s top ten noodles. It consists of hand-pulled noodles topped with stir-fried meat sauce and fresh vegetables like cucumber strips and bean sprouts. The dish offers a savory aroma and rich flavor. Old Ciqi Kou and the Lao Beijing Zhajiang Noodle Restaurant are great places to taste authentic Zhajiang noodles.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Shuan Yangrou (Beijing Hot Pot)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Originating from the Yuan Dynasty over 800 years ago, this imperial dish is cooked quickly in a copper pot of boiling broth and dipped in a special sesame sauce. Restaurants like Donglaishun and Luming Spring offer the most authentic Beijing hot pot experience. During winter in Beijing, a steaming hot pot of lamb is the warmest indulgence.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shuan Yangrou Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Shaobing and Ai Wowo</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Traditional Peking pastries and snacks. Shaobing is a crispy, flaky flatbread available in both sweet and savory flavors. Ai Wowo is a seasonal treat made during the Qingming Festival, prepared with mugwort and glutinous rice, offering a fragrant and chewy texture. Wangshun Zhai in Mengkuang Hutong and the Huguo-Tempel-Snack-Shop both offer these traditional pastries.
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            This ancient capital carries too much history and culture, with every corner possibly hiding a moving story, and every attraction worth savoring. Beijing in spring is a colorful painting waiting for you to explore and discover. From royal grandeur to ordinary life, from traditional culture to modern art, Beijing presents diverse charms, giving visitors a unique cultural experience.
          </p>
        </>
      );
    } else if (currentLanguage === 'de') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Erster Eindruck</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Die prächtige Verbotene Stadt mit ihren glitzernden goldenen Dachziegeln, die Große Mauer, die sich durch die Berge schlängelt, der Klang von Dreiradklingeln in den Hutongs, die Glasvorhangwände des CBD, die den Sonnenuntergang widerspiegeln... Das ist Peking, eine Stadt, die Altes und Modernes, Tradition und Innovation verbindet. Als Hauptstadt mit einer 3.000-jährigen Geschichte des Städtebaus und einer 800-jährigen Geschichte als Hauptstadt trägt Peking die Essenz der chinesischen Zivilisation und zeigt die pulsierende Energie des modernen Chinas.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Charakteristischste Merkmale:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Der größte königliche Palastkomplex der Welt - die Verbotene Stadt</li>
            <li>Eines der größten Ingenieurbauwerke der Menschheitsgeschichte - die Große Mauer</li>
            <li>Die einzigartige Hofhaus- und Hutong-Kultur</li>
            <li>Der Wohlstand und die Vitalität einer modernen internationalen Metropole</li>
          </ul>
          
          <div className="my-8">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Panorama Bild</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Grundlegende Informationen</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Beste Besuchszeiten</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Frühling (März-Mai): Angenehme Temperaturen, blühende Blumen</li>
            <li>Herbst (September-Oktober): Klarer Himmel, angenehmes Wetter, rotes Laub</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Klimatische Eigenschaften</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Frühling: Warm und angenehm, gelegentliche Sandstürme</li>
            <li>Sommer: Heiß und regnerisch</li>
            <li>Herbst: Kühl und trocken</li>
            <li>Winter: Kalt und trocken</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Lokale Verkehrsübersicht</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Gut entwickeltes U-Bahn-Netz, das die wichtigsten Attraktionen abdeckt</li>
            <li>Dichte Busverbindungen zu entfernten Sehenswürdigkeiten</li>
            <li>Taxi-Grundtarif: 13 Yuan</li>
            <li>Shared Bikes in der ganzen Stadt verfügbar</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Kultur- und Geschichtsüberblick</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Historische Entwicklung</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Shang- und Zhou-Dynastien: Erste Gründung als Ji-Stadt</li>
            <li>Yuan-Dynastie: Offiziell als Hauptstadt etabliert, genannt Dadu</li>
            <li>Ming- und Qing-Dynastien: Hauptstadt Peking, Bau der Verbotenen Stadt</li>
            <li>Moderne: Entwicklung zu einer internationalen Metropole</li>
          </ul>
          
          <div className="my-8">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Historische Stätten Bild</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Sehenswürdigkeiten</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Königliche Paläste und Gärten</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Der Palastmuseum (Verbotene Stadt)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte Palastkomplex der Welt, Heimat von 24 Kaisern der Ming- und Qing-Dynastien. Mit einer Fläche von 720.000 Quadratmetern sind die Gebäude prächtig und beeindruckend. Die Halle der Höchsten Harmonie ist Chinas größte Holzkonstruktion und symbolisiert den Höhepunkt der kaiserlichen Macht. Die Drei Hinteren Paläste waren die Wohnquartiere von Kaisern und Konkubinen, erfüllt von häuslicher Atmosphäre. Die Schatzkammer und die Uhrenausstellungshalle beherbergen unzählige seltene Schätze. Im Frühling blühen Pfingstrosen im Kaiserlichen Garten, und Magnolien blühen vor den Ecktürmen und schaffen eine atemberaubende Szenerie.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Verbotene Stadt Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Sommerpalast</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte und am besten erhaltene königliche Garten der Welt, der Sommerrückzugsort der Kaiserwitwe Cixi. Der Kunming-See mit seinem funkelnden Wasser nimmt etwa drei Viertel des Sommerpalast-Areals ein. Der Lange Korridor ist die längste bemalte Galerie der Welt, wobei jeder Abschnitt ein einzigartiges Gemälde aufweist. Der Turm des Buddhistischen Weihrauchs steht majestätisch als höchster Punkt im Garten. Im Frühling blühen Pfirsichblüten, Aprikosenblüten und Magnolien nacheinander, mit Trauerweiden, die die Wasseroberfläche streifen. Das Seeufer im Frühling präsentiert die bezauberndste Jahreszeit dieses königlichen Gartens.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Himmelstempel-Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ein heiliger Ort, an dem die Kaiser der Ming- und Qing-Dynastien den Himmel verehrten, Chinas größter existierender Opferbaukomplex. Die Halle des Gebets für gute Ernten mit ihrem goldenen Dach und blauen Ziegeln ist das Hauptgebäude für die alte Himmelsanbetung. Der Kreisförmige Hügelaltar besteht aus drei Schichten aus weißem Marmor und erzeugt einzigartige akustische Effekte, die Besucher erstaunen. Die Echowand ist ein Wunder der antiken architektonischen Akustik. Im Frühling blühen Pflaumenblüten, Magnolien und Begonienblüten nacheinander. Der Himmelstempel im Morgengrauen zeigt die feierliche und majestätische kaiserliche Atmosphäre.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Himmelstempel-Park Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Abschnitte der Großen Mauer</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Mutianyu Große Mauer</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der am besten erhaltenen Abschnitte der Großen Mauer mit steilem Berggelände. Sie schlängelt sich entlang der Berggipfel und bietet ein prächtiges Schauspiel. Die Überreste von 23 Wachtürmen aus der Ming-Dynastie zeugen von den Wechselfällen der Geschichte. Im Frühling blühen Wildblumen in Hülle und Fülle, und die Mauer ist von üppigem Grün umgeben. An klaren Tagen können Besucher entfernte, überlappende Berge sehen, die spektakuläre Ausblicke bieten.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Große Mauer Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Badaling Große Mauer</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Die Essenz der Großen Mauer und der früheste für die Öffentlichkeit zugängliche Abschnitt. Mit sieben Türmen im Norden und drei im Süden bietet sie einen großartigen Anblick. Die Festungsgebäude sind gut erhalten und veranschaulichen die Militärarchitektur der Ming-Dynastie. Beim Erklimmen der Großen Mauer im Frühling können Besucher Wildblumen sehen, die die Mauern schmücken. Mit Blick in die Ferne bilden die welligen Berge und die Große Mauer, die einem riesigen Drachen ähnelt, einen unvergesslichen Anblick.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Charakteristische Viertel und Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der repräsentativsten alten Pekinger Hutongs mit 800 Jahren historischer und kultureller Ansammlung. Graue Ziegel und Backsteinmauern, Hofhäuser zeigen das traditionelle Pekinger Leben. Der Hutong versammelt verschiedene altehrwürdige Marken und kreative Kulturläden. Traditionelle und moderne Elemente verschmelzen und zeigen Vitalität und antiken Charme. Ein Spaziergang durch den Hutong im Frühling ermöglicht es Besuchern, das authentischste Pekinger Leben zu erleben.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shichahai-Gebiet</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der drei Seen des alten Peking mit einer starken historischen und kulturellen Atmosphäre. Trauerweiden säumen die Ufer der Silberbarrenbrücke. Der Prinz-Gong-Palast zeugt vom Luxus des adligen Lebens. Die Houhai-Bar-Straße zeigt den Charme des modernen Nachtlebens. Im Frühling erscheinen Lotusblumen, Boote bedecken das Wasser und schaffen eine malerische Szene.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shichahai Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Moderne Architektur und Lieux</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Olympiapark</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der Hauptveranstaltungsort der Olympischen Spiele 2008, ein Meisterwerk moderner Architektur. Das einzigartige Stahlkonstruktionsdesign des Vogelnests ist zu einem neuen Wahrzeichen Pekings geworden. Das blasenähnliche Äußere des Wasserwürfels leuchtet nachts in wechselnden Farben. Im Frühling blühen Tulpen im Park und schaffen einen schönen Kontrast zu den modernen Gebäuden. Bei Sonnenuntergang erstrahlt die moderne Architektur im goldenen Sonnenlicht.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 Art District</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An art district converted from abandoned factories, a gathering place for contemporary art. It preserves the characteristics of German industrial architecture. Galleries, art installations, and graffiti art can be seen everywhere. In spring, outdoor art exhibitions increase, and artists create outdoors. It represents a perfect integration of industrial heritage and artistic innovation.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798 Kunstbezirk Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Naturlandschaften und Parks</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Duftende Hügel Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The premier scenic spot in Pekings western suburbs, a historic garden. It features numerous cultural landscapes such as the Shuangqing Villa, the Xiangshan Temple, and the Biyun Temple. In spring, azaleas bloom throughout the mountains. From the top, visitors can overlook the entire city Peking. It represents a perfect combination of royal gardens and natural scenery.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Pekinger Botanischer Garten</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings größter botanischer Garten with a rich variety of species. In spring, the cherry garden, peony garden, and peach blossom garden bloom in succession. Rare plants in the greenhouse remain green throughout the four seasons. It showcases the unique charm of northern gardens. It's an ideal place for natural education and landscape appreciation.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Religiöse Architektur</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe-Tempel (Lama-Tempel)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The largest Tibetan Buddhist temple of the Qing Dynasty, formerly the residence of Prince Yong. The 26-meter-high sandalwood Buddha statue is the tallest. The architectural style combines Han- and Tibetan features. It houses a large collection of Buddhist artifacts and art treasures. Solemne et digne, il révèle une grandeur royale.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe-Tempel Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan-Tempel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des plus anciens temples de Pékin, dont l&apos;histoire remonte à la dynastie Jin. Le complexe de bâtiments anciens est bien préservé, montrant l&apos;art architectural ancien. Il abrite de nombreux artefacts buddhistes et inscriptions historiques sur pierre. Les arbres anciens fleurissent au printemps, créant un beau paysage de jardin. C&apos;est une terre pure dans la ville, loin de l&apos;agitation.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Musées et Lieux Culturels</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Musée National de Chine</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand musée de Chine avec la plus grande collection du monde. L&apos;exposition &quot;La Route de la Revitalisation&quot; montre l&apos;histoire moderne de la Chine. &quot;La Chine Ancienne&quot; présente le développement de cinq mille ans de civilisation. Il accueille régulièrement des expositions de reliques internationales de haut niveau. C&apos;est le trésor de la civilisation chinoise.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Musée de la Capitale</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un musée professionnel présentant l&apos;histoire et la culture de Pékin. Il recrée les changements urbains du vieux Pékin, expose la culture folklorique traditionnelle et abrite une grande collection de reliques déterrées dans la région de Pékin. Il sert de fenêtre pour comprendre l&apos;histoire et la culture de Pékin.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Besondere Erlebnisse</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Kulturerlebnisse</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Peking-Oper-Aufführungen</li>
            <li>Übernachtung in einem traditionellen Hofhaus</li>
            <li>Teekultur-Schätzung</li>
            <li>Vertiefte Hutong-Touren</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Traditionelle Pekinger Küche</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings Esskultur has a long history, featuring both the refined elegance of imperial cuisine and the rustic flavors of street food. Here are some traditional Pekinger dishes you shouldn't miss:
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Pekingente</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings berühmtester kulinarischer Botschafter, oft als "Nationalschatz auf der Zungenspitze" bezeichnet. Authentic Pekingente is characterized by crispy skin and tender, flavorful meat. The traditional way to enjoy it is to wrap the duck slices with thin pancakes, sweet bean sauce, and julienned scallions. Time-honored restaurants like Quanjude, Da Dong, and Bianyifang are the premier places to taste authentic Pekingente.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Pekingente Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Zhajiang-Nudeln</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Pekinger Hausmannskost-Gericht, das als eines der "Top Ten Nudeln Chinas" geehrt wird. It consists of hand-pulled noodles topped with stir-fried meat sauce and fresh vegetables like cucumber strips and bean sprouts. The dish offers a savory aroma and rich flavor. Old Ciqi Kou and the Lao Beijing Zhajiang Noodle Restaurant are great places to taste authentic Zhajiang noodles.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Shuan Yangrou (Pekinger Feuertopf)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An imperial dish originating from the Yuan Dynasty over 800 years ago. Thinly sliced lamb is quickly cooked in a copper pot of boiling broth and dipped in a special sesame sauce. Century-old restaurants like Donglaishun and Luming Spring offer the most authentic Beijing hot pot experience. During winter in Beijing, a steaming hot pot of lamb is the warmest indulgence.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shuan Yangrou Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Shaobing und Ai Wowo</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Traditional Pekinger Gebäck- und Snackvariationen. Shaobing is a crispy, flaky flatbread available in both sweet and savory flavors. Ai Wowo is a seasonal treat made during the Qingming Festival, prepared with mugwort and glutinous rice, offering a fragrant and chewy texture. Wangshun Zhai in Mengkuang Hutong and the Huguo-Tempel-Snack-Shop both offer these traditional pastries.
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            This ancient capital carries too much history and culture, with every corner possibly hiding a moving story, and every attraction worth savoring. Peking in spring is a colorful painting waiting for you to explore and discover. From royal grandeur to ordinary life, from traditional culture to modern art, Peking presents diverse charms and gives visitors a unique cultural experience.
          </p>
        </>
      );
    } else if (currentLanguage === 'fr') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Première Impression</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La magnifique Cité Interdite avec ses tuiles dorées étincelantes, la Grande Muraille serpentant à travers les montagnes, le son des cloches de tricycles dans les hutongs, les murs-rideaux de verre du CBD reflétant le coucher du soleil... C&apos;est Pékin, une ville qui mélange l&apos;ancien et le moderne, la tradition et l&apos;innovation. En tant que capitale avec une histoire de construction urbaine de 3 000 ans et une histoire de 800 ans en tant que capitale, Pékin porte l&apos;essence de la civilisation chinoise et montre l&apos;énergie vibrante de la Chine moderne.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Caractéristiques les plus représentatives :</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Le plus grand complexe de palais royal du monde - la Cité Interdite</li>
            <li>L&apos;un des plus grands projets d&apos;ingénierie de l&apos;histoire humaine - la Grande Muraille</li>
            <li>La culture unique des maisons à cour et des hutongs</li>
            <li>La prospérité et la vitalité d&apos;une métropole internationale moderne</li>
          </ul>
          
          <div className="my-8">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Panoramique de Pékin</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Aperçu des Informations de Base</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Meilleures Saisons de Visite</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Printemps (mars-mai) : Températures agréables, fleurs en floraison</li>
            <li>Automne (septembre-octobre) : Ciel clair, temps confortable, feuillage rouge</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Caractéristiques Climatiques</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Printemps : Chaud et confortable, tempêtes de sable occasionnelles</li>
            <li>Été : Chaud et pluvieux</li>
            <li>Automne : Frais et sec</li>
            <li>Hiver : Froid et sec</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Aperçu des Transports Locaux</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Réseau de métro bien développé couvrant les principales attractions</li>
            <li>Lignes de bus denses atteignant les sites pittoresques éloignés</li>
            <li>Tarif de départ en taxi : 13 yuans</li>
            <li>Vélos partagés disponibles dans toute la ville</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Aperçu Culturel et Historique</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Développement Historique</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Dynasties Shang et Zhou : Établissement initial en tant que ville Ji</li>
            <li>Dynastie Yuan : Officiellement établie comme capitale, appelée Dadu</li>
            <li>Dynasties Ming et Qing : Capitale de Pékin, construction de la Cité Interdite</li>
            <li>Ère moderne : Développée en une métropole internationale</li>
          </ul>
          
          <div className="my-8">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image des Sites Historiques</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Attractions Incontournables</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Palais Royaux et Jardins</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Le Musée du Palais (Cité Interdite)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand complexe de palais du monde, foyer de 24 empereurs des dynasties Ming et Qing. Couvrant 720,000 mètres carrés, les bâtiments sont magnifiques et imposants. La Salle de l&apos;Harmonie Suprême est la plus grande structure en bois de Chine, symbolisant le sommet du pouvoir impérial. Les Trois Palais Arrières étaient les quartiers d&apos;habitation des empereurs et des concubines, remplis d&apos;atmosphère domestique. La Galerie du Trésor et la Salle d&apos;Exposition des Horloges abritent d&apos;innombrables trésors rares. Au printemps, les pivoines fleurissent dans le Jardin Impérial, et les magnolias fleurissent devant les tours d&apos;angle, créant un paysage à couper le souffle.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Forbidden City Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Palais d&apos;Été</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand et mieux préservé jardin royal du monde, retraite estivale de l&apos;impératrice douairière Cixi. Le lac Kunming avec ses eaux étincelantes occupe environ trois quarts de la superficie du Palais d&apos;Été. Le Long Corridor est la plus longue galerie peinte du monde, avec chaque section présentant une peinture unique. La Tour de l&apos;Encens Bouddhiste se dresse majestueusement comme le point le plus élevé du jardín. Au printemps, les fleurs de pêcher, d&apos;abricotier et les magnolias fleurissent successivement, avec des saules pleureurs effleurant la surface de l&apos;eau. Les bords du lac au printemps présentent la saison la plus enchanteresse de ce jardín real.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Temple du Ciel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un lieu sacré où les empereurs des Ming et des Qing vénéraient le ciel, le plus grand complexe de bâtiments sacrificiels existant en Chine. La Salle de Prière pour les Bonnes Récoltes avec son toit doré et ses tuiles bleues est le bâtiment principal pour l&apos;ancien culte du ciel. L&apos;Autel du Monticule Circulaire est construit avec trois couches de marbre blanc, créant des effets acoustiques uniques qui étonnent les visiteurs. Le Mur d&apos;Écho est un miracle de l&apos;acoustique architecturale ancienne. En primavera, les fleurs de prunier, les magnolias, et les bégonias fleurissent successivement. Le Temple du Ciel à l&apos;aube affiche l&apos;atmosphère solennelle et majestueuse impériale.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Temple of Heaven Park Image</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Sections de la Grande Muraille</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Grande Muraille de Mutianyu</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;une des sections les mieux préservées de la Grande Muraille, avec un terrain montagneux escarpé. Serpentant le long des sommets des montagnes, elle présente un spectacle magnifique. Les vestiges de 23 tours de guet de la dynastie Ming témoignent des vicissitudes de l&apos;histoire. Au printemps, les fleurs sauvages fleurissent abondamment, et la Muraille est entourée de verdure luxuriante. Par temps clair, les visiteurs peuvent voir des montagnes lointaines qui se chevauchent, créant des vues spectaculaires.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Great Wall Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Badaling Great Wall</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La esencia de la Grande Muraille et la première section ouverte au public. Avec sept tours au nord et trois au sud, elle présente une vue magnifique. Les bâtiments de la forteresse sont bien préservés, illustrant l&apos;architecture militaire de la dynastie Ming. En escaladant la Grande Muraille au printemps, les visiteurs peuvent voir des fleurs sauvages qui décorent les murs. En regardant au loin, les montagnes ondulantes et la Grande Muraille ressemblant à un dragon géant créent une vue inoubliable.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Characteristic Districts and Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des hutongs les plus représentatifs du vieux Pékin avec 800 ans d&apos;accumulation historique et culturelle. Les tuiles grises et les murs de briques, les maisons à cour montrent la vie traditionnelle de Pékin. Le hutong rassemble diverses marques honorées par le temps et des boutiques culturelles créatives. Les éléments traditionnels et modernes fusionnent, montrant vitalité et charme ancien. Se promener dans le hutong au printemps permet aux visiteurs d&apos;expérimenter la vie pékinoise la plus authentique.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shichahai-Gebiet</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der drei Seen des alten Peking mit einer starken historischen und kulturellen Atmosphäre. Trauerweiden säumen die Ufer der Silberbarrenbrücke. Der Prinz-Gong-Palast zeugt vom Luxus des adligen Lebens. Die Houhai-Bar-Straße zeigt den Charme des modernen Nachtlebens. Im Frühling erscheinen Lotusblumen, Boote bedecken das Wasser und schaffen eine malerische Szene.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shichahai Image</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Architecture Moderne et Lieux</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Olympiapark</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le lieu principal des Jeux Olympiques de 2008, un chef-d&apos;œuvre d&apos;architecture moderne. La conception unique en structure d&apos;acier du Nid d&apos;Oiseau est devenue un nouveau point de repère de Pékin. L&apos;extérieur semblable à des bulles du Cube d&apos;Eau brille avec des couleurs changeantes la nuit. Au printemps, les tulipes fleurissent dans le parc, créant un beau contraste avec les bâtiments modernes. Au coucher du soleil, l&apos;architecture moderne brille dans la lumière dorée du soleil.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 Art District</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An art district converted from abandoned factories, a gathering place for contemporary art. It preserves the characteristics of German industrial architecture. Galleries, art installations, and graffiti art can be seen everywhere. In spring, outdoor art exhibitions increase, and artists create outdoors. It represents a perfect integration of industrial heritage and artistic innovation.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798 Art District Image</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Natural Scenery and Parks</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Fragrant Hills Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The premier scenic spot in Pekings western suburbs, a historic garden. It features numerous cultural landscapes such as the Shuangqing Villa, the Xiangshan Temple, and the Biyun Temple. In spring, azaleas bloom throughout the mountains. From the top, visitors can overlook the entire city Peking. It represents a perfect combination of royal gardens and natural scenery.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Pekinger Botanischer Garten</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings größter botanischer Garten with a rich variety of species. In spring, the cherry garden, peony garden, and peach blossom garden bloom in succession. Rare plants in the greenhouse remain green throughout the four seasons. It showcases the unique charm of northern gardens. It's an ideal place for natural education and landscape appreciation.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Religious Architecture</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe Temple (Temple des Lamas)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand temple bouddhiste tibétain de la dynastie Qing, anciennement la résidence du Prince Yong. La statue de Bouddha en bois de santal de 26 mètres de haut est la plus haute du monde. Le style architectural combine des caractéristiques Han et tibétaines. Il abrite une grande collection d&apos;artefacts bouddhistes et de trésors artistiques. Solemne et digne, il révèle une grandeur royale.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan Temple</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des plus anciens temples de Pékin, dont l&apos;histoire remonte à la dynastie Jin. Le complexe de bâtiments anciens est bien préservé, montrant l&apos;art architectural ancien. Il abrite de nombreux artefacts buddhistes et inscriptions historiques sur pierre. Les arbres anciens fleurissent au printemps, créant un beau paysage de jardin. C&apos;est une terre pure dans la ville, loin de l&apos;agitation.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Musées et Lieux Culturels</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Musée National de Chine</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand musée de Chine avec la plus grande collection du monde. L&apos;exposition &quot;La Route de la Revitalisation&quot; montre l&apos;histoire moderne de la Chine. &quot;La Chine Ancienne&quot; présente le développement de cinq mille ans de civilisation. Il accueille régulièrement des expositions de reliques internationales de haut niveau. C&apos;est le trésor de la civilisation chinoise.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Musée de la Capitale</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un musée professionnel présentant l&apos;histoire et la culture de Pékin. Il recrée les changements urbains du vieux Pékin, expose la culture folklorique traditionnelle et abrite une grande collection de reliques déterrées dans la région de Pékin. Il sert de fenêtre pour comprendre l&apos;histoire et la culture de Pékin.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">特色体验</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">文化体验</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>京剧表演欣赏</li>
            <li>四合院住宿体验</li>
            <li>茶文化品鉴</li>
            <li>胡同深度游</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京传统美食</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京的美食文化源远流长，既有宫廷菜系的精致典雅，也有市井小吃的朴实美味。以下是几种不容错过的北京传统美食：
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京烤鸭</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beijing&apos;s most famous dish, often referred to as "the treasure on the tip of the tongue." Authentic Peking duck is characterized by its crispy skin and tender, flavorful meat. The traditional way to enjoy it is to wrap the duck slices with thin pancakes, sweet bean sauce, and julienned scallions. Time-honored restaurants like Quanjude, Da Dong, and Bianyifang are the premier places to taste authentic Peking duck.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Nouilles Zhajiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un plat familial pékinois honoré comme l&apos;un des &quot;Dix Meilleures Nouilles de Chine&quot;. Il se compose de nouilles étirées à la main garnies de sauce à la viande sautée et de légumes frais comme des lanières de concombre et des pousses de haricots. Le plat offre un arôme savoureux et une saveur riche. Old Ciqi Kou et le Restaurant de Nouilles Zhajiang Lao Beijing sont d&apos;excellents endroits pour goûter aux authentiques nouilles Zhajiang.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Shuan Yangrou (Hot Pot de Pekín)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un plato imperial originario de la dinastía Yuan hace más de 800 años. Finas lonchas de cordero se cocinan rápidamente en una olla de cobre con caldo hirviendo y se mojan en una salsa especial de sésamo. Century-old restaurants like Donglaishun and Luming Spring offer the most authentic Beijing hot pot experience. During winter in Beijing, a steaming hot pot of lamb is the warmest indulgence.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shuan Yangrou Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Shaobing and Ai Wowo</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Traditional Pekinger Gebäck- und Snackvariationen. Shaobing is a crispy, flaky flatbread available in both sweet and savory flavors. Ai Wowo is a seasonal treat made during the Qingming Festival, prepared with mugwort and glutinous rice, offering a fragrant and chewy texture. Wangshun Zhai in Mengkuang Hutong and the Huguo-Tempel-Snack-Shop both offer these traditional pastries.
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            Cette ancienne capitale porte trop d&apos;histoire et de culture, chaque coin pouvant cacher une histoire émouvante, et chaque atracción méritant d&apos;être savourée. Pékin au printemps est une peinture colorée qui vous attend pour l&apos;explorer et la découvrir. De la grandeur royale à la vie ordinaire, de la culture traditionnelle à l&apos;art moderne, Pékin présente des charmes divers, offrant aux visiteurs une expérience culturelle unique.
          </p>
        </>
      );
    } else if (currentLanguage === 'es') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Primera Impresión</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La magnífica Ciudad Prohibida con sus relucientes tejas doradas, la Gran Muralla serpenteando a través de las montañas, el sonido de las campanas de los triciclos en los hutongs, las paredes de cristal del CBD reflejando el atardecer... Esta es Pekín, una ciudad que combina lo antiguo y lo moderno, la tradición y la innovación. Como capital con una historia de construcción urbana de 3.000 años y una historia de 800 años como capital, Pekín lleva la esencia de la civilización china y muestra la energía vibrante de la China moderna.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Características más representativas:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>El complejo palaciego real más grande del mundo - la Ciudad Prohibida</li>
            <li>Una de las mayores obras de ingeniería en la historia de la humanidad - la Gran Muralla</li>
            <li>La cultura única de las casas con patio y los hutongs</li>
            <li>La prosperidad y vitalidad de una metrópolis internacional moderna</li>
          </ul>
          
          <div className="my-8">
            {/* Marcador de posición para imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen Panorámica de Pekín</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Información Básica</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Mejores Temporadas para Visitar</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Primavera (marzo-mayo): Temperaturas agradables, flores en floración</li>
            <li>Otoño (septiembre-octubre): Cielos despejados, clima confortable, follaje rojo</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Características Climáticas</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Primavera: Cálido y confortable, tormentas de arena ocasionales</li>
            <li>Verano: Caluroso y lluvioso</li>
            <li>Otoño: Fresco y seco</li>
            <li>Invierno: Frío y seco</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Transporte Local</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Red de metro bien desarrollada que cubre las principales atracciones</li>
            <li>Rutas de autobús densas que llegan a lugares turísticos remotos</li>
            <li>Tarifa inicial de taxi: 13 yuanes</li>
            <li>Bicicletas compartidas disponibles en toda la ciudad</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Resumen Cultural e Histórico</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Desarrollo Histórico</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Dinastías Shang y Zhou: Establecimiento inicial como Ciudad Ji</li>
            <li>Dinastía Yuan: Establecida oficialmente como capital, llamada Dadu</li>
            <li>Dinastías Ming y Qing: Capital de Pekín, construcción de la Ciudad Prohibida</li>
            <li>Era moderna: Desarrollo como metrópolis internacional</li>
          </ul>
          
          <div className="my-8">
            {/* Marcador de posición para imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de Sitios Históricos</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Atracciones Imprescindibles</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Palacios y Jardines Reales</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. El Museo del Palacio (Ciudad Prohibida)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El complejo palaciego más grande del mundo, hogar de 24 emperadores de las dinastías Ming y Qing. Cubriendo 720.000 metros cuadrados, los edificios son magníficos e impresionantes. El Salón de la Armonía Suprema es la estructura de madera más grande de China, simbolizando el pináculo del poder imperial. Los Tres Palacios Posteriores eran las viviendas de emperadores y concubinas, llenas de atmósfera doméstica. La Galería del Tesoro y la Sala de Exposición de Relojes albergan innumerables tesoros raros. En primavera, las peonías florecen en el Jardín Imperial, y las magnolias florecen frente a las torres de esquina, creando un paisaje impresionante.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición para imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de la Ciudad Prohibida</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Palacio de Verano</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El jardín real más grande y mejor conservado del mundo, retraite estivale de l&apos;impératrice douairière Cixi. El lac Kunming con sus eaux étincelantes occupe environ trois quarts de la superficie du Palais d&apos;Été. Le Long Corridor est la plus longue galerie peinte du monde, avec chaque section présentant une peinture unique. La Tour de l&apos;Encens Bouddhiste se dresse majestueusement como le point le plus élevé du jardín. En primavera, los melocotoneros, los albaricoqueros y las magnolias fleurissent successivement, con sauces llorones rozando la superficie de l&apos;eau. Les bords du lac au printemps présentent la saison la plus enchanteresse de ce jardín real.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Parque del Templo del Cielo</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un lugar sagrado donde los empereurs des Ming et des Qing vénéraient le ciel, le plus grand complexe de bâtiments sacrificiels existant en Chine. La Salle de Prière pour les Bonnes Récoltes avec son toit doré et ses tuiles bleues est le bâtiment principal pour l&apos;ancien culte du ciel. L&apos;Autel du Monticule Circulaire est construit avec trois couches de marbre blanc, créant des effets acoustiques uniques qui étonnent les visiteurs. Le Mur d&apos;Écho est un miracle de l&apos;acoustique architecturale ancienne. En primavera, les fleurs de prunier, les magnolias et les bégonias fleurissent successivement. Le Temple du Ciel à l&apos;aube affiche l&apos;atmosphère solennelle et majestueuse impériale.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image du Parc du Temple du Ciel</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Secciones de la Gran Muralla</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Grande Muralla de Mutianyu</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;une des sections les mieux préservées de la Grande Muraille, avec un terrain montagneux escarpé. Serpentant le long des sommets des montagnes, elle présente un spectacle magnifique. Les vestiges de 23 tours de guet de la dynastie Ming témoignent des vicissitudes de l&apos;histoire. Au printemps, les fleurs sauvages fleurissent abondamment, et la Muraille est entourée de verdure luxuriante. Par temps clair, les visiteurs peuvent voir des montagnes lointaines qui se chevauchent, créant des vues spectaculaires.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de la Grande Muraille</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Grande Muralla de Badaling</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La esencia de la Grande Muralla y la primera sección abierta al público. Con siete torres al norte y tres al sur, presenta una vista magnífica. Los edificios de la fortaleza están bien conservados, ejemplificando la arquitectura militar de la dinastía Ming. Al escalar la Gran Muralla en primavera, los visitantes pueden ver flores silvestres decorando los muros. Mirando a lo lejos, las ondulantes montañas y la Gran Muralla asemejándose a un dragón géant crean una vista inolvidable.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Distritos Característicos y Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los hutongs más representativos del antiguo Pekín con 800 años de acumulación histórica y cultural. Tejas grises y paredes de ladrillo, casas con patio muestran la vida tradicional de Pekín. El hutong reúne varias marcas honradas por el tiempo y tiendas culturales creativas. Los elementos tradicionales y modernos se fusionan, montrando vitalidad y encanto antiguo. Caminar por el hutong en primavera permite a los visitantes experimentar la vida más auténtica de Pekín.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Área de Shichahai</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los tres lagos del viejo Pékin, con una fuerte atmósfera histórica y cultural. Sauces llorones bordan las orillas del Puente del Lingote de Plata. La Mansión del Príncipe Gong da testimonio del lujo de la vida noble. La calle de bares de Houhai muestra el encanto de la vida nocturna moderna. En primavera, las flores de loto emergen, los botes salpican el agua, creando una escena pintoresca.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de Shichahai</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Arquitectura Moderna y Lugares</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parque Olímpico</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La sede principal de los Juegos Olímpicos de 2008, una obra maestra de la arquitectura moderna. El diseño único de estructura de acero del Nido de Pájaro se ha convertido en un nuevo punto de referencia de Pekín. El exterior similar a burbujas del Cubo de Agua brilla con colores cambiantes por la noche. En primavera, los tulipanes florecen en el parque, creando un hermoso contraste con los edificios modernos. Al atardecer, la arquitectura moderna brille en la luz dorada del sol.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Distrito Artístico 798</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un distrito artístico convertido de fábricas abandonadas, un lugar de reunión para el arte contemporáneo. Conserva las características de la arquitectura industrial alemana. Galerías, instalaciones artísticas y arte de grafiti se pueden ver en todas partes. En primavera, aumentan las exposiciones de arte al aire libre, y los artistas crean al aire libre. Representa una perfecta integración del patrimonio industrial y la innovación artística.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Distrito Artístico 798</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Paisajes Naturales y Parques</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parque de las Colinas Fragantes</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El principal lugar turístico en los suburbios occidentales de Pekín, un jardín histórico. Cuenta con numerosos paisajes culturales tels que la Villa Shuangqing, el Templo Xiangshan y el Templo Biyun. En primavera, las azaleas florecen por todas las montañas. Desde la cima, los visitantes pueden contemplar toda la ciudad de Pekín. Representa una combinación perfecta de jardines reales y paisajes naturales.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Jardín Botánico de Pekín</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El jardín botánico más grande de Pekín con una rica variedad de especies. En primavera, el jardín de cerezos, el jardín de pivoines y el jardín de flores de melocotonero florecen sucesivamente. Las plantas raras en el invernadero permanecen verdes durante las cuatro estaciones. Muestra el encanto único de los jardines del norte. Es un lugar ideal para la educación natural y la apreciación del paisaje.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Arquitectura Religiosa</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Templo Yonghe (Templo de los Lamas)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El templo budista tibetano más grande de la dinastía Qing, anteriormente la residencia del Príncipe Yong. La estatua de Buda de sándalo de 26 metros de altura es la más alta del mundo. El estilo arquitectónico combina características Han y tibetanas. Alberga una gran colección de artefactos budistas y tesoros artísticos. Solemne y digno, revela grandeza real.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Templo Yonghe</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Templo Fayuan</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los templos más antiguos de Pekín, con historia que se remonta a la dinastía Jin. El complejo de edificios antiguos está bien conservado, mostrando el arte arquitectónico antiguo. Alberga numerosos artefactos budistas e inscripciones históricas en piedra. Los árboles antiguos florecen en primavera, creando un hermoso paisaje de jardín. Es una tierra pura en la ciudad, lejos del bullicio.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Museos y Lugares Culturales</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Museo Nacional de China</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El museo más grande de China con la colección más grande del mundo. La exposición &quot;El Camino al Rejuvenecimiento&quot; muestra la historia moderna de China. &quot;La Chine Ancienne&quot; présente le développement de cinq mille ans de civilisation. Il accueille régulièrement des expositions de reliques internationales de haut niveau. C&apos;est le trésor de la civilisation chinoise.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Musée de la Capitale</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un musée professionnel présentant l&apos;histoire et la culture de Pékin. Il recrée les changements urbains du vieux Pékin, expose la culture folklorique traditionnelle et abrite une grande collection de reliques déterrées dans la région de Pékin. Il sert de fenêtre pour comprendre l&apos;histoire et la culture de Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Expériences Spéciales</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Expériences Culturelles</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Actuaciones de Ópera de Pekín</li>
            <li>Hospedaje en una maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Gastronomía Tradicional de Pekín</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La culture alimentaire de Pékin a une longue histoire, présentant à la fois l&apos;élégance raffinée de la cuisine impériale et les saveurs rustiques de la cuisine de rue. Voici quelques plats traditionnels pékinois à ne pas manquer :
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Pato Laqué de Pékin</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;ambassadeur culinair e le plus célèbre de Pékin, a menné appelé &quot;trésor national sur le bout de la langue.&quot; Le canard laqué authentique de Pékin se caractérise par une peau croustillante et une viande tendre et savoureuse. La façon traditionnelle de le déguster consiste à envelopper les tranches de canard avec des crêpes fines, de la sauce aux haricots sucrée et des oignons verts julienne. Les restaurants réputés comme Quanjude, Da Dong et Bianyifang sont les meilleurs endroits pour goûter au canard laqué authentique de Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image du Canard Laqué de Pékin</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Nouilles Zhajiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un plat familial pékinois honoré como l&apos;un des &quot;Dix Meilleures Nouilles de Chine&quot;. Il se compose de nouilles étirées à la main garnies de sauce à la viande sautée et de légumes frais comme des lanières de concombre et des pousses de haricots. Le plat offre un arôme savoureux et une saveur riche. Old Ciqi Kou et le Restaurant de Nouilles Zhajiang Lao Beijing sont d&apos;excellents endroits pour goûter aux authentiques nouilles Zhajiang.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image des Nouilles Zhajiang</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Shuan Yangrou (Hot Pot de Pekín)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un plato imperial originario de la dinastía Yuan hace más de 800 años. Des tranches fines d&apos;agneau se cocinan rápidamente en una olla de cobre con caldo hirviendo y se mojan en una salsa especial de sésamo. Des restaurants centenarios como Donglaishun y Luming Spring ofrecen la experiencia más auténtica de hot pot de Pekín. Durante el invierno en Pekín, una fondue fumante d&apos;agneau es la más cálida de las indulgencias.
          </p>
          
          <div className="my-6">
            {/* Placeholder d&apos;image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de Shuan Yangrou</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Shaobing y Ai Wowo</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pasteles y aperitivos tradicionales de Pekín. El Shaobing es un pan plano crujiente y hojaldrado disponible en sabores dulces y salados. El Ai Wowo es un dulce estacional preparado durante el Festival Qingming, hecho con artemisa y arroz glutinoso, ofreciendo una textura fragante y masticable. Wangshun Zhai en el Hutong Mengkuang y la Tienda de Aperitivos del Templo Huguo ofrecen estos pasteles tradicionales.
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            Esta antigua capital lleva demasiada historia y cultura, con cada esquina posiblemente escondiendo una historia conmovedora, y cada atracción digna de saborear. Pekín en primavera es una pintura colorida esperando a que la explore y descubra. Desde la grandeza real hasta la vida ordinaria, desde la cultura tradicional hasta el arte moderno, Pekín presenta diversos encantos, brindando a los visitantes una experiencia cultural única.
          </p>
        </>
      );
    } else if (currentLanguage === 'ja') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">第一印象</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            金色の瓦が輝く壮大な紫禁城、山々を蛇行する万里の長城、胡同での三輪車の鈴の音、夕焼けを映すCBDのガラスカーテンウォール...これが北京です。古代と現代、伝統と革新が融合する都市です。3,000年の都市建設の歴史と800年の首都としての歴史を持つ北京は、中国文明の精髄を担い、現代中国の活気ある姿を見せています。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">最も代表的な特徴：</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>世界最大の皇居複合施設 - 紫禁城</li>
            <li>人類史上最大の建設プロジェクトの一つ - 万里の長城</li>
            <li>独特の四合院と胡同文化</li>
            <li>現代国際都市としての繁栄と活力</li>
          </ul>
          
          <div className="my-8">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京パノラマ画像</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本情報の概要</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">ベストシーズン</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春（3月〜5月）：心地よい気温、咲き誇る花々</li>
            <li>秋（9月〜10月）：澄んだ空、快適な気候、紅葉</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">気候の特徴</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春：暖かく快適、時折砂嵐</li>
            <li>夏：暑く雨が多い</li>
            <li>秋：涼しく乾燥</li>
            <li>冬：寒く乾燥</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">現地交通の概要</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>主要観光地をカバーする発達した地下鉄網</li>
            <li>遠隔地の観光スポットに到達する密集したバス路線</li>
            <li>タクシーの基本料金：13元</li>
            <li>市内全域で利用可能なシェア自転車</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化と歴史の概要</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">歴史的発展</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>殷周時代：初期の都市「薊」として設立</li>
            <li>元朝：正式に首都として確立、大都と呼ばれる</li>
            <li>明・清朝：北京を首都とし、紫禁城を建設</li>
            <li>現代：国際都市へと発展</li>
          </ul>
          
          <div className="my-8">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">歴史的遺跡の画像</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必見の観光名所</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">皇居と庭園</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 故宮博物院（紫禁城）</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界最大の宮殿複合施設で、明清朝24人の皇帝の居住地でした。72万平方メートルを占め、建物は壮麗で荘厳です。太和殿は中国最大の木造建築物で、皇帝権力の最高点を象徴しています。後三宮は皇帝と妃たちの生活区域で、生活の雰囲気に満ちています。珍宝館と鐘表館には数え切れない希少な宝物が収蔵されています。春には御花園で牡丹が咲き誇り、角楼の前では木蓮が花開き、息をのむような景色を作り出します。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">故宮の画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 頤和園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界最大かつ最も保存状態の良い皇室庭園で、西太后の夏の避暑地でした。昆明湖とその輝く水面は頤和園面積の約四分の三を占めています。長廊は世界最長の彩色された回廊で、各区画に独特の絵画が描かれています。仏香閣は庭園内で最も高い場所に荘厳に立っています。春には桃の花、杏の花、木蓮が次々と咲き誇り、柳の枝が水面をなでています。春の湖畔はこの皇室庭園の最も魅惑的な季節を見せてくれます。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 天壇公園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            明清朝の皇帝が天を崇拝した神聖な場所で、中国最大の祭祀建築群です。金色の屋根と青い瓦を持つ祈年殿は古代の天への崇拝の主要建築物です。円丘壇は三層の白い大理石で構築され、独特の音響効果で訪問者を驚かせます。回音壁は古代建築音響の奇跡です。春には梅の花、木蓮、秋海棠が次々と咲き誇ります。夜明けの天壇は厳粛で荘厳な皇帝の雰囲気を醸し出します。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">天壇公園の画像</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">万里の長城</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 慕田峪長城</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            最もよく保存された長城区間の一つで、険しい山岳地帯に位置しています。山の頂に沿って蛇行し、壮大な光景を見せてくれます。明朝時代の23の見張り塔の遺跡が歴史の変遷を物語っています。春には野花が豊かに咲き誇り、長城は鮮やかな緑に囲まれています。晴れた日には、遠くの重なり合う山々を見ることができ、息をのむような景色を作り出します。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">長城の画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 八達嶺長城</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            万里の長城の精髄であり、最も早く一般公開された区間です。北に7つの塔、南に3つの塔があり、壮大な景色を見せています。城塞建築はよく保存されており、明朝の軍事建築の典型例となっています。春に長城を登ると、長城を飾る野花を見ることができます。遠くを見渡すと、起伏のある山々と巨大な竜のような長城が忘れられない光景を作り出します。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">特色ある地区と胡同</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 南鑼鼓巷</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            800年の歴史と文化の蓄積を持つ、最も代表的な北京の胡同の一つです。灰色の瓦と煉瓦の壁、四合院は伝統的な北京の生活を見せています。胡同にはさまざまな老舗店舗と創造的な文化ショップが集まっています。伝統と現代の要素が融合し、活気と古い魅力を示しています。春に胡同を散歩すると、訪問者は最も本格的な北京の生活を体験できます。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 什刹海地区</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            旧北京の三つの湖の一つで、強い歴史的・文化的雰囲気を持っています。銀錠橋のほとりには柳の木が並んでいます。恭王府は貴族生活の豪華さを証言しています。後海バーストリートは現代の夜の生活の魅力を見せています。春になると蓮の花が咲き始め、ボートが水面に点在し、絵のような景色を作り出します。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">什刹海の画像</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">現代建築と会場</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. オリンピック公園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            2008年オリンピックのメイン会場であり、現代建築の傑作です。「鳥の巣」のユニークな鋼鉄構造デザインは北京の新しいランドマークとなりました。「水立方」の水の立方体のような外観は夜には変化する色で輝きます。春には公園内でチューリップが咲き誇り、現代建築との美しいコントラストを作り出します。夕暮れ時には、現代建築が金色の日光に輝いています。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798芸術区</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            放棄された工場から転換された芸術区で、現代アートの集まる場所です。ドイツの産業建築の特徴を保存しています。ギャラリー、アートインスタレーション、グラフィティアートがいたるところで見られます。春には野外アート展示が増え、アーティストが屋外で創作活動を行います。産業遺産と芸術革新の完璧な融合を表しています。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798芸術区の画像</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">自然景観と公園</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 香山公園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京西郊の一流の景勝地であり、歴史的な庭園です。双清別荘、香山寺、碧雲寺などの多くの文化的景観があります。春にはツツジが山全体に咲き誇ります。頂上からは北京全市を見渡すことができます。皇室庭園と自然景観の完璧な組み合わせを表しています。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 北京植物園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最大の植物園で、種の豊富な多様性を持っています。春には桜園、牡丹園、桃の花園が次々と花開きます。温室内の希少植物は一年中緑を保っています。北方庭園の独特の魅力を見せています。自然教育と景観鑑賞のための理想的な場所です。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">宗教建築</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 雍和宮</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            清朝最大のチベット仏教寺院で、以前は雍親王の邸宅でした。26メートルの高さの白檀仏像は世界一高いものです。建築様式は漢族とチベット族の特徴を融合させています。多くの仏教遺物や芸術的宝物を収蔵しています。厳粛で威厳があり、皇室の壮大さを示しています。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">雍和宮の画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 法源寺</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最古の寺院の一つで、歴史は晋朝にまで遡ります。古代建築群はよく保存されており、古代建築芸術を示しています。多くの仏教遺物や歴史的な石碑を収蔵しています。古木が春に花を咲かせ、美しい庭園の景色を作り出します。都会の中の浄土であり、喧騒から離れた場所です。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">博物館と文化施設</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 中国国家博物館</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            中国最大の博物館で、世界最大のコレクションを持っています。「復興への道」展示は中国の近現代史を紹介しています。「古代中国」は五千年の文明の発展を示しています。定期的に国際的な高レベルの遺物展示を開催しています。中国文明の宝庫です。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 首都博物館</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京の歴史と文化を紹介する専門博物館です。旧北京の都市変化を再現し、伝統的な民俗文化を展示し、北京地域で発掘された多くの遺物を収蔵しています。北京の歴史と文化を理解するための窓口となっています。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">博物館の画像</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">特色ある体験</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">文化体験</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>京劇公演観賞</li>
            <li>四合院での宿泊体験</li>
            <li>茶文化鑑賞</li>
            <li>胡同深度ツアー</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京の伝統料理</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京の食文化は長い歴史を持ち、宮廷料理の洗練された優雅さと路上食の素朴な味わいの両方を特徴としています。以下は見逃せない北京の伝統料理です：
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京ダック</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京で最も有名な料理で、「舌先の国宝」とも呼ばれています。本格的な北京ダックはパリッとした皮と柔らかく風味豊かな肉が特徴です。伝統的な食べ方は、薄いパンケーキに甘い豆ソースとネギのせん切りと一緒にダックのスライスを包むことです。全聚徳、大董、便宜坊などの老舗レストランは本格的な北京ダックを味わうことができる一流の場所です。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京ダックの画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. ジャージャー麺</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            「中国十大麺」の一つに数えられる北京の伝統的な家庭料理です。手打ち麺の上に炒めた肉味噌ソースをかけ、キュウリの細切りや豆もやしなどの新鮮な野菜を添えています。料理は風味豊かな香りと濃厚な味わいを提供します。老磁器口と老北京炸醤麺館は本格的なジャージャー麺を味わうのに最適な場所です。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">ジャージャー麺の画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. しゃぶしゃぶ (北京火鍋)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            800年以上前の元朝から伝わる宮廷料理です。薄切りのラム肉を銅鍋の沸騰したスープで素早く調理し、特製のゴマソースにつけて食べます。東来順や鹿鳴春などの老舗レストランが最も本格的な北京火鍋の体験を提供しています。北京の冬には、湯気の立つラム肉の火鍋が最も温かい贅沢です。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">しゃぶしゃぶの画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. 焼餅と艾窩窩</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京の伝統的なペストリーとスナック。焼餅はサクサクとしたフラットブレッドで、甘いものと塩味の両方があります。艾窩窩は清明節に作られる季節のおやつで、よもぎと餅米で作られ、香りが良く、もっちりとした食感があります。門框胡同のWangshun Zhaiや護国寺小吃店ではこれらの伝統的なペストリーを提供しています。
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            この古都はあまりにも多くの歴史と文化を抱えており、どの角にも感動的な物語が隠されている可能性があり、すべての観光スポットがじっくりと味わう価値があります。春の北京は、あなたが探検し発見を待っているカラフルな絵画です。皇室の壮大さから日常生活まで、伝統文化から現代美術まで、北京は多様な魅力を持ち、訪問者に独特の文化体験を提供します。
          </p>
        </>
      );
    } else if (currentLanguage === 'ko') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">첫 인상</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            황금색 기와가 빛나는 웅장한 자금성, 산을 따라 굽이치는 만리장성, 후통에서 들리는 삼륜차 종소리, 석양을 비추는 CBD의 유리 커튼월... 이곳이 베이징입니다. 고대와 현대, 전통과 혁신이 융합된 도시입니다. 3,000년의 도시 건설 역사와 800년의 수도 역사를 가진 베이징은 중국 문명의 정수를 담고 있으며, 현대 중국의 활기찬 에너지를 보여줍니다.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">가장 대표적인 특징:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>세계 최대의 왕궁 단지 - 자금성</li>
            <li>인류 역사상 가장 위대한 건축 공사 중 하나 - 만리장성</li>
            <li>독특한 사합원과 후통 문화</li>
            <li>현대 국제 대도시의 번영과 활력</li>
          </ul>
          
          <div className="my-8">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">베이징 파노라마 이미지</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">기본 정보 개요</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">최적의 방문 시기</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>봄(3월-5월): 쾌적한 기온, 만개하는 꽃들</li>
            <li>가을(9월-10월): 맑은 하늘, 쾌적한 날씨, 붉은 단풍</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">기후 특성</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>봄: 따뜻하고 쾌적, 간혹 황사</li>
            <li>여름: 덥고 비가 많음</li>
            <li>가을: 서늘하고 건조함</li>
            <li>겨울: 춥고 건조함</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">현지 교통 개요</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>주요 관광지를 연결하는 발달된 지하철망</li>
            <li>외곽 관광지까지 연결되는 밀집된 버스 노선</li>
            <li>택시 기본요금: 13위안</li>
            <li>도시 전역에서 이용 가능한 공유 자전거</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">문화 및 역사 개요</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">역사적 발전</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>상주 시대: 지성(薊城)으로 초기 설립</li>
            <li>원나라: 공식적으로 수도로 지정, 대도(大都)라 불림</li>
            <li>명청 시대: 베이징을 수도로 정하고 자금성 건설</li>
            <li>현대: 국제 대도시로 발전</li>
          </ul>
          
          <div className="my-8">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">역사적 유적지 이미지</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">필수 방문 명소</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">왕궁과 정원</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 고궁 박물관 (자금성)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            세계 최대의 궁전 단지로, 명청 시대 24명의 황제들의 거주지였습니다. 72만 평방미터에 걸쳐 있으며, 건물들은 웅장하고 장엄합니다. 태화전은 중국 최대의 목조 건축물로, 황제 권력의 정점을 상징합니다. 후삼궁은 황제와 후궁들의 생활 공간으로, 일상적인 분위기가 느껴집니다. 보물관과 시계 전시관에는 수많은 진귀한 보물들이 소장되어 있습니다. 봄에는 어원에 모란이 만발하고, 모서리 탑 앞에는 목련이 피어 숨막히는 경치를 만들어냅니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">자금성 이미지</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 이화원</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            세계에서 가장 크고 가장 잘 보존된 왕실 정원으로, 서태후의 여름 휴양지였습니다. 반짝이는 물이 있는 쿤밍 호수는 이화원 면적의 약 4분의 3을 차지합니다. 장랑은 세계에서 가장 긴 채색된 회랑으로, 각 구역마다 독특한 그림이 그려져 있습니다. 불향각은 정원에서 가장 높은 지점에 웅장하게 서 있습니다. 봄에는 복숭아꽃, 살구꽃, 목련이 연이어 피고, 수양버들이 수면을 스치며, 왕실 정원의 가장 매혹적인 계절을 선보입니다.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 천단 공원</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            명청 황제들이 하늘에 제사를 지내던 신성한 장소로, 중국에서 현존하는 가장 큰 제사 건축물 단지입니다. 황금 지붕과 푸른 기와를 가진 기년전은 고대 하늘 숭배의 주요 건물입니다. 원구단은 세 층의 흰 대리석으로 지어져 있으며, 방문객들을 놀라게 하는 독특한 음향 효과를 만들어냅니다. 회음벽은 고대 건축 음향의 기적입니다. 봄에는 매화, 목련, 베고니아가 차례로 만발합니다. 새벽의 천단은 엄숙하고 장엄한 황제의 분위기를 보여줍니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">천단 공원 이미지</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">만리장성 구간</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 무티안유 장성</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            가장 잘 보존된 장성 구간 중 하나로, 가파른 산악 지형에 위치해 있습니다. 산봉우리를 따라 굽이치며, 웅장한 장관을 보여줍니다. 명나라 시대의 23개 망루 유적은 역사의 변천을 증명합니다. 봄에는 야생화가 풍성하게 피어나고, 장성은 푸른 녹음으로 둘러싸여 있습니다. 맑은 날에는 멀리 겹쳐진 산들을 볼 수 있어, 숨막히는 경치를 선사합니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">만리장성 이미지</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 바달링 장성</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            만리장성의 정수이자 가장 먼저 대중에게 개방된 구간입니다. 북쪽으로 7개의 탑, 남쪽으로 3개의 탑이 있어 웅장한 전망을 보여줍니다. 성채 건물들은 잘 보존되어 있으며, 명나라 군사 건축의 전형을 보여줍니다. 봄에 장성을 등반하면 장성을 장식하는 야생화를 볼 수 있습니다. 멀리 바라보면, 기복이 있는 산들과 거대한 용과 같은 장성이 잊을 수 없는 광경을 만들어냅니다.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">특색 있는 지역과 후통</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 난루오구샹</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            800년의 역사와 문화적 축적을 가진, 가장 대표적인 베이징 후통 중 하나입니다. 회색 기와와 벽돌 벽, 사합원은 전통적인 베이징 생활을 보여줍니다. 후통에는 다양한 전통 상점과 창의적인 문화 매장들이 모여 있습니다. 전통과 현대 요소가 융합되어 활기와 고풍스러운 매력을 보여줍니다. 봄에 후통을 거닐면 방문객들은 가장 정통한 베이징 생활을 경험할 수 있습니다.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 스차하이 지역</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            옛 베이징의 세 호수 중 하나로, 강한 역사적, 문화적 분위기를 가지고 있습니다. 은정 다리의 제방에는 수양버들이 늘어서 있습니다. 공왕부는 귀족 생활의 사치를 증명합니다. 후해 바 거리는 현대 야간 생활의 매력을 보여줍니다. 봄에는 연꽃이 피기 시작하고, 배들이 물 위에 점점이 떠 있어 그림 같은 장면을 만들어냅니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">스차하이 이미지</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">현대 건축물과 장소</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 올림픽 공원</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            2008년 올림픽의 주요 장소로, 현대 건축의 걸작입니다. '새둥지'의 독특한 강철 구조 디자인은 베이징의 새로운 랜드마크가 되었습니다. '물 큐브'의 물방울 같은 외관은 밤에 변화하는 색상으로 빛납니다. 봄에는 공원 내 튤립이 만발하여 현대 건축물과 아름다운 대비를 이룹니다. 일몰 시간에는 현대 건축물이 황금빛 햇살 속에서 빛납니다.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 예술구</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            폐공장에서 변모한 예술 지구로, 현대 예술의 집결지입니다. 독일 산업 건축의 특징을 보존하고 있습니다. 갤러리, 예술 설치물, 그래피티 아트를 곳곳에서 볼 수 있습니다. 봄에는 야외 예술 전시가 증가하고, 예술가들이 야외에서 창작 활동을 펼칩니다. 산업 유산과 예술 혁신의 완벽한 융합을 보여줍니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798 예술구 이미지</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">베이징 전통 음식</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            베이징의 음식 문화는 오랜 역사를 가지고 있으며, 궁중 요리의 정교함과 길거리 음식의 소박한 맛 모두를 특징으로 합니다. 다음은 놓치면 안 될 베이징의 전통 요리입니다:
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 베이징 카오야 (북경 오리)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            베이징에서 가장 유명한 요리로, "혀끝의 국보"라고도 불립니다. 정통 베이징 오리는 바삭한 껍질과 부드럽고 풍미 있는 고기가 특징입니다. 전통적인 먹는 방법은 얇은 팬케이크에 달콤한 콩 소스와 파 채를 곁들여 오리 슬라이스를 싸먹는 것입니다. 전취덕, 다동, 변이방과 같은 유서 깊은 레스토랑은 정통 베이징 오리를 맛볼 수 있는 최고의 장소입니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">베이징 카오야 이미지</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 자장면</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            "중국 10대 면요리" 중 하나로 꼽히는 베이징의 전통 가정식입니다. 볶은 고기 소스를 손으로 뽑은 면 위에 얹고, 오이채와
            콩나물 같은 신선한 채소를 곁들입니다. 이 요리는 짭조름한 향과 풍부한 맛을 제공합니다. 라오 치치 코우와 라오 베이징 자장면관은 정통 자장면을 맛볼 수 있는 훌륭한 장소입니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">자장면 이미지</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 샤브샤브 (베이징 훠궈)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            800년 이상 전 원나라에서 기원한 궁중 요리입니다. 얇게 썬 양고기를 끓는 육수에 빠르게 데쳐 특별한 참깨 소스에 찍어 먹습니다. 동래순과 루밍춘과 같은 백년 된 레스토랑들은 가장 정통한 베이징 훠궈 체험을 제공합니다. 베이징의 겨울에는 김이 모락모락 나는 양고기 훠궈가 가장 따뜻한 즐거움을 선사합니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">샤브샤브 이미지</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. 샤오빙과 아이워워</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            베이징의 전통 페이스트리와 간식입니다. 샤오빙은 바삭하고 층이 있는 플랫브레드로, 달콤한 맛과 짭짤한 맛 모두 있습니다. 아이워워는 청명절에 만드는 계절 간식으로, 쑥과 찹쌀로 만들어져 향기롭고 쫄깃한 식감을 제공합니다. 멍쿠앙 후통의 왕순자이와 후궈 사 간식점 모두 이러한 전통 페이스트리를 제공합니다.
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            이 고대 수도는 너무 많은 역사와 문화를 담고 있어, 모든 모퉁이에 감동적인 이야기가 숨어 있을 수 있고, 모든 명소가 음미할 가치가 있습니다. 봄의 베이징은 당신이 탐험하고 발견하기를 기다리는 다채로운 그림입니다. 왕실의 웅장함부터 일상 생활까지, 전통 문화부터 현대 예술까지, 베이징은 다양한 매력을 제시하고 방문객들에게 독특한 문화 체험을 제공합니다.
          </p>
        </>
      );
    } else if (currentLanguage === 'ru') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Первое впечатление</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Величественный Запретный город с блестящими золотыми черепицами, Великая стена, извивающаяся по горам, звон велорикш в хутунах, стеклянные стены делового района, отражающие закат... Это Пекин, город, сочетающий древнее и современное, традиции и инновации. Как столица с 3000-летней историей строительства города и 800-летней историей в качестве столицы, Пекин несет в себе сущность китайской цивилизации и демонстрирует энергичную энергию современного Китая.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Самые характерные особенности:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Крупнейший в мире царский дворцовый комплекс - Запретный город</li>
            <li>Один из величайших инженерных проектов в истории человечества - Великая стена</li>
            <li>Уникальная культура сыхэюаней и хутунов</li>
            <li>Процветание и жизненная сила современного международного мегаполиса</li>
          </ul>
          
          <div className="my-8">
            {/* Заглушка для изображения */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Панорама Пекина</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Общая информация</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Лучшие сезоны для посещения</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Весна (март-май): Приятные температуры, цветущие цветы</li>
            <li>Осень (сентябрь-октябрь): Чистое небо, комфортная погода, красная листва</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Климатические особенности</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Весна: Тепло и комфортно, иногда песчаные бури</li>
            <li>Лето: Жарко и дождливо</li>
            <li>Осень: Прохладно и сухо</li>
            <li>Зима: Холодно и сухо</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Обзор местного транспорта</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Хорошо развитая сеть метро, охватывающая основные достопримечательности</li>
            <li>Плотные автобусные маршруты, доходящие до отдаленных живописных мест</li>
            <li>Начальный тариф такси: 13 юаней</li>
            <li>Велосипеды общего пользования доступны по всему городу</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Культурный и исторический обзор</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Историческое развитие</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Династии Шан и Чжоу: Первоначальное основание как город Цзи</li>
            <li>Династия Юань: Официально учреждена как столица, называемая Даду</li>
            <li>Династии Мин и Цин: Столица Пекин, построен Запретный город</li>
            <li>Современность: Развитие в международный мегаполис</li>
          </ul>
          
          <div className="my-8">
            {/* Заглушка для изображения */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Изображение исторических мест</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Обязательные достопримечательности</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Королевские дворцы и сады</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Дворцовый музей (Запретный город)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Крупнейший в мире дворцовый комплекс, дом для 24 императоров династий Мин и Цин. Занимая 720 000 квадратных метров, здания великолепны и внушительны. Зал Высшей гармонии - крупнейшая деревянная конструкция в Китае, символизирующая вершину императорской власти. Три задних дворца были жилыми кварталами императоров и наложниц, наполненные домашней атмосферой. Галерея сокровищ и Выставочный зал часов хранят бесчисленные редкие сокровища. Весной пионы цветут в Императорском саду, а магнолии цветут перед угловыми башнями, создавая захватывающие пейзажи.
          </p>
          
          <div className="my-6">
            {/* Заглушка для изображения */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Изображение Запретного города</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Летний дворец</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Крупнейший и наиболее хорошо сохранившийся королевский сад в мире, летнее убежище императрицы Цыси. Озеро Куньмин с его сверкающими водами занимает около трех четвертей площади Летнего дворца. Длинный коридор - самая длинная расписная галерея в мире, с каждой секцией, представляющей уникальную картину. Башня буддийского благовония величественно стоит как самая высокая точка в саду. Весной цветут персиковые цветы, цветы абрикоса и магнолии, с плакучими ивами, касающимися поверхности воды. Берег озера весной представляет самый очаровательный сезон этого королевского сада.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Храм Неба</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Священное место, где императоры династий Мин и Цин поклонялись небу, крупнейший существующий жертвенный строительный комплекс в Китае. Зал молитвы о хорошем урожае с его золотой крышей и синей черепицей является главным зданием для древнего поклонения небу. Круглый курганный алтарь построен с тремя слоями белого мрамора, создавая уникальные акустические эффекты, которые удивляют посетителей. Эхо-стена - чудо древней архитектурной акустики. Весной цветут сливовые цветы, магнолии и бегонии. Храм Неба на рассвете демонстрирует торжественную и величественную императорскую атмосферу.
          </p>
          
          <div className="my-6">
            {/* Заглушка для изображения */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Изображение Храма Неба</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Традиционная пекинская кухня</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Кулинарная культура Пекина имеет длинную историю, отличающуюся как изысканной элегантностью императорской кухни, так и деревенскими вкусами уличной еды. Вот несколько традиционных пекинских блюд, которые нельзя пропустить:
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Пекинская утка</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Самое известное блюдо Пекина, часто называемое «сокровищем на кончике языка». Аутентичная пекинская утка характеризуется хрустящей кожей и нежным, ароматным мясом. Традиционный способ насладиться ею - завернуть ломтики утки с тонкими блинчиками, сладким бобовым соусом и тонко нарезанным зеленым луком. Старинные рестораны, такие как Quanjude, Da Dong и Bianyifang, являются лучшими местами для дегустации аутентичной пекинской утки.
          </p>
          
          <div className="my-6">
            {/* Заглушка для изображения */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Изображение пекинской утки</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Лапша Чжацзян</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Традиционное пекинское домашнее блюдо, часто включаемое в список «Десять лучших лапш Китая». Оно состоит из вытянутой вручную лапши, покрытой жареным мясным соусом и свежими овощами, такими как полоски огурца и проростки фасоли. Блюдо предлагает пикантный аромат и богатый вкус. Старый Цицику и Ресторан лапши Чжацзян Лао Пекин - отличные места для дегустации аутентичной лапши Чжацзян.
          </p>
          
          <div className="my-6">
            {/* Заглушка для изображения */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Изображение лапши Чжацзян</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Шуань Янжоу (Пекинский хот-пот)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Императорское блюдо, происходящее из династии Юань более 800 лет назад. Тонкие ломтики баранины быстро готовятся в медном горшке с кипящим бульоном и окунаются в специальный кунжутный соус. Столетние рестораны, такие как Донглайшунь и Луминг Спринг, предлагают самый аутентичный опыт пекинского хот-пота. Зимой в Пекине дымящийся хот-пот с бараниной - самое теплое удовольствие.
          </p>
          
          <div className="my-6">
            {/* Заглушка для изображения */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Изображение Шуань Янжоу</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Шаобин и Ай Вово</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Традиционная пекинская выпечка и закуски. Шаобин - хрустящий, слоеный хлеб, доступный как в сладких, так и в соленых вариациях. Ай Вово - сезонное лакомство, приготовленное во время Фестиваля Цинмин, приготовленное с полынью и клейким рисом, предлагающее ароматную и жевательную текстуру. Вангшунь Чжай в хутуне Менгкуанг и закусочная храма Хугуо предлагают эту традиционную выпечку.
          </p>
          
          <p className="text-gray-700 mt-8 italic">
            Эта древняя столица несет слишком много истории и культуры, в каждом уголке, возможно, скрывается трогательная история, и каждая достопримечательность стоит того, чтобы ее смаковать. Пекин весной - это красочная картина, ожидающая вашего исследования и открытия. От королевского величия до обычной жизни, от традиционной культуры до современного искусства, Пекин представляет разнообразные очарования, предоставляя посетителям уникальный культурный опыт.
          </p>
        </>
      );
    }
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {getContentByLanguage()}
        </div>
      </main>
    </div>
  );
} 