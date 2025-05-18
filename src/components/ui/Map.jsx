"use client";

import { useState, useEffect } from "react";

export function Map() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // FETCH RANDOM IMAGES FROM BACKEND

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const res = await fetch("");     
  //       const data = await res.json();
  //       setImages(data.images); // set the array of 3 random images
  //     } catch (error) {
  //       console.error("Error fetching images:", error);
  //     }
  //   };

  //   fetchImages();
  // }, []);


  // MOCK FETCH FOR TESTING
   useEffect(() => {
    const mockFetch = async () => {
      const allImages = [
        { src: "/assets/map1.jpg", alt: "Map 1" },
        { src: "/assets/map2.jpg", alt: "Map 2" },
        { src: "/assets/map3.jpg", alt: "Map 3" },
        { src: "/assets/background.png", alt: "Background 1" },
        { src: "/assets/background2.jpg", alt: "Background 2" },
      ];

      const shuffled = [...allImages].sort(() => 0.5 - Math.random());
      const randomImages = shuffled.slice(0, 3);

      await new Promise((res) => setTimeout(res, 500));
      setImages(randomImages);
    };

    mockFetch();
  }, []);



  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <p>Loading images...</p>;
  }

  return (
    <div className="w-full mt-10px px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center relative">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:scale-120 transition z-10"
      >
        ‹
      </button>

      <div className="w-full max-w-[600px] lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[400px] sm:w-[400px] sm:h-[400px] aspect-[4/3]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:scale-120 transition z-10"
      >
        ›
      </button>
    </div>
  );
}
