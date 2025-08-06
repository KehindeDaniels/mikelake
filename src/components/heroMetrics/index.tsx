// components/HeroMetrics.tsx
"use client";
import React from "react";

const HeroMetrics: React.FC = () => {
  const metrics = [
    { value: "7+", label: "Startups Helped" },
    { value: "$50K+", label: "Funding Raised" },
    { value: "10+", label: "MVPs Launched" },
    { value: "500K+", label: "Users Reached" },
  ];

  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-6 py-6 shadow-lg max-w-3xl mx-auto mb-8">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-white/80">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center min-w-[100px]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
              {metric.value}
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wide">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroMetrics;
