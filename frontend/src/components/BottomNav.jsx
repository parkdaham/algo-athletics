import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isReportActive = location.pathname === '/report';
  const isMoreActive = location.pathname === '/more';

  // 비활성화된 탭의 색상을 투명도 80%로 조정
  const activeColor = '#13151b';
  const inactiveColor = 'rgba(157, 165, 174, 0.8)'; // #9DA5AE에 80% 투명도 적용

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[410px] z-60">
        <div className="bg-[#fefefe] h-18 border-t border-[#e0e3e6] relative pt-2 pb-2">
            <div className="flex flex-row h-full items-center justify-around px-2">
                {/* 내 영양 Tab (Home) */}
                <Link to="/" className="flex flex-col items-center flex-grow">
                    <div className="relative size-8">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g id="Icon/tools/today-nutrition">
                                <path clipRule="evenodd" d="M7.36355 6.28571C6.69359 6.28571 6.16731 6.85937 6.22492 7.52684L7.52417 22.5805C7.67717 24.3532 9.16077 25.7143 10.94 25.7143H21.0583C22.8375 25.7143 24.3211 24.3532 24.4741 22.5805L25.7734 7.52684C25.831 6.85937 25.3047 6.28571 24.6348 6.28571H7.36355ZM15.6331 20.6999C16.5893 19.9255 16.7368 18.5227 15.9625 17.5665C15.1881 16.6103 13.7853 16.4629 12.8291 17.2372C11.8729 18.0115 11.7255 19.4143 12.4998 20.3705C13.2741 21.3267 14.6769 21.4742 15.6331 20.6999ZM20.5506 13.8505C21.3249 14.8067 21.1775 16.2096 20.2213 16.9839C19.2651 17.7582 17.8622 17.6108 17.0879 16.6546C16.3136 15.6984 16.4611 14.2955 17.4173 13.5212C18.3735 12.7469 19.7763 12.8943 20.5506 13.8505ZM14.7715 14.9465C15.7277 14.1722 15.8752 12.7693 15.1009 11.8131C14.3265 10.857 12.9237 10.7095 11.9675 11.4838C11.0113 12.2581 10.8638 13.661 11.6382 14.6172C12.4125 15.5734 13.8153 15.7208 14.7715 14.9465Z" fill={isHomeActive ? activeColor : inactiveColor} fillRule="evenodd" id="Subtract"></path>
                            </g>
                        </svg>
                    </div>
                    <span className={`text-xs mt-1 text-[12px] font-semibold ${isHomeActive ? 'text-[#13151b]' : 'text-[#9da5ae]'}`}>내 영양</span>
                </Link>
                {/* 기록 Tab 삭제됨 */}
                {/* 리포트 Tab */}
                <Link to="/report" className="flex flex-col items-center flex-grow">
                    <div className="relative size-8">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g id="Icon/tools/my-algo">
                                <path d="M15.9999 5.71429C21.6805 5.71429 26.2856 10.3194 26.2856 16C26.2856 21.6806 21.6805 26.2857 15.9999 26.2857C10.3192 26.2857 5.71416 21.6806 5.71416 16C5.71416 10.3194 10.3192 5.71429 15.9999 5.71429ZM15.9999 20.6286C18.5562 20.6286 20.6284 18.5563 20.6284 16C20.6284 13.4437 18.5562 11.3714 15.9999 11.3714C13.4436 11.3714 11.3713 13.4437 11.3713 16C11.3713 18.5563 13.4436 20.6286 15.9999 20.6286Z" fill={isReportActive ? activeColor : inactiveColor} id="Ellipse 595"></path>
                            </g>
                        </svg>
                    </div>
                    <span className={`text-xs mt-1 text-[12px] font-semibold ${isReportActive ? 'text-[#13151b]' : 'text-[#9da5ae]'}`}>리포트</span>
                </Link>
                {/* 더보기 Tab */}
                <Link to="/more" className="flex flex-col items-center flex-grow">
                    <div className="overflow-clip relative shrink-0 size-8">
                        <div className="absolute left-[7.429px] size-[17.143px] top-[7.429px]">
                            <div className="absolute bottom-0 left-0 right-0 top-0">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                    <g id="Group 1978">
                                        <path d="M0 1.14286C0 0.511675 0.511675 0 1.14286 0H16C16.6312 0 17.1429 0.511675 17.1429 1.14286V5.71429C17.1429 6.34547 16.6312 6.85714 16 6.85714H1.14286C0.511675 6.85714 0 6.34547 0 5.71429V1.14286Z" fill={isMoreActive ? activeColor : inactiveColor} id="Rectangle 1208"></path>
                                        <path d="M-4.87174e-05 11.4286C-4.87174e-05 10.7974 0.511626 10.2857 1.14281 10.2857H16C16.6311 10.2857 17.1428 10.7974 17.1428 11.4286V16C17.1428 16.6312 16.6311 17.1429 16 17.1429H1.14281C0.511626 17.1429 -4.87174e-05 16.6312 -4.87174e-05 16V11.4286Z" fill={isMoreActive ? activeColor : inactiveColor} id="Rectangle 1209"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <span className={`text-xs mt-1 text-[12px] font-semibold ${isMoreActive ? 'text-[#13151b]' : 'text-[#9da5ae]'}`}>더보기</span>
                </Link>
            </div>
            
        </div>
    </div>
  );
};

export default BottomNav; 