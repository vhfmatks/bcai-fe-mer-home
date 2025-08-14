import type { FC, PropsWithChildren } from "react";
import { cn } from "../../lib/cn";
import Container from "./ui/Container";

const PillLink: FC<PropsWithChildren<{ href?: string; className?: string }>> = ({
  href = "#",
  className,
  children,
}) => (
  <a
    href={href}
    className={cn(
      "inline-flex items-center justify-center rounded-full border px-5 py-2 text-[14px] font-semibold text-[#475569] border-[#E5E7EB] bg-white",
      className,
    )}
  >
    {children}
  </a>
);

export const Footer: FC = () => {
  const customerServiceUrl = process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_URL || "https://bccard.com/";
  return (
    <footer className="w-full">
      <Container className="px-6 py-10 space-y-4">
        {/* Top quick links */}
        <div className="flex flex-wrap gap-3">
          <PillLink href={customerServiceUrl}>고객센터</PillLink>
        </div>

        {/* Company info */}
        <div className="text-[20px] font-extrabold text-[#1F2937]">비씨카드(주)</div>
        <div className="text-[#6B7280]">
          <p className="text-[14px] leading-7">
            서울시 중구 을지로 170 비씨카드(주) 대표이사 최원석
            <br/>
            사업자번호 214-81-37726
            <span className="mx-2">|</span>
            통신판매업 신고번호 제 2019-서울중구-2167호
            <span className="mx-2">|</span>
            관광사업자등록번호 제2012-25호
          </p>
          <p className="text-[14px] leading-7">(비씨카드여행서비스)</p>
        </div>

        {/* Bottom policy links
        <div className="flex flex-wrap items-center gap-4 pt-2 text-[18px] text-[#111827]">
          <a href="#" className="underline-offset-2 hover:underline font-bold">
            개인정보처리방침
          </a>
          <span className="text-[#CBD5E1]">|</span>
          <a href="#" className="underline-offset-2 hover:underline">
            이용약관
          </a>
        </div> */}
      </Container>
    </footer>
  );
};

export default Footer;


