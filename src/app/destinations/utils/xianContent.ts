import { DestinationContent } from './destinationContent';
import { Language } from '@/contexts/LanguageContext';
import { xianContentJa } from './xianJaContent';
import { xianContentKo } from './xianKoContent';
import { xianContentRu } from './xianRuContent';
import { xianContentEs } from './xianEsContent';
import { xianContentDe } from './xianDeContent';
import { xianContentFr } from './xianFrContent';

// 中文内容
const xianContentZh: DestinationContent = {
  title: "古都西安",
  subtitle: "十三朝古都，丝绸之路东方起点",
  sections: [
    {
      title: "初印象",
      content: `
      <p>西安（古称长安）是中国最著名的古都之一，曾是周、秦、汉、唐等十三个朝代的都城或政治中心。作为丝绸之路的东方起点，这座城市拥有超过3000年的历史，其中作为首都的时间超过1100年，孕育了辉煌的中国文明。</p>
      <p>现代西安完美地融合了古老与现代。雄伟的城墙环绕着繁华的市中心，兵马俑和大雁塔等世界文化遗产与热闹的商业区和谐共存。诱人的穆斯林美食香气在回民街飘荡，大唐芙蓉园在夜晚光彩夺目，见证了这座古都丰富的文化遗产和现代活力。</p>
      `
    },
    {
      title: "基本信息概览",
      content: `
      <p><strong>最佳游览季节：</strong>春季（4-5月）和秋季（9-10月）气候宜人，是观光的理想时间。</p>
      <p><strong>气候特点：</strong>半湿润大陆性季风气候，四季分明。夏季炎热，冬季寒冷干燥，而春秋两季温和宜人。</p>
      <p><strong>交通方式：</strong>西安地铁网络广泛，可到达主要旅游景点。公交系统发达，出租车价格实惠，还有旅游专线连接多个景点。</p>
      <p><strong>建议停留时间：</strong>深度探索西安需4-5天，而游览主要景点至少需2-3天。</p>
      <p><strong>消费水平：</strong>与中国其他主要旅游城市相比，西安的消费水平适中，为游客提供良好的性价比。</p>
      `
    },
    {
      title: "必游景点",
      content: `
      <h3>兵马俑博物馆</h3>
      <p>被誉为"世界第八奇迹"的兵马俑是秦始皇陵墓的陪葬坑，展示了一支令人印象深刻的古代军队。数千个真人大小的陶俑各自拥有独特鲜活的表情，展示了秦朝卓越的艺术成就和军事力量。</p>
      <p><strong>旅行贴士：</strong>计划半天时间，按1号坑、3号坑、2号坑的顺序参观以获得最佳体验。使用导游或语音导览了解背景。避开节假日的高峰期，考虑提前在线购票。博物馆距市中心约1小时车程，可乘坐旅游专线或306路公交车。</p>

      <h3>西安城墙</h3>
      <p>中国最大且保存最完好的古代城墙，建于明朝初期。长方形城墙环绕古城，全长约14公里。游客可在城墙上骑自行车，俯瞰西安古城风貌。</p>
      <p><strong>旅行贴士：</strong>从南门进入，租自行车环城墙一周（约90-120分钟），或使用电动观光车。黄昏时分参观，欣赏古都美丽景色。城墙有季节性灯光秀，提供壮观的夜景。</p>

      <h3>大雁塔与大唐芙蓉园</h3>
      <p>大雁塔是唐代著名的佛教建筑，在玄奘法师的监督下建造，用于存放从印度带回的佛经和佛像。高64米，从顶端可俯瞰整个西安市。大唐芙蓉园是现代重建的唐风园林，已成为西安夜生活的中心。</p>
      <p><strong>旅行贴士：</strong>白天参观大雁塔并登上塔顶。晚上欣赏塔北广场的音乐喷泉（每晚整点表演），然后体验活力四射的大唐芙蓉园。购买大雁塔和大慈恩寺的联票可以节省费用。</p>

      <h3>陕西历史博物馆</h3>
      <p>中国最早的国家博物馆之一，收藏了从史前到现代在陕西出土的珍贵文物，全面展示中国文明的发展。尤其丰富的是周、秦、汉、唐朝代的艺术杰作。</p>
      <p><strong>旅行贴士：</strong>入场免费但需提前预约，每日票数有限。安排半天时间详细参观，重点关注周秦青铜器、唐代金银器和唐三彩。强烈推荐使用语音导览，导游讲解需提前预约。</p>

      <h3>回民街</h3>
      <p>西安著名的文化美食街，聚集了数百家提供陕西和穆斯林风味的餐馆。除了美食，这里还有丰富的民间工艺品和传统表演，是体验西安本地文化的理想场所。</p>
      <p><strong>旅行贴士：</strong>晚餐前参观，品尝各种小吃如羊肉泡馍、肉夹馍、柿子饼等。注意保管贵重物品，部分商家可能价格高而质量低，建议提前调研或请教当地人推荐。</p>
      `
    },
    {
      title: "独特体验",
      content: `
      <h3>城墙骑行</h3>
      <p>在西安古城墙上骑自行车是体验这座古都独特魅力的最佳方式之一。沿着600多年历史的城墙骑行，一侧是现代摩天大楼，另一侧是古城风貌，创造出一种仿佛穿越时光的体验。</p>
      <p><strong>体验贴士：</strong>城墙上有多个自行车租赁点，可以通过留下身份证或护照租借自行车。全程环城约14公里，需1.5-2小时。避开正午时分，选择清晨或傍晚以获得更好的拍照光线条件。</p>

      <h3>观看秦腔表演</h3>
      <p>秦腔是中国最古老的戏曲形式之一，被称为"中国戏曲的鼻祖"，以高亢激烈的唱腔和夸张的表演技巧为特点。在西安观看正宗的秦腔表演，可以窥见陕西传统文化的一角。</p>
      <p><strong>体验贴士：</strong>西安易俗社剧场和陕西大剧场定期举办秦腔演出。对于首次观看的观众，建议选择如《三滴血》或《花亮花亮》等著名剧目。提前30分钟到达，可以观看演员的化妆过程展示。</p>

      <h3>制作自己的兵马俑</h3>
      <p>兵马俑景区附近的一些工艺品工作室提供DIY制作体验。在工匠的指导下，游客可以创作自己的迷你兵马俑，学习制作技巧，并将作品作为纪念品带回家。</p>
      <p><strong>体验贴士：</strong>完整体验约需1小时，非常适合家庭活动。价格根据大小和细节程度从50到200元不等。作品需要干燥时间，部分工作室提供烧制或邮寄服务。</p>

      <h3>华山观日出</h3>
      <p>华山是中国五大名山之一，以险峻的地形著称。从华山东峰观看日出是许多游客的梦想。太阳从云海中升起，金色的光芒洒在群山上，这壮观的体验将留下难忘的记忆。</p>
      <p><strong>体验贴士：</strong>从西安乘坐高铁到华山站（约40分钟），然后乘坐班车到山脚。考虑使用缆车节省体力。理想情况下，前一天下午登山，在山顶过夜，第二天早晨欣赏日出。即使在夏季，山顶夜晚也很凉爽，请携带保暖衣物。</p>

      <h3>欣赏唐代歌舞表演</h3>
      <p>唐朝是中国音乐和舞蹈的黄金时代。西安的几家剧院提供唐风歌舞演出，重现这个繁荣时期的宏伟歌舞。大型演出如《长恨歌》或《大唐歌舞秀》展示了唐朝的文化辉煌。</p>
      <p><strong>体验贴士：</strong>华清池的《长恨歌》是最著名的实景演出，建议至少提前一周预订。大唐芙蓉园和大唐不夜城也提供规模较小的定期演出。夏季演出常在户外举行，请做好防蚊和应对温度变化的准备。</p>
      `
    },
    {
      title: "美食指南",
      content: `
      <h3>陕西特色面食</h3>
      <p>西安是面食爱好者的天堂，以各种风味如biangbiang面、牛肉面和岐山臊子面而闻名。特别值得注意的是"biangbiang面"，因其"biang"字（中国最复杂汉字之一）和宽厚的面条形状而出名，配以特制辣油和各种香料，提供美味的风味体验。</p>
      <p><strong>推荐餐厅：</strong>老米家biangbiang面、西安盘之花、老孙家。点小份量以尝试不同种类，体验陕西面食的丰富多样性。</p>

      <h3>羊肉泡馍</h3>
      <p>西安最著名的传统菜肴之一，起源于唐朝宫廷美食。食客亲手将烤好的馍（面饼）掰成小块，然后浇上炖煮的羊肉汤。正宗做法中，食客将馍掰成豆粒大小，厨师再加入炖煮数小时的羊肉汤、羊肉片、粉丝等。</p>
      <p><strong>推荐餐厅：</strong>老孙家、同盛祥、老马家。可加少量醋和辣油提升风味。正宗泡馍需要特制馍和长时间炖煮的汤，才能提供最佳口感。</p>

      <h3>肉夹馍</h3>
      <p>被称为"中国汉堡"的肉夹馍是西安最著名的小吃之一。这道美食由炖煮入味的肉（通常是猪肉）剁碎后夹在烤制的面饼中，创造出外酥里嫩、肉汁丰富的美味组合，带有浓郁的肉香。</p>
      <p><strong>推荐地点：</strong>回民街的回记肉夹馍和老刘家肉夹馍。真正的肉夹馍特点是酥脆的馍和多汁但不油腻的肉。您可以根据口味加入辣酱或其他调料。</p>

      <h3>凉皮和各类小吃</h3>
      <p>凉皮（米皮）是西安最受欢迎的夏季小吃，以清爽和丰富的调味料闻名。此外，西安还有许多其他小吃如杂肠、长安花卷、蒸粉肠和柿子饼，每种都有独特风味和悠久历史。</p>
      <p><strong>推荐地点：</strong>回民街、东新食品街和大差市食品街都是尝试各种小吃的绝佳地点。小吃通常价格在5至20元之间，准备好零钱并尝试各种不同种类。</p>

      <h3>穆斯林风味美食</h3>
      <p>西安有大量的穆斯林社区，伊斯兰餐厅提供清真菜肴如牛羊肉泡馍、羊肉串和手工面条。这些食物以独特的香料调味，风味丰富，是西安美食文化的重要组成部分。</p>
      <p><strong>推荐餐厅：</strong>老东家牛羊肉泡馍、马帮家羊肉、大皮院餐厅。用餐时请尊重伊斯兰饮食习惯，避免携带猪肉制品进入清真餐厅。</p>
      `
    },
    {
      title: "文化与历史洞察",
      content: `
      <h3>十三朝古都的历史变迁</h3>
      <p>西安（古称长安）曾是周、秦、汉、唐等十三个朝代的都城或政治中心，历时1100多年。每个朝代都在这座城市留下了独特的文化印记。周朝的礼乐文明、秦朝的中央集权、汉唐的开放包容，都是中国文明的重要里程碑。</p>
      <p>唐朝时期，长安是世界上最繁华的城市之一，人口超过百万，街道整齐，宫殿辉煌，是东西方文化交流的重要枢纽。今天西安的城市格局仍保留着唐代长安的痕迹。</p>

      <h3>丝绸之路的东方起点</h3>
      <p>西安是古代丝绸之路的起点。从汉朝张骞出使西域开始，这条横跨大陆的贸易路线促进了东西方文化交流。通过丝绸之路，中国的丝绸、瓷器、茶叶传到西方，而西方的天文、历法、音乐、艺术和宗教思想也进入中国，丰富了中国文化。</p>
      <p>西安市内的大雁塔和回坊的大清真寺等建筑都是丝绸之路文化交流的见证。陕西历史博物馆展出的各种进口品生动展示了古代东西交流的历史。</p>

      <h3>唐文化的辉煌与影响</h3>
      <p>唐朝是中国历史上最开放繁荣的时期之一，其文化成就深刻影响了后世。唐诗的辉煌、唐制的完善、唐艺的精美共同构成了灿烂的唐文化。作为唐朝的首都，西安处处带有唐文化的影响。</p>
      <p>现代西安的城市建设和文化活动也大量融入和再现唐朝元素，如大唐芙蓉园、大唐不夜城等，重现了繁盛唐朝的辉煌场景，让游客能在现代城市中体验唐文化的魅力。</p>

      <h3>宗教多元与文化融合</h3>
      <p>西安历史上是多元宗教和文化交流的中心。佛教在汉朝传入中国后，在西安扎根发展。唐朝时期，道教、景教（聂斯托里派基督教）、摩尼教、祆教、伊斯兰教等宗教在长安共存发展，形成多元包容的文化氛围。</p>
      <p>今天的西安仍保留着大慈恩寺、青龙寺、大清真寺等各种宗教遗迹。这些不仅是宗教场所，也是研究中国宗教史和中外文化交流的重要资源。市中心的穆斯林社区和回民街展示了伊斯兰文化如何与中国传统文化和谐共存并相互影响。</p>
      `
    }
  ]
};

// 英文内容
const xianContentEn: DestinationContent = {
  title: "Xi'an the Ancient",
  subtitle: "Capital of 13 dynasties, eastern starting point of the Silk Road",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Xi'an (formerly Chang'an) is one of China's most famous ancient cities, having served as capital or political center for 13 dynasties, including the Zhou, Qin, Han, and Tang. As the eastern starting point of the Silk Road, this city has over 3,100 years of history, with more than 1,100 years as a capital, nurturing the brilliant Chinese civilization.</p>
      <p>Modern Xi'an perfectly blends the ancient and contemporary. The imposing city walls surround the bustling downtown, and World Heritage sites like the Terracotta Army and Giant Wild Goose Pagoda coexist harmoniously with busy commercial districts. The enticing aroma of Muslim cuisine wafts through the Muslim Quarter, and the Tang Paradise glitters at night, testifying to this ancient capital's rich cultural heritage and modern vitality.</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best seasons to visit:</strong> Spring (April-May) and autumn (September-October) offer pleasant weather, ideal for sightseeing.</p>
      <p><strong>Climate characteristics:</strong> Semi-humid continental monsoon climate with four distinct seasons. Summers are hot, winters cold and dry, while spring and autumn are mild and pleasant.</p>
      <p><strong>Transportation:</strong> Xi'an's subway network is extensive, serving major tourist attractions. The bus system is well-developed, taxis are affordable, and tourist shuttles connect multiple sites.</p>
      <p><strong>Recommended stay duration:</strong> To explore Xi'an thoroughly, 4-5 days are necessary, while at least 2-3 days are required to visit the main attractions.</p>
      <p><strong>Cost level:</strong> Compared to other major Chinese tourist cities, Xi'an's consumption level is moderate, offering tourists good value for money.</p>
      `
    },
    {
      title: "Must-Visit Attractions",
      content: `
      <h3>Terracotta Army Museum</h3>
      <p>Dubbed the "eighth wonder of the world," the Terracotta Army is a burial pit of Emperor Qin Shi Huang's mausoleum, featuring an impressive ancient army. Thousands of life-sized terracotta warriors each bear unique, vivid expressions, showcasing the Qin Dynasty's remarkable artistic achievement and military might.</p>
      <p><strong>Travel tip:</strong> Plan half a day and visit the pits in order of 1, 3, then 2 for the optimal experience. Use a guide or audio tour to understand the context. Avoid peak hours during holidays and consider purchasing tickets online in advance. The museum is about 1 hour's drive from downtown. Use the tourist shuttle or bus 306.</p>

      <h3>Xi'an City Wall</h3>
      <p>China's largest and best-preserved ancient city wall, built during the early Ming Dynasty. The rectangular walls encircle the ancient city, with a total length of about 14 kilometers. Visitors can cycle on the wall and enjoy a panoramic view of Xi'an's old town.</p>
      <p><strong>Travel tip:</strong> Enter through the South Gate and rent a bicycle to tour the wall (approximately 90-120 minutes), or use an electric sightseeing vehicle. Visit at sunset to enjoy beautiful views of the ancient capital. The wall features seasonal light shows, offering a spectacular night landscape.</p>

      <h3>Giant Wild Goose Pagoda and Tang Paradise</h3>
      <p>The Giant Wild Goose Pagoda is a famous Buddhist structure from the Tang Dynasty, built under the supervision of monk Xuanzang to house Buddhist scriptures and statues brought back from India. At 64 meters high, it offers a panoramic view of the entire city of Xi'an. Tang Paradise is a modern reconstruction in Tang style and has become Xi'an's nightlife center.</p>
      <p><strong>Travel tip:</strong> Visit the Giant Wild Goose Pagoda during the day and climb to the top. In the evening, admire the musical fountains in the north square of the pagoda (hourly shows every evening), then experience the vibrant atmosphere of Tang Paradise. Purchase a combined ticket for the Giant Wild Goose Pagoda and Da Ci'en Temple to save money.</p>

      <h3>Shaanxi History Museum</h3>
      <p>One of China's first national museums, housing precious relics excavated in Shaanxi from prehistoric to modern times, offering a comprehensive overview of Chinese civilization's development. Artistic masterpieces from the Zhou, Qin, Han, and Tang dynasties are particularly abundant.</p>
      <p><strong>Travel tip:</strong> Admission is free but requires advance reservation, with a limited number of daily tickets. Dedicate half a day for a detailed visit, focusing on Zhou-Qin bronzes, Tang gold and silver, and Tang tri-colored pottery. An audio guide is highly recommended, and guided tours need to be booked in advance.</p>

      <h3>Muslim Quarter</h3>
      <p>A famous cultural and gastronomic street in Xi'an, featuring hundreds of restaurants with local Shaanxi and Muslim flavors. Besides food, there are also rich folk crafts and traditional performances, making it an ideal place to experience Xi'an's local culture.</p>
      <p><strong>Travel tip:</strong> Visit before dinner to sample various snacks like yangrou paomo (lamb soup with bread), roujiamo (Chinese hamburger), persimmon cake, etc. Be mindful of your valuables, and note that some shops may have high prices and lower quality, so it's advisable to research in advance or ask locals for recommendations.</p>
      `
    },
    {
      title: "Unique Experiences",
      content: `
      <h3>Cycling on the City Wall</h3>
      <p>Cycling on Xi'an's ancient city wall is one of the best ways to discover this ancient city's unique charm. Pedaling along the 600-year-old walls, you'll see modern skyscrapers on one side and the ancient city landscape on the other, creating an experience like time travel.</p>
      <p><strong>Experience tip:</strong> There are several bicycle rental points on the wall where you can rent a bike by leaving an ID card or passport. A complete circuit is about 14 kilometers and takes 1.5-2 hours. Avoid midday hours and choose early morning or late afternoon for better lighting conditions for photography.</p>

      <h3>Watching a Qin Opera Performance</h3>
      <p>Qinqiang is one of China's oldest forms of opera, nicknamed "the ancestor of Chinese opera," characterized by high-pitched singing style and exaggerated performance techniques. Watching an authentic Qinqiang performance in Xi'an offers a window into traditional Shaanxi culture.</p>
      <p><strong>Experience tip:</strong> Xi'an Yisu Theater and Shaanxi Grand Theater regularly host Qinqiang performances. For first-time spectators, it's recommended to choose famous pieces like "Sanjiegu" or "Huayanguo". By arriving 30 minutes before the show, you might see an exhibition of the actors' makeup process.</p>

      <h3>Creating Your Own Terracotta Warrior</h3>
      <p>Some craft workshops near the Terracotta Army site offer DIY making experiences. Under the guidance of craftsmen, visitors can create their own mini terracotta warrior, learn manufacturing techniques, and take their creation home as a souvenir.</p>
      <p><strong>Experience tip:</strong> The complete experience takes about 1 hour and is perfect for family activities. Prices range from 50 to 200 yuan depending on size and detail. The creations require drying time, and some workshops offer firing or shipping services.</p>

      <h3>Watching Sunrise on Mount Hua</h3>
      <p>Mount Hua is one of China's five sacred mountains, known for its steep terrain. Watching the sunrise from the East Peak of Mount Hua is the dream of many visitors. This spectacular experience, where the sun emerges from a sea of clouds casting golden light on the mountains, will leave an unforgettable memory.</p>
      <p><strong>Experience tip:</strong> Take the high-speed train from Xi'an to Mount Hua (about 40 minutes), then a shuttle bus to the foot of the mountain. Consider using the cable car to save energy. Ideally, climb in the afternoon of the previous day, spend the night at the summit, and enjoy the sunrise early the next morning. Even in summer, nights at the summit are cool, so bring warm clothing.</p>

      <h3>Enjoying a Tang Dynasty Song and Dance Performance</h3>
      <p>The Tang Dynasty was the golden age of Chinese music and dance. Several theaters in Xi'an offer Tang-style song and dance shows, recreating the magnificent songs and dances of this prosperous dynasty. Large-scale shows like "Song of Everlasting Sorrow" or "Tang Dynasty Grand Dance" illustrate the cultural splendor of the Tang Dynasty.</p>
      <p><strong>Experience tip:</strong> "Song of Everlasting Sorrow" at Huaqing Pool is the most famous scenic performance; it's advisable to book at least a week in advance. Tang Paradise and Tang City also offer regular smaller-scale performances. Summer shows often take place outdoors, so prepare for mosquitoes and temperature changes.</p>
      `
    },
    {
      title: "Food Guide",
      content: `
      <h3>Shaanxi Special Noodles</h3>
      <p>Xi'an is a paradise for noodle enthusiasts, famous for its various flavors such as "Biangbiang" noodles, beef noodles, and Qishan Saozi noodles. Particularly remarkable are the "Biangbiang" noodles, known for their "Biang" character (one of the most complex Chinese characters) and their wide, thick noodle shape, served with special chili oil and various spices for a delicious flavor.</p>
      <p><strong>Recommended restaurants:</strong> Lao Mi Jia Biangbiang Noodles, Xi'an Panzhihua, Lao Sun Jia. Order small portions to try different varieties and experience the rich diversity of Shaanxi noodles.</p>

      <h3>Yangrou Paomo (Lamb Soup with Bread)</h3>
      <p>One of Xi'an's most famous traditional dishes, originating from Tang Dynasty court cuisine. The diner tears baked bread (mo) into small pieces, over which stewed lamb soup is poured. In the authentic method, the diner tears the bread into bean-sized pieces, then the chef adds lamb soup stewed for hours, lamb slices, vermicelli, etc.</p>
      <p><strong>Recommended restaurants:</strong> Lao Sun Jia, Tong Sheng Xiang, Lao Ma Jia. You can add a bit of vinegar and chili oil to enhance the flavor. Authentic paomo requires special bread and long-stewed soup to offer the best taste.</p>

      <h3>Roujiamo (Chinese Hamburger)</h3>
      <p>Nicknamed the "Chinese hamburger," roujiamo is one of Xi'an's most famous snacks. This dish consists of stewed, seasoned meat (usually pork) finely chopped and placed between baked flatbreads, creating a delicious combination of crispy exterior and flavorful juicy interior with a rich meaty aroma.</p>
      <p><strong>Recommended places:</strong> Huiji Roujiamo and Lao Liu Jia Roujiamo in the Muslim Quarter. A genuine roujiamo is characterized by crispy bread and flavorful meat that isn't greasy. You can add chili sauce or other condiments according to your taste.</p>

      <h3>Liangpi and Various Snacks</h3>
      <p>Liangpi (cold rice noodles) is Xi'an's most popular summer snack, known for its freshness and rich seasonings. Additionally, Xi'an offers many other snacks like Zaxiaozi tanfu, Chang'an Huajuan, steamed rice cakes, and persimmon cake, each with a unique flavor and long history.</p>
      <p><strong>Recommended places:</strong> The Muslim Quarter, Dongxin Food Street, and Dachashi Food Street are all excellent places to try various snacks. Snacks generally cost between 5 and 20 yuan, so prepare small change and try different varieties.</p>

      <h3>Muslim-flavored Cuisine</h3>
      <p>Xi'an is home to a large Muslim population, and Islamic restaurants offer halal dishes such as beef and lamb paomo, lamb skewers, and handmade noodles. These foods, characterized by distinctive spices, are rich in flavor and form an important part of Xi'an's culinary culture.</p>
      <p><strong>Recommended restaurants:</strong> Lao Dong Jia beef and lamb paomo, Ma Bo Jia lamb meat, Da Pi Yuan Restaurant. When dining, respect Islamic dietary customs and avoid bringing pork products into halal restaurants.</p>
      `
    },
    {
      title: "Cultural and Historical Insights",
      content: `
      <h3>Historical Transition of 13 Dynasty Capitals</h3>
      <p>Xi'an (formerly Chang'an) served as the capital or political center for 13 dynasties, including the Zhou, Qin, Han, and Tang, for over 1,100 years. Each dynasty left a unique cultural imprint on this city. The ritual and music civilization of the Zhou Dynasty, the centralization of the Qin Dynasty, the openness and inclusivity of the Han and Tang all represent important milestones in Chinese civilization.</p>
      <p>During the Tang Dynasty, Chang'an was one of the world's most prosperous cities, with a population exceeding one million, orderly streets and magnificent palaces, serving as an important hub for East-West cultural exchanges. The urban structure of present-day Xi'an still bears traces of Tang Dynasty Chang'an.</p>

      <h3>Eastern Starting Point of the Silk Road</h3>
      <p>Xi'an was the starting point of the ancient Silk Road. Beginning with Zhang Qian's journey to the Western Regions during the Han Dynasty, this transcontinental trade route facilitated cultural exchanges between East and West. Via the Silk Road, Chinese silk,瓷器、茶叶传到西方，而西方的天文、历法、音乐、艺术和宗教思想也进入中国，丰富了中国文化。</p>
      <p>西安市内的大雁塔和回坊的大清真寺等建筑都是丝绸之路文化交流的见证。陕西历史博物馆展出的各种进口品生动展示了古代东西交流的历史。</p>

      <h3>Tang Culture's Splendor and Influence</h3>
      <p>The Tang Dynasty was one of the most open and prosperous periods in Chinese history, and its cultural achievements profoundly influenced future generations. The splendor of Tang poetry, the perfection of Tang institutions, and the sophistication of Tang art combine to form the brilliant Tang culture. As the capital of the Tang Dynasty, Xi'an bears the influence of Tang culture everywhere.</p>
      <p>Modern Xi'an's urban development and cultural activities also widely incorporate and recreate Tang elements, such as the Tang Paradise or the Tang City, recreating the magnificent scenes of the flourishing Tang Dynasty, allowing visitors to experience the charm of Tang culture in a modern city.</p>

      <h3>Religious Diversity and Cultural Integration</h3>
      <p>Xi'an has historically been a center for diverse religious and cultural exchanges. After Buddhism was introduced to China during the Han Dynasty, it took root and developed in Xi'an. During the Tang Dynasty, religions such as Taoism, Nestorianism (Nestorian Christianity), Manichaeism, Zoroastrianism, and Islam coexisted and developed in Chang'an, forming a pluralistic and inclusive cultural atmosphere. </p>
      <p>Today, Xi'an still preserves various religious relics such as the Da Ci'en Temple, the Qinglong Temple, and the Great Mosque. These are not only religious sites but also important resources for studying Chinese religious history and cultural exchanges between China and foreign countries. The Muslim community in the city center and the Muslim Quarter show how Islamic culture coexists harmoniously and influences traditional Chinese culture.</p>
      `
    }
  ]
};

// 组合所有语言内容
export const xianContent: Record<Language, DestinationContent> = {
  zh: xianContentZh,
  en: xianContentEn,
  fr: xianContentFr,
  de: xianContentDe,
  es: xianContentEs,
  ja: xianContentJa,
  ko: xianContentKo,
  ru: xianContentRu
}; 