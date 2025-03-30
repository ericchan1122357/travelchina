'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HuangshanPage() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 标题内容多语言实现
  const getTitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '黄山：奇松怪石的云海仙境';
      case 'en':
        return 'Huangshan: Cloud Sea Paradise of Peculiar Pines and Rocks';
      case 'fr':
        return 'Huangshan: Paradis de mer de nuages avec pins et rochers particuliers';
      case 'de':
        return 'Huangshan: Wolkenmeer-Paradies mit merkwürdigen Kiefern und Felsen';
      case 'es':
        return 'Huangshan: Paraíso del mar de nubes con pinos y rocas peculiares';
      case 'ja':
        return '黄山：奇妙な松と岩の雲海天国';
      case 'ko':
        return '황산: 기이한 소나무와 바위가 있는 구름바다 천국';
      case 'ru':
        return 'Хуаншань: Райское море облаков с причудливыми соснами и скалами';
      default:
        return 'Huangshan: Cloud Sea Paradise of Peculiar Pines and Rocks';
    }
  };
  
  // 子标题多语言实现
  const getSubtitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '探索中国最美名山与徽派古村落的人文艺术';
      case 'en':
        return 'Explore China\'s most beautiful mountain and the art of Hui-style ancient villages';
      case 'fr':
        return 'Explorez la plus belle montagne de Chine et l\'art des anciens villages de style Hui';
      case 'de':
        return 'Entdecken Sie Chinas schönsten Berg und die Kunst der alten Dörfer im Hui-Stil';
      case 'es':
        return 'Explore la montaña más hermosa de China y el arte de las antiguas aldeas de estilo Hui';
      case 'ja':
        return '中国で最も美しい山と徽派古村落の芸術を探る';
      case 'ko':
        return '중국에서 가장 아름다운 산과 후이 스타일 고대 마을의 예술을 탐험하세요';
      case 'ru':
        return 'Исследуйте самую красивую гору Китая и искусство древних деревень в стиле Хуэй';
      default:
        return 'Explore China\'s most beautiful mountain and the art of Hui-style ancient villages';
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
          <p className="text-gray-500">黄山云海全景图片</p>
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
        黄山，中国安徽省南部的山岳型景区，被誉为"五岳归来不看山，黄山归来不看岳"的天下奇山。黄山以奇松、怪石、云海、温泉"四绝"闻名于世，素有"天下第一奇山"之称。这里72峰耸立，千姿百态的岩石造型如刀削斧劈，变幻莫测的云海时而翻腾如海，时而缭绕如带。迎客松傲然屹立，见证着自然的鬼斧神工。黄山不仅是大自然的杰作，更孕育了徽州文化，周边的古村落如宏村、西递保存着明清徽派建筑和水墨画般的山水景观，成为了世界文化遗产。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最具代表性特色：</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>世界文化与自然双遗产</li>
        <li>奇松、怪石、云海、温泉"四绝"</li>
        <li>徽州古村落建筑艺术</li>
        <li>深厚的历史文化底蕴与诗画艺术传统</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">黄山迎客松图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本信息速览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最佳游览季节</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春季（4-5月）：山花烂漫，云雾缭绕</li>
        <li>夏季（6-8月）：清凉避暑，可观壮观日出</li>
        <li>秋季（9-10月）：天高气爽，红叶似火</li>
        <li>冬季（12-2月）：银装素裹，雾凇美景</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">气候特点</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>山顶与山下温差大，需准备多层次衣物</li>
        <li>多雨多雾，降水集中在5-8月</li>
        <li>年平均气温约8℃，冬季零度以下</li>
        <li>紫外线强烈，需做好防晒</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">当地交通概况</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>黄山风景区有前往主要城市的机场和高铁</li>
        <li>景区内可乘坐缆车和景区巴士</li>
        <li>山上有成熟的步行道路系统</li>
        <li>从风景区到徽州古村落可乘坐旅游巴士</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化与历史速览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">历史沿革</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>古称"黟山"，后因唐玄宗东封"黄帝"于此山而改名"黄山"</li>
        <li>宋元时期：道教兴盛，建立仙人洞等道观</li>
        <li>明清时期：徽商兴起，形成徽州文化</li>
        <li>1990年：被列入《世界遗产名录》</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">徽州文化</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>徽派建筑：马头墙、雕花木窗、天井布局</li>
        <li>徽州理学：程朱理学发源地</li>
        <li>徽派版画：明清徽州木刻版画艺术</li>
        <li>徽墨、徽雕、徽菜等徽州特色艺术与饮食</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">徽派建筑图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必游景点</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">黄山风景区</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 前山景区（玉屏景区）</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        前山景区是黄山最具代表性的区域，也是游客最多的地方。这里有著名的迎客松，姿态优美，傲然挺立在绝壁上，成为黄山的象征。玉屏楼是欣赏迎客松的最佳地点，同时也是观赏日出的绝佳位置。百步云梯是一段陡峭的石阶，通往天都峰，被称为"天下第一梯"。一线天是两块巨石之间的狭窄通道，需要侧身通过，体验"一线"之感。前山还有始信峰，以怪石著称，如"猴子观海"等形态各异的石头，栩栩如生。黄山最著名的云海通常也在这一区域观赏，清晨或雨后是出现云海的最佳时机。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">黄山迎客松图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 西海大峡谷</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        西海大峡谷是黄山的精华景区之一，全长约5公里，深约400米，被誉为"黄山第六绝"。峡谷内怪石嶙峋，奇松挺立，沿途有栈道穿行于峭壁之间。"步仙桥"横跨峡谷两壁，站在桥上俯瞰，深谷幽邃，云雾缭绕，如入仙境。"排云亭"是观赏云海的绝佳地点，下临万丈深渊，云雾汹涌如大海波涛。西海大峡谷的迂回九曲栈道，让游客能全方位领略黄山的奇峰怪石和云雾变幻。春秋两季是游览峡谷的最佳时节，此时云雾缭绕，景色最为壮观。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">徽州古村落</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 宏村</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        宏村位于黄山脚下，是一座有着900多年历史的古村落，被誉为"中国画里的乡村"。村落依山傍水，布局精巧，形如牛形，设计了独特的水系，引水穿过村中的"牛肠"（水道），汇入"牛胃"（月塘）。南湖是村中最大的水面，村前的水田与南湖连成一片，倒映着徽派民居和远处的青山，构成了著名的"牛腿之间是水田"的壮丽景观。月沼是村中心的半月形池塘，周围环绕着古老的徽派建筑，倒影清晰，如同水墨画卷。村内的承志堂是一座典型的明清时期徽派大宅，木雕精美，结构复杂，体现了徽州商人的富贵与审美。村内小巷纵横，石板路古朴沧桑，穿行其间如同穿越历史的长廊。宏村的牲畜不入村规定保持了村落的整洁，也是其文明传统的体现。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">宏村南湖图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 西递</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        西递村与宏村齐名，是徽州古村落的代表，有着近千年的历史。村落坐落在青山环抱之中，布局呈现"筷子型"，主街道笔直，两侧小巷整齐排列。西递以胡氏家族聚居地而闻名，保存有大量的明清古民居，共有124座古宅，99条高墙深巷。村内著名的"大夫第"是清代两江总督胡璇的府邸，建筑雄伟精美，体现了徽州建筑的艺术价值。西递的砖雕、木雕、石雕工艺精湛，门楣上的雕刻作品细腻生动，反映了徽州独特的审美和文化。村内水系发达，清澈的溪水从村前流过，沿街有明清时期修建的溪渠，环境清幽怡人。西递的小巷幽静深邃，高墙灰瓦间透出徽州人家的内敛与恬静气质。每年清明时节，村内会举行传统祭祀活动，展示徽州人尊祖敬宗的传统美德。
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">黄山传统美食</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">徽菜精髓与乡土风味</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        黄山地区的美食以徽菜为主，徽菜是中国八大菜系之一，以烹饪山珍野味和讲究火功著称，注重原汁原味，咸鲜适中。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 毛豆腐</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        毛豆腐是黄山地区最具特色的美食之一，因表面长有一层白色茸毛而得名。制作工艺独特，先将豆腐发酵数日，使表面长出白色茸毛，然后裹上特制的面糊油炸，外酥内嫩，味道鲜美。毛豆腐有独特的发酵香气，口感似乳酪，咸香可口，回味悠长。在黄山市休宁县的"老街毛豆腐"和歙县的"雄村毛豆腐"最为正宗，是当地人日常的美食享受。游客初次尝试可能需要适应其特殊气味，但品尝后往往会爱上这道特色小吃。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">毛豆腐图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 臭鳜鱼</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        臭鳜鱼是徽菜中的名菜，尽管名字有"臭"字，但实际上成菜并不臭，而是具有独特的发酵香气。选用新鲜的鳜鱼，经过特殊腌制发酵后，放入沸水中焯烫，再用徽州特有的黄酒、火腿等多种调料焖制而成。成菜外形完整，色泽红亮，鱼肉鲜嫩，鲜香浓郁，带有微微的发酵风味，是徽菜中的代表作。黄山市区的"老街口大酒店"和"徽膳楼"都有正宗的臭鳜鱼供应，是品尝这道名菜的好去处。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. 徽州烧饼</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        徽州烧饼是黄山地区的传统小吃，外表金黄酥脆，内馅香甜或咸鲜。制作工艺精细，面皮要揉至薄如纸，包裹糖、核桃仁、芝麻等内馅，刷上油后放入炉中烘烤。烧饼出炉时香气四溢，外皮酥脆，层次分明，内馅香甜适口。徽州烧饼分甜咸两种，甜的以白糖、核桃仁为馅，咸的则用五花肉、葱花等为馅。在黄山市黟县的"三妮烧饼"和屯溪老街的"正宗徽州烧饼"是尝试这道小吃的好地方。徽州烧饼不仅是当地人喜爱的早餐和茶点，也是馈赠亲友的理想伴手礼。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">4. 山笋炒腊肉</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        山笋炒腊肉是黄山地区传统的家常菜，选用当地山中的新鲜冬笋和自制的腊肉，简单炒制而成。黄山山区的冬笋鲜嫩爽口，腊肉是用山里放养的黑猪肉经过腌制、烟熏而成，香气浓郁。炒制时只需加入少量调料，保持食材原有的风味。这道菜咸香适口，笋脆肉香，体现了徽州菜肴原汁原味的特点。在黄山市区的"老徽州"和"歙县小馆"等餐厅都能品尝到正宗的山笋炒腊肉。这道菜也是当地农家乐的招牌菜，春季是品尝鲜笋的最佳时节。
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