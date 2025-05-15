"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ComicScene() {
  const [step, setStep] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      router.push("/r1s1-next");
    }
  };

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setShowContinue(true);
      }, 1000); 
      return () => clearTimeout(timer);
    } else {
      setShowContinue(false); 
    }
  }, [step]);

  return (
    <div
      className="w-screen h-screen bg-black relative cursor-pointer overflow-hidden"
      onClick={handleClick}>
      <img
        src="/assets/background2.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover opacity-60 blur-[2px]"/>

      <AnimatePresence>
        {(step === 1 || step === 2) && (
          <motion.div
            key="left"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute bottom-0 left-2 sm:left-4 md:left-10 z-10 flex flex-col items-start">
            <div className="relative mb-[-5em] sm:mb-[-8em] md:mb-[-12em] lg:mb-[-20em] md:left-36 lg:left-36 ml-2 sm:ml-24">
              <img
                src="/assets/dialogue1.png"
                alt="Left Dialogue"
                className="w-[70vw] sm:w-[60vw] md:w-[45vw] max-w-[36rem]"/>
            </div>
            <img
              src="/assets/charac1.png"
              alt="Left Character"
              className="h-[20vh] sm:h-[40vh] md:h-[55vh]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {step === 2 && (
          <motion.div
            key="right"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute bottom-0 right-2 sm:right-4 md:right-10 z-10 flex flex-col items-end">
            <div className="relative bottom-[100%] sm:mb-[-1em] md:mb-[-3em] lg:mb-[-8em] lg:mr-4 mr-2 sm:mr-1">
              <img
                src="/assets/dialogue2.png"
                alt="Right Dialogue"
                className="w-[90vw] sm:w-[60vw] md:w-[55vw] lg:w-[42rem] max-w-[36rem]"/>
            </div>
            <img
              src="/assets/charac2.png"
              alt="Right Character"
              className="h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh]"/>
          </motion.div>
        )}
      </AnimatePresence>

      {showContinue && (
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-20">
          <img
            src="/assets/start.png"
            alt="Click to Continue"
            className="w-[40vw] max-w-[200px] sm:w-[30vw] md:w-[200px] animate-fade-in"/>
        </div>
      )}
    </div>
  );
}
