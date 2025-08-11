// components/Skills.tsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Palette,
  Figma,
  Layers,
  PenTool,
  Zap,
  Star,
  ArrowUpRight,
  Smartphone,
  Globe,
  Camera,
  Brush,
  Type,
  Eye,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Designer-focused skills data
  const designerSkills = [
    // UI/UX Design Tools
    { id: 1, name: "Figma", icon: Figma, category: "design" },
    { id: 2, name: "Adobe XD", icon: Layers, category: "design" },
    { id: 3, name: "Sketch", icon: PenTool, category: "design" },
    { id: 4, name: "Framer", icon: Zap, category: "design" },

    // Visual Design
    { id: 5, name: "Photoshop", icon: Camera, category: "visual" },
    { id: 6, name: "Illustrator", icon: Brush, category: "visual" },
    { id: 7, name: "After Effects", icon: Sparkles, category: "visual" },
    { id: 8, name: "InDesign", icon: Type, category: "visual" },

    // Strategy & Research
    { id: 9, name: "User Research", icon: Eye, category: "strategy" },
    { id: 10, name: "Prototyping", icon: Smartphone, category: "strategy" },
    { id: 11, name: "Design Systems", icon: Target, category: "strategy" },
    { id: 12, name: "Brand Design", icon: Lightbulb, category: "strategy" },
  ];

  // Organize skills into categories
  const categories = [
    {
      title: "Design Tools",
      icon: <Palette className="w-5 h-5" />,
      skills: designerSkills.filter((skill) => skill.category === "design"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Visual Creation",
      icon: <Brush className="w-5 h-5" />,
      skills: designerSkills.filter((skill) => skill.category === "visual"),
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "UX Strategy",
      icon: <Target className="w-5 h-5" />,
      skills: designerSkills.filter((skill) => skill.category === "strategy"),
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      className="relative font-inter 
  bg-white 
  dark:bg-gradient-to-br 
  dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 
  text-gray-900 dark:text-white 
  py-24 px-5 overflow-hidden 
  transition-colors duration-300"
    >
      {/* Animated Background Elements - Different for light/dark */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode background */}
        <div className="dark:hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Dark mode background */}
        <div className="hidden dark:block">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-400/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Centered Container */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header Section with Enhanced Design */}
        <div className="mb-20">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 
  bg-blue-50/80 
  dark:bg-gradient-to-r dark:from-blue-900/40 dark:to-purple-900/40 
  backdrop-blur-sm 
  border border-blue-200/50 dark:border-white/10 
  text-blue-600 dark:text-blue-300 
  px-6 py-3 rounded-full mb-8 text-sm font-medium"
          >
            <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
            Design Arsenal
            <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse ml-2"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Tools I Use
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              To Create My Work
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            My go-to design and development tools for every project.
          </p>
        </div>

        {/* Skills Categories - Centered Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="w-full max-w-sm group">
              {/* Category Header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-20 border border-gray-200/50 dark:border-white/10`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid - Centered */}
              <div className="grid grid-cols-2 gap-4 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.id}
                    className="relative group/skill w-full"
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Card */}
                    <div
                      className={`
                      relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer w-full text-center
                      ${
                        hoveredSkill === skill.id
                          ? "bg-white/90 dark:bg-gradient-to-br dark:from-white/10 dark:to-white/5 border-gray-300 dark:border-white/20 scale-105 shadow-2xl shadow-gray-200/50 dark:shadow-blue-500/10"
                          : "bg-white/70 dark:bg-white/5 border-gray-200/70 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg"
                      }
                      backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2
                    `}
                    >
                      {/* Glow effect on hover */}
                      <div
                        className={`
                        absolute inset-0 rounded-2xl transition-opacity duration-500
                        bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-10 dark:group-hover/skill:opacity-20 blur
                      `}
                      ></div>

                      {/* Icon container with enhanced styling */}
                      <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                        <div
                          className={`
                          absolute inset-0 rounded-2xl bg-gradient-to-r ${
                            category.color
                          } opacity-10 dark:opacity-20
                          ${hoveredSkill === skill.id ? "animate-pulse" : ""}
                        `}
                        ></div>
                        <skill.icon className="relative w-8 h-8 text-gray-700 dark:text-white drop-shadow-lg" />
                      </div>

                      {/* Skill name */}
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
                        {skill.name}
                      </h4>

                      {/* Proficiency indicator */}
                      <div className="flex items-center justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < 4
                                ? `bg-gradient-to-r ${category.color}`
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Hover arrow */}
                      <ArrowUpRight
                        className={`
                        w-5 h-5 text-gray-500 dark:text-white/50 absolute top-4 right-4 transition-all duration-300
                        ${
                          hoveredSkill === skill.id
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 translate-x-2 translate-y-2"
                        }
                      `}
                      />

                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Centered */}
        <div className="relative flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 backdrop-blur-sm border border-gray-200/70 dark:border-white/10 rounded-2xl px-8 py-4 shadow-lg dark:shadow-none">
            <div className="flex -space-x-2">
              {designerSkills.slice(0, 4).map((skill, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white dark:bg-white/10 border-2 border-gray-200 dark:border-white/20 flex items-center justify-center shadow-sm"
                >
                  <skill.icon className="w-4 h-4 text-gray-600 dark:text-white" />
                </div>
              ))}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              +{designerSkills.length - 4} more tools in my creative arsenal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
