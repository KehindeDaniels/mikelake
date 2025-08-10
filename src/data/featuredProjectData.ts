// import type { FeaturedProject } from "@/types/featuredProject";

import type { FeaturedProject } from "@/types/interfaces";

/**
 * NOTE: Update the `image` paths to real thumbnails when you have them.
 * For now they point to /images/<slug>.jpg as placeholders.
 */

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: "fp-property-search",
    title: "Property Search",
    category: "web",
    description:
      "Smart, human-centered property search with clean discovery and comparison flows.",
    image: "/images/property-search.png",
    tags: ["Web UI/UX", "Search", "Real Estate"],
    caseStudyUrl:
      "https://www.behance.net/gallery/231971981/Property-Search-Website",
    isLive: false,
  },
  {
    id: "fp-health-predict",
    title: "Health Predict",
    category: "mobile",
    description:
      "Mobile health tracking with predictive cues and clear, friendly charts.",
    image: "/images/health-predict.png",
    tags: ["Mobile UI/UX", "Health", "Predictive"],
    caseStudyUrl:
      "https://www.behance.net/gallery/231971601/Health-Predict-Mobile-App",
    isLive: false,
  },
  {
    id: "fp-blockchain-hr",
    title: "Blockchain HR Platform",
    category: "web",
    description:
      "HR operations on blockchain with transparent records and modular workflows.",
    image: "/images/blockchain-hr.jpg",
    tags: ["Web UI/UX", "Blockchain", "HR"],
    caseStudyUrl:
      "https://www.behance.net/gallery/231970265/Block-Chain-HR-Sollition",
    isLive: false,
  },
  {
    id: "fp-qr-code",
    title: "QR Code Generator",
    category: "web",
    description:
      "Create, customize, and manage QR codes for products, events, and personal use.",
    image: "/images/qr-code.png",
    tags: ["Web UI/UX", "Generator", "Branding"],
    caseStudyUrl:
      "https://www.behance.net/gallery/231971023/QR-Code-Generation-platform",
    isLive: false,
  },
  {
    id: "fp-car-sell",
    title: "Car Sell",
    category: "web",
    description:
      "A fast, safe, and simple car selling experience with trust-centered UX.",
    image: "/images/car-sell.png",
    tags: ["Web UI/UX", "Marketplace", "Automotive"],
    caseStudyUrl:
      "https://www.behance.net/gallery/231965493/Car-Selling-Website",
    isLive: false,
  },
  {
    id: "fp-pureselect-ecommerce",
    title: "Pureselect E-commerce",
    category: "web",
    description:
      "Modern e-commerce with conversion-oriented product discovery and checkout.",
    image: "/images/pureselect-ecommerce.png",
    tags: ["Web UI/UX", "E-commerce"],
    caseStudyUrl:
      "https://www.behance.net/gallery/213551663/Pureselect-E-Commerce-Design",
    isLive: true,
    liveUrl: "https://example-live-pureselect.com", // optional; remove if none
  },
  {
    id: "fp-inventory-dashboard",
    title: "Inventory Dashboard",
    category: "dashboard",
    description:
      "Inventory insights with real-time status, alerts, and clear data visualization.",
    image: "/images/inventory-dashboard.jpg",
    tags: ["Dashboard", "Analytics", "Data Viz"],
    caseStudyUrl:
      "https://www.behance.net/gallery/212568343/Inventory-Management-Dashboard",
    isLive: false,
  },
  {
    id: "fp-gearbox-ecommerce",
    title: "Gear Box E-commerce",
    category: "web",
    description:
      "E-commerce for parts with structured navigation and robust filtering.",
    image: "/images/gearbox-ecommerce.jpg",
    tags: ["Web UI/UX", "E-commerce"],
    caseStudyUrl:
      "https://www.behance.net/gallery/209871683/Gearbox-E-commerce-Website",
    isLive: false,
  },
  {
    id: "fp-creatiwise",
    title: "Creatiwise",
    category: "web",
    description:
      "Clean marketing site showcasing services and work with a crisp visual system.",
    image: "/images/creatiwise.jpg",
    tags: ["Web UI/UX", "Marketing"],
    caseStudyUrl:
      "https://www.behance.net/gallery/212730529/Creatiwise-Website-Design",
    isLive: false,
  },
  {
    id: "fp-wecycle",
    title: "Wecycle",
    category: "mobile",
    description:
      "Eco-conscious app with gamified habits and easy drop-off discovery.",
    image: "/images/wecycle.jpg",
    tags: ["Mobile UI/UX", "Sustainability"],
    caseStudyUrl: "https://www.behance.net/gallery/208158883/Wecycle-App",
    isLive: false,
  },
  {
    id: "fp-wecycle-presentation",
    title: "Wecycle Presentation",
    category: "mobile",
    description:
      "High-fidelity mobile flows and presentation assets for stakeholder review.",
    image: "/images/wecycle-presentation.jpg",
    tags: ["Mobile UI/UX", "Presentation"],
    caseStudyUrl:
      "https://www.behance.net/gallery/210357605/Wecycle-App-Presentation",
    isLive: false,
  },
  {
    id: "fp-mdth-tech-learning",
    title: "Tech Learning (MDTH)",
    category: "web",
    description:
      "Accessible learning platform with structured modules and progress tracking.",
    image: "/images/mdth-tech-learning.jpg",
    tags: ["Web UI/UX", "EdTech"],
    caseStudyUrl:
      "https://www.behance.net/gallery/209613077/A-case-study-for-Making-A-Difference-Tech-Hub-%28MDTH%29",
    isLive: false,
  },
  {
    id: "fp-debissilia",
    title: "Debissilia",
    category: "web",
    description:
      "Academic and learning website with clear navigation and resource access.",
    image: "/images/debissilia.jpg",
    tags: ["Web UI/UX", "Education"],
    caseStudyUrl:
      "https://www.behance.net/gallery/232022601/Academic-and-Learning-website",
    isLive: false,
  },
  {
    id: "fp-stylehub",
    title: "StyleHub",
    category: "mobile",
    description:
      "Fashion shopping app with curated feeds and simple, fast checkout.",
    image: "/images/stylehub.jpg",
    tags: ["Mobile UI/UX", "E-commerce"],
    caseStudyUrl:
      "https://www.behance.net/gallery/200844327/StyleHub-E-commerce-Fahion-App",
    isLive: false,
  },
];
