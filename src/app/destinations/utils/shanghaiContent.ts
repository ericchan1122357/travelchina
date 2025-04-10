import { Language } from '@/contexts/LanguageContext';
import { DestinationContent } from './destinationContent';

// 上海的中文内容
const shanghaiContentZh: DestinationContent = {
  title: "魔都上海",
  subtitle: "现代与传统交融的国际化大都市",
  sections: [
    {
      title: "初印象",
      content: `
      <p>上海，中国最大的经济金融中心，一座充满活力与魅力的国际化大都市。这里有外滩的万国建筑群，见证了上海百年的历史风云；有陆家嘴的摩天大楼群，展示着中国现代化的蓬勃发展；有历史悠久的石库门和衡山路，保存着老上海的记忆；也有时尚前卫的新天地和田子坊，体现着这座城市的创新与包容。</p>
      <p>上海是一座兼容并蓄的城市，这里有来自世界各地的人们，这里有东西方文化的交融碰撞，这里有传统与现代的完美结合。漫步在上海的大街小巷，你会感受到这座城市独特的"海派"风情，领略"十里洋场"的繁华与魅力。</p>
      `
    },
    {
      title: "基本信息速览",
      content: `
      <p><strong>最佳旅游季节：</strong>春季（3-5月）和秋季（9-11月）气候最为宜人，是游览上海的最佳时节。</p>
      <p><strong>气候特点：</strong>亚热带季风气候，四季分明，夏季炎热潮湿，冬季寒冷潮湿，春秋两季温和舒适。</p>
      <p><strong>交通方式：</strong>上海拥有完善的公共交通网络，地铁覆盖面广，是游览城市的首选。出租车价格合理，共享单车便于短途出行。</p>
      <p><strong>建议游览天数：</strong>全面游览上海需要4-5天，市中心核心景点至少需要2-3天。</p>
      <p><strong>消费水平：</strong>作为中国一线城市，上海消费水平相对较高，但不同区域消费差异较大，市中心和旅游景点价格较高。</p>
      `
    },
    {
      title: "必游景点",
      content: `
      <h3>外滩</h3>
      <p>外滩是上海的标志性景点，这里有52幢风格各异的万国建筑博览群，被誉为"万国建筑博物馆"。沿着黄浦江漫步，一侧是代表着上海过去的外滩建筑群，一侧是象征着中国未来的陆家嘴金融区，形成了"一江两岸，两个世纪"的独特景观。</p>
      <p><strong>旅行贴士：</strong>晚上的外滩夜景最美，但也最为拥挤，建议傍晚前往，既能拍到白天的建筑细节，又能欣赏夜晚的灯光秀。从外滩乘坐黄浦江游船可从水上欣赏两岸风光。</p>

      <h3>陆家嘴金融区</h3>
      <p>陆家嘴是上海的金融与商业中心，云集了上海中心大厦、上海环球金融中心、金茂大厦等多座现代摩天大楼，被称为"东方曼哈顿"。登上这些高楼的观光台，可俯瞰整个上海城市风光。</p>
      <p><strong>旅行贴士：</strong>上海中心118层观光厅是全球最高的观光厅之一，晴天视野极佳，可以360度俯瞰上海。为避免排队，建议提前在线购票。各观光台的淡旺季票价有差异，可根据预算选择。</p>

      <h3>豫园</h3>
      <p>豫园是上海最具代表性的古典园林，始建于明代嘉靖年间，园内亭台楼阁、假山池沼、花木苑境布局精巧，体现了中国江南园林艺术的精髓。豫园商城周边的九曲桥、湖心亭、城隍庙也是游客必访之地。</p>
      <p><strong>旅行贴士：</strong>游览豫园最好在上午，人流较少，光线适合拍照。园内曲径通幽，建议跟随导览图游览，以免遗漏精彩景点。豫园商城有各种上海特色小吃和工艺品，是品尝美食和购买纪念品的好去处。</p>

      <h3>南京路步行街</h3>
      <p>南京路是中国最古老和最繁华的商业街之一，有"中华商业第一街"之称。这里云集了百年老店和现代商场，从传统商品到国际大牌应有尽有。夜幕降临后，霓虹闪烁，熙熙攘攘的人群展现了上海的繁华景象。</p>
      <p><strong>旅行贴士：</strong>南京路步行街东起外滩，西至西藏中路，全长约1.5公里，建议预留半天时间游览。老字号如杏花楼、王家沙等值得一试，体验地道上海风味。步行街上有观光小火车，可乘坐游览。</p>

      <h3>田子坊</h3>
      <p>田子坊位于上海市中心的法租界区域，原是老式里弄建筑和工厂仓库，现在改造成了充满艺术气息的创意园区。这里有各种特色小店、艺术工作室、咖啡馆和餐厅，是感受上海创意文化和寻找特色手工艺品的好去处。</p>
      <p><strong>旅行贴士：</strong>周末游客较多，建议工作日前往，可以更悠闲地逛街和拍照。田子坊的小巷纵横交错，有些隐秘的店铺需要细心寻找。部分咖啡店和餐厅设计独特，适合休息和拍照打卡。</p>
      `
    },
    {
      title: "独特体验",
      content: `
      <h3>石库门建筑探索</h3>
      <p>石库门是上海独特的传统民居建筑，融合了中西方建筑元素，是老上海生活的缩影。新天地和思南路保留了许多经过修复的石库门建筑，改造成时尚的商业和文化空间。漫步其中，感受老上海的历史风貌与现代都市的活力交融。</p>
      <p><strong>体验贴士：</strong>新天地石库门内有多家主题博物馆和展览，如石库门文化陈列馆，可深入了解其历史。思南路的建筑多为名人故居，参观时注意开放时间。</p>

      <h3>黄浦江游船夜游</h3>
      <p>乘坐游船夜游黄浦江，是欣赏上海夜景的最佳方式之一。船上可以同时欣赏外滩和陆家嘴两岸的璀璨灯光，感受"不夜城"的魅力。特别是在重大节日，沿江两岸常有特别的灯光秀，更是不容错过。</p>
      <p><strong>体验贴士：</strong>游船有不同档次和航线可选，普通游览船和豪华游船价格差异较大。提前在网上预订可以避免排队。春秋两季天气好时最适合夜游，夏季室外甲板较热，冬季较冷。</p>

      <h3>上海博物馆文化探索</h3>
      <p>上海博物馆是中国一流的古代艺术博物馆，收藏了大量珍贵文物，包括青铜器、陶瓷、书画、雕塑、玉器等。博物馆建筑本身也是现代建筑与中国传统元素结合的典范，从空中俯瞰呈"鼎"形，寓意中华文明的传承。</p>
      <p><strong>体验贴士：</strong>博物馆免费开放，但需要预约。热门特展需要另行购票。建议安排至少半天时间参观。讲解器和导览服务值得使用，能更深入了解展品背后的历史文化。</p>

      <h3>长风公园欢乐谷体验</h3>
      <p>对于喜欢刺激体验的游客，上海欢乐谷提供各种惊险刺激的游乐设施。园区分为六大主题区，有适合不同年龄段游客的项目，从惊险的过山车到温和的家庭游乐设施应有尽有。</p>
      <p><strong>体验贴士：</strong>周末和节假日游客较多，建议工作日前往。夏季游玩记得防晒和补水。购买套票比单独购买项目票更划算。部分热门项目排队时间较长，建议使用APP了解实时排队情况。</p>
      `
    },
    {
      title: "美食指南",
      content: `
      <h3>上海本帮菜</h3>
      <p>上海本帮菜是中国八大菜系之一，特点是咸甜适中，油而不腻，讲究原汁原味。代表菜品包括红烧肉、生煎包、松鼠桂鱼、八宝鸭等。品尝地道本帮菜可以去老饭店、德兴馆等老字号餐厅。</p>
      <p><strong>美食贴士：</strong>本帮菜口味偏甜，特别是红烧类菜肴。正宗本帮菜餐厅多集中在老城区和南京西路一带。用餐高峰期需提前预约。</p>

      <h3>特色小吃</h3>
      <p>上海的特色小吃种类丰富，既有本地传统小吃，也有各地美食。必尝的有南翔小笼包、生煎包、蟹壳黄、梨膏糖、葱油拌面等。南翔小笼以皮薄、汁多、肉鲜而闻名，是上海的代表性小吃。</p>
      <p><strong>美食贴士：</strong>豫园商城内的南翔馒头店是品尝小笼包的名店，但游客较多。城隍庙小吃城集中了多种上海传统小吃。吃小笼包时要小心烫口，最好先咬一小口吸汤汁，再整个食用。</p>

      <h3>创意餐厅体验</h3>
      <p>作为国际化大都市，上海拥有众多创意餐厅和特色餐饮体验。外滩和新天地一带有许多由历史建筑改造的高端餐厅，提供融合中西风味的创新料理。这些餐厅不仅提供美食，还有独特的氛围和视觉享受。</p>
      <p><strong>美食贴士：</strong>创意餐厅通常需提前一周以上预约。外滩臻品餐厅多设在高层建筑中，可同时欣赏黄浦江景。部分创意餐厅设有特别的主厨菜单，可体验最具创意的料理。</p>

      <h3>夜市小吃</h3>
      <p>城隍庙美食街和七宝老街是体验上海夜市小吃文化的好去处。夜幕降临后，这些地方灯火通明，美食摊位林立，可以品尝到各种地道小吃和特色美食。</p>
      <p><strong>美食贴士：</strong>夜市多在下午五点后开始热闹，晚上8-9点是高峰期。部分小吃价格可能对游客略高，可适当议价。注意卫生和食品安全，选择人气较旺的摊位。</p>
      `
    },
    {
      title: "文化历史洞察",
      content: `
      <h3>海派文化的形成</h3>
      <p>上海的城市文化被称为"海派文化"，是中西方文化交融的产物。自鸦片战争后上海开埠，各国文化涌入，与本土文化碰撞融合，形成了独特的海派风格。海派文化兼容并蓄、创新务实，既有传统文化的底蕴，又有开放包容的胸怀，体现在建筑、艺术、文学、饮食等各个方面。</p>

      <h3>租界历史与建筑遗产</h3>
      <p>上海曾有公共租界、法租界等多个外国租界，这段特殊的历史在城市中留下了丰富的建筑遗产。外滩的欧式建筑群、法租界的花园洋房、石库门里弄等都是这段历史的见证。这些建筑不仅展示了西方建筑艺术，也反映了中国传统与西方文化的融合创新。</p>

      <h3>上海城市发展历程</h3>
      <p>从小渔村到国际大都市，上海的发展历程充满传奇。开埠后的百年间，上海经历了繁荣与动荡，新中国成立后特别是改革开放以来，上海迅速崛起为中国的经济中心。浦东开发开放更是中国改革开放的缩影，见证了中国现代化的巨大成就。了解上海的发展史，就是了解近现代中国的转型史。</p>

      <h3>江南水乡文化底蕴</h3>
      <p>虽然现代化程度高，但上海骨子里仍保留着江南水乡的文化基因。上海郊区的朱家角、七宝等古镇，保留了传统的江南水乡风貌。即使在繁华的都市中心，也能在豫园等地感受到江南园林的精巧与雅致。这种传统文化底蕴与现代都市文明的交融，构成了上海独特的城市魅力。</p>
      `
    }
  ]
};

// 上海的英文内容
const shanghaiContentEn: DestinationContent = {
  title: "Shanghai Metropolis",
  subtitle: "A global city where modernity meets tradition",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Shanghai, China's largest economic and financial center, is a vibrant and charming international metropolis. Here you'll find the cluster of international architecture along the Bund, witnessing Shanghai's century of historical changes; the skyscrapers of Lujiazui, showcasing China's booming modernization; the historically rich Shikumen houses and Hengshan Road, preserving old Shanghai's memories; as well as fashionable and avant-garde Xintiandi and Tianzifang, reflecting the city's innovation and inclusiveness.</p>
      <p>Shanghai is a city of harmony and diversity, home to people from all over the world, where Eastern and Western cultures collide and blend, and where tradition and modernity perfectly combine. Walking through Shanghai's streets and alleys, you'll experience the city's unique "Haipai" style and appreciate the prosperity and charm of the "Paris of the East."</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best time to visit:</strong> Spring (March-May) and autumn (September-November) have the most pleasant climate and are the ideal seasons to visit Shanghai.</p>
      <p><strong>Climate characteristics:</strong> Subtropical monsoon climate with four distinct seasons. Summers are hot and humid, winters cold and damp, while spring and autumn are mild and comfortable.</p>
      <p><strong>Transportation:</strong> Shanghai has a comprehensive public transportation network, with extensive metro coverage, making it the preferred choice for city touring. Taxis are reasonably priced, and shared bicycles are convenient for short trips.</p>
      <p><strong>Recommended visit duration:</strong> A comprehensive tour of Shanghai requires 4-5 days, with at least 2-3 days needed for core attractions in the city center.</p>
      <p><strong>Cost level:</strong> As a first-tier city in China, Shanghai has a relatively high cost of living, but costs vary greatly between different areas, with higher prices in the city center and tourist attractions.</p>
      `
    },
    {
      title: "Must-Visit Attractions",
      content: `
      <h3>The Bund</h3>
      <p>The Bund is Shanghai's iconic landmark, featuring 52 buildings of various architectural styles, known as the "Museum of Global Architecture." Walking along the Huangpu River, you'll see the Bund buildings representing Shanghai's past on one side and the Lujiazui Financial District symbolizing China's future on the other, creating a unique landscape of "one river, two banks, two centuries."</p>
      <p><strong>Travel tips:</strong> The Bund is most beautiful at night but also most crowded. Consider visiting before dusk to capture the architectural details in daylight and enjoy the light show at night. Taking a Huangpu River cruise offers excellent views of both riverbanks.</p>

      <h3>Lujiazui Financial District</h3>
      <p>Lujiazui is Shanghai's financial and commercial center, home to modern skyscrapers including Shanghai Tower, Shanghai World Financial Center, and Jin Mao Tower, earning it the nickname "Oriental Manhattan." Ascending to the observation decks of these towers offers panoramic views of the entire city.</p>
      <p><strong>Travel tips:</strong> The observation deck on the 118th floor of Shanghai Tower is one of the highest in the world, offering excellent 360-degree views on clear days. To avoid queues, purchase tickets online in advance. Ticket prices vary between peak and off-peak seasons, so choose according to your budget.</p>

      <h3>Yu Garden</h3>
      <p>Yu Garden is Shanghai's most representative classical garden, built during the Ming Dynasty's Jiajing reign. The garden features exquisite pavilions, rockeries, ponds, and landscaping that epitomize the essence of Jiangnan garden art. The surrounding Yu Garden Bazaar, with Nine-Turn Bridge, Mid-Lake Pavilion, and City God Temple, are also must-visit attractions.</p>
      <p><strong>Travel tips:</strong> The best time to visit Yu Garden is in the morning when there are fewer crowds and the lighting is ideal for photography. With its winding paths, following the guide map is recommended to ensure you don't miss any highlights. Yu Garden Bazaar offers various Shanghai specialty snacks and crafts, perfect for tasting local cuisine and buying souvenirs.</p>

      <h3>Nanjing Road Pedestrian Street</h3>
      <p>Nanjing Road is one of China's oldest and busiest commercial streets, known as "China's Premier Commercial Street." It hosts century-old stores and modern shopping malls, offering everything from traditional goods to international brands. After nightfall, the neon lights and bustling crowds showcase Shanghai's prosperity.</p>
      <p><strong>Travel tips:</strong> Nanjing Road Pedestrian Street runs from the Bund eastward to Tibet Middle Road, spanning about 1.5 kilometers. Allow half a day for exploration. Time-honored establishments like Xinghualu and Wangjiasha are worth trying for authentic Shanghai flavors. A sightseeing train runs along the street for convenient touring.</p>

      <h3>Tianzifang</h3>
      <p>Located in Shanghai's former French Concession area, Tianzifang was originally a neighborhood of traditional lane houses and factory warehouses, now transformed into an artsy creative district. It features specialty shops, art studios, cafes, and restaurants, making it ideal for experiencing Shanghai's creative culture and finding unique handicrafts.</p>
      <p><strong>Travel tips:</strong> Weekends are crowded; weekdays offer a more leisurely shopping and photography experience. Tianzifang's lanes are maze-like, with some hidden shops requiring careful exploration. Many cafes and restaurants have unique designs, perfect for rest stops and photo opportunities.</p>
      `
    },
    {
      title: "Unique Experiences",
      content: `
      <h3>Exploring Shikumen Architecture</h3>
      <p>Shikumen is Shanghai's unique traditional residential architecture, blending Chinese and Western building elements and representing a microcosm of old Shanghai life. Xintiandi and Sinan Road preserve many restored Shikumen buildings, now transformed into fashionable commercial and cultural spaces. Strolling through these areas, you can experience the fusion of old Shanghai's historical charm with modern urban vitality.</p>
      <p><strong>Experience tips:</strong> Xintiandi's Shikumen houses include several themed museums and exhibitions, such as the Shikumen Cultural Exhibition Hall, where you can learn about their history in depth. Many buildings on Sinan Road are former residences of famous people; check opening hours before visiting.</p>

      <h3>Huangpu River Night Cruise</h3>
      <p>Taking a night cruise on the Huangpu River is one of the best ways to enjoy Shanghai's night views. From the boat, you can simultaneously appreciate the brilliant lights of both the Bund and Lujiazui, experiencing the charm of the "city that never sleeps." During major holidays, special light shows along both banks are particularly not to be missed.</p>
      <p><strong>Experience tips:</strong> Various cruise options are available, from standard sightseeing boats to luxury cruises, with significant price differences. Booking online in advance can help avoid queues. Spring and autumn offer the best weather for night cruises, while summer can be hot on the outdoor deck and winter quite cold.</p>

      <h3>Shanghai Museum Cultural Exploration</h3>
      <p>The Shanghai Museum is a first-class museum of ancient Chinese art, housing a vast collection of precious artifacts including bronzes, ceramics, calligraphy, paintings, sculptures, and jade. The museum building itself exemplifies the combination of modern architecture with traditional Chinese elements, resembling an ancient "ding" (tripod cauldron) when viewed from above, symbolizing the inheritance of Chinese civilization.</p>
      <p><strong>Experience tips:</strong> The museum offers free admission but requires reservations. Special exhibitions may require separate tickets. Allow at least half a day for your visit. Audio guides and guided tours are worth using for deeper insights into the historical and cultural background of the exhibits.</p>

      <h3>Happy Valley Theme Park Experience</h3>
      <p>For visitors seeking thrilling experiences, Shanghai Happy Valley offers various exciting rides and attractions. The park is divided into six themed zones with attractions suitable for different age groups, from thrilling roller coasters to gentle family rides.</p>
      <p><strong>Experience tips:</strong> Weekends and holidays are crowded; weekdays are recommended. Remember sun protection and hydration during summer visits. Combo tickets are more economical than individual ride tickets. Check the app for real-time queue information for popular attractions, which can have long wait times.</p>
      `
    },
    {
      title: "Food Guide",
      content: `
      <h3>Shanghai Cuisine (Benbang Cuisine)</h3>
      <p>Shanghai cuisine, or Benbang cuisine, is one of China's eight major culinary traditions, characterized by a moderate sweet-salty flavor, richness without greasiness, and emphasis on preserving the original taste of ingredients. Signature dishes include braised pork belly, pan-fried pork buns, sweet and sour mandarin fish, and eight-treasure duck. For authentic Benbang cuisine, visit time-honored restaurants like Lao Fan Dian or De Xing Guan.</p>
      <p><strong>Food tips:</strong> Shanghai cuisine tends to be sweeter, especially braised dishes. Authentic Benbang restaurants are concentrated in the old city area and around West Nanjing Road. Reservations are recommended during peak dining hours.</p>

      <h3>Specialty Snacks</h3>
      <p>Shanghai offers a rich variety of specialty snacks, including both local traditional delicacies and foods from other regions. Must-tries include Nanxiang soup dumplings, pan-fried pork buns, crab shell pastries, pear syrup candy, and scallion oil noodles. Nanxiang soup dumplings are renowned for their thin skin, abundant soup, and fresh meat filling, representing Shanghai's signature snack.</p>
      <p><strong>Food tips:</strong> Nanxiang Steamed Bun Restaurant in Yu Garden Bazaar is famous for its soup dumplings but often crowded with tourists. The City God Temple Food Street concentrates various traditional Shanghai snacks. When eating soup dumplings, be careful of the hot soup—first bite a small hole to suck out the soup before eating the whole dumpling.</p>

      <h3>Creative Dining Experiences</h3>
      <p>As an international metropolis, Shanghai boasts numerous creative restaurants and unique dining experiences. The Bund and Xintiandi areas feature many high-end restaurants converted from historic buildings, offering innovative cuisine that fuses Chinese and Western flavors. These restaurants provide not just excellent food but also unique atmospheres and visual experiences.</p>
      <p><strong>Food tips:</strong> Creative restaurants typically require reservations at least a week in advance. Many premium restaurants on the Bund are located in high-rise buildings, offering simultaneous views of the Huangpu River. Some creative restaurants offer special chef's menus for experiencing their most innovative dishes.</p>

      <h3>Night Market Food</h3>
      <p>The City God Temple Food Street and Qibao Old Street are excellent places to experience Shanghai's night market food culture. After nightfall, these areas light up and food stalls abound, offering a taste of various authentic snacks and specialty foods.</p>
      <p><strong>Food tips:</strong> Night markets become lively after 5 PM, with peak crowds between 8-9 PM. Some snack prices may be slightly higher for tourists; moderate bargaining is acceptable. Pay attention to hygiene and food safety, choosing stalls with good customer flow.</p>
      `
    },
    {
      title: "Cultural and Historical Insights",
      content: `
      <h3>Formation of Haipai Culture</h3>
      <p>Shanghai's urban culture, known as "Haipai" culture, is a product of the fusion between Eastern and Western cultures. Since Shanghai opened as a treaty port after the Opium War, various international cultures have flowed in and blended with local traditions, forming the unique Haipai style. Haipai culture is inclusive, innovative, and practical, combining traditional cultural foundations with an open-minded outlook, reflected in architecture, art, literature, cuisine, and other aspects.</p>

      <h3>Concession History and Architectural Heritage</h3>
      <p>Shanghai once had multiple foreign concessions, including the International Settlement and French Concession, leaving a rich architectural heritage throughout the city. The European-style buildings on the Bund, garden villas in the French Concession, and Shikumen lane houses are all witnesses to this special history. These buildings not only showcase Western architectural art but also reflect the innovative fusion of Chinese tradition and Western culture.</p>

      <h3>Shanghai's Urban Development Journey</h3>
      <p>From a small fishing village to an international metropolis, Shanghai's development journey is legendary. During the century after becoming a treaty port, Shanghai experienced prosperity and turbulence. After the founding of the People's Republic of China, especially since the reform and opening-up, Shanghai has rapidly risen as China's economic center. The development of Pudong, in particular, epitomizes China's reform and opening-up, witnessing the country's tremendous modernization achievements. Understanding Shanghai's development history is to understand modern China's transformation.</p>

      <h3>Jiangnan Water Town Cultural Foundation</h3>
      <p>Despite its high degree of modernization, Shanghai still preserves the cultural genes of Jiangnan water towns at its core. Ancient towns in Shanghai's suburbs, such as Zhujiajiao and Qibao, maintain the traditional Jiangnan water town style. Even in the bustling city center, the exquisite elegance of Jiangnan gardens can be felt in places like Yu Garden. This fusion of traditional cultural foundation with modern urban civilization constitutes Shanghai's unique urban charm.</p>
      `
    }
  ]
};

// 多语言内容汇总
export const shanghaiContent: Record<Language, DestinationContent> = {
  zh: shanghaiContentZh,
  en: shanghaiContentEn,
  // 其他语言可以添加在这里
  ja: { title: '上海', subtitle: '伝統と現代が融合する国際都市', sections: [] },
  ko: { title: '상하이', subtitle: '전통과 현대가 어우러진 국제 대도시', sections: [] },
  fr: { title: 'Shanghai', subtitle: 'Métropole internationale où se rencontrent modernité et tradition', sections: [] },
  de: { title: 'Shanghai', subtitle: 'Internationale Metropole, wo Moderne und Tradition aufeinandertreffen', sections: [] },
  es: { title: 'Shanghái', subtitle: 'Metrópolis internacional donde se unen modernidad y tradición', sections: [] },
  ru: { title: 'Шанхай', subtitle: 'Международный мегаполис, где встречаются современность и традиции', sections: [] }
}; 