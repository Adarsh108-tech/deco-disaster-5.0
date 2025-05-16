import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const LeaderBoard = () => {
  // Data for leaderboard entries
  const leaderboardData = [
    { position: 1, name: "Rinkaj", points: "100" },
    { position: 2, name: "Adarsh", points: "80" },
    { position: 3, name: "Adarsh", points: "70" },
    { position: 4, name: "A", points: " pts" },
    { position: 5, name: "B", points: " pts" },
    { position: 6, name: "C", points: " pts" },
    { position: 7, name: "D", points: " pts" },
    { position: 8, name: "E", points: " pts" },
    { position: 9, name: "F", points: " pts" },
    { position: 10, name: "G", points: " pts" },
  ];

  return (
    
    <main className="bg-black flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full h-full max-w-[1920px] max-h-[1080px] relative fixed">
        {/* Background image with blur effect */}
        <img
          className="absolute w-full h-full top-0 left-0 blur-[3.5px] fixed object-cover"
          alt="Background"
          src="https://c.animaapp.com/macop9gcz0nwau/img/5a177b84-e98e-4e98-998d-59980388ca23.png"
        />

        {/* Overlay with blur */}
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000073] backdrop-blur-[2.25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.25px)_brightness(100%)]" />

        <div className="relative mb-50 w-full h-full flex flex-col items-center">
          {/* Title */}
          <h1 className="mt-[54px] [text-shadow:0px_11px_4px_#000000] [-webkit-text-stroke:1px_#000000] [font-family:'Jujutsu_Kaisen-Regular',Helvetica] font-normal text-[#9e0505] text-[70px] text-center tracking-[2.00px] leading-[1.2] whitespace-nowrap">
            LEADERBOARD
          </h1>

          {/* Top 3 Winners */}
          <div className="flex justify-center gap-8 mt-16 w-full">
            {/* Second Place */}
            <Card className="w-[300px] h-[200px] border-0 bg-transparent">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[183px] bottom-0 left-0 rounded-2xl [background:linear-gradient(24deg,rgba(239,238,238,0.32)_0%,rgba(239,238,238,0.06)_100%)]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-8">
                  <div className="text-white text-4xl font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[1].name}</div>
                  <div className="text-[#fffbfb] text-[40px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[1].points}</div>
                  <div className="absolute -top-10 w-[82px] h-20 shadow-[0px_7px_0.4px_#000000]">
                    <div className="relative w-[88px] h-[88px] -left-1 bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1-2.svg)] bg-[100%_100%]">
                      <div className="absolute inset-0 flex items-center justify-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-gray-2 text-[55px]">2</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* First Place */}
            <Card className="w-[465px] h-[235px] border-0 bg-transparent">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[190px] bottom-0 left-0 bg-[#41363680] rounded-2xl border-[7px] border-dashed border-[#c0551b]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-8">
                  <div className="text-white text-5xl font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[0].name}</div>
                  <div className="text-[#fffbfb] text-[45px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]"> {leaderboardData[0].points}</div>
                  <div className="absolute -top-12 w-[82px] h-20 shadow-[0px_7px_0.4px_#000000]">
                    <div className="relative w-[88px] h-[88px] -left-1 bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1-1.svg)] bg-[100%_100%]">
                      <div className="absolute inset-0 flex items-center justify-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-gray-2 text-[65px]">1</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Place */}
            <Card className="w-[300px] h-[200px] border-0 bg-transparent">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[183px] bottom-0 left-0 rounded-2xl [background:linear-gradient(12deg,rgba(239,238,238,0.32)_0%,rgba(239,238,238,0.06)_100%)]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-8">
                  <div className="text-white text-4xl font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[2].name}</div>
                  <div className="text-[#fffbfb] text-[40px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[2].points}</div>
                  <div className="absolute -top-10 w-[82px] h-20 shadow-[0px_7px_0.4px_#000000]">
                    <div className="relative w-[88px] h-[88px] -left-1 bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1.svg)] bg-[100%_100%]">
                      <div className="absolute inset-0 flex items-center justify-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-gray-2 text-[55px]">3</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Positions 4-10 */}
          <div className="w-[656px] mt-10  ">
            {leaderboardData.slice(3).map((entry, index) => (
              <Card
                key={entry.position}
                className="w-full h-[60px] mb-4 rounded-[30px] border-0 bg-[#ffffff1a]"
              >
                <CardContent className="relative w-full h-full flex items-center justify-between pt-50 px-6">
                  <Badge className="w-[42px] h-10 p-0 bg-transparent">
                    <div className="relative w-10 h-10 bg-[#d9d9d9] rounded-[20px] flex items-center justify-center">
                      <div className="[text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-gray-2 text-[30px]">
                        {entry.position}
                      </div>
                    </div>
                  </Badge>
                  <div className="[font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-white text-[35px]">
                    {entry.name}
                  </div>
                  <div className="[font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-[#fffbfb] text-[30px]">
                    {entry.points}
                  </div>
                </CardContent>
              </Card>
            ))}
            
          </div>
        </div>

        {/* Decorative images */}
        <img
          className="absolute w-[927px] h-[1078px] top-[15px] left-[0px] object-cover"
          alt="Decorative left"
          src="https://c.animaapp.com/macop9gcz0nwau/img/picsart-25-04-23-00-35-47-789.png"
        />
        <img
          className="absolute w-[899px] h-[1077px] top-[15px] right-[0px] object-cover"
          alt="Decorative right"
          src="https://c.animaapp.com/macop9gcz0nwau/img/picsart-25-04-23-00-36-27-564-1.png"
        />
      </div>
    </main>
  );
};
export default LeaderBoard;