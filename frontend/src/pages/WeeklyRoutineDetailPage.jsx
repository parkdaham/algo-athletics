import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';
import BottomNav from '../components/BottomNav';

const WeeklyRoutineDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // PRD 기반으로 재정의된 목업 데이터
  const routineData = {
    // 1. 맞춤팩 이름 및 핵심 요약
    routineName: '회복력 맞춤팩',
    coreSummary: '고강도 훈련 주간에 경기력과 집중력을 높여줘요',

    // 2. 설계에 사용된 사용자 정보
    userInfo: [
      '기본 신체 정보 (체중, 키 등)',
      '높은 훈련 빈도 (주 5회 이상)',
      '낮은 수면의 질 (수면 불안정)',
      'BCAA 외 복용 이력 없음',
    ],

    // 3. 시간대별 섭취 루틴 구성 & 5. 영양소 상세 구성 정보
    intakeGuide: [
      {
        time: '아침',
        description: '간편하게 섭취하여 하루를 활력 있게 시작하세요.',
        supplements: [
          { name: '오메가-3', amount: '1000mg', purpose: '염증 감소, 뇌 건강' },
          { name: '비타민 D', amount: '2000IU', purpose: '뼈 건강, 면역력 증진' },
        ],
      },
      {
        time: '훈련 전',
        description: '운동 효율을 높이고 부상을 예방해요.',
        supplements: [
          { name: 'BCAA', amount: '5g', purpose: '근육 손상 감소, 피로 회복' },
          { name: '카페인', amount: '200mg', purpose: '집중력 강화, 지구력 향상' },
        ],
      },
      {
        time: '훈련 후',
        description: '운동 후 빠른 회복을 위한 영양 공급을 도와줘요',
        supplements: [
          { name: '단백질 보충제', amount: '30g', purpose: '근육 성장, 회복' },
          { name: '크레아틴', amount: '5g', purpose: '근력 증진, 운동 능력 향상' },
        ],
      },
      {
        time: '자기 전',
        description: '숙면을 유도하고 다음 날 훈련을 준비하는 데 도움을 줍니다.',
        supplements: [
          { name: '마그네슘', amount: '400mg', purpose: '근육 이완, 숙면 유도' },
          { name: '아연', amount: '15mg', purpose: '면역력 강화, 호르몬 균형' },
        ],
      },
    ],

    // 3. 맞춤팩의 상세 성능
    detailedPerformance: {
      title: '이렇게 케어할게요',
      mainIngredient: {
        name: '홍경천테아닌 (홍경천 + 테아닌 복합제)',
        description: '육체적 및 정신적 스트레스를 완화하고, 경기 전이나 훈련 중 집중력을 높여줍니다.',
        research: '스포츠 영양학 연구에 따르면, 홍경천은 고강도 훈련으로 인한 피로와 스트레스를 감소시키며, 테아닌은 심리적 안정 및 집중력 향상에 도움을 주어 경기력 증진에 기여합니다.',
      },
      compositionNote: '본 맞춤팩은 기본조합(오메가3, 종합비타민, 마그네슘, 비타민 D) 위에 추가로 섭취하며, 기본조합에서 이미 충족되고 있는 항산화, 회복 지원 성분과 중복되지 않도록 설계되었습니다.',
    },

    // 5. 도핑 안전성 및 출처 명시
    dopingSafety: {
      statement: '이 루틴은 KADA(한국도핑방지위원회) 기준 도핑 무해 성능으로 구성되어 있습니다.',
      manufacturer: '㈜헬스케어솔루션',
      certification: 'GMP, HACCP 인증 완료'
    },

    // 6. 제외한 영양성분 정보
    excludedSupplements: {
      title: '이런 건 제외했어요',
      reasons: [
        '알러지 성분이 우려되는 성분',
        '이미 드시고 계신 영양제',
        '질병 이력에 좋지 않은 성분',
      ],
    }
  };

  return (
    <div className="relative size-full flex flex-col" style={{
      background: 'white'
    }}>
      <TopNavBar
        pageTitle=""
        showIcons={true}
        hideBackButton={false}
        hidePageTitle={true}
        location={location}
        bgColor="white"
      />
      {/* Main Content Area - Scrollable */}
      <div
        className="flex-1 w-full bg-[#fefefe] overflow-y-auto px-5 pt-6 pb-[64px]"
      >
        {/* 1. 맞춤팩 이름 및 핵심 요약 */}
        <div className="flex flex-col mb-6">
          {/* 아이콘 이미지는 임시로 placeholder 사용 */}
          <div className="size-16 bg-blue-200 rounded-lg mb-4"></div>
          <h2 className="text-[24px] leading-[30px] font-bold text-[#13151b] mb-3">
            다함님의 <br/>{routineData.routineName}이예요
          </h2>
          <p className="text-[16px] leading-[20px] text-[#4f5763]">
            {routineData.coreSummary}
          </p>
        </div>

        {/* 2. 설계에 사용된 사용자 정보 */}
        <div className="mb-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-[16px] leading-[22px] font-semibold text-[#13151b] mb-2">
            '이름'님께 꼭 맞췄어요
          </h3>
          <div className="flex flex-wrap gap-2">
            {routineData.userInfo.map((info, index) => (
              <span key={index} className="text-[14px] text-[#4f5763] bg-gray-200 px-3 py-1 rounded-full">
                {info}
              </span>
            ))}
          </div>
        </div>

        {/* 3. 시간대별 섭취 루틴 구성 */}
        <div className="mb-6">
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
            시간대별 섭취 가이드
          </h2>
          <div className="space-y-4">
            {routineData.intakeGuide.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
                <h3 className="text-[18px] leading-[24px] font-semibold text-[#18c46f] mb-2">
                  {item.time}
                </h3>
                <p className="text-[14px] leading-[20px] text-[#4f5763] mb-3">
                  {item.description}
                </p>
                {/* 5. 영양소 상세 구성 정보 포함 */}
                <div className="space-y-2">
                  {item.supplements.map((supplement, suppIndex) => (
                    <div key={suppIndex} className="flex justify-between items-center bg-[#f8f9fa] p-3 rounded-lg">
                      <span className="text-[14px] font-medium text-[#13151b]">{supplement.name}</span>
                      <span className="text-[12px] text-[#7c8592]">{supplement.amount} / {supplement.purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 맞춤팩의 상세 성능 */}
        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
            {routineData.detailedPerformance.title}
          </h2>
          <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
            <p className="text-[14px] leading-[20px] text-gray-700 mb-2">
              {routineData.detailedPerformance.mainIngredient.description}
            </p>
            <p className="text-[12px] leading-[18px] text-[#7c8592]">
              <span className="font-semibold">연구:</span> {routineData.detailedPerformance.mainIngredient.research}
            </p>
          </div>
        </div>

        {/* 5. 도핑 안전성 */}
        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
            도핑 안전성
          </h2>
          <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
            <p className="text-[14px] leading-[20px] text-gray-700 mb-2">
              {routineData.dopingSafety.statement}
            </p>
            <p className="text-[12px] leading-[18px] text-[#7c8592]">
              <span className="font-semibold">제조사:</span> {routineData.dopingSafety.manufacturer}<br/>
              <span className="font-semibold">인증:</span> {routineData.dopingSafety.certification}
            </p>
          </div>
        </div>

        {/* 6. 제외한 영양성분 정보 */}
        <div>
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
            {routineData.excludedSupplements.title}
          </h2>
          <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
            <p className="text-[14px] leading-[20px] text-gray-700 mb-2">
              {routineData.excludedSupplements.reasons.join(', ')}
            </p>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default WeeklyRoutineDetailPage; 