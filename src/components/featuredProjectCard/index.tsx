"use client";
import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Calendar,
  User,
} from "lucide-react";
import type { FeaturedProject } from "@/types/interfaces";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  index,
}) => {
  return (
    <div className="group relative" id="featured-projects">
      <div className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/80 dark:border-white/10 hover:border-blue-200/60 dark:hover:border-blue-400 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1a2a3c] dark:to-[#132238] h-64">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Live Badge */}
          {project.isLive && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>LIVE</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 dark:bg-white/10 backdrop-blur-sm text-gray-700 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-gray-700 dark:text-gray-300">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{project.completionDate}</span>
            </div>
            {project.client && (
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{project.client}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-white/10 px-2.5 py-1 rounded-lg font-medium">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {/* Live Site */}
            {project.isLive && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group/live inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Site</span>
              </a>
            )}

            {/* Case Study */}
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${project.isLive ? "flex-1" : "w-full"} 
                inline-flex items-center justify-center gap-2 font-medium px-4 py-2.5 rounded-xl text-sm transition-all duration-300 hover:scale-105
                ${
                  project.isLive
                    ? "border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/10"
                    : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25"
                }
              `}
            >
              <span>Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
