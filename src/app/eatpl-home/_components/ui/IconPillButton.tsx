"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from "react";
import { cn } from "../../../lib/cn";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";

export type IconPillButtonProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

export const IconPillButton: FC<IconPillButtonProps> = ({ label, icon, className, href, ...props }) => {
  const base = cn(
    "flex items-center justify-center rounded-full border border-[#EEF2F6] bg-white font-semibold text-[#2A3F6C] ",
    "h-[41.337px]",
    "p-2",
    "hover:bg-[#F9FAFB] transition-colors",
    className,
  );

  const content = (
    <>
      {icon ? <span className="inline-flex items-center justify-center">{icon}</span> : null}
      <span className="text-[14px]">{label}</span>
      <ChevronRightIcon className="h-4 w-4" />
    </>
  );

  if (href) {
    const { onClick, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...rest} href={href} target="_blank" rel="noopener noreferrer" className={base} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={base}>
      {content}
    </button>
  );
};

export default IconPillButton;


