// components/selectedProjects/SelectedProjects.tsx

import React from "react";
import Image from "next/image";
import { projectsData } from "../../data/projectsData";
import { Project, ProjectType } from "../../types/interfaces";
import { ChevronRight } from "lucide-react";
const SelectedProjects: React.FC = () => {
  const selectedProjects = projectsData.filter(
    (project: Project) => project.type === ProjectType.Selected
  );

  return (
    <section className="mt-16 font-manrope">
      <h2 className="text-3xl mb-8 font-extralight">
        Selected <span className="font-medium">Works</span>
      </h2>
      <div className="flex flex-col  gap-8 px-4 md:px-0">
        {selectedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`flex ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            } dark:bg-dark-1000 bg-gradient-hero md:gap-2 rounded-lg shadow-lg`}
          >
            <div className="flex-1 dark:bg-header-dark md:rounded-lg bg-header-light rounded-t-lg pt-4 px-4">
              <Image
                src={project.image}
                alt={project.title}
                layout="responsive"
                width={1000}
                height={1000}
                className=" object-cover rounded-lg w-full h-full"
              />
            </div>
            <div className="flex-1 project gap-4 rounded-md flex flex-col justify-end py-4 md:pb-16 text-light-100 dark:text-dark-50">
              <h3 className="text-lg font-semibold  px-3 md:px-16">
                {project.title}
              </h3>
              <p className="text-sm px-3 md:px-16">
                {project.description.map((part, idx) => (
                  <span
                    key={idx}
                    className={
                      part.isBold ? "font-bold text-lg" : "font-normal"
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </p>
              <p className="font-extralight px-3 md:px-16">
                {project.tags.map((tag, index) => (
                  <span key={index} className=" mr-2">
                    {tag}
                  </span>
                ))}
              </p>
              <a
                href={project.link}
                className="flex justify-between border dark:border-dark-50 border-light-900 rounded-full max-w-36 px-4 py-1 hover:bg-dark-50 hover:text-light-900 transition-colors ml-3 md:ml-16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Work</span>
                <ChevronRight className="text-current " />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
