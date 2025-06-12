import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const [userRoutine, setUserRoutine] = useState(null);
    const [routineStates, _setRoutineStates] = useState({
        morning: true, // 데모용 완료 상태
        beforeWorkout: false,
        afterWorkout: false,
        bedtime: false
    });
    
    const [supplementStates, setSupplementStates] = useState({
        morningSupplements: false,
        beforeWorkoutSupplements: false,
        afterWorkoutSupplements: false,
        bedtimeSupplements: false
    });
    const [selectedRoutine, setSelectedRoutine] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const storedRoutine = localStorage.getItem('userRoutine');
        if (storedRoutine) {
            setUserRoutine(JSON.parse(storedRoutine));
        }
    }, []);

    useEffect(() => {
        if (showModal) {
            setTimeout(() => {
                setIsModalOpen(true);
            }, 10);
        } else {
            setIsModalOpen(false);
        }
    }, [showModal]);

    const handleOnboardingClick = () => {
        localStorage.removeItem('onboardingStep1Data');
        localStorage.removeItem('onboardingData');
        localStorage.removeItem('userRoutine');
        navigate('/onboarding/start');
    };

    const openRoutineModal = (routine) => {
        setSelectedRoutine(routine);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedRoutine(null);
    };

    const getRoutineTitle = () => {
        if (userRoutine && userRoutine.routineSummary) {
            return userRoutine.routineSummary.title || '맞춤 루틴';
        }
        return '기본 루틴';
    };

    const routineData = {
        morning: {
            key: 'morning',
            title: '아침 루틴',
            supplements: ['멀티비타민', '오메가3', '비타민D'],
            summary: '회복 강화를 위한 3종 조합',
            detail: '수면 후 회복을 위해 필수 비타민과 오메가3로 구성된 조합입니다. 하루의 고강도 훈련에 대비할 수 있어요.',
            purpose: '기본 영양소 보충 및 하루 시작 준비'
        },
        beforeWorkout: {
            key: 'beforeWorkout',
            title: '훈련 전 루틴',
            supplements: ['크레아틴', '카페인', 'BCAA'],
            summary: '퍼포먼스 향상을 위한 3종 조합',
            detail: '훈련 전 에너지 공급과 근육 보호를 위해 설계된 조합입니다. 운동 능력을 최대화할 수 있어요.',
            purpose: '운동 성능 향상 및 에너지 공급'
        },
        afterWorkout: {
            key: 'afterWorkout',
            title: '훈련 후 루틴',
            supplements: ['단백질', 'BCAA', '마그네슘'],
            summary: '빠른 회복을 위한 3종 조합',
            detail: '훈련 후 근육 회복과 피로 감소를 위해 최적화된 조합입니다. 효과적인 회복을 도와줘요.',
            purpose: '근육 회복 및 피로 감소'
        },
        bedtime: {
            key: 'bedtime',
            title: '자기 전 루틴',
            supplements: ['아르기닌', '마그네슘', '테아닌'],
            summary: '숙면 및 성장 호르몬 촉진 3종 조합',
            detail: '숙면을 유도하고 최적의 회복을 돕는 조합입니다. 편안한 밤을 위해 설계되었어요.',
            purpose: '숙면 유도 '
        }
    };

    return (
        <div className="relative flex flex-col"
             style={{ background: 'linear-gradient(180deg, #18c46f 0%, #13a85f 100%)' }}>

            {/* 온보딩 버튼 (우측 상단) */}
            <button
                onClick={handleOnboardingClick}
                className="absolute top-6 right-5 px-4 py-2 border border-[#40D48B] text-[#40D48B] rounded-full text-sm font-medium hover:bg-[#40D48B] hover:text-white transition-colors z-10"
            >
                온보딩
            </button>

            {/* Top Summary Section */}
            <div className="w-full px-5 pt-[24px] pb-[24px] flex flex-col items-center flex-shrink-0">
                <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative w-full">
                    {/* section_summary */}
                    <div className="relative shrink-0 w-full" data-name="section_summary">
                        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
                            {/* "좋은 아침이에요 다함님" 섹션 - Head_02/semi-bold(24\34) */}
                            <div className="relative shrink-0 w-full">
                                <div className="flex flex-col justify-center overflow-clip relative size-full">
                                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center leading-[0] not-italic pl-1 pr-5 py-2 relative text-justify w-full">
                                        <div className="flex flex-col justify-center overflow-clip relative size-full">
                                            <div className="flex flex-col justify-center relative shrink-0 text-[#13151b] text-[24px] text-nowrap font-semibold">
                                                <div className="flex flex-col gap-1 w-full">
                                                    <p className="font-['Pretendard:SemiBold',_sans-serif] text-[24px] leading-[34px] text-white">
                                                        다함님, 좋은 아침이에요
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* "오늘은 회복력 중심 루틴" 섹션 */}
                            <Link to="/weekly-routine-detail" className="relative rounded-xl shrink-0 w-full bg-white hover:scale-105 active:scale-105 transition-transform duration-300 ease-in-out" data-name="Block/Chevron content button" style={{ borderRadius: '12px' }}>
                                <div className="flex flex-row items-center overflow-clip relative size-full bg-white">
                                    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[16px] relative w-full">
                                        {/* 3D 병 이미지 */}
                                        <div
                                          className="bg-[#fccfb9] relative rounded-[40px] shrink-0 size-10"
                                          data-name="icon/nutritions(source)"
                                        >
                                          <svg
                                            className="block size-full"
                                            fill="none"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 40 40"
                                          >
                                            <g clipPath="url(#clip0_104_5503)" id="ë ˆì ´ì–´_1">
                                              <circle
                                                cx="20"
                                                cy="20"
                                                fill="#FCCFB9"
                                                id="Ellipse 700"
                                                r="20"
                                              />
                                              <g id="Union">
                                                <path
                                                  d="M20 8C22.7292 10.9446 22.9028 14.3642 20.6365 17.6094V20.8771C20.8641 20.5307 21.133 20.1925 21.4506 19.8774C22.7966 16.2329 25.8562 14.6329 30 15.3251C28.6915 19.0955 26.0273 21.2884 22.2603 20.8825C21.5298 21.642 21.1225 22.5815 20.8976 23.4038C20.7667 23.8822 20.7011 24.308 20.6685 24.6127C20.6522 24.7646 20.644 24.8856 20.6401 24.966C20.6382 25.0063 20.637 25.0364 20.6365 25.0553V26.54C21.8354 26.8313 22.7273 27.9241 22.7273 29.2308C22.7273 30.7602 21.5062 32 20 32C18.4938 32 17.2727 30.7602 17.2727 29.2308C17.2727 27.9241 18.1646 26.8313 19.3635 26.54V25.0553C19.363 25.0364 19.3618 25.0063 19.3599 24.966C19.356 24.8856 19.3478 24.7646 19.3315 24.6127C19.2989 24.308 19.2333 23.8822 19.1025 23.4038C18.8774 22.5813 18.4696 21.6421 17.7388 20.8825C13.9723 21.288 11.3084 19.0952 10 15.3251C14.1436 14.633 17.2024 16.2331 18.5485 19.8774C18.8663 20.1927 19.1358 20.5305 19.3635 20.8771V17.5877C17.2295 14.442 17.195 10.9962 20 8Z"
                                                  fill="#E45C37"
                                                />
                                                <path
                                                  d="M12.7273 22.7692C14.2335 22.7692 15.4545 24.0091 15.4545 25.5385C15.4545 27.0679 14.2335 28.3077 12.7273 28.3077C11.221 28.3077 10 27.0679 10 25.5385C10 24.0091 11.221 22.7692 12.7273 22.7692Z"
                                                  fill="#E45C37"
                                                />
                                                <path
                                                  d="M27.2727 22.7692C28.779 22.7692 30 24.0091 30 25.5385C30 27.0679 28.779 28.3077 27.2727 28.3077C25.7665 28.3077 24.5455 27.0679 24.5455 25.5385C24.5455 24.0091 25.7665 22.7692 27.2727 22.7692Z"
                                                  fill="#E45C37"
                                                />
                                              </g>
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_104_5503">
                                                <rect fill="white" height="40" width="40" />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </div>
                                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="frame">
                                            <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-left w-full">
                                                <div className="font-['Pretendard:SemiBold',_sans-serif] relative shrink-0 text-[#13151b] text-[16px] w-full">
                                                    <p className="block leading-[22px] whitespace-pre">{getRoutineTitle()}</p>
                                                </div>
                                                <div className="font-['Pretendard:Regular',_sans-serif] relative shrink-0 text-[#4f5763] text-[14px] w-full">
                                                    <p className="block leading-[20px]">총 {Object.keys(routineData).length}개 팩 구성</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 오른쪽 꺾쇠 아이콘 */}
                                        <div className="relative shrink-0">
                                            <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
                                                <div className="relative shrink-0 size-6" data-name="chevron/right">
                                                    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative size-6">
                                                        <div className="relative shrink-0 size-[18px]" data-name="Icon/chevron-right">
                                                            <svg fill="none" preserveAspectRatio="none" viewBox="0 0 18 18" className="block size-full">
                                                                <g id="Icon/chevron-right">
                                                                    <path clipRule="evenodd" d="M12.5419 8.49772C12.8193 8.77512 12.8193 9.22488 12.5419 9.50228L7.25228 14.7919C6.97488 15.0693 6.52512 15.0693 6.24772 14.7919C5.97032 14.5145 5.97032 14.0648 6.24772 13.7874L11.0351 9L6.24772 4.2126C5.97032 3.9352 5.97032 3.48545 6.24772 3.20805C6.52512 2.93065 6.97488 2.93065 7.25228 3.20805L12.5419 8.49772Z" fill="#7C8592" fillRule="evenodd" id="Vector 8 (Stroke) (Stroke)"></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Routine Cards Section */}
            <div className={`flex-grow w-full bg-[#fefefe] shadow-[0px_-4px_16px_0px_rgba(21,21,21,0.12)] rounded-tl-[20px] rounded-tr-[20px]`}
                 style={{ overflowY: 'auto' }}>
                <div className="w-full flex flex-col">
                    {/* Scrollable content area for cards */}
                    <div className="px-5 pt-4 pb-24">
                        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
                            {/* 아침 시간대 섹션 */}
                            <div className="w-full">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">아침</h2>
                                <div className="space-y-3">
                                    {/* 아침 루틴 카드 */}
                                    <div 
                                        className={`bg-[#fefefe] relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 border border-gray-200 ${routineStates.morning ? 'opacity-75' : ''} mt-4`}
                                        onClick={() => openRoutineModal(routineData.morning)}
                                    >
                                <div className="relative">
                                    <div className="box-border content-stretch flex flex-col items-start justify-start relative w-full">
                                        {/* Blocksectiontitle */}
                                        <div className="relative shrink-0 w-full">
                                            <div className="overflow-clip relative">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                    {/* Wrapper4 */}
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">{routineData.morning.supplements.join(', ')}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* 상태 표시 */}
                                                            <div className="shrink-0">
                                                                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                                                    routineStates.morning 
                                                                        ? 'bg-[#40D48B] text-white' 
                                                                        : 'bg-gray-100 text-gray-700'
                                                                }`}>
                                                                    {routineStates.morning ? '완료' : '대기중'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 요약 정보 */}
                                        <div className="px-5">
                                            <p className="text-sm text-gray-600">{routineData.morning.summary}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                                    
                                    
                                    <div 
                                        className={`bg-gray-50 relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 ${supplementStates.morningSupplements ? 'opacity-75' : ''}`}
                                        onClick={() => {setSupplementStates(prevState => ({ ...prevState, morningSupplements: !prevState.morningSupplements }));}}
                                    >
                                        <div className="relative">
                                            <div className="box-border content-stretch flex flex-col items-start justify-start relative w-full">
                                                <div className="relative shrink-0 w-full">
                                                    <div className="overflow-clip relative">
                                                        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                            <div className="relative shrink-0 w-full">
                                                                <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                                    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                                <p className="block leading-[28px] whitespace-pre">아침 부스트</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="shrink-0">
                                                                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${supplementStates.morningSupplements ? 'bg-[#40D48B] text-white' : 'bg-gray-100 text-gray-700'}`}>
                                                                            {supplementStates.morningSupplements ? '완료' : '대기중'}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-5">
                                                    <p className="text-sm text-gray-600">추가로 섭취하는 영양제를 기록하세요.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 훈련 시간대 섹션 */}
                            <div className="w-full">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">훈련</h2>
                                <div className="space-y-3">
                                    {/* 훈련 전 루틴 카드 */}
                            <div 
                                className={`bg-[#fefefe] relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 ${routineStates.beforeWorkout ? 'opacity-75' : ''} mt-4`}
                                onClick={() => openRoutineModal(routineData.beforeWorkout)}
                            >
                                <div className="relative">
                                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start relative w-full">
                                        <div className="relative shrink-0 w-full">
                                            <div className="overflow-clip relative">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">{routineData.beforeWorkout.supplements.join(', ')}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                                                    routineStates.beforeWorkout 
                                                                        ? 'bg-[#40D48B] text-white' 
                                                                        : 'bg-gray-100 text-gray-700'
                                                                }`}>
                                                                    {routineStates.beforeWorkout ? '완료' : '대기중'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 훈련 전 소분팩 (수동 영양제) */}
                            <div 
                                className={`bg-gray-50 relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 ${supplementStates.beforeWorkoutSupplements ? 'opacity-75' : ''}`}
                                onClick={() => {setSupplementStates(prevState => ({ ...prevState, beforeWorkoutSupplements: !prevState.beforeWorkoutSupplements }));}}
                            >
                                <div className="relative">
                                    <div className="box-border content-stretch flex flex-col items-start justify-start relative w-full">
                                        <div className="relative shrink-0 w-full">
                                            <div className="overflow-clip relative">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">퍼포먼스 부스트</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${supplementStates.beforeWorkoutSupplements ? 'bg-[#40D48B] text-white' : 'bg-gray-100 text-gray-700'}`}>
                                                                    {supplementStates.beforeWorkoutSupplements ? '완료' : '대기중'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 훈련 후 루틴 카드 */}
                            <div 
                                className={`bg-[#fefefe] relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 ${routineStates.afterWorkout ? 'opacity-75' : ''} mt-4`}
                                onClick={() => openRoutineModal(routineData.afterWorkout)}
                            >
                                <div className="relative">
                                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start relative w-full">
                                        <div className="relative shrink-0 w-full">
                                            <div className="overflow-clip relative">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">{routineData.afterWorkout.supplements.join(', ')}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                                                    routineStates.afterWorkout 
                                                                        ? 'bg-[#40D48B] text-white' 
                                                                        : 'bg-gray-100 text-gray-700'
                                                                }`}>
                                                                    {routineStates.afterWorkout ? '완료' : '대기중'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 요약 정보 */}
                                        <div className="px-5">
                                            <p className="text-sm text-gray-600">{routineData.afterWorkout.summary}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* 훈련 후 소분팩 (수동 영양제) */}
                            <div 
                                className={`bg-gray-50 relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 ${supplementStates.afterWorkoutSupplements ? 'opacity-75' : ''}`}
                                onClick={() => {setSupplementStates(prevState => ({ ...prevState, afterWorkoutSupplements: !prevState.afterWorkoutSupplements }));}}
                            >
                                <div className="relative">
                                    <div className="box-border content-stretch flex flex-col items-start justify-start relative w-full">
                                        <div className="relative shrink-0 w-full">
                                            <div className="overflow-clip relative">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">회복 부스트</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${supplementStates.afterWorkoutSupplements ? 'bg-[#40D48B] text-white' : 'bg-gray-100 text-gray-700'}`}>
                                                                    {supplementStates.afterWorkoutSupplements ? '완료' : '대기중'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-5">
                                                    <p className="text-sm text-gray-600">추가로 섭취하는 영양제를 기록하세요.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                            {/* 자기 전 시간대 섹션 */}
                            <div className="w-full">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">자기 전</h2>
                                <div className="space-y-3">
                                    {/* 자기 전 루틴 카드 */}
                            <div 
                                className={`bg-[#fefefe] relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 ${routineStates.bedtime ? 'opacity-75' : ''} mt-4`}
                                onClick={() => openRoutineModal(routineData.bedtime)}
                            >
                                <div className="relative">
                                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start relative w-full">
                                        <div className="relative shrink-0 w-full">
                                            <div className="overflow-clip relative">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">{routineData.bedtime.supplements.join(', ')}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                                                    routineStates.bedtime 
                                                                        ? 'bg-[#40D48B] text-white' 
                                                                        : 'bg-gray-100 text-gray-700'
                                                                }`}>
                                                                    {routineStates.bedtime ? '완료' : '대기중'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 요약 정보 */}
                                        <div className="px-5">
                                            <p className="text-sm text-gray-600">{routineData.bedtime.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 자기 전 소분팩 (수동 영양제) */}
                            <div 
                                className={`bg-gray-50 relative rounded-xl shrink-0 w-full py-5 cursor-pointer transition-all duration-200 ${supplementStates.bedtimeSupplements ? 'opacity-75' : ''}`}
                                onClick={() => {setSupplementStates(prevState => ({ ...prevState, bedtimeSupplements: !prevState.bedtimeSupplements }));}}
                            >
                                <div className="relative">
                                    <div className="box-border content-stretch flex flex-col items-start justify-start relative w-full">
                                        <div className="relative shrink-0 w-full">
                                            <div className="overflow-clip relative">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">숙면 부스트</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${supplementStates.bedtimeSupplements ? 'bg-[#40D48B] text-white' : 'bg-gray-100 text-gray-700'}`}>
                                                                    {supplementStates.bedtimeSupplements ? '완료' : '대기중'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-5">
                                                    <p className="text-sm text-gray-600">추가로 섭취하는 영양제를 기록하세요.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 오늘의 루틴 완료 배너 (placeholder) */}
            {Object.values(routineStates).every(status => status) && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#40D48B] text-white text-center text-lg font-semibold z-40">
                    오늘의 루틴 완료! 수고하셨어요!
                </div>
            )}

            {/* 루틴 상세 모달 (바텀시트) */}
            {showModal && selectedRoutine && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 transition-opacity duration-300" 
                    onClick={closeModal}
                    style={{ opacity: isModalOpen ? 1 : 0 }}
                >
                    <div 
                        className={`bg-white rounded-t-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto transform transition-transform duration-300 ${isModalOpen ? 'translate-y-0' : 'translate-y-full'}`} 
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 모달 헤더 */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">{selectedRoutine.title}</h2>
                            <button
                                onClick={closeModal}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>


                        {/* 목적 */}
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-900 mb-2">목적</h3>
                            <p className="text-gray-600">{selectedRoutine.purpose}</p>
                        </div>

                        {/* 구성 성분 */}
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-900 mb-2">구성 성분</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedRoutine.supplements.map((supplement, index) => (
                                    <span key={index} className="bg-[#e8f5e8] text-[#2d5a3d] px-3 py-1 rounded-full text-sm">
                                        {supplement}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 상세 설명 */}
                        <div className="mb-6">
                            <h3 className="font-medium text-gray-900 mb-2">AI 추천 이유</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {selectedRoutine.detail}
                            </p>
                        </div>

                        {/* 액션 버튼 */}
                        <div className="flex justify-center">
                            <button
                                onClick={closeModal}
                                className="px-8 py-3 bg-[#40D48B] text-white rounded-lg font-medium hover:bg-[#36B877] transition-colors"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;