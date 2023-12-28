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
          <div className="text-gray-700 text-lg flex flex-col justify-center">
            <h1 className="text-4xl mb-4 text-center">About</h1>
            <p className="text-lg my-8">
              At our company, we transform spaces with unparalleled artistry and
              precision. Our dedication to delivering premium quality stone
              craftsmanship is unmatched, reflecting our commitment to
              excellence in every slab we handle. From fabrication to
              breathtaking installations, we handle each project with the upmost
              care.
            </p>
            <p className="text-center">
              Let us help you with all your stone installation needs.
            </p>
            <div className="flex">
              <Button href="/about/#contact" className="mx-auto mt-8">
                Contact us
              </Button>
              <Button
                variant="outline"
                href="/gallery"
                className="mx-auto mt-8">
                See Our Work
              </Button>
            </div>
          </div>
        </Container>
        <Container className="flex flex-col justify-center mb-6 py-16 text-gray-700">
          <h2 className="text-4xl mb-8 text-gray-700 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <Image
                  src={member.imgSrc}
                  alt={member.alt}
                  className="w-full max-w-sm h-72 rounded-lg object-cover"
                  width={100}
                  height={100}
                />
                <h2 className="text-xl font-bold mt-2">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
          <div id="contact"></div>
        </Container>

        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
