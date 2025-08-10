"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import GridCard from "./gridCard";

const topRow = portfolioData.slice(0, 4);
const bottomRow = portfolioData.slice(4, 8);

function ScrollingRow({
  items,
  direction = "left",
  speed = 60,
}: {
  items: typeof portfolioData;
  direction?: "left" | "right";
  speed?: number;
}) {
  const content = [...items, ...items];
  const dirClass = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-8 min-w-max ${dirClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content.map((project, idx) => (
          <GridCard key={`${project.id}-${idx}`} project={project} />
        ))}
      </div>
    </div>
  );
}

const PortfolioGrid: React.FC = () => {
  return (
    <section>
      <div className="relative max-w-[75rem] mx-auto px-4">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className="relative rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 p-6 overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]"
        >
          {/* Desktop/Tablet → 2 scrolling rows */}
          <div className="hidden md:block">
            <div data-aos="fade-up" data-aos-delay="100" className="mb-6">
              <ScrollingRow items={topRow} direction="right" speed={60} />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <ScrollingRow items={bottomRow} direction="left" speed={60} />
            </div>
          </div>

          {/* Mobile → 1 scrolling row */}
          <div className="md:hidden">
            <ScrollingRow items={portfolioData} direction="left" speed={60} />
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900/70 via-slate-900/30 to-transparent z-10" />

          {/* Border overlay */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
        </div>

        {/* Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-8"
        >
          <a
            href="#selected-projects"
            className="text-white/70 hover:text-white font-medium text-lg transition-all duration-300 hover:underline underline-offset-4 group"
          >
            <span className="relative">
              View recent works
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
