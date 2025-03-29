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
            世界上最大的宫殿建筑群，明清24位皇帝的居所。建筑面积72万平方米，拥有9000多间房屋。三大殿气势恢宏，体现皇权威严。后三宫精致典雅，展现生活气息。珍宝馆、钟表馆珍藏稀世文物。春季特色：御花园牡丹盛开，角楼玉兰绽放。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">故宫图片</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">2. 颐和园</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            世界最大的皇家园林，慈禧太后的避暑胜地。昆明湖占地广阔，碧波荡漾。长廊彩绘精美，讲述古典名著故事。佛香阁巍峨壮观，是园中制高点。春季特色：桃花、杏花、垂柳构成诗意画卷。
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">长城景区</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 慕田峪长城</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            保存最完好的长城段落之一。23座明代烽火台遗址。山势险峻，景色壮丽。春季特色：山花烂漫，长城如画。
          </p>
          
          <div className="my-6">
            {/* 图片占位符 */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">长城图片</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">特色街区与胡同</h3>
          
          <h4 className="text-lg font-medium mb-2 text-gray-800">1. 南锣鼓巷</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            八百年历史的老北京胡同。青砖灰瓦，四合院林立。传统与现代文化交融。老字号与创意店铺并存。
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">特色体验</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">文化体验</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>京剧表演欣赏</li>
            <li>四合院住宿体验</li>
            <li>茶文化品鉴</li>
            <li>胡同深度游</li>
          </ul>
          
          <p className="text-gray-700 mt-8 italic">
            这座千年古都承载着太多的历史与文化，每一个转角都可能藏着一段动人的故事，每一处景点都值得细细品味。春日的北京，更是一幅色彩斑斓的画卷，等待着您去探索和发现。
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
            <li>The world's largest royal palace complex - the Forbidden City</li>
            <li>One of the greatest engineering projects in human history - the Great Wall</li>
            <li>The unique courtyard house and hutong culture</li>
            <li>The prosperity and vitality of a modern international metropolis</li>
          </ul>
          
          {/* 英文版的其余内容 */}
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