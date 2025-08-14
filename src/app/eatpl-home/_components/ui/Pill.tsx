import type { FC, ButtonHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";

export const Pill: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean }
> = ({ className, selected, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "whitespace-nowrap rounded-full px-5 py-2 text-[14px] font-semibold",
        selected
          ? "bg-[#1A3A6D] text-white"
          : "bg-white text-[#2A3F6C] border border-[#D7E3FF]",
        className,
      )}
    />
  );
};

export default Pill;


