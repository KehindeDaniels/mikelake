"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, Grid3X3, Sparkles } from "lucide-react";
import { featuredProjectsData } from "@/data/featuredProjectData";
import FeaturedProjectCard from "@/components/featuredProjectCard";
// import FeaturedProjectCard from "@/components/FeaturedProjectCard";

const FILTERS = ["all", "mobile", "web", "dashboard"] as const;
type Filter = (typeof FILTERS)[number];

const FeaturedProjectsGrid: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return featuredProjectsData;
    return featuredProjectsData.filter((p) => p.category === filter);
  }, [filter]);

  const projectsToShow = showAll ? filtered : filtered.slice(0, 6); // 2 rows on desktop

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-[#0d1a2d] dark:via-[#132238] dark:to-[#0d1a2d] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 dark:bg-blue-500/10 dark:text-blue-300">
            <Grid3X3 className="w-4 h-4" />
            <span>Portfolio Showcase</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Filters: All / Mobile / Web / Dashboard */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 capitalize
                ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20 dark:border-white/10 dark:hover:text-blue-400"
                }
              `}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Grid: 1 / 2 / 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsToShow.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Load More */}
        {filtered.length > projectsToShow.length && (
          <div className="text-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="group inline-flex items-center gap-3 bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {showAll ? "Show Less Projects" : "Load More Projects"}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjectsGrid;
