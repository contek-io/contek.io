import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="w-full max-w-[--contek-max-width] flex justify-between px-16 py-8">
        <Image src="/logo.svg" alt="contek logo" width={132} height={26} />
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
      </div>
    </header>
  );
};
