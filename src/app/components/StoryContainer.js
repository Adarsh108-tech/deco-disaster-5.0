"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const StoryContainer = ({ storyContent }) => {
  const [storyChunks, setStoryChunks] = useState([""]);
  const [showButton, setShowButton] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(false);
  const [storyFinished, setStoryFinished] = useState(false);
  const counter = useRef(0);

  const router = useRouter();
  const REDIRECT_URL = "/level1/Stage1";

  const onGameStarted = () => {
    setGameStarted(true);
    setTimeout(() => setStoryFinished(true), 1500);
  };

  const onClickHandler = () => {
    if (!isFirstClick) return setIsFirstClick(true);
    counter.current++;
    if (counter.current <= storyContent.length) {
      const newChunks = storyContent.slice(0, counter.current);
      setStoryChunks(newChunks);
    }

    if (counter.current > storyContent.length) {
      setShowButton(true);
    }
  };

  const onEndedHandler = () => {
    router.push(REDIRECT_URL);
  };

  return (
    <div
      className="w-full h-full flex flex-row items-center"
      onClick={() => setTimeout(onClickHandler, 150)}
    >
      {isFirstClick && !storyFinished && (
        <>
          <div className="h-full w-[50%] sm:w-[45%] md:w-[30%] lg:w-[25%] flex flex-col justify-end">
            <div
              className={`w-full h-[70%] sm:h-[80%] md:h-[80%] lg:h-[90%] mx-5 ${
                gameStarted ? "grow-and-slide-right" : "slide-right-animation"
              } flex flex-col justify-end`}
            >
              <img
                src={"/assets/curator.png"}
                alt="Curator"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="w-[75%] px-5 sm:w-[80%] md:w-[65%] lg:w-[65%] h-[80%] sm:h-[50%] md:h-[60%] lg:h-[70%] flex justify-center items-center">
            <div className="h-full w-full flex flex-col items-center justify-center py-2">
              {storyChunks.map((chunk, index) => (
                <div
                  key={index}
                  className={gameStarted ? "grow-and-slide-top" : ""}
                >
                  <div
                    className={`text-white text-xs sm:text-sm md:text-base lg:text-xl py-2 fade-in-text ${plus_jakarta_sans.className}`}
                  >
                    {chunk}
                  </div>
                </div>
              ))}
              {showButton && (
                <div className="w-[90%] flex justify-end pt-3">
                  <div
                    className={`start-btn w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] cursor-pointer ${
                      gameStarted
                        ? "grow-and-slide-left"
                        : "start-btn-animation"
                    }`}
                    onClick={onGameStarted}
                  >
                    <img
                      src={"/assets/start_btn.svg"}
                      alt="Start Game"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {storyFinished && (
        <div className="w-full h-full">
          <video
            onEnded={onEndedHandler}
            controls={false}
            autoPlay
            className="w-full h-full object-cover"
            muted
          >
            <source src="/assets/bg_vid.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default StoryContainer;
