// data/projectsData.ts
import { Project, ProjectType } from "@/types/interfaces";

export const projectsData: Project[] = [
  {
    id: "2",
    title: "INVENTORY MANAGEMENT DASHBOARD",
    category: "Business Solution",
    description:
      "Streamlining Stock Monitoring, Order Tracking and Reorder alert For Business efficiency.",
    boldText: "",
    image: "/images/inventory-dashboard.png",
    link: "https://www.behance.net/gallery/212568343/Inventory-Management-Dashboard",
    tags: ["Mobile App Design", "News Platform"],
    type: ProjectType.Selected,
    isLive: false,
  },
  {
    id: "1",
    title: "BLOCKCHAIN HR PLATFORM",
    category: "Blockchain",
    description:
      " A secure HR web platform connecting companies with verified talent using blockchain-powered smart contracts.",
    boldText: "",
    image: "/images/10thgen.png",
    link: "https://www.behance.net/gallery/231970265/Block-Chain-HR-Sollition",
    liveUrl: "https://stylehub-demo.vercel.app", // Example live URL
    tags: ["UI/UX Design", "Figma", "Mobile App"],
    type: ProjectType.Selected,
    isLive: true,
  },
  {
    id: "3",
    title: "PURE SELECT E-COMMERCE",
    category: "E-Commerce",
    description:
      "A responsive e-commerce platform for gadgets, emphasizing streamlined user experience and efficient checkout processes.",
    boldText: "",
    image: "/images/pureselect.png",
    link: "https://www.behance.net/gallery/213551663/Pureselect-E-Commerce-Design",
    liveUrl: "https://tastehub-app.vercel.app", // Example live URL
    tags: ["Mobile App", "Food Delivery", "UX Design"],
    type: ProjectType.Selected,
    isLive: true,
  },

  // {
  //   id: "5",
  //   title: "TRADEBOOM E-COMMERCE",
  //   category: "E-Commerce Platform",
  //   description:
  //     "A responsive e-commerce platform for gadgets, **emphasizing streamlined user experience and efficient checkout processes** with modern design principles.",
  //   boldText:
  //     "emphasizing streamlined user experience and efficient checkout processes",
  //   image: "/images/trade.png",
  //   link: "https://example.com",
  //   tags: ["Website Design", "E-commerce", "Responsive"],
  //   type: ProjectType.Selected,
  //   isLive: false,
  // },
  // {
  //   id: "6",
  //   title: "HNG Online Store",
  //   category: "E-Commerce",
  //   description:
  //     "An innovative online store offering high-**performance gadgets and accessories, designed** for a seamless and modern shopping experience.",
  //   boldText: "performance gadgets and accessories, designed",
  //   image: "/images/hng.png",
  //   link: "http://linktr.ee/Mikelakers",
  //   tags: ["Figma", "Styled Components", "E-commerce"],
  //   type: ProjectType.Featured,
  //   isLive: false,
  // },
];
