// components/featuredProjects/FeaturedProjects.tsx

import React from "react";
import Image from "next/image";
import { projectsData } from "../../data/projectsData";
import { Project, ProjectType } from "../../types/interfaces";

const FeaturedProjects: React.FC = () => {
  // Filter to get only the featured projects
  const featuredProjects = projectsData.filter(
    (project: Project) => project.type === ProjectType.Featured
  );

  return (
    <section>
      <h2 className="text-3xl mb-8 font-extralight">
        Featured <span className="font-medium">Works</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-dark-1000 p-4 rounded-lg shadow-lg"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-normal text-dark-100">
                {project.title}
              </h3>
              <p className="mt-2 text-dark-300 font-light">
                {project.description}
              </p>{" "}
              <div className="mt-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs gradient-text mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
