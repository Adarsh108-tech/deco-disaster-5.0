'use client';

import React, { useEffect, useState, useRef } from 'react';

const Level = () => {
    const boy1Ref = useRef(null);
    const boy2Ref = useRef(null);

    const [boy1Dims, setBoy1Dims] = useState({ top: 0, left: 0, width: 0, height: 0 });
    const [boy2Dims, setBoy2Dims] = useState({ top: 0, left: 0, width: 0, height: 0 });

    const bubbleText1Arr = [
        `Welcome to Level 1! sdmfibwejbfbqwern ,
        Let's get started! iehibrvbjhebhvbebr ,
        Let's get started! iehibrvbjhebhvbebr ,
        Let's get started! iehibrvbjhebhvbebr ,
        Let's get started! iehibrvbjhebhvbebr`,
        "Be smart, be quick, and good luck!",
        "You're doing great! Keep it up!"
    ];

    const bubbleText2Arr = [
        "Hey! I'm here too!",
        "Let's finish this level together!",
        "We're an awesome team!"
    ];

    const [showBoy1, setShowBoy1] = useState(false);
    const [showBoy2, setShowBoy2] = useState(false);

    const [currentTurn, setCurrentTurn] = useState('boy1'); // alternates between 'boy1' and 'boy2'
    const [step, setStep] = useState(0); // tracks dialogue index

    const maxSteps = Math.min(bubbleText1Arr.length, bubbleText2Arr.length);

    // Show boys and initial bubbles
    useEffect(() => {
        setShowBoy1(true);
        const bubble1Timer = setTimeout(() => {
            setShowBoy2(true);
        }, 800);
        return () => clearTimeout(bubble1Timer);
    }, []);

    // Track positions
    useEffect(() => {
        const updateBoy1Position = () => {
            if (boy1Ref.current) {
                const rect = boy1Ref.current.getBoundingClientRect();
                setBoy1Dims({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                });
            }
        };
        updateBoy1Position();
        window.addEventListener('resize', updateBoy1Position);
        return () => window.removeEventListener('resize', updateBoy1Position);
    }, [showBoy1]);

    useEffect(() => {
        const updateBoy2Position = () => {
            if (boy2Ref.current) {
                const rect = boy2Ref.current.getBoundingClientRect();
                setBoy2Dims({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                });
            }
        };
        updateBoy2Position();
        window.addEventListener('resize', updateBoy2Position);
        return () => window.removeEventListener('resize', updateBoy2Position);
    }, [showBoy2]);

    // Handle any click (left/right)
    const handleAdvance = (e) => {
        e.preventDefault();
        if (step >= maxSteps) return;

        // Alternate turns
        setCurrentTurn((prev) => (prev === 'boy1' ? 'boy2' : 'boy1'));

        // Only increment step after boy2 speaks
        if (currentTurn === 'boy2') {
            setStep((prev) => prev + 1);
        }
    };

    return (
        <div
            className="relative h-screen w-full overflow-hidden"
            onClick={handleAdvance}
            onContextMenu={handleAdvance}
        >
            {/* Background */}
            <img
                src="/level/1.svg"
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Boy 1 */}
            <img
                ref={boy1Ref}
                src="/level/boy1.svg"
                alt="Boy 1"
                className={`absolute bottom-0 transition-all duration-300 ease-in-out ${
                    showBoy1 ? 'left-[20px]' : '-left-40'
                } h-[75vh] sm:h-[75vh] md:h-[85vh] lg:h-[80vh]`}
            />

            {/* Bubble 1 */}
            {currentTurn === 'boy1' && step < maxSteps && (
                <div
                    className="absolute"
                    style={{
                        top: `calc(100vh - ${boy1Dims.height + 20}px)`,
                        left: `${boy1Dims.left + boy1Dims.width + 50}px`,
                        width: 'min(95vw, 480px)',
                        height: `${boy1Dims.height * 0.52}px`,
                    }}
                >
                    <div className="relative w-full h-full">
                        <img
                            src="/level/bubble.svg"
                            alt="Text Box 1"
                            className="w-full h-full object-contain"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center px-4 py-2 text-xs sm:text-sm md:text-base text-black text-center leading-tight overflow-hidden"
                            style={{ whiteSpace: 'pre-wrap' }}
                        >
                            <p className="w-full m-0">{bubbleText1Arr[step]}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Boy 2 */}
            <img
                ref={boy2Ref}
                src="/level/boy2.svg"
                alt="Boy 2"
                className={`absolute bottom-0 transition-all duration-300 ease-in-out ${
                    showBoy2 ? 'right-[20px]' : '-right-40'
                } h-[75vh] sm:h-[75vh] md:h-[85vh] lg:h-[80vh]`}
            />

            {/* Bubble 2 */}
            {currentTurn === 'boy2' && step < maxSteps && (
                <div
                    className="absolute"
                    style={{
                        top: `calc(100vh - ${boy2Dims.height + 20}px)`,
                        left: `${boy2Dims.left - 480 - 50}px`,
                        width: 'min(95vw, 480px)',
                        height: `${boy2Dims.height * 0.52}px`,
                    }}
                >
                    <div className="relative w-full h-full">
                        <img
                            src="/level/bubble2.svg"
                            alt="Text Box 2"
                            className="w-full h-full object-contain"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center px-4 py-2 text-xs sm:text-sm md:text-base text-black text-center leading-tight overflow-hidden"
                            style={{ whiteSpace: 'pre-wrap' }}
                        >
                            <p className="w-full m-0">{bubbleText2Arr[step]}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level;
