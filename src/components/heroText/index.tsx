"use client";
import React from "react";
import { Download } from "lucide-react";

const HeroText: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-16 sm:py-24 font-manrope overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Moving circles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>

        {/* Animated lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Animated curved lines */}
          <path
            d="M100,200 Q300,100 500,300 T900,200"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            className="animate-pulse"
          />
          <path
            d="M200,400 Q400,300 600,500 T1000,400"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Large background circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-500/10 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-red-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Brand Name */}
        <div className="mb-8">
          <h3 className="text-white/80 text-sm sm:text-base font-medium tracking-widest uppercase">
            MIKE LAKERS
          </h3>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Designing Products That Make a{" "}
          <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Difference.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
          I&#39;m Michael, a Product Designer crafting seamless web and mobile
          experiences that engage users and drive growth!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            My Project
          </button>

          <button className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 flex items-center gap-3">
            <Download size={20} />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
