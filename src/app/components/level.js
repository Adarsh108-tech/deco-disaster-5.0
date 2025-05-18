'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Level = ({ char1Img, char2Img, say1, say2, back, riddle, nextRoute }) => {
  const CharScript = say1;
  const PlayerScript = say2;

  const [turn, setTurn] = useState("A");
  const [charIndex, setCharIndex] = useState(0);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [fullText, setFullText] = useState(CharScript[0]);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const [userAnswer, setUserAnswer] = useState("");

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [fullText]);

  const handleClick = () => {
    // Show modal if both scripts are finished
    if (charIndex >= CharScript.length && playerIndex >= PlayerScript.length) {
      setShowModal(true);
      return;
    }

    // Alternate turn logic
    if (turn === "A") {
        if (charIndex < CharScript.length) {
        setFullText(CharScript[charIndex]);
        setCharIndex(charIndex + 1);
        setTurn("B");
      }
      
    } else {
      if (playerIndex < PlayerScript.length) {
        setFullText(PlayerScript[playerIndex]);
        setPlayerIndex(playerIndex + 1);
        setTurn("A");
      }
    }
  };

  const handleSubmit = () => {
    alert(`Your answer: ${userAnswer}`);
    if (nextRoute) {
      router.push(nextRoute);
    } else {
      console.warn("No route provided to Modal.");
    }
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden flex justify-center items-center"
      onClick={handleClick}
    >
      {/* Background */}
      <img
        src={back}
        alt="Background"
        className="absolute h-full w-full object-cover -z-10"
      />

      {/* Character on the left */}
      <motion.div
        className="absolute left-0 bottom-0 w-[50%] flex items-center"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={char1Img} alt="Character" className="w-[50%] h-auto" />
      </motion.div>

      {/* Speech Bubble */}
      <div className="w-[80%] md:w-[45%] flex absolute justify-center items-center">
        <img
          src={turn === "B" ? "/level/bubble.svg" : "/level/bubble2.svg"}
          alt="Speech Bubble"
          className="w-full"
        />
        <div className="text-center absolute top-[20%] md:top-[25%] md:text-lg text-xs h-[50%] md:h-[45%] w-[55%] text-black font-semibold z-10">
          {displayedText}
        </div>
      </div>

      {/* Player on the right */}
      <motion.div
        className="absolute right-0 bottom-0 w-[50%] flex justify-end"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src={char2Img} alt="Player" className="w-[50%] h-auto mb-2" />
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div
            className="relative flex flex-col items-center justify-center text-center text-black"
            style={{
              backgroundImage: "url('/level/question.svg')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '1100px',
              height: '700px',
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[45%] max-h-[25%] text-xs md:text-[15px] mb-6">
              {riddle}
            </div>

            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-[40%] h-8 text-center font-semibold text-xl rounded-md bg-white border border-gray-400 shadow outline-none"
              placeholder="ENTER YOUR ANSWER"
            />

            <button
              onClick={handleSubmit}
              className="mt-4 px-8 py-2 bg-black text-red-500 font-semibold border border-red-500 hover:bg-red-600 hover:text-white transition duration-300"
            >
              SUBMIT
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Level;
