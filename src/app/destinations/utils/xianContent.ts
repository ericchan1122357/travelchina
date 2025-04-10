import { Language } from '@/contexts/LanguageContext';
import { DestinationContent } from './destinationContent';

// 西安的中文内容
const xianContentZh: DestinationContent = {
  title: "古都西安",
  subtitle: "十三朝古都，丝路东方起点",
  sections: [
    {
      title: "初印象",
      content: `
      <p>西安，古称长安，是中国最著名的古都之一，曾是周、秦、汉、唐等十三个朝代的国都或政治中心。作为丝绸之路的东方起点，这座城市拥有3100多年的历史，其中1100多年的建都史，孕育了辉煌的中华文明。</p>
      <p>现代的西安完美融合了古老与现代。雄伟的城墙环绕着繁华的市中心，兵马俑、大雁塔等世界文化遗产与热闹的商业区相映成趣。回民街上弥漫着诱人的伊斯兰美食香气，大唐不夜城在夜晚璀璨夺目，展现了这座千年古都深厚的文化底蕴和现代活力。</p>
      `
    },
    {
      title: "基本信息速览",
      content: `
      <p><strong>最佳旅游季节：</strong>春季（4-5月）和秋季（9-10月）气候宜人，最适合旅游。</p>
      <p><strong>气候特点：</strong>温带半湿润季风气候，四季分明。夏季炎热，冬季寒冷干燥，而春秋两季温和舒适。</p>
      <p><strong>交通方式：</strong>西安地铁四通八达，覆盖主要景点，公交系统完善，出租车价格合理，还有连接各景区的旅游专线。</p>
      <p><strong>建议游览天数：</strong>全面游览西安需要4-5天，主要景点游览至少需要2-3天。</p>
      <p><strong>消费水平：</strong>相较于中国其他主要旅游城市，西安消费水平中等，性价比高，是经济实惠的旅游目的地。</p>
      `
    },
    {
      title: "必游景点",
      content: `
      <h3>秦始皇兵马俑博物馆</h3>
      <p>被誉为"世界第八大奇迹"的兵马俑，是秦始皇陵的陪葬坑，展示了气势恢宏的古代军阵。数以千计的真人大小陶俑，每个面容不同，栩栩如生，展示了惊人的艺术成就和秦朝的强大军事力量。</p>
      <p><strong>旅行贴士：</strong>建议预留半天时间，按1号坑、3号坑、2号坑的顺序参观，配合讲解或语音导览。避开节假日高峰，可提前网上购票。博物馆距离市区约1小时车程，可乘坐旅游专线或306路公交车前往。</p>

      <h3>西安城墙</h3>
      <p>中国现存规模最大、保存最完整的古代城垣建筑，始建于明朝初年。城墙呈矩形环绕古城，总长约14公里，城墙上可骑行观光，俯瞰西安古城风貌。</p>
      <p><strong>旅行贴士：</strong>可在南门登城，租自行车环城骑行（约需90-120分钟），或选择电瓶观光车游览。黄昏时分登城，可以欣赏夕阳下的古城美景。城墙有四季灯光秀，夜景十分壮观。</p>

      <h3>大雁塔与大唐不夜城</h3>
      <p>大雁塔是唐代著名的佛教建筑，由玄奘法师主持建造，用于存放从印度带回的佛经和佛像。塔高64米，登顶可俯瞰西安全景。大唐不夜城则是现代重建的唐风建筑群，是西安夜生活的中心。</p>
      <p><strong>旅行贴士：</strong>白天参观大雁塔，可进入塔内登塔；傍晚欣赏大雁塔北广场的音乐喷泉（每晚定时表演），夜晚体验大唐不夜城的繁华。购买大雁塔-大慈恩寺联票更划算。</p>

      <h3>陕西历史博物馆</h3>
      <p>中国首批国家级博物馆，收藏了陕西出土的上至远古、下至近代的珍贵文物，全面展示了中华文明的发展历程。周、秦、汉、唐等朝代的艺术精品尤为丰富。</p>
      <p><strong>旅行贴士：</strong>免费开放但需提前预约，每天限量发放门票。建议预留半天时间细细参观，重点关注商周青铜器、唐代金银器和唐三彩等镇馆之宝。讲解器租用很有必要，讲解员导览需提前预约。</p>

      <h3>回民街</h3>
      <p>西安著名的美食文化街区，聚集了数百家陕西特色小吃和穆斯林风味餐厅。这里不仅有美食，还有丰富的民俗工艺品和传统表演，是体验西安市井文化的最佳场所。</p>
      <p><strong>旅行贴士：</strong>晚饭时间前往，可品尝各类小吃如羊肉泡馍、肉夹馍、柿子饼等。注意保管好随身财物，部分店铺可能价高质低，建议先做功课或请当地人推荐。</p>
      `
    },
    {
      title: "独特体验",
      content: `
      <h3>城墙上骑行</h3>
      <p>在西安古城墙上骑自行车是体验这座古都独特魅力的绝佳方式。沿着600多年历史的城墙骑行，一侧是现代高楼大厦，一侧是传统的古城风貌，这种穿越时空的体验令人难忘。</p>
      <p><strong>体验贴士：</strong>城墙上有多个租车点，可使用身份证或护照押金租车。全程约14公里，骑行需1.5-2小时，建议避开正午时段，选择清晨或傍晚，光线更适合拍照。</p>

      <h3>秦腔表演</h3>
      <p>秦腔是中国最古老的戏曲剧种之一，被称为"中国戏曲的鼻祖"，具有高亢激越的唱腔和夸张的表演风格。在西安观看正宗的秦腔表演，是了解陕西传统文化的窗口。</p>
      <p><strong>体验贴士：</strong>西安易俗社和陕西大剧院经常有秦腔演出。初次接触秦腔可选择《三滴血》《火焰驹》等名段欣赏。正式演出前可提前半小时到场，有时会有演员化妆过程展示。</p>

      <h3>制作兵马俑泥塑</h3>
      <p>在兵马俑景区附近有多家手工艺坊提供兵马俑泥塑DIY体验，游客可以在艺匠指导下亲手制作小型兵马俑，了解兵马俑的制作工艺，并将作品带回家作为纪念。</p>
      <p><strong>体验贴士：</strong>完整体验约需1小时，适合亲子活动。价格从50-200元不等，视规模和精细程度而定。作品需要晾干，有些工艺坊提供烧制和邮寄服务。</p>

      <h3>华山日出</h3>
      <p>华山是中国五岳之一，以险峻著称。登顶华山东峰观日出是许多游客的梦想。当朝阳从云海中升起，金光洒向群山，这种震撼的体验会成为难忘的记忆。</p>
      <p><strong>体验贴士：</strong>可乘坐西安至华山的高铁（约40分钟），然后转乘景区班车至山脚。建议搭乘索道上山节省体力，最好提前一天下午上山，在山顶住宿，清晨观赏日出。携带保暖衣物，即使夏季山顶也较凉。</p>

      <h3>仿唐歌舞表演</h3>
      <p>唐代是中国音乐舞蹈的鼎盛时期，西安有多个剧场提供仿唐歌舞表演，重现盛唐时期的华丽歌舞，如《长恨歌》《大唐歌舞》等大型实景演出，展现了唐代的文化盛况。</p>
      <p><strong>体验贴士：</strong>华清池的《长恨歌》是最著名的实景演出，建议提前一周预订。大唐芙蓉园和大唐不夜城也有规模较小的常规演出。夏季多在户外，请做好防蚊和气温变化的准备。</p>
      `
    },
    {
      title: "美食指南",
      content: `
      <h3>陕西特色面食</h3>
      <p>西安是面食天堂，以biáng biáng面、牛肉拉面、岐山臊子面等多种风味面食闻名。特别是biáng biáng面，因其独特的"biáng"字（最复杂的汉字之一）和宽厚的面条形状而知名，配以特制的辣椒油和各种调料，味道鲜香可口。</p>
      <p><strong>推荐餐厅：</strong>老米家biáng biáng面、西安饭庄、西安老孙家。建议点小份尝试不同种类，感受陕西面食的丰富变化。</p>

      <h3>羊肉泡馍</h3>
      <p>西安最负盛名的传统美食，源自唐代的宫廷菜肴。食用时将烙好的馍（硬饼）掰成小块，与炖煮的羊肉汤一起食用。讲究的做法是由食客亲手将馍掰成黄豆大小，然后厨师加入熬制数小时的羊肉汤、羊肉片和粉丝等。</p>
      <p><strong>推荐餐厅：</strong>老孙家、同盛祥、老马家羊肉泡馍。品尝时可以加入少量醋和辣椒油提味，正宗的泡馍需要特制的馍和长时间炖煮的汤，口感才最佳。</p>

      <h3>肉夹馍</h3>
      <p>被誉为"中国汉堡"的肉夹馍，是西安最著名的小吃之一。将腌制炖煮入味的肉（通常是猪肉）切碎，夹在烤制的白吉馍内，外酥里嫩，肉香四溢。</p>
      <p><strong>推荐品尝地点：</strong>回民街的惠记肉夹馍、老刘家肉夹馍。正宗的肉夹馍馍要酥脆，肉要香而不腻，可根据喜好加入辣椒酱或其他调料。</p>

      <h3>凉皮与各种小吃</h3>
      <p>凉皮是西安夏季最受欢迎的小吃，以清爽的口感和丰富的调味而闻名。此外，西安还有贾三灌汤包、长安糊锅、甑糕、柿子饼等多种小吃，每一种都有独特的风味和悠久的历史。</p>
      <p><strong>推荐品尝地点：</strong>回民街、东新街美食街、大差市美食街都是品尝各类小吃的好去处。建议准备零钱，小吃价格通常在5-20元之间，可以多尝试不同种类。</p>

      <h3>穆斯林风味美食</h3>
      <p>西安有大量的穆斯林人口，穆斯林风味餐厅提供符合清真标准的美食，如牛羊肉泡馍、羊肉串、手抓饭等。这些食物口味浓郁，香料独特，是西安饮食文化的重要组成部分。</p>
      <p><strong>推荐餐厅：</strong>老董家牛羊肉泡馍、马博家羊肉、大皮院餐厅。用餐时请尊重穆斯林的饮食习惯，不要携带猪肉制品进入清真餐厅。</p>
      `
    },
    {
      title: "文化历史洞察",
      content: `
      <h3>十三朝古都的历史变迁</h3>
      <p>西安（古称长安）先后成为周、秦、汉、唐等十三个朝代的都城或政治中心，历史跨度超过1100年。每个朝代都为这座城市留下了独特的文化印记。周代的礼乐文明、秦朝的中央集权、汉唐的开放包容，都是中华文明的重要里程碑。</p>
      <p>唐朝时期的长安是当时世界上最繁华的都市之一，人口超过一百万，街道整齐划一，宫殿恢宏壮丽，是东西方文化交流的重要枢纽。今天的西安城市布局仍然保留着唐长安城的痕迹。</p>

      <h3>丝绸之路的东方起点</h3>
      <p>西安是古代丝绸之路的起点，自汉代张骞通西域始，这条横贯亚欧的商道促进了东西方文明的交流。通过丝绸之路，中国的丝绸、瓷器、茶叶等商品传播到西方，而西方的天文历法、音乐艺术、宗教思想也传入中国，丰富了中国文化。</p>
      <p>西安城内的大雁塔、化觉巷清真大寺等建筑，都是丝路文化交流的见证。陕西历史博物馆中展示的各类舶来品，生动地呈现了古代东西方交流的历史。</p>

      <h3>唐文化的辉煌与影响</h3>
      <p>唐代是中国历史上最为开放、繁荣的时期之一，其文化成就对后世影响深远。唐诗的辉煌、唐制度的完善、唐艺术的精湛，共同构成了灿烂的唐文化。西安作为唐王朝的都城，处处可见唐文化的影响。</p>
      <p>现代西安的城市建设和文化活动也大量吸收和重现唐代元素，如大唐芙蓉园、大唐不夜城等，试图重现盛唐时期的壮丽景象，让游客在现代城市中感受唐文化的魅力。</p>

      <h3>宗教多元与文化交融</h3>
      <p>西安历来是各种宗教和文化交流融合的中心。佛教在汉朝传入中国后，在西安扎根发展；唐朝时期，道教、景教（基督教聂斯脱利派）、摩尼教、琐罗亚斯德教、伊斯兰教等多种宗教在长安城共存发展，形成了多元包容的文化氛围。</p>
      <p>今天的西安仍然保存着多种宗教的古迹，如大慈恩寺、青龙寺、大清真寺等，这些古迹不仅是宗教场所，更是研究中国宗教史和中外文化交流的重要资料。城内的穆斯林社区和回民街展示了伊斯兰文化如何与中国传统文化和谐共存并相互影响。</p>
      `
    }
  ]
};

// 西安的英文内容
const xianContentEn: DestinationContent = {
  title: "Ancient Capital Xi'an",
  subtitle: "Capital of thirteen dynasties, eastern starting point of the Silk Road",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Xi'an, formerly known as Chang'an, is one of China's most famous ancient capitals, having served as the capital or political center for thirteen dynasties including the Zhou, Qin, Han, and Tang. As the eastern starting point of the Silk Road, this city boasts over 3,100 years of history, including more than 1,100 years as a capital, nurturing the splendid Chinese civilization.</p>
      <p>Modern Xi'an perfectly blends the ancient with the contemporary. The magnificent city wall encircles the bustling city center, while world cultural heritage sites like the Terracotta Warriors and the Giant Wild Goose Pagoda complement the lively commercial districts. The enticing aroma of Islamic cuisine permeates the Muslim Quarter, and the Tang Dynasty-inspired Grand Tang Ever-Bright City dazzles at night, showcasing this ancient capital's profound cultural heritage and modern vitality.</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best time to visit:</strong> Spring (April-May) and autumn (September-October) offer pleasant climate, ideal for tourism.</p>
      <p><strong>Climate characteristics:</strong> Temperate semi-humid monsoon climate with four distinct seasons. Summers are hot, winters cold and dry, while spring and autumn are mild and comfortable.</p>
      <p><strong>Transportation methods:</strong> Xi'an's metro system is extensive, covering major attractions; the bus system is well-developed; taxis are reasonably priced; and tourist shuttle lines connect various scenic spots.</p>
      <p><strong>Recommended visit duration:</strong> A comprehensive tour of Xi'an requires 4-5 days, with at least 2-3 days needed for major attractions.</p>
      <p><strong>Cost level:</strong> Compared to other major Chinese tourist cities, Xi'an's cost level is moderate with high value for money, making it an economical tourist destination.</p>
      `
    },
    {
      title: "Must-Visit Attractions",
      content: `
      <h3>Terracotta Warriors Museum</h3>
      <p>Hailed as the "Eighth Wonder of the World," the Terracotta Warriors are burial pits of Emperor Qin Shi Huang's mausoleum, displaying a magnificent ancient military formation. Thousands of life-sized terracotta figures, each with unique facial features, demonstrate remarkable artistic achievement and the powerful military force of the Qin Dynasty.</p>
      <p><strong>Travel tips:</strong> Allow half a day for your visit and follow the order of Pit 1, Pit 3, then Pit 2 for the best experience. Use a guide or audio tour for context. Avoid holiday peak periods and consider buying tickets online in advance. The museum is about an hour's drive from downtown; take a tourist shuttle or Bus No. 306.</p>

      <h3>Xi'an City Wall</h3>
      <p>The largest and best-preserved ancient city wall in China, built in the early Ming Dynasty. The rectangular wall encircles the ancient city with a total length of about 14 kilometers. Visitors can cycle on the wall and enjoy a panoramic view of Xi'an's ancient city.</p>
      <p><strong>Travel tips:</strong> Enter from the South Gate and rent a bicycle to ride around the wall (takes about 90-120 minutes) or take an electric sightseeing car. Visit at sunset for beautiful views of the ancient city. The wall features seasonal light shows, making the night view spectacular.</p>

      <h3>Giant Wild Goose Pagoda & Grand Tang Ever-Bright City</h3>
      <p>The Giant Wild Goose Pagoda is a famous Buddhist structure from the Tang Dynasty, built under the supervision of Monk Xuanzang to house Buddhist scriptures and statues brought back from India. Standing 64 meters tall, it offers a panoramic view of Xi'an from the top. The Grand Tang Ever-Bright City is a modern reconstruction of Tang-style architecture and serves as the center of Xi'an's nightlife.</p>
      <p><strong>Travel tips:</strong> Visit the pagoda during the day and climb to the top; enjoy the music fountain at the North Square of the pagoda in the evening (scheduled performances nightly), and experience the bustling Grand Tang Ever-Bright City at night. Consider buying a combined ticket for the pagoda and Daci'en Temple for better value.</p>

      <h3>Shaanxi History Museum</h3>
      <p>One of China's first national-level museums, it houses precious relics excavated in Shaanxi from prehistory to modern times, comprehensively showcasing the development of Chinese civilization. The artistic masterpieces from the Zhou, Qin, Han, and Tang dynasties are particularly rich.</p>
      <p><strong>Travel tips:</strong> Admission is free but requires advance reservation, with limited daily tickets. Allow half a day for a thorough visit, focusing on the Zhou and Qin bronze ware, Tang Dynasty gold and silver ware, and Tang tri-colored pottery. Audio guides are highly recommended, and guided tours should be booked in advance.</p>

      <h3>Muslim Quarter</h3>
      <p>A famous food and cultural district in Xi'an, gathering hundreds of Shaanxi specialty snacks and Muslim-flavored restaurants. Beyond food, it offers rich folk crafts and traditional performances, making it the best place to experience Xi'an's local culture.</p>
      <p><strong>Travel tips:</strong> Visit before dinner time to sample various snacks like yangrou paomo (mutton soup with bread), roujiamo (Chinese hamburger), and persimmon cake. Watch your belongings and be aware that some shops may be overpriced with lower quality; research beforehand or ask locals for recommendations.</p>
      `
    },
    {
      title: "Unique Experiences",
      content: `
      <h3>Cycling on the City Wall</h3>
      <p>Riding a bicycle on Xi'an's ancient city wall is an excellent way to experience the unique charm of this ancient capital. Cycling along the 600-year-old wall, with modern skyscrapers on one side and traditional ancient city views on the other, creates an unforgettable time-traveling experience.</p>
      <p><strong>Experience tips:</strong> Multiple bicycle rental points are available on the wall, requiring ID card or passport as deposit. The entire circuit is about 14 kilometers, taking 1.5-2 hours to complete. Avoid midday, choosing early morning or late afternoon for better lighting for photography.</p>

      <h3>Qinqiang Opera Performance</h3>
      <p>Qinqiang is one of China's oldest opera forms, known as the "ancestor of Chinese opera," characterized by its high-pitched, intense singing style and exaggerated performance techniques. Watching an authentic Qinqiang performance in Xi'an provides a window into traditional Shaanxi culture.</p>
      <p><strong>Experience tips:</strong> Xi'an Yisushe Theater and Shaanxi Grand Theater regularly feature Qinqiang performances. First-time viewers might prefer famous excerpts like "Three Drops of Blood" or "Flame Steed." Arrive half an hour early for performances; sometimes the actors' makeup process is displayed beforehand.</p>

      <h3>Making Terracotta Warrior Clay Figurines</h3>
      <p>Several craft workshops near the Terracotta Warriors site offer DIY terracotta figurine-making experiences. Under the guidance of craftsmen, visitors can make mini terracotta warriors, learn about the manufacturing techniques, and take their creations home as souvenirs.</p>
      <p><strong>Experience tips:</strong> The complete experience takes about an hour and is ideal for family activities. Prices range from 50-200 yuan depending on size and detail. Creations need to dry; some workshops offer firing and shipping services.</p>

      <h3>Sunrise at Mount Hua</h3>
      <p>Mount Hua is one of China's Five Great Mountains, known for its steep terrain. Watching the sunrise from the East Peak of Mount Hua is a dream for many visitors. When the sun rises from the sea of clouds, casting golden light over the mountains, this stunning experience becomes an unforgettable memory.</p>
      <p><strong>Experience tips:</strong> Take the high-speed train from Xi'an to Huashan (about 40 minutes), then transfer to a scenic area shuttle to the mountain base. Consider taking the cable car up to save energy. Ideally, go up the mountain the afternoon before and stay overnight at the summit to watch the sunrise early the next morning. Bring warm clothing as even summer nights can be cool at the peak.</p>

      <h3>Tang Dynasty Song and Dance Performances</h3>
      <p>The Tang Dynasty was the golden age of Chinese music and dance. Several theaters in Xi'an offer Tang-style performances, recreating the magnificent songs and dances of the prosperous Tang era. Large-scale shows like "The Everlasting Regret" and "Tang Dynasty Grand Dance" display the cultural splendor of the Tang period.</p>
      <p><strong>Experience tips:</strong> "The Everlasting Regret" at Huaqing Pool is the most famous scenic performance; book at least a week in advance. Tang Paradise and Grand Tang Ever-Bright City offer smaller regular performances. Summer shows are often outdoors, so prepare for mosquitoes and temperature changes.</p>
      `
    },
    {
      title: "Food Guide",
      content: `
      <h3>Shaanxi Specialty Noodles</h3>
      <p>Xi'an is a paradise for noodle lovers, famous for various flavored noodles such as Biáng Biáng noodles, beef noodles, and Qishan minced noodles. Especially notable are Biáng Biáng noodles, known for their unique "Biáng" character (one of the most complex Chinese characters) and wide, thick noodle shape, served with special chili oil and various seasonings for a delicious flavor.</p>
      <p><strong>Recommended restaurants:</strong> Lao Mi Jia Biáng Biáng Noodles, Xi'an Restaurant, and Lao Sun Jia. Consider ordering small portions to try different varieties and experience the rich variations of Shaanxi noodles.</p>

      <h3>Yang Rou Pao Mo (Mutton Soup with Bread)</h3>
      <p>One of Xi'an's most renowned traditional foods, originating from Tang Dynasty imperial cuisine. Diners personally break baked bread (mo) into small pieces, which are then served with stewed mutton soup. The authentic method requires diners to break the bread into bean-sized pieces, with chefs adding mutton soup that has been stewed for hours, along with mutton slices and vermicelli.</p>
      <p><strong>Recommended restaurants:</strong> Lao Sun Jia, Tong Sheng Xiang, and Lao Ma Jia. Add a little vinegar and chili oil for flavor enhancement. Authentic paomo requires specially made bread and long-stewed soup for the best taste.</p>

      <h3>Rou Jia Mo (Chinese Hamburger)</h3>
      <p>Dubbed the "Chinese hamburger," rou jia mo is one of Xi'an's most famous snacks. Marinated and stewed flavorful meat (usually pork) is chopped and stuffed in a baked bread bun, creating a delicious combination that is crispy outside and tender inside, with an aromatic meat flavor.</p>
      <p><strong>Recommended places:</strong> Hui Ji Rou Jia Mo and Lao Liu Jia Rou Jia Mo in the Muslim Quarter. Authentic rou jia mo should have crispy bread and flavorful meat that isn't greasy. Add chili sauce or other condiments according to preference.</p>

      <h3>Liang Pi and Various Snacks</h3>
      <p>Liang pi (cold rice noodles) is Xi'an's most popular summer snack, known for its refreshing taste and rich seasonings. Additionally, Xi'an offers many other snacks such as Jia San soup dumplings, Chang'an hotpot, steamed rice cake, and persimmon cake, each with a unique flavor and long history.</p>
      <p><strong>Recommended places:</strong> Muslim Quarter, Dongxin Street Food Street, and Dachashi Food Street are all great places to sample various snacks. Prepare small change, as snacks typically cost between 5-20 yuan, and try different varieties.</p>

      <h3>Muslim Flavored Cuisine</h3>
      <p>Xi'an has a large Muslim population, and Muslim restaurants offer halal foods such as beef and mutton paomo, lamb skewers, and hand-pulled noodles. These foods are richly flavored with distinctive spices and are an important part of Xi'an's food culture.</p>
      <p><strong>Recommended restaurants:</strong> Lao Dong Jia Beef and Mutton Paomo, Ma Bo Jia Lamb, and Dapi Yuan Restaurant. When dining, please respect Muslim dietary customs and do not bring pork products into halal restaurants.</p>
      `
    },
    {
      title: "Cultural and Historical Insights",
      content: `
      <h3>Historical Evolution of the Thirteen Dynasties' Capital</h3>
      <p>Xi'an (formerly Chang'an) successively served as the capital or political center for thirteen dynasties including the Zhou, Qin, Han, and Tang, spanning over 1,100 years. Each dynasty left its unique cultural imprint on the city. The ritual and music civilization of the Zhou Dynasty, the centralized power of the Qin Dynasty, and the openness and inclusiveness of the Han and Tang Dynasties all represent important milestones in Chinese civilization.</p>
      <p>During the Tang Dynasty, Chang'an was one of the most prosperous cities in the world, with a population exceeding one million, orderly streets, magnificent palaces, and served as an important hub for East-West cultural exchange. Today's Xi'an city layout still retains traces of Tang Dynasty Chang'an.</p>

      <h3>Eastern Starting Point of the Silk Road</h3>
      <p>Xi'an was the starting point of the ancient Silk Road. Beginning with Zhang Qian's journey to the Western Regions during the Han Dynasty, this transcontinental trade route facilitated cultural exchange between East and West. Through the Silk Road, Chinese silk, porcelain, and tea reached the West, while Western astronomy, calendars, music, art, and religious thought entered China, enriching Chinese culture.</p>
      <p>Structures within Xi'an such as the Giant Wild Goose Pagoda and the Great Mosque in Huajue Lane are testimonies to Silk Road cultural exchanges. The various imported items displayed in the Shaanxi History Museum vividly present the history of ancient East-West interactions.</p>

      <h3>The Glory and Influence of Tang Culture</h3>
      <p>The Tang Dynasty was one of the most open and prosperous periods in Chinese history, with cultural achievements that profoundly influenced later generations. The glory of Tang poetry, the perfection of Tang institutions, and the exquisiteness of Tang art collectively form the brilliant Tang culture. As the capital of the Tang Dynasty, Xi'an shows Tang cultural influences everywhere.</p>
      <p>Modern Xi'an's urban construction and cultural activities also extensively incorporate and recreate Tang Dynasty elements, such as Tang Paradise and Grand Tang Ever-Bright City, attempting to recreate the magnificent scenes of the prosperous Tang period, allowing visitors to experience the charm of Tang culture in a modern city.</p>

      <h3>Religious Diversity and Cultural Integration</h3>
      <p>Xi'an has historically been a center for various religions and cultural exchanges. After Buddhism was introduced to China during the Han Dynasty, it took root and developed in Xi'an. During the Tang Dynasty, Taoism, Nestorianism (a branch of Christianity), Manichaeism, Zoroastrianism, Islam, and other religions coexisted and developed in Chang'an, forming a pluralistic and inclusive cultural atmosphere.</p>
      <p>Today's Xi'an still preserves relics of various religions, such as Daci'en Temple, Qinglong Temple, and the Great Mosque. These historical sites are not only religious venues but also important materials for studying Chinese religious history and cultural exchanges between China and foreign countries. The Muslim community and Muslim Quarter in the city demonstrate how Islamic culture harmoniously coexists with and influences traditional Chinese culture.</p>
      `
    }
  ]
};

// 西安的俄语内容
const xianContentRu: DestinationContent = {
  title: "Сиань",
  subtitle: "Древняя столица тринадцати династий",
  sections: [
    {
      title: "Первые впечатления",
      content: `
      <p>Сиань, ранее известный как Чанъань, является одной из самых известных древних столиц Китая, служившей императорской столицей или политическим центром для тринадцати династий, включая Чжоу, Цинь, Хань и Тан. Как восточная отправная точка Шелкового пути, этот город имеет историю более 3100 лет, из которых более 1100 лет в качестве столицы, взрастившей великолепную китайскую цивилизацию.</p>
      <p>Современный Сиань идеально сочетает древнее и современное. Величественные городские стены окружают оживленный центр города, а объекты всемирного культурного наследия, такие как Терракотовая армия и Большая пагода диких гусей, соседствуют с оживленными коммерческими районами. Мусульманский квартал наполняет воздух заманчивыми ароматами исламской кухни, а Великий центр династии Тан ночью ослепляет световыми представлениями, демонстрируя как глубокое культурное наследие, так и современную жизненную силу этой тысячелетней древней столицы.</p>
      `
    },
    {
      title: "Обзор основной информации",
      content: `
      <p><strong>Лучшее время для посещения:</strong> Весна (апрель-май) и осень (сентябрь-октябрь) предлагают приятную погоду, идеальную для туризма.</p>
      <p><strong>Климатические особенности:</strong> Умеренный полувлажный муссонный климат с четырьмя выраженными сезонами. Лето жаркое, зима холодная и сухая, в то время как весна и осень мягкие и комфортные.</p>
      <p><strong>Транспорт:</strong> В Сиане хорошо развита сеть метро, охватывающая основные достопримечательности, комплексная система автобусов, такси по разумным ценам и туристические шаттлы, соединяющие различные живописные места.</p>
      <p><strong>Рекомендуемая продолжительность посещения:</strong> Комплексный тур по Сианю требует 4-5 дней, в то время как для основных достопримечательностей требуется не менее 2-3 дней.</p>
      <p><strong>Уровень затрат:</strong> По сравнению с другими крупными туристическими городами Китая, уровень потребления в Сиане умеренный, предлагая хорошее соотношение цены и качества и делая его экономичным туристическим направлением.</p>
      `
    },
    {
      title: "Обязательные к посещению достопримечательности",
      content: `
      <h3>Музей терракотовой армии</h3>
      <p>Провозглашенная "Восьмым чудом света", Терракотовая армия представляет собой погребальные ямы мавзолея императора Цинь Шихуанди, случайно обнаруженные фермерами в 1974 году. В трех ямах было раскопано более 8000 глиняных солдат и лошадей в натуральную величину, каждый с уникальными выражениями лица и жизненными деталями, отражающими мощную военную мощь и изысканное гончарное мастерство династии Цинь.</p>
      <p><strong>Советы для путешественников:</strong> Рекомендуется бронировать билеты заранее на официальном сайте и избегать пиковых периодов праздников. Рекомендуемая последовательность посещения: Яма 3, Яма 2, затем Яма 1, постепенно кульминируя наиболее впечатляющей экспозицией. Рассмотрите возможность найма гида или аудиогида, чтобы узнать больше об историческом контексте. Выделите по крайней мере полдня для вашего визита.</p>

      <h3>Городская стена Сианя</h3>
      <p>Построенная в начале династии Мин, городская стена Сианя является крупнейшей и наиболее хорошо сохранившейся древней городской стеной в Китае, протяженностью 13,7 километров, высотой 12 метров и шириной 12-14 метров. Прямоугольная стена окружает центр города Сиань, с главными воротами в четырех кардинальных направлениях и хорошо сохранившимися угловыми башнями, стрелковыми башнями и оборонительными сооружениями.</p>
      <p><strong>Советы для путешественников:</strong> Вы можете выбрать пешую прогулку, велосипедную поездку или поездку на электромобиле вокруг стены. Велосипедная поездка занимает около 90-120 минут для полного круга, в то время как пешая прогулка требует 3-4 часа. Посещение в сумерках позволяет насладиться закатом и ночными видами города. Южные ворота представляют впечатляющие церемонии приветствия в древнем стиле.</p>

      <h3>Большая пагода диких гусей</h3>
      <p>Расположенная в храме Да Цыэнь, Большая пагода диких гусей была построена в 652 году нашей эры во время династии Тан для хранения буддийских писаний и статуй, привезенных из Индии монахом Сюаньцзаном. Высотой 64,5 метра с семью этажами, она была ориентиром города Чанъань и свидетельствует о процветании буддизма во времена династии Тан.</p>
      <p><strong>Советы для путешественников:</strong> Вы можете подняться на пагоду для панорамного вида на Сиань. Северная площадь пагоды представляет музыкальный фонтан, который выступает каждый вечер, что довольно впечатляюще. В комплексе храма Да Цыэнь вы также можете посетить музей Сюаньцзана и выставки танской культуры, чтобы узнать больше об истории и культуре династии Тан.</p>

      <h3>Исторический музей Шэньси</h3>
      <p>Известный как "Жемчужина древнего города, сокровищница китайской цивилизации", Исторический музей Шэньси содержит богатые коллекции, систематически демонстрирующие историческое и культурное развитие региона Шэньси от предыстории до современной эпохи. Сокровища музея включают изысканные золотые и серебряные изделия династии Тан, трехцветную глазурованную керамику и фрески, предоставляя важное окно в древнюю китайскую цивилизацию, особенно культуры Хань и Тан.</p>
      <p><strong>Советы для путешественников:</strong> Музей ежедневно предлагает ограниченное количество бесплатных билетов на основную выставку, которые можно забронировать онлайн заранее. В часы пик посещения следуйте одностороннему потоку посетителей. Основные выставочные залы включают бронзу Западного Чжоу, золотые и серебряные изделия династии Тан и галереи фресок. Как правило, для детального посещения требуется 2-3 часа.</p>

      <h3>Гора Хуашань</h3>
      <p>Гора Хуашань, одна из пяти великих гор Китая, известна своей крутизной, с высотой 2154,9 метра. Её пять вершин — это Восточная вершина (Пик восхода солнца), Западная вершина (Пик лотоса), Южная вершина (Пик приземляющихся диких гусей), Северная вершина (Пик облачной террасы) и Центральная вершина (Пик нефритовой девы). Помимо своей отвесной местности и великолепных природных пейзажей, гора Хуашань также имеет многочисленные даосские и буддийские культурные реликвии.</p>
      <p><strong>Советы для путешественников:</strong> Вы можете выбрать поездку на канатной дороге или поход в гору, и рекомендуется выделить по крайней мере полный день. Восточная линия канатной дороги приведет вас к Северной вершине, откуда вы можете пройти к другим вершинам. "Тропа на плитах в небе" и "Переворот ястреба" — самые захватывающие опыты. Возьмите теплую одежду, так как температура на больших высотах ниже. Утро и сумерки предлагают красивые виды восхода и заката солнца на горе.</p>
      `
    }
  ]
};

// 多语言内容汇总
export const xianContent: Record<Language, DestinationContent> = {
  zh: xianContentZh,
  en: xianContentEn,
  ru: xianContentRu,
  // 其他语言可以添加在这里
  ja: { title: '西安', subtitle: '十三王朝の古都、シルクロードの東の起点', sections: [] },
  ko: { title: '시안', subtitle: '13개 왕조의 고도, 실크로드의 동쪽 출발점', sections: [] },
  fr: { title: 'Xi\'an', subtitle: 'Capitale de treize dynasties, point de départ oriental de la Route de la Soie', sections: [] },
  de: { title: 'Xi\'an', subtitle: 'Hauptstadt von dreizehn Dynastien, östlicher Ausgangspunkt der Seidenstraße', sections: [] },
  es: { title: 'Xi\'an', subtitle: 'Capital de trece dinastías, punto de partida oriental de la Ruta de la Seda', sections: [] }
}; 