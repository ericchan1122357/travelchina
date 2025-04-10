import { Language } from '@/contexts/LanguageContext';
import { DestinationContent } from './destinationContent';

// 成都内容 - 中文
const chengduContentZh: DestinationContent = {
  title: "天府之国成都",
  subtitle: "休闲生活与美食天堂",
  sections: [
    {
      title: "初印象",
      content: "成都，四川省省会，被誉为"天府之国"，以其悠闲的生活节奏、丰富的美食文化和深厚的历史底蕴而闻名。这座城市完美地融合了现代都市的繁华与传统文化的魅力，既有高楼大厦的现代气息，又保留了古老街巷的历史风貌。成都人以其独特的休闲生活方式而著称，在这里，时间仿佛放慢了脚步，让人们有足够的空间去品味生活的美好。"
    },
    {
      title: "基本信息速览",
      content: "最佳旅游时间：3-6月和9-11月，此时气候温和，特别适合户外活动\n气候：亚热带季风气候，四季分明，雨量充沛\n交通：双流国际机场有国内外多条航线；高铁网络发达，连接全国主要城市；市内交通以地铁、公交为主\n推荐游玩时长：3-5天\n消费水平：相对较低，是中国消费较为经济的大城市之一"
    },
    {
      title: "必游景点",
      content: "1. 成都大熊猫繁育研究基地：栖息着数十只大熊猫，是成都的标志性景点。早晨7-9点是熊猫最活跃的时间，建议提早前往。\n\n2. 武侯祠：中国唯一一座君臣合祀的祠庙，祭祀蜀汉丞相诸葛亮和蜀汉皇帝刘备。园内古木参天，环境幽静，是了解三国历史的重要场所。\n\n3. 杜甫草堂：唐代大诗人杜甫流寓成都时的故居，环境优美，古朴典雅，散发着浓厚的文化气息。\n\n4. 宽窄巷子：由宽巷子、窄巷子、井巷子组成的清朝古街道，现已成为展示成都传统生活方式的文化休闲区，有众多特色小店和茶馆。\n\n5. 锦里古街：位于武侯祠旁，是一条仿古商业街，汇集了众多川西特色小吃、手工艺品和民俗表演，充满了浓郁的巴蜀风情。"
    },
    {
      title: "独特体验",
      content: "1. 茶馆文化体验：成都的茶馆是当地生活的重要组成部分，可以到人民公园的鹤鸣茶社或文殊院的老茶馆，点一壶茶，听评书，感受成都人的悠闲生活。\n\n2. 川剧变脸表演：川剧是中国传统戏曲的重要流派，变脸是其中最具特色的表演技艺。可以在锦里、蜀风雅韵等地欣赏专业的川剧变脸表演。\n\n3. 大熊猫志愿者项目：在成都大熊猫基地参与志愿者项目，近距离接触大熊猫，了解熊猫保护工作。\n\n4. 三星堆博物馆一日游：位于成都市区北部的三星堆博物馆展示了神秘的古蜀文明，出土文物令人惊叹，值得专程前往。\n\n5. 都江堰-青城山一日游：体验世界文化遗产都江堰水利工程的伟大智慧，再游览道教名山青城山，感受"青城天下幽"的自然美景。"
    },
    {
      title: "美食指南",
      content: "成都是中国著名的美食之都，川菜以其麻辣鲜香而闻名于世。\n\n1. 火锅：成都火锅以麻辣著称，推荐尝试海底捞、大龙燚、蜀九香等知名火锅店。\n\n2. 串串香：成都特色小吃，竹签串着各种食材在麻辣汤锅中涮煮，推荐钢管厂、马路边边等。\n\n3. 川菜名店：陈麻婆豆腐、龙抄手、夫妻肺片等老字号川菜店提供最正宗的川菜体验。\n\n4. 小吃聚集地：春熙路、锦里、宽窄巷子都有众多小吃店，可品尝三大炮、钟水饺、担担面、甜水面等特色小吃。\n\n5. 茶文化：成都人喜欢在用餐后饮茶，推荐尝试具有特色的盖碗茶。"
    },
    {
      title: "文化历史洞察",
      content: "成都有着超过2300年的建城历史，是中国最古老的城市之一。\n\n1. 古蜀文明：三星堆和金沙遗址是古蜀文明的重要见证，展示了独特的青铜器和金器工艺。\n\n2. 诗人之城：唐代诗人李白、杜甫等曾在此留下众多名篇，杜甫草堂是重要的文化遗迹。\n\n3. 道教文化：青城山是中国道教发源地之一，至今保存有众多道观。\n\n4. 蜀锦蜀绣：成都的传统手工艺，具有悠久历史，色彩鲜艳，工艺精湛。\n\n5. 川剧文化：作为四川地方戏曲，川剧融合了多种艺术形式，变脸、吐火等绝活享誉全球。\n\n6. 休闲文化：成都人的生活理念可以用"慢生活"来概括，茶馆文化是其典型代表，反映了成都人注重生活品质的特点。"
    }
  ]
};

// 成都内容 - 英文
const chengduContentEn: DestinationContent = {
  title: "Chengdu: Land of Abundance",
  subtitle: "A paradise of leisure lifestyle and delicious cuisine",
  sections: [
    {
      title: "First Impressions",
      content: "Chengdu, the capital of Sichuan Province, is known as the 'Land of Abundance' for its relaxed lifestyle, rich food culture, and deep historical heritage. This city perfectly blends the prosperity of a modern metropolis with the charm of traditional culture, featuring both skyscrapers and historic alleyways. Chengdu residents are famous for their unique leisure lifestyle; here, time seems to slow down, giving people ample space to savor the beauty of life."
    },
    {
      title: "Basic Information",
      content: "Best time to visit: March-June and September-November, when the climate is mild and particularly suitable for outdoor activities\nClimate: Subtropical monsoon climate with distinct seasons and abundant rainfall\nTransportation: Shuangliu International Airport has numerous domestic and international routes; well-developed high-speed rail network connecting major cities nationwide; urban transportation mainly by subway and bus\nRecommended duration: 3-5 days\nCost level: Relatively low, one of the more economical major cities in China"
    },
    {
      title: "Must-Visit Attractions",
      content: "1. Chengdu Research Base of Giant Panda Breeding: Home to dozens of giant pandas, this is Chengdu's iconic attraction. Early morning from 7-9 AM is when pandas are most active, so an early visit is recommended.\n\n2. Wuhou Temple: The only temple in China that honors both a ruler and his minister, dedicated to Zhuge Liang (Prime Minister of Shu Han) and Liu Bei (Emperor of Shu Han). With ancient trees and a serene environment, it's an important place to learn about Three Kingdoms history.\n\n3. Du Fu Thatched Cottage: The former residence of Tang Dynasty poet Du Fu during his stay in Chengdu. With its beautiful environment and elegant classical style, it exudes a strong cultural atmosphere.\n\n4. Wide and Narrow Alleys: Composed of Wide Alley, Narrow Alley, and Well Alley, these Qing Dynasty streets have been transformed into a cultural leisure area showcasing traditional Chengdu lifestyle, with numerous specialty shops and teahouses.\n\n5. Jinli Ancient Street: Located next to Wuhou Temple, this is a traditional commercial street gathering many Western Sichuan snacks, handicrafts, and folk performances, full of rich Bashu flavor."
    },
    {
      title: "Unique Experiences",
      content: "1. Teahouse Culture: Teahouses are an essential part of local life in Chengdu. Visit Heming Teahouse in People's Park or the old teahouse at Wenshu Temple, order a pot of tea, listen to traditional storytelling, and experience the leisurely lifestyle of Chengdu residents.\n\n2. Sichuan Opera Face-Changing: Sichuan Opera is an important branch of traditional Chinese opera, with face-changing being its most distinctive performance technique. You can enjoy professional face-changing performances at Jinli or Shufeng Yayun.\n\n3. Giant Panda Volunteer Program: Participate in the volunteer program at the Chengdu Giant Panda Base to interact with giant pandas up close and learn about panda conservation work.\n\n4. Sanxingdui Museum Day Trip: Located in northern Chengdu, the Sanxingdui Museum showcases the mysterious ancient Shu civilization with astonishing artifacts worth a special visit.\n\n5. Dujiangyan-Mount Qingcheng Day Trip: Experience the great wisdom of the Dujiangyan irrigation system, a World Cultural Heritage site, then visit Mount Qingcheng, a famous Taoist mountain, to feel the natural beauty of 'the most serene place under heaven'."
    },
    {
      title: "Food Guide",
      content: "Chengdu is a renowned food capital of China, with Sichuan cuisine famous for its spicy and flavorful characteristics.\n\n1. Hot Pot: Chengdu hot pot is known for its numbing spiciness. Recommended restaurants include Haidilao, Dalongyi, and Shujiuxiang.\n\n2. Chuan Chuan Xiang: A Chengdu specialty where various ingredients on bamboo skewers are cooked in spicy broth. Try Steel Factory or Roadside Chuan Chuan for authentic experiences.\n\n3. Famous Sichuan Restaurants: Chen Mapo Tofu, Long Chaoshou (wontons), and Fuqi Feipian (sliced beef in chili sauce) offer the most authentic Sichuan cuisine experiences.\n\n4. Street Food Areas: Chunxi Road, Jinli, and Wide and Narrow Alleys all have numerous snack shops where you can taste specialties like Three Cannon Shots (sweet rice balls), Zhong Dumplings, Dan Dan Noodles, and Sweet Water Noodles.\n\n5. Tea Culture: Chengdu residents enjoy drinking tea after meals, particularly the distinctive covered-bowl tea."
    },
    {
      title: "Cultural and Historical Insights",
      content: "Chengdu has over 2,300 years of history as one of China's oldest cities.\n\n1. Ancient Shu Civilization: Sanxingdui and Jinsha archaeological sites are important witnesses to the ancient Shu civilization, showcasing unique bronze and gold craftsmanship.\n\n2. City of Poets: Tang Dynasty poets like Li Bai and Du Fu left numerous famous works here, with Du Fu's Thatched Cottage being an important cultural relic.\n\n3. Taoist Culture: Mount Qingcheng is one of the birthplaces of Chinese Taoism, still preserving many Taoist temples.\n\n4. Shu Brocade and Embroidery: Traditional handicrafts of Chengdu with a long history, characterized by vibrant colors and exquisite craftsmanship.\n\n5. Sichuan Opera: As a local opera of Sichuan, it integrates various art forms with specialized skills like face-changing and fire-spitting that are renowned worldwide.\n\n6. Leisure Culture: The life philosophy of Chengdu people can be summarized as 'slow living,' with teahouse culture being a typical representation, reflecting the emphasis on quality of life."
    }
  ]
};

// 多语言内容汇总
export const chengduContent: Record<Language, DestinationContent> = {
  zh: chengduContentZh,
  en: chengduContentEn,
  // 其他语言可以添加在这里
  ja: { title: '成都', subtitle: 'のんびりとグルメの楽園、パンダの故郷', sections: [] },
  ko: { title: '청두', subtitle: '여유와 미식의 천국, 판다의 고향', sections: [] },
  fr: { title: 'Chengdu', subtitle: 'Paradis de détente et de cuisine, foyer des pandas', sections: [] },
  de: { title: 'Chengdu', subtitle: 'Paradies der Muße und Küche, Heimat der Pandas', sections: [] },
  es: { title: 'Chengdu', subtitle: 'Paraíso del ocio y la gastronomía, hogar de los pandas', sections: [] },
  ru: { title: 'Чэнду', subtitle: 'Рай для отдыха и кухни, дом панд', sections: [] }
}; 