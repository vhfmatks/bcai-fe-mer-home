"use client";

import type { FC } from "react";
import { cn } from "../../../lib/cn";

export type MerchantCardProps = {
  className?: string;
  /** 업종/카테고리. 예: 기타한식 */
  merTpbuzNm: string;
  /** 휴무 요약. 예: 토요일 휴무 */
  holidayText?: string;
  /** 영업 시간. 예: 08:00~18:00 */
  timeText?: string;
  /** 상호명 */
  name: string;
  /** 주소 */
  address: string;
  /** 상세 페이지 URL */
  merUrl?: string;
  /** 전국 배지 텍스트. 예: "전국" */
  nationalBadgeLabel?: string;
  /** 전국 순위 텍스트. 예: "상위 1%" */
  nationalRankText?: string;
  /** 지역 배지 텍스트. 예: "지역" */
  localBadgeLabel?: string;
  /** 지역 순위 텍스트. 예: "상위 5%" */
  localRankText?: string;
  /** 해시태그(앞에 #는 자동으로 붙음) */
  tags?: string[];
};

/**
 * 가맹점 카드 컴포넌트
 * - 모든 표시 항목을 props로 주입받아 렌더링합니다.
 */
const MerchantCard: FC<MerchantCardProps> = ({
  className,
  merTpbuzNm,
  holidayText,
  timeText,
  name,
  address,
  merUrl,
  nationalBadgeLabel = "전국",
  nationalRankText,
  localBadgeLabel = "지역",
  localRankText,
  tags,
}) => {
  const content = (
    <div
      className={cn(
        "rounded-2xl w-[390px] h-[234px] border border-[#EEF2F6] bg-white p-5 md:p-6 shadow-sm",
        className,
      )}
    >
      {/* 상단 카테고리/휴무 · 시간 */}
      <div className="flex items-center justify-between text-[14px] text-[#6B7280]">
        <div className="flex flex-wrap items-center gap-2">
          <span>{merTpbuzNm}</span>
          {holidayText ? <span className="text-[#9CA3AF]">| {holidayText}</span> : null}
        </div>
        {timeText ? (
          <div className="flex items-center gap-1 text-[14px] text-[#6B7280]">
            <span role="img" aria-label="clock">
              <Clock />
            </span>
            <span>{timeText}</span>
          </div>
        ) : null}
      </div>

      {/* 상호명 */}
      <h3
        className="mt-3 text-[20px] font-bold leading-tight text-[#111827] truncate"
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
        title={name}
      >
        {name}
      </h3>

      {/* 주소 */}
      <div
        className="mt-2 text-[15px] text-[#6B7280] truncate"
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
        title={address}
      >
        {address}
      </div>

      {/* 순위 배지 */}
      {(nationalRankText || localRankText) ? (
        <div className="mt-4 flex items-center gap-5">
          {nationalRankText ? (
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#E6F5FF] px-3 py-1 text-[13px] font-semibold text-[#1C6AA6]">
                {nationalBadgeLabel}
              </span>
              <span className="text-[14px] text-[#374151]">{nationalRankText}</span>
            </div>
          ) : null}
          {localRankText ? (
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#F3E8FF] px-3 py-1 text-[13px] font-semibold text-[#6B21A8]">
                {localBadgeLabel}
              </span>
              <span className="text-[14px] text-[#374151]">{localRankText}</span>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* 구분선 */}
      <div className="mt-4 h-px w-full bg-[#EEF2F6]" />

      {/* 해시태그 */}
      {Array.isArray(tags) && tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-3 text-[14px] text-[#6B7280]">
          {tags.map((t) => (
            <span key={t} className="">#{t}</span>
          ))}
        </div>
      ) : null}
    </div>
  );

  if (merUrl && merUrl.length > 0) {
    return (
      <a href={merUrl}  rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default MerchantCard;



const Clock = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <g clipPath="url(#clip0_16676_10898)">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.50008 0.666687C4.44675 0.666687 1.16675 3.94669 1.16675 8.00002C1.16675 12.0534 4.44675 15.3334 8.50008 15.3334C12.5534 15.3334 15.8334 12.0534 15.8334 8.00002C15.8334 3.94669 12.5534 0.666687 8.50008 0.666687ZM11.6867 10.4134C11.5534 10.58 11.3601 10.6667 11.1667 10.6667C11.0201 10.6667 10.8734 10.62 10.7534 10.52L8.08675 8.38669C7.92675 8.26002 7.83342 8.06669 7.83342 7.86669V4.66669C7.83342 4.30002 8.13341 4.00002 8.50008 4.00002C8.86675 4.00002 9.16675 4.30002 9.16675 4.66669V7.54669L11.5801 9.48002C11.8667 9.71335 11.9134 10.1267 11.6867 10.42V10.4134Z" fill="#B2B7C2"/>
      </g>
      <defs>
        <clipPath id="clip0_16676_10898">
          <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
        </clipPath>
      </defs>
    </svg>
  )
}