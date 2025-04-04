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
        <p><strong>Caractéristiques climatiques :</strong> Quatre saisons distinctes, avec printemps et automne courts, été et hiver plus longs. Les étés sont chauds et humides, les hivers froids et humides, tandis que le printemps et l'automne sont agréables.</p>
        <p><strong>Moyens de transport :</strong> Le métro est le moyen le plus pratique pour visiter Pékin, desservant la plupart des attractions ; un système de bus complet ; des taxis et services de covoiturage pratiques ; et des options de bateau pour les déplacements entre certaines zones pittoresques.</p>
        <p><strong>Durée de visite recommandée :</strong> Une exploration approfondie de Pékin nécessite 4-5 jours, tandis qu'au moins 2-3 jours sont nécessaires pour les principales attractions.</p>
        <p><strong>Niveau de coût :</strong> En tant que ville de premier rang, Pékin a un coût de vie relativement élevé, mais avec des variations significatives entre les zones. Le Bund, Nanjing Road et autres quartiers commerciaux sont plus chers, tandis que les zones ordinaires sont plus abordables.</p>
        `
      },
      {
        title: "Attractions Incontournables",
        content: `
        <h3>La Cité Interdite (Musée du Palais)</h3>
        <p>En tant que plus grand complexe de bâtiments anciens en bois du monde et le mieux préservé, la Cité Interdite était le palais impérial des dynasties Ming et Qing, abritant près de 9 000 pièces. Elle contient d'innombrables reliques culturelles précieuses et constitue le meilleur endroit pour comprendre l'histoire et la culture impériales anciennes de la Chine.</p>
        <p><strong>Conseils de voyage :</strong> Prévoyez 4-6 heures pour une visite, réservez vos billets en ligne à l'avance et évitez les week-ends et jours fériés. L'itinéraire classique consiste à entrer par la porte Méridienne et sortir par la porte Shenwu. Pensez à louer un audioguide pour en apprendre davantage sur les détails historiques.</p>

        <h3>La Grande Muraille à Badaling</h3>
        <p>En tant que section la plus représentative de la Grande Muraille, l'histoire de la construction de la Grande Muraille de Badaling remonte à la dynastie Ming. Avec ses montagnes escarpées et ses beaux paysages, c'est l'endroit parfait pour ressentir l'esprit de "Celui qui n'est jamais allé sur la Grande Muraille n'est pas un vrai homme".</p>
        <p><strong>Conseils de voyage :</strong> Prenez la ligne S2 ou un bus touristique, en évitant les périodes de pointe des jours fériés. Envisagez de prendre le téléphérique pour monter et de descendre à pied, économisant ainsi de l'énergie tout en appréciant pleinement le paysage. Attention aux marches glacées en hiver.</p>

        <h3>La Grande Muraille à Mutianyu</h3>
        <p>La Grande Muraille de Mutianyu est l'une des sections les mieux préservées, connue pour ses caractéristiques uniques, spéciales et escarpées. Le mur serpente à travers des montagnes abruptes, avec des murs larges et des briques solides, ce qui en fait un paradis pour les amateurs de photographie.</p>
        <p><strong>Conseils de voyage :</strong> Montez en téléphérique et descendez en toboggan pour une expérience excitante et nouvelle. Apportez suffisamment d'eau et une protection solaire, et notez qu'il peut être venteux au sommet, alors habillez-vous chaudement. Achetez des billets en ligne à l'avance pendant la haute saison pour éviter les files d'attente.</p>

        <h3>Le Parc du Temple du Ciel</h3>
        <p>Le Temple du Ciel était l'endroit où les empereurs des dynasties Ming et Qing vénéraient le ciel et priaient pour de bonnes récoltes. Sa disposition architecturale suit strictement la vision cosmique ancienne du "ciel rond et terre carrée". La Salle de Prière pour les Bonnes Récoltes est le cœur du complexe, réputée pour son artisanat architectural exquis.</p>
        <p><strong>Conseils de voyage :</strong> Visitez tôt le matin pour voir les habitants faire de l'exercice et découvrir la vie authentique de Pékin. Le parc est grand, alors planifiez votre itinéraire et portez des chaussures confortables. Le Mur d'Écho et les Trois Pierres Sonores offrent des effets acoustiques intéressants à découvrir.</p>

        <h3>Le Palais d'Été</h3>
        <p>En tant que jardin impérial le plus complet, le Palais d'Été s'articule autour du lac Kunming et de la colline de la Longévité, combinant la délicatesse des jardins du sud avec la grandeur des jardins du nord. Le Long Corridor, la Tour de l'Encens Bouddhiste et le Bateau de Marbre sont des attractions distinctives offrant des paysages enchanteurs en toutes saisons.</p>
        <p><strong>Conseils de voyage :</strong> Le parc couvre une grande superficie, prévoyez donc une demi-journée pour votre visite. Envisagez de prendre un bateau pour profiter des vues sur le lac, particulièrement spectaculaires lorsque les fleurs de lotus s'épanouissent en été. L'itinéraire classique consiste à entrer par la Porte Nord du Palais et à sortir par la Porte Est du Palais, couvrant les principales attractions.</p>
        `
      },
      {
        title: "Expériences Uniques",
        content: `
        <h3>Exploration de la Culture des Hutongs</h3>
        <p>Les hutongs de Pékin portent le mode de vie et les souvenirs culturels de l'ancien Pékin. Les quartiers de Nanluoguxiang, Shichahai et Qianmen Dashilan ont préservé des caractéristiques relativement intactes des hutongs, ce qui en fait d'excellents endroits pour découvrir la vie traditionnelle de Pékin.</p>
        <p><strong>Activités recommandées :</strong> Faites un tour en tricycle à travers les hutongs, visitez des maisons à cour carrée, goûtez aux collations de l'ancien Pékin, interagissez avec les résidents locaux et découvrez l'authentique culture pékinoise.</p>

        <h3>Expérience de l'Opéra de Pékin</h3>
        <p>Les opéras traditionnels comme l'Opéra de Pékin et l'Opéra Ping sont des composantes importantes de la culture pékinoise. Des lieux comme le Grand Théâtre Mei Lanfang et le Grand Théâtre Chang'an accueillent régulièrement des représentations d'opéra traditionnel, offrant des fenêtres sur l'art traditionnel chinois.</p>
        <p><strong>Activités recommandées :</strong> Assistez à une authentique représentation d'Opéra de Pékin, découvrez la signification des masques faciaux, essayez le maquillage d'opéra et interagissez avec des artistes pour apprendre des techniques de chant simples et des gestes manuels.</p>

        <h3>798 Art District</h3>
        <p>Autrefois zone d'usines industrielles transformée en centre d'art contemporain, le District Artistique 798 rassemble des galeries, des studios d'art, des entreprises de design, des restaurants et des magasins de mode, montrant la vitalité créative et l'atmosphère artistique de Pékin.</p>
        <p><strong>Activités recommandées :</strong> Visitez diverses expositions d'art avant-gardiste, interagissez avec des artistes, détendez-vous dans des cafés de style industriel et achetez des produits dérivés artistiques uniques comme souvenirs.</p>

        <h3>Activités sur Glace à Shichahai</h3>
        <p>En hiver, le Shichahai gelé se transforme en patinoire naturelle où les habitants pratiquent le patinage sur glace, les jeux de glace et les voitures de glace, créant un paysage culturel unique spécifique aux hivers pékinois.</p>
        <p><strong>Activités recommandées :</strong> Louez des patins ou des voitures de glace pour découvrir les activités traditionnelles sur glace, goûtez aux collations d'hiver comme les brochettes de fruits confits, et admirez le pont Yinding couvert de neige avec vue sur le Shichahai gelé.</p>
        `
      },
      {
        title: "Guide Culinaire",
        content: `
        <h3>Canard Laqué de Pékin</h3>
        <p>En tant que cuisine la plus célèbre de Pékin, le canard laqué est connu pour sa peau croustillante, sa viande tendre et sa couleur rouge vif. Des restaurants comme Quanjude, Da Dong et Liqun ont chacun leurs spécialités, offrant d'authentiques expériences de dégustation du canard de Pékin.</p>
        <p><strong>Suggestions de dégustation :</strong> La façon traditionnelle consiste à envelopper la viande de canard, les oignons verts et la sauce aux haricots sucrée dans de fines crêpes. Essayez également la soupe de canard et le riz frit avec de la viande de canard pour utiliser chaque partie du canard.</p>

        <h3>Collations de l'Ancien Pékin</h3>
        <p>Des collations comme le douzhi (jus fermenté de haricot mungo), aiwowo (gâteaux de riz cuits à la vapeur), tanghulu (pommes d'amour), ludagun (rouleaux de riz gluant) et chaogan (foie frit) portent un héritage historique et culturel profond, offrant d'authentiques saveurs pékinoises.</p>
        <p><strong>Lieux recommandés :</strong> La boutique de collations Huguosi, la rue des collations de Nanluoguxiang et la pâtisserie Tianqiao Yangji sont d'excellents endroits pour goûter aux authentiques collations de l'ancien Pékin. Chaque collation a une histoire intéressante qui mérite d'être connue.</p>

        <h3>Fondue Chinoise</h3>
        <p>La fondue chinoise de Pékin est originaire de la dynastie Yuan, proposant des tranches fines d'agneau rapidement cuites dans de l'eau bouillante et mangées avec une sauce. Les anciens restaurants comme Donglaishun et Nanlaishun maintiennent des techniques traditionnelles et des saveurs authentiques.</p>
        <p><strong>Suggestions de dégustation :</strong> Les fondues traditionnelles utilisent des pots en cuivre et du feu de charbon de bois, avec une sauce composée de pâte de sésame, de fleurs de poireau et de coriandre. L'hiver est la meilleure période pour déguster la fondue, à la fois réchauffante et délicieuse.</p>

        <h3>Cuisine Impériale</h3>
        <p>La cuisine de la cour impériale est connue pour sa préparation exquise et son principe de "légère mais pas mince, riche mais pas grasse". Des restaurants comme Ziguang Ge et Fengzeyuan offrent d'authentiques expériences de cuisine impériale.</p>
        <p><strong>Plats signatures :</strong> Des plats comme le cochon entier rôti, la tripe dorée, la queue de cerf braisée et les lèvres de poisson cuites à la vapeur mettent en valeur les compétences exquises au couteau et le contrôle de la température qui illustrent la culture alimentaire impériale.</p>
        `
      },
      {
        title: "Aperçu Culturel et Historique",
        content: `
        <h3>Évolution Historique de la Capitale Impériale</h3>
        <p>Pékin a servi de capitale pour cinq dynasties—Liao, Jin, Yuan, Ming et Qing—avec son aménagement urbain et ses dépôts culturels profondément liés à l'histoire chinoise. La disposition de l'axe central de la ville reflète le concept philosophique chinois ancien de "l'unité entre le ciel et l'homme".</p>
        <p><strong>Contexte historique :</strong> De Yuan's Dadu à Ming et Qing's Beijing, l'urbanisme présente une structure carrée concentrique, avec la Cité Interdite au cœur de l'axe central, reflétant l'idée féodale de "suprématie du pouvoir impérial".</p>

        <h3>Saveur Culturelle de Pékin</h3>
        <p>La culture pékinoise est la culture régionale unique de la ville, incluant le dialecte pékinois, l'opéra et les activités populaires. Regarder des spectacles de crosstalk, visiter des foires de temples et faire voler des cerfs-volants sont des fenêtres pour découvrir la culture pékinoise.</p>
        <p><strong>Caractéristiques culturelles :</strong> Les Pékinois mettent l'accent sur la "bienséance", valorisent la face, ont un langage humoristique et sont serviables—ces qualités forment collectivement l'essence de la culture pékinoise.</p>

        <h3>Art Architectural</h3>
        <p>L'art architectural de Pékin est représenté par les bâtiments palatins, les structures de jardins et l'architecture religieuse, montrant collectivement l'artisanat superbe et les concepts esthétiques de l'architecture chinoise traditionnelle.</p>
        <p><strong>Caractéristiques architecturales :</strong> Accent sur la symétrie, la hiérarchie et le symbolisme des couleurs; structures à cadre en bois flexibles et robustes; coins relevés et avant-toits volants à la fois beaux et pratiques, reflétant la sagesse de l'architecture chinoise ancienne.</p>

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
    title: 'Shanghai: El Encanto de la Perla de Oriente',
    subtitle: 'Una metrópolis internacional donde se fusionan las culturas moderna y tradicional',
    sections: [
      {
        title: 'Primeras Impresiones',
        content: `
        <p>Shanghai, el mayor centro económico de China, combina la prosperidad de una metrópolis moderna con el encanto de la China tradicional. Desde la exposición arquitectónica internacional en el Bund hasta los modernos rascacielos del horizonte de Lujiazui, desde los jardines tradicionales de Yu Garden hasta la vida cotidiana en el casco antiguo, Shanghai presenta un paisaje urbano diverso y rico.</p>
        <p>Como ventana de la reforma y apertura de China, Shanghai muestra los impresionantes logros de la modernización de China mientras preserva su profunda herencia histórica y cultural. Caminando por las calles de Shanghai, se pueden ver edificios de la época colonial y modernos rascacielos en lados opuestos de la misma calle, experimentando el único sentido de superposición temporal de la ciudad.</p>
        `
      },
      {
        title: 'Información Básica',
        content: `
        <p><strong>Mejor época para visitar:</strong> La primavera (marzo-mayo) y el otoño (septiembre-noviembre) tienen temperaturas agradables, lo que las convierte en las temporadas ideales para visitar Shanghai.</p>
        <p><strong>Características climáticas:</strong> Clima monzónico subtropical con estaciones bien diferenciadas. Los veranos son calurosos y húmedos, los inviernos son fríos y húmedos, mientras que la primavera y el otoño son agradables.</p>
        <p><strong>Métodos de transporte:</strong> Shanghai tiene una red de metro bien desarrollada que cubre las principales atracciones; un sistema integral de autobuses; convenientes taxis y servicios de viajes compartidos; y opciones de barco para viajar entre algunas áreas escénicas.</p>
        <p><strong>Duración recomendada de la visita:</strong> Una exploración a fondo de Shanghai requiere 4-5 días, mientras que se necesitan al menos 2-3 días para las principales atracciones.</p>
        <p><strong>Nivel de costo:</strong> Como ciudad de primer nivel, Shanghai tiene un costo de vida relativamente alto, pero con variaciones significativas entre áreas. El Bund, Nanjing Road y otros distritos comerciales son más caros, mientras que las áreas regulares son más asequibles.</p>
        `
      },
      {
        title: 'Atracciones Imprescindibles',
        content: `
        <h3>El Bund</h3>
        <p>El Bund es el punto de referencia icónico de Shanghai, con 52 diversos edificios históricos a lo largo del río Huangpu, conocido como la "Exposición de Arquitectura Internacional", que han sido testigos de un siglo de historia moderna de Shanghai. Frente a los modernos rascacielos de Lujiazui de Pudong al otro lado del río, presenta el sorprendente contraste de Shanghai entre "lo viejo y lo nuevo".</p>
        <p><strong>Consejos de viaje:</strong> Es mejor visitarlo al atardecer o por la noche para apreciar el espectáculo de luces de neón de Pudong. Las multitudes son comunes, así que vigile sus pertenencias. El área del Bund alberga muchos hoteles y restaurantes de lujo donde puede cenar mientras disfruta de hermosas vistas.</p>

        <h3>Jardín Yu y Ciudad Vieja</h3>
        <p>El Jardín Yu, construido durante la dinastía Ming, es una obra representativa de los jardines clásicos de la región de Jiangnan, con pabellones, salas, roquedales y estanques intrincadamente dispuestos. El área circundante de la Ciudad Vieja preserva la atmósfera tradicional de Shanghai y es un gran lugar para probar la auténtica cocina de Shanghai y comprar artesanías tradicionales.</p>
        <p><strong>Consejos de viaje:</strong> Es mejor visitar el Jardín Yu entre semana para evitar las multitudes del fin de semana. El Pabellón del Lago Medio, la Roca de Jade y el Gran Roquedal son lugares populares para fotografiar. El Festival de los Faroles del Jardín Yu durante el Año Nuevo Chino es la celebración tradicional más importante de Shanghai, pero espere multitudes masivas.</p>

        <h3>Calle Peatonal de Nanjing Road</h3>
        <p>Nanjing Road es una de las calles comerciales más famosas de China, que combina compras, restaurantes y entretenimiento. Reúne tiendas tradicionales centenarias y centros comerciales modernos, desde establecimientos centenarios como Lao Feng Xiang y Wang Bao He hasta marcas internacionales modernas, satisfaciendo diversas necesidades de compra.</p>
        <p><strong>Consejos de viaje:</strong> Nanjing Road está dividida en secciones este y oeste; la sección este es una calle peatonal, mientras que la sección oeste es un área comercial de alta gama. El tranvía de estilo antiguo es una característica aquí, ofreciendo una vista panorámica de toda la calle peatonal. Nanjing Road de noche, con sus luces de neón parpadeantes, tiene un encanto especial.</p>

        <h3>Museo de Shanghai</h3>
        <p>Ubicado en la Plaza del Pueblo, el Museo de Shanghai es un museo de arte antiguo de primera clase en China, que alberga más de 120,000 artefactos preciosos desde la Edad Neolítica hasta las dinastías Ming y Qing, siendo los vasos de bronce, la cerámica, la caligrafía y las pinturas las cuatro colecciones más destacadas.</p>
        <p><strong>Consejos de viaje:</strong> El Museo de Shanghai ofrece entrada gratuita pero requiere reservaciones anticipadas. Reserve al menos medio día para su visita. Hay audioguías disponibles para alquilar en chino e inglés. Cada piso tiene exposiciones temáticas que puede visitar según sus intereses.</p>

        <h3>Distrito Financiero de Lujiazui</h3>
        <p>Como centro financiero de Shanghai, Lujiazui reúne rascacielos icónicos como la Torre de la Perla Oriental, la Torre Jin Mao, la Torre de Shanghai y el Centro Financiero Mundial de Shanghai, mostrando el paisaje urbano moderno y la fortaleza económica de Shanghai.</p>
        <p><strong>Consejos de viaje:</strong> Puede elegir visitar la plataforma de observación de la Torre de Shanghai (piso 118), el salón de observación de la Torre Jin Mao (piso 88), o el salón de observación del Centro Financiero Mundial (piso 100) para vistas panorámicas de Shanghai. El corredor de observación suspendido transparente de la Perla Oriental también es una emocionante experiencia en altura. Las vistas del río Huangpu después del atardecer son particularmente espectaculares.</p>
      `
      },
      {
        title: 'Experiencias Únicas',
        content: `
        <h3>Encontrando el Viejo Shanghai en la Antigua Concesión Francesa</h3>
        <p>La antigua Concesión Francesa es ahora el área más exótica de Shanghai, preservando numerosas villas con jardín y edificios shikumen de las décadas de 1920 y 1930. Las calles bordeadas de plátanos, los edificios de estilo antiguo y las boutiques a lo largo de Wukang Road, Fuxing Road y Huaihai Road muestran la combinación única de historia y moda de Shanghai.</p>
        <p><strong>Actividades recomendadas:</strong> Pasee bajo los plátanos de Wukang Road, visite la Residencia Memorial del ex-hogar de Sun Yat-sen, relájese en cafés convertidos de antiguas villas, y explore las ex-residencias de personas famosas en Sinan Road—todas excelentes maneras de experimentar el ambiente del Viejo Shanghai.</p>

        <h3>Crucero Nocturno por el Río Huangpu</h3>
        <p>Hacer un crucero por el río Huangpu es la mejor manera de disfrutar de la vista nocturna de Shanghai. Desde el barco, puede ver las deslumbrantes luces en ambas orillas—los edificios históricos del Bund en un lado y los modernos rascacielos que simbolizan el futuro en el otro—mostrando completamente el encanto de Shanghai.</p>
        <p><strong>Actividades recomendadas:</strong> Elija un crucero después de las 8 PM cuando todas las luces en ambas orillas están encendidas, ofreciendo las vistas más espectaculares. Hay disponibles tanto cruceros regulares como cruceros con cena, con viajes que duran aproximadamente una hora. El embarque desde el Muelle Shiliupu o el Muelle del Puente Nanpu es lo más conveniente.</p>

        <h3>Experiencia de la Vida en los Callejones de Shanghai</h3>
        <p>Los callejones (longtang) son una forma residencial única en Shanghai, con arquitectura shikumen y vida de callejón llevando los recuerdos de generaciones de residentes de Shanghai. Áreas como Tianzifang y Xintiandi preservan el estilo arquitectónico de estos callejones mientras les infunden elementos artísticos y comerciales modernos.</p>
        <p><strong>Actividades recomendadas:</strong> Tianzifang alberga numerosos estudios creativos y tiendas especializadas donde puede comprar obras de diseñadores; Xintiandi combina gastronomía, moda y arte; mientras que antiguas ciudades como Zhujiajiao y Qibao preservan estilos de vida más auténticos de las ciudades acuáticas de Jiangnan, todas dignas de visitar.</p>

        <h3>Exploración de Moda y Arte de Shanghai</h3>
        <p>Como capital de la moda de China, Shanghai cuenta con numerosos lugares de arte contemporáneo y centros de diseño. Desde el Centro de Arte West Bund hasta el Parque Creativo M50, desde el Museo de Arte Contemporáneo de Shanghai hasta el Museo Yuz, muestran la próspera ecología del arte contemporáneo de Shanghai.</p>
        <p><strong>Actividades recomendadas:</strong> Visite las exposiciones vanguardistas en el Museo de Arte Contemporáneo de Shanghai, aprenda sobre tendencias artísticas internacionales en el Centro de Arte West Bund, interactúe con artistas en el Parque Creativo M50, y sienta la vibrante atmósfera artística de Shanghai. La Semana de Arte de Shanghai anual en noviembre es un festín para los entusiastas del arte.</p>
        `
      },
      {
        title: 'Guía Culinaria',
        content: `
        <h3>Cocina de Shanghai (Cocina Benbang)</h3>
        <p>La cocina Benbang es el estilo culinario tradicional de Shanghai, conocido por preservar los sabores originales de los ingredientes, con un gusto ligeramente dulce y técnicas refinadas. El cerdo estofado en salsa roja, el cangrejo de río al vapor, el pato de ocho tesoros y la pasta de anguila crujiente son platos clásicos de Benbang. Restaurantes honorables como Song He Lou, Lao Zheng Xing y De Xing Guan son lugares auténticos para probar la cocina tradicional de Shanghai.</p>
        <p><strong>Sugerencias para degustar:</strong> La cocina Benbang enfatiza ingredientes de temporada, como cangrejos peludos en otoño y bolas de masa rellenas de sopa de huevas de cangrejo en invierno. Acompañar la comida con una pequeña cantidad de vino de arroz amarillo puede resaltar mejor el sabor de los platos Benbang.</p>

        <h3>Aperitivos Especiales de Shanghai</h3>
        <p>Shanghai ofrece una amplia variedad de aperitivos especiales, desde desayunos como bollos fritos, xiaolongbao (bollos de sopa), churros chinos y leche de soja, hasta comidas callejeras como pasteles de concha de cangrejo, fideos con aceite de cebollín, shumai y pasteles de arroz glutinoso, todos reflejando la refinada búsqueda gastronómica de los shanghaineses.</p>
        <p><strong>Lugares recomendados:</strong> Famosos aperitivos de Shanghai incluyen Shen Da Cheng en Nanjing Road, el Restaurante de Bollos al Vapor Nanxiang en el Templo del Dios de la Ciudad, y cordero en rodajas en Zhujiajiao. La Calle Gastronómica de Liuzhou en el Distrito Huangpu y la Calle Gastronómica de la Vieja Puerta Oeste también reúnen numerosos aperitivos auténticos.</p>

        <h3>Cocina Jiangzhe y Platos Fusión de Shanghai</h3>
        <p>Debido a su proximidad con las regiones de Jiangsu y Zhejiang, la cocina de Shanghai está profundamente influenciada por la cocina Jiangzhe, con platos ligeros y frescos de las ciudades acuáticas de Jiangnan encontrados por toda la ciudad. En los últimos años, ha surgido la cocina fusión de Shanghai, combinando elementos orientales y occidentales para crear muchos platos innovadores.</p>
        <p><strong>Sugerencias para degustar:</strong> El pescado dragón dorado, el pescado del Lago Oeste en salsa de vinagre y la sopa de cerdo salado con verduras frescas son sabores típicos de Jiangzhe; mientras que nuevos restaurantes como Jesse en Tianping Road y 1886 ofrecen innovadora cocina fusión de Shanghai que vale la pena probar.</p>

        <h3>Colección Culinaria Global</h3>
        <p>Como metrópolis internacional, Shanghai reúne cocinas de todo el mundo. Desde la cocina francesa, italiana y japonesa hasta diversas cocinas regionales chinas, casi todos los estilos culinarios conocidos se pueden encontrar en restaurantes de alto nivel en Shanghai. El Bund, Huaihai Road y las áreas de Xintiandi son centros para restaurantes de alta gama.</p>
        <p><strong>Restaurantes representativos:</strong> M on the Bund en Three on the Bund, Sinan Mansions en Sinan Road, y Xintiandi en Huaihai Road albergan numerosos restaurantes internacionales de calidad, añadiendo una experiencia gastronómica internacional a Shanghai.</p>
        `
      },
      {
        title: 'Perspectivas Culturales',
        content: `
        <h3>El Surgimiento y Desarrollo del Shanghai Moderno</h3>
        <p>La transformación de Shanghai de un pequeño pueblo pesquero a una metrópolis internacional está estrechamente vinculada con la historia moderna de China. Después de convertirse en un puerto de tratado en 1843, Shanghai creció rápidamente hasta convertirse en el mayor puerto comercial y centro financiero del Extremo Oriente. El establecimiento de concesiones extranjeras hizo de Shanghai una frontera de colisión cultural Este-Oeste, dejando un rico patrimonio de edificios históricos y culturales.</p>
        <p><strong>Contexto histórico:</strong> Desde la firma del Tratado de Nanjing hasta la formación de concesiones, desde la prosperidad del asentamiento extranjero de diez millas hasta las heridas de la guerra, y luego al desarrollo después de la fundación de la Nueva China y el rápido crecimiento desde la reforma y apertura, la historia de Shanghai refleja el proceso de modernización de China.</p>

        <h3>Cultura Haipai</h3>
        <p>La cultura Haipai es la cultura regional única de Shanghai, caracterizada por apertura, innovación e inclusividad. Desde la literatura Haipai, la pintura Haipai hasta el teatro Haipai y el cine Haipai, varias formas de arte se han fusionado en Shanghai y han irradiado un encanto distintivo.</p>
        <p><strong>Características culturales:</strong> Los shanghaineses valoran el refinamiento y la moda, abogan por la racionalidad pragmática y sobresalen en absorber la esencia de varias fuentes para crear nuevas expresiones culturales, formando un estilo de vida y valores Haipai distintivos.</p>

        <h3>Cultura de Ciudades Acuáticas de Jiangnan</h3>
        <p>A pesar de la rápida modernización, Shanghai todavía conserva el patrimonio cultural de las ciudades acuáticas de Jiangnan. Desde la arquitectura de jardines hasta las costumbres dietéticas, desde características dialectales hasta artes populares, la influencia de la cultura de Jiangnan es evidente en todas partes.</p>
        <p><strong>Características regionales:</strong> Ciudades antiguas alrededor de Shanghai como Zhujiajiao, Qibao y Fengjing preservan paisajes relativamente completos de ciudades acuáticas de Jiangnan, con pequeños puentes, aguas fluyentes, paredes blancas y techos de tejas negras llevando ricas connotaciones históricas y culturales.</p>

        <h3>Innovación Cultural Contemporánea en Shanghai</h3>
        <p>El Shanghai de hoy está construyéndose activamente como un centro global para la creatividad cultural. Desde el Festival Internacional de Cine de Shanghai, la Feria de Arte de Shanghai hasta la Semana de la Moda de Shanghai, desde distritos de arte contemporáneo hasta centros de diseño, Shanghai está liderando la tendencia de innovación cultural china en varios campos.</p>
        <p><strong>Tendencias de desarrollo:</strong> Una característica notable del desarrollo cultural de Shanghai es el enfoque en combinar industrias creativas culturales con renovación urbana, convirtiendo edificios históricos en espacios creativos e inyectando vitalidad moderna mientras se protege la cultura tradicional.</p>
        `
      }
    ]
  },
  ja: {
    title: "上海：東方明珠の魅力",
    subtitle: "現代と伝統が融合する国際都市",
    sections: [
      {
        title: "第一印象",
        content: `
        <p>中国最大の経済センターである上海は、現代都市の繁栄と伝統的な中国の魅力を兼ね備えています。外灘の国際建築博覧会から陸家嘴の現代的な高層ビル群のスカイライン、豫園の伝統的な庭園から旧市街の日常生活まで、上海は多様で豊かな都市景観を提示しています。</p>
        <p>中国の改革開放の窓として、上海は中国の近代化の印象的な成果を示すと同時に、その深い歴史的・文化的遺産を保存しています。上海の通りを歩くと、同じ道路の反対側に植民地時代の建物と現代の高層ビルを見ることができ、この都市特有の時間の重なりを体験できます。</p>
        `
      },
      {
        title: "基本情報",
        content: `
        <p><strong>訪問のベストシーズン：</strong> 春（3月〜5月）と秋（9月〜11月）は気温が快適で、上海を訪れるのに理想的な季節です。</p>
        <p><strong>気候特性：</strong> 亜熱帯モンスーン気候で、四季がはっきりしています。夏は暑く湿度が高く、冬は寒く湿っぽく、春と秋は心地よいです。</p>
        <p><strong>交通手段：</strong> 上海は主要な観光スポットをカバーする発達した地下鉄網を持ち、総合的なバスシステム、便利なタクシーや配車サービス、そしていくつかの景勝地間の移動には船のオプションもあります。</p>
        <p><strong>推奨訪問期間：</strong> 上海の詳細な探索には4〜5日が必要ですが、主要な観光スポットには少なくとも2〜3日が必要です。</p>
        <p><strong>コストレベル：</strong> 一級都市として、上海は比較的生活費が高いですが、地域間で大きな差があります。外灘、南京路などの商業地区はより高価ですが、一般地域はより手頃な価格です。</p>
        `
      },
      {
        title: "必見の観光スポット",
        content: `
        <h3>外灘（ワイタン）</h3>
        <p>外灘は上海の象徴的なランドマークで、黄浦江沿いに52の多様な歴史的建造物が立ち並び、「国際建築博覧会」として知られ、上海の近代史の100年を目撃してきました。川の向こう側にある浦東の陸家嘴の現代的な高層ビル群と向かい合い、上海の「古いものと新しいもの」の際立った対比を示しています。</p>
        <p><strong>旅行のヒント：</strong> 浦東のネオンライトショーを鑑賞するために、夕暮れ時や夜に訪れるのがベストです。人混みは一般的なので、所持品に注意してください。外灘エリアには多くの高級ホテルやレストランがあり、美しい景色を楽しみながら食事ができます。</p>

        <h3>豫園と旧市街</h3>
        <p>明王朝時代に建てられた豫園は、江南地方の古典的な庭園の代表作で、複雑に配置された亭、ホール、築山、池があります。周辺の旧市街地区は伝統的な上海の雰囲気を保持し、本格的な上海料理を味わい、伝統工芸品を購入するのに最適な場所です。</p>
        <p><strong>旅行のヒント：</strong> 週末の混雑を避けるため、平日に豫園を訪れるのが最善です。湖心亭、玉石、大型築山は人気の撮影スポットです。中国の旧正月の豫園ランタンフェスティバルは上海で最も伝統的なお祝いですが、大規模な人混みを予想してください。</p>

        <h3>南京路歩行者天国</h3>
        <p>南京路は中国で最も有名な商業街の一つで、ショッピング、ダイニング、エンターテイメントを組み合わせています。老鳳祥や王宝和などの100年以上の歴史を持つ老舗から現代の国際ブランドまで、伝統的な老舗店と現代のショッピングセンターが集まり、さまざまなショッピングニーズを満たしています。</p>
        <p><strong>旅行のヒント：</strong> 南京路は東部と西部のセクションに分かれています。東部セクションは歩行者天国で、西部セクションは高級商業エリアです。旧式の路面電車はここの特徴で、歩行者天国全体のパノラマビューを提供しています。夜の南京路は、点滅するネオンライトで特別な魅力があります。</p>

        <h3>上海博物館</h3>
        <p>人民広場に位置する上海博物館は中国の一流の古代美術館で、新石器時代から明・清王朝までの12万点以上の貴重な工芸品を収蔵し、青銅器、陶磁器、書道、絵画が最も顕著な4つのコレクションです。</p>
        <p><strong>旅行のヒント：</strong> 上海博物館は入場無料ですが、事前予約が必要です。訪問には少なくとも半日を見込んでください。中国語と英語のオーディオガイドがレンタル可能です。各フロアにはテーマ別の展示があり、興味に応じて訪問できます。</p>

        <h3>陸家嘴金融地区</h3>
        <p>上海の金融センターとして、陸家嘴は東方明珠塔、金茂タワー、上海タワー、上海ワールドフィナンシャルセンターなどの象徴的な高層ビルが集まり、上海の現代的な都市景観と経済力を示しています。</p>
        <p><strong>旅行のヒント：</strong> 上海の全景を望むパノラマビューのために、上海タワーの展望台（118階）、金茂タワーの展望ホール（88階）、またはワールドフィナンシャルセンターの展望ホール（100階）を訪れることができます。東方明珠の透明な吊り下げ式展望回廊もスリル満点の高所体験です。日没後の黄浦江の景色は特に壮観です。</p>
        `
      },
      {
        title: "ユニークな体験",
        content: `
        <h3>胡同文化探検</h3>
        <p>北京の胡同は古い北京の生活様式と文化的記憶を担っています. 南鑼鼓巷、什刹海、前門大柵欄エリアは比較的無傷の胡同の特徴を保持しており、伝統的な北京の生活を体験するのに優れた場所です。</p>
        <p><strong>おすすめのアクティビティ：</strong> 三輪車で胡同を回り、四合院を訪問し、古い北京のスナックを味わい、地元の住民と交流して、本物の北京文化を体験してください。</p>

        <h3>京劇体験</h3>
        <p>京劇や評劇などの伝統的な劇は北京文化の重要な構成要素です. メイランファン大劇場や長安大劇場などの会場では定期的に伝統的な劇の公演を開催し、伝統的な中国芸術の窓を提供しています。</p>
        <p><strong>おすすめのアクティビティ：</strong> 本物の京劇の公演を観賞し、顔の隈の意味を学び、劇のメイクを試し、アーティストと交流して簡単な歌唱テクニックと手のジェスチャーを学びましょう。</p>

        <h3>798芸術区</h3>
        <p>かつて工業工場地帯だった場所が現代アートのセンターに変貌し、798芸術区はギャラリー、アートスタジオ、デザイン 会社、レストラン、ファッションストアを集結させ、北京の創造的な活力と芸術的な雰囲気を示しています。</p>
        <p><strong>おすすめのアクティビティ：</strong> さまざまな前衛的なアート展を訪れ、アーティストと交流し、工業的なスタイルのカフェでリラックスし、ユニークな芸術的デリバティブをお土産として購入してください。</p>

        <h3>什刹海の氷上アクティビティ</h3>
        <p>冬には、凍結した什刹海が天然のスケートリンクになり、地元の人々はアイススケート、氷のゲーム、アイスカーを楽しみ、北京の冬特有のユニークな文化的景観を作り出しています。</p>
        <p><strong>おすすめのアクティビティ：</strong> スケートやアイスカーをレンタルして伝統的な氷上アクティビティを体験し、冬のスナック（飴細工など）を味わい、凍結した什刹海を見下ろす雪に覆われた銀錠橋を楽しんでください。</p>
        `
      },
      {
        title: "料理ガイド",
        content: `
        <h3>北京ダック</h3>
        <p>北京で最も有名な料理として、北京ダックはパリッとした皮、柔らかい肉、明るい赤色で知られています。全聚徳、大董、利群などのレストランにはそれぞれ特色があり、本格的な北京ダックの体験を提供しています。</p>
        <p><strong>時食の提案：</strong> 伝統的な方法は、鴨肉、ネギ、甘い豆ソースを薄いパンケーキに包むことです。また、鴨スープと鴨肉入りチャーハンも試して、鴨のすべての部分を活用してください。</p>

        <h3>古い北京のスナック</h3>
        <p>豆汁（発酵した緑豆ジュース）、アイウォウ（蒸し米ケーキ）、糖葫蘆（飴細工のフルーツ）、ルダグン（もち米ロール）、チャオガン（炒めたレバー）などのスナックは、深い歴史的・文化的遺産を持ち、本物の北京の味を提供しています。</p>
        <p><strong>おすすめの場所：</strong> 護国寺小吃店、南鑼鼓巷スナックストリート、天橋楊記餅舗は本格的な北京の伝統的なスナックを味わうのに最適な場所です。各スナックには知る価値のある興味深い歴史的なストーリーがあります。</p>

        <h3>ホットポット</h3>
        <p>北京のホットポットは元朝に起源し、新鮮な羊肉の薄切りを沸騰した水で素早く調理し、ディップソースで食べます。東来順や南来順などの老舗レストランは伝統的な技術と本物の味を維持しています。</p>
        <p><strong>時食の提案：</strong> 伝統的なホットポットは銅鍋と炭火を使用し、ディップソースはゴマペースト、ネギの花、コリアンダーで作られています。冬は温かく美味しいホットポットを楽しむのに最適な季節です。</p>

        <h3>宮廷料理</h3>
        <p>宮廷料理は、その絶妙な調理法と「軽くても薄くなく、豊かでも脂っこくない」という原則で知られています。紫光閣や豊沢園などのレストランでは、本格的な宮廷料理体験を提供しています。</p>
        <p><strong>代表的な料理：</strong> 豚の丸焼き、金色のトリップ、鹿の尾のシチュー、蒸した魚の唇など、宮廷料理文化を示す絶妙な包丁技術と温度管理を誇る料理があります。</p>
        `
      },
      {
        title: "文化的洞察",
        content: `
        <h3>皇帝の都の歴史的発展</h3>
        <p>北京は遼、金、元、明、清の5つの王朝の首都として機能し、その都市レイアウトと文化的な堆積物は中国の歴史と深く絡み合っています。都市の中心軸のレイアウトは、「天と人の統一」という古代中国の哲学的概念を反映しています。</p>
        <p><strong>歴史的背景：</strong> 元の大都から明と清の北京まで、都市計画は同心円状の正方形構造を示し、中心軸の中心に紫禁城があり、「皇帝権力の至上性」という封建的な考えを反映しています。</p>

        <h3>北京の文化的風味</h3>
        <p>北京の文化的風味は、北京の方言、劇、民間活動を含む市の独特の地域文化です。クロストークのパフォーマンスを観賞し、廟会を訪れ、凧を飛ばすことは北京の文化的風味を体験するための窓です。</p>
        <p><strong>文化的特徴：</strong> 北京の人々は「礼儀」を重視し、面子を大切にし、ユーモアのある言語を持ち、助け合う精神を持っています。これらの特質は、集合的に北京の文化的風味の本質を形成しています。</p>

        <h3>建築芸術</h3>
        <p>北京の建築芸術は、宮殿建築、庭園構造、宗教建築によって代表され、伝統的な中国建築の優れた技能と美的概念を集合的に示しています。</p>
        <p><strong>建築的特徴：</strong> 対称性、階層性、色のシンボリズムの強調。柔軟で堅牢な木造フレーム構造。美しく実用的な反り返った角と飛び出した軒、古代中国建築の知恵を反映しています。</p>

        <h3>無形文化遺産</h3>
        <p>北京には、景泰藍、内画鼻煙壺、北京刺繍、飴細工など多くの無形文化遺産項目があり、京劇や評劇などの伝統的な舞台芸術もあります。</p>
        <p><strong>保存の取り組み：</strong> 北京民俗博物館を訪れて伝統文化について学ぶか、潘家園や琉璃廠文化街を訪れて伝統工芸品を見つけ、無形遺産の継続をサポートしてください。</p>
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
    title: 'Пекин - столица',
    subtitle: 'Древность и современность переплетаются в восточной императорской столице',
    sections: [
      {
        title: 'Первые впечатления',
        content: `
        <p>Пекин имеет более 3000 лет городской истории и более 800 лет истории как столица, став свидетелем изменений в китайской истории на протяжении тысячелетий. Как столица Китая, он сочетает великолепные древние архитектурные сооружения, такие как Запретный город, Храм Неба, Летний дворец, и современные архитектурные чудеса, такие как Птичье гнездо и Водяная капля, с идеальным переплетением древних и современных элементов.</p>
        <p>Прогуляйтесь по хутунам и сыхэюаням Пекина, чтобы ощутить традиционный пекинский образ жизни, и бродите по оживленным коммерческим районам, таким как Ванфуцзин и Саньлитунь, чтобы почувствовать современную энергию этого мегаполиса. Пекин - это город, который очаровывает посетителей и ждет вашего исследования.</p>
        `
      },
      {
        title: 'Основная информация',
        content: `
        <p><strong>Лучшее время для посещения:</strong> Весна (апрель-май) и осень (сентябрь-октябрь) с приятным климатом идеальны для туризма.</p>
        <p><strong>Климатические характеристики:</strong> Ярко выраженные четыре сезона, с короткой весной и осенью, но длинным летом и зимой. Летом жаркое и дождливое, а зимой холодное и сухое.</p>
        <p><strong>Транспорт:</strong> Метро - самый удобный способ передвижения по Пекину, охватывающий большинство достопримечательностей. Такси доступны по цене, но могут столкнуться с пробками; прокат велосипедов подходит для коротких поездок.</p>
        <p><strong>Рекомендуемая продолжительность пребывания:</strong> 5-7 дней необходимо для полного осмотра Пекина, минимум 3 дня для основных достопримечательностей.</p>
        <p><strong>Уровень затрат:</strong> Стоимость жизни в Пекине относительно высока по сравнению с другими китайскими городами, но все еще выгоднее, чем в международных мегаполисах.</p>
        `
      },
      {
        title: 'Обязательные достопримечательности',
        content: `
        <h3>Запретный город (Гугун)</h3>
        <p>Как самый большой и хорошо сохранившийся древний деревянный архитектурный комплекс в мире, Запретный город был императорским дворцом династий Мин и Цин, насчитывающим около 9000 комнат. Здесь хранится множество ценных культурных реликвий, и это лучшее место, чтобы понять историю и культуру древнего китайского императорского двора.</p>
        <p><strong>Советы для путешественников:</strong> Забронируйте 4-6 часов для посещения, заранее приобретите билеты онлайн и избегайте выходных и праздников. Классический маршрут - вход через ворота Умэнь и выход через ворота Шэньумэнь. Рассмотрите возможность аренды аудиогида для получения дополнительной исторической информации.</p>

        <h3>Великая Китайская стена в Бадалине</h3>
        <p>Самый представительный участок Великой стены, история строительства Бадалингской стены восходит к эпохе династии Мин. С ее крутыми горами и красивыми пейзажами, это идеальное место, чтобы ощутить дух "Не побывав на Великой стене, не станешь настоящим мужчиной".</p>
        <p><strong>Советы для путешественников:</strong> Воспользуйтесь линией S2 или туристическими автобусами и избегайте праздничных пиковых сезонов. Рассмотрите возможность поднятия на канатной дороге и спуска пешком, чтобы сэкономить энергию, наслаждаясь пейзажами. Зимой будьте осторожны, так как ступени могут обледенеть.</p>

        <h3>Великая Китайская стена в Мутяньюй</h3>
        <p>Участок Мутяньюй - один из наиболее сохранившихся участков, известный своими уникальными, особенными и крутыми особенностями. Стена извивается среди крутых гор, с широкими стенами и прочными кирпичами, что делает ее раем для фотографов.</p>
        <p><strong>Советы для путешественников:</strong> Поднимитесь на канатной дороге и спуститесь по горке для захватывающего и нового опыта. Возьмите с собой достаточно воды и солнцезащитный крем, и одевайтесь теплее, так как на вершине горы может быть ветрено. В пиковые сезоны приобретайте билеты онлайн заранее, чтобы избежать очередей.</p>

        <h3>Храм Неба</h3>
        <p>Храм Неба был местом, где императоры династий Мин и Цин поклонялись Небу и молились о хорошем урожае. Его архитектурное расположение строго разработано в соответствии с древней китайской космологической концепцией "круглого неба и квадратной земли". Зал молитвы об урожае является ядром комплекса, известным своими изысканными строительными техниками.</p>
        <p><strong>Советы для путешественников:</strong> Посетите рано утром, чтобы увидеть, как местные жители занимаются упражнениями, и ощутить настоящую пекинскую жизнь. Парк обширный, поэтому спланируйте свой маршрут и наденьте удобную обувь. Стоит испытать интересные акустические эффекты стены эха и камня трех звуков.</p>

        <h3>Летний дворец</h3>
        <p>Как самый совершенный императорский сад, Летний дворец, основанный на озере Куньмин и холме Ваньшоу, сочетает изысканность южных садов с величием северных садов. Достопримечательности, такие как длинный коридор, павильон Будды-аромата и каменный корабль, каждая имеет свои особенности и предлагает очаровательные пейзажи круглый год.</p>
        <p><strong>Советы для путешественников:</strong> Площадь парка обширна, поэтому выделите половину дня для посещения. Рассмотрите возможность совершить лодочную прогулку, чтобы насладиться пейзажами озера, особенно во время летнего цветения лотосов. Классический маршрут - вход через северные ворота дворца и выход через восточные ворота дворца, что позволяет охватить основные достопримечательности.</p>
        `
      }
    ]
  }
};

// 上海的多语言内容
const shanghaiContent = {
  zh: {
    title: '上海：东方明珠的魅力',
    subtitle: '现代与传统交融的国际化大都市',
    sections: [
      {
        title: '初印象',
        content: `
        <p>上海，这座中国最大的经济中心城市，兼具现代化都市的繁华与传统中国的韵味。从外滩万国建筑博览群到陆家嘴现代摩天大楼林立的天际线，从豫园的传统园林到老城厢的市井生活，上海呈现出多元而丰富的城市风貌。</p>
        <p>作为中国改革开放的窗口，上海展现了中国现代化发展的辉煌成就，同时也保留了深厚的历史文化底蕴。漫步于上海的街头，你可以在一条马路的两侧同时看到殖民时期的建筑与现代高楼，感受这座城市特有的时空交错感。</p>
        `
      },
      {
        title: '基本信息速览',
        content: `
        <p><strong>最佳旅游季节：</strong>春季（3-5月）和秋季（9-11月）气温适宜，是游览上海的最佳时节。</p>
        <p><strong>气候特点：</strong>亚热带季风气候，四季分明。夏季炎热潮湿，冬季寒冷潮湿，春秋两季宜人。</p>
        <p><strong>交通方式：</strong>上海地铁网络发达，覆盖主要景点；公交系统完善；出租车和网约车便捷；部分景区间可选择游船。</p>
        <p><strong>建议游览天数：</strong>深度游览上海需要4-5天，主要景点游览至少需要2-3天。</p>
        <p><strong>消费水平：</strong>作为一线城市，上海消费水平较高，但不同区域差异较大，外滩、南京路等商业区消费较高，普通区域则相对亲民。</p>
        `
      },
      {
        title: '必游景点',
        content: `
        <h3>外滩</h3>
        <p>外滩是上海的地标性景点，沿黄浦江一侧矗立着52幢风格各异的历史建筑，被誉为"万国建筑博览群"，见证了上海近代百年的沧桑变迁。与江对岸的浦东陆家嘴现代摩天大楼隔江相望，展现了上海"旧与新"的鲜明对比。</p>
        <p><strong>旅行贴士：</strong>建议黄昏或夜晚参观，可以欣赏到浦东的霓虹灯光秀。游人众多，小心看管随身物品。延外滩一带有多家高档酒店和餐厅，可以在临江的酒吧或餐厅边用餐边欣赏美景。</p>

        <h3>豫园及老城厢</h3>
        <p>豫园始建于明朝，是江南古典园林的代表作，园内亭台楼阁、假山池沼布局精巧。周边的老城厢区域保留着传统上海的市井风情，是品尝上海本帮美食、购买传统工艺品的好去处。</p>
        <p><strong>旅行贴士：</strong>游览豫园最好安排在工作日，避开周末人流高峰。园内的湖心亭、玉玲珑、大假山等是拍照热点。春节期间的豫园灯会是上海最具传统特色的庆祝活动，但人流极大。</p>

        <h3>南京路步行街</h3>
        <p>南京路是中国最著名的商业街之一，集购物、餐饮、娱乐于一体。这里汇集了传统老字号商店和现代购物中心，从百年历史的老凤祥、王宝和到现代的国际品牌，满足各种购物需求。</p>
        <p><strong>旅行贴士：</strong>南京路分为东段和西段，东段是步行街，西段则是高档商业区。老式有轨电车是这里的特色，可以乘坐它纵览整条步行街。夜晚的南京路霓虹闪烁，别有风味。</p>

        <h3>上海博物馆</h3>
        <p>位于人民广场的上海博物馆是中国一流的古代艺术博物馆，收藏了从新石器时代到明清时期的12万余件珍贵文物，尤以青铜器、陶瓷、书法、绘画四大类藏品最为突出。</p>
        <p><strong>旅行贴士：</strong>上海博物馆免费参观，但需要提前预约。建议至少预留半天时间游览。馆内提供中英文语音导览器出租。每层展厅都有主题，可根据兴趣选择性参观。</p>

        <h3>陆家嘴金融区</h3>
        <p>作为上海的金融中心，陆家嘴云集了东方明珠电视塔、金茂大厦、上海中心、上海环球金融中心等标志性摩天大楼，展现了上海现代化的城市面貌和经济实力。</p>
        <p><strong>旅行贴士：</strong>可选择登上上海中心观景台（118层）、金茂大厦观光厅（88层）或环球金融中心观光厅（100层）俯瞰上海全景。东方明珠的透明悬空观光廊也是体验高空刺激的好去处。太阳落山后的浦江夜景更加璀璨。</p>
      `
      },
      {
        title: '独特体验',
        content: `
        <h3>沿着法租界寻找老上海</h3>
        <p>曾经的法租界如今是上海最具异国情调的地区，这里保存着大量上世纪二三十年代的花园洋房和石库门建筑。武康路、复兴路、淮海路一带的梧桐树道、老式建筑和精品店铺，展现了上海独特的历史和时尚融合的魅力。</p>
        <p><strong>推荐活动：</strong>漫步于武康路的梧桐树下，参观孙中山故居纪念馆，在当年的老洋房改造的咖啡馆小憩，探访思南路上的名人故居，都是感受老上海风情的好方式。</p>

        <h3>上海滩夜游黄浦江</h3>
        <p>乘坐游船在黄浦江上巡游，是欣赏上海夜景的最佳方式。坐在船上，两岸灯火璀璨，一侧是代表历史的外滩建筑群，一侧是象征未来的现代摩天大楼，尽显上海魅力。</p>
        <p><strong>推荐活动：</strong>选择晚间8点后的游船航线，此时两岸灯光全部亮起，景色最为壮观。有普通游船和自助餐游船供选择，行程约1小时。从十六铺码头或南浦大桥码头登船较为方便。</p>

        <h3>体验上海弄堂生活</h3>
        <p>弄堂是上海特有的民居形式，石库门建筑和里弄生活承载了几代上海人的记忆。田子坊、新天地等区域保留了弄堂的建筑风格，同时注入了现代艺术和商业元素。</p>
        <p><strong>推荐活动：</strong>田子坊内有众多创意工作室和特色小店，可以购买设计师作品；新天地则融合了餐饮、时尚和艺术；而朱家角、七宝等古镇则保留了更加原汁原味的江南水乡生活风貌，值得一游。</p>

        <h3>上海时尚艺术探索</h3>
        <p>作为中国的时尚之都，上海拥有众多当代艺术场所和设计中心。从西岸艺术中心到M50创意园，从上海当代艺术博物馆到余德耀美术馆，展现了上海蓬勃发展的当代艺术生态。</p>
        <p><strong>推荐活动：</strong>参观上海当代艺术博物馆的前卫展览，在西岸艺术中心了解国际艺术动态，访问M50创意园与艺术家交流，感受上海活跃的艺术氛围。每年11月的上海艺术周更是艺术爱好者的盛宴。</p>
      `
      },
      {
        title: '美食指南',
        content: `
        <h3>上海本帮菜</h3>
        <p>本帮菜是上海的传统菜系，以原汁原味见长，注重食材的本真，口味偏甜，工艺精细。红烧肉、清蒸河蟹、八宝鸭、响油鳝糊等都是经典本帮菜品。松鹤楼、老正兴、德兴馆等是品尝地道本帮菜的老字号。</p>
        <p><strong>品尝建议：</strong>本帮菜讲究时令，如秋季吃大闸蟹，冬季吃蟹黄汤包。用餐时可搭配少量黄酒，更能体现本帮菜的韵味。</p>

        <h3>上海特色小吃</h3>
        <p>上海的特色小吃种类繁多，从早餐的生煎、小笼包、油条、豆浆，到街头小食如蟹壳黄、葱油拌面、烧麦、粢饭团等，无不体现上海人对美食的精致追求。</p>
        <p><strong>推荐去处：</strong>南京路的沈大成、城隍庙的南翔小笼包、朱家角的白切羊肉等都是上海的著名小吃。黄埔区的柳州路美食街和老西门的美食街也汇集了众多地道小吃。</p>

        <h3>江浙菜及海派创新菜</h3>
        <p>得益于毗邻江浙地区，上海的餐饮也深受江浙菜影响，清淡鲜美的江南水乡菜肴在上海随处可见。此外，近年来的海派创新菜，融合了中西方元素，创造出许多新式料理。</p>
        <p><strong>品尝建议：</strong>金龙鱼、西湖醋鱼、腌笃鲜都是典型的江浙风味；而新式餐厅如家全七浦路、1886等则提供创新的海派料理，值得品尝。</p>

        <h3>全球美食荟萃</h3>
        <p>作为国际大都市，上海聚集了全球各地的美食。从法餐、意餐、日料到各地中餐，几乎所有知名菜系在上海都能找到高水平的餐厅。外滩、淮海路、新天地等地区是高档餐厅聚集地。</p>
        <p><strong>代表餐厅：</strong>外滩三号的M on the Bund、思南路的思南公馆、淮海路的新天地等都有众多优质的国际餐厅，为上海增添了国际化的餐饮体验。</p>
      `
      },
      {
        title: '文化历史洞察',
        content: `
        <h3>近代上海的崛起与发展</h3>
        <p>上海从小渔村发展为国际大都市的历程与中国近代史息息相关。1843年开埠后，上海迅速成为远东最大的贸易港口和金融中心。租界的设立让上海成为中西文化碰撞的前沿，也留下了丰富的历史建筑和文化遗产。</p>
        <p><strong>历史脉络：</strong>从南京条约签订到租界形成，从十里洋场的繁华到战争的创伤，再到新中国成立后的发展和改革开放以来的腾飞，上海的历史是中国现代化进程的缩影。</p>

        <h3>海派文化</h3>
        <p>海派文化是上海特有的地域文化，以开放、创新、兼容并蓄为特点。从海派文学、海派绘画到海派戏剧、海派电影，各种艺术形式在上海交融并焕发出独特的魅力。</p>
        <p><strong>文化特点：</strong>上海人讲究精致、时尚，崇尚理性务实，善于汲取各方精华，创造新的文化表达，形成了独具特色的海派生活方式和价值观。</p>

        <h3>江南水乡文化</h3>
        <p>虽然现代化进程迅猛，但上海仍保留着江南水乡的文化底蕴。从庭园建筑到饮食习俗，从方言特点到民间艺术，江南文化的影响处处可见。</p>
        <p><strong>地域特色：</strong>上海周边的朱家角、七宝、枫泾等古镇保留了较为完整的江南水乡风貌，小桥流水、粉墙黛瓦的景观承载了丰富的历史文化内涵。</p>

        <h3>当代上海的文化创新</h3>
        <p>今天的上海正积极建设全球文化创意中心，从上海电影节、上海艺术博览会到上海时装周，从当代艺术区到设计中心，上海在各个领域引领着中国文化创新的潮流。</p>
        <p><strong>发展趋势：</strong>注重文化创意产业与城市更新的结合，将历史建筑改造为文创空间，保护传统文化的同时注入现代活力，是上海文化发展的显著特点。</p>
      `
      }
    ]
  },
  en: {
    title: 'Shanghai: The Charm of the Oriental Pearl',
    subtitle: 'An international metropolis where modern and traditional cultures blend',
    sections: [
      {
        title: 'First Impressions',
        content: `
        <p>Shanghai, China's largest economic center, combines the prosperity of a modern metropolis with the charm of traditional China. From the international architectural exposition on the Bund to the modern skyscrapers of Lujiazui's skyline, from the traditional gardens of Yu Garden to the everyday life in the old town, Shanghai presents a diverse and rich urban landscape.</p>
        <p>As a window of China's reform and opening up, Shanghai showcases the impressive achievements of China's modernization while preserving its deep historical and cultural heritage. Walking through Shanghai's streets, you can see colonial-era buildings and modern high-rises on opposite sides of the same road, experiencing the city's unique sense of time overlap.</p>
        `
      },
      {
        title: 'Basic Information Overview',
        content: `
        <p><strong>Best time to visit:</strong> Spring (March-May) and autumn (September-November) have pleasant temperatures, making them the ideal seasons to visit Shanghai.</p>
        <p><strong>Climate characteristics:</strong> Subtropical monsoon climate with distinct seasons. Summers are hot and humid, winters are cold and damp, while spring and autumn are pleasant.</p>
        <p><strong>Transportation methods:</strong> Shanghai has a well-developed metro network covering major attractions; a comprehensive bus system; convenient taxis and ride-sharing services; and boat options for travel between some scenic areas.</p>
        <p><strong>Recommended visit duration:</strong> An in-depth exploration of Shanghai requires 4-5 days, while at least 2-3 days are needed for the main attractions.</p>
        <p><strong>Cost level:</strong> As a first-tier city, Shanghai has a relatively high cost of living, but with significant variations between areas. The Bund, Nanjing Road, and other commercial districts are more expensive, while regular areas are more affordable.</p>
        `
      },
      {
        title: 'Must-Visit Attractions',
        content: `
        <h3>The Bund</h3>
        <p>The Bund is Shanghai's iconic landmark, featuring 52 diverse historical buildings along the Huangpu River, known as the "Exhibition of International Architecture," which have witnessed a century of Shanghai's modern history. Facing the modern skyscrapers of Pudong's Lujiazui across the river, it presents Shanghai's striking contrast between "old and new."</p>
        <p><strong>Travel tips:</strong> Best visited at dusk or night to appreciate Pudong's neon light show. Crowds are common, so keep an eye on your belongings. The Bund area hosts many luxury hotels and restaurants where you can dine while enjoying the beautiful views.</p>

        <h3>Yu Garden and Old Town</h3>
        <p>Yu Garden, built during the Ming Dynasty, is a representative work of classical gardens in the Jiangnan region, with intricately arranged pavilions, halls, rockeries, and ponds. The surrounding Old Town area preserves the traditional Shanghai atmosphere and is a great place to taste authentic Shanghai cuisine and buy traditional crafts.</p>
        <p><strong>Travel tips:</strong> It's best to visit Yu Garden on weekdays to avoid weekend crowds. The Mid-Lake Pavilion, Jade Rock, and Grand Rockery are popular photo spots. The Yu Garden Lantern Festival during Chinese New Year is Shanghai's most traditional celebration, but expect massive crowds.</p>

        <h3>Nanjing Road Pedestrian Street</h3>
        <p>Nanjing Road is one of China's most famous commercial streets, combining shopping, dining, and entertainment. It gathers traditional time-honored stores and modern shopping centers, from century-old establishments like Lao Feng Xiang and Wang Bao He to modern international brands, satisfying various shopping needs.</p>
        <p><strong>Travel tips:</strong> Nanjing Road is divided into east and west sections; the east section is a pedestrian street, while the west section is a high-end commercial area. The old-style tram is a feature here, offering a panoramic view of the entire pedestrian street. Nanjing Road at night, with its flickering neon lights, has a special charm.</p>

        <h3>Shanghai Museum</h3>
        <p>Located in People's Square, Shanghai Museum is a first-class ancient art museum in China, housing over 120,000 precious artifacts from the Neolithic Age to the Ming and Qing dynasties, with bronze vessels, ceramics, calligraphy, and paintings being the four most prominent collections.</p>
        <p><strong>Travel tips:</strong> The Shanghai Museum offers free admission but requires advance reservations. Allow at least half a day for your visit. Audio guides in Chinese and English are available for rent. Each floor has themed exhibitions that you can visit according to your interests.</p>

        <h3>Lujiazui Financial District</h3>
        <p>As Shanghai's financial center, Lujiazui gathers iconic skyscrapers such as the Oriental Pearl Tower, Jin Mao Tower, Shanghai Tower, and Shanghai World Financial Center, showcasing Shanghai's modern urban landscape and economic strength.</p>
        <p><strong>Travel tips:</strong> You can choose to visit the observation deck of Shanghai Tower (118th floor), Jin Mao Tower observation hall (88th floor), or World Financial Center observation hall (100th floor) for panoramic views of Shanghai. The Oriental Pearl's transparent suspended observation corridor is also a thrilling high-altitude experience. The Huangpu River views after sunset are particularly spectacular.</p>
        `
      },
      {
        title: 'Unique Experiences',
        content: `
        <h3>Finding Old Shanghai in the Former French Concession</h3>
        <p>The former French Concession is now Shanghai's most exotic area, preserving numerous garden villas and shikumen buildings from the 1920s and 1930s. The plane tree-lined streets, old-style buildings, and boutique shops along Wukang Road, Fuxing Road, and Huaihai Road showcase Shanghai's unique blend of history and fashion.</p>
        <p><strong>Recommended activities:</strong> Stroll under the plane trees of Wukang Road, visit the Sun Yat-sen Former Residence Memorial, relax in cafes converted from old villas, and explore the former residences of famous people on Sinan Road—all excellent ways to experience Old Shanghai's ambiance.</p>

        <h3>Night Cruise on the Huangpu River</h3>
        <p>Taking a cruise on the Huangpu River is the best way to enjoy Shanghai's night view. From the boat, you can see the dazzling lights on both banks—the historical buildings of the Bund on one side and the modern skyscrapers symbolizing the future on the other—fully displaying Shanghai's charm.</p>
        <p><strong>Recommended activities:</strong> Choose a cruise after 8 PM when all the lights on both banks are lit, offering the most spectacular views. Both regular cruises and dinner cruises are available, with trips lasting about an hour. Boarding from the Shiliupu Wharf or Nanpu Bridge Wharf is most convenient.</p>

        <h3>Experience Shanghai Lane Life</h3>
        <p>Lanes (longtang) are a unique residential form in Shanghai, with shikumen architecture and lane life carrying the memories of generations of Shanghai residents. Areas like Tianzifang and Xintiandi preserve the architectural style of these lanes while infusing them with modern artistic and commercial elements.</p>
        <p><strong>Recommended activities:</strong> Tianzifang houses numerous creative studios and specialty shops where you can purchase designers' works; Xintiandi combines dining, fashion, and art; while ancient towns like Zhujiajiao and Qibao preserve more authentic Jiangnan water town lifestyles, all worth visiting.</p>

        <h3>Shanghai Fashion and Art Exploration</h3>
        <p>As China's fashion capital, Shanghai boasts numerous contemporary art venues and design centers. From the West Bund Art Center to the M50 Creative Park, from the Museum of Contemporary Art Shanghai to the Yuz Museum, they showcase Shanghai's thriving contemporary art ecology.</p>
        <p><strong>Recommended activities:</strong> Visit the avant-garde exhibitions at the Museum of Contemporary Art Shanghai, learn about international art trends at the West Bund Art Center, interact with artists at the M50 Creative Park, and feel Shanghai's vibrant artistic atmosphere. The annual Shanghai Art Week in November is a feast for art enthusiasts.</p>
        `
      },
      {
        title: 'Food Guide',
        content: `
        <h3>Shanghai Cuisine (Benbang Cuisine)</h3>
        <p>Benbang cuisine is Shanghai's traditional culinary style, known for preserving the original flavors of ingredients, with a slightly sweet taste and refined techniques. Red-braised pork, steamed river crab, eight-treasure duck, and crispy eel paste are classic Benbang dishes. Time-honored restaurants like Song He Lou, Lao Zheng Xing, and De Xing Guan are authentic places to taste traditional Shanghai cuisine.</p>
        <p><strong>Tasting suggestions:</strong> Benbang cuisine emphasizes seasonal ingredients, such as hairy crabs in autumn and crab roe soup dumplings in winter. Pairing the meal with a small amount of yellow rice wine can better bring out the flavor of Benbang dishes.</p>

        <h3>Shanghai Specialty Snacks</h3>
        <p>Shanghai offers a wide variety of specialty snacks, from breakfast items like pan-fried buns, xiaolongbao (soup dumplings), fried dough sticks, and soy milk, to street foods such as crab shell pastry, scallion oil noodles, shumai, and glutinous rice cakes, all reflecting Shanghai people's refined pursuit of food.</p>
        <p><strong>Recommended venues:</strong> Famous Shanghai snacks include Shen Da Cheng on Nanjing Road, Nanxiang Steamed Bun Restaurant in City God Temple, and sliced lamb in Zhujiajiao. Liuzhou Road Food Street in Huangpu District and Old West Gate Food Street also gather numerous authentic snacks.</p>

        <h3>Jiangzhe Cuisine and Shanghai Fusion Dishes</h3>
        <p>Due to its proximity to the Jiangsu and Zhejiang regions, Shanghai's cuisine is deeply influenced by Jiangzhe cooking, with light and fresh Jiangnan water town dishes found throughout the city. In recent years, Shanghai fusion cuisine has emerged, combining Eastern and Western elements to create many innovative dishes.</p>
        <p><strong>Tasting suggestions:</strong> Golden dragon fish, West Lake fish in vinegar sauce, and salted pork with fresh greens soup are typical Jiangzhe flavors; while new restaurants like Jesse on Tianping Road and 1886 offer innovative Shanghai fusion cuisine worth trying.</p>

        <h3>Global Culinary Collection</h3>
        <p>As an international metropolis, Shanghai reúne cuisines from around the world. From French, Italian, and Japanese cuisine to various regional Chinese cuisines, almost all well-known culinary styles can be found in high-level restaurants in Shanghai. The Bund, Huaihai Road and Xintiandi areas are hubs for upscale restaurants.</p>
        <p><strong>Restaurants representativos:</strong> M on the Bund at Three on the Bund, Sinan Mansions on Sinan Road, and Xintiandi on Huaihai Road all house numerous quality international restaurants, adding an international dining experience to Shanghai.</p>
        `
      },
      {
        title: 'Cultural Insights',
        content: `
        <h3>The Rise and Development of Modern Shanghai</h3>
        <p>Shanghai's transformation from a small fishing village to an international metropolis is closely tied to China's modern history. After becoming a treaty port in 1843, Shanghai quickly grew into the Far East's largest trading port and financial center. The establishment of foreign concessions made Shanghai a frontier of East-West cultural collision, leaving rich historical buildings and cultural heritage.</p>
        <p><strong>Historical context:</strong> From the signing of the Treaty of Nanjing to the formation of concessions, from the prosperity of the ten-mile foreign settlement to the wounds of war, and then to development after the founding of New China and the rapid growth since the reform and opening up, Shanghai's history reflects China's modernization process.</p>

        <h3>Haipai Culture</h3>
        <p>Haipai culture is Shanghai's unique regional culture, characterized by openness, innovation, and inclusiveness. From Haipai literature, Haipai painting to Haipai drama and Haipai cinema, various art forms have merged in Shanghai and radiated a distinctive charm.</p>
        <p><strong>Cultural characteristics:</strong> Shanghai people value refinement and fashion, advocate pragmatic rationality, and excel at absorbing the essence from various sources to create new cultural expressions, forming a distinctive Haipai lifestyle and values.</p>

        <h3>Jiangnan Water Town Culture</h3>
        <p>Despite rapid modernization, Shanghai still retains the cultural heritage of Jiangnan water towns. From garden architecture to dietary customs, from dialect features to folk arts, the influence of Jiangnan culture is evident everywhere.</p>
        <p><strong>Regional features:</strong> Ancient towns around Shanghai such as Zhujiajiao, Qibao and Fengjing preserve relatively complete Jiangnan water town landscapes, with small bridges, flowing waters, white walls, and black-tiled roofs carrying rich historical and cultural connotations.</p>

        <h3>Contemporary Cultural Innovation in Shanghai</h3>
        <p>Today's Shanghai is actively building itself as a global center for cultural creativity. From the Shanghai International Film Festival, Shanghai Art Fair to Shanghai Fashion Week, from contemporary art districts to design centers, Shanghai is leading the trend of Chinese cultural innovation in various fields.</p>
        <p><strong>Development trends:</strong> A notable feature of Shanghai's cultural development is the focus on combining cultural creative industries with urban renewal, converting historical buildings into creative spaces, and injecting modern vitality while protecting traditional culture.</p>
        `
      }
    ]
  },
  fr: {
    title: 'Shanghai : Le Charme de la Perle d\'Orient',
    subtitle: 'Une métropole internationale où se fondent cultures moderne et traditionnelle',
    sections: [
      {
        title: 'Premières impressions',
        content: `
        <p>Shanghai, le plus grand centre économique de Chine, combine la prospérité d'une métropole moderne avec le charme de la Chine traditionnelle. De l'exposition architecturale internationale du Bund aux gratte-ciel modernes qui dessinent la ligne d'horizon de Lujiazui, des jardins traditionnels du Jardin Yu à la vie quotidienne dans la vieille ville, Shanghai présente un paysage urbain riche et diversifié.</p>
        <p>En tant que fenêtre de la réforme et de l'ouverture de la Chine, Shanghai démontre les réalisations impressionnantes de la modernisation chinoise tout en préservant son patrimoine historique et culturel profond. En vous promenant dans les rues de Shanghai, vous pouvez voir des bâtiments de l'époque coloniale et des gratte-ciel modernes de part et d'autre de la même rue, expérimentant le chevauchement temporel unique de la ville.</p>
        `
      },
      {
        title: 'Aperçu des informations de base',
        content: `
        <p><strong>Meilleure période pour visiter :</strong> Le printemps (mars-mai) et l'automne (septembre-novembre) offrent des températures agréables, ce qui en fait les saisons idéales pour visiter Shanghai.</p>
        <p><strong>Caractéristiques climatiques :</strong> Climat subtropical de mousson avec des saisons distinctes. Les étés sont chauds et humides, les hivers froids et humides, tandis que le printemps et l'automne sont agréables.</p>
        <p><strong>Moyens de transport :</strong> Shanghai dispose d'un réseau de métro bien développé couvrant les principales attractions ; un système de bus complet ; des taxis et services de covoiturage pratiques ; et des options de bateau pour les déplacements entre certaines zones pittoresques.</p>
        <p><strong>Durée de visite recommandée :</strong> Une exploration approfondie de Shanghai nécessite 4-5 jours, tandis qu'au moins 2-3 jours sont nécessaires pour les principales attractions.</p>
        <p><strong>Niveau de coût :</strong> En tant que ville de premier rang, Shanghai a un coût de vie relativement élevé, mais avec des variations significatives entre les zones. Le Bund, Nanjing Road et autres quartiers commerciaux sont plus chers, tandis que les zones ordinaires sont plus abordables.</p>
        `
      },
      {
        title: 'Attractions incontournables',
        content: `
        <h3>Le Bund</h3>
        <p>Le Bund est le site emblématique de Shanghai, présentant 52 bâtiments historiques diversifiés le long de la rivière Huangpu, connu comme "l'Exposition d'Architecture Internationale", qui ont été témoins d'un siècle d'histoire moderne de Shanghai. Face aux gratte-ciel modernes de Lujiazui à Pudong de l'autre côté de la rivière, il présente le contraste saisissant entre "l'ancien et le nouveau" de Shanghai.</p>
        <p><strong>Conseils de voyage :</strong> Mieux vaut visiter au crépuscule ou la nuit pour apprécier le spectacle de lumières néon de Pudong. Les foules sont courantes, alors gardez un œil sur vos effets personnels. La zone du Bund abrite de nombreux hôtels et restaurants de luxe où vous pouvez dîner tout en profitant des belles vues.</p>

        <h3>Jardin Yu et Vieille Ville</h3>
        <p>Le Jardin Yu, construit pendant la dynastie Ming, est une œuvre représentative des jardins classiques de la région du Jiangnan, avec des pavillons, des halls, des rocailles et des étangs disposés de manière complexe. La zone de la Vieille Ville environnante préserve l'atmosphère traditionnelle de Shanghai et est un endroit idéal pour goûter la cuisine authentique de Shanghai et acheter des artisanats traditionnels.</p>
        <p><strong>Conseils de voyage :</strong> Il est préférable de visiter le Jardin Yu en semaine pour éviter les foules du week-end. Le Pavillon du Milieu du Lac, le Rocher de Jade et la Grande Rocaille sont des spots photo populaires. La Fête des Lanternes du Jardin Yu pendant le Nouvel An chinois est la célébration traditionnelle la plus importante de Shanghai, mais attendez-vous à des foules massives.</p>

        <h3>Rue Piétonne de Nanjing Road</h3>
        <p>Nanjing Road est l'une des rues commerciales les plus célèbres de Chine, combinant shopping, restauration et divertissement. Elle rassemble des magasins traditionnels centenaires et des centres commerciaux modernes, des établissements séculaires comme Lao Feng Xiang et Wang Bao He aux marques internationales modernes, satisfaisant divers besoins d'achat.</p>
        <p><strong>Conseils de voyage :</strong> Nanjing Road est divisée en sections est et ouest ; la section est est une rue piétonne, tandis que la section ouest est une zone commerciale haut de gamme. Le tramway de style ancien est une caractéristique ici, offrant une vue panoramique de toute la rue piétonne. Nanjing Road de nuit, avec ses lumières néon scintillantes, a un charme particulier.</p>

        <h3>Musée de Shanghai</h3>
        <p>Situé sur la Place du Peuple, le Musée de Shanghai est un musée d'art ancien de premier ordre en Chine, abritant plus de 120 000 artefacts précieux allant de l'âge néolithique aux dynasties Ming et Qing, les vases en bronze, les céramiques, la calligraphie et les peintures étant les quatre collections les plus importantes.</p>
        <p><strong>Conseils de voyage :</strong> Le Musée de Shanghai offre une entrée gratuite mais nécessite des réservations à l'avance. Prévoyez au moins une demi-journée pour votre visite. Des audioguides en chinois et en anglais sont disponibles à la location. Chaque étage présente des expositions thématiques que vous pouvez visiter selon vos intérêts.</p>

        <h3>District Financier de Lujiazui</h3>
        <p>En tant que centre financier de Shanghai, Lujiazui rassemble des gratte-ciel emblématiques tels que la Tour de la Perle Orientale, la Tour Jin Mao, la Tour de Shanghai et le Centre Financier Mondial de Shanghai, mettant en valeur le paysage urbain moderne et la puissance économique de Shanghai.</p>
        <p><strong>Conseils de voyage :</strong> Vous pouvez choisir de visiter la plate-forme d'observation de la Tour de Shanghai (118e étage), la salle d'observation de la Tour Jin Mao (88e étage), ou la salle d'observation du Centre Financier Mondial (100e étage) pour des vues panoramiques de Shanghai. Le couloir d'observation suspendu transparent de la Perle Orientale est également une expérience à haute altitude palpitante. Les vues sur la rivière Huangpu après le coucher du soleil sont particulièrement spectaculaires.</p>
        `
      },
      {
        title: 'Expériences uniques',
        content: `
        <h3>À la découverte du Vieux Shanghai dans l'ancienne concession française</h3>
        <p>L'ancienne concession française est aujourd'hui le quartier le plus exotique de Shanghai, préservant de nombreuses villas-jardins et bâtiments shikumen des années 1920 et 1930. Les rues bordées de platanes, les bâtiments de style ancien et les boutiques le long des routes Wukang, Fuxing et Huaihai mettent en valeur le mélange unique d'histoire et de mode de Shanghai.</p>
        <p><strong>Activités recommandées :</strong> Flânez sous les platanes de la route Wukang, visitez l'ancienne résidence-mémorial de Sun Yat-sen, détendez-vous dans des cafés convertis d'anciennes villas, et explorez les anciennes résidences de personnes célèbres sur la route Sinan—toutes d'excellentes façons d'expérimenter l'ambiance du Vieux Shanghai.</p>

        <h3>Croisière nocturne sur la rivière Huangpu</h3>
        <p>Faire une croisière sur la rivière Huangpu est la meilleure façon de profiter de la vue nocturne de Shanghai. Depuis le bateau, vous pouvez voir les lumières éblouissantes sur les deux rives—les bâtiments historiques du Bund d'un côté et les gratte-ciel modernes symbolisant l'avenir de l'autre—affichant pleinement le charme de Shanghai.</p>
        <p><strong>Activités recommandées :</strong> Choisissez une croisière après 20h lorsque toutes les lumières des deux rives sont allumées et offrant les vues les plus spectaculaires. Des croisières régulières et des croisières-dîners sont disponibles, avec des trajets d'environ une heure. L'embarquement depuis le quai de Shiliupu ou le quai du pont Nanpu est le plus pratique.</p>

        <h3>Vivre l'expérience des ruelles de Shanghai</h3>
        <p>Les ruelles (longtang) sont une forme résidentielle unique à Shanghai, avec l'architecture shikumen et la vie de ruelle portant les souvenirs de générations de résidents shanghaïens. Des zones comme Tianzifang et Xintiandi préservent le style architectural de ces ruelles tout en y infusant des éléments artistiques et commerciaux modernes.</p>
        <p><strong>Activités recommandées :</strong> Tianzifang abrite de nombreux studios créatifs et des boutiques spécialisées où vous pouvez acheter des œuvres de designers ; Xintiandi combine restauration, mode et art ; tandis que des villes anciennes comme Zhujiajiao et Qibao préservent des modes de vie plus authentiques des villes d'eau du Jiangnan, toutes méritant une visite.</p>

        <h3>Exploration de la mode et de l'art de Shanghai</h3>
        <p>En tant que capitale de la mode de Chine, Shanghai possède de nombreux lieux d'art contemporain et centres de design. Du Centre d'Art West Bund au Parc Créatif M50, du Musée d'Art Contemporain de Shanghai au Musée Yuz, ils mettent en valeur l'écologie florissante de l'art contemporain de Shanghai.</p>
        <p><strong>Activités recommandées :</strong> Visitez les expositions avant-gardistes au Musée d'Art Contemporain de Shanghai, informez-vous sur les tendances artistiques internationales au Centre d'Art West Bund, interagissez avec des artistes au Parc Créatif M50, et ressentez l'atmosphère artistique vibrante de Shanghai. La Semaine de l'Art de Shanghai annuelle en novembre est un festin pour les amateurs d'art.</p>
        `
      },
      {
        title: 'Guide gastronomique',
        content: `
        <h3>Cuisine de Shanghai (Cuisine Benbang)</h3>
        <p>La cuisine Benbang est le style culinaire traditionnel de Shanghai, connu pour préserver les saveurs originales des ingrédients, avec un goût légèrement sucré et des techniques raffinées. Le porc braisé rouge, le crabe de rivière à la vapeur, le canard aux huit trésors et la pâte d'anguille croustillante sont des plats Benbang classiques. Les restaurants de renom comme Song He Lou, Lao Zheng Xing et De Xing Guan sont des lieux authentiques pour goûter la cuisine traditionnelle de Shanghai.</p>
        <p><strong>Suggestions de dégustation :</strong> La cuisine Benbang met l'accent sur les ingrédients de saison, comme les crabes velus en automne et les boulettes de soupe au corail de crabe en hiver. Accompagner le repas d'une petite quantité de vin de riz jaune peut mieux faire ressortir la saveur des plats Benbang.</p>

        <h3>Collations spéciales de Shanghai</h3>
        <p>Shanghai offre une grande variété de collations spéciales, des articles de petit-déjeuner comme les petits pains frits, les xiaolongbao (boulettes de soupe), les bâtonnets de pâte frits et le lait de soja, aux aliments de rue comme la pâtisserie en forme de carapace de crabe, les nouilles à l'huile de ciboule, les shumai et les gâteaux de riz gluant, reflétant tous la recherche raffinée de la nourriture par les Shanghaïens.</p>
        <p><strong>Lieux recommandés :</strong> Les collations célèbres de Shanghai incluent Shen Da Cheng sur Nanjing Road, le Restaurant de Petits Pains à la Vapeur Nanxiang dans le Temple du Dieu de la Ville, et l'agneau tranché à Zhujiajiao. La Rue Gastronomique de Liuzhou dans le district de Huangpu et la Rue Gastronomique de la Vieille Porte Ouest rassemblent également de nombreuses collations authentiques.</p>

        <h3>Cuisine Jiangzhe et plats fusion de Shanghai</h3>
        <p>En raison de sa proximité avec les régions du Jiangsu et du Zhejiang, la cuisine de Shanghai est profondément influencée par la cuisine Jiangzhe, avec des plats légers et frais des villes d'eau du Jiangnan trouvés dans toute la ville. Ces dernières années, la cuisine fusion de Shanghai a émergé, combinant des éléments orientaux et occidentaux pour créer de nombreux plats innovants.</p>
        <p><strong>Suggestions de dégustation :</strong> Le poisson dragon doré, le poisson du Lac de l'Ouest à la sauce vinaigre et la soupe de porc salé aux légumes frais sont des saveurs typiques du Jiangzhe ; tandis que de nouveaux restaurants comme Jesse sur Tianping Road et 1886 offrent une cuisine fusion de Shanghai innovante qui mérite d'être essayée.</p>

        <h3>Collection culinaire mondiale</h3>
        <p>En tant que métropole internationale, Shanghai rassemble des cuisines du monde entier. De la cuisine française, italienne et japonaise aux diverses cuisines régionales chinoises, presque tous les styles culinaires bien connus peuvent être trouvés dans des restaurants de haut niveau à Shanghai. Le Bund, Huaihai Road et les zones de Xintiandi sont des centres pour les restaurants haut de gamme.</p>
        <p><strong>Restaurants représentatifs :</strong> M on the Bund au Three on the Bund, Sinan Mansions sur Sinan Road, et Xintiandi sur Huaihai Road abritent tous de nombreux restaurants internationaux de qualité, ajoutant une expérience culinaire internationale à Shanghai.</p>
        `
      },
      {
        title: 'Perspectives culturelles',
        content: `
        <h3>L'essor et le développement de Shanghai moderne</h3>
        <p>La transformation de Shanghai d'un petit village de pêcheurs en une métropole internationale est étroitement liée à l'histoire moderne de la Chine. Après être devenu un port de traité en 1843, Shanghai s'est rapidement développé pour devenir le plus grand port commercial et centre financier d'Extrême-Orient. L'établissement de concessions étrangères a fait de Shanghai une frontière de collision culturelle Est-Ouest, laissant un riche patrimoine de bâtiments historiques et culturels.</p>
        <p><strong>Contexte historique :</strong> De la signature du Traité de Nankin à la formation des concessions, de la prospérité des établissements étrangers de dix miles aux blessures de la guerre, puis au développement après la fondation de la Nouvelle Chine et à la croissance rapide depuis la réforme et l'ouverture, l'histoire de Shanghai reflète le processus de modernisation de la Chine.</p>

        <h3>Culture Haipai</h3>
        <p>La culture Haipai est la culture régionale unique de Shanghai, caractérisée par l'ouverture, l'innovation et l'inclusivité. De la littérature Haipai, la peinture Haipai au théâtre Haipai et au cinéma Haipai, diverses formes d'art ont fusionné à Shanghai et rayonné d'un charme distinctif.</p>
        <p><strong>Caractéristiques culturelles :</strong> Les Shanghaïens valorisent le raffinement et la mode, préconisent la rationalité pragmatique et excellent à absorber l'essence de diverses sources pour créer de nouvelles expressions culturelles, formant un style de vie et des valeurs Haipai distinctifs.</p>

        <h3>Culture des villes d'eau du Jiangnan</h3>
        <p>Malgré une modernisation rapide, Shanghai conserve encore le patrimonio culturel des villes d'eau du Jiangnan. De l'architecture des jardins aux coutumes alimentaires, des caractéristiques dialectales aux arts populaires, l'influence de la culture du Jiangnan est évidente partout.</p>
        <p><strong>Caractéristiques régionales :</strong> Les villes anciennes autour de Shanghai comme Zhujiajiao, Qibao et Fengjing préservent des paysages relativement complets des villes d'eau du Jiangnan, avec de petits ponts, des eaux courantes, des murs blancs et des toits en tuiles noires portant de riches connotations historiques et culturelles.</p>

        <h3>Innovation culturelle contemporaine à Shanghai</h3>
        <p>Le Shanghai d'aujourd'hui se construit activement comme un centre mondial de créativité culturelle. Du Festival International du Film de Shanghai, de la Foire d'Art de Shanghai à la Semaine de la Mode de Shanghai, des quartiers d'art contemporain aux centres de design, Shanghai mène la tendance de l'innovation culturelle chinoise dans divers domaines.</p>
        <p><strong>Tendances de développement :</strong> Une caractéristique notable du développement culturel de Shanghai est l'accent mis sur la combinaison des industries créatives culturelles avec le renouvellement urbain, la conversion de bâtiments historiques en espaces créatifs, et l'injection de vitalité moderne tout en protégeant la culture traditionnelle.</p>
        `
      }
    ]
  },
  de: {
    title: 'Shanghai: Der Charme der orientalischen Perle',
    subtitle: 'Eine internationale Metropole, in der moderne und traditionelle Kulturen verschmelzen',
    sections: [
      {
        title: 'Erste Eindrücke',
        content: `
        <p>Shanghai, Chinas größtes Wirtschaftszentrum, verbindet den Wohlstand einer modernen Metropole mit dem Charme des traditionellen China. Von der internationalen Architekturausstellung am Bund bis zur Skyline moderner Wolkenkratzer in Lujiazui, von den traditionellen Gärten des Yu-Gartens bis zum Alltagsleben in der Altstadt, präsentiert Shanghai eine vielfältige und reiche Stadtlandschaft.</p>
        <p>Als Fenster der Reform und Öffnung Chinas zeigt Shanghai die beeindruckenden Errungenschaften der chinesischen Modernisierung, während es gleichzeitig sein tiefes historisches und kulturelles Erbe bewahrt. Wenn Sie durch Shanghais Straßen laufen, können Sie kolonialzeitliche Gebäude und moderne Hochhäuser auf gegenüberliegenden Seiten derselben Straße sehen und erleben so das einzigartige Zeitgefühl der Stadt.</p>
        `
      },
      {
        title: 'Grundlegende Informationen',
        content: `
        <p><strong>Beste Reisezeit:</strong> Frühling (März-Mai) und Herbst (September-November) haben angenehme Temperaturen und sind die idealen Jahreszeiten, um Shanghai zu besuchen.</p>
        <p><strong>Klimatische Eigenschaften:</strong> Subtropisches Monsunklima mit ausgeprägten Jahreszeiten. Die Sommer sind heiß und feucht, die Winter kalt und feucht, während Frühling und Herbst angenehm sind.</p>
        <p><strong>Transportmittel:</strong> Shanghai verfügt über ein gut entwickeltes U-Bahn-Netz, das die wichtigsten Sehenswürdigkeiten abdeckt; ein umfassendes Bussystem; bequeme Taxis und Mitfahrdienste; sowie Bootsoptionen für Reisen zwischen einigen Sehenswürdigkeiten.</p>
        <p><strong>Empfohlene Besuchsdauer:</strong> Eine eingehende Erkundung von Shanghai erfordert 4-5 Tage, während mindestens 2-3 Tage für die Hauptattraktionen benötigt werden.</p>
        <p><strong>Kostenniveau:</strong> Als Stadt der ersten Reihe hat Shanghai relativ hohe Lebenshaltungskosten, jedoch mit erheblichen Unterschieden zwischen den Gebieten. Der Bund, die Nanjing Road und andere Geschäftsviertel sind teurer, während normale Gebiete erschwinglicher sind.</p>
        `
      },
      {
        title: 'Sehenswürdigkeiten',
        content: `
        <h3>Der Bund</h3>
        <p>Der Bund ist Shanghais ikonisches Wahrzeichen mit 52 verschiedenen historischen Gebäuden entlang des Huangpu-Flusses, bekannt als "Ausstellung internationaler Architektur", die ein Jahrhundert der modernen Geschichte Shanghais miterlebt haben. Gegenüber den modernen Wolkenkratzern von Pudongs Lujiazui auf der anderen Seite des Flusses präsentiert er Shanghais auffälligen Kontrast zwischen "l'ancien und l'neuen" von Shanghai.</p>
        <p><strong>Reisetipps:</strong> Am besten in der Dämmerung oder nachts besuchen, um die Neonlichtshow von Pudong zu bewundern. Menschenmengen sind üblich, also achten Sie auf Ihre Habseligkeiten. In der Gegend des Bund befinden sich viele Luxushotels und Restaurants, in denen Sie speisen und gleichzeitig die schöne Aussicht genießen können.</p>

        <h3>Yu-Garten und Altstadt</h3>
        <p>Der Yu-Garten, der während der Ming-Dynastie erbaut wurde, ist ein repräsentatives Werk klassischer Gärten in der Jiangnan-Region, mit kunstvoll angeordneten Pavillons, Hallen, Felslandschaften und Teichen. Das umliegende Altstadtviertel bewahrt die traditionelle Shanghaier Atmosphäre und ist ein großartiger Ort, um authentische Shanghaier Küche zu probieren und traditionelle Handwerkskunst zu kaufen.</p>
        <p><strong>Reisetipps:</strong> Es ist am besten, den Yu-Garten an Wochentagen zu besuchen, um Wochenendemassen zu vermeiden. Der Mittelseepavillon, der Jadegarten und die Große Felslandschaft sind beliebte Fotospots. Das Laternenfest des Yu-Gartens während des chinesischen Neujahrs ist Shanghais traditionellste Feier, aber erwarten Sie massive Menschenmengen.</p>

        <h3>Nanjing Road Fußgängerzone</h3>
        <p>Die Nanjing Road ist eine der berühmtesten Geschäftsstraßen Chinas, die Einkaufen, Gastronomie und Unterhaltung kombiniert. Sie vereint traditionelle alteingesessene Geschäfte und moderne Einkaufszentren, von jahrhundertealten Einrichtungen wie Lao Feng Xiang und Wang Bao He bis hin zu modernen internationalen Marken und befriedigt verschiedene Einkaufsbedürfnisse.</p>
        <p><strong>Reisetipps:</strong> Die Nanjing Road ist in Ost- und Westabschnitte unterteilt; der östliche Abschnitt ist eine Fußgängerzone, während der westliche Abschnitt ein gehobenes Geschäftsviertel ist. Die altmodische Straßenbahn ist hier ein Merkmal und bietet einen Panoramablick auf die gesamte Fußgängerzone. Die Nanjing Road bei Nacht mit ihren blinkenden Neonlichtern hat einen besonderen Charme.</p>

        <h3>Shanghai-Museum</h3>
        <p>Das am Volksplatz gelegene Shanghai-Museum ist ein erstklassiges Museum für antike Kunst in China und beherbergt über 120.000 wertvolle Artefakte aus der Jungsteinzeit bis zu den Ming- und Qing-Dynastien, wobei Bronzegefäße, Keramik, Kalligraphie und Gemälde die vier herausragendsten Sammlungen sind.</p>
        <p><strong>Reisetipps:</strong> Das Shanghai-Museum bietet freien Eintritt, erfordert aber Voranmeldungen. Planen Sie mindestens einen halben Tag für Ihren Besuch ein. Audioguides auf Chinesisch und Englisch können gemietet werden. Jede Etage hat thematische Ausstellungen, die Sie nach Ihren Interessen besuchen können.</p>

        <h3>Lujiazui Finanzviertel</h3>
        <p>Als Shanghais Finanzzentrum versammelt Lujiazui ikonische Wolkenkratzer wie den Oriental Pearl Tower, Jin Mao Tower, Shanghai Tower und Shanghai World Financial Center und präsentiert Shanghais moderne Stadtlandschaft und wirtschaftliche Stärke.</p>
        <p><strong>Reisetipps:</strong> Sie können wählen, ob Sie die Aussichtsplattform des Shanghai Tower (118e étage), die Aussichtshalle des Jin Mao Tower (88e étage), oder die Aussichtshalle des World Financial Center (100e étage) für einen Panoramablick auf Shanghai besuchen möchten. Der transparente schwebende Beobachtungskorridor des Oriental Pearl ist auch ein aufregendes Erlebnis in großer Höhe. Les vues sur la rivière Huangpu après le coucher du soleil sind particulièrement spectaculaires.</p>
        `
      },
      {
        title: 'Einzigartige Erlebnisse',
        content: `
        <h3>Das alte Shanghai in der ehemaligen französischen Konzession entdecken</h3>
        <p>Die ehemalige französische Konzession ist heute Shanghais exotischstes Viertel und bewahrt zahlreiche Gartenvillen und Shikumen-Gebäude aus den 1920er und 1930er Jahren. Die mit Platanen gesäumten Straßen, altmodischen Gebäude und Boutiquen entlang der Wukang Road, Fuxing Road und Huaihai Road zeigen Shanghais einzigartige Mischung aus Geschichte und Mode.</p>
        <p><strong>Empfohlene Aktivitäten:</strong> Spazieren Sie unter den Platanen der Wukang Road, besuchen Sie die ehemalige Residenz-Gedenkstätte von Sun Yat-sen, entspannen Sie sich in Cafés, die aus alten Villen umgebaut wurden, und erkunden Sie die ehemaligen Residenzen berühmter Persönlichkeiten in der Sinan Road – alles ausgezeichnete Möglichkeiten, das Ambiente des alten Shanghai zu erleben.</p>

        <h3>Nachtkreuzfahrt auf dem Huangpu-Fluss</h3>
        <p>Eine Kreuzfahrt auf dem Huangpu-Fluss ist die beste Möglichkeit, Shanghais Nachtansicht zu genießen. Vom Boot aus können Sie die glitzernden Lichter auf beiden Ufern sehen – die historischen Gebäude des Bund auf der einen Seite und die modernen Wolkenkratzer, die die Zukunft symbolisieren, auf der anderen Seite – und zeigen den vollen Charme Shanghais.</p>
        <p><strong>Empfohlene Aktivitäten:</strong> Wählen Sie eine Kreuzfahrt nach 20 Uhr, wenn alle Lichter an beiden Ufern leuchten und die spektakulärste Aussicht bieten. Sowohl reguläre Kreuzfahrten als auch Dinner-Kreuzfahrten sind verfügbar, mit Fahrten von etwa einer Stunde. Das Einsteigen vom Shiliupu-Kai oder Nanpu-Brücken-Kai ist am bequemsten.</p>

        <h3>Das Leben in Shanghais Gassen erleben</h3>
        <p>Gassen (Longtang) sind eine einzigartige Wohnform in Shanghai, mit Shikumen-Architektur und einem Gassenleben, das die Erinnerungen von Generationen von Shanghaier Bewohnern trägt. Gebiete wie Tianzifang und Xintiandi bewahren den architektonischen Stil dieser Gassen und verleihen ihnen gleichzeitig moderne künstlerische und kommerzielle Elemente.</p>
        <p><strong>Empfohlene Aktivitäten:</strong> Tianzifang beherbergt zahlreiche kreative Studios und Spezialgeschäfte, in denen Sie Werke von Designern kaufen können; Xintiandi kombiniert Gastronomie, Mode und Kunst; während antike Städte wie Zhujiajiao und Qibao authentischere Jiangnan-Wasserstadtlebensstile bewahren – alle sind einen Besuch wert.</p>

        <h3>Erkundung von Mode und Kunst in Shanghai</h3>
        <p>Als Chinas Modehauptstadt verfügt Shanghai über zahlreiche zeitgenössische Kunstorte und Designzentren. Vom West Bund Art Center bis zum M50 Creative Park, vom Museum of Contemporary Art Shanghai bis zum Yuz Museum zeigen sie Shanghais florierende zeitgenössische Kunstökologie.</p>
        <p><strong>Empfohlene Aktivitäten:</strong> Besuchen Sie die avantgardistischen Ausstellungen im Museum of Contemporary Art Shanghai, informieren Sie sich über internationale Kunsttrends im West Bund Art Center, interagieren Sie mit Künstlern im M50 Creative Park und spüren Sie Shanghais lebendige künstlerische Atmosphäre. Die jährliche Shanghai Art Week im November ist ein Fest für Kunstliebhaber.</p>
        `
      },
      {
        title: 'Kulinarischer Führer',
        content: `
        <h3>Shanghaier Küche (Benbang-Küche)</h3>
        <p>Die Benbang-Küche ist Shanghais traditioneller kulinarischer Stil, bekannt für die Bewahrung der ursprünglichen Aromen der Zutaten, mit einem leicht süßen Geschmack und raffinierten Techniken. Rotgeschmortes Schweinefleisch, gedämpfte Flusskrebse, Ente mit acht Schätzen und knusprige Aalpaste sind klassische Benbang-Gerichte. Alteingesessene Restaurants wie Song He Lou, Lao Zheng Xing und De Xing Guan sind authentische Orte, um traditionelle Shanghaier Küche zu probieren.</p>
        <p><strong>Verkostungsvorschläge:</strong> Die Benbang-Küche betont saisonale Zutaten, wie haarige Krabben im Herbst und Krabbeneier-Suppen-Teigtaschen im Winter. Die Kombination der Mahlzeit mit einer kleinen Menge gelben Reiswein kann den Geschmack der Benbang-Gerichte besser zur Geltung bringen.</p>

        <h3>Shanghaier Spezialsnacks</h3>
        <p>Shanghai bietet eine große Vielfalt an Spezialsnacks, von Frühstücksartikeln wie gebratenen Brötchen, Xiaolongbao (Suppen-Teigtaschen), frittierten Teigstangen und Sojamilch bis hin zu Straßenessen wie Krabbenschalen-Gebäck, Frühlingszwiebel-Öl-Nudeln, Shumai und Klebreiskuchen, die alle die raffinierte Nahrungssuche der Shanghaier widerspiegeln.</p>
        <p><strong>Empfohlene Orte:</strong> Berühmte Shanghaier Snacks umfassen Shen Da Cheng in der Nanjing Road, das Nanxiang Dampfbrötchen-Restaurant im Stadtgott-Tempel und Lammscheiben in Zhujiajiao. Die Liuzhou Road Food Street im Huangpu District und die Old West Gate Food Street versammeln ebenfalls zahlreiche authentische Snacks.</p>

        <h3>Jiangzhe-Küche und Shanghaier Fusionsgerichte</h3>
        <p>Aufgrund seiner Nähe zu den Regionen Jiangsu und Zhejiang ist Shanghais Küche stark von der Jiangzhe-Küche beeinflusst, mit leichten und frischen Jiangnan-Wasserstadtgerichten, die in der ganzen Stadt zu finden sind. In den letzten Jahren ist die Shanghaier Fusionsküche entstanden, die östliche und westliche Elemente kombiniert, um viele innovative Gerichte zu kreieren.</p>
        <p><strong>Verkostungsvorschläge:</strong> Goldener Drachenfisch, Westlake-Fisch in Essigsoße und Suppe aus gesalzenem Schweinefleisch mit frischem Gemüse sind typische Jiangzhe-Aromen; während neue Restaurants wie Jesse in der Tianping Road und 1886 innovative Shanghaier Fusionsküche anbieten, die es wert ist, probiert zu werden.</p>

        <h3>Globale kulinarische Sammlung</h3>
        <p>Als internationale Metropole versammelt Shanghai Küchen aus der ganzen Welt. Von französischer, italienischer und japanischer Küche bis hin zu verschiedenen regionalen chinesischen Küchen können fast alle bekannten kulinarischen Stile in hochwertigen Restaurants in Shanghai gefunden werden. Der Bund, die Huaihai Road und die Xintiandi-Gebiete sind Zentren für gehobene Restaurants.</p>
        <p><strong>Repräsentative Restaurants:</strong> M on the Bund im Three on the Bund, Sinan Mansions in der Sinan Road und Xintiandi in der Huaihai Road beherbergen alle zahlreiche qualitativ hochwertige internationale Restaurants und verleihen Shanghai ein internationales Speiseerlebnis.</p>
        `
      },
      {
        title: 'Kulturelle Einblicke',
        content: `
        <h3>Der Aufstieg und die Entwicklung des modernen Shanghai</h3>
        <p>Shanghais Wandel von einem kleinen Fischerdorf zu einer internationalen Metropole ist eng mit Chinas moderner Geschichte verbunden. Nachdem es 1843 ein Vertragshafen wurde, wuchs Shanghai schnell zum größten Handelshafen und Finanzzentrum des Fernen Ostens. Die Einrichtung ausländischer Konzessionen machte Shanghai zu einer Grenze der Ost-West-Kulturkollision und hinterließ reiche historische Gebäude und kulturelles Erbe.</p>
        <p><strong>Historischer Kontext:</strong> Von der Unterzeichnung des Vertrags von Nanjing bis zur Bildung von Konzessionen, vom Wohlstand der zehn Meilen ausländischer Siedlungen bis zu den Wunden des Krieges, und dann zur Entwicklung nach der Gründung des Neuen China und dem schnellen Wachstum seit der Reform und Öffnung, spiegelt Shanghais Geschichte Chinas Modernisierungsprozess wider.</p>

        <h3>Haipai-Kultur</h3>
        <p>Die Haipai-Kultur ist Shanghais einzigartige regionale Kultur, die durch Offenheit, Innovation und Inklusivität gekennzeichnet ist. Von der Haipai-Literatur über die Haipai-Malerei bis hin zum Haipai-Drama und Haipai-Kino haben sich verschiedene Kunstformen in Shanghai vereint und strahlen einen unverwechselbaren Charme aus.</p>
        <p><strong>Kulturelle Merkmale:</strong> Die Shanghaier schätzen Raffinesse und Mode, befürworten pragmatische Rationalität und übernehmen das Beste aus verschiedenen Quellen, um neue kulturelle Ausdrucksformen zu schaffen und einen unverwechselbaren Haipai-Lebensstil und Werte zu formen.</p>

        <h3>Jiangnan-Wasserstadtkultur</h3>
        <p>Trotz schneller Modernisierung bewahrt Shanghai immer noch das kulturelle Erbe der Jiangnan-Wasserstädte. Von der Gartenarchitektur bis zu den Essgewohnheiten, von den Dialektmerkmalen bis zu den Volkskünsten ist der Einfluss der Jiangnan-Kultur überall sichtbar.</p>
        <p><strong>Regionale Merkmale:</strong> Antike Städte um Shanghai wie Zhujiajiao, Qibao und Fengjing bewahren relativ vollständige Jiangnan-Wasserstadtlandschaften, mit kleinen Brücken, fließendem Wasser, weißen Mauern und schwarzen Ziegeldächern, die reiche historische und kulturelle Konnotationen tragen.</p>

        <h3>Zeitgenössische kulturelle Innovation in Shanghai</h3>
        <p>Das heutige Shanghai baut sich aktiv als globales Zentrum für kulturelle Kreativität auf. Vom Shanghai International Film Festival über die Shanghai Art Fair bis hin zur Shanghai Fashion Week, von zeitgenössischen Kunstvierteln bis zu Designzentren führt Shanghai den Trend der chinesischen Kulturinnovation in verschiedenen Bereichen an.</p>
        <p><strong>Entwicklungstrends:</strong> Ein beachtliches Merkmal der kulturellen Entwicklung Shanghais ist der Fokus auf die Kombination von kulturellen Kreativindustrien mit Stadterneuerung, die Umwandlung historischer Gebäude in kreative Räume und die Einflößung moderner Vitalität bei gleichzeitigem Schutz der traditionellen Kultur.</p>
        `
      }
    ]
  }
} as Record<Language, DestinationContent>;

// 添加上海内容中缺失的语言版本以修复类型错误
if (!shanghaiContent.es) {
  shanghaiContent.es = {
    title: 'Shanghái: La Perla de Oriente',
    subtitle: 'Una metrópolis internacional donde se fusionan la modernidad y la cultura tradicional',
    sections: [
      {
        title: 'Primeras impresiones',
        content: `
        <p>Shanghái, el mayor centro económico de China, combina la prosperidad de una metrópolis moderna con el encanto de la China tradicional. Desde la exposición arquitectónica internacional en el Bund hasta el moderno horizonte de rascacielos en Lujiazui, desde los jardines tradicionales de Yuyuan hasta la vida cotidiana en la ciudad antigua, Shanghái muestra paisajes urbanos diversos y ricos.</p>
        <p>Como ventana de la reforma y apertura de China, Shanghái muestra los impresionantes logros de la modernización de China mientras preserva su profunda historia y patrimonio cultural. Al caminar por las calles de Shanghái, puedes ver edificios de la época colonial y rascacielos modernos en lados opuestos de la misma calle, experimentando la sensación única de superposición temporal de esta ciudad.</p>
        `
      },
      {
        title: 'Información básica',
        content: `
        <p><strong>Mejor época para visitar:</strong> La primavera (marzo-mayo) y el otoño (septiembre-noviembre) son las temporadas ideales para visitar Shanghái con temperaturas confortables.</p>
        <p><strong>Características climáticas:</strong> Clima monzónico subtropical con estaciones marcadas. Veranos calurosos y húmedos, inviernos fríos y húmedos, primavera y otoño confortables.</p>
        <p><strong>Transporte:</strong> Shanghái cuenta con una red de metro bien desarrollada que cubre las principales atracciones, un sistema de autobuses integral, taxis y servicios de transporte compartido convenientes, y opciones de barco entre algunas áreas escénicas.</p>
        <p><strong>Duración recomendada de visita:</strong> 4-5 días para explorar Shanghái en profundidad y un mínimo de 2-3 días para las atracciones principales.</p>
        <p><strong>Nivel de costos:</strong> Como ciudad de primer nivel, Shanghái tiene un costo de vida relativamente alto, pero con grandes diferencias entre áreas. El Bund, Nanjing Road y otros distritos comerciales son más caros, y las áreas normales son más baratas.</p>
        `
      },
      {
        title: 'Atracciones imprescindibles',
        content: `
        <h3>El Bund (Waitan)</h3>
        <p>El Bund es un hito emblemático de Shanghái, con 52 edificios históricos diferentes a lo largo del río Huangpu, conocido como la "exposición de arquitectura internacional" y ha sido testigo de 100 años de la historia moderna de Shanghái. Frente al río están los modernos rascacielos de Lujiazui en Pudong, mostrando el sorprendente contraste entre "lo viejo y lo nuevo" en Shanghái.</p>
        <p><strong>Consejos de viaje:</strong> Se recomienda visitar al atardecer o por la noche para disfrutar del espectáculo de luces de neón de Pudong. Ten cuidado con tus pertenencias ya que hay mucha gente. El área del Bund alberga muchos hoteles y restaurantes de lujo donde puedes cenar con vistas hermosas.</p>

        <h3>Jardín Yuyuan y Ciudad Antigua</h3>
        <p>Construido durante la dinastía Ming, Yuyuan es una obra representativa de los jardines clásicos de la zona de Jiangnan, con pabellones, salas, montañas de piedra y estanques dispuestos exquisitamente. El área circundante de la Ciudad Antigua preserva la atmósfera tradicional de Shanghái y es un buen lugar para probar la auténtica cocina de Shanghái y comprar artesanías tradicionales.</p>
        <p><strong>Consejos de viaje:</strong> Es mejor visitar Yuyuan en días laborables para evitar las multitudes de fin de semana. Huxinting, Yulinlong y Dajiashan son lugares populares para fotografiar. El Festival de Linternas de Yuyuan durante el Año Nuevo Chino es una de las celebraciones más tradicionales en Shanghái, pero espera enormes multitudes.</p>

        <h3>Calle peatonal de Nanjing Road</h3>
        <p>Nanjing Road es una de las calles comerciales más famosas de China, combinando compras, comida y entretenimiento. Reúne tiendas tradicionales y centros comerciales modernos, desde tiendas tradicionales centenarias como Laofengxiang y Wangbaohe hasta marcas internacionales modernas, satisfaciendo diversas necesidades de compras.</p>
        <p><strong>Consejos de viaje:</strong> Nanjing Road está dividida en secciones este y oeste; la sección este es una calle peatonal y la oeste es un área comercial de alta gama. El tranvía de estilo antiguo es una característica aquí, ofreciendo una vista panorámica de toda la calle peatonal. Nanjing Road por la noche con luces de neón parpadeantes tiene un encanto especial.</p>

        <h3>Museo de Shanghái</h3>
        <p>Ubicado en la Plaza del Pueblo, el Museo de Shanghái es un museo de arte antiguo chino de primera clase, que ha recopilado más de 120,000 valiosos artefactos desde el Neolítico hasta las dinastías Ming y Qing, con bronces, cerámica, caligrafía y pintura como las cuatro colecciones más destacadas.</p>
        <p><strong>Consejos de viaje:</strong> El Museo de Shanghái es gratuito, pero requiere reserva previa. Dedica al menos medio día para la visita. Hay audioguías disponibles en chino e inglés. Cada piso tiene exposiciones temáticas que puedes visitar según tus intereses.</p>

        <h3>Distrito Financiero de Lujiazui</h3>
        <p>Como centro financiero de Shanghái, Lujiazui reúne rascacielos icónicos como la Torre de la Perla Oriental, la Torre Jinmao, la Torre de Shanghái y el Centro Financiero Mundial de Shanghái, mostrando el paisaje urbano moderno y la fortaleza económica de Shanghái.</p>
        <p><strong>Consejos de viaje:</strong> Puedes elegir visitar la plataforma de observación de la Torre de Shanghái (piso 118), la sala de observación de la Torre Jinmao (piso 88), o la sala de observación del Centro Financiero Mundial (piso 100) para una vista panorámica de Shanghái. El corredor de observación aéreo transparente de la Perla Oriental también es una experiencia emocionante en las alturas. La vista del río Huangpu después del atardecer es especialmente magnífica.</p>
        `
      },
      {
        title: 'Experiencias únicas',
        content: `
        <h3>Encontrar el antiguo Shanghái en la antigua Concesión Francesa</h3>
        <p>La antigua Concesión Francesa es ahora el área más exótica de Shanghái, con numerosas villas jardín y edificios shikumen de las décadas de 1920 y 1930 preservados. Las calles flanqueadas por plátanos, edificios de estilo antiguo y tiendas boutique a lo largo de Wukang Road, Fuxing Road y Huaihai Road muestran una mezcla única de historia y moda de Shanghái.</p>
        <p><strong>Actividades recomendadas:</strong> Pasear bajo los plátanos de Wukang Road, visitar la antigua residencia de Sun Yat-sen, descansar en una cafetería convertida de una antigua villa, y explorar las antiguas residencias de celebridades en Sinan Road, todos son excelentes formas de experimentar la atmósfera del antiguo Shanghái.</p>

        <h3>Crucero nocturno por el río Huangpu</h3>
        <p>Tomar un crucero por el río Huangpu es la mejor manera de disfrutar de la vista nocturna de Shanghái. Desde el barco, puedes ver las orillas magníficamente iluminadas en ambos lados—edificios históricos del Bund en un lado y rascacielos modernos que simbolizan el futuro en el otro, mostrando perfectamente el encanto de Shanghái.</p>
        <p><strong>Actividades recomendadas:</strong> Elige un crucero después de las 8 p.m. cuando todas las luces en ambas orillas están encendidas y crean el espectáculo más impresionante. Están disponibles tanto cruceros regulares como cruceros con cena, y el tiempo de viaje es de aproximadamente 1 hora. Es más conveniente abordar desde el muelle de Shiliupu o el muelle del puente Nanpu.</p>

        <h3>Experimentar la vida en los longtang de Shanghái</h3>
        <p>Los longtang (callejones) son una forma única de vivienda en Shanghái, con arquitectura shikumen y vida de callejón que guarda las memorias de generaciones de residentes de Shanghái. Áreas como Tianzifang y Xintiandi están preservando el estilo arquitectónico de estos callejones mientras infunden arte moderno y elementos comerciales.</p>
        <p><strong>Actividades recomendadas:</strong> Tianzifang tiene numerosos estudios creativos y tiendas especializadas donde puedes comprar obras de diseñadores. Xintiandi combina gastronomía, moda y arte. Mientras tanto, ciudades antiguas como Zhujiajiao y Qibao preservan un estilo de vida más auténtico de Jiangnan, y todas merecen una visita.</p>

        <h3>Explorar la moda y el arte de Shanghái</h3>
        <p>Como capital de la moda de China, Shanghái presume de numerosos lugares de arte contemporáneo y centros de diseño. Desde el Centro de Arte del Bund Oeste hasta el Parque Creativo M50, desde el Museo of Contemporary Art Shanghai hasta el Museo Yuz, mostrando el próspero ecosistema de arte contemporáneo de Shanghái.</p>
        <p><strong>Actividades recomendadas:</strong> Visita las exposiciones de vanguardia en el Museo of Contemporary Art Shanghai, aprende sobre tendencias artísticas internacionales en el Centro de Arte del Bund Oeste, interactúa con artistas en el Parque Creativo M50 y siente la vibrante atmósfera artística de Shanghái. La Semana del Arte de Shanghái anual en noviembre es una fiesta para los amantes del arte.</p>
        `
      },
      {
        title: 'Guía gastronómica',
        content: `
        <h3>Cocina local de Shanghái</h3>
        <p>La cocina de Shanghái, conocida como Benbangcai, se caracteriza por sabores auténticos, enfatizando las características originales de los ingredientes, con un ligero dulzor y técnica refinada. Hongshaorou (cerdo estofado), Qingzhehexie (cangrejo al vapor), Babao Ya (pato con ocho tesoros) y Xiangyushanhu (sopa de anguila) son platos clásicos de la cocina de Shanghái. Restaurantes tradicionales como Songhélóu, Lao Zhengxing y Dexingguan son lugares ideales para probar la auténtica cocina de Shanghái.</p>
        <p><strong>Sugerencias para degustar:</strong> Benbang enfatiza los ingredientes de temporada, como los cangrejos peludos en otoño o la sopa de dumplings con huevas de cangrejo en invierno. Acompañar la comida con una pequeña cantidad de vino amarillo puede resaltar mejor los sabores de los platos Benbang.</p>

        <h3>Aperitivos especiales de Shanghái</h3>
        <p>Shanghái ofrece diversos aperitivos especiales, desde desayunos como Shengjianbao (dumplings fritos en sartén), Xiaolongbao (dumplings con sopa), Youtiao (palitos de masa frita) y Doujiang (leche de soja), hasta comida callejera como pasteles de concha de cangrejo, fideos con aceite de cebollino, Shumai y pasteles de arroz glutinoso, todos reflejando la sofisticada búsqueda culinaria de los shanghaineses.</p>
        <p><strong>Lugares recomendados:</strong> Los famosos aperitivos de Shanghái incluyen Shendacheng en Nanjing Road, el Restaurante de Dumplings Nanxiang en el Templo Chenghuang, y el cordero finamente cortado en Zhujiajiao. La calle gastronómica de Liuzhou Road en el distrito de Huangpu y la calle gastronómica de Old West Gate también reúnen numerosos aperitivos auténticos.</p>

        <h3>Cocina Jiangzhe y fusión de Shanghái</h3>
        <p>Debido a la proximidad a las regiones de Jiangsu y Zhejiang, la cocina de Shanghái está profundamente influenciada por la cocina Jiangzhe, con cocina ligera y fresca de Jiangnan que se encuentra en toda la ciudad. En los últimos años, ha surgido la cocina de fusión de Shanghái, combinando elementos orientales y occidentales y creando muchos platos innovadores.</p>
        <p><strong>Sugerencias para degustar:</strong> Pez dorado, Xihucaoyu (pescado del Lago Oeste en salsa de vinagre) y Yanduixian (sopa de cerdo salado y verduras frescas) son sabores típicos de Jiangzhe. Mientras tanto, nuevos restaurantes como Jesse y 1886 en Tianping Road ofrecen cocina de fusión de Shanghái innovadora que vale la pena probar.</p>

        <h3>Colección culinaria global</h3>
        <p>Como metrópolis internacional, Shanghái reúne cocinas de todo el mundo. Desde cocina francesa, italiana y japonesa hasta diversas cocinas regionales chinas, casi cualquier estilo culinario bien conocido se puede encontrar en restaurantes de alto nivel en Shanghái. Las áreas del Bund, Huaihai Road y Xintiandi son centros de restaurantes de lujo.</p>
        <p><strong>Restaurantes representativos:</strong> M on the Bund en Three on the Bund, Sinan Mansions en Sinan Road y Xintiandi en Huaihai Road, todos albergan numerosos restaurantes internacionales de calidad, añadiendo una experiencia gastronómica internacional a Shanghái.</p>
        `
      },
      {
        title: 'Perspectivas culturales',
        content: `
        <h3>El surgimiento y desarrollo del Shanghái moderno</h3>
        <p>El desarrollo de Shanghái de un pequeño pueblo pesquero a una metrópolis internacional está estrechamente relacionado con la historia moderna de China. Después de la apertura del puerto en 1843, Shanghái rápidamente se convirtió en el mayor puerto comercial y centro financiero del Lejano Oriente. El establecimiento de concesiones hizo de Shanghái la primera línea de choque entre las culturas oriental y occidental, dejando ricos edificios históricos y patrimonio cultural.</p>
        <p><strong>Contexto histórico:</strong> Desde la firma del Tratado de Nanjing hasta la formación de concesiones, desde la prosperidad de Shiliyanghang (la Calle Extranjera de Diez Millas) hasta las cicatrices de la guerra, y desde el desarrollo después del establecimiento de la Nueva China hasta el rápido crecimiento después de la reforma y apertura, la historia de Shanghái refleja el proceso de modernización de China.</p>

        <h3>Cultura Haipai</h3>
        <p>La cultura Haipai es la cultura local única de Shanghái, caracterizada por apertura, innovación e inclusividad. Desde la literatura Haipai, pintura Haipai hasta teatro Haipai y cine Haipai, diversas formas artísticas se han fusionado en Shanghái, irradiando un encanto único.</p>
        <p><strong>Características culturales:</strong> Los shanghaineses valoran el refinamiento y la moda, abogan por el racionalismo práctico, y son excelentes en absorber la esencia de diversas fuentes para crear nuevas expresiones culturales, formando un estilo de vida y valores Haipai únicos.</p>

        <h3>Cultura acuática de Jiangnan</h3>
        <p>A pesar de la rápida modernización, Shanghái todavía conserva el patrimonio cultural acuático de Jiangnan. Desde la arquitectura de jardines hasta las costumbres dietéticas, desde las características dialectales hasta el arte folklórico, la influencia de la cultura de Jiangnan es evidente en todas partes.</p>
        <p><strong>Características regionales:</strong> Las ciudades antiguas alrededor de Shanghái como Zhujiajiao, Qibao y Fengjing preservan paisajes relativamente completos de las ciudades acuáticas de Jiangnan, con pequeños puentes, aguas corrientes, paredes blancas y techos de tejas negras portando ricas connotaciones históricas y culturales.</p>

        <h3>Innovaciones culturales modernas de Shanghái</h3>
        <p>El Shanghái de hoy se está posicionando activamente como un centro global de creatividad cultural. Desde el Festival Internacional de Cine de Shanghái, la Feria de Arte de Shanghái hasta la Semana de la Moda de Shanghái, desde distritos de arte contemporáneo hasta centros de diseño, Shanghái está liderando tendencias de innovación cultural china en diversos campos.</p>
        <p><strong>Tendencias de desarrollo:</strong> Una característica notable del desarrollo cultural de Shanghái es el énfasis en combinar la industria creativa cultural y la regeneración urbana, convirtiendo edificios históricos en espacios creativos e infundiendo vitalidad moderna mientras preserva la cultura tradicional.</p>
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