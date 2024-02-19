import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="w-full max-w-[--contek-max-width] flex justify-between px-16 py-8">
        <Image src="/logo.svg" alt="contek logo" width={132} height={26} />
        <div className="flex gap-8 font-medium text-lg text-[#A9ACAC]">
          <nav>About us</nav>
          <nav>Career</nav>
          <nav>Contact</nav>
          <nav>LinkedIn</nav>
        </div>
      </div>
    </header>
  );
};
