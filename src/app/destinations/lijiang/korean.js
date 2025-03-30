// 한국어 콘텐츠
export function getKoreanContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">첫인상</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        윈난성 북서부에 위치한 리장은 나시족의 고향이며 유네스코 세계문화유산인 "리장 고성"을 품고 있습니다. 해발 2,400미터가 넘는 고원에 자리한 이 고대 도시는 세 면이 산으로 둘러싸여 있고 한 면은 물로 둘러싸여 있습니다. 자연 경관과 문화유산이 여기서 완벽하게 어우러집니다. 맑은 시냇물이 고성을 가로지르고, 작은 다리들이 구불구불한 돌길을 가로지릅니다. 산비탈을 따라 지어진 나시족 가옥들은 나시족의 오랜 역사와 독특한 동바 문화를 보여줍니다. 리장은 웅장한 옥룡설산뿐만 아니라 아름다운 루구호와 호랑이 뛰어넘기 협곡도 자랑하여 "고원의 쑤저우"라는 별명을 얻었습니다.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">가장 대표적인 특징:</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>유네스코 세계문화유산 — 리장 고성(다옌 고성)</li>
        <li>나시족 동바 문화와 동바 상형문자</li>
        <li>옥룡설산 빙하와 전나무 고원의 자연 경관</li>
        <li>고성의 "삼수 시스템"과 다리와 수로로 연결된 전통 건축 배치</li>
      </ul>
      
      <div className="my-8">
        {/* 이미지 자리 표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">리장 고성 거리 전경</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">기본 정보</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">최적의 방문 시기</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>봄(3월-5월): 꽃이 만발하고 날씨가 쾌적함</li>
        <li>여름(6월-8월): 더위를 피하기 좋은 곳, 우기에는 간혹 짧은 소나기가 내림</li>
        <li>가을(9월-11월): 맑은 하늘, 최고의 경치</li>
        <li>겨울(12월-2월): 따뜻한 겨울 햇살, 관광객이 적음</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">기후 특성</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>고원 몬순 기후, 겨울에도 너무 춥지 않고 여름에도 극도로 덥지 않음</li>
        <li>연평균 기온 약 13°C, 풍부한 일조량</li>
        <li>낮과 밤의 온도차가 크므로 재킷이 필요함</li>
        <li>강한 자외선, 자외선 차단제가 중요함</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">현지 교통 개요</h3>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>리장 공항은 중국 주요 도시로의 직항편이 있음</li>
        <li>고성 내에서는 도보가 주요 교통수단이며, 관광 버스가 다양한 명소를 연결함</li>
        <li>옥룡설산을 방문하려면 관광 버스와 케이블카가 필요함</li>
        <li>루구호와 호랑이 뛰어넘기 협곡과 같은 인근 명소를 방문하려면 개인 차량 렌트나 당일 투어가 권장됨</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">문화와 역사 개요</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">역사적 발전</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>송나라 시대: 난저우 왕국의 중요한 도시</li>
        <li>원나라 시대: 무 씨족이 리장에서 나시족 수장으로 통치하기 시작</li>
        <li>명나라와 청나라 시대: 무 씨족 통치자들의 번영기, 고성 기본 구조 형성</li>
        <li>현대: 1997년 유네스코 세계문화유산으로 등재</li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">나시족 문화</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>동바 문화: 오늘날에도 여전히 사용되는 유일한 상형 문자 체계</li>
        <li>고대 나시족 음악: 고대 궁정 음악의 "살아있는 화석"으로 여겨짐</li>
        <li>나시족 의상: 여성을 위한 특징적인 "아이" 복장, 남성들은 일반적으로 푸른 천 가운을 입음</li>
        <li>전통 축제: 산두오 축제, 횃불 축제, 꽃 축제 등</li>
      </ul>
      
      <div className="my-8">
        {/* 이미지 자리 표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">동바 문화 이미지</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">꼭 방문해야 할 명소</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">고성 지역</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 다옌 고성(리장 고성)</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        다옌 고성은 800년 이상의 역사를 가진 리장 고성의 중심 지역입니다. 도시는 산비탈을 따라 건설되었으며, 독특한 "삼수 시스템"을 형성하는 수로를 따라 길이 나 있습니다. 사방 거리는 고성의 중심으로 과거 차마고도의 중요한 시장이었습니다. 사자산에 있는 완구 탑은 고성의 전경을 내려다보는 최고의 장소입니다. 고성 내 무 가문 저택은 무 씨족 통치자들의 저택으로, 나시족의 영광스러운 역사를 보여주는 웅장한 건축물입니다. 흑룡담 공원은 옥룡설산을 반사하는 맑은 물로 클래식한 엽서 풍경을 제공합니다. 낮에는 고성이 고대의 매력을 발산하는 반면, 밤에는 화려하게 조명되고 활기찬 바 거리가 있습니다. 춘절과 중요한 명절 동안 고성에서는 전통 춤과 횃불 축제와 같은 다양한 전통 활동이 열립니다.
      </p>
      
      <div className="my-6">
        {/* 이미지 자리 표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">리장 고성 사방 거리 이미지</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 슈허 고성</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        슈허 고성은 리장 고성의 자매 도시로, 다옌 고성에서 약 4킬로미터 떨어져 있으며, 다옌에 비해 더 조용하고 자연스러운 분위기입니다. 차마고도의 중요한 시장 도시였으며 나시족 조상들의 가장 초기 정착지 중 하나였습니다. 고성 내 구룡담은 거울처럼 맑으며 전통 나시족 가옥들로 둘러싸여 있습니다. 사방 청음 광장은 슈허의 중심으로 다양한 공예품 작업장과 특산품 상점들로 둘러싸여 있습니다. 이른 아침과 해질녘에 슈허를 거닐면 가장 진정한 나시족의 맛을 경험할 수 있습니다. 슈허의 게스트하우스와 카페는 주로 조용하고 우아한 작은 골목에 숨어 있어 많은 젊은 예술가들과 여행자들을 끌어들입니다.
      </p>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">자연 명소</h3>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 옥룡설산</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        옥룡설산은 북반구에서 가장 남쪽에 있는 설산으로, 주봉인 선자두는 해발 5,596미터에 이릅니다. 연중 눈으로 덮여 있으며, 구름 사이에 누워 있는 거대한 용과 비슷합니다. 산에는 여러 관광 지역이 있는데, 그중에서도 빙하 공원은 방문객들이 대형 케이블카를 타고 해발 4,506미터의 빙하에 도달하여 장엄한 천년 빙하를 가까이서 감상할 수 있습니다. 푸른 달 계곡의 호수들은 꿈같은 푸른색을 보여주어 "푸른 달"이란 이름을 얻었습니다. 전나무 초원은 산 중턱에 있는 고산 초원으로, 여름에는 꽃으로 덮여 있고 소와 양이 방목됩니다. 간하이즈는 설산으로 가는 길목의 필수 통과 지역이며 산을 관찰하고 사진을 찍기에 훌륭한 장소입니다. 높은 고도로 인해 방문객들은 산을 방문할 때 고산병에 주의해야 합니다. 하루 전에 리장에 도착하여 적응하고 산에 머무는 동안 적절하게 산소 공급을 받는 것이 권장됩니다.
      </p>
      
      <div className="my-6">
        {/* 이미지 자리 표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">옥룡설산 이미지</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 루구호</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        루구호는 윈난과 쓰촨의 경계에 위치해 있으며, 리장에서 약 200킬로미터 떨어져 있고, 윈난에서 두 번째로 큰 고원 호수입니다. 호수 물은 바닥까지 맑으며, 산으로 둘러싸여 있고, "고원의 진주"로 알려져 있습니다. 여기에는 모소족이 살고 있으며, 그들은 "걸어다니는 혼인"과 같은 독특한 모계 문화 전통을 유지하고 있습니다. 호수 주변에는 여러 마을이 있으며, 리거 반도와 루오수이 마을이 가장 대표적입니다. 돼지 여물통 배(모소족의 전통 목선)를 타는 것은 호수 방문객들에게 필수적인 경험으로, 호수 경관과 물에 비친 모습을 즐길 수 있게 해줍니다. 저녁에는 방문객들이 모소족의 모닥불 파티에 참여하여 그들의 독특한 민족 문화를 경험할 수 있습니다. 호수 주변의 전망대는 호수 전체 지역의 파노라마 전망을 제공하며, 일출과 일몰을 촬영하기에 최적의 장소입니다.
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">리장의 전통 요리</h2>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-800">나시족 풍미와 다양한 식문화</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        리장의 요리는 나시족, 한족, 티베트족을 포함한 여러 민족 그룹의 요리 특성을 결합합니다. 맛은 일반적으로 순하며 재료의 자연스러운 맛을 강조하고, 독특한 절임 및 구이 기술을 사용합니다.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">1. 연어와 송이버섯 훠궈</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        이 훠궈는 고원 송이버섯과 산간 개울의 연어를 결합하여 매우 신선하고 맛있는 요리를 만듭니다. 신선한 송이버섯은 독특한 향기를 발산하며, 연어는 부드럽고 풍부합니다. 수프 베이스는 첨가 양념 없이 가볍고, 재료의 자연스러운 풍미를 완전히 보존합니다. 이 요리를 즐기는 전통적인 방법은 순서가 있습니다: 먼저 연어, 그 다음 송이버섯, 마지막으로 수프를 마시는 순서로, 점진적인 맛 경험을 만듭니다. 이 요리는 리장 고성의 고급 레스토랑, 예를 들어 "한 미터의 햇살" 레스토랑과 "옥룡 정자"에서 찾을 수 있습니다.
      </p>
      
      <div className="my-6">
        {/* 이미지 자리 표시자 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">연어와 송이버섯 훠궈 이미지</p>
        </div>
      </div>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">2. 나시족 구운 생선</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        나시족 구운 생선은 리장의 유명한 전통 요리로, 리장에서만 볼 수 있는 고원 담수어를 사용하며, 현지 향신료로 간을 하고 모닥불 위에서 숯불로 구워냅니다. 생선은 겉은 바삭하고 속은 부드러우며, 들풀과 소나무의 미묘한 향이 담긴 맛있는 풍미를 지니고 있습니다. 전통적인 식사 방법은 나시족 바바(일종의 납작한 빵)에 싸서 먹는 것으로, 이는 독특한 맛을 만들어냅니다. 고성의 7월 1일 거리와 5월 1일 거리 교차로에는 많은 나시족 구운 생선 식당이 있으며, "노할머니의 구운 생선"이 가장 정통합니다.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">3. 리장 바바</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        리장 바바는 메밀이나 옥수수 가루로 만든 전통 나시족 과자로, 납작하고 둥근 모양이며 중간 정도의 부드러운 질감을 가지고 있습니다. 먹는 방법은 다양한데, 꿀이나 버터 설탕에 담그거나 고기나 채소를 감싸서 먹습니다. 고성 전체에서 노인 여성들이 신선한 바바를 만들어 판매하는 모습을 볼 수 있으며, 향기롭고 맛있으며 저렴합니다. 클래식한 시식 장소로는 사방 거리 근처의 "나시족 할머니의 수제 바바"와 사자산 기슭의 "엄마의 바바"가 있습니다.
      </p>
      
      <h4 className="text-lg font-medium mb-2 text-gray-800">4. 소금에 절인 돼지 갈비</h4>
      <p className="text-gray-700 mb-4 leading-relaxed">
        리장의 소금에 절인 돼지 갈비는 현지인들에게 중요한 겨울철 식량 비축물이며 가장 대표적인 나시족 특선 요리 중 하나입니다. 산에서 키운 돼지 갈비로 만들어지며, 소금, 화자오(중국 산초), 팔각향, 기타 향신료로 절여 난로 위에 걸어 훈제 및 건조시켜 몇 달 동안 보존합니다. 일반적으로 감자와 무와 함께 삶아서 먹으며, 길게 남는 뒷맛이 있는 맛있는 풍미를 만들어냅니다. 이 요리는 리장 고성의 "동바 비밀 세계"와 "천 가지 맛"과 같은 식당에서 찾을 수 있으며, 이들은 정통 방법을 사용하여 요리합니다.
      </p>
    </>
  );
} 