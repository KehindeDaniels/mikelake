// data/featuredProjectsData.ts

import type { FeaturedProject } from "@/types/interfaces";

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: "fp-1",
    title: "FinTech Mobile Banking App",
    category: "MOBILE UI/UX",
    description:
      "Revolutionary mobile banking experience with AI-powered insights, seamless transactions, and personalized financial management tools.",
    image: "/assets/featured/banking-app.jpg",
    tags: ["React Native", "UI/UX Design", "Fintech", "Mobile"],
    caseStudyUrl: "/case-studies/fintech-banking",
    isLive: true,
    liveUrl: "https://banking-demo.example.com",
    completionDate: "2024",
    client: "SecureBank Corp",
  },
  {
    id: "fp-2",
    title: "E-Commerce Platform Redesign",
    category: "WEB UI/UX",
    description:
      "Complete redesign of a multi-vendor marketplace focusing on user experience, conversion optimization, and modern design principles.",
    image: "/assets/featured/ecommerce-platform.jpg",
    tags: ["Next.js", "E-commerce", "Web Design", "UX Research"],
    caseStudyUrl: "/case-studies/ecommerce-redesign",
    isLive: true,
    liveUrl: "https://marketplace-demo.example.com",
    completionDate: "2024",
    client: "ShopFlow Inc",
  },
  {
    id: "fp-3",
    title: "Healthcare Dashboard System",
    category: "DASHBOARD UI/UX",
    description:
      "Comprehensive healthcare management dashboard for medical professionals with patient tracking, analytics, and appointment scheduling.",
    image: "/assets/featured/healthcare-dashboard.jpg",
    tags: ["React", "Healthcare", "Dashboard", "Data Visualization"],
    caseStudyUrl: "/case-studies/healthcare-dashboard",
    isLive: false,
    completionDate: "2024",
    client: "MedTech Solutions",
  },
  {
    id: "fp-4",
    title: "AI-Powered Learning Platform",
    category: "EDTECH UI/UX",
    description:
      "Next-generation e-learning platform with AI tutoring, progress tracking, and interactive content delivery for enhanced learning outcomes.",
    image: "/assets/featured/learning-platform.jpg",
    tags: ["Vue.js", "EdTech", "AI Integration", "Learning"],
    caseStudyUrl: "/case-studies/ai-learning-platform",
    isLive: true,
    liveUrl: "https://learn-ai-demo.example.com",
    completionDate: "2024",
    client: "EduFuture Ltd",
  },
  {
    id: "fp-5",
    title: "Smart City Management Hub",
    category: "ENTERPRISE UI/UX",
    description:
      "Centralized smart city management platform for monitoring infrastructure, traffic, energy consumption, and citizen services.",
    image: "/assets/featured/smart-city.jpg",
    tags: ["Angular", "IoT", "Smart City", "Enterprise"],
    caseStudyUrl: "/case-studies/smart-city-hub",
    isLive: false,
    completionDate: "2023",
    client: "CityTech Municipal",
  },
  {
    id: "fp-6",
    title: "Creative Portfolio Website",
    category: "PORTFOLIO UI/UX",
    description:
      "Stunning portfolio website for a creative agency featuring interactive animations, case studies, and immersive project showcases.",
    image: "/assets/featured/creative-portfolio.jpg",
    tags: ["Next.js", "Portfolio", "Creative", "Animations"],
    caseStudyUrl: "/case-studies/creative-portfolio",
    isLive: true,
    liveUrl: "https://creative-demo.example.com",
    completionDate: "2024",
    client: "DesignStudio Creative",
  },
];
