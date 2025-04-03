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
      {
        title: "Basic Information Overview",
        content: `
        <p><strong>Best time to visit:</strong> Spring (April-May) and autumn (September-October) have pleasant climate, ideal for tourism.</p>
        <p><strong>Climate characteristics:</strong> Four distinct seasons, with short spring and autumn, longer summer and winter. Summers are hot and rainy, winters cold and dry.</p>
        <p><strong>Transportation methods:</strong> The subway is the most convenient way to visit Beijing, covering most attractions. Taxis are reasonably priced but may encounter congestion, while shared bicycles are suitable for short trips.</p>
        <p><strong>Recommended visit duration:</strong> A complete tour of Beijing requires 5-7 days, with at least 3 days needed for major attractions.</p>
        <p><strong>Cost level:</strong> Beijing's cost of living is relatively high compared to other Chinese cities, but still advantageous compared to international metropolises.</p>
        `
      },
      {
        title: "Must-Visit Attractions",
        content: `
        <h3>The Forbidden City (Palace Museum)</h3>
        <p>As the world's largest and best-preserved wooden ancient building complex, the Forbidden City was the imperial palace of the Ming and Qing dynasties, housing nearly 9,000 rooms. It contains countless precious cultural relics and is the best place to understand China's ancient imperial history and culture.</p>
        <p><strong>Travel tips:</strong> Allow 4-6 hours for a visit, book tickets online in advance, and avoid weekends and holidays. The classic route is to enter from Meridian Gate and exit from Shenwu Gate. Consider renting an audio guide to learn more historical details.</p>

        <h3>The Great Wall at Badaling</h3>
        <p>As the most representative section of the Great Wall, the Badaling Great Wall's construction history dates back to the Ming Dynasty. With steep mountains and beautiful scenery, it's the perfect place to experience the spirit of "He who has never been to the Great Wall is not a true man."</p>
        <p><strong>Travel tips:</strong> Take the S2 line or tourist bus, avoiding holiday peak periods. Consider taking the cable car up and walking down, saving energy while fully appreciating the scenery. Watch out for icy steps in winter.</p>

        <h3>Mutianyu Great Wall</h3>
        <p>The Mutianyu Great Wall is one of the best-preserved sections, known for its unique, special, and steep features. The wall winds through steep mountains, with wide walls and solid bricks, making it a paradise for photography enthusiasts.</p>
        <p><strong>Travel tips:</strong> Take the cable car up and toboggan down for an exciting and novel experience. Bring sufficient water and sun protection, and note that it can be windy at the top, so dress warmly. Buy tickets online in advance during peak season to avoid queues.</p>

        <h3>Temple of Heaven Park</h3>
        <p>The Temple of Heaven was where Ming and Qing emperors worshipped heaven and prayed for good harvests. Its architectural layout strictly follows the ancient cosmic view of "round heaven and square earth." The Hall of Prayer for Good Harvests is the core of the complex, renowned for its exquisite architectural craftsmanship.</p>
        <p><strong>Travel tips:</strong> Visit in the early morning to see locals exercising and experience authentic Beijing life. The park is large, so plan your route and wear comfortable shoes. The Echo Wall and Three Sound Stones have interesting acoustic effects worth experiencing.</p>

        <h3>Summer Palace</h3>
        <p>As the most complete imperial garden, the Summer Palace is based on Kunming Lake and Longevity Hill, combining the delicacy of southern gardens with the grandeur of northern gardens. The Long Corridor, Tower of Buddhist Incense, and Marble Boat are distinctive attractions with enchanting scenery in all four seasons.</p>
        <p><strong>Travel tips:</strong> The park covers a large area, so allow half a day for your visit. Consider taking a boat to enjoy the lake views, especially spectacular when lotus flowers bloom in summer. The classic route is to enter from the North Palace Gate and exit from the East Palace Gate, covering the main attractions.</p>
        `
      },
      {
        title: "Unique Experiences",
        content: `
        <h3>Hutong Culture Exploration</h3>
        <p>Beijing's hutongs carry the lifestyle and cultural memories of old Beijing. Nanluoguxiang, Shichahai, and Qianmen Dashilan areas have preserved relatively intact hutong features, making them excellent places to experience traditional Beijing life.</p>
        <p><strong>Recommended activities:</strong> Ride a tricycle through the hutongs, visit courtyard houses, taste old Beijing snacks, interact with local residents, and experience authentic Beijing culture.</p>

        <h3>Beijing Opera Experience</h3>
        <p>Traditional operas like Peking Opera and Ping Opera are important components of Beijing culture. Venues like Mei Lanfang Grand Theater and Chang'an Grand Theater regularly host traditional opera performances, offering windows into traditional Chinese art.</p>
        <p><strong>Recommended activities:</strong> Watch an authentic Peking Opera performance, learn about the meaning of facial masks, try on opera makeup, and interact with artists to learn simple singing techniques and hand gestures.</p>

        <h3>798 Art District</h3>
        <p>Once an industrial factory area transformed into a contemporary art center, 798 Art District brings together galleries, art studios, design companies, restaurants, and fashion stores, showcasing Beijing's creative vitality and artistic atmosphere.</p>
        <p><strong>Recommended activities:</strong> Visit various avant-garde art exhibitions, interact with artists, relax in industrial-style cafes, and purchase unique artistic derivatives as souvenirs.</p>

        <h3>Shichahai Ice Activities</h3>
        <p>In winter, frozen Shichahai turns into a natural ice rink where locals enjoy ice skating, ice games, and ice cars, creating a unique cultural landscape specific to Beijing winters.</p>
        <p><strong>Recommended activities:</strong> Rent ice skates or ice cars to experience traditional ice activities, taste winter snacks like candied haws, and enjoy the snow-covered Yinding Bridge with views of frozen Shichahai.</p>
        `
      },
      {
        title: "Food Guide",
        content: `
        <h3>Peking Duck</h3>
        <p>As Beijing's most famous cuisine, Peking duck is known for its crispy skin, tender meat, and bright red color. Restaurants like Quanjude, Da Dong, and Liqun each have their specialties, offering authentic Peking duck experiences.</p>
        <p><strong>Tasting suggestions:</strong> The traditional way is to wrap duck meat, scallions, and sweet bean sauce in thin pancakes. Also try duck soup and fried rice with duck meat to use every part of the duck.</p>

        <h3>Old Beijing Snacks</h3>
        <p>Snacks like douzhi (fermented mung bean juice), aiwowo (steamed rice cakes), tanghulu (candied haws), ludagun (glutinous rice rolls), and chaogan (fried liver) carry deep historical and cultural heritage, offering authentic Beijing flavors.</p>
        <p><strong>Recommended venues:</strong> Huguosi Snack Shop, Nanluoguxiang Snack Street, and Tianqiao Yangji Pastry are great places to taste authentic old Beijing snacks. Each snack has an interesting historical story worth learning about.</p>

        <h3>Hot Pot</h3>
        <p>Beijing's hot pot originated in the Yuan Dynasty, featuring fresh lamb slices quickly cooked in boiling water and eaten with dipping sauce. Old restaurants like Donglaishun and Nanlaishun maintain traditional techniques and authentic flavors.</p>
        <p><strong>Tasting suggestions:</strong> Traditional hot pots use copper pots and charcoal fire, with dipping sauce made from sesame paste, leek flowers, and coriander. Winter is the best time to enjoy hot pot, both warming and delicious.</p>

        <h3>Imperial Cuisine</h3>
        <p>Cuisine from the imperial court is known for its exquisite preparation and the principle of "light but not thin, rich but not greasy." Restaurants like Ziguang Ge and Fengzeyuan offer authentic imperial dining experiences.</p>
        <p><strong>Signature dishes:</strong> Dishes like roasted whole pig, golden tripe, braised deer tail, and steamed fish lips showcase the exquisite knife skills and temperature control that exemplify imperial food culture.</p>
        `
      },
      {
        title: "Cultural and Historical Insights",
        content: `
        <h3>Historical Evolution of the Imperial Capital</h3>
        <p>Beijing served as the capital for five dynasties—Liao, Jin, Yuan, Ming, and Qing—with its urban layout and cultural deposits deeply intertwined with Chinese history. The layout of the city's central axis reflects the ancient Chinese philosophical concept of "unity between heaven and man."</p>
        <p><strong>Historical context:</strong> From Yuan's Dadu to Ming and Qing's Beijing, the city planning presents a concentric square structure, with the Forbidden City at the core of the central axis, reflecting the feudal idea of "imperial power supremacy."</p>

        <h3>Beijing Cultural Flavor</h3>
        <p>Beijing flavor culture is the city's unique regional culture, including Beijing dialect, opera, and folk activities. Watching crosstalk performances, visiting temple fairs, and flying kites are windows to experience Beijing flavor culture.</p>
        <p><strong>Cultural characteristics:</strong> Beijing people emphasize "propriety," value face, have humorous language, and are helpful—these qualities collectively form the essence of Beijing flavor culture.</p>

        <h3>Architectural Art</h3>
        <p>Beijing's architectural art is represented by palace buildings, garden structures, and religious architecture, collectively showcasing the superb craftsmanship and aesthetic concepts of traditional Chinese architecture.</p>
        <p><strong>Architectural features:</strong> Emphasis on symmetry, hierarchy, and color symbolism; structures à cadre en bois flexibles et robustes; coins relevés et avant-toits volants à la fois beaux et pratiques, reflétant la sagesse de l'architecture chinoise ancienne.</p>

        <h3>Intangible Cultural Heritage</h3>
        <p>Beijing has numerous intangible cultural heritage items, such as cloisonné, inside-painted snuff bottles, Beijing embroidery, and sugar figure blowing, as well as traditional performing arts like Peking Opera and Ping Opera.</p>
        <p><strong>Preservation efforts:</strong> Visit the Beijing Folk Museum to learn about traditional culture, or go to Panjiayuan or Liulichang Cultural Street to find traditional crafts and support the continuation of intangible heritage.</p>
        `
      }
    ]
  },
  fr: {
    title: "Pékin, la Capitale",
    subtitle: "Un mélange d'ancien et de moderne dans la capitale impériale orientale",
    sections: [
      {
        title: "Premières Impressions",
        content: `
        <p>Pékin, une ville avec plus de 3000 ans d'histoire et 800 ans comme capitale, a été témoin des changements historiques de la Chine à travers les millénaires. En tant que capitale chinoise, elle présente à la fois des architectures anciennes majestueuses comme la Cité Interdite, le Temple du Ciel et le Palais d'Été, ainsi que des merveilles architecturales modernes comme le Nid d'Oiseau et le Cube d'Eau, mélangeant parfaitement éléments anciens et modernes.</p>
        <p>Promenez-vous dans les hutongs et les cours carrées de Pékin pour découvrir le mode de vie traditionnel de l'ancien Pékin; flânez dans les zones commerciales animées comme Wangfujing et Sanlitun pour ressentir la vitalité moderne de cette métropole. Pékin est une ville qui captive les visiteurs, attendant votre exploration.</p>
        `
      },
      {
        title: "Aperçu des Informations de Base",
        content: `
        <p><strong>Meilleure période pour visiter:</strong> Le printemps (avril-mai) et l'automne (septembre-octobre) offrent un climat agréable, idéal pour le tourisme.</p>
        <p><strong>Caractéristiques climatiques:</strong> Quatre saisons distinctes, avec printemps et automne courts, été et hiver plus longs. Les étés sont chauds et pluvieux, les hivers froids et secs.</p>
        <p><strong>Moyens de transport:</strong> Le métro est le moyen le plus pratique pour visiter Pékin, desservant la plupart des attractions. Les taxis sont à prix raisonnables mais peuvent rencontrer des embouteillages, tandis que les vélos partagés conviennent aux courts trajets.</p>
        <p><strong>Durée de visite recommandée:</strong> Une visite complète de Pékin nécessite 5-7 jours, avec au moins 3 jours pour les attractions principales.</p>
        <p><strong>Niveau de coût:</strong> Le coût de vie à Pékin est relativement élevé par rapport à d'autres villes chinoises, mais reste avantageux comparé aux métropoles internationales.</p>
        `
      },
      {
        title: "Attractions Incontournables",
        content: `
        <h3>La Cité Interdite (Musée du Palais)</h3>
        <p>En tant que plus grand complexe de bâtiments anciens en bois du monde et le mieux préservé, la Cité Interdite était le palais impérial des dynasties Ming et Qing, abritant près de 9 000 pièces. Elle contient d'innombrables reliques culturelles précieuses et constitue le meilleur endroit pour comprendre l'histoire et la culture impériales anciennes de la Chine.</p>
        <p><strong>Conseils de voyage:</strong> Prévoyez 4-6 heures pour une visite, réservez vos billets en ligne à l'avance et évitez les week-ends et jours fériés. L'itinéraire classique consiste à entrer par la porte Méridienne et sortir par la porte Shenwu. Pensez à louer un audioguide pour en apprendre davantage sur les détails historiques.</p>

        <h3>La Grande Muraille à Badaling</h3>
        <p>En tant que section la plus représentative de la Grande Muraille, l'histoire de la construction de la Grande Muraille de Badaling remonte à la dynastie Ming. Avec ses montagnes escarpées et ses beaux paysages, c'est l'endroit parfait pour ressentir l'esprit de "Celui qui n'est jamais allé sur la Grande Muraille n'est pas un vrai homme".</p>
        <p><strong>Conseils de voyage:</strong> Prenez la ligne S2 ou un bus touristique, en évitant les périodes de pointe des jours fériés. Envisagez de prendre le téléphérique pour monter et de descendre à pied, économisant ainsi de l'énergie tout en appréciant pleinement le paysage. Attention aux marches glacées en hiver.</p>

        <h3>La Grande Muraille à Mutianyu</h3>
        <p>La Grande Muraille de Mutianyu est l'une des sections les mieux préservées, connue pour ses caractéristiques uniques, spéciales et escarpées. Le mur serpente à travers des montagnes abruptes, avec des murs larges et des briques solides, ce qui en fait un paradis pour les amateurs de photographie.</p>
        <p><strong>Conseils de voyage:</strong> Montez en téléphérique et descendez en toboggan pour une expérience excitante et nouvelle. Apportez suffisamment d'eau et une protection solaire, et notez qu'il peut être venteux au sommet, alors habillez-vous chaudement. Achetez des billets en ligne à l'avance pendant la haute saison pour éviter les files d'attente.</p>

        <h3>Le Parc du Temple du Ciel</h3>
        <p>Le Temple du Ciel était l'endroit où les empereurs des dynasties Ming et Qing vénéraient le ciel et priaient pour de bonnes récoltes. Sa disposition architecturale suit strictement la vision cosmique ancienne du "ciel rond et terre carrée". La Salle de Prière pour les Bonnes Récoltes est le cœur du complexe, réputée pour son artisanat architectural exquis.</p>
        <p><strong>Conseils de voyage:</strong> Visitez tôt le matin pour voir les habitants faire de l'exercice et découvrir la vie authentique de Pékin. Le parc est grand, alors planifiez votre itinéraire et portez des chaussures confortables. Le Mur d'Écho et les Trois Pierres Sonores offrent des effets acoustiques intéressants à découvrir.</p>

        <h3>Le Palais d'Été</h3>
        <p>En tant que jardin impérial le plus complet, le Palais d'Été s'articule autour du lac Kunming et de la colline de la Longévité, combinant la délicatesse des jardins du sud avec la grandeur des jardins du nord. Le Long Corridor, la Tour de l'Encens Bouddhiste et le Bateau de Marbre sont des attractions distinctives offrant des paysages enchanteurs en toutes saisons.</p>
        <p><strong>Conseils de voyage:</strong> Le parc couvre une grande superficie, prévoyez donc une demi-journée pour votre visite. Envisagez de prendre un bateau pour profiter des vues sur le lac, particulièrement spectaculaires lorsque les fleurs de lotus s'épanouissent en été. L'itinéraire classique consiste à entrer par la Porte Nord du Palais et à sortir par la Porte Est du Palais, couvrant les principales attractions.</p>
        `
      },
      {
        title: "Expériences Uniques",
        content: `
        <h3>Exploration de la Culture des Hutongs</h3>
        <p>Les hutongs de Pékin portent le mode de vie et les souvenirs culturels de l'ancien Pékin. Les quartiers de Nanluoguxiang, Shichahai et Qianmen Dashilan ont préservé des caractéristiques relativement intactes des hutongs, ce qui en fait d'excellents endroits pour découvrir la vie traditionnelle de Pékin.</p>
        <p><strong>Activités recommandées:</strong> Faites un tour en tricycle à travers les hutongs, visitez des maisons à cour carrée, goûtez aux collations de l'ancien Pékin, interagissez avec les résidents locaux et découvrez l'authentique culture pékinoise.</p>

        <h3>Expérience de l'Opéra de Pékin</h3>
        <p>Les opéras traditionnels comme l'Opéra de Pékin et l'Opéra Ping sont des composantes importantes de la culture pékinoise. Des lieux comme le Grand Théâtre Mei Lanfang et le Grand Théâtre Chang'an accueillent régulièrement des représentations d'opéra traditionnel, offrant des fenêtres sur l'art traditionnel chinois.</p>
        <p><strong>Activités recommandées:</strong> Assistez à une authentique représentation d'Opéra de Pékin, découvrez la signification des masques faciaux, essayez le maquillage d'opéra et interagissez avec des artistes pour apprendre des techniques de chant simples et des gestes manuels.</p>

        <h3>District Artistique 798</h3>
        <p>Autrefois zone d'usines industrielles transformée en centre d'art contemporain, le District Artistique 798 rassemble des galeries, des studios d'art, des entreprises de design, des restaurants et des magasins de mode, montrant la vitalité créative et l'atmosphère artistique de Pékin.</p>
        <p><strong>Activités recommandées:</strong> Visitez diverses expositions d'art avant-gardiste, interagissez avec des artistes, détendez-vous dans des cafés de style industriel et achetez des produits dérivés artistiques uniques comme souvenirs.</p>

        <h3>Activités sur Glace à Shichahai</h3>
        <p>En hiver, le Shichahai gelé se transforme en patinoire naturelle où les habitants pratiquent le patinage sur glace, les jeux de glace et les voitures de glace, créant un paysage culturel unique spécifique aux hivers pékinois.</p>
        <p><strong>Activités recommandées:</strong> Louez des patins ou des voitures de glace pour découvrir les activités traditionnelles sur glace, goûtez aux collations d'hiver comme les brochettes de fruits confits, et admirez le pont Yinding couvert de neige avec vue sur le Shichahai gelé.</p>
        `
      },
      {
        title: "Guide Culinaire",
        content: `
        <h3>Canard Laqué de Pékin</h3>
        <p>En tant que cuisine la plus célèbre de Pékin, le canard laqué est connu pour sa peau croustillante, sa viande tendre et sa couleur rouge vif. Des restaurants comme Quanjude, Da Dong et Liqun ont chacun leurs spécialités, offrant d'authentiques expériences de dégustation du canard de Pékin.</p>
        <p><strong>Suggestions de dégustation:</strong> La façon traditionnelle consiste à envelopper la viande de canard, les oignons verts et la sauce aux haricots sucrée dans de fines crêpes. Essayez également la soupe de canard et le riz frit avec de la viande de canard pour utiliser chaque partie du canard.</p>

        <h3>Collations de l'Ancien Pékin</h3>
        <p>Des collations comme le douzhi (jus fermenté de haricot mungo), aiwowo (gâteaux de riz cuits à la vapeur), tanghulu (pommes d'amour), ludagun (rouleaux de riz gluant) et chaogan (foie frit) portent un héritage historique et culturel profond, offrant d'authentiques saveurs pékinoises.</p>
        <p><strong>Lieux recommandés:</strong> La boutique de collations Huguosi, la rue des collations de Nanluoguxiang et la pâtisserie Tianqiao Yangji sont d'excellents endroits pour goûter aux authentiques collations de l'ancien Pékin. Chaque collation a une histoire intéressante qui mérite d'être connue.</p>

        <h3>Fondue Chinoise</h3>
        <p>La fondue chinoise de Pékin est originaire de la dynastie Yuan, proposant des tranches fines d'agneau rapidement cuites dans de l'eau bouillante et mangées avec une sauce. Les anciens restaurants comme Donglaishun et Nanlaishun maintiennent des techniques traditionnelles et des saveurs authentiques.</p>
        <p><strong>Suggestions de dégustation:</strong> Les fondues traditionnelles utilisent des pots en cuivre et du feu de charbon de bois, avec une sauce composée de pâte de sésame, de fleurs de poireau et de coriandre. L'hiver est la meilleure période pour déguster la fondue, à la fois réchauffante et délicieuse.</p>

        <h3>Cuisine Impériale</h3>
        <p>La cuisine de la cour impériale est connue pour sa préparation exquise et son principe de "légère mais pas mince, riche mais pas grasse". Des restaurants comme Ziguang Ge et Fengzeyuan offrent d'authentiques expériences de cuisine impériale.</p>
        <p><strong>Plats signatures:</strong> Des plats comme le cochon entier rôti, la tripe dorée, la queue de cerf braisée et les lèvres de poisson cuites à la vapeur mettent en valeur les compétences exquises au couteau et le contrôle de la température qui illustrent la culture alimentaire impériale.</p>
        `
      },
      {
        title: "Aperçu Culturel et Historique",
        content: `
        <h3>Évolution Historique de la Capitale Impériale</h3>
        <p>Pékin a servi de capitale pour cinq dynasties—Liao, Jin, Yuan, Ming et Qing—avec son aménagement urbain et ses dépôts culturels profondément liés à l'histoire chinoise. La disposition de l'axe central de la ville reflète le concept philosophique chinois ancien de "l'unité entre le ciel et l'homme".</p>
        <p><strong>Contexte historique:</strong> Du Dadu des Yuan au Pékin des Ming et des Qing, l'urbanisme présente une structure carrée concentrique, avec la Cité Interdite au cœur de l'axe central, reflétant l'idée féodale de "suprématie du pouvoir impérial".</p>

        <h3>Saveur Culturelle de Pékin</h3>
        <p>La culture pékinoise est la culture régionale unique de la ville, incluant le dialecte pékinois, l'opéra et les activités populaires. Regarder des spectacles de crosstalk, visiter des foires de temples et faire voler des cerfs-volants sont des fenêtres pour découvrir la culture pékinoise.</p>
        <p><strong>Caractéristiques culturelles:</strong> Les Pékinois mettent l'accent sur la "bienséance", valorisent la face, ont un langage humoristique et sont serviables—ces qualités forment collectivement l'essence de la culture pékinoise.</p>

        <h3>Art Architectural</h3>
        <p>L'art architectural de Pékin est représenté par les bâtiments palatins, les structures de jardins et l'architecture religieuse, montrant collectivement l'artisanat superbe et les concepts esthétiques de l'architecture chinoise traditionnelle.</p>
        <p><strong>Caractéristiques architecturales:</strong> Accent sur la symétrie, la hiérarchie et le symbolisme des couleurs; structures à cadre en bois flexibles et robustes; coins relevés et avant-toits volants à la fois beaux et pratiques, reflétant la sagesse de l'architecture chinoise ancienne.</p>

        <h3>Patrimoine Culturel Immatériel</h3>
        <p>Pékin possède de nombreux éléments du patrimoine culturel immatériel, tels que le cloisonné, les tabatières peintes à l'intérieur, la broderie pékinoise et le soufflage de figurines en sucre, ainsi que des arts du spectacle traditionnels comme l'Opéra de Pékin et l'Opéra Ping.</p>
        <p><strong>Efforts de préservation:</strong> Visitez le Musée folklorique de Pékin pour en apprendre davantage sur la culture traditionnelle, ou rendez-vous à Panjiayuan ou dans la rue culturelle de Liulichang pour trouver des objets artisanaux traditionnels et soutenir la continuité du patrimoine immatériel.</p>
        `
      }
    ]
  },
  de: {
    title: 'Peking Hauptstadt',
    subtitle: 'Alte und moderne Elemente verwoben in der östlichen Kaiserhauptstadt',
    sections: [
      {
        title: 'Erste Eindrücke',
        content: `
          <p>Peking, eine Stadt mit über 3000 Jahren Geschichte und 800 Jahren als Hauptstadt, hat die historischen Veränderungen Chinas über Jahrtausende miterlebt. Als Chinas Hauptstadt beherbergt sie sowohl prächtige alte Bauwerke wie die Verbotene Stadt, den Himmelstempel und den Sommerpalast als auch moderne architektonische Wunderwerke wie das Vogelnest und den Wasserwürfel, die alte und moderne Elemente perfekt miteinander verbinden.</p>
          <p>Schlendern Sie durch Pekings Hutongs und Innenhöfe, um den traditionellen Lebensstil des alten Pekings zu erleben; erkunden Sie geschäftige Handelsviertel wie Wangfujing und Sanlitun, um die moderne Vitalität dieser Metropole zu spüren. Peking ist eine Stadt, die Besucher fesselt und auf Ihre Erkundung wartet.</p>
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
    title: "北京首都",
    subtitle: "古代と現代が交差する東方の帝都",
    sections: [
      {
        title: "最初の印象",
        content: `
        <p>北京は3000年以上の都市としての歴史と800年以上の首都としての歴史を持ち、何千年にもわたる中国の歴史的変遷を目撃してきました。中国の首都として、故宮、天壇、頤和園などの壮大な古代建築物と、鳥の巣、水立方などの現代建築の驚異の両方を備え、古代と現代が完璧に融合しています。</p>
        <p>北京の胡同と四合院を散策して、古い北京の伝統的な生活様式を感じたり、王府井や三里屯などの賑やかな商業エリアを散策して、この大都市の現代的な活力を体験したりしてください。北京は訪問者を魅了する街であり、あなたの探索を待っています。</p>
        `
      },
      {
        title: "基本情報の概要",
        content: `
        <p><strong>最適な観光シーズン：</strong> 春（4〜5月）と秋（9〜10月）は気候が快適で、観光に最適です。</p>
        <p><strong>気候特性：</strong> 四季がはっきりしていて、春と秋が短く、夏と冬が長いです。夏は暑く雨が多く、冬は寒く乾燥しています。</p>
        <p><strong>交通手段：</strong> 地下鉄は北京を観光する最も便利な方法で、ほとんどの観光スポットをカバーしています。タクシーは手頃な価格ですが渋滞に遭遇することがあり、シェア自転車は短距離の移動に適しています。</p>
        <p><strong>推奨される訪問期間：</strong> 北京の完全な観光には5〜7日かかり、主要な観光スポットだけでも少なくとも3日必要です。</p>
        <p><strong>物価水準：</strong> 北京の生活費は他の中国の都市と比較すると比較的高いですが、国際的な大都市と比較するとまだ利点があります。</p>
        `
      },
      {
        title: "必見の観光スポット",
        content: `
        <h3>故宮博物院（紫禁城）</h3>
        <p>世界最大かつ最も保存状態の良い木造古代建築群として、故宮は明清朝の皇帝の宮殿で、約9,000の部屋があります。数え切れないほどの貴重な文化財が収蔵されており、中国の古代宮廷の歴史と文化を理解するための最良の場所です。</p>
        <p><strong>旅行のヒント：</strong> 訪問には4〜6時間を見込み、事前にオンラインでチケットを予約し、週末や祝日を避けましょう。午門から入り、神武門から出るのが一般的なルートです。歴史的な詳細をより理解するために、音声ガイドのレンタルを検討してください。</p>

        <h3>八達嶺長城</h3>
        <p>万里の長城の中で最も代表的な区間として、八達嶺長城の建設歴史は明朝にまで遡ります。険しい山と美しい景色があり、「長城に登らずして好漢にあらず」の精神を感じる絶好の場所です。</p>
        <p><strong>旅行のヒント：</strong> S2線または観光バスを利用し、祝日のピーク時を避けてください。ケーブルカーで上り、徒歩で下ることを検討すると、エネルギーを節約しながら景色を十分に楽しむことができます。冬には階段が凍ることがあるので注意してください。</p>

        <h3>慕田峪長城</h3>
        <p>慕田峪長城は、最も保存状態の良い区間の一つで、独特で特別で険しい特徴で知られています。長城は険しい山々の間を蛇行し、壁は広く、レンガは堅固で、写真愛好家の楽園となっています。</p>
        <p><strong>旅行のヒント：</strong> ケーブルカーで上り、トボガンで下りると、刺激的で新しい体験ができます。十分な水と日焼け止めを持参し、山頂では風が強いことがあるので、暖かい服装をしてください。ピークシーズン中は事前にオンラインでチケットを購入すると、列に並ぶ時間を節約できます。</p>

        <h3>天壇公園</h3>
        <p>天壇は明清朝の皇帝が天を崇拝し、豊作を祈った場所です。その建築配置は古代の「天円地方」の宇宙観に厳密に従っています。祈年殿は建築群の中心であり、精緻な建築技術で有名です。</p>
        <p><strong>旅行のヒント：</strong> 早朝に訪れて地元の人々が運動している様子を見ると、本物の北京の生活を体験できます。公園は広いので、ルートを計画し、快適な靴を履いてください。回音壁や三音石には興味深い音響効果があり、体験する価値があります。</p>

        <h3>頤和園</h3>
        <p>最も完全な皇家庭園として、頤和園は昆明湖と万寿山を基礎とし、南方庭園の精緻さと北方庭園の壮大さを融合しています。長廊、仏香閣、石舫などの見どころは独特で、四季折々の魅力的な景色が楽しめます。</p>
        <p><strong>旅行のヒント：</strong> 公園は広大な面積をカバーしているので、訪問には半日を見込んでください。特に夏に蓮の花が咲く時期は見事なので、ボートに乗って湖の景色を楽しむことを検討してください。北宮門から入り、東宮門から出るのが主要な見どころをカバーする一般的なルートです。</p>
        `
      }
    ]
  },
  ko: {
    title: '베이징 수도',
    subtitle: '동방 제국 수도에서 얽힌 고대와 현대',
    sections: [
      {
        title: '첫인상',
        content: `
        <p>베이징은 3000년 이상의 도시 역사와 800년 이상의 수도 역사를 가진 도시로, 수천 년에 걸친 중국 역사의 변화를 목격했습니다. 중국의 수도로서, 자금성, 천단, 이화원과 같은 웅장한 고대 건축물과 새둥지, 물방울 같은 현대 건축 경이로움을 모두 갖추고 있으며, 고대와 현대 요소가 완벽하게 어우러져 있습니다.</p>
        <p>베이징의 후통과 사합원을 걸으며 전통적인 베이징 생활 방식을 체험하고, 왕푸징과 산리툰 같은 번화한 상업 지역을 돌아다니며 이 대도시의 현대적인 활력을 느껴보세요. 베이징은 방문객을 매료시키는 도시로, 여러분의 탐험을 기다리고 있습니다.</p>
        `
      },
      {
        title: '기본 정보 개요',
        content: `
        <p><strong>최적의 방문 시기:</strong> 봄(4-5월)과 가을(9-10월)은 쾌적한 기후로 관광에 이상적입니다.</p>
        <p><strong>기후 특성:</strong> 뚜렷한 사계절이 있으며, 봄과 가을은 짧고 여름과 겨울은 길다. 여름은 덥고 비가 많으며, 겨울은 춥고 건조합니다.</p>
        <p><strong>교통 수단:</strong> 지하철은 베이징을 관광하는 가장 편리한 방법으로, 대부분의 명소를 커버합니다. 택시는 가격이 합리적이지만 혼잡을 만날 수 있으며, 공유 자전거는 단거리 이동에 적합합니다.</p>
        <p><strong>권장 방문 기간:</strong> 베이징을 완전히 둘러보려면 5-7일이 필요하며, 주요 명소만 보려면 최소 3일이 필요합니다.</p>
        <p><strong>비용 수준:</strong> 베이징의 생활비는 다른 중국 도시에 비해 상대적으로 높지만, 국제 대도시에 비하면 여전히 유리합니다.</p>
        `
      },
      {
        title: '필수 방문 명소',
        content: `
        <h3>고궁 박물관(자금성)</h3>
        <p>세계에서 가장 크고 가장 잘 보존된 목조 고대 건축 단지로, 고궁은 명청 시대의 황제 궁전으로 약 9,000개의 방을 갖추고 있습니다. 수많은 귀중한 문화재를 소장하고 있으며, 중국 고대 궁정 역사와 문화를 이해하는 가장 좋은 장소입니다.</p>
        <p><strong>여행 팁:</strong> 방문에 4-6시간을 예약하고, 사전에 온라인으로 입장권을 예약하며, 주말과 공휴일을 피하세요. 오문에서 입장하여 신무문으로 나오는 것이 고전적인 루트입니다. 더 많은 역사적 세부 사항을 알아보기 위해 오디오 가이드 대여를 고려하세요.</p>

        <h3>바달링 만리장성</h3>
        <p>만리장성의 가장 대표적인 구간으로, 바달링 장성의 건설 역사는 명나라 시대로 거슬러 올라갑니다. 가파른 산과 아름다운 경치를 가지고 있어, "장성에 오르지 않으면 진정한 남자가 아니다"라는 정신을 느낄 수 있는 완벽한 장소입니다.</p>
        <p><strong>여행 팁:</strong> S2 노선이나 관광 버스를 이용하고, 휴일 성수기를 피하세요. 케이블카를 타고 올라가서 걸어서 내려오는 것을 고려하면, 에너지를 절약하면서도 경치를 충분히 감상할 수 있습니다. 겨울에는 계단이 얼 수 있으니 주의하세요.</p>

        <h3>무티안유 만리장성</h3>
        <p>무티안유 장성은 가장 잘 보존된 구간 중 하나로, 독특하고 특별하며 가파른 특징으로 알려져 있습니다. 장성은 가파른 산들 사이를 굽이굽이 흐르며, 넓은 벽과 견고한 벽돌로 이루어져 있어, 사진 애호가들의 천국입니다.</p>
        <p><strong>여행 팁:</strong> 케이블카를 타고 올라가서 미끄럼틀을 타고 내려오면 신나고 새로운 경험을 할 수 있습니다. 충분한 물과 자외선 차단제를 가져가고, 산 정상에서는 바람이 강할 수 있으니 따뜻하게 입으세요. 성수기에는 온라인으로 미리 표를 구매하면 줄을 서지 않아도 됩니다.</p>

        <h3>천단 공원</h3>
        <p>천단은 명청 시대 황제들이 하늘을 숭배하고 풍년을 기원하던 곳입니다. 그 건축 배치는 "둥근 하늘과 네모난 땅"이라는 고대 우주관에 따라 엄격하게 설계되었습니다. 기년전은 단지의 핵심으로, 정교한 건축 기술로 유명합니다.</p>
        <p><strong>여행 팁:</strong> 이른 아침에 방문하여 지역 주민들이 운동하는 모습을 보고 진정한 베이징 생활을 체험하세요. 공원이 넓으니, 루트를 계획하고 편안한 신발을 신으세요. 회음벽과 삼음석은 흥미로운 음향 효과가 있어 경험할 가치가 있습니다.</p>

        <h3>이화원</h3>
        <p>가장 완벽한 황제 정원으로, 이화원은 쿤밍 호수와 완수 산을 기반으로, 남방 정원의 정교함과 북방 정원의 웅장함을 결합했습니다. 장랑, 불향각, 석선 등의 명소는 각기 특색이 있으며, 사계절 내내 매혹적인 경치를 자랑합니다.</p>
        <p><strong>여행 팁:</strong> 공원 면적이 넓으니, 방문에 반나절을 할애하세요. 배를 타고 호수 경치를 즐기는 것을 고려해보세요, 특히 여름 연꽃이 피는 시기에는 장관입니다. 북궁문으로 들어가서 동궁문으로 나오는 것이 주요 명소를 커버하는 클래식 루트입니다.</p>
        `
      }
    ]
  },
  ru: {
    title: 'Пекин - Столица',
    subtitle: 'Древность и современность переплетаются в восточной имперской столице',
    sections: [
      {
        title: 'Первые впечатления',
        content: `
        <p>Пекин, город с более чем 3000-летней историей и 800-летней историей в качестве столицы, был свидетелем исторических изменений Китая на протяжении тысячелетий. Как столица Китая, он сочетает в себе как величественные древние архитектурные памятники, такие как Запретный город, Храм Неба и Летний дворец, так и современные архитектурные чудеса, такие как Птичье гнездо и Водный куб, идеально сочетая древние и современные элементы.</p>
        <p>Прогуляйтесь по пекинским хутунам и дворам, чтобы ощутить традиционный образ жизни старого Пекина; посетите оживленные торговые районы, такие как Ванфуцзин и Саньлитунь, чтобы почувствовать современную энергию этого мегаполиса. Пекин — город, который очаровывает посетителей и ждет вашего исследования.</p>
        `
      },
      {
        title: 'Обзор основной информации',
        content: `
        <p><strong>Лучшее время для посещения:</strong> Весна (апрель-май) и осень (сентябрь-октябрь) имеют приятный климат, идеально подходящий для туризма.</p>
        <p><strong>Климатические особенности:</strong> Четыре четко выраженных сезона, с короткой весной и осенью, более длинным летом и зимой. Лето жаркое и дождливое, зима холодная и сухая.</p>
        <p><strong>Способы передвижения:</strong> Метро — самый удобный способ осмотра Пекина, охватывающий большинство достопримечательностей. Такси имеют разумные цены, но могут столкнуться с пробками, в то время как общие велосипеды подходят для коротких поездок.</p>
        <p><strong>Рекомендуемая продолжительность визита:</strong> Полный тур по Пекину требует 5-7 дней, при этом для основных достопримечательностей необходимо не менее 3 дней.</p>
        <p><strong>Уровень стоимости:</strong> Стоимость жизни в Пекине относительно высока по сравнению с другими китайскими городами, но все еще выгодна по сравнению с международными мегаполисами.</p>
        `
      },
      {
        title: 'Обязательные к посещению достопримечательности',
        content: `
        <h3>Запретный город (Музей Гугун)</h3>
        <p>Как крупнейший и наиболее хорошо сохранившийся деревянный древний архитектурный комплекс в мире, Запретный город был императорским дворцом династий Мин и Цин, в котором насчитывается около 9000 комнат. Здесь хранятся бесчисленные драгоценные культурные реликвии, и это лучшее место для понимания древней императорской истории и культуры Китая.</p>
        <p><strong>Советы путешественникам:</strong> Выделите 4-6 часов на посещение, заранее забронируйте билеты онлайн и избегайте выходных и праздников. Классический маршрут — войти через ворота Умэнь и выйти через ворота Шэньу. Рассмотрите возможность аренды аудиогида, чтобы узнать больше исторических деталей.</p>

        <h3>Великая Китайская стена в Бадалине</h3>
        <p>Как наиболее представительный участок Великой стены, история строительства Великой стены в Бадалине восходит к династии Мин. С крутыми горами и красивыми пейзажами, это идеальное место, чтобы почувствовать дух "Не побывал на Великой стене — не настоящий герой".</p>
        <p><strong>Советы путешественникам:</strong> Воспользуйтесь линией S2 или туристическим автобусом, избегая пиковых периодов в праздничные дни. Рассмотрите возможность подняться на канатной дороге и спуститься пешком, экономя энергию, при этом полностью наслаждаясь пейзажем. Будьте осторожны с обледенелыми ступенями зимой.</p>

        <h3>Великая Китайская стена в Мутяньюй</h3>
        <p>Великая стена в Мутяньюй является одним из наиболее хорошо сохранившихся участков, известным своими уникальными, особенными и крутыми характеристиками. Стена извивается среди крутых гор, с широкими стенами и прочными кирпичами, что делает ее раем для энтузиастов фотографии.</p>
        <p><strong>Советы путешественникам:</strong> Поднимитесь на канатной дороге и спуститесь на тобоггане для захватывающих и новых впечатлений. Возьмите с собой достаточное количество воды и солнцезащитных средств, и обратите внимание, что на вершине может быть ветрено, так что одевайтесь тепло. Покупайте билеты онлайн заранее в высокий сезон, чтобы избежать очередей.</p>

        <h3>Парк Храма Неба</h3>
        <p>Храм Неба был местом, где императоры династий Мин и Цин поклонялись небу и молились о хорошем урожае. Его архитектурная планировка строго следует древнему космическому взгляду на "круглое небо и квадратную землю". Зал Молитвы за Хороший Урожай является ядром комплекса, известным своим изысканным архитектурным мастерством.</p>
        <p><strong>Советы путешественникам:</strong> Посетите рано утром, чтобы увидеть местных жителей, занимающихся физическими упражнениями, и испытать подлинную пекинскую жизнь. Парк большой, поэтому планируйте свой маршрут и носите удобную обувь. Стена Эха и Три Звуковых Камня имеют интересные акустические эффекты, которые стоит испытать.</p>

        <h3>Летний дворец</h3>
        <p>Как самый полный императорский сад, Летний дворец основан на озере Куньмин и холме Долголетия, сочетая в себе изящество южных садов с величием северных садов. Длинный коридор, Башня Буддийского Фимиама и Мраморная лодка являются отличительными достопримечательностями с очаровательными пейзажами во все четыре сезона.</p>
        <p><strong>Советы путешественникам:</strong> Парк охватывает большую территорию, поэтому выделите полдня на посещение. Рассмотрите возможность прокатиться на лодке, чтобы насладиться видами озера, особенно зрелищными, когда цветут лотосы летом. Классический маршрут — войти через Северные ворота дворца и выйти через Восточные ворота дворца, охватывая основные достопримечательности.</p>
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