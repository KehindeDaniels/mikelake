// types/interfaces.ts

import type { StaticImageData } from "next/image";

export enum ProjectType {
  Featured = "featured",
  Selected = "selected",
}

interface DescriptionPart {
  text: string;
  isBold: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: DescriptionPart[];
  image: string;
  link?: string;
  tags: string[];
  type: ProjectType;
}

// types/portfolio.ts
export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imagePath: StaticImageData;
  colors: string;
}
