import { Career } from "@/components/career";
import { Button } from "@/components/button";

const Home = () => (
  <main className="flex flex-col">
    <div className="flex justify-center">
      <div className="w-full max-w-[--contek-max-width] h-[732px] flex justify-between gap-24 px-16 py-8">
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
    <div className="flex justify-center bg-[#ffffff]">
      <div className="max-w-[--contek-max-width] h-[680px] flex gap-24 px-16 py-8 text-[#111111]">
        <div className="w-1/2">test</div>
        <div className="w-1/2 flex flex-col justify-center">
          <p className="">ABOUT</p>
          <p className="">
            We are a proprietary trading firm, leveraging on technology to
            provide liquidity to the market.
          </p>
          <p className="">
            Our scientists bring rigorous inquiry, data analysis, and invention
            to solve the toughest challenges and build up our own trading
            strategies.
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
          at the leading edge of investment management in an open and supportive
          environment. Our firm&apos;s culture is characterised by
          collaboration, intellectual integrity, and methodological rigour.
        </p>
      </div>
    </div>
    <div className="flex justify-center bg-[#ffffff]">
      <div className="max-w-[--contek-max-width] min-h-[320px] flex flex-col px-16 py-8 text-[#111111] text-center">
        <p className="">CAREER</p>
        <p className="">Current Openings</p>
        <Career />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-full max-w-[--contek-max-width] h-[500px] flex flex-col justify-center items-center px-16 py-8">
        <p className="">Get in touch</p>
        <p className="">contact@contek.io</p>
      </div>
    </div>
  </main>
);

export default Home;
