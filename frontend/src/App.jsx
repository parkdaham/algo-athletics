import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import TopNavBar from './components/TopNavBar';
import RecordPage from './pages/RecordPage';
import MorePage from './pages/MorePage';
import WeeklyRoutineDetailPage from './pages/WeeklyRoutineDetailPage';
import ReportPage from './pages/ReportPage';
import HomePage from './pages/HomePage';

function App() {
  const location = useLocation();
  const [navBarBgColor, setNavBarBgColor] = useState('transparent');

  const hideBottomNav = location.pathname === '/weekly-routine-detail';

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 150; // 이 값은 실제 HomePage의 그라데이션 끝 지점에 따라 조정될 수 있습니다.
      if (window.scrollY > scrollThreshold) {
        setNavBarBgColor('white'); // 흰색 배경
      } else {
        setNavBarBgColor('transparent'); // 투명 배경
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getTopNavBarProps = () => {
    switch (location.pathname) {
      case '/':
        return { pageTitle: '내 영양', showIcons: true, showTabs: true, bgColor: 'transparent' };
      case '/record':
        return { pageTitle: '기록', showIcons: false, showTabs: false, bgColor: navBarBgColor };
      case '/more':
        return { pageTitle: '더보기', showIcons: false, showTabs: false, bgColor: navBarBgColor };
      case '/report':
        return { pageTitle: '리포트', showIcons: false, showTabs: false, bgColor: navBarBgColor };
      case '/weekly-routine-detail':
        return { pageTitle: '주간 루틴', showIcons: false, showTabs: false, bgColor: navBarBgColor };
      default:
        return { pageTitle: '내 영양', showIcons: true, showTabs: true, bgColor: navBarBgColor };
    }
  };

  const topNavBarProps = getTopNavBarProps();

  return (
    <div className="flex flex-col h-screen font-sans">
      <TopNavBar {...topNavBarProps} />

      <div className="flex flex-grow flex-col pt-[103px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/weekly-routine-detail" element={<WeeklyRoutineDetailPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>

      {!hideBottomNav && <BottomNav />}
    </div>
  );
}

export default App;
