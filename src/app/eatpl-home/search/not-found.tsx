export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#EEF2F6] text-[40px] text-[#6B7280]">
        <WarningIcon />
      </div>
      <div>
        <div className="text-[17px] font-bold text-[#1F2937]">검색결과가 없습니다</div>
        <div className="mt-3 text-[15px] text-[#6B7280]">다른 조건으로 검색해 주세요</div>
      </div>
    </div>
  );
}

const WarningIcon = () => {
  return (    
    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
      <g clipPath="url(#clip0_17994_2338)">
        <path opacity="0.7" d="M26.5 3.09961C40.1414 3.09961 51.2001 14.1585 51.2002 27.7998C51.2002 41.4412 40.1414 52.5 26.5 52.5C12.8586 52.5 1.7998 41.4412 1.7998 27.7998C1.79991 14.1585 12.8586 3.09961 26.5 3.09961ZM24.5498 35.5996V39.5H28.4502V35.5996H24.5498ZM24.5498 16.0996V33H28.4502V16.0996H24.5498Z" fill="#CDD1DA"/>
      </g>
      <defs>
        <clipPath id="clip0_17994_2338">
          <rect width="52" height="52" fill="white" transform="translate(0.5 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  );
};