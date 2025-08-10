// types/interfaces.ts
import type { StaticImageData } from "next/image";

export enum ProjectType {
  Featured = "featured",
  Selected = "selected",
}

export interface Project {
  id: string;
  title: string;
  category?: string; // Added optional category
  description: string; // Changed to plain string
  boldText: string; // The text that should be bolded
  image: string;
  link: string; // Case study or portfolio link
  liveUrl?: string; // Live site URL (optional)
  tags: string[];
  type: ProjectType;
  isLive: boolean; // Whether the project is live
}

// Portfolio interfaces (keeping existing ones)
export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imagePath: string;
  colors: string;
}

// types/featuredProject.ts
export interface FeaturedProject {
  id: string;
  title: string;
  /** One of: "mobile" | "web" | "dashboard" */
  category: string;
  description: string;
  image: string;
  tags: string[];
  caseStudyUrl: string;
  isLive: boolean;
  liveUrl?: string;
  completionDate?: string;
  client?: string;
}
