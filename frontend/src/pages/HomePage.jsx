import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="relative size-full flex flex-col"
             style={{ background: 'linear-gradient(180deg, #FFF 6.92%, #E3FBF0 19.25%, #40D48B 100%)' }}>
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
                                        <div className="flex flex-col justify-center relative shrink-0 text-[#13151b] text-[24px] text-nowrap font-semibold">
                                            <div className="flex flex-col gap-1 w-full">
                                                <p className="font-['Pretendard:SemiBold',_sans-serif] text-[24px] leading-[34px] text-[#13151b]">
                                                    다함님, 좋은 아침이에요
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* "오늘은 회복력 중심 루틴" 섹션 */}
                            <Link to="/weekly-routine-detail" className="relative rounded-[16px] shrink-0 w-full shadow-[0px_0px_16px_0px_rgba(24,196,111,0.16),0px_0px_8px_0px_rgba(24,196,111,0.2)] bg-[rgba(254,254,254,0.56)] hover:scale-105 active:scale-105 transition-transform duration-300 ease-in-out" data-name="Block/Chevron content button">
                                <div className="flex flex-row items-center overflow-clip relative size-full">
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
                                            <g clipPath="url(#clip0_104_5503)" id="ë ˆì ´ì–´_1">
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
                                                    <p className="block leading-[22px] whitespace-pre">이번주 회복력 루틴</p>
                                                </div>
                                                <div className="font-['Pretendard:Regular',_sans-serif] relative shrink-0 text-[#4f5763] text-[14px] w-full">
                                                    <p className="block leading-[20px]">총 4개 팩 구성</p>
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
                <div className="w-full h-full flex flex-col">
                    {/* Scrollable content area for cards */}
                    <div className="px-5 pt-4 pb-6">
                        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
                            {/* 아침 루틴 카드 (섭취전) */}
                            <div className="bg-[#fefefe] relative rounded-2xl shrink-0 w-full py-4">
                                <div className="relative size-full">
                                    <div className="box-border content-stretch flex flex-col items-start justify-start relative w-full">
                                        {/* Blocksectiontitle */}
                                        <div className="min-h-10 relative shrink-0 w-full">
                                            <div className="min-h-inherit overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start min-h-inherit pl-2 pr-1 py-1 relative w-full">
                                                    {/* Wrapper4 */}
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">아침 루틴</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="relative rounded-xl shrink-0 bg-[#277dff]">
                                                                <div className="flex flex-row items-center relative size-full">
                                                                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-1 relative">
                                                                        <div className="leading-[0] not-italic relative shrink-0 text-[#fcfcfd] text-[12px] text-left text-nowrap font-semibold">
                                                                            <p className="block leading-[16px] whitespace-pre">섭취전</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative rounded-xl shrink-0 w-full">
                                            <div className="flex flex-col justify-center overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-2 py-3 relative w-full">
                                                    <div className="relative shrink-0 w-full" data-name="frame">
                                                        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                            <div className="relative rounded-[20px] shrink-0 bg-gray-400 size-10"></div>
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text frame">
                                                                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
                                                                    <div className="relative shrink-0 w-full" data-name="horizontal frame">
                                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-3 items-center justify-start p-0 relative w-full">
                                                                            <div className="leading-[0] max-w-48 not-italic relative shrink-0 text-[#4f5763] text-[16px] text-left text-nowrap font-semibold">
                                                                                <p className="block leading-[22px] whitespace-pre">기본팩 + 회복팩</p>
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

                                        <div className="bg-[#f6f7f8] relative rounded-lg shrink-0 w-full" data-name="Block/Tooltip">
                                            <div className="flex flex-col items-center relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start px-4 py-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4f5763] text-[14px] text-left font-medium">
                                                                <p className="block leading-[20px]">수면 후엔 회복 보강이 필요해요</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="flex flex-row items-center relative size-full">
                                                            <div className="box-border content-stretch flex flex-row items-center justify-start px-1 py-0 relative w-full">
                                                                <div className="basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#7c8592] text-[14px] text-left font-medium">
                                                                    <p className="block leading-[20px]">아침에 비타민을 충분히 복용해서 하루의 고강도 훈련에 대비할 수 있어요.</p>
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

                            {/* 훈련 전 루틴 카드 */}
                            <div className="bg-[#fefefe] relative rounded-2xl shrink-0 w-full py-4">
                                <div className="relative size-full">
                                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start relative w-full">
                                        <div className="min-h-10 relative shrink-0 w-full">
                                            <div className="min-h-inherit overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start min-h-inherit pl-2 pr-1 py-1 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">훈련 전 루틴</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="relative rounded-xl shrink-0 bg-[#eeeff2]">
                                                                <div className="flex flex-row items-center relative size-full">
                                                                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-1 relative">
                                                                        <div className="leading-[0] not-italic relative shrink-0 text-[#4f5763] text-[12px] text-left text-nowrap font-semibold">
                                                                            <p className="block leading-[16px] whitespace-pre">섭취대기</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="leading-[0] not-italic relative shrink-0 text-[#7c8592] text-[14px] text-left w-full font-medium">
                                                        <p className="block leading-[20px]">퍼포먼스 향상에 좋은 부스터팩을 준비했어요</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative rounded-xl shrink-0 w-full">
                                            <div className="flex flex-col justify-center overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-2 py-3 relative w-full">
                                                    <div className="relative shrink-0 w-full" data-name="frame">
                                                        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                            <div className="relative rounded-[20px] shrink-0 bg-gray-400 size-10"></div>
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text frame">
                                                                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
                                                                    <div className="relative shrink-0 w-full" data-name="horizontal frame">
                                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-3 items-center justify-start p-0 relative w-full">
                                                                            <div className="leading-[0] max-w-48 not-italic relative shrink-0 text-[#4f5763] text-[16px] text-left text-nowrap font-semibold">
                                                                                <p className="block leading-[22px] whitespace-pre">기본팩 + 부스터팩</p>
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
                            </div>

                            {/* 훈련 후 루틴 카드 */}
                            <div className="bg-[#fefefe] relative rounded-2xl shrink-0 w-full py-4">
                                <div className="relative size-full">
                                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start relative w-full">
                                        <div className="min-h-10 relative shrink-0 w-full">
                                            <div className="min-h-inherit overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start min-h-inherit pl-2 pr-1 py-1 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">훈련 후 루틴</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="relative rounded-xl shrink-0 bg-[#eeeff2]">
                                                                <div className="flex flex-row items-center relative size-full">
                                                                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-1 relative">
                                                                        <div className="leading-[0] not-italic relative shrink-0 text-[#4f5763] text-[12px] text-left text-nowrap font-semibold">
                                                                            <p className="block leading-[16px] whitespace-pre">섭취대기</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="leading-[0] not-italic relative shrink-0 text-[#7c8592] text-[14px] text-left w-full font-medium">
                                                        <p className="block leading-[20px]">퍼포먼스 향상에 좋은 회복팩을 준비했어요</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative rounded-xl shrink-0 w-full">
                                            <div className="flex flex-col justify-center overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-2 py-3 relative w-full">
                                                    <div className="relative shrink-0 w-full" data-name="frame">
                                                        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                            <div className="relative rounded-[20px] shrink-0 bg-gray-400 size-10"></div>
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text frame">
                                                                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
                                                                    <div className="relative shrink-0 w-full" data-name="horizontal frame">
                                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-3 items-center justify-start p-0 relative w-full">
                                                                            <div className="leading-[0] max-w-48 not-italic relative shrink-0 text-[#4f5763] text-[16px] text-left text-nowrap font-semibold">
                                                                                <p className="block leading-[22px] whitespace-pre">기본팩 + 회복팩</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage; 