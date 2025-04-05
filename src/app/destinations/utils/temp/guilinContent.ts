import { Language } from '@/contexts/LanguageContext';
import { DestinationContent } from '../destinationContent';

// 桂林的多语言内容
export const guilinContent: Record<Language, DestinationContent> = {
  zh: {
    title: "桂林：山水甲天下",
    subtitle: "诗意漓江行，探索喀斯特地貌奇观",
    sections: [
      {
        title: "首印象",
        content: `
        <p>桂林，一座被大自然恩赐的城市，因其奇特的喀斯特地貌而闻名于世。'桂林山水甲天下'不仅是一句美誉，更是对这片土地最真实的写照。</p>
        <p>这里的山峰如翠玉般挺立，形态万千；清澈的漓江宛如一条碧绿的丝带，蜿蜒于群山之间。舟行江上，两岸的山峰倒映水中，构成了一幅动人的中国山水画。</p>
        <p>无论是晨雾缭绕的漓江，还是夕阳下的城市轮廓，都让人流连忘返，仿佛置身于一幅活的山水画卷中。</p>
        `
      },
      {
        title: "基本信息概览",
        content: `
        <p><strong>最佳游览时间：</strong>春季（3-5月）和秋季（9-11月）气候宜人，是游览桂林的最佳时节。夏季（6-8月）雨水较多但景色最为翠绿，冬季（12-2月）游客较少但气温较低。</p>
        <p><strong>气候特点：</strong>桂林属亚热带季风气候，四季分明，年平均气温约19℃。夏季炎热多雨，冬季温和少雨，空气湿度较大，建议随时携带雨具。</p>
        <p><strong>交通方式：</strong>桂林两江国际机场有多条国内外航线，市内交通以公交、出租车为主，游览漓江可选择竹筏或游船。从桂林到阳朔可搭乘大巴或漓江游船，城际铁路也较为便捷。</p>
        <p><strong>推荐游览时长：</strong>建议游览时间为4-5天，足以探索桂林市区及周边的阳朔、龙胜等地。若只参观市区核心景点，2-3天即可。要深度体验当地文化和乡村风光，可安排7天左右。</p>
        <p><strong>消费水平：</strong>总体消费水平中等，低于北京、上海等一线城市，但景区门票价格较高。住宿从经济型酒店到豪华度假村价格差异大，餐饮价格亲民，当地特色小吃性价比高。</p>
        `
      },
      {
        title: "必游景点",
        content: `
        <h3>漓江风景区</h3>
        <p>中国最美的河流之一，乘船游览可欣赏两岸的奇峰异石和田园风光。漓江精华段从桂林市区至阳朔县，全长83公里。</p>
        <p><strong>旅行贴士：</strong>建议选择兴坪至阳朔段，风景最为精华。旺季提前预订船票，早晨出发光线最佳，记得携带防晒和防雨装备。</p>

        <h3>阳朔西街</h3>
        <p>融合中西文化的步行街，是桂林最热闹的地方之一。这里有各类特色商铺、咖啡馆、酒吧和餐厅，是体验当地休闲生活的窗口。</p>
        <p><strong>旅行贴士：</strong>晚上灯火通明，是体验当地夜生活的好去处。建议避开节假日高峰期，可在此购买当地特色手工艺品和纪念品。</p>

        <h3>象鼻山</h3>
        <p>桂林市的标志性景点，因形似一头饮水的大象而得名。位于漓江与桃花江汇流处，是桂林山水的代表。</p>
        <p><strong>旅行贴士：</strong>傍晚时分观赏最佳，可以看到夕阳映照下的象鼻山剪影。登上山顶的月牙阁可俯瞰桂林城区和漓江美景。</p>

        <h3>龙脊梯田</h3>
        <p>位于龙胜各族自治县的壮观梯田，有金坑、平安和大界三个主要景区。梯田依山势层层叠叠，随季节变化呈现不同景观。</p>
        <p><strong>旅行贴士：</strong>春季插秧后水波粼粼，夏季绿意盎然，秋季金黄一片，冬季若遇雪景则银装素裹。建议住宿一晚，体验少数民族风情。</p>

        <h3>两江四湖</h3>
        <p>桂林市区的水上环城游览线路，连接漓江、桃花江与杉湖、榕湖、桂湖、木龙湖四个湖泊，沿途可欣赏城市夜景和山水风光。</p>
        <p><strong>旅行贴士：</strong>夜游效果最佳，可欣赏到亮化工程下的桥梁和建筑。船票可在酒店或旅行社预订，也可现场购买，全程约2小时。</p>
        `
      },
      {
        title: "特色体验",
        content: `
        <h3>漓江竹筏漂流</h3>
        <p>乘坐传统竹筏顺流而下，近距离感受漓江山水，是体验桂林自然风光的最佳方式之一。竹筏由当地渔民掌舵，可以欣赏到画册中经典的漓江景观。</p>
        <p><strong>体验贴士：</strong>阳朔的遇龙河和漓江都有竹筏漂流，各有特色。遇龙河水流较缓适合家庭，漓江风景更为壮观。请选择正规码头，并穿戴救生衣。</p>

        <h3>印象刘三姐演出</h3>
        <p>由著名导演张艺谋打造的大型户外山水实景演出，以漓江山水为背景，展现广西民族文化和传说。演出结合现代灯光技术与当地民俗元素，场面宏大震撼。</p>
        <p><strong>体验贴士：</strong>演出地点在阳朔县的世外桃源景区，建议提前1-2天预订票，并提前1小时到场。带上轻便雨衣，因为下雨天也正常演出。</p>

        <h3>农家体验</h3>
        <p>在桂林周边的村落可以体验地道的乡村生活，包括参与农事活动、品尝农家饭菜、学习传统手工艺等。特别是在阳朔兴坪和龙胜龙脊梯田地区，有多个少数民族村落可以深度体验。</p>
        <p><strong>体验贴士：</strong>可通过当地旅行社预订正规体验项目，或在景区询问。尊重当地风俗习惯，注意安全和卫生。</p>

        <h3>攀岩与洞穴探险</h3>
        <p>桂林的喀斯特地貌造就了许多适合攀岩的石灰岩峰和神秘的溶洞。阳朔已成为亚洲著名的攀岩胜地，吸引世界各地的攀岩爱好者。而七星岩、芦笛岩等溶洞则提供了奇妙的地下世界探索体验。</p>
        <p><strong>体验贴士：</strong>初学者建议在专业教练指导下体验攀岩，可在西街找到多家攀岩俱乐部。探访溶洞请随团并听从导游指引，注意安全。</p>

        <h3>徒步十里画廊</h3>
        <p>位于阳朔的一条景观大道，两侧是形态各异的喀斯特山峰，如画的田园风光和村落。可以骑行或步行，近距离接触桂林山水和乡村生活。</p>
        <p><strong>体验贴士：</strong>全长约10公里，骑行约需1小时，步行需2-3小时。建议早上或傍晚前往，避开正午强烈阳光和人流高峰。</p>
        `
      },
      {
        title: "美食指南",
        content: `
        <h3>桂林美食特色</h3>
        <p>桂林美食以酸、辣、鲜为特点，融合了湘菜和粤菜的特色，并具有浓郁的地方风味。桂林米粉是当地最具代表性的美食，历史悠久，享誉全国。</p>

        <h3>必尝美食</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>桂林米粉</strong> - 桂林最著名的传统小吃，以优质大米磨浆制成，配以卤肉、酸豆角、花生等配料，汤底清爽鲜美，口感滑嫩。</li>
          <li><strong>啤酒鱼</strong> - 桂林名菜，选用漓江鲜鱼，用啤酒烹饪，鱼肉鲜嫩，带有淡淡啤酒香，口感独特。</li>
          <li><strong>荔浦扣肉</strong> - 选用五花肉与荔浦芋头同蒸同煮，肥而不腻，芋头吸收了肉汁，味道醇厚。</li>
          <li><strong>桂林田螺</strong> - 采用当地新鲜田螺，加入辣椒、八角等香料煮制，肉质鲜嫩，汤汁浓郁，开胃爽口。</li>
          <li><strong>恭城油茶</strong> - 桂林恭城县的特色小吃，将茶叶炒香后研磨，加入油、盐、葱花等调料，再配以炒米花、炸花生等，滋味独特。</li>
        </ul>

        <h3>推荐餐厅</h3>
        <p>桂林的美食可分为市区餐厅和阳朔餐饮两大区域。市区的正阳步行街和中山路是品尝地道桂林美食的好去处，有众多老字号米粉店。阳朔西街则聚集了多家融合中西风味的餐厅，适合尝试创新菜式。</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>和记桂林米粉（正阳店）</strong> - 桂林最有名的米粉老店之一</li>
          <li><strong>肥仔荔浦扣肉</strong> - 招牌荔浦扣肉做法地道</li>
          <li><strong>阿甘酒楼</strong> - 正宗桂林菜，啤酒鱼值得一试</li>
          <li><strong>阳朔阿福饭店</strong> - 当地人推荐的农家菜</li>
          <li><strong>静园</strong> - 环境优雅，提供精致桂林菜</li>
        </ul>

        <h3>素食选择</h3>
        <p>桂林的素食选择较为丰富，许多寺庙周边有提供纯素斋菜的餐厅。此外，当地的特色小吃如桂林米粉也可要求不加肉类配料，只添加蔬菜。</p>
        <p>阳朔西街有几家专门服务外国游客的西式素食餐厅，如Pure Lotus Vegetarian Restaurant（纯莲素食）等，提供中西合璧的素食料理。</p>
        `
      },
      {
        title: "文化与历史洞察",
        content: `
        <h3>历史沿革</h3>
        <p>桂林历史悠久，早在旧石器时代就有人类活动痕迹。秦朝时期（公元前221-207年）设立桂林县，取名'桂林'意为'桂树成林'。唐宋时期，桂林成为岭南重要的政治、经济和文化中心。</p>
        <p>元朝至明清时期，桂林一直是广西的政治中心。历史上，桂林也是古代海上丝绸之路和西南丝绸之路的重要节点，商贸繁荣，文化交流频繁。20世纪以来，桂林凭借其独特的自然风光逐渐发展成为中国著名的旅游城市。</p>

        <h3>文化遗产</h3>
        <p>桂林地区是壮族、瑶族、侗族等少数民族的聚居地，民族文化多元丰富。当地的民间艺术如壮族的铜鼓舞、瑶族的长鼓舞、侗族的大歌等都是中国非物质文化遗产。</p>
        <p>桂林山水也是中国传统山水画的重要题材，自古以来就吸引了无数文人墨客前来游览创作。宋代大诗人范成大的'万山磅礴拍天来，剑河如练静湾环'生动描绘了桂林的壮丽景观。</p>

        <h3>现代发展</h3>
        <p>近几十年来，桂林在保护自然和文化遗产的同时，积极发展旅游业和相关产业。城市建设注重与自然环境的和谐共存，推动了生态旅游的可持续发展。</p>
        <p>桂林还是'一带一路'倡议下中国-东盟合作的重要城市，国际交流日益频繁。传统手工艺如桂林堆锦、桂林三雕（木雕、石雕、竹雕）等也在现代创新中焕发新生。</p>

        <h3>旅行礼仪与建议</h3>
        <p>访问桂林时，尊重当地少数民族的风俗习惯非常重要。参观少数民族村寨时，应征得村民同意后再拍照，避免触碰宗教禁忌。</p>
        <p>探访自然景区时，请遵循生态保护原则：不乱扔垃圾，不破坏植被，不惊扰野生动物。购买纪念品时优先选择当地手工艺品，支持传统文化传承。</p>
        <p>与当地人交流时，即使语言不通，友善的微笑和尊重的态度也能拉近彼此距离。品尝地道美食时，了解适当的餐桌礼仪会让体验更加愉快。</p>
        `
      }
    ]
  },
  en: {
    title: "Guilin: Mountains and Waters Unrivaled Under Heaven",
    subtitle: "Poetic Li River Journey, Exploring Karst Landscape Wonders",
    sections: [
      {
        title: "First Impressions",
        content: `
        <p>Guilin, a city blessed by nature, is renowned worldwide for its unique karst topography. The saying 'Guilin's scenery is the finest under heaven' is not just praise, but a true reflection of this magical land.</p>
        <p>Here, mountains stand like jade sculptures in countless forms; the clear Li River winds like a green ribbon between the hills. Cruising along the river, with peaks reflecting in the water, creates a moving Chinese landscape painting.</p>
        <p>Whether it's the morning mist shrouding the Li River or the city silhouette at sunset, visitors find themselves lingering, as if immersed in a living landscape scroll.</p>
        `
      },
      {
        title: "Overview of Basic Information",
        content: `
        <p><strong>Best time to visit:</strong> Spring (March-May) and autumn (September-November) offer pleasant weather and are the best seasons to visit Guilin. Summer (June-August) brings more rain but the most verdant scenery, while winter (December-February) sees fewer tourists but cooler temperatures.</p>
        <p><strong>Climate characteristics:</strong> Guilin has a subtropical monsoon climate with four distinct seasons and an average annual temperature of about 19°C. Summers are hot and rainy, winters mild with little rain. The air humidity is relatively high, so it's advisable to carry rain gear at all times.</p>
        <p><strong>Transportation methods:</strong> Guilin Liangjiang International Airport offers multiple domestic and international routes. City transportation includes buses and taxis, while bamboo rafts or cruise boats are available for Li River tours. From Guilin to Yangshuo, you can take a bus or Li River cruise. Intercity rail is also convenient.</p>
        <p><strong>Recommended visit duration:</strong> A recommended visit is 4-5 days, sufficient to explore Guilin city and surrounding areas like Yangshuo and Longsheng. For core city attractions only, 2-3 days would suffice. To deeply experience local culture and rural scenery, allow about 7 days.</p>
        <p><strong>Cost level:</strong> The overall cost level is moderate, lower than first-tier cities like Beijing and Shanghai, although scenic area ticket prices are relatively high. Accommodation prices vary greatly from budget hotels to luxury resorts, while food prices are affordable with local snacks offering good value.</p>
        `
      },
      {
        title: "Must-Visit Attractions",
        content: `
        <h3>Li River Scenic Area</h3>
        <p>One of China's most beautiful rivers, offering boat tours to appreciate the extraordinary peaks and rural scenery along both banks. The premium section runs from Guilin city to Yangshuo County, covering 83 kilometers.</p>
        <p><strong>Travel tips:</strong> The Xingping to Yangshuo section is recommended as it offers the most spectacular scenery. Book boat tickets in advance during peak season. Morning departures offer the best lighting. Remember to bring sun protection and rain gear.</p>

        <h3>Yangshuo West Street</h3>
        <p>A pedestrian street blending Chinese and Western cultures, one of Guilin's most vibrant places. It features various specialty shops, cafes, bars, and restaurants, offering a window into local leisure life.</p>
        <p><strong>Travel tips:</strong> The street is brilliantly lit at night, perfect for experiencing local nightlife. Avoid peak holiday periods. This is a good place to purchase local handicrafts and souvenirs.</p>

        <h3>Elephant Trunk Hill</h3>
        <p>Guilin's iconic landmark, named for its resemblance to an elephant drinking water. Located at the confluence of Li River and Peach Blossom River, it represents Guilin's landscape.</p>
        <p><strong>Travel tips:</strong> Evening is the best time for viewing, when you can see the silhouette of Elephant Trunk Hill against the sunset. Climb to the Moon Pagoda at the top for panoramic views of Guilin city and Li River.</p>

        <h3>Longji Rice Terraces</h3>
        <p>Spectacular terraced fields in Longsheng Autonomous County, with three main scenic areas: Jinkeng, Ping'an, and Dazhai. The terraces cascade with the mountain contours, presenting different views with each season.</p>
        <p><strong>Travel tips:</strong> After spring planting, the terraces shimmer with water; summer brings lush greenery; autumn fields turn golden; winter occasionally offers snow-covered scenes. Consider staying overnight to experience ethnic minority culture.</p>

        <h3>Two Rivers and Four Lakes</h3>
        <p>A waterway circuit around Guilin city, connecting Li River, Peach Blossom River, and four lakes: Shan Lake, Banyan Lake, Gui Lake, and Mulong Lake. The route offers views of urban nightscapes and natural scenery.</p>
        <p><strong>Travel tips:</strong> Night tours provide the best experience, showcasing illuminated bridges and buildings. Tickets can be booked at hotels or travel agencies, or purchased on-site. The full tour takes about 2 hours.</p>
        `
      },
      {
        title: "Unique Experiences",
        content: `
        <h3>Li River Bamboo Rafting</h3>
        <p>Float downstream on traditional bamboo rafts, experiencing Li River's scenery up close. This is one of the best ways to appreciate Guilin's natural beauty. Local fishermen steer the rafts, allowing you to see the classic Li River views featured in travel brochures.</p>
        <p><strong>Experience tips:</strong> Both Yangshuo's Yulong River and Li River offer bamboo rafting, each with distinct characteristics. Yulong River has gentler currents suitable for families, while Li River offers more spectacular scenery. Choose official piers and always wear life vests.</p>

        <h3>Impression Liu Sanjie Show</h3>
        <p>A large-scale outdoor performance directed by renowned filmmaker Zhang Yimou, using Li River and surrounding mountains as a natural backdrop. The show presents Guangxi's ethnic culture and legends, combining modern lighting technology with local folklore elements for a spectacular experience.</p>
        <p><strong>Experience tips:</strong> The performance takes place at the Shangri-La Scenic Area in Yangshuo County. Book tickets 1-2 days in advance and arrive 1 hour early. Bring light rain gear, as performances continue despite rain.</p>

        <h3>Rural Farm Experience</h3>
        <p>Experience authentic rural life in villages around Guilin, including agricultural activities, farm-to-table meals, and traditional craft workshops. Particularly in Xingping near Yangshuo and the Longji Terrace areas in Longsheng, numerous ethnic minority villages offer immersive experiences.</p>
        <p><strong>Experience tips:</strong> Book official experience programs through local travel agencies or inquire at scenic areas. Respect local customs and pay attention to safety and hygiene.</p>

        <h3>Rock Climbing and Cave Exploration</h3>
        <p>Guilin's karst landscape has created numerous limestone peaks ideal for climbing and mysterious caves to explore. Yangshuo has become a famous rock climbing destination in Asia, attracting enthusiasts from around the world. Caves like Seven Star Cave and Reed Flute Cave offer fascinating underground exploration.</p>
        <p><strong>Experience tips:</strong> Beginners should experience rock climbing under professional instructor guidance. Several climbing clubs can be found on West Street. For cave visits, join guided tours and follow guide instructions for safety.</p>

        <h3>Ten-Mile Gallery Hiking</h3>
        <p>A scenic road in Yangshuo with uniquely shaped karst peaks on both sides, picturesque rural landscapes, and villages. You can cycle or walk to closely experience Guilin's mountains, waters, and rural life.</p>
        <p><strong>Experience tips:</strong> The route is about 10 kilometers long, taking approximately 1 hour by bicycle or 2-3 hours on foot. Morning or late afternoon visits are recommended to avoid the strong midday sun and peak crowds.</p>
        `
      },
      {
        title: "Gastronomic Guide",
        content: `
        <h3>Guilin Cuisine Characteristics</h3>
        <p>Guilin cuisine features sour, spicy, and fresh flavors, blending characteristics of Hunan and Cantonese cooking with strong local flair. Guilin rice noodles are the most representative local food, with a long history and nationwide fame.</p>

        <h3>Must-Try Dishes</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Guilin Rice Noodles</strong> - Guilin's most famous traditional snack, made from high-quality rice ground into paste, served with braised meat, pickled beans, peanuts, and other toppings. The broth is fresh and light, with noodles that are smooth and tender.</li>
          <li><strong>Beer Fish</strong> - A Guilin specialty using fresh fish from Li River, cooked with beer. The fish meat is tender with a subtle beer fragrance, creating a unique taste.</li>
          <li><strong>Lipu Braised Pork</strong> - Made with pork belly steamed with Lipu taro. The dish is rich but not greasy, with taro absorbing the meat juices for a hearty flavor.</li>
          <li><strong>Guilin River Snails</strong> - Using fresh local river snails cooked with chili, star anise, and other spices. The meat is tender, the broth rich, and the taste appetizing and refreshing.</li>
          <li><strong>Gongcheng Oil Tea</strong> - A special snack from Gongcheng County in Guilin. Tea leaves are roasted and ground, then mixed with oil, salt, green onions, and other seasonings, served with fried rice flowers, fried peanuts, offering a unique flavor.</li>
        </ul>

        <h3>Recommended Restaurants</h3>
        <p>Guilin's food scene can be divided into city center restaurants and Yangshuo dining. Zhengyang Pedestrian Street and Zhongshan Road in the city center are good places to taste authentic Guilin cuisine, with many long-established rice noodle shops. Yangshuo West Street gathers many restaurants fusing Chinese and Western flavors, suitable for trying innovative dishes.</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>He Ji Guilin Rice Noodles (Zhengyang Branch)</strong> - One of Guilin's most famous noodle shops</li>
          <li><strong>Fat Zai Lipu Braised Pork</strong> - Authentic signature Lipu braised pork</li>
          <li><strong>Ah Gan Restaurant</strong> - Authentic Guilin cuisine with excellent beer fish</li>
          <li><strong>Yangshuo Ah Fu Restaurant</strong> - Locally recommended farm cuisine</li>
          <li><strong>Jing Yuan</strong> - Elegant environment with refined Guilin dishes</li>
        </ul>

        <h3>Vegetarian Options</h3>
        <p>Guilin offers abundant vegetarian choices, with many pure vegetarian restaurants near temples. Additionally, local specialties like Guilin rice noodles can be requested without meat toppings, using only vegetables instead.</p>
        <p>Yangshuo West Street has several Western vegetarian restaurants catering to international tourists, such as Pure Lotus Vegetarian Restaurant, offering Chinese-Western fusion vegetarian cuisine.</p>
        `
      },
      {
        title: "Cultural and Historical Insights",
        content: `
        <h3>Historical Evolution</h3>
        <p>Guilin has a long history, with traces of human activity dating back to the Paleolithic Age. During the Qin Dynasty (221-207 BC), Guilin County was established, named 'Guilin' meaning 'forest of Osmanthus trees.' During the Tang and Song dynasties, Guilin became an important political, economic, and cultural center in Lingnan region.</p>
        <p>From the Yuan Dynasty through Ming and Qing periods, Guilin remained the political center of Guangxi. Historically, Guilin was also a crucial node on the ancient Maritime Silk Road and Southwest Silk Road, with prosperous trade and frequent cultural exchanges. Since the 20th century, Guilin has gradually developed into one of China's famous tourist cities thanks to its unique natural landscape.</p>

        <h3>Cultural Heritage</h3>
        <p>The Guilin region is home to ethnic minorities including Zhuang, Yao, and Dong, with rich and diverse ethnic cultures. Local folk arts such as the bronze drum dance of the Zhuang, the long drum dance of the Yao, and the Grand Song of the Dong are all Chinese intangible cultural heritage.</p>
        <p>Guilin's landscapes have also been important subjects in traditional Chinese landscape painting, attracting countless scholars and artists throughout history. Song Dynasty poet Fan Chengda's verse 'Myriad mountains surge to the sky, like a river of swords flowing quietly around the bay' vividly depicts Guilin's magnificent scenery.</p>

        <h3>Modern Development</h3>
        <p>In recent decades, while protecting its natural and cultural heritage, Guilin has actively developed tourism and related industries. Urban development emphasizes harmony with the natural environment, promoting sustainable ecotourism.</p>
        <p>Guilin is also an important city in China-ASEAN cooperation under the Belt and Road Initiative, with increasingly frequent international exchanges. Traditional crafts such as Guilin pile brocade and Guilin's Three Carvings (wood carving, stone carving, and bamboo carving) are finding new life through modern innovation.</p>

        <h3>Travel Etiquette and Tips</h3>
        <p>When visiting Guilin, it's important to respect the customs of local ethnic minorities. When visiting ethnic villages, seek permission before taking photographs and avoid touching religious taboos.</p>
        <p>When exploring natural scenic areas, please follow ecological protection principles: don't litter, don't damage vegetation, don't disturb wildlife. When purchasing souvenirs, prioritize local handicrafts to support traditional cultural heritage.</p>
        <p>When communicating with locals, even if there is a language barrier, a friendly smile and respectful attitude can bridge distances. When sampling authentic cuisine, understanding appropriate table manners will enhance your experience.</p>
        `
      }
    ]
  },
  fr: { title: "", subtitle: "", sections: [] },
  de: { title: "", subtitle: "", sections: [] },
  es: { title: "", subtitle: "", sections: [] },
  ja: { title: "", subtitle: "", sections: [] },
  ko: { title: "", subtitle: "", sections: [] },
  ru: { title: "", subtitle: "", sections: [] }
}; 