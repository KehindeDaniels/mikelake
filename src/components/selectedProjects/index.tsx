"use client";
import React from "react";
import Image from "next/image";
import { projectsData } from "../../data/projectsData";
import { Project, ProjectType } from "../../types/interfaces";
import {
  ChevronRight,
  ExternalLink,
  Zap,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

const SelectedProjects: React.FC = () => {
  const selectedProjects = projectsData.filter(
    (project: Project) => project.type === ProjectType.Selected
  );

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({
    project,
    index,
  }) => {
    const isReversed = index % 2 !== 0;

    return (
      <div
        className={`group relative ${poppins.className} font-normal`}
        id="selected-projects"
      >
        <div
          className={`flex ${
            isReversed ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
          }
          rounded-3xl transition-all duration-500 overflow-hidden
          border border-white/20 dark:border-white/10
          bg-white/50 dark:bg-white/5 backdrop-blur-xl
          shadow-xl shadow-gray-200/50 dark:shadow-black/30
          hover:shadow-2xl hover:-translate-y-1`}
        >
          {/* Image Section */}
          <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-white/5 dark:to-white/10">
            <div className="p-6 lg:p-8 h-full flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-contain w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />

                {/* Live Badge */}
                {project.isLive && (
                  <div className="absolute -top-2 -right-2 flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    <Sparkles className="w-3 h-3 animate-bounce" />
                    <Zap className="w-3 h-3" />
                    <span>IT&#39;S LIVE</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 space-y-6">
            {/* Category Badge */}
            <div className="inline-flex">
              <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {project.category || "Digital Product"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <div className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
              {project.description}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-lg font-medium"
                >
                  {tag.replace("-", "")}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* Live Site Button (Priority) */}
              {project.isLive && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/live inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5"
                >
                  <Rocket className="w-4 h-4 group-hover/live:animate-bounce animate-bounce" />
                  <span>View Live Site</span>
                  <ExternalLink className="w-4 h-4 group-hover/live:translate-x-0.5 transition-transform" />
                </a>
              )}

              {/* Case Study Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5
                  ${
                    project.isLive
                      ? "border-2 border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:border-blue-300 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50/20 dark:hover:bg-white/10"
                      : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25"
                  }`}
              >
                <span>Case Study</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-[#0d1a2d] dark:to-[#132238] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A curated collection of projects showcasing user-centered design and
            innovative digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>Want to see more?</span>
            <a
              href="#featured-projects"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline underline-offset-4 decoration-2 hover:decoration-blue-700 dark:hover:decoration-blue-300 transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
