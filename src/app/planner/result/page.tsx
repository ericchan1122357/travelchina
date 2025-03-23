'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/homepage/types';
import { ShareIcon, PrinterIcon, ArrowDownTrayIcon, ArrowLeftIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

// localStorage Key
const FORM_DATA_KEY = 'travel_planner_form_data';

// 翻译数据
const translations: Record<Language, any> = {
  en: {
    title: 'Travel Plan',
    backToForm: 'Back to Form',
    backToHome: 'Back to Home',
    personalizedPlan: 'Your Personalized Travel Plan',
    travelType: 'Travel Type',
    travelers: 'Number of Travelers',
    budgetRange: 'Budget Range',
    travelStyle: 'Travel Style',
    departureDate: 'Departure Date',
    returnDate: 'Return Date',
    travelDays: 'Travel Days',
    accommodationPref: 'Accommodation Preference',
    destinations: 'Destinations',
    detailedItinerary: 'Detailed Itinerary',
    generating: 'Generating your detailed itinerary...',
    day: 'Day',
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    accommodation: 'Accommodation',
    travelTips: 'Travel Tips',
    tipsList: [
      'Itineraries may be adjusted due to weather and actual conditions, it is advisable to maintain flexibility',
      'Please book tickets for popular attractions in advance, especially during peak tourist season',
      'Prepare comfortable walking shoes, as many attractions in China require a lot of walking',
      'Carry more cash, although mobile payments are common, tourists may not be able to use them easily',
      'Download offline maps and translation apps in case of network connectivity issues'
    ],
    share: 'Share',
    print: 'Print',
    download: 'Download',
    loading: 'Loading your travel plan...',
    copyright: '© 2023 China Travel Guide. All rights reserved.'
  },
  zh: {
    title: '旅行计划',
    backToForm: '返回表单',
    backToHome: '返回首页',
    personalizedPlan: '您的个性化旅行计划',
    travelType: '旅行类型',
    travelers: '旅行人数',
    budgetRange: '预算范围',
    travelStyle: '旅行风格',
    departureDate: '出发日期',
    returnDate: '返回日期',
    travelDays: '旅行天数',
    accommodationPref: '住宿偏好',
    destinations: '目的地',
    detailedItinerary: '详细行程安排',
    generating: '正在生成您的详细行程...',
    day: '第',
    morning: '上午',
    afternoon: '下午',
    evening: '晚上',
    accommodation: '住宿',
    travelTips: '旅行小贴士',
    tipsList: [
      '行程可能会因天气和实际情况有所调整，建议保持灵活性',
      '请提前预订热门景点的门票，特别是在旅游旺季',
      '准备舒适的步行鞋，中国的许多景点需要大量步行',
      '多携带现金，虽然移动支付普及，但游客可能无法轻松使用',
      '下载离线地图和翻译应用，以防网络连接不畅'
    ],
    share: '分享',
    print: '打印',
    download: '下载',
    loading: '正在加载您的旅行计划...',
    copyright: '© 2023 中国旅游攻略. 保留所有权利.'
  },
  // 添加其他语言的基本翻译，确保至少有关键元素
  fr: {
    title: 'Plan de Voyage',
    backToForm: 'Retour au Formulaire',
    backToHome: 'Retour à l\'Accueil',
    personalizedPlan: 'Votre Plan de Voyage Personnalisé',
    detailedItinerary: 'Itinéraire Détaillé',
    morning: 'Matin',
    afternoon: 'Après-midi',
    evening: 'Soir',
    accommodation: 'Hébergement',
    travelTips: 'Conseils de Voyage',
    share: 'Partager',
    print: 'Imprimer',
    download: 'Télécharger',
    loading: 'Chargement de votre plan de voyage...',
    copyright: '© 2023 Guide de Voyage en Chine. Tous droits réservés.'
  },
  de: {
    title: 'Reiseplan',
    backToForm: 'Zurück zum Formular',
    backToHome: 'Zurück zur Startseite',
    personalizedPlan: 'Ihr persönlicher Reiseplan',
    detailedItinerary: 'Detaillierte Reiseroute',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    accommodation: 'Unterkunft',
    travelTips: 'Reisetipps',
    share: 'Teilen',
    print: 'Drucken',
    download: 'Herunterladen',
    loading: 'Ihr Reiseplan wird geladen...',
    copyright: '© 2023 China-Reiseführer. Alle Rechte vorbehalten.'
  },
  ja: {
    title: '旅行プラン',
    backToForm: 'フォームに戻る',
    backToHome: 'ホームに戻る',
    personalizedPlan: 'あなたのパーソナライズされた旅行プラン',
    detailedItinerary: '詳細な旅程',
    morning: '午前',
    afternoon: '午後',
    evening: '夕方',
    accommodation: '宿泊施設',
    travelTips: '旅行のヒント',
    share: '共有',
    print: '印刷',
    download: 'ダウンロード',
    loading: '旅行プランを読み込んでいます...',
    copyright: '© 2023 中国旅行ガイド. 全著作権所有.'
  },
  ko: {
    title: '여행 계획',
    backToForm: '양식으로 돌아가기',
    backToHome: '홈으로 돌아가기',
    personalizedPlan: '맞춤형 여행 계획',
    detailedItinerary: '상세 일정',
    morning: '오전',
    afternoon: '오후',
    evening: '저녁',
    accommodation: '숙박',
    travelTips: '여행 팁',
    share: '공유',
    print: '인쇄',
    download: '다운로드',
    loading: '여행 계획을 불러오는 중...',
    copyright: '© 2023 중국 여행 가이드. 모든 권리 보유.'
  },
  es: {
    title: 'Plan de Viaje',
    backToForm: 'Volver al Formulario',
    backToHome: 'Volver al Inicio',
    personalizedPlan: 'Su Plan de Viaje Personalizado',
    detailedItinerary: 'Itinerario Detallado',
    morning: 'Mañana',
    afternoon: 'Tarde',
    evening: 'Noche',
    accommodation: 'Alojamiento',
    travelTips: 'Consejos de Viaje',
    share: 'Compartir',
    print: 'Imprimir',
    download: 'Descargar',
    loading: 'Cargando su plan de viaje...',
    copyright: '© 2023 Guía de Viajes de China. Todos los derechos reservados.'
  },
  ru: {
    title: 'План Путешествия',
    backToForm: 'Вернуться к Форме',
    backToHome: 'Вернуться на Главную',
    personalizedPlan: 'Ваш Персонализированный План Путешествия',
    detailedItinerary: 'Подробный Маршрут',
    morning: 'Утро',
    afternoon: 'День',
    evening: 'Вечер',
    accommodation: 'Проживание',
    travelTips: 'Советы Путешественникам',
    share: 'Поделиться',
    print: 'Печать',
    download: 'Скачать',
    loading: 'Загрузка вашего плана путешествия...',
    copyright: '© 2023 Путеводитель по Китаю. Все права защищены.'
  }
};

// 获取翻译，如果当前语言没有特定翻译则回退到英文
const getTranslation = (language: Language, key: string): any => {
  return translations[language]?.[key] || translations.en[key];
};

// 旅行计划结果页面
export default function ResultPage() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const [planData, setPlanData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [travelDays, setTravelDays] = useState(0);
  const [dailyPlans, setDailyPlans] = useState<any[]>([]);
  
  // 获取翻译函数快捷方式
  const t = (key: string) => getTranslation(currentLanguage, key);

  // 页面加载时获取表单数据
  useEffect(() => {
    const loadFormData = () => {
      if (typeof window === 'undefined') return;

      try {
        const savedFormData = localStorage.getItem(FORM_DATA_KEY);
        if (!savedFormData) {
          // 如果没有保存的数据，重定向回表单页面
          router.push('/planner');
          return;
        }

        const formData = JSON.parse(savedFormData);
        setPlanData(formData);

        // 计算旅行天数
        if (formData.departureDate && formData.returnDate) {
          const start = new Date(formData.departureDate);
          const end = new Date(formData.returnDate);
          const diffTime = Math.abs(end.getTime() - start.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
          setTravelDays(diffDays);

          // 生成每日计划
          generateDailyPlans(formData, diffDays);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('加载旅行计划数据时出错:', error);
        router.push('/planner');
      }
    };

    loadFormData();
  }, [router]);

  // 生成每日行程计划
  const generateDailyPlans = (formData: any, days: number) => {
    setIsGenerating(true);

    // 这里模拟API请求生成行程计划
    setTimeout(() => {
      const plans = [];

      // 根据目的地和天数生成简单的每日行程
      const cities = formData.selectedDestinations;
      const cityCount = cities.length;

      // 为每个城市分配天数
      const daysPerCity = Math.floor(days / cityCount);
      let remainingDays = days % cityCount;

      let currentDay = 1;
      const startDate = new Date(formData.departureDate);

      for (let i = 0; i < cityCount; i++) {
        const city = cities[i];
        let cityDays = daysPerCity;
        
        // 分配剩余天数
        if (remainingDays > 0) {
          cityDays++;
          remainingDays--;
        }

        // 为当前城市添加日程
        for (let j = 0; j < cityDays; j++) {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + currentDay - 1);

          const dayPlan = {
            day: currentDay,
            date: date.toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long'
            }),
            city: city,
            morning: getMorningActivity(city, j),
            afternoon: getAfternoonActivity(city, j),
            evening: getEveningActivity(city, j, formData.foodTypes),
            accommodation: formData.accommodation,
            weatherForecast: getRandomWeather()
          };

          plans.push(dayPlan);
          currentDay++;
        }
      }

      setDailyPlans(plans);
      setIsGenerating(false);
    }, 1500);
  };

  // 根据城市和天数生成上午活动
  const getMorningActivity = (city: string, day: number) => {
    const activities: Record<string, string[]> = {
      '北京': ['参观故宫博物院', '游览颐和园', '漫步什刹海', '探索798艺术区', '长城徒步之旅'],
      '上海': ['游览外滩', '参观上海博物馆', '探索田子坊', '漫步豫园', '迪士尼早间体验'],
      '西安': ['参观兵马俑', '游览大雁塔', '探索回民街', '骑行西安城墙', '游览华清宫'],
      '成都': ['参观大熊猫基地', '游览宽窄巷子', '探索锦里古街', '漫步青城山', '参观武侯祠'],
      '杭州': ['西湖游船', '游览灵隐寺', '探索西溪湿地', '漫步南宋御街', '参观雷峰塔'],
      '桂林': ['漓江漂流', '游览象鼻山', '探索七星公园', '漫步两江四湖', '参观芦笛岩'],
      '广州': ['游览白云山', '参观陈家祠', '探索沙面', '漫步北京路步行街', '参观中山纪念堂'],
      '深圳': ['参观大梅沙', '游览世界之窗', '探索东部华侨城', '漫步深圳湾', '参观深圳博物馆']
    };

    const cityActivities = activities[city] || ['城市观光'];
    return cityActivities[day % cityActivities.length];
  };

  // 根据城市和天数生成下午活动
  const getAfternoonActivity = (city: string, day: number) => {
    const activities: Record<string, string[]> = {
      '北京': ['参观天坛公园', '逛王府井大街', '游览北海公园', '参观国家博物馆', '南锣鼓巷品尝小吃'],
      '上海': ['游览城隍庙', '徐家汇购物', '参观中华艺术宫', '漫步新天地', '环球港品尝美食'],
      '西安': ['大唐不夜城', '小雁塔游览', '陕西历史博物馆', '钟鼓楼广场', '半坡博物馆'],
      '成都': ['参观杜甫草堂', '逛太古里', '游览春熙路', '参观四川博物院', '金沙遗址博物馆'],
      '杭州': ['漫步河坊街', '游览岳庙', '苏堤漫步', '参观浙江博物馆', '龙井茶园品茶'],
      '桂林': ['参观阳朔西街', '游览十里画廊', '遇龙河漂流', '攀登老寨山', '蝴蝶泉公园'],
      '广州': ['参观广州塔', '游览越秀公园', '逛北京路步行街', '海珠湿地公园', '长隆欢乐世界'],
      '深圳': ['逛华强北', '参观欢乐谷', '游览红树林', '深圳湾公园', '参观海洋世界']
    };

    const cityActivities = activities[city] || ['休闲购物'];
    return cityActivities[day % cityActivities.length];
  };

  // 根据城市、天数和食物偏好生成晚间活动
  const getEveningActivity = (city: string, day: number, foodTypes: string[]) => {
    const activities: Record<string, string[]> = {
      '北京': ['品尝北京烤鸭', '欣赏京剧表演', '夜游什刹海', '鸟巢水立方夜景', '大栅栏夜市'],
      '上海': ['外滩夜景观赏', '南京路夜游', '豫园灯会', '品尝本帮菜', '陆家嘴夜景'],
      '西安': ['大唐芙蓉园夜景', '品尝羊肉泡馍', '钟楼鼓楼夜景', '回民街美食', '大雁塔喷泉'],
      '成都': ['品尝四川火锅', '锦里夜市', '观看川剧变脸', '九眼桥酒吧街', '太古里夜景'],
      '杭州': ['西湖音乐喷泉', '品尝杭帮菜', '南宋御街夜市', '清河坊夜游', '湖滨夜市'],
      '桂林': ['两江四湖夜游', '品尝桂林米粉', '象山夜景', '西街酒吧', '叠彩山夜景'],
      '广州': ['珠江夜游', '品尝广州早茶', '北京路夜市', '广州塔夜景', '沙面夜景'],
      '深圳': ['深圳湾夜景', '欢乐海岸灯光秀', '品尝客家菜', '东门老街夜市', '世界之窗夜景']
    };

    // 根据食物偏好调整晚间活动
    let cityActivities = activities[city] || ['享用晚餐'];
    
    // 如果有食物偏好，将其插入第一天的活动中
    if (foodTypes && foodTypes.length > 0 && day === 0) {
      cityActivities[0] = `品尝${foodTypes[0]}美食`;
    }
    
    return cityActivities[day % cityActivities.length];
  };

  // 随机生成天气预报
  const getRandomWeather = () => {
    const weathers = ['晴朗', '多云', '小雨', '阵雨', '阴天', '晴转多云'];
    const temperatures = [18, 20, 22, 24, 26, 28, 30];
    
    const weather = weathers[Math.floor(Math.random() * weathers.length)];
    const tempHigh = temperatures[Math.floor(Math.random() * temperatures.length)];
    const tempLow = tempHigh - Math.floor(Math.random() * 8) - 2;
    
    return {
      condition: weather,
      high: tempHigh,
      low: tempLow
    };
  };

  // 分享行程计划
  const sharePlan = () => {
    if (navigator.share) {
      navigator.share({
        title: '我的中国旅行计划',
        text: `我计划了一次${planData.selectedDestinations.join('、')}之旅，共${travelDays}天`,
        url: window.location.href
      }).catch(error => {
        console.error('分享失败:', error);
      });
    } else {
      alert('您的浏览器不支持原生分享功能');
    }
  };

  // 下载行程计划
  const downloadPlan = () => {
    // 创建计划文本
    let planText = `我的中国旅行计划\n`;
    planText += `行程：${planData.selectedDestinations.join(', ')}\n`;
    planText += `日期：${planData.departureDate} 到 ${planData.returnDate}\n`;
    planText += `总天数：${travelDays}天\n\n`;

    dailyPlans.forEach(plan => {
      planText += `第${plan.day}天 (${plan.date}) - ${plan.city}\n`;
      planText += `上午：${plan.morning}\n`;
      planText += `下午：${plan.afternoon}\n`;
      planText += `晚上：${plan.evening}\n`;
      planText += `住宿：${plan.accommodation}\n`;
      planText += `天气预报：${plan.weatherForecast.condition}，${plan.weatherForecast.low}-${plan.weatherForecast.high}℃\n\n`;
    });

    // 创建下载链接
    const blob = new Blob([planText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '我的中国旅行计划.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 打印行程计划
  const printPlan = () => {
    window.print();
  };

  // 加载状态
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-china-red mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-china-red text-white p-4 shadow-md print:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => router.push('/planner')}
              className="flex items-center text-sm hover:underline"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-1" />
              {t('backToForm')}
            </button>
            <Link href="/" className="hover:underline transition-colors">
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 行程摘要 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 -mt-10 -mr-10 bg-red-100 rounded-full opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 -mb-10 -ml-10 bg-yellow-100 rounded-full opacity-40"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">{t('personalizedPlan')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 mb-2">{t('travelType')}: <span className="font-medium text-gray-800">{planData.travellerType}</span></p>
                  <p className="text-gray-600 mb-2">{t('travelers')}: <span className="font-medium text-gray-800">{planData.travellers} 人</span></p>
                  <p className="text-gray-600 mb-2">{t('budgetRange')}: <span className="font-medium text-gray-800">{planData.budget}</span></p>
                  <p className="text-gray-600 mb-2">{t('travelStyle')}: <span className="font-medium text-gray-800">{planData.travelStyle}</span></p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">{t('departureDate')}: <span className="font-medium text-gray-800">{planData.departureDate}</span></p>
                  <p className="text-gray-600 mb-2">{t('returnDate')}: <span className="font-medium text-gray-800">{planData.returnDate}</span></p>
                  <p className="text-gray-600 mb-2">{t('travelDays')}: <span className="font-medium text-gray-800">{travelDays} 天</span></p>
                  <p className="text-gray-600 mb-2">{t('accommodationPref')}: <span className="font-medium text-gray-800">{planData.accommodation}</span></p>
                </div>
              </div>
            
              <div className="mb-6">
                <p className="text-gray-600 mb-2">{t('destinations')}:</p>
                <div className="flex flex-wrap gap-2">
                  {planData.selectedDestinations.map((city: string, index: number) => (
                    <span key={index} className="bg-red-50 text-china-red px-3 py-1 rounded-full text-sm border border-red-100">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 操作按钮 */}
              <div className="flex space-x-3 print:hidden">
                <button 
                  onClick={sharePlan}
                  className="flex items-center text-sm bg-china-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <ShareIcon className="w-4 h-4 mr-2" />
                  {t('share')}
                </button>
                <button 
                  onClick={printPlan}
                  className="flex items-center text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PrinterIcon className="w-4 h-4 mr-2" />
                  {t('print')}
                </button>
                <button 
                  onClick={downloadPlan}
                  className="flex items-center text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  {t('download')}
                </button>
              </div>
            </div>
          </div>

          {/* 每日行程 */}
          <h3 className="text-xl font-bold mb-4 text-gray-800">{t('detailedItinerary')}</h3>
          
          {isGenerating ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-china-red mx-auto"></div>
              <p className="mt-4 text-gray-600">{t('generating')}</p>
            </div>
          ) : (
            <div className="space-y-6">
              {dailyPlans.map((plan, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-5 border-l-4 border-china-red relative overflow-hidden">
                  {/* 日期和天数 */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{t('day')} {plan.day}</h4>
                      <p className="text-sm text-gray-500 flex items-center">
                        <CalendarDaysIcon className="w-4 h-4 mr-1" />
                        {plan.date}
                      </p>
                    </div>
                    <div className="flex items-center bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                      <span className="text-amber-700 font-medium mr-2">
                        {plan.city}
                      </span>
                      <span className="text-xs text-gray-500">
                        {plan.weatherForecast.condition} {plan.weatherForecast.low}-{plan.weatherForecast.high}℃
                      </span>
                    </div>
                  </div>
                  
                  {/* 每日活动 */}
                  <div className="space-y-3 ml-2">
                    <div className="flex">
                      <div className="min-w-[80px] font-medium text-gray-700">{t('morning')}:</div>
                      <div className="text-gray-600">{plan.morning}</div>
                    </div>
                    <div className="flex">
                      <div className="min-w-[80px] font-medium text-gray-700">{t('afternoon')}:</div>
                      <div className="text-gray-600">{plan.afternoon}</div>
                    </div>
                    <div className="flex">
                      <div className="min-w-[80px] font-medium text-gray-700">{t('evening')}:</div>
                      <div className="text-gray-600">{plan.evening}</div>
                    </div>
                    <div className="flex">
                      <div className="min-w-[80px] font-medium text-gray-700">{t('accommodation')}:</div>
                      <div className="text-gray-600">{plan.accommodation}</div>
                    </div>
                  </div>
                  
                  {/* 视觉装饰 */}
                  <div className="absolute top-0 right-0 w-20 h-20 -mt-5 -mr-5 bg-red-50 rounded-full opacity-30"></div>
                </div>
              ))}
            </div>
          )}
          
          {/* 行程建议 */}
          <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-bold text-blue-800 mb-3">{t('travelTips')}</h3>
            <ul className="space-y-2 text-blue-700">
              {t('tipsList').map((tip: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6 mt-12 print:hidden">
        <div className="container mx-auto text-center">
          <p>{t('copyright')}</p>
        </div>
      </footer>
    </div>
  );
} 