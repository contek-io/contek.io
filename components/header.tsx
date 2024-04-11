'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CONTEK_LINKEDIN_URL } from '@/consts/url';

import { Container } from './layout/container';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <Container className="flex max-w-[--contek-max-width] justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="contek logo" width={132} height={26} />
        </Link>
        {pathname === '/' && (
          <nav className="flex gap-8 text-lg font-medium text-[#A9ACAC] transition">
            <Link className="hover:opacity-80" href="#about-us">
              About us
            </Link>
            <Link className="hover:opacity-80" href="#career">
              Career
            </Link>
            <Link className="hover:opacity-80" href="#contact">
              Contact
            </Link>
            <Link className="relative hover:opacity-80" href={CONTEK_LINKEDIN_URL} target="_blank">
              LinkedIn
              <span className="absolute -right-2 top-0">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.2929 2H1.00001V1H7.00001V7H6.00001V2.70711L1.35356 7.35355L0.646454 6.64645L5.2929 2Z"
                    fill="#343635"
                  />
                </svg>
              </span>
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
};
