import type { FC } from "react";

export const DividerBarIcon: FC<{ className?: string; opacity?: number; fill?: string }> = ({ className, opacity = 0.2, fill = "#5782D9" }) => (
  <svg className={className} width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity={opacity} x="0.5" width="1" height="12" fill={fill} />
  </svg>
);

export default DividerBarIcon;


