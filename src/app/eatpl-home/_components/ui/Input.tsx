import type { FC, InputHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";
import { TitleLabel } from "./SectionTitle";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input
    {...props}
    className={cn(
      "flex py-[15px] px-[18px] items-center gap-[10px] self-stretch w-full rounded-xl border border-[#D9E1F1] bg-white text-[15px] text-[#111827]",
      "placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#5782D9]/30 focus:border-[#5782D9]",
      className,
    )}
  />
);

export const InputField: FC<{ title: string } & InputHTMLAttributes<HTMLInputElement>> = ({ title, className, ...props }) => (
  <div className="space-y-3">
    <TitleLabel title={title} />
    <Input className={className} {...props} />
  </div>
);

export default Input;


