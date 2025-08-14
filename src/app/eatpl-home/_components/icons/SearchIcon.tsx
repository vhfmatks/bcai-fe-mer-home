import type { FC } from "react";

export const SearchIcon: FC<{ className?: string; stroke?: string; strokeWidth?: number }> = ({ className, stroke = "currentColor", strokeWidth = 2 }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke={stroke} strokeWidth={strokeWidth} />
    <path d="M20 20l-3.5-3.5" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export default SearchIcon;


