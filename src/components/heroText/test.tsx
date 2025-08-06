"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Eye } from "lucide-react";

const HeroText: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 font-manrope min-h-[70vh] flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Brand Name with dotted rectangle */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            <h3 className="text-white/80 text-sm sm:text-base font-medium tracking-widest uppercase px-4 py-2">
              MIKE LAKERS
            </h3>
            {/* Dotted rectangle border */}
            <div className="absolute inset-0 border-2 border-dotted border-white/30 rounded-lg animate-dash"></div>
          </div>
        </div>

        {/* Professional Title */}
        <div
          className={`mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white/60 text-base sm:text-lg font-medium">
            Senior Product Designer · Research-Driven Solutions
          </p>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Most Designers Create.{" "}
          <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            I Build Businesses.
          </span>
        </h1>

        {/* Description */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I help startups design solutions that solve real user problems by
          diving deep into business goals and market realities before touching a
          single pixel.
        </p>

        {/* Supporting Metrics */}
        <div
          className={`mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-8 text-white/60">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                7+
              </div>
              <div className="text-sm uppercase tracking-wide">
                Startups Helped
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Research-First
              </div>
              <div className="text-sm uppercase tracking-wide">
                Design Process
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Co-Founder
              </div>
              <div className="text-sm uppercase tracking-wide">
                Level Thinking
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons with connecting text */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Connecting text above buttons */}
          <p className="text-white/60 text-base mb-6">
            Ready to solve real problems, not just make things pretty?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center gap-3">
              See My Process
              <ArrowRight size={20} />
            </button>

            <button className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 flex items-center gap-3 transform hover:-translate-y-1">
              <Eye size={20} />
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
