import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep2Page = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        goal: '',
        interests: '',
        avoidIngredients: '',
        trainingIntensity: '',
        notes: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleNext = () => {
        // Step 1 데이터와 결합
        const step1Data = JSON.parse(localStorage.getItem('onboardingStep1Data') || '{}');
        const combinedData = { ...step1Data, ...formData };
        
        localStorage.setItem('onboardingData', JSON.stringify(combinedData));
        navigate('/onboarding/step3');
    };

    const handleBack = () => {
        navigate('/onboarding/step1');
    };

    const isFormValid = () => {
        return formData.goal.trim() !== '' || formData.interests.trim() !== '';
    };

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
                <span className="text-lg font-semibold text-gray-800">개인화 정보</span>
                <div></div> {/* For spacing */}
            </div>

            {/* Progress Bar */}
            <div className="px-5 pt-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">2단계</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">개인화 정보</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-[#40D48B] h-2 rounded-full transition-all duration-300"
                        style={{ width: '66.6%' }}
                    ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>2</span>
                    <span>3</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    맞춤 루틴을 위해<br />
                    알려주세요
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    자유롭게 입력해주세요. AI가 분석해서 최적의 루틴을 만들어드릴게요.
                </p>

                <div className="space-y-6">
                    {/* 영양 관리 목적 */}
                    <div>
                        <label className="block text-lg font-medium text-gray-900 mb-3">
                            영양 관리 목적
                        </label>
                        <textarea
                            value={formData.goal}
                            onChange={(e) => handleInputChange('goal', e.target.value)}
                            placeholder="예: 회복력 증가, 피로 개선, 근력 향상 등"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg resize-none h-20"
                        />
                    </div>

                    {/* 건강 관심 키워드 */}
                    <div>
                        <label className="block text-lg font-medium text-gray-900 mb-3">
                            건강 관심 키워드
                        </label>
                        <textarea
                            value={formData.interests}
                            onChange={(e) => handleInputChange('interests', e.target.value)}
                            placeholder="예: 장 건강, 수면, 관절, 면역, 집중력 등"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg resize-none h-20"
                        />
                    </div>

                    {/* 기피 성분 */}
                    <div>
                        <label className="block text-lg font-medium text-gray-900 mb-3">
                            기피하고 싶은 성분 <span className="text-gray-500 font-normal">(선택)</span>
                        </label>
                        <textarea
                            value={formData.avoidIngredients}
                            onChange={(e) => handleInputChange('avoidIngredients', e.target.value)}
                            placeholder="예: 철분, 카페인 등"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg resize-none h-16"
                        />
                    </div>

                    {/* 지난 주 훈련 강도 */}
                    <div>
                        <label className="block text-lg font-medium text-gray-900 mb-3">
                            지난 주 훈련 강도 <span className="text-gray-500 font-normal">(선택)</span>
                        </label>
                        <textarea
                            value={formData.trainingIntensity}
                            onChange={(e) => handleInputChange('trainingIntensity', e.target.value)}
                            placeholder="예: 주 3회 고강도, 매일 중강도 등"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg resize-none h-16"
                        />
                    </div>

                    {/* 기타 전달사항 */}
                    <div>
                        <label className="block text-lg font-medium text-gray-900 mb-3">
                            기타 전달사항 <span className="text-gray-500 font-normal">(선택)</span>
                        </label>
                        <textarea
                            value={formData.notes}
                            onChange={(e) => handleInputChange('notes', e.target.value)}
                            placeholder="예: 위장장애 이력 있음, 특별히 신경쓰고 싶은 부분 등"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg resize-none h-20"
                        />
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="px-5 pb-8 space-y-3">
                <button
                    onClick={handleNext}
                    disabled={!isFormValid()}
                    className={`w-full py-3 rounded-lg text-lg font-medium transition-colors
                        ${isFormValid() 
                            ? 'bg-[#40D48B] text-white hover:bg-[#36B877]' 
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                    루틴 생성하기
                </button>
                
                
            </div>
        </div>
    );
};

export default OnboardingStep2Page;