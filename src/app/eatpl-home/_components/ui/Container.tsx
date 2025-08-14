import type { FC, PropsWithChildren } from "react";
import { cn } from "../../../lib/cn";

export const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
      <div className={cn("mx-auto w-full max-w-[1000px]", className)}>
      {children}
      </div>
  );
};

export default Container;


