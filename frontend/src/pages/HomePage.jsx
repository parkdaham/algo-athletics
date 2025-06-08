import React from 'react';

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
                                            <p className="block leading-[34px] whitespace-pre">좋은 아침이에요 다함님</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* "오늘은 회복력 중심 루틴" 섹션 */}
                            <div className="relative rounded-[16px] shrink-0 w-full shadow-[0px_4px_16px_0px_rgba(21,21,21,0.08)] bg-[rgba(254,254,254,0.56)]" data-name="Block/Chevron content button">
                                <div className="flex flex-row items-center overflow-clip relative size-full">
                                    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[16px] relative w-full">
                                        {/* 아이콘 플레이스홀더 (회색 박스) */}
                                        <div className="relative rounded-[20px] shrink-0 bg-[#f6f7f8] size-10 flex items-center justify-center">
                                            <div className="relative shrink-0 size-6 bg-gray-400"></div>
                                        </div>
                                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="frame">
                                            <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-left w-full">
                                                <div className="relative shrink-0 text-[#4f5763] text-[16px] w-full font-semibold">
                                                    <p className="block leading-[22px]">오늘은 회복력 중심 루틴</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Routine Cards Section */}
            <div className={`flex-grow w-full bg-[#fefefe] shadow-[0px_-4px_16px_0px_rgba(21,21,21,0.12)] rounded-tl-[20px] rounded-tr-[20px]`}
                 style={{ overflowY: 'auto' }}>
                <div className="w-full h-full flex flex-col">
                    {/* Scrollable content area for cards */}
                    <div className="px-5 py-6">
                        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
                            {/* 아침 루틴 카드 (섭취전) */}
                            <div className="bg-[#fefefe] relative rounded-2xl shrink-0 w-full">
                                <div className="relative size-full">
                                    <div className="box-border content-stretch flex flex-col items-start justify-start relative w-full">
                                        {/* Blocksectiontitle */}
                                        <div className="min-h-10 relative shrink-0 w-full">
                                            <div className="min-h-inherit overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start min-h-inherit pl-2 pr-1 py-1 relative w-full">
                                                    {/* Wrapper4 */}
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative w-full">
                                                            {/* ComponentHelper (추천복용시점 텍스트) - Head_03/semi-bold(20\28) */}
                                                            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                                                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-justify text-nowrap font-semibold">
                                                                        <p className="block leading-[28px] whitespace-pre">아침 루틴</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Itembadge */}
                                                            <div className="relative rounded-xl shrink-0 bg-[#277dff]">
                                                                <div className="flex flex-row items-center relative size-full">
                                                                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-1 relative">
                                                                        {/* 텍스트 섭취전 - Head_07/semi-bold(12\16) */}
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

                                        {/* Wrapper8 */}
                                        <div className="relative rounded-xl shrink-0 w-full">
                                            <div className="flex flex-col justify-center overflow-clip relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center px-2 py-3 relative w-full">
                                                    <div className="relative shrink-0 w-full" data-name="frame">
                                                        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                                            {/* ComponentItemfixediconframe */}
                                                            <div className="relative rounded-[20px] shrink-0">
                                                                <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
                                                                    <div className="bg-[#f6f7f8] relative rounded-[20px] shrink-0 size-10" data-name="40 frame">
                                                                        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative size-10">
                                                                            {/* ItemIconFrame24 -> Listpill (회색 박스 아이콘) */}
                                                                            <div className="relative shrink-0 size-6 bg-gray-400"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* text frame (기본팩 + 회복팩) - Head_05/semi-bold(16\22) */}
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

                                        {/* Block/Tooltip */}
                                        <div className="bg-[#f6f7f8] relative rounded-lg shrink-0 w-full" data-name="Block/Tooltip">
                                            <div className="flex flex-col items-center relative size-full">
                                                <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start px-4 py-5 relative w-full">
                                                    <div className="relative shrink-0 w-full">
                                                        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
                                                            {/* Item/Icon frame_24 (회색 박스 아이콘) */}
                                                            <div className="relative shrink-0 bg-gray-400 size-6"></div>
                                                            <div className="basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4f5763] text-[16px] text-left font-semibold">
                                                                <p className="block leading-[22px]">수면 후엔 회복 보강이 필요해요</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Wrapper (아침에 비타민을 충분히 복용해서... - Body_04/medium(14\20)) */}
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

                            {/* 훈련 전 루틴 카드 (Cardroutine 1) */}
                            <div className="bg-[#fefefe] relative rounded-2xl shrink-0 w-full">
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
                                    </div>
                                </div>
                            </div>

                            {/* 훈련 후 루틴 카드 (Cardroutine 2) */}
                            <div className="bg-[#fefefe] relative rounded-2xl shrink-0 w-full">
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
                                                        <p className="block leading-[20px]">퍼포먼스 향상에 좋은 부스터팩을 준비했어요</p>
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
