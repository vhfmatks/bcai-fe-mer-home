import type { ReactNode } from "react";
import { Header } from "./_components/Header";
import { HeaderBanner } from "./_components/HeaderBanner";
import { Footer } from "./_components/Footer";
import Container from "./_components/ui/Container";

export default function EatplHomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-w-[360px] flex min-h-dvh flex-col">
      <Header />
      <HeaderBanner />
      <main className="w-full flex-1" style={{ background: '#F3F5F8' }}>
        <Container className="px-6">{children}</Container>
      </main>
      <Footer />
    </div>
  );
}


