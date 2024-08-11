// components/featuredProjects/FeaturedProjects.tsx

import React from "react";
import { projectsData } from "../../data/projectsData";
import { Project, ProjectType } from "../../types/interfaces";

const FeaturedProjects: React.FC = () => {
  // Filter to get only the featured projects
  const featuredProjects = projectsData.filter(
    (project: Project) => project.type === ProjectType.Featured
  );

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Featured Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-dark-1000 p-4 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-light-300">{project.description}</p>
            <div className="mt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-light-1000 text-dark-1000 px-2 py-1 rounded-lg mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
