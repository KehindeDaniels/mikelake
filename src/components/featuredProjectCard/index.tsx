// components/FeaturedProjects/FeaturedProjectCard.tsx
"use client";
import React from "react";
import Image from "next/image";
// import { FeaturedProject } from "../../types/featuredProject";
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
    <div className="group relative">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/80 hover:border-blue-200/60 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-64">
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
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
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
                className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg font-medium">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {/* Live Site Button (Priority) */}
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

            {/* Case Study Button */}
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${project.isLive ? "flex-1" : "w-full"} 
                inline-flex items-center justify-center gap-2 font-medium px-4 py-2.5 rounded-xl text-sm transition-all duration-300 hover:scale-105
                ${
                  project.isLive
                    ? "border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
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
