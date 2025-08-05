"use client";
import React from "react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imagePath: string;
  colors: string;
}

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-1">
      <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-white/20 bg-slate-800/30 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
        {/* Clean image presentation - no text overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.colors} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
        >
          {/* Subtle pattern overlay for visual interest */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 group-hover:from-black/5 transition-all duration-300"></div>
        </div>

        {/* Simple hover overlay - no icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-white/20 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
