import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import Contact from "@/components/Contact";

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Ryan Dankenbring",
      role: "Owner",
      imgSrc: "/ryan-1.jpeg",
      alt: "Owner Ryan Dankenbring",
    },

    // Add more team members here
  ];

  return (
    <>
      <Header />

      <main className="flex flex-col">
        <Container className="relative overflow-x-hidden overflow-y-clip flex flex-col py-24  lg:pt-32 lg:mb-16 bg-white/30">
          <Image
            className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] object-center object-scale-down md:object-cover -z-10"
            src="/bg-op.svg"
            alt=""
            width={2245}
            height={1636}
            unoptimized
          />

          <h1 className="text-4xl lg:text-5xl text-gray-700 mb-10 text-center">
            About Us
          </h1>
          <div className="text-gray-700 text-lg flex flex-col justify-center lg:flex-row lg:gap-10 lg:items-center">
            <div>
              <p className="text-lg my-8 max-w-2xl lg:max-w-xl">
                At our company, we transform spaces with unparalleled artistry
                and precision. Our dedication to delivering premium quality
                stone craftsmanship is unmatched, reflecting our commitment to
                excellence in every slab we handle. From fabrication to
                breathtaking installations, we handle each project with the
                upmost care.
              </p>
              <p className="">
                Let us help you with all your stone installation needs.
              </p>
              <div className="flex justify-center gap-6">
                <Button href="/about/#contact" className=" mt-8">
                  Contact us
                </Button>
                <Button variant="outline" href="/gallery" className=" mt-8">
                  See Our Work
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-8 lg:mt-0 md:mt-16 mx-auto">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-gray-700">
                  <div className="relative h-80 w-80">
                    <Image
                      src={member.imgSrc}
                      alt={member.alt}
                      className="w-full max-w-sm h-72 rounded-lg object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mt-2">{member.name}</h2>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
