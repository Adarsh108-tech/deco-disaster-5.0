
// export default Level;
'use client';

import React, { useEffect, useState, useRef } from 'react';

const Level = () => {
    const [showBoy1, setShowBoy1] = useState(false);
    const [showBubble1, setShowBubble1] = useState(false);
    const [showBoy2, setShowBoy2] = useState(false);
    const [showBubble2, setShowBubble2] = useState(false);

    const boy1Ref = useRef(null);
    const boy2Ref = useRef(null);

    const [boy1Dims, setBoy1Dims] = useState({ top: 0, left: 0, width: 0, height: 0 });
    const [boy2Dims, setBoy2Dims] = useState({ top: 0, left: 0, width: 0, height: 0 });

    // Show boy1 and bubble1
    useEffect(() => {
        setShowBoy1(true);
        const bubble1Timer = setTimeout(() => setShowBubble1(true), 300);

        // Trigger boy2 after bubble1
        const boy2Timer = setTimeout(() => setShowBoy2(true), 1300);
        const bubble2Timer = setTimeout(() => setShowBubble2(true), 1600);

        return () => {
            clearTimeout(bubble1Timer);
            clearTimeout(boy2Timer);
            clearTimeout(bubble2Timer);
        };
    }, []);

    // Update boy1 position
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

    // Update boy2 position
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

    const bubbleText1 = `Welcome to Level 1! huwqegufbwbf ,
Be smart,
be quick,
and good luck!`;

    const bubbleText2 = `Hey! I'm here too!
Let's finish this level together!`;

    return (
        <div className="relative h-screen w-full overflow-hidden">
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
            {showBubble1 && (
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
                            <p className="w-full m-0">{bubbleText1}</p>
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
            {showBubble2 && (
                <div
                    className="absolute"
                    style={{
                        top: `calc(100vh - ${boy2Dims.height + 20}px)`,
                        left: `${boy2Dims.left - 480 - 50}px`, // position bubble on the left of boy2
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
                            <p className="w-full m-0">{bubbleText2}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level;

