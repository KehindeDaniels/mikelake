"use client";

import React, { useRef } from "react";
import { motion, useInView, easeOut, easeIn } from "framer-motion";
import { Download } from "lucide-react";
import PortfolioGrid from "../PortfolioGrid";
import HeroText from "../heroText";
import HeroBackground from "../heroBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.5, ease: easeIn },
  },
};

const Hero: React.FC = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: false, amount: 0.3 });

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <HeroBackground />
      <HeroText />

      {/* Portfolio Grid with scroll animation */}
      <motion.div
        ref={gridRef}
        variants={fadeUp}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
        className="relative -mt-8"
      >
        <PortfolioGrid />
      </motion.div>
    </div>
  );
};

export default Hero;
