// // components/FeaturedProjects/FeaturedProjectsGrid.tsx
// "use client";
// import React, { useState } from "react";
// // import { featuredProjectsData } from "../../data/featuredProjectsData";
// // import FeaturedProjectCard from "./FeaturedProjectCard";
// import { ChevronDown, Grid3X3, Sparkles } from "lucide-react";
// import { featuredProjectsData } from "@/data/featuredProjectData";
// import FeaturedProjectCard from "../featuredProjectCard";

// const FeaturedProjectsGrid: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [filter, setFilter] = useState<string>("all");

//   // Get unique categories
//   const categories = [
//     "all",
//     ...Array.from(
//       new Set(featuredProjectsData.map((project) => project.category))
//     ),
//   ];

//   // Filter projects based on selected category
//   const filteredProjects =
//     filter === "all"
//       ? featuredProjectsData
//       : featuredProjectsData.filter((project) => project.category === filter);

//   // Show limited projects initially
//   const projectsToShow = showAll
//     ? filteredProjects
//     : filteredProjects.slice(0, 4);

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Grid3X3 className="w-4 h-4" />
//             <span>Portfolio Showcase</span>
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>

//           <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
//             Discover a selection of my most impactful work, showcasing
//             innovative solutions and exceptional user experiences across various
//             industries and platforms.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`
//                 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 capitalize
//                 ${
//                   filter === category
//                     ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
//                     : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
//                 }
//               `}
//             >
//               {category === "all"
//                 ? "All Projects"
//                 : category.replace(/-/g, " ")}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid - 2 columns */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {projectsToShow.map((project, index) => (
//             <FeaturedProjectCard
//               key={project.id}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Load More / Show Less Button */}
//         {filteredProjects.length > 4 && (
//           <div className="text-center">
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               <Sparkles className="w-4 h-4" />
//               <span>
//                 {showAll ? "Show Less Projects" : "Load More Projects"}
//               </span>
//               <ChevronDown
//                 className={`w-4 h-4 transition-transform duration-300 ${
//                   showAll ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//           </div>
//         )}

//         {/* Stats Section */}
//         {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
//           <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
//             <div className="text-2xl font-bold text-blue-600 mb-1">
//               {featuredProjectsData.length}+
//             </div>
//             <div className="text-gray-600 text-sm">Featured Projects</div>
//           </div>
//           <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
//             <div className="text-2xl font-bold text-green-600 mb-1">
//               {featuredProjectsData.filter((p) => p.isLive).length}+
//             </div>
//             <div className="text-gray-600 text-sm">Live Projects</div>
//           </div>
//           <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
//             <div className="text-2xl font-bold text-purple-600 mb-1">
//               {categories.length - 1}+
//             </div>
//             <div className="text-gray-600 text-sm">Categories</div>
//           </div>
//           <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
//             <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
//             <div className="text-gray-600 text-sm">Client Satisfaction</div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjectsGrid;
