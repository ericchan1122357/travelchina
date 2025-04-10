import { Language } from '@/contexts/LanguageContext';
import { DestinationContent } from './destinationContent';

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
        <p>Here, mountains stand like jade sculptures in countless forms; the clear Li River winds like a green ribbon between the mountains. Sailing on the river, the mountains on both sides are reflected in the water, creating a moving Chinese landscape painting.</p>
        <p>Whether it's the morning mist surrounding the Li River or the city's silhouette at sunset, it captivates visitors, making them feel as if they're in a living landscape painting.</p>
        `
      },
      {
        title: "Basic Information Overview",
        content: `
        <p><strong>Best Time to Visit:</strong> Spring (March-May) and autumn (September-November) offer pleasant weather, making them the best seasons to visit Guilin. Summer (June-August) brings more rain but the greenest scenery, while winter (December-February) has fewer tourists but lower temperatures.</p>
        <p><strong>Climate:</strong> Guilin has a subtropical monsoon climate with four distinct seasons and an average annual temperature of about 19°C. Summers are hot and rainy, winters are mild with less precipitation. The air humidity is high, so it's advisable to carry rain gear at all times.</p>
        <p><strong>Transportation:</strong> Guilin Liangjiang International Airport serves numerous domestic and international routes. Public buses and taxis are the main forms of transportation within the city. Bamboo rafts or cruise boats are available for Li River tours. Travel between Guilin and Yangshuo is convenient by bus or Li River cruise, and intercity railways are also efficient.</p>
        <p><strong>Recommended Duration:</strong> A 4-5 day visit is recommended to explore Guilin city and surrounding areas like Yangshuo and Longsheng. If you're only visiting core attractions in the city, 2-3 days will suffice. For an in-depth experience of local culture and rural scenery, plan about 7 days.</p>
        <p><strong>Cost Level:</strong> The overall cost level is moderate, lower than first-tier cities like Beijing and Shanghai, though attraction ticket prices are relatively high. Accommodation costs vary widely from budget hotels to luxury resorts. Food prices are reasonable, and local specialties offer good value for money.</p>
        `
      },
      {
        title: "Must-Visit Attractions",
        content: `
        <h3>Li River Scenic Area</h3>
        <p>One of China's most beautiful rivers, offering boat tours to appreciate the unique peaks and rural scenery along both banks. The highlight section of the Li River runs from Guilin city to Yangshuo County, spanning 83 kilometers.</p>
        <p><strong>Travel Tips:</strong> The Xingping to Yangshuo section offers the most spectacular scenery. Book boat tickets in advance during peak season, start your journey in the morning for the best lighting, and remember to bring sun protection and rain gear.</p>

        <h3>Yangshuo West Street</h3>
        <p>A pedestrian street that blends Chinese and Western cultures, and one of the liveliest places in Guilin. It features various specialty shops, cafes, bars, and restaurants, offering a window into local leisure life.</p>
        <p><strong>Travel Tips:</strong> The street is beautifully lit at night, making it an excellent place to experience local nightlife. Try to avoid peak holiday periods. This is a great place to purchase local handicrafts and souvenirs.</p>

        <h3>Elephant Trunk Hill</h3>
        <p>The iconic landmark of Guilin, named for its resemblance to an elephant drinking from the river. Located at the confluence of the Li River and Peach Blossom River, it epitomizes Guilin's landscape.</p>
        <p><strong>Travel Tips:</strong> Evening is the best time to visit when you can see the silhouette of Elephant Trunk Hill against the sunset. Climbing to the Moon Pagoda at the top offers panoramic views of Guilin city and the Li River.</p>

        <h3>Longji Rice Terraces</h3>
        <p>Located in Longsheng Various Nationalities Autonomous County, these spectacular terraced fields include three main scenic areas: Jinkeng, Ping'an, and Dazhai. The terraces follow the mountain contours in layers, presenting different scenery with each season.</p>
        <p><strong>Travel Tips:</strong> After rice planting in spring, the terraces are filled with water, reflecting the sky; summer brings lush greenery; autumn turns the fields golden; and winter occasionally offers snow-covered terraces. Consider staying overnight to experience ethnic minority cultures.</p>

        <h3>Two Rivers and Four Lakes</h3>
        <p>A water circuit around Guilin city, connecting the Li River, Peach Blossom River, and four lakes: Shan Lake, Banyan Lake, Gui Lake, and Mulong Lake. Along the route, you can enjoy urban night views and scenic landscapes.</p>
        <p><strong>Travel Tips:</strong> A night cruise offers the best experience, showcasing illuminated bridges and buildings. Boat tickets can be booked at hotels or travel agencies, or purchased on-site. The entire journey takes about 2 hours.</p>
        `
      },
      {
        title: "Unique Experiences",
        content: `
        <h3>Li River Bamboo Raft Drifting</h3>
        <p>Riding traditional bamboo rafts downstream offers an up-close experience of Li River's scenery, one of the best ways to enjoy Guilin's natural beauty. Local fishermen steer the rafts, allowing you to appreciate the classic Li River views seen in travel brochures.</p>
        <p><strong>Experience Tips:</strong> Both the Yulong River in Yangshuo and the Li River offer bamboo rafting, each with unique characteristics. The Yulong River has gentler currents suitable for families, while the Li River offers more spectacular scenery. Choose official piers and always wear a life jacket.</p>

        <h3>Impression Liu Sanjie Show</h3>
        <p>A large-scale outdoor performance directed by the famous filmmaker Zhang Yimou, using the Li River landscape as a backdrop to showcase Guangxi's ethnic culture and legends. The show combines modern lighting technology with local folklore elements, creating a grand and impressive spectacle.</p>
        <p><strong>Experience Tips:</strong> The performance is held at the Shangri-La Scenic Area in Yangshuo County. Book tickets 1-2 days in advance and arrive an hour early. Bring a light raincoat as the show continues even in light rain.</p>

        <h3>Rural Experience</h3>
        <p>The villages around Guilin offer authentic rural life experiences, including participating in farming activities, tasting local home-cooked meals, and learning traditional crafts. Especially worthwhile for immersive experiences are the ethnic minority villages in Xingping, Yangshuo, and the Longji Terraces area.</p>
        <p><strong>Experience Tips:</strong> Book official experience programs through local travel agencies or inquire at scenic areas. Respect local customs and pay attention to safety and hygiene.</p>

        <h3>Rock Climbing and Cave Exploration</h3>
        <p>Guilin's karst landscape has created many limestone peaks ideal for rock climbing and mysterious caves for exploration. Yangshuo has become a famous rock climbing destination in Asia, attracting enthusiasts from around the world. Caves like Seven Star Cave and Reed Flute Cave offer magical underground world experiences.</p>
        <p><strong>Experience Tips:</strong> Beginners should try rock climbing under professional guidance; several climbing clubs can be found on West Street. For cave visits, follow tour groups and guide instructions for safety.</p>

        <h3>Hiking Ten-Mile Gallery</h3>
        <p>A scenic road in Yangshuo with unique karst peaks on both sides and picturesque rural landscapes and villages. You can cycle or walk to closely experience Guilin's mountains, waters, and rural life.</p>
        <p><strong>Experience Tips:</strong> The route is about 10 kilometers long, taking about 1 hour by bicycle or 2-3 hours on foot. It's best to visit in the morning or late afternoon to avoid the midday sun and peak crowds.</p>
        `
      },
      {
        title: "Food Guide",
        content: `
        <h3>Guilin Cuisine Characteristics</h3>
        <p>Guilin cuisine is characterized by sour, spicy, and fresh flavors, combining elements of Hunan and Cantonese cooking with strong local influences. Guilin rice noodles are the most representative local food, with a long history and nationwide popularity.</p>

        <h3>Must-Try Foods</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Guilin Rice Noodles</strong> - The most famous traditional snack, made from high-quality rice, served with braised meat, pickled beans, peanuts, and other toppings in a refreshing broth with a smooth texture.</li>
          <li><strong>Beer Fish</strong> - A Guilin specialty using fresh Li River fish cooked with beer, resulting in tender fish meat with a subtle beer fragrance and unique taste.</li>
          <li><strong>Lipu Taro Pork</strong> - Made by steaming pork belly with Lipu taro, the dish is rich but not greasy, with the taro absorbing the meat juices for a hearty flavor.</li>
          <li><strong>Guilin Snails</strong> - Fresh local river snails cooked with chili, star anise, and other spices, creating tender meat and rich broth that stimulates the appetite.</li>
          <li><strong>Gongcheng Oil Tea</strong> - A specialty from Gongcheng County, made by frying tea leaves, grinding them, then adding oil, salt, green onions, and other seasonings, accompanied by fried rice puffs and peanuts for a distinctive flavor.</li>
        </ul>

        <h3>Recommended Restaurants</h3>
        <p>桂林的美食可分为市区餐厅和阳朔餐饮两大区域。市区的正阳步行街和中山路是品尝地道桂林美食的好去处，有众多老字号米粉店。阳朔西街则聚集了多家融合中西风味的餐厅，适合尝试创新菜式。</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>Heji Guilin Rice Noodles (Zhengyang Branch)</strong> - One of Guilin's most famous traditional noodle shops</li>
          <li><strong>Feizai Lipu Taro Pork</strong> - Known for authentic Lipu taro pork</li>
          <li><strong>Agan Restaurant</strong> - Authentic Guilin cuisine with excellent beer fish</li>
          <li><strong>Yangshuo Afu Restaurant</strong> - Locally recommended for home-style cuisine</li>
          <li><strong>Jing Yuan</strong> - Elegant environment serving refined Guilin cuisine</li>
        </ul>

        <h3>Vegetarian Options</h3>
        <p>桂林的素食选择较为丰富，许多寺庙周边有提供纯素斋菜的餐厅。此外，当地的特色小吃如桂林米粉也可要求不加肉类配料，只添加蔬菜。</p>
        <p>阳朔西街有几家专门服务外国游客的西式素食餐厅，如Pure Lotus Vegetarian Restaurant（纯莲素食）等，提供中西合璧的素食料理。</p>
        `
      },
      {
        title: "Cultural and Historical Insights",
        content: `
        <h3>Historical Development</h3>
        <p>Guilin has a long history, with human activity dating back to the Paleolithic era. During the Qin dynasty (221-207 BC), Guilin county was established, named for its 'fragrant osmanthus forest'. During the Tang and Song dynasties, Guilin became an important political, economic, and cultural center in southern China.</p>
        <p>From the Yuan dynasty to the Ming and Qing dynasties, Guilin remained the political center of Guangxi. Historically, it was also an important junction on the Maritime Silk Road and the South-West Silk Road, with prosperous trade and frequent cultural exchanges. Since the 20th century, Guilin has gradually developed into a famous Chinese tourist city due to its unique natural landscapes.</p>

        <h3>Cultural Heritage</h3>
        <p>Guilin region is the home of ethnic minorities, including the Zhuang, Yao, and Dong peoples, contributing to its rich and diverse cultural landscape. Local folk arts such as Zhuang drum dance, Yao long drum dance, and Dong grand song are all intangible cultural heritage of China.</p>
        <p>The landscapes of Guilin have also been important subjects in traditional Chinese landscape painting, attracting countless scholars and artists through history. The poet of the Song dynasty Fan Chengda vividly described Guilin's magnificent scenery in his poem: "Thousands of mountains compete for reaching the sky, while the river resembles a sword encircling the tranquil bay."</p>

        <h3>Modern Development</h3>
        <p>In recent decades, while protecting its natural and cultural heritage, Guilin has actively developed tourism and related industries. Urban development emphasizes harmony with the natural environment, promoting sustainable ecotourism.</p>
        <p>Guilin is also an important city in China-ASEAN cooperation under the framework of the Belt and Road Initiative, with increasing international exchanges. Traditional crafts such as Guilin brocade and "Three Sculptures of Guilin" (wood carving, stone carving, bamboo carving) find new life through modern innovation.</p>

        <h3>Travel Etiquette and Advice</h3>
        <p>When visiting Guilin, respecting local customs of ethnic minorities is very important. When visiting ethnic minority villages, please ask for permission before taking photographs and avoid religious taboos.</p>
        <p>探访自然景区时，请遵循生态保护原则：不乱扔垃圾，不破坏植被，不惊扰野生动物。购买纪念品时优先选择当地手工艺品，支持传统文化传承。</p>
        <p>与当地人交流时，即使语言不通，友善的微笑和尊重的态度也能拉近彼此距离。品尝地道美食时，了解适当的餐桌礼仪会让体验更加愉快。</p>
        `
      }
    ]
  },
  ja: { 
    title: "桂林：天下第一の山水",
    subtitle: "詩情あふれる漓江の旅、カルスト地形の絶景を探る",
    sections: [
      {
        title: "第一印象",
        content: `
        <p>桂林は自然の恵みを受けた都市で、独特のカルスト地形で世界的に有名です。「桂林の山水は天下第一」という言葉は単なる賛辞がありませんが、この魔法の土地の真の姿を映し出しています。</p>
        <p>ここでは、山々が翡翠の彫刻のように無数の形で立ち、澄んだ漓江が山々の間を緑のリボンのように蛇行しています。 川を船で進むと、両岸の山々が水面に映り、動く中国山水画を作り出します。</p>
        <p>朝霧に包まれた漓江も、夕日に照らされる都市のシルエットがありますが、訪れる人を魅了し、まるで生きた風景画の中にいるような感覚を与えます。</p>
        `
      },
      {
        title: "基本情報",
        content: `
        <p><strong>最適な訪問時期:</strong> 春(3-5月)と秋(9-11月)は気候が穏やかで、桂林を訪れるのに最適な季節です。夏(6-8月)は雨が多いですが、最も緑豊かな景色が広がります。冬(12-2月)は観光客が少なく、気温も低めです。</p>
        <p><strong>気候:</strong> 桂林は亜熱帯モンスーン気候で、四季がはっきりしており、年間平均気温は約19°Cです。夏は暑く雨が多く、冬は穏やかで降水量が少なめです。湿度が高いため、常に雨具を携帯することをお勧めします。</p>
        <p><strong>交通:</strong> 桂林両江国際空港には多くの国内外の路線があります。市内の交通は主にバスとタクシーがあり、リ河観光には大竹筏やクルーズ船が利用できます。桂林と陽朔の間はバスやリ河クルーズで便利に移動でき、都市間鉄道も効率的です。</p>
        <p><strong>オススメ滞在期間:</strong> 桂林市内と周辺の陽朔や竜勝などを探索するには4-5日の滞在がお勧めです。市内の主要な観光スポットだけを訪れる場合は2-3日で十分です。現地の文化と田園風景を深く体験するには、約7日間の計画を立てるとよいでしょう。</p>
        <p><strong>費用レベル:</strong> 全体的な費用レベルは中程度で、北京や上海と同じような1級都市より低いですが、観光スポットの入場料は比較的高めです。宿泊費は格安ホテルから高級リゾートまで幅広く、食事の価格はリーズナブルで、地元の名物料理はコストパフォーマンスが高いです。</p>
        `
      },
      {
        title: "必見の観光スポット",
        content: `
        <h3>リ河景勝区</h3>
        <p>中国で最も美しい川の一つで、クルーズで両岸のユニークな山々と田園風景を鑑賞できます。リ河のハイライト区間は桂林市から陽朔県まで続き、全長83キロメートルです。</p>
        <p><strong>旅行のコツ:</strong> 興坪から陽朔までの区間が最も壮観な景色を提供します。ピークシーズンには事前にボートチケットを予約し、朝の光が最も美しいので早朝から出発することをお勧めします。日焼け止めと雨具を忘れずに持参してください。</p>

        <h3>陽朔西街</h3>
        <p>中国と西洋の文化が融合する歩行者専用通りで、桂林で最も活気のある場所の一つです。さまざまな専門店、カフェ、バー、レストランがあり、地元のレジャーライフを垣間見ることができます。</p>
        <p><strong>旅行のコツ:</strong> 夜はライトアップされ美しく、地元のナイトライフを体験するのに最適な場所です。混雑するホリデーシーズンは避けるようにしましょう。ここは地元の手工芸品やお土産を購入するのに最適な場所です。</p>

        <h3>象鼻山</h3>
        <p>桂林を象徴するランドマークで、川から水を飲む象に似ていることからその名が付けられました。リ河と桃花江の合流点に位置し、桂林の山水の代表です。</p>
        <p><strong>旅行のコツ:</strong> 夕方が訪問に最適で、夕日に浮かぶ象鼻山のシルエットを見ることができます。山頂の月牙閣に登ると、桂林市内とリ河のパノラマビューが楽しめます。</p>

        <h3>龍脊梯田</h3>
        <p>龍勝各族自治県にある壮観な梯田で、金坑、平安、大界の三つの主要な景勝地があります。梯田は山の輪郭に沿って層状に広がり、季節ごとに異なる景観を見せます。</p>
        <p><strong>旅行のコツ:</strong> 春に秧を植えた後は水が満たされ空を映し、夏は緑豊か、秋は黄金色に輝き、冬には時折雪に覆われた梯田が見られます。少数民族の文化を体験するために一泊することを検討してください。</p>

        <h3>両江四湖</h3>
        <p>桂林市内を巡る水上サーキットで、リ河、桃花江、そして杉湖、榕湖、桂湖、木龍湖の四つの湖をつなぎます。ルートに沿って都市の夜景と風光明媚な景観を楽しむことができます。</p>
        <p><strong>旅行のコツ:</strong> 夜のクルーズが最高の体験を提供し、ライトアップされた橋や建物を鑑賞できます。ボートチケットはホテルや旅行代理店で予約するか、現地で購入できます。全行程は約2時間です。</p>
        `
      },
      {
        title: "ユニークな体験",
        content: `
        <h3>リ河大竹筏下り</h3>
        <p>伝統的な大竹筏を乗って下ると、リ河の景色を近くで体験でき、桂林の自然美を楽しむ最高の方法の一つです。地元の漁師が竹筏を操り、旅行パンフレットで見るようなリ河のクラシックな景色を鑑賞できます。</p>
        <p><strong>体験のコツ:</strong> 陽朔の遇龍河とリ河の両方で大竹筏体験ができ、それぞれ特徴があります。遇龍河は流れが穏やかで家族向け、リ河はより壮観な景色を提供します。公式の乗り場を選び、必ずライフジャケットを着用してください。</p>

        <h3>印象劉三姐ショー</h3>
        <p>有名な映画監督である張芸謀によって演出された大規模な野外パフォーマンスで、リ河の風景を背景に広西の民族文化と伝説を紹介します。このショーは現代の照明技術と地元の民間伝承要素を組み合わせ、壮大で印象的なスペクタクルを作り出しています。</p>
        <p><strong>体験のコツ:</strong> 演出は陽朔県のシャングリラ景勝地で行われます。1-2日前にチケットを予約し、1時間前に到着するようにしましょう。小雨でも公演は続行されるため、軽いレインコートを持参してください。</p>

        <h3>農村体験</h3>
        <p>桂林周辺の村々では、農作業への参加、地元の家庭料理の試食、伝統工芸の学習など、本格的な農村生活を体験できます。興坪、陽朔、龍脊梯田地域の少数民族の村々は、没入型の体験に特に価値があります。</p>
        <p><strong>体験のコツ:</strong> 地元の旅行代理店を通じて公式な体験プログラムを予約するか、観光地で問い合わせましょう。地元の習慣を尊重し、安全と衛生に気を配ってください。</p>

        <h3>アムヲクライミングと洞窟探検</h3>
        <p>桂林のカルスト地形は、アムヲクライミングに最適な多くの石灰岩の峰と、探検のための神秘的な洞窟を生み出しています。陽朔はアジアで有名なアムヲクライミングの目的地となり、世界中の愛好家を惹きつけています。七星岩や芦笛岩のような洞窟は、魔法のような地下世界の体験を提供します。</p>
        <p><strong>体験のコツ:</strong> 初心者はプロの指導の下でアムヲクライミングを試すべきです。西街にはいくつかのクライミングクラブがあります。洞窟訪問では、ツアーグループに従い、安全のためガイドの指示に従ってください。</p>

        <h3>十里画廊ハイキング</h3>
        <p>陽朔にある景勝道路で、両側にユニークなカルスト峰と絵のような田園風景と村々があります。自転車を乗って、桂林の山、水、田舎の生活を近くで体験できます。</p>
        <p><strong>体験のコツ:</strong> ルートは約10 キロメートルで、自転車で約1時間、徒歩で2-3時間かかります。真昼の日差しと人混みを避けるため、朝か夕方の訪問が最適です。</p>
        `
      },
      {
        title: "食事ガイド",
        content: `
        <h3>桂林料理の特徴</h3>
        <p>桂林料理は酸味、辛味、新鮮な風味が特徴で、湖南料理と広東料理の要素を強い地元の影響と組み合わせています。桂林米粉は長い歴史と全国的な人気を持つ、最も代表的な地元の食べ物です。</p>

        <h3>必食の料理</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>桂林米粉</strong> - 最も有名な伝統的なスナックで、高品質の米から作られ、煮込んだ肉、漬け豆、ピーナッツなどのトッピングとともに、滑らかな食感の爽やかなスープで提供されます。</li>
          <li><strong>ビール魚</strong> - リ河の新鮮な魚をビールで調理する桂林の名物で、魚の身が柔らかく、微かなビールの香りと独特の味わいが特徴です。</li>
          <li><strong>荔浦扣肉（リプカオロウ）</strong> - 豚バラ肉と荔浦里芋を蒸し煮した料理で、豊かでありながら脂っこくなく、里芋が肉汁を吸収して豊かな風味を生み出します。</li>
          <li><strong>リ河螺</strong> - 地元の新鮮なリ河の螺を唐辛子、パイルカンなどのスパイスで調理し、柔らかい肉と食欲をそそる豊かなスープが特徴です。</li>
          <li><strong>恭城油茶</strong> - 恭城県の名物で、茶葉を炒めて挽き、油、塩、パフォードを加え、米のパフとピーナッツを添えて独特の風味を作り出します。</li>
        </ul>

        <h3>オススメレストラン</h3>
        <p>桂林の食事シーンは市中心部のレストランと陽朔の飲食店に分かれています。市中心部の正陽歩行街と中山路は、伝統的な米粉店が多く、本格的な桂林料理を味わう絶好の場所です。陽朔西街には中国と西洋の風味を融合した多くのレストランがあり、革新的な料理を試すのに理想的です。</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>和記桂林米粉（正陽支店）</strong> - 桂林で最も有名な伝統的な麺店の一つ</li>
          <li><strong>肥仔荔浦扣肉</strong> - 本格的な荔浦扣肉で知られる</li>
          <li><strong>アガンレストラン</strong> - 本格的な桂林料理と優れたビール魚</li>
          <li><strong>陽朔アフアレストラン</strong> - 地元で推奨される家庭料理</li>
          <li><strong>静園</strong> - 洗練された桂林料理を提供する優雅な環境</li>
        </ul>

        <h3>ベジタリアンオプション</h3>
        <p>桂林は多様なベジタリアン料理を提供しており、寺院の近くには純粋なベジタリアンレストランが多くあります。桂林米粉などの地元の名物料理は、肉のトッピングなしで野菜のみを追加して注文することができます。</p>
        <p>陽朔西街には、中国と西洋の料理の伝統を融合したベジタリアン料理を提供する「Pure Lotus Vegetarian Restaurant」など、国際観光客向けの西洋風ベジタリアンレストランがいくつかあります。</p>
        `
      },
      {
        title: "文化と歴史の洞察",
        content: `
        <h3>歴史的発展</h3>
        <p>桂林は長い歴史を持ち、人間の活動は旧石器時代にまでさかのぼります。秦朝時代(紀元前221-207年)に桂林県が設立され、「桂樹の森」という意味で名前が付けられました。唐宋時代、桂林は中国南部の重要な政治、経済、文化の中心となりました。</p>
        <p>元朝から明、清王朝を通じて、桂林は広西の政治的中心であり続けました。歴史的には、繁栄する貿易と頻繁な文化交流がある海上絲綢の道と西南絲綢の道の重要な交差点でもありました。20世紀以降、桂林は独特の自然景観のおかげで、徐々に有名な中国の観光都市として発展してきました。</p>

        <h3>文化遺産</h3>
        <p>桂林地域は壮族、瑶族、侗族などの少数民族の故郷であり、豊かで多様な文化的景観に貢献しています。壮族の銅鼓舞、瑶族の長鼓舞、侗族の大歌などの地元の民俗芸術はすべて中国の無形文化遺産です。</p>
        <p>桂林の風景は伝統的な中国の山水画の重要な題材でもあり、歴史を通じて数え切れない学者や芸術家を惹きつけてきました。宋代の詩人ファンチャンタは「千の山が空に向かって競い合い、剣のような河が静かな入り江を囲む」という詩句で桂林の壮大な景色を鮮やかに描写しました。</p>

        <h3>現代の発展</h3>
        <p>最近数十年間、桂林は自然と文化遺産を保護しながらも、観光業と関連産業を積極的に発展させてきました。都市開発は自然環境との調和を強調し、持続可能なエコツーリズムを推進しています。</p>
        <p>桂林はまた、ベルトアンドロードイニシアティブの下で中国とASEAN協力の重要な都市でもあり、国際交流が増加しています。桂林刺繍と「桂林三彫り」(木彫り、石彫り、竹彫り)などの伝統工芸は、現代的な革新を通じて新たな命を見出しています。</p>

        <h3>旅行のマナーとアドバイス</h3>
        <p>桂林を訪れる際は、地元の少数民族の習慣を尊重することが非常に重要です。少数民族の村を訪問する際は、写真を撮る前に許可を求め、宗教的なタブーを避けるようにしましょう。</p>
        <p>自然の景勝地を探索する際は、生態保護の原則に従いましょう: ゴミを捨てない、植生を傷つけない、野生動物を邪魔しない。記念品を購入する際は、伝統文化の継承を支持するために地元の手工芸品を優先しましょう。</p>
        <p>地元の人々と交流する際は、友好的な笑顔と敬意ある態度が言語の壁を橋渡しします。適切な食事のマナーを理解することで、料理体験がより充実したものになるでしょう。</p>
        `
      }
    ]
  },
  ko: { 
    title: "구이린: 세상에서 가장 아름다운 산수",
    subtitle: "시적인 리장 여행, 카르스트 지형의 경이로움을 탐험하는 곳",
    sections: [
      {
        title: "첫인상",
        content: `
        <p>구이린은 자연의 축복을 받은 도시로, 독특한 카르스트 지형으로 세계적으로 유명합니다. '구이린의 경치는 천하제일'이라는 말은 단순한 찬사가 아니라 이 신비로운 땅의 진정한 모습을 반영하고 있습니다.</p>
        <p>이곳에서는 산들이 무수한 형태로 옥 조각상처럼 우뚝 서 있고, 맑은 리장 강이 산들 사이로 녹색 리본처럼 굽이굽이 흐릅니다. 강 위를 항해하면 양쪽의 산들이 물에 비치면서 움직이는 중국 산수화를 만들어냅니다.</p>
        <p>아침 안개에 싸인 리장이든, 일몰 시간의 도시 실루엣이든, 방문객들을 매료시키며 마치 살아있는 풍경화 속에 있는 것 같은 느낌을 줍니다.</p>
        `
      },
      {
        title: "기본 정보 개요",
        content: `
        <p><strong>최적의 방문 시기:</strong> 봄(3-5월)과 가을(9-11월)은 날씨가 쾌적하여 구이린을 방문하기에 가장 좋은 계절입니다. 여름(6-8월)은 비가 많이 내리지만 가장 푸른 경치를 볼 수 있으며, 겨울(12-2월)은 관광객이 적지만 기온이 낮습니다.</p>
        <p><strong>기후:</strong> 구이린은 아열대 몬순 기후로 사계절이 뚜렷하며 연평균 기온은 약 19°C입니다. 여름은 덥고 비가 많으며, 겨울은 온화하고 강수량이 적습니다. 공기 습도가 높아 항상 우비를 휴대하는 것이 좋습니다.</p>
        <p><strong>교통:</strong> 구이린 량장 국제공항에는 다양한 국내외 노선이 있습니다. 시내 교통은 주로 버스와 택시가 있으며, 리장 투어에는 대나무 뗏목이나 크루즈 보트를 이용할 수 있습니다. 구이린과 양쇼 사이의 이동은 버스나 리장 크루즈로 편리하며, 도시 간 철도도 효율적입니다.</p>
        <p><strong>추천 체류 기간:</strong> 구이린 시내와 양쇼, 룽성 등 주변 지역을 탐험하기 위해서는 4-5일의 방문이 권장됩니다. 도시 내 주요 명소만 방문한다면 2-3일이면 충분합니다. 현지 문화와 농촌 풍경을 깊이 경험하려면 약 7일을 계획하세요.</p>
        <p><strong>비용 수준:</strong> 전반적인 비용 수준은 중등급이며, 베이징이나 상하이와 같은 1급 도시보다 낮지만, 관광 명소 입장료는 상대적으로 높은 편입니다. 숙박 비용은 저렴한 호텔부터 고급 리조트까지 다양하게 있습니다. 식비는 합리적이며, 현지 특산품은 가성비가 좋습니다.</p>
        `
      },
      {
        title: "꼭 가봐야 할 명소",
        content: `
        <h3>리장 경관구</h3>
        <p>중국에서 가장 아름다운 강 중 하나로, 보트 투어를 통해 양안의 독특한 봉우리와 전원 풍경을 감상할 수 있습니다. 리장의 하이라이트 구간은 구이린 시내에서 양쇼 현까지 이어지며, 전체 길이는 83 킬로미터입니다.</p>
        <p><strong>여행 팁:</strong> 싱핑에서 양쇼까지의 구간이 가장 멋진 풍경을 제공합니다. 성수기에는 보트 티켓을 미리 예약하고, 가장 아름다운 조명을 위해 아침에 여정을 시작하세요. 햇빛 보호와 우비도 잊지 마세요.</p>

        <h3>양쇼 서가</h3>
        <p>중국과 서양 문화가 혼합된 보행자 거리로, 구이린에서 가장 활기찬 장소 중 하나입니다. 다양한 특색 있는 상점, 카페, 바, 레스토랑이 있어 현지의 여가 생활을 엿볼 수 있는 창문이 됩니다.</p>
        <p><strong>여행 팁:</strong> 밤에는 아름답게 조명이 밝혀져 현지 야간 생활을 경험하기에 좋은 장소입니다. 피크 휴가 기간을 피하도록 노력하세요. 이곳은 현지 수공예품과 기념품을 구매하기에 좋은 장소입니다.</p>

        <h3>코끼리 코 산</h3>
        <p>구이린의 상징적인 명소로, 강에서 물을 마시는 코끼리를 닮았다고 하여 이름 지어졌습니다. 리장과 도화강의 합류점에 위치하여 구이린의 경관을 상징합니다.</p>
        <p><strong>여행 팁:</strong> 저녁 시간에 방문하면 일몰을 배경으로 코끼리 코 산의 실루엣을 볼 수 있어 가장 좋습니다. 꼭대기의 월아각에 오르면 구이린 시내와 리장의 파노라마 전망을 볼 수 있습니다.</p>

        <h3>룽지 계단식 논</h3>
        <p>룽성 다민족 자치현에 위치한 웅장한 계단식 논으로, 금갱, 평안, 다재 세 개의 주요 관광 지역이 있습니다. 계단식 논은 산 윤곽을 따라 층층이 펼쳐져 계절마다 다른 경치를 보여줍니다.</p>
        <p><strong>여행 팁:</strong> 봄에 모내기 후에는 물이 가득 차 하늘을 반사하고, 여름에는 푸른 녹음이 우거지며, 가을에는 황금색 들판으로 변하고, 겨울에는 간혹 눈 덮인 계단식 논을 볼 수 있습니다. 소수 민족 문화를 경험하기 위해 하룻밤 묵는 것을 고려해보세요.</p>

        <h3>양강사호</h3>
        <p>구이린 시내를 순환하는 수상 경로로, 리장, 도화강, 그리고 네 개의 호수(삼호, 융호, 귀호, 목룡호)를 연결합니다. 경로를 따라 도시의 야경과 경치를 즐길 수 있습니다.</p>
        <p><strong>여행 팁:</strong> 야간 크루즈는 조명이 켜진 다리와 건물을 감상할 수 있어 최고의 경험을 제공합니다. 보트 티켓은 호텔이나 여행사에서 예약하거나 현장에서 구매할 수 있습니다. 전체 여정은 약 2시간이 소요됩니다.</p>
        `
      },
      {
        title: "특별한 체험",
        content: `
        <h3>리장 대나무 뗏목 체험</h3>
        <p>전통적인 대나무 뗏목을 타고 하류로 내려가면 리장의 경치를 가까이에서 체험할 수 있어, 구이린의 자연 미를 즐기는 최고의 방법 중 하나입니다. 현지 어부들이 뗏목을 조종하며, 여행 브로셔에서 볼 수 있는 리장의 클래식한 전망을 감상할 수 있습니다.</p>
        <p><strong>체험 팁:</strong> 양쇼의 우룡강과 리장 모두 대나무 뗏목 체험을 제공하며, 각각 독특한 특징이 있습니다. 우룡강은 물살이 잔잔하여 가족 여행에 적합하고, 리장은 더 웅장한 경치를 제공합니다. 공식 선착장을 선택하고 항상 구명조끼를 착용하세요.</p>

        <h3>인상 류삼저 쇼</h3>
        <p>유명한 영화감독 장이모우가 연출한 대규모 야외 공연으로, 리장 경관을 배경으로 광시의 민족 문화와 전설을 선보입니다. 이 쇼는 현대적인 조명 기술과 현지 민담 요소를 결합하여 장엄하고 인상적인 스펙터클을 만들어냅니다.</p>
        <p><strong>체험 팁:</strong> 공연은 양쇼 현의 샹그릴라 경관 지역에서 열립니다. 1-2일 전에 티켓을 예약하고 한 시간 일찍 도착하세요. 가벼운 우비를 가져오세요, 쇼는 가벼운 비가 내려도 계속됩니다.</p>

        <h3>농촌 체험</h3>
        <p>구이린 주변의 마을들은 농사 활동 참여, 현지 가정식 맛보기, 전통 공예 배우기 등 정통 농촌 생활 체험을 제공합니다. 싱핑, 양쇼, 룽지 계단식 논 지역의 소수 민족 마을은 몰입형 체험을 위해 특히 가치가 있습니다.</p>
        <p><strong>체험 팁:</strong> 현지 여행사를 통해 공식 체험 프로그램을 예약하거나 관광 지역에서 문의하세요. 현지 관습을 존중하고 안전과 위생에 주의를 기울이세요.</p>

        <h3>암벽 등반과 동굴 탐험</h3>
        <p>구이린의 카르스트 지형은 암벽 등반에 이상적인 많은 석회암 봉우리와 탐험을 위한 신비로운 동굴을 만들어냈습니다. 양쇼는 아시아에서 유명한 암벽 등반 목적지가 되어 전 세계의 애호가들을 끌어들이고 있습니다. 칠성암이나 노적암과 같은 동굴은 마법 같은 지하 세계 체험을 제공합니다.</p>
        <p><strong>체험 팁:</strong> 초보자는 전문 지도 아래 암벽 등반을 시도해야 합니다. 서가에서 여러 클라이밍 클럽을 찾을 수 있습니다. 동굴 방문 시에는 투어 그룹을 따르고 안전을 위해 가이드 지시를 따르세요.</p>

        <h3>십리화랑 하이킹</h3>
        <p>양쇼에 있는 경관 도로로, 양쪽에 독특한 카르스트 봉우리와 그림 같은 농촌 풍경과 마을이 있습니다. 자전거를 타거나 걸으면서 구이린의 산, 물, 농촌 생활을 가까이에서 체험할 수 있습니다.</p>
        <p><strong>체험 팁:</strong> 경로는 약 10 킬로미터로, 자전거로 약 1시간, 도보로 2-3시간이 소요됩니다. 정오의 햇빛과 붐비는 시간을 피하기 위해 아침이나 늦은 오후에 방문하는 것이 좋습니다.</p>
        `
      },
      {
        title: "음식 가이드",
        content: `
        <h3>구이린 요리 특징</h3>
        <p>구이린 요리는 신맛, 매운맛, 신선한 맛이 특징이며, 후난과 광동 요리의 요소를 강한 지역적 영향과 결합하고 있습니다. 구이린 쌀국수는 오랜 역사와 전국적 인기를 가진 가장 대표적인 현지 음식입니다.</p>

        <h3>반드시 먹어봐야 할 음식</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>구이린 쌀국수</strong> - 가장 유명한 전통 간식으로, 고품질 쌀로 만들어 조림 고기, 절인 콩, 땅콩 등 토핑과 함께 상쾌한 국물에 부드러운 식감으로 제공됩니다.</li>
          <li><strong>맥주 생선</strong> - 리장의 신선한 생선을 맥주로 요리하는 구이린 특산품으로, 부드러운 생선살과 미묘한 맥주 향, 독특한 맛이 특징입니다.</li>
          <li><strong>리푸 토란 돼지고기</strong> - 돼지 삼겹살과 리푸 토란을 함께 찌는 방식으로 만들어 풍부하지만 느끼하지 않으며, 토란이 고기 즙을 흡수해 풍부한 맛을 냅니다.</li>
          <li><strong>구이린 달팽이</strong> - 현지 신선한 강 달팽이를 고추, 팔각 등 향신료와 함께 요리해 부드러운 살코기와 식욕을 자극하는 풍부한 국물이 특징입니다.</li>
          <li><strong>공청 유차</strong> - 공청 현의 특산품으로, 차 잎을 볶아 갈아서 기름, 소금, 파 등 양념을 넣고 튀긴 쌀 퍼프와 땅콩을 곁들여 독특한 맛을 냅니다.</li>
        </ul>

        <h3>추천 레스토랑</h3>
        <p>구이린의 식사 장면은 도심 레스토랑과 양쇼 식당으로 나누어집니다. 도심의 정양 보행자 거리와 중산로는 많은 전통 쌀국수 가게가 있어 정통 구이린 요리를 맛볼 수 있는 좋은 장소입니다. 양쇼 서가에는 중국과 서양 맛을 혼합한 많은 레스토랑이 있어 혁신적인 요리를 시도하기에 이상적입니다.</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>허지 구이린 쌀국수(정양점)</strong> - 구이린에서 가장 유명한 전통 국수집 중 하나</li>
          <li><strong>페이자이 리푸 토란 돼지고기</strong> - 정통 리푸 토란 돼지고기로 유명</li>
          <li><strong>아간 레스토랑</strong> - 정통 구이린 요리와 훌륭한 맥주 생선</li>
          <li><strong>아간 레스토랑</strong> - 정통 구이린 요리와 훌륭한 맥주 생선</li>
          <li><strong>정원</strong> - 화려한 환경에서 정교한 구이린 요리를 제공하는 우아한 환경</li>
        </ul>

        <h3>비지터리언 옵션</h3>
        <p>구이린은 다양한 비지터리언 요리를 제공하고 있으며, 사원 근처에는 순수한 비지터리언 레스토랑이 많이 있습니다. 구이린 쌀국수와 같은 지역의 명물 음식은 고기 토핑 없이 야채만 추가하여 주문할 수 있습니다.</p>
        <p>양쇼 서가에는 중국과 서양의 요리 전통을 결합한 비지터리언 요리를 제공하는 "Pure Lotus Vegetarian Restaurant"과 같은 국제 관광객을 위한 서양 비지터리언 레스토랑이 몇 개 있습니다.</p>
        `
      },
      {
        title: "문화와 역사의 통찰",
        content: `
        <h3>역사적 발전</h3>
        <p>구이린은 긴 역사를 가지고 있으며, 인간의 활동은 고고 시대까지 거슬러 올라갑니다. 진나라 시대(기원전 221-207년)에 구이린 군이 설립되었으며, '귀수나무의 숲'이라는 의미로 이름이 붙여졌습니다. 당송 시대, 구이린은 중국 남부의 중요한 정치, 경제, 문화의 중심이 되었습니다.</p>
        <p>원조 명나라와 명 왕조를 거쳐온 기간 동안, 구이린은 광시의 정치, 경제, 문화의 중심이 계속되었습니다. 역사적으로는 해상 실화로와 남서 실화로의 중요한 교차점이었으며, 번영하는 무역과 빈번한 문화 교류가 있었습니다. 20세기 이후, 구이린은 독특한 자연 경관의 덕분에 점차 유명한 중국의 관광 도시로 발전하였습니다.</p>

        <h3>문화 유산</h3>
        <p>桂林地域는壮族、瑶族、侗族等少数民族的聚居地，民族文化多元丰富。当地的民间艺术如壮族的铜鼓舞、瑶族的长鼓舞、侗族的大歌等都是中国非物质文化遗产。</p>
        <p>桂林山水也是中国传统山水画的重要题材，自古以来就吸引了无数文人墨客前来游览创作。宋代大诗人范成大的'万山磅礴拍天来，剑河如练静湾环'生动描绘了桂林的壮丽景观。</p>

        <h3>现代发展</h3>
        <p>In recent decades, while protecting its natural and cultural heritage, Guilin has actively developed tourism and related industries. Urban development emphasizes harmony with the natural environment, promoting sustainable ecotourism.</p>
        <p>Guilin is also an important city in China-ASEAN cooperation under the framework of the Belt and Road Initiative, with increasing international exchanges. Traditional crafts such as Guilin brocade and "Three Sculptures of Guilin" (wood carving, stone carving, bamboo carving) find new life through modern innovation.</p>

        <h3>Travel Etiquette and Advice</h3>
        <p>When visiting Guilin, respecting local customs of ethnic minorities is very important. When visiting ethnic minority villages, please ask for permission before taking photographs and avoid religious taboos.</p>
        <p>When exploring natural scenic areas, follow the principles of ecological protection: do not litter, do not damage vegetation, and do not disturb wildlife. When purchasing souvenirs, prioritize local artisanal products to support local cultural heritage.</p>
        <p>When interacting with locals, friendly smiles and respectful attitudes can bridge language barriers. Understanding appropriate table manners will enhance your culinary experience.</p>
        `
      }
    ]
  },
  fr: { 
    title: "Guilin: Paysages de Montagnes et d'Eaux Sans Égal",
    subtitle: "Voyage poétique sur la rivière Li, exploration des merveilles karstiques",
    sections: [
      {
        title: "Premières Impressions",
        content: `
        <p>Guilin, une ville bénie par la nature, est mondialement connue pour sa topographie karstique unique. Le dicton 'Le paysage de Guilin est le plus beau sous le ciel' n'est pas qu'un simple éloge, mais un véritable reflet de cette terre magique.</p>
        <p>Ici, les montagnes se dressent comme des sculptures de jade aux formes innombrables; la rivière Li serpente comme un ruban vert entre les montagnes. En naviguant sur la rivière, les montagnes des deux rives se reflètent dans l'eau, créant un tableau paysager chinois vivant.</p>
        <p>Que ce soit la brume matinale enveloppant la rivière Li ou la silhouette de la ville au coucher du soleil, tout captive les visiteurs, leur donnant l'impression d'être dans une peinture de paysage vivante.</p>
        `
      },
      {
        title: "Aperçu des Informations Essentielles",
        content: `
        <p><strong>Meilleure Période pour Visiter:</strong> Le printemps (mars-mai) et l'automne (septembre-novembre) offrent un climat agréable, ce qui en fait les meilleures saisons pour visiter Guilin. L'été (juin-août) apporte plus de pluie mais les paysages sont plus verdoyants, tandis que l'hiver (décembre-février) attire moins de touristes mais les températures sont plus basses.</p>
        <p><strong>Climat:</strong> Guilin jouit d'un climat subtropical de mousson avec quatre saisons distinctes et une température annuelle moyenne d'environ 19°C. Les étés sont chauds et pluvieux, les hivers sont doux avec moins de précipitations. L'humidité de l'air est élevée, il est donc conseillé de toujours porter des vêtements de pluie.</p>
        <p><strong>Transports:</strong> L'aéroport international de Guilin Liangjiang dessert de nombreuses routes nationales et internationales. Les bus publics et les taxis sont les principaux moyens de transport dans la ville. Des radeaux en bambou ou des bateaux de croisière sont disponibles pour les excursions sur la rivière Li. Les déplacements entre Guilin et Yangshuo sont pratiques en bus ou en croisière sur la rivière Li, et les chemins de fer interurbains sont également efficaces.</p>
        <p><strong>Durée Recommandée:</strong> Une visite de 4-5 jours est recommandée pour explorer la ville de Guilin et les zones environnantes comme Yangshuo et Longsheng. Si vous ne visitez que les attractions principales de la ville, 2-3 jours suffiront. Pour une expérience approfondie de la culture locale et des paysages ruraux, prévoyez environ 7 jours.</p>
        <p><strong>Niveau de Coût:</strong> Le niveau global des coûts est modéré, inférieur à celui des villes de premier rang comme Pékin et Shanghai, bien que les prix des billets d'attraction soient relativement élevés. Les coûts d'hébergement varient considérablement, des hôtels économiques aux complexes de luxe. Les prix des repas sont raisonnables et les spécialités locales offrent un bon rapport qualité-prix.</p>
        `
      },
      {
        title: "Attractions Incontournables",
        content: `
        <h3>Zone Panoramique de la Rivière Li</h3>
        <p>L'une des plus belles rivières de Chine, offrant des excursions en bateau pour apprécier les pics uniques et les paysages ruraux le long des deux rives. La section principale de la rivière Li s'étend de la ville de Guilin au comté de Yangshuo, sur 83 kilomètres.</p>
        <p><strong>Conseils de Voyage:</strong> La section de Xingping à Yangshuo offre les paysages les plus spectaculaires. Réservez vos billets de bateau à l'avance pendant la haute saison, commencez votre voyage le matin pour bénéficier du meilleur éclairage, et n'oubliez pas d'apporter une protection solaire et des vêtements de pluie.</p>

        <h3>Rue Ouest de Yangshuo</h3>
        <p>Une rue piétonne qui mélange les cultures chinoise et occidentale, et l'un des endroits les plus animés de Guilin. Elle propose diverses boutiques spécialisées, cafés, bars et restaurants, offrant une fenêtre sur la vie locale de loisirs.</p>
        <p><strong>Conseils de Voyage:</strong> La rue est magnifiquement éclairée la nuit, ce qui en fait un excellent endroit pour vivre la vie nocturne locale. Essayez d'éviter les périodes de pointe de vacances. C'est un endroit idéal pour acheter de l'artisanat local et des souvenirs.</p>

        <h3>Colline de la Trompe d'Éléphant</h3>
        <p>Le monument emblématique de Guilin, nommé pour sa ressemblance avec un éléphant buvant à la rivière. Situé à la confluence de la rivière Li et de la rivière Fleur de Pêcher, il incarne le paysage de Guilin.</p>
        <p><strong>Conseils de Voyage:</strong> Le soir est le meilleur moment pour visiter, lorsque vous pouvez voir la silhouette de la Colline de la Trompe d'Éléphant contre le coucher du soleil. Grimper jusqu'à la Pagode de la Lune au sommet offre des vues panoramiques sur la ville de Guilin et la rivière Li.</p>

        <h3>Terrasses de Riz de Longji</h3>
        <p>Situées dans le comté autonome de diverses nationalités de Longsheng, ces spectaculaires champs en terrasses comprennent trois principales zones panoramiques: Jinkeng, Ping'an et Dazhai. Les terrasses suivent les contours de la montagne en couches, présentant différents paysages à chaque saison.</p>
        <p><strong>Conseils de Voyage:</strong> Après la plantation du riz au printemps, les terrasses sont remplies d'eau, reflétant le ciel; l'été apporte une végétation luxuriante; l'automne transforme les champs en or; et l'hiver offre occasionnellement des terrasses couvertes de neige. Envisagez de passer la nuit pour découvrir les cultures des minorités ethniques.</p>

        <h3>Deux Rivières et Quatre Lacs</h3>
        <p>Un circuit aquatique autour de la ville de Guilin, reliant la rivière Li, la rivière Fleur de Pêcher, et quatre lacs: le lac Shan, le lac Banyan, le lac Gui et le lac Mulong. Le long du parcours, vous pourrez profiter des vues nocturnes urbaines et des paysages pittoresques.</p>
        <p><strong>Conseils de Voyage:</strong> Une croisière nocturne offre la meilleure expérience, mettant en valeur les ponts et les bâtiments illuminés. Les billets de bateau peuvent être réservés dans les hôtels ou les agences de voyage, ou achetés sur place. L'ensemble du voyage dure environ 2 heures.</p>
        `
      },
      {
        title: "Expériences Uniques",
        content: `
        <h3>Descente en Radeau de Bambou sur la Rivière Li</h3>
        <p>Naviguer sur des radeaux traditionnels en bambou en aval offre une expérience de proximité avec les paysages de la rivière Li, l'une des meilleures façons de profiter de la beauté naturelle de Guilin. Les pêcheurs locaux dirigent les radeaux, vous permettant d'apprécier les vues classiques de la rivière Li que l'on voit dans les brochures de voyage.</p>
        <p><strong>Conseils d'Expérience:</strong> La rivière Yulong à Yangshuo et la rivière Li offrent toutes deux des excursions en radeau de bambou, chacune avec des caractéristiques uniques. La rivière Yulong a des courants plus doux adaptés aux familles, tandis que la rivière Li offre des paysages plus spectaculaires. Choisissez les embarcadères officiels et portez toujours un gilet de sauvetage.</p>

        <h3>Spectacle Impression Liu Sanjie</h3>
        <p>Un spectacle en plein air à grande échelle dirigé par le célèbre cinéaste Zhang Yimou, utilisant le paysage de la rivière Li comme toile de fond pour mettre en valeur la culture ethnique et les légendes du Guangxi. Le spectacle combine la technologie d'éclairage moderne avec des éléments du folklore local, créant un spectacle grandiose et impressionnant.</p>
        <p><strong>Conseils d'Expérience:</strong> La représentation a lieu dans la zone panoramique de Shangri-La dans le comté de Yangshuo. Réservez les billets 1-2 jours à l'avance et arrivez une heure plus tôt. Apportez un imperméable léger car le spectacle continue même sous une pluie légère.</p>

        <h3>Expérience Rurale</h3>
        <p>Les villages autour de Guilin offrent des expériences authentiques de la vie rurale, notamment la participation aux activités agricoles, la dégustation de repas locaux faits maison et l'apprentissage de l'artisanat traditionnel. Les villages des minorités ethniques à Xingping, Yangshuo et la zone des terrasses de Longji sont particulièrement intéressants pour des expériences immersives.</p>
        <p><strong>Conseils d'Expérience:</strong> Réservez des programmes d'expérience officiels auprès des agences de voyage locales ou renseignez-vous dans les zones panoramiques. Respectez les coutumes locales et faites attention à la sécurité et à l'hygiène.</p>

        <h3>Escalade et Exploration de Grottes</h3>
        <p>Le paysage karstique de Guilin a créé de nombreux pics calcaires idéaux pour l'escalade et des grottes mystérieuses à explorer. Yangshuo est devenue une destination d'escalade célèbre en Asie, attirant des passionnés du monde entier. Des grottes comme la Grotte des Sept Étoiles et la Grotte de la Flûte de Roseau offrent des expériences magiques du monde souterrain.</p>
        <p><strong>Conseils d'Expérience:</strong> Les débutants devraient essayer l'escalade sous la direction de professionnels; plusieurs clubs d'escalade se trouvent sur la rue Ouest. Pour les visites de grottes, suivez les groupes de visites et les instructions des guides pour votre sécurité.</p>

        <h3>Randonnée dans la Galerie des Dix Milles</h3>
        <p>Une route panoramique à Yangshuo avec des pics karstiques uniques des deux côtés et des paysages ruraux et villages pittoresques. Vous pouvez faire du vélo ou marcher pour vivre de près les montagnes, les eaux et la vie rurale de Guilin.</p>
        <p><strong>Conseils d'Expérience:</strong> L'itinéraire fait environ 10 kilomètres de long, prenant environ 1 heure à vélo ou 2-3 heures à pied. Il est préférable de visiter le matin ou en fin d'après-midi pour éviter le soleil de midi et les foules aux heures de pointe.</p>
        `
      },
      {
        title: "Guide Gastronomique",
        content: `
        <h3>Caractéristiques de la Cuisine de Guilin</h3>
        <p>La cuisine de Guilin se caractérise par des saveurs acides, épicées et fraîches, combinant des éléments de la cuisine du Hunan et de Canton avec de fortes influences locales. Les nouilles de riz de Guilin sont l'aliment local le plus représentatif, avec une longue histoire et une popularité nationale.</p>

        <h3>Plats à Essayer Absolument</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Nouilles de Riz de Guilin</strong> - La collation traditionnelle la plus célèbre, faite de riz de haute qualité, servie avec de la viande braisée, des haricots marinés, des cacahuètes et d'autres garnitures dans un bouillon rafraîchissant avec une texture lisse.</li>
          <li><strong>Poisson à la Bière</strong> - Une spécialité de Guilin utilisant du poisson frais de la rivière Li cuit avec de la bière, résultant en une chair de poisson tendre avec un subtil parfum de bière et un goût unique.</li>
          <li><strong>Porc au Taro de Lipu</strong> - Préparé en faisant cuire à la vapeur du porc avec du taro de Lipu, ce plat est riche mais non gras, le taro absorbant les jus de viande pour une saveur généreuse.</li>
          <li><strong>Escargots de Guilin</strong> - Des escargots de rivière locaux frais cuits avec du piment, de l'anis étoilé et d'autres épices, créant une viande tendre et un bouillon riche qui stimule l'appétit.</li>
          <li><strong>Thé à l'Huile de Gongcheng</strong> - Une spécialité du comté de Gongcheng, faite en faisant frire des feuilles de thé, en les broyant, puis en ajoutant de l'huile, du sel, des oignons verts et d'autres assaisonnements, accompagnés de riz soufflé et de cacahuètes pour une saveur distinctive.</li>
        </ul>

        <h3>Restaurants Recommandés</h3>
        <p>La scène culinaire de Guilin peut être divisée en restaurants du centre-ville et établissements de restauration de Yangshuo. La rue piétonne de Zhengyang et la route de Zhongshan dans le centre-ville sont d'excellents endroits pour goûter à la cuisine authentique de Guilin, avec de nombreuses boutiques traditionnelles de nouilles. La rue Ouest de Yangshuo regroupe de nombreux restaurants mêlant saveurs chinoises et occidentales, idéals pour essayer des plats innovants.</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>Nouilles de Riz Heji (Succursale Zhengyang)</strong> - L'une des boutiques de nouilles traditionnelles les plus célèbres de Guilin</li>
          <li><strong>Porc au Taro Feizai Lipu</strong> - Connu pour son authentique porc au taro de Lipu</li>
          <li><strong>Restaurant Agan</strong> - Cuisine authentique de Guilin avec d'excellent poisson à la bière</li>
          <li><strong>Restaurant Afu de Yangshuo</strong> - Recommandé localement pour sa cuisine familiale</li>
          <li><strong>Jing Yuan</strong> - Environnement élégant servant une cuisine raffinée de Guilin</li>
        </ul>

        <h3>Options Végétariennes</h3>
        <p>Guilin offre diverses options végétariennes, avec de nombreux restaurants purement végétariens près des temples. De plus, les spécialités locales comme les nouilles de riz de Guilin peuvent être commandées sans garnitures de viande, avec seulement des légumes ajoutés.</p>
        <p>Dans la rue Ouest de Yangshuo, on trouve plusieurs restaurants végétariens occidentaux destinés aux touristes internationaux, comme le "Pure Lotus Vegetarian Restaurant", qui proposent des plats végétariens fusionnant les traditions culinaires chinoises et occidentales.</p>
        `
      },
      {
        title: "Aperçus Culturels et Historiques",
        content: `
        <h3>Développement Historique</h3>
        <p>Guilin a une longue histoire, avec une activité humaine remontant à l'ère paléolithique. Pendant la dynastie Qin (221-207 av. J.-C.), le comté de Guilin a été établi, nommé pour sa 'forêt d'osmanthes parfumés'. Durant les dynasties Tang et Song, Guilin est devenue un important centre politique, économique et culturel en Chine méridionale.</p>
        <p>De la dynastie Yuan aux dynasties Ming et Qing, Guilin est restée le centre politique du Guangxi. Historiquement, c'était aussi un important carrefour sur la Route de la Soie Maritime et la Route de la Soie du Sud-Ouest, avec un commerce prospère et des échanges culturels fréquents. Depuis le 20e siècle, Guilin s'est progressivement développée en une célèbre ville touristique chinoise grâce à ses paysages naturels uniques.</p>

        <h3>Patrimoine Culturel</h3>
        <p>La région de Guilin est le foyer de minorités ethniques, notamment les peuples Zhuang, Yao et Dong, contribuant à son riche et divers paysage culturel. Les arts folkloriques locaux tels que la danse du tambour Zhuang, la danse du long tambour Yao et le grand chant Dong font tous partie du patrimoine culturel immatériel de la Chine.</p>
        <p>Les paysages de Guilin ont également été des sujets importants dans la peinture traditionnelle chinoise de paysage, attirant d'innombrables érudits et artistes à travers l'histoire. Le poète de la dynastie Song Fan Chengda a décrit de façon vivante le magnifique paysage de Guilin dans son poème: "Des milliers de montagnes se disputent pour atteindre le ciel, tandis que la rivière ressemble à une épée encerclant la baie tranquille."</p>

        <h3>Développement Moderne</h3>
        <p>Au cours des dernières décennies, tout en protégeant son patrimoine naturel et culturel, Guilin a activement développé le tourisme et les industries connexes. Le développement urbain met l'accent sur l'harmonie avec l'environnement naturel, promouvant un écotourisme durable.</p>
        <p>Guilin est également une ville importante dans la coopération Chine-ASEAN dans le cadre de l'Initiative la Ceinture et la Route, avec des échanges internationaux croissants. L'artisanat traditionnel comme la broderie de Guilin et les "Trois Sculptures de Guilin" (sculpture sur bois, sur pierre et sur bambou) trouvent une nouvelle vie grâce à l'innovation moderne.</p>

        <h3>Étiquette de Voyage et Conseils</h3>
        <p>Lors de la visite de Guilin, respecter les coutumes locales des minorités ethniques est très important. Lorsque vous visitez des villages de minorités ethniques, veuillez demander la permission avant de prendre des photographies et évitez les tabous religieux.</p>
        <p>Lors de l'exploration des zones panoramiques naturelles, suivez les principes de protection écologique: ne jetez pas de déchets, n'endommagez pas la végétation et ne dérangez pas la faune. Lors de l'achat de souvenirs, privilégiez les produits artisanaux locaux pour soutenir le patrimoine culturel local.</p>
        <p>Lors des interactions avec les locaux, des sourires amicaux et des attitudes respectueuses peuvent combler les barrières linguistiques. Comprendre les bonnes manières à table appropriées enrichira votre expérience culinaire.</p>
        `
      }
    ]
  },
  de: {
    title: "Guilin: Berge und Gewässer ohne Vergleich",
    subtitle: "Eine malerische Reise am Li-Fluss und in die Karstlandschaft",
    sections: []
  },
  es: {
    title: "Guilin: Paisajes de Montañas y Aguas Sin Igual",
    subtitle: "Un viaje poético por el río Li y las maravillas kársticas",
    sections: []
  },
  ru: {
    title: "Гуйлинь: Непревзойденные Горы и Воды",
    subtitle: "Поэтическое путешествие по реке Ли и карстовым чудесам",
    sections: []
  }
};