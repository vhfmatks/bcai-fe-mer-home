"use client";

import type { FC, PropsWithChildren, ReactNode } from "react";
import { useCallback, useState } from "react";
import { cn } from "../../lib/cn";
import { CopyIcon, CheckIcon } from "./ui/Icons";

export type GuideCardProps = {
  className?: string;
  /** 상단 아이콘 영역. 필요 없으면 생략 */
  icon?: ReactNode;
  /** 아이콘 배경 색상 클래스 (tailwind). 예: bg-[#E6F3D9] */
  iconContainerClassName?: string;
  /** 카드 제목 */
  title: string;
  /** 카드 설명 */
  description: string;
  /** 하단 키워드 예시 라벨 (기본: "키워드 예시") */
  keywordsLabel?: string;
  /** 키워드 예시 칩 목록. 제공 시 하단 섹션 표시 */
  keywords?: string[];
  /** 프롬프트 예시 텍스트. 제공 시 복사 가능한 프롬프트 박스 렌더링 */
  promptExample?: string;
  /** 프롬프트 박스 왼쪽 라벨(도메인/경로 등). 없으면 라벨 숨김 */
  promptPrefix?: string;
};

/**
 * 잇플 가이드 카드 공통 컴포넌트
 * - 3가지 형태를 모두 커버하도록 슬롯/옵션화
 *   - 상단 아이콘
 *   - 제목/설명
 *   - [선택] 키워드 예시 칩 영역
 *   - [선택] 프롬프트 예시 복사 박스
 */
export const GuideCard: FC<PropsWithChildren<GuideCardProps>> = ({
  className,
  icon,
  iconContainerClassName,
  title,
  description,
  keywordsLabel = "키워드 예시",
  keywords,
  promptExample,
  promptPrefix,
  children,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!promptExample) return;
    try {
      await navigator.clipboard.writeText(promptExample);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }, [promptExample]);

  return (
    <section
      className={cn(
        "w-[320px] rounded-[24px] border border-[#EEF2F6] bg-white p-6 md:p-8 shadow-sm",
        className,
      )}
    >
      {/* 헤더 아이콘 */}
      {icon ? (
        <div
          className={cn(
            "mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl",
            iconContainerClassName ?? "bg-[#EAF3E0]",
          )}
        >
          {icon}
        </div>
      ) : null}

      {/* 타이틀 */}
      <h3 className="text-[20px] font-bold leading-tight text-[#1F2937]">
        {title}
      </h3>

      {/* 설명 */}
      <p className="mt-3 text-[16px] leading-7 text-[#626A7A] whitespace-pre-line">
        {description}
      </p>

      {/* 추가 children 영역 (선택) */}
      {children}

      {/* 키워드 예시 칩 */}
      {Array.isArray(keywords) && keywords.length > 0 ? (
        <div className="mt-6 border-t border-[#EEF2F6] pt-4">
          <div className="mb-3 text-[14px] font-semibold text-[#64748B]">{keywordsLabel}</div>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="whitespace-nowrap rounded-full border border-[#D7E3FF] bg-white px-4 py-2 text-[14px] font-semibold text-[#2A3F6C]"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {/* 프롬프트 예시 복사 박스 */}
      {promptExample ? (
        <div className="mt-6">
          <div className="rounded-2xl bg-[#F5F7FA] p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                {promptPrefix ? (
                  <div className="truncate text-[14px] font-medium text-[#65758B]">{promptPrefix}</div>
                ) : null}
                <div className="truncate text-[15px] font-semibold text-[#1F2937]">
                  {promptExample}
                </div>
              </div>
              <button onClick={handleCopy} type="button" aria-label="복사">
                {copied ? (
                  <CheckIcon className="h-6 w-6" stroke="#2A3F6C" strokeWidth={2} />
                ) : (
                  <CopyIcon className="h-6 w-6" stroke="#2A3F6C" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default GuideCard;


