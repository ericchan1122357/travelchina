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
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
  ArrowUturnLeftIcon,
  TrashIcon
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
    fast: 'Fast & Intensive',
    light: 'Mild',
    spicy: 'Very Spicy',
    submitSuccess: 'Your travel plan has been submitted successfully! Redirecting to results page...',
    submitFailed: 'Failed to submit. Please try again later.',
    hints: {
      travellerType: "Choose the type that best fits your journey",
      travellers: "Enter the number of people in your travel group (1-20)",
      dates: "Plan your travel dates",
      budget: "Select a budget range that meets your expectations",
      routes: "Choose a recommended route or customize your own itinerary",
      destinations: "Click to select the cities you want to visit",
      travelStyle: "Select the style that matches your travel preferences",
      pace: "1-2 attractions per day | 3-5 attractions per day",
      accommodation: "Select your preferred accommodation type during travel",
      spiciness: "Very mild or slightly spicy | Spicy Sichuan and Hunan cuisine",
      foodTypes: "Select your favorite food types",
      diningEnv: "Select your preferred dining environment",
      dietaryRestr: "Enter any dietary restrictions or requirements",
      additionalReq: "Please specify any special requirements for your itinerary",
      formSummary: "Travel Plan Summary",
      savedData: "Data saved successfully",
      restored: "We have restored your previous progress",
      clearData: "Data cleared successfully",
      loading: "Processing...",
      selectedCities: "Select at least one",
      multiSelection: "Multiple selection",
      submittingData: "Submitting Data",
      submissionError: "Submission Error"
    }
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
    fast: '快速紧凑',
    light: '微辣',
    spicy: '重辣',
    submitSuccess: '您的旅行计划已成功提交！正在跳转到结果页面...',
    submitFailed: '提交失败，请稍后再试。',
    hints: {
      travellerType: "选择最符合您此次旅行的类型",
      travellers: "请输入旅行团队的人数 (1-20人)",
      dates: "规划您的旅行日期",
      budget: "选择符合您期望的预算范围",
      routes: "选择一个推荐路线或自定义您的行程",
      destinations: "点击选择您想要游览的城市",
      travelStyle: "选择与您的旅行喜好最匹配的风格",
      pace: "每天游览1-2个景点 | 每天游览3-5个景点",
      accommodation: "选择您在旅行中偏好的住宿类型",
      spiciness: "不吃辣或微辣 | 川菜、湘菜等重辣美食",
      foodTypes: "选择您喜欢的食物类型",
      diningEnv: "选择您偏好的用餐环境",
      dietaryRestr: "请输入任何饮食方面的限制或需求",
      additionalReq: "对行程有任何特殊需求请在此说明",
      formSummary: "旅行计划摘要",
      savedData: "数据保存成功",
      restored: "我们已为您恢复之前的填写进度",
      clearData: "数据清除成功",
      loading: "处理中...",
      selectedCities: "至少选择一个",
      multiSelection: "可多选",
      submittingData: "提交数据",
      submissionError: "提交错误"
    }
  },
  fr: {
    title: 'Planification de Voyage',
    backToHome: 'Retour à l\'Accueil',
    createPlan: 'Créez Votre Plan de Voyage Personnalisé',
    step1Title: 'Informations de Base',
    step2Title: 'Destinations',
    step3Title: 'Préférences de Voyage',
    step4Title: 'Préférences Culinaires',
    step5Title: 'Exigences Spéciales',
    travellerType: 'Type de Voyageur',
    travellerTypes: ['Solo', 'Couple', 'Famille', 'Amis', 'Voyage d\'Affaires', 'Autre'],
    travellers: 'Nombre de Voyageurs',
    travelDates: 'Dates de Voyage',
    departureDate: 'Date de Départ',
    returnDate: 'Date de Retour',
    budget: 'Gamme de Budget',
    budgetRanges: ['Économique (Moins de €450)', 'Standard (€450-€900)', 'Premium (€900-€1350)', 'Luxe (€1350+)'],
    destinations: 'Choisir les Destinations',
    suggestedRoutes: 'Itinéraires Suggérés',
    routeTypes: ['Classique Pékin-Shanghai-Guangzhou', 'Tour Historique et Culturel', 'Nature et Paysages', 'Villes Chinoises Modernes', 'Voyage Gastronomique'],
    preferences: 'Préférences de Voyage',
    travelStyle: 'Style de Voyage',
    travelStyles: ['Détente', 'Exploration Culturelle', 'Tour Gastronomique', 'Paysages Naturels', 'Expérience Profonde'],
    travelPace: 'Rythme de Voyage',
    accommodation: 'Préférence d\'Hébergement',
    accommodationTypes: ['Hôtels Économiques', 'Hôtels Milieu de Gamme', 'Hôtels de Luxe', 'Maisons d\'Hôtes Caractéristiques', 'Auberges de Jeunesse'],
    diningTitle: 'Préférences Culinaires',
    tastePreference: 'Préférence de Goût',
    foodTypes: 'Types d\'Aliments',
    foodTypePref: ['Fruits de Mer', 'Plats de Viande', 'Végétarien', 'Nouilles', 'À Base de Riz'],
    diningEnvironment: 'Environnement de Restauration',
    diningEnvOptions: ['Restaurants Populaires Locaux', 'Haute Cuisine', 'Nourriture de Rue', 'Restaurants Thématiques', 'Repas Rapides'],
    spiciness: 'Préférence d\'Épices',
    dietaryRestrictions: 'Restrictions Alimentaires',
    additionalRequests: 'Demandes Supplémentaires',
    requestsPlaceholder: 'Veuillez nous indiquer vos exigences ou attentes particulières...',
    nextStep: 'Étape Suivante',
    prevStep: 'Précédent',
    generatePlan: 'Générer le Plan de Voyage',
    footer: '© 2023 Guide de Voyage en Chine. Tous droits réservés.',
    cities: ['Pékin', 'Shanghai', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen'],
    slow: 'Lent et Détendu',
    balanced: 'Équilibré',
    fast: 'Rythme Rapide',
    light: 'Très Doux',
    medium: 'Moyen',
    spicy: 'Très Épicé',
    hints: {
      travellerType: "Choisissez le type qui correspond le mieux à votre voyage",
      travellers: "Entrez le nombre de personnes dans votre groupe (1-20)",
      dates: "Planifiez vos dates de voyage",
      budget: "Sélectionnez une gamme de budget qui répond à vos attentes",
      routes: "Choisissez un itinéraire recommandé ou personnalisez votre propre itinéraire",
      destinations: "Cliquez pour sélectionner les villes que vous souhaitez visiter",
      travelStyle: "Sélectionnez le style qui correspond à vos préférences de voyage",
      pace: "1-2 attractions par jour | 3-5 attractions par jour",
      accommodation: "Sélectionnez votre type d'hébergement préféré",
      spiciness: "Très doux ou légèrement épicé | Cuisine épicée du Sichuan et Hunan",
      foodTypes: "Sélectionnez vos types de nourriture préférés",
      diningEnv: "Sélectionnez votre environnement de restauration préféré",
      dietaryRestr: "Entrez toutes restrictions alimentaires ou exigences",
      additionalReq: "Veuillez préciser toute exigence particulière pour votre itinéraire",
      formSummary: "Résumé du Plan de Voyage",
      savedData: "Données enregistrées avec succès",
      restored: "Progression restaurée avec succès",
      clearData: "Données effacées avec succès",
      loading: "Traitement en cours...",
      selectedCities: "Sélectionnez-en au moins un",
      multiSelection: "Sélection multiple",
      submittingData: "Soumission des Données",
      submissionError: "Erreur de Soumission",
      submitSuccess: "Votre plan de voyage a été soumis avec succès ! Redirection vers les résultats..."
    }
  },
  de: {
    title: 'Reiseplanung',
    backToHome: 'Zurück zur Startseite',
    createPlan: 'Erstellen Sie Ihren persönlichen Reiseplan',
    step1Title: 'Grundlegende Reiseinformationen',
    step2Title: 'Reiseziele',
    step3Title: 'Reisevorlieben',
    step4Title: 'Essensvorlieben',
    step5Title: 'Besondere Anforderungen',
    travellerType: 'Reisetyp',
    travellerTypes: ['Alleinreisend', 'Paar', 'Familie', 'Freunde', 'Geschäftsreise', 'Andere'],
    travellers: 'Anzahl der Reisenden',
    travelDates: 'Reisedaten',
    departureDate: 'Abreisedatum',
    returnDate: 'Rückreisedatum',
    budget: 'Budgetbereich',
    budgetRanges: ['Wirtschaftlich (Unter €450)', 'Standard (€450-€900)', 'Premium (€900-€1350)', 'Luxus (€1350+)'],
    destinations: 'Reiseziele auswählen',
    suggestedRoutes: 'Vorgeschlagene Routen',
    routeTypes: ['Klassische Peking-Shanghai-Guangzhou Route', 'Historische & Kulturelle Tour', 'Natur & Landschaft', 'Moderne Chinesische Städte', 'Kulinarische Reise'],
    preferences: 'Reisevorlieben',
    travelStyle: 'Reisestil',
    travelStyles: ['Entspannung', 'Kulturelle Erkundung', 'Gourmet-Tour', 'Naturlandschaften', 'Tiefgreifende Erfahrung'],
    travelPace: 'Reisetempo',
    accommodation: 'Unterkunftspräferenz',
    accommodationTypes: ['Budgethotels', 'Mittelklassehotels', 'Luxushotels', 'Charakteristische Pensionen', 'Hostels'],
    diningTitle: 'Essensvorlieben',
    tastePreference: 'Geschmacksvorliebe',
    foodTypes: 'Lebensmittelarten',
    foodTypePref: ['Meeresfrüchte', 'Fleischgerichte', 'Vegetarisch', 'Nudelgerichte', 'Reisbasiert'],
    diningEnvironment: 'Essensumgebung',
    diningEnvOptions: ['Lokale beliebte Restaurants', 'Gehobene Küche', 'Straßenessen', 'Themenrestaurants', 'Schnellrestaurants'],
    spiciness: 'Schärfe-Präferenz',
    dietaryRestrictions: 'Ernährungsbeschränkungen',
    additionalRequests: 'Zusätzliche Anfragen',
    requestsPlaceholder: 'Bitte teilen Sie uns besondere Anforderungen oder Erwartungen mit...',
    nextStep: 'Nächster Schritt',
    prevStep: 'Zurück',
    generatePlan: 'Reiseplan generieren',
    footer: '© 2023 China-Reiseführer. Alle Rechte vorbehalten.',
    cities: ['Peking', 'Shanghai', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen'],
    slow: 'Langsam & Entspannt',
    balanced: 'Ausgewogen',
    fast: 'Schnelles Tempo',
    light: 'Sehr Mild',
    medium: 'Mittel',
    spicy: 'Sehr Scharf',
    hints: {
      travellerType: "Wählen Sie den Typ, der am besten zu Ihrer Reise passt",
      travellers: "Geben Sie die Anzahl der Personen in Ihrer Reisegruppe an (1-20)",
      dates: "Planen Sie Ihre Reisedaten",
      budget: "Wählen Sie einen Budgetbereich, der Ihren Erwartungen entspricht",
      routes: "Wählen Sie eine empfohlene Route oder erstellen Sie Ihre eigene Reiseroute",
      destinations: "Klicken Sie, um die Städte auszuwählen, die Sie besuchen möchten",
      travelStyle: "Wählen Sie den Stil, der Ihren Reisepräferenzen entspricht",
      pace: "1-2 Attraktionen pro Tag | 3-5 Attraktionen pro Tag",
      accommodation: "Wählen Sie Ihre bevorzugte Unterkunftsart während der Reise",
      spiciness: "Sehr mild oder leicht scharf | Scharfe Sichuan- und Hunan-Küche",
      foodTypes: "Wählen Sie Ihre Lieblings-Lebensmittelarten",
      diningEnv: "Wählen Sie Ihre bevorzugte Essensumgebung",
      dietaryRestr: "Geben Sie alle Ernährungseinschränkungen oder Anforderungen ein",
      additionalReq: "Bitte geben Sie besondere Anforderungen für Ihre Reiseroute an",
      formSummary: "Reiseplan Zusammenfassung",
      savedData: "Daten erfolgreich gespeichert",
      restored: "Fortschritt erfolgreich wiederhergestellt",
      clearData: "Daten erfolgreich gelöscht",
      loading: "Verarbeitung...",
      selectedCities: "Wählen Sie mindestens eine aus",
      multiSelection: "Mehrfachauswahl",
      submittingData: "Daten Übermittlung",
      submissionError: "Übermittlungsfehler",
      submitSuccess: "Ihr Reiseplan wurde erfolgreich übermittelt! Weiterleitung zu den Ergebnissen..."
    }
  },
  ja: {
    title: '旅行プランニング',
    backToHome: 'ホームに戻る',
    createPlan: 'あなたのパーソナライズされた旅行プランを作成',
    step1Title: '基本旅行情報',
    step2Title: '目的地',
    step3Title: '旅行の好み',
    step4Title: '食事の好み',
    step5Title: '特別な要件',
    travellerType: '旅行者タイプ',
    travellerTypes: ['ソロ', 'カップル', '家族', '友人', 'ビジネス', 'その他'],
    travellers: '旅行者数',
    travelDates: '旅行日程',
    departureDate: '出発日',
    returnDate: '帰国日',
    budget: '予算範囲',
    budgetRanges: ['エコノミー (¥50,000以下)', 'スタンダード (¥50,000-¥100,000)', 'プレミアム (¥100,000-¥150,000)', 'ラグジュアリー (¥150,000+)'],
    destinations: '目的地を選ぶ',
    suggestedRoutes: '推奨ルート',
    routeTypes: ['クラシック北京-上海-広州', '歴史・文化ツアー', '自然と風景', '現代中国の都市', 'フードジャーニー'],
    preferences: '旅行の好み',
    travelStyle: '旅行スタイル',
    travelStyles: ['リラクゼーション', '文化探訪', 'グルメツアー', '自然風景', '深い体験'],
    travelPace: '旅行ペース',
    accommodation: '宿泊施設の好み',
    accommodationTypes: ['エコノミーホテル', 'ミッドレンジホテル', '高級ホテル', '特色ある民宿', 'ユースホステル'],
    diningTitle: '食事の好み',
    tastePreference: '味の好み',
    foodTypes: '食べ物の種類',
    foodTypePref: ['シーフード', '肉料理', 'ベジタリアン', '麺類', '米料理'],
    diningEnvironment: '食事環境',
    diningEnvOptions: ['地元の人気レストラン', '高級レストラン', 'ストリートフード', 'テーマレストラン', 'クイックミール'],
    spiciness: '辛さの好み',
    dietaryRestrictions: '食事制限',
    additionalRequests: '追加リクエスト',
    requestsPlaceholder: '特別な要件や期待をお知らせください...',
    nextStep: '次のステップ',
    prevStep: '前へ',
    generatePlan: '旅行プランを生成',
    footer: '© 2023 中国旅行ガイド. 全著作権所有.',
    cities: ['北京', '上海', '西安', '成都', '杭州', '桂林', '広州', '深セン'],
    slow: 'ゆっくりリラックス',
    balanced: 'バランス',
    fast: '速いペース',
    light: '非常にマイルド',
    medium: '中程度',
    spicy: '非常に辛い',
    hints: {
      travellerType: "あなたの旅行に最も適したタイプを選択してください",
      travellers: "旅行グループの人数を入力してください（1-20人）",
      dates: "旅行日程を計画してください",
      budget: "ご希望に合った予算範囲を選択してください",
      routes: "推奨ルートを選択するか、独自のルートをカスタマイズしてください",
      destinations: "訪問したい都市を選択するにはクリックしてください",
      travelStyle: "あなたの旅行の好みに合ったスタイルを選択してください",
      pace: "1日1〜2つの観光スポット | 1日3〜5つの観光スポット",
      accommodation: "旅行中の希望する宿泊タイプを選択してください",
      spiciness: "非常にマイルドまたは少し辛い | 四川料理や湖南料理などの辛い料理",
      foodTypes: "お好みの食べ物のタイプを選択してください",
      diningEnv: "希望する食事環境を選択してください",
      dietaryRestr: "食事制限や要件を入力してください",
      additionalReq: "旅程に関する特別な要件を明記してください",
      formSummary: "旅行計画の概要",
      savedData: "データが正常に保存されました",
      restored: "進行状況が正常に復元されました",
      clearData: "データが正常にクリアされました",
      loading: "処理中...",
      selectedCities: "少なくとも1つ選択してください",
      multiSelection: "複数選択可",
      submittingData: "データ送信中",
      submissionError: "送信エラー",
      submitSuccess: "旅行プランが正常に送信されました！結果ページにリダイレクトしています..."
    }
  },
  ko: {
    title: '여행 계획',
    backToHome: '홈으로 돌아가기',
    createPlan: '맞춤형 여행 계획 만들기',
    step1Title: '기본 여행 정보',
    step2Title: '목적지',
    step3Title: '여행 선호도',
    step4Title: '식사 선호도',
    step5Title: '특별 요구 사항',
    travellerType: '여행자 유형',
    travellerTypes: ['솔로', '커플', '가족', '친구', '비즈니스', '기타'],
    travellers: '여행자 수',
    travelDates: '여행 날짜',
    departureDate: '출발 날짜',
    returnDate: '귀국 날짜',
    budget: '예산 범위',
    budgetRanges: ['이코노미 (₩500,000 이하)', '스탠다드 (₩500,000-₩1,000,000)', '프리미엄 (₩1,000,000-₩1,500,000)', '럭셔리 (₩1,500,000+)'],
    destinations: '목적지 선택',
    suggestedRoutes: '추천 경로',
    routeTypes: ['클래식 베이징-상하이-광저우', '역사 및 문화 투어', '자연과 경치', '현대 중국 도시', '음식 여행'],
    preferences: '여행 선호도',
    travelStyle: '여행 스타일',
    travelStyles: ['휴식', '문화 탐험', '음식 여행', '자연 경관', '심층 경험'],
    travelPace: '여행 속도',
    accommodation: '숙박 선호도',
    accommodationTypes: ['이코노미 호텔', '중급 호텔', '럭셔리 호텔', '특색 있는 민박', '호스텔'],
    diningTitle: '식사 선호도',
    tastePreference: '맛 선호도',
    foodTypes: '음식 종류',
    foodTypePref: ['해산물', '육류 요리', '채식', '면요리', '쌀 기반'],
    diningEnvironment: '식사 환경',
    diningEnvOptions: ['현지 인기 레스토랑', '고급 레스토랑', '길거리 음식', '테마 레스토랑', '빠른 식사'],
    spiciness: '매운맛 선호도',
    dietaryRestrictions: '식이 제한',
    additionalRequests: '추가 요청',
    requestsPlaceholder: '특별한 요구 사항이나 기대를 알려주세요...',
    nextStep: '다음 단계',
    prevStep: '이전',
    generatePlan: '여행 계획 생성',
    footer: '© 2023 중국 여행 가이드. 모든 권리 보유.',
    cities: ['베이징', '상하이', '시안', '청두', '항저우', '구이린', '광저우', '선전'],
    slow: '느리고 편안함',
    balanced: '균형',
    fast: '빠른 속도',
    light: '매우 순한맛',
    medium: '중간',
    spicy: '매우 매운맛',
    hints: {
      travellerType: "여행에 가장 적합한 유형을 선택하세요",
      travellers: "여행 그룹의 인원 수를 입력하세요 (1-20명)",
      dates: "여행 날짜를 계획하세요",
      budget: "기대에 맞는 예산 범위를 선택하세요",
      routes: "추천 경로를 선택하거나 자신만의 여행 일정을 맞춤 설정하세요",
      destinations: "방문하고 싶은 도시를 선택하려면 클릭하세요",
      travelStyle: "여행 선호도에 맞는 스타일을 선택하세요",
      pace: "하루 1-2개 명소 | 하루 3-5개 명소",
      accommodation: "여행 중 선호하는 숙박 유형을 선택하세요",
      spiciness: "매우 순한 맛 또는 약간 매운 맛 | 쓰촨, 후난식 등 매운 요리",
      foodTypes: "좋아하는 음식 유형을 선택하세요",
      diningEnv: "선호하는 식사 환경을 선택하세요",
      dietaryRestr: "식이 제한이나 요구 사항을 입력하세요",
      additionalReq: "여행 일정에 대한 특별한 요구 사항을 명시하세요",
      formSummary: "여행 계획 요약",
      savedData: "데이터가 성공적으로 저장되었습니다",
      restored: "진행 상황이 성공적으로 복원되었습니다",
      clearData: "데이터가 성공적으로 지워졌습니다",
      loading: "처리 중...",
      selectedCities: "최소 하나 선택",
      multiSelection: "다중 선택 가능",
      submittingData: "데이터 전송중",
      submissionError: "전송 오류",
      submitSuccess: "여행 계획이 성공적으로 제출되었습니다! 결과 페이지로 리디렉션 중..."
    }
  },
  es: {
    title: 'Planificación de Viajes',
    backToHome: 'Volver al Inicio',
    createPlan: 'Cree su Plan de Viaje Personalizado',
    step1Title: 'Información Básica de Viaje',
    step2Title: 'Destinos',
    step3Title: 'Preferencias de Viaje',
    step4Title: 'Preferencias Culinarias',
    step5Title: 'Requisitos Especiales',
    travellerType: 'Tipo de Viajero',
    travellerTypes: ['Solo', 'Pareja', 'Familia', 'Amigos', 'Negocios', 'Otro'],
    travellers: 'Número de Viajeros',
    travelDates: 'Fechas de Viaje',
    departureDate: 'Fecha de Salida',
    returnDate: 'Fecha de Regreso',
    budget: 'Rango de Presupuesto',
    budgetRanges: ['Económico (Menos de €450)', 'Estándar (€450-€900)', 'Premium (€900-€1350)', 'Lujo (€1350+)'],
    destinations: 'Elegir Destinos',
    suggestedRoutes: 'Rutas Sugeridas',
    routeTypes: ['Clásica Pekín-Shanghái-Guangzhou', 'Tour Histórico y Cultural', 'Naturaleza y Paisajes', 'Ciudades Chinas Modernas', 'Viaje Gastronómico'],
    preferences: 'Preferencias de Viaje',
    travelStyle: 'Estilo de Viaje',
    travelStyles: ['Relajación', 'Exploración Cultural', 'Tour Gastronómico', 'Paisajes Naturales', 'Experiencia Profunda'],
    travelPace: 'Ritmo de Viaje',
    accommodation: 'Preferencia de Alojamiento',
    accommodationTypes: ['Hoteles Económicos', 'Hoteles de Gama Media', 'Hoteles de Lujo', 'Casas Rurales Características', 'Albergues'],
    diningTitle: 'Preferencias Culinarias',
    tastePreference: 'Preferencia de Sabor',
    foodTypes: 'Tipos de Alimentos',
    foodTypePref: ['Mariscos', 'Platos de Carne', 'Vegetariano', 'Fideos', 'Basados en Arroz'],
    diningEnvironment: 'Entorno de Comida',
    diningEnvOptions: ['Restaurantes Populares Locales', 'Alta Cocina', 'Comida Callejera', 'Restaurantes Temáticos', 'Comidas Rápidas'],
    spiciness: 'Preferencia de Picante',
    dietaryRestrictions: 'Restricciones Dietéticas',
    additionalRequests: 'Solicitudes Adicionales',
    requestsPlaceholder: 'Por favor, díganos cualquier requisito o expectativa especial...',
    nextStep: 'Siguiente Paso',
    prevStep: 'Anterior',
    generatePlan: 'Generar Plan de Viaje',
    footer: '© 2023 Guía de Viajes de China. Todos los derechos reservados.',
    cities: ['Pekín', 'Shanghái', 'Xi\'an', 'Chengdu', 'Hangzhou', 'Guilin', 'Guangzhou', 'Shenzhen'],
    slow: 'Lento y Relajado',
    balanced: 'Equilibrado',
    fast: 'Ritmo Rápido',
    light: 'Muy Suave',
    medium: 'Medio',
    spicy: 'Muy Picante',
    hints: {
      travellerType: "Elija el tipo que mejor se adapte a su viaje",
      travellers: "Ingrese el número de personas en su grupo de viaje (1-20)",
      dates: "Planifique sus fechas de viaje",
      budget: "Seleccione un rango de presupuesto que cumpla con sus expectativas",
      routes: "Elija una ruta recomendada o personalice su propio itinerario",
      destinations: "Haga clic para seleccionar las ciudades que desea visitar",
      travelStyle: "Seleccione el estilo que coincida con sus preferencias de viaje",
      pace: "1-2 atracciones por día | 3-5 atracciones por día",
      accommodation: "Seleccione su tipo de alojamiento preferido durante el viaje",
      spiciness: "Muy suave o ligeramente picante | Cocina picante de Sichuan y Hunan",
      foodTypes: "Seleccione sus tipos de alimentos favoritos",
      diningEnv: "Seleccione su entorno de comida preferido",
      dietaryRestr: "Ingrese cualquier restricción dietética o requisito",
      additionalReq: "Por favor, especifique cualquier requisito especial para su itinerario",
      formSummary: "Resumen del Plan de Viaje",
      savedData: "Datos guardados con éxito",
      restored: "Progreso restaurado con éxito",
      clearData: "Datos borrados con éxito",
      loading: "Procesando...",
      selectedCities: "Seleccione al menos uno",
      multiSelection: "Selección múltiple",
      submittingData: "Envío de Datos",
      submissionError: "Error de Envío",
      submitSuccess: "¡Su plan de viaje ha sido enviado con éxito! Redirigiendo a los resultados..."
    }
  },
  ru: {
    title: 'Планирование Путешествия',
    backToHome: 'Вернуться на Главную',
    createPlan: 'Создайте Свой Персонализированный План Путешествия',
    step1Title: 'Основная Информация о Поездке',
    step2Title: 'Направления',
    step3Title: 'Предпочтения в Путешествии',
    step4Title: 'Предпочтения в Еде',
    step5Title: 'Особые Требования',
    travellerType: 'Тип Путешественника',
    travellerTypes: ['Соло', 'Пара', 'Семья', 'Друзья', 'Бизнес', 'Другое'],
    travellers: 'Количество Путешественников',
    travelDates: 'Даты Путешествия',
    departureDate: 'Дата Отправления',
    returnDate: 'Дата Возвращения',
    budget: 'Диапазон Бюджета',
    budgetRanges: ['Эконом (До ₽30,000)', 'Стандарт (₽30,000-₽60,000)', 'Премиум (₽60,000-₽90,000)', 'Люкс (₽90,000+)'],
    destinations: 'Выберите Направления',
    suggestedRoutes: 'Предлагаемые Маршруты',
    routeTypes: ['Классический Пекин-Шанхай-Гуанчжоу', 'Исторический и Культурный Тур', 'Природа и Пейзажи', 'Современные Китайские Города', 'Гастрономическое Путешествие'],
    preferences: 'Предпочтения в Путешествии',
    travelStyle: 'Стиль Путешествия',
    travelStyles: ['Релаксация', 'Культурное Исследование', 'Гастрономический Тур', 'Природные Пейзажи', 'Глубокий Опыт'],
    travelPace: 'Темп Путешествия',
    accommodation: 'Предпочтения по Размещению',
    accommodationTypes: ['Бюджетные Отели', 'Отели Среднего Класса', 'Роскошные Отели', 'Характерные Гостевые Дома', 'Хостелы'],
    diningTitle: 'Предпочтения в Еде',
    tastePreference: 'Предпочтения по Вкусу',
    foodTypes: 'Типы Еды',
    foodTypePref: ['Морепродукты', 'Мясные Блюда', 'Вегетарианская', 'Лапша', 'На Основе Риса'],
    diningEnvironment: 'Среда Питания',
    diningEnvOptions: ['Популярные Местные Рестораны', 'Изысканная Кухня', 'Уличная Еда', 'Тематические Рестораны', 'Быстрое Питание'],
    spiciness: 'Предпочтения по Остроте',
    dietaryRestrictions: 'Диетические Ограничения',
    additionalRequests: 'Дополнительные Запросы',
    requestsPlaceholder: 'Пожалуйста, расскажите нам о любых особых требованиях или ожиданиях...',
    nextStep: 'Следующий Шаг',
    prevStep: 'Предыдущий',
    generatePlan: 'Сгенерировать План Путешествия',
    footer: '© 2023 Путеводитель по Китаю. Все права защищены.',
    cities: ['Пекин', 'Шанхай', 'Сиань', 'Чэнду', 'Ханчжоу', 'Гуйлинь', 'Гуанчжоу', 'Шэньчжэнь'],
    slow: 'Медленно и Расслабленно',
    balanced: 'Сбалансированно',
    fast: 'Быстрый Темп',
    light: 'Очень Мягкий',
    medium: 'Средний',
    spicy: 'Очень Острый',
    hints: {
      travellerType: "Выберите тип, который лучше всего соответствует вашему путешествию",
      travellers: "Введите количество людей в вашей туристической группе (1-20)",
      dates: "Спланируйте даты вашего путешествия",
      budget: "Выберите диапазон бюджета, который соответствует вашим ожиданиям",
      routes: "Выберите рекомендуемый маршрут или настройте свой собственный",
      destinations: "Нажмите, чтобы выбрать города, которые вы хотите посетить",
      travelStyle: "Выберите стиль, соответствующий вашим предпочтениям в путешествии",
      pace: "1-2 достопримечательности в день | 3-5 достопримечательностей в день",
      accommodation: "Выберите предпочитаемый тип жилья",
      spiciness: "Без острого или слегка острого | Острая кухня Сычуани и Хунани",
      foodTypes: "Выберите типы еды, которые вам нравятся",
      diningEnv: "Выберите предпочитаемую среду для приема пищи",
      dietaryRestr: "Введите любые ограничения в питании или требования",
      additionalReq: "Пожалуйста, укажите любые особые требования для вашего маршрута",
      formSummary: "Сводка Плана Путешествия",
      savedData: "Данные успешно сохранены",
      restored: "Прогресс успешно восстановлен",
      clearData: "Данные успешно очищены",
      loading: "Обработка...",
      selectedCities: "Выберите хотя бы один",
      multiSelection: "Множественный выбор",
      submittingData: "Отправка Данных",
      submissionError: "Ошибка Отправки",
      submitSuccess: "Ваш план путешествия успешно отправлен! Перенаправление к результатам..."
    }
  }
};

// 默认使用英文，如果找不到对应的语言
const getTranslation = (language: Language, key: string): any => {
  return translations[language]?.[key] || translations.en[key];
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
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
      
      // 使用当前语言初始化表单
      const defaultFormData = {
        travellerType: getTranslation(currentLanguage, 'travellerTypes')[0] || '',
        travellers: 2,
        departureDate: '',
        returnDate: '',
        budget: getTranslation(currentLanguage, 'budgetRanges')[0] || '',
        selectedDestinations: [],
        selectedRoute: getTranslation(currentLanguage, 'routeTypes')[0] || '',
        travelStyle: getTranslation(currentLanguage, 'travelStyles')[0] || '',
        travelPace: 50,
        accommodation: getTranslation(currentLanguage, 'accommodationTypes')[0] || '',
        tastePreference: 50,
        foodTypes: [],
        diningEnvironment: getTranslation(currentLanguage, 'diningEnvOptions')[0] || '',
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
          newErrors.departureDate = currentLanguage === 'zh' ? '请选择出发日期' : 'Please select departure date';
        }
        if (!formData.returnDate) {
          newErrors.returnDate = currentLanguage === 'zh' ? '请选择返回日期' : 'Please select return date';
        }
        if (formData.departureDate && formData.returnDate && new Date(formData.departureDate) > new Date(formData.returnDate)) {
          newErrors.returnDate = currentLanguage === 'zh' ? '返回日期不能早于出发日期' : 'Return date cannot be earlier than departure date';
        }
        break;
      case 2:
        if (formData.selectedDestinations.length === 0) {
          newErrors.selectedDestinations = currentLanguage === 'zh' ? '请至少选择一个目的地' : 'Please select at least one destination';
        }
        break;
      case 4:
        if (formData.foodTypes.length === 0) {
          newErrors.foodTypes = currentLanguage === 'zh' ? '请至少选择一种食物类型' : 'Please select at least one food type';
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
    // 验证当前步骤
    if (!validateStep(currentStep)) {
      return;
    }
    
    // 设置加载状态
    setIsSubmitting(true);
    
    try {
      // 模拟API调用
      console.log('提交数据:', formData);
      
      // 延迟一下，模拟API请求时间
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 显示成功消息，根据语言显示不同的文本
      const successMessage = currentLanguage === 'zh' 
        ? '您的旅行计划已成功提交！正在跳转到结果页面...' 
        : 'Your travel plan has been submitted successfully! Redirecting to results page...';
      
      alert(successMessage);
      
      // 不清除表单数据，以便在结果页面使用
      // setFormData(initializeForm(currentLanguage));
      // setCurrentStep(1);
      
      // 跳转到结果页面
      router.push('/planner/result');
    } catch (error) {
      console.error('提交出错:', error);
      
      // 显示错误消息，根据语言显示不同的文本
      const errorMessage = currentLanguage === 'zh'
        ? '提交失败，请稍后再试。'
        : 'Failed to submit. Please try again later.';
      
      alert(errorMessage);
    } finally {
      // 取消加载状态
      setIsSubmitting(false);
    }
  };

  // 渲染步骤标题
  const renderStepTitle = (step: number) => {
    switch (step) {
      case 1: return getTranslation(currentLanguage, 'step1Title');
      case 2: return getTranslation(currentLanguage, 'step2Title');
      case 3: return getTranslation(currentLanguage, 'step3Title');
      case 4: return getTranslation(currentLanguage, 'step4Title');
      case 5: return getTranslation(currentLanguage, 'step5Title');
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

    return (
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          根据您的选择，我们为您推荐
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.attractions.length > 0 && (
            <div>
              <h4 className="font-medium text-amber-700 mb-2">推荐景点</h4>
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
              <h4 className="font-medium text-amber-700 mb-2">推荐美食</h4>
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
              <h4 className="font-medium text-amber-700 mb-2">推荐活动</h4>
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
                {getTranslation(currentLanguage, 'travellerType')}
              </label>
              <select 
                name="travellerType"
                value={formData.travellerType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {getTranslation(currentLanguage, 'travellerTypes').map((type: string, index: number) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.travellerType')}</p>
            </div>

            {/* 旅行人数 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'travellers')}
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
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.travellers')}</p>
            </div>

            {/* 旅行时间 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium flex items-center">
                  <CalendarDaysIcon className="w-5 h-5 mr-2 text-china-red" />
                  {getTranslation(currentLanguage, 'departureDate')}
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
                  {getTranslation(currentLanguage, 'returnDate')}
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
                {getTranslation(currentLanguage, 'budget')}
              </label>
              <select 
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {getTranslation(currentLanguage, 'budgetRanges').map((range: string, index: number) => (
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
                {getTranslation(currentLanguage, 'suggestedRoutes')}
              </label>
              <select 
                name="selectedRoute"
                value={formData.selectedRoute}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {getTranslation(currentLanguage, 'routeTypes').map((route: string, index: number) => (
                  <option key={index} value={route}>{route}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.routes')}</p>
            </div>

            {/* 目的地选择 */}
            <div>
              <label className="block text-gray-700 mb-4 font-medium flex items-center">
                <GlobeAsiaAustraliaIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'destinations')}
                <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  <QuestionMarkCircleIcon className="w-3 h-3 mr-1" />
                  {getTranslation(currentLanguage, 'hints.selectedCities')}
                </span>
              </label>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${errors.selectedDestinations ? 'border border-red-500 p-2 rounded-lg' : ''}`}>
                {getTranslation(currentLanguage, 'cities').map((city: string) => (
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
              <p className="mt-2 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.destinations')}</p>
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
                {getTranslation(currentLanguage, 'travelStyle')}
              </label>
              <select 
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {getTranslation(currentLanguage, 'travelStyles').map((style: string, index: number) => (
                  <option key={index} value={style}>{style}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.travelStyle')}</p>
            </div>

            {/* 旅行节奏 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <ArrowPathIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'travelPace')}
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 min-w-[80px]">{getTranslation(currentLanguage, 'slow')}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={formData.travelPace}
                  onChange={(e) => handleSliderChange('travelPace', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-china-red"
                />
                <span className="text-sm text-gray-500 min-w-[80px]">{getTranslation(currentLanguage, 'fast')}</span>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'hints.pace').split(' | ')[0]}</p>
                <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'hints.pace').split(' | ')[1]}</p>
              </div>
            </div>

            {/* 住宿偏好 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <BuildingOfficeIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'accommodation')}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-3">
                {getTranslation(currentLanguage, 'accommodationTypes').map((type: string, index: number) => (
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
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.accommodation')}</p>
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
                {getTranslation(currentLanguage, 'spiciness')}
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 min-w-[80px]">{getTranslation(currentLanguage, 'light')}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={formData.tastePreference}
                  onChange={(e) => handleSliderChange('tastePreference', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-china-red"
                />
                <span className="text-sm text-gray-500 min-w-[80px]">{getTranslation(currentLanguage, 'spicy')}</span>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'hints.spiciness').split(' | ')[0]}</p>
                <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'hints.spiciness').split(' | ')[1]}</p>
              </div>
            </div>

            {/* 食物类型 */}
            <div>
              <label className="block text-gray-700 mb-4 font-medium flex items-center">
                <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'foodTypes')}
                <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  <QuestionMarkCircleIcon className="w-3 h-3 mr-1" />
                  {getTranslation(currentLanguage, 'hints.multiSelection')}
                </span>
              </label>
              <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 ${errors.foodTypes ? 'border border-red-500 p-2 rounded-lg' : ''}`}>
                {getTranslation(currentLanguage, 'foodTypePref').map((type: string, index: number) => (
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
              <p className="mt-2 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.foodTypes')}</p>
            </div>

            {/* 用餐环境 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'diningEnvironment')}
              </label>
              <select 
                name="diningEnvironment"
                value={formData.diningEnvironment}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              >
                {getTranslation(currentLanguage, 'diningEnvOptions').map((env: string, index: number) => (
                  <option key={index} value={env}>{env}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.diningEnv')}</p>
            </div>

            {/* 饮食限制 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'dietaryRestrictions')}
              </label>
              <input 
                type="text" 
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                placeholder={getTranslation(currentLanguage, 'requestsPlaceholder')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
              />
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.dietaryRestr')}</p>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            {/* 额外要求 */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium flex items-center">
                <DocumentTextIcon className="w-5 h-5 mr-2 text-china-red" />
                {getTranslation(currentLanguage, 'additionalRequests')}
              </label>
              <textarea 
                name="additionalRequests"
                value={formData.additionalRequests}
                onChange={handleInputChange}
                placeholder={getTranslation(currentLanguage, 'requestsPlaceholder')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors h-32"
              />
              <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'hints.additionalReq')}</p>
            </div>

            {/* 旅行计划摘要 */}
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="text-lg font-medium text-amber-800 mb-3">{getTranslation(currentLanguage, 'travelPlanSummary')}</h3>
              <div className="space-y-2">
                <p><span className="font-medium">{getTranslation(currentLanguage, 'travellerType')}:</span> {formData.travellerType}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'travellers')}:</span> {formData.travellers}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'departureDate')}:</span> {formData.departureDate}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'returnDate')}:</span> {formData.returnDate}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'budget')}:</span> {formData.budget} {getTranslation(currentLanguage, 'currency')}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'selectedRoute')}:</span> {formData.selectedRoute}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'destinations')}:</span> {formData.selectedDestinations.join(', ')}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'travelStyle')}:</span> {formData.travelStyle}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'accommodation')}:</span> {formData.accommodation}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'foodTypes')}:</span> {formData.foodTypes.join(', ')}</p>
                <p><span className="font-medium">{getTranslation(currentLanguage, 'diningEnvironment')}:</span> {formData.diningEnvironment}</p>
              </div>
              <p className="mt-3 text-sm text-amber-700">{getTranslation(currentLanguage, 'hints.formSummary')}</p>
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

  // 通知状态
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const [showRestoredMessage, setShowRestoredMessage] = useState(false);
  const [showClearedMessage, setShowClearedMessage] = useState(false);
  
  /* 保存表单到本地存储 */
  const saveFormToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('travelPlannerForm', JSON.stringify(formData));
      localStorage.setItem('travelPlannerStep', currentStep.toString());
      
      // 显示保存成功提示
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 2000);
    }
  };

  /* 从本地存储恢复表单 */
  const restoreFormFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const savedForm = localStorage.getItem('travelPlannerForm');
      const savedStep = localStorage.getItem('travelPlannerStep');
      
      if (savedForm) {
        setFormData(JSON.parse(savedForm));
        if (savedStep) {
          setCurrentStep(parseInt(savedStep));
        }
        
        // 显示恢复成功提示
        setShowRestoredMessage(true);
        setTimeout(() => setShowRestoredMessage(false), 2000);
      }
    }
  };

  /* 清除本地存储的表单数据 */
  const clearLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('travelPlannerForm');
      localStorage.removeItem('travelPlannerStep');
      setFormData(initializeForm(currentLanguage));
      setCurrentStep(1);
      
      // 显示清除成功提示
      setShowClearedMessage(true);
      setTimeout(() => setShowClearedMessage(false), 2000);
    }
  };
  
  // 添加通知消息相关的翻译
  const translations = {
    en: {
      // 已有的翻译...
      hints: {
        // 已有的hints翻译...
        savedData: "Data saved successfully",
        restoredProgress: "Progress restored successfully",
        clearedData: "Data cleared successfully",
        submitSuccess: "Your travel plan has been submitted successfully! Redirecting to results..."
      },
      submitSuccess: "Submitted successfully"
    },
    zh: {
      // 已有的翻译...
      hints: {
        // 已有的hints翻译...
        savedData: "数据保存成功",
        restoredProgress: "进度恢复成功",
        clearedData: "数据清除成功",
        submitSuccess: "您的旅行计划已成功提交！正在跳转到结果页面..."
      },
      submitSuccess: "提交成功"
    },
    fr: {
      // 已有的翻译...
      hints: {
        // 已有的hints翻译...
        savedData: "Données enregistrées avec succès",
        restoredProgress: "Progression restaurée avec succès",
        clearedData: "Données effacées avec succès",
        submitSuccess: "Votre plan de voyage a été soumis avec succès ! Redirection vers les résultats..."
      },
      submitSuccess: "Soumis avec succès"
    },
    de: {
      // 已有的翻译...
      hints: {
        // 已有的hints翻译...
        savedData: "Daten erfolgreich gespeichert",
        restoredProgress: "Fortschritt erfolgreich wiederhergestellt",
        clearedData: "Daten erfolgreich gelöscht",
        submitSuccess: "Ihr Reiseplan wurde erfolgreich übermittelt! Weiterleitung zu den Ergebnissen..."
      },
      submitSuccess: "Erfolgreich eingereicht"
    },
    ja: {
      // 已有的翻译...
      hints: {
        // 已有的hints翻译...
        savedData: "データが正常に保存されました",
        restoredProgress: "進行状況が正常に復元されました",
        clearedData: "データが正常にクリアされました",
        submitSuccess: "旅行プランが正常に送信されました！結果ページにリダイレクトしています..."
      },
      submitSuccess: "送信に成功しました"
    },
    ko: {
      // 其他译文...
      hints: {
        travellerType: "여행에 가장 적합한 유형을 선택하세요",
        travellers: "여행 그룹의 인원 수를 입력하세요 (1-20명)",
        travelDates: "출발 및 귀국 날짜를 선택하세요",
        budget: "총 여행 예산을 추정하세요",
        routes: "추천 경로를 선택하거나 자신만의 경로를 맞춤 설정하세요",
        destinations: "방문하고 싶은 도시를 선택하려면 클릭하세요",
        travelStyle: "여행 선호도에 맞는 스타일을 선택하세요",
        pace: "하루 1-2개 명소 | 하루 3-5개 명소",
        accommodation: "여행 중 선호하는 숙박 유형을 선택하세요",
        spiciness: "매우 순한 맛 또는 약간 매운 맛 | 쓰촨, 후난식 등 매운 요리",
        foodTypes: "좋아하는 음식 유형을 선택하세요",
        diningEnv: "선호하는 식사 환경을 선택하세요",
        dietaryRestr: "식이 제한이나 요구 사항을 입력하세요",
        additionalReq: "여행 일정에 대한 특별한 요구 사항을 명시하세요",
        formSummary: "여행 계획 요약",
        savedData: "데이터가 성공적으로 저장되었습니다",
        restored: "진행 상황이 성공적으로 복원되었습니다",
        clearData: "데이터가 성공적으로 지워졌습니다",
        loading: "처리 중...",
        selectedCities: "최소 하나 선택",
        multiSelection: "다중 선택 가능",
        submittingData: "데이터 전송중",
        submissionError: "전송 오류",
        submitSuccess: "여행 계획이 성공적으로 제출되었습니다! 결과 페이지로 리디렉션 중..."
      },
      submitSuccess: "성공적으로 제출"
    },
    es: {
      // 其他译文...
      hints: {
        travellerType: "Elija el tipo que mejor se adapte a su viaje",
        travellers: "Ingrese el número de personas en su grupo de viaje (1-20)",
        travelDates: "Seleccione sus fechas de salida y regreso",
        budget: "Estime su presupuesto total de viaje",
        routes: "Elija una ruta recomendada o personalice la suya propia",
        destinations: "Haga clic para seleccionar las ciudades que desea visitar",
        travelStyle: "Elija un estilo que coincida con sus preferencias de viaje",
        pace: "1-2 atracciones por día | 3-5 atracciones por día",
        accommodation: "Seleccione su tipo de alojamiento preferido",
        spiciness: "Sin picante o picante suave | Cocina picante de Sichuan o Hunan",
        foodTypes: "Seleccione los tipos de alimentos que disfruta",
        diningEnv: "Elija su entorno de comedor preferido",
        dietaryRestr: "Ingrese cualquier restricción o requisito dietético",
        additionalReq: "Por favor, especifique cualquier requisito especial para su itinerario",
        formSummary: "Revise su plan de viaje antes de enviar",
        savedData: "Datos guardados con éxito",
        restoredProgress: "Progreso restaurado con éxito",
        clearedData: "Datos borrados con éxito",
        loading: "Procesando...",
        selectedCities: "Seleccione al menos uno",
        multiSelection: "Selección múltiple",
        submittingData: "Envío de Datos",
        submissionError: "Error de Envío",
        submitSuccess: "¡Su plan de viaje ha sido enviado con éxito! Redirigiendo a los resultados..."
      },
      submitSuccess: "Enviado con éxito"
    },
    ru: {
      // 其他译文...
      hints: {
        travellerType: "Выберите тип, который лучше всего соответствует вашему путешествию",
        travellers: "Введите количество людей в вашей туристической группе (1-20)",
        travelDates: "Выберите даты отъезда и возвращения",
        budget: "Оцените свой общий бюджет на путешествие",
        routes: "Выберите рекомендуемый маршрут или настройте свой собственный",
        destinations: "Нажмите, чтобы выбрать города, которые вы хотите посетить",
        travelStyle: "Выберите стиль, соответствующий вашим предпочтениям в путешествии",
        pace: "1-2 достопримечательности в день | 3-5 достопримечательностей в день",
        accommodation: "Выберите предпочитаемый тип жилья",
        spiciness: "Без острого или слегка острого | Острая кухня Сычуани и Хунани",
        foodTypes: "Выберите типы еды, которые вам нравятся",
        diningEnv: "Выберите предпочитаемую среду для приема пищи",
        dietaryRestr: "Введите любые ограничения в питании или требования",
        additionalReq: "Пожалуйста, укажите любые особые требования для вашего маршрута",
        formSummary: "Сводка Плана Путешествия",
        savedData: "Данные успешно сохранены",
        restored: "Прогресс успешно восстановлен",
        clearData: "Данные успешно очищены",
        loading: "Обработка...",
        selectedCities: "Выберите хотя бы один",
        multiSelection: "Множественный выбор",
        submittingData: "Отправка Данных",
        submissionError: "Ошибка Отправки",
        submitSuccess: "Ваш план путешествия успешно отправлен! Перенаправление к результатам..."
      },
      submitSuccess: "Успешно отправлено"
    }
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-china-red">{getTranslation(currentLanguage, 'questionnaire')}</h1>
      
      {/* 步骤指示器 */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`flex-1 ${i > 0 ? 'ml-2' : ''}`}
            >
              <div 
                className={`text-center rounded-lg p-2 transition-colors text-sm md:text-base cursor-pointer
                  ${currentStep === i + 1 ? 'bg-china-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-100'}`}
                onClick={() => goToStep(i + 1)}
              >
                {getTranslation(currentLanguage, step)}
              </div>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full mt-4">
          <div 
            className="h-2 bg-china-red rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* 表单内容 */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 relative">
        {/* 当前步骤内容 */}
        {renderStepContent(currentStep)}
        
        {/* 导航按钮 */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className={`px-6 py-2 rounded-lg border border-china-red text-china-red hover:bg-red-50 transition-colors ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentStep === 1}
          >
            {getTranslation(currentLanguage, 'previous')}
          </button>
          
          <div className="flex gap-2">
            {/* 数据管理操作 */}
            <div className="flex space-x-1">
              <button 
                onClick={saveFormToLocalStorage}
                className="px-2 py-2 rounded-lg bg-jade-green text-white hover:bg-green-700 transition-colors text-xs flex items-center"
                title={getTranslation(currentLanguage, 'saveData')}
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
              </button>
              
              <button 
                onClick={restoreFormFromLocalStorage}
                className="px-2 py-2 rounded-lg bg-china-gold text-white hover:bg-yellow-600 transition-colors text-xs flex items-center"
                title={getTranslation(currentLanguage, 'restoreData')}
              >
                <ArrowUturnLeftIcon className="w-4 h-4" />
              </button>
              
              <button 
                onClick={clearLocalStorage}
                className="px-2 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-colors text-xs flex items-center"
                title={getTranslation(currentLanguage, 'clearData')}
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
            
            {currentStep < steps.length ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 rounded-lg bg-china-red text-white hover:bg-red-700 transition-colors"
              >
                {getTranslation(currentLanguage, 'next')}
              </button>
            ) : (
              <button
                onClick={submitForm}
                className={`px-6 py-2 rounded-lg bg-china-red text-white hover:bg-red-700 transition-colors flex items-center ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {getTranslation(currentLanguage, 'hints.loading')}
                  </>
                ) : (
                  getTranslation(currentLanguage, 'submit')
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* 通知提示 */}
      {showSavedMessage && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>{currentLanguage === 'zh' ? '数据保存成功' : 'Data saved successfully'}</div>
          </div>
        </div>
      )}
      
      {showRestoredMessage && (
        <div className="fixed bottom-4 right-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>{currentLanguage === 'zh' ? '进度恢复成功' : 'Progress restored successfully'}</div>
          </div>
        </div>
      )}
      
      {showClearedMessage && (
        <div className="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <div>{currentLanguage === 'zh' ? '数据清除成功' : 'Data cleared successfully'}</div>
          </div>
        </div>
      )}
      
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>{currentLanguage === 'zh' ? '提交成功！' : 'Submitted successfully!'}</div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>{error}</div>
          </div>
        </div>
      )}
    </div>
  );
} 