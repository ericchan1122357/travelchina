'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HangzhouPage() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 标题内容多语言实现
  const getTitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '杭州：人间天堂的诗画江南';
      case 'en':
        return 'Hangzhou: Poetic Paradise of Jiangnan';
      case 'fr':
        return 'Hangzhou: Paradis poétique de Jiangnan';
      case 'de':
        return 'Hangzhou: Poetisches Paradies von Jiangnan';
      case 'es':
        return 'Hangzhou: Paraíso poético de Jiangnan';
      case 'ja':
        return '杭州：江南の詩的な楽園';
      case 'ko':
        return '항저우: 강남의 시적인 천국';
      case 'ru':
        return 'Ханчжоу: Поэтический рай Цзяннань';
      default:
        return 'Hangzhou: Poetic Paradise of Jiangnan';
    }
  };
  
  // 子标题多语言实现
  const getSubtitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '探索西湖、西溪湿地与雄伟的大运河';
      case 'en':
        return 'Explore West Lake, Xixi Wetland and the Grand Canal';
      case 'fr':
        return 'Explorez le lac de l\'Ouest, la zone humide de Xixi et le Grand Canal';
      case 'de':
        return 'Entdecken Sie den Westsee, das Xixi-Feuchtgebiet und den Großen Kanal';
      case 'es':
        return 'Explore el Lago Oeste, el Humedal Xixi y el Gran Canal';
      case 'ja':
        return '西湖、西渓湿地と大運河を探検する';
      case 'ko':
        return '서호, 시시 습지와 대운하를 탐험하세요';
      case 'ru':
        return 'Исследуйте Западное озеро, водно-болотные угодья Сиси и Великий канал';
      default:
        return 'Explore West Lake, Xixi Wetland and the Grand Canal';
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
          <p className="text-gray-500">杭州西湖全景图片</p>
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
        杭州，被誉为"人间天堂"的城市，是浙江省省会，也是江南水乡的代表城市之一。这里山水相依，湖光潋滟，自古以来就是文人墨客向往的地方。西湖三面环山，碧水如镜，十景名胜各具特色；京杭大运河穿城而过，见证了千年的繁华与变迁；而现代的杭州则以数字经济和创新活力赢得了"东方硅谷"的美誉。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最具代表性特色：</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>举世闻名的世界文化遗产——西湖</li>
        <li>世界最长的人工运河——京杭大运河</li>
        <li>中国茶文化的代表——龙井茶与茶道</li>
        <li>数字经济的中国样本——互联网创新之城</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">西湖美景图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本信息速览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最佳游览季节</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春季（3-5月）：春花烂漫，西湖梅花、桃花、樱花次第开放</li>
        <li>秋季（9-11月）：天高气爽，满山红叶，是观赏西湖的最佳季节</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">气候特点</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春季：温暖湿润，雨量适中</li>
        <li>夏季：炎热多雨，偶有台风</li>
        <li>秋季：凉爽宜人，秋高气爽</li>
        <li>冬季：湿冷多雨，少有霜雪</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">当地交通概况</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>地铁网络完善，已开通多条线路</li>
        <li>公交系统发达，覆盖主要景点</li>
        <li>西湖周边可步行或乘坐观光车</li>
        <li>水上巴士可游览西湖和京杭大运河</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化与历史速览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">历史沿革</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>秦朝：设县治，始称"钱唐"</li>
        <li>隋朝：开凿京杭大运河，奠定繁荣基础</li>
        <li>南宋：定都临安（今杭州），达到历史鼎盛</li>
        <li>近现代：发展成为江南重要城市和创新中心</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">历史古迹图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必游景点</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">西湖景区</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 西湖十景</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        西湖十景是历史上流传下来的西湖著名景点，包括苏堤春晓、曲院风荷、平湖秋月、断桥残雪、柳浪闻莺、花港观鱼、雷峰夕照、双峰插云、南屏晚钟和三潭印月。每个景点都有其独特的自然风光和人文故事。春天的苏堤，绿柳成荫，春花烂漫；冬季的断桥，若有薄雪覆盖，宛如仙境。无论四季，西湖十景都能带给游客不同的美感体验。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">西湖十景图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 雷峰塔与六和塔</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        雷峰塔位于西湖南岸夕照山上，始建于北宋，与白蛇传故事紧密相连。现在的雷峰塔是在原址重建的，游客可以登塔俯瞰西湖全景，领略"雷峰夕照"的美景。六和塔位于钱塘江畔，是古代杭州的重要地标，始建于北宋，是中国古代木构多层塔楼的杰作。六和塔八角五层，外观十三层，登塔可远眺钱塘江潮汐，体验"八卦"设计的独特魅力。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">人文景点</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 灵隐寺</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        灵隐寺位于西湖西北角的灵隐山麓，始建于东晋，是杭州最古老的寺庙，也是江南名刹之一。寺内大雄宝殿宏伟壮观，殿内有33米高的释迦牟尼佛像。灵隐飞来峰石窟造像始于五代，历经宋元，有330余尊造像，是中国南方规模最大的石窟群之一。每年春季，灵隐寺周边山林繁花似锦，青山环抱中的古寺更显空灵宁静。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">灵隐寺图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 京杭大运河杭州段</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        京杭大运河是世界最长的人工运河，而杭州段是大运河的南端起点。坐船游览运河，两岸古建筑和现代城市景观交相辉映，可以感受千年运河的历史变迁。拱宸桥是运河杭州段的标志性建筑，始建于明代，形如满月，倒影水中，构成了"拱宸桥夜泊"的美景。大运河博物馆集中展示了运河文化和历史，是了解中国运河文明的重要场所。
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">杭州传统美食</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">江南美味的精致呈现</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        杭州菜是浙江菜系的重要代表，以清鲜、本味、脆嫩见长，选料精细，制作精巧，具有"清、香、甜、嫩、爽"的特点。杭州的传统美食既有官府菜的精致，也有民间小吃的朴实。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 西湖醋鱼</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        杭州最负盛名的传统名菜，选用西湖草鱼烹制，鱼肉嫩滑，口味酸甜适中，色泽红亮，是宋代就有记载的传统佳肴。正宗的西湖醋鱼应当鱼肉如雪，鲜嫩爽口，酸甜宜人，不失鱼的鲜味。楼外楼、知味观等老字号餐厅都能品尝到地道的西湖醋鱼。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">西湖醋鱼图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 龙井虾仁</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        这道名菜将杭州特产龙井茶与鲜嫩虾仁完美结合，虾仁嫩滑透明，茶香清雅，是杭帮菜中的精品。制作时选用明前龙井茶和新鲜河虾，炒制的虾仁晶莹剔透，茶叶碧绿清香，茶香和虾的鲜甜相得益彰。这道菜最能体现杭州菜清淡雅致的特点，也是品尝杭州本地食材的最佳选择。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. 杭州小笼包</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        杭州小笼包皮薄馅多，汤汁丰富，是当地人喜爱的早餐和点心。正宗的杭州小笼包皮薄如纸，褶皱均匀，内馅鲜美多汁，一咬即破，汤汁四溢。丁桥的知味观和奎元馆的小笼包最为有名，游客可以在这些老字号品尝到地道的杭州小笼包。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">4. 东坡肉</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        以苏东坡命名的传统名菜，形似乌镜，色泽红亮，肥而不腻，酥烂入味。东坡肉选用五花肉慢炖而成，肉质酥烂，味道咸甜适中，是杭州菜中的经典代表。这道菜据说源于苏东坡在杭州任职时创制，已有近千年历史，是品尝杭州历史文化的重要途径。
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