"use client";

import { Fragment, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

// import { Button } from '@/components/Button'
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { Button } from "./Button";

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="flex w-full justify-center p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-gray-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round">
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0 z-10"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-20 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none bg-white rounded-full"
        aria-label="Toggle Navigation">
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Popover.Overlay className="fixed inset-0 z-10 bg-gray-800/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight z-10 text-gray-700 font-semibold shadow-xl ring-1 ring-slate-900/5">
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/gallery">See Our Work</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />

            <Popover.Button
              as={Link}
              href="/#contact"
              className="mx-auto text-white text-center bg-gray-600 rounded-full py-2 w-full">
              {" "}
              Contact{" "}
            </Popover.Button>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  return (
    <header className="">
      <div className="fixed flex justify-center mx-auto text-white max-w-screen-2xl left-0 right-0 w-full h-10 z-30">
        <Link
          href="#contact"
          className="flex justify-center items-center w-full rounded-b-xl shadow-md  bg-gray-600 shadow-gray-400 hover:bg-gray-700">
          <span>Contact us online</span>
        </Link>
        <Link
          href="tel:251-413-1205"
          className="flex justify-center items-center w-full bg-gray-600 rounded-b-xl shadow-md shadow-gray-400 hover:bg-gray-700">
          <span>Call us 251-413-1205</span>
        </Link>
      </div>
      <Container className="relative pb- pt-6 mt-10">
        <nav className=" flex justify-between">
          <div className=" flex items-center w-full justify-between md:gap-x-12 ">
            <div className="basis 1/3 flex justify-start">
              <Link href="/" aria-label="Home">
                <Logo className="h-full w-full z-50" />
              </Link>
            </div>
            <div className="hidden md:flex md:gap-x-6 md:justify-end md:w-full md:basis-2/3 font-semibold text-gray-700">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/gallery">Our work</NavLink>
            </div>
            {/* <div className="hidden basis-1/3 md:block">
              <Button variant="solid" href="#contact">
                Contact us
              </Button>
            </div> */}
            <div className="ml-3 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
