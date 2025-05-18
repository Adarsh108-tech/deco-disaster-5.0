"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Map } from '@/components/ui/Map';

export default function NextPage() {
  const [answer, setAnswer] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      });

      setAnswer('');
      
      router.push("/level2/Stage2");

    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-auto">
      <img
        src="/assets/background2.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 blur-[4px] z-0"
      />
      
      <div className="relative z-10 flex flex-col lg:flex-row h-full w-full items-center justify-center px-4 py-6 space-y-10 lg:space-y-0 lg:space-x-6">
        {/* MAP IMAGE */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          <Map />
        </div>

        {/* HEADING */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-10 mt-4 sm:mt-6 md:mt-10">
          <img
            src="/assets/text.png"
            alt="Text"
            className="w-[300px] sm:w-[400px] md:w-[450px] h-auto"
          />

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center space-y-16 px-4">
            <div className="w-full max-w-[500px] bg-white rounded-lg shadow-lg p-2">
              <textarea
                id="answer"
                name="answer"
                rows="1"
                placeholder="ENTER YOUR ANSWER"
                value={answer}
                onChange={handleChange}
                className="w-full p-2 rounded-md text-black uppercase text-center font-custom focus:outline-none focus:ring-2 focus:ring-white/50 resize-none bg-white/90"/>
            </div>

           <button
              type="submit"
              className="h-[50px] w-[200px] bg-black text-purple-300 border-4 border-purple-600 font-bold text-2xl tracking-widest shadow-[4px_4px_0_rgba(168,85,247,1)] hover:scale-105 transition duration-300 rounded-md uppercase">
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
