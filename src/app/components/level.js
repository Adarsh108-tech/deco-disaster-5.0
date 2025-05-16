'use client';
import React, { useState } from 'react';
import Modal1 from './firstModal';

const Level = ({ char1Img, char2Img, say1, say2, back, riddle , nextRoute  }) => {
  const CharScript = say1;
  const PlayerScript = say2;

  const [turn, setTurn] = useState("A");
  const [charIndex, setCharIndex] = useState(0);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [text, setText] = useState(CharScript[0]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (turn === "A") {
      if (playerIndex < PlayerScript.length) {
        setText(PlayerScript[playerIndex]);
        setPlayerIndex(playerIndex + 1);
        setTurn("B");
      } else if (charIndex >= CharScript.length) {
        setShowModal(true);
      }
    } else {
      if (charIndex + 1 < CharScript.length) {
        setCharIndex(charIndex + 1);
        setText(CharScript[charIndex + 1]);
        setTurn("A");
      } else if (playerIndex >= PlayerScript.length) {
        setShowModal(true);
      }
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
      <div className="absolute left-0 bottom-0 w-[50%] flex items-center">
        <img src={char1Img} alt="Character" className="w-[50%] h-auto" />
      </div>

      {/* Bubble and Text */}
      <div className="w-[55%] md:w-[70%] flex absolute justify-center items-center">
        <img
          src={turn === "A" ? "/level/bubble.svg" : "/level/bubble2.svg"}
          alt="Speech Bubble"
          className="w-full"
        />
        <div className="text-center absolute top-[20%] md:top-[25%] md:text-lg text-sm h-[50%] md:h-[45%] w-[55%] text-black font-semibold z-10">
          {text}
        </div>
      </div>

      {/* Player on the right */}
      <div className="absolute right-0 bottom-0 w-[50%] flex justify-end">
        <img src={char2Img} alt="Player" className="w-[50%] h-auto mb-2" />
      </div>

      {/* Modal */}
      {showModal && (
        <Modal1 setShowModal={setShowModal} riddle={riddle}  route={nextRoute}/>
      )}
    </div>
  );
};

export default Level;
