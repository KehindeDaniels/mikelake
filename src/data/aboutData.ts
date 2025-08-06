// data/aboutData.ts
import { Download, ExternalLink, Linkedin, Twitter } from "lucide-react";
import { images } from "../../public/images";
// import { images } from "../../../public/images/index"; // adjust path if needed

export const SOCIAL_LINKS = [
  {
    id: "behance",
    icon: ExternalLink,
    href: "https://behance.net/username",
    label: "Behance Profile",
    color: "text-blue-600",
    hoverColor: "hover:text-blue-700",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://linkedin.com/in/username",
    label: "LinkedIn Profile",
    color: "text-blue-600",
    hoverColor: "hover:text-blue-800",
  },
  {
    id: "twitter",
    icon: Twitter,
    href: "https://twitter.com/username",
    label: "Twitter Profile",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-600",
  },
];

export const BACKGROUND_DECORATIONS = [
  {
    position: "top-10 right-10",
    size: "w-20 h-20",
    color: "bg-purple-100",
    opacity: "opacity-60",
  },
  {
    position: "bottom-20 left-10",
    size: "w-16 h-16",
    color: "bg-blue-100",
    opacity: "opacity-40",
  },
  {
    position: "top-1/2 right-1/4",
    size: "w-12 h-12",
    color: "bg-pink-100",
    opacity: "opacity-50",
  },
];

export const CONTENT_DATA = {
  title: {
    highlight: "Most Designers Create. I Build Businesses.",
  },
  description: {
    preview:
      "I partner with founders to create design systems that convert users, secure investor confidence, and scale with your vision. From fintech workflows to educational platforms—I've seen how the right design approach can make or break a product.",
    full: [
      "I partner with founders to create design systems that convert users, secure investor confidence, and scale with your vision. From fintech workflows to educational platforms—I've seen how the right design approach can make or break a product.",
      "Over the past 6 years, I've worked across mobile apps, web platforms, and SaaS solutions. I don't just ask 'How should this look?' I ask 'What problem are we solving, and how can design make it effortless for users?'",
      "Whether you're building a fintech app or educational tool, I bring founder-level thinking to every project. Great design isn't about awards—it's about building businesses that work.",
      "Ready to design something that matters?",
    ],
  },
  image: {
    src: images.profilePics,
    alt: "Michael Adeleke - Product Designer",
  },
};

export const ACTION_BUTTONS = (
  handleProjectsClick: () => void,
  handleDownloadCV: () => void
) => [
  {
    id: "projects",
    variant: "primary",
    text: "My Projects",
    icon: ExternalLink,
    onClick: handleProjectsClick,
  },
  {
    id: "download-cv",
    variant: "secondary",
    text: "Download CV",
    icon: Download,
    onClick: handleDownloadCV,
  },
];
