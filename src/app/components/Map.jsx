"use client";

import { useState } from "react";

const images = [
  { src: "/assets/map1.jpg", alt: "Image 1" },
  { src: "/assets/background2.jpg", alt: "Image 2" },
  { src: "/assets/background.png", alt: "Image 3" },
];

export function Map() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full mt-10px px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center relative">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:scale-120 transition z-10">
        ‹
      </button>

      <div className="w-full max-w-[600px] lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[400px] sm:w-[400px] sm:h-[400px] aspect-[4/3]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain rounded-lg shadow-lg"/>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:scale-120 transition z-10">
        ›
      </button>
    </div>
  );
}
