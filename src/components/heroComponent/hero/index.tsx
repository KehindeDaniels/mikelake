"use client";

import React from "react";
import PortfolioGrid from "../PortfolioGrid";
import HeroText from "../heroText";
import HeroBackground from "../heroBackground";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden bg-[url('/icons/pattern2.svg')] bg-cover bg-center bg-no-repeat">
      <HeroBackground />

      <HeroText />

      {/* Portfolio Grid */}
      <div className="relative -mt-8">
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default Hero;
