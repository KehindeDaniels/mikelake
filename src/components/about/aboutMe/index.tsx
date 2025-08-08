"use client";

import React, { useState } from "react";
import { BACKGROUND_DECORATIONS } from "../../../data/aboutData";
import AboutCard from "../aboutCard";

const AboutMe: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="
        py-16 relative 
        transition-colors duration-500
        bg-gradient-to-br from-gray-50 to-white 
        dark:bg-[#132238] dark:from-[#132238] dark:to-[#132238]
      "
      aria-labelledby="about-heading"
    >
      {/* Background Decorations */}
      {BACKGROUND_DECORATIONS.map((decoration, index) => (
        <div
          key={index}
          className={`absolute ${decoration.position} ${decoration.size} ${decoration.color} rounded-full ${decoration.opacity}`}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-20">
        <AboutCard isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>
    </section>
  );
};

export default AboutMe;
