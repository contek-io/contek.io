import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contek - Terms of use",
  description: "Contek terms of use",
  keywords: ["contek", "crypto", "terms of use"],
};

const TermsOfUse = () => (
  <main className="flex justify-center">
    <div className="w-full max-w-[--contek-max-width] px-16 my-8">
      <p>Terms Of Use</p>
    </div>
  </main>
);

export default TermsOfUse;
