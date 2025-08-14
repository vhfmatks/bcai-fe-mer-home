import type { FC } from "react";

export const ShareIcon: FC<{ className?: string; stroke?: string; strokeWidth?: number }> = ({ className, stroke = "currentColor", strokeWidth = 1.5 }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="6" r="2.25" stroke={stroke} strokeWidth={strokeWidth} />
    <circle cx="18" cy="18" r="2.25" stroke={stroke} strokeWidth={strokeWidth} />
    <circle cx="6" cy="12" r="2.25" stroke={stroke} strokeWidth={strokeWidth} />
    <path d="M8.5 11.25L15.5 7.75" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M8.5 12.75L15.5 16.25" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export default ShareIcon;


