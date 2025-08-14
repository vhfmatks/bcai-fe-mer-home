import type { FC } from "react";
import { Logo } from "./Logo";
import Container from "./ui/Container";
import { ShareIcon } from "./icons/ShareIcon";
import Link from "next/link";

export const Header: FC = () => {
  const homeUrl = process.env.NEXT_PUBLIC_EATPL_HOME || "/";
  return (
    <header className="w-full px-3">
      <Container className="h-[72px] min-h-16 flex items-center justify-between">
        <Link href={homeUrl} className="flex items-center select-none">
          <Logo className="h-6 w-auto" />
        </Link>
        <button
          type="button"
          aria-label="공유"
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 active:bg-gray-200"
        >
          <ShareIcon className="text-black" />
        </button>
      </Container>
    </header>
  );
};


