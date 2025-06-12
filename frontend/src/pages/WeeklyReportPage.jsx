import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeeklyReportPage = () => {
  const navigate = useNavigate();

  // Mock data for new PRD sections
  const routineAchievementRate = 85; // Example: 85%
  const providedRoutines = 14;
  const consumedRoutines = 12;
  const timeSlotAchievement = [
    { time: '아침', rate: 90 },
    { time: '훈련 전', rate: 70 },
    { time: '훈련 후', rate: 60 },
    { time: '자기 전', rate: 80 },
  ];
  const missedIntake = [
    { date: '토요일', time: '오후 루틴', reason: '미섭취' },
  ];
  const consumedCustomPacks = [
    { name: '회복 강화를 위한 3종 조합', consumed: true },
    { name: '퍼포먼스 향상을 위한 3종 조합', consumed: true },
    { name: '집중력 증진 팩', consumed: false },
  ];
  const nutritionalEffects = [
    '이번 주 섭취한 루틴은 달걀 12개 분량의 단백질과 유사합니다.',
    '연어 2마리 분량의 오메가3와 유사한 효과를 제공합니다.',
  ];

  return (
    <div className="relative size-full flex flex-col" style={{
      background: 'linear-gradient(180deg, #18c46f 0%, #13a85f 100%)'
    }}>
      {/* Fixed Header Section (only back button) */}
      <div className="w-full px-5 pt-[24px] pb-[24px] relative z-10">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="absolute left-5 top-1/2 -translate-y-1/2 text-white flex items-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Main Content Area - Scrollable */}
      {/* Calculated fixed header height: 24(pt) + 24(pb) + button/svg height (approx 24px) = ~72px. Set top to 72px for safety. */}
      {/* Calculated fixed bottom button area height: 64px. Add 32px margin = 96px */}
      <div
        className="flex-grow w-full bg-[#fefefe] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_16px_0px_rgba(24,196,111,0.16),0px_0px_8px_0px_rgba(24,196,111,0.2)] overflow-y-auto absolute left-0 right-0"
        style={{ top: '72px', bottom: '96px' }} /* Adjusted top and bottom values */
      >
        {/* Inner content div with standard padding-bottom */}
        <div className="px-5 pt-6 pb-[128px]"> {/* Adjusted padding-bottom for content not to be cut off */}
          {/* 김민준님의 리포트가 도착했어요 title and date - now scrollable */}
          <div className="mb-6 text-left"> {/* Ensured left alignment here */}
            <h1 className="text-[24px] leading-[34px] font-semibold text-[#13151b] mb-2 text-left">
              <span className="font-bold">김민준</span>님의<br/>리포트가 도착했어요
            </h1>
            <p className="text-[14px] leading-[20px] text-[#4f5763] text-left">
              24.01.01 - 24.01.07
            </p>
          </div>

          {/* 1. 루틴 달성률 */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              루틴 달성률
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex flex-col items-center">
              <p className="text-[32px] leading-[40px] font-bold text-[#18c46f] mb-2">
                {routineAchievementRate}%
              </p>
              <div className="w-full h-4 bg-[#eeeff2] rounded-full">
                <div
                  className="h-full bg-[#18c46f] rounded-full"
                  style={{ width: `${routineAchievementRate}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* 2. 제공 vs 섭취 횟수 */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              제공 vs 섭취 횟수
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex justify-around items-center">
              <div className="text-center">
                <p className="text-[28px] font-bold text-[#13151b]">{providedRoutines}회</p>
                <p className="text-[14px] text-[#4f5763]">제공</p>
              </div>
              <span className="text-[28px] font-bold text-[#4f5763]">/</span>
              <div className="text-center">
                <p className="text-[28px] font-bold text-[#18c46f]">{consumedRoutines}회</p>
                <p className="text-[14px] text-[#4f5763]">섭취</p>
              </div>
            </div>
          </div>

          {/* 3. 시간대별 달성률 */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              시간대별 달성률
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] space-y-3">
              {timeSlotAchievement.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-[16px] font-medium text-[#13151b]">{item.time}</span>
                  <span className="text-[16px] font-semibold text-[#18c46f]">{item.rate}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 섭취 누락 트래킹 */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              섭취 누락 트래킹
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] space-y-3">
              {missedIntake.length > 0 ? (
                missedIntake.map((item, index) => (
                  <p key={index} className="text-[14px] leading-[20px] text-[#4f5763]">
                    {item.date} {item.time} {item.reason}
                  </p>
                ))
              ) : (
                <p className="text-[14px] leading-[20px] text-[#4f5763]">
                  이번 주에는 섭취 누락이 없었습니다.
                </p>
              )}
            </div>
          </div>

          {/* 5. 섭취한 맞춤팩 요약 */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              섭취한 맞춤팩 요약
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] space-y-3">
              {consumedCustomPacks.map((pack, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-[16px] font-medium text-[#13151b]">{pack.name}</span>
                  <span className="text-[18px]"> {pack.consumed ? '✅' : '❌'} </span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. 내 영양 효과 */}
          <div>
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              내 영양 효과
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] space-y-3">
              {nutritionalEffects.map((effect, index) => (
                <p key={index} className="text-[14px] leading-[20px] text-[#4f5763]">
                  {effect}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* Fixed bottom button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[410px] mx-auto py-4 px-5 bg-white shadow-top-md">
        <button className="w-full px-6 py-3 bg-[#18c46f] text-white rounded-lg font-medium hover:bg-[#13a85f] transition-colors">
          다음주 루틴 처방받기
        </button>
      </div>
    </div>
  );
};

export default WeeklyReportPage; 