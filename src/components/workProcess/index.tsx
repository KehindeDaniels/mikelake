"use client";
import React from "react";
import { Calendar, TrendingUp, Edit3, Monitor } from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Research",
    description:
      "I start with research and stakeholder interviews to define the problem, audience, and goals.",
    icon: Calendar,
    bgColor: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    id: 2,
    title: "Define",
    description:
      "I map out user flows, wireframes, and information architecture to lay a strong foundation.",
    icon: TrendingUp,
    bgColor: "bg-purple-100 dark:bg-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 3,
    title: "Design",
    description:
      "I create clean, functional, and engaging interfaces tailored to users and brand identity.",
    icon: Edit3,
    bgColor: "bg-purple-100 dark:bg-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "I prepare developer-friendly handoffs, support implementation, and iterate based on feedback.",
    icon: Monitor,
    bgColor: "bg-purple-100 dark:bg-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

const WorkProcess: React.FC = () => {
  return (
    <section className="pb-16 pt-32 bg-gray-100 dark:bg-[#17263d] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Work Process
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Every project begins with understanding — the user, the problem,
                and the goal. I believe great design is rooted in strategy and
                empathy, not just aesthetics.
              </p>

              <p>
                My process is collaborative, structured, and flexible enough to
                adapt to each product&#39;s unique needs.
              </p>
            </div>
          </div>

          {/* Right Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROCESS_STEPS.map((step) => {
              const IconComponent = step.icon;

              return (
                <div
                  key={step.id}
                  className="
                    rounded-2xl p-6
                    bg-white/40 dark:bg-white/5
                    backdrop-blur-xl
                    shadow-2xl shadow-gray-300/30 dark:shadow-black/30
                    border border-white/20 dark:border-white/10
                    hover:shadow-md transition-shadow duration-300
                    relative overflow-hidden
                    before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
                    before:border before:border-white/60 before:opacity-10
                    before:bg-gradient-to-br before:from-white/60 before:to-transparent
                    dark:before:from-white/10 dark:before:to-transparent
                  "
                >
                  {/* Icon */}
                  <div
                    className={`${step.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`w-6 h-6 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {step.id}. {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
