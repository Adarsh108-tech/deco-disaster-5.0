import React from 'react';
import Level from '../components/level.js'; 
import L1Data from '../dialogues/L1.json';

const Page = () => {
    return (
        <div className="relative h-screen w-full">
            <Level char1Img={L1Data.stage3.SaitamaImage} char2Img={L1Data.stage3.PlayerImg} say1={L1Data.stage3.CharSay} say2={L1Data.stage3.PlayerSay} back={L1Data.stage3.back} riddle={L1Data.stage3.riddle} nextRoute={"/level2"}/>
        </div>
    );
};

export default Page;