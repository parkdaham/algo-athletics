import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStartPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/onboarding/step1');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-[#E3FBF0] to-[#40D48B] flex flex-col">
            {/* Top Content */}
            <div className="flex-1 flex flex-col justify-center items-center px-5 py-12">
                {/* Icon/Illustration */}
                <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center mb-8 shadow-lg">
                    <div className="w-16 h-16 bg-[#40D48B] rounded-full flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
                    맞춤 영양 루틴을<br />
                    만들어보세요
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                    운동선수에게 최적화된<br />
                    AI 맞춤 영양 관리 시스템
                </p>

                {/* Features */}
                <div className="w-full max-w-sm space-y-4 mb-12">
                    <div className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                        <div className="w-8 h-8 bg-[#40D48B] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-800">개인 건강 상태 분석</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                        <div className="w-8 h-8 bg-[#40D48B] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-800">AI 기반 맞춤 루틴 설계</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                        <div className="w-8 h-8 bg-[#40D48B] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-800">지속적인 모니터링 및 조정</span>
                    </div>
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="px-5 pb-8 space-y-3">
                <button
                    onClick={handleStart}
                    className="w-full py-4 bg-white text-[#40D48B] rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                    맞춤 루틴 만들기
                </button>
                
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center pb-4">
                <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingStartPage;