"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Image {
  src: string;
  alt: string;
}

const images = [
  { img: "/vanity-photo-2.jpeg", alt: "vanity" },
  { img: "/kitchen-photo-2.jpeg", alt: "kitchen" },
  { img: "/shower-photo-1.jpeg", alt: "shower" },
  { img: "/bath-photo-1.jpeg", alt: "bath" },
  { img: "/vanity-photo-4.jpeg", alt: "vanity" },
  { img: "/vanity-photo-3.jpeg", alt: "vanity" },
  { img: "/outdoor-kitchen-1.jpg", alt: "Outdoor Kitchen" },
];

const ImageSlider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Define variables for each image's src and alt tags

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl md:max-w-2xl mx-auto relative h-96 md:h-[500px] rounded-xl">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-4 py-2 rounded-l z-10"
        onClick={prevImage}
        aria-label="Previous">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white px-4 py-2 rounded-r z-10"
        onClick={nextImage}
        aria-label="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <Image
        className=" object-cover w-full rounded-xl"
        src={images[currentImage].img}
        alt={`Slider Image ${currentImage + 1}`}
        fill
      />
    </div>
  );
};

export default ImageSlider;
