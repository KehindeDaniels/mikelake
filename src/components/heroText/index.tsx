"use client";

import React, { useRef } from "react";
import { motion, useInView, easeOut, easeIn } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import HeroMetrics from "../heroMetrics";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.5, ease: easeIn },
  },
};

const HeroText: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="relative py-14 sm:py-20 font-manrope min-h-[80vh] flex items-center">
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        {/* Brand Name */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-6 sm:mb-8"
        >
          <div className="relative inline-block">
            <h3 className="text-white/80 text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase px-4 py-2">
              MIKE LAKERS
            </h3>
            <div className="absolute inset-0 border-2 border-dotted border-white/30 rounded-lg animate-dash"></div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
        >
          Need a Product Designer with a Founder&apos;s Mindset — without giving
          up your{" "}
          <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            equity?
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-10 max-w-xl sm:max-w-3xl mx-auto leading-relaxed"
        >
          I dive deep into your business goals, user problems, and market
          realities before touching a single pixel.
        </motion.p>

        {/* Metrics */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10"
        >
          <HeroMetrics />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-white/60 text-sm sm:text-base mb-6">
            Ready to solve real problems, not just make things pretty?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center gap-3">
              See My Process
              <ArrowRight size={20} />
            </button>

            <button className="border border-white/30 hover:border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 flex items-center gap-3 transform hover:-translate-y-1">
              <Eye size={20} />
              To Hire Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroText;
