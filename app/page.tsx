import Image from "next/image";

import { Career } from "@/components/career";
import { Button } from "@/components/button";

const Home = () => (
  <main className="flex flex-col">
    <div className="flex justify-center">
      <div className="w-full max-w-[--contek-max-width] h-[732px] flex justify-between gap-24 px-16 my-8">
        <div className="w-1/2 flex flex-col justify-center gap-12">
          <p className="max-w-[624px] font-semibold text-[66px] leading-[72px]">
            Discovering Patterns in Crypto Markets
          </p>
          <p className="max-w-[496px] text-lg text-[#A9ACAC]">
            Contrarian Technology is a proprietary trading firm. We run quant
            strategies 24/7 across major crypto markets without manual
            intervention.
          </p>
          <Button>Get in touch</Button>
        </div>
        <div className="w-1/2">
          <iframe
            allowFullScreen
            className="border-none"
            height="100%"
            src="https://rive.app/s/GQdxTylvLUiszlcHclrZjw/embed"
            width="100%"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center bg-[#ffffff]" id="about-us">
      <div className="max-w-[--contek-max-width] h-[680px] flex gap-24 px-16 text-[#111111]">
        <div className="w-1/2 flex justify-center items-center">
          <Image src="/about.png" alt="contek logo" width={752} height={680} />
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <p className="font-semibold text-[#1EA665] tracking-wider">ABOUT</p>
          <p className="font-medium text-[42px] leading-[52px]">
            We are a{" "}
            <span className="text-[#1EA665]">proprietary trading firm</span>,
            leveraging on technology to provide liquidity to the market.
          </p>
          <p className="text-lg text-[#656F6E]">
            Our scientists bring rigorous inquiry, data analysis, and invention
            to solve the toughest challenges and build up our own trading
            strategies.
          </p>
          <p className="text-lg text-[#656F6E]">
            Our trading is based on our own models, using our own capital and
            done at our own risk.
          </p>
        </div>
      </div>
    </div>
    <div className="relative flex justify-center">
      <div className="w-full max-w-[608px] h-[680px] flex flex-col gap-8 justify-center items-center text-center overflow-hidden">
        <div className="absolute -z-[1] h-full left-0">
          <iframe
            allowFullScreen
            className="border-none"
            height="680"
            src="https://rive.app/s/iExBZC5AD0eYrA1Lcrq-Sg/embed"
            width="520"
          />
        </div>
        <div className="absolute -z-[1] h-full right-0">
          <iframe
            allowFullScreen
            className="border-none"
            height="680"
            src="https://rive.app/s/66ulUv9FeEmdjtx74YK9Rg/embed"
            width="520"
          />
        </div>
        <p className="font-semibold text-[#1EA665] tracking-wider">JOIN US</p>
        <p className="font-medium text-[64px] leading-[70px]">
          Strength in numbers
        </p>
        <p className="text-lg text-[#A9ACAC]">
          We employ motivated and highly talented individuals who want to work
          at the leading edge of investment management in an open and supportive
          environment. Our firm&apos;s culture is characterised by
          collaboration, intellectual integrity, and methodological rigour.
        </p>
        <Button>Working at Contek</Button>
      </div>
    </div>
    <div className="flex justify-center bg-[#ffffff]">
      <div className="max-w-[--contek-max-width] min-h-[320px] flex flex-col px-16 py-8 text-[#111111] text-center">
        <p className="">CAREER</p>
        <p className="">Current Openings</p>
        <Career />
      </div>
    </div>
    <div className="flex justify-center" id="contact">
      <div className="w-full max-w-[--contek-max-width] h-[500px] flex flex-col justify-center items-center px-16 py-8">
        <p className="font-medium text-[28px] leading-[34px]">Get in touch</p>
        <p className="font-medium text-[104px] leading-[128px] text-[#1EA665]">
          contact@contek.io
        </p>
      </div>
    </div>
  </main>
);

export default Home;
