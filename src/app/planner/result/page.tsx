'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/homepage/types';
import { getTranslation } from '@/homepage/utils/translations';
import { TranslationValue } from '@/homepage/utils/translations/types';
import { ShareIcon, PrinterIcon, ArrowDownTrayIcon, ArrowLeftIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

// localStorage Key
const FORM_DATA_KEY = 'travel_planner_form_data';

// 旅行计划结果页面
export default function ResultPage() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const [planData, setPlanData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [travelDays, setTravelDays] = useState(0);
  const [dailyPlans, setDailyPlans] = useState<any[]>([]);

  // 获取当前语言的翻译
  const t = (key: keyof TranslationValue) => getTranslation(currentLanguage, key);

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
            date: date.toLocaleDateString(currentLanguage === 'zh' ? 'zh-CN' : 'en-US', {
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
      '北京': [t('planner.activities.beijing.morning.1'), t('planner.activities.beijing.morning.2')],
      '上海': [t('planner.activities.shanghai.morning.1'), t('planner.activities.shanghai.morning.2')],
      '西安': [t('planner.activities.xian.morning.1'), t('planner.activities.xian.morning.2')],
      '成都': [t('planner.activities.chengdu.morning.1'), t('planner.activities.chengdu.morning.2')],
      '杭州': [t('planner.activities.hangzhou.morning.1'), t('planner.activities.hangzhou.morning.2')],
      '桂林': [t('planner.activities.guilin.morning.1'), t('planner.activities.guilin.morning.2')]
    };

    const cityActivities = activities[city] || [t('planner.activities.default.morning')];
    return cityActivities[day % cityActivities.length];
  };

  // 根据城市和天数生成下午活动
  const getAfternoonActivity = (city: string, day: number) => {
    const activities: Record<string, string[]> = {
      '北京': [t('planner.activities.beijing.afternoon.1'), t('planner.activities.beijing.afternoon.2')],
      '上海': [t('planner.activities.shanghai.afternoon.1'), t('planner.activities.shanghai.afternoon.2')],
      '西安': [t('planner.activities.xian.afternoon.1'), t('planner.activities.xian.afternoon.2')],
      '成都': [t('planner.activities.chengdu.afternoon.1'), t('planner.activities.chengdu.afternoon.2')],
      '杭州': [t('planner.activities.hangzhou.afternoon.1'), t('planner.activities.hangzhou.afternoon.2')],
      '桂林': [t('planner.activities.guilin.afternoon.1'), t('planner.activities.guilin.afternoon.2')]
    };

    const cityActivities = activities[city] || [t('planner.activities.default.afternoon')];
    return cityActivities[day % cityActivities.length];
  };

  // 根据城市、天数和食物偏好生成晚间活动
  const getEveningActivity = (city: string, day: number, foodTypes: string[]) => {
    const activities: Record<string, string[]> = {
      '北京': [t('planner.activities.beijing.evening.1'), t('planner.activities.beijing.evening.2')],
      '上海': [t('planner.activities.shanghai.evening.1'), t('planner.activities.shanghai.evening.2')],
      '西安': [t('planner.activities.xian.evening.1'), t('planner.activities.xian.evening.2')],
      '成都': [t('planner.activities.chengdu.evening.1'), t('planner.activities.chengdu.evening.2')],
      '杭州': [t('planner.activities.hangzhou.evening.1'), t('planner.activities.hangzhou.evening.2')],
      '桂林': [t('planner.activities.guilin.evening.1'), t('planner.activities.guilin.evening.2')]
    };

    // 根据食物偏好调整晚间活动
    let cityActivities = activities[city] || [t('planner.activities.default.evening')];
    
    // 如果有食物偏好，将其插入第一天的活动中
    if (foodTypes && foodTypes.length > 0 && day === 0) {
      cityActivities[0] = t('planner.activities.default.evening');
    }
    
    return cityActivities[day % cityActivities.length];
  };

  // 随机生成天气预报
  const getRandomWeather = () => {
    const weathers = [
      t('planner.weather.sunny'),
      t('planner.weather.cloudy'),
      t('planner.weather.rainy'),
      t('planner.weather.snowy'),
      t('planner.weather.windy'),
      t('planner.weather.foggy'),
      t('planner.weather.thunderstorm'),
      t('planner.weather.overcast')
    ];
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
    const shareText = `${t('planner.share.title')}\n` +
      `${t('planner.share.itinerary')}: ${planData.selectedDestinations.join(', ')}\n` +
      `${t('planner.share.dates')}: ${planData.departureDate} ${t('planner.share.to')} ${planData.returnDate}\n` +
      `${t('planner.share.totalDays')}: ${travelDays}${t('planner.share.days')}`;
    
    if (navigator.share) {
      navigator.share({
        title: t('planner.share.title'),
        text: shareText,
      }).catch((error) => console.log('分享失败:', error));
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert(t('planner.share.copied'));
      });
    }
  };

  // 下载行程计划
  const downloadPlan = () => {
    // 创建计划文本
    let planText = `${t('planner.download.title')}\n`;
    planText += `${t('planner.download.itinerary')}: ${planData.selectedDestinations.join(', ')}\n`;
    planText += `${t('planner.download.dates')}: ${planData.departureDate} ${t('planner.download.to')} ${planData.returnDate}\n`;
    planText += `${t('planner.download.totalDays')}: ${travelDays}${t('planner.download.days')}\n\n`;

    dailyPlans.forEach(plan => {
      planText += `${t('planner.download.day')}${plan.day} (${plan.date}) - ${plan.city}\n`;
      planText += `${t('planner.download.morning')}: ${plan.morning}\n`;
      planText += `${t('planner.download.afternoon')}: ${plan.afternoon}\n`;
      planText += `${t('planner.download.evening')}: ${plan.evening}\n`;
      planText += `${t('planner.download.accommodation')}: ${t(`planner.accommodation.${plan.accommodation.toLowerCase()}`)}\n`;
      planText += `${t('planner.download.weather')}: ${plan.weatherForecast.condition}，${plan.weatherForecast.low}-${plan.weatherForecast.high}℃\n\n`;
    });

    // 创建下载链接
    const blob = new Blob([planText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = t('planner.download.filename');
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
          <p className="mt-4 text-lg text-gray-600">{t('planner.loading')}</p>
        </div>
      </div>
    );
  }

  // 生成中状态
  if (isGenerating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-china-red mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">{t('planner.generating')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* 行程标题 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('planner.result.title')}</h1>
            <p className="mt-2 text-gray-600">
              {t('planner.result.subtitle')}
            </p>
          </div>

          {/* 行程概览 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('planner.result.overview')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><span className="font-medium">{t('planner.result.destinations')}:</span> {planData.selectedDestinations.join(', ')}</p>
                <p><span className="font-medium">{t('planner.result.dates')}:</span> {planData.departureDate} - {planData.returnDate}</p>
                <p><span className="font-medium">{t('planner.result.duration')}:</span> {travelDays} {t('planner.result.days')}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><span className="font-medium">{t('planner.result.preferences')}:</span></p>
                <ul className="list-disc list-inside">
                  <li>{t('planner.result.travelStyle')}: {planData.travelStyle}</li>
                  <li>{t('planner.result.accommodation')}: {planData.accommodation}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 每日行程 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">{t('planner.result.dailyPlans')}</h2>
            {dailyPlans.map((plan) => (
              <div key={plan.day} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {t('planner.result.day')} {plan.day} - {plan.date} - {plan.city}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <p className="font-medium mb-2">{t('planner.result.morning')}:</p>
                      <p>{plan.morning}</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-medium mb-2">{t('planner.result.afternoon')}:</p>
                      <p>{plan.afternoon}</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">{t('planner.result.evening')}:</p>
                      <p>{plan.evening}</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="font-medium mb-2">{t('planner.result.accommodation')}:</p>
                      <p>{t(`planner.accommodation.${plan.accommodation.toLowerCase()}`)}</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">{t('planner.result.weather')}:</p>
                      <p>
                        {plan.weatherForecast.condition}，
                        {plan.weatherForecast.low}-{plan.weatherForecast.high}℃
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 操作按钮 */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={sharePlan}
              className="bg-china-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('planner.result.share')}
            </button>
            <button
              onClick={downloadPlan}
              className="bg-china-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('planner.result.download')}
            </button>
            <button
              onClick={printPlan}
              className="bg-china-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('planner.result.print')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 