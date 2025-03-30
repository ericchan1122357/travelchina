// 中文内容
export function getChineseContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">初印象</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        丽江位于云南省西北部，是纳西族的家乡，拥有被列为世界文化遗产的&ldquo;丽江古城&rdquo;。这座位于海拔2400多米高原上的古城，三面环山，一面临水，自然景观与文化遗产在此完美融合。清澈的溪流穿过古城，小桥横跨于蜿蜒的石板街道之上。纳西族民居依山势而建，展示了纳西族悠久的历史和独特的东巴文化。丽江不仅拥有壮丽的玉龙雪山，还有美丽的泸沽湖和虎跳峡，被誉为&ldquo;高原的苏州&rdquo;。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最具代表性的特点：</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>世界文化遗产——丽江古城（大研古城）</li>
        <li>纳西东巴文化和东巴象形文字</li>
        <li>玉龙雪山冰川和云杉坪自然景观</li>
        <li>古城内的&ldquo;三水系统&rdquo;和桥水相连的传统建筑布局</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">丽江古城街景</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本信息</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最佳旅游时间</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春季（3-5月）：鲜花盛开，气候宜人</li>
        <li>夏季（6-8月）：避暑胜地，雨季时偶有短暂阵雨</li>
        <li>秋季（9-11月）：天空晴朗，景色最佳</li>
        <li>冬季（12-2月）：温暖的冬日阳光，游客较少</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">气候特点</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>高原季风气候，冬季不太冷，夏季不会特别热</li>
        <li>年平均气温约13℃，阳光充足</li>
        <li>昼夜温差大，需要携带外套</li>
        <li>紫外线强烈，防晒很重要</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">当地交通概况</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>丽江机场有直飞中国主要城市的航班</li>
        <li>古城内主要靠步行，旅游巴士连接各个景点</li>
        <li>参观玉龙雪山需要乘坐旅游巴士和缆车</li>
        <li>推荐租用私家车或报一日游参观附近景点如泸沽湖和虎跳峡</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化与历史概览</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">历史发展</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>宋朝：南诏国的重要城市</li>
        <li>元朝：木氏土司开始在丽江作为纳西族酋长统治</li>
        <li>明清时期：木氏土司的繁荣期，古城格局基本形成</li>
        <li>现代：1997年被列为联合国世界文化遗产</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">纳西文化</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>东巴文化：至今仍在使用的唯一象形文字系统</li>
        <li>古纳西音乐：被认为是古代宫廷音乐的"活化石"</li>
        <li>纳西服饰：女性特色的"阿衣"装束，男性一般穿蓝色布袍</li>
        <li>传统节日：三朵节、火把节、花节等</li>
      </ul>
      
      <div className="my-8">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">东巴文化图片</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必游景点</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">古城区域</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 大研古城（丽江古城）</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        大研古城是丽江古城的核心区域，拥有800多年历史。城市依山而建，街道沿水流延伸，形成独特的&ldquo;三水系统&rdquo;。四方街是古城的中心，曾是古茶马古道上的重要市场。狮子山上的万古楼是俯瞰古城全景的最佳地点。古城内的木府是木氏土司的府邸，建筑雄伟，展示了纳西族的辉煌历史。黑龙潭公园有清澈的水面倒映着玉龙雪山，提供了经典的明信片景观。白天古城散发着古老的魅力，而夜晚则灯火通明，有热闹的酒吧街。春节和重要节日期间，古城会举办各种传统活动，如传统舞蹈和火把节。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">丽江古城四方街图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 束河古镇</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        束河古镇是丽江古城的姐妹城，距大研古城约4公里，相比大研古城更加宁静自然。它曾是茶马古道上的重要市集，也是纳西族先民最早的聚居地之一。古镇内的九鼎龙潭清如明镜，周围是传统的纳西族民居。四方听音广场是束河的中心，周围是各种手工艺作坊和特产店铺。清晨和黄昏漫步束河，可以感受最正宗的纳西风味。束河的客栈和咖啡馆主要隐藏在小巷中，安静优雅，吸引了许多年轻艺术家和旅行者。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">自然景点</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 玉龙雪山</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        玉龙雪山是北半球最南端的雪山，主峰扇子陡海拔达5596米。终年被雪覆盖，形似一条巨龙卧于云端。山上有多个景区，其中冰川公园游客可乘坐大索道抵达海拔4506米处，近距离欣赏壮观的千年冰川。蓝月谷的湖泊呈现梦幻般的蓝色，因此得名"蓝月"。云杉坪是山腰上的高山草甸，夏季被鲜花覆盖，牛羊放牧其中。甘海子是前往雪山必经的通道区域，也是观看和拍摄雪山的绝佳地点。由于海拔较高，游客参观雪山时需注意高原反应，建议提前一天到达丽江适应，并在山上期间适当补充氧气。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">玉龙雪山图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 泸沽湖</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        泸沽湖位于云南和四川的交界处，距丽江约200公里，是云南第二大高原湖泊。湖水清澈见底，四周环山，被称为&ldquo;高原明珠&rdquo;。这里生活着摩梭人，他们保持着独特的母系文化传统，如&ldquo;走婚&rdquo;。湖周围有多个村落，里格半岛和落水村最具代表性。乘坐猪槽船（摩梭人的传统木船）是湖上游客的必备体验，可以欣赏湖景和水中倒影。晚上，游客可以参与摩梭人的篝火晚会，体验他们独特的民族文化。湖边的观景台提供了整个湖区的全景视野，是拍摄日出和日落的最佳地点。
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">丽江传统美食</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">纳西风味与多元化餐饮</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        丽江的饮食结合了纳西、汉、藏等多个民族的烹饪特色。口味通常较为清淡，强调食材的自然风味，并有着独特的腌制和烧烤技术。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 三文鱼和松茸火锅</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        这道火锅结合了高山松茸和山涧溪流的三文鱼，造就了一道极其鲜美的美食。新鲜的松茸散发着独特的香气，三文鱼则鲜嫩肥美。汤底清淡无添加调味料，完全保留了食材的天然风味。品尝这道菜的传统方式有一定的顺序：先吃三文鱼，再吃松茸，最后喝汤，形成一种渐进式的味觉体验。这道菜在丽江古城的高档餐厅可以找到，如&ldquo;一米阳光&rdquo;餐厅和&ldquo;玉龙阁&rdquo;。
      </p>
      
      <div className="my-6">
        {/* 图片占位符 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">三文鱼和松茸火锅图片</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 纳西烤鱼</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        纳西烤鱼是丽江著名的传统菜肴，使用的是丽江特有的高原淡水鱼，配以当地香料调味，在篝火上炭烤而成。鱼肉外酥里嫩，味道鲜美，带有野草和松树的微妙气息。传统的食用方法是裹在纳西粑粑（一种扁平面饼）中食用，创造出独特的口感。在古城的七一街与五一街交汇处有很多纳西烤鱼店，其中&ldquo;老奶奶烤鱼&rdquo;最为正宗。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. 丽江粑粑</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        丽江粑粑是纳西族传统的糕点，由荞麦或玉米面制成，形状扁圆，质地中软。食用方式多样：可蘸蜂蜜或奶油糖，也可包裹肉类或蔬菜。在整个古城，可以看到老年妇女制作和销售新鲜的粑粑，香气四溢，美味实惠。经典的品尝地点有四方街附近的&ldquo;纳西奶奶手工粑粑&rdquo;和狮子山脚下的&ldquo;妈妈粑粑&rdquo;。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">4. 腊排骨</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        丽江腊排骨是当地人冬季重要的食物储备，也是最具代表性的纳西特色菜之一。采用山区饲养的猪排骨，用盐、花椒、八角等香料腌制，然后悬挂在火炉上熏干，可以保存数月。通常与土豆和萝卜一起炖煮，形成美味持久的回味。这道菜可以在丽江古城的&ldquo;东巴秘境&rdquo;和&ldquo;千味轩&rdquo;等餐厅找到，他们使用正宗的方法烹制。
      </p>
    </>
  );
} 