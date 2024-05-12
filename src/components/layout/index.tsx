import React from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
  footerCta?: boolean;
}

export function Layout({ children, footerCta }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer cta={footerCta} />
    </>
  );
}
