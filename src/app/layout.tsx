import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title:
    "Modern Stoneworks || Stone Fabrication and Installation in Baldwin County, AL",
  description:
    "We provide all your granite and stone installation needs in Baldwin County, AL, Mobile, Al, and Pensacola, FL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable
      )}>
      <body className="flex h-full flex-col">{children}</body>
    </html>
  );
}
