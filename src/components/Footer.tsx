import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className=" w-full mx-auto">
              <Link href="#" aria-label="Home">
                {/* <Logo className="h-10 w-auto" /> */}
                <Image
                  src="/logo.png"
                  alt="logo"
                  height={100}
                  width={200}
                  className="mx-auto"
                />
              </Link>
            </div>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex justify-center gap-x-6">
              <NavLink href="#features">About Us</NavLink>
              <NavLink href="#features">Our Work</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 md:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {/* <Link
              href="https://twitter.com"
              className="group"
              aria-label=""
            >
              Twitter
            </Link> */}
            <Link
              href="facebook.com"
              className="group font-bold"
              aria-label="Modern Stoneworks on Facebook">
              Facebook
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Modern Stoneworks. All
            rights reserved.
          </p>
          <p className="text-sm text-slate-500">Design by Kegan</p>
        </div>
      </Container>
    </footer>
  );
}
