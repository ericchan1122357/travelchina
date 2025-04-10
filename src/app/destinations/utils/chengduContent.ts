import { Language } from '@/contexts/LanguageContext';
import { DestinationContent } from './destinationContent';

// 成都内容 - 中文
const chengduContentZh: DestinationContent = {
  title: "成都",
  subtitle: "悠闲与美食的天堂，熊猫的故乡",
  sections: [
    {
      title: "初印象",
      content: `
      <p>成都，一座有着2300多年历史的文化名城，被誉为"天府之国"，以其悠闲的生活节奏、丰富的美食文化和浓厚的历史底蕴而闻名。这座城市既有现代都市的繁华，又保留着古蜀文明的神秘与优雅。</p>
      <p>漫步在宽窄巷子和锦里古街，感受老成都的市井风情；徜徉在繁华的春熙路和太古里，体验现代都市的时尚活力。作为大熊猫的故乡，这里也拥有世界上最重要的大熊猫保护和研究基地。无论是茶馆里的闲适生活，还是火锅店里的热辣氛围，成都都能带给您独特而难忘的体验。</p>
      `
    },
    {
      title: "基本信息速览",
      content: `
      <p><strong>最佳旅游季节：</strong>春季（3-5月）和秋季（9-11月）气候宜人，最适合旅游。</p>
      <p><strong>气候特点：</strong>亚热带湿润季风气候，四季温差小，冬暖夏热，多雨潮湿，被称为"天无三日晴"。</p>
      <p><strong>交通方式：</strong>地铁是游览成都市区最便捷的方式，覆盖了大部分景点。公交车网络发达，出租车价格合理。城际高铁可便捷前往周边景点如乐山、都江堰等。</p>
      <p><strong>建议游览天数：</strong>游览成都市区需要2-3天，若包括周边景点如都江堰、青城山等，建议安排5-7天。</p>
      <p><strong>消费水平：</strong>相较于北京、上海等一线城市，成都消费水平较低，餐饮、住宿、交通费用相对亲民。</p>
      `
    }
  ]
};

// 成都内容 - 英文
const chengduContentEn: DestinationContent = {
  title: "Chengdu",
  subtitle: "Paradise of Leisure and Cuisine, Home of Pandas",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Chengdu, a cultural city with over 2,300 years of history, is known as the "Land of Abundance," famous for its leisurely pace of life, rich food culture, and profound historical heritage. This city combines modern urban prosperity with the mystery and elegance of ancient Shu civilization.</p>
      <p>Stroll through Wide and Narrow Alleys and Jinli Ancient Street to experience the local flavor of old Chengdu; wander through the bustling Chunxi Road and Taikoo Li to experience the fashionable vitality of the modern city. As the homeland of giant pandas, it also houses the world's most important giant panda conservation and research base. Whether it's the relaxed lifestyle in teahouses or the spicy atmosphere in hotpot restaurants, Chengdu can offer you a unique and unforgettable experience.</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best time to visit:</strong> Spring (March-May) and autumn (September-November) have pleasant climate, ideal for tourism.</p>
      <p><strong>Climate characteristics:</strong> Subtropical humid monsoon climate, with small temperature differences between seasons, warm winters and hot summers, rainy and humid, known as "no three consecutive clear days."</p>
      <p><strong>Transportation methods:</strong> The subway is the most convenient way to visit Chengdu's urban area, covering most attractions. The bus network is well-developed, and taxi prices are reasonable. Intercity high-speed rail provides convenient access to surrounding attractions such as Leshan, Dujiangyan, etc.</p>
      <p><strong>Recommended visit duration:</strong> 2-3 days are needed to visit Chengdu's urban area; if including surrounding attractions like Dujiangyan and Mount Qingcheng, 5-7 days are recommended.</p>
      <p><strong>Cost level:</strong> Compared to first-tier cities like Beijing and Shanghai, Chengdu's cost level is lower, with relatively affordable dining, accommodation, and transportation expenses.</p>
      `
    }
  ]
};

// 多语言内容汇总
export const chengduContent: Record<Language, DestinationContent> = {
  zh: chengduContentZh,
  en: chengduContentEn,
  // 其他语言可以添加在这里
  ja: { title: '成都', subtitle: '', sections: [] },
  ko: { title: '청두', subtitle: '', sections: [] },
  fr: { title: 'Chengdu', subtitle: '', sections: [] },
  de: { title: 'Chengdu', subtitle: '', sections: [] },
  es: { title: 'Chengdu', subtitle: '', sections: [] },
  ru: { title: 'Чэнду', subtitle: '', sections: [] }
}; 