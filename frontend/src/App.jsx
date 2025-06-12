import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import BottomNav from './components/BottomNav';
import OnboardingChecker from './components/OnboardingChecker';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import ReportPage from './pages/ReportPage';
import MorePage from './pages/MorePage';
import WeeklyRoutineDetailPage from './pages/WeeklyRoutineDetailPage';
import OnboardingStartPage from './pages/OnboardingStartPage';
import OnboardingStep1Page from './pages/OnboardingStep1Page';
import OnboardingStep2Page from './pages/OnboardingStep2Page';
import OnboardingStep3Page from './pages/OnboardingStep3Page';
import WeeklyReportPage from './pages/WeeklyReportPage';
import OnboardingStep4Page from './pages/OnboardingStep4Page';
import OnboardingStep5Page from './pages/OnboardingStep5Page';
import OnboardingStep6Page from './pages/OnboardingStep6Page';
import OnboardingStep7Page from './pages/OnboardingStep7Page';

const App = () => {
  const location = useLocation();

  const getTopNavBarProps = () => {
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
      case '/weekly-report':
        pageTitle = '주간 리포트';
        showIcons = true;
        break;
      case '/onboarding/start':
        pageTitle = '';
        break;
      case '/onboarding/step1':
        pageTitle = '';
        break;
      case '/onboarding/step2':
        pageTitle = '';
        break;
      case '/onboarding/step3':
        pageTitle = '';
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

  const showBottomNav = !['/weekly-routine-detail', '/onboarding/start', '/onboarding/step1', '/onboarding/step2', '/onboarding/step3', '/weekly-report'].includes(location.pathname);

  return (
    <div className="flex flex-col h-screen font-sans max-w-[410px] mx-auto">
      {!location.pathname.startsWith('/onboarding') && <TopNavBar {...topNavBarProps} location={location} />}

      <div className={`flex flex-grow flex-col`} style={{ paddingTop: location.pathname.startsWith('/onboarding') ? '0px' : calculatedPaddingTop, paddingBottom: showBottomNav ? '64px' : '0px' }}>
        <Routes>
          <Route path="/" element={
            <OnboardingChecker>
              <HomePage />
            </OnboardingChecker>
          } />
          <Route path="/record" element={
            <OnboardingChecker>
              <RecordPage />
            </OnboardingChecker>
          } />
          <Route path="/report" element={
            <OnboardingChecker>
              <ReportPage />
            </OnboardingChecker>
          } />
          <Route path="/more" element={
            <OnboardingChecker>
              <MorePage />
            </OnboardingChecker>
          } />
          <Route path="/weekly-routine-detail" element={
            <OnboardingChecker>
              <WeeklyRoutineDetailPage />
            </OnboardingChecker>
          } />
          <Route path="/weekly-report" element={
            <OnboardingChecker>
              <WeeklyReportPage />
            </OnboardingChecker>
          } />
          <Route path="/onboarding/start" element={<OnboardingStartPage />} />
          <Route path="/onboarding/step1" element={<OnboardingStep1Page />} />
          <Route path="/onboarding/step2" element={<OnboardingStep2Page />} />
          <Route path="/onboarding/step3" element={<OnboardingStep3Page />} />
          <Route path="/onboarding/step4" element={<OnboardingStep4Page />} />
          <Route path="/onboarding/step5" element={<OnboardingStep5Page />} />
          <Route path="/onboarding/step6" element={<OnboardingStep6Page />} />
          <Route path="/onboarding/step7" element={<OnboardingStep7Page />} />
        </Routes>
      </div>

      {showBottomNav && <BottomNav location={location} />}
    </div>
  );
};

export default App;
