import { Language } from '@/contexts/LanguageContext';
import { DestinationContent } from './destinationContent';

// 杭州的中文内容
const hangzhouContentZh: DestinationContent = {
  title: "天堂杭州",
  subtitle: "人间天堂，湖光山色",
  sections: [
    {
      title: "初印象",
      content: `
      <p>杭州，古称临安、钱塘，拥有2200多年建城史，曾是南宋王朝的都城。这座城市被马可·波罗赞誉为"世界上最美丽华贵之城"，以西湖为中心，山水交融，园林典雅，自古享有"人间天堂"的美誉。</p>
      <p>现代的杭州，既保留了传统江南水乡的柔美与诗意，又以数字经济和创新活力展现出蓬勃的现代气息。漫步西湖边，感受"暖风熏得游人醉"的意境；徜徉在古色古香的街巷中，体验深厚的历史文化底蕴；走进充满活力的城市新区，领略中国数字经济的创新力量。</p>
      `
    },
    {
      title: "基本信息速览",
      content: `
      <p><strong>最佳旅游季节：</strong>春季（3-5月）和秋季（9-11月）气候宜人，是游览杭州的黄金时节。</p>
      <p><strong>气候特点：</strong>亚热带季风气候，四季分明，夏季炎热潮湿，冬季温和少雪。</p>
      <p><strong>交通方式：</strong>杭州有完善的公共交通网络，地铁、公交覆盖主要景点。西湖周边适合步行或骑行游览。</p>
      <p><strong>建议游览天数：</strong>深度游览杭州需要4-5天，主要景点至少需要2-3天。</p>
      <p><strong>消费水平：</strong>整体消费水平居中，高端与平价选择均有，景区内消费相对较高。</p>
      `
    },
    {
      title: "必游景点",
      content: `
      <h3>西湖景区</h3>
      <p>西湖是杭州的灵魂所在，也是中国最著名的风景区之一，拥有"西湖十景"等众多名胜。湖面辽阔，周围群山环抱，湖中点缀着小岛、亭台楼阁，自古以来就是文人雅士吟诗作画的胜地。</p>
      <p><strong>旅行贴士：</strong>可乘坐游船环湖，或沿湖漫步欣赏不同角度的美景。清晨或傍晚游览西湖，可避开人流并欣赏最美的光线。三潭印月、断桥残雪、平湖秋月等景点不容错过。</p>

      <h3>灵隐寺</h3>
      <p>灵隐寺始建于东晋，是杭州最古老的寺庙之一，也是中国佛教禅宗十大古刹之一。寺内有著名的大雄宝殿和天王殿，周围的飞来峰上有精美的石窟造像，展示了精湛的佛教艺术。</p>
      <p><strong>旅行贴士：</strong>前往灵隐寺需要先购买灵隐景区门票，然后再购买寺庙门票。建议早上前往，人少且空气清新。参观时注意着装得体，尊重宗教场所。</p>

      <h3>西溪湿地</h3>
      <p>西溪湿地是杭州独特的城市湿地公园，被誉为"杭州之肾"。这里水网交织、植被丰富，保留了原生态的江南水乡风貌，也是观鸟和赏花的好去处。</p>
      <p><strong>旅行贴士：</strong>景区面积大，可选择电瓶船或摇橹船游览，也可租借自行车沿着栈道骑行。春季赏花、夏季观荷、秋季看芦苇、冬季赏梅各有特色。</p>

      <h3>龙井茶园与九溪十八涧</h3>
      <p>西湖龙井是中国十大名茶之一，龙井村和梅家坞一带的茶园是了解龙井茶文化的最佳去处。附近的九溪十八涧则是一条溪流蜿蜒、竹林环绕的徒步路线，自然风光优美。</p>
      <p><strong>旅行贴士：</strong>春季是龙井茶采摘季，可体验采茶和制茶过程。龙井茶园徒步线路有多条，可根据体力选择。购买龙井茶时注意真伪，正宗西湖龙井产量有限。</p>

      <h3>宋城</h3>
      <p>宋城是以南宋文化为主题的大型景区，重现了古代杭州的市井风貌。这里有各种传统手工艺展示、民俗表演和互动体验，其中《宋城千古情》演出是国内著名的大型歌舞秀。</p>
      <p><strong>旅行贴士：</strong>建议提前预订《宋城千古情》的演出票，特别是在旅游旺季。园区占地面积大，可安排半天或一天游览。园内有各种小吃和特色餐厅，可品尝杭州美食。</p>
      `
    },
    {
      title: "特色体验",
      content: `
      <h3>西湖游船</h3>
      <p>乘坐游船是领略西湖美景的经典方式，有普通游船和豪华包船两种选择。游船线路主要覆盖湖心亭、三潭印月等景点，从水面上欣赏西湖别有一番风味。</p>
      <p><strong>体验贴士：</strong>黄昏时分的夕阳西湖最为迷人，夜晚的灯光秀也值得一看。除了大型游船，也可选择小型划船，更加私密且灵活。不同码头的游船各有特色，可根据游览计划选择。</p>

      <h3>茶文化体验</h3>
      <p>作为"中国茶都"，杭州有着深厚的茶文化底蕴。在梅家坞或龙井村的茶室品尝正宗龙井茶，了解茶的采摘、制作工艺，体验传统的茶道礼仪，是了解杭州文化的重要一环。</p>
      <p><strong>体验贴士：</strong>春茶(明前龙井)品质最佳但价格较高。当地茶馆一般提供泡茶服务和茶点。茶叶购买注意辨别真伪，最好在有信誉的店铺或直接向茶农购买。</p>

      <h3>京杭大运河游览</h3>
      <p>京杭大运河是世界上最长的古代运河，杭州段保存了许多历史遗迹和传统风貌。沿运河漫步或乘船游览，可以看到拱宸桥、富义仓等历史建筑，感受这座千年水城的韵味。</p>
      <p><strong>体验贴士：</strong>运河夜游可欣赏两岸灯光和古桥夜景。运河旁的小吃街有许多杭州传统小吃。结合游览运河博物馆可更深入了解运河历史文化。</p>

      <h3>西湖骑行</h3>
      <p>骑行是环游西湖的绝佳方式，西湖环湖路全长约15公里，沿途可欣赏湖光山色和各个景点。骑行使您可以按照自己的节奏游览，随时停下来拍照或休息。</p>
      <p><strong>体验贴士：</strong>杭州有完善的共享单车系统，也有专业的自行车出租店提供优质车辆。环湖骑行大约需要2-3小时，建议早上或傍晚出发，避开高温和人流高峰。</p>

      <h3>杭帮菜美食体验</h3>
      <p>杭州菜是中国八大菜系之一的浙菜重要组成部分，以清鲜、雅淡见长。品尝东坡肉、西湖醋鱼、龙井虾仁等名菜，探访老字号如楼外楼、知味观等，是领略杭州饮食文化的必要体验。</p>
      <p><strong>体验贴士：</strong>杭州菜多用当地食材，如西湖莼菜、龙井茶等。传统杭帮菜口味偏甜。可考虑参加美食之旅或烹饪课程，深入了解杭州菜文化。</p>
      `
    },
    {
      title: "美食指南",
      content: `
      <h3>杭帮菜经典</h3>
      <p>杭州菜以本帮菜为基础，融合江浙特色形成，口味清淡鲜美，注重原料的鲜活和烹饪的火候。许多经典菜肴都与西湖典故或当地物产密切相关，展现了杭州深厚的文化底蕴。</p>
      <p><strong>必尝菜品：</strong></p>
      <ul>
        <li><strong>西湖醋鱼</strong> - 选用西湖草鱼，糖醋调味，鱼肉鲜嫩，口感酸甜适中</li>
        <li><strong>东坡肉</strong> - 源于苏东坡，肥而不腻，入口即化，红烧肉的巅峰之作</li>
        <li><strong>龙井虾仁</strong> - 用龙井茶叶炒制嫩虾，清香爽口，茶香与虾鲜完美结合</li>
        <li><strong>宋嫂鱼羹</strong> - 历史悠久的传统名菜，鱼肉细腻，汤汁浓郁</li>
        <li><strong>叫花鸡</strong> - 用荷叶和泥巴包裹烤制，保留了鸡肉的原汁原味</li>
      </ul>

      <h3>特色小吃</h3>
      <p>杭州小吃融合了精致与平民风味，既有宫廷点心的讲究，也有街头小吃的亲民。从早茶点心到夜市小吃，丰富多样的选择让人流连忘返。</p>
      <p><strong>推荐小吃：</strong></p>
      <ul>
        <li><strong>片儿川</strong> - 杭州特色早餐，薄面皮夹肉馅，口感酥脆</li>
        <li><strong>葱包桧儿</strong> - 外皮酥脆，内馅鲜香，葱香四溢</li>
        <li><strong>定胜糕</strong> - 传统糕点，松软香甜，寓意吉祥</li>
        <li><strong>桂花糖藕</strong> - 新鲜藕段加糖桂花蜜制作，甜而不腻</li>
        <li><strong>杭州小笼包</strong> - 皮薄馅多，汤汁丰富，风味独特</li>
      </ul>

      <h3>推荐餐厅</h3>
      <p><strong>老字号与高端餐厅：</strong></p>
      <ul>
        <li><strong>楼外楼</strong> - 创建于1848年的杭州名店，西湖醋鱼、西湖莼菜汤等招牌菜必尝</li>
        <li><strong>知味观</strong> - 百年老店，各类杭帮点心与传统菜肴俱全</li>
        <li><strong>外婆家</strong> - 现代杭帮菜连锁，价格亲民，适合家庭聚餐</li>
        <li><strong>江南会</strong> - 高端杭帮菜，环境雅致，创新菜品丰富</li>
        <li><strong>胡庆余堂药膳馆</strong> - 结合中医理念的特色药膳</li>
      </ul>

      <h3>特色餐饮区</h3>
      <p>杭州有多个美食集中区，各有特色，从高档餐厅到平价小吃一应俱全，满足不同需求。</p>
      <ul>
        <li><strong>河坊街</strong> - 传统小吃与手工艺品集中地</li>
        <li><strong>湖滨银泰周边</strong> - 时尚餐厅与国际美食</li>
        <li><strong>西溪天堂商业街</strong> - 各类创意餐厅与咖啡馆</li>
        <li><strong>武林夜市</strong> - 地道夜宵与平价美食</li>
        <li><strong>西湖景区周边</strong> - 临湖餐厅，环境优美但价格较高</li>
      </ul>
      `
    },
    {
      title: "文化历史洞察",
      content: `
      <h3>吴越文化与南宋辉煌</h3>
      <p>杭州历史悠久，早在7000年前就有人类活动。秦朝设县以来，历经吴越国和南宋两个重要时期，积淀了深厚的文化底蕴。吴越国时期（907-978年），杭州开始大规模开发西湖；南宋定都临安（今杭州）后（1132-1276年），杭州成为当时世界上最繁华的都市之一，商业、手工业、文化艺术都达到了顶峰。</p>
      <p>南宋时期的杭州城市布局、饮食文化、艺术风格对今天的杭州仍有深远影响。宋代的市井生活、商业繁荣和文化活力，通过《清明上河图》等艺术作品得以展现，至今仍是了解中国古代城市文明的重要窗口。</p>

      <h3>西湖文化景观</h3>
      <p>西湖及其周边的文化景观已被列入世界文化遗产名录，其独特价值在于人与自然和谐共处的杰出范例。千百年来，历代文人墨客、能工巧匠通过诗词、绘画、园林等形式，不断塑造和丰富西湖的文化内涵。"西湖十景"、"新西湖十景"等名胜古迹，都凝聚着中国传统审美与哲学观念。</p>
      <p>西湖不仅是自然景观，更是中国园林艺术、诗词歌赋、绘画艺术等多种文化形式的灵感源泉和集中体现。从白居易的"最爱湖东行不足"到苏轼的"欲把西湖比西子"，西湖已成为中国文化想象中不可或缺的重要意象。</p>

      <h3>运河文明与商业传统</h3>
      <p>京杭大运河的南端位于杭州，这条贯通南北的水上动脉为杭州带来了商业繁荣和文化交流。运河沿线形成了独特的水乡文化，也促进了杭州丝绸、瓷器、茶叶等特产的外销。杭州自古就是商业重镇，"丝绸之府"、"鱼米之乡"的美誉反映了其经济实力。</p>
      <p>今天的杭州继承了这一商业传统，成为中国电子商务和数字经济的中心。阿里巴巴等互联网巨头的崛起，代表了杭州商业文明的现代转型，也体现了这座城市兼容并蓄、敢为人先的精神特质。</p>

      <h3>文人情怀与艺术传承</h3>
      <p>杭州是文人雅士向往的城市，历代有无数诗人、画家、文学家在此生活或游历，留下了丰富的艺术作品。苏东坡、白居易等名人与杭州的不解之缘，赋予了这座城市深厚的人文底蕴。西湖边的岳庙、苏堤、白堤等人文景观，都承载着动人的历史故事。</p>
      <p>杭州也是传统艺术的重要传承地，杭州丝绸、西湖龙井、杭扇、王星记扇等传统工艺享誉海内外。杭州评词、越剧等传统表演艺术至今仍有广泛影响。中国美术学院等高等学府的存在，使杭州成为当代艺术创新的重要基地。</p>
      `
    }
  ]
};

// 杭州的英文内容
const hangzhouContentEn: DestinationContent = {
  title: "Heavenly Hangzhou",
  subtitle: "Paradise on Earth, Scenic Lakes and Mountains",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Hangzhou, historically known as Lin'an and Qiantang, has a history spanning over 2,200 years and once served as the capital of the Southern Song Dynasty. Marco Polo praised it as "the most beautiful and magnificent city in the world." Centered around West Lake, where mountains and waters blend harmoniously and gardens display elegant designs, it has long been revered as "Paradise on Earth."</p>
      <p>Modern Hangzhou preserves the gentle poetic charm of traditional Jiangnan water towns while showcasing vibrant modernity through its digital economy and innovation. Stroll along West Lake to experience the poetic realm of "warm breeze making travelers drunk with beauty"; wander through ancient streets and alleys to feel the profound historical and cultural heritage; and explore the dynamic new urban districts to appreciate the innovative power of China's digital economy.</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best time to visit:</strong> Spring (March-May) and autumn (September-November) offer pleasant climate and are the golden seasons for visiting Hangzhou.</p>
      <p><strong>Climate characteristics:</strong> Subtropical monsoon climate with four distinct seasons. Summers are hot and humid, winters mild with little snow.</p>
      <p><strong>Transportation:</strong> Hangzhou has a comprehensive public transportation network, with metros and buses covering major attractions. Walking or cycling is ideal for touring around West Lake.</p>
      <p><strong>Recommended visit duration:</strong> An in-depth exploration of Hangzhou requires 4-5 days, with at least 2-3 days needed for major attractions.</p>
      <p><strong>Cost level:</strong> Overall moderate cost level, with both high-end and affordable options available. Costs within scenic areas are relatively higher.</p>
      `
    },
    {
      title: "Must-Visit Attractions",
      content: `
      <h3>West Lake Scenic Area</h3>
      <p>West Lake is the soul of Hangzhou and one of China's most famous scenic areas, featuring numerous attractions including the renowned "Ten Scenes of West Lake." The expansive lake is surrounded by mountains and dotted with islands, pavilions, and pagodas, making it a favored spot for poets and painters throughout history.</p>
      <p><strong>Travel tips:</strong> You can take a boat tour around the lake or walk along the shores to appreciate the scenery from different angles. Visit early morning or evening to avoid crowds and enjoy the best lighting. Don't miss key spots like Three Pools Mirroring the Moon, Broken Bridge, and Autumn Moon Over Calm Lake.</p>

      <h3>Lingyin Temple</h3>
      <p>Built during the Eastern Jin Dynasty, Lingyin Temple is one of Hangzhou's oldest temples and among China's top ten ancient Chan (Zen) Buddhist temples. It features the famous Grand Hall of the Great Sage and Hall of the Four Heavenly Kings. The surrounding Flying Peak hosts exquisite grottoes and stone carvings showcasing masterful Buddhist artistry.</p>
      <p><strong>Travel tips:</strong> Visiting Lingyin Temple requires purchasing both tickets for the Lingyin scenic area and then separately for the temple itself. Morning visits are recommended when there are fewer crowds and the air is fresh. Dress respectfully when visiting this religious site.</p>

      <h3>Xixi Wetland</h3>
      <p>Xixi Wetland is Hangzhou's unique urban wetland park, known as the "kidney of Hangzhou." It features a network of waterways and rich vegetation, preserving the original ecology of a Jiangnan water town. It's also an excellent spot for bird watching and seasonal flower viewing.</p>
      <p><strong>Travel tips:</strong> The scenic area is extensive, and you can choose electric boats or traditional rowing boats for exploration, or rent bicycles to ride along the boardwalks. Each season offers different highlights: flowers in spring, lotus in summer, reeds in autumn, and plum blossoms in winter.</p>

      <h3>Longjing Tea Plantations and Nine Creeks and Eighteen Gullies</h3>
      <p>West Lake Longjing is one of China's top ten famous teas, and the tea plantations around Longjing Village and Meijiawu area are the best places to understand Longjing tea culture. Nearby, Nine Creeks and Eighteen Gullies is a hiking route featuring winding streams and bamboo forests, offering beautiful natural scenery.</p>
      <p><strong>Travel tips:</strong> Spring is the tea-picking season when you can experience the tea harvesting and processing. There are several hiking routes through the tea plantations with varying difficulty levels. When purchasing Longjing tea, be aware of authenticity issues as genuine West Lake Longjing has limited production.</p>

      <h3>Songcheng</h3>
      <p>Songcheng is a large-scale theme park based on Southern Song Dynasty culture, recreating the ancient urban landscape of Hangzhou. It features various traditional craft demonstrations, folk performances, and interactive experiences. The "Romance of the Song Dynasty" show is a famous large-scale performance in China.</p>
      <p><strong>Travel tips:</strong> It's advisable to book tickets for the "Romance of the Song Dynasty" show in advance, especially during peak tourist seasons. The park covers a large area, so plan for a half-day or full-day visit. Various snack stalls and themed restaurants inside offer opportunities to taste Hangzhou cuisine.</p>
      `
    },
    {
      title: "Unique Experiences",
      content: `
      <h3>West Lake Boat Tour</h3>
      <p>Taking a boat tour is a classic way to appreciate West Lake's beauty, with options ranging from regular cruise boats to private chartered vessels. Boat routes mainly cover attractions such as Mid-Lake Pavilion and Three Pools Mirroring the Moon, offering a unique perspective of West Lake from the water.</p>
      <p><strong>Experience tips:</strong> Sunset cruises offer the most enchanting views of West Lake, while the night illumination show is also worth seeing. Besides large cruise boats, you can also choose small rowing boats for a more intimate and flexible experience. Different piers offer various boat tour options, so choose according to your sightseeing plans.</p>

      <h3>Tea Culture Experience</h3>
      <p>As the "Tea Capital of China," Hangzhou has a profound tea culture. Visiting tea houses in Meijiawu or Longjing Village to taste authentic Longjing tea, learning about tea picking and processing techniques, and experiencing traditional tea ceremonies are essential parts of understanding Hangzhou's culture.</p>
      <p><strong>Experience tips:</strong> Spring tea (pre-Qingming Longjing) has the best quality but is more expensive. Local tea houses generally provide tea brewing services and snacks. Be careful to distinguish authentic tea when purchasing, preferably buying from reputable shops or directly from tea farmers.</p>

      <h3>Grand Canal Cruise</h3>
      <p>The Beijing-Hangzhou Grand Canal is the world's longest ancient canal, and the Hangzhou section preserves many historical relics and traditional landscapes. Walking along or taking a boat tour on the canal allows you to see historical structures like Gongchen Bridge and Fuyi Warehouse, experiencing the charm of this thousand-year-old water city.</p>
      <p><strong>Experience tips:</strong> Night cruises offer views of illuminated banks and bridges. Food streets along the canal feature many traditional Hangzhou snacks. Combine your visit with the Grand Canal Museum for a deeper understanding of its history and culture.</p>

      <h3>Cycling Around West Lake</h3>
      <p>Cycling is an excellent way to tour West Lake, with the lake circuit spanning about 15 kilometers and offering views of scenic landscapes and various attractions along the way. Cycling allows you to explore at your own pace, stopping whenever you want to take photos or rest.</p>
      <p><strong>Experience tips:</strong> Hangzhou has a comprehensive bike-sharing system, and professional bicycle rental shops also provide quality bikes. The lake circuit takes about 2-3 hours to complete, and it's best to start in the morning or evening to avoid heat and peak crowds.</p>

      <h3>Hangzhou Cuisine Experience</h3>
      <p>Hangzhou cuisine is an important part of Zhejiang cuisine, one of China's eight major culinary traditions, known for its fresh, delicate flavors. Tasting signature dishes like Dongpo Pork, West Lake Fish in Vinegar Sauce, and Longjing Shrimp, and visiting time-honored restaurants such as Louwailou and Zhiweiguan, are essential experiences of Hangzhou's food culture.</p>
      <p><strong>Experience tips:</strong> Hangzhou cuisine often uses local ingredients like West Lake water shield and Longjing tea. Traditional Hangzhou dishes tend to be slightly sweet. Consider joining food tours or cooking classes for a deeper understanding of Hangzhou's culinary culture.</p>
      `
    },
    {
      title: "Food Guide",
      content: `
      <h3>Classic Hangzhou Cuisine</h3>
      <p>Hangzhou cuisine, developed from local cooking traditions and incorporating influences from Jiangsu and Zhejiang regions, is characterized by fresh, light flavors that emphasize the quality of ingredients and precise cooking techniques. Many classic dishes are closely related to West Lake legends or local products, reflecting Hangzhou's rich cultural heritage.</p>
      <p><strong>Must-try dishes:</strong></p>
      <ul>
        <li><strong>West Lake Fish in Vinegar Sauce</strong> - Uses fresh grass carp from West Lake, prepared with a sweet and sour sauce, resulting in tender fish with a balanced flavor profile</li>
        <li><strong>Dongpo Pork</strong> - Named after poet Su Dongpo, this dish features pork belly that's fatty but not greasy, melt-in-your-mouth tender, considered the pinnacle of braised pork dishes</li>
        <li><strong>Longjing Shrimp</strong> - Tender shrimp stir-fried with Longjing tea leaves, creating a refreshing dish where tea fragrance perfectly complements the fresh shrimp</li>
        <li><strong>Song Sao Fish Soup</strong> - A traditional dish with a long history, featuring tender fish in rich, flavorful broth</li>
        <li><strong>Beggar's Chicken</strong> - Chicken wrapped in lotus leaves and clay, then baked, preserving the natural flavors and juices of the meat</li>
      </ul>

      <h3>Specialty Snacks</h3>
      <p>Hangzhou snacks blend refined techniques with popular appeal, incorporating both imperial court desserts and street food elements. From morning tea dim sum to night market specialties, the diverse offerings are endlessly appealing.</p>
      <p><strong>Recommended snacks:</strong></p>
      <ul>
        <li><strong>Pian'er Chuan</strong> - A Hangzhou breakfast specialty featuring thin dough wrappers with meat filling, offering a crispy texture</li>
        <li><strong>Cong Bao Hui'er</strong> - Crispy outer layer with savory filling, exuding fragrant scallion aroma</li>
        <li><strong>Dingsheng Cake</strong> - A traditional pastry with soft, sweet texture and auspicious symbolism</li>
        <li><strong>Osmanthus Lotus Root</strong> - Fresh lotus root segments prepared with sugar and osmanthus honey, sweet but not cloying</li>
        <li><strong>Hangzhou Xiaolongbao</strong> - Soup dumplings with thin skin, generous filling, and rich broth, offering a distinctive local flavor</li>
      </ul>

      <h3>Recommended Restaurants</h3>
      <p><strong>Time-honored establishments and high-end restaurants:</strong></p>
      <ul>
        <li><strong>Louwailou</strong> - Established in 1848, this famous Hangzhou restaurant's signature dishes include West Lake Fish in Vinegar Sauce and West Lake Water Shield Soup</li>
        <li><strong>Zhiweiguan</strong> - A century-old establishment offering a complete range of Hangzhou dim sum and traditional dishes</li>
        <li><strong>Waipojia</strong> - A modern Hangzhou cuisine chain with reasonable prices, suitable for family gatherings</li>
        <li><strong>Jiangnan Hui</strong> - High-end Hangzhou cuisine in an elegant setting, offering many innovative dishes</li>
        <li><strong>Hu Qingyutang Medicinal Cuisine Restaurant</strong> - Specializing in dishes incorporating traditional Chinese medicine concepts</li>
      </ul>

      <h3>Dining Districts</h3>
      <p>Hangzhou has several culinary centers, each with its own characteristics, ranging from high-end restaurants to affordable street food, catering to different preferences.</p>
      <ul>
        <li><strong>Hefang Street</strong> - Concentration of traditional snacks and handicrafts</li>
        <li><strong>Hubin Intime Department Store area</strong> - Fashionable restaurants and international cuisine</li>
        <li><strong>Xixi Paradise Commercial Street</strong> - Various creative restaurants and cafes</li>
        <li><strong>Wulin Night Market</strong> - Authentic late-night snacks and affordable food</li>
        <li><strong>West Lake Scenic Area</strong> - Lakeside restaurants with beautiful views but higher prices</li>
      </ul>
      `
    },
    {
      title: "Cultural and Historical Insights",
      content: `
      <h3>Wuyue Culture and Southern Song Dynasty Glory</h3>
      <p>Hangzhou has a long history, with human activity dating back 7,000 years. Since its establishment as a county during the Qin Dynasty, it has experienced two particularly significant periods: the Wuyue Kingdom and the Southern Song Dynasty, which have contributed to its rich cultural heritage. During the Wuyue period (907-978 CE), Hangzhou began large-scale development of West Lake. After the Southern Song Dynasty established its capital at Lin'an (present-day Hangzhou) in 1132-1276 CE, the city became one of the world's most prosperous metropolises, reaching peaks in commerce, handicrafts, and cultural arts.</p>
      <p>The urban layout, food culture, and artistic styles of the Southern Song period continue to profoundly influence today's Hangzhou. The bustling urban life, commercial prosperity, and cultural vitality of the Song Dynasty, captured in artworks like "Along the River During the Qingming Festival," remain important windows into understanding ancient Chinese urban civilization.</p>

      <h3>West Lake Cultural Landscape</h3>
      <p>West Lake and its surrounding cultural landscape have been listed as a World Heritage Site, recognized as an outstanding example of human and nature in harmony. For thousands of years, generations of scholars, artists, and craftsmen have continually shaped and enriched West Lake's cultural connotations through poetry, painting, and garden design. The "Ten Scenes of West Lake" and "New Ten Scenes of West Lake" embody traditional Chinese aesthetics and philosophical concepts.</p>
      <p>West Lake is not merely a natural landscape but also a source of inspiration and embodiment of Chinese garden art, poetry, and painting. From Bai Juyi's "Love most the east of the lake, never tired of walking" to Su Shi's "West Lake compared to Lady Xi," West Lake has become an indispensable cultural icon in the Chinese imagination.</p>

      <h3>Grand Canal Civilization and Commercial Tradition</h3>
      <p>The southern terminus of the Beijing-Hangzhou Grand Canal is located in Hangzhou, and this north-south water artery has brought commercial prosperity and cultural exchange to the city. A unique water town culture formed along the canal, promoting the export of Hangzhou specialties such as silk, porcelain, and tea. Hangzhou has historically been an important commercial center, with reputations as the "Capital of Silk" and "Land of Fish and Rice" reflecting its economic strength.</p>
      <p>Today's Hangzhou has inherited this commercial tradition, becoming a center for Chinese e-commerce and digital economy. The rise of internet giants like Alibaba represents the modern transformation of Hangzhou's commercial civilization and embodies the city's inclusive, pioneering spirit.</p>

      <h3>Literary Spirit and Artistic Heritage</h3>
      <p>Hangzhou has been a city admired by scholars and artists, with countless poets, painters, and writers living or traveling here throughout history, leaving behind rich artistic works. The special connections between famous figures like Su Dongpo and Bai Juyi with Hangzhou have endowed the city with profound cultural heritage. Cultural landmarks around West Lake, such as Yue Fei Temple, Su Causeway, and Bai Causeway, all carry moving historical stories.</p>
      <p>Hangzhou is also an important place for traditional arts preservation, with Hangzhou silk, West Lake Longjing tea, Hangzhou fans, and Wang Xingji fans renowned both domestically and internationally. Traditional performing arts like Hangzhou Pinghua storytelling and Yue Opera continue to have wide influence. The presence of institutions like the China Academy of Art makes Hangzhou an important base for contemporary artistic innovation.</p>
      `
    }
  ]
};

// 杭州的日语内容
const hangzhouContentJa: DestinationContent = {
  title: "天国の杭州",
  subtitle: "地上の楽園、美しい湖と山々",
  sections: [
    {
      title: "最初の印象",
      content: `
      <p>杭州は歴史的に臨安や銭塘として知られ、2,200年以上の歴史を持ち、かつて南宋王朝の首都でした。マルコ・ポーロは杭州を「世界で最もアリュージュで壮大な都市」と称賛しました。西湖を中心に、山と水が調和し、優雅なデザインの庭園が広がるこの地は、長らく「地上の楽園」として崇められてきました。</p>
      <p>現代の杭州は、伝統的な江南水郷の穏やかな詩情を保ちながら、デジタル経済とイノベーションを通じて活気ある現代性を示しています。西湖沿いを散策して「暖かい風が旅人を美しさに酔わせる」詩的な領域を体験したり、古い街並みや路地を歩いて深い歴史的・文化的遺産を感じたり、活気ある新しい都市部を探索して中国のデジタル経済の革新的な力を感じたりすることができます。</p>
      `
    },
    {
      title: "基本情報概要",
      content: `
      <p><strong>最適な訪問時期：</strong> 春（3月〜5月）と秋（9月〜11月）は気候が快適で、杭州訪問のゴールデンシーズンです。</p>
      <p><strong>気候特性：</strong> 亜熱帯モンスーン気候で四季がはっきりしています。夏は暑く湿度が高く、冬は穏やかで雪は少ないです。</p>
      <p><strong>交通：</strong> 杭州は総合的な公共交通網を持ち、地下鉄やバスが主要な観光スポットをカバーしています。西湖周辺の観光には徒歩や自転車が理想的です。</p>
      <p><strong>推奨訪問期間：</strong> 杭州を深く探索するには4〜5日が必要で、主要な観光スポットだけでも最低2〜3日は必要です。</p>
      <p><strong>コストレベル：</strong> 全体的に中程度のコストレベルで、高級オプションと手頃な価格のオプションの両方があります。景勝地内のコストは比較的高めです。</p>
      `
    },
    {
      title: "必見の観光スポット",
      content: `
      <h3>西湖景勝区</h3>
      <p>西湖は杭州の魂であり、中国で最も有名な景勝地の一つで、有名な「西湖十景」を含む数多くの見どころがあります。広大な湖は山々に囲まれ、島々、亭、塔が点在し、歴史を通じて詩人や画家に愛されてきました。</p>
      <p><strong>旅行のヒント：</strong> 湖の周りをボートで巡ったり、湖岸に沿って歩いたりして、異なる角度から景色を楽しむことができます。混雑を避け、最も美しい光の中で楽しむために、早朝か夕方に訪れるのがお勧めです。三潭印月、断橋、平湖秋月などの主要スポットをお見逃しなく。</p>

      <h3>霊隠寺</h3>
      <p>東晋時代に建てられた霊隠寺は、杭州最古の寺院の一つであり、中国十大古禅寺の一つです。大雄宝殿や天王殿などの有名な建物があります。周囲の飛来峰には、仏教芸術の優れた技術を示す彫刻や石窟があります。</p>
      <p><strong>旅行のヒント：</strong> 霊隠寺を訪れるには、霊隠景勝区のチケットを購入し、さらに寺院自体のチケットを別途購入する必要があります。混雑が少なく空気が新鮮な朝の訪問がお勧めです。この宗教的な場所を訪れる際は、適切な服装で敬意を表しましょう。</p>

      <h3>西渓湿地</h3>
      <p>西渓湿地は杭州独自の都市湿地公園で、「杭州の腎臓」として知られています。水路のネットワークと豊かな植生を特徴とし、江南水郷の原風景を保存しています。また、バードウォッチングや季節の花を観賞するのに絶好の場所です。</p>
      <p><strong>旅行のヒント：</strong> 景勝区は広大で、電動ボートや伝統的な手漕ぎボートで探索したり、遊歩道に沿って自転車をレンタルして走ったりすることができます。各季節に異なる見どころがあります：春の花、夏の蓮、秋の葦、冬の梅の花。</p>

      <h3>龍井茶畑と九渓十八澗</h3>
      <p>西湖龍井は中国十大名茶の一つであり、龍井村や梅家塢周辺の茶畑は龍井茶文化を理解するのに最適な場所です。近くの九渓十八澗は、曲がりくねった小川と竹林を特徴とするハイキングルートで、美しい自然の景観を提供しています。</p>
      <p><strong>旅行のヒント：</strong> 春は茶摘みの季節で、茶の収穫と加工を体験できます。茶畑には様々な難易度のハイキングルートがあります。龍井茶を購入する際は、本物の西湖龍井の生産量は限られているため、真贋に注意してください。</p>

      <h3>宋城</h3>
      <p>宋城は南宋王朝の文化に基づく大規模なテーマパークで、杭州の古代都市景観を再現しています。様々な伝統工芸の実演、民俗パフォーマンス、インタラクティブな体験を提供しています。「宋城千古情」ショーは中国で有名な大規模パフォーマンスです。</p>
      <p><strong>旅行のヒント：</strong> 特に観光ピークシーズン中は、「宋城千古情」ショーのチケットを事前に予約することをお勧めします。パークは広大な面積をカバーしているので、半日または一日の訪問を計画してください。園内の様々な屋台やテーマレストランで杭州料理を味わう機会があります。</p>
      `
    }
  ]
};

// 杭州的韩语内容
const hangzhouContentKo: DestinationContent = {
  title: "천국의 항저우",
  subtitle: "지상의 낙원, 아름다운 호수와 산",
  sections: [
    {
      title: "첫인상",
      content: `
      <p>역사적으로 린안과 첸탕으로 알려진 항저우는 2,200년 이상의 역사를 가지고 있으며, 한때 남송 왕조의 수도였습니다. 마르코 폴로는 이곳을 "세계에서 가장 아름답고 웅장한 도시"라고 칭찬했습니다. 서호를 중심으로 산과 물이 조화롭게 어우러지고 정원들이 우아한 디자인을 보여주는 이곳은 오랫동안 "지상의 낙원"으로 존경받아 왔습니다.</p>
      <p>현대 항저우는 전통적인 강남 수향의 부드러운 시적 매력을 보존하면서도 디지털 경제와 혁신을 통해 활기찬 현대성을 보여줍니다. 서호를 따라 산책하며 "따뜻한 바람이 여행자를 아름다움에 취하게 한다"는 시적인 영역을 경험하고, 고대 거리와 골목을 거닐며 깊은 역사적, 문화적 유산을 느끼고, 역동적인 새로운 도시 지역을 탐험하여 중국 디지털 경제의 혁신적인 힘을 느낄 수 있습니다.</p>
      `
    },
    {
      title: "기본 정보 개요",
      content: `
      <p><strong>최적의 방문 시기:</strong> 봄(3월-5월)과 가을(9월-11월)은 쾌적한 기후를 제공하며 항저우 방문의 황금 시즌입니다.</p>
      <p><strong>기후 특성:</strong> 아열대 몬순 기후로 사계절이 뚜렷합니다. 여름은 덥고 습하며, 겨울은 온화하고 눈이 거의 내리지 않습니다.</p>
      <p><strong>교통:</strong> 항저우는 지하철과 버스가 주요 관광지를 포괄하는 종합적인 대중교통망을 갖추고 있습니다. 서호 주변을 관광하기에는 도보나 자전거가 이상적입니다.</p>
      <p><strong>추천 방문 기간:</strong> 항저우를 깊이 탐험하려면 4-5일이 필요하며, 주요 관광지만 보더라도 최소 2-3일이 필요합니다.</p>
      <p><strong>비용 수준:</strong> 전반적으로 중간 수준의 비용이며, 고급 옵션과 저렴한 옵션 모두 이용 가능합니다. 경승지 내 비용은 상대적으로 높은 편입니다.</p>
      `
    },
    {
      title: "꼭 방문해야 할 명소",
      content: `
      <h3>서호 경승지</h3>
      <p>서호는 항저우의 영혼이자 중국에서 가장 유명한 경승지 중 하나로, 유명한 "서호십경"을 포함한 수많은 명소를 자랑합니다. 넓은 호수는 산으로 둘러싸여 있고 섬, 정자, 탑이 점재하여 역사를 통해 시인과 화가들에게 사랑받는 곳이 되었습니다.</p>
      <p><strong>여행 팁:</strong> 호수 주변을 보트로 둘러보거나 호숫가를 따라 걸으며 다양한 각도에서 경치를 감상할 수 있습니다. 혼잡을 피하고 최상의 조명에서 즐기려면 이른 아침이나 저녁에 방문하세요. 삼담인월, 단교, 평호추월과 같은 주요 명소를 놓치지 마세요.</p>

      <h3>영은사</h3>
      <p>동진 시대에 지어진 영은사는 항저우의 가장 오래된 사원 중 하나이자 중국 십대 고찬사 중 하나입니다. 대웅보전과 천왕전과 같은 유명한 건물이 있습니다. 주변의 비래봉에는 불교 예술의 뛰어난 기술을 보여주는 정교한 석굴과 석각이 있습니다.</p>
      <p><strong>여행 팁:</strong> 영은사를 방문하려면 영은 경승지 입장권과 사원 자체의 입장권을 별도로 구매해야 합니다. 인파가 적고 공기가 신선한 아침 방문이 권장됩니다. 이 종교적 장소를 방문할 때는 정중한 복장을 갖추세요.</p>

      <h3>서계 습지</h3>
      <p>서계 습지는 항저우의 독특한 도시 습지 공원으로 "항저우의 신장"으로 알려져 있습니다. 수로망과 풍부한 식생을 특징으로 하며, 강남 수향의 원래 생태계를 보존하고 있습니다. 또한 버드워칭과 계절 꽃 감상을 위한 훌륭한 장소이기도 합니다.</p>
      <p><strong>여행 팁:</strong> 경승지는 광대하며, 전동 보트나 전통적인 노 젓는 보트를 선택하여 탐험하거나 보드워크를 따라 자전거를 대여하여 타볼 수 있습니다. 각 계절마다 다른 하이라이트가 있습니다: 봄의 꽃, 여름의 연꽃, 가을의 갈대, 겨울의 매화.</p>

      <h3>용정 차 재배지와 구계십팔간</h3>
      <p>서호 용정은 중국 십대 명차 중 하나이며, 용정촌과 매가우 지역 주변의 차 재배지는 용정 차 문화를 이해하기에 가장 좋은 곳입니다. 근처의 구계십팔간은 구불구불한 시내와 대나무 숲이 특징인 하이킹 루트로, 아름다운 자연 경관을 제공합니다.</p>
      <p><strong>여행 팁:</strong> 봄은 차 따기 시즌으로 차 수확과 가공 과정을 경험할 수 있습니다. 차 재배지에는 다양한 난이도의 하이킹 루트가 있습니다. 용정차를 구매할 때는 진품 서호 용정의 생산량이 제한적이므로 진위 여부에 주의하세요.</p>

      <h3>송성</h3>
      <p>송성은 남송 왕조 문화를 기반으로 한 대규모 테마파크로, 항저우의 고대 도시 경관을 재현하고 있습니다. 다양한 전통 공예 시연, 민속 공연, 인터랙티브 경험을 제공합니다. "송성천고정" 쇼는 중국에서 유명한 대규모 공연입니다.</p>
      <p><strong>여행 팁:</strong> 특히 성수기에는 "송성천고정" 쇼의 티켓을 미리 예약하는 것이 좋습니다. 공원은 넓은 면적을 차지하므로 반나절이나 하루 종일 방문을 계획하세요. 공원 내 다양한 간식 가판대와 테마 레스토랑에서 항저우 요리를 맛볼 기회가 있습니다.</p>
      `
    }
  ]
};

// 基本多语言标题和副标题
const otherLanguageContents: Partial<Record<Language, DestinationContent>> = {
  ja: {
    title: "天国の杭州",
    subtitle: "地上の楽園、美しい湖と山々",
    sections: []
  },
  ko: {
    title: "천국의 항저우",
    subtitle: "지상의 낙원, 아름다운 호수와 산",
    sections: []
  },
  fr: {
    title: "Hangzhou Paradisiaque",
    subtitle: "Paradis sur Terre, Paysages de Lacs et Montagnes",
    sections: []
  },
  de: {
    title: "Himmlisches Hangzhou",
    subtitle: "Paradies auf Erden, Landschaft aus Seen und Bergen",
    sections: []
  },
  es: {
    title: "Hangzhou Celestial",
    subtitle: "Paraíso en la Tierra, Lagos y Montañas Escénicos",
    sections: []
  },
  ru: {
    title: "Небесный Ханчжоу",
    subtitle: "Рай на земле, живописные озера и горы",
    sections: []
  }
};

// 导出完整的多语言内容对象
export const hangzhouContent: Record<Language, DestinationContent> = {
  zh: hangzhouContentZh,
  en: hangzhouContentEn,
  ja: hangzhouContentJa,
  ko: hangzhouContentKo,
  ...otherLanguageContents
} as Record<Language, DestinationContent>; 