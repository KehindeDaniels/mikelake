// components/ProjectCTA/ProjectCTA.tsx
"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-[#132238] to-slate-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ctaBackground.png" // Adjust the path based on your assets folder structure
          alt="CTA Background Pattern"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-[#132238] rounded-full blur-xl"></div>
        <div className="absolute top-1/2 -right-8 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-8 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Do you have{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Project Idea?
          </span>
          <br />
          Let&apos;s discuss your project!
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          &quot;Ready to design something exceptional? Let&apos;s turn your
          ideas into impactful digital experiences.&quot;
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
        >
          <span>Let&apos;s work Together</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Additional Visual Enhancement */}
        <div className="mt-16 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-10"></div>
    </section>
  );
};

export default ProjectCTA;
