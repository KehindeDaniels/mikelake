// data/projectsData.ts

// import { Project, ProjectType } from "../types/interfaces";
import { Project, ProjectType } from "@/types/interfaces";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "My Project",
    description:
      "Proxy provider website including authentication, dashboard and dynamic features.",
    image: "/images/featured.jpg",
    link: "https://example.com",
    tags: ["Sketch-", "Figma-", "Styled Components"],
    type: ProjectType.Featured,
  },
  {
    id: "2",
    title: "Real Estate Template",
    description: "A responsive and modern template for real estate agencies.",
    image: "/images/project2.png",
    link: "https://example.com",
    tags: ["Website Design"],
    type: ProjectType.Selected,
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description:
      "Full-fledged e-commerce platform with payment gateway integration.",
    image: "/images/project3.png",
    link: "https://example.com",
    tags: ["React", "Node.js", "MongoDB"],
    type: ProjectType.Selected,
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing work and skills.",
    image: "/images/featured.jpg",
    link: "https://example.com",
    tags: ["Next.js-", "Tailwind CSS"],
    type: ProjectType.Featured,
  },
  {
    id: "5",
    title: "Task Management App",
    description: "A simple and effective task management application.",
    image: "/images/project5.png",
    link: "https://example.com",
    tags: ["Vue.js", "Firebase"],
    type: ProjectType.Selected,
  },
  {
    id: "6",
    title: "Social Media Dashboard",
    description: "Dashboard for managing multiple social media accounts.",
    image: "/images/project6.png",
    link: "https://example.com",
    tags: ["Angular", "TypeScript", "SCSS"],
    type: ProjectType.Selected,
  },
  {
    id: "7",
    title: "Blogging Platform",
    description: "A platform for creating and managing personal blogs.",
    image: "/images/project7.png",
    link: "https://example.com",
    tags: ["Gatsby", "GraphQL"],
    type: ProjectType.Selected,
  },
  {
    id: "8",
    title: "Online Learning Portal",
    description: "Portal for offering and managing online courses.",
    image: "/images/project8.png",
    link: "https://example.com",
    tags: ["React", "Node.js", "Express"],
    type: ProjectType.Selected,
  },
  {
    id: "9",
    title: "Landing Page Design",
    description: "A highly optimized and responsive landing page.",
    image: "/images/featured.jpg",
    link: "https://example.com",
    tags: ["HTML-", "CSS-", "JavaScript"],
    type: ProjectType.Featured,
  },
  {
    id: "10",
    title: "Chat Application",
    description: "Real-time chat application with WebSocket support.",
    image: "/images/project10.png",
    link: "https://example.com",
    tags: ["React", "Socket.io", "Node.js"],
    type: ProjectType.Selected,
  },
];
