import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      imgSrc: "https://source.unsplash.com/random",
      alt: "John Doe",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imgSrc: "https://source.unsplash.com/random",
      alt: "Jane Smith",
    },
    // Add more team members here
  ];

  return (
    <>
      <Header />
      <Container className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec mauris aliquam, nec lacinia nunc ultrices. Nulla facilisi.
        </p>
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 gap-4">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <img
                src={member.imgSrc}
                alt={member.alt}
                className="w-full h-auto rounded-lg"
              />
              <h2 className="text-xl font-bold mt-2">{member.name}</h2>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
