import React from "react";

const HeroVideoBackground = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <video
        src="/hero-bg.mp4" // Make sure your video file is named hero-bg.mp4 and placed in public folder
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold mb-4 text-center">
          Future-Driven Innovations.
        </h1>
        <p className="text-white text-lg mb-8 text-center max-w-xl">
          Fostering Growth For Startups, Enterprises, And Innovators.
        </p>
        <button className="bg-[#1877FF] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#1456b8] transition-all">
          Book a 15 min Call
        </button>
      </div>
    </div>
  );
};

export default HeroVideoBackground;
