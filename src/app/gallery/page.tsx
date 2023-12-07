"use client";

// add width and height to next/image
import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    { src: "https://source.unsplash.com/random", alt: "Image 1" },
    { src: "https://source.unsplash.com/random", alt: "Image 2" },
    { src: "https://source.unsplash.com/random", alt: "Image 3" },
    { src: "https://source.unsplash.com/random", alt: "Image 4" },
    { src: "https://source.unsplash.com/random", alt: "Image 5" },
    { src: "https://source.unsplash.com/random", alt: "Image 6" },
    { src: "https://source.unsplash.com/random", alt: "Image 7" },
    { src: "https://source.unsplash.com/random", alt: "Image 8" },
    { src: "https://source.unsplash.com/random", alt: "Image 9" },
    { src: "https://source.unsplash.com/random", alt: "Image 10" },
  ];

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-8">Check Out Our Work</h1>
          <p className="mb-10 px-4">
            At our granite company, we transform spaces with unparalleled
            artistry and precision. Our dedication to delivering premium quality
            granite craftsmanship is unmatched, reflecting our commitment to
            excellence in every slab we handle. From countertops to breathtaking
            installations, our gallery showcases the sheer brilliance and
            versatility of granite, portraying the sophistication and quality of
            our workmanship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="h-screen overflow-y-scroll">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  onClick={() => handleImageClick(image.src)}
                />
              ))}
            </div>
          </div>
          {selectedImage && (
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30">
              <div className="relative w-screen">
                <Image
                  src={selectedImage}
                  alt="Selected Image"
                  height={500}
                  width={500}
                  className="max-w-screen max-h-fit mx-auto md:my-8 lg:my-16"
                />
                <button
                  className="absolute top-4 right-4 text-white"
                  onClick={handleCloseModal}
                  style={{ zIndex: 1 }}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default GalleryPage;
