"use client";
import React from "react";
import ProjectCard from "../ProjectCard";

import { portfolioData } from "@/data/portfolioData";

// Split data into two rows for different animations
const topRowProjects = portfolioData.slice(0, 4);
const bottomRowProjects = portfolioData.slice(4, 8);

const PortfolioGrid: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-8 overflow-hidden">
      <div className="relative max-w-[75rem] mx-auto px-4">
        {/* Sleek Glassmorphism Container */}
        <div
          className="relative rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-black/20 p-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow:
              "0 25px 45px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Top Row - Moving Right (2.5-3 cards visible) */}
          <div className="flex gap-8 mb-6 animate-scroll-right">
            <div className="flex gap-8 min-w-max">
              {topRowProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {/* Duplicate for seamless loop */}
              {topRowProjects.map((project) => (
                <ProjectCard
                  key={`${project.id}-duplicate`}
                  project={project}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Left (2.5-3 cards visible) */}
          <div className="flex gap-8 animate-scroll-left">
            <div className="flex gap-8 min-w-max">
              {bottomRowProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {/* Duplicate for seamless loop */}
              {bottomRowProjects.map((project) => (
                <ProjectCard
                  key={`${project.id}-duplicate`}
                  project={project}
                />
              ))}
            </div>
          </div>

          {/* Enhanced gradient overlays for clean edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none z-10"></div>

          {/* Additional glassmorphism effect */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
        </div>

        {/* View Recent Works Button */}
        <div className="text-center mt-8">
          <button className="text-white/60 hover:text-white font-medium text-lg transition-all duration-300 hover:underline underline-offset-4 group">
            <span className="relative">
              View recent works
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PortfolioGrid;
