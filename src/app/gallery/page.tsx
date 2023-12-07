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
    { src: "https://source.unsplash.com/random/1", alt: "Image 1" },
    { src: "https://source.unsplash.com/random/2", alt: "Image 2" },
    { src: "https://source.unsplash.com/random/3", alt: "Image 3" },
    { src: "https://source.unsplash.com/random/4", alt: "Image 4" },
    { src: "https://source.unsplash.com/random/5", alt: "Image 5" },
    { src: "https://source.unsplash.com/random/6", alt: "Image 6" },
    { src: "https://source.unsplash.com/random/7", alt: "Image 7" },
    { src: "https://source.unsplash.com/random/8", alt: "Image 8" },
    { src: "https://source.unsplash.com/random/9", alt: "Image 9" },
    { src: "https://source.unsplash.com/random/10", alt: "Image 10" },
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

          <div className="">
            <div className="h-screen md:h-full overflow-y-scroll md:overflow-y-visible grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="max-h-48"
                  onClick={() => handleImageClick(image.src)}
                />
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
                  className="max-w-screen max-h-fit mx-auto md:my-8 lg:my-10"
                />
                <button
                  className="absolute top-4 right-4 text-white mx-auto"
                  onClick={handleCloseModal}
                  style={{ zIndex: 3 }}>
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
