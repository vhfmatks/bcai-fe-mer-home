import type { FC } from "react";

export type IconProps = {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
};

export const CopyIcon: FC<IconProps> = ({ className, stroke = "currentColor", strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9.75A2.25 2.25 0 0 1 11.25 7.5h6a2.25 2.25 0 0 1 2.25 2.25v6A2.25 2.25 0 0 1 17.25 18h-6A2.25 2.25 0 0 1 9 15.75v-6Z" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.75 15.75h-.75A2.25 2.25 0 0 1 3.75 13.5v-6A2.25 2.25 0 0 1 6 5.25h6A2.25 2.25 0 0 1 14.25 7.5v.75" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CopyIcon;


