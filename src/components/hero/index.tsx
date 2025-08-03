"use client";
import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import PortfolioGrid from "../PortfolioGrid";
// import PortfolioGrid from "@/components/portfolioGrid";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Enhanced Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Animated gradient circles - unfilled with gradients */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-transparent bg-gradient-to-r from-red-400/40 to-pink-400/40 animate-spin-slow opacity-60">
          <div className="absolute inset-2 rounded-full bg-slate-900"></div>
        </div>

        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border-2 border-transparent bg-gradient-to-br from-purple-400/50 to-blue-400/50 animate-pulse opacity-70">
          <div className="absolute inset-2 rounded-full bg-slate-900"></div>
        </div>

        <div className="absolute bottom-60 left-1/4 w-20 h-20 rounded-full border-2 border-transparent bg-gradient-to-tr from-cyan-400/40 to-purple-400/40 animate-bounce opacity-60">
          <div className="absolute inset-2 rounded-full bg-slate-900"></div>
        </div>

        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-bl from-orange-400/50 to-red-400/50 animate-spin-reverse opacity-50">
          <div className="absolute inset-2 rounded-full bg-slate-900"></div>
        </div>

        {/* Floating smaller circles */}
        <div className="absolute top-32 left-1/3 w-8 h-8 rounded-full border border-transparent bg-gradient-to-r from-pink-400/60 to-purple-400/60 animate-float opacity-80">
          <div className="absolute inset-1 rounded-full bg-slate-900"></div>
        </div>

        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full border border-transparent bg-gradient-to-bl from-blue-400/50 to-indigo-400/50 animate-float-delayed opacity-70">
          <div className="absolute inset-1 rounded-full bg-slate-900"></div>
        </div>

        {/* Enhanced animated lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <path
            d="M100,200 Q300,100 500,300 T900,200"
            fill="none"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            className="animate-draw-line"
          />
          <path
            d="M200,400 Q400,300 600,500 T1000,400"
            fill="none"
            stroke="url(#lineGrad2)"
            strokeWidth="2"
            className="animate-draw-line-delayed"
          />
        </svg>

        {/* Large background gradient orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Hero Text Section */}
      <section className="relative py-16 sm:py-20 font-manrope min-h-[70vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Brand Name with dotted rectangle */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
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

          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Designing Products That Make a{" "}
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Difference.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            I&#39;m Michael, a Product Designer crafting seamless web and mobile
            experiences that engage users and drive growth!
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
              My Project
            </button>

            <button className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 flex items-center gap-3 transform hover:-translate-y-1">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Spills into viewport */}
      <div className="relative -mt-8">
        <PortfolioGrid />
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 20;
          }
        }

        @keyframes draw-line {
          0% {
            stroke-dasharray: 0 1000;
          }
          100% {
            stroke-dasharray: 1000 0;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-dash {
          stroke-dasharray: 8;
          animation: dash 1s linear infinite;
        }

        .animate-draw-line {
          stroke-dasharray: 1000;
          animation: draw-line 3s ease-in-out infinite;
        }

        .animate-draw-line-delayed {
          stroke-dasharray: 1000;
          animation: draw-line 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
