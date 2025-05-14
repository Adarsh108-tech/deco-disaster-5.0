import React from 'react';

const Text = ({ closeModal }) => {
    const [userAnswer, setUserAnswer] = React.useState("");

    const handleSubmit = () => {
        alert(`Your answer: ${userAnswer}`);
        window.location.href = "http://localhost:3000";
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
                <div className="px-16 pt-20 text-[20px] font-bold leading-snug">
                    TO GAIN THE FIRST PART OF SAGE MODE, NARUTO MUST UNLOCK THE<br />
                    SCROLL OF NUMBERS HIDDEN DEEP<br />
                    WITHIN<br />
                    MOUNT MYOBOKU. BUT THE SCROLL IS<br />
                    SEALED WITH A CODE. HELP HIM<br />
                    DECIPHER IT!
                </div>

                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="mt-6 px-4 py-2 w-[400px] text-base text-black font-bold text-center rounded-md bg-[#f9f9f9] border border-gray-400 shadow-md outline-none"
                    placeholder="ENTER YOUR ANSWER"
                />

                <button
                    onClick={handleSubmit}
                    className="mt-4 px-8 py-2 bg-black text-red-500 text-base font-bold border border-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                    SUBMIT
                </button>

                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Text;
