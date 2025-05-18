"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function Dialogue({
  background,
  leftCharacterImage,
  rightCharacterImage,
  leftDialogueImage,
  rightDialogueImage,
  dialogues = [],
  nextRoute = "/map",
}) {
  const [step, setStep] = useState(0);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(-1);
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 1000),
      setTimeout(() => setStep(3), 1800),
      setTimeout(() => setCurrentDialogueIndex(0), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (currentDialogueIndex >= 0 && currentDialogueIndex < dialogues.length) {
      const current = dialogues[currentDialogueIndex];
      setIsTyping(true);

      if (current.speaker === "left") setLeftText("");
      else setRightText("");

      let index = 0;
      const interval = setInterval(() => {
        const char = current.text.charAt(index);
        if (current.speaker === "left") {
          setLeftText((prev) => prev + char);
        } else {
          setRightText((prev) => prev + char);
        }
        index++;
        if (index >= current.text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [currentDialogueIndex]);

  const handleClick = () => {
    if (isTyping) {
      const fullText = dialogues[currentDialogueIndex].text;
      if (dialogues[currentDialogueIndex].speaker === "left") {
        setLeftText(fullText);
      } else {
        setRightText(fullText);
      }
      setIsTyping(false);
      return;
    }

    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex((prev) => prev + 1);
    } else {
      router.push(nextRoute);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-black relative overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={background}
        alt="background"
        className="absolute w-full h-full object-cover opacity-60 blur-[2px]"/>
      {/* Left Character */}
      <motion.div
        initial={{ x: "-50%" }} 
        animate={{ x: step >= 2 ? "0%" : "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 z-10 flex flex-col items-start"
      >
        {dialogues[currentDialogueIndex]?.speaker === "left" && (
          <motion.div
            key={`left-${currentDialogueIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mb-[-6em] ml-16 sm:ml-24 md:ml-36 lg:ml-48"
          >
            <img
              src={leftDialogueImage}
              alt="Left Dialogue"
              className="w-[70vw] sm:w-[60vw] md:w-[45vw] max-w-[36rem]"
            />
            <div className="absolute inset-0 px-8 py-6 flex items-center justify-end text-black text-sm sm:text-base md:text-lg font-semibold text-left whitespace-pre-wrap">
              {leftText}
            </div>
          </motion.div>
        )}
        <img
          src={leftCharacterImage}
          alt="Left Character"
          className="h-[20vh] sm:h-[40vh] md:h-[55vh]"
        />
      </motion.div>
      {/* Right Character */}
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: step >= 3 ? "0%" : "50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-10 flex flex-col items-end">
        {dialogues[currentDialogueIndex]?.speaker === "right" && (
          <motion.div
            key={`right-${currentDialogueIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mb-[-6em] mr-8 sm:mr-12 md:mr-20"
          >
            <img
              src={rightDialogueImage}
              alt="Right Dialogue"
              className="w-[90vw] sm:w-[60vw] md:w-[55vw] lg:w-[42rem] max-w-[36rem]"
            />
            <div className="absolute inset-0 px-8 py-6 flex items-center justify-end text-black text-sm sm:text-base md:text-lg font-semibold text-right whitespace-pre-wrap">
              {rightText}
            </div>
          </motion.div>
        )}
        <img
          src={rightCharacterImage}
          alt="Right Character"
          className="h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh]"
        />
      </motion.div>
      {currentDialogueIndex >= 0 && (
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-20">
          <img
            src="/assets/start.png"
            alt="Click to Continue"
            className="w-[40vw] max-w-[200px] sm:w-[30vw] md:w-[200px] animate-fade-in"
          />
        </div>
      )}
    </div>
  );
}
