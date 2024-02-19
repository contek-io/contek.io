import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="w-full max-w-[--contek-max-width] px-16 py-8">
        <div></div>
        <div className="flex justify-between text-sm">
          <div>© 2024 Contek, Ltd All rights reserved</div>
          <div className="flex gap-4">
            <a>Privacy</a>
            <a>Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
