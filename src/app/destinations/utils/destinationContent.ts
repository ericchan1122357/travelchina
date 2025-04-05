export type Language = "zh" | "en" | "fr" | "de" | "es" | "ja" | "ko" | "ru";

export interface DestinationSection { title: string; content: string; }

export interface DestinationContent { title: string; subtitle: string; sections: DestinationSection[]; }

export const beijingContent: Record<Language, DestinationContent> = {
  zh: { 
    title: "北京首都", 
    subtitle: "古今交融的东方帝都", 
    sections: [ 
      { 
        title: "初印象", 
        content: " <p>北京，一座拥有3000多年历史、800多年建都史的城市，见证了中国千年的历史变迁。作为中国的首都，这里既有故宫、天坛、颐和园等恢宏的古代建筑，也有鸟巢、水立方等现代建筑奇迹，完美地融合了古今元素。</p> <p>漫步北京的胡同与四合院，探寻老北京的传统生活方式；逛逛王府井、三里屯等繁华商圈，感受这座大都市的现代活力。北京是一座令人着迷的城市，等待着您的探索。</p>" 
      } 
    ] 
  },
  en: { 
    title: "Beijing Capital", 
    subtitle: "Ancient and modern elements intertwined in the oriental imperial capital", 
    sections: [ 
      { 
        title: "First Impressions", 
        content: " <p>Beijing, a city with over 3000 years of history and 800 years as a capital, has witnessed China's historical changes through the millennia. As China's capital, it features both majestic ancient architectures like the Forbidden City, Temple of Heaven, and Summer Palace, as well as modern architectural wonders like the Bird's Nest and Water Cube, perfectly blending ancient and modern elements.</p> <p>Stroll through Beijing's hutongs and courtyard houses to explore the traditional way of life in old Beijing; wander around bustling commercial areas like Wangfujing and Sanlitun to feel the modern vitality of this metropolis. Beijing is a city that captivates visitors, waiting for your exploration.</p>" 
      } 
    ] 
  },
  fr: { 
    title: "Pékin Capitale", 
    subtitle: "Éléments anciens et modernes entrelacés dans la capitale impériale orientale", 
    sections: [ 
      { 
        title: "Premières Impressions", 
        content: " <p>Pékin, une ville avec plus de 3000 ans d'histoire et 800 ans comme capitale, a été témoin des changements historiques de la Chine à travers les millénaires. En tant que capitale chinoise, elle présente à la fois des architectures anciennes majestueuses comme la Cité Interdite, le Temple du Ciel et le Palais d'Été, ainsi que des merveilles architecturales modernes comme le Nid d'Oiseau et le Cube d'Eau, mélangeant parfaitement éléments anciens et modernes.</p> <p>Promenez-vous dans les hutongs et les cours carrées de Pékin pour découvrir le mode de vie traditionnel de l'ancien Pékin; flânez dans les zones commerciales animées comme Wangfujing et Sanlitun pour ressentir la vitalité moderne de cette métropole. Pékin est une ville qui captive les visiteurs, attendant votre exploration.</p>" 
      } 
    ] 
  },
  de: { 
    title: "Peking Hauptstadt", 
    subtitle: "Alte und neue Elemente verflochten in der östlichen Kaiserhauptstadt", 
    sections: [ 
      { 
        title: "Erste Eindrücke", 
        content: " <p>Peking, eine Stadt mit über 3000 Jahren Geschichte und 800 Jahren als Hauptstadt, hat Chinas historische Veränderungen über die Jahrtausende miterlebt. Als Chinas Hauptstadt zeigt es sowohl majestätische alte Architekturen wie die Verbotene Stadt, den Himmelstempel und den Sommerpalast als auch moderne architektonische Wunder wie das Vogelnest und den Wasserwürfel, die alte und moderne Elemente perfekt miteinander verbinden.</p> <p>Schlendern Sie durch Pekings Hutongs und Innenhofhäuser, um die traditionelle Lebensweise im alten Peking zu erkunden; wandern Sie durch geschäftige Handelsviertel wie Wangfujing und Sanlitun, um die moderne Vitalität dieser Metropole zu spüren. Peking ist eine Stadt, die Besucher fesselt und auf Ihre Erkundung wartet.</p>" 
      } 
    ] 
  },
  es: { 
    title: "Pekín Capital", 
    subtitle: "Elementos antiguos y modernos entrelazados en la capital imperial oriental", 
    sections: [ 
      { 
        title: "Primeras Impresiones", 
        content: " <p>Pekín, una ciudad con más de 3000 años de historia y 800 años como capital, ha sido testigo de los cambios históricos de China a través de los milenios. Como capital de China, presenta tanto arquitecturas antiguas majestuosas como la Ciudad Prohibida, el Templo del Cielo y el Palacio de Verano, así como maravillas arquitectónicas modernas como el Nido de Pájaro y el Cubo de Agua, combinando perfectamente elementos antiguos y modernos.</p> <p>Pasee por los hutongs y casas con patio de Pekín para explorar la forma de vida tradicional en el antiguo Pekín; deambule por zonas comerciales bulliciosas como Wangfujing y Sanlitun para sentir la vitalidad moderna de esta metrópolis. Pekín es una ciudad que cautiva a los visitantes, esperando su exploración.</p>" 
      } 
    ] 
  },
  ja: { 
    title: "北京首都", 
    subtitle: "東洋の帝都に絡み合う古今の要素", 
    sections: [ 
      { 
        title: "最初の印象", 
        content: " <p>北京は、3000年以上の歴史と800年の首都としての歴史を持つ都市であり、千年にわたる中国の歴史的変化を目撃してきました。中国の首都として、紫禁城、天壇、頤和園などの荘厳な古代建築と、鳥の巣、水立方などの現代建築の驚異が共存し、古今の要素が完璧に調和しています。</p> <p>北京のフートンと四合院を散策して、古い北京の伝統的な生活様式を探検しましょう。王府井や三里屯などの賑やかな商業地域をぶらぶら歩いて、この大都市の現代的な活力を感じてください。北京は訪問者を魅了する都市であり、あなたの探検を待っています。</p>" 
      } 
    ] 
  },
  ko: { 
    title: "베이징 수도", 
    subtitle: "동양 제국 수도에 얽힌 고대와 현대의 요소", 
    sections: [ 
      { 
        title: "첫인상", 
        content: " <p>3000년이 넘는 역사와 800년의 수도 역사를 가진 베이징은 천년 동안 중국의 역사적 변화를 목격했습니다. 중국의 수도로서, 자금성, 천단, 이화원과 같은 웅장한 고대 건축물과 새의 둥지, 물 큐브와 같은 현대 건축 경이로움이 공존하여 고대와 현대 요소가 완벽하게 조화를 이룹니다.</p> <p>베이징의 후통과 사합원을 거닐며 옛 베이징의 전통적인 생활 방식을 탐험하세요. 왕푸징, 싼리툰과 같은 활기찬 상업 지역을 거닐며 이 대도시의 현대적 활력을 느껴보세요. 베이징은 방문객을 매료시키는 도시로, 여러분의 탐험을 기다리고 있습니다.</p>" 
      } 
    ] 
  },
  ru: { 
    title: "Пекин Столица", 
    subtitle: "Древние и современные элементы переплетаются в восточной имперской столице", 
    sections: [ 
      { 
        title: "Первые впечатления", 
        content: " <p>Пекин, город с более чем 3000-летней историей и 800 годами в качестве столицы, стал свидетелем исторических изменений Китая на протяжении тысячелетий. Как столица Китая, он представляет собой как величественные древние архитектурные сооружения, такие как Запретный город, Храм Неба и Летний дворец, так и современные архитектурные чудеса, такие как Птичье гнездо и Водный куб, идеально сочетающие древние и современные элементы.</p> <p>Прогуляйтесь по хутонам и дворам Пекина, чтобы изучить традиционный образ жизни в старом Пекине; побродите по оживленным торговым районам, таким как Ванфуцзин и Саньлитунь, чтобы почувствовать современную жизненную силу этого мегаполиса. Пекин - город, который очаровывает посетителей, ожидая вашего исследования.</p>" 
      } 
    ] 
  }
};

