import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import TopNavBar from '../components/TopNavBar'; // App.jsx에서 전역 관리
// import BottomNav from '../components/BottomNav'; // App.jsx에서 전역 관리
import clsx from "clsx";

type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-col items-center p-0 relative w-full",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        {children}
      </div>
    </div>
  );
}
type ContentsBlockcardProps = {
  text: string;
  text1: string;
  text2: string;
};

function ContentsBlockcard({ text, text1, text2 }: ContentsBlockcardProps) {
  return (
    <div className="relative shrink-0 w-[350px]">
      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative w-[350px]">
        <div
          className="relative rounded-xl shrink-0 w-full"
          data-name="Image frame"
        >
          <Wrapper1
            additionalClassNames={[
              "gap-2.5",
              "justify-center",
              "overflow-clip",
            ]}
          >
            <div
              className="bg-[#0f5332] h-[170px] overflow-clip relative rounded-xl shrink-0 w-full"
              data-name="Card image instance"
            >
              <CardImageInstance />
            </div>
            <div
              className="absolute bg-[#277dff] left-3 rounded-xl top-3"
              data-name="Item/Badge"
            >
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-1 relative">
                  <div className="font-['Pretendard:SemiBold'] leading-[0] not-italic relative shrink-0 text-[#fcfcfd] text-[12px] text-left text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper1>
        </div>
        <Wrapper additionalClassNames={["rounded-xl", "w-full"]}>
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center leading-[0] not-italic pb-5 pt-3 px-1 relative text-left w-full">
            <div className="font-['Pretendard:SemiBold',] relative shrink-0 text-[#13151b] text-[20px] w-full">
              <p className="block leading-[28px]">{text1}</p>
            </div>
            <div className="font-['Pretendard:Regular',] relative shrink-0 text-[#7c8592] text-[16px] w-full">
              <p className="block leading-[22px]">{text2}</p>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
type ContentsBlockpagetitleProps = {
  text: string;
  text1: string;
};

function ContentsBlockpagetitle({ text, text1 }: ContentsBlockpagetitleProps) {
  return (
    <Wrapper additionalClassNames={["h-20", "w-[350px]"]}>
      <div className="box-border content-stretch flex flex-col font-['Pretendard:SemiBold',] gap-2 h-20 items-start justify-center leading-[0] not-italic pl-1 pr-5 py-2 relative text-justify w-[350px]">
        <div className="flex flex-col justify-center relative shrink-0 text-[#13151b] text-[24px] text-nowrap">
          <p className="block leading-[34px] whitespace-pre">{text}</p>
        </div>
        <div
          className="flex flex-col justify-center min-w-full relative shrink-0 text-[#7c8592] text-[16px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[22px]">{text1}</p>
        </div>
      </div>
    </Wrapper>
  );
}

function BlockDivider() {
  return (
    <div className="relative size-full" data-name="Block/Divider">
      <div className="absolute bg-[#eeeff2] inset-0" />
    </div>
  );
}

function CardImageInstance() {
  return (
    <div
      className="overflow-clip relative rounded-xl size-full"
      data-name="Card image instance"
    >
      <div className="absolute h-[114.941px] left-[87.75px] top-[32.999px] w-[177.37px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 178 115"
        >
          <g id="Group 2676">
            <path
              d="M114.36 114.941C149.16 114.941 177.37 110.692 177.37 105.451C177.37 100.21 149.16 95.9609 114.36 95.9609C79.5606 95.9609 51.3501 100.21 51.3501 105.451C51.3501 110.692 79.5606 114.941 114.36 114.941Z"
              fill="var(--fill-0, #0B3E25)"
              id="Vector"
            />
            <g id="Vector_2"></g>
            <path
              d="M59.07 89.9109C63.45 82.3509 70.29 76.1009 70.29 76.1009C70.29 76.1009 75.04 61.8609 87.55 48.4809C99.23 35.9909 111.72 29.4909 111.72 29.4909C111.72 29.4909 113.88 23.0209 130.28 10.0709C134.6 6.66088 147.97 0.150879 147.97 0.150879C147.97 0.150879 146.591 3.45254 146.25 5.50089C145.75 8.50089 145.75 12.0009 145.75 12.0009C145.75 12.0009 141.49 16.1209 135.45 23.0209C126.13 33.6709 125.09 42.8709 125.09 42.8709C125.09 42.8709 112.21 50.0309 105.75 56.5009C97.4901 64.7709 94.02 73.9409 94.02 73.9409C94.02 73.9409 83.48 78.9609 75.03 88.6109C68.99 95.5109 65.2501 101.501 65.2501 101.501C65.2501 101.501 62.2501 102.001 58.2501 103.501C53.5301 104.551 51.29 107.171 51.29 107.171L52.03 105.101C53.2 101.951 55.69 95.7209 59.06 89.9109H59.07Z"
              fill="var(--fill-0, #CDD0D6)"
              id="Vector_3"
            />
            <path
              d="M98.3403 22.1612C90.8203 20.1112 84.1603 20.0212 80.5303 20.1912C87.9203 14.4412 97.3903 8.66119 106.11 5.76119C127.72 -1.44881 147.97 0.151188 147.97 0.151188C147.97 0.151188 134.6 6.66119 130.28 10.0812C113.88 23.0312 111.72 29.5012 111.72 29.5012C111.72 29.5012 107.84 24.7512 98.3403 22.1612Z"
              fill="var(--fill-0, #FCFCFD)"
              id="Vector_4"
            />
            <path
              d="M53.2499 66.5011C55.1099 58.7711 57.8599 49.9811 63.5099 39.6411C63.0999 45.1011 62.4599 55.1611 62.9399 59.2811C64.6699 73.9511 70.2799 76.1111 70.2799 76.1111C70.2799 76.1111 63.4399 82.3611 59.0599 89.9211C55.6999 95.7311 53.1999 101.961 52.0299 105.111C51.5499 106.411 51.2899 107.181 51.2899 107.181C51.2899 107.181 48.2499 84.0011 53.2499 66.5011Z"
              fill="var(--fill-0, #CDD0D6)"
              id="Vector_5"
            />
            <path
              d="M89.75 46.2109L150.01 102.701C153.37 105.851 157.76 106.201 160.75 102.701C163.5 99.5009 163.31 94.7209 160.33 91.7409L156.98 88.3909"
              id="Vector_6"
              stroke="var(--stroke-0, #13151B)"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
            <path
              d="M156.98 88.3911L160.33 91.7411C163.31 94.7211 163.5 99.5011 160.75 102.701C157.76 106.201 153.37 105.851 150.01 102.701L136.75 90.0011"
              id="Vector_7"
              stroke="var(--stroke-0, #13151B)"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6"
            />
            <path
              d="M74.2874 30.6671L69.4126 26.2744"
              id="Vector_8"
              stroke="var(--stroke-0, #13151B)"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6"
            />
            <path
              d="M62.9499 59.2712C62.4699 55.1512 63.1099 45.0912 63.5199 39.6312C65.7599 35.5412 68.3999 31.6212 71.5799 28.1912C73.8499 25.7512 76.9399 22.9712 80.5199 20.1812C84.1499 20.0112 90.8099 20.1012 98.3299 22.1512C107.82 24.7412 111.71 29.4912 111.71 29.4912C111.71 29.4912 99.2199 35.9912 87.5399 48.4812C75.0199 61.8612 70.2799 76.1012 70.2799 76.1012C70.2799 76.1012 64.6699 73.9412 62.9399 59.2712H62.9499Z"
              fill="var(--fill-0, #FEFEFE)"
              id="Vector_9"
            />
            <ellipse
              cx="8.25"
              cy="109.001"
              fill="var(--fill-0, #0B3E25)"
              id="Ellipse 596"
              rx="8"
              ry="2"
            />
            <path
              d="M16.2505 97.9966C16.0842 102.404 12.4582 105.922 8.00882 105.922C4.14163 105.922 0.906502 103.261 0 99.6765C0 99.7846 0 99.8928 0 100.001C0 104.558 3.69254 108.251 8.25 108.251C12.8075 108.251 16.5 104.558 16.5 100.001C16.5 자체는 99.3106 16.4168 98.637 16.2505 97.9966Z"
              fill="var(--fill-0, #FFE3A3)"
              id="Vector_10"
            />
            <path
              d="M8.00882 105.922C12.4582 105.922 16.0759 102.404 16.2505 97.9967C15.3523 94.4123 12.1089 91.751 8.25 91.751C3.80066 91.751 0.174647 95.2689 0 99.6766C0.898186 103.261 4.14163 105.922 8.0005 105.922H8.00882Z"
              fill="var(--fill-0, #FFEEC8)"
              id="Vector_11"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="relative size-full" data-name="contents">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start pb-8 pt-0 px-0 relative size-full">
          <div
            className="relative shrink-0 w-full"
            data-name="section_report_weekly"
          >
            <Wrapper1 additionalClassNames={["gap-6", "justify-start"]}>
              <ContentsBlockpagetitle
                text="n일 뒤 새 리포트가 도착해요"
                text1="매주 월요일 리포트를 보내드려요"
              />
              <div
                className="flex flex-col font-['Pretendard:SemiBold',] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#7c8592] text-[16px] text-justify"
                style={{ width: "min-content" }}
              >
                <ul className="css-ed5n1g">
                  <li className="list-disc mb-0 ms-6">
                    <span className="leading-[22px]">
                      최근 주간리포트 2-3개 리스트
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative w-full">
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 390 2"
                      >
                        <path
                          d="M0 1H390"
                          id="Vector 32"
                          stroke="var(--stroke-0, #E0E3E6)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center pl-3 pr-0 py-4 relative w-full">
                        <div className="font-['Pretendard:SemiBold'] leading-[0] not-italic relative shrink-0 text-[#7c8592] text-[16px] text-center text-nowrap">
                          <p className="block leading-[22px] whitespace-pre">
                            전체보기
                          </p>
                        </div>
                        <div
                          className="relative shrink-0 size-5"
                          data-name="chevron/right"
                        >
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 20 20"
                          >
                            <g id="Icon/chevron-right">
                              <path
                                clipRule="evenodd"
                                d="M13.9355 9.44191C14.2437 9.75014 14.2437 10.2499 13.9355 10.5581L8.05809 16.4355C7.74986 16.7437 7.25014 16.7437 6.94191 16.4355C6.63369 16.1273 6.63369 15.6275 6.94191 15.3193L12.2612 10L6.94191 4.68067C6.63369 4.37245 6.63369 3.87272 6.94191 3.5645C7.25014 3.25628 7.74986 3.25628 8.05809 3.5645L13.9355 9.44191Z"
                                fill="var(--fill-0, #7C8592)"
                                fillRule="evenodd"
                                id="Vector 8 (Stroke) (Stroke)"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="h-2 relative shrink-0 w-full"
                    data-name="Block/Divider"
                  >
                    <BlockDivider />
                  </div>
                </div>
              </div>
            </Wrapper1>
          </div>
          <div
            className="relative shrink-0 w-[350px]"
            data-name="section_coming"
          >
            <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-0 relative w-[350px]">
              <ContentsBlockpagetitle
                text="곧 만날 수 있어요"
                text1="매주 월요일 리포트를 보내드려요"
              />
              <ContentsBlockcard
                text="7월 오픈 예정"
                text1="유전자 검사"
                text2="보편적 유전자 검사 결과를 기반으로, 개인에게 최적화된 건강 관리 방향을 제시합니다."
              />
              <ContentsBlockcard
                text="7월 오픈 예정"
                text1="장 미생물 검사"
                text2="보편적 유전자 검사 결과를 기반으로, 개인에게 최적화된 건강 관리 방향을 제시합니다."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReportPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col">
      {/* Main Content Area - Scrollable */}
      <div
        className="flex-1 w-full bg-[#fefefe] overflow-y-auto px-5 pt-6 pb-[24px]"
      >
        <Contents />
      </div>
    </div>
  );
};

export default ReportPage;
