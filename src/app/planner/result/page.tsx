'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/homepage/types';
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
      '深圳': ['参观大梅沙', '游览世界之窗', '探索东部华侨城', '漫步深圳湾', '参观深圳博物馆'],
      // 韩语版城市活动
      '베이징': ['자금성 박물관 방문', '이화원 관광', '스차하이 산책', '798 예술구 탐험', '만리장성 트레킹'],
      '상하이': ['외탄 관광', '상하이 박물관 방문', '티엔쯔팡 탐험', '예원 산책', '디즈니 아침 체험'],
      '시안': ['병마용 방문', '대안탑 관광', '회민가 탐험', '시안 성벽 자전거 타기', '화청궁 관광'],
      '청두': ['판다 기지 방문', '콴자이 샹쯔 관광', '진리 고거리 탐험', '칭청산 산책', '우후사 방문'],
      '항저우': ['서호 보트 투어', '링인사 관광', '시시 습지 탐험', '남송 어가 산책', '레이펑타 방문'],
      '구이린': ['리장 래프팅', '샹비산 관광', '치싱공원 탐험', '량장쓰후 산책', '루디옌 방문'],
      '광저우': ['바이윈산 관광', '천자사 방문', '샤멘 탐험', '베이징로 산책', '중산기념관 방문'],
      '선전': ['다메이샤 방문', '윈도우 오브 더 월드 관광', '동부화교성 탐험', '선전완 산책', '선전 박물관 방문']
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
      '深圳': ['逛华强北', '参观欢乐谷', '游览红树林', '深圳湾公园', '参观海洋世界'],
      // 韩语版城市活动
      '베이징': ['톈탄공원 방문', '왕푸징 거리 쇼핑', '베이하이 공원 관광', '국립 박물관 방문', '난루오구샹 간식 맛보기'],
      '상하이': ['청황묘 관광', '쉬자후이 쇼핑', '중화예술궁 방문', '신톈디 산책', '환구항 미식 체험'],
      '시안': ['대당불야성', '소안탑 관광', '산시 역사박물관', '종고루 광장', '반파 박물관'],
      '청두': ['두보초당 방문', '타이쿠리 쇼핑', '춘시루 관광', '쓰촨 박물관 방문', '진사유적 박물관'],
      '항저우': ['허팡제 산책', '웨묘 관광', '수제 산책', '저장 박물관 방문', '룽징 차원 차 맛보기'],
      '구이린': ['양쒀 서가 방문', '십리화랑 관광', '위룽허 래프팅', '라오자이산 등반', '나비 샘 공원'],
      '광저우': ['광저우 타워 방문', '웨슈 공원 관광', '베이징로 쇼핑', '하이주 습지공원', '창롱 월드'],
      '선전': ['화챙베이 쇼핑', '해피밸리 방문', '맹그로브 관광', '선전완 공원', '해양 월드 방문']
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
      '深圳': ['深圳湾夜景', '欢乐海岸灯光秀', '品尝客家菜', '东门老街夜市', '世界之窗夜景'],
      // 韩语版城市活动
      '베이징': ['베이징 카오야 맛보기', '경극 공연 감상', '스차하이 야간 관광', '버드 네스트 & 워터큐브 야경', '다스란 야시장'],
      '상하이': ['외탄 야경 감상', '난징로 야간 관광', '예원 등회', '본토 요리 맛보기', '루자쭈이 야경'],
      '시안': ['대당 부용원 야경', '양고기 파오모 맛보기', '종루 & 고루 야경', '회민가 음식', '대안탑 분수'],
      '청두': ['쓰촨 훠궈 맛보기', '진리 야시장', '촨극 변검 관람', '구연교 바거리', '타이쿠리 야경'],
      '항저우': ['서호 음악분수', '항저우 요리 맛보기', '남송어가 야시장', '칭허팡 야간 관광', '후빈 야시장'],
      '구이린': ['량장쓰후 야간 투어', '구이린 쌀국수 맛보기', '샹산 야경', '서가 바', '덴차이산 야경'],
      '광저우': ['주강 야간 크루즈', '광저우 딤섬 맛보기', '베이징로 야시장', '광저우 타워 야경', '샤멘 야경'],
      '선전': ['선전완 야경', '해피코스트 라이트 쇼', '커자 요리 맛보기', '동먼 올드스트리트 야시장', '윈도우 오브 더 월드 야경']
    };

    // 根据食物偏好调整晚间活动
    let cityActivities = activities[city] || ['享用晚餐'];
    
    // 如果有食物偏好，将其插入第一天的活动中
    if (foodTypes && foodTypes.length > 0 && day === 0) {
      // 根据语言判断处理方式
      if (city.includes('베이징') || city.includes('상하이') || city.includes('시안')) {
        cityActivities[0] = `${foodTypes[0]} 요리 맛보기`;
      } else {
        cityActivities[0] = `品尝${foodTypes[0]}美食`;
      }
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
          <p className="mt-4 text-lg text-gray-600">正在加载您的旅行计划...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-china-red text-white p-4 shadow-md print:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">旅行计划</h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => router.push('/planner')}
              className="flex items-center text-sm hover:underline"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-1" />
              返回表单
            </button>
            <Link href="/" className="hover:underline transition-colors">
              返回首页
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
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 border-gray-200">您的个性化旅行计划</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 mb-2">旅行类型: <span className="font-medium text-gray-800">{planData.travellerType}</span></p>
                  <p className="text-gray-600 mb-2">旅行人数: <span className="font-medium text-gray-800">{planData.travellers} 人</span></p>
                  <p className="text-gray-600 mb-2">预算范围: <span className="font-medium text-gray-800">{planData.budget}</span></p>
                  <p className="text-gray-600 mb-2">旅行风格: <span className="font-medium text-gray-800">{planData.travelStyle}</span></p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">出发日期: <span className="font-medium text-gray-800">{planData.departureDate}</span></p>
                  <p className="text-gray-600 mb-2">返回日期: <span className="font-medium text-gray-800">{planData.returnDate}</span></p>
                  <p className="text-gray-600 mb-2">旅行天数: <span className="font-medium text-gray-800">{travelDays} 天</span></p>
                  <p className="text-gray-600 mb-2">住宿偏好: <span className="font-medium text-gray-800">{planData.accommodation}</span></p>
                </div>
              </div>
            
              <div className="mb-6">
                <p className="text-gray-600 mb-2">目的地:</p>
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
                  分享
                </button>
                <button 
                  onClick={printPlan}
                  className="flex items-center text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PrinterIcon className="w-4 h-4 mr-2" />
                  打印
                </button>
                <button 
                  onClick={downloadPlan}
                  className="flex items-center text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  下载
                </button>
              </div>
            </div>
          </div>

          {/* 每日行程 */}
          <h3 className="text-xl font-bold mb-4 text-gray-800">详细行程安排</h3>
          
          {isGenerating ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-china-red mx-auto"></div>
              <p className="mt-4 text-gray-600">正在生成您的详细行程...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {dailyPlans.map((plan, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-5 border-l-4 border-china-red relative overflow-hidden">
                  {/* 日期和天数 */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">第 {plan.day} 天</h4>
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
                      <div className="min-w-[80px] font-medium text-gray-700">上午:</div>
                      <div className="text-gray-600">{plan.morning}</div>
                    </div>
                    <div className="flex">
                      <div className="min-w-[80px] font-medium text-gray-700">下午:</div>
                      <div className="text-gray-600">{plan.afternoon}</div>
                    </div>
                    <div className="flex">
                      <div className="min-w-[80px] font-medium text-gray-700">晚上:</div>
                      <div className="text-gray-600">{plan.evening}</div>
                    </div>
                    <div className="flex">
                      <div className="min-w-[80px] font-medium text-gray-700">住宿:</div>
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
            <h3 className="text-lg font-bold text-blue-800 mb-3">旅行小贴士</h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>行程可能会因天气和实际情况有所调整，建议保持灵活性</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>请提前预订热门景点的门票，特别是在旅游旺季</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>准备舒适的步行鞋，中国的许多景点需要大量步行</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>多携带现金，虽然移动支付普及，但游客可能无法轻松使用</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>下载离线地图和翻译应用，以防网络连接不畅</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6 mt-12 print:hidden">
        <div className="container mx-auto text-center">
          <p>© 2023 中国旅游攻略. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
} 