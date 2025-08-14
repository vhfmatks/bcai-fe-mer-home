"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import Pill from "./Pill";
import { cn } from "../../../lib/cn";
import { ChevronUpIcon } from "../icons/ChevronUpIcon";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";

export type KeyValue = { key: string; value: string };

export type CategorySelectorProps = {
  title: string;
  items: KeyValue[];
  value?: string | null;
  onChange?: (key: string) => void;
  defaultExpanded?: boolean;
  className?: string;
};

const ChevronCircle: FC<{ expanded?: boolean; onClick?: () => void }> = ({ expanded, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={expanded ? "접기" : "더보기"}
    className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D7E3FF] bg-white text-[#2A3F6C] shadow-sm"
  >
    {expanded ? (
      <ChevronUpIcon />
    ) : (
      <ChevronDownIcon />
    )}
  </button>
);

export const CategorySelector: FC<CategorySelectorProps> = ({
  title,
  items,
  value,
  onChange,
  defaultExpanded,
  className,
}) => {
  const [expanded, setExpanded] = useState<boolean>(!!defaultExpanded);
  const [internalSelectedKey, setInternalSelectedKey] = useState<string | null>(value ?? null);

  // 외부에서 value 제어 시 내부 상태 동기화
  useEffect(() => {
    setInternalSelectedKey(value ?? null);
  }, [value]);

  const selectedKey = value ?? internalSelectedKey;

  const handleSelect = (key: string) => {
    if (onChange) {
      onChange(key);
    } else {
      setInternalSelectedKey(key);
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="text-[15px] font-bold text-[#1F2937]">{title}</div>
      <div className="relative rounded-xl bg-[#F2F4F8] pr-12">
        {/* 요약 보기: 가로 스크롤 */}
        {!expanded ? (
          <div className="flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar">
            {items.map((it) => (
              <Pill
                key={it.key}
                selected={selectedKey === it.key}
                onClick={() => handleSelect(it.key)}
                className="flex h-10 px-4 py-[9px] justify-center items-center gap-[6px]"
              >
                {it.value}
              </Pill>
            ))}
          </div>
        ) : (
          // 전체 보기: 전체 버튼 표시(줄바꿈)
          <div className="flex flex-wrap gap-2">
            {items.map((it) => (
              <Pill
                key={it.key}
                selected={selectedKey === it.key}
                onClick={() => handleSelect(it.key)}
                className="flex h-10 px-4 py-[9px] justify-center items-center gap-[6px]"
              >
                {it.value}
              </Pill>
            ))}
          </div>
        )}
        <div className="absolute right-2 top-1">
          <ChevronCircle expanded={expanded} onClick={() => setExpanded((v) => !v)} />
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;


