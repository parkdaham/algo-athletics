import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeeklyRoutineDetailPage = () => {
  const navigate = useNavigate();

  // Mock data for daily routine time slots
  const dailyRoutine = [
    {
      time: '아침',
      description: '간편하게 섭취하여 하루를 활력 있게 시작하세요.',
      packs: [
        { name: '오메가-3', purpose: '염증 감소, 뇌 건강' },
        { name: '비타민 D', purpose: '뼈 건강, 면역력 증진' },
      ],
    },
    {
      time: '훈련 전',
      description: '운동 효율을 높이고 부상을 예방하는 데 도움을 줍니다.',
      packs: [
        { name: 'BCAA', purpose: '근육 손상 감소, 피로 회복' },
        { name: '카페인', purpose: '집중력 강화, 지구력 향상' },
      ],
    },
    {
      time: '훈련 후',
      description: '운동 후 빠른 회복을 위한 영양 공급이 중요합니다.',
      packs: [
        { name: '단백질 보충제', purpose: '근육 성장, 회복' },
        { name: '크레아틴', purpose: '근력 증진, 운동 능력 향상' },
      ],
    },
    {
      time: '자기 전',
      description: '숙면을 유도하고 다음 날 훈련을 준비하는 데 도움을 줍니다.',
      packs: [
        { name: '마그네슘', purpose: '근육 이완, 숙면 유도' },
        { name: '아연', purpose: '면역력 강화, 호르몬 균형' },
      ],
    },
  ];

  // Mock data for overall routine performance
  const overallPerformance = {
    title: '전체 루틴 성능 요약',
    summary: '이번 주 맞춤팩은 김민준님의 훈련 강도 증가와 수면 불안 개선에 초점을 맞춰 설계되었습니다. 주요 성분들이 시너지 효과를 내어 전반적인 회복력과 지적 능력 향상에 기여합니다.',
    metrics: [
      { name: '회복력', value: '⭐⭐⭐⭐☆', description: '빠른 근육 회복 및 피로 감소' },
      { name: '집중력', value: '⭐⭐⭐☆☆', description: '훈련 중 집중력 향상 및 정신적 피로 감소' },
      { name: '수면의 질', value: '⭐⭐⭐⭐☆', description: '더 깊고 편안한 수면 유도' },
    ],
    variablePoints: '개인별 컨디션과 훈련 강도에 따라 성분 함량 및 섭취 시기가 미세 조정됩니다.',
  };

  return (
    <div className="relative size-full flex flex-col" style={{
      background: 'linear-gradient(180deg, #18c46f 0%, #13a85f 100%)'
    }}>
      {/* Header Section */}
      <div className="w-full px-5 pt-[24px] pb-[24px] flex items-center justify-start relative z-10">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-white flex items-center mr-4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="text-[24px] leading-[34px] font-semibold text-white">
          주간 루틴 요약
        </h1>
      </div>

      {/* Main Content Area - Scrollable */}
      {/* Header height is approx. 80px (24pt + 24pb + 32 title height). Let's use 80px as a rough top offset. */}
      <div
        className="flex-grow w-full bg-[#fefefe] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_16px_0px_rgba(24,196,111,0.16),0px_0px_8px_0px_rgba(24,196,111,0.2)] overflow-y-auto absolute left-0 right-0"
        style={{ top: '80px', bottom: '0px' }} // No fixed bottom button for this page, so bottom is 0
      >
        <div className="px-5 pt-6 pb-6">
          {/* 1. 루틴 이름 / 아이콘 */}
          <div className="flex items-center mb-6">
            <img src="/path/to/routine-icon.png" alt="Routine Icon" className="w-12 h-12 mr-4"/>
            <h2 className="text-[22px] leading-[30px] font-bold text-[#13151b]">
              회복력 + 집중력 케어 맞춤팩
            </h2>
          </div>

          {/* 2. 설계 목적 요약 */}
          <div className="mb-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-[16px] leading-[22px] font-semibold text-[#13151b] mb-2">
              설계 목적
            </h3>
            <p className="text-[14px] leading-[20px] text-[#4f5763]">
              훈련 강도 증가 및 수면 불안 개선을 위해 회복력 및 지적력 감소 루틴으로 설계되었습니다.
            </p>
          </div>

          {/* 3. 일별 설계 시간대 분할 */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              일별 섭취 가이드
            </h2>
            <div className="space-y-4">
              {dailyRoutine.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
                  <h3 className="text-[18px] leading-[24px] font-semibold text-[#18c46f] mb-2">
                    {item.time}
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[#4f5763] mb-3">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.packs.map((pack, packIndex) => (
                      <div key={packIndex} className="flex justify-between items-center bg-[#f8f9fa] p-3 rounded-lg">
                        <span className="text-[14px] font-medium text-[#13151b]">{pack.name}</span>
                        <span className="text-[12px] text-[#7c8592]">{pack.purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 전체 루틴 성능 요약 */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              {overallPerformance.title}
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <p className="text-[14px] leading-[20px] text-[#4f5763] mb-4">
                {overallPerformance.summary}
              </p>
              <div className="space-y-3 mb-4">
                {overallPerformance.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-[14px] font-medium text-[#13151b]">{metric.name}</span>
                    <span className="text-[14px] font-semibold text-[#18c46f]">{metric.value}</span>
                    <p className="text-[12px] text-[#7c8592]">{metric.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-[12px] leading-[18px] text-[#7c8592]">
                <span className="font-semibold">가변점:</span> {overallPerformance.variablePoints}
              </p>
            </div>
          </div>

          {/* 5. 도핑 안전성 안내 */}
          <div>
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              도핑 안전성
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <p className="text-[14px] leading-[20px] text-gray-700">
                이 루틴은 KADA(한국도핑방지위원회) 기준 도핑 무해 성능으로 구성되어 있습니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeeklyRoutineDetailPage; 