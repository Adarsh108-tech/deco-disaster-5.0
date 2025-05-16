'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Modal1 = ({ setShowModal, riddle, route }) => {
  const [userAnswer, setUserAnswer] = React.useState("");
  const router = useRouter();

  const handleSubmit = () => {
    alert(`Your answer: ${userAnswer}`);
    if (route) {
      router.push(route); // ✅ uses the provided route prop
    } else {
      console.warn("No route provided to Modal1.");
    }
  };

  return (
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
      >
        <div className="w-[45%] max-h-[25%] text-xl mb-6">
          {riddle}
        </div>

        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-[40%] h-16 text-center font-semibold text-xl rounded-md bg-white border border-gray-400 shadow outline-none"
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
  );
};

export default Modal1;
