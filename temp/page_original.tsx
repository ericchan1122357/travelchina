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
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京传统美食</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京烤鸭</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最著名的传统美食，有着800多年历史。外皮金黄酥脆，肉质鲜嫩多汁。传统吃法是用薄饼包裹鸭肉、葱丝、黄瓜条和甜面酱。全鸭席能将整只鸭子的各个部位以不同烹饪方式呈现。北京代表性烤鸭店有全聚德、大董、四季民福等，各有特色。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京烤鸭图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 涮羊肉</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京冬季传统美食，源于元朝宫廷。将切成薄片的鲜羊肉在沸腾的铜锅中快速涮熟，配以芝麻酱、韭菜花酱等调料食用。肉质鲜嫩，汤底清淡，既暖胃又不油腻。东来顺是北京最具代表性的涮羊肉老字号，有超过100年历史。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">涮羊肉图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 炸酱面</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最具代表性的面食之一，被誉为"北京第一面"。面条宽厚筋道，配以黄酱、甜面酱和肉丁炸制的酱料，再搭配黄瓜丝、豆芽等蔬菜。吃法讲究"三拌两吃"，味道咸鲜适口。老北京人常以能否吃干净碗底的炸酱来评判食客的吃相。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">炸酱面图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. 驴打滚</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            具有200多年历史的北京特色小吃，因其制作过程中在黄豆粉中滚动而得名。由黄米面制成的糕团裹上红色豆沙馅，再在黄豆面里滚一圈，颜色黄白相间，口感软糯香甜。尤其在春节期间，是北京人招待客人的传统甜点。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. 褡裢火烧</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京百年小吃，因形状像古代的口袋"褡裢"而得名。外皮酥脆，内馅鲜美，多为猪肉韭菜或牛肉馅。制作工艺讲究，先将馅料煸炒调味，再用特制面皮包裹，烙至两面金黄。香气浓郁，入口外酥里嫩，是老北京人喜爱的传统小吃。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">褡裢火烧图片</p>
            </div>
          </div>
          
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
            <li>Yuan Dynasty: Officiellement établie comme capitale, genannt Dadu</li>
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
            L&apos;un des trois lacs du vieux Pékin, avec une forte atmosphère historique et culturelle. Des saules pleureurs bordent les rives du pont Silver Ingot. Le Manoir du Prince Gong témoigne du luxe de la vie noble. La rue des bars de Houhai présente le charme de la vie nocturne moderne. Au printemps, les fleurs de lotus émergent, des bateaux parsèment l&apos;eau, créant une scène pittoresque.
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
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe-Tempel (Lama-Tempel)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The largest Tibetan Buddhist temple of the Qing Dynasty, formerly the residence of Prince Yong. The 26-meter-high sandalwood Buddha statue is the world&apos;s tallest. The architectural style combines Han- and Tibetan features. It houses a large collection of Buddhist artifacts and art treasures. Solemn and dignified, it reveals royal grandeur.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan-Tempel</h4>
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
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Special Experiences</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Experiences</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Beijing Opera performances</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Beijing Traditional Cuisine</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Peking Duck</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beijing&apos;s most famous traditional dish with over 800 years of history. The duck is characterized by its thin, crispy skin and tender, juicy meat. The traditional way to eat it involves wrapping the duck meat in thin pancakes with spring onions, cucumber strips, and sweet bean sauce. A complete duck banquet presents different parts of the duck prepared in various cooking methods. Beijing&apos;s representative Peking duck restaurants include Quanjude, Da Dong, and Siji Minfu, each with their own unique characteristics.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Hot Pot with Lamb Slices)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun is Beijing&apos;s most representative hot pot establishment with over 100 years of history.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Zhajiang Noodles</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of Beijing&apos;s most representative noodle dishes, known as &quot;Beijing&apos;s First Noodle.&quot; The thick, chewy noodles are topped with a sauce made from yellow soybean paste, sweet bean sauce, and diced meat, accompanied by cucumber strips, bean sprouts, and other vegetables. The proper way to eat it involves &quot;three mixings and two eatings,&quot; resulting in a savory and delicious taste. Traditional Beijing locals often judge a diner&apos;s table manners by how cleanly they can finish the sauce in their bowl.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Donkey Rolling)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Bild</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Cette capitale antique porte trop d&apos;histoire et de culture, chaque coin pouvant cacher une histoire émouvante, et chaque attraction méritant d&apos;être savourée. Pékin au printemps est une peinture colorée qui attend d&apos;être explorée et découverte. De la grandeur royale à la vie ordinaire, de la culture traditionnelle à l&apos;art moderne, Pékin présente des charmes divers, offrant aux visiteurs une expérience culturelle unique.
          </p>
        </>
      );
    } else if (currentLanguage === 'fr') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Première Impression</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La majestueuse Cité Interdite avec ses tuiles dorées étincelantes, la Grande Muraille serpentant à travers les montagnes, le son des cloches de tricycles dans les hutongs, les murs-rideaux en verre du CBD reflétant le coucher du soleil... C&apos;est Pékin, une ville qui mélange l&apos;ancien et le moderne, la tradition et l&apos;innovation. En tant que capitale avec 3 000 ans d&apos;histoire urbaine et 800 ans d&apos;histoire en tant que capitale, Pékin porte l&apos;essence de la civilisation chinoise et présente l&apos;énergie vibrante de la Chine moderne.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Caractéristiques les Plus Représentatives:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Le plus grand complexe de palais royal du monde - la Cité Interdite</li>
            <li>L&apos;un des plus grands projets d&apos;ingénierie de l&apos;histoire humaine - la Grande Muraille</li>
            <li>La culture unique des maisons à cour carrée et des hutongs</li>
            <li>La prospérité et la vitalité d&apos;une métropole internationale moderne</li>
          </ul>
          
          <div className="my-8">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Panoramique de Pékin</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Aperçu des Informations de Base</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Meilleures Saisons de Visite</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Printemps (Mars-Mai): Températures agréables, fleurs en floraison</li>
            <li>Automne (Septembre-Octobre): Ciel clair, temps confortable, feuillage rouge</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Caractéristiques Climatiques</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Printemps: Chaud et confortable, tempêtes de sable occasionnelles</li>
            <li>Été: Chaud et pluvieux</li>
            <li>Automne: Frais et sec</li>
            <li>Hiver: Froid et sec</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Aperçu des Transports Locaux</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Réseau de métro bien développé couvrant les principales attractions</li>
            <li>Lignes de bus denses atteignant les sites pittoresques éloignés</li>
            <li>Tarif de départ des taxis: 13 yuans</li>
            <li>Vélos partagés disponibles dans toute la ville</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Aperçu Culturel et Historique</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Développement Historique</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Dynasties Shang et Zhou: Établissement initial en tant que ville de Ji</li>
            <li>Dynastie Yuan: Officiellement établie comme capitale, appelée Dadu</li>
            <li>Dynasties Ming et Qing: Capitale de Pékin, construction de la Cité Interdite</li>
            <li>Ère Moderne: Développée en une métropole internationale</li>
          </ul>
          
          <div className="my-8">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image des Sites Historiques</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Attractions Incontournables</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Palais Royaux et Jardins</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Le Musée du Palais (Cité Interdite)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand complexe de palais du monde, résidence de 24 empereurs des dynasties Ming et Qing. Couvrant 720 000 mètres carrés, les bâtiments sont magnifiques et impressionnants. La Salle de l&apos;Harmonie Suprême est la plus grande structure en bois de Chine, symbolisant le sommet du pouvoir impérial. Les Trois Palais Arrière étaient les quartiers d&apos;habitation des empereurs et des concubines, remplis d&apos;ambiance domestique. La Galerie des Trésors et le Hall d&apos;Exposition des Horloges abritent d&apos;innombrables trésors rares. Au printemps, les pivoines fleurissent dans le Jardin Impérial, et les magnolias fleurissent devant les tours d&apos;angle, créant un paysage à couper le souffle.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de la Cité Interdite</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Palais d&apos;Été</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand et le mieux préservé des jardins royaux du monde, retraite estivale de l&apos;Impératrice Douairière Cixi. Le lac Kunming avec ses eaux étincelantes occupe environ trois quarts de la superficie du Palais d&apos;Été. Le Long Corridor est la plus longue galerie peinte du monde, chaque section présentant une peinture unique. La Tour de l&apos;Encens Bouddhique se dresse majestueusement comme le point culminant du jardin. Au printemps, les fleurs de pêcher, les fleurs d&apos;abricotier et les magnolias fleurissent successivement, avec des saules pleureurs effleurant la surface de l&apos;eau. Le bord du lac au printemps présente la saison la plus enchanteresse de ce jardin royal.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Parc du Temple du Ciel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un lieu sacré où les empereurs Ming et Qing adoraban al ciel, le plus grand complexe de bâtiments sacrificiels existant en Chine. La Salle de Prière pour les Bonnes Récoltes avec son sommet doré et ses tuiles bleues est le principal bâtiment pour l&apos;ancien culte du ciel. L&apos;Autel du Tertre Circulaire est construit avec trois couches de marbre blanc, créant des effets acoustiques uniques qui émerveillent les visiteurs. Le Mur d&apos;Écho est un miracle de l&apos;acoustique architecturale ancienne. Au printemps, les fleurs de prunier, les magnolias et les bégonias fleurissent successivement. Le Temple du Ciel à l&apos;aube dégage une atmosphère impériale solennelle et majestueuse.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image du Parc du Temple du Ciel</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Sections de la Grande Muraille</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Grande Muraille de Mutianyu</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;une des sections les mieux préservées de la Grande Muraille, avec un terrain montagneux escarpé. Serpentant le long des sommets montagneux, elle présente un spectacle magnifique. Les vestiges de 23 tours de guet de la dynastie Ming témoignent des vicissitudes de l&apos;histoire. Au printemps, les fleurs sauvages fleurissent abondamment, et le Mur est entouré d&apos;une végétation luxuriante. Par temps clair, les visiteurs peuvent voir des montagnes lointaines qui se chevauchent, créant des vues spectaculaires.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de la Grande Muraille</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Grande Muraille de Badaling</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La esencia de la Grande Muraille et la première section ouverte au public. Avec sept tours au nord et trois au sud, elle présente une vue magnifique. Les bâtiments de la forteresse sont bien préservés, illustrant l&apos;architecture militaire de la dynastie Ming. En escaladant la Grande Muraille au printemps, les visiteurs peuvent voir des fleurs sauvages décorant les murs. En regardant au loin, les montagnes ondulantes et la Grande Muraille ressemblant à un dragon géant créent une vue inoubliable.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Quartiers Caractéristiques et Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des hutongs les plus représentatifs du vieux Pékin avec 800 ans d&apos;accumulation historique et culturelle. Tuiles grises et murs de briques, les maisons à cour présentent la vie traditionnelle pékinoise. Le hutong rassemble diverses marques séculaires et des boutiques culturelles créatives. Les éléments traditionnels et modernes se mélangent, montrant vitalité et charme ancien. Se promener dans le hutong au printemps permet aux visiteurs de découvrir la vie la plus authentique de Pékin.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shichahai-Gebiet</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des trois lacs du vieux Pékin, avec une forte atmosphère historique et culturelle. Des saules pleureurs bordent les rives du pont Silver Ingot. Le Manoir du Prince Gong témoigne du luxe de la vie noble. La rue des bars de Houhai présente le charme de la vie nocturne moderne. Au printemps, les fleurs de lotus émergent, des bateaux parsèment l&apos;eau, créant une scène pittoresque.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de Shichahai</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Architecture Moderne et Lieux</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parc Olympique</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le lieu principal des Jeux Olympiques de 2008, un chef-d&apos;œuvre de l&apos;architecture moderne. La conception unique en structure d&apos;acier du Nid d&apos;Oiseau est devenue un nouveau point de repère de Pékin. L&apos;extérieur du Cube d&apos;Eau, ressemblant à des bulles, brille de couleurs changeantes la nuit. Au printemps, les tulipes fleurissent dans le parc, créant un beau contraste avec les bâtiments modernes. Au coucher du soleil, l&apos;architecture moderne brille dans la lumière dorée du soleil.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 Art District</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An art district converted from abandoned factories, a gathering place for contemporary art. It preserves the characteristics of German industrial architecture. Galleries, art installations, and graffiti art can be seen everywhere. In spring, outdoor art exhibitions increase, and artists create outdoors. It represents a perfect integration of industrial heritage and artistic innovation.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
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
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe-Tempel (Lama-Tempel)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The largest Tibetan Buddhist temple of the Qing Dynasty, formerly the residence of Prince Yong. The 26-meter-high sandalwood Buddha statue is the world&apos;s tallest. The architectural style combines Han- and Tibetan features. It houses a large collection of Buddhist artifacts and art treasures. Solemn and dignified, it reveals royal grandeur.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan-Tempel</h4>
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
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Special Experiences</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Experiences</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Beijing Opera performances</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Beijing Traditional Cuisine</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Peking Duck</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beijing&apos;s most famous traditional dish with over 800 years of history. The duck is characterized by its thin, crispy skin and tender, juicy meat. The traditional way to eat it involves wrapping the duck meat in thin pancakes with spring onions, cucumber strips, and sweet bean sauce. A complete duck banquet presents different parts of the duck prepared in various cooking methods. Beijing&apos;s representative Peking duck restaurants include Quanjude, Da Dong, and Siji Minfu, each with their own unique characteristics.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Hot Pot with Lamb Slices)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun is Beijing&apos;s most representative hot pot establishment with over 100 years of history.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Zhajiang Noodles</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of Beijing&apos;s most representative noodle dishes, known as &quot;Beijing&apos;s First Noodle.&quot; The thick, chewy noodles are topped with a sauce made from yellow soybean paste, sweet bean sauce, and diced meat, accompanied by cucumber strips, bean sprouts, and other vegetables. The proper way to eat it involves &quot;three mixings and two eatings,&quot; resulting in a savory and delicious taste. Traditional Beijing locals often judge a diner&apos;s table manners by how cleanly they can finish the sauce in their bowl.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Donkey Rolling)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Image</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Cette capitale antique porte trop d&apos;histoire et de culture, chaque coin pouvant cacher une histoire émouvante, et chaque attraction méritant d&apos;être savourée. Pékin au printemps est une peinture colorée qui attend d&apos;être explorée et découverte. De la grandeur royale à la vie ordinaire, de la culture traditionnelle à l&apos;art moderne, Pékin présente des charmes divers, offrant aux visiteurs une expérience culturelle unique.
          </p>
        </>
      );
    } else if (currentLanguage === 'de') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Erster Eindruck</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Die majestätische Verbotene Stadt mit ihren glitzernden goldenen Dachziegeln, die Große Mauer, die sich durch die Berge schlängelt, der Klang von Dreiradklingeln in den Hutongs, die Glasvorhangfassaden des CBD, die den Sonnenuntergang widerspiegeln... Das ist Peking, eine Stadt, die Altes und Modernes, Tradition und Innovation verbindet. Als Hauptstadt mit einer 3.000-jährigen Stadtgeschichte und einer 800-jährigen Geschichte als Hauptstadt trägt Peking die Essenz der chinesischen Zivilisation und zeigt die pulsierende Energie des modernen China.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Repräsentativste Merkmale:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Der größte königliche Palastkomplex der Welt - die Verbotene Stadt</li>
            <li>Eines der größten Ingenieurprojekte der Menschheitsgeschichte - die Große Mauer</li>
            <li>Die einzigartige Hofhauskultur und Hutong-Kultur</li>
            <li>Der Wohlstand und die Vitalität einer modernen internationalen Metropole</li>
          </ul>
          
          <div className="my-8">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Panoramabild</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Grundinformationen im Überblick</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Beste Besuchszeiten</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Frühling (März-Mai): Angenehme Temperaturen, blühende Blumen</li>
            <li>Herbst (September-Oktober): Klarer Himmel, angenehmes Wetter, rotes Laub</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Klimamerkmale</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Frühling: Warm und angenehm, gelegentliche Sandstürme</li>
            <li>Sommer: Heiß und regnerisch</li>
            <li>Herbst: Kühl und trocken</li>
            <li>Winter: Kalt und trocken</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Übersicht der lokalen Verkehrsmittel</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Gut entwickeltes U-Bahn-Netz, das die wichtigsten Attraktionen abdeckt</li>
            <li>Dichte Buslinien, die entlegene Sehenswürdigkeiten erreichen</li>
            <li>Taxi-Grundpreis: 13 Yuan</li>
            <li>Leihfahrräder überall in der Stadt verfügbar</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Kulturelle und historische Übersicht</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Historische Entwicklung</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Shang and Zhou Dynasties: Initial establishment as Ji City</li>
            <li>Yuan Dynasty: Officiellement als Hauptstadt etabliert, genannt Dadu</li>
            <li>Ming and Qing Dynasties: Capital of Beijing, built the Forbidden City</li>
            <li>Modern Era: Developed into an international metropolis</li>
          </ul>
          
          <div className="my-8">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Historische Stätten Bild</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Sehenswürdigkeiten, die man besuchen muss</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Königliche Paläste und Gärten</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Das Palastmuseum (Verbotene Stadt)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte Palastkomplex der Welt, Heimat von 24 Kaisern der Ming- und Qing-Dynastien. Mit einer Fläche von 720.000 Quadratmetern sind die Gebäude prächtig und beeindruckend. Die Halle der Höchsten Harmonie ist Chinas größte Holzstruktur und symbolisiert den Höhepunkt der kaiserlichen Macht. Die Drei Hinteren Paläste waren die Wohnquartiere der Kaiser und Konkubinen, erfüllt von häuslicher Atmosphäre. Die Schatzkammer und die Uhrenausstellungshalle beherbergen unzählige seltene Schätze. Im Frühling blühen Pfingstrosen im Kaiserlichen Garten, und Magnolien blühen vor den Ecktürmen und schaffen atemberaubende Landschaften.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Verbotene Stadt Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Sommerpalast</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte und am besten erhaltene königliche Garten der Welt, Sommerrückzugsort der Kaiserinwitwe Cixi. Der Kunming-See mit seinem funkelnden Wasser nimmt etwa drei Viertel der Fläche des Sommerpalastes ein. Der Lange Korridor ist die längste bemalte Galerie der Welt, wobei jeder Abschnitt ein einzigartiges Gemälde zeigt. Der Turm des Buddhistischen Weihrauchs steht majestätisch als höchster Punkt im Garten. In spring, peach blossoms, apricot flowers, and magnolias bloom in succession, with weeping willows brushing the water&apos;s surface. The lakeside in spring presents the most enchanting season of this royal garden.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Himmelstempelpark</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ein heiliger Ort, an dem die Kaiser der Ming- und Qing-Dynastien den Himmel verehrten, Chinas größter existierender Opferbaukomplex. Die Halle des Gebets für gute Ernten mit ihrem goldenen Dach und blauen Ziegeln ist das Hauptgebäude für die alte Himmelsverehrung. Der Kreisförmige Hügelaltar besteht aus drei Schichten weißen Marmors und erzeugt einzigartige akustische Effekte, die Besucher erstaunen. Die Echo-Mauer ist ein Wunder der antiken architektonischen Akustik. In spring, plum blossoms, magnolias, and begonia flowers bloom in succession. The Temple of Heaven at dawn displays the solemn and majestic imperial atmosphere.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Himmelstempelpark Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Abschnitte der Großen Mauer</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Mutianyu Große Mauer</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der am besten erhaltenen Abschnitte der Großen Mauer, mit steilem Berggelände. Sie schlängelt sich entlang der Berggipfel und bietet ein prächtiges Schauspiel. Die Überreste von 23 Wachtürmen aus der Ming-Dynastie zeugen von den Wechselfällen der Geschichte. Im Frühling blühen Wildblumen reichlich, und die Mauer ist von üppigem Grün umgeben. An klaren Tagen können Besucher entfernte, sich überlappende Berge sehen, die spektakuläre Ausblicke bieten.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Große Mauer Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Badaling Große Mauer</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Die Essenz der Großen Mauer und der früheste für die Öffentlichkeit zugängliche Abschnitt. Mit sieben Türmen im Norden und drei im Süden bietet sie einen prächtigen Anblick. Die Festungsgebäude sind gut erhalten und veranschaulichen die Militärarchitektur der Ming-Dynastie. Beim Klettern auf die Große Mauer im Frühling können Besucher Wildblumen sehen, die die Mauern schmücken. In die Ferne blickend, schaffen die welligen Berge und die Große Mauer, die einem riesigen Drachen ähnelt, einen unvergesslichen Anblick.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Charakteristische Viertel und Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der repräsentativsten alten Pekinger Hutongs mit 800 Jahren historischer und kultureller Anhäufung. Graue Ziegel und Ziegelmauern, Hofhäuser zeigen das traditionelle Pekinger Leben. Der Hutong versammelt verschiedene altehrwürdige Marken und kreative Kulturläden. Traditionelle und moderne Elemente verschmelzen und zeigen Vitalität und alten Charme. Ein Spaziergang durch den Hutong im Frühling ermöglicht es Besuchern, das authentischste Pekinger Leben zu erleben.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shichahai-Gebiet</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der drei Seen des alten Peking, mit einer starken historischen und kulturellen Atmosphäre. Trauerweiden säumen die Ufer der Silver Ingot Bridge. Die Villa des Prinzen Gong zeugt vom Luxus des adligen Lebens. Die Houhai Bar Street zeigt den Charme des modernen Nachtlebens. Im Frühling tauchen Lotusblumen auf, Boote punktieren das Wasser und schaffen eine malerische Szene.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shichahai Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Moderne Architektur und Veranstaltungsorte</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Olympiapark</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der Hauptveranstaltungsort der Olympischen Spiele 2008, ein Meisterwerk moderner Architektur. Das einzigartige Stahlkonstruktionsdesign des Vogelnests ist zu einem neuen Wahrzeichen von Peking geworden. Die blasenähnliche Außenseite des Wasserwürfels leuchtet nachts in wechselnden Farben. Im Frühling blühen Tulpen im Park und schaffen einen schönen Kontrast zu den modernen Gebäuden. Bei Sonnenuntergang erstrahlt die moderne Architektur im goldenen Sonnenlicht.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 Kunstviertel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ein Kunstviertel, das aus verlassenen Fabriken umgewandelt wurde, ein Treffpunkt für zeitgenössische Kunst. Es bewahrt die Merkmale der deutschen Industriearchitektur. Galerien, Kunstinstallationen und Graffiti-Kunst sind überall zu sehen. In spring, outdoor art exhibitions increase, and artists create outdoors. It represents a perfect integration of industrial heritage and artistic innovation.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798 Kunstviertel Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Naturlandschaften und Parks</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Duftende Hügel Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der wichtigste landschaftlich reizvolle Ort in den westlichen Vororten Pekings, ein historischer Garten. Er bietet zahlreiche Kulturlandschaften wie die Shuangqing Villa, den Xiangshan Tempel und den Biyun Tempel. Im Frühling blühen Azaleen überall in den Bergen. Von der Spitze aus können Besucher die gesamte Stadt Peking überblicken. Er stellt eine perfekte Kombination aus königlichen Gärten und Naturlandschaften dar.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Botanischer Garten Peking</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings größter botanischer Garten mit einer reichen Vielfalt an Arten. Im Frühling blühen nacheinander der Kirschgarten, der Pfingstrosengarten und der Pfirsichblütengarten. Seltene Pflanzen im Gewächshaus bleiben über alle vier Jahreszeiten hinweg grün. Er zeigt den einzigartigen Charme der nördlichen Gärten. Es ist ein idealer Ort für Naturerziehung und Landschaftsgenuss.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Religiöse Architektur</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe-Tempel (Lama-Tempel)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte tibetisch-buddhistische Tempel der Qing-Dynastie, früher die Residenz des Prinzen Yong. Die 26-meter-hohe Sandelholz-Buddha-Statue ist die höchste der Welt. Der Architekturstil kombiniert Han- und tibetische Merkmale. Er beherbergt eine große Sammlung buddhistischer Artefakte und Kunstschätze. Feierlich und würdevoll enthüllt er königliche Pracht.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan-Tempel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des plus anciens temples de Pékin, dont l&apos;histoire remonte à la dynastie Jin. Le complexe de bâtiments anciens est bien préservé, présentant l&apos;art architectural ancien. Il abrite de nombreux artefacts budistas e inscripciones históricas en piedra. Les arbres anciens fleurissent en printemps, créant de beaux paysages de jardín. C&apos;est une terre pure dans la ville, loin de l&apos;agitation.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Musées et Lieux Culturels</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Musée National de Chine</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand musée de Chine avec la plus grande collection du monde. L&apos;exposition &quot;La Route vers la Renaissance&quot; présente l&apos;histoire moderne de la Chine. &quot;La Chine Ancienne&quot; présente le développement de cinq mille ans de civilisation. Il accueille régulièrement des expositions internationales de reliquias de haut niveau. C&apos;est le trésor de la civilisation chinoise.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Musée de la Capitale</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un musée professionnel présentant l&apos;histoire et la culture de Pékin. Il recrée les changements urbains du vieux Pékin, présente la culture folklorique traditionnelle et abrite une grande collection de reliques déterrées dans la région de Pékin. Il sert de fenêtre pour comprendre l&apos;histoire et la culture de Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Besondere Erlebnisse</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Kulturelle Erlebnisse</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Peking-Oper-Vorführungen</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Traditionelle Pekinger Küche</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Pekingente</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings berühmtestes traditionelles Gericht mit über 800 Jahren Geschichte. Die Ente zeichnet sich durch ihre dünne, knusprige Haut und zartes, saftiges Fleisch aus. Die traditionelle Art, sie zu essen, besteht darin, das Entenfleisch in dünne Pfannkuchen mit Frühlingszwiebeln, Gurkenstreifen und süßer Bohnensauce zu wickeln. Ein komplettes Entenbankett präsentiert verschiedene Teile der Ente, die mit verschiedenen Kochmethoden zubereitet werden. Beijing&apos;s representative Peking duck restaurants include Quanjude, Da Dong, and Siji Minfu, each with their own unique characteristics.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Pekingente Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Feuertopf mit Lammscheiben)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun is Beijing&apos;s most representative hot pot establishment with over 100 years of history.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Zhajiang-Nudeln</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of Beijing&apos;s most representative noodle dishes, known as &quot;Beijing&apos;s First Noodle.&quot; The thick, chewy noodles are topped with a sauce made from yellow soybean paste, sweet bean sauce, and diced meat, accompanied by cucumber strips, bean sprouts, and other vegetables. The proper way to eat it involves &quot;three mixings and two eatings,&quot; resulting in a savory and delicious taste. Traditional Beijing locals often judge a diner&apos;s table manners by how cleanly they can finish the sauce in their bowl.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Eselrollkuchen)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Image</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Diese antike Hauptstadt trägt zu viel Geschichte und Kultur, wobei jede Ecke möglicherweise eine bewegende Geschichte verbirgt und jede Attraktion es wert ist, ausgekostet zu werden. Peking im Frühling ist ein farbenfrohes Gemälde, das darauf wartet, erkundet und entdeckt zu werden. Von königlicher Pracht bis zum gewöhnlichen Leben, von traditioneller Kultur bis zu moderner Kunst, Peking präsentiert vielfältige Reize und bietet Besuchern ein einzigartiges kulturelles Erlebnis.
          </p>
        </>
      );
    } else if (currentLanguage === 'es') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Primera Impresión</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La magnífica Ciudad Prohibida con sus relucientes tejas doradas, la Gran Muralla serpenteando a través de las montañas, el sonido de las campanas de los triciclos en los hutongs, los muros cortina de vidrio del CBD reflejando el atardecer... Esta es Pekín, una ciudad que mezcla lo antiguo y lo moderno, la tradición y la innovación. Como capital con 3.000 años de historia de construcción de la ciudad y 800 años de historia como capital, Pekín lleva la esencia de la civilización china y muestra la vibrante energía de la China moderna.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Características Más Representativas:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>El complejo palaciego real más grande del mundo - la Ciudad Prohibida</li>
            <li>Uno de los mayores proyectos de ingeniería en la historia humana - la Gran Muralla</li>
            <li>La cultura única de casas con patio y hutongs</li>
            <li>La prosperidad y vitalidad de una metrópolis internacional moderna</li>
          </ul>
          
          <div className="my-8">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen Panorámica de Pekín</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Información Básica</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Mejores Temporadas para Visitar</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Primavera (marzo-mayo): Temperaturas agradables, flores en flor</li>
            <li>Otoño (septiembre-octubre): Cielos despejados, clima confortable, follaje rojo</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Características Climáticas</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Primavera: Cálida y confortable, tormentas de arena ocasionales</li>
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

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Visión General Cultural e Histórica</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Desarrollo Histórico</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Dinastías Shang y Zhou: Establecimiento inicial como ciudad de Ji</li>
            <li>Dinastía Yuan: Establecida oficialmente como capital, llamada Dadu</li>
            <li>Dinastías Ming y Qing: Capital de Pekín, construcción de la Ciudad Prohibida</li>
            <li>Era Moderna: Desarrollo como metrópolis internacional</li>
          </ul>
          
          <div className="my-8">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de Sitios Históricos</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Atracciones Imprescindibles</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Palacios Reales y Jardines</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. El Museo del Palacio (Ciudad Prohibida)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El complejo palaciego más grande del mundo, hogar de 24 emperadores de las dinastías Ming y Qing. Con una superficie de 720.000 metros cuadrados, los edificios son magníficos e impresionantes. El Salón de la Armonía Suprema es la estructura de madera más grande de China, simbolizando el pináculo del poder imperial. Los Tres Palacios Traseros eran los aposentos de emperadores y concubinas, llenos de ambiente doméstico. La Galería de Tesoros y el Salón de Exposición de Relojes albergan innumerables tesoros raros. En primavera, las peonías florecen en el Jardín Imperial, y las magnolias florecen frente a las torres de las esquinas, creando paisajes impresionantes.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de la Ciudad Prohibida</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Palacio de Verano</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El jardín real más grande y mejor conservado del mundo, retiro de verano de la Emperatriz Viuda Cixi. El Lago Kunming con sus aguas resplandecientes ocupa aproximadamente tres cuartos del área del Palacio de Verano. El Largo Corredor es la galería pintada más larga del mundo, con cada sección presentando una pintura única. La Torre del Incienso Budista se yergue majestuosamente como el punto más alto del jardín. En primavera, los melocotoneros, albaricoqueros y magnolias florecen sucesivamente, con sauces llorones rozando la superficie del agua. La orilla del lago en primavera presenta la estación más encantadora de este jardín real.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Parque del Templo del Cielo</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un lugar sagrado donde los emperadores Ming y Qing adoraban al cielo, el mayor complejo de edificios sacrificiales existente en China. El Salón de Oración por las Buenas Cosechas con su cúpula dorada y tejas azules es el edificio principal para la antigua adoración celestial. El Altar de Montículo Circular está construido con tres capas de mármol blanco, creando efectos acústicos únicos que asombran a los visitantes. El Muro del Eco es un milagro de la acústica arquitectónica antigua. En primavera, las flores de ciruelo, magnolias y begonias florecen sucesivamente. El Templo del Cielo al amanecer muestra la solemne y majestuosa atmósfera imperial.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Parque del Templo del Cielo</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Secciones de la Gran Muralla</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Gran Muralla de Mutianyu</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Una de las secciones mejor conservadas de la Gran Muralla, con terreno montañoso escarpado. Serpenteando a lo largo de los picos montañosos, presenta un espectáculo magnífico. Los restos de 23 torres de vigilancia de la dinastía Ming atestiguan las vicisitudes de la historia. En primavera, las flores silvestres florecen abundantemente, y la Muralla está rodeada de exuberante vegetación. En días despejados, los visitantes pueden ver montañas distantes superpuestas, creando vistas espectaculares.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de la Gran Muralla</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Gran Muralla de Badaling</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La esencia de la Gran Muralla y la primera sección abierta al público. Con siete torres al norte y tres al sur, presenta una vista magnífica. Los edificios de la fortaleza están bien conservados, ejemplificando la arquitectura militar de la dinastía Ming. Al subir la Gran Muralla en primavera, los visitantes pueden ver flores silvestres decorando los muros. Mirando a lo lejos, las ondulantes montañas y la Gran Muralla semejando un dragón gigante créan una vista inolvidable.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Distritos Característicos y Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los hutongs más representativos del viejo Pekín con 800 años de acumulación histórica y cultural. Tejas grises y paredes de ladrillo, casas con patio muestran la vida tradicional pekinesa. El hutong reúne varias marcas históricas y tiendas culturales creativas. Los elementos tradicionales y modernos se fusionan, mostrando vitalidad y encanto antiguo. Pasear por el hutong en primavera permite a los visitantes experimentar la vida más auténtica de Pekín.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Área de Shichahai</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los tres lagos del viejo Pekín, con una fuerte atmósfera histórica y cultural. Sauces llorones bordean las orillas del Puente del Lingote de Plata. La Mansión del Príncipe Gong atestigua el lujo de la vida noble. La Calle de Bares de Houhai muestra el encanto de la vida nocturna moderna. En primavera, las flores de loto emergen, botes salpican el agua, creando una escena pintoresca.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de Shichahai</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Arquitectura Moderna y Lugares</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parque Olímpico</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La sede principal de los Juegos Olímpicos de 2008, una obra maestra de la arquitectura moderna. El diseño único de estructura de acero del Nido de Pájaro se ha convertido en un nuevo hito de Pekín. El exterior del Cubo de Agua, similar a burbujas, brilla con colores cambiantes por la noche. En primavera, los tulipanes florecen en el parque, creando un hermoso contraste con los edificios modernos. Al atardecer, la arquitectura moderna brille en la luz dorada del sol.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Distrito Artístico 798</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un distrito artístico convertido de fábricas abandonadas, un lugar de reunión para el arte contemporáneo. Preserva las características de la arquitectura industrial alemana. Galerías, instalaciones artísticas y arte de grafiti se pueden ver por todas partes. En primavera, aumentan las exposiciones de arte al aire libre, y los artistas crean al aire libre. Representa una perfecta integración del patrimonio industrial y la innovación artística.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Distrito Artístico 798</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Paisajes Naturales y Parques</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parque de las Colinas Fragantes</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El principal lugar escénico en los suburbios occidentales de Pekín, un jardín histórico. Presenta numerosos paisajes culturales como la Villa Shuangqing, el Templo Xiangshan y el Templo Biyun. En primavera, las azaleas florecen por todas las montañas. Desde la cima, los visitantes pueden contemplar toda la ciudad de Pekín. Representa una combinación perfecta de jardines reales y paisajes naturales.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Jardín Botánico de Pekín</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El jardín botánico más grande de Pekín con una rica variedad de especies. En primavera, el jardín de cerezos, el jardín de peonías y el jardín de flores de melocotón florecen sucesivamente. Las plantas raras en el invernadero permanecen verdes durante las cuatro estaciones. Muestra el encanto único de los jardines del norte. Es un lugar ideal para la educación natural y la apreciación del paisaje.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Arquitectura Religiosa</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Templo de Yonghe (Templo de los Lamas)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El templo budista tibetano más grande de la dinastía Qing, anteriormente la residencia del Príncipe Yong. La estatua de Buda de sándalo de 26 metros de altura es la más alta del mundo. El estilo arquitectónico combina características Han y tibetanas. Alberga una gran colección de artefactos budistas y tesoros artísticos. Solemne y digno, revela grandeza real.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Templo de Yonghe</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Templo de Fayuan</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los templos más antiguos de Pekín, con historia que se remonta a la dinastía Jin. El complejo de edificios antiguos está bien conservado, mostrando el arte arquitectónico antiguo. Alberga numerosos artefactos budistas e inscripciones históricas en piedra. Los árboles antiguos florecen en primavera, creando hermosos paisajes de jardín. Es una tierra pura en la ciudad, lejos del bullicio.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Musées et Lieux Culturels</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Musée National de Chine</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand musée de Chine avec la plus grande collection du monde. L&apos;exposition &quot;La Route vers la Renaissance&quot; présente l&apos;histoire moderne de la Chine. &quot;La Chine Ancienne&quot; présente le développement de cinq mille ans de civilisation. Il accueille régulièrement des expositions internationales de reliquias de haut niveau. C&apos;est le trésor de la civilisation chinoise.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Musée de la Capitale</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un musée professionnel présentant l&apos;histoire et la culture de Pékin. Il recrée les changements urbains du vieux Pékin, présente la culture folklorique traditionnelle et abrite une grande collection de reliques déterrées dans la région de Pékin. Il sert de fenêtre pour comprendre l&apos;histoire et la culture de Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Expériences Spéciales</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Expériences Culturelles</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Spectacles d&apos;Opéra de Pékin</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cuisine Traditionnelle de Pékin</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Canard de Pékin</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plat traditionnel le plus célèbre de Pékin avec plus de 800 ans d&apos;histoire. Le canard se caractérise par sa peau fine et croustillante et sa viande tendre et juteuse. La façon traditionnelle de le manger consiste à envelopper la viande de canard dans de fines crêpes avec des oignons de printemps, des tranches de concombre et de la sauce aux haricots sucrée. Un banquet complet de canard présente différentes parties du canard préparées selon diverses méthodes de cuisson. Les restaurants représentatifs du canard de Pékin comprennent Quanjude, Da Dong, et Siji Minfu, chacun avec leurs propres caractéristiques uniques.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Fondue avec Tranches d&apos;Agneau)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun est l&apos;établissement de fondue le plus représentatif de Pékin avec plus de 100 ans d&apos;histoire.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Nouilles Zhajiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des plats de nouilles les plus représentatifs de Pékin, connu comme &quot;les Premières Nouilles de Pékin&quot;. Les nouilles épaisses et élastiques sont garnies d&apos;une sauce faite de pâte de soja jaune, de sauce aux haricots sucrée et de viande en dés, accompagnées de tranches de concombre, de pousses de haricots et d&apos;autres légumes. La bonne façon de les manger implique &quot;trois mélanges et deux consommations&quot;, résultant en un goût savoureux et délicieux. Les habitants traditionnels de Pékin jugent souvent les manières de table d&apos;un convive par la manière dont ils peuvent finir proprement la sauce dans leur bol.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Roulement d&apos;Âne)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Image</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Cette capitale antique porte trop d&apos;histoire et de culture, chaque coin pouvant cacher une histoire émouvante, et chaque attraction méritant d&apos;être savourée. Pékin au printemps est une peinture colorée qui attend d&apos;être explorée et découverte. De la grandeur royale à la vie ordinaire, de la culture traditionnelle à l&apos;art moderne, Pékin présente des charmes divers, offrant aux visiteurs une expérience culturelle unique.
          </p>
        </>
      );
    } else if (currentLanguage === 'ja') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">第一印象</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            輝く金色の屋根瓦を持つ壮大な紫禁城、山々を蛇行する万里の長城、胡同で鳴り響く三輪車の鈴の音、夕日を映すCBDのガラスカーテンウォール...ここは北京、古代と現代、伝統と革新が融合した都市です。3,000年の都市建設の歴史と800年の首都としての歴史を持つ北京は、中国文明の真髄を担い、現代中国の活気あるエネルギーを示しています。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">最も代表的な特徴：</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>世界最大の王宮複合体 - 紫禁城</li>
            <li>人類史上最大の工学プロジェクトの一つ - 万里の長城</li>
            <li>独特の四合院と胡同文化</li>
            <li>現代国際都市の繁栄と活力</li>
          </ul>
          
          <div className="my-8">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京のパノラマ画像</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本情報の概要</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">最適な訪問シーズン</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春（3月〜5月）：快適な気温、花々が咲き誇る</li>
            <li>秋（9月〜10月）：澄んだ空、快適な天候、紅葉</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">気候の特徴</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春：暖かく快適、時折砂嵐</li>
            <li>夏：暑く雨が多い</li>
            <li>秋：涼しく乾燥</li>
            <li>冬：寒く乾燥</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">地元の交通概要</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>主要観光スポットをカバーする発達した地下鉄網</li>
            <li>遠隔地の景勝地にアクセスする密集したバスルート</li>
            <li>タクシーの初乗り料金：13元</li>
            <li>市内全域で利用可能なシェア自転車</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化と歴史の概要</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">歴史的発展</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>商・周王朝：蓟城として最初に設立</li>
            <li>元王朝：公式に首都として確立、大都と呼ばれる</li>
            <li>明・清王朝：北京の首都、紫禁城の建設</li>
            <li>現代：国際的な大都市に発展</li>
          </ul>
          
          <div className="my-8">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">歴史的遺跡の画像</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必見スポット</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">王宮と庭園</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 故宮博物院（紫禁城）</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界最大の宮殿複合体で、明・清王朝の24人の皇帝の住居。720,000平方メートルの面積を持ち、建物は壮大で圧倒的です。太和殿は中国最大の木造建築で、皇帝権力の頂点を象徴しています。後三宮は皇帝と妃たちの生活空間で、家庭的な雰囲気に満ちています。珍宝館と時計展示館には数えきれない希少な宝物が収蔵されています。春には御花園に牡丹が咲き、角楼の前には木蓮が花開き、息を呑むような景色を作り出します。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">紫禁城の画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 頤和園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界最大かつ最も保存状態の良い王家の庭園で、西太后の夏の避暑地。きらめく水面を持つ昆明湖は頤和園の面積の約4分の3を占めています。長廊は世界最長の彩色された回廊で、各部分にユニークな絵画が施されています。仏香閣は庭園内の最高地点として威厳を持って立っています。春には、桃の花、杏の花、木蓮が次々と咲き、柳が水面に垂れ下がります。春の湖畔はこの王家の庭園の最も魅惑的な季節を示しています。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 天壇公園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            明・清王朝の皇帝が天を崇拝した聖地であり、中国最大の祭祀建築複合体。金色の頂部と青い瓦を持つ祈年殿は古代の天への崇拝の主要建物です。円丘壇は白い大理石の三層で構築されており、訪問者を驚かせるユニークな音響効果を生み出します。回音壁は古代建築音響の奇跡です。春には梅の花、木蓮、海棠の花が次々と咲きます。夜明けの天壇は荘厳で威厳のある皇帝の雰囲気を示しています。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">天壇公園の画像</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">万里の長城セクション</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 慕田峪長城</h4>
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
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京传统美食</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京烤鸭</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最著名的传统美食，有着800多年历史。外皮金黄酥脆，肉质鲜嫩多汁。传统吃法是用薄饼包裹鸭肉、葱丝、黄瓜条和甜面酱。全鸭席能将整只鸭子的各个部位以不同烹饪方式呈现。北京代表性烤鸭店有全聚德、大董、四季民福等，各有特色。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京烤鸭图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 涮羊肉</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京冬季传统美食，源于元朝宫廷。将切成薄片的鲜羊肉在沸腾的铜锅中快速涮熟，配以芝麻酱、韭菜花酱等调料食用。肉质鲜嫩，汤底清淡，既暖胃又不油腻。东来顺是北京最具代表性的涮羊肉老字号，有超过100年历史。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">涮羊肉图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 炸酱面</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最具代表性的面食之一，被誉为"北京第一面"。面条宽厚筋道，配以黄酱、甜面酱和肉丁炸制的酱料，再搭配黄瓜丝、豆芽等蔬菜。吃法讲究"三拌两吃"，味道咸鲜适口。老北京人常以能否吃干净碗底的炸酱来评判食客的吃相。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">炸酱面图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. 驴打滚</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            具有200多年历史的北京特色小吃，因其制作过程中在黄豆粉中滚动而得名。由黄米面制成的糕团裹上红色豆沙馅，再在黄豆面里滚一圈，颜色黄白相间，口感软糯香甜。尤其在春节期间，是北京人招待客人的传统甜点。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. 褡裢火烧</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京百年小吃，因形状像古代的口袋"褡裢"而得名。外皮酥脆，内馅鲜美，多为猪肉韭菜或牛肉馅。制作工艺讲究，先将馅料煸炒调味，再用特制面皮包裹，烙至两面金黄。香气浓郁，入口外酥里嫩，是老北京人喜爱的传统小吃。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">褡裢火烧图片</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            这座千年古都承载着太多的历史与文化，每一个转角都可能藏着一段动人的故事，每一处景点都值得细细品味。春日的北京，更是一幅色彩斑斓的画卷，等待着您去探索和发现。从皇家气派到市井生活，从传统文化到现代艺术，北京展现了多元魅力，带给游客独特的人文体验。
          </p>
        </>
      );
    } else if (currentLanguage === 'ko') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">베이징: 고대 수도의 과거와 현재의 교향곡</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            베이징은 고대 수도로서 3,000년의 도시 건설 역사와 800년의 수도로서의 역사를 가지고 있습니다. 중국 문명의 진정한 근원을 이끌고 있는 도시이며, 현대 중국의 활기찬 에너지를 보여주고 있습니다. 베이징은 황제의 궁궐과 사원, 황제의 후궁들의 생활 공간, 그리고 황제의 왕위를 상징하는 건축물들로 이루어져 있습니다. 황제의 왕위를 상징하는 건축물은 중국 최대의 건축물이며, 황제의 권력의 정점을 상징합니다. 황제의 후궁들의 생활 공간은 가정적인 분위기를 가지고 있습니다. 그리고 보물관과 시계 전시관에는 수많은 비실한 보물이 보관되어 있습니다. 봄에는 보물관 안의 버펄로가 핀 것을 볼 수 있으며, 각 모퉁이에서 벚꽃이 핀 것을 볼 수 있습니다. 그리고 봄의 날씨는 이 왕가의 정원을 가장 매혹적인 계절로 만들어 냅니다.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">베이징의 대표적인 특성:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>세계에서 가장 큰 궁궐 복합체 - 황제의 궁궐</li>
            <li>인류 역사상 가장 큰 건축 공사 - 만리장성</li>
            <li>독특한 사원과 후통 문화</li>
            <li>현대 국제 대도시의 번영과 생명력</li>
          </ul>
          
          <div className="my-8">
            {/* 이미지 자리 표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">베이징의 패노라마 이미지</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">기본 정보 개요</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">최적의 방문 시기</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>봄 (3월 ~ 5월): 편안한 기온, 꽃이 핀다</li>
            <li>가을 (9월 ~ 10월): 맑은 하늘, 편안한 날씨, 붉은 나무 잎</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">기후의 특성</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>봄: 따뜻하고 편안하며, 가끔 모래폭풍이 있습니다</li>
            <li>여름: 더운 날씨와 많은 비가 옵니다</li>
            <li>가을: 시원하고 건조합니다</li>
            <li>겨울: 추워요 건조합니다</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">지역 교통 개요</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>주요 관광 명소를 포함한 발달된 지하철 망</li>
            <li>원격지의 명승지에 접근할 수 있는 밀집된 버스 노선</li>
            <li>택시 최초 요금: 13 원</li>
            <li>도시 전역에서 이용 가능한 쉐어 자전거</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">문화와 역사의 개요</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">역사적 발전</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>상과 주 왕조: 지 도시로서 최초로 설립</li>
            <li>원 왕조: 공식적으로 수도로 확립되었으며, 대도승이라고 불립니다</li>
            <li>명과 청 왕조: 베이징의 수도, 황제의 궁궐 건설</li>
            <li>현대: 국제적인 대도시로 발전</li>
          </ul>
          
          <div className="my-8">
            {/* 이미지 자리 표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">역사적 遺跡의 이미지</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">반드시 방문해야 할 명소</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">왕궁과 공원</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 고궁박물관 (황제의 궁궐)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            세계에서 가장 큰 궁궐 복합체로, 명과 청 왕조의 24명의 황제의 거처입니다. 720,000 제곱미터의 면적을 가지고 있으며, 건물은 거대하고 인상적입니다. 태화전은 중국 최대의 나무 건축물이며, 황제의 권력의 정점을 상징합니다. 후삼궁은 황제와 황후들의 생활 공간이었으며, 가정적인 분위기를 가지고 있습니다. 보물관과 시계 전시관에는 수많은 비실한 보물이 보관되어 있습니다. 봄에는 보물관 안의 버펄로가 핀 것을 볼 수 있으며, 각 모퉁이에서 벚꽃이 핀 것을 볼 수 있습니다. 그리고 봄의 날씨는 이 왕가의 정원을 가장 매혹적인 계절로 만들어 냅니다.
          </p>
          
          <div className="my-6">
            {/* 이미지 자리 표시자 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">황제의 궁궐 이미지</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 일화원</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            세계에서 가장 크고 가장 잘 보존된 왕가의 공원으로, 서태후의 여름 휴양지입니다. 버펄로가 있는 콩민호와 일화원의 면적의 약 3/4를 차지하고 있습니다. 롱코리안은 세계에서 가장 긴 페인트 갤러리로, 각 구간에 따라 독특한 그림이 그려져 있습니다. 부덕궁은 공원 내 최고점에 서서 위엄을 보여주고 있습니다. 봄에는 보물관 안의 버펄로가 핀 것을 볼 수 있으며, 각 모퉁이에서 벚꽃이 핀 것을 볼 수 있습니다. 그리고 봄의 날씨는 이 왕가의 정원을 가장 매혹적인 계절로 만들어 냅니다.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 천하제천공원</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
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
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">北京传统美食</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 北京烤鸭</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最著名的传统美食，有着800多年历史。外皮金黄酥脆，肉质鲜嫩多汁。传统吃法是用薄饼包裹鸭肉、葱丝、黄瓜条和甜面酱。全鸭席能将整只鸭子的各个部位以不同烹饪方式呈现。北京代表性烤鸭店有全聚德、大董、四季民福等，各有特色。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京烤鸭图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 涮羊肉</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京冬季传统美食，源于元朝宫廷。将切成薄片的鲜羊肉在沸腾的铜锅中快速涮熟，配以芝麻酱、韭菜花酱等调料食用。肉质鲜嫩，汤底清淡，既暖胃又不油腻。东来顺是北京最具代表性的涮羊肉老字号，有超过100年历史。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">涮羊肉图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 炸酱面</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京最具代表性的面食之一，被誉为"北京第一面"。面条宽厚筋道，配以黄酱、甜面酱和肉丁炸制的酱料，再搭配黄瓜丝、豆芽等蔬菜。吃法讲究"三拌两吃"，味道咸鲜适口。老北京人常以能否吃干净碗底的炸酱来评判食客的吃相。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">炸酱面图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. 驴打滚</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            具有200多年历史的北京特色小吃，因其制作过程中在黄豆粉中滚动而得名。由黄米面制成的糕团裹上红色豆沙馅，再在黄豆面里滚一圈，颜色黄白相间，口感软糯香甜。尤其在春节期间，是北京人招待客人的传统甜点。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. 褡裢火烧</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            北京百年小吃，因形状像古代的口袋"褡裢"而得名。外皮酥脆，内馅鲜美，多为猪肉韭菜或牛肉馅。制作工艺讲究，先将馅料煸炒调味，再用特制面皮包裹，烙至两面金黄。香气浓郁，入口外酥里嫩，是老北京人喜爱的传统小吃。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">褡裢火烧图片</p>
            </div>
          </div>
          
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
            <li>Yuan Dynasty: Officiellement établie comme capitale, genannt Dadu</li>
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
            L&apos;un des trois lacs du vieux Pékin, avec une forte atmosphère historique et culturelle. Des saules pleureurs bordent les rives du pont Silver Ingot. Le Manoir du Prince Gong témoigne du luxe de la vie noble. La rue des bars de Houhai présente le charme de la vie nocturne moderne. Au printemps, les fleurs de lotus émergent, des bateaux parsèment l&apos;eau, créant une scène pittoresque.
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
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe-Tempel (Lama-Tempel)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The largest Tibetan Buddhist temple of the Qing Dynasty, formerly the residence of Prince Yong. The 26-meter-high sandalwood Buddha statue is the world&apos;s tallest. The architectural style combines Han- and Tibetan features. It houses a large collection of Buddhist artifacts and art treasures. Solemn and dignified, it reveals royal grandeur.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan-Tempel</h4>
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
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Special Experiences</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Experiences</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Beijing Opera performances</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Beijing Traditional Cuisine</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Peking Duck</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beijing&apos;s most famous traditional dish with over 800 years of history. The duck is characterized by its thin, crispy skin and tender, juicy meat. The traditional way to eat it involves wrapping the duck meat in thin pancakes with spring onions, cucumber strips, and sweet bean sauce. A complete duck banquet presents different parts of the duck prepared in various cooking methods. Beijing&apos;s representative Peking duck restaurants include Quanjude, Da Dong, and Siji Minfu, each with their own unique characteristics.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Hot Pot with Lamb Slices)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun is Beijing&apos;s most representative hot pot establishment with over 100 years of history.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Zhajiang Noodles</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of Beijing&apos;s most representative noodle dishes, known as &quot;Beijing&apos;s First Noodle.&quot; The thick, chewy noodles are topped with a sauce made from yellow soybean paste, sweet bean sauce, and diced meat, accompanied by cucumber strips, bean sprouts, and other vegetables. The proper way to eat it involves &quot;three mixings and two eatings,&quot; resulting in a savory and delicious taste. Traditional Beijing locals often judge a diner&apos;s table manners by how cleanly they can finish the sauce in their bowl.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Donkey Rolling)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Bild</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Cette capitale antique porte trop d&apos;histoire et de culture, chaque coin pouvant cacher une histoire émouvante, et chaque attraction méritant d&apos;être savourée. Pékin au printemps est une peinture colorée qui attend d&apos;être explorée et découverte. De la grandeur royale à la vie ordinaire, de la culture traditionnelle à l&apos;art moderne, Pékin présente des charmes divers, offrant aux visiteurs une expérience culturelle unique.
          </p>
        </>
      );
    } else if (currentLanguage === 'fr') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Première Impression</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La majestueuse Cité Interdite avec ses tuiles dorées étincelantes, la Grande Muraille serpentant à travers les montagnes, le son des cloches de tricycles dans les hutongs, les murs-rideaux en verre du CBD reflétant le coucher du soleil... C&apos;est Pékin, une ville qui mélange l&apos;ancien et le moderne, la tradition et l&apos;innovation. En tant que capitale avec 3 000 ans d&apos;histoire urbaine et 800 ans d&apos;histoire en tant que capitale, Pékin porte l&apos;essence de la civilisation chinoise et présente l&apos;énergie vibrante de la Chine moderne.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Caractéristiques les Plus Représentatives:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Le plus grand complexe de palais royal du monde - la Cité Interdite</li>
            <li>L&apos;un des plus grands projets d&apos;ingénierie de l&apos;histoire humaine - la Grande Muraille</li>
            <li>La culture unique des maisons à cour carrée et des hutongs</li>
            <li>La prospérité et la vitalité d&apos;une métropole internationale moderne</li>
          </ul>
          
          <div className="my-8">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Panoramique de Pékin</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Aperçu des Informations de Base</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Meilleures Saisons de Visite</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Printemps (Mars-Mai): Températures agréables, fleurs en floraison</li>
            <li>Automne (Septembre-Octobre): Ciel clair, temps confortable, feuillage rouge</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Caractéristiques Climatiques</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Printemps: Chaud et confortable, tempêtes de sable occasionnelles</li>
            <li>Été: Chaud et pluvieux</li>
            <li>Automne: Frais et sec</li>
            <li>Hiver: Froid et sec</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Aperçu des Transports Locaux</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Réseau de métro bien développé couvrant les principales attractions</li>
            <li>Lignes de bus denses atteignant les sites pittoresques éloignés</li>
            <li>Tarif de départ des taxis: 13 yuans</li>
            <li>Vélos partagés disponibles dans toute la ville</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Aperçu Culturel et Historique</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Développement Historique</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Dynasties Shang et Zhou: Établissement initial en tant que ville de Ji</li>
            <li>Dynastie Yuan: Officiellement établie comme capitale, appelée Dadu</li>
            <li>Dynasties Ming et Qing: Capitale de Pékin, construction de la Cité Interdite</li>
            <li>Ère Moderne: Développée en une métropole internationale</li>
          </ul>
          
          <div className="my-8">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image des Sites Historiques</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Attractions Incontournables</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Palais Royaux et Jardins</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Le Musée du Palais (Cité Interdite)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand complexe de palais du monde, résidence de 24 empereurs des dynasties Ming et Qing. Couvrant 720 000 mètres carrés, les bâtiments sont magnifiques et impressionnants. La Salle de l&apos;Harmonie Suprême est la plus grande structure en bois de Chine, symbolisant le sommet du pouvoir impérial. Les Trois Palais Arrière étaient les quartiers d&apos;habitation des empereurs et des concubines, remplis d&apos;ambiance domestique. La Galerie des Trésors et le Hall d&apos;Exposition des Horloges abritent d&apos;innombrables trésors rares. Au printemps, les pivoines fleurissent dans le Jardin Impérial, et les magnolias fleurissent devant les tours d&apos;angle, créant un paysage à couper le souffle.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de la Cité Interdite</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Palais d&apos;Été</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand et le mieux préservé des jardins royaux du monde, retraite estivale de l&apos;Impératrice Douairière Cixi. Le lac Kunming avec ses eaux étincelantes occupe environ trois quarts de la superficie du Palais d&apos;Été. Le Long Corridor est la plus longue galerie peinte du monde, chaque section présentant une peinture unique. La Tour de l&apos;Encens Bouddhique se dresse majestueusement comme le point culminant du jardin. Au printemps, les fleurs de pêcher, les fleurs d&apos;abricotier et les magnolias fleurissent successivement, avec des saules pleureurs effleurant la surface de l&apos;eau. Le bord du lac au printemps présente la saison la plus enchanteresse de ce jardin royal.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Parc du Temple du Ciel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un lieu sacré où les empereurs Ming et Qing adoraban al ciel, le plus grand complexe de bâtiments sacrificiels existant en Chine. La Salle de Prière pour les Bonnes Récoltes avec son sommet doré et ses tuiles bleues est le principal bâtiment pour l&apos;ancien culte du ciel. L&apos;Autel du Tertre Circulaire est construit avec trois couches de marbre blanc, créant des effets acoustiques uniques qui émerveillent les visiteurs. Le Mur d&apos;Écho est un miracle de l&apos;acoustique architecturale ancienne. Au printemps, les fleurs de prunier, les magnolias et les bégonias fleurissent successivement. Le Temple du Ciel à l&apos;aube dégage une atmosphère impériale solennelle et majestueuse.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image du Parc du Temple du Ciel</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Sections de la Grande Muraille</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Grande Muraille de Mutianyu</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;une des sections les mieux préservées de la Grande Muraille, avec un terrain montagneux escarpé. Serpentant le long des sommets montagneux, elle présente un spectacle magnifique. Les vestiges de 23 tours de guet de la dynastie Ming témoignent des vicissitudes de l&apos;histoire. Au printemps, les fleurs sauvages fleurissent abondamment, et le Mur est entouré d&apos;une végétation luxuriante. Par temps clair, les visiteurs peuvent voir des montagnes lointaines qui se chevauchent, créant des vues spectaculaires.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de la Grande Muraille</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Grande Muraille de Badaling</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;essence de la Grande Muraille et la première section ouverte au public. Avec sept tours au nord et trois au sud, elle présente une vue magnifique. Les bâtiments de la forteresse sont bien préservés, illustrant l&apos;architecture militaire de la dynastie Ming. En escaladant la Grande Muraille au printemps, les visiteurs peuvent voir des fleurs sauvages décorant les murs. En regardant au loin, les montagnes ondulantes et la Grande Muraille ressemblant à un dragon géant créent une vue inoubliable.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Quartiers Caractéristiques et Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des hutongs les plus représentatifs du vieux Pékin avec 800 ans d&apos;accumulation historique et culturelle. Tuiles grises et murs de briques, les maisons à cour présentent la vie traditionnelle pékinoise. Le hutong rassemble diverses marques séculaires et des boutiques culturelles créatives. Les éléments traditionnels et modernes se mélangent, montrant vitalité et charme ancien. Se promener dans le hutong au printemps permet aux visiteurs de découvrir la vie la plus authentique de Pékin.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shichahai-Gebiet</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des trois lacs du vieux Pékin, avec une forte atmosphère historique et culturelle. Des saules pleureurs bordent les rives du pont Silver Ingot. Le Manoir du Prince Gong témoigne du luxe de la vie noble. La rue des bars de Houhai présente le charme de la vie nocturne moderne. Au printemps, les fleurs de lotus émergent, des bateaux parsèment l&apos;eau, créant une scène pittoresque.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image de Shichahai</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Architecture Moderne et Lieux</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parc Olympique</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le lieu principal des Jeux Olympiques de 2008, un chef-d&apos;œuvre de l&apos;architecture moderne. La conception unique en structure d&apos;acier du Nid d&apos;Oiseau est devenue un nouveau point de repère de Pékin. L&apos;extérieur du Cube d&apos;Eau, ressemblant à des bulles, brille de couleurs changeantes la nuit. Au printemps, les tulipes fleurissent dans le parc, créant un beau contraste avec les bâtiments modernes. Au coucher du soleil, l&apos;architecture moderne brille dans la lumière dorée du soleil.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 Art District</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            An art district converted from abandoned factories, a gathering place for contemporary art. It preserves the characteristics of German industrial architecture. Galleries, art installations, and graffiti art can be seen everywhere. In spring, outdoor art exhibitions increase, and artists create outdoors. It represents a perfect integration of industrial heritage and artistic innovation.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
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
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe-Tempel (Lama-Tempel)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The largest Tibetan Buddhist temple of the Qing Dynasty, formerly the residence of Prince Yong. The 26-meter-high sandalwood Buddha statue is the world&apos;s tallest. The architectural style combines Han- and Tibetan features. It houses a large collection of Buddhist artifacts and art treasures. Solemn and dignified, it reveals royal grandeur.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan-Tempel</h4>
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
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Special Experiences</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Experiences</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Beijing Opera performances</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Beijing Traditional Cuisine</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Peking Duck</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beijing&apos;s most famous traditional dish with over 800 years of history. The duck is characterized by its thin, crispy skin and tender, juicy meat. The traditional way to eat it involves wrapping the duck meat in thin pancakes with spring onions, cucumber strips, and sweet bean sauce. A complete duck banquet presents different parts of the duck prepared in various cooking methods. Beijing&apos;s representative Peking duck restaurants include Quanjude, Da Dong, and Siji Minfu, each with their own unique characteristics.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Hot Pot with Lamb Slices)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun is Beijing&apos;s most representative hot pot establishment with over 100 years of history.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Zhajiang Noodles</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of Beijing&apos;s most representative noodle dishes, known as &quot;Beijing&apos;s First Noodle.&quot; The thick, chewy noodles are topped with a sauce made from yellow soybean paste, sweet bean sauce, and diced meat, accompanied by cucumber strips, bean sprouts, and other vegetables. The proper way to eat it involves &quot;three mixings and two eatings,&quot; resulting in a savory and delicious taste. Traditional Beijing locals often judge a diner&apos;s table manners by how cleanly they can finish the sauce in their bowl.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Donkey Rolling)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Image</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Cette capitale antique porte trop d&apos;histoire et de culture, chaque coin pouvant cacher une histoire émouvante, et chaque attraction méritant d&apos;être savourée. Pékin au printemps est une peinture colorée qui attend d&apos;être explorée et découverte. De la grandeur royale à la vie ordinaire, de la culture traditionnelle à l&apos;art moderne, Pékin présente des charmes divers, offrant aux visiteurs une expérience culturelle unique.
          </p>
        </>
      );
    } else if (currentLanguage === 'de') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Erster Eindruck</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Die majestätische Verbotene Stadt mit ihren glitzernden goldenen Dachziegeln, die Große Mauer, die sich durch die Berge schlängelt, der Klang von Dreiradklingeln in den Hutongs, die Glasvorhangfassaden des CBD, die den Sonnenuntergang widerspiegeln... Das ist Peking, eine Stadt, die Altes und Modernes, Tradition und Innovation verbindet. Als Hauptstadt mit einer 3.000-jährigen Stadtgeschichte und einer 800-jährigen Geschichte als Hauptstadt trägt Peking die Essenz der chinesischen Zivilisation und zeigt die pulsierende Energie des modernen China.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Repräsentativste Merkmale:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Der größte königliche Palastkomplex der Welt - die Verbotene Stadt</li>
            <li>Eines der größten Ingenieurprojekte der Menschheitsgeschichte - die Große Mauer</li>
            <li>Die einzigartige Hofhauskultur und Hutong-Kultur</li>
            <li>Der Wohlstand und die Vitalität einer modernen internationalen Metropole</li>
          </ul>
          
          <div className="my-8">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Panoramabild</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Grundinformationen im Überblick</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Beste Besuchszeiten</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Frühling (März-Mai): Angenehme Temperaturen, blühende Blumen</li>
            <li>Herbst (September-Oktober): Klarer Himmel, angenehmes Wetter, rotes Laub</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Klimamerkmale</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Frühling: Warm und angenehm, gelegentliche Sandstürme</li>
            <li>Sommer: Heiß und regnerisch</li>
            <li>Herbst: Kühl und trocken</li>
            <li>Winter: Kalt und trocken</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Übersicht der lokalen Verkehrsmittel</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Gut entwickeltes U-Bahn-Netz, das die wichtigsten Attraktionen abdeckt</li>
            <li>Dichte Buslinien, die entlegene Sehenswürdigkeiten erreichen</li>
            <li>Taxi-Grundpreis: 13 Yuan</li>
            <li>Leihfahrräder überall in der Stadt verfügbar</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Kulturelle und historische Übersicht</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Historische Entwicklung</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Shang and Zhou Dynasties: Initial establishment as Ji City</li>
            <li>Yuan Dynasty: Officiellement als Hauptstadt etabliert, genannt Dadu</li>
            <li>Ming and Qing Dynasties: Capital of Beijing, built the Forbidden City</li>
            <li>Modern Era: Developed into an international metropolis</li>
          </ul>
          
          <div className="my-8">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Historische Stätten Bild</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Sehenswürdigkeiten, die man besuchen muss</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Königliche Paläste und Gärten</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Das Palastmuseum (Verbotene Stadt)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte Palastkomplex der Welt, Heimat von 24 Kaisern der Ming- und Qing-Dynastien. Mit einer Fläche von 720.000 Quadratmetern sind die Gebäude prächtig und beeindruckend. Die Halle der Höchsten Harmonie ist Chinas größte Holzstruktur und symbolisiert den Höhepunkt der kaiserlichen Macht. Die Drei Hinteren Paläste waren die Wohnquartiere der Kaiser und Konkubinen, erfüllt von häuslicher Atmosphäre. Die Schatzkammer und die Uhrenausstellungshalle beherbergen unzählige seltene Schätze. Im Frühling blühen Pfingstrosen im Kaiserlichen Garten, und Magnolien blühen vor den Ecktürmen und schaffen atemberaubende Landschaften.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Verbotene Stadt Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Sommerpalast</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte und am besten erhaltene königliche Garten der Welt, Sommerrückzugsort der Kaiserinwitwe Cixi. Der Kunming-See mit seinem funkelnden Wasser nimmt etwa drei Viertel der Fläche des Sommerpalastes ein. Der Lange Korridor ist die längste bemalte Galerie der Welt, wobei jeder Abschnitt ein einzigartiges Gemälde zeigt. Der Turm des Buddhistischen Weihrauchs steht majestätisch als höchster Punkt im Garten. In spring, peach blossoms, apricot flowers, and magnolias bloom in succession, with weeping willows brushing the water&apos;s surface. The lakeside in spring presents the most enchanting season of this royal garden.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Himmelstempelpark</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ein heiliger Ort, an dem die Kaiser der Ming- und Qing-Dynastien den Himmel verehrten, Chinas größter existierender Opferbaukomplex. Die Halle des Gebets für gute Ernten mit ihrem goldenen Dach und blauen Ziegeln ist das Hauptgebäude für die alte Himmelsverehrung. Der Kreisförmige Hügelaltar besteht aus drei Schichten weißen Marmors und erzeugt einzigartige akustische Effekte, die Besucher erstaunen. Die Echo-Mauer ist ein Wunder der antiken architektonischen Akustik. In spring, plum blossoms, magnolias, and begonia flowers bloom in succession. The Temple of Heaven at dawn displays the solemn and majestic imperial atmosphere.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Himmelstempelpark Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Abschnitte der Großen Mauer</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Mutianyu Große Mauer</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der am besten erhaltenen Abschnitte der Großen Mauer, mit steilem Berggelände. Sie schlängelt sich entlang der Berggipfel und bietet ein prächtiges Schauspiel. Die Überreste von 23 Wachtürmen aus der Ming-Dynastie zeugen von den Wechselfällen der Geschichte. Im Frühling blühen Wildblumen reichlich, und die Mauer ist von üppigem Grün umgeben. An klaren Tagen können Besucher entfernte, sich überlappende Berge sehen, die spektakuläre Ausblicke bieten.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Große Mauer Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Badaling Große Mauer</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Die Essenz der Großen Mauer und der früheste für die Öffentlichkeit zugängliche Abschnitt. Mit sieben Türmen im Norden und drei im Süden bietet sie einen prächtigen Anblick. Die Festungsgebäude sind gut erhalten und veranschaulichen die Militärarchitektur der Ming-Dynastie. Beim Klettern auf die Große Mauer im Frühling können Besucher Wildblumen sehen, die die Mauern schmücken. In die Ferne blickend, schaffen die welligen Berge und die Große Mauer, die einem riesigen Drachen ähnelt, einen unvergesslichen Anblick.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Charakteristische Viertel und Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der repräsentativsten alten Pekinger Hutongs mit 800 Jahren historischer und kultureller Anhäufung. Graue Ziegel und Ziegelmauern, Hofhäuser zeigen das traditionelle Pekinger Leben. Der Hutong versammelt verschiedene altehrwürdige Marken und kreative Kulturläden. Traditionelle und moderne Elemente verschmelzen und zeigen Vitalität und alten Charme. Ein Spaziergang durch den Hutong im Frühling ermöglicht es Besuchern, das authentischste Pekinger Leben zu erleben.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shichahai-Gebiet</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Einer der drei Seen des alten Peking, mit einer starken historischen und kulturellen Atmosphäre. Trauerweiden säumen die Ufer der Silver Ingot Bridge. Die Villa des Prinzen Gong zeugt vom Luxus des adligen Lebens. Die Houhai Bar Street zeigt den Charme des modernen Nachtlebens. Im Frühling tauchen Lotusblumen auf, Boote punktieren das Wasser und schaffen eine malerische Szene.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Shichahai Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Moderne Architektur und Veranstaltungsorte</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Olympiapark</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der Hauptveranstaltungsort der Olympischen Spiele 2008, ein Meisterwerk moderner Architektur. Das einzigartige Stahlkonstruktionsdesign des Vogelnests ist zu einem neuen Wahrzeichen von Peking geworden. Die blasenähnliche Außenseite des Wasserwürfels leuchtet nachts in wechselnden Farben. Im Frühling blühen Tulpen im Park und schaffen einen schönen Kontrast zu den modernen Gebäuden. Bei Sonnenuntergang erstrahlt die moderne Architektur im goldenen Sonnenlicht.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 798 Kunstviertel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ein Kunstviertel, das aus verlassenen Fabriken umgewandelt wurde, ein Treffpunkt für zeitgenössische Kunst. Es bewahrt die Merkmale der deutschen Industriearchitektur. Galerien, Kunstinstallationen und Graffiti-Kunst sind überall zu sehen. In spring, outdoor art exhibitions increase, and artists create outdoors. It represents a perfect integration of industrial heritage and artistic innovation.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">798 Kunstviertel Bild</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Naturlandschaften und Parks</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Duftende Hügel Park</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der wichtigste landschaftlich reizvolle Ort in den westlichen Vororten Pekings, ein historischer Garten. Er bietet zahlreiche Kulturlandschaften wie die Shuangqing Villa, den Xiangshan Tempel und den Biyun Tempel. Im Frühling blühen Azaleen überall in den Bergen. Von der Spitze aus können Besucher die gesamte Stadt Peking überblicken. Er stellt eine perfekte Kombination aus königlichen Gärten und Naturlandschaften dar.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Botanischer Garten Peking</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings größter botanischer Garten mit einer reichen Vielfalt an Arten. Im Frühling blühen nacheinander der Kirschgarten, der Pfingstrosengarten und der Pfirsichblütengarten. Seltene Pflanzen im Gewächshaus bleiben über alle vier Jahreszeiten hinweg grün. Er zeigt den einzigartigen Charme der nördlichen Gärten. Es ist ein idealer Ort für Naturerziehung und Landschaftsgenuss.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Religiöse Architektur</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Yonghe-Tempel (Lama-Tempel)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Der größte tibetisch-buddhistische Tempel der Qing-Dynastie, früher die Residenz des Prinzen Yong. Die 26-meter-hohe Sandelholz-Buddha-Statue ist die höchste der Welt. Der Architekturstil kombiniert Han- und tibetische Merkmale. Er beherbergt eine große Sammlung buddhistischer Artefakte und Kunstschätze. Feierlich und würdevoll enthüllt er königliche Pracht.
          </p>
          
          <div className="my-6">
            {/* Bildplatzhalter */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Yonghe Temple Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Fayuan-Tempel</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des plus anciens temples de Pékin, dont l&apos;histoire remonte à la dynastie Jin. Le complexe de bâtiments anciens est bien préservé, présentant l&apos;art architectural ancien. Il abrite de nombreux artefacts budistas e inscripciones históricas en piedra. Les arbres anciens fleurissent en printemps, créant de beaux paysages de jardín. C&apos;est une terre pure dans la ville, loin de l&apos;agitation.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Musées et Lieux Culturels</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Musée National de Chine</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand musée de Chine avec la plus grande collection du monde. L&apos;exposition &quot;La Route vers la Renaissance&quot; présente l&apos;histoire moderne de la Chine. &quot;La Chine Ancienne&quot; présente le développement de cinq mille ans de civilisation. Il accueille régulièrement des expositions internationales de reliquias de haut niveau. C&apos;est le trésor de la civilisation chinoise.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Musée de la Capitale</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un musée professionnel présentant l&apos;histoire et la culture de Pékin. Il recrée les changements urbains du vieux Pékin, présente la culture folklorique traditionnelle et abrite une grande collection de reliques déterrées dans la région de Pékin. Il sert de fenêtre pour comprendre l&apos;histoire et la culture de Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Besondere Erlebnisse</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Kulturelle Erlebnisse</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Peking-Oper-Vorführungen</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Traditionelle Pekinger Küche</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Pekingente</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pekings berühmtestes traditionelles Gericht mit über 800 Jahren Geschichte. Die Ente zeichnet sich durch ihre dünne, knusprige Haut und zartes, saftiges Fleisch aus. Die traditionelle Art, sie zu essen, besteht darin, das Entenfleisch in dünne Pfannkuchen mit Frühlingszwiebeln, Gurkenstreifen und süßer Bohnensauce zu wickeln. Ein komplettes Entenbankett präsentiert verschiedene Teile der Ente, die mit verschiedenen Kochmethoden zubereitet werden. Beijing&apos;s representative Peking duck restaurants include Quanjude, Da Dong, and Siji Minfu, each with their own unique characteristics.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Pekingente Bild</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Feuertopf mit Lammscheiben)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun is Beijing&apos;s most representative hot pot establishment with over 100 years of history.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Zhajiang-Nudeln</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            One of Beijing&apos;s most representative noodle dishes, known as &quot;Beijing&apos;s First Noodle.&quot; The thick, chewy noodles are topped with a sauce made from yellow soybean paste, sweet bean sauce, and diced meat, accompanied by cucumber strips, bean sprouts, and other vegetables. The proper way to eat it involves &quot;three mixings and two eatings,&quot; resulting in a savory and delicious taste. Traditional Beijing locals often judge a diner&apos;s table manners by how cleanly they can finish the sauce in their bowl.
          </p>
          
          <div className="my-6">
            {/* Image placeholder */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Eselrollkuchen)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Image</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Diese antike Hauptstadt trägt zu viel Geschichte und Kultur, wobei jede Ecke möglicherweise eine bewegende Geschichte verbirgt und jede Attraktion es wert ist, ausgekostet zu werden. Peking im Frühling ist ein farbenfrohes Gemälde, das darauf wartet, erkundet und entdeckt zu werden. Von königlicher Pracht bis zum gewöhnlichen Leben, von traditioneller Kultur bis zu moderner Kunst, Peking präsentiert vielfältige Reize und bietet Besuchern ein einzigartiges kulturelles Erlebnis.
          </p>
        </>
      );
    } else if (currentLanguage === 'es') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Primera Impresión</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            La magnífica Ciudad Prohibida con sus relucientes tejas doradas, la Gran Muralla serpenteando a través de las montañas, el sonido de las campanas de los triciclos en los hutongs, los muros cortina de vidrio del CBD reflejando el atardecer... Esta es Pekín, una ciudad que mezcla lo antiguo y lo moderno, la tradición y la innovación. Como capital con 3.000 años de historia de construcción de la ciudad y 800 años de historia como capital, Pekín lleva la esencia de la civilización china y muestra la vibrante energía de la China moderna.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Características Más Representativas:</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>El complejo palaciego real más grande del mundo - la Ciudad Prohibida</li>
            <li>Uno de los mayores proyectos de ingeniería en la historia humana - la Gran Muralla</li>
            <li>La cultura única de casas con patio y hutongs</li>
            <li>La prosperidad y vitalidad de una metrópolis internacional moderna</li>
          </ul>
          
          <div className="my-8">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen Panorámica de Pekín</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Información Básica</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Mejores Temporadas para Visitar</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Primavera (marzo-mayo): Temperaturas agradables, flores en flor</li>
            <li>Otoño (septiembre-octubre): Cielos despejados, clima confortable, follaje rojo</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Características Climáticas</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Primavera: Cálida y confortable, tormentas de arena ocasionales</li>
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

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Visión General Cultural e Histórica</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Desarrollo Histórico</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Dinastías Shang y Zhou: Establecimiento inicial como ciudad de Ji</li>
            <li>Dinastía Yuan: Establecida oficialmente como capital, llamada Dadu</li>
            <li>Dinastías Ming y Qing: Capital de Pekín, construcción de la Ciudad Prohibida</li>
            <li>Era Moderna: Desarrollo como metrópolis internacional</li>
          </ul>
          
          <div className="my-8">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de Sitios Históricos</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Atracciones Imprescindibles</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Palacios Reales y Jardines</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. El Museo del Palacio (Ciudad Prohibida)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El complejo palaciego más grande del mundo, hogar de 24 emperadores de las dinastías Ming y Qing. Con una superficie de 720.000 metros cuadrados, los edificios son magníficos e impresionantes. El Salón de la Armonía Suprema es la estructura de madera más grande de China, simbolizando el pináculo del poder imperial. Los Tres Palacios Traseros eran los aposentos de emperadores y concubinas, llenos de ambiente doméstico. La Galería de Tesoros y el Salón de Exposición de Relojes albergan innumerables tesoros raros. En primavera, las peonías florecen en el Jardín Imperial, y las magnolias florecen frente a las torres de las esquinas, creando paisajes impresionantes.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de la Ciudad Prohibida</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Palacio de Verano</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El jardín real más grande y mejor conservado del mundo, retiro de verano de la Emperatriz Viuda Cixi. El Lago Kunming con sus aguas resplandecientes ocupa aproximadamente tres cuartos del área del Palacio de Verano. El Largo Corredor es la galería pintada más larga del mundo, con cada sección presentando una pintura única. La Torre del Incienso Budista se yergue majestuosamente como el punto más alto del jardín. En primavera, los melocotoneros, albaricoqueros y magnolias florecen sucesivamente, con sauces llorones rozando la superficie del agua. La orilla del lago en primavera presenta la estación más encantadora de este jardín real.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Parque del Templo del Cielo</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un lugar sagrado donde los emperadores Ming y Qing adoraban al cielo, el mayor complejo de edificios sacrificiales existente en China. El Salón de Oración por las Buenas Cosechas con su cúpula dorada y tejas azules es el edificio principal para la antigua adoración celestial. El Altar de Montículo Circular está construido con tres capas de mármol blanco, creando efectos acústicos únicos que asombran a los visitantes. El Muro del Eco es un milagro de la acústica arquitectónica antigua. En primavera, las flores de ciruelo, magnolias y begonias florecen sucesivamente. El Templo del Cielo al amanecer muestra la solemne y majestuosa atmósfera imperial.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Parque del Templo del Cielo</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Secciones de la Gran Muralla</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Gran Muralla de Mutianyu</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Una de las secciones mejor conservadas de la Gran Muralla, con terreno montañoso escarpado. Serpenteando a lo largo de los picos montañosos, presenta un espectáculo magnífico. Los restos de 23 torres de vigilancia de la dinastía Ming atestiguan las vicisitudes de la historia. En primavera, las flores silvestres florecen abundantemente, y la Muralla está rodeada de exuberante vegetación. En días despejados, los visitantes pueden ver montañas distantes superpuestas, creando vistas espectaculares.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de la Gran Muralla</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Gran Muralla de Badaling</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La esencia de la Gran Muralla y la primera sección abierta al público. Con siete torres al norte y tres al sur, presenta una vista magnífica. Los edificios de la fortaleza están bien conservados, ejemplificando la arquitectura militar de la dinastía Ming. Al subir la Gran Muralla en primavera, los visitantes pueden ver flores silvestres decorando los muros. Mirando a lo lejos, las ondulantes montañas y la Gran Muralla semejando un dragón gigante créan una vista inolvidable.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Distritos Característicos y Hutongs</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Nanluoguxiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los hutongs más representativos del viejo Pekín con 800 años de acumulación histórica y cultural. Tejas grises y paredes de ladrillo, casas con patio muestran la vida tradicional pekinesa. El hutong reúne varias marcas históricas y tiendas culturales creativas. Los elementos tradicionales y modernos se fusionan, mostrando vitalidad y encanto antiguo. Pasear por el hutong en primavera permite a los visitantes experimentar la vida más auténtica de Pekín.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Área de Shichahai</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los tres lagos del viejo Pekín, con una fuerte atmósfera histórica y cultural. Sauces llorones bordean las orillas del Puente del Lingote de Plata. La Mansión del Príncipe Gong atestigua el lujo de la vida noble. La Calle de Bares de Houhai muestra el encanto de la vida nocturna moderna. En primavera, las flores de loto emergen, botes salpican el agua, creando una escena pintoresca.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen de Shichahai</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Arquitectura Moderna y Lugares</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parque Olímpico</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La sede principal de los Juegos Olímpicos de 2008, una obra maestra de la arquitectura moderna. El diseño único de estructura de acero del Nido de Pájaro se ha convertido en un nuevo hito de Pekín. El exterior del Cubo de Agua, similar a burbujas, brilla con colores cambiantes por la noche. En primavera, los tulipanes florecen en el parque, creando un hermoso contraste con los edificios modernos. Al atardecer, la arquitectura moderna brille en la luz dorada del sol.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Distrito Artístico 798</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un distrito artístico convertido de fábricas abandonadas, un lugar de reunión para el arte contemporáneo. Preserva las características de la arquitectura industrial alemana. Galerías, instalaciones artísticas y arte de grafiti se pueden ver por todas partes. En primavera, aumentan las exposiciones de arte al aire libre, y los artistas crean al aire libre. Representa una perfecta integración del patrimonio industrial y la innovación artística.
          </p>
          
          <div className="my-6">
            {/* Marcador de posición de imagen */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Distrito Artístico 798</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Paisajes Naturales y Parques</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Parque de las Colinas Fragantes</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El principal lugar escénico en los suburbios occidentales de Pekín, un jardín histórico. Presenta numerosos paisajes culturales como la Villa Shuangqing, el Templo Xiangshan y el Templo Biyun. En primavera, las azaleas florecen por todas las montañas. Desde la cima, los visitantes pueden contemplar toda la ciudad de Pekín. Representa una combinación perfecta de jardines reales y paisajes naturales.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Jardín Botánico de Pekín</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El jardín botánico más grande de Pekín con una rica variedad de especies. En primavera, el jardín de cerezos, el jardín de peonías y el jardín de flores de melocotón florecen sucesivamente. Las plantas raras en el invernadero permanecen verdes durante las cuatro estaciones. Muestra el encanto único de los jardines del norte. Es un lugar ideal para la educación natural y la apreciación del paisaje.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Arquitectura Religiosa</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Templo de Yonghe (Templo de los Lamas)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El templo budista tibetano más grande de la dinastía Qing, anteriormente la residencia del Príncipe Yong. La estatua de Buda de sándalo de 26 metros de altura es la más alta del mundo. El estilo arquitectónico combina características Han y tibetanas. Alberga una gran colección de artefactos budistas y tesoros artísticos. Solemne y digno, revela grandeza real.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen del Templo de Yonghe</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Templo de Fayuan</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uno de los templos más antiguos de Pekín, con historia que se remonta a la dinastía Jin. El complejo de edificios antiguos está bien conservado, mostrando el arte arquitectónico antiguo. Alberga numerosos artefactos budistas e inscripciones históricas en piedra. Los árboles antiguos florecen en primavera, creando hermosos paisajes de jardín. Es una tierra pura en la ciudad, lejos del bullicio.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Musées et Lieux Culturels</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Musée National de Chine</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plus grand musée de Chine avec la plus grande collection du monde. L&apos;exposition &quot;La Route vers la Renaissance&quot; présente l&apos;histoire moderne de la Chine. &quot;La Chine Ancienne&quot; présente le développement de cinq mille ans de civilisation. Il accueille régulièrement des expositions internationales de reliquias de haut niveau. C&apos;est le trésor de la civilisation chinoise.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Musée de la Capitale</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un musée professionnel présentant l&apos;histoire et la culture de Pékin. Il recrée les changements urbains du vieux Pékin, présente la culture folklorique traditionnelle et abrite une grande collection de reliques déterrées dans la région de Pékin. Il sert de fenêtre pour comprendre l&apos;histoire et la culture de Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Museum Image</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Expériences Spéciales</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Expériences Culturelles</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Spectacles d&apos;Opéra de Pékin</li>
            <li>Séjour dans une maison à cour traditionnelle</li>
            <li>Appréciation de la culture du thé</li>
            <li>Visites approfondies des hutongs</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Cuisine Traditionnelle de Pékin</h3>
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. Canard de Pékin</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plat traditionnel le plus célèbre de Pékin avec plus de 800 ans d&apos;histoire. Le canard se caractérise par sa peau fine et croustillante et sa viande tendre et juteuse. La façon traditionnelle de le manger consiste à envelopper la viande de canard dans de fines crêpes avec des oignons de printemps, des tranches de concombre et de la sauce aux haricots sucrée. Un banquet complet de canard présente différentes parties du canard préparées selon diverses méthodes de cuisson. Les restaurants représentatifs du canard de Pékin comprennent Quanjude, Da Dong, et Siji Minfu, chacun avec leurs propres caractéristiques uniques.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peking Duck Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. Shuan Yangrou (Fondue avec Tranches d&apos;Agneau)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A traditional Beijing winter dish originating from the Yuan Dynasty imperial court. Thin slices of fresh lamb are quickly cooked in a boiling copper pot and eaten with sesame paste, leek flower sauce, and other condiments. The meat is tender and the broth is light, warming the stomach without being greasy. Donglaishun est l&apos;établissement de fondue le plus représentatif de Pékin avec plus de 100 ans d&apos;histoire.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Hot Pot with Lamb Slices Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. Nouilles Zhajiang</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;un des plats de nouilles les plus représentatifs de Pékin, connu comme &quot;les Premières Nouilles de Pékin&quot;. Les nouilles épaisses et élastiques sont garnies d&apos;une sauce faite de pâte de soja jaune, de sauce aux haricots sucrée et de viande en dés, accompagnées de tranches de concombre, de pousses de haricots et d&apos;autres légumes. La bonne façon de les manger implique &quot;trois mélanges et deux consommations&quot;, résultant en un goût savoureux et délicieux. Les habitants traditionnels de Pékin jugent souvent les manières de table d&apos;un convive par la manière dont ils peuvent finir proprement la sauce dans leur bol.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Zhajiang Noodles Image</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">4. Lvdagun (Roulement d&apos;Âne)</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Beijing specialty snack with over 200 years of history, named for its preparation process of rolling in soybean flour. It&apos;s made from glutinous millet dough filled with red bean paste, then rolled in yellow soybean flour, resulting in alternating yellow and white colors and a soft, sweet taste. It&apos;s particularly common during Spring Festival and is a traditional dessert Beijingers serve to guests.
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">5. Dalian Huoshao</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A century-old Beijing snack named after its shape ressemblant à une poche ancienne appelée &quot;dalian&quot;. Elle présente une peau extérieure croustillante et une garniture savoureuse, généralement du porc avec des ciboulettes ou du bœuf. L&apos;artisanat est exquis; la garniture est d&apos;abord sautée avec des assaisonnements, puis enveloppée dans une pâte spéciale et frite à la poêle jusqu&apos;à ce qu&apos;elle soit dorée des deux côtés. Avec son arôme riche et sa texture croustillante à l&apos;extérieur et tendre à l&apos;intérieur, c&apos;est une collation traditionnelle bien-aimée parmi les habitants du vieux Pékin.
          </p>
          
          <div className="my-6">
            {/* Placeholder d'image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dalian Huoshao Image</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-8 italic">
            Cette capitale antique porte trop d&apos;histoire et de culture, chaque coin pouvant cacher une histoire émouvante, et chaque attraction méritant d&apos;être savourée. Pékin au printemps est une peinture colorée qui attend d&apos;être explorée et découverte. De la grandeur royale à la vie ordinaire, de la culture traditionnelle à l&apos;art moderne, Pékin présente des charmes divers, offrant aux visiteurs une expérience culturelle unique.
          </p>
        </>
      );
    } else if (currentLanguage === 'ja') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">第一印象</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            輝く金色の屋根瓦を持つ壮大な紫禁城、山々を蛇行する万里の長城、胡同で鳴り響く三輪車の鈴の音、夕日を映すCBDのガラスカーテンウォール...ここは北京、古代と現代、伝統と革新が融合した都市です。3,000年の都市建設の歴史と800年の首都としての歴史を持つ北京は、中国文明の真髄を担い、現代中国の活気あるエネルギーを示しています。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">最も代表的な特徴：</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>世界最大の王宮複合体 - 紫禁城</li>
            <li>人類史上最大の工学プロジェクトの一つ - 万里の長城</li>
            <li>独特の四合院と胡同文化</li>
            <li>現代国際都市の繁栄と活力</li>
          </ul>
          
          <div className="my-8">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">北京のパノラマ画像</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本情報の概要</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">最適な訪問シーズン</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春（3月〜5月）：快適な気温、花々が咲き誇る</li>
            <li>秋（9月〜10月）：澄んだ空、快適な天候、紅葉</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">気候の特徴</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>春：暖かく快適、時折砂嵐</li>
            <li>夏：暑く雨が多い</li>
            <li>秋：涼しく乾燥</li>
            <li>冬：寒く乾燥</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">地元の交通概要</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>主要観光スポットをカバーする発達した地下鉄網</li>
            <li>遠隔地の景勝地にアクセスする密集したバスルート</li>
            <li>タクシーの初乗り料金：13元</li>
            <li>市内全域で利用可能なシェア自転車</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化と歴史の概要</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">歴史的発展</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>商・周王朝：蓟城として最初に設立</li>
            <li>元王朝：公式に首都として確立、大都と呼ばれる</li>
            <li>明・清王朝：北京の首都、紫禁城の建設</li>
            <li>現代：国際的な大都市に発展</li>
          </ul>
          
          <div className="my-8">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">歴史的遺跡の画像</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必見スポット</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">王宮と庭園</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 故宮博物院（紫禁城）</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界最大の宮殿複合体で、明・清王朝の24人の皇帝の住居。720,000平方メートルの面積を持ち、建物は壮大で圧倒的です。太和殿は中国最大の木造建築で、皇帝権力の頂点を象徴しています。後三宮は皇帝と妃たちの生活空間で、家庭的な雰囲気に満ちています。珍宝館と時計展示館には数えきれない希少な宝物が収蔵されています。春には御花園に牡丹が咲き、角楼の前には木蓮が花開き、息を呑むような景色を作り出します。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">紫禁城の画像</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 頤和園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界最大かつ最も保存状態の良い王家の庭園で、西太后の夏の避暑地。きらめく水面を持つ昆明湖は頤和園の面積の約4分の3を占めています。長廊は世界最長の彩色された回廊で、各部分にユニークな絵画が施されています。仏香閣は庭園内の最高地点として威厳を持って立っています。春には、桃の花、杏の花、木蓮が次々と咲き、柳が水面に垂れ下がります。春の湖畔はこの王家の庭園の最も魅惑的な季節を示しています。
          </p>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">3. 天壇公園</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            明・清王朝の皇帝が天を崇拝した聖地であり、中国最大の祭祀建築複合体。金色の頂部と青い瓦を持つ祈年殿は古代の天への崇拝の主要建物です。円丘壇は白い大理石の三層で構築されており、訪問者を驚かせるユニークな音響効果を生み出します。回音壁は古代建築音響の奇跡です。春には梅の花、木蓮、海棠の花が次々と咲きます。夜明けの天壇は荘厳で威厳のある皇帝の雰囲気を示しています。
          </p>
          
          <div className="my-6">
            {/* 画像プレースホルダー */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">天壇公園の画像</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">万里の長城セクション</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 慕田峪長城</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
  );
} 