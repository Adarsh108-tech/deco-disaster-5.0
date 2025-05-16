import React from 'react';
import Level from '../../components/level.js'; 
import L1Data from '../../dialogues/L1.json';

const Page = () => {
    return (
        <div className="relative h-screen w-full">
            <Level char1Img={L1Data.stage1.NarutoImage} char2Img={"/level/boy2.svg"} say1={L1Data.stage1.CharSay} say2={L1Data.stage1.PlayerSay} back={L1Data.stage1.back} riddle={L1Data.stage1.riddle} nextRoute={L1Data.stage1.nextRoute}/>
        </div>
    );
};

export default Page;