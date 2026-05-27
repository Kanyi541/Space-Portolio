import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="hero">
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute right-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>
      <HeroContent />
    </div>
  );
};

export default Hero;
