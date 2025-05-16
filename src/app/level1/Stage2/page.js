import React from 'react';
import Level from '../../components/level.js'; 
import L1Data from '../../dialogues/L1.json';

const Page = () => {
    return (
        <div className="relative h-screen w-full">
            <Level char1Img={L1Data.stage2.SaitamaImage} char2Img={"/level/boy2.svg"} say1={L1Data.stage2.CharSay} say2={L1Data.stage2.PlayerSay} back={L1Data.stage2.back} riddle={L1Data.stage2.riddle} nextRoute={L1Data.stage2.nextRoute}/>
        </div>
    );
};

export default Page;