"use client";
import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Blurry mesh circles */}
      {/* Top Right - Mint Green */}
      <div className="absolute top-[200px] right-[-50px] w-[100px] h-[100px] md:w-[170px] md:h-[170px] rounded-full bg-[#208ECE] opacity-60 blur-[50px] md:blur-[80px] pointer-events-none" />
      {/* Top Left - Blue */}
      <div className="absolute top-[100px] left-[-50px]  w-[100px] h-[100px] md:w-[170px] md:h-[170px] rounded-full bg-[#6EF3C7] blur-[80px] md:blur-[112px] pointer-events-none" />
      {/* Bottom Left - Orange */}
      <div className="absolute bottom-[-50px] left-[100px] w-[170px] h-[170px] rounded-full bg-[#CE5F20] blur-[112px] pointer-events-none" />{" "}
    </>
  );
};

export default HeroBackground;
