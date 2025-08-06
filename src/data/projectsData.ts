// data/projectsData.ts
import { Project, ProjectType } from "@/types/interfaces";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "StyleHub E-commerce",
    category: "Fashion App",
    description:
      "A fashion App offering personalized shopping, **visual search, and advanced features** designed for fashion enthusiasts seeking unique styles.",
    boldText: "visual search, and advanced features",
    image: "/images/styleHub.png",
    link: "https://www.behance.net/gallery/200844327/StyleHub-E-commerce-Fahion-App",
    liveUrl: "https://stylehub-demo.vercel.app", // Example live URL
    tags: ["UI/UX Design", "Figma", "Mobile App"],
    type: ProjectType.Featured,
    isLive: true,
  },
  {
    id: "2",
    title: "HOT GIST APP",
    category: "News Platform",
    description:
      "A modern, cohesive news app interface **for a unified user experience** with real-time updates and personalized feeds.",
    boldText: "for a unified user experience",
    image: "/images/Hotgist.png",
    link: "https://example.com",
    tags: ["Mobile App Design", "News Platform"],
    type: ProjectType.Selected,
    isLive: false,
  },
  {
    id: "3",
    title: "TASTEHUB FOOD ORDERING APP",
    category: "Food & Delivery",
    description:
      "A user-friendly food app offering diverse menu, **real-time updates, personalized recommendations, and seamless vendor communication** for a delightful dining experience.",
    boldText:
      "real-time updates, personalized recommendations, and seamless vendor communication",
    image: "/images/tastehub.png",
    link: "https://www.behance.net/gallery/178590023/TasteHub-Food-ordering-App",
    liveUrl: "https://tastehub-app.vercel.app", // Example live URL
    tags: ["Mobile App", "Food Delivery", "UX Design"],
    type: ProjectType.Selected,
    isLive: true,
  },
  {
    id: "4",
    title: "Envacord Inventory",
    category: "Business Solution",
    description:
      "A digital platform for efficient inventory **management with real-time tracking, user-friendly interfaces, and critical alerts** for businesses.",
    boldText:
      "management with real-time tracking, user-friendly interfaces, and critical alerts",
    image: "/images/envaccord.png",
    link: "https://example.com",
    tags: ["Next.js", "Tailwind CSS", "Dashboard"],
    type: ProjectType.Featured,
    isLive: false,
  },
  {
    id: "5",
    title: "TRADEBOOM E-COMMERCE",
    category: "E-Commerce Platform",
    description:
      "A responsive e-commerce platform for gadgets, **emphasizing streamlined user experience and efficient checkout processes** with modern design principles.",
    boldText:
      "emphasizing streamlined user experience and efficient checkout processes",
    image: "/images/trade.png",
    link: "https://example.com",
    tags: ["Website Design", "E-commerce", "Responsive"],
    type: ProjectType.Selected,
    isLive: false,
  },
  {
    id: "6",
    title: "HNG Online Store",
    category: "E-Commerce",
    description:
      "An innovative online store offering high-**performance gadgets and accessories, designed** for a seamless and modern shopping experience.",
    boldText: "performance gadgets and accessories, designed",
    image: "/images/hng.png",
    link: "http://linktr.ee/Mikelakers",
    tags: ["Figma", "Styled Components", "E-commerce"],
    type: ProjectType.Featured,
    isLive: false,
  },
];
