export enum ProjectType {
  Featured = "featured",
  Selected = "selected",
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
  type: ProjectType;
}
