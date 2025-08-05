// components/WorkProcess.tsx
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
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    title: "Design",
    description:
      "I create clean, functional, and engaging interfaces tailored to users and brand identity.",
    icon: Edit3,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "I prepare developer-friendly handoffs, support implementation, and iterate based on feedback.",
    icon: Monitor,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const WorkProcess: React.FC = () => {
  return (
    <section className="pb-16 pt-32 bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work Process
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
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
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`${step.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`w-6 h-6 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.id}. {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
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
