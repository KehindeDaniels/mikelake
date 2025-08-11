// components/ProjectCTA/ProjectCTA.tsx
"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const ProjectCTA: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-me");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-20"></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Content Wrapper with Glass Effect */}
        <div className="text-center relative">
          {/* Floating Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 backdrop-blur-sm mb-8 mx-auto">
            <Sparkles className="w-8 h-8 text-blue-400" />
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-[1.1] tracking-tight">
            Do you have{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Project Idea?
              </span>
              {/* Subtle underline decoration */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-purple-400/50 rounded-full"></div>
            </span>
            <br />
            <span className="text-gray-100">
              Let&apos;s discuss your project!
            </span>
          </h2>

          {/* Enhanced Subtitle */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-300/90 text-lg md:text-xl leading-relaxed">
              Ready to design something exceptional? Let&apos;s turn your ideas
              <br className="hidden md:block" />
              into{" "}
              <span className="text-blue-400 font-medium">
                impactful digital experiences
              </span>
              .
            </p>
          </div>

          {/* Enhanced CTA Button */}
          <div className="relative inline-block group">
            {/* Button Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

            <button
              onClick={scrollToContact}
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-500 hover:scale-105 transform hover:-translate-y-1 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <span>Let&apos;s work Together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />

              {/* Button shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Free consultation call</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Quick response time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCTA;
