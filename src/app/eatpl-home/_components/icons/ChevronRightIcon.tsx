import type { FC } from "react";

export const ChevronRightIcon: FC<{ className?: string; stroke?: string; strokeWidth?: number }> = ({ className, stroke = "currentColor", strokeWidth = 2 }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default ChevronRightIcon;


