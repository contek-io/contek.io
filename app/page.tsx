import { Career } from "@/components/career";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-center">
        <div className="w-full max-w-[1440px] h-[732px] flex justify-between gap-24 px-16 py-8">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="">Discovering Patterns in Crypto Markets</p>
            <p className="">
              Contrarian Technology is a proprietary trading firm. We run quant
              strategies 24/7 across major crypto markets without manual
              intervention.
            </p>
          </div>
          <div className="w-1/2">test</div>
        </div>
      </div>
      <div className="flex justify-center bg-[#ffffff]">
        <div className="max-w-[1440px] h-[680px] flex gap-24 px-16 py-8 text-[#111111]">
          <div className="w-1/2">test</div>
          <div className="w-1/2 flex flex-col justify-center">
            <p className="">ABOUT</p>
            <p className="">
              We are a proprietary trading firm, leveraging on technology to
              provide liquidity to the market.
            </p>
            <p className="">
              Our scientists bring rigorous inquiry, data analysis, and
              invention to solve the toughest challenges and build up our own
              trading strategies.
            </p>
            <p className="">
              Our trading is based on our own models, using our own capital and
              done at our own risk.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[608px] h-[680px] flex flex-col justify-center items-center text-center">
          <p className="">JOIN US</p>
          <p className="">Strength in numbers</p>
          <p className="">
            We employ motivated and highly talented individuals who want to work
            at the leading edge of investment management in an open and
            supportive environment. Our firm&apos;s culture is characterised by
            collaboration, intellectual integrity, and methodological rigour.
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-[#ffffff]">
        <div className="max-w-[1440px] min-h-[320px] flex flex-col px-16 py-8 text-[#111111] text-center">
          <p className="">CAREER</p>
          <p className="">Current Openings</p>
          <Career />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1440px] h-[500px] flex flex-col justify-center items-center px-16 py-8">
          <p className="">Get in touch</p>
          <p className="">contact@contek.io</p>
        </div>
      </div>
    </main>
  );
}
