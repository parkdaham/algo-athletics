import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep7Page = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1>Onboarding Step 7 Page (Placeholder)</h1>
      <button
        onClick={() => navigate('/onboarding/step2')}
        className="px-6 py-3 rounded-lg text-lg font-medium text-blue-600 border border-blue-600 hover:bg-blue-50"
      >
        건너뛰기 (개발용) - Step 2로 이동
      </button>
    </div>
  );
};

export default OnboardingStep7Page; 