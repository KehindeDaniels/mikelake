// No "use client" needed
import React from "react";
import PortfolioGrid from "../PortfolioGrid";
import HeroText from ".";
import HeroBackground from "../heroBackground";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <HeroBackground />
      <HeroText />
      <div className="relative -mt-8">
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default Hero;
