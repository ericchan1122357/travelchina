import { Language } from '@/contexts/LanguageContext';

// 定义内容的结构类型
export interface DestinationSection {
  title: string;
  content: React.ReactNode;
}

export interface DestinationContent {
  title: string;
  subtitle: string;
  sections: DestinationSection[];
}

// 北京的多语言内容
const beijingContent: Record<Language, DestinationContent> = {
  zh: {
    title: '北京：千年帝都的古今交响',
    subtitle: '探索中国首都的皇家风韵与现代魅力',
    sections: [
      {
        title: '开篇印象',
        content: `
          <p>
            雄伟的紫禁城金瓦闪耀，蜿蜒的长城盘踞群山，胡同里传来三轮车的铃声，CBD的玻璃幕墙映照晚霞...这里是北京，一座融合了古老与现代、传统与创新的城市。作为拥有三千年建城史、八百多年建都史的古都，北京承载着中华文明的精髓，也展现着现代中国的勃勃生机。
          </p>
          
          <h3>最具代表性特色：</h3>
          <ul>
            <li>世界最大的皇家宫殿建筑群——紫禁城</li>
            <li>人类历史上最伟大的建筑工程——万里长城</li>
            <li>独具特色的四合院胡同文化</li>
            <li>现代化国际大都市的繁华与活力</li>
          </ul>
        `
      },
      {
        title: '基本信息速览',
        content: `
          <h3>最佳游览季节</h3>
          <ul>
            <li>春季（3-5月）：气温宜人，花开成海</li>
            <li>秋季（9-10月）：天高气爽，红叶似火</li>
          </ul>
          
          <h3>气候特点</h3>
          <ul>
            <li>春季：温暖舒适，偶有沙尘</li>
            <li>夏季：炎热多雨</li>
            <li>秋季：凉爽干燥</li>
            <li>冬季：寒冷干燥</li>
          </ul>
          
          <h3>交通出行</h3>
          <ul>
            <li>国际航班：北京大兴国际机场和首都国际机场</li>
            <li>市内交通：发达的地铁网络（23条线路）、公交车、出租车</li>
            <li>景点间交通：地铁最为便捷，主要景点多有地铁站</li>
            <li>推荐：购买交通卡（一卡通）或使用移动支付</li>
          </ul>
          
          <h3>建议游览天数</h3>
          <p>至少3-5天，深度体验建议7天</p>
        `
      },
      {
        title: '必游景点',
        content: `
          <h3>皇家宫殿与园林</h3>
          
          <h4>1. 故宫博物院（紫禁城）</h4>
          <p>
            世界上最大的宫殿建筑群，明清24位皇帝的居所。占地72万平方米，建筑群金碧辉煌，气势恢宏。太和殿是中国最大的木结构建筑，象征着皇权的至高点。
          </p>
          <p>
            <strong>游览贴士：</strong>建议从午门进入，神武门出来，按照南北中轴线参观。提前在网上预约门票，避开周末及节假日。每周一闭馆（法定节假日除外）。特别展馆需另行预约。
          </p>
          
          <h4>2. 颐和园</h4>
          <p>
            世界上规模最大、保存最完整的皇家园林，慈禧太后的避暑胜地。昆明湖碧波荡漾，占地约占颐和园的四分之三。长廊是世界上最长的彩绘长廊，每一格都是一幅画。
          </p>
          <p>
            <strong>游览贴士：</strong>游览路线可选择"后山前湖"，先游万寿山，再览昆明湖。乘船游湖别有风味。夏季可观荷花，冬季昆明湖结冰可体验冰上活动。
          </p>
          
          <h4>3. 天坛公园</h4>
          <p>
            明清两代帝王祭祀皇天、祈求五谷丰登的场所。圜丘坛、祈年殿等建筑布局严谨，体现了中国古代"天圆地方"的宇宙观。祈年殿是世界上最大的古代圆形祭坛建筑。
          </p>
          <p>
            <strong>游览贴士：</strong>清晨可见当地居民晨练，体验地道北京生活。每天14:30有祈年殿古代祭天仪式表演。天坛公园很大，建议购买通票游览所有景点。
          </p>
          
          <h3>历史文化遗迹</h3>
          
          <h4>1. 八达岭长城</h4>
          <p>
            万里长城中保存最完好、最具代表性的一段，也是最早对外开放的长城景区。居庸关以北约10公里，建于1505年前后，是明代长城重要的军事关隘。
          </p>
          <p>
            <strong>游览贴士：</strong>建议乘坐S2线列车或旅游大巴前往。北段爬山较为平缓，南段较为陡峭。避开节假日，建议早晨抵达以避开人群。
          </p>
          
          <h4>2. 慕田峪长城</h4>
          <p>
            位于怀柔区，是明长城中最为精华的一段。此段长城建筑风格多样，既有城台又有敌楼，还有壮观的"鹰飞倒仰"景观，是摄影爱好者的天堂。
          </p>
          <p>
            <strong>游览贴士：</strong>有缆车可上下长城，体力不足的游客可选择乘坐。春秋两季游览最佳，风景如画。
          </p>
          
          <h4>3. 798艺术区</h4>
          <p>
            前身是建于20世纪50年代的电子工业厂区，现已转型为集艺术展览、画廊、设计工作室、文创商店、咖啡馆于一体的文化创意园区。保留了原有的工业风格建筑。
          </p>
          <p>
            <strong>游览贴士：</strong>周二至周日是画廊开放时间，周一部分画廊休息。建议预留半天至一天时间慢慢逛。每年5月和10月有艺术节活动。
          </p>
          
          <h3>特色街区与胡同</h3>
          
          <h4>1. 南锣鼓巷</h4>
          <p>
            北京最古老的街区之一，形成于元朝，距今已有740多年历史。现在是文艺青年聚集地，有各种特色小店、咖啡馆、酒吧和餐厅。
          </p>
          <p>
            <strong>游览贴士：</strong>建议工作日前往，周末人流较大。可深入胡同，感受老北京生活。附近的烟袋斜街也值得一游。
          </p>
          
          <h4>2. 什刹海区域</h4>
          <p>
            包括前海、后海和西海三片水域，周边环绕着恭王府、德胜门箭楼、白塔寺等历史遗迹，是老北京生活和传统文化保存最完好的区域之一。
          </p>
          <p>
            <strong>游览贴士：</strong>可选择人力三轮车游览，或租赁自行车环湖一周。夏季划船，冬季冰场各有特色。晚上的后海酒吧区别有风情。
          </p>
        `
      },
      {
        title: '独特体验',
        content: `
          <h3>文化体验活动</h3>
          
          <h4>1. 京剧体验</h4>
          <p>
            在梅兰芳大剧院、长安大戏院或湖广会馆观看正宗京剧表演，感受这一"国粹"的独特魅力。有些剧院提供化妆体验，让游客亲身体验京剧脸谱的制作过程。
          </p>
          
          <h4>2. 四合院住宿</h4>
          <p>
            选择位于老城区的传统四合院客栈住宿，体验老北京的居住方式。许多四合院客栈提供茶艺、剪纸等文化体验活动。
          </p>
          
          <h4>3. 恭王府花园漫步</h4>
          <p>
            清代权臣和珅的府邸，后为恭亲王奕訢所有。是北京保存最完整的王府花园，体现了清代贵族的生活方式和园林艺术。
          </p>
          
          <h3>季节性特色体验</h3>
          
          <h4>1. 春季赏花</h4>
          <p>
            3月底至4月初在玉渊潭公园或颐和园欣赏樱花盛开；4月中旬在北京植物园观赏牡丹；5月在香山公园感受"花开如海、香飘万里"的绝美景观。
          </p>
          
          <h4>2. 夏季避暑</h4>
          <p>
            在颐和园昆明湖乘船纳凉，或前往香山、百望山登高远眺，感受山间凉爽。夏季傍晚可在什刹海泛舟，享受微风拂面的惬意。
          </p>
          
          <h4>3. 秋季观红叶</h4>
          <p>
            10月中下旬至11月初，香山、红螺寺、蟒山国家森林公园是观赏红叶的绝佳去处。层林尽染的景象令人陶醉。
          </p>
          
          <h4>4. 冬季冰雪乐</h4>
          <p>
            什刹海冰场体验传统冰车，或前往龙庆峡观赏冰灯，感受北方冬日特有的冰雪魅力。每年1月至2月的庙会也是冬季北京的特色文化活动。
          </p>
          
          <h3>现代都市体验</h3>
          
          <h4>1. 国家大剧院艺术之旅</h4>
          <p>
            这座被誉为"巨大水滴"的现代建筑是世界级的表演艺术中心，可参观内部构造，或观看国际一流的演出。
          </p>
          
          <h4>2. 鸟巢与水立方夜景</h4>
          <p>
            2008年奥运会的主场馆，夜晚灯光璀璨，是拍摄夜景的绝佳地点。可参观场馆内部，了解奥运历史。
          </p>
          
          <h4>3. 三里屯与朝阳大悦城</h4>
          <p>
            北京最时尚的商业区，聚集了国际品牌店铺、特色餐厅和娱乐场所，是感受北京现代都市脉搏的好去处。
          </p>
        `
      },
      {
        title: '美食指南',
        content: `
          <h3>北京特色美食</h3>
          
          <h4>1. 北京烤鸭</h4>
          <p>
            北京最负盛名的传统美食，外皮酥脆，肉质鲜嫩，配以甜面酱、葱丝和黄瓜丝，卷在薄饼中食用。值得一试的老字号包括全聚德、大董、便宜坊等。
          </p>
          <p>
            <strong>推荐店铺：</strong>全聚德（前门店）、大董烤鸭（国贸店）、四季民福烤鸭店（前门店）
          </p>
          
          <h4>2. 涮羊肉</h4>
          <p>
            起源于元朝的北京传统火锅，采用外蒙古肥羊肉，切成薄片，在沸腾的清汤中快速涮熟，蘸以麻酱、韭菜花等调料食用，鲜嫩爽滑。
          </p>
          <p>
            <strong>推荐店铺：</strong>东来顺（王府井店）、宏源兴（西单店）、南来顺（崇文门店）
          </p>
          
          <h4>3. 炸酱面</h4>
          <p>
            北京传统面食，用肉末、黄酱等熬制的酱料拌面条，配以黄瓜丝、豆芽等新鲜蔬菜，口感丰富，风味独特。
          </p>
          <p>
            <strong>推荐店铺：</strong>老北京炸酱面大王（簋街店）、护国寺小吃（鼓楼店）、面酱先生
          </p>
          
          <h4>4. 豆汁</h4>
          <p>
            老北京特色饮品，用绿豆制作，略带酸味，是"老北京"地道风味。初次尝试可能需要适应其独特风味，常与焦圈、灌肠等小吃一同食用。
          </p>
          <p>
            <strong>推荐店铺：</strong>护国寺小吃（鼓楼店）、天兴居（琉璃厂店）、九门小吃（西城店）
          </p>
          
          <h3>特色小吃街区</h3>
          
          <h4>1. 簋街（东直门内大街）</h4>
          <p>
            北京著名的美食街，以辣味和夜宵闻名，各种川菜、湘菜、东北菜餐厅林立，也有各种特色小吃。夜晚熙熙攘攘，是体验北京夜生活的好去处。
          </p>
          
          <h4>2. 王府井小吃街</h4>
          <p>
            位于王府井商业区内，汇集了全国各地的特色小吃，如冰糖葫芦、羊肉串、糖油果子、炒肝等。游客云集，氛围热闹。
          </p>
          
          <h4>3. 南锣鼓巷美食</h4>
          <p>
            除了文艺小店，南锣鼓巷也聚集了许多特色餐厅和小吃店，从传统点心到创意菜式应有尽有，边逛边吃别有风味。
          </p>
          
          <h3>时令特色美食</h3>
          
          <h4>1. 春季：艾窝窝</h4>
          <p>
            清明节前后的传统点心，用艾叶和糯米粉制成，外表青绿，内馅甜蜜，有清热解毒之功效。
          </p>
          
          <h4>2. 夏季：老北京酸梅汤</h4>
          <p>
            用乌梅、山楂等熬制的传统饮品，酸甜可口，具有消暑解渴的功效，是北京夏季的必备饮品。
          </p>
          
          <h4>3. 秋季：焦圈</h4>
          <p>
            外焦里嫩的传统油炸面圈，香脆可口，与豆汁同食是老北京传统早餐。秋高气爽时节品尝最为应景。
          </p>
          
          <h4>4. 冬季：驴打滚</h4>
          <p>
            糯米粉包裹黄豆面和红糖的传统小吃，滚上黄豆面后形似驴在地上打滚，故得此名。冬季食用温暖身心。
          </p>
          
          <h3>用餐礼仪提示</h3>
          <p>
            在北京，尤其是正规餐厅用餐时，通常采用圆桌就座，菜品多为大碟共享。使用公筷夹菜是对他人的尊重。酒桌上"干杯"文化盛行，但可以根据个人情况适量饮酒。小吃店和街边摊位则相对随意，可以尽情享用美食。
          </p>
        `
      },
      {
        title: '文化历史洞察',
        content: `
          <h3>帝都沧桑——北京简史</h3>
          
          <p>
            北京历史悠久，早在50万年前就有"北京人"在此生活。作为城市，北京已有3000多年历史，最早可追溯到西周初年的燕国都城。辽代称"燕京"，金代改称"中都"，元朝正式定都于此，称"大都"。明朝初期，朱元璋曾一度废弃北京，其子朱棣即位后复都于此，改名"北京"，并开始修建紫禁城。清朝入关后继续以北京为都，直至1912年清朝灭亡。1949年10月1日，中华人民共和国在北京宣告成立，北京成为新中国的首都。
          </p>
          
          <h3>建筑艺术与哲学</h3>
          
          <p>
            北京的城市布局体现了中国传统的哲学思想和宇宙观。整个城市按照中轴线对称布局，反映了中国人追求平衡与和谐的美学理念。紫禁城位于中轴线上，体现了"天人合一"的思想，其建筑布局严谨，装饰华丽而不失庄重，是中国传统建筑艺术的巅峰之作。
          </p>
          <p>
            四合院是北京民居的典型代表，四面房屋围合成院落，既保证了家人之间的亲密联系，又维持了各自的私密空间，反映了中国人"和而不同"的处世哲学。胡同文化则体现了社区邻里间的互助与和睦。
          </p>
          
          <h3>京味文化</h3>
          
          <h4>1. 京剧艺术</h4>
          <p>
            京剧形成于19世纪，融合了多种地方戏曲而成，以生、旦、净、丑四种角色类型，通过唱念做打展现故事。脸谱、服饰、音乐都具有高度程式化和象征性，是中国传统文化的重要组成部分。
          </p>
          
          <h4>2. 北京方言</h4>
          <p>
            北京话是汉语普通话的基础方言，有独特的儿化音和四声变化。老北京人说话讲究"含而不露"，喜用委婉表达，体现了传统的语言智慧。
          </p>
          
          <h4>3. 民间艺术</h4>
          <p>
            北京风筝、泥人张彩塑、宫灯制作等传统手工艺在北京有着深厚的传承基础。每逢春节、元宵等传统节日，北京的庙会上会有丰富多彩的民俗表演，如舞狮、旱船、高跷等。
          </p>
          
          <h3>现代与传统的交融</h3>
          
          <p>
            今天的北京，既保留了丰富的历史文化遗产，又充满现代大都市的活力。城中心的金融区与古老的胡同相映成趣，高科技企业与传统手工作坊共存共荣。北京人既珍视传统文化，也热情拥抱新事物，这种包容并蓄的精神也吸引着来自世界各地的游客和居民。
          </p>
          <p>
            随着科技的发展，北京正在成为全球创新中心之一。中关村科技园区集中了众多高新技术企业和研究机构，被誉为"中国硅谷"。国家大剧院、CCTV总部大楼等现代建筑也为这座古城增添了时尚元素。
          </p>
          
          <h3>文化体验建议</h3>
          
          <p>
            要深入了解北京文化，建议游客不仅参观知名景点，也走进普通社区，感受当地人的日常生活。可以清晨去公园看老人打太极，或傍晚加入广场舞的队伍；可以在茶馆听评书，或在老字号品尝百年传统美食；可以参观前沿艺术展览，也可以学习传统手工艺。这种多层次的体验会让您对北京的理解更加立体和深入。
          </p>
        `
      }
    ]
  },
  en: {
    title: 'Beijing: Ancient Capital\'s Symphony of Past and Present',
    subtitle: 'Explore the Royal Charm and Modern Appeal of China\'s Capital',
    sections: [
      {
        title: 'First Impressions',
        content: `
          <p>
            The magnificent Forbidden City with gleaming golden roof tiles, the Great Wall winding through mountains, the sound of tricycle bells in hutongs, the glass curtain walls of the CBD reflecting the sunset... This is Beijing, a city that blends ancient and modern, tradition and innovation. With 3,000 years of urban history and 800 years as a capital, Beijing carries the essence of Chinese civilization while showcasing the vibrant energy of modern China.
          </p>
          
          <h3>Most Representative Features:</h3>
          <ul>
            <li>The world's largest royal palace complex - The Forbidden City</li>
            <li>One of humanity's greatest engineering projects - The Great Wall</li>
            <li>The distinctive courtyard houses and hutong culture</li>
            <li>The prosperity and vitality of a modern international metropolis</li>
          </ul>
        `
      },
      {
        title: 'Basic Information Overview',
        content: `
          <h3>Best Seasons to Visit</h3>
          <ul>
            <li>Spring (March-May): Pleasant temperatures, flowers in bloom</li>
            <li>Autumn (September-October): Clear skies, comfortable weather, red leaves</li>
          </ul>
          
          <h3>Climate Characteristics</h3>
          <ul>
            <li>Spring: Warm and comfortable, occasional sandstorms</li>
            <li>Summer: Hot and rainy</li>
            <li>Autumn: Cool and dry</li>
            <li>Winter: Cold and dry</li>
          </ul>
          
          <h3>Transportation</h3>
          <ul>
            <li>International Flights: Beijing Daxing International Airport and Capital International Airport</li>
            <li>City Transportation: Extensive subway network (23 lines), buses, taxis</li>
            <li>Between Attractions: Subway is most convenient, major attractions have subway stations nearby</li>
            <li>Recommendation: Purchase a transportation card or use mobile payment</li>
          </ul>
          
          <h3>Recommended Duration</h3>
          <p>At least 3-5 days, 7 days for an in-depth experience</p>
        `
      },
      {
        title: 'Must-Visit Attractions',
        content: `
          <h3>Royal Palaces and Gardens</h3>
          
          <h4>1. The Palace Museum (Forbidden City)</h4>
          <p>
            The world's largest palace complex, home to 24 emperors of the Ming and Qing dynasties. Covering 720,000 square meters, the buildings are magnificent and overwhelming. The Hall of Supreme Harmony is China's largest wooden structure, symbolizing the pinnacle of imperial power.
          </p>
          <p>
            <strong>Travel Tips:</strong> Recommended to enter from the Meridian Gate and exit from the Divine Prowess Gate, following the north-south central axis. Book tickets online in advance and avoid weekends and holidays. Closed on Mondays (except public holidays). Special exhibitions require separate reservations.
          </p>
          
          <h4>2. Summer Palace</h4>
          <p>
            The world's largest and most well-preserved royal garden, Empress Dowager Cixi's summer retreat. The shimmering Kunming Lake occupies about three-quarters of the Summer Palace's area. The Long Corridor is the world's longest painted corridor, with each section featuring a unique painting.
          </p>
          <p>
            <strong>Travel Tips:</strong> The recommended route is "Back Hill and Front Lake," starting with Longevity Hill and then exploring Kunming Lake. Boat rides offer a special perspective. Summer features lotus flowers while winter offers ice activities on the frozen lake.
          </p>
          
          <h4>3. Temple of Heaven Park</h4>
          <p>
            A sacred venue where emperors of the Ming and Qing dynasties performed ceremonies to pray for good harvests. The Circular Mound Altar and the Hall of Prayer for Good Harvests feature precise layouts that embody the ancient Chinese cosmological view of "round heaven and square earth." The Hall of Prayer for Good Harvests is the world's largest ancient circular sacrificial building.
          </p>
          <p>
            <strong>Travel Tips:</strong> Visit early morning to see locals practicing tai chi and other morning exercises for an authentic Beijing experience. A ritual performance is held at the Hall of Prayer for Good Harvests at 2:30 PM daily. The park is large, so purchasing a through ticket for all attractions is recommended.
          </p>
          
          <h3>Historical and Cultural Sites</h3>
          
          <h4>1. Badaling Great Wall</h4>
          <p>
            The most well-preserved and representative section of the Great Wall, and also the first section opened to tourists. Located about 10 kilometers north of Juyongguan Pass, it was built around 1505 and was an important military stronghold during the Ming Dynasty.
          </p>
          <p>
            <strong>Travel Tips:</strong> Take the S2 train or a tour bus to get there. The north section has a gentler climb, while the south section is steeper. Avoid holidays and arrive early in the morning to beat the crowds.
          </p>
          
          <h4>2. Mutianyu Great Wall</h4>
          <p>
            Located in Huairou District, this is one of the finest sections of the Ming Great Wall. This section features diverse architectural styles with both watchtowers and enemy towers, as well as the spectacular "Flying Eagle Facing Upward" landscape, making it a paradise for photography enthusiasts.
          </p>
          <p>
            <strong>Travel Tips:</strong> Cable cars are available for ascent and descent, a good option for those with limited physical stamina. Spring and fall offer the most picturesque views.
          </p>
          
          <h4>3. 798 Art District</h4>
          <p>
            Originally an electronics factory complex built in the 1950s, it has now transformed into a cultural and creative park integrating art exhibitions, galleries, design studios, creative shops, and cafes. The district maintains its original industrial-style architecture.
          </p>
          <p>
            <strong>Travel Tips:</strong> Galleries are open Tuesday through Sunday, with many closed on Mondays. Allow half a day to a full day for a leisurely exploration. Art festivals are held in May and October each year.
          </p>
          
          <h3>Characteristic Districts and Hutongs</h3>
          
          <h4>1. Nanluoguxiang</h4>
          <p>
            One of Beijing's oldest neighborhoods, formed during the Yuan Dynasty with over 740 years of history. Now a gathering place for young artists, with various specialty shops, cafes, bars, and restaurants.
          </p>
          <p>
            <strong>Travel Tips:</strong> Best to visit on weekdays as weekends get very crowded. Explore deeper into the hutongs to experience authentic old Beijing life. Nearby Yandai Xiejie (Tobacco Pouch Slant Street) is also worth a visit.
          </p>
          
          <h4>2. Shichahai Area</h4>
          <p>
            Encompasses three bodies of water: Front Lake, Back Lake, and West Lake, surrounded by historical sites like Prince Gong's Mansion, Desheng Gate Arrow Tower, and White Pagoda Temple. One of the best-preserved areas of old Beijing life and traditional culture.
          </p>
          <p>
            <strong>Travel Tips:</strong> Consider taking a rickshaw tour or renting bicycles to circle the lake. Boating in summer and ice skating in winter each offer unique experiences. The bar area around Back Lake has a special atmosphere at night.
          </p>
        `
      },
      {
        title: 'Unique Experiences',
        content: `
          <h3>Cultural Experiences</h3>
          
          <h4>1. Peking Opera Experience</h4>
          <p>
            Watch authentic Peking Opera performances at venues like Mei Lanfang Grand Theatre, Chang'an Grand Theatre, or Huguang Guild Hall to appreciate this "national essence" art form. Some theaters offer makeup experiences where visitors can learn about the process of creating Peking Opera facial masks.
          </p>
          
          <h4>2. Siheyuan (Courtyard House) Stay</h4>
          <p>
            Choose to stay in a traditional courtyard house hotel in the old city area to experience the traditional Beijing lifestyle. Many courtyard hotels offer cultural activities such as tea ceremonies and paper-cutting workshops.
          </p>
          
          <h4>3. Prince Gong's Mansion Garden Stroll</h4>
          <p>
            Originally the residence of Heshen, a powerful official of the Qing Dynasty, later owned by Prince Gong Yixin. It's the best-preserved princely mansion garden in Beijing, reflecting the lifestyle of Qing Dynasty nobles and the art of garden design.
          </p>
          
          <h3>Seasonal Special Experiences</h3>
          
          <h4>1. Spring Flower Viewing</h4>
          <p>
            Enjoy cherry blossoms at Yuyuantan Park or Summer Palace from late March to early April; admire peonies at Beijing Botanical Garden in mid-April; and experience the "sea of flowers and scent spreading for miles" at Fragrant Hills Park in May.
          </p>
          
          <h4>2. Summer Cooling Retreats</h4>
          <p>
            Take a boat ride on Kunming Lake at the Summer Palace to cool off, or hike up Fragrant Hills or Baiwang Mountain for panoramic views and mountain breezes. In summer evenings, boating at Shichahai offers a pleasant experience with gentle breezes.
          </p>
          
          <h4>3. Autumn Red Leaves</h4>
          <p>
            From mid to late October through early November, Fragrant Hills, Hongluo Temple, and Mang Mountain National Forest Park are excellent places to view the spectacular red leaves. The colorful forest views are breathtaking.
          </p>
          
          <h4>4. Winter Ice and Snow Fun</h4>
          <p>
            Experience traditional ice carts at Shichahai ice rink, or visit Longqing Gorge to see ice lanterns and feel the unique charm of winter in northern China. Temple fairs held from January to February are also special cultural activities in winter Beijing.
          </p>
          
          <h3>Modern Urban Experiences</h3>
          
          <h4>1. National Centre for the Performing Arts Tour</h4>
          <p>
            This modern building, known as the "Giant Egg," is a world-class performing arts center. Visitors can tour the interior architecture or attend world-class performances.
          </p>
          
          <h4>2. Bird's Nest and Water Cube Night View</h4>
          <p>
            The main venues of the 2008 Olympics, they are brilliantly lit at night, offering excellent photo opportunities. Visitors can tour the interior to learn about Olympic history.
          </p>
          
          <h4>3. Sanlitun and Chaoyang Joy City</h4>
          <p>
            Beijing's most fashionable commercial areas, home to international brand stores, specialty restaurants, and entertainment venues. These areas are perfect for experiencing the pulse of modern Beijing.
          </p>
        `
      },
      {
        title: 'Food Guide',
        content: `
          <h3>Beijing Specialty Cuisine</h3>
          
          <h4>1. Peking Duck</h4>
          <p>
            Beijing's most famous traditional dish features crispy skin and tender meat, served with sweet bean sauce, scallions, and cucumber slices, all wrapped in thin pancakes. Famous restaurants worth trying include Quanjude, Da Dong, and Bianyifang.
          </p>
          <p>
            <strong>Recommended Restaurants:</strong> Quanjude (Qianmen Branch), Da Dong Roast Duck (Guomao Branch), Siji Minfu Roast Duck (Qianmen Branch)
          </p>
          
          <h4>2. Hot Pot (Shabu-shabu)</h4>
          <p>
            A traditional Beijing hot pot originating from the Yuan Dynasty, using Mongolian fat lamb sliced thinly and quickly cooked in boiling clear broth. It's usually eaten with sesame paste and leek flower sauce, resulting in a tender and smooth texture.
          </p>
          <p>
            <strong>Recommended Restaurants:</strong> Donglaishun (Wangfujing Branch), Hongyuanxing (Xidan Branch), Nanlaixun (Chongwenmen Branch)
          </p>
          
          <h4>3. Zhajiang Noodles</h4>
          <p>
            A traditional Beijing noodle dish featuring noodles topped with a sauce made from minced meat and fermented soybean paste, served with cucumber strips, bean sprouts, and other fresh vegetables. The dish offers rich flavors and a unique taste.
          </p>
          <p>
            <strong>Recommended Restaurants:</strong> Old Beijing Zhajiang Noodle King (Ghost Street Branch), Huguosi Snacks (Gulou Branch), Master Mianjiang
          </p>
          
          <h4>4. Douzhi (Fermented Mung Bean Juice)</h4>
          <p>
            A distinctive Beijing beverage made from mung beans with a slightly sour taste, representing authentic "Old Beijing" flavor. First-time tasters may need to adjust to its unique flavor. Often enjoyed with Jiaoquan (fried ring-shaped pastry) and Guanchang (stuffed intestine).
          </p>
          <p>
            <strong>Recommended Places:</strong> Huguosi Snacks (Gulou Branch), Tianxing Restaurant (Liulichang Branch), Jiumen Snacks (Xicheng Branch)
          </p>
          
          <h3>Special Food Streets and Areas</h3>
          
          <h4>1. Ghost Street (Dongzhimen Inner Street)</h4>
          <p>
            A famous food street in Beijing known for spicy dishes and late-night dining. Lined with various Sichuan, Hunan, and Northeastern Chinese restaurants, as well as specialty snack shops. Bustling with activity at night, it's a great place to experience Beijing's nightlife.
          </p>
          
          <h4>2. Wangfujing Snack Street</h4>
          <p>
            Located within the Wangfujing commercial district, this street brings together specialty snacks from across the country, such as candied haws, lamb skewers, tanghulu (sugar-coated fruit), and chao gan (fried liver). It's always crowded with tourists and has a lively atmosphere.
          </p>
          
          <h4>3. Nanluoguxiang Food</h4>
          <p>
            In addition to boutique shops, Nanluoguxiang is home to many specialty restaurants and snack shops, offering everything from traditional pastries to creative cuisine. The experience of exploring and eating along the way has a special charm.
          </p>
          
          <h3>Seasonal Special Foods</h3>
          
          <h4>1. Spring: Ai Wowo</h4>
          <p>
            A traditional pastry eaten around Qingming Festival, made with mugwort and glutinous rice flour. Green on the outside with sweet fillings, it's known for its detoxifying properties.
          </p>
          
          <h4>2. Summer: Old Beijing Sour Plum Soup</h4>
          <p>
            A traditional beverage made from dark plums and hawthorn berries, offering a sweet and sour taste. Known for its heat-clearing and thirst-quenching properties, it's an essential summer drink in Beijing.
          </p>
          
          <h4>3. Autumn: Jiaoquan</h4>
          <p>
            Traditional deep-fried dough rings that are crispy outside and soft inside. Often eaten with Douzhi as a traditional Beijing breakfast. Most delicious during the clear and crisp autumn season.
          </p>
          
          <h4>4. Winter: Lvdagun (Donkey Rolling)</h4>
          <p>
            A traditional sweet made from glutinous rice flour wrapped around yellow bean flour and brown sugar, then rolled in yellow bean powder. Its appearance resembles a donkey rolling on the ground, hence the name. Warming and comforting in winter.
          </p>
          
          <h3>Dining Etiquette Tips</h3>
          <p>
            In Beijing, especially in formal restaurants, round tables are common and dishes are typically served on large plates for sharing. Using serving chopsticks shows respect for others. The "bottoms up" drinking culture is prevalent, but you can drink according to your capacity. Snack shops and street food stalls are more casual, allowing you to fully enjoy the food experience.
          </p>
        `
      },
      {
        title: 'Cultural and Historical Insights',
        content: `
          <h3>The Imperial Capital - A Brief History of Beijing</h3>
          
          <p>
            Beijing has a long history, with "Peking Man" living in the area as early as 500,000 years ago. As a city, Beijing has over 3,000 years of history, tracing back to the early Western Zhou Dynasty as the capital of the State of Yan. During the Liao Dynasty, it was called "Yanjing," and in the Jin Dynasty, it was renamed "Zhongdu." The Yuan Dynasty officially established its capital here, naming it "Dadu." In the early Ming Dynasty, Emperor Zhu Yuanzhang temporarily abandoned Beijing, but his son Zhu Di restored it as the capital, renamed it "Beijing," and began building the Forbidden City. After the Qing Dynasty took control, they continued to use Beijing as their capital until the dynasty's fall in 1912. On October 1, 1949, the People's Republic of China was established in Beijing, and it became the capital of new China.
          </p>
          
          <h3>Architectural Art and Philosophy</h3>
          
          <p>
            Beijing's urban layout reflects traditional Chinese philosophical thought and cosmology. The entire city is laid out symmetrically along a central axis, reflecting the Chinese pursuit of balance and harmony in aesthetics. The Forbidden City sits on this central axis, embodying the concept of "unity between heaven and humans." Its architectural layout is rigorous, with decorations that are grand yet dignified, representing the pinnacle of traditional Chinese architectural art.
          </p>
          <p>
            The siheyuan (courtyard house) is the typical representation of Beijing residences. Four buildings surround a courtyard, ensuring close connections between family members while maintaining private spaces, reflecting the Chinese philosophy of "harmony with diversity." Hutong culture demonstrates mutual help and harmony between community neighbors.
          </p>
          
          <h3>Beijing Culture</h3>
          
          <h4>1. Peking Opera</h4>
          <p>
            Formed in the 19th century, Peking Opera integrates various local operas and is characterized by four main role types: sheng (male), dan (female), jing (painted face), and chou (clown). Stories are presented through singing, recitation, acting, and acrobatics. The facial masks, costumes, and music are highly stylized and symbolic, forming an important part of traditional Chinese culture.
          </p>
          
          <h4>2. Beijing Dialect</h4>
          <p>
            Beijing dialect is the foundation of Standard Mandarin Chinese, with distinctive erhua (r-suffix) sounds and tone changes. Traditional Beijing speakers emphasize implicit rather than explicit expression, often using euphemisms that reflect traditional linguistic wisdom.
          </p>
          
          <h4>3. Folk Arts</h4>
          <p>
            Traditional crafts such as Beijing kites, "Clay Figure Zhang" figurines, and palace lantern making have deep roots in Beijing. During traditional festivals like Spring Festival and Lantern Festival, Beijing temple fairs feature diverse folk performances such as lion dances, land boats, and stilt walking.
          </p>
          
          <h3>The Fusion of Modern and Traditional</h3>
          
          <p>
            Today's Beijing preserves rich historical and cultural heritage while being full of modern metropolitan vitality. The downtown financial district contrasts with ancient hutongs, and high-tech enterprises coexist with traditional workshops. Beijingers both treasure traditional culture and enthusiastically embrace new things. This inclusive spirit also attracts visitors and residents from around the world.
          </p>
          <p>
            With technological development, Beijing is becoming one of the global innovation centers. Zhongguancun Science Park concentrates numerous high-tech enterprises and research institutions, earning it the title "China's Silicon Valley." Modern buildings like the National Centre for the Performing Arts and CCTV Headquarters add fashionable elements to this ancient city.
          </p>
          
          <h3>Cultural Experience Suggestions</h3>
          
          <p>
            To deeply understand Beijing culture, visitors are encouraged to not only visit famous attractions but also enter ordinary communities to experience locals' daily lives. You can watch elderly people practicing tai chi in parks in the morning or join square dancing groups in the evening; listen to storytelling in teahouses or taste century-old traditional foods at time-honored restaurants; visit cutting-edge art exhibitions or learn traditional crafts. This multi-layered experience will give you a more three-dimensional and profound understanding of Beijing.
          </p>
        `
      }
    ]
  },
  fr: {
    title: 'Pékin: Symphonie de l\'ancien et du moderne',
    subtitle: 'Explorez le charme royal et l\'attrait moderne de la capitale chinoise',
    sections: [
      {
        title: 'Premières impressions',
        content: `
          <p>
            La magnifique Cité Interdite aux tuiles dorées étincelantes, la Grande Muraille serpentant à travers les montagnes, le son des cloches de tricycle dans les hutongs, les murs-rideaux en verre du CBD reflétant le coucher du soleil... C'est Pékin, une ville qui mélange l'ancien et le moderne, la tradition et l'innovation. Avec 3000 ans d'histoire urbaine et 800 ans comme capitale, Pékin porte l'essence de la civilisation chinoise tout en montrant l'énergie vibrante de la Chine moderne.
          </p>
          
          <h3>Caractéristiques les plus représentatives:</h3>
          <ul>
            <li>Le plus grand complexe de palais royal au monde - La Cité Interdite</li>
            <li>L'un des plus grands projets d'ingénierie de l'humanité - La Grande Muraille</li>
            <li>Les maisons à cour distinctive et la culture des hutongs</li>
            <li>La prospérité et la vitalité d'une métropole internationale moderne</li>
          </ul>
        `
      },
      {
        title: 'Aperçu des informations de base',
        content: `
          <h3>Meilleures saisons pour visiter</h3>
          <ul>
            <li>Printemps (mars-mai): Températures agréables, fleurs en fleur</li>
            <li>Automne (septembre-octobre): Ciel clair, temps confortable, feuilles rouges</li>
          </ul>
          
          <h3>Caractéristiques climatiques</h3>
          <ul>
            <li>Printemps: Chaud et confortable, tempêtes de sable occasionnelles</li>
            <li>Été: Chaud et pluvieux</li>
            <li>Automne: Frais et sec</li>
            <li>Hiver: Froid et sec</li>
          </ul>
          
          <h3>Transport</h3>
          <ul>
            <li>Vols internationaux: Aéroport international de Pékin Daxing et Aéroport international de la capitale</li>
            <li>Transport urbain: Vaste réseau de métro (23 lignes), bus, taxis</li>
            <li>Entre les attractions: Le métro est le plus pratique, les principales attractions ont des stations de métro à proximité</li>
            <li>Recommandation: Achetez une carte de transport ou utilisez le paiement mobile</li>
          </ul>
          
          <h3>Durée recommandée</h3>
          <p>Au moins 3-5 jours, 7 jours pour une expérience approfondie</p>
        `
      },
      {
        title: 'Attractions incontournables',
        content: `
          <h3>Palais royaux et jardins</h3>
          
          <h4>1. Le Musée du Palais (Cité Interdite)</h4>
          <p>
            Le plus grand complexe palatial du monde, demeure de 24 empereurs des dynasties Ming et Qing. Couvrant 720 000 mètres carrés, les bâtiments sont magnifiques et impressionnants. La Salle de l'Harmonie Suprême est la plus grande structure en bois de Chine, symbolisant le sommet du pouvoir impérial.
          </p>
          <p>
            <strong>Conseils de voyage:</strong> Il est recommandé d'entrer par la Porte du Méridien et de sortir par la Porte de la Prouesse Divine, en suivant l'axe central nord-sud. Réservez vos billets en ligne à l'avance et évitez les week-ends et les jours fériés. Fermé le lundi (sauf jours fériés). Les expositions spéciales nécessitent des réservations séparées.
          </p>
          
          <h4>2. Palais d'Été</h4>
          <p>
            Le plus grand et le mieux préservé jardin royal du monde, retraite estivale de l'Impératrice douairière Cixi. Le lac Kunming scintillant occupe environ les trois quarts de la superficie du Palais d'Été. Le Long Corridor est le corridor peint le plus long du monde, chaque section présentant une peinture unique.
          </p>
          <p>
            <strong>Conseils de voyage:</strong> La route recommandée est "Colline arrière et Lac avant", en commençant par la Colline de la Longévité puis en explorant le lac Kunming. Les promenades en bateau offrent une perspective spéciale. L'été présente des fleurs de lotus tandis que l'hiver offre des activités sur glace sur le lac gelé.
          </p>
          
          <h4>3. Parc du Temple du Ciel</h4>
          <p>
            Un lieu sacré où les empereurs des dynasties Ming et Qing effectuaient des cérémonies pour prier pour de bonnes récoltes. L'Autel Circulaire et la Salle de Prière pour les Bonnes Récoltes présentent des dispositions précises qui incarnent la vision cosmologique chinoise ancienne du "ciel rond et de la terre carrée". La Salle de Prière pour les Bonnes Récoltes est le plus grand bâtiment sacrificiel circulaire ancien du monde.
          </p>
          <p>
            <strong>Conseils de voyage:</strong> Visitez tôt le matin pour voir les habitants pratiquer le tai-chi et d'autres exercices matinaux pour une expérience authentique de Pékin. Une performance rituelle est organisée à la Salle de Prière pour les Bonnes Récoltes à 14h30 tous les jours. Le parc est grand, il est donc recommandé d'acheter un billet pour toutes les attractions.
          </p>
          
          <h3>Sites historiques et culturels</h3>
          
          <h4>1. Grande Muraille de Badaling</h4>
          <p>
            La section la mieux préservée et la plus représentative de la Grande Muraille, et aussi la première section ouverte aux touristes. Située à environ 10 kilomètres au nord du col de Juyongguan, elle a été construite vers 1505 et était une importante place forte militaire pendant la dynastie Ming.
          </p>
          <p>
            <strong>Conseils de voyage:</strong> Nehmen Sie den S2-Zug oder einen Touristenbus, um dorthin zu gelangen. Der nördliche Abschnitt hat einen sanfteren Anstieg, während der südliche Abschnitt steiler ist. Vermeiden Sie Feiertage und kommen Sie früh am Morgen, um Menschenmassen zu vermeiden.
          </p>
          
          <h4>2. Grande Muraille de Mutianyu</h4>
          <p>
            Située dans le district de Huairou, c'est l'une des plus belles sections de la Grande Muraille Ming. Cette section présente divers styles architecturaux avec à la fois des tours de guet et des tours ennemies, ainsi que le spectaculaire paysage de "l'Aigle volant face vers le haut", ce qui en fait un paradis pour les amateurs de photographie.
          </p>
          <p>
            <strong>Conseils de voyage:</strong> Seilbahnen stehen für Auf- und Abstieg zur Verfügung, eine gute Option für diejenigen mit begrenzter körperlicher Ausdauer. Frühling und Herbst bieten die malerischsten Aussichten.
          </p>
        `
      }
    ]
  },
  de: {
    title: 'Peking: Symphonie aus Vergangenheit und Gegenwart',
    subtitle: 'Entdecken Sie den königlichen Charme und die moderne Anziehungskraft der chinesischen Hauptstadt',
    sections: [
      {
        title: 'Erste Eindrücke',
        content: `
          <p>
            Die prächtige Verbotene Stadt mit glänzenden goldenen Dachziegeln, die Große Mauer, die sich durch die Berge windet, der Klang von Dreiradglocken in Hutongs, die Glasvorhangwände des CBD, die den Sonnenuntergang widerspiegeln... Das ist Peking, eine Stadt, die Altes und Modernes, Tradition und Innovation verbindet. Mit 3.000 Jahren Stadtgeschichte und 800 Jahren als Hauptstadt trägt Peking die Essenz der chinesischen Zivilisation in sich und zeigt gleichzeitig die lebendige Energie des modernen Chinas.
          </p>
          
          <h3>Repräsentativste Merkmale:</h3>
          <ul>
            <li>Der größte königliche Palastkomplex der Welt - Die Verbotene Stadt</li>
            <li>Eines der größten Ingenieurskunstwerke der Menschheit - Die Große Mauer</li>
            <li>Die charakteristischen Hofhäuser und die Hutong-Kultur</li>
            <li>Der Wohlstand und die Vitalität einer modernen internationalen Metropole</li>
          </ul>
        `
      },
      {
        title: 'Grundlegende Informationen',
        content: `
          <h3>Beste Reisezeiten</h3>
          <ul>
            <li>Frühling (März-Mai): Angenehme Temperaturen, blühende Blumen</li>
            <li>Herbst (September-Oktober): Klarer Himmel, angenehmes Wetter, rote Blätter</li>
          </ul>
          
          <h3>Klimaeigenschaften</h3>
          <ul>
            <li>Frühling: Warm und angenehm, gelegentliche Sandstürme</li>
            <li>Sommer: Heiß und regnerisch</li>
            <li>Herbst: Kühl und trocken</li>
            <li>Winter: Kalt und trocken</li>
          </ul>
          
          <h3>Verkehrsmittel</h3>
          <ul>
            <li>Internationale Flüge: Internationaler Flughafen Peking Daxing und Internationaler Flughafen der Hauptstadt</li>
            <li>Stadtverkehr: Umfangreiches U-Bahn-Netz (23 Linien), Busse, Taxis</li>
            <li>Zwischen Sehenswürdigkeiten: Die U-Bahn ist am bequemsten, die Hauptattraktionen haben nahegelegene U-Bahnstationen</li>
            <li>Empfehlung: Kaufen Sie eine Transportkarte oder nutzen Sie mobile Zahlungsmethoden</li>
          </ul>
          
          <h3>Empfohlene Aufenthaltsdauer</h3>
          <p>Mindestens 3-5 Tage, 7 Tage für ein tiefgreifendes Erlebnis</p>
        `
      },
      {
        title: 'Sehenswürdigkeiten',
        content: `
          <h3>Königliche Paläste und Gärten</h3>
          
          <h4>1. Der Palastmuseum (Verbotene Stadt)</h4>
          <p>
            Der größte Palastkomplex der Welt, Heimat von 24 Kaisern der Ming- und Qing-Dynastien. Mit einer Fläche von 720.000 Quadratmetern sind die Gebäude prächtig und überwältigend. Die Halle der Höchsten Harmonie ist Chinas größte Holzkonstruktion und symbolisiert den Höhepunkt der kaiserlichen Macht.
          </p>
          <p>
            <strong>Reisetipps:</strong> Es wird empfohlen, durch das Mittagstor einzutreten und durch das Tor der Göttlichen Macht auszusteigen, dem Nord-Süd-Mittelachse folgend. Buchen Sie Tickets im Voraus online und vermeiden Sie Wochenenden und Feiertage. Montags geschlossen (außer an Feiertagen). Für Sonderausstellungen sind separate Reservierungen erforderlich.
          </p>
          
          <h4>2. Sommerpalast</h4>
          <p>
            Der größte und am besten erhaltene königliche Garten der Welt, Sommerrückzugsort der Kaiserinwitwe Cixi. Der schimmernde Kunming-See nimmt etwa drei Viertel der Fläche des Sommerpalastes ein. Der Lange Korridor ist der längste bemalte Korridor der Welt, wobei jeder Abschnitt ein einzigartiges Gemälde zeigt.
          </p>
          <p>
            <strong>Reisetipps:</strong> Die empfohlene Route ist "Hinterer Berg und Vorderer See", beginnend mit dem Longevity Hill und dann die Erkundung des Kunming-Sees. Bootsfahrten bieten eine besondere Perspektive. Der Sommer bietet Lotusblumen, während der Winter Eisaktivitäten auf dem gefrorenen See bietet.
          </p>
          
          <h4>3. Himmelstempelpark</h4>
          <p>
            Ein heiliger Ort, an dem die Kaiser der Ming- und Qing-Dynastien Zeremonien durchführten, um für gute Ernten zu beten. Der Kreisförmige Altar und die Halle des Gebets für Gute Ernten zeichnen sich durch präzise Anordnungen aus, die die alte chinesische kosmologische Sicht des "runden Himmels und der quadratischen Erde" verkörpern. Die Halle des Gebets für Gute Ernten ist das größte antike kreisförmige Opfergebäude der Welt.
          </p>
          <p>
            <strong>Reisetipps:</strong> Besuchen Sie den Park früh am Morgen, um Einheimische bei Tai-Chi und anderen Morgenübungen zu beobachten, für ein authentisches Peking-Erlebnis. Täglich um 14:30 Uhr findet in der Halle des Gebets für Gute Ernten eine rituelle Aufführung statt. Der Park ist groß, daher wird der Kauf eines Durchgangstickets für alle Attraktionen empfohlen.
          </p>
          
          <h3>Historische und kulturelle Stätten</h3>
          
          <h4>1. Die Große Mauer bei Badaling</h4>
          <p>
            Der am besten erhaltene und repräsentativste Abschnitt der Großen Mauer, und auch der erste Abschnitt, der für Touristen geöffnet wurde. Etwa 10 Kilometer nördlich des Juyongguan-Passes gelegen, wurde er um 1505 erbaut und war ein wichtiger militärischer Stützpunkt während der Ming-Dynastie.
          </p>
          <p>
            <strong>Reisetipps:</strong> Nehmen Sie den S2-Zug oder einen Touristenbus, um dorthin zu gelangen. Der nördliche Abschnitt hat einen sanfteren Anstieg, während der südliche Abschnitt steiler ist. Vermeiden Sie Feiertage und kommen Sie früh am Morgen, um Menschenmassen zu vermeiden.
          </p>
          
          <h4>2. Die Große Mauer bei Mutianyu</h4>
          <p>
            Située dans le district de Huairou, c'est l'une des plus belles sections de la Grande Muraille Ming. Cette section présente divers styles architecturaux avec à la fois des tours de guet et des tours ennemies, ainsi que le spectaculaire paysage de "l'Aigle volant face vers le haut", ce qui en fait un paradis pour les amateurs de photographie.
          </p>
          <p>
            <strong>Conseils de voyage:</strong> Des télécabines sont disponibles pour la montée et la descente, une bonne option pour ceux qui ont une endurance physique limitée. Le printemps et l'automne offrent les vues les plus pittoresques.
          </p>
        `
      }
    ]
  },
  es: {
    title: 'Pekín: Sinfonía de lo antiguo y lo moderno',
    subtitle: 'Explore el encanto real y el atractivo moderno de la capital de China',
    sections: [
      {
        title: 'Primeras impresiones',
        content: `
          <p>
            La magnífica Ciudad Prohibida con brillantes tejas doradas, la Gran Muralla serpenteando a través de las montañas, el sonido de las campanas de triciclo en los hutongs, las paredes de cristal del CBD reflejando el atardecer... Esta es Pekín, una ciudad que mezcla lo antiguo y lo moderno, la tradición y la innovación. Con 3.000 años de historia urbana y 800 años como capital, Pekín lleva la esencia de la civilización china mientras muestra la vibrante energía de la China moderna.
          </p>
          
          <h3>Características más representativas:</h3>
          <ul>
            <li>El complejo palaciego más grande del mundo - La Ciudad Prohibida</li>
            <li>Uno de los mayores proyectos de ingeniería de la humanidad - La Gran Muralla</li>
            <li>Las distintivas casas con patio y la cultura hutong</li>
            <li>La prosperidad y vitalidad de una metrópolis internacional moderna</li>
          </ul>
        `
      },
      {
        title: 'Información básica',
        content: `
          <h3>Mejores temporadas para visitar</h3>
          <ul>
            <li>Primavera (marzo-mayo): Temperaturas agradables, flores en flor</li>
            <li>Otoño (septiembre-octubre): Cielos despejados, clima confortable, hojas rojas</li>
          </ul>
          
          <h3>Características climáticas</h3>
          <ul>
            <li>Primavera: Cálida y confortable, tormentas de arena ocasionales</li>
            <li>Verano: Caluroso y lluvioso</li>
            <li>Otoño: Fresco y seco</li>
            <li>Invierno: Frío y seco</li>
          </ul>
          
          <h3>Transporte</h3>
          <ul>
            <li>Vuelos internacionales: Aeropuerto Internacional de Pekín Daxing y Aeropuerto Internacional de la Capital</li>
            <li>Transporte urbano: Extensa red de metro (23 líneas), autobuses, taxis</li>
            <li>Entre atracciones: El metro es el más conveniente, las principales atracciones tienen estaciones de metro cercanas</li>
            <li>Recomendación: Compre una tarjeta de transporte o use pago móvil</li>
          </ul>
          
          <h3>Duración recomendada</h3>
          <p>Al menos 3-5 días, 7 días para una experiencia en profundidad</p>
        `
      },
      {
        title: 'Atracciones imprescindibles',
        content: `
          <h3>Palacios reales y jardines</h3>
          
          <h4>1. El Museo del Palacio (Ciudad Prohibida)</h4>
          <p>
            El mayor complejo palaciego del mundo, hogar de 24 emperadores de las dinastías Ming y Qing. Con una superficie de 720.000 metros cuadrados, los edificios son magníficos e impresionantes. El Salón de la Suprema Armonía es la estructura de madera más grande de China, que simboliza la cúspide del poder imperial.
          </p>
          <p>
            <strong>Consejos de viaje:</strong> Se recomienda entrar por la Puerta Meridiana y salir por la Puerta del Poder Divino, siguiendo el eje central norte-sur. Reserve las entradas en línea con anticipación y evite los fines de semana y días festivos. Cerrado los lunes (excepto días festivos). Las exposiciones especiales requieren reservas separadas.
          </p>
          
          <h4>2. Palacio de Verano</h4>
          <p>
            El jardín real más grande y mejor conservado del mundo, retiro veraniego de la Emperatriz Viuda Cixi. El reluciente Lago Kunming ocupa aproximadamente tres cuartas partes de la superficie del Palacio de Verano. El Largo Corredor es el corredor pintado más largo del mundo, con cada sección presentando una pintura única.
          </p>
          <p>
            <strong>Consejos de viaje:</strong> La ruta recomendada es "Colina trasera y Lago delantero", comenzando con la Colina de la Longevidad y luego explorando el Lago Kunming. Los paseos en bote ofrecen una perspectiva especial. El verano presenta flores de loto mientras que el invierno ofrece actividades sobre hielo en el lago congelado.
          </p>
          
          <h4>3. Parque del Templo del Cielo</h4>
          <p>
            Un lugar sagrado donde los emperadores de las dinastías Ming y Qing realizaban ceremonias para rezar por buenas cosechas. El Altar Circular y el Salón de Oración por las Buenas Cosechas presentan disposiciones precisas que encarnan la visión cosmológica china antigua del "cielo redondo y tierra cuadrada". El Salón de Oración por las Buenas Cosechas es el edificio sacrificial circular antiguo más grande del mundo.
          </p>
          <p>
            <strong>Consejos de viaje:</strong> Visite temprano en la mañana para ver a los locales practicando tai chi y otros ejercicios matutinos para una experiencia auténtica de Pekín. Se realiza una actuación ritual en el Salón de Oración por las Buenas Cosechas a las 2:30 PM diariamente. El parque es grande, por lo que se recomienda comprar un boleto para todas las atracciones.
          </p>
          
          <h3>Sitios históricos y culturales</h3>
          
          <h4>1. Gran Muralla de Badaling</h4>
          <p>
            La sección mejor conservada y más representativa de la Gran Muralla, y también la primera sección abierta a los turistas. Situada a unos 10 kilómetros al norte del Paso Juyongguan, fue construida alrededor de 1505 y fue una importante fortaleza militar durante la dinastía Ming.
          </p>
          <p>
            <strong>Consejos de viaje:</strong> Tome el tren S2 o un autobús turístico para llegar allí. La sección norte tiene una subida más suave, mientras que la sección sur es más empinada. Evite los días festivos y llegue temprano en la mañana para evitar las multitudes.
          </p>
          
          <h4>2. Gran Muralla de Mutianyu</h4>
          <p>
            Ubicada en el distrito de Huairou, esta es una de las secciones más bellas de la Gran Muralla Ming. Esta sección presenta diversos estilos arquitectónicos con torres de vigilancia y torres enemigas, así como el espectacular paisaje del "Águila volando boca arriba", lo que la convierte en un paraíso para los entusiastas de la fotografía.
          </p>
          <p>
            <strong>Consejos de viaje:</strong> Hay teleféricos disponibles para el ascenso y descenso, una buena opción para aquellos con resistencia física limitada. La primavera y el otoño ofrecen las vistas más pintorescas.
          </p>
        `
      }
    ]
  },
  ja: {
    title: '北京：古代の都の過去と現在の交響曲',
    subtitle: '中国の首都の王室の魅力と現代の魅力を探る',
    sections: [
      {
        title: '第一印象',
        content: `
          <p>
            金色の屋根瓦が輝く壮大な紫禁城、山々を縫うように続く万里の長城、胡同で聞こえる三輪車の鈴の音、夕日を映すCBDのガラスのカーテンウォール...これが北京です。古代と現代、伝統と革新が融合する都市です。3,000年の都市の歴史と800年の首都としての歴史を持つ北京は、中国文明の精髓を担いながら、現代中国の活気あるエネルギーを示しています。
          </p>
          
          <h3>最も代表的な特徴：</h3>
          <ul>
            <li>世界最大の王宮複合施設 - 紫禁城（故宮）</li>
            <li>人類最大の工学プロジェクトの一つ - 万里の長城</li>
            <li>独特の四合院と胡同文化</li>
            <li>現代国際都市の繁栄と活力</li>
          </ul>
        `
      },
      {
        title: '基本情報の概要',
        content: `
          <h3>訪問に最適な季節</h3>
          <ul>
            <li>春（3月〜5月）：快適な気温、花が咲き誇る</li>
            <li>秋（9月〜10月）：晴れた空、心地よい天気、紅葉</li>
          </ul>
          
          <h3>気候の特徴</h3>
          <ul>
            <li>春：暖かく快適、時折砂嵐</li>
            <li>夏：暑く雨が多い</li>
            <li>秋：涼しく乾燥</li>
            <li>冬：寒く乾燥</li>
          </ul>
        `
      },
      {
        title: '必見の観光スポット',
        content: `
          <h3>王宮と庭園</h3>
          
          <h4>1. 故宮博物院（紫禁城）</h4>
          <p>
            世界最大の宮殿複合施設で、明・清朝の24人の皇帝の住居。720,000平方メートルを占め、建物は壮大で圧巻です。太和殿は中国最大の木造建築物で、皇帝権力の頂点を象徴しています。
          </p>
          
          <h4>2. 頤和園</h4>
          <p>
            世界最大かつ最もよく保存された王立庭園で、西太后の夏の避暑地。きらめく昆明湖は頤和園の面積の約4分の3を占めています。長廊は世界最長の彩色回廊で、各セクションにユニークな絵画が描かれています。
          </p>
        `
      }
    ]
  },
  ko: {
    title: '베이징: 고대 수도의 과거와 현재의 교향곡',
    subtitle: '중국 수도의 왕실 매력과 현대적 매력 탐험',
    sections: [
      {
        title: '첫인상',
        content: `
          <p>
            빛나는 금빛 지붕 타일이 있는 웅장한 자금성, 산을 따라 구불구불 이어지는 만리장성, 후통에서 들리는 세발자전거 벨소리, 일몰을 반사하는 CBD의 유리 커튼월... 이것이 베이징입니다. 고대와 현대, 전통과 혁신이 어우러진 도시입니다. 3,000년의 도시 역사와 800년의 수도 역사를 가진 베이징은 중국 문명의 정수를 담으면서 현대 중국의 활기찬 에너지를 보여줍니다.
          </p>
          
          <h3>가장 대표적인 특징:</h3>
          <ul>
            <li>세계 최대의 왕궁 단지 - 자금성</li>
            <li>인류 최대 공학 프로젝트 중 하나 - 만리장성</li>
            <li>독특한 사합원과 후통 문화</li>
            <li>현대 국제 대도시의 번영과 활력</li>
          </ul>
        `
      }
    ]
  },
  ru: {
    title: 'Пекин: симфония древнего и современного',
    subtitle: 'Исследуйте королевское очарование и современную привлекательность столицы Китая',
    sections: [
      {
        title: 'Первые впечатления',
        content: `
          <p>
            Великолепный Запретный город с блестящими золотыми крышами, Великая стена, извивающаяся через горы, звук колокольчиков велорикш в хутунах, стеклянные стены CBD, отражающие закат... Это Пекин, город, сочетающий древнее и современное, традиции и инновации. С 3000-летней городской историей и 800-летней историей как столицы, Пекин несет в себе сущность китайской цивилизации, демонстрируя при этом энергичную энергию современного Китая.
          </p>
          
          <h3>Наиболее характерные особенности:</h3>
          <ul>
            <li>Крупнейший в мире комплекс королевского дворца - Запретный город</li>
            <li>Один из величайших инженерных проектов человечества - Великая стена</li>
            <li>Характерные дворовые дома и культура хутунов</li>
            <li>Процветание и жизненная сила современного международного мегаполиса</li>
          </ul>
        `
      }
    ]
  }
};

// 上海的多语言内容
const shanghaiContent: Record<Language, DestinationContent> = {
  zh: {
    title: '上海：东方明珠的魅力',
    subtitle: '现代与传统交融的国际化大都市',
    sections: [
      {
        title: '城市概览',
        content: `
          <p>
            上海是中国最大的经济中心城市，这里有外滩的万国建筑博览，陆家嘴的现代摩天大楼，也有豫园的传统园林和老城厢的市井生活。作为中国改革开放的窗口，上海展现了中国现代化发展的成就。
          </p>
        `
      }
    ]
  },
  en: {
    title: 'Shanghai: The Charm of the Oriental Pearl',
    subtitle: 'An international metropolis where modern and traditional cultures blend',
    sections: [
      {
        title: 'City Overview',
        content: `
          <p>
            Shanghai is China's largest economic center, featuring the international architectural exposition on the Bund, modern skyscrapers in Lujiazui, traditional gardens of Yu Garden, and old town life. As a window of China's reform and opening up, Shanghai showcases the achievements of China's modernization.
          </p>
        `
      }
    ]
  },
  fr: {
    title: 'Shanghai: Le charme de la perle de l\'Orient',
    subtitle: 'Une métropole internationale où se mêlent cultures moderne et traditionnelle',
    sections: [
      {
        title: 'Aperçu de la ville',
        content: `
          <p>
            Shanghai est le plus grand centre économique de Chine, avec l'exposition architecturale internationale du Bund, les gratte-ciel modernes de Lujiazui, les jardins traditionnels du Jardin Yu et la vie de la vieille ville. En tant que fenêtre de la réforme et de l'ouverture de la Chine, Shanghai témoigne des réalisations de la modernisation de la Chine.
          </p>
        `
      }
    ]
  },
  de: {
    title: 'Shanghai: Der Charme der orientalischen Perle',
    subtitle: 'Eine internationale Metropole, in der moderne und traditionelle Kulturen verschmelzen',
    sections: [
      {
        title: 'Stadtübersicht',
        content: `
          <p>
            Shanghai ist Chinas größtes Wirtschaftszentrum mit der internationalen Architekturausstellung am Bund, modernen Wolkenkratzern in Lujiazui, traditionellen Gärten des Yu-Gartens und dem Leben in der Altstadt. Als Fenster der Reform und Öffnung Chinas zeigt Shanghai die Errungenschaften der Modernisierung Chinas.
          </p>
        `
      }
    ]
  },
  es: {
    title: 'Shanghai: El encanto de la Perla de Oriente',
    subtitle: 'Una metrópolis internacional donde se mezclan las culturas moderna y tradicional',
    sections: [
      {
        title: 'Visión general de la ciudad',
        content: `
          <p>
            Shanghai es el mayor centro económico de China, con la exposición arquitectónica internacional del Bund, los modernos rascacielos de Lujiazui, los jardines tradicionales del Jardín Yu y la vida del casco antiguo. Como ventana de la reforma y apertura de China, Shanghai muestra los logros de la modernización de China.
          </p>
        `
      }
    ]
  },
  ja: {
    title: '上海：東洋の真珠の魅力',
    subtitle: '現代と伝統が融合する国際都市',
    sections: [
      {
        title: '都市の概要',
        content: `
          <p>
            上海は中国最大の経済センターであり、外灘の国際建築博覧会、陸家嘴の現代的な超高層ビル、豫園の伝統的な庭園、旧市街の生活を特徴としています。中国の改革開放の窓口として、上海は中国の現代化の成果を示しています。
          </p>
        `
      }
    ]
  },
  ko: {
    title: '상하이: 동방명주의 매력',
    subtitle: '현대와 전통문화가 어우러지는 국제 대도시',
    sections: [
      {
        title: '도시 개요',
        content: `
          <p>
            상하이는 중국 최대의 경제 중심지로, 와이탄(외탄)의 국제 건축 전시, 루자쭈이의 현대적인 고층 빌딩, 위위안(예원)의 전통 정원, 그리고 구시가지의 생활을 특징으로 합니다. 중국의 개혁 개방의 창구로서, 상하이는 중국 현대화의 성과를 보여줍니다.
          </p>
        `
      }
    ]
  },
  ru: {
    title: 'Шанхай: Очарование восточной жемчужины',
    subtitle: 'Международный мегаполис, где сочетаются современная и традиционная культуры',
    sections: [
      {
        title: 'Обзор города',
        content: `
          <p>
            Шанхай - крупнейший экономический центр Китая, включающий международную архитектурную экспозицию на Набережной, современные небоскребы в Луцзяцзуй, традиционные сады Сада Юй и жизнь старого города. Как окно реформ и открытости Китая, Шанхай демонстрирует достижения модернизации Китая.
          </p>
        `
      }
    ]
  }
};

// 汇总所有目的地的内容
export const destinationContents: Record<string, Record<Language, DestinationContent>> = {
  beijing: beijingContent,
  shanghai: shanghaiContent,
  // 可以继续添加其他城市
};

// 获取特定目的地和语言的内容
export function getDestinationContent(cityId: string, language: Language): DestinationContent {
  // 根据城市ID获取相应的内容
  let cityContent: Record<Language, DestinationContent> | undefined;
  
  // 记录日志，以便调试
  console.log(`Getting content for city: ${cityId}, language: ${language}`);
  
  switch(cityId) {
    case 'beijing':
      cityContent = beijingContent;
      break;
    case 'shanghai':
      cityContent = shanghaiContent;
      break;
    // 可以添加其他城市...
    default:
      // 默认返回空对象
      console.log(`City content not found for: ${cityId}`);
      return {
        title: cityId.charAt(0).toUpperCase() + cityId.slice(1),
        subtitle: '',
        sections: []
      };
  }
  
  // 如果请求的语言内容是空的（sections长度为0），则使用英文内容
  if (cityContent && cityContent[language] && cityContent[language].sections.length === 0) {
    console.log(`Using English content as fallback for language: ${language}`);
    return {
      ...cityContent[language],
      sections: cityContent['en'].sections
    };
  }
  
  // 检查请求的语言是否存在
  if (cityContent && !cityContent[language]) {
    console.log(`Language ${language} not found, using English as fallback`);
    return cityContent['en'];
  }
  
  // 返回请求的语言内容
  if (cityContent && cityContent[language]) {
    return cityContent[language];
  }
  
  // 最终使用英文作为备用
  return {
    title: cityId.charAt(0).toUpperCase() + cityId.slice(1),
    subtitle: '',
    sections: []
  };
} 