// components/AboutMe.tsx
"use client";
import Image from "next/image";
import React from "react";
import {
  Download,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";
import { images } from "../../assets/index";

// Types
interface SocialLink {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color: string;
  hoverColor: string;
}

interface ActionButton {
  id: string;
  variant: "primary" | "secondary";
  text: string;
  icon?: React.ComponentType<any>;
  onClick: () => void;
}

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "twitter",
    icon: Twitter,
    href: "https://twitter.com/username",
    label: "Twitter Profile",
    color: "text-blue-600",
    hoverColor: "hover:text-blue-700",
  },
  {
    id: "instagram",
    icon: Instagram,
    href: "https://instagram.com/username",
    label: "Instagram Profile",
    color: "text-pink-600",
    hoverColor: "hover:text-pink-700",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://linkedin.com/in/username",
    label: "LinkedIn Profile",
    color: "text-blue-700",
    hoverColor: "hover:text-blue-800",
  },
  {
    id: "github",
    icon: Github,
    href: "https://github.com/username",
    label: "GitHub Profile",
    color: "text-gray-900",
    hoverColor: "hover:text-gray-700",
  },
];

const BACKGROUND_DECORATIONS = [
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

const CONTENT_DATA = {
  title: {
    prefix: "I am a",
    highlight: "Product Designer",
    suffix: "Creating Impact",
  },
  description: [
    "With a passion for user-centered design, I create seamless, functional, and visually compelling digital experiences. From research to high-fidelity prototypes.",
    "I help businesses connect with users through thoughtful design across mobile and web platforms.",
  ],
  image: {
    src: images.profilePics,
    alt: "Michael Adeleke - Product Designer",
  },
};

const AboutMe: React.FC = () => {
  // Handlers
  const handleProjectsClick = (): void => {
    // Navigate to projects section or page
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = (): void => {
    // Trigger CV download
    const link = document.createElement("a");
    link.href = "/assets/cv/michael-adeleke-cv.pdf";
    link.download = "Michael_Adeleke_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ACTION_BUTTONS: ActionButton[] = [
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

  // Components
  const SocialIcon: React.FC<{ social: SocialLink }> = ({ social }) => {
    const IconComponent = social.icon;

    return (
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
      >
        <IconComponent
          className={`w-5 h-5 ${social.color} ${social.hoverColor} group-hover:scale-110 transition-transform`}
        />
      </a>
    );
  };

  const ActionButton: React.FC<{ button: ActionButton }> = ({ button }) => {
    const baseClasses =
      "font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 flex items-center justify-center gap-2";

    const variantClasses = {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25",
      secondary:
        "border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 hover:bg-blue-50",
    };

    const IconComponent = button.icon;

    return (
      <button
        onClick={button.onClick}
        className={`${baseClasses} ${variantClasses[button.variant]}`}
        aria-label={button.text}
      >
        {button.text}
        {IconComponent && <IconComponent size={18} />}
      </button>
    );
  };

  const BackgroundDecoration: React.FC<{
    decoration: (typeof BACKGROUND_DECORATIONS)[0];
  }> = ({ decoration }) => (
    <div
      className={`absolute ${decoration.position} ${decoration.size} ${decoration.color} rounded-full ${decoration.opacity}`}
      aria-hidden="true"
    />
  );

  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-50 to-white relative "
      aria-labelledby="about-heading"
    >
      {/* Background decorative elements */}
      {BACKGROUND_DECORATIONS.map((decoration, index) => (
        <BackgroundDecoration key={index} decoration={decoration} />
      ))}

      <div className="relative z-20 ">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 ">
          <div className="p-24  rounded-3xl shadow-2xl shadow-gray-300/80 flex flex-col md:flex-row md:justify-between  items-center gap-0 backdrop-blur-sm border border-gray-100/50">
            {/* Image Section */}
            <div className="  w-full md:w-80 h-96 md:h-[400px] md:flex-1 relative ">
              <Image
                src={CONTENT_DATA.image.src}
                alt={CONTENT_DATA.image.alt}
                fill
                className="object-cover object-center block rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, 320px"
              />

              {/* Social Icons Overlay */}
              <div className="absolute  w-full  -bottom-12 flex justify-center ">
                <div
                  className="  flex gap-3  bg-white p-4 shadow-xl shadow-gray-300/80 rounded-lg"
                  role="list"
                >
                  {SOCIAL_LINKS.map((social) => (
                    <SocialIcon key={social.id} social={social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 md:p-12 md:pl-8">
              <div className="max-w-md">
                <h1
                  id="about-heading"
                  className="text-3xl md:text-4xl font-bold mb-2 leading-tight text-gray-900"
                >
                  {CONTENT_DATA.title.prefix}{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {CONTENT_DATA.title.highlight}
                  </span>
                  <br />
                  <span className="text-gray-900">
                    {CONTENT_DATA.title.suffix}
                  </span>
                </h1>

                <div className="space-y-4 mb-8">
                  {CONTENT_DATA.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {ACTION_BUTTONS.map((button) => (
                    <ActionButton key={button.id} button={button} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
