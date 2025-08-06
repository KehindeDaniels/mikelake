"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  SOCIAL_LINKS,
  BACKGROUND_DECORATIONS,
  CONTENT_DATA,
  ACTION_BUTTONS,
} from "../../data/aboutData"; // adjust path if needed
import AboutCard from "../aboutCard";

const AboutMe: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handlers
  const handleProjectsClick = (): void => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = (): void => {
    const link = document.createElement("a");
    link.href = "/assets/cv/michael-adeleke-cv.pdf";
    link.download = "Michael_Adeleke_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttons = ACTION_BUTTONS(handleProjectsClick, handleDownloadCV);

  return (
    <section
      className="
        py-16 
        relative 
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
        <AboutCard
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          // buttons={buttons}
        />
      </div>
    </section>
  );
};

export default AboutMe;
