"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Image {
  src: string;
  alt: string;
}

const images = [
  { img: "https://source.unsplash.com/random/1", alt: "Image 2" },
  { img: "https://source.unsplash.com/random/2", alt: "Image 3" },
  { img: "https://source.unsplash.com/random/3", alt: "Image 4" },
  { img: "https://source.unsplash.com/random/4", alt: "Image 5" },
  { img: "https://source.unsplash.com/random/5", alt: "Image 6" },
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
    <div className="w-full max-w-xl mx-auto relative h-72 rounded-xl">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-4 py-2 rounded-l z-10"
        onClick={prevImage}>
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
        onClick={nextImage}>
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
