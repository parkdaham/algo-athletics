import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep3Page = () => {
    const navigate = useNavigate();
    const [onboardingData, setOnboardingData] = useState(null);
    const [routineSummary, setRoutineSummary] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [isModifying, setIsModifying] = useState(false);

    useEffect(() => {
        // 온보딩 데이터 불러오기
        const data = JSON.parse(localStorage.getItem('onboardingData') || '{}');
        setOnboardingData(data);
        
        // 여기서 실제로는 AI API를 호출해서 루틴을 생성해야 함
        // 현재는 목업 데이터 사용
        generateRoutineSummary(data);
    }, []);

    const generateRoutineSummary = (data) => {
        // 실제로는 AI API 호출
        const mockRoutine = {
            title: '회복력 중심 맞춤 루틴',
            duration: '4주',
            packs: [
                {
                    name: '아침 기본팩',
                    timing: '아침 식사 전',
                    supplements: ['멀티비타민', '오메가3', '비타민D'],
                    purpose: '기본 영양소 보충 및 하루 시작 준비'
                },
                {
                    name: '회복 부스터팩',
                    timing: '훈련 후 30분 이내',
                    supplements: ['단백질', 'BCAA', '마그네슘'],
                    purpose: '근육 회복 및 피로 감소'
                },
                {
                    name: '수면 서포트팩',
                    timing: '취침 1시간 전',
                    supplements: ['마그네슘', '글리신', '멜라토닌'],
                    purpose: '깊은 수면을 통한 완전한 회복'
                }
            ],
            insights: [
                '입력하신 "회복력 증가" 목표에 맞춰 회복 중심 루틴으로 설계했어요',
                '장 건강과 수면 관심사를 반영해 프로바이오틱스와 수면 보조제를 포함했어요',
                '주 3회 고강도 훈련에 맞는 회복 타이밍을 고려했어요'
            ]
        };
        setRoutineSummary(mockRoutine);
    };

    const handleModifyRequest = () => {
        if (feedback.trim() === '') return;
        
        setIsModifying(true);
        
        // 실제로는 AI API를 호출해서 루틴을 수정
        setTimeout(() => {
            // 목업 수정된 루틴
            const modifiedRoutine = {
                ...routineSummary,
                title: '수정된 회복력 중심 루틴',
                insights: [
                    ...routineSummary.insights,
                    `사용자 피드백 "${feedback}"을 반영해서 루틴을 조정했어요`
                ]
            };
            setRoutineSummary(modifiedRoutine);
            setFeedback('');
            setIsModifying(false);
        }, 2000);
    };

    const handleConfirm = () => {
        // 최종 루틴 데이터 저장
        const finalData = {
            onboardingData,
            routineSummary,
            completedAt: new Date().toISOString()
        };
        
        localStorage.setItem('userRoutine', JSON.stringify(finalData));
        localStorage.removeItem('onboardingStep1Data');
        localStorage.removeItem('onboardingData');
        
        // 홈으로 이동
        navigate('/');
    };

    const handleBack = () => {
        navigate('/onboarding/step2');
    };

    if (!routineSummary) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#40D48B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">AI가 맞춤 루틴을 생성 중이에요...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navigation Bar */}
            <div className="px-5 pt-6 pb-4 flex items-center justify-between">
                <button
                    onClick={handleBack}
                    className="text-gray-600 p-2 rounded-full hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </button>
                <span className="text-lg font-semibold text-gray-800">루틴 확인</span>
                <div></div> {/* For spacing */}
            </div>

            {/* Progress Bar */}
            <div className="px-5 pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">3단계</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">루틴 확인</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-[#40D48B] h-2 rounded-full transition-all duration-300"
                        style={{ width: '100%' }}
                    ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>3</span>
                    <span>3</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-6 overflow-y-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        {routineSummary.title}
                    </h1>
                    <p className="text-gray-600">
                        {routineSummary.duration} 프로그램으로 설계되었어요
                    </p>
                </div>

                {/* AI 인사이트 */}
                <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#40D48B] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            AI
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-2">맞춤화 포인트</h3>
                            <ul className="space-y-1">
                                {routineSummary.insights.map((insight, index) => (
                                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                        <span className="text-[#40D48B] mt-1">•</span>
                                        <span>{insight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 루틴 팩들 */}
                <div className="space-y-4 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">루틴 구성</h2>
                    {routineSummary.packs.map((pack, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-semibold text-gray-900">{pack.name}</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {pack.timing}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {pack.supplements.map((supplement, idx) => (
                                    <span key={idx} className="bg-[#e8f5e8] text-[#2d5a3d] px-3 py-1 rounded-full text-sm">
                                        {supplement}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">{pack.purpose}</p>
                        </div>
                    ))}
                </div>

                {/* 수정 요청 섹션 */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-gray-900 mb-3">수정하고 싶은 부분이 있나요?</h3>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="예: 아침에 복용하는 알약 개수를 줄여주세요, 카페인 성분을 추가해주세요 등"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none h-20 mb-3"
                        disabled={isModifying}
                    />
                    <button
                        onClick={handleModifyRequest}
                        disabled={feedback.trim() === '' || isModifying}
                        className={`w-full py-2 rounded-lg text-sm font-medium transition-colors
                            ${feedback.trim() !== '' && !isModifying
                                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                    >
                        {isModifying ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                수정 중...
                            </div>
                        ) : '수정 요청하기'}
                    </button>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="px-5 pb-8 space-y-3">
                <button
                    onClick={handleConfirm}
                    className="w-full py-3 bg-[#40D48B] text-white rounded-lg text-lg font-medium hover:bg-[#36B877] transition-colors"
                >
                    이대로 시작하기
                </button>
                
                
            </div>
        </div>
    );
};

export default OnboardingStep3Page;