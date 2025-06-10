import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep1Page = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        allergies: [],
        medications: '',
        pastDiseases: '',
        currentConditions: '',
        femaleStatus: ''
    });

    const questions = [
        {
            id: 'height',
            title: '키를 입력해주세요',
            type: 'number',
            placeholder: '예: 175',
            unit: 'cm'
        },
        {
            id: 'weight',
            title: '몸무게를 입력해주세요',
            type: 'number',
            placeholder: '예: 70',
            unit: 'kg'
        },
        {
            id: 'allergies',
            title: '알레르기가 있으신가요?',
            type: 'checkbox',
            options: ['계란', '우유', '견과류', '갑각류', '콩', '글루텐', '없음']
        },
        {
            id: 'medications',
            title: '현재 복용 중인 약물이 있나요?',
            type: 'text',
            placeholder: '예: 타이레놀, 비타민D (없으면 "없음")'
        },
        {
            id: 'pastDiseases',
            title: '과거 진단받은 질환이 있나요?',
            type: 'text',
            placeholder: '예: 고지혈증, 당뇨 (없으면 "없음")'
        },
        {
            id: 'currentConditions',
            title: '현재 보유 질환이 있나요?',
            type: 'text',
            placeholder: '예: 고혈압, 관절염 (없으면 "없음")'
        },
        {
            id: 'femaleStatus',
            title: '해당사항을 선택해주세요',
            type: 'radio',
            options: ['해당없음', '임신 중', '수유 중', '폐경'],
            condition: 'female'
        }
    ];

    const currentQuestionData = questions[currentQuestion];

    const handleInputChange = (value) => {
        setFormData(prev => ({
            ...prev,
            [currentQuestionData.id]: value
        }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            // 마지막 질문이면 Step 2로 이동
            localStorage.setItem('onboardingStep1Data', JSON.stringify(formData));
            navigate('/onboarding/step2');
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        } else {
            navigate('/onboarding/start');
        }
    };

    const renderInput = () => {
        const { type, placeholder, unit, options } = currentQuestionData;

        switch (type) {
            case 'number':
                return (
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={formData[currentQuestionData.id]}
                            onChange={(e) => handleInputChange(e.target.value)}
                            placeholder={placeholder}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-lg"
                        />
                        <span className="text-gray-600 text-lg">{unit}</span>
                    </div>
                );
            
            case 'text':
                return (
                    <input
                        type="text"
                        value={formData[currentQuestionData.id]}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
                    />
                );

            case 'checkbox':
                return (
                    <div className="space-y-3">
                        {options.map((option) => (
                            <label key={option} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                <input
                                    type="checkbox"
                                    checked={formData[currentQuestionData.id].includes(option)}
                                    onChange={(e) => {
                                        const currentValues = formData[currentQuestionData.id];
                                        if (e.target.checked) {
                                            const newValues = option === '없음' ? ['없음'] : currentValues.filter(v => v !== '없음').concat(option);
                                            handleInputChange(newValues);
                                        } else {
                                            handleInputChange(currentValues.filter(v => v !== option));
                                        }
                                    }}
                                    className="w-5 h-5"
                                />
                                <span className="text-lg">{option}</span>
                            </label>
                        ))}
                    </div>
                );

            case 'radio':
                return (
                    <div className="space-y-3">
                        {options.map((option) => (
                            <label key={option} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                <input
                                    type="radio"
                                    name={currentQuestionData.id}
                                    value={option}
                                    checked={formData[currentQuestionData.id] === option}
                                    onChange={(e) => handleInputChange(e.target.value)}
                                    className="w-5 h-5"
                                />
                                <span className="text-lg">{option}</span>
                            </label>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    const isAnswered = () => {
        const value = formData[currentQuestionData.id];
        if (currentQuestionData.type === 'checkbox') {
            return value.length > 0;
        }
        return value && value.toString().trim() !== '';
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Progress Bar */}
            <div className="px-5 pt-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">1단계</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">기본 정보 입력</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-[#40D48B] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{currentQuestion + 1}</span>
                    <span>{questions.length}</span>
                </div>
            </div>

            {/* Question Content */}
            <div className="flex-1 px-5 py-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                    {currentQuestionData.title}
                </h1>
                
                <div className="mb-8">
                    {renderInput()}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="px-5 pb-8 space-y-3">
                <button
                    onClick={handleNext}
                    disabled={!isAnswered()}
                    className={`w-full py-3 rounded-lg text-lg font-medium transition-colors
                        ${isAnswered() 
                            ? 'bg-[#40D48B] text-white hover:bg-[#36B877]' 
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                    {currentQuestion < questions.length - 1 ? '다음' : '완료'}
                </button>
                
                <button
                    onClick={handleBack}
                    className="w-full py-3 text-gray-600 text-lg font-medium"
                >
                    이전
                </button>
            </div>
        </div>
    );
};

export default OnboardingStep1Page;