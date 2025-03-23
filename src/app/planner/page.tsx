'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/homepage/types';
import { 
  UserGroupIcon, 
  MapIcon, 
  HeartIcon, 
  FireIcon, 
  PencilSquareIcon,
  CalendarDaysIcon,
  CurrencyYenIcon,
  BuildingOfficeIcon,
  GlobeAsiaAustraliaIcon,
  FaceSmileIcon,
  ArrowPathIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

// 翻译数据
const translations: Record<Language, any> = {
  en: {
    title: 'Travel Planning',
    backToHome: 'Back to Home',
    createPlan: 'Create Your Personalized Travel Plan',
    step1Title: 'Basic Travel Information',
    step2Title: 'Destinations',
    step3Title: 'Travel Preferences',
    step4Title: 'Dining Preferences',
    step5Title: 'Special Requirements',
    travellerType: 'Traveller Type',
    travellerTypes: ['Solo', 'Couple', 'Family', 'Friends', 'Business', 'Other'],
    travellers: 'Number of Travellers',
    travelDates: 'Travel Dates',
    departureDate: 'Departure Date',
    returnDate: 'Return Date',
    budget: 'Budget Range',
    budgetRanges: ['Economy (Under $500)', 'Standard ($500-$1000)', 'Premium ($1000-$1500)', 'Luxury ($1500+)'],
    destinations: 'Choose Destinations',
    suggestedRoutes: 'Suggested Routes',
    routeTypes: ['Classic Beijing-Shanghai-Guangzhou', 'Historical & Cultural Tour', 'Nature & Scenery', 'Modern Chinese Cities', 'Food Journey'],
    preferences: 'Travel Preferences',
    travelStyle: 'Travel Style',
    travelStyles: ['Relaxation', 'Cultural Exploration', 'Food Tour', 'Natural Scenery', 'Deep Experience'],
    travelPace: 'Travel Pace',
    accommodation: 'Accommodation Preference',
    accommodationTypes: ['Budget Hotels', 'Mid-range Hotels', 'Luxury Hotels', 'Characteristic B&Bs', 'Hostels'],
    diningTitle: 'Dining Preferences',
    tastePreference: 'Taste Preference',
    foodTypes: 'Food Types',
    foodTypePref: ['Seafood', 'Meat Dishes', 'Vegetarian', 'Noodles', 'Rice-based'],
    diningEnvironment: 'Dining Environment',
    diningEnvOptions: ['Local Popular Restaurants', 'Fine Dining', 'Street Food', 'Theme Restaurants', 'Quick Meals'],
    spiciness: 'Spiciness Preference',
    dietaryRestrictions: 'Dietary Restrictions',
    additionalRequests: 'Additional Requests',
    requestsPlaceholder: 'Please tell us any special requirements or expectations...',
    nextStep: 'Next Step',
    prevStep: 'Previous',
    generatePlan: 'Generate Travel Plan',
    footer: '© 2023 China Travel Guide. All rights reserved.',
    cities: ['Beijing', 'Shanghai', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen'],
    slow: 'Slow & Relaxed',
    balanced: 'Balanced',
    fast: 'Fast-paced',
    light: 'Very Mild',
    medium: 'Medium',
    spicy: 'Very Spicy'
  },
  zh: {
    title: '旅行规划',
    backToHome: '返回首页',
    createPlan: '创建您的个性化旅行计划',
    step1Title: '基本旅行信息',
    step2Title: '目的地选择',
    step3Title: '旅行偏好',
    step4Title: '餐饮偏好',
    step5Title: '特殊需求',
    travellerType: '旅行者类型',
    travellerTypes: ['单独旅行', '情侣出行', '家庭旅行', '朋友团体', '商务旅行', '其他'],
    travellers: '旅行人数',
    travelDates: '旅行时间',
    departureDate: '出发日期',
    returnDate: '返回日期',
    budget: '预算范围',
    budgetRanges: ['经济型 (¥3000以下)', '标准型 (¥3000-¥6000)', '高端型 (¥6000-¥10000)', '奢华型 (¥10000以上)'],
    destinations: '选择目的地',
    suggestedRoutes: '推荐路线',
    routeTypes: ['经典北上广线路', '历史文化之旅', '自然风光游', '现代都市体验', '美食之旅'],
    preferences: '旅行偏好',
    travelStyle: '旅行风格',
    travelStyles: ['休闲放松', '文化探索', '美食之旅', '自然风光', '深度体验'],
    travelPace: '旅行节奏',
    accommodation: '住宿偏好',
    accommodationTypes: ['经济型酒店', '中端酒店', '豪华酒店', '特色民宿', '青年旅舍'],
    diningTitle: '餐饮偏好',
    tastePreference: '口味偏好',
    foodTypes: '食物类型',
    foodTypePref: ['海鲜', '肉类', '素食', '面食', '米饭类'],
    diningEnvironment: '用餐环境',
    diningEnvOptions: ['当地人气餐厅', '高档餐厅', '街边小吃', '特色主题餐厅', '快餐'],
    spiciness: '辣度偏好',
    dietaryRestrictions: '饮食限制',
    additionalRequests: '额外需求',
    requestsPlaceholder: '请告诉我们您的任何特殊需求或期望...',
    nextStep: '下一步',
    prevStep: '上一步',
    generatePlan: '生成旅行计划',
    footer: '© 2023 中国旅游攻略. 保留所有权利.',
    cities: ['北京', '上海', '西安', '成都', '杭州', '桂林', '广州', '深圳'],
    slow: '悠闲放松',
    balanced: '平衡',
    fast: '紧凑充实',
    light: '很轻微',
    medium: '适中',
    spicy: '非常辣'
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
  // 如果当前语言不存在此键，则使用英文版本
  if (!translations[language] || !translations[language][key]) {
    return translations.en[key];
  }
  return translations[language][key];
};

type FormData = {
  travellerType: string;
  travellers: number;
  departureDate: string;
  returnDate: string;
  budget: string;
  selectedDestinations: string[];
  selectedRoute: string;
  travelStyle: string;
  travelPace: number;
  accommodation: string;
  tastePreference: number;
  foodTypes: string[];
  diningEnvironment: string;
  dietaryRestrictions: string;
  additionalRequests: string;
};

// localStorage Key
const FORM_DATA_KEY = 'travel_planner_form_data';
const CURRENT_STEP_KEY = 'travel_planner_current_step';

// 目的地相关的景点和美食推荐数据
const destinationRecommendations: Record<string, { attractions: string[], foods: string[] }> = {
  '北京': {
    attractions: ['故宫', '长城', '颐和园', '天坛', '798艺术区'],
    foods: ['北京烤鸭', '炸酱面', '豆汁', '驴打滚', '糖葫芦']
  },
  '上海': {
    attractions: ['外滩', '东方明珠', '豫园', '迪士尼乐园', '田子坊'],
    foods: ['小笼包', '生煎', '蟹粉狮子头', '葱油饼', '八宝饭']
  },
  '西安': {
    attractions: ['兵马俑', '古城墙', '大雁塔', '华山', '回民街'],
    foods: ['肉夹馍', '凉皮', '羊肉泡馍', '贾三灌汤包', 'biangbiang面']
  },
  '成都': {
    attractions: ['宽窄巷子', '锦里', '大熊猫基地', '青城山', '都江堰'],
    foods: ['火锅', '担担面', '夫妻肺片', '麻婆豆腐', '钟水饺']
  },
  '杭州': {
    attractions: ['西湖', '灵隐寺', '西溪湿地', '千岛湖', '宋城'],
    foods: ['西湖醋鱼', '东坡肉', '龙井虾仁', '叫花鸡', '杭州小笼']
  },
  '桂林': {
    attractions: ['漓江', '阳朔', '象鼻山', '龙脊梯田', '芦笛岩'],
    foods: ['桂林米粉', '啤酒鱼', '荔浦扣肉', '田螺酿', '老友粉']
  },
  '广州': {
    attractions: ['沙面', '陈家祠', '白云山', '长隆', '广州塔'],
    foods: ['早茶点心', '广州文昌鸡', '莲藕汤', '白切鸡', '陈皮牛肉']
  },
  '深圳': {
    attractions: ['世界之窗', '东部华侨城', '大梅沙', '深圳湾', '欢乐谷'],
    foods: ['客家盐焗鸡', '潮汕牛肉火锅', '姜撞奶', '凤凰蛋挞', '沙井蚝']
  },
  'Beijing': {
    attractions: ['Forbidden City', 'Great Wall', 'Summer Palace', 'Temple of Heaven', '798 Art District'],
    foods: ['Peking Duck', 'Zhajiang Noodles', 'Douzhi', 'Ludagun', 'Candied Haws']
  },
  'Shanghai': {
    attractions: ['The Bund', 'Oriental Pearl Tower', 'Yu Garden', 'Disney Resort', 'Tianzifang'],
    foods: ['Soup Dumplings', 'Pan-fried Buns', 'Crab Shell Cake', 'Scallion Pancake', 'Eight Treasure Rice']
  },
  'Xi\'an': {
    attractions: ['Terracotta Army', 'City Wall', 'Giant Wild Goose Pagoda', 'Mount Hua', 'Muslim Quarter'],
    foods: ['Roujiamo', 'Liangpi', 'Yangrou Paomo', 'Soup Dumplings', 'Biangbiang Noodles']
  },
  'Chengdu': {
    attractions: ['Kuanzhai Alley', 'Jinli Street', 'Panda Base', 'Qingcheng Mountain', 'Dujiangyan'],
    foods: ['Hotpot', 'Dan Dan Noodles', 'Fuqi Feipian', 'Mapo Tofu', 'Zhong Dumplings']
  }
};

// 旅行风格与活动推荐
const travelStyleRecommendations: Record<string, string[]> = {
  '休闲放松': ['泡温泉', '茶馆休闲', '公园漫步', '湖边野餐', '豪华SPA'],
  '文化探索': ['历史博物馆', '古迹参观', '传统工艺体验', '戏剧表演', '文化讲座'],
  '美食之旅': ['烹饪课程', '美食街探索', '农贸市场', '酒庄品鉴', '特色餐厅'],
  '自然风光': ['徒步旅行', '摄影探险', '生态保护区', '山岳探索', '日出日落观赏'],
  '深度体验': ['民宿住宿', '当地家庭拜访', '农村体验', '传统节日', '手工艺课程'],
  'Relaxation': ['Hot Springs', 'Tea House', 'Park Walks', 'Lakeside Picnic', 'Luxury Spa'],
  'Cultural Exploration': ['Historical Museums', 'Ancient Sites', 'Traditional Crafts', 'Theater Shows', 'Cultural Lectures'],
  'Food Tour': ['Cooking Classes', 'Food Street Exploration', 'Farmers Markets', 'Wine Tasting', 'Special Restaurants'],
  'Natural Scenery': ['Hiking', 'Photography Adventures', 'Eco Reserves', 'Mountain Exploration', 'Sunrise/Sunset Viewing'],
  'Deep Experience': ['Homestay', 'Local Family Visits', 'Rural Experiences', 'Traditional Festivals', 'Handicraft Workshops']
};

export default function PlannerPage() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const [t, setT] = useState(translations.en);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 表单数据状态
  const [formData, setFormData] = useState<FormData>({
    travellerType: '',
    travellers: 2,
    departureDate: '',
    returnDate: '',
    budget: '',
    selectedDestinations: [],
    selectedRoute: '',
    travelStyle: '',
    travelPace: 50,
    accommodation: '',
    tastePreference: 50,
    foodTypes: [],
    diningEnvironment: '',
    dietaryRestrictions: '',
    additionalRequests: ''
  });

  const [recommendations, setRecommendations] = useState<{
    attractions: string[];
    foods: string[];
    activities: string[];
  }>({
    attractions: [],
    foods: [],
    activities: []
  });

  // 初始化表单默认值
  useEffect(() => {
    const initializeForm = () => {
      if (typeof window === 'undefined') return;
      
      // 设置语言
      setT(translations[currentLanguage] || translations.en);
      
      // 使用当前语言初始化表单，确保安全访问键值
      const defaultFormData = {
        travellerType: getTranslation(currentLanguage, 'travellerTypes')?.[0] || '',
        travellers: 2,
        departureDate: '',
        returnDate: '',
        budget: getTranslation(currentLanguage, 'budgetRanges')?.[0] || '',
        selectedDestinations: [],
        selectedRoute: getTranslation(currentLanguage, 'routeTypes')?.[0] || '',
        travelStyle: getTranslation(currentLanguage, 'travelStyles')?.[0] || '',
        travelPace: 50,
        accommodation: getTranslation(currentLanguage, 'accommodationTypes')?.[0] || '',
        tastePreference: 50,
        foodTypes: [],
        diningEnvironment: getTranslation(currentLanguage, 'diningEnvOptions')?.[0] || '',
        dietaryRestrictions: '',
        additionalRequests: ''
      };
      
      // 尝试从localStorage恢复数据
      try {
        const savedFormData = localStorage.getItem(FORM_DATA_KEY);
        const savedStep = localStorage.getItem(CURRENT_STEP_KEY);
        
        if (savedFormData) {
          const parsedData = JSON.parse(savedFormData) as FormData;
          setFormData(parsedData);
        } else {
          setFormData(defaultFormData);
        }
        
        if (savedStep) {
          const step = parseInt(savedStep);
          if (step >= 1 && step <= totalSteps) {
            setCurrentStep(step);
          }
        }
      } catch (error) {
        console.error('加载保存的表单数据时出错:', error);
        setFormData(defaultFormData);
      }
    };

    initializeForm();
  }, [currentLanguage]);

  // 保存表单数据到localStorage
  useEffect(() => {
    // 仅在客户端且数据不为空时保存
    if (typeof window !== 'undefined' && formData.travellerType) {
      try {
        localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
      } catch (error) {
        console.error('保存表单数据时出错:', error);
      }
    }
  }, [formData]);

  // 保存当前步骤到localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(CURRENT_STEP_KEY, currentStep.toString());
      } catch (error) {
        console.error('保存当前步骤时出错:', error);
      }
    }
  }, [currentStep]);

  // 生成推荐
  useEffect(() => {
    const generateRecommendations = () => {
      // 如果没有选择目的地或旅行风格，则不生成推荐
      if (!formData.selectedDestinations.length || !formData.travelStyle) return;

      // 推荐项目数组
      let attractions: string[] = [];
      let foods: string[] = [];
      let activities: string[] = [];

      // 根据选择的目的地推荐景点和美食
      formData.selectedDestinations.forEach(city => {
        const cityKey = city as keyof typeof destinationRecommendations;
        if (destinationRecommendations[cityKey]) {
          attractions = [...attractions, ...destinationRecommendations[cityKey].attractions];
          foods = [...foods, ...destinationRecommendations[cityKey].foods];
        }
      });

      // 根据旅行风格推荐活动
      const styleKey = formData.travelStyle as keyof typeof travelStyleRecommendations;
      if (travelStyleRecommendations[styleKey]) {
        activities = travelStyleRecommendations[styleKey];
      }

      // 去除重复项
      const uniqueAttractions = Array.from(new Set(attractions));
      const uniqueFoods = Array.from(new Set(foods));

      // 更新推荐
      setRecommendations({
        attractions: uniqueAttractions,
        foods: uniqueFoods,
        activities
      });
    };

    generateRecommendations();
  }, [formData.selectedDestinations, formData.travelStyle]);

  // 处理目的地选择
  const toggleDestination = (city: string) => {
    setFormData(prev => {
      const destinations = [...prev.selectedDestinations];
      if (destinations.includes(city)) {
        return {
          ...prev,
          selectedDestinations: destinations.filter(d => d !== city)
        };
      } else {
        return {
          ...prev,
          selectedDestinations: [...destinations, city]
        };
      }
    });
  };

  // 处理食物类型选择
  const toggleFoodType = (type: string) => {
    setFormData(prev => {
      const types = [...prev.foodTypes];
      if (types.includes(type)) {
        return {
          ...prev,
          foodTypes: types.filter(t => t !== type)
        };
      } else {
        return {
          ...prev,
          foodTypes: [...types, type]
        };
      }
    });
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 处理滑块变化
  const handleSliderChange = (name: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 导航到下一步前验证当前步骤数据
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    switch (step) {
      case 1:
        if (!formData.departureDate) {
          newErrors.departureDate = '请选择出发日期';
        }
        if (!formData.returnDate) {
          newErrors.returnDate = '请选择返回日期';
        }
        if (formData.departureDate && formData.returnDate && new Date(formData.departureDate) > new Date(formData.returnDate)) {
          newErrors.returnDate = '返回日期不能早于出发日期';
        }
        break;
      case 2:
        if (formData.selectedDestinations.length === 0) {
          newErrors.selectedDestinations = '请至少选择一个目的地';
        }
        break;
      case 4:
        if (formData.foodTypes.length === 0) {
          newErrors.foodTypes = '请至少选择一种食物类型';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 导航到下一步
  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  // 导航到上一步
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // 添加清除数据功能
  const clearFormData = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(FORM_DATA_KEY);
        localStorage.removeItem(CURRENT_STEP_KEY);
        
        // 重置表单为默认值
        setFormData({
          travellerType: t.travellerTypes[0],
          travellers: 2,
          departureDate: '',
          returnDate: '',
          budget: t.budgetRanges[0],
          selectedDestinations: [],
          selectedRoute: t.routeTypes[0],
          travelStyle: t.travelStyles[0],
          travelPace: 50,
          accommodation: t.accommodationTypes[0],
          tastePreference: 50,
          foodTypes: [],
          diningEnvironment: t.diningEnvOptions[0],
          dietaryRestrictions: '',
          additionalRequests: ''
        });
        setCurrentStep(1);
        setErrors({});
      } catch (error) {
        console.error('清除表单数据时出错:', error);
      }
    }
  };

  // 提交表单
  const submitForm = async () => {
    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 这里在实际项目中应该添加向后端API提交数据的逻辑
      console.log('Form submitted:', formData);
      
      // 模拟API延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 显示成功消息
      alert('您的旅行计划已成功提交！即将生成您的个性化行程。');
      
      // 这里不清除表单数据，因为结果页面需要
      // clearFormData();
      
      // 重定向到结果页面
      router.push('/planner/result');
    } catch (error) {
      console.error('提交表单时出错:', error);
      alert('提交失败，请稍后再试');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 渲染步骤标题
  const renderStepTitle = (step: number) => {
    switch (step) {
      case 1: return t.step1Title;
      case 2: return t.step2Title;
      case 3: return t.step3Title;
      case 4: return t.step4Title;
      case 5: return t.step5Title;
      default: return '';
    }
  };

  // 渲染步骤图标
  const renderStepIcon = (step: number) => {
    switch (step) {
      case 1: return <UserGroupIcon className="w-5 h-5" />;
      case 2: return <GlobeAsiaAustraliaIcon className="w-5 h-5" />;
      case 3: return <HeartIcon className="w-5 h-5" />;
      case 4: return <FireIcon className="w-5 h-5" />;
      case 5: return <PencilSquareIcon className="w-5 h-5" />;
      default: return null;
    }
  };

  // 渲染推荐内容
  const renderRecommendations = () => {
    if (!recommendations.attractions.length && !recommendations.foods.length && !recommendations.activities.length) {
      return null;
    }

    // 获取当前语言的推荐文本
    const recommendationTitle = currentLanguage === 'zh' ? '根据您的选择，我们为您推荐' :
      currentLanguage === 'en' ? 'Based on your choices, we recommend' : 
      'Based on your choices, we recommend';

    const attractionsTitle = currentLanguage === 'zh' ? '推荐景点' :
      currentLanguage === 'en' ? 'Recommended Attractions' :
      'Recommended Attractions';

    const foodsTitle = currentLanguage === 'zh' ? '推荐美食' :
      currentLanguage === 'en' ? 'Recommended Food' :
      'Recommended Food';

    const activitiesTitle = currentLanguage === 'zh' ? '推荐活动' :
      currentLanguage === 'en' ? 'Recommended Activities' :
      'Recommended Activities';

    return (
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          {recommendationTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.attractions.length > 0 && (
            <div>
              <h4 className="font-medium text-amber-700 mb-2">{attractionsTitle}</h4>
              <ul className="space-y-1">
                {recommendations.attractions.slice(0, 5).map((attraction, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.foods.length > 0 && (
            <div>
              <h4 className="font-medium text-amber-700 mb-2">{foodsTitle}</h4>
              <ul className="space-y-1">
                {recommendations.foods.slice(0, 5).map((food, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {food}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.activities.length > 0 && (
            <div>
              <h4 className="font-medium text-amber-700 mb-2">{activitiesTitle}</h4>
              <ul className="space-y-1">
                {recommendations.activities.slice(0, 5).map((activity, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 渲染当前步骤内容
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            {/* 旅行者类型 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.travellerType}
              </label>
              <select 
                name="travellerType"
                value={formData.travellerType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {t.travellerTypes.map((type: string, index: number) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">选择最符合您此次旅行的类型</p>
            </div>

            {/* 旅行人数 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.travellers}
              </label>
              <div className="flex items-center">
                <button 
                  type="button"
                  onClick={() => {
                    if (formData.travellers > 1) {
                      handleSliderChange('travellers', formData.travellers - 1);
                    }
                  }}
                  className="p-2 rounded-l-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  <MinusCircleIcon className="w-5 h-5" />
                </button>
                <input 
                  type="number" 
                  name="travellers"
                  value={formData.travellers}
                  onChange={handleInputChange}
                  min="1" 
                  max="20"
                  className="w-full p-3 border-y border-gray-300 focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors text-center"
                />
                <button 
                  type="button"
                  onClick={() => handleSliderChange('travellers', formData.travellers + 1)}
                  className="p-2 rounded-r-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  <PlusCircleIcon className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-500">请输入旅行团队的人数 (1-20人)</p>
            </div>

            {/* 旅行时间 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium flex items-center">
                  <CalendarDaysIcon className="w-5 h-5 mr-2 text-china-red" />
                  {t.departureDate}
                </label>
                <input 
                  type="date" 
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors 
                    ${errors.departureDate ? 'border-red-500' : 'border-gray-300'}`}
                />
                {renderError('departureDate')}
                <p className="mt-1 text-sm text-gray-500">计划出发的日期</p>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium flex items-center">
                  <CalendarDaysIcon className="w-5 h-5 mr-2 text-china-red" />
                  {t.returnDate}
                </label>
                <input 
                  type="date" 
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors
                    ${errors.returnDate ? 'border-red-500' : 'border-gray-300'}`}
                />
                {renderError('returnDate')}
                <p className="mt-1 text-sm text-gray-500">计划返回的日期</p>
              </div>
            </div>

            {/* 预算 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <CurrencyYenIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.budget}
              </label>
              <select 
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {t.budgetRanges.map((range: string, index: number) => (
                  <option key={index} value={range}>{range}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">选择符合您期望的预算范围</p>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            {/* 推荐路线 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <MapIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.suggestedRoutes}
              </label>
              <select 
                name="selectedRoute"
                value={formData.selectedRoute}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {t.routeTypes.map((route: string, index: number) => (
                  <option key={index} value={route}>{route}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">选择一个推荐路线或自定义您的行程</p>
            </div>

            {/* 目的地选择 */}
            <div>
              <label className="block text-gray-700 mb-4 font-medium flex items-center">
                <GlobeAsiaAustraliaIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.destinations}
                <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  <QuestionMarkCircleIcon className="w-3 h-3 mr-1" />
                  至少选择一个
                </span>
              </label>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${errors.selectedDestinations ? 'border border-red-500 p-2 rounded-lg' : ''}`}>
                {t.cities.map((city: string) => (
                  <div 
                    key={city} 
                    className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all duration-200 ${
                      formData.selectedDestinations.includes(city)
                        ? 'border-china-red bg-red-50 shadow-md'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                    onClick={() => toggleDestination(city)}
                  >
                    <div className="flex items-center justify-center">
                      {formData.selectedDestinations.includes(city) && (
                        <svg className="w-5 h-5 mr-1 text-china-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {city}
                    </div>
                  </div>
                ))}
              </div>
              {renderError('selectedDestinations')}
              <p className="mt-2 text-sm text-gray-500">点击选择您想要游览的城市</p>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            {/* 旅行风格 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <HeartIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.travelStyle}
              </label>
              <select 
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {t.travelStyles.map((style: string, index: number) => (
                  <option key={index} value={style}>{style}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">选择与您的旅行喜好最匹配的风格</p>
            </div>

            {/* 旅行节奏 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <ArrowPathIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.travelPace}
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 min-w-[80px]">{t.slow}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={formData.travelPace}
                  onChange={(e) => handleSliderChange('travelPace', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-china-red"
                />
                <span className="text-sm text-gray-500 min-w-[80px]">{t.fast}</span>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-xs text-gray-500">每天游览1-2个景点</p>
                <p className="text-xs text-gray-500">每天游览3-5个景点</p>
              </div>
            </div>

            {/* 住宿偏好 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <BuildingOfficeIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.accommodation}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-3">
                {t.accommodationTypes.map((type: string, index: number) => (
                  <div 
                    key={index} 
                    className={`border-2 rounded-lg p-3 text-center cursor-pointer transition-all duration-200 ${
                      formData.accommodation === type
                        ? 'border-china-red bg-red-50 shadow-md'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, accommodation: type }))}
                  >
                    {type}
                  </div>
                ))}
              </div>
              <p className="mt-1 text-sm text-gray-500">选择您在旅行中偏好的住宿类型</p>
            </div>

            {/* 显示基于当前选择的推荐 */}
            {renderRecommendations()}
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            {/* 辣度偏好 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.spiciness}
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 min-w-[80px]">{t.light}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={formData.tastePreference}
                  onChange={(e) => handleSliderChange('tastePreference', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-china-red"
                />
                <span className="text-sm text-gray-500 min-w-[80px]">{t.spicy}</span>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-xs text-gray-500">不吃辣或微辣</p>
                <p className="text-xs text-gray-500">川菜、湘菜等重辣美食</p>
              </div>
            </div>

            {/* 食物类型 */}
            <div>
              <label className="block text-gray-700 mb-4 font-medium flex items-center">
                <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.foodTypes}
                <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  <QuestionMarkCircleIcon className="w-3 h-3 mr-1" />
                  可多选
                </span>
              </label>
              <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 ${errors.foodTypes ? 'border border-red-500 p-2 rounded-lg' : ''}`}>
                {t.foodTypePref.map((type: string, index: number) => (
                  <div 
                    key={index} 
                    className={`border-2 rounded-lg p-3 text-center cursor-pointer transition-all duration-200 ${
                      formData.foodTypes.includes(type)
                        ? 'border-china-red bg-red-50 shadow-md'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                    }`}
                    onClick={() => toggleFoodType(type)}
                  >
                    <div className="flex items-center justify-center">
                      {formData.foodTypes.includes(type) && (
                        <svg className="w-5 h-5 mr-1 text-china-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {type}
                    </div>
                  </div>
                ))}
              </div>
              {renderError('foodTypes')}
              <p className="mt-2 text-sm text-gray-500">选择您喜欢的食物类型</p>
            </div>

            {/* 用餐环境 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.diningEnvironment}
              </label>
              <select 
                name="diningEnvironment"
                value={formData.diningEnvironment}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {t.diningEnvOptions.map((env: string, index: number) => (
                  <option key={index} value={env}>{env}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">选择您偏好的用餐环境</p>
            </div>

            {/* 饮食限制 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.dietaryRestrictions}
              </label>
              <input 
                type="text" 
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                placeholder="如食物过敏、宗教禁忌等"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              />
              <p className="mt-1 text-sm text-gray-500">请输入任何饮食方面的限制或需求</p>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            {/* 额外需求 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <PencilSquareIcon className="w-5 h-5 mr-2 text-china-red" />
                {t.additionalRequests}
              </label>
              <textarea 
                name="additionalRequests"
                value={formData.additionalRequests}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
                placeholder={t.requestsPlaceholder}
              ></textarea>
              <p className="mt-1 text-sm text-gray-500">对行程有任何特殊需求请在此说明</p>
            </div>

            {/* 显示表单摘要 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
                <FaceSmileIcon className="w-5 h-5 mr-2 text-china-red" />
                旅行计划摘要
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium">旅行类型:</span> {formData.travellerType}</div>
                <div><span className="font-medium">人数:</span> {formData.travellers}</div>
                <div><span className="font-medium">出发日期:</span> {formData.departureDate}</div>
                <div><span className="font-medium">返回日期:</span> {formData.returnDate}</div>
                <div><span className="font-medium">预算:</span> {formData.budget}</div>
                <div><span className="font-medium">目的地:</span> {formData.selectedDestinations.length > 0 ? formData.selectedDestinations.join(', ') : '未选择'}</div>
                <div className="col-span-2"><span className="font-medium">路线类型:</span> {formData.selectedRoute}</div>
                <div><span className="font-medium">旅行风格:</span> {formData.travelStyle}</div>
                <div><span className="font-medium">住宿偏好:</span> {formData.accommodation}</div>
                <div className="col-span-2"><span className="font-medium">食物类型:</span> {formData.foodTypes.length > 0 ? formData.foodTypes.join(', ') : '未选择'}</div>
                <div className="col-span-2"><span className="font-medium">用餐环境:</span> {formData.diningEnvironment}</div>
                <div className="col-span-2"><span className="font-medium">饮食限制:</span> {formData.dietaryRestrictions || '无'}</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  // 在表单字段中显示错误信息
  const renderError = (field: string) => {
    if (errors[field]) {
      return <p className="mt-1 text-sm text-red-600">{errors[field]}</p>;
    }
    return null;
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t.createPlan}</h2>
          
          {/* 步骤指示器 */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${
                    currentStep > index + 1 
                      ? 'bg-china-red border-china-red text-white' 
                      : currentStep === index + 1
                        ? 'border-china-red text-china-red'
                        : 'border-gray-300 text-gray-300'
                  }`}>
                    {renderStepIcon(index + 1)}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${
                    currentStep >= index + 1 ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {renderStepTitle(index + 1)}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 h-1 bg-gray-200 w-full rounded"></div>
              <div 
                className="absolute top-0 h-1 bg-china-red rounded transition-all duration-300" 
                style={{ width: `${(currentStep - 1) / (totalSteps - 1) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* 表单卡片 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* 恢复保存数据提示 */}
            {typeof window !== 'undefined' && localStorage.getItem(FORM_DATA_KEY) && currentStep === 1 && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-blue-800 font-medium">发现您之前填写的数据</p>
                  <p className="text-sm text-blue-600">我们已为您恢复之前的填写进度</p>
                </div>
                <button 
                  onClick={clearFormData}
                  className="px-3 py-1 bg-white text-blue-700 rounded border border-blue-300 text-sm hover:bg-blue-100 transition-colors"
                >
                  清除数据
                </button>
              </div>
            )}
            
            {/* 步骤内容 */}
            <div className="mb-8">
              {renderStepContent()}
            </div>
          </div>
          
          {/* 导航按钮 */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prevStep}
              className={`px-6 py-2 rounded-lg transition-all duration-200 flex items-center ${
                currentStep === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={currentStep === 1 || isSubmitting}
            >
              <svg 
                className="mr-2 w-4 h-4"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.prevStep}
            </button>
            
            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="group relative inline-flex items-center bg-china-red text-white px-6 py-2 rounded-lg 
                         hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-out"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center">
                  {t.nextStep}
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            ) : (
              <button
                onClick={submitForm}
                disabled={isSubmitting}
                className="group relative inline-flex items-center bg-china-red text-white px-8 py-3 rounded-lg text-lg font-semibold 
                         hover:bg-red-700 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]
                         transition-all duration-300 ease-out disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      处理中...
                    </>
                  ) : (
                    <>
                      {t.generatePlan}
                      <svg 
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-lg"></span>
                <span className="absolute inset-0 rounded-lg animate-pulse-red opacity-0 group-hover:opacity-70"></span>
              </button>
            )}
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