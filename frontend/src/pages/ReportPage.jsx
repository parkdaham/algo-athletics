import React from 'react';

const ReportPage = () => {
  // Mock data for the report
  const weeklyStats = {
    totalWorkouts: 5,
    totalCalories: 2450,
    averageWorkoutTime: 45,
    completionRate: 85
  };

  const weeklyProgress = [
    { day: '월', workouts: 1, calories: 2100, completed: true },
    { day: '화', workouts: 1, calories: 2300, completed: true },
    { day: '수', workouts: 0, calories: 1900, completed: false },
    { day: '목', workouts: 1, calories: 2600, completed: true },
    { day: '금', workouts: 1, calories: 2400, completed: true },
    { day: '토', workouts: 1, calories: 2800, completed: true },
    { day: '일', workouts: 0, calories: 2100, completed: false }
  ];

  const nutritionData = [
    { name: '단백질', current: 120, target: 150, unit: 'g', color: '#18c46f' },
    { name: '탄수화물', current: 250, target: 300, unit: 'g', color: '#277dff' },
    { name: '지방', current: 60, target: 80, unit: 'g', color: '#EE8539' },
    { name: '칼로리', current: 2450, target: 2800, unit: 'kcal', color: '#ff6b6b' }
  ];

  return (
    <div className="relative size-full flex flex-col" style={{ 
      background: 'linear-gradient(180deg, #18c46f 0%, #13a85f 100%)' 
    }}>
      {/* Header Section */}
      <div className="w-full px-5 pt-[24px] pb-[24px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] leading-[34px] font-semibold text-white">
            주간 리포트
          </h1>
          <p className="text-[14px] leading-[20px] font-medium text-white/80">
            이번 주 운동과 영양 섭취 현황을 확인해보세요
          </p>
        </div>

        {/* Weekly Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex flex-col gap-1">
              <span className="text-[12px] leading-[16px] font-semibold text-white/70">
                총 운동 횟수
              </span>
              <span className="text-[20px] leading-[28px] font-bold text-white">
                {weeklyStats.totalWorkouts}회
              </span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex flex-col gap-1">
              <span className="text-[12px] leading-[16px] font-semibold text-white/70">
                평균 칼로리
              </span>
              <span className="text-[20px] leading-[28px] font-bold text-white">
                {weeklyStats.totalCalories}kcal
              </span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex flex-col gap-1">
              <span className="text-[12px] leading-[16px] font-semibold text-white/70">
                평균 운동 시간
              </span>
              <span className="text-[20px] leading-[28px] font-bold text-white">
                {weeklyStats.averageWorkoutTime}분
              </span>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex flex-col gap-1">
              <span className="text-[12px] leading-[16px] font-semibold text-white/70">
                목표 달성률
              </span>
              <span className="text-[20px] leading-[28px] font-bold text-white">
                {weeklyStats.completionRate}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow w-full bg-[#fefefe] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_16px_0px_rgba(24,196,111,0.16),0px_0px_8px_0px_rgba(24,196,111,0.2)]">
        <div className="px-5 pt-6 pb-6">
          
          {/* Weekly Progress */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              주간 진행 상황
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <div className="grid grid-cols-7 gap-2">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <span className="text-[12px] leading-[16px] font-semibold text-[#4f5763]">
                      {day.day}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      day.completed 
                        ? 'bg-[#18c46f] text-white' 
                        : 'bg-[#eeeff2] text-[#4f5763]'
                    }`}>
                      {day.completed ? '✓' : '—'}
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] leading-[14px] font-medium text-[#7c8592]">
                        {day.workouts}회
                      </div>
                      <div className="text-[10px] leading-[14px] font-medium text-[#7c8592]">
                        {day.calories}kcal
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nutrition Tracking */}
          <div className="mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              영양 섭취 현황
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <div className="space-y-4">
                {nutritionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-[14px] leading-[20px] font-medium text-[#13151b]">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-[#eeeff2] rounded-full">
                        <div 
                          className="h-full rounded-full transition-all duration-300"
                          style={{ 
                            backgroundColor: item.color,
                            width: `${Math.min((item.current / item.target) * 100, 100)}%`
                          }}
                        ></div>
                      </div>
                      <span className="text-[12px] leading-[16px] font-semibold text-[#4f5763] min-w-[60px] text-right">
                        {item.current}/{item.target}{item.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Section */}
          <div>
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#13151b] mb-4">
              이번 주 성과
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#f8f9fa] rounded-lg">
                  <div className="w-8 h-8 bg-[#18c46f] rounded-full flex items-center justify-center">
                    <span className="text-white text-[14px]">🎯</span>
                  </div>
                  <div>
                    <div className="text-[14px] leading-[20px] font-semibold text-[#13151b]">
                      주간 목표 달성
                    </div>
                    <div className="text-[12px] leading-[16px] font-medium text-[#7c8592]">
                      5회 중 5회 운동 완료
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f8f9fa] rounded-lg">
                  <div className="w-8 h-8 bg-[#277dff] rounded-full flex items-center justify-center">
                    <span className="text-white text-[14px]">💪</span>
                  </div>
                  <div>
                    <div className="text-[14px] leading-[20px] font-semibold text-[#13151b]">
                      칼로리 목표 달성
                    </div>
                    <div className="text-[12px] leading-[16px] font-medium text-[#7c8592]">
                      일일 평균 2,450kcal 달성
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f8f9fa] rounded-lg">
                  <div className="w-8 h-8 bg-[#EE8539] rounded-full flex items-center justify-center">
                    <span className="text-white text-[14px]">🏃</span>
                  </div>
                  <div>
                    <div className="text-[14px] leading-[20px] font-semibold text-[#13151b]">
                      꾸준한 운동 습관
                    </div>
                    <div className="text-[12px] leading-[16px] font-medium text-[#7c8592]">
                      연속 5일 운동 기록 달성
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReportPage; 