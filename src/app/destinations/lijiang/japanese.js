// 日本語コンテンツ
export function getJapaneseContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">第一印象</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        麗江は雲南省の北西部に位置し、ナシ族の発祥地であり、ユネスコ世界文化遺産に登録されている「麗江古城」の地でもあります。標高2,400メートル以上の高地に位置するこの古代の町は、三方を山に囲まれ、一方を水に面しています。自然の風景と文化遺産がここで完璧に調和しています。透き通った小川が古城を流れ、小さな橋が蛇行する石畳の道を横切っています。山岳地形に合わせて建てられたナシ族の民家は、ナシ民族の長い歴史と独特の東巴文化を示しています。麗江には印象的な玉龍雪山だけでなく、美しい瀘沽湖と虎跳峡もあり、「高原の蘇州」という愛称で呼ばれています。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">最も代表的な特徴：</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>世界文化遺産 — 麗江古城（大研古城）</li>
        <li>ナシ族の東巴文化と東巴象形文字</li>
        <li>玉龍雪山の氷河と雲杉坪の自然景観</li>
        <li>古城内の「三水システム」と橋や小川と調和した伝統的な建築レイアウト</li>
      </ul>
      
      <div className="my-8">
        {/* 画像プレースホルダー */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">麗江古城の街並み</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">基本情報の概要</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">ベストシーズン</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>春（3月〜5月）：花が咲き誇り、気候が快適</li>
        <li>夏（6月〜8月）：暑さから逃れるのに最適な場所、雨季には短い夕立がときどき発生</li>
        <li>秋（9月〜11月）：澄んだ空、最高の景色</li>
        <li>冬（12月〜2月）：暖かい冬の日差し、観光客が比較的少ない</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">気候の特徴</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>高原モンスーン気候、冬は極端に寒くなく、夏も極端に暑くない</li>
        <li>年間平均気温は約13℃、日照が豊富</li>
        <li>昼夜の気温差が大きいため、ジャケットが必要</li>
        <li>紫外線が強いため、日焼け対策が重要</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">現地交通の概要</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>麗江空港から中国の主要都市への直行便あり</li>
        <li>古城内では徒歩が主な交通手段、観光バスが異なる観光スポットを結んでいる</li>
        <li>玉龍雪山を訪れるには観光バスとロープウェイが必要</li>
        <li>瀘沽湖や虎跳峡などの近隣の観光地を訪れるには、レンタカーや日帰りツアーがおすすめ</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">文化と歴史の概要</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">歴史的発展</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>宋王朝：南詔王国の重要な都市</li>
        <li>元王朝：木氏一族が麗江のナシ族の首長として統治し始める</li>
        <li>明・清王朝：木氏首長の繁栄期、古城のレイアウトの基本が形成される</li>
        <li>現代：1997年にユネスコ世界文化遺産に登録</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">ナシ族の文化</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>東巴文化：今日まで使用されている唯一の象形文字システム</li>
        <li>ナシ古楽：古代宮廷音楽の「生きた化石」と考えられている</li>
        <li>ナシ族の服装：女性のための独特の「アイ」衣装、男性は一般的に青い布のローブを着用</li>
        <li>伝統的な祭り：三朶節、松明祭り、花祭りなど</li>
      </ul>
      
      <div className="my-8">
        {/* 画像プレースホルダー */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">東巴文化のイメージ</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">必見の観光スポット</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">古城エリア</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 大研古城（麗江古城）</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        大研古城は800年以上の歴史を持つ麗江古城の中心エリアです。この街は山の斜面に沿って建設され、水の流れに沿って広がる通りが独特の「三水システム」を形成しています。四方街は古城の中心であり、古代のお茶馬古道の重要な市場でした。獅子山の万古楼は古城を一望できる最高の場所です。古城内の木府は木氏首長の邸宅で、ナシ族の栄光ある歴史を示す壮大な建築物です。黒龍潭公園には玉龍雪山を映し出す澄んだ水があり、クラシックな絵葉書のような風景を提供しています。日中は古城が古代の魅力を放ち、夜になると活気あるバー街として輝きます。春節や主要な祝日の間、古城では伝統的な舞踊や松明祭りなどの様々な伝統的な活動が行われます。
      </p>
      
      <div className="my-6">
        {/* 画像プレースホルダー */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">麗江古城四方街のイメージ</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 束河古鎮</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        束河古鎮は麗江古城の姉妹都市で、大研古城から約4キロメートル離れており、大研に比べてより静かで自然に近い環境にあります。ここはお茶馬古道の重要な交易都市であり、ナシ族の祖先の最も初期の居住地の一つでした。古鎮の九鼎龍潭は鏡のように澄んでおり、伝統的なナシ族の家屋に囲まれています。四方聴松広場は束河の中心で、様々な手工芸のワークショップや特産品店に囲まれています。早朝や夕暮れ時に束河を散策すると、最も本格的なナシ族の風味を感じることができます。束河のゲストハウスやカフェは主に静かでエレガントな小路に隠れており、多くの若いアーティストや旅行者を引き寄せています。
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">自然の名所</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 玉龍雪山</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        玉龍雪山は北半球で最も南に位置する雪山で、主峰の扇子陡は標高5,596メートルに達します。一年中雪に覆われており、雲の間に横たわる巨大な龍のように見えます。この山にはいくつかの観光エリアがあり、その中で氷河公園では訪問者は大型ロープウェイに乗って標高4,506メートルの氷河に到達し、壮大な千年の氷河を間近で鑑賞することができます。藍月谷の湖は夢のような青色を見せ、「青い月」という名前を得ました。雲杉坪は山の斜面に位置する高山草原で、夏には花で覆われ、牛や羊が草を食べています。甘海子は雪山への道の途中で必ず通過するエリアで、山を観察し写真を撮るのに最適な場所です。高度が高いため、訪問者は山を訪れる際に高山病に注意する必要があります。前日に麗江に到着して順応し、山にいる間は適切に酸素を補給することをお勧めします。
      </p>
      
      <div className="my-6">
        {/* 画像プレースホルダー */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">玉龍雪山のイメージ</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 瀘沽湖</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        瀘沽湖は雲南と四川の境界に位置し、麗江から約200キロメートル離れており、雲南で2番目に大きな高原湖です。湖水は底まで澄んでおり、周囲を山に囲まれ、「高原の真珠」として知られています。ここは「歩婚」などのユニークな母系文化の伝統を維持しているモソ族の故郷です。湖の周りにはいくつかの村があり、里格半島と落水村が最も代表的です。モソ族の伝統的な木製ボートである「豚の飼い葉桶ボート」に乗ることは湖の訪問者にとって不可欠な体験であり、湖の風景と水面の反射を楽しむことができます。夕方には、モソ族の焚き火パーティーに参加して彼らのユニークな民族文化を体験することができます。湖のほとりの展望台は湖全体のパノラマビューを提供し、日の出や日没を撮影するのに最適な場所です。
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">麗江の伝統料理</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">ナシ族の風味と多様な料理</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        麗江料理はナシ族、漢族、チベット族を含む複数の民族グループの料理特性を組み合わせています。味は一般的にマイルドで、材料の自然な味を強調し、独特の漬け込みや焼き技術が特徴です。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 鮭と松茸のしゃぶしゃぶ</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        このしゃぶしゃぶは高原の松茸と山間の渓谷の鮭を組み合わせて、特に新鮮で美味しい料理を作り出します。新鮮な松茸は独特の香りを放ち、鮭は柔らかくて豊かな味わいです。スープのベースは調味料を加えずに軽く、材料の自然な味を完全に保ちます。この料理を楽しむ伝統的な方法は順序に従います：まず鮭、次に松茸、最後にスープを飲むという段階的な味の体験を作り出します。この料理は麗江古城の高級レストランで見つけることができ、「一メートルの日差し」レストランや「玉龍閣」などがあります。
      </p>
      
      <div className="my-6">
        {/* 画像プレースホルダー */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">鮭と松茸のしゃぶしゃぶのイメージ</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. ナシ族の焼き魚</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        ナシ族の焼き魚は麗江の有名な伝統料理で、麗江でしか見られない高原の淡水魚を地元のスパイスで味付けし、焚き火の上で炭火焼きにします。魚は外はカリッと中はジューシーで、野生の草や松の微妙なヒントを含んだ美味しい風味があります。伝統的な食べ方はナシババ（一種の平らなパン）に包んで食べることで、ユニークな味を作り出します。古城の七月一日街と五月一日街の交差点には多くのナシ族の焼き魚レストランがあり、「おばあさんの焼き魚」が最も本格的な味を提供しています。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. 麗江ババ</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        麗江ババはそば粉やトウモロコシ粉で作られた伝統的なナシ族のケーキで、平らな円形の形状で中程度の柔らかい質感を持っています。これはいくつかの方法で食べることができます：蜂蜜やバターシュガーに浸すか、肉や野菜を包む方法があります。古城全体で年配の女性たちが新鮮なババを作って販売している姿を見ることができ、香り高く美味しくてリーズナブルです。四方街近くの「ナシおばあさんの手作りババ」や獅子山のふもとの「お母さんのババ」が試食するのに良い定番の場所です。
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">4. 塩漬け豚バラ肉</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        麗江の塩漬け豚バラ肉は地元の人々にとって重要な冬の食料備蓄であり、最も代表的なナシ族の料理の一つです。山で育った豚のバラ肉で作られ、塩、花椒（山椒）、八角、およびその他のスパイスで味付けされた後、かまどの上に吊るして燻製および乾燥させ、これにより数ヶ月間保存することができます。通常はジャガイモと大根と一緒に煮込まれ、長続きする後味を持つ美味しい風味を生み出します。この料理は麗江古城の「東巴の秘密領域」や「千味」などのレストランで見つけることができ、これらは伝統的な方法を使用して調理しています。
      </p>
    </>
  );
} 