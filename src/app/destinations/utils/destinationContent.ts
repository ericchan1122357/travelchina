import { DestinationContent, DestinationSection, Language } from './types';
import { guilinContent } from './guilinContent.def';
import { sanyaContent } from './sanyaContent.def';
import { shenzhenContent } from './shenzhenContent.def';

// 北京的多语言内容
const beijingContent: Partial<Record<Language, DestinationContent>> = {
  zh: {
    title: "帝都北京",
    subtitle: "古老与现代交织的东方帝都",
    sections: [
      {
        title: "初印象",
        content: `
        <p>北京，一座拥有3000多年建城史和800多年建都史的古都，见证了中国数千年的历史变迁。作为中国的首都，这里既有雄伟壮丽的故宫、天坛、颐和园等古建筑群，又有鸟巢、水立方等现代建筑奇观，古老与现代在这里完美交织。</p>
        <p>漫步在北京的胡同与四合院中，感受老北京的传统生活气息；徜徉在王府井、三里屯等繁华商圈，体验大都市的现代活力。北京，一座让人流连忘返的城市，等待您的探索。</p>
        `
      },
      {
        title: "基本信息速览",
        content: `
        <p><strong>最佳旅游季节：</strong>春季（4-5月）和秋季（9-10月）气候宜人，最适合旅游。</p>
        <p><strong>气候特点：</strong>四季分明，春秋短暂，冬夏较长。夏季炎热多雨，冬季寒冷干燥。</p>
        <p><strong>交通方式：</strong>地铁是游览北京最便捷的方式，覆盖了大部分景点。出租车价格合理但可能遇到拥堵，共享单车适合短途出行。</p>
        <p><strong>建议游览天数：</strong>完整游览北京需要5-7天，主要景点游览至少需要3天。</p>
        <p><strong>消费水平：</strong>相较于中国其他城市，北京消费水平较高，但与国际大都市相比仍然具有优势。</p>
        `
      },
      {
        title: "必游景点",
        content: `
        <h3>故宫博物院（紫禁城）</h3>
        <p>作为世界上规模最大、保存最完整的木质古建筑群，故宫是明清两代的皇家宫殿，拥有近9000间房屋。这里收藏了无数珍贵文物，是了解中国古代宫廷历史和文化的最佳去处。</p>
        <p><strong>旅行贴士：</strong>建议预留4-6小时游览，提前在网上预约门票，避开周末和节假日。从午门进入，神武门出来是最经典的游览路线。参观时可租用语音导览器，了解更多历史细节。</p>

        <h3>八达岭长城</h3>
        <p>作为万里长城最具代表性的一段，八达岭长城筑城历史可追溯至明朝。这里山势险峻，风景秀丽，是感受"不到长城非好汉"气概的绝佳之处。</p>
        <p><strong>旅行贴士：</strong>建议乘坐S2线或旅游专线前往，避开节假日人流高峰。可选择索道上行，步行下山，省力又能充分欣赏风景。冬季台阶可能结冰，请注意安全。</p>

        <h3>慕田峪长城</h3>
        <p>慕田峪长城是长城中保存最好的一段，以奇、特、险著称。这里的长城蜿蜒于崇山峻岭之间，墙体宽广，砖石结实，是摄影爱好者的天堂。</p>
        <p><strong>旅行贴士：</strong>可乘坐缆车上行，滑道下山，体验刺激又新奇。建议携带足够饮水和防晒用品，山顶风大，注意保暖。旺季时提前网上购票可免去排队时间。</p>

        <h3>天坛公园</h3>
        <p>天坛是明清两代帝王祭祀皇天、祈求丰年的场所，其建筑布局严格按照天圆地方的古代宇宙观设计。祈年殿是整个建筑群的核心，以精湛的建筑技艺闻名于世。</p>
        <p><strong>旅行贴士：</strong>建议清晨前往，可以看到当地人晨练，体验最地道的北京生活。园区很大，合理规划路线，穿着舒适的鞋子。园内回音壁和三音石有有趣的声学效果，值得体验。</p>

        <h3>颐和园</h3>
        <p>作为保存最完整的皇家园林，颐和园以昆明湖和万寿山为基础，融合了江南园林的精巧与北方园林的宏伟。长廊、佛香阁、石舫等景点各具特色，四季景色迷人。</p>
        <p><strong>旅行贴士：</strong>园区面积广大，建议预留半天时间游览。可选择游船欣赏湖上风光，夏季荷花盛开时尤为壮观。北宫门入，东宫门出是经典路线，可覆盖主要景点。</p>
        `
      },
      {
        title: "独特体验",
        content: `
        <h3>胡同文化探索</h3>
        <p>北京的胡同承载着老北京的生活方式和文化记忆。南锣鼓巷、什刹海和前门大栅栏区域保存了较为完好的胡同风貌，是体验传统北京生活的绝佳去处。</p>
        <p><strong>推荐活动：</strong>乘坐三轮车穿梭于胡同之间，拜访四合院，品尝老北京小吃，与当地居民交流，感受地道的北京文化。</p>

        <h3>北京戏曲体验</h3>
        <p>京剧、评剧等传统戏曲是北京文化的重要组成部分。梅兰芳大剧院、长安大戏院等场所定期有传统戏曲演出，是了解中国传统艺术的窗口。</p>
        <p><strong>推荐活动：</strong>欣赏一场正宗京剧表演，了解脸谱的含义，尝试京剧妆容体验，与艺术家互动学习简单的唱腔和手势动作。</p>

        <h3>798艺术区</h3>
        <p>曾经的工业厂区转型为当代艺术中心，798艺术区汇集了画廊、艺术工作室、设计公司、餐厅和时尚店铺，展现了北京的创意活力和艺术氛围。</p>
        <p><strong>推荐活动：</strong>参观各类前卫艺术展览，与艺术家交流，在工业风咖啡馆小憩，购买独特的艺术衍生品作为纪念。</p>

        <h3>什刹海冰上活动</h3>
        <p>冬季的什刹海结冰后，会变成天然的冰场，当地人喜欢在这里滑冰、打冰嘎、玩冰车，是北京冬季特有的文化景观。</p>
        <p><strong>推荐活动：</strong>租用冰鞋或冰车体验传统冰上活动，品尝冰糖葫芦等冬季小吃，在白雪覆盖的银锭桥上欣赏冰封的什刹海美景。</p>
        `
      },
      {
        title: "美食指南",
        content: `
        <h3>北京烤鸭</h3>
        <p>作为北京最著名的美食，北京烤鸭以皮酥肉嫩、色泽红亮著称。全聚德、大董、利群等老字号各有特色，是品尝正宗北京烤鸭的好去处。</p>
        <p><strong>品尝建议：</strong>传统吃法是将鸭肉、葱丝、甜面酱卷在薄饼中食用，也可尝试鸭骨汤和鸭架炒饭，不浪费任何部分。</p>

        <h3>老北京小吃</h3>
        <p>豆汁、艾窝窝、糖葫芦、驴打滚、炒肝等老北京小吃承载着浓厚的历史文化底蕴，是体验地道北京风味的必选。</p>
        <p><strong>推荐去处：</strong>护国寺小吃店、南锣鼓巷小吃街、天桥杨记糕点等是品尝地道老北京小吃的好去处。每种小吃背后都有有趣的历史故事，值得了解。</p>

        <h3>涮羊肉</h3>
        <p>北京的涮羊肉起源于元朝，以新鲜羊肉片在沸水中快速涮煮后蘸料食用。东来顺、南来顺等老字号保持着传统工艺和正宗口味。</p>
        <p><strong>品尝建议：</strong>传统涮锅使用铜锅炭火，蘸料为麻酱、韭菜花、香菜等混合。冬季品尝最佳，既暖身又能享受鲜美羊肉。</p>

        <h3>宫廷菜</h3>
        <p>源自宫廷的料理精致讲究，以"淡而不薄，浓而不腻"的特点著称。紫光阁、丰泽园等餐厅提供正宗的宫廷菜体验。</p>
        <p><strong>代表菜品：</strong>扒烧整猪、金钱肚、烧鹿尾、蒸鱼唇等菜品讲究刀工和火候，体现了宫廷饮食文化的精髓。</p>
        `
      },
      {
        title: "文化历史洞察",
        content: `
        <h3>帝王之都的历史变迁</h3>
        <p>北京历经辽、金、元、明、清五个朝代作为都城，城市格局和文化积淀与中国历史深度交织。城市中心轴线的布局体现了古代中国"天人合一"的哲学观念。</p>
        <p><strong>历史脉络：</strong>从元大都到明清北京城，城市规划呈现同心方格结构，紫禁城位于中轴线核心，体现了"皇权至上"的封建思想。</p>

        <h3>京味文化</h3>
        <p>京味文化是北京独特的地域文化，包括北京方言、曲艺、民俗活动等。听相声、逛庙会、放风筝等活动都是体验京味文化的窗口。</p>
        <p><strong>文化特点：</strong>北京人讲究"礼"，重视体面，语言幽默风趣，乐于助人，这些特质共同构成了京味文化的精髓。</p>

        <h3>建筑艺术</h3>
        <p>北京的建筑艺术以宫殿建筑、园林建筑、宗教建筑等为代表，集中体现了中国传统建筑的高超技艺和美学理念。</p>
        <p><strong>建筑特色：</strong>讲究对称、等级和色彩象征，木构架结构灵活坚固，屋顶翘角飞檐既美观又实用，体现了中国古代建筑的智慧。</p>

        <h3>非物质文化遗产</h3>
        <p>北京拥有众多非物质文化遗产，如景泰蓝、内画鼻烟壶、京绣、吹糖人等传统工艺，以及京剧、评剧等传统表演艺术。</p>
        <p><strong>传承保护：</strong>可参观北京民俗博物馆了解传统文化，或前往潘家园、琉璃厂文化街寻找传统工艺品，支持非遗传承。</p>
        `
      }
    ]
  },
  en: {
    title: "Beijing Capital",
    subtitle: "Ancient and modern intertwined in the oriental imperial capital",
    sections: [
      {
        title: "First Impressions",
        content: `
        <p>Beijing, a city with over 3000 years of history and 800 years as a capital, has witnessed the historical changes of China over thousands of years. As China's capital, it features both magnificent ancient architecture like the Forbidden City, Temple of Heaven, and Summer Palace, as well as modern architectural wonders like the Bird's Nest and Water Cube, perfectly blending ancient and modern elements.</p>
        <p>Stroll through Beijing's hutongs and courtyards to experience the traditional lifestyle of old Beijing; wander through bustling commercial areas like Wangfujing and Sanlitun to experience the modern vitality of this metropolis. Beijing is a city that captivates visitors, waiting for your exploration.</p>
        `
      },
      // ... 其他部分内容已省略
    ]
  },
  // ... 其他语言版本
};

// 上海的多语言内容 - 简化版，实际使用时需要完整内容
const shanghaiContent: Partial<Record<Language, DestinationContent>> = {
  zh: {
    title: "魔都上海",
    subtitle: "中西交融的国际大都市",
    sections: []
  },
  en: {
    title: "Shanghai",
    subtitle: "International metropolis blending East and West",
    sections: []
  }
};

// 西安的多语言内容 - 简化版，实际使用时需要完整内容
const xianContent: Partial<Record<Language, DestinationContent>> = {
  zh: {
    title: "古都西安",
    subtitle: "丝绸之路起点，千年帝都风华",
    sections: []
  },
  en: {
    title: "Xi'an",
    subtitle: "Ancient capital and starting point of the Silk Road",
    sections: []
  }
};

// 成都的多语言内容 - 简化版，实际使用时需要完整内容
const chengduContent: Partial<Record<Language, DestinationContent>> = {
  zh: {
    title: "悠闲成都",
    subtitle: "熊猫之乡，休闲美食天堂",
    sections: []
  },
  en: {
    title: "Chengdu",
    subtitle: "Home of pandas and culinary paradise",
    sections: []
  }
};

// 导出北京内容
export const getBeijingContent = (lang: Language): DestinationContent => {
  return beijingContent[lang] || beijingContent.en || beijingContent.zh as DestinationContent;
};

// 导出上海内容
export const getShanghaiContent = (lang: Language): DestinationContent => {
  return shanghaiContent[lang] || shanghaiContent.en || shanghaiContent.zh as DestinationContent;
};

// 导出西安内容
export const getXianContent = (lang: Language): DestinationContent => {
  return xianContent[lang] || xianContent.en || xianContent.zh as DestinationContent;
};

// 导出成都内容
export const getChengduContent = (lang: Language): DestinationContent => {
  return chengduContent[lang] || chengduContent.en || chengduContent.zh as DestinationContent;
};

// 导出桂林内容
export const getGuilinContent = (lang: Language): DestinationContent => {
  return guilinContent[lang] || guilinContent.en || guilinContent.zh as DestinationContent;
};

// 导出三亚内容
export const getSanyaContent = (lang: Language): DestinationContent => {
  return sanyaContent[lang] || sanyaContent.en || sanyaContent.zh as DestinationContent;
};

// 导出深圳内容
export const getShenzhenContent = (lang: Language): DestinationContent => {
  return shenzhenContent[lang] || shenzhenContent.en || shenzhenContent.zh as DestinationContent;
};

// 通用的获取目的地内容函数
export const getDestinationContent = (destinationSlug: string, lang: Language): DestinationContent => {
  switch (destinationSlug) {
    case 'beijing':
      return getBeijingContent(lang);
    case 'shanghai':
      return getShanghaiContent(lang);
    case 'xian':
      return getXianContent(lang);
    case 'chengdu':
      return getChengduContent(lang);
    case 'guilin':
      return getGuilinContent(lang);
    case 'sanya':
      return getSanyaContent(lang);
    case 'shenzhen':
      return getShenzhenContent(lang);
    // 当添加更多城市时，可以在这里添加更多 case
    // case 'hangzhou':
    //   return getHangzhouContent(lang);
    default:
      // 默认返回北京内容或空内容
      console.warn(`City content not found for: ${destinationSlug}, returning Beijing content as fallback`);
      return getBeijingContent(lang);
  }
};

export default {
  getBeijingContent,
  getShanghaiContent,
  getXianContent,
  getChengduContent,
  getGuilinContent,
  getSanyaContent,
  getShenzhenContent,
  getDestinationContent,
}; 