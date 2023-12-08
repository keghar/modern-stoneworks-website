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
      name: "John Doe",
      role: "CEO",
      imgSrc: "https://source.unsplash.com/random/person/",
      alt: "John Doe",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imgSrc: "https://source.unsplash.com/random/person",
      alt: "Jane Smith",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imgSrc: "https://source.unsplash.com/random/team",
      alt: "Jane Smith",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imgSrc: "https://source.unsplash.com/random/person",
      alt: "Jane Smith",
    },
    // Add more team members here
  ];

  return (
    <>
      <Header />

      <main className="flex flex-col">
        <Container className="relative overflow-x-hidden overflow-y-clip flex flex-col py-16 mb-6  lg:pt-32 lg:mb-16 ">
          <Image
            className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] object-center object-scale-down md:object-cover -z-10"
            src="/bg-op.svg"
            alt=""
            width={2245}
            height={1636}
            unoptimized
          />
          <div className="text-slate-700 text-lg flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-center">About</h1>
            <p className="text-lg mb-8">
              At our granite company, we transform spaces with unparalleled
              artistry and precision. Our dedication to delivering premium
              quality granite craftsmanship is unmatched, reflecting our
              commitment to excellence in every slab we handle. From countertops
              to breathtaking installations, our gallery showcases the sheer
              brilliance and versatility of granite, portraying the
              sophistication and quality of our workmanship.
            </p>
            <p className="text-center">
              Let us help you with all your stone installation needs.
            </p>
            <Button className="mx-auto mt-8">Contact us</Button>
          </div>
        </Container>
        <Container className="flex flex-col justify-center mb-6 py-16">
          <h2 className="text-4xl font-bold mb-8 text-slate-700 text-center">
            Our Team
          </h2>
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
        </Container>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
