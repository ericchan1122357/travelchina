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
        return 'Beijing: Ancient Capital&apos;s Symphony of Past and Present';
      case 'fr':
        return 'Pékin: Symphonie de l&apos;ancien et du moderne';
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
        return 'Beijing: Ancient Capital&apos;s Symphony of Past and Present';
    }
  };
  
  // 子标题多语言实现
  const getSubtitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '探索中国首都的皇家风韵与现代魅力';
      case 'en':
        return 'Explore the Royal Charm and Modern Appeal of China&apos;s Capital';
      case 'fr':
        return 'Explorez le charme royal et l&apos;attrait moderne de la capitale chinoise';
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
        return 'Explore the Royal Charm and Modern Appeal of China&apos;s Capital';
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
    if (currentLanguage === 'zh') {
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
            保存最完好的长城段落之一，山势险峻。蜿蜒于群山之巅，气势磅礴。23座明代烽火台遗址，见证历史沧桑。春季山花烂漫，长城沿线绿意盎然。晴好天气可远眺群山叠翠，景色壮丽。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">长城图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 八达岭长城</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            万里长城的精华段落，也是最早对外开放的长城景区。北七楼、南三楼，雄伟壮观。关城建筑保存完好，是明代军事建筑的典范。春日登长城，可见山花点缀城墙。举目远眺，群山起伏，长城如巨龙盘踞。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">特色街区与胡同</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 南锣鼓巷</h4>
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
            <li>Shang and Zhou Dynasties: Initial establishment as Ji City</li>
            <li>Yuan Dynasty: Officially established as capital, called Dadu</li>
            <li>Ming and Qing Dynasties: Capital of Beijing, built the Forbidden City</li>
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
            One of old Beijing&apos;s three lakes, with a strong historical and cultural atmosphere. Weeping willows line the banks of the Silver Ingot Bridge. Prince Gong&apos;s Mansion testifies to the luxury of noble life. The Houhai Bar Street showcases the charm of modern nightlife. In spring, lotus flowers emerge, boats dot the water, creating a picturesque scene.
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
            The main venue of the 2008 Olympics, a masterpiece of modern architecture. The Bird&apos;s Nest&apos;s unique steel structure design has become a new landmark of Beijing. The Water Cube&apos;s bubble-like exterior glows with changing colors at night. In spring, tulips bloom in the park, creating a beautiful contrast with the modern buildings. At sunset, the modern architecture shines in the golden sunlight.
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
            The premier scenic spot in Beijing&apos;s western suburbs, a historic garden. It features numerous cultural landscapes such as the Shuangqing Villa, Xiangshan Temple, and Biyun Temple. In spring, azaleas bloom throughout the mountains. From the top, visitors can overlook the entire Beijing city. It represents a perfect combination of royal gardens and natural scenery.
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
            China&apos;s largest museum with the world&apos;s largest collection. &quot;The Road to Rejuvenation&quot; exhibition showcases China&apos;s modern history. &quot;Ancient China&quot; displays the development of five thousand years of civilization. It regularly hosts top-level international relic exhibitions. It is the treasure house of Chinese civilization.
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
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Special Experiences</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Experiences</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Beijing Opera performances</li>
            <li>Staying in a traditional courtyard house</li>
            <li>Tea culture appreciation</li>
            <li>In-depth hutong tours</li>
          </ul>
          
          <p className="text-gray-700 mt-8 italic">
            This ancient capital carries too much history and culture, with every corner possibly hiding a moving story, and every attraction worth savoring. Beijing in spring is a colorful painting waiting for you to explore and discover. From royal grandeur to ordinary life, from traditional culture to modern art, Beijing presents diverse charms, giving visitors a unique cultural experience.
          </p>
        </>
      );
    } else {
      // 其他语言的默认内容，可以根据需要扩展
      return (
        <div className="text-center py-10">
          <p className="text-gray-600">Coming soon in this language.</p>
        </div>
      );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部横幅区域 */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* 这里放置主要的横幅图片 */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Beijing Panorama Image</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{getTitleByLanguage()}</h1>
          <p className="text-xl max-w-2xl">{getSubtitleByLanguage()}</p>
        </div>
      </div>
      
      {/* 主要内容区域 */}
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <div className="mb-6">
            <button 
              onClick={() => router.back()} 
              className="flex items-center text-china-red hover:underline"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              {getBackButtonTextByLanguage()}
            </button>
          </div>
          
          {/* 文章内容区域 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {getContentByLanguage()}
          </div>
        </div>
      </main>
    </div>
  );
} 