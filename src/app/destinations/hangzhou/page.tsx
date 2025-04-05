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

// 韩语内容
function getKoreanContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">항저우 소개</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">첫인상</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        마르코 폴로가 "세계에서 가장 아름답고 웅장한 도시"라고 칭송한 항저우는 서호를 중심으로 한 강남의 보석으로, 산과 물이 어우러져 자연과 문화 경관이 완벽하게 조화를 이루고 있습니다. 수천 년 동안 호수의 풍경, 정원, 탑, 그리고 파빌리온은 수많은 학자와 시인들을 매료시켜 "하늘에는 천국이 있고, 땅에는 소주와 항저우가 있다"는 명성을 얻게 되었습니다.
      </p>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        항저우를 걷다 보면 서호 십경의 절묘한 디자인에 매료되고, 용정 차 밭의 초록빛 계단식 풍경에 마음을 빼앗기며, 송나라 시대의 깊은 문화유산에 감동하게 될 것입니다. 이 도시는 강남 수향의 고요한 아름다움과 혁신적이고 활기찬 분위기를 동시에 갖추고 있습니다. 서시 습지의 산책로를 거닐든, 청하방의 오래된 거리를 산책하든, 또는 세계적으로 유명한 첸탕강의 조수를 바라보든, 항저우는 다양한 매력으로 방문객을 항상 감동시킵니다.
      </p>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
        오늘날의 항저우는 중국의 8대 고대 수도 중 하나일 뿐만 아니라 디지털 경제와 전자상거래 혁신의 중심지이기도 합니다. 이 도시는 전통과 현대를 완벽하게 결합하여 역사적 특성을 유지하면서도 개방적이고 포용적인 자세로 미래를 받아들이며 중국 도시 발전의 독특한 매력을 보여주고 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">기본 정보 개요</h2>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>최적 방문 시기:</strong> 봄(3월~5월)과 가을(9월~11월)은 항저우를 방문하기에 이상적인 계절로, 쾌적한 기후와 가장 아름다운 풍경을 즐길 수 있습니다. 봄에는 서호 주변의 복숭아꽃과 매화를 감상할 수 있으며, 가을에는 계수나무의 향기가 공기를 채웁니다. 여름은 덥지만 연꽃 감상과 시원한 휴양지를 제공합니다. 겨울에는 가끔 눈으로 덮인 서호의 드문 광경을 볼 수 있어 독특한 매력을 선사합니다.
      </p>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>기후 특성:</strong> 항저우는 사계절이 뚜렷한 아열대 몬순 기후로, 연평균 기온은 17.8°C입니다. 여름은 덥고 비가 많으며, 겨울은 눈이 적고 온화합니다. 봄과 가을은 쾌적한 기후이지만, 봄에는 비가 많은 경향이 있어 우산을 지참하는 것이 좋습니다.
      </p>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>교통:</strong> 항저우는 지하철, 버스, 택시를 포함한 종합적인 대중교통 시스템을 갖춘 편리한 교통망이 있습니다. 서호를 탐험하기 위해 도보, 전기 자동차, 관광 보트, 자전거 중에서 선택할 수 있습니다. 특별 버스 노선이 주요 관광 명소를 연결합니다. 항저우 샤오산 국제공항과 여러 고속철도역은 항저우로의 도착과 출발을 매우 편리하게 만듭니다.
      </p>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>추천 체류 기간:</strong> 항저우의 주요 볼거리를 종합적으로 탐험하려면 4~5일이 필요합니다. 서호와 그 주변만 방문할 계획이라면 2~3일이면 충분합니다. 항저우의 문화와 우전이나 시탕과 같은 인근 수향을 더 깊이 경험하고 싶다면 약 1주일을 예상하시기 바랍니다.
      </p>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>비용 수준:</strong> 베이징이나 상하이와 같은 1급 도시와 비교할 때, 항저우의 일반적인 생활비는 약간 낮지만, 인기 있는 관광지로서 명승지 근처의 식사와 숙박 가격은 성수기 동안 높아질 수 있습니다. 시내 중심부는 유스호스텔부터 5성급 호텔까지 다양한 숙박 시설을 제공합니다. 현지 간식은 저렴하지만 서호 주변의 레스토랑은 상대적으로 비싼 경향이 있습니다.
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">꼭 가봐야 할 명소</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">서호(西湖)</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        유네스코 세계문화유산인 서호는 항저우의 핵심 명소입니다. 그 아름다움은 수세기 동안 노래되어 왔습니다. 호수는 10개의 고전적인 풍경을 포함하고 있으며, 각각 다른 계절에 독특한 매력을 가지고 있습니다. 단교잔설(斷橋殘雪), 평호추월(平湖秋月), 뇌봉탑석조(雷峰塔夕照) 등 유명한 풍경들을 놓치지 마세요. 서호를 가장 잘 즐기는 방법은 천천히 호수 주변을 산책하고 보트 여행을 즐기는 것입니다.<br/><em>여행 팁: 아침이나 저녁에 방문하여 혼잡을 피하는 것이 좋습니다. 서호 주변 산책에는 최소 반나절을 계획하세요.</em>
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">영은사(靈隱寺)</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        항저우에서 가장 오래되고 유명한 불교 사원으로, 비계(飛溪)의 비래봉(飛來峰) 기슭에 위치하고 있습니다. 약 1700년의 역사를 가지고 있으며, 넓은 사원 단지, 인상적인 대불전, 그리고 승려들의 활기찬 종교 활동으로 유명합니다. 특히 사원의 대불전 내부에 있는 약 20미터 높이의 좌불이 눈에 띕니다. 사원 외에도, 주변의 비래봉에는 약 330개의 고대 석불이 조각되어 있어 볼 만합니다.<br/><em>여행 팁: 입장에는 티켓이 필요하며, 성수기에는 입장 제한이 있을 수 있습니다. 관광 버스가 시내 중심에서 직접 사원까지 정기적인 서비스를 운행합니다.</em>
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">룽징 차 정원(龍井茶園)</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        룽징 녹차(중국에서 가장 유명한 차 중 하나)의 발상지로, 방문객들은 아름다운 차 밭과 전통적인 차 따기를 볼 수 있습니다. 이 지역에는 룽징촌이나 메이자우 차 정원 등 다양한 경험을 제공하는 여러 차 정원이 있습니다. 방문객들은 차 제조 과정을 견학하고 정통 룽징 차를 시음할 수 있습니다.<br/><em>여행 팁: 3월 말부터 4월은 차 따기 시즌으로, 차 정원을 방문하기에 가장 좋은 시기입니다. 대중교통으로 접근하기 복잡할 수 있으므로, 택시나 전용 투어를 고려하세요.</em>
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">시시 국립 습지 공원(西溪國立濕地公園)</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        중국 최초의 국립 습지 공원으로, 수로, 연못, 대나무 숲, 그리고 풍부한 생물 다양성으로 유명한 예술적인 경관을 자랑합니다. 갈대밭(蘆葦蕩)에서 보트 여행, 징티안섬(景天島)에서 계절 꽃 감상, 그리고 수제(蘇堤)와 유사한 아름다운 제방 등을 즐길 수 있습니다. 도시의 소음에서 벗어나 자연과의 조화를 느낄 수 있는 평화로운 휴양지입니다.<br/><em>여행 팁: 공원은 넓기 때문에, 전기 셔틀을 이용하거나 배나 보트를 이용하여 다양한 지역을 방문할 수 있습니다. 입장료에 보트 비용이 포함되어 있지 않을 수 있으니 사전에 확인하세요.</em>
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">독특한 체험</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">서호 보트 투어</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        서호를 탐험하는 가장 전통적이고 매력적인 방법은 보트를 이용하는 것입니다. 전통적인 노 젓는 배부터 현대적인 전동 보트까지 다양한 종류의 배가 이용 가능합니다. 호수 중앙에 떠 있는 삼담인월(三潭印月, 호수 속 세 개의 인공 섬)로의 투어가 특히 인기가 많습니다. 황혼 시간의 크루즈는 호수와 주변 산들이 석양에 물드는 가장 인상적인 풍경을 제공합니다.<br/><em>체험 팁: 선착장은 호수 주변에 여러 곳이 있습니다. 다소 비싸지만, 프라이빗 투어에서는 혼잡을 피하고 선장으로부터 상세한 설명을 들을 수 있습니다.</em>
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">차 문화 체험</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        항저우는 룽징 차의 고향으로, 전통적인 중국 차 문화를 체험하기에 좋은 장소입니다. 많은 차관이나 전문 차 문화 센터에서 차 의식 시연, 차 따기 체험(계절에 따라), 그리고 다양한 등급의 룽징 차 시음을 제공합니다. 중국 차의 역사, 문화적 의미, 그리고 올바른 차 우리는 방법에 대해 배울 수 있습니다.<br/><em>체험 팁: 메이자우와 룽징촌은 정통 차 문화 체험을 위한 최고의 장소입니다. 차 따기와 제조의 최적 시즌은 봄 초입니다.</em>
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">항저우 요리 쿠킹 클래스</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        항저우의 풍부한 요리 문화를 체험하기 위해서는 현지 요리 학교나 요리 스튜디오에서 진행되는 요리 수업에 참여하는 것이 좋습니다. 동파육(東坡肉), 서호초어(西湖醋魚), 룽징 새우(龍井蝦仁) 등 전통적인 항저우 요리의 조리법을 배울 수 있습니다. 이러한 클래스는 대개 현지 시장 방문, 식재료 선택, 그리고 전통적인 조리 기술을 포함합니다.<br/><em>체험 팁: 많은 호텔이나 게스트하우스에서 요리 수업을 주선할 수 있습니다. 영어를 구사하는 강사가 있는 수업을 찾는 것이 좋습니다.</em>
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">미식 가이드</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">항저우 요리의 본질</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        항저우 요리는 저장 요리의 중요한 부분으로, "가볍고, 신선하며, 향기롭고, 보기에도 아름답다"는 특징을 가지고 있습니다. 요리는 종종 달콤하고 향이 풍부한 맛으로 알려져 있습니다. 현지 식재료, 특히 신선한 호수 물고기, 죽순, 그리고 룽징 차의 사용을 강조합니다. 항저우의 요리사들은 섬세한 조리 기술과 식재료의 자연스러운 맛을 살리는 기술을 자랑스럽게 생각합니다.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">꼭 맛봐야 할 요리</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li><strong>서호초어(西湖醋魚, 서호식 식초 생선)</strong> - 항저우를 대표하는 요리로, 민물고기를 달콤 신 소스로 조리하여 서호의 아름다운 경치에 경의를 표합니다.</li>
        <li><strong>동파육(東坡肉)</strong> - 송나라 시대의 시인 소동파의 이름을 딴 요리로, 홍주와 간장으로 천천히 삶은 녹아내리는 듯한 돼지고기 요리입니다.</li>
        <li><strong>룽징 새우(龍井蝦仁)</strong> - 룽징 차 잎을 사용한 고급 요리로, 새우의 달콤함과 차의 향이 어우러집니다.</li>
        <li><strong>송소어갱(宋嫂魚羹, 송 부인의 생선 스프)</strong> - 송나라 시대에 기원을 둔 전통적인 생선 스프로, 섬세한 맛과 실크 같은 식감이 특징입니다.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">추천 레스토랑</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li><strong>루이위안(樓外樓)</strong> - 항저우에서 가장 유명한 고급 레스토랑 중 하나로, 전통적인 저장 요리를 제공합니다. 서호초어와 동파육이 특히 유명합니다.</li>
        <li><strong>와이포자(外婆家)</strong> - 현지인들과 관광객 모두에게 인기 있는 체인점으로, 합리적인 가격에 정통 항저우 요리를 제공합니다.</li>
        <li><strong>즈웨이관(知味觀)</strong> - 100년 이상의 역사를 가진 레스토랑으로, 전통적인 항저우 소점심과 디저트로 유명합니다.</li>
        <li><strong>청허팡(清河坊) 먹자골목</strong> - 다양한 현지 간식과 소규모 식당들이 모여 있는 곳으로, 항저우의 다채로운 맛을 경험할 수 있습니다.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">문화 및 역사적 통찰</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">역사적 중요성</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        항저우는 중국 역사와 문화의 중요한 보물창고로, 수천 년에 걸친 풍부한 유산과 깊이 있는 역사적 맥락을 갖고 있습니다. 남송 시대(1127-1279)에 항저우는 제국의 수도였으며, 이 시기는 도시의 문화, 예술, 경제 발전에 있어 황금기로 불립니다. 이 도시의 문화적 의미와 역사적 가치를 진정으로 이해하려면, 단순히 표면적 아름다움을 넘어서 항저우가 중국 문명에 끼친 심오한 영향을 살펴보아야 합니다.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">문화적 아이콘</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li><strong>서호와 10경(西湖十景)</strong> - 서호의 10개 경치는 수세기 동안 예술가들에게 영감을 주는 문화적 상징이 되었습니다. 단교잔설(斷橋殘雪)과 뇌봉탑석조(雷峰塔夕照)와 같은 이러한 장면들은 무수한 시, 그림, 이야기의 주제가 되었습니다.</li>
        <li><strong>백사전설(白蛇傳)</strong> - 항저우에서 가장 유명한 민간 전설 중 하나로, 서호에서 인간으로 변한 흰 뱀과 그녀의 인간 애인 사이의 비극적 사랑 이야기를 담고 있습니다.</li>
        <li><strong>소동파(蘇東坡)</strong> - 송나라의 유명한 시인이자 관료로, 항저우에서 살면서 서호에 대한 많은 시를 남겼습니다. 그는 서호에 제방(소제, 蘇堤)을 건설하는 것을 감독했으며, 지금도 그의 이름으로 불립니다.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">현대 항저우</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        당대 항저우는 전통 문화의 매력을 유지하면서도 중국 디지털 경제와 혁신 문화의 중요한 중심지로 발전했습니다. 알리바바와 같은 인터넷 거인의 본거지로서, 항저우는 중국의 디지털 경제 발전을 이끌고 있으며, '디지털 항저우'는 도시의 새로운 명함이 되었습니다. 항저우는 스마트 시티 건설 측면에서 전국 최고 수준이며, 모바일 결제 보급률은 세계 최고 수준입니다.
      </p>
    </>
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