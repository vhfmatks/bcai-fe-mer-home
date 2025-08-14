import type { FC } from "react";

export type IconProps = {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
};

export const CheckIcon: FC<IconProps> = ({ className, stroke = "currentColor", strokeWidth = 2 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17l-5-5" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CheckIcon;


