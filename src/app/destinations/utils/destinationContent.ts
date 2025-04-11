import { ReactNode } from 'react';

// 定义每个语言区块的结构
export interface DestinationSection {
  title: string;
  content: string;
}

// 定义完整的目的地内容结构
export interface DestinationContent {
  title: string;
  subtitle: string;
  sections: DestinationSection[];
}

// 西安英文内容
const xianContentEn: DestinationContent = {
  title: "Xi'an",
  subtitle: "The ancient capital with three thousand years of history",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Xi'an, formerly known as Chang'an, was once the most prosperous capital in the world during the Tang Dynasty. Today, it's a vibrant modern city that perfectly balances its rich historical heritage with urban development. Walking through the ancient city walls, you can feel the pulse of Chinese history while enjoying the conveniences of contemporary life.</p>
      <p>As one of China's four great ancient capitals, Xi'an offers an incredible journey through time, from the magnificent Terracotta Army to the bustling Muslim Quarter. The city's layout, with its grid pattern and imposing city walls, still preserves the charm of traditional Chinese urban planning.</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best seasons to visit:</strong> Spring (March-May) and autumn (September-November) offer pleasant weather with mild temperatures. Summer can be hot and rainy, while winter is cold and dry.</p>
      <p><strong>Climate characteristics:</strong> Xi'an has a temperate climate with four distinct seasons. Spring and autumn are the most comfortable, summer is hot and humid, and winter is cold with occasional light snow.</p>
      <p><strong>Transportation:</strong> Xi'an Xianyang International Airport connects to major domestic and international destinations. The city has a well-developed metro system with 6 lines covering most tourist attractions. Buses, taxis, and bike-sharing services are also widely available.</p>
      <p><strong>Recommended stay duration:</strong> 2-3 days is sufficient to see the main attractions, but 4-5 days allows for a more comprehensive experience including nearby destinations like Mount Hua.</p>
      <p><strong>Cost level:</strong> Medium. Xi'an is more affordable than Beijing or Shanghai, with reasonable prices for accommodation, food, and attractions.</p>
      `
    },
    {
      title: "Must-Visit Attractions",
      content: `
      <h3>Terracotta Army Museum</h3>
      <p>This world-famous archaeological site features thousands of life-sized terracotta warriors and horses arranged in battle formations to guard Emperor Qin Shi Huang's tomb. Each warrior has unique facial features and expressions, showcasing the remarkable craftsmanship of ancient China.</p>
      <p><strong>Travel tip:</strong> Visit early in the morning to avoid crowds and hire a knowledgeable guide to fully appreciate the historical significance. Make sure to visit the pits in order of 1, 3, then 2 for the best experience. Photography is allowed but without flash.</p>

      <h3>Xi'an City Wall</h3>
      <p>One of the oldest and best-preserved city walls in China, this massive fortification encircles Xi'an's old town. Stretching 14 kilometers in perimeter with a height of 12 meters, the wall offers a panoramic view of the city from its walkway.</p>
      <p><strong>Travel tip:</strong> Rent a bicycle to ride the full circuit in about 2 hours, or take a leisurely walk along a section. The south gate area is particularly impressive, especially when illuminated at night. Consider visiting at sunset for spectacular views.</p>

      <h3>Big Wild Goose Pagoda</h3>
      <p>Built in the 7th century during the Tang Dynasty, this Buddhist pagoda was originally constructed to store sutras and Buddha figurines brought from India by the famous monk Xuanzang. The 7-story structure stands at 64 meters tall and represents the architectural style of the Tang Dynasty.</p>
      <p><strong>Travel tip:</strong> Visit in the evening to enjoy the magnificent musical fountain show in the North Square. If you're interested in Buddhist culture, combine this visit with the adjacent Da Ci'en Temple. Climbing the pagoda offers panoramic views of the city.</p>

      <h3>Shaanxi History Museum</h3>
      <p>One of China's first large-scale modern museums, it houses over 370,000 historical artifacts that span the province's rich history from prehistoric times to the Qing Dynasty. The museum's architecture is inspired by Tang Dynasty palace design.</p>
      <p><strong>Travel tip:</strong> Free tickets are limited daily, so arrive early. Special exhibitions may require an additional fee. Focus on the Tang tri-colored pottery, ancient bronze vessels, and gold and silver artifacts if your time is limited.</p>

      <h3>Muslim Quarter</h3>
      <p>This vibrant area near the Drum Tower is home to Xi'an's Hui Muslim community and features narrow lanes filled with food stalls, souvenir shops, and historic mosques. The Great Mosque, founded in 742 CE, is a fascinating blend of Chinese and Islamic architectural styles.</p>
      <p><strong>Travel tip:</strong> Visit during dinner time to experience the lively food street at its best, and try local specialties like Roujiamo (Chinese hamburger) and Yang Rou Pao Mo (lamb soup with bread). Be prepared for crowds and remember to bargain when shopping.</p>
      `
    },
    {
      title: "Unique Experiences",
      content: `
      <h3>Cycling on the Ancient City Wall</h3>
      <p>Rent a bicycle and ride atop the 14km-long city wall to see Xi'an from a different perspective. The full circuit takes about 2 hours and offers spectacular views of both the old town and the modern city.</p>
      <p><strong>Experience tip:</strong> Go early in the morning or late afternoon to avoid the midday heat and enjoy better lighting for photography. Rental stations are available at several entry points along the wall.</p>

      <h3>Watching a Qinqiang Opera Performance</h3>
      <p>Experience this ancient art form native to Shaanxi Province, known for its vigorous singing and colorful face masks. It's one of the oldest forms of Chinese opera and is listed as a national intangible cultural heritage.</p>
      <p><strong>Experience tip:</strong> The Yisu Theater and Shaanxi Grand Theater regularly host performances. Even if you don't understand the language, the visual spectacle and emotional performances are worthwhile experiences.</p>

      <h3>Making your own mini Terracotta Warrior</h3>
      <p>Visit a workshop near the Terracotta Army where you can learn about the ancient techniques and create your own clay figurine as a unique souvenir.</p>
      <p><strong>Experience tip:</strong> This activity takes about an hour and is perfect for families with children. Some workshops also offer painting options to customize your warrior.</p>

      <h3>Sunrise at Mount Hua (Huashan)</h3>
      <p>Take a day trip to one of China's five sacred mountains. Known for its steep cliffs and narrow paths, including the famous 'plank walk' that challenges the bravest visitors. The sunrise view from the East Peak is simply breathtaking.</p>
      <p><strong>Experience tip:</strong> For the full experience, climb overnight and reach the East Peak before dawn. Take the high-speed train from Xi'an to Huashan North Station (about 40 minutes) and then a shuttle bus to the mountain entrance.</p>

      <h3>Tang Dynasty Show and Dumpling Banquet</h3>
      <p>Enjoy an evening of imperial court music and dance performances while savoring a feast of dumplings in various shapes, colors, and fillings, representing the culinary artistry of the Tang Dynasty.</p>
      <p><strong>Experience tip:</strong> The Tang Paradise and Shaanxi Grand Opera House offer the most authentic performances. Book in advance during peak tourist seasons, as these shows are extremely popular.</p>
      `
    },
    {
      title: "Food Guide",
      content: `
      <h3>Biangbiang Noodles</h3>
      <p>These extra-wide, belt-like noodles are a Shaanxi specialty, famous for having the most complex Chinese character in their name. Served with chili oil, vegetables, and meat, they offer a chewy texture and rich flavor.</p>
      <p><strong>Recommended restaurant:</strong> Wei Jia Biangbiang Noodles in the Muslim Quarter offers authentic handmade noodles with various toppings.</p>

      <h3>Yangrou Paomo (Lamb Soup with Bread)</h3>
      <p>A signature dish where you tear unleavened bread into small pieces, which the chef then adds to a flavorful lamb or beef broth with vermicelli noodles and tender meat.</p>
      <p><strong>Recommended restaurant:</strong> Lao Sun Jia, a century-old establishment near the Drum Tower, is known for its authentic recipe and rich broth.</p>

      <h3>Roujiamo (Chinese Hamburger)</h3>
      <p>Often considered the world's oldest hamburger, this snack consists of slow-cooked, spiced meat (usually pork or beef) stuffed into a freshly baked wheat bun.</p>
      <p><strong>Recommended restaurant:</strong> Xianglaixi on Xiyang Market Street serves some of the juiciest and most flavorful roujiamo in the city.</p>

      <h3>Liangpi (Cold Noodles)</h3>
      <p>A refreshing cold dish made from rice or wheat flour, served with chili oil, vinegar, and various toppings. Perfect for hot summer days.</p>
      <p><strong>Recommended restaurant:</strong> Ma Jie Liangpi in the Muslim Quarter is famous for its perfect balance of tangy, spicy, and savory flavors.</p>

      <h3>Muslim-style Cuisine</h3>
      <p>Xi'an's large Muslim community offers halal versions of Chinese dishes and unique specialties like lamb kebabs, persimmon cakes, and osmanthus jelly.</p>
      <p><strong>Recommended restaurant:</strong> Lao Mi Jia in the Muslim Quarter serves authentic Hui Muslim cuisine including excellent lamb dishes and hand-pulled noodles.</p>
      `
    },
    {
      title: "Cultural and Historical Insights",
      content: `
      <h3>Historical Transitions</h3>
      <p>Xi'an served as the capital for 13 dynasties over a span of more than 1,000 years. Each dynasty left its mark on the city, contributing to its rich cultural tapestry. The most significant periods were the Han Dynasty (206 BCE-220 CE) and the Tang Dynasty (618-907 CE), when the city reached its zenith of prosperity and international influence.</p>
      <p>The urban layout of present-day Xi'an still reflects the meticulous grid design of Chang'an during the Tang Dynasty, considered one of the greatest examples of ancient urban planning in world history.</p>

      <h3>Starting Point of the Silk Road</h3>
      <p>As the eastern terminus of the ancient Silk Road, Xi'an was a crucial hub for trade and cultural exchange between China and the West. This role transformed it into one of the world's most cosmopolitan cities during the Tang Dynasty, home to merchants, monks, and envoys from across Asia, the Middle East, and Europe.</p>
      <p>The diverse religious buildings in Xi'an, including Buddhist temples and the Great Mosque, stand as testament to the cultural exchange facilitated by the Silk Road.</p>

      <h3>Tang Dynasty Glory</h3>
      <p>The Tang era represents China's golden age of arts and culture, marked by unprecedented openness to foreign influences. Xi'an's archaeological sites and museums display the sophisticated aesthetic sensibilities of this period, from exquisite Tang tri-colored pottery to elegant court ladies' figurines.</p>
      <p>The cultural achievements of the Tang Dynasty—in poetry, music, dance, painting, and sculpture—continue to influence Chinese culture to this day, and Xi'an proudly preserves and celebrates this heritage.</p>

      <h3>Religious Diversity</h3>
      <p>Xi'an has been a center for various religions throughout its history. Buddhism flourished during the Tang Dynasty, as evidenced by the Big Wild Goose Pagoda. The city is also home to one of China's oldest Islamic communities, with the Great Mosque dating back to the 8th century.</p>
      <p>This religious diversity contributed significantly to Xi'an's cultural richness. Today, visitors can explore Buddhist temples, Taoist shrines, and Islamic mosques, witnessing the harmonious coexistence of different belief systems that has characterized the city for centuries.</p>
      `
    }
  ]
};

// 北京英文内容
const beijingContentEn: DestinationContent = {
  title: "Beijing",
  subtitle: "Ancient imperial capital and modern metropolis",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Beijing, the capital of China, is a city where ancient history and modern development exist side by side. The magnificent Forbidden City stands at the heart of this metropolis, while modern skyscrapers define its evolving skyline. As a city that has served as the capital for several dynasties, Beijing offers visitors an unparalleled glimpse into China's imperial past while showcasing its vision for the future.</p>
      <p>The city's layout, with its concentric ring roads and the historic north-south central axis, reflects both ancient Chinese urban planning principles and modern development needs. Historic alleyways (hutongs) coexist with wide boulevards, creating a city of fascinating contrasts.</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best seasons to visit:</strong> Spring (April-May) and autumn (September-October) offer pleasant weather. Summer can be hot and humid with occasional rainfall, while winter is cold and dry with possible snow.</p>
      <p><strong>Climate characteristics:</strong> Beijing has a temperate monsoon climate with four distinct seasons. Spring can be windy with occasional sandstorms, summers are hot and rainy, autumn is crisp and clear, and winters are cold with minimal precipitation.</p>
      <p><strong>Transportation:</strong> Beijing has an extensive public transportation system including a comprehensive subway network, numerous bus routes, and readily available taxis. The Beijing Capital International Airport is one of the busiest in the world.</p>
      <p><strong>Recommended stay duration:</strong> 4-5 days is recommended to explore the major attractions, though a week would allow for a more comprehensive experience including day trips to nearby sections of the Great Wall.</p>
      <p><strong>Cost level:</strong> Medium to high, especially in central areas. Accommodation, dining, and shopping can range from budget to luxury, but major attractions have relatively standardized entrance fees.</p>
      `
    },
    {
      title: "Must-Visit Attractions",
      content: `
      <h3>The Forbidden City (Palace Museum)</h3>
      <p>This UNESCO World Heritage site was the imperial palace during the Ming and Qing dynasties. With 9,999 rooms spread across 72 hectares, it's the largest and best-preserved ancient wooden structure complex in the world, offering unparalleled insights into imperial China.</p>
      <p><strong>Travel tip:</strong> Purchase tickets online in advance as daily visitor numbers are limited. Enter through Tiananmen Gate and exit via the East or North Gate. Allow at least 3-4 hours for your visit, and consider renting an audio guide for detailed explanations.</p>

      <h3>The Great Wall</h3>
      <p>This architectural marvel stretches over 13,000 miles across northern China. The Beijing sections include Badaling (most famous and often crowded), Mutianyu (well-restored with fewer crowds), Jinshanling (partially restored, ideal for hiking), and Simatai (features night visits).</p>
      <p><strong>Travel tip:</strong> Mutianyu offers a good balance of accessibility and authenticity. Visit on weekdays to avoid crowds. Wear comfortable shoes and bring water, as walking on the wall involves many steps and inclines.</p>

      <h3>Temple of Heaven</h3>
      <p>A masterpiece of Chinese architecture where emperors performed important sacrificial ceremonies. The complex includes the iconic Hall of Prayer for Good Harvests, the Imperial Vault of Heaven, and the Circular Mound Altar, all set within a beautiful park.</p>
      <p><strong>Travel tip:</strong> Visit early in the morning to see locals practicing tai chi, dancing, and playing traditional instruments in the surrounding park. The north entrance is closer to the subway station, but the south gate leads directly to the main structures.</p>

      <h3>Summer Palace</h3>
      <p>The largest and best-preserved imperial garden in China, featuring Kunming Lake, Longevity Hill, and numerous pavilions, temples, and bridges. It served as a royal retreat from the heat of summer in the Forbidden City.</p>
      <p><strong>Travel tip:</strong> Take a boat ride on Kunming Lake for unique views of the palace. The garden is especially beautiful during spring blossoms and autumn colors. Plan at least half a day for your visit.</p>

      <h3>Hutongs</h3>
      <p>These historic alleyways represent Old Beijing's traditional residential areas. The most famous hutongs include Nanluoguxiang, Yandai Xiejie, and Skewed Tobacco Pouch Street, each with its own character and charm.</p>
      <p><strong>Travel tip:</strong> Explore by foot, bicycle, or traditional rickshaw. Visit Shichahai area for a combination of hutongs, lakes, and historic sites. Evening visits offer a glimpse of local life as residents return home from work.</p>
      `
    },
    {
      title: "Unique Experiences",
      content: `
      <h3>Beijing Opera Performance</h3>
      <p>Experience this traditional art form combining music, vocal performance, mime, dance, and acrobatics. Performances feature elaborate costumes, distinctive makeup, and stories from Chinese history and folklore.</p>
      <p><strong>Experience tip:</strong> Venues like the Chang'an Grand Theatre and Liyuan Theatre offer performances with English subtitles. Some theaters provide pre-show activities like makeup application demonstrations to enhance your understanding.</p>

      <h3>Traditional Chinese Medicine Experience</h3>
      <p>Learn about this ancient healing system through museum visits, consultations with TCM doctors, or workshops on herbal medicine, acupuncture, or tai chi. The Beijing Museum of Traditional Chinese Medicine offers comprehensive exhibits.</p>
      <p><strong>Experience tip:</strong> For a hands-on experience, many traditional pharmacies offer pulse diagnosis and personalized herbal prescriptions. Reputable TCM hospitals like Dongzhimen Hospital also provide services for foreigners.</p>

      <h3>Cooking Class</h3>
      <p>Learn to prepare Beijing specialties like Peking duck, dumplings, or hand-pulled noodles through interactive cooking classes. Many courses include market visits to select ingredients followed by hands-on preparation and dining.</p>
      <p><strong>Experience tip:</strong> The Hutong and Black Sesame Kitchen offer highly rated cooking classes in English. Book at least a day in advance and specify any dietary restrictions.</p>

      <h3>Teahouse Culture</h3>
      <p>Immerse yourself in China's tea culture at a traditional teahouse. These establishments offer various types of tea along with snacks and sometimes performances like cross-talk (xiangsheng) or folk music.</p>
      <p><strong>Experience tip:</strong> Lao She Teahouse offers a cultural experience with performances, while Wufu Teahouse focuses more on the tea ceremony itself. Ask for explanations of different tea varieties and proper brewing techniques.</p>

      <h3>798 Art District</h3>
      <p>Explore this thriving contemporary art hub set in a complex of decommissioned military factories. The district features dozens of galleries, studios, design firms, cafes, and bookstores in a unique industrial setting.</p>
      <p><strong>Experience tip:</strong> Allow at least half a day to explore. Many galleries are closed on Mondays. Check if your visit coincides with an exhibition opening or art festival for an enhanced experience.</p>
      `
    },
    {
      title: "Food Guide",
      content: `
      <h3>Peking Duck</h3>
      <p>Beijing's most famous culinary offering features roast duck with crispy skin served with thin pancakes, scallions, cucumber, and sweet bean sauce. The traditional preparation involves a complex process of air-drying, glazing, and roasting in a special oven.</p>
      <p><strong>Recommended restaurants:</strong> Da Dong Roast Duck and Quanjude are renowned establishments, while Siji Minfu offers excellent quality at more moderate prices. Duck de Chine provides a slightly more upscale experience.</p>

      <h3>Imperial Court Cuisine</h3>
      <p>Based on recipes from the imperial kitchens, this refined cuisine features elaborate preparation methods, premium ingredients, and artistic presentation. Dishes often have poetic names and historical significance.</p>
      <p><strong>Recommended restaurants:</strong> Fangshan Restaurant in Beihai Park and Najia Xiaoguan offer authentic imperial dining experiences. These restaurants often require reservations, especially for dinner.</p>

      <h3>Jianbing (Chinese Crepe)</h3>
      <p>A popular breakfast street food consisting of a thin crepe cooked with an egg, spread with various sauces, and filled with crispy wonton sheets, scallions, and cilantro. It's folded into a handheld package that's crispy, soft, savory, and slightly spicy.</p>
      <p><strong>Recommended spots:</strong> Look for street vendors with long morning queues, particularly around subway stations and office areas. Jianbing Dian near Wangfujing is a reliable option for tourists.</p>

      <h3>Lamb Hot Pot</h3>
      <p>Especially popular in winter, Beijing-style hot pot features a copper pot divided into sections for different broths. Thinly sliced lamb is the traditional protein, often accompanied by a variety of vegetables, mushrooms, and noodles.</p>
      <p><strong>Recommended restaurants:</strong> Jubaoyuan in Niujie Muslim district specializes in traditional lamb hot pot, while Haidilao offers a more modern experience with exceptional service.</p>

      <h3>Zhajiangmian (Noodles with Soybean Paste)</h3>
      <p>These hand-pulled noodles are served with a thick sauce made from soybean paste and ground pork, topped with julienned cucumber, radish, and other vegetables. The contrast between the savory sauce and fresh vegetables creates a balanced dish.</p>
      <p><strong>Recommended restaurants:</strong> Old Beijing Zhajiang Noodle King and Hai Wan Ju are local favorites. The dish is best enjoyed by mixing all ingredients thoroughly before eating.</p>
      `
    },
    {
      title: "Cultural and Historical Insights",
      content: `
      <h3>Imperial Legacy</h3>
      <p>As the capital for the Yuan, Ming, and Qing dynasties, Beijing bears the imprint of imperial power in its urban planning, architecture, and cultural institutions. The city's central axis, running from the Bell and Drum Towers through the Forbidden City to Yongdingmen Gate, embodies traditional Chinese cosmology and imperial authority.</p>
      <p>The Forbidden City represents the pinnacle of imperial architecture, with its layout symbolizing the Chinese universe. Even modern Beijing maintains this historical framework, with Tiananmen Square and government buildings continuing the central axis tradition.</p>

      <h3>Cultural Revolution Impact</h3>
      <p>The Cultural Revolution (1966-1976) significantly impacted Beijing's physical and cultural landscape. Many historical sites and cultural relics were damaged or destroyed during this period, though subsequent decades have seen extensive restoration efforts.</p>
      <p>Sites like the Red Building at Peking University and the Military Museum offer insights into this tumultuous period. The city's subsequent transformation reflects China's economic reforms and openness since the late 1970s.</p>

      <h3>Olympic Transformation</h3>
      <p>The 2008 Summer Olympics catalyzed massive urban development in Beijing, including new transportation infrastructure, environmental improvements, and iconic structures like the Bird's Nest (National Stadium) and Water Cube (National Aquatics Center).</p>
      <p>This international event marked Beijing's emergence as a truly global city and showcased China's rising influence on the world stage. The Olympic Green remains a popular area to visit and will again serve as a venue for the 2022 Winter Olympics.</p>

      <h3>Culinary Heritage</h3>
      <p>Beijing's food culture reflects its status as an imperial capital that attracted people and influences from across China. The city's cuisine combines northern Chinese cooking techniques (particularly roasting and frying) with flavors introduced by Mongolian, Manchu, and Muslim communities.</p>
      <p>Beyond specific dishes, Beijing's food culture includes unique traditions like the teahouse culture, elaborate banquet customs developed in the imperial court, and seasonal foods tied to festivals and traditional observances.</p>
      `
    }
  ]
};

// Shanghai英文内容
const shanghaiContentEn: DestinationContent = {
  title: "Shanghai",
  subtitle: "Pearl of the Orient and global financial hub",
  sections: [
    {
      title: "First Impressions",
      content: `
      <p>Shanghai is China's most cosmopolitan city, a global financial center that showcases the country's rapid modernization while preserving glimpses of its colonial past. The futuristic skyline of Pudong, dominated by the Oriental Pearl Tower and Shanghai Tower, creates a striking contrast with the historic architecture along the Bund, reflecting the city's unique blend of East and West, tradition and innovation.</p>
      <p>Known for its fast pace and forward-thinking attitude, Shanghai offers visitors world-class shopping, dining, and entertainment alongside pockets of traditional lane houses and classical gardens. The city exudes confidence and sophistication, with an energy that's both exhilarating and exhausting.</p>
      `
    },
    {
      title: "Basic Information Overview",
      content: `
      <p><strong>Best seasons to visit:</strong> Spring (March-May) and autumn (September-November) offer mild temperatures and moderate humidity. Summer (June-August) is hot and humid with occasional typhoons, while winter (December-February) is cold and damp.</p>
      <p><strong>Climate characteristics:</strong> Shanghai has a subtropical monsoon climate with four distinct seasons. Rainfall is abundant year-round, with a concentration during the "plum rain" season in June. Typhoons occasionally affect the city in late summer.</p>
      <p><strong>Transportation:</strong> Shanghai has an extensive and modern public transportation system, including one of the world's largest metro networks. Two international airports connect the city globally, while high-speed trains link Shanghai to other major Chinese cities.</p>
      <p><strong>Recommended stay duration:</strong> 3-4 days allows visitors to see the major attractions, though 5-6 days would permit exploration of lesser-known areas and day trips to nearby water towns like Zhujiajiao or Suzhou.</p>
      <p><strong>Cost level:</strong> High by Chinese standards, particularly for accommodation and international dining. However, street food, public transportation, and local experiences remain reasonably priced. Luxury experiences in Shanghai rival those in any global metropolis.</p>
      `
    },
    {
      title: "Must-Visit Attractions",
      content: `
      <h3>The Bund (Waitan)</h3>
      <p>This iconic waterfront promenade showcases Shanghai's colonial-era international architecture. The mile-long stretch features 52 buildings in diverse styles including Gothic, Baroque, Romanesque, and Art Deco, once housing powerful foreign banks and trading houses.</p>
      <p><strong>Travel tip:</strong> Visit both during daytime to appreciate the architectural details and after dark when the buildings are illuminated and the Pudong skyline across the river creates a spectacular light show. The early morning offers the best photography opportunities without crowds.</p>

      <h3>Yu Garden and Old City</h3>
      <p>This classical Chinese garden from the Ming Dynasty features pavilions, rockeries, ponds, and bridges in a serene setting. Surrounding the garden is the bustling Old City with traditional architecture, teahouses, and shops selling everything from souvenirs to traditional Chinese medicine.</p>
      <p><strong>Travel tip:</strong> Visit on weekdays to avoid crowds. The Mid-Lake Pavilion Teahouse offers a peaceful respite. Don't miss the nearby Chenghuang Temple and its famous xiaolongbao (soup dumpling) restaurants.</p>

      <h3>Former French Concession</h3>
      <p>This charming district features tree-lined avenues, Tudor mansions, and Art Deco apartments. Now one of Shanghai's trendiest areas, it's filled with boutique shops, cafes, restaurants, and historic sites like the former residence of Sun Yat-sen.</p>
      <p><strong>Travel tip:</strong> Explore the area on foot or by bicycle. Wukang Road, Fuxing Park, Tianzifang, and Xintiandi are highlights within this district. Many historic buildings now house upscale restaurants and boutiques.</p>

      <h3>Shanghai Tower and Lujiazui Financial District</h3>
      <p>The heart of modern Shanghai features some of the world's tallest buildings, including Shanghai Tower (632m), Shanghai World Financial Center (the "bottle opener"), and Jin Mao Tower. The area offers spectacular views of the city from various observation decks.</p>
      <p><strong>Travel tip:</strong> The Shanghai Tower observation deck on the 118th floor offers the highest vantage point. Visit just before sunset to see the cityscape transform from day to night. The Oriental Pearl TV Tower features glass-floor sections for the brave.</p>

      <h3>Nanjing Road</h3>
      <p>China's premier shopping street extends from the Bund westward for over 3 miles. The pedestrian section features department stores, specialty shops, restaurants, and neon lights reminiscent of Times Square, while the western section houses upscale malls and boutiques.</p>
      <p><strong>Travel tip:</strong> The eastern pedestrianized section is best explored in the evening when the neon lights create a vibrant atmosphere. Be aware of tea house scams targeting tourists in this area.</p>
      `
    },
    {
      title: "Unique Experiences",
      content: `
      <h3>Shanghai Acrobatic Show</h3>
      <p>Experience the breathtaking skills of Chinese acrobats at venues like the Shanghai Circus World or Shanghai Centre Theatre. Shows combine traditional acrobatics with modern theatrical techniques, featuring plate spinning, contortion, chair stacking, and hoop diving.</p>
      <p><strong>Experience tip:</strong> Book tickets in advance, especially during peak tourist seasons. The ERA Intersection of Time show at Shanghai Circus World offers one of the most spectacular performances with state-of-the-art effects.</p>

      <h3>River Cruise on the Huangpu</h3>
      <p>See Shanghai's contrasting skylines from the water on a cruise along the Huangpu River. These journeys pass between the historic Bund on one side and the futuristic Pudong skyline on the other, offering unique photographic opportunities.</p>
      <p><strong>Experience tip:</strong> Evening cruises provide the most dramatic views with buildings illuminated on both banks. Cruises depart from wharves near the Bund or Lujiazui. Duration varies from 30 minutes to 3 hours depending on the package.</p>

      <h3>Shanghai Urban Planning Exhibition Center</h3>
      <p>Gain insight into the city's past, present, and future through this fascinating museum. The centerpiece is an enormous scale model of central Shanghai as envisioned for 2020, covering 1,000 square meters with incredible detail.</p>
      <p><strong>Experience tip:</strong> The 360-degree cinema on the third floor offers an immersive "flight" over Shanghai. Visit on weekday mornings to avoid school groups. English explanations are available throughout.</p>

      <h3>Traditional Shikumen Lane Houses</h3>
      <p>Explore these uniquely Shanghainese stone-gate houses that blend Western and Chinese architectural elements. While many have been demolished, you can still experience them in preserved areas like Xintiandi (upscale renovation) and Tianzifang (more authentic atmosphere).</p>
      <p><strong>Experience tip:</strong> The Shikumen Open House Museum in Xintiandi shows how middle-class Shanghainese families lived in the 1920s and 1930s. Tianzifang offers a maze of lanes filled with cafes, studios, and boutiques in converted residences.</p>

      <h3>Shanghai Cuisine Cooking Class</h3>
      <p>Learn to prepare local specialties like xiaolongbao (soup dumplings), hongshao rou (red-braised pork), or scallion oil noodles. Classes typically include market visits, hands-on cooking instruction, cultural context, and of course, eating your creations.</p>
      <p><strong>Experience tip:</strong> Chinese Cooking Workshop and Cook In Shanghai offer highly rated classes in English. Most classes last 3-4 hours and require advance booking. Vegetarian options are usually available upon request.</p>
      `
    },
    {
      title: "Food Guide",
      content: `
      <h3>Xiaolongbao (Soup Dumplings)</h3>
      <p>These delicate steamed dumplings contain both meat filling and hot soup. The traditional technique involves wrapping solid aspic with the filling, which melts into soup during steaming. Shanghai-style xiaolongbao typically feature a thinner skin and sweeter filling than other varieties.</p>
      <p><strong>Recommended restaurants:</strong> Din Tai Fung offers consistent quality, while local favorites include Jia Jia Tang Bao and Lin Long Fang for a more authentic experience. The historic Nanxiang Steamed Bun Restaurant in Yu Garden is famous but often has long queues.</p>

      <h3>Shengjianbao (Pan-Fried Pork Buns)</h3>
      <p>A Shanghai breakfast staple, these buns are filled with pork and soup similar to xiaolongbao, but are pan-fried to create a crispy bottom. They're typically topped with sesame seeds and spring onions, creating a delicious contrast of textures.</p>
      <p><strong>Recommended restaurants:</strong> Yang's Fry Dumplings is the most famous chain, with locations throughout the city. Da Hu Chun on Sichuan Road and Xiao Yang Shengjian near People's Square are also excellent choices.</p>

      <h3>Hairy Crab</h3>
      <p>A seasonal delicacy available in autumn (September to November), these crabs from nearby Yangcheng Lake are prized for their sweet meat and rich roe. They're typically steamed and served with vinegar and ginger dipping sauce.</p>
      <p><strong>Recommended restaurants:</strong> Wang Baohe and Mei Long Zhen specialize in hairy crab dishes. For the authentic experience, try First Food Hall on Nanjing Road which sources directly from Yangcheng Lake.</p>

      <h3>Hongshao Rou (Red-Braised Pork)</h3>
      <p>This iconic dish features pork belly slowly braised in a mixture of soy sauce, rice wine, and sugar until incredibly tender, with a glossy red-brown appearance. The Shanghai version is sweeter than those from other regions.</p>
      <p><strong>Recommended restaurants:</strong> Old Jesse is famous for its version, though advance reservations are essential. Shanghai Grandmother on Fumin Road and Din Tai Fung also offer excellent renditions of this classic dish.</p>

      <h3>Street Food at Wujiang Road</h3>
      <p>This food street near Nanjing Road offers a variety of local snacks including cong you bing (scallion pancakes), you tiao (fried dough sticks), ci fan (rice balls), and various skewers and dumplings, providing an accessible introduction to Shanghai street food.</p>
      <p><strong>Recommended approach:</strong> Visit in the late afternoon through evening when most stalls are operating. Look for stalls with locals queuing. The area around Yunnan Road Food Street also offers a wide variety of local snacks in a slightly less touristic setting.</p>
      `
    },
    {
      title: "Cultural and Historical Insights",
      content: `
      <h3>Colonial Influence and the Concession Era</h3>
      <p>From 1843 to 1943, parts of Shanghai were administered by foreign powers as "concessions," creating a unique cultural landscape. The British, French, and Americans established separate territories, each with their own laws, postal systems, and architectural styles. This period transformed Shanghai from a modest fishing village into a cosmopolitan trading port known as the "Paris of the East."</p>
      <p>This legacy remains visible in the Western-style buildings along the Bund, the leafy streets of the Former French Concession, and even in Shanghai's cuisine and dialect. The city developed a reputation for both glamour and decadence during this era, becoming a refuge for international adventurers and Chinese intellectuals alike.</p>

      <h3>Shanghai's Golden Age</h3>
      <p>The 1920s and 1930s marked Shanghai's cultural zenith, when the city became China's center for film, publishing, and popular culture. This period saw the rise of distinctive Shanghai cultural forms including Shanghai jazz, modern Chinese literature, and the cheongsam (qipao) dress that remains an icon of Chinese fashion.</p>
      <p>The city's reputation as a cultural melting pot attracted artists and writers from across China, creating a vibrant intellectual scene. The Shanghai style developed during this period continues to influence Chinese culture today, with its characteristic blend of Chinese and Western elements.</p>

      <h3>From Revolution to Reform</h3>
      <p>Shanghai was the birthplace of the Chinese Communist Party in 1921, but after the 1949 revolution, its international character was suppressed, and its economic importance diminished in favor of industrial development. The city's revival began with China's reform and opening policy in the 1980s, when the government decided to redevelop Pudong as a symbol of modern China.</p>
      <p>Since then, Shanghai has reclaimed its position as China's most international city and financial center. This transformation is most visible in the contrast between the pre-1949 architecture west of the Huangpu River and the forest of skyscrapers that has risen to the east since the 1990s.</p>

      <h3>Shanghai Character and Identity</h3>
      <p>Shanghainese culture is considered more outward-looking and commercially minded than other Chinese regions. The local character values sophistication, efficiency, and pragmatism, shaped by the city's history as a commercial center. Shanghai residents take pride in their city's modernity and cosmopolitan nature.</p>
      <p>The Shanghai dialect, part of the Wu language family, differs significantly from Mandarin and serves as a marker of local identity. Though increasingly relegated to home use as Mandarin dominates public life, efforts are being made to preserve this linguistic heritage through media and education.</p>
      `
    }
  ]
};

// 存放所有城市内容
const destinationContents: Record<string, DestinationContent> = {
  xian: xianContentEn,
  beijing: beijingContentEn,
  shanghai: shanghaiContentEn
};

// 获取特定城市的内容
export const getDestinationContent = (destinationId: string): DestinationContent => {
  // 获取目的地内容
  if (destinationContents[destinationId as keyof typeof destinationContents]) {
    return destinationContents[destinationId as keyof typeof destinationContents];
  }
  
  // 如果找不到目标城市，返回默认内容
  return {
    title: "Content in Development",
    subtitle: "Please stay tuned for complete content",
    sections: []
  };
};

export default destinationContents; 