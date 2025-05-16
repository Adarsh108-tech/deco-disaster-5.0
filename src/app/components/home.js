'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const videoRef = useRef(null);
  const reverseInterval = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);

  const handleMouseEnter = () => {
    if (reverseInterval.current) {
      clearInterval(reverseInterval.current);
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      reverseInterval.current = setInterval(() => {
        if (videoRef.current.currentTime <= 0.1) {
          clearInterval(reverseInterval.current);
          videoRef.current.currentTime = 0;
        } else {
          videoRef.current.currentTime -= 0.05;
        }
      }, 30);
    }
  };

  useEffect(() => {
    return () => {
      if (reverseInterval.current) clearInterval(reverseInterval.current);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setShowModalContent(true);
    }, 10); // delay for transition to trigger
  };

  const closeModal = () => {
    setShowModalContent(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // match transition duration
  };

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${isModalOpen ? 'backdrop-blur-md' : ''}`}>
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        loop={false}
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/back_video.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-4 md:p-6 flex justify-between items-center z-10">
        <img src="/assets/GGSIPU-Logo.svg" className="w-16 md:w-20" />
        <img src="/assets/ACM-logo.svg" className="w-16 md:w-20" />
      </nav>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row justify-between h-[80%] items-center px-6 md:px-24 md:h-full gap-8 text-white z-10">
        {/* Logo */}
        <div className="mb-4 md:mb-0 animate-float">
          <img className="h-52 md:h-96 mb-4 md:mb-0 hover:scale-110 transition-all duration-150 " src="/assets/decoLogo.svg" alt="Logo" />
        </div>

        {/* Hover Zone */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-64 md:h-full w-0 md:w-[40%]"
        />

        {/* Buttons */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-7">
          <Link className="font-lastshuriken px-6 py-2 text-base md:text-3xl bg-black text-red-600 border-4 border-[#901C17] text-center w-full md:w-80 transform skew-x-[-10deg] drop-shadow-[0_4px_6px_rgba(255,0,0,0.4)] -rotate-3 hover:skew-x-[0deg] hover:rotate-0 hover:scale-105 transition-all duration-150" href={"/registerNow"}>
            <span className="block transform skew-x-[10deg]">Register Now</span>
          </Link>

          <button
            onClick={openModal}
            className="font-lastshuriken drop-shadow-[0_4px_6px_rgba(255,0,0,0.4)] px-4 py-2 text-base md:text-3xl bg-black text-red-600 border-4 border-[#901C17] text-center w-full md:w-80 transform skew-x-[-10deg] hover:skew-x-[0deg] hover:rotate-0 hover:scale-105 transition-all duration-150"
          >
            <span className="block transform skew-x-[10deg]">ABOUT</span>
          </button>

          <Link href={"/leaderBoard"} className="font-lastshuriken drop-shadow-[0_4px_6px_rgba(255,0,0,0.4)] px-4 py-2 text-base md:text-3xl bg-black text-red-600 border-4 border-[#901C17] text-center w-full md:w-80 transform skew-x-[-10deg] rotate-3 hover:skew-x-[0deg] hover:rotate-0 hover:scale-105 transition-all duration-150">
            <span className="block transform skew-x-[10deg]">LEADERBOARD</span>
          </Link>
        </div>
      </div>

      {/* Quote */}
      <div className="absolute w-full bottom-4 left-1/2 transform -translate-x-1/2 md:flex justify-between">
        <div></div>
        <div className="w-[90%] md:w-[80%] text-center text-white z-10 text-sm md:text-base font-lastshuriken">
          “They said DECO couldn't be stopped—no one asked if it wanted to be.”
        </div>
        <div className="flex">
          <img src="/assets/youtube.svg" alt="YouTube" />
          <img src="/assets/instagram.svg" alt="Instagram" />
          <img src="/assets/facebook.svg" alt="Facebook" />
        </div>
      </div>

      {/* Modal with animation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
          <div
            className={`bg-black text-white p-6 md:p-10 rounded-lg border-4 border-[#901C17] w-[90%] md:w-[50%] relative transform transition-all duration-300 ease-out ${
              showModalContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-lastshuriken mb-4">The collapse Favors the bold</h2>
            <p className="text-base md:text-lg">
              DECO Disaster is a thrilling web-based puzzle game event hosted by the ACM Student Chapter. Participants
              solve riddles, interact with anime characters, and race against time. Think fast. Decode faster. Save the
              world.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
