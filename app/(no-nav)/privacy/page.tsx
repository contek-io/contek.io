import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contek - Privacy",
  description: "Contek Privacy",
  keywords: ["contek", "crypto", "privacy"],
};

const Privacy = () => (
  <main>
    <div className="w-full max-w-[--contek-max-width] px-16 my-8">
      <p>Privacy</p>
    </div>
  </main>
);

export default Privacy;
