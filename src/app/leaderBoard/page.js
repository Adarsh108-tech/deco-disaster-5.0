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
          <h1 className="mt-[32px] mb-[30px] [text-shadow:0px_8px_3px_#000000] [-webkit-text-stroke:1px_#000000] [font-family:'Jujutsu_Kaisen-Regular',Helvetica] font-normal text-[#9e0505] text-[28px] sm:text-[36px] md:text-[48px] text-center tracking-[2.00px] leading-[1.2] whitespace-nowrap px-2">
            LEADERBOARD
          </h1>

          {/* Top 3 Winners */}
          {/* Mobile: 1, 2, 3 vertical; Desktop: 2, 1, 3 horizontal */}
          <div className="flex flex-col sm:hidden gap-2 mt-4 w-full items-center px-2">
            {/* First Place */}
            <Card className="w-full max-w-[220px] h-[100px] border-0 bg-transparent mb-2 transition-all duration-200 hover:bg-[#ffffff33] hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[80%] bottom-0 left-0 bg-[#41363680] rounded-2xl border-[3px] border-dashed border-[#c0551b]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-2">
                  <div className="text-white text-xl font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[0].name}</div>
                  <div className="text-[#fffbfb] text-[18px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]"> {leaderboardData[0].points}</div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 z-10 flex items-center justify-center">
                    <div className="bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1-1.svg)] bg-cover bg-center aspect-square min-w-[36px] w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-lg">
                      <span className="block w-full text-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-black text-[22px]">1</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Second Place */}
            <Card className="w-full max-w-[180px] h-[90px] border-0 bg-transparent mb-2 transition-all duration-200 hover:bg-[#ffffff33] hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[80%] bottom-0 left-0 rounded-2xl [background:linear-gradient(24deg,rgba(239,238,238,0.32)_0%,rgba(239,238,238,0.06)_100%)]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-2">
                  <div className="text-white text-lg font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[1].name}</div>
                  <div className="text-[#fffbfb] text-[16px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[1].points}</div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 z-10 flex items-center justify-center">
                    <div className="bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1-2.svg)] bg-cover bg-center aspect-square min-w-[32px] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-lg">
                      <span className="block w-full text-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-black text-[18px]">2</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Third Place */}
            <Card className="w-full max-w-[180px] h-[90px] border-0 bg-transparent transition-all duration-200 hover:bg-[#ffffff33] hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[80%] bottom-0 left-0 rounded-2xl [background:linear-gradient(12deg,rgba(239,238,238,0.32)_0%,rgba(239,238,238,0.06)_100%)]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-2">
                  <div className="text-white text-lg font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[2].name}</div>
                  <div className="text-[#fffbfb] text-[16px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[2].points}</div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 z-10 flex items-center justify-center">
                    <div className="bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1.svg)] bg-cover bg-center aspect-square min-w-[32px] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-lg">
                      <span className="block w-full text-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-black text-[18px]">3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desktop: 2, 1, 3 horizontally */}
          <div className="hidden sm:flex flex-row justify-center gap-4 mt-8 w-full items-center px-2">
            {/* Second Place */}
            <Card className="w-full max-w-[180px] sm:w-[220px] sm:h-[120px] h-[90px] border-0 bg-transparent mb-2 sm:mb-0 transition-all duration-200 hover:bg-[#ffffff33] hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[80%] bottom-0 left-0 rounded-2xl [background:linear-gradient(24deg,rgba(239,238,238,0.32)_0%,rgba(239,238,238,0.06)_100%)]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-2 sm:pb-4">
                  <div className="text-white text-lg sm:text-2xl font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[1].name}</div>
                  <div className="text-[#fffbfb] text-[16px] sm:text-[22px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[1].points}</div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-10 flex items-center justify-center">
                    <div className="bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1-2.svg)] bg-cover bg-center aspect-square min-w-[48px] w-[56px] h-[56px] rounded-full flex items-center justify-center">
                      <span className="block w-full text-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-black text-[28px] md:text-[36px]">2</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* First Place */}
            <Card className="w-full max-w-[220px] sm:w-[270px] sm:h-[135px] h-[100px] border-0 bg-transparent mb-2 sm:mb-0 transition-all duration-200 hover:bg-[#ffffff33] hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[110px] bottom-0 left-0 bg-[#41363680] rounded-2xl border-[5px] border-dashed border-[#c0551b]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-4">
                  <div className="text-white text-3xl font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[0].name}</div>
                  <div className="text-[#fffbfb] text-[28px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]"> {leaderboardData[0].points}</div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-12 flex items-center justify-center">
                    <div className="bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1-1.svg)] bg-cover bg-center aspect-square min-w-[52px] w-[64px] h-[64px] rounded-full flex items-center justify-center">
                      <span className="block w-full text-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-black text-[32px] md:text-[40px]">1</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Third Place */}
            <Card className="w-full max-w-[180px] sm:w-[220px] sm:h-[120px] h-[90px] border-0 bg-transparent transition-all duration-200 hover:bg-[#ffffff33] hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="relative p-0 h-full">
                <div className="absolute w-full h-[80%] bottom-0 left-0 rounded-2xl [background:linear-gradient(12deg,rgba(239,238,238,0.32)_0%,rgba(239,238,238,0.06)_100%)]" />
                <div className="relative flex flex-col items-center justify-end h-full pb-4">
                  <div className="text-white text-2xl font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[2].name}</div>
                  <div className="text-[#fffbfb] text-[22px] font-normal [font-family:'Avatar_Airbender-Regular',Helvetica] [text-shadow:0px_4px_4px_#000000]">{leaderboardData[2].points}</div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-10 flex items-center justify-center">
                    <div className="bg-[url(https://c.animaapp.com/macop9gcz0nwau/img/ellipse-1.svg)] bg-cover bg-center aspect-square min-w-[48px] w-[56px] h-[56px] rounded-full flex items-center justify-center">
                      <span className="block w-full text-center [text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-black text-[28px] md:text-[36px]">3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Positions 4-10 */}
          <div className="w-[98vw] max-w-2xl sm:w-[900px] mt-4 sm:mt-8 px-1">
            {leaderboardData.slice(3).map((entry, index) => (
              <Card
                key={entry.position}
                className="w-full h-[44px] sm:h-[56px] mb-2 sm:mb-3 rounded-[16px] sm:rounded-[24px] border-0 bg-[#ffffff1a] transition-all duration-200 hover:bg-[#ffffff66] hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <CardContent className="relative w-full h-full flex text-center justify-center items-center justify-between pt-1 sm:pt-3 px-2 sm:px-8">
                  <Badge className="w-[28px] sm:w-[38px] mt-5 h-7 sm:h-12 p-0 bg-transparent">
                    <div className="relative w-7 sm:w-9 h-7 sm:h-9 bg-[#d9d9d9] rounded-[12px] sm:rounded-[16px] flex items-center justify-center">
                      <div className="[text-shadow:0px_0px_13px_#00000040] [font-family:'Avatar_Airbender-Regular',Helvetica] font-normal text-black text-[15px] sm:text-[22px]">
                        {entry.position}
                      </div>
                    </div>
                  </Badge>
                  <div className="[font-family:'Avatar_Airbender-Regular',Helvetica] mt-5 font-normal text-white text-[18px] sm:text-[28px]">
                    {entry.name}
                  </div>
                  <div className="[font-family:'Avatar_Airbender-Regular',Helvetica] mt-5 font-normal text-[#fffbfb] text-[15px] sm:text-[22px]">
                    {entry.points}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorative images - hide on mobile */}
        <img
          className="hidden sm:block absolute left-0 bottom-0 h-full max-h-[110vh] w-auto object-contain object-bottom"
          alt="Decorative left"
          src="https://c.animaapp.com/macop9gcz0nwau/img/picsart-25-04-23-00-35-47-789.png"
        />
        <img
          className="hidden sm:block absolute right-0 bottom-0 h-full max-h-[110vh] w-auto object-contain object-bottom"
          alt="Decorative right"
          src="https://c.animaapp.com/macop9gcz0nwau/img/picsart-25-04-23-00-36-27-564-1.png"
        />
      </div>
    </main>
  );
};
export default LeaderBoard;