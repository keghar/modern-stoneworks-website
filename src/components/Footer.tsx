import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { Phone, Mail } from "heroicons-react";

export function Footer() {
  return (
    <footer className=" bg-slate- bg-opacity-80">
      <Container className="relative overflow-hidden">
        <Image
          className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
          src="/bg-op.svg"
          alt=""
          width={2245}
          height={1636}
          unoptimized
        />
        <div className="py-16">
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="w-full mx-auto">
              <Logo className="h-24 mx-auto w-full" />
            </div>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex justify-center gap-x-6">
              <NavLink href="#features">About Us</NavLink>
              <NavLink href="#features">Our Work</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col justify-center mx-auto text-center">
          {" "}
          <Phone className=" mx-auto" size={20} />
          <span>251-555-5555</span>
          <Mail className=" mx-auto" size={20} />
          <span>modernstoneworks@outlook.com</span>
          <div className="flex gap-x-6 mx-auto">
            <Link
              href="https://facebook.com"
              className="group font-bold"
              aria-label="Modern Stoneworks on Facebook">
              Facebook
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 md:flex-row-reverse sm:justify-center">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0 text-center">
            Copyright &copy; {new Date().getFullYear()} Modern Stoneworks. All
            rights reserved.
          </p>
          {/* <p className="text-sm text-slate-500">Design by Kegan</p> */}
        </div>
      </Container>
    </footer>
  );
}
