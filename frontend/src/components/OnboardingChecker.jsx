import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingChecker = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkOnboardingStatus = () => {
            const userRoutine = localStorage.getItem('userRoutine');
            
            if (!userRoutine) {
                // 온보딩 미완료시 온보딩 시작 페이지로 리디렉션
                navigate('/onboarding/start');
            }
        };

        checkOnboardingStatus();
    }, [navigate]);

    // 온보딩이 완료된 경우에만 children 렌더링
    const userRoutine = localStorage.getItem('userRoutine');
    if (!userRoutine) {
        return null; // 리디렉션 중이므로 아무것도 렌더링하지 않음
    }

    return children;
};

export default OnboardingChecker;