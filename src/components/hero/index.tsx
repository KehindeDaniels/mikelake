"use client";
import React from "react";
// import HeroBackground from "./HeroBackground";
import { Download } from "lucide-react";
import PortfolioGrid from "../PortfolioGrid";
import HeroText from "../heroText";
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
