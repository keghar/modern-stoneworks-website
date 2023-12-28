"use client";

// add width and height to next/image
import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Contact from "@/components/Contact";

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    { src: "/bath-photo-1.jpeg", alt: "bath" },
    { src: "/hero-photo.jpeg", alt: "kitchen" },
    { src: "/outdoor-kitchen-1.jpg", alt: "outdoor kitchen" },
    { src: "/vanity-photo-2.jpeg", alt: "vanity" },
    { src: "/waterfall-1.jpeg", alt: "waterfall" },
    { src: "/kitchen-photo-1.jpg", alt: "kitchen" },

    { src: "/kitchen-photo-2.jpeg", alt: "kitchen" },
    { src: "/shower-photo-1.jpeg", alt: "shower" },
    { src: "/outdoor-kitchen-2.jpeg", alt: "outdoor kitchen" },
    { src: "/kitchen-photo-3.jpeg", alt: "kitchen" },
    { src: "/kitchen-photo-4.jpeg", alt: "kitchen" },
    { src: "/vanity-photo-3.jpeg", alt: "vanity" },
    { src: "/kitchen-photo-5.jpeg", alt: "kitchen" },
    { src: "/shower-photo-3.jpeg", alt: "shower" },
    { src: "/vanity-photo-5.jpeg", alt: "vanity" },
    { src: "/shower-photo-2.jpeg", alt: "shower" },
    { src: "/waterfall-2.jpeg", alt: "waterfall" },
  ];

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col justify-center items-center text-gray-700 py-24">
          <h1 className="text-4xl mb-8">Check Out Our Work</h1>
          <p className="mb-10 px-4">
            At our granite company, we transform spaces with unparalleled
            artistry and precision. Our dedication to delivering premium quality
            granite craftsmanship is unmatched, reflecting our commitment to
            excellence in every slab we handle. From countertops to breathtaking
            installations, our gallery showcases the sheer brilliance and
            versatility of granite, portraying the sophistication and quality of
            our workmanship.
          </p>

          <div className="">
            <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={image.src} className="w-full max-h-80">
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    height={150}
                    width={400}
                    className="object-cover rounded-xl h-80"
                    onClick={() => handleImageClick(image.src)}
                  />
                </div>
              ))}
            </div>
          </div>
          {selectedImage && (
            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80">
              <div className="relative w-screen md:w-full md:max-h-fit">
                <Image
                  onClick={handleCloseModal}
                  src={selectedImage}
                  alt="Selected Image"
                  height={500}
                  width={500}
                  className="max-w-full max-h-96 object-contain md:max-h-fit mx-auto md:my-8 lg:my-10"
                />
                <button
                  className="absolute bottom-8 left-1/2 text-white"
                  onClick={handleCloseModal}
                  style={{ zIndex: 3 }}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Contact />
      <Footer />
    </>
  );
};

export default GalleryPage;
