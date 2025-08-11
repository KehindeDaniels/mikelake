"use client";
import React from "react";
import { projectsData } from "../../data/projectsData";
import { Project, ProjectType } from "../../types/interfaces";
import ProjectCard from "./ProjectCard";

const SelectedProjects: React.FC = () => {
  const selectedProjects = projectsData.filter(
    (project: Project) => project.type === ProjectType.Selected
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-[#0d1a2d] dark:to-[#132238] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Projects */}
        <div className="space-y-16">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer Link */}
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
