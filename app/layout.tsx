import localFont from "next/font/local";
import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const font = localFont({ src: "../public/fonts/Figtree-Regular.ttf" });

export const metadata: Metadata = {
  title: "Contek",
  description: "Discovering Patterns in Crypto Markets",
  keywords: ["contek", "crypto"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
