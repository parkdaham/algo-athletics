import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  const handleComingSoonClick = (reportType) => {
    setToastMessage(`${reportType} 리포트는 준비 중입니다.`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000); // Hide toast after 2 seconds
  };

  const handleWeeklyReportClick = () => {
    navigate('/weekly-report'); // Navigate to the new weekly report detail page
  };

  return (
    <div className="relative size-full flex flex-col items-center justify-center p-6" style={{
      background: 'white'
    }}>
      <h1 className="text-[28px] leading-[38px] font-bold text-white mb-8">
        나의 리포트
      </h1>

      <div className="w-full max-w-md bg-white rounded-xl p-6 mb-4 border border-[#E0E3E6]">
        <h2 className="text-[22px] leading-[30px] font-semibold text-[#13151b] mb-3">
          주간 리포트
        </h2>
        <p className="text-[14px] leading-[20px] font-medium text-[#4f5763] mb-4">
          주 1회 자동 생성되는 리포트로, 복약 이행률, 주간 컨디션 변화, 설계 조정 피드백 등을 확인할 수 있습니다.
        </p>
        <button
          onClick={handleWeeklyReportClick}
          className="w-full px-6 py-3 bg-[#18c46f] text-white rounded-lg font-medium hover:bg-[#13a85f] transition-colors"
        >
          상세 리포트 보기
        </button>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl p-6 mb-4 border border-[#E0E3E6]">
        <h2 className="text-[22px] leading-[30px] font-semibold text-[#13151b] mb-3">
          유전자 리포트
        </h2>
        <p className="text-[14px] leading-[20px] font-medium text-[#4f5763] mb-4">
          보편적 유전자 검사 결과를 기반으로, 개인에게 최적화된 건강 관리 방향을 제시합니다.
        </p>
        <button
          onClick={() => handleComingSoonClick('유전자')}
          className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          준비 중... 자세히 알아보기
        </button>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl p-6 mb-4 border border-[#E0E3E6]">
        <h2 className="text-[22px] leading-[30px] font-semibold text-[#13151b] mb-3">
          장 건강 리포트
        </h2>
        <p className="text-[14px] leading-[20px] font-medium text-[#4f5763] mb-4">
          장내 미생물 분석 결과를 통해 장 건강 상태를 파악하고, 맞춤형 식단 및 영양제 가이드를 제공합니다.
        </p>
        <button
          onClick={() => handleComingSoonClick('장 건강')}
          className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          준비 중... 자세히 알아보기
        </button>
      </div>

      {showToast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm z-50 transition-opacity duration-300">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ReportPage; 