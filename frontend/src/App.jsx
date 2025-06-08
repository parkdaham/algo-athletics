import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import ReportPage from './pages/ReportPage';
import MorePage from './pages/MorePage';
import WeeklyRoutineDetailPage from './pages/WeeklyRoutineDetailPage';

const App = () => {
  const location = useLocation();

  const getTopNavBarProps = () => {
    const isHomePage = location.pathname === '/';
    const isRecordPage = location.pathname === '/record';
    const isWeeklyRoutineDetailPage = location.pathname === '/weekly-routine-detail';

    let showTabs = false;
    let showIcons = false;
    let pageTitle = '';
    let bgColor = 'white';

    switch (location.pathname) {
      case '/':
        showTabs = true;
        pageTitle = '';
        bgColor = 'white'; // 홈 페이지 TopNavBar 배경을 흰색으로 설정
        break;
      case '/record':
        showTabs = true;
        pageTitle = '';
        break;
      case '/report':
        pageTitle = '리포트';
        break;
      case '/more':
        pageTitle = '더보기';
        break;
      case '/weekly-routine-detail':
        pageTitle = '주간 루틴 요약';
        showIcons = true;
        break;
      default:
        pageTitle = '';
        break;
    }
    return { pageTitle, showIcons, showTabs, bgColor };
  };

  const topNavBarProps = getTopNavBarProps();

  const systemHeaderHeight = 47; // This is now handled by TopNavBar itself, so it's not added here.
  const mainNavBarHeight = 48; // h-12 from TopNavBar
  // const tabsHeight = 48; // h-12 from TopNavBar for tabs section

  const calculatedPaddingTop = `${systemHeaderHeight + mainNavBarHeight + 8}px`;

  const showBottomNav = !['/weekly-routine-detail'].includes(location.pathname);

  return (
    <div className="flex flex-col h-screen font-sans max-w-[410px] mx-auto">
      <TopNavBar {...topNavBarProps} location={location} />

      <div className={`flex flex-grow flex-col`} style={{ paddingTop: calculatedPaddingTop, paddingBottom: showBottomNav ? '64px' : '0px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/weekly-routine-detail" element={<WeeklyRoutineDetailPage />} />
        </Routes>
      </div>

      {showBottomNav && <BottomNav location={location} />}
    </div>
  );
};

export default App;
