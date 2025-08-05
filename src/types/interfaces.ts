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

// ✅ Fixed: Change StaticImageData to string since you're using paths from public folder
export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imagePath: string; // ← Changed from StaticImageData to string
  colors: string;
}
