"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../ProjectCard";
import { portfolioData } from "@/data/portfolioData";
import Reveal from "@/components/Reveal";
// import Reveal from "../../Reveal";

const topRow = portfolioData.slice(0, 4);
const bottomRow = portfolioData.slice(4, 8);

function ScrollingRow({
  items,
  direction = "left",
  speed = 60, // seconds per loop
}: {
  items: typeof portfolioData;
  direction?: "left" | "right";
  speed?: number;
}) {
  const content = [...items, ...items];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8 min-w-max"
        animate={{ x: [from, to] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {content.map((project, idx) => (
          <ProjectCard key={`${project.id}-${idx}`} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

const PortfolioGrid: React.FC = () => {
  return (
    <section>
      <div className="relative max-w-[75rem] mx-auto px-4">
        <Reveal y={30}>
          <div
            className={`
              relative rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 p-6 overflow-hidden
              bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]
            `}
          >
            {/* Top Row → moves right */}
            <Reveal y={16}>
              <div className="mb-6">
                <ScrollingRow items={topRow} direction="right" speed={60} />
              </div>

              {/* Bottom Row → moves left */}

              <ScrollingRow items={bottomRow} direction="left" speed={60} />
            </Reveal>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900/70 via-slate-900/30 to-transparent z-10" />

            {/* Border overlay */}
            <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
          </div>
        </Reveal>

        {/* Button */}
        <Reveal y={20} delay={0.06}>
          <div className="text-center mt-8">
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
        </Reveal>
      </div>
    </section>
  );
};

export default PortfolioGrid;
