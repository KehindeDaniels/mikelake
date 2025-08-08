"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** px to travel on enter (positive = up, negative = down) */
  y?: number;
  /** px to travel horizontally (optional) */
  x?: number;
  /** seconds */
  delay?: number;
  /** replay when leaving/entering viewport */
  repeat?: boolean;
  /** portion of element that must be visible (0–1) */
  amount?: number;
  /** duration seconds */
  duration?: number;
};

export default function Reveal({
  children,
  className = "",
  y = 24,
  x = 0,
  delay = 0,
  repeat = true,
  amount = 0.25,
  duration = 0.6,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (repeat) {
      controls.start("hidden");
    }
  }, [inView, repeat, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
