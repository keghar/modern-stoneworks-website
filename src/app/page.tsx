import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
