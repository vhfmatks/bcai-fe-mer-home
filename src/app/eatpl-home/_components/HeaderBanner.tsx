import type { FC, SVGProps } from "react";
import { DividerBarIcon } from "./icons/DividerBarIcon";

export const HeaderBanner: FC<SVGProps<SVGSVGElement>> = ({ className, style, ...rest }) => (
    <div className="bg-[#ECF1FB] flex h-[40px] px-5 py-3 justify-center items-center gap-1.5 self-stretch">
        
        <Span>eat.pl 잇플</Span>
        <DividerBarIcon />
        <Span>BC카드가 제공하는 맛집정보 AI 검색</Span>
    </div>
  
);

const Span: FC<SVGProps<SVGSVGElement>> = ({ className, style, children, ...rest }) => (
    <span className="text-[#5782D9] font-[Pretendard] text-sm font-bold leading-5"> {children} </span>
);  


