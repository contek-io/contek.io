'use client';

import { Modal } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { CONTEK_LINKEDIN_URL } from '@/consts/url';

import { Container } from './layout/container';

const BurgerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.66675 22.6666H25.3334"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 16H25.3334"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66675 9.33337H25.3334"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L16 14.5858L24.2929 6.29289C24.6834 5.90237 25.3166 5.90237 25.7071 6.29289C26.0976 6.68342 26.0976 7.31658 25.7071 7.70711L17.4142 16L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L16 17.4142L7.70711 25.7071C7.31658 26.0976 6.68342 26.0976 6.29289 25.7071C5.90237 25.3166 5.90237 24.6834 6.29289 24.2929L14.5858 16L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
      fill="white"
    />
  </svg>
);

export const Header = () => {
  const pathname = usePathname();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header>
      <Container className="flex h-[92px] max-w-[--contek-max-width] items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="contek logo" width={132} height={26} />
        </Link>
        {pathname === '/' && (
          <nav className="hidden gap-8 text-lg font-medium text-[#A9ACAC] transition tablet:flex">
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
        <div
          className="cursor-pointer transition hover:opacity-80 tablet:hidden"
          onClick={() => setModalOpen(true)}
        >
          <BurgerIcon />
        </div>
      </Container>

      <Modal
        className="tablet:hidden [&>div[role='dialog']>div]:h-full [&>div[role='dialog']>div]:max-h-full [&>div[role='dialog']>div]:rounded-none [&>div[role='dialog']>div]:bg-[#111] [&>div[role='dialog']]:p-0"
        onClose={() => setModalOpen(false)}
        show={modalOpen}
      >
        <Modal.Body className="flex flex-col gap-8 px-[--contek-padding-x-mobile] py-8">
          <div className="flex h-[28px] items-center justify-between">
            <Link href="/">
              <Image src="/logo.svg" alt="contek logo" width={132} height={26} />
            </Link>
            <span
              className="cursor-pointer transition hover:opacity-80"
              onClick={() => setModalOpen(false)}
            >
              <CloseIcon />
            </span>
          </div>
          <nav className="flex grow flex-col items-center justify-center gap-12 text-center text-[48px] font-semibold leading-[52px] text-white">
            <Link className="hover:opacity-80" href="#about-us" onClick={() => setModalOpen(false)}>
              About us
            </Link>
            <Link className="hover:opacity-80" href="#career" onClick={() => setModalOpen(false)}>
              Career
            </Link>
            <Link className="hover:opacity-80" href="#contact" onClick={() => setModalOpen(false)}>
              Contact
            </Link>
            <Link
              className="relative hover:opacity-80"
              href={CONTEK_LINKEDIN_URL}
              onClick={() => setModalOpen(false)}
              target="_blank"
            >
              LinkedIn
              <span className="absolute -right-8 top-0">
                <svg
                  width="24"
                  height="24"
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
        </Modal.Body>
      </Modal>
    </header>
  );
};
