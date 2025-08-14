"use client";

import type { FC } from "react";
import { useCallback, useState } from "react";
import { cn } from "../../../lib/cn";
import { CopyIcon, CheckIcon, QuoteStartIcon, QuoteEndIcon } from "./Icons";

export type LinkCopyBarProps = {
  urlText: string;
  quoteText?: string;
  className?: string;
};

export const LinkCopyBar: FC<LinkCopyBarProps> = ({ urlText, quoteText, className }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(urlText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }, [urlText]);

  return (
    <div className={cn("w-full flex flex-col items-center gap-3", className)}>
      <div className="inline-flex items-center gap-2 rounded-[14px] border-2 border-[#7197E6] px-5 py-3 bg-[#FFF]">
        <span className="select-all text-[17px] font-bold leading-[28px] text-[#5080E2]">{urlText}</span>
        <button type="button" onClick={onCopy} aria-label="복사">
          {copied ? (
            <CheckIcon className="h-5 w-5" stroke="#4F79E6" strokeWidth={2} />
          ) : (
            <CopyIcon className="h-5 w-5" stroke="#4F79E6" strokeWidth={1.6} />
          )}
        </button>
      </div>
      {quoteText ? (
        <div className="flex items-center gap-2 text-[20px] font-semibold text-[#4F79E1]">
          <QuoteStartIcon />
          <span>{quoteText}</span>
          <QuoteEndIcon />
        </div>
      ) : null}
    </div>
  );
};

export default LinkCopyBar;


