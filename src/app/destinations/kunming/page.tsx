'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function KunmingPage() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 标题内容多语言实现
  const getTitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '昆明：春城花都的多彩云南';
      case 'en':
        return 'Kunming: Colorful Yunnan\'s Spring City';
      case 'fr':
        return 'Kunming: La ville du printemps éternel du Yunnan coloré';
      case 'de':
        return 'Kunming: Die Frühlingsstadt des farbenfrohen Yunnan';
      case 'es':
        return 'Kunming: La ciudad de la primavera eterna del colorido Yunnan';
      case 'ja':
        return '昆明：カラフルな雲南の春の都市';
      case 'ko':
        return '쿤밍: 다채로운 윈난의 봄의 도시';
      case 'ru':
        return 'Куньмин: Город вечной весны красочного Юньнаня';
      default:
        return 'Kunming: Colorful Yunnan\'s Spring City';
    }
  };
  
  // 子标题多语言实现
  const getSubtitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '探索四季如春的高原明珠与多民族交融的文化圣地';
      case 'en':
        return 'Explore the highland pearl of eternal spring and multicultural heritage';
      case 'fr':
        return 'Explorez la perle des hautes terres au printemps éternel et au patrimoine multiculturel';
      case 'de':
        return 'Entdecken Sie die Hochlandperle des ewigen Frühlings und des multikulturellen Erbes';
      case 'es':
        return 'Explore la perla de las tierras altas de eterna primavera y patrimonio multicultural';
      case 'ja':
        return '永遠の春と多文化遺産の高原の真珠を探検する';
      case 'ko':
        return '영원한 봄과 다문화 유산의 고원 진주를 탐험하세요';
      case 'ru':
        return 'Исследуйте высокогорную жемчужину вечной весны и многокультурного наследия';
      default:
        return 'Explore the highland pearl of eternal spring and multicultural heritage';
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
    switch (currentLanguage) {
      case 'zh':
        return getChineseContent();
      case 'en':
        return getEnglishContent();
      case 'fr':
        return getFrenchContent();
      case 'de':
        return getGermanContent();
      case 'es':
        return getSpanishContent();
      case 'ja':
        return getJapaneseContent();
      case 'ko':
        return getKoreanContent();
      case 'ru':
        return getRussianContent();
      default:
        return getEnglishContent();
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部横幅区域 */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        {/* 横幅图片占位符 */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">昆明全景图片</p>
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

// 中文内容
function getChineseContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">开篇印象</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        昆明，云南省省会，被誉为"春城"，因其四季如春的宜人气候而闻名于世。这座海拔1900米的高原城市，拥有蔚蓝的天空、清新的空气和灿烂的阳光。作为通往西南边疆的门户，昆明融合了汉族和少数民族的多元文化，城市中随处可见的花卉和绿植，为其赢得了"花都"的美誉。无论是壮观的自然景观，还是丰富的民族文化，昆明都是探索云南多彩魅力的理想起点。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最具代表性特色：</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>中国著名的"春城"，四季气候宜人</li>
        <li>滇池与西山的山水胜景</li>
        <li>多民族文化交融的边疆城市</li>
        <li>石林等喀斯特地貌自然奇观</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">昆明滇池图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本信息速览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最佳游览季节</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>全年皆宜，四季如春</li>
        <li>6-8月为雨季，其余月份较为干燥</li>
        <li>2-3月是赏樱花的最佳时节</li>
        <li>11月-次年2月冬季花展期间，可欣赏各种鲜花</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">气候特点</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>年平均气温15℃左右，四季温差小</li>
        <li>夏无酷暑，冬无严寒</li>
        <li>日照充足，但紫外线强烈</li>
        <li>昼夜温差较大，需准备适宜衣物</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">当地交通概况</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>地铁线路不断扩展，覆盖主要区域</li>
        <li>公交系统完善，可达大多数景点</li>
        <li>滴滴、出租车等服务便捷</li>
        <li>前往石林等郊区景点需包车或参加一日游</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化与历史速览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">历史沿革</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春秋战国时期：属滇国，为青铜文化发源地之一</li>
        <li>汉代：设郡，成为连接中原与南方的枢纽</li>
        <li>唐宋时期：南诏国和大理国的重要城市</li>
        <li>明清至今：发展为西南重要城市和边疆地区的中心</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">民族文化</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>居住有汉、彝、白、傣等26个民族</li>
        <li>少数民族传统节日丰富多彩</li>
        <li>民族歌舞《云南映象》闻名中外</li>
        <li>云南少数民族村寨展示多元民族文化</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">少数民族文化图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必游景点</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">市内景点</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 滇池与西山</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        滇池是云南最大的淡水湖，也是中国第六大淡水湖，被誉为"高原明珠"。西山环抱滇池西岸，形成了"高山平湖"的独特景观。游客可以乘船游览滇池，欣赏湖光山色，观赏成群的红嘴鸥；也可以登上西山，俯瞰整个昆明城和滇池全景。龙门是西山最著名的景点之一，石刻精美，气势恢宏。每年冬季，大批红嘴鸥从西伯利亚飞来滇池越冬，成为昆明的一道独特风景。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">滇池西山图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 云南民族村</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        位于滇池北岸的云南民族村，集中展示了云南25个少数民族的建筑、服饰、饮食和风俗习惯。这里按照少数民族的地理分布，分为傣族、白族、纳西族、彝族等多个村寨，每个村寨都有其特色建筑和文化表演。游客可以观看少数民族的歌舞表演，品尝特色美食，购买民族手工艺品，是了解云南多民族文化的窗口。春节、泼水节等传统节日期间，民族村会举办特色活动，体验更加丰富。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">周边景点</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 石林景区</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        石林是世界著名的喀斯特地貌景观，被誉为"天下第一奇观"，距离昆明市区约90公里。亿万年的地质变迁，形成了面积达350平方公里的石林景观带。景区内的石峰、石柱千姿百态，如剑似笋，形成了"大石林"、"小石林"、"黑松岩"等景区。其中，阿诗玛石柱因彝族民间传说而闻名。石林不仅是自然景观，也是彝族人民的聚居地，保存了丰富的彝族文化。每年农历六月二十四的火把节期间，这里会举行盛大的民族歌舞表演。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">石林景区图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 九乡风景区</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        九乡位于昆明东南部，距市区约90公里，是一处集溶洞、峡谷、瀑布、地下河、原始森林于一体的综合性风景区。其中最著名的溶洞"神女宫"高达近百米，洞内钟乳石形态万千，美轮美奂。景区内的地下暗河全长约5公里，河水清澈见底。雄壮的瀑布从悬崖飞泻而下，形成了"白龙瀑"、"惊魂峡"等景点。九乡的自然景观与人文景观相结合，展现了云南多样的地质地貌和古老的少数民族文化。
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">昆明传统美食</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">云南风味的舌尖盛宴</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        昆明的美食融合了汉族和少数民族的烹饪特色，以酸、辣、鲜、香为主要特点，使用大量的鲜花、野菜和香料，创造出独特的"云南味道"。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 过桥米线</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        被誉为"云南第一美食"的过桥米线，是一道集美味与传统故事于一体的特色菜。主食是软滑爽口的米线，配以鸡汤、鱼、肉片、蔬菜等多种配料，讲究的是"现烫现吃"。传统的过桥米线有十多种配料，分别盛在小碟中，按特定顺序放入滚烫的鸡汤中烫熟，最后加入米线。南屏街的"建新园"和"老洋芋"是品尝正宗过桥米线的好去处。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">过桥米线图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 汽锅鸡</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        汽锅鸡是云南著名的特色菜，选用当地的乌骨鸡作为主料，配以火腿、冬虫夏草等名贵中药材，放入特制的蒸锅中蒸制数小时。汽锅鸡色泽金黄，肉质鲜嫩，汤汁清澈，营养丰富。传统的汽锅鸡分为三吃：先品尝原汁原味的鸡肉，然后用鸡汤泡饭，最后将配料煮成粥，层层递进，风味各异。正宗的汽锅鸡可以在官渡古镇的餐馆中品尝到。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. 野生菌火锅</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        云南是世界上野生食用菌种类最多的地区之一，拥有600多种可食用菌。在昆明，野生菌火锅是不可错过的美食体验。火锅中使用牛肝菌、松茸、竹荪、鸡枞等多种野生菌，配以清淡的汤底，保留了菌类的原汁原味。夏秋季节是品尝野生菌的最佳时节，此时的菌类新鲜且品种丰富。南屏街和翠湖附近有许多专业的野生菌火锅店，能够品尝到正宗的云南野生菌。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">4. 鲜花饼</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        鲜花饼是昆明的特色甜点，以玫瑰花为主要原料，辅以云南特产的玫瑰蜜，包裹在酥脆的饼皮中。正宗的鲜花饼外酥内软，甜而不腻，带有淡淡的花香。除了玫瑰花饼，还有茉莉花、菊花等多种口味。鲜花饼既可以作为下午茶点心，也是馈赠亲友的理想伴手礼。昆明机场和各大旅游景点周边都有专卖鲜花饼的店铺，方便游客选购。
      </p>
    </>
  );
}

// 英文内容（临时占位）
function getEnglishContent() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 italic">
        English content is being prepared. Stay tuned...
      </p>
    </div>
  );
}

// 法语内容（临时占位）
function getFrenchContent() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 italic">
        Le contenu en français est en cours de préparation. Restez à l'écoute...
      </p>
    </div>
  );
}

// 德语内容（临时占位）
function getGermanContent() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 italic">
        Der deutsche Inhalt wird vorbereitet. Bleiben Sie dran...
      </p>
    </div>
  );
}

// 西班牙语内容（临时占位）
function getSpanishContent() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 italic">
        El contenido en español está siendo preparado. Estén atentos...
      </p>
    </div>
  );
}

// 日语内容（临时占位）
function getJapaneseContent() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 italic">
        日本語のコンテンツを準備中です。お楽しみに...
      </p>
    </div>
  );
}

// 韩语内容（临时占位）
function getKoreanContent() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 italic">
        한국어 콘텐츠를 준비 중입니다. 계속 지켜봐 주세요...
      </p>
    </div>
  );
}

// 俄语内容（临时占位）
function getRussianContent() {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 italic">
        Русский контент готовится. Следите за обновлениями...
      </p>
    </div>
  );
} 