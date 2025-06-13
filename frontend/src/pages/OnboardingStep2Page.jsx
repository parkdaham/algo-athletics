import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

const OnboardingStep2Page = () => {
    const navigate = useNavigate();
    const { substep = '1' } = useParams();
    const currentStep = parseInt(substep);
    
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem('onboardingStep2Data');
        return saved ? JSON.parse(saved) : {
            training_intensity: '',
            fatigue_level: '',
            sleep_quality: '',
            injury_history: '',
            nutrition_goal: '',
            notes: ''
        };
    });

    useEffect(() => {
        localStorage.setItem('onboardingStep2Data', JSON.stringify(formData));
    }, [formData]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleNext = () => {
        try {
            console.log('handleNext called, currentStep:', currentStep);
            console.log('formData:', formData);
            
            if (currentStep < 6) {
                console.log('Navigating to next substep:', `/onboarding/step2/${currentStep + 1}`);
                navigate(`/onboarding/step2/${currentStep + 1}`);
            } else {
                console.log('Moving to Step 3');
                // 마지막 단계에서 Step 3로 이동
                const step1Data = JSON.parse(localStorage.getItem('onboardingStep1Data') || '{}');
                const step2Data = {
                    training_intensity: formData.training_intensity || '',
                    fatigue_level: formData.fatigue_level || '',
                    sleep_quality: formData.sleep_quality || '',
                    injury_history: (formData.injury_history || '').trim(),
                    nutrition_goal: formData.nutrition_goal || '',
                    notes: (formData.notes || '').trim()
                };
                
                console.log('step1Data:', step1Data);
                console.log('step2Data:', step2Data);
                
                const combinedData = { ...step1Data, ...step2Data };
                localStorage.setItem('onboardingData', JSON.stringify(combinedData));
                console.log('Combined data saved, navigating to step3');
                navigate('/onboarding/step3');
            }
        } catch (error) {
            console.error('Error in handleNext:', error);
            alert('오류가 발생했습니다: ' + error.message);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            navigate(`/onboarding/step2/${currentStep - 1}`);
        } else {
            navigate('/onboarding/step1');
        }
    };

    const handleSkip = () => {
        handleNext();
    };

    const getProgressPercentage = () => {
        return ((currentStep + 2) / 9) * 100; // 9 total steps (3 main + 6 substeps)
    };

    const isCurrentStepValid = () => {
        switch (currentStep) {
            case 1: return formData.training_intensity !== '';
            case 2: return formData.fatigue_level !== '';
            case 3: return formData.sleep_quality !== '';
            case 4: return formData.nutrition_goal !== '';
            case 5: return true; // 선택사항
            case 6: return true; // 선택사항
            default: return false;
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <Step2_1 
                        value={formData.training_intensity}
                        onChange={(value) => handleInputChange('training_intensity', value)}
                    />
                );
            case 2:
                return (
                    <Step2_2 
                        value={formData.fatigue_level}
                        onChange={(value) => handleInputChange('fatigue_level', value)}
                    />
                );
            case 3:
                return (
                    <Step2_3 
                        value={formData.sleep_quality}
                        onChange={(value) => handleInputChange('sleep_quality', value)}
                    />
                );
            case 4:
                return (
                    <Step2_4 
                        value={formData.nutrition_goal}
                        onChange={(value) => handleInputChange('nutrition_goal', value)}
                    />
                );
            case 5:
                return (
                    <Step2_5 
                        value={formData.injury_history}
                        onChange={(value) => handleInputChange('injury_history', value)}
                    />
                );
            case 6:
                return (
                    <Step2_6 
                        value={formData.notes}
                        onChange={(value) => handleInputChange('notes', value)}
                    />
                );
            default:
                return null;
        }
    };

    const isOptionalStep = currentStep === 5 || currentStep === 6;

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <TopNavBar hideBackButton={false} pageTitle="개인화 정보" />

            {/* Progress Bar */}
            <div className="px-5 pt-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">2단계</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">개인화 정보 ({currentStep}/6)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-[#40D48B] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-6">
                {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="px-5 pb-8 space-y-3">
                <button
                    onClick={handleNext}
                    disabled={false}
                    className={`w-full py-3 rounded-lg text-lg font-medium transition-colors
                        ${(isCurrentStepValid() || isOptionalStep)
                            ? 'bg-[#40D48B] text-white hover:bg-[#36B877]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                    {currentStep === 6 ? '맞춤팩 생성하기' : '다음'}
                </button>
                
                {isOptionalStep && (
                    <button
                        onClick={handleSkip}
                        className="w-full py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        건너뛰기
                    </button>
                )}
            </div>
        </div>
    );
};

// Step 2-1: 운동/훈련 강도 및 빈도
const Step2_1 = ({ value, onChange }) => {
    const options = [
        { id: 'high_intensity', label: '주 5회 이상 고강도', desc: '고강도 운동을 자주 하는 편' },
        { id: 'medium_intensity', label: '주 3-4회 중강도', desc: '적당한 강도로 규칙적 운동' },
        { id: 'low_intensity', label: '주 1-2회 저강도', desc: '가벼운 운동을 가끔' },
        { id: 'rest_focused', label: '휴식 위주', desc: '운동보다는 휴식을 우선' }
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                평소 운동 강도와<br />
                빈도는 어느 정도인가요?
            </h1>
            <p className="text-gray-600 text-lg mb-8">
                최근 한 달 기준으로 선택해주세요.
            </p>

            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onChange(option.id)}
                        className={`w-full p-4 text-left border rounded-lg transition-colors
                            ${value === option.id 
                                ? 'border-[#40D48B] bg-green-50' 
                                : 'border-gray-300 hover:border-gray-400'}`}
                    >
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Step 2-2: 피로도 체크
const Step2_2 = ({ value, onChange }) => {
    const options = [
        { id: 'very_tired', label: '매우 피곤함', desc: '하루 종일 피로감을 느낌' },
        { id: 'somewhat_tired', label: '약간 피곤함', desc: '때때로 피로감을 느낌' },
        { id: 'normal', label: '보통', desc: '피로감은 평범한 수준' },
        { id: 'energetic', label: '활기참', desc: '대부분의 시간 활기찬 편' },
        { id: 'very_energetic', label: '매우 활기참', desc: '항상 에너지가 넘침' }
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                요즘 컨디션은<br />
                어떠신가요?
            </h1>
            <p className="text-gray-600 text-lg mb-8">
                최근 1주일 기준으로 평소 피로도를 선택해주세요.
            </p>

            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onChange(option.id)}
                        className={`w-full p-4 text-left border rounded-lg transition-colors
                            ${value === option.id 
                                ? 'border-[#40D48B] bg-green-50' 
                                : 'border-gray-300 hover:border-gray-400'}`}
                    >
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Step 2-3: 수면의 질 체크
const Step2_3 = ({ value, onChange }) => {
    const options = [
        { id: 'very_poor', label: '매우 나쁨', desc: '자주 잠들기 어렵고 깊게 못 잠' },
        { id: 'poor', label: '나쁨', desc: '가끔 잠들기 어렵고 자주 깸' },
        { id: 'fair', label: '보통', desc: '평범한 수면 패턴' },
        { id: 'good', label: '좋음', desc: '대부분 잘 자고 개운함' },
        { id: 'very_good', label: '매우 좋음', desc: '항상 깊게 자고 매우 개운함' }
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                수면의 질은<br />
                어떠신가요?
            </h1>
            <p className="text-gray-600 text-lg mb-8">
                최근 1주일 기준으로 평소 수면 상태를 선택해주세요.
            </p>

            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onChange(option.id)}
                        className={`w-full p-4 text-left border rounded-lg transition-colors
                            ${value === option.id 
                                ? 'border-[#40D48B] bg-green-50' 
                                : 'border-gray-300 hover:border-gray-400'}`}
                    >
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Step 2-4: 과거 및 현재 부상 이력
const Step2_4 = ({ value, onChange }) => {
    const options = [
        { id: 'performance', label: '경기력 향상', desc: '운동 능력과 경기 성과 개선' },
        { id: 'recovery', label: '회복력 강화', desc: '운동 후 빠른 회복과 컨디션 유지' },
        { id: 'immunity', label: '면역 관리', desc: '면역력 강화로 건강 유지' },
        { id: 'focus', label: '집중력 유지', desc: '정신적 집중력과 인지 능력 향상' },
        { id: 'fatigue', label: '피로 개선', desc: '만성 피로와 스트레스 완화' },
        { id: 'weight', label: '체중 관리', desc: '적정 체중 유지와 체성분 개선' }
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                영양 관리의<br />
                주요 목표는 무엇인가요?
            </h1>
            <p className="text-gray-600 text-lg mb-8">
                가장 중요하게 생각하는 목표를 선택해주세요.
            </p>

            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onChange(option.id)}
                        className={`w-full p-4 text-left border rounded-lg transition-colors
                            ${value === option.id 
                                ? 'border-[#40D48B] bg-green-50' 
                                : 'border-gray-300 hover:border-gray-400'}`}
                    >
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Step 2-5: 과거 및 현재 부상 이력
const Step2_5 = ({ value, onChange }) => (
    <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            과거나 현재<br />
            부상 이력이 있나요?
        </h1>
        <p className="text-gray-600 text-lg mb-4">
            영양 관리에 영향을 줄 수 있는 부상이나 불편함이 있다면 알려주세요.
        </p>
        <p className="text-sm text-gray-500 mb-8">
            선택사항입니다. 없다면 건너뛰어도 괜찮아요.
        </p>

        <div className="space-y-4">
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="예: 무릎 부상으로 인한 활동 제한, 어깨 통증 등&#10;&#10;현재 치료 중이거나 주의가 필요한 부위를 자유롭게 적어주세요."
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-lg resize-none h-40 focus:outline-none focus:border-[#40D48B] focus:ring-1 focus:ring-[#40D48B]"
                rows={6}
            />
        </div>
    </div>
);

// Step 2-6: 기타 전달사항
const Step2_6 = ({ value, onChange }) => (
    <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            마지막으로<br />
            전달하고 싶은 말이 있나요?
        </h1>
        <p className="text-gray-600 text-lg mb-4">
            영양 관리로 더 신경 쓰고 싶은 부분이 있나요? 무엇이든 말씀해 주세요.
        </p>
        <p className="text-sm text-gray-500 mb-8">
            선택사항입니다. 없다면 바로 루틴 생성으로 넘어가세요.
        </p>

        <div className="space-y-4">
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="예: 속쓰린 게 싫어요, 철분만 빼주세요, 특정 시간대 섭취 선호 등&#10;&#10;자유롭게 입력해주세요."
                className="w-full px-4 py-4 border border-gray-300 rounded-lg text-lg resize-none h-40 focus:outline-none focus:border-[#40D48B] focus:ring-1 focus:ring-[#40D48B]"
                rows={6}
            />
        </div>
    </div>
);

export default OnboardingStep2Page;