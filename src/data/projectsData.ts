// data/projectsData.ts
import { Project, ProjectType } from "@/types/interfaces";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "STtylehub E-commerce ",
    description: [
      {
        text: "A fashion App offering personalized shopping,  ",
        isBold: false,
      },
      { text: "Visual search, and features", isBold: true },
      {
        text: " designed for fashion enthusiasts",
        isBold: false,
      },
    ],
    image: "/images/styleHub.png",
    link: "https://www.behance.net/gallery/200844327/StyleHub-E-commerce-Fahion-App",
    tags: ["Photoshop-", "Figma-", "Styled Components"],
    type: ProjectType.Featured,
  },
  {
    id: "2",
    title: "HOT GIS APP",
    description: [
      { text: "A modern, cohesive news app interface ", isBold: false },
      { text: "for a unified user experience", isBold: true },
      { text: ".", isBold: false },
    ],
    image: "/images/Hotgist.png",
    link: "https://example.com",
    tags: ["Mobile app"],
    type: ProjectType.Selected,
  },
  {
    id: "3",
    title: "TASTEHUB FOOD ORDERING APP",
    description: [
      {
        text: "A User-friendly food app offering diverse menu, ",
        isBold: false,
      },
      {
        text: "real-time updates, personalized recommendations, and seamless vendor communication for a great experience",
        isBold: true,
      },
      { text: ".", isBold: false },
    ],
    image: "/images/tastehub.png",
    link: "https://www.behance.net/gallery/178590023/TasteHub-Food-ordering-App",
    tags: ["Mobile App"],
    type: ProjectType.Selected,
  },
  {
    id: "4",
    title: "Envacord Inventory",
    description: [
      { text: "A digital platform for efficient inventory", isBold: false },
      { text: "management with real-time tracking, user-", isBold: true },
      { text: "friendly interfaces, and critical alerts.", isBold: false },
    ],
    image: "/images/envaccord.png",
    link: "https://example.com",
    tags: ["Next.js", "Tailwind CSS"],
    type: ProjectType.Featured,
  },
  {
    id: "5",
    title: "TRADE BLOOM E-COMMERCE DESIGN",
    description: [
      { text: "A responsive e-commerce platform for gadgets, ", isBold: false },
      {
        text: "emphasizing streamlined user experience and efficient checkout processes",
        isBold: true,
      },
      { text: ".", isBold: false },
    ],
    image: "/images/trade.png",
    link: "https://example.com",
    tags: ["Wbsite Design"],
    type: ProjectType.Selected,
  },

  {
    id: "6",
    title: "HNG online Store",
    description: [
      { text: "An innovative online store offering high ", isBold: false },
      { text: "performance gadget and accessories, Designed", isBold: true },
      { text: "for a seamless and modern shopping experience", isBold: false },
    ],
    image: "/images/hng.png",
    link: "http://linktr.ee/Mikelakers",
    tags: ["Figma-", "Styled Components"],
    type: ProjectType.Featured,
  },
];
