import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { CareerContainer } from '@/components/career/career-container';
import { Container } from '@/components/layout/container';
import { CONTEK_INQUIRY_EMAIL } from '@/consts/url';

const Home = () => (
  <main>
    <Container className="flex min-h-[calc(100vh-92px)] flex-col-reverse justify-between tablet:flex-row">
      <div className="flex grow flex-col justify-center gap-12 tablet:max-w-[384px] laptop:max-w-[530px] desktop:max-w-[624px]">
        <p className="text-[48px] font-semibold leading-[52px] laptop:text-[56px] laptop:leading-[62px] desktop:text-[66px] desktop:leading-[72px]">
          Discovering Patterns in Crypto Markets
        </p>
        <p className="max-w-[496px] text-base text-[#A9ACAC] desktop:text-lg">
          Contrarian Technology is a proprietary trading firm. We run quant strategies 24/7 across
          major crypto markets without manual intervention.
        </p>
        <Link href="#contact">
          <Button>Get in touch</Button>
        </Link>
      </div>
      <div className="max-w-[480px] grow laptop:min-w-[318px]">
        <iframe
          allowFullScreen
          className="min-h-[280px] border-none tablet:h-auto"
          height="100%"
          src="https://rive.app/s/GQdxTylvLUiszlcHclrZjw/embed"
          width="100%"
        />
      </div>
    </Container>

    <div className="flex justify-center bg-[#ffffff]" id="about-us">
      <div className="flex h-auto max-w-[--contek-max-width] flex-col-reverse gap-8 px-[--contek-padding-x-mobile] py-16 text-[#111111] tablet:gap-24 tablet:px-16 laptop:h-[680px] laptop:flex-row laptop:py-0">
        <div className="flex w-full items-center justify-center laptop:w-1/2">
          <Image src="/about.png" alt="contek logo" width={752} height={680} />
        </div>
        <div className="flex w-full flex-col justify-center gap-4 laptop:w-1/2">
          <p className="text-sm font-semibold leading-[22px] tracking-wider text-[#1EA665]">
            ABOUT
          </p>
          <p className="text-[32px] font-medium leading-[40px] desktop:text-[42px] desktop:leading-[52px]">
            We are a <span className="text-[#1EA665]">proprietary trading firm</span>, leveraging on
            technology to provide liquidity to the market.
          </p>
          <p className="text-base text-[#656F6E] laptop:text-lg">
            Our scientists bring rigorous inquiry, data analysis, and invention to solve the
            toughest challenges and build up our own trading strategies.
          </p>
          <p className="text-base text-[#656F6E] laptop:text-lg">
            Our trading is based on our own models, using our own capital and done at our own risk.
          </p>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="mx-auto flex h-auto w-full max-w-[608px] flex-col items-center justify-center gap-4 overflow-hidden px-[--contek-padding-x-mobile] py-32 text-center tablet:h-[460px] tablet:px-0 tablet:py-0 tablet:py-64 laptop:h-[680px]">
        <div className="absolute top-[calc(-0.5*100vw+50px)] -z-[1] w-full overflow-hidden tablet:-left-40 tablet:top-auto tablet:h-full tablet:w-auto laptop:left-0">
          <iframe
            allowFullScreen
            className="h-[100vw] w-screen rotate-90 border-none tablet:h-full tablet:w-[520px] tablet:rotate-0"
            height="680"
            src="https://rive.app/s/iExBZC5AD0eYrA1Lcrq-Sg/embed"
            width="520"
          />
        </div>
        <div className="absolute bottom-[calc(-0.5*100vw+50px)] -z-[1] w-full overflow-hidden tablet:-right-40 tablet:bottom-auto tablet:h-full tablet:w-auto laptop:right-0">
          <iframe
            allowFullScreen
            className="h-[100vw] w-screen rotate-90 border-none tablet:h-full tablet:w-[520px] tablet:rotate-0"
            height="680"
            src="https://rive.app/s/66ulUv9FeEmdjtx74YK9Rg/embed"
            width="520"
          />
        </div>
        <p className="text-sm font-semibold leading-[22px] tracking-wider text-[#1EA665]">
          JOIN US
        </p>
        <p className="text-[48px] font-medium leading-[52px] laptop:text-[56px] laptop:leading-[62px] desktop:text-[64px] desktop:leading-[70px]">
          Strength in numbers
        </p>
        <p className="mb-4 text-lg text-[#A9ACAC]">
          We employ motivated and highly talented individuals who want to work at the leading edge
          of investment management in an open and supportive environment. Our firm&apos;s culture is
          characterised by collaboration, intellectual integrity, and methodological rigour.
        </p>
        <Button>Working at Contek</Button>
      </div>
    </div>

    <div className="flex justify-center bg-[#F5F7F7] py-16" id="career">
      <div className="flex min-h-[320px] max-w-[--contek-max-width] flex-col px-[--contek-padding-x-mobile] py-8 text-center text-[#111111] tablet:px-16">
        <p className="mb-4 font-semibold tracking-wider text-[#1EA665]">CAREER</p>
        <p className="text-[48px] font-medium leading-[60px] tablet:text-[64px] tablet:leading-[80px]">
          Current Openings
        </p>
        <CareerContainer />
      </div>
    </div>

    <div className="flex justify-center" id="contact">
      <div className="flex w-full max-w-[--contek-max-width] flex-col items-center justify-center gap-4 px-[--contek-padding-x-mobile] py-16 tablet:px-16 laptop:h-[500px] laptop:gap-0 laptop:py-8">
        <p className="text-[28px] font-medium leading-[34px]">Get in touch</p>
        <p className="text-[40px] font-medium leading-[50px] text-[#1EA665] tablet:text-[64px] tablet:leading-[80px] laptop:text-[104px] laptop:leading-[128px]">
          {CONTEK_INQUIRY_EMAIL}
        </p>
      </div>
    </div>
  </main>
);

export default Home;
