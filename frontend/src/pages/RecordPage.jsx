import React, { useState } from 'react';

const RecordPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  // Mock nutrition data for different days
  const nutritionRecords = {
    '2024-12-01': {
      meals: [
        { name: '아침식사', calories: 450, protein: 25, carbs: 45, fat: 15 },
        { name: '점심식사', calories: 680, protein: 35, carbs: 70, fat: 25 },
        { name: '저녁식사', calories: 520, protein: 30, carbs: 50, fat: 20 },
        { name: '간식', calories: 200, protein: 8, carbs: 25, fat: 8 }
      ],
      totalCalories: 1850,
      water: 2.1
    },
    '2024-12-03': {
      meals: [
        { name: '아침식사', calories: 380, protein: 20, carbs: 40, fat: 12 },
        { name: '점심식사', calories: 720, protein: 38, carbs: 75, fat: 28 },
        { name: '저녁식사', calories: 580, protein: 32, carbs: 55, fat: 22 }
      ],
      totalCalories: 1680,
      water: 1.8
    },
    '2024-12-05': {
      meals: [
        { name: '아침식사', calories: 420, protein: 22, carbs: 42, fat: 14 },
        { name: '점심식사', calories: 650, protein: 33, carbs: 68, fat: 24 },
        { name: '저녁식사', calories: 590, protein: 34, carbs: 58, fat: 23 },
        { name: '간식', calories: 150, protein: 6, carbs: 18, fat: 6 }
      ],
      totalCalories: 1810,
      water: 2.3
    },
    '2024-12-07': {
      meals: [
        { name: '아침식사', calories: 400, protein: 21, carbs: 41, fat: 13 },
        { name: '점심식사', calories: 690, protein: 36, carbs: 72, fat: 26 }
      ],
      totalCalories: 1090,
      water: 1.2
    }
  };

  // Get calendar data
  const getCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayWeekday = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayWeekday; i++) {
      calendarDays.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      calendarDays.push({
        day,
        dateStr,
        hasRecord: nutritionRecords[dateStr] !== undefined,
        record: nutritionRecords[dateStr]
      });
    }
    
    return calendarDays;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
    setSelectedDay(null);
  };

  const formatMonth = (date) => {
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
  };

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const calendarDays = getCalendarData();

  return (
    <div className="relative size-full flex flex-col" style={{ 
      background: 'linear-gradient(180deg, #18c46f 0%, #13a85f 100%)' 
    }}>
      {/* Header Section */}
      <div className="w-full px-5 pt-[24px] pb-[24px]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[24px] leading-[34px] font-semibold text-white">
              영양 기록
            </h1>
            <p className="text-[14px] leading-[20px] font-medium text-white/80">
              일별 식단과 영양 섭취를 확인하세요
            </p>
          </div>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigateMonth(-1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            ←
          </button>
          <h2 className="text-[20px] leading-[28px] font-semibold text-white">
            {formatMonth(currentDate)}
          </h2>
          <button 
            onClick={() => navigateMonth(1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="flex-grow w-full bg-[#fefefe] rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_16px_0px_rgba(24,196,111,0.16),0px_0px_8px_0px_rgba(24,196,111,0.2)]">
        <div className="px-5 pt-6 pb-6">
          
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {weekdays.map((day, index) => (
              <div key={index} className="text-center py-2">
                <span className="text-[14px] leading-[20px] font-semibold text-[#4f5763]">
                  {day}
                </span>
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {calendarDays.map((dayData, index) => (
              <div 
                key={index}
                className={`aspect-square p-1 ${dayData ? 'cursor-pointer' : ''}`}
                onClick={() => dayData && setSelectedDay(dayData)}
              >
                {dayData && (
                  <div className={`w-full h-full rounded-lg flex flex-col items-center justify-center transition-all duration-200 ${
                    dayData.hasRecord 
                      ? 'bg-[#18c46f] text-white hover:bg-[#13a85f]' 
                      : 'bg-[#f8f9fa] text-[#4f5763] hover:bg-[#eeeff2]'
                  }`}>
                    <span className="text-[14px] leading-[20px] font-semibold">
                      {dayData.day}
                    </span>
                    {dayData.hasRecord && (
                      <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Day Detail Section */}
          {selectedDay && (
            <div className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[18px] leading-[26px] font-semibold text-[#13151b]">
                  {currentDate.getMonth() + 1}월 {selectedDay.day}일 기록
                </h3>
                <button 
                  onClick={() => setSelectedDay(null)}
                  className="w-8 h-8 bg-[#f8f9fa] rounded-full flex items-center justify-center text-[#4f5763] hover:bg-[#eeeff2] transition-colors"
                >
                  ×
                </button>
              </div>

              {selectedDay.hasRecord ? (
                <div className="space-y-4">
                  {/* Total Summary */}
                  <div className="bg-[#f8f9fa] rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-[12px] leading-[16px] font-medium text-[#7c8592]">총 칼로리</div>
                        <div className="text-[16px] leading-[22px] font-semibold text-[#13151b]">
                          {selectedDay.record.totalCalories}kcal
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[12px] leading-[16px] font-medium text-[#7c8592]">수분 섭취</div>
                        <div className="text-[16px] leading-[22px] font-semibold text-[#13151b]">
                          {selectedDay.record.water}L
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Meal Details */}
                  <div className="space-y-3">
                    <h4 className="text-[16px] leading-[22px] font-semibold text-[#13151b]">식사 내역</h4>
                    {selectedDay.record.meals.map((meal, index) => (
                      <div key={index} className="border border-[#eeeff2] rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[14px] leading-[20px] font-semibold text-[#13151b]">
                            {meal.name}
                          </span>
                          <span className="text-[14px] leading-[20px] font-semibold text-[#18c46f]">
                            {meal.calories}kcal
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[12px] leading-[16px] font-medium text-[#7c8592]">
                          <div>단백질 {meal.protein}g</div>
                          <div>탄수화물 {meal.carbs}g</div>
                          <div>지방 {meal.fat}g</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[24px]">📝</span>
                  </div>
                  <p className="text-[14px] leading-[20px] font-medium text-[#7c8592]">
                    이 날에는 기록된 식단이 없습니다
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Legend */}
          <div className="mt-6 p-4 bg-[#f8f9fa] rounded-lg">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#18c46f] rounded-full"></div>
                <span className="text-[12px] leading-[16px] font-medium text-[#4f5763]">기록 있음</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#eeeff2] rounded-full"></div>
                <span className="text-[12px] leading-[16px] font-medium text-[#4f5763]">기록 없음</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecordPage; 