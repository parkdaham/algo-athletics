import React from 'react';
import { Link } from 'react-router-dom';

const TopNavBar = ({ pageTitle, showIcons, showTabs, bgColor, location }) => {
    const systemHeaderHeight = 47; // Fixed height as per Figma

    const isActiveTab = (path) => location.pathname === path;

    return (
        <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[410px] z-50 flex flex-col ${bgColor === 'transparent' ? 'bg-transparent' : 'bg-white'} transition-colors duration-300`}>
            <div className="h-[47px] bg-white"></div> {/* OS 상태 표시줄 공간 (항상 흰색 배경) */}
            <div className={`w-full flex ${showIcons ? 'justify-between' : 'justify-start'} items-center h-12 px-5`}>
                {showIcons && location.pathname === '/weekly-routine-detail' && (
                    <div className="flex items-center space-x-2">
                        {/* Left icons - Back icon for detail page */}
                        <Link to="#" onClick={() => window.history.back()} className="size-6 flex items-center justify-center">
                            {/* Back arrow icon SVG */}
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 9H3" stroke="#13151B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 3L3 9L9 15" stroke="#13151B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                )}
                {!showTabs && (
                    <h1 className="text-xl text-[#13151B] font-bold">{pageTitle}</h1>
                )}
                {showIcons && location.pathname === '/weekly-routine-detail' && (
                    <div className="flex items-center space-x-2">
                        {/* Right icons - Close icon for detail page */}
                        <Link to="#" className="size-6 flex items-center justify-center">
                            {/* Close icon SVG */}
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 4.5L4.5 13.5" stroke="#13151B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.5 4.5L13.5 13.5" stroke="#13151B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                )}
                {showTabs && (
                    <div className="flex gap-3"> {/* Tabs container with 12px gap */}
                        {/* Tabs for Home Page */}
                        <Link
                            to="/"
                            className={`text-center py-2 text-[20px] transition-all duration-300 ${isActiveTab('/') ? 'text-[#13151B] font-bold border-b-2 border-[#13151B]' : 'text-[#9DA5AE] font-medium border-b-2 border-transparent'}`}
                        >
                            오늘
                        </Link>
                        <Link
                            to="/record"
                            className={`text-center py-2 text-[20px] transition-all duration-300 ${isActiveTab('/record') ? 'text-[#13151B] font-bold border-b-2 border-[#13151B]' : 'text-[#9DA5AE] font-medium border-b-2 border-transparent'}`}
                        >
                            기록
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopNavBar; 