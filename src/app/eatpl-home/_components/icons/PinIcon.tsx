import type { FC } from "react";

export const PinIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#DDEBFF" />
    <path d="M24 12c-5.247 0-9.5 4.253-9.5 9.5 0 6.645 9.5 14.5 9.5 14.5s9.5-7.855 9.5-14.5c0-5.247-4.253-9.5-9.5-9.5Zm0 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" fill="#2563EB" />
  </svg>
);

export default PinIcon;


