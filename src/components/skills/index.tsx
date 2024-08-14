// components/Skills.tsx
import React from "react";
import Image from "next/image";
import { skillsData } from "@/data/skillsData";

const Skills: React.FC = () => {
  return (
    <div className="font-inter dark:bg-gray-dark text-white py-10 px-5">
      <div className="container flex flex-col sm mx-auto text-center">
        <div className="">
          <h2 className="text-sm dark:bg-light-600 bg-light-600 text-light-1000  max-w-20 mx-auto rounded-2xl py-1 mb-6">
            Skills
          </h2>
          <h3 className="text-xl font-light mb-6 text-light-900 dark:text-dark-900">
            The skills, tools and technologies I am really good at:
          </h3>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-6 text-light-900 dark:text-dark-900">
          {skillsData.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center">
              <div className="w-8 h-8 relative mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="font-light text-sm ">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
