'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/homepage/types';

// 翻译数据
const translations: Record<Language, any> = {
  en: {
    title: 'Travel Planning',
    backToHome: 'Back to Home',
    createPlan: 'Create Your Personalized Travel Plan',
    destinations: 'Choose Destinations',
    travelDates: 'Travel Dates',
    departureDate: 'Departure Date',
    returnDate: 'Return Date',
    preferences: 'Travel Preferences',
    travelStyle: 'Travel Style',
    travelStyles: ['Relaxation', 'Cultural Exploration', 'Food Tour', 'Natural Scenery', 'Deep Experience'],
    budget: 'Budget Range',
    budgetRanges: ['Economy (Under $500)', 'Standard ($500-$1000)', 'Premium ($1000-$1500)', 'Luxury ($1500+)'],
    accommodation: 'Accommodation Preference',
    accommodationTypes: ['Budget Hotels', 'Mid-range Hotels', 'Luxury Hotels', 'Characteristic B&Bs', 'Hostels'],
    dining: 'Dining Preference',
    diningPreferences: ['Local Specialties', 'Fine Dining', 'Home-style Cuisine', 'Street Food', 'Vegetarian/Special Diet'],
    additionalRequests: 'Additional Requests',
    requestsPlaceholder: 'Please tell us any special requirements or expectations...',
    generatePlan: 'Generate Travel Plan',
    footer: '© 2023 China Travel Guide. All rights reserved.',
    cities: ['Beijing', 'Shanghai', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen']
  },
  zh: {
    title: '旅行规划',
    backToHome: '返回首页',
    createPlan: '创建您的个性化旅行计划',
    destinations: '选择目的地',
    travelDates: '旅行时间',
    departureDate: '出发日期',
    returnDate: '返回日期',
    preferences: '旅行偏好',
    travelStyle: '旅行风格',
    travelStyles: ['休闲放松', '文化探索', '美食之旅', '自然风光', '深度体验'],
    budget: '预算范围',
    budgetRanges: ['经济型 (¥3000以下)', '标准型 (¥3000-¥6000)', '高端型 (¥6000-¥10000)', '奢华型 (¥10000以上)'],
    accommodation: '住宿偏好',
    accommodationTypes: ['经济型酒店', '中端酒店', '豪华酒店', '特色民宿', '青年旅舍'],
    dining: '饮食偏好',
    diningPreferences: ['地方特色', '高级餐厅', '家常美食', '街头小吃', '素食/特殊饮食'],
    additionalRequests: '额外需求',
    requestsPlaceholder: '请告诉我们您的任何特殊需求或期望...',
    generatePlan: '生成旅行计划',
    footer: '© 2023 中国旅游攻略. 保留所有权利.',
    cities: ['北京', '上海', '西安', '成都', '杭州', '桂林', '广州', '深圳']
  },
  fr: {
    title: 'Planification de Voyage',
    backToHome: 'Retour à l\'Accueil',
    createPlan: 'Créez Votre Plan de Voyage Personnalisé',
    destinations: 'Choisir les Destinations',
    travelDates: 'Dates de Voyage',
    departureDate: 'Date de Départ',
    returnDate: 'Date de Retour',
    preferences: 'Préférences de Voyage',
    travelStyle: 'Style de Voyage',
    travelStyles: ['Détente', 'Exploration Culturelle', 'Tour Gastronomique', 'Paysages Naturels', 'Expérience Profonde'],
    budget: 'Gamme de Budget',
    budgetRanges: ['Économique (Moins de €450)', 'Standard (€450-€900)', 'Premium (€900-€1350)', 'Luxe (€1350+)'],
    accommodation: 'Préférence d\'Hébergement',
    accommodationTypes: ['Hôtels Économiques', 'Hôtels Milieu de Gamme', 'Hôtels de Luxe', 'Maisons d\'Hôtes Caractéristiques', 'Auberges de Jeunesse'],
    dining: 'Préférence de Restauration',
    diningPreferences: ['Spécialités Locales', 'Haute Cuisine', 'Cuisine Familiale', 'Cuisine de Rue', 'Végétarien/Régime Spécial'],
    additionalRequests: 'Demandes Supplémentaires',
    requestsPlaceholder: 'Veuillez nous indiquer vos exigences ou attentes particulières...',
    generatePlan: 'Générer le Plan de Voyage',
    footer: '© 2023 Guide de Voyage en Chine. Tous droits réservés.',
    cities: ['Pékin', 'Shanghai', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen']
  },
  de: {
    title: 'Reiseplanung',
    backToHome: 'Zurück zur Startseite',
    createPlan: 'Erstellen Sie Ihren persönlichen Reiseplan',
    destinations: 'Reiseziele auswählen',
    travelDates: 'Reisedaten',
    departureDate: 'Abreisedatum',
    returnDate: 'Rückreisedatum',
    preferences: 'Reisevorlieben',
    travelStyle: 'Reisestil',
    travelStyles: ['Entspannung', 'Kulturelle Erkundung', 'Gourmet-Tour', 'Naturlandschaften', 'Tiefgreifende Erfahrung'],
    budget: 'Budgetbereich',
    budgetRanges: ['Wirtschaftlich (Unter €450)', 'Standard (€450-€900)', 'Premium (€900-€1350)', 'Luxus (€1350+)'],
    accommodation: 'Unterkunftspräferenz',
    accommodationTypes: ['Budgethotels', 'Mittelklassehotels', 'Luxushotels', 'Charakteristische Pensionen', 'Hostels'],
    dining: 'Essenspräferenz',
    diningPreferences: ['Lokale Spezialitäten', 'Gehobene Küche', 'Hausmannskost', 'Straßenessen', 'Vegetarisch/Spezielle Ernährung'],
    additionalRequests: 'Zusätzliche Anfragen',
    requestsPlaceholder: 'Bitte teilen Sie uns besondere Anforderungen oder Erwartungen mit...',
    generatePlan: 'Reiseplan generieren',
    footer: '© 2023 China-Reiseführer. Alle Rechte vorbehalten.',
    cities: ['Peking', 'Shanghai', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen']
  },
  ja: {
    title: '旅行プランニング',
    backToHome: 'ホームに戻る',
    createPlan: 'あなたのパーソナライズされた旅行プランを作成',
    destinations: '目的地を選ぶ',
    travelDates: '旅行日程',
    departureDate: '出発日',
    returnDate: '帰国日',
    preferences: '旅行の好み',
    travelStyle: '旅行スタイル',
    travelStyles: ['リラクゼーション', '文化探訪', 'グルメツアー', '自然風景', '深い体験'],
    budget: '予算範囲',
    budgetRanges: ['エコノミー (¥50,000以下)', 'スタンダード (¥50,000-¥100,000)', 'プレミアム (¥100,000-¥150,000)', 'ラグジュアリー (¥150,000+)'],
    accommodation: '宿泊施設の好み',
    accommodationTypes: ['エコノミーホテル', 'ミッドレンジホテル', '高級ホテル', '特色ある民宿', 'ユースホステル'],
    dining: '食事の好み',
    diningPreferences: ['ローカル料理', '高級レストラン', '家庭料理', 'ストリートフード', 'ベジタリアン/特別食'],
    additionalRequests: '追加リクエスト',
    requestsPlaceholder: '特別な要件や期待をお知らせください...',
    generatePlan: '旅行プランを生成',
    footer: '© 2023 中国旅行ガイド. 全著作権所有.',
    cities: ['北京', '上海', '西安', '成都', '杭州', '桂林', '広州', '深セン']
  },
  ko: {
    title: '여행 계획',
    backToHome: '홈으로 돌아가기',
    createPlan: '맞춤형 여행 계획 만들기',
    destinations: '목적지 선택',
    travelDates: '여행 날짜',
    departureDate: '출발 날짜',
    returnDate: '귀국 날짜',
    preferences: '여행 선호도',
    travelStyle: '여행 스타일',
    travelStyles: ['휴식', '문화 탐험', '음식 여행', '자연 경관', '심층 경험'],
    budget: '예산 범위',
    budgetRanges: ['이코노미 (₩500,000 이하)', '스탠다드 (₩500,000-₩1,000,000)', '프리미엄 (₩1,000,000-₩1,500,000)', '럭셔리 (₩1,500,000+)'],
    accommodation: '숙박 선호도',
    accommodationTypes: ['이코노미 호텔', '중급 호텔', '럭셔리 호텔', '특색 있는 민박', '호스텔'],
    dining: '식사 선호도',
    diningPreferences: ['현지 특선', '고급 레스토랑', '가정식', '길거리 음식', '채식/특별 식단'],
    additionalRequests: '추가 요청',
    requestsPlaceholder: '특별한 요구 사항이나 기대를 알려주세요...',
    generatePlan: '여행 계획 생성',
    footer: '© 2023 중국 여행 가이드. 모든 권리 보유.',
    cities: ['베이징', '상하이', '시안', '청두', '항저우', '구이린', '광저우', '선전']
  },
  es: {
    title: 'Planificación de Viajes',
    backToHome: 'Volver al Inicio',
    createPlan: 'Cree su Plan de Viaje Personalizado',
    destinations: 'Elegir Destinos',
    travelDates: 'Fechas de Viaje',
    departureDate: 'Fecha de Salida',
    returnDate: 'Fecha de Regreso',
    preferences: 'Preferencias de Viaje',
    travelStyle: 'Estilo de Viaje',
    travelStyles: ['Relajación', 'Exploración Cultural', 'Tour Gastronómico', 'Paisajes Naturales', 'Experiencia Profunda'],
    budget: 'Rango de Presupuesto',
    budgetRanges: ['Económico (Menos de €450)', 'Estándar (€450-€900)', 'Premium (€900-€1350)', 'Lujo (€1350+)'],
    accommodation: 'Preferencia de Alojamiento',
    accommodationTypes: ['Hoteles Económicos', 'Hoteles de Gama Media', 'Hoteles de Lujo', 'Casas Rurales Características', 'Albergues'],
    dining: 'Preferencia de Comida',
    diningPreferences: ['Especialidades Locales', 'Restaurantes de Alta Cocina', 'Cocina Casera', 'Comida Callejera', 'Vegetariano/Dieta Especial'],
    additionalRequests: 'Solicitudes Adicionales',
    requestsPlaceholder: 'Por favor, díganos cualquier requisito o expectativa especial...',
    generatePlan: 'Generar Plan de Viaje',
    footer: '© 2023 Guía de Viajes de China. Todos los derechos reservados.',
    cities: ['Pekín', 'Shanghái', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen']
  },
  ru: {
    title: 'Планирование Путешествия',
    backToHome: 'Вернуться на Главную',
    createPlan: 'Создайте Свой Персонализированный План Путешествия',
    destinations: 'Выберите Направления',
    travelDates: 'Даты Путешествия',
    departureDate: 'Дата Отправления',
    returnDate: 'Дата Возвращения',
    preferences: 'Предпочтения в Путешествии',
    travelStyle: 'Стиль Путешествия',
    travelStyles: ['Релаксация', 'Культурное Исследование', 'Гастрономический Тур', 'Природные Пейзажи', 'Глубокий Опыт'],
    budget: 'Диапазон Бюджета',
    budgetRanges: ['Эконом (До ₽30,000)', 'Стандарт (₽30,000-₽60,000)', 'Премиум (₽60,000-₽90,000)', 'Люкс (₽90,000+)'],
    accommodation: 'Предпочтения по Размещению',
    accommodationTypes: ['Бюджетные Отели', 'Отели Среднего Класса', 'Роскошные Отели', 'Характерные Гостевые Дома', 'Хостелы'],
    dining: 'Предпочтения в Еде',
    diningPreferences: ['Местные Деликатесы', 'Рестораны Высокой Кухни', 'Домашняя Кухня', 'Уличная Еда', 'Вегетарианская/Специальная Диета'],
    additionalRequests: 'Дополнительные Запросы',
    requestsPlaceholder: 'Пожалуйста, расскажите нам о любых особых требованиях или ожиданиях...',
    generatePlan: 'Сгенерировать План Путешествия',
    footer: '© 2023 Путеводитель по Китаю. Все права защищены.',
    cities: ['Пекин', 'Шанхай', 'Сиань', 'Чэнду', 'Ханчжоу', 'Гуйлинь', 'Гуанчжоу', 'Шэньчжэнь']
  }
};

// 默认使用英文，如果找不到对应的语言
const getTranslation = (language: Language, key: string): any => {
  return translations[language]?.[key] || translations.en[key];
};

export default function PlannerPage() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const [t, setT] = useState(translations.en);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

  // 语言变化时更新翻译
  useEffect(() => {
    setT(translations[currentLanguage] || translations.en);
  }, [currentLanguage]);

  // 处理目的地选择
  const toggleDestination = (city: string) => {
    if (selectedDestinations.includes(city)) {
      setSelectedDestinations(selectedDestinations.filter(d => d !== city));
    } else {
      setSelectedDestinations([...selectedDestinations, city]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-china-red text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t.title}</h1>
          <Link href="/" className="hover:underline transition-colors">
            {t.backToHome}
          </Link>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t.createPlan}</h2>
          
          {/* 目的地选择 */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="bg-china-red text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
              {t.destinations}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.cities.map((city: string) => (
                <div 
                  key={city} 
                  className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all duration-200 ${
                    selectedDestinations.includes(city)
                      ? 'border-china-red bg-red-50 shadow-md'
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                  }`}
                  onClick={() => toggleDestination(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          </section>
          
          {/* 旅行时间 */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="bg-china-red text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
              {t.travelDates}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">{t.departureDate}</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">{t.returnDate}</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
                />
              </div>
            </div>
          </section>
          
          {/* 旅行偏好 */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="bg-china-red text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
              {t.preferences}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">{t.travelStyle}</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors">
                  {t.travelStyles.map((style: string, index: number) => (
                    <option key={index}>{style}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">{t.budget}</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors">
                  {t.budgetRanges.map((range: string, index: number) => (
                    <option key={index}>{range}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">{t.accommodation}</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors">
                  {t.accommodationTypes.map((type: string, index: number) => (
                    <option key={index}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">{t.dining}</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors">
                  {t.diningPreferences.map((pref: string, index: number) => (
                    <option key={index}>{pref}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          
          {/* 额外需求 */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
              <span className="bg-china-red text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
              {t.additionalRequests}
            </h3>
            <textarea 
              className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              placeholder={t.requestsPlaceholder}
            ></textarea>
          </section>
          
          {/* 提交按钮 */}
          <div className="flex justify-center">
            <button className="group relative inline-flex items-center bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                     hover:bg-red-700 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]
                     transition-all duration-300 ease-out
                     focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer">
              <span className="relative z-10 flex items-center justify-center">
                {t.generatePlan}
                <svg 
                  className="ml-0 w-0 h-5 group-hover:w-5 group-hover:ml-2 transition-all duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-lg"></span>
            </button>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
} 