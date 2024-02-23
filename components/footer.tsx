import Image from 'next/image';
import Link from 'next/link';

import { CONTEK_INQUIRY_EMAIL, CONTEK_LINKEDIN_URL } from '@/consts/url';

export const Footer = () => (
  <footer className="flex justify-center">
    <div className="w-full max-w-[--contek-max-width] px-16 py-8">
      <div className="flex mb-16">
        <div className="w-1/2">
          <Link href="/">
            <Image src="/logo.svg" alt="contek logo" width={132} height={26} />
          </Link>
        </div>
        <div className="mr-24">
          <p className="mb-4 text-[#A9ACAC]">Contact</p>
          <p className="text-xl leading-[30px]">{CONTEK_INQUIRY_EMAIL}</p>
          <Link
            className="text-xl leading-[30px] hover:opacity-80"
            href={CONTEK_LINKEDIN_URL}
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <div className="max-w-[392px]">
          <p className="mb-4 text-[#A9ACAC]">Office</p>
          <p className="text-xl leading-[30px]">
            Hysan Avenue, Causeway Bay, Hong Kong, 999077, CN
          </p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div className="text-sm text-[#646B69]">© 2024 Contek, Ltd All rights reserved</div>
        <nav className="flex gap-4 text-sm text-[#A9ACAC] transition">
          <Link className="hover:opacity-80" href="/privacy" target="_blank">
            Privacy
          </Link>
          <Link className="hover:opacity-80" href="/terms-of-use" target="_blank">
            Terms of use
          </Link>
        </nav>
      </div>
    </div>
  </footer>
);
