import type { FC } from "react";

export const PageTitle: FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center  text-[22px] font-bold text-[#1F2937]">
    {title}
  </div>
);

export const TitleLabel: FC<{ title: string; className?: string }> = ({ title, className }) => (
  <span className={`flex items-center self-stretch text-[15px] font-bold text-[#1F2937] ${className ?? ""}`}>{title}</span>
);

export const DescLabel: FC<{ desc: string }> = ({ desc }) => (
  <span className="flex text-[16px] text-[#626A7A]">{desc}</span>
);

export default PageTitle;


