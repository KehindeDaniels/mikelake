// types/interfaces.ts

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
