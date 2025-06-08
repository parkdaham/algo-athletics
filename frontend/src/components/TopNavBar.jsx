import React from 'react';
import { Link } from 'react-router-dom';

const TopNavBar = ({ type = 'main-two-tabs', title, activeTab = 'today', onBackClick, bgColor = 'transparent' }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
        <div className="pointer-events-auto sticky top-0 bg-transparent" data-name="Top">
            <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
                <div className="h-[47px] shrink-0 w-full bg-transparent" data-name="System header"></div>
                <div className={`h-14 shrink-0 sticky top-0 w-full bg-transparent`} data-name="Item/Top navigation">
                    <div className="flex flex-row items-center relative size-full">
                        <div className="box-border content-stretch flex flex-row h-14 items-center justify-between px-4 py-0 relative w-full">
                            {/* Content based on type */}
                            {type === 'main-two-tabs' && (
                                <div className="relative shrink-0">
                                    <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start px-2 py-0 relative">
                                        <div className="h-10 relative shrink-0">
                                            <Link to="/" className="box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative">
                                                <div className={`font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-left text-nowrap ${
                                                    activeTab === 'today' ? 'text-[#13151b] border-b-2 border-[#13151b]' : 'text-[#9da5ae]'
                                                }`}>
                                                    <p className="block leading-[28px] whitespace-pre">오늘</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="h-10 relative shrink-0">
                                            <Link to="/record" className="box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative">
                                                <div className={`font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-left text-nowrap ${
                                                    activeTab === 'record' ? 'text-[#13151b] border-b-2 border-[#13151b]' : 'text-[#9da5ae]'
                                                }`}>
                                                    <p className="block leading-[28px] whitespace-pre">기록</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {type === 'main-single-title' && (
                                <div className="relative shrink-0">
                                    <div className="box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative">
                                        <div className="font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-left text-nowrap">
                                            <p className="block leading-[28px] whitespace-pre">{title}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {type === 'subpage' && (
                                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                                    {onBackClick && (
                                        <button onClick={onBackClick} className="relative shrink-0 size-6 flex items-center justify-center">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                                <path d="M15.75 6L9.75 12L15.75 18" stroke="#13151B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    )}
                                    <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#13151b] text-[20px] text-left text-nowrap">
                                        <p className="block leading-[28px] whitespace-pre">{title}</p>
                                    </div>
                                </div>
                            )}
                            
                            {/* Right side content (e.g., settings, notifications) - always present */}
                            <div className="h-12 relative shrink-0">
                                <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-center p-0"></div>
                            </div>
                            <div className="absolute h-[47px] left-0 top-[-47px] w-full bg-transparent" data-name="System top space"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TopNavBar; 