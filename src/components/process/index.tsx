"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/data/processSteps";

const easing: [number, number, number, number] = [0.42, 0, 0.58, 1];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-white to-gray-100"
    >
      {processSteps.map((step, idx) => {
        const Icon = step.icon;

        return (
          <div
            key={step.id}
            className="snap-start h-screen flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, ease: easing }}
              className="w-full max-w-md aspect-square bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between border border-gray-200"
            >
              {/* Top section with icon and title */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${step.color}`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500">{step.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mt-4 flex-1">
                {step.description}
              </p>

              {/* Deliverable */}
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-6">
                <ArrowRight size={16} className="text-blue-500" />
                <span>
                  <strong>Deliverable:</strong> {step.deliverable}
                </span>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default ProcessSection;
