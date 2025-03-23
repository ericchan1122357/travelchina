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
    spicy: 'Very Spicy',
    foundPreviousData: 'Found previously filled data',
    dataRestored: 'Your data has been restored',
    clearData: 'Clear saved data',
    selectTravellerType: 'Select the type that best matches your travel',
    enterTravellerCount: 'Enter the number of people in your travel group (1-20)',
    departureDateHint: 'Planned departure date',
    returnDateHint: 'Planned return date',
    budgetRangeHint: 'Select the budget range that meets your expectations',
    selectRouteHint: 'Choose a recommended route or customize your itinerary',
    selectCityHint: 'Click to select the cities you want to visit',
    selectAtLeastOne: 'Select at least one',
    travelStyleHint: 'Choose the style that best matches your travel preferences',
    paceSlowDescription: 'Visit 1-2 attractions per day',
    paceFastDescription: 'Visit 3-5 attractions per day',
    accommodationHint: 'Select your preferred accommodation type during the trip',
    spicyPreferenceHint: 'No spicy or mild spicy',
    verySpicyPreferenceHint: 'Sichuan, Hunan and other spicy cuisines',
    foodTypesHint: 'Select the types of food you like',
    multipleSelections: 'Multiple selections',
    diningEnvironmentHint: 'Choose your preferred dining environment',
    dietaryRestrictionsHint: 'Please enter any dietary restrictions or requirements',
    additionalRequestsHint: 'Please specify any special requirements for the trip here',
    travelSummary: 'Travel Plan Summary',
    travelTypeSummary: 'Travel Type',
    travellerCountSummary: 'Number of Travellers',
    departureDateSummary: 'Departure Date',
    returnDateSummary: 'Return Date',
    budgetSummary: 'Budget',
    destinationsSummary: 'Destinations',
    notSelected: 'Not selected',
    routeTypeSummary: 'Route Type',
    travelStyleSummary: 'Travel Style',
    accommodationSummary: 'Accommodation',
    foodTypesSummary: 'Food Types',
    diningEnvironmentSummary: 'Dining Environment',
    dietaryRestrictionsSummary: 'Dietary Restrictions',
    none: 'None',
    processing: 'Processing...'
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
    spicy: '非常辣',
    foundPreviousData: '发现之前填写的数据',
    dataRestored: '您的数据已恢复',
    clearData: '清除保存的数据',
    selectTravellerType: '选择最符合您此次旅行的类型',
    enterTravellerCount: '请输入旅行团队的人数 (1-20人)',
    departureDateHint: '计划出发的日期',
    returnDateHint: '计划返回的日期',
    budgetRangeHint: '选择符合您期望的预算范围',
    selectRouteHint: '选择一个推荐路线或自定义您的行程',
    selectCityHint: '点击选择您想要游览的城市',
    selectAtLeastOne: '至少选择一个',
    travelStyleHint: '选择与您的旅行喜好最匹配的风格',
    paceSlowDescription: '每天游览1-2个景点',
    paceFastDescription: '每天游览3-5个景点',
    accommodationHint: '选择您在旅行中偏好的住宿类型',
    spicyPreferenceHint: '不吃辣或微辣',
    verySpicyPreferenceHint: '川菜、湘菜等重辣美食',
    foodTypesHint: '选择您喜欢的食物类型',
    multipleSelections: '可多选',
    diningEnvironmentHint: '选择您偏好的用餐环境',
    dietaryRestrictionsHint: '请输入任何饮食方面的限制或需求',
    additionalRequestsHint: '对行程有任何特殊需求请在此说明',
    travelSummary: '旅行计划摘要',
    travelTypeSummary: '旅行类型',
    travellerCountSummary: '人数',
    departureDateSummary: '出发日期',
    returnDateSummary: '返回日期',
    budgetSummary: '预算',
    destinationsSummary: '目的地',
    notSelected: '未选择',
    routeTypeSummary: '路线类型',
    travelStyleSummary: '旅行风格',
    accommodationSummary: '住宿偏好',
    foodTypesSummary: '食物类型',
    diningEnvironmentSummary: '用餐环境',
    dietaryRestrictionsSummary: '饮食限制',
    none: '无',
    processing: '处理中...'
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
    travellerTypes: ['Solo', 'Couple', 'Famille', 'Amis', 'Affaires', 'Autre'],
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
    diningEnvironment: 'Environnement de Repas',
    diningEnvOptions: ['Restaurants Populaires Locaux', 'Restaurants Gastronomiques', 'Cuisine de Rue', 'Restaurants Thématiques', 'Repas Rapides'],
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
    fast: 'Rythme Soutenu',
    light: 'Très Doux',
    medium: 'Moyen',
    spicy: 'Très Épicé',
    foundPreviousData: 'Données précédentes trouvées',
    dataRestored: 'Nous avons restauré votre progression précédente',
    clearData: 'Effacer les données',
    selectTravellerType: 'Choisissez le type qui convient le mieux à votre voyage',
    enterTravellerCount: 'Veuillez entrer le nombre de voyageurs (1-20 personnes)',
    departureDateHint: 'Date de départ prévue',
    returnDateHint: 'Date de retour prévue',
    budgetRangeHint: 'Choisissez une gamme de budget qui correspond à vos attentes',
    selectRouteHint: 'Choisissez un itinéraire recommandé ou personnalisez votre voyage',
    selectCityHint: 'Cliquez pour sélectionner les villes que vous souhaitez visiter',
    selectAtLeastOne: 'Sélectionnez au moins un',
    travelStyleHint: 'Choisissez un style qui correspond à vos préférences de voyage',
    paceSlowDescription: '1-2 attractions par jour',
    paceFastDescription: '3-5 attractions par jour',
    accommodationHint: 'Choisissez votre type d\'hébergement préféré pendant le voyage',
    spicyPreferenceHint: 'Pas épicé ou légèrement épicé',
    verySpicyPreferenceHint: 'Cuisines épicées comme le Sichuan, le Hunan, etc.',
    foodTypesHint: 'Choisissez vos types d\'aliments préférés',
    multipleSelections: 'Sélections multiples',
    diningEnvironmentHint: 'Choisissez votre environnement de repas préféré',
    dietaryRestrictionsHint: 'Veuillez indiquer toute restriction ou exigence alimentaire',
    additionalRequestsHint: 'Veuillez préciser toute exigence particulière pour l\'itinéraire',
    travelSummary: 'Résumé du Plan de Voyage',
    travelTypeSummary: 'Type de Voyage',
    travellerCountSummary: 'Nombre de Voyageurs',
    departureDateSummary: 'Date de Départ',
    returnDateSummary: 'Date de Retour',
    budgetSummary: 'Budget',
    destinationsSummary: 'Destinations',
    notSelected: 'Non Sélectionné',
    routeTypeSummary: 'Type d\'Itinéraire',
    travelStyleSummary: 'Style de Voyage',
    accommodationSummary: 'Préférence d\'Hébergement',
    foodTypesSummary: 'Types d\'Aliments',
    diningEnvironmentSummary: 'Environnement de Repas',
    dietaryRestrictionsSummary: 'Restrictions Alimentaires',
    none: 'Aucune',
    processing: 'Traitement en cours...'
  },
  de: {
    title: 'Reiseplanung',
    backToHome: 'Zurück zur Startseite',
    createPlan: 'Erstellen Sie Ihren persönlichen Reiseplan',
    step1Title: 'Grundlegende Reiseinformationen',
    step2Title: 'Reiseziele',
    step3Title: 'Reisevorlieben',
    step4Title: 'Essenspräferenzen',
    step5Title: 'Besondere Anforderungen',
    travellerType: 'Reisetyp',
    travellerTypes: ['Alleinreisender', 'Paar', 'Familie', 'Freunde', 'Geschäftsreise', 'Andere'],
    travellers: 'Anzahl der Reisenden',
    travelDates: 'Reisedaten',
    departureDate: 'Abreisedatum',
    returnDate: 'Rückreisedatum',
    budget: 'Budgetbereich',
    budgetRanges: ['Wirtschaftlich (Unter €450)', 'Standard (€450-€900)', 'Premium (€900-€1350)', 'Luxus (€1350+)'],
    destinations: 'Reiseziele auswählen',
    suggestedRoutes: 'Vorgeschlagene Routen',
    routeTypes: ['Klassisch Peking-Shanghai-Guangzhou', 'Historische & Kulturelle Tour', 'Natur & Landschaft', 'Moderne Chinesische Städte', 'Kulinarische Reise'],
    preferences: 'Reisevorlieben',
    travelStyle: 'Reisestil',
    travelStyles: ['Entspannung', 'Kulturelle Erkundung', 'Gourmet-Tour', 'Naturlandschaften', 'Tiefgreifende Erfahrung'],
    travelPace: 'Reisetempo',
    accommodation: 'Unterkunftspräferenz',
    accommodationTypes: ['Budgethotels', 'Mittelklassehotels', 'Luxushotels', 'Charakteristische Pensionen', 'Hostels'],
    diningTitle: 'Essenspräferenzen',
    tastePreference: 'Geschmacksvorliebe',
    foodTypes: 'Lebensmittelarten',
    foodTypePref: ['Meeresfrüchte', 'Fleischgerichte', 'Vegetarisch', 'Nudeln', 'Reisbasiert'],
    diningEnvironment: 'Essensumgebung',
    diningEnvOptions: ['Lokale Beliebte Restaurants', 'Gehobene Gastronomie', 'Straßenessen', 'Themenrestaurants', 'Schnelle Mahlzeiten'],
    spiciness: 'Schärfegrad',
    dietaryRestrictions: 'Ernährungseinschränkungen',
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
    foundPreviousData: 'Zuvor ausgefüllte Daten gefunden',
    dataRestored: 'Ihre Daten wurden wiederhergestellt',
    clearData: 'Gespeicherte Daten löschen',
    selectTravellerType: 'Wählen Sie den Typ, der am besten zu Ihrer Reise passt',
    enterTravellerCount: 'Bitte geben Sie die Anzahl der Reisenden ein (1-20 Personen)',
    departureDateHint: 'Geplantes Abreisedatum',
    returnDateHint: 'Geplantes Rückkehrdatum',
    budgetRangeHint: 'Wählen Sie einen Budgetbereich, der Ihren Erwartungen entspricht',
    selectRouteHint: 'Wählen Sie eine empfohlene Route oder passen Sie Ihre Reiseroute an',
    selectCityHint: 'Klicken Sie, um die Städte auszuwählen, die Sie besuchen möchten',
    selectAtLeastOne: 'Mindestens eine auswählen',
    travelStyleHint: 'Wählen Sie einen Stil, der Ihren Reisepräferenzen entspricht',
    paceSlowDescription: '1-2 Sehenswürdigkeiten pro Tag besuchen',
    paceFastDescription: '3-5 Sehenswürdigkeiten pro Tag besuchen',
    accommodationHint: 'Wählen Sie Ihren bevorzugten Unterkunftstyp während der Reise',
    spicyPreferenceHint: 'Nicht scharf oder leicht scharf',
    verySpicyPreferenceHint: 'Sichuan-, Hunan- und andere scharfe Küchen',
    foodTypesHint: 'Wählen Sie Ihre Lieblingslebensmittelarten',
    multipleSelections: 'Mehrfachauswahl möglich',
    diningEnvironmentHint: 'Wählen Sie Ihre bevorzugte Speiseumgebung',
    dietaryRestrictionsHint: 'Bitte geben Sie alle Ernährungseinschränkungen oder -anforderungen ein',
    additionalRequestsHint: 'Bitte geben Sie hier besondere Anforderungen für die Reise an',
    travelSummary: 'Reiseplan Zusammenfassung',
    travelTypeSummary: 'Reisetyp',
    travellerCountSummary: 'Anzahl der Reisenden',
    departureDateSummary: 'Abreisedatum',
    returnDateSummary: 'Rückkehrdatum',
    budgetSummary: 'Budget',
    destinationsSummary: 'Reiseziele',
    notSelected: 'Nicht ausgewählt',
    routeTypeSummary: 'Routentyp',
    travelStyleSummary: 'Reisestil',
    accommodationSummary: 'Unterkunftspräferenz',
    foodTypesSummary: 'Essenstypen',
    diningEnvironmentSummary: 'Speiseumgebung',
    dietaryRestrictionsSummary: 'Ernährungseinschränkungen',
    none: 'Keine',
    processing: 'Wird bearbeitet...'
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
    suggestedRoutes: '提案ルート',
    routeTypes: ['クラシック北京-上海-広州', '歴史的・文化的ツアー', '自然と風景', '現代中国の都市', 'グルメツアー'],
    preferences: '旅行の好み',
    travelStyle: '旅行スタイル',
    travelStyles: ['リラクゼーション', '文化探訪', 'グルメツアー', '自然風景', '深い体験'],
    travelPace: '旅行ペース',
    accommodation: '宿泊施設の好み',
    accommodationTypes: ['エコノミーホテル', 'ミッドレンジホテル', '高級ホテル', '特色ある民宿', 'ユースホステル'],
    diningTitle: '食事の好み',
    tastePreference: '味の好み',
    foodTypes: '食物タイプ',
    foodTypePref: ['シーフード', '肉料理', 'ベジタリアン', '麺類', '米ベース'],
    diningEnvironment: '食事環境',
    diningEnvOptions: ['ローカル人気レストラン', '高級レストラン', 'ストリートフード', 'テーマレストラン', 'クイックミール'],
    spiciness: '辛さの好み',
    dietaryRestrictions: '食事制限',
    additionalRequests: '追加リクエスト',
    requestsPlaceholder: '特別な要件や期待をお知らせください...',
    nextStep: '次のステップ',
    prevStep: '前へ',
    generatePlan: '旅行プランを生成',
    footer: '© 2023 中国旅行ガイド. 全著作権所有.',
    cities: ['北京', '上海', '西安', '成都', '杭州', '桂林', '広州', '深セン'],
    slow: 'スローで落ち着いた',
    balanced: 'バランスのとれた',
    fast: '速いペース',
    light: '非常にマイルド',
    medium: '中程度',
    spicy: '非常に辛い',
    foundPreviousData: '以前に入力されたデータを見つけました',
    dataRestored: 'データが復元されました',
    clearData: '保存されたデータをクリア',
    selectTravellerType: 'あなたの旅行タイプに最も適したものを選択してください',
    enterTravellerCount: '旅行グループの人数を入力してください（1〜20人）',
    departureDateHint: '出発予定日',
    returnDateHint: '帰国予定日',
    budgetRangeHint: 'ご希望の予算範囲を選択してください',
    selectRouteHint: 'おすすめルートを選択するか、独自の旅程をカスタマイズしてください',
    selectCityHint: '訪問したい都市をクリックして選択してください',
    selectAtLeastOne: '少なくとも1つ選択',
    travelStyleHint: 'あなたの旅行の好みに合ったスタイルを選択してください',
    paceSlowDescription: '1日に1〜2か所の観光スポット',
    paceFastDescription: '1日に3〜5か所の観光スポット',
    accommodationHint: '旅行中に希望する宿泊タイプを選択してください',
    spicyPreferenceHint: '辛くないまたは少し辛い',
    verySpicyPreferenceHint: '四川料理、湖南料理などの辛い料理',
    foodTypesHint: 'お好みの食べ物の種類を選択してください',
    multipleSelections: '複数選択可能',
    diningEnvironmentHint: '希望する食事環境を選択してください',
    dietaryRestrictionsHint: '食事制限や要件を入力してください',
    additionalRequestsHint: '旅程に関する特別な要件を指定してください',
    travelSummary: '旅行計画の概要',
    travelTypeSummary: '旅行タイプ',
    travellerCountSummary: '人数',
    departureDateSummary: '出発日',
    returnDateSummary: '帰国日',
    budgetSummary: '予算',
    destinationsSummary: '目的地',
    notSelected: '選択されていません',
    routeTypeSummary: 'ルートタイプ',
    travelStyleSummary: '旅行スタイル',
    accommodationSummary: '宿泊施設の好み',
    foodTypesSummary: '食物タイプ',
    diningEnvironmentSummary: '食事環境',
    dietaryRestrictionsSummary: '食事制限',
    none: 'なし',
    processing: '処理中...'
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
    routeTypes: ['클래식 베이징-상하이-광저우', '역사 및 문화 투어', '자연과 풍경', '현대 중국 도시', '음식 여행'],
    preferences: '여행 선호도',
    travelStyle: '여행 스타일',
    travelStyles: ['휴식', '문화 탐험', '음식 여행', '자연 경관', '심층 경험'],
    travelPace: '여행 속도',
    accommodation: '숙박 선호도',
    accommodationTypes: ['이코노미 호텔', '중급 호텔', '럭셔리 호텔', '특색 있는 민박', '호스텔'],
    diningTitle: '식사 선호도',
    tastePreference: '맛 선호도',
    foodTypes: '음식 유형',
    foodTypePref: ['해산물', '고기 요리', '채식', '국수', '쌀 기반'],
    diningEnvironment: '식사 환경',
    diningEnvOptions: ['현지 인기 레스토랑', '고급 레스토랑', '길거리 음식', '테마 레스토랑', '간편 식사'],
    spiciness: '매운맛 선호도',
    dietaryRestrictions: '식이 제한',
    additionalRequests: '추가 요청',
    requestsPlaceholder: '특별한 요구 사항이나 기대를 알려주세요...',
    nextStep: '다음 단계',
    prevStep: '이전',
    generatePlan: '여행 계획 생성',
    footer: '© 2023 중국 여행 가이드. 모든 권리 보유.',
    cities: ['베이징', '상하이', '시안', '청두', '항저우', '구이린', '광저우', '선전'],
    slow: '느리고 여유로움',
    balanced: '균형 잡힌',
    fast: '빠른 속도',
    light: '매우 순한',
    medium: '중간',
    spicy: '매우 매운',
    foundPreviousData: '이전에 입력한 데이터를 찾았습니다',
    dataRestored: '데이터가 복원되었습니다',
    clearData: '저장된 데이터 지우기',
    selectTravellerType: '여행에 가장 적합한 유형을 선택하세요',
    enterTravellerCount: '여행 그룹의 인원 수를 입력하세요(1-20명)',
    departureDateHint: '계획된 출발 날짜',
    returnDateHint: '계획된 귀국 날짜',
    budgetRangeHint: '원하는 예산 범위를 선택하세요',
    selectRouteHint: '추천 경로를 선택하거나 여행 일정을 맞춤 설정하세요',
    selectCityHint: '방문하고 싶은 도시를 선택하려면 클릭하세요',
    selectAtLeastOne: '최소 하나 선택',
    travelStyleHint: '여행 선호도와 가장 일치하는 스타일을 선택하세요',
    paceSlowDescription: '하루에 1-2개 명소',
    paceFastDescription: '하루에 3-5개 명소',
    accommodationHint: '여행 중 선호하는 숙박 유형을 선택하세요',
    spicyPreferenceHint: '맵지 않거나 약간 매운맛',
    verySpicyPreferenceHint: '쓰촨, 후난 등의 매운 요리',
    foodTypesHint: '좋아하는 음식 유형을 선택하세요',
    multipleSelections: '다중 선택 가능',
    diningEnvironmentHint: '선호하는 식사 환경을 선택하세요',
    dietaryRestrictionsHint: '식이 제한이나 요구 사항을 입력하세요',
    additionalRequestsHint: '여행 일정에 대한 특별한 요구 사항을 지정하세요',
    travelSummary: '여행 계획 요약',
    travelTypeSummary: '여행 유형',
    travellerCountSummary: '여행자 수',
    departureDateSummary: '출발 날짜',
    returnDateSummary: '귀국 날짜',
    budgetSummary: '예산',
    destinationsSummary: '목적지',
    notSelected: '선택되지 않음',
    routeTypeSummary: '경로 유형',
    travelStyleSummary: '여행 스타일',
    accommodationSummary: '숙박 선호도',
    foodTypesSummary: '음식 유형',
    diningEnvironmentSummary: '식사 환경',
    dietaryRestrictionsSummary: '식이 제한',
    none: '없음',
    processing: '처리 중...'
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
    routeTypes: ['Clásico Pekín-Shanghái-Guangzhou', 'Tour Histórico y Cultural', 'Naturaleza y Paisajes', 'Ciudades Chinas Modernas', 'Viaje Gastronómico'],
    preferences: 'Preferencias de Viaje',
    travelStyle: 'Estilo de Viaje',
    travelStyles: ['Relajación', 'Exploración Cultural', 'Tour Gastronómico', 'Paisajes Naturales', 'Experiencia Profunda'],
    travelPace: 'Ritmo de Viaje',
    accommodation: 'Preferencia de Alojamiento',
    accommodationTypes: ['Hoteles Económicos', 'Hoteles de Gama Media', 'Hoteles de Lujo', 'Casas Rurales Características', 'Albergues'],
    diningTitle: 'Preferencias Culinarias',
    tastePreference: 'Preferencia de Sabor',
    foodTypes: 'Tipos de Alimentos',
    foodTypePref: ['Mariscos', 'Platos de Carne', 'Vegetariano', 'Fideos', 'Base de Arroz'],
    diningEnvironment: 'Entorno de Comida',
    diningEnvOptions: ['Restaurantes Populares Locales', 'Restaurantes de Alta Cocina', 'Comida Callejera', 'Restaurantes Temáticos', 'Comidas Rápidas'],
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
    fast: 'Ritmo Acelerado',
    light: 'Muy Suave',
    medium: 'Medio',
    spicy: 'Muy Picante',
    foundPreviousData: 'Datos anteriores encontrados',
    dataRestored: 'Hemos restaurado su progreso anterior',
    clearData: 'Borrar datos',
    selectTravellerType: 'Elija el tipo que mejor se adapte a su viaje',
    enterTravellerCount: 'Por favor, introduzca el número de viajeros (1-20 personas)',
    departureDateHint: 'Fecha de salida prevista',
    returnDateHint: 'Fecha de regreso prevista',
    budgetRangeHint: 'Elija un rango de presupuesto que se ajuste a sus expectativas',
    selectRouteHint: 'Elija una ruta recomendada o personalice su itinerario',
    selectCityHint: 'Haga clic para seleccionar las ciudades que desea visitar',
    selectAtLeastOne: 'Seleccione al menos uno',
    travelStyleHint: 'Elija un estilo que coincida con sus preferencias de viaje',
    paceSlowDescription: '1-2 atracciones por día',
    paceFastDescription: '3-5 atracciones por día',
    accommodationHint: 'Elija su tipo de alojamiento preferido durante el viaje',
    spicyPreferenceHint: 'No picante o ligeramente picante',
    verySpicyPreferenceHint: 'Cocinas picantes como Sichuan, Hunan, etc.',
    foodTypesHint: 'Elija sus tipos de alimentos favoritos',
    multipleSelections: 'Selecciones múltiples',
    diningEnvironmentHint: 'Elija su entorno de comida preferido',
    dietaryRestrictionsHint: 'Por favor, introduzca cualquier restricción o requisito dietético',
    additionalRequestsHint: 'Por favor, especifique cualquier requisito especial para el itinerario',
    travelSummary: 'Resumen del Plan de Viaje',
    travelTypeSummary: 'Tipo de Viaje',
    travellerCountSummary: 'Número de Viajeros',
    departureDateSummary: 'Fecha de Salida',
    returnDateSummary: 'Fecha de Regreso',
    budgetSummary: 'Presupuesto',
    destinationsSummary: 'Destinos',
    notSelected: 'No Seleccionado',
    routeTypeSummary: 'Tipo de Ruta',
    travelStyleSummary: 'Estilo de Viaje',
    accommodationSummary: 'Preferencia de Alojamiento',
    foodTypesSummary: 'Tipos de Alimentos',
    diningEnvironmentSummary: 'Entorno de Comida',
    dietaryRestrictionsSummary: 'Restricciones Dietéticas',
    none: 'Ninguna',
    processing: 'Procesando...'
  },
  ru: {
    title: 'Планирование Путешествия',
    backToHome: 'Вернуться на Главную',
    createPlan: 'Создайте Свой Персонализированный План Путешествия',
    step1Title: 'Основная Информация о Путешествии',
    step2Title: 'Направления',
    step3Title: 'Предпочтения в Путешествии',
    step4Title: 'Предпочтения в Питании',
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
    diningTitle: 'Предпочтения в Питании',
    tastePreference: 'Предпочтения Вкуса',
    foodTypes: 'Типы Еды',
    foodTypePref: ['Морепродукты', 'Мясные Блюда', 'Вегетарианская', 'Лапша', 'На Основе Риса'],
    diningEnvironment: 'Среда Питания',
    diningEnvOptions: ['Популярные Местные Рестораны', 'Рестораны Высокой Кухни', 'Уличная Еда', 'Тематические Рестораны', 'Быстрые Приемы Пищи'],
    spiciness: 'Предпочтение Остроты',
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
    foundPreviousData: 'Найдены предыдущие данные',
    dataRestored: 'Мы восстановили ваш предыдущий прогресс',
    clearData: 'Очистить данные',
    selectTravellerType: 'Выберите тип, который лучше всего подходит для вашего путешествия',
    enterTravellerCount: 'Пожалуйста, введите количество путешественников (1-20 человек)',
    departureDateHint: 'Планируемая дата отправления',
    returnDateHint: 'Планируемая дата возвращения',
    budgetRangeHint: 'Выберите диапазон бюджета, соответствующий вашим ожиданиям',
    selectRouteHint: 'Выберите рекомендуемый маршрут или настройте свой маршрут',
    selectCityHint: 'Нажмите, чтобы выбрать города, которые вы хотите посетить',
    selectAtLeastOne: 'Выберите хотя бы один',
    travelStyleHint: 'Выберите стиль, соответствующий вашим предпочтениям в путешествии',
    paceSlowDescription: '1-2 достопримечательности в день',
    paceFastDescription: '3-5 достопримечательностей в день',
    accommodationHint: 'Выберите предпочитаемый тип размещения во время путешествия',
    spicyPreferenceHint: 'Неострая или слегка острая',
    verySpicyPreferenceHint: 'Острые кухни, такие как сычуаньская, хунаньская и т.д.',
    foodTypesHint: 'Выберите ваши любимые типы еды',
    multipleSelections: 'Возможен множественный выбор',
    diningEnvironmentHint: 'Выберите предпочтительную среду для приема пищи',
    dietaryRestrictionsHint: 'Пожалуйста, укажите любые диетические ограничения или требования',
    additionalRequestsHint: 'Пожалуйста, укажите любые особые требования к маршруту',
    travelSummary: 'Сводка Плана Путешествия',
    travelTypeSummary: 'Тип Путешествия',
    travellerCountSummary: 'Количество Путешественников',
    departureDateSummary: 'Дата Отправления',
    returnDateSummary: 'Дата Возвращения',
    budgetSummary: 'Бюджет',
    destinationsSummary: 'Направления',
    notSelected: 'Не Выбрано',
    routeTypeSummary: 'Тип Маршрута',
    travelStyleSummary: 'Стиль Путешествия',
    accommodationSummary: 'Предпочтения по Размещению',
    foodTypesSummary: 'Типы Еды',
    diningEnvironmentSummary: 'Среда Питания',
    dietaryRestrictionsSummary: 'Диетические Ограничения',
    none: 'Нет',
    processing: 'Обработка...'
  }
};

// 默认使用英文，如果找不到对应的语言
const getTranslation = (language: Language, key: string): any => {
  try {
    // 首先检查该语言是否存在
    if (!translations[language]) {
      console.warn(`Language '${language}' not supported, falling back to English`);
      language = 'en';
    }
    
    // 然后检查该语言下是否有对应的key
    if (translations[language][key] === undefined) {
      console.warn(`Key '${key}' not found in language '${language}', falling back to English`);
      return translations.en[key];
    }
    
    return translations[language][key];
  } catch (error) {
    console.error(`Error in getTranslation for language '${language}' and key '${key}':`, error);
    
    // 确保至少返回一个安全的默认值
    if (key.includes('Types') || key.includes('cities') || key.includes('Ranges') || key.includes('Options')) {
      return [];  // 返回空数组给数组类型的翻译
    }
    return '';  // 返回空字符串给字符串类型的翻译
  }
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
      
      // 设置语言并确保它是受支持的语言
      const supportedLanguage = translations[currentLanguage] ? currentLanguage : 'en';
      setT(translations[supportedLanguage]);
      
      // 使用当前语言初始化表单
      const defaultFormData = {
        travellerType: getTranslation(supportedLanguage, 'travellerTypes')[0] || '',
        travellers: 2,
        departureDate: '',
        returnDate: '',
        budget: getTranslation(supportedLanguage, 'budgetRanges')[0] || '',
        selectedDestinations: [],
        selectedRoute: getTranslation(supportedLanguage, 'routeTypes')[0] || '',
        travelStyle: getTranslation(supportedLanguage, 'travelStyles')[0] || '',
        travelPace: 50,
        accommodation: getTranslation(supportedLanguage, 'accommodationTypes')[0] || '',
        tastePreference: 50,
        foodTypes: [],
        diningEnvironment: getTranslation(supportedLanguage, 'diningEnvOptions')[0] || '',
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
    try {
      switch (step) {
        case 1: return getTranslation(currentLanguage, 'step1Title') || 'Step 1';
        case 2: return getTranslation(currentLanguage, 'step2Title') || 'Step 2';
        case 3: return getTranslation(currentLanguage, 'step3Title') || 'Step 3';
        case 4: return getTranslation(currentLanguage, 'step4Title') || 'Step 4';
        case 5: return getTranslation(currentLanguage, 'step5Title') || 'Step 5';
        default: return `Step ${step}`;
      }
    } catch (error) {
      console.error(`Error rendering step title for step ${step}:`, error);
      return `Step ${step}`;
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
    try {
      switch (currentStep) {
        case 1:
          return (
            <div className="space-y-6">
              {/* 旅行者类型 */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-china-red" />
                  {getTranslation(currentLanguage, 'travellerType') || 'Traveller Type'}
                </label>
                <select 
                  name="travellerType"
                  value={formData.travellerType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
                >
                  {(getTranslation(currentLanguage, 'travellerTypes') || []).map((type: string, index: number) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'selectTravellerType')}</p>
              </div>

              {/* 旅行人数 */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-china-red" />
                  {getTranslation(currentLanguage, 'travellers') || 'Number of Travellers'}
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
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'enterTravellerCount')}</p>
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
                  <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'departureDateHint')}</p>
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
                  <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'returnDateHint')}</p>
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
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'budgetRangeHint')}</p>
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
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'selectRouteHint')}</p>
              </div>

              {/* 目的地选择 */}
              <div>
                <label className="block text-gray-700 mb-4 font-medium flex items-center">
                  <GlobeAsiaAustraliaIcon className="w-5 h-5 mr-2 text-china-red" />
                  {t.destinations}
                  <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    <QuestionMarkCircleIcon className="w-3 h-3 mr-1" />
                    {getTranslation(currentLanguage, 'selectAtLeastOne')}
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
                <p className="mt-2 text-sm text-gray-500">{getTranslation(currentLanguage, 'selectCityHint')}</p>
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
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'travelStyleHint')}</p>
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
                  <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'paceSlowDescription')}</p>
                  <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'paceFastDescription')}</p>
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
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'accommodationHint')}</p>
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
                  <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'spicyPreferenceHint')}</p>
                  <p className="text-xs text-gray-500">{getTranslation(currentLanguage, 'verySpicyPreferenceHint')}</p>
                </div>
              </div>

              {/* 食物类型 */}
              <div>
                <label className="block text-gray-700 mb-4 font-medium flex items-center">
                  <FireIcon className="w-5 h-5 mr-2 text-china-red" />
                  {t.foodTypes}
                  <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    <QuestionMarkCircleIcon className="w-3 h-3 mr-1" />
                    {getTranslation(currentLanguage, 'multipleSelections')}
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
                <p className="mt-2 text-sm text-gray-500">{getTranslation(currentLanguage, 'foodTypesHint')}</p>
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
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'diningEnvironmentHint')}</p>
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
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'dietaryRestrictionsHint')}</p>
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
                  {getTranslation(currentLanguage, 'additionalRequests') || 'Additional Requests'}
                </label>
                <textarea 
                  name="additionalRequests"
                  value={formData.additionalRequests}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-red-200 focus:border-china-red transition-colors"
                  placeholder={getTranslation(currentLanguage, 'requestsPlaceholder') || 'Please tell us any special requirements...'}
                ></textarea>
                <p className="mt-1 text-sm text-gray-500">{getTranslation(currentLanguage, 'additionalRequestsHint')}</p>
              </div>

              {/* 显示表单摘要 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
                  <FaceSmileIcon className="w-5 h-5 mr-2 text-china-red" />
                  {getTranslation(currentLanguage, 'travelSummary')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'travelTypeSummary')}:</span> {formData.travellerType}</div>
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'travellerCountSummary')}:</span> {formData.travellers}</div>
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'departureDateSummary')}:</span> {formData.departureDate}</div>
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'returnDateSummary')}:</span> {formData.returnDate}</div>
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'budgetSummary')}:</span> {formData.budget}</div>
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'destinationsSummary')}:</span> {formData.selectedDestinations.length > 0 ? formData.selectedDestinations.join(', ') : getTranslation(currentLanguage, 'notSelected')}</div>
                  <div className="col-span-2"><span className="font-medium">{getTranslation(currentLanguage, 'routeTypeSummary')}:</span> {formData.selectedRoute}</div>
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'travelStyleSummary')}:</span> {formData.travelStyle}</div>
                  <div><span className="font-medium">{getTranslation(currentLanguage, 'accommodationSummary')}:</span> {formData.accommodation}</div>
                  <div className="col-span-2"><span className="font-medium">{getTranslation(currentLanguage, 'foodTypesSummary')}:</span> {formData.foodTypes.length > 0 ? formData.foodTypes.join(', ') : getTranslation(currentLanguage, 'notSelected')}</div>
                  <div className="col-span-2"><span className="font-medium">{getTranslation(currentLanguage, 'diningEnvironmentSummary')}:</span> {formData.diningEnvironment}</div>
                  <div className="col-span-2"><span className="font-medium">{getTranslation(currentLanguage, 'dietaryRestrictionsSummary')}:</span> {formData.dietaryRestrictions || getTranslation(currentLanguage, 'none')}</div>
                </div>
              </div>
            </div>
          );
        
        default:
          return null;
      }
    } catch (error) {
      console.error(`Error rendering step content for step ${currentStep}:`, error);
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

  // 当语言变化时重新加载翻译
  useEffect(() => {
    console.log('Language changed to:', currentLanguage);
    
    // 使用最新的翻译
    if (translations[currentLanguage]) {
      setT(translations[currentLanguage]);
    } else {
      console.warn(`No translations found for language: ${currentLanguage}, using English as fallback`);
      setT(translations.en);
    }
    
    // 刷新表单显示
    setErrors({});
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-china-red text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold">{getTranslation(currentLanguage, 'title') || 'Travel Planning'}</h1>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {getTranslation(currentLanguage, 'createPlan') || 'Create Your Personalized Travel Plan'}
          </h2>
          
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
                  <p className="text-blue-800 font-medium">{getTranslation(currentLanguage, 'foundPreviousData') || 'Found previously filled data'}</p>
                  <p className="text-sm text-blue-600">{getTranslation(currentLanguage, 'dataRestored') || 'Your data has been restored'}</p>
                </div>
                <button 
                  onClick={clearFormData}
                  className="px-3 py-1 bg-white text-blue-700 rounded border border-blue-300 text-sm hover:bg-blue-100 transition-colors"
                >
                  {getTranslation(currentLanguage, 'clearData') || 'Clear saved data'}
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
              {getTranslation(currentLanguage, 'prevStep') || 'Previous'}
            </button>
            
            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="group relative inline-flex items-center bg-china-red text-white px-6 py-2 rounded-lg 
                         hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-out"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center">
                  {getTranslation(currentLanguage, 'nextStep') || 'Next Step'}
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
                      {getTranslation(currentLanguage, 'processing')}
                    </>
                  ) : (
                    <>
                      {getTranslation(currentLanguage, 'generatePlan') || 'Generate Travel Plan'}
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
          <p>{getTranslation(currentLanguage, 'footer') || '© 2023 China Travel Guide. All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
} 