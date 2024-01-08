import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { Phone, Mail } from "heroicons-react";

export function Footer() {
  return (
    <footer className=" bg-slate- bg-opacity-80">
      <Container className="relative overflow-hidden text-gray-800">
        <Image
          className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] -z-10"
          src="/bg-op.svg"
          alt=""
          width={2245}
          height={1636}
          unoptimized
        />

        <div className="pt-16 pb-8">
          <div className="flex flex-col items-center justify-center mx-auto">
            <Link href="/" aria-label="Main">
              <div className="w-full mx-auto">
                <Logo className="h-24 md:h-36 lg:h-40 xl:h-48 mx-auto w-full" />
              </div>
            </Link>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex justify-center gap-x-6">
              <NavLink href="/about">
                <span className="text-lg md:text-xl lg:text-2xl">About</span>
              </NavLink>
              <NavLink href="/gallery">
                {" "}
                <span className="text-lg md:text-xl lg:text-2xl">
                  Our Work
                </span>{" "}
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col justify-center mx-auto text-center">
          <Link
            href="tel:251-413-1205"
            className="flex flex-row justify-center items-center hover:cursor-pointer hover:bg-gray-200 rounded-xl px-4 mx-auto mb-2">
            <Phone className="text-gray-700 text-xl" size={15} />
            <span className="ml-3 text-lg md:text-xl lg:text-2xl font-semibold">
              251-413-1205
            </span>
          </Link>
          <Link
            href="mailto:moderstoneworks@outlook.com"
            className="flex flex-row justify-center items-center hover:cursor-pointer hover:bg-gray-200 rounded-xl px-4 mx-auto">
            <Mail className=" text-gray-700 text-xl" size={15} />
            <span className="ml-3 text-lg md:text-xl lg:text-2xl font-semibold">
              {" "}
              modernstoneworks@outlook.com
            </span>
          </Link>
          <p className="mt-8 md:text-lg lg:text-xl">
            <span className="font-semibold underline">Hours: </span>
            <br />
            Monday - Saturday <br /> 9:00am - 4:30pm
          </p>
          <p className="md:text-lg lg:text-xl">Sunday Closed</p>
          <p className="mt-8 md:text-lg lg:text-xl">
            <span className="font-semibold text-center underline">
              Address:
            </span>
            <br />
            Hoods Building #2
            <br />
            1918 North McKenzie St. <br />
            Foley, AL 36535
          </p>
          <p className="mt-4 md:text-lg lg:text-xl">
            Look for us at Hoods Discount Home Center in <br /> Foley, AL. We
            are located South of the main building
          </p>

          <div className="flex gap-x-6 mx-auto mt-8 md:text-lg lg:text-xl">
            <Link
              href="https://www.facebook.com/profile.php?id=61553137935575"
              className="group font-bold"
              aria-label="Check us out on Facebook">
              <p className="font-normal">
                Check us out on
                <span className="font-semibold text-lg md:text-xl lg:text-2xl">
                  {" "}
                  Facebook
                </span>
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 md:flex-row-reverse sm:justify-center">
          <p className="mt-6 text-sm text-gray-600 sm:mt-0 text-center md:text-base lg:text-lg">
            Copyright &copy; {new Date().getFullYear()} Modern Stoneworks. All
            rights reserved.
          </p>
          {/* <p className="text-sm text-slate-500">Design by Kegan</p> */}
        </div>
      </Container>
    </footer>
  );
}
