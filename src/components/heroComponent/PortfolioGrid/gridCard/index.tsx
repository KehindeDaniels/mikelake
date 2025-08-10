"use client";
import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types/interfaces";

interface Props {
  project: ProjectItem;
}

const GridCard: React.FC<Props> = ({ project }) => {
  return (
    <div
      className="flex justify-center align-bottom group cursor-pointer transition-transform duration-500 hover:scale-105 pt-4 px-4 bg-[rgba(92,92,109,0.4)]
          backdrop-blur-sm [background-blend-mode:multiply]  rounded-lg overflow-hidden"
    >
      <div className="relative w-80 h-64 rounded-lg ">
        {/* Gradient fallback layer */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.colors} opacity-80`}
        >
          <div className="absolute inset-0 bg-black/10 rounded-lg" />
        </div>

        {/* Image positioned at bottom */}
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className="object-cover object-bottom rounded-lg"
          unoptimized
        />
      </div>
    </div>
  );
};

export default GridCard;
