export type Language = 'zh' | 'en' | 'fr' | 'de' | 'ja' | 'ko' | 'es' | 'ru';

export interface TranslationValue {
  // 错误相关
  'error.notFound': string;
  'error.pageNotFound': string;
  'error.guideNotFound': string;

  // 基础键
  destinations: string;
  stories: string;
  guides: string;
  planner: string;
  viewAllDestinations: string;
  heroTitle: string;
  heroSubtitle: string;
  startPlanning: string;
  destinationsTitle: string;
  destinationDescription: string;
  destinationActivities: string;
  destinationSeason: string;
  storiesTitle: string;
  readMore: string;
  storyAuthor: string;
  storyDestination: string;
  storyDate: string;
  guidesTitle: string;
  guideCategory: string;
  guideContent: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaStats: string;
  footerAbout: string;
  footerContact: string;
  footerPrivacy: string;
  footerTerms: string;
  footerDescription: string;
  skipToContent: string;
  scrollLeft: string;
  scrollRight: string;

  // 季节相关
  'season.spring': string;
  'season.summer': string;
  'season.autumn': string;
  'season.winter': string;

  // 导航相关
  'nav.home': string;
  'nav.back': string;
  'nav.destinations': string;
  'nav.guides': string;
  'nav.stories': string;
  'nav.planner': string;
  'nav.community': string;
  'nav.login': string;
  'nav.signup': string;

  // 主要内容
  'main.title': string;
  'main.subtitle': string;
  'main.cta.start': string;
  'main.cta.learn': string;
  'value.1.title': string;
  'value.1.desc': string;
  'value.2.title': string;
  'value.2.desc': string;
  'value.3.title': string;
  'value.3.desc': string;
  'main.features.title': string;
  'main.features.description': string;
  'main.testimonials.title': string;
  'main.testimonials.description': string;
  'main.partners.title': string;
  'main.partners.description': string;

  // 价格相关
  'pricing.free.title': string;
  'pricing.free.description': string;
  'pricing.premium.title': string;
  'pricing.premium.description': string;
  'pricing.advanced.title': string;
  'pricing.advanced.description': string;
  'pricing.compare': string;
  'pricing.features': string;
  'pricing.cta.upgrade': string;
  'pricing.cta.trial': string;
  'pricing.discount.firstTime': string;
  'pricing.discount.seasonal': string;

  // 餐饮基础键
  'planner.dining.notSpicy': string;
  'planner.dining.medium': string;
  'planner.dining.verySpicy': string;
  'planner.dining.types.seafood': string;
  'planner.dining.types.meat': string;
  'planner.dining.types.vegetarian': string;
  'planner.dining.types.noodles': string;
  'planner.dining.types.rice': string;
  'planner.dining.styles.street': string;
  'planner.dining.styles.local': string;
  'planner.dining.styles.fine': string;
  'planner.dining.styles.theme': string;
  'planner.dining.adventurous': string;
  'planner.dining.adventurous.description': string;

  // 动态键支持
  [key: `story.${number}.title`]: string;
  [key: `story.${number}.description`]: string;
  [key: `story.${number}.destination`]: string;
  [key: `guide.${number}.title`]: string;
  [key: `guide.${number}.description`]: string;
  [key: `guide.${number}.category`]: string;
  [key: `destination.${number}.name`]: string;
  [key: `destination.${number}.description`]: string;
  [key: `destination.${number}.activities.${string}`]: string;
  [key: `planner.destinations.route${number}`]: string;
  [key: `planner.destinations.route${number}.description`]: string;
  [key: `planner.destinations.cities.${string}`]: string;
  [key: `planner.interests.${string}`]: string;
  [key: `planner.accommodation.${string}`]: string;
  [key: `planner.dining.${string}`]: string;
  [key: `planner.dining.spiciness.${string}`]: string;
  [key: `planner.dining.types.${string}`]: string;
  [key: `planner.dining.styles.${string}`]: string;
  [key: `planner.dining.conservative.${string}`]: string;
  [key: `planner.dining.moderate.${string}`]: string;
  [key: `planner.dining.adventurous.${string}`]: string;
  'planner.error.general': string;

  // 规划器基础键
  'planner.title': string;
  'planner.subtitle': string;
  'planner.progress': string;
  'planner.comingSoon': string;
  'planner.back': string;
  'planner.next': string;
  'planner.submit': string;
  'planner.finish': string;
  'planner.loading': string;
  'planner.step': string;
  'planner.nextStep': string;
  'planner.step1': string;
  'planner.step2': string;
  'planner.step3': string;
  'planner.step4': string;

  // 规划器节奏
  'planner.pace.title': string;
  'planner.pace.relaxed': string;
  'planner.pace.balanced': string;
  'planner.pace.intensive': string;

  // 规划器基本信息
  'planner.basicInfo.travelDates': string;
  'planner.basicInfo.startDate': string;
  'planner.basicInfo.endDate': string;
  'planner.basicInfo.travelType': string;
  'planner.basicInfo.travelTypes.solo': string;
  'planner.basicInfo.travelTypes.couple': string;
  'planner.basicInfo.travelTypes.family': string;
  'planner.basicInfo.travelTypes.friends': string;
  'planner.basicInfo.budget': string;
  'planner.basicInfo.travelDuration': string;
  'planner.basicInfo.travelBudget': string;

  // 规划器特殊需求
  'planner.special.accessibility.title': string;
  'planner.special.accessibility.wheelchair': string;
  'planner.special.accessibility.elevator': string;
  'planner.special.accessibility.groundFloor': string;

  'planner.special.medical.title': string;
  'planner.special.medical.firstAid': string;
  'planner.special.medical.hospitalNearby': string;
  'planner.special.medical.medicineStorage': string;

  'planner.special.dietary.title': string;
  'planner.special.dietary.halal': string;
  'planner.special.dietary.kosher': string;
  'planner.special.dietary.allergies': string;
  'planner.special.dietary.allergy.peanuts': string;
  'planner.special.dietary.allergy.seafood': string;
  'planner.special.dietary.allergy.dairy': string;
  'planner.special.dietary.allergy.eggs': string;
  'planner.special.dietary.allergy.gluten': string;
  'planner.special.dietary.allergy.soy': string;

  'planner.special.other.title': string;
  'planner.special.other.placeholder': string;

  // 规划器计划详情
  'planner.plan.duration': string;
  'planner.plan.days': string;
  'planner.plan.budget': string;
  'planner.plan.day': string;
  'planner.plan.accommodation': string;
  'planner.plan.activities': string;
  'planner.plan.hours': string;
  'planner.plan.meals': string;
  'planner.plan.breakfast': string;
  'planner.plan.lunch': string;
  'planner.plan.dinner': string;
  'planner.plan.specialNotes': string;

  // 规划器目的地
  'planner.destinations.recommendedRoutes': string;
  'planner.destinations.selectCities': string;

  // 社区相关
  'community.title': string;
  'community.description': string;
  'community.qa.title': string;
  'community.qa.askQuestion': string;
  'community.qa.myQuestions': string;
  'community.qa.popular': string;
  'community.qa.unanswered': string;
  'community.rating.title': string;
  'community.rating.overall': string;
  'community.rating.accuracy': string;
  'community.rating.value': string;
  'community.rating.usefulness': string;
  'community.guides.title': string;
  'community.guides.connect': string;
  'community.guides.search': string;
  'community.guides.book': string;

  // Why China 部分
  'why.china.title': string;
  'why.china.culture.title': string;
  'why.china.culture.desc': string;
  'why.china.landscapes.title': string;
  'why.china.landscapes.desc': string;
  'why.china.accessibility.title': string;
  'why.china.accessibility.desc': string;
  
  // Why Us 部分
  'why.us.title': string;
  'why.us.personalization.title': string;
  'why.us.personalization.desc': string;
  'why.us.data.title': string;
  'why.us.data.desc': string;
  'why.us.worryfree.title': string;
  'why.us.worryfree.desc': string;

  // 北京详情页
  'beijing.title': string;
  'beijing.subtitle': string;
  'beijing.overview': string;
  'beijing.basicInfo.title': string;
  'beijing.basicInfo.bestSeason.title': string;
  'beijing.basicInfo.bestSeason.spring': string;
  'beijing.basicInfo.bestSeason.autumn': string;
  'beijing.basicInfo.climate.title': string;
  'beijing.basicInfo.climate.spring': string;
  'beijing.basicInfo.climate.summer': string;
  'beijing.basicInfo.climate.autumn': string;
  'beijing.basicInfo.climate.winter': string;
  'beijing.basicInfo.transport.title': string;
  'beijing.basicInfo.transport.subway': string;
  'beijing.basicInfo.transport.bus': string;
  'beijing.basicInfo.transport.taxi': string;
  'beijing.basicInfo.transport.bike': string;
  'beijing.culture.title': string;
  'beijing.culture.history.title': string;
  'beijing.culture.history.ancient': string;
  'beijing.culture.history.yuan': string;
  'beijing.culture.history.ming': string;
  'beijing.culture.history.modern': string;
  'beijing.culture.features.title': string;
  'beijing.culture.features.royal': string;
  'beijing.culture.features.hutong': string;
  'beijing.culture.features.opera': string;
  'beijing.culture.features.courtyard': string;
  'beijing.attractions.title': string;
  'beijing.attractions.palace.title': string;
  'beijing.attractions.palace.forbidden.title': string;
  'beijing.attractions.palace.forbidden.desc': string;
  'beijing.attractions.palace.summer.title': string;
  'beijing.attractions.palace.summer.desc': string;
  'beijing.attractions.palace.temple.title': string;
  'beijing.attractions.palace.temple.desc': string;
  'beijing.attractions.greatwall.title': string;
  'beijing.attractions.greatwall.mutianyu.title': string;
  'beijing.attractions.greatwall.mutianyu.desc': string;
  'beijing.attractions.greatwall.badaling.title': string;
  'beijing.attractions.greatwall.badaling.desc': string;
  'beijing.experiences.title': string;
  'beijing.experiences.culture.title': string;
  'beijing.experiences.culture.opera': string;
  'beijing.experiences.culture.hutong': string;
  'beijing.experiences.culture.tea': string;
  'beijing.experiences.culture.tour': string;
  'beijing.experiences.spring.title': string;
  'beijing.experiences.spring.xiangshan': string;
  'beijing.experiences.spring.yuyuantan': string;
  'beijing.experiences.spring.summer': string;
  'beijing.experiences.spring.botanical': string;
  'beijing.nav.basicInfo': string;
  'beijing.nav.culture': string;
  'beijing.nav.attractions': string;
  'beijing.nav.experiences': string;
  'beijing.nav.back': string;
  'beijing.nav.plan': string;
}