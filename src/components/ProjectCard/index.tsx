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
    <div className="relative group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/20 bg-slate-800/30 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
        {/* Clean image presentation - no text overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.colors} opacity-90`}
        >
          {/* Subtle pattern overlay for visual interest */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
        </div>

        {/* Hover overlay with minimal interaction hint */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1px]">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-purple-400/30 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
