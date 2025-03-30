'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ChongqingPage() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  
  // 标题内容多语言实现
  const getTitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '重庆：山城雾都的立体魅力';
      case 'en':
        return 'Chongqing: The Three-dimensional Charm of the Mountain City';
      case 'fr':
        return 'Chongqing: Le charme tridimensionnel de la ville de montagne';
      case 'de':
        return 'Chongqing: Der dreidimensionale Charme der Bergstadt';
      case 'es':
        return 'Chongqing: El encanto tridimensional de la ciudad de montaña';
      case 'ja':
        return '重慶：山の都市の立体的な魅力';
      case 'ko':
        return '충칭: 산악 도시의 입체적인 매력';
      case 'ru':
        return 'Чунцин: Трехмерное очарование горного города';
      default:
        return 'Chongqing: The Three-dimensional Charm of the Mountain City';
    }
  };
  
  // 子标题多语言实现
  const getSubtitleByLanguage = () => {
    switch (currentLanguage) {
      case 'zh':
        return '探索长江与嘉陵江交汇处的独特山水都市';
      case 'en':
        return 'Explore the unique mountain-river metropolis at the confluence of Yangtze and Jialing Rivers';
      case 'fr':
        return 'Explorez la métropole unique de montagnes et de rivières au confluent des rivières Yangtze et Jialing';
      case 'de':
        return 'Entdecken Sie die einzigartige Berg-Fluss-Metropole am Zusammenfluss von Jangtse und Jialing';
      case 'es':
        return 'Explore la única metrópolis de montaña y río en la confluencia de los ríos Yangtze y Jialing';
      case 'ja':
        return '長江と嘉陵江の合流点にある独特の山川都市を探索する';
      case 'ko':
        return '양쯔강과 자링강이 만나는 지점에 있는 독특한 산-강 대도시를 탐험하세요';
      case 'ru':
        return 'Исследуйте уникальный горно-речной мегаполис в месте слияния рек Янцзы и Цзялин';
      default:
        return 'Explore the unique mountain-river metropolis at the confluence of Yangtze and Jialing Rivers';
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
          <p className="text-gray-500">重庆全景图片</p>
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
        重庆，一座依山而建的立体城市，被誉为"山城"与"雾都"。这里有蜿蜒的长江和嘉陵江穿城而过，高楼与山峦交相辉映，交通网络立体交织，形成了世界少有的山水都市奇观。夜幕降临，万家灯火点缀在山间，犹如璀璨的星河倾泻而下，构成了让人惊叹的重庆夜景。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最具代表性特色：</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>中国四大直辖市之一，长江上游经济中心</li>
        <li>独特的山城地貌与立体交通网络</li>
        <li>麻辣火锅与江湖菜系的美食之都</li>
        <li>三峡大坝与长江三峡的壮丽风景</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">重庆城市全景图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本信息速览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最佳游览季节</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春季（3-5月）：气候适宜，山花烂漫</li>
        <li>秋季（9-11月）：凉爽干燥，适宜观光</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">气候特点</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春季：温暖舒适，雨季开始</li>
        <li>夏季：炎热潮湿，有"火炉"之称</li>
        <li>秋季：凉爽宜人，雾气渐增</li>
        <li>冬季：湿冷多雾，少见严寒</li>
      </ul>
    </>
  );
}

// 英文内容（临时占位）
function getEnglishContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">First Impression</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Chongqing, a three-dimensional city built on mountains, is known as the "Mountain City" and "Fog Capital." Here, the winding Yangtze and Jialing rivers flow through the city, with skyscrapers and mountains complementing each other, and a three-dimensional transportation network forming a rare urban spectacle of mountains and waters. When night falls, thousands of lights sparkle among the mountains, resembling a brilliant river of stars cascading down, creating the breathtaking Chongqing night view.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Most Representative Features:</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>One of China's four direct-administered municipalities and the economic center of the upper Yangtze River</li>
        <li>Unique mountain city topography and three-dimensional transportation network</li>
        <li>Culinary capital of spicy hotpot and Jianghu cuisine</li>
        <li>Magnificent scenery of the Three Gorges Dam and the Yangtze River Three Gorges</li>
      </ul>
      
      <div className="my-8">
        {/* Image placeholder */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chongqing City Panorama</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Essential Information</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Seasons to Visit</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>Spring (March-May): Pleasant climate with blooming mountain flowers</li>
        <li>Autumn (September-November): Cool and dry, ideal for sightseeing</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Climate Characteristics</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>Spring: Warm and comfortable, beginning of the rainy season</li>
        <li>Summer: Hot and humid, known as one of China's "furnace cities"</li>
        <li>Autumn: Cool and pleasant, with increasing fog</li>
        <li>Winter: Damp, cold, and foggy, but rarely severely cold</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Local Transportation</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>Extensive metro network including unique light rail lines built along mountains</li>
        <li>Iconic cable cars and outdoor escalators connecting different elevation levels</li>
        <li>River cruise ships offering spectacular views of the city</li>
        <li>Multiple bridges spanning the Yangtze and Jialing rivers</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Culture and History</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Historical Development</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>Ancient Period: Established as Ba State over 3,000 years ago</li>
        <li>Republic of China: Served as the wartime capital during the Anti-Japanese War</li>
        <li>Modern Era: Became a direct-administered municipality in 1997</li>
        <li>Recent Years: Developed into a megacity and economic powerhouse</li>
      </ul>
      
      <div className="my-8">
        {/* Image placeholder */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Historical Sites Image</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Must-Visit Attractions</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Urban Landmarks</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. Hongyadong Complex</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        This cliff-side complex built along the mountains is one of Chongqing's most iconic landmarks. With its traditional Bayu architectural style of stilt houses, it combines historical elements with modern commercial functions. At night, when the whole building is illuminated, it creates a dreamlike scene that appears to be suspended between heaven and earth. Inside, you'll find numerous restaurants, souvenir shops, and tea houses where you can experience authentic local culture while enjoying panoramic views of the Jialing River.
      </p>
      
      <div className="my-6">
        {/* Image placeholder */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Hongyadong Complex Image</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. Liziba Monorail Station</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        A testament to Chongqing's unique transportation solutions, this famous station features a train that runs through the middle of a residential building. This engineering marvel exemplifies how the city has adapted its public transportation to the challenging mountainous terrain. The sight of a train passing through a building between the 6th and 8th floors has become an international social media sensation and a must-visit spot for photographers and engineering enthusiasts alike.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Natural Scenery</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. Three Gorges</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The magnificent Three Gorges—Qutang, Wu, and Xiling—offer some of China's most spectacular natural scenery. A cruise through these deep river canyons reveals towering cliffs, lush forests, and historic sites that have inspired Chinese poets and artists for centuries. The Three Gorges Dam, the world's largest hydroelectric dam, is also a remarkable feat of engineering worth visiting. The best viewing experience comes during spring and autumn when the weather is clear and the mountains are either blooming with flowers or dressed in vibrant fall colors.
      </p>
      
      <div className="my-6">
        {/* Image placeholder */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Three Gorges Image</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Traditional Cuisine</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Spicy Delights of Chongqing</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Chongqing's food culture is characterized by its bold flavors, particularly the famous numbing-spicy taste. The city's cuisine has been shaped by its humid climate and mountainous geography, with locals traditionally using abundant spices to counter dampness and stimulate appetite.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. Chongqing Hotpot</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The city's signature dish, Chongqing hotpot features a fiery red broth floating with chilies and Sichuan peppercorns. Unlike its Sichuan cousin, Chongqing hotpot typically uses beef tallow as a base, creating a more robust flavor. Traditional hotpot restaurants like Chuanchuanchuan and Liuyishou offer authentic experiences where diners cook a variety of fresh ingredients in the bubbling spicy soup. The experience is social, flavorful, and unforgettable—just be prepared for the intense heat!
      </p>
      
      <div className="my-6">
        {/* Image placeholder */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chongqing Hotpot Image</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. Xiaomian (Small Noodles)</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        These street-style noodles are a beloved local breakfast and quick meal option. Thin wheat noodles are served in a complex spicy sauce made with chili oil, Sichuan peppercorns, garlic, and various other seasonings. Toppings may include minced meat, preserved vegetables, peanuts, and fresh herbs. The best xiaomian can be found in small eateries throughout the city, particularly in the Shapingba and Jiefangbei areas, where locals line up to enjoy this flavorful comfort food.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. Suan La Fen (Hot and Sour Sweet Potato Noodles)</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        These translucent sweet potato noodles served in a tangy, spicy broth are another local favorite. The contrasting flavors of sour vinegar and spicy chili oil create a unique taste sensation that's both refreshing and satisfying. Street vendors throughout the city serve this dish garnished with peanuts, pickled vegetables, and fresh herbs. It's particularly popular during summer months as a cooling yet invigorating snack.
      </p>
    </>
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