function RegsiterNow() {
    return (
      <div className="w-screen h-screen overflow-hidden relative">
        <img
          src="/assets/registerBackground.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Background"
        />
        <div className="relative z-10 p-24 font-lastshuriken text-red-500 ">
          <p className="text-3xl mb-6 text-outline ">Do you accept the challenge?</p>
  
          <div className="w-full md:w-1/2 bg-black/70 p-6 rounded-md text-white">
            <form className="flex flex-col gap-4">
              <div>
                <label className="block mb-1">Email/Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-white text-red-500 outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
  
              <div>
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded bg-white text-red-500 outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
                <button type="submit" className="font-lastshuriken drop-shadow-[0_4px_6px_rgba(255,0,0,0.4)] px-4 py-2 text-base md:text-3xl bg-black text-red-600 border-4 border-[#901C17] text-center w-full md:w-80 transform skew-x-[-10deg] -rotate-1 hover:skew-x-[0deg] hover:rotate-0 hover:scale-105 transition-all duration-150">
                <span className="block transform skew-x-[10deg]">LOGIN</span>
                </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default RegsiterNow;
  