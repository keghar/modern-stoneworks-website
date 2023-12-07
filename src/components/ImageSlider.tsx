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
  { img: "https://source.unsplash.com/random", alt: "Image 4" },
  { img: "https://source.unsplash.com/random", alt: "Image 5" },
  { img: "https://source.unsplash.com/random", alt: "Image 6" },
  { img: "https://source.unsplash.com/random", alt: "Image 7" },
  { img: "https://source.unsplash.com/random", alt: "Image 8" },
  { img: "https://source.unsplash.com/random", alt: "Image 9" },
  { img: "https://source.unsplash.com/random", alt: "Image 10" },
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
    <div className="w-screen max-w-xl mx-auto relative h-72 rounded-xl">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-l z-10"
        onClick={prevImage}>
        chevron_left
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-r z-10"
        onClick={nextImage}>
        chevron_right
      </button>
      <Image
        className=" object-cover w-full"
        src={images[currentImage].img}
        alt={`Slider Image ${currentImage + 1}`}
        fill
      />
    </div>
  );
};

export default ImageSlider;
