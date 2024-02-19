import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="w-full max-w-[--contek-max-width] px-16 py-8">
        <div></div>
        <div className="flex justify-between text-sm">
          <div className="text-sm text-[#646B69]">
            © 2024 Contek, Ltd All rights reserved
          </div>
          <nav className="flex gap-4 text-sm text-[#A9ACAC] transition">
            <Link className="hover:opacity-80" href="/privacy" target="_blank">
              Privacy
            </Link>
            <Link
              className="hover:opacity-80"
              href="/terms-of-use"
              target="_blank"
            >
              Terms of use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
