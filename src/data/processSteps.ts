import { Target, Users, Layers, TestTube, Code } from "lucide-react";

export type ProcessStep = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverable: string;
  color: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Business Deep Dive",
    subtitle: "Understanding Your Vision & Market Reality",
    description:
      "I think like your co-founder, diving into your business model, target market, and growth goals before any design decisions.",
    icon: Target,
    deliverable: "Strategic foundation document",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "02",
    title: "User Research & Validation",
    subtitle: "Getting Into Your Users' Heads",
    description:
      "I don't design for assumptions. User interviews, pain point mapping, and behavioral analysis drive every decision.",
    icon: Users,
    deliverable: "Research report with validated problems",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "03",
    title: "Strategic Design Framework",
    subtitle: "Building Systems, Not Just Screens",
    description:
      "Design systems that scale with your team, user flows optimized for conversion, and components that reduce dev time.",
    icon: Layers,
    deliverable: "Design system ready for development",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "04",
    title: "Prototype & Validate",
    subtitle: "Test Before You Build",
    description:
      "Interactive prototypes, user testing, stakeholder feedback, and technical feasibility review ensure we build the right thing.",
    icon: TestTube,
    deliverable: "Validated prototype with specifications",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "05",
    title: "Development Partnership",
    subtitle: "Ensuring Quality Through Launch",
    description:
      "I partner with your dev team through launch with regular reviews, quality checks, and post-launch optimization.",
    icon: Code,
    deliverable: "Successfully launched product",
    color: "from-indigo-500 to-purple-500",
  },
];
