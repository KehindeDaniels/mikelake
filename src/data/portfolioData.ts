// src/data/portfolioData.ts

import { images } from "@/lib";
import type { ProjectItem } from "@/types/interfaces"; // or portfolio.ts if separate

export const portfolioData: ProjectItem[] = [
  {
    id: 1,
    title: "Breaking Barriers",
    category: "Sports Platform",
    imagePath: images.pic1,
    colors: "from-orange-400 via-red-500 to-pink-500",
  },
  {
    id: 2,
    title: "Portfolio Showcase",
    category: "Creative Portfolio",
    imagePath: images.pic2,
    colors: "from-pink-400 via-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Nike Strength",
    category: "Fitness App",
    imagePath: images.pic4,
    colors: "from-gray-400 via-gray-600 to-gray-800",
  },
  {
    id: 4,
    title: "Payment Infrastructure",
    category: "Fintech Solution",
    imagePath: images.pic5,
    colors: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    id: 5,
    title: "Music Platform",
    category: "Streaming Service",
    imagePath: images.pic6,
    colors: "from-purple-500 via-pink-500 to-red-500",
  },
  {
    id: 6,
    title: "Level Up Design",
    category: "Design System",
    imagePath: images.pic7,
    colors: "from-orange-400 via-red-500 to-pink-600",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    category: "Online Store",
    imagePath: images.pic2,
    colors: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    id: 8,
    title: "Dashboard Analytics",
    category: "Data Visualization",
    imagePath: images.pic4,
    colors: "from-cyan-400 via-blue-500 to-indigo-600",
  },
];
