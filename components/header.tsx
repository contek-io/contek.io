"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="h-[92px] flex justify-center">
      <div className="w-full max-w-[--contek-max-width] flex justify-between px-16 py-8">
        <Link href="/">
          <Image src="/logo.svg" alt="contek logo" width={132} height={26} />
        </Link>
        {pathname === "/" && (
          <nav className="flex gap-8 font-medium text-lg text-[#A9ACAC] transition">
            <Link className="hover:opacity-80" href="#about-us">
              About us
            </Link>
            <Link className="hover:opacity-80" href="#career">
              Career
            </Link>
            <Link className="hover:opacity-80" href="#contact">
              Contact
            </Link>
            <Link
              className="hover:opacity-80"
              href="https://www.linkedin.com/company/contek/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
