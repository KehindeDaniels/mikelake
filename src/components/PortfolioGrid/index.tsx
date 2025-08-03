"use client";
import React from "react";
import ProjectCard from "../ProjectCard";
// import ProjectCard from "@/components/projectCard";

// Smart data structure - easy to update
interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imagePath: string;
  colors: string;
}

const portfolioData: ProjectItem[] = [
  {
    id: 1,
    title: "Breaking Barriers",
    category: "Sports Platform",
    imagePath: "/projects/breaking-barriers.jpg",
    colors: "from-orange-400 via-red-500 to-pink-500",
  },
  {
    id: 2,
    title: "Portfolio Showcase",
    category: "Creative Portfolio",
    imagePath: "/projects/portfolio-showcase.jpg",
    colors: "from-pink-400 via-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Nike Strength",
    category: "Fitness App",
    imagePath: "/projects/nike-strength.jpg",
    colors: "from-gray-400 via-gray-600 to-gray-800",
  },
  {
    id: 4,
    title: "Payment Infrastructure",
    category: "Fintech Solution",
    imagePath: "/projects/payment-infra.jpg",
    colors: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    id: 5,
    title: "Music Platform",
    category: "Streaming Service",
    imagePath: "/projects/music-platform.jpg",
    colors: "from-purple-500 via-pink-500 to-red-500",
  },
  {
    id: 6,
    title: "Level Up Design",
    category: "Design System",
    imagePath: "/projects/level-up.jpg",
    colors: "from-orange-400 via-red-500 to-pink-600",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    category: "Online Store",
    imagePath: "/projects/ecommerce.jpg",
    colors: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    id: 8,
    title: "Dashboard Analytics",
    category: "Data Visualization",
    imagePath: "/projects/dashboard.jpg",
    colors: "from-cyan-400 via-blue-500 to-indigo-600",
  },
];

// Split data into two rows for different animations
const topRowProjects = portfolioData.slice(0, 4);
const bottomRowProjects = portfolioData.slice(4, 8);

const PortfolioGrid: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-8 overflow-hidden">
      <div className="relative max-w-[85rem] mx-auto px-4">
        {/* Sleek Glassmorphism Container */}
        <div
          className="relative rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-black/20 p-8 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow:
              "0 25px 45px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Top Row - Moving Right (3.5 cards visible) */}
          <div className="flex gap-6 mb-6 animate-scroll-right">
            <div className="flex gap-6 min-w-max">
              {topRowProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {/* Duplicate for seamless loop */}
              {topRowProjects.map((project) => (
                <ProjectCard
                  key={`${project.id}-duplicate`}
                  project={project}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Left (3.5 cards visible) */}
          <div className="flex gap-6 animate-scroll-left">
            <div className="flex gap-6 min-w-max">
              {bottomRowProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {/* Duplicate for seamless loop */}
              {bottomRowProjects.map((project) => (
                <ProjectCard
                  key={`${project.id}-duplicate`}
                  project={project}
                />
              ))}
            </div>
          </div>

          {/* Enhanced gradient overlays for clean edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none z-10"></div>

          {/* Additional glassmorphism effect */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
        </div>

        {/* View Recent Works Button */}
        <div className="text-center mt-8">
          <button className="text-white/60 hover:text-white font-medium text-lg transition-all duration-300 hover:underline underline-offset-4 group">
            <span className="relative">
              View recent works
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PortfolioGrid;
