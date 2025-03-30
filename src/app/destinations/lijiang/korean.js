// 韩语内容
export function getKoreanContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">첫인상</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        윈난성 북서부에 위치한 리장은 나시족의 고향이며 유네스코 세계문화유산인 "리장 고성"이 있는 곳입니다. 해발 2,400미터 이상의 고원에 위치한 이 고대 도시는 세 면이 산으로 둘러싸여 있고 한 면은 물로 둘러싸여 있습니다. 자연 경관과 문화유산이 이곳에서 완벽하게 어우러집니다. 맑은 시냇물이 고성을 가로질러 흐르고, 작은 다리들이 구불구불한 돌길을 가로지릅니다. 산악 지형에 맞게 지어진 나시족 주택은 나시 민족의 오랜 역사와 독특한 동파 문화를 보여줍니다. 리장은 인상적인 옥룡설산뿐만 아니라 아름다운 루구 호수와 호랑이 뛰어넘기 협곡이 있어 "고원의 소주"라는 별명을 얻었습니다.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">가장 대표적인 특징:</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>세계문화유산 — 리장 고성 (다옌 고성)</li>
        <li>나시족 동파 문화와 동파 상형문자</li>
        <li>옥룡설산 빙하와 전나무 고원의 자연 경관</li>
        <li>고성 내 "삼수계통"과 다리와 시내가 있는 전통 건축 배치</li>
      </ul>
      
      <div className="my-8">
        {/* 이미지 자리표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">리장 고성 거리 전경</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">기본 정보 개요</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">최적 방문 시기</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>봄(3-5월): 꽃이 만발하고 기후가 쾌적함</li>
        <li>여름(6-8월): 더위를 피하기에 좋은 장소, 우기에는 간헐적으로 짧은 소나기가 내림</li>
        <li>가을(9-11월): 맑은 하늘, 최고의 풍경</li>
        <li>겨울(12-2월): 따뜻한 겨울 햇살, 관광객이 적음</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">기후 특성</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>고원 몬순 기후, 겨울에 너무 춥지 않고 여름에 극도로 덥지 않음</li>
        <li>연평균 기온 약 13°C, 풍부한 일조량</li>
        <li>밤낮의 온도 차가 크므로 재킷이 필요함</li>
        <li>자외선이 강하므로 자외선 차단제가 중요함</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">현지 교통 개요</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>리장 공항에서 중국 주요 도시로 직항편이 있음</li>
        <li>고성 내에서는 도보가 주요 이동 수단이며, 관광 버스가 다양한 관광지를 연결함</li>
        <li>옥룡설산을 방문하려면 관광 버스와 케이블카가 필요함</li>
        <li>루구 호수와 호랑이 뛰어넘기 협곡과 같은 근처 관광지를 방문하려면 렌터카나 당일 투어가 권장됨</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">문화와 역사 개요</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">역사적 발전</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>송 왕조: 남조 왕국의 중요한 도시</li>
        <li>원 왕조: 무 씨 가문이 리장의 나시 족장으로 통치하기 시작</li>
        <li>명과 청 왕조: 무 씨 족장들의 번성 시기, 고성 배치의 기본 형성</li>
        <li>현대 시대: 1997년 유네스코 세계문화유산으로 등재</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">나시 문화</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>동파 문화: 오늘날까지 사용되는 유일한 상형문자 체계</li>
        <li>나시 고대 음악: 고대 궁중 음악의 "살아있는 화석"으로 간주됨</li>
        <li>나시 복장: 여성을 위한 독특한 "아이" 복장, 남성은 일반적으로 푸른색 천 로브를 착용</li>
        <li>전통 축제: 산두오 축제, 횃불 축제, 꽃 축제 등</li>
      </ul>
      
      <div className="my-8">
        {/* 이미지 자리표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">동파 문화 이미지</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">꼭 방문해야 할 명소</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">고성 지역</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 다옌 고성 (리장 고성)</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        다옌 고성은 800년 이상의 역사를 가진 리장 고성의 핵심 지역입니다. 이 도시는 산비탈을 따라 지어졌으며, 물의 흐름을 따라 거리가 확장되어 독특한 "삼수계통"을 형성합니다. 광장 거리는 고성의 중심이며 고대 다마고도의 중요한 시장이었습니다. 사자산의 완구탑은 고성의 전경을 내려다보는 최고의 장소입니다. 고성의 무씨 저택은 무씨 족장들의 저택으로, 나시 민족의 영광스러운 역사를 보여주는 웅장한 건축물입니다. 흑룡담 공원에는 옥룡설산을 반사하는 맑은 물이 있어 클래식한 엽서 풍경을 제공합니다. 낮에는 고성이 고대의 매력을 발산하고, 밤에는 활기찬 바 거리로 화려하게 빛납니다. 춘절과 주요 공휴일 동안 고성에서는 전통 무용과 횃불 축제와 같은 다양한 전통 활동이 열립니다.
      </p>
      
      <div className="my-6">
        {/* 이미지 자리표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">리장 고성 광장 거리 이미지</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 수허 고성</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        수허 고성은 리장 고성의 자매 도시로, 다옌 고성에서 약 4킬로미터 떨어져 있으며 다옌에 비해 더 조용하고 자연적입니다. 이곳은 차마고도의 중요한 시장 도시였으며 나시 조상들의 가장 초기 정착지 중 하나였습니다. 고성의 지우딩 용담은 거울처럼 맑으며 전통 나시 주택들로 둘러싸여 있습니다. 사방청탕 광장은 수허의 중심으로, 다양한 수공예 작업장과 특산품 상점으로 둘러싸여 있습니다. 이른 아침과 해질녘에 수허를 거닐면 가장 정통한 나시 풍미를 느낄 수 있습니다. 수허의 게스트하우스와 카페는 주로 조용하고 우아한 작은 골목에 숨겨져 있어 많은 젊은 예술가와 여행자들을 끌어들입니다.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">자연 명소</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 옥룡설산</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        옥룡설산은 북반구에서 가장 남쪽에 위치한 설산으로, 주봉인 판즈더우는 해발 5,596미터에 이릅니다. 연중 눈으로 덮여 있으며 구름 사이에 누워 있는 거대한 용처럼 보입니다. 이 산에는 여러 명소 지역이 있으며, 그 중 빙하 공원에서는 방문객들이 대형 케이블카를 타고 해발 4,506미터의 빙하에 도달하여 장엄한 천년 빙하를 가까이서 감상할 수 있습니다. 푸른 달 계곡의 호수는 꿈같은 푸른색을 보여주어 "푸른 달"이라는 이름을 얻었습니다. 전나무 초원은 산비탈에 위치한 고산 초원으로, 여름에는 꽃으로 덮여 있으며 소와 양이 풀을 뜯습니다. 간하이즈는 설산으로 가는 길에 반드시 지나가야 하는 지역이며 산을 관찰하고 사진 찍기에 최적의 장소입니다. 고도가 높기 때문에 방문객들은 산을 방문할 때 고산병에 주의해야 합니다. 전날 리장에 도착하여 적응하고 산에 있는 동안 적절하게 산소를 보충하는 것이 좋습니다.
      </p>
      
      <div className="my-6">
        {/* 이미지 자리표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">옥룡설산 이미지</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 루구 호수</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        루구 호수는 윈난과 쓰촨의 경계에 위치하며 리장에서 약 200킬로미터 떨어져 있고 윈난에서 두 번째로 큰 고원 호수입니다. 호수 물은 바닥까지 맑고 산으로 둘러싸여 있으며 "고원의 진주"로 알려져 있습니다. 이곳은 "걷는 결혼"과 같은 독특한 모계 문화 전통을 유지하는 모수오족의 고향입니다. 호수 주변에는 여러 마을이 있으며, 리거 반도와 루오수이 마을이 가장 대표적입니다. 모수오족의 전통 목선인 돼지통배를 타는 것은 호수 방문객들에게 필수적인 경험으로, 호수 풍경과 물속 반사를 즐길 수 있습니다. 저녁에는 모수오족의 모닥불 파티에 참여하여 그들의 독특한 민족 문화를 경험할 수 있습니다. 호수가에 있는 전망대는 전체 호수 지역의 파노라마 뷰를 제공하며 일출과 일몰을 촬영하기에 최고의 장소입니다.
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">리장 전통 요리</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">나시 풍미와 다양한 요리</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        리장 요리는 나시족, 한족, 티베트족을 포함한 여러 민족 그룹의 요리 특성을 결합합니다. 맛은 일반적으로 순하며 재료의 자연적인 맛을 강조하고 독특한 절임 및 그릴 기술이 특징입니다.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 연어와 송이버섯 훠궈</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        이 훠궈는 고원 송이버섯과 산간 계곡의 연어를 결합하여 특별히 신선하고 맛있는 요리를 만듭니다. 신선한 송이버섯은 독특한 향을 내며, 연어는 부드럽고 풍부합니다. 수프 베이스는 첨가된 양념 없이 가벼우며 재료의 자연적인 맛을 완전히 보존합니다. 이 요리를 즐기는 전통적인 방법은 순서를 따릅니다: 먼저 연어, 그 다음 송이버섯, 마지막으로 수프를 마시는 순서로 점진적인 맛 경험을 만듭니다. 이 요리는 리장 고성의 고급 레스토랑에서 찾을 수 있으며, "한 미터의 햇살" 레스토랑과 "옥룡 파빌리온"과 같은 곳이 있습니다.
      </p>
      
      <div className="my-6">
        {/* 이미지 자리표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">연어와 송이버섯 훠궈 이미지</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 나시 구운 생선</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        나시 구운 생선은 리장의 유명한 전통 요리로, 리장에서만 볼 수 있는 고원 담수어를 현지 향신료로 양념하여 모닥불 위에서 숯불로 굽습니다. 생선은 겉은 바삭하고 속은 부드러우며, 야생 풀과 소나무의 미묘한 힌트를 담고 있는 맛있는 풍미가 있습니다. 전통적인 먹는 방법은 나시 바바(일종의 평평한 빵)에 싸서 먹는 것으로, 독특한 맛을 만듭니다. 고성의 칠월일일 거리와 오월일일 거리 교차로에는 많은 나시 구운 생선 레스토랑이 있으며, "노인할머니의 구운 생선"이 가장 정통한 맛을 제공합니다.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. 리장 바바</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        리장 바바는 메밀이나 옥수수 가루로 만든 전통적인 나시족 케이크로, 납작하고 둥근 모양에 중간 부드러운 질감을 가지고 있습니다. 여러 가지 방법으로 먹을 수 있습니다: 꿀이나 버터 설탕에 담그거나 고기나 채소를 둘러싸는 방법이 있습니다. 고성 전체에서 노인 여성들이 신선한 바바를 만들어 판매하는 모습을 볼 수 있으며, 향기롭고 맛있으며 저렴합니다. 광장 거리 근처의 "나시 할머니의 수제 바바"와 사자산 기슭의 "엄마의 바바"가 시식하기에 좋은 클래식한 장소입니다.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">4. 절인 돼지갈비</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        리장의 절인 돼지갈비는 현지인들에게 중요한 겨울 식량 비축품이며 가장 대표적인 나시 특선 요리 중 하나입니다. 산에서 자란 돼지갈비로 만들어져 소금, 화자오(산초), 팔각, 및 기타 향신료로 절여진 다음, 화덕 위에 매달아 훈제 및 건조시키는데, 이렇게 하면 몇 개월 동안 보존됩니다. 일반적으로 감자와 무와 함께 조림으로 요리되어 오래 지속되는 뒷맛을 가진 맛있는 풍미를 만듭니다. 이 요리는 리장 고성의 "동바 비밀 영역"과 "천 가지 맛" 같은 레스토랑에서 찾을 수 있으며, 이들은 정통 방법을 사용하여 요리합니다.
      </p>
    </>
  );
} 