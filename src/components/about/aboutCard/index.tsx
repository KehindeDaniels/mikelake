"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { SOCIAL_LINKS, CONTENT_DATA } from "../../../data/aboutData";
import Reveal from "../../Reveal";

interface Props {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}

const AboutCard: React.FC<Props> = ({ isExpanded, setIsExpanded }) => {
  const handleBookCall = () => {
    window.open("https://calendly.com/your-username", "_blank");
  };

  return (
    <Reveal y={30}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div
          className="
            relative
            p-6 sm:p-8 md:p-12 lg:p-20
            -mb-12 md:-mb-20 
            rounded-3xl 
            flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8
            border border-white/20 dark:border-white/10 
            bg-white/40 dark:bg-white/5 
            backdrop-blur-sm
            shadow-xl shadow-gray-300/80 dark:shadow-black/10 
            transition-colors duration-500
            before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none
            before:border before:border-white/60 before:opacity-20
            before:bg-gradient-to-br before:from-white/60 before:to-transparent
            dark:before:from-white/20 dark:before:to-transparent
          "
        >
          {/* Image + Socials */}
          <Reveal y={20} delay={0.05} className="relative z-10">
            <div
              className="
                w-56 sm:w-64 md:w-72 lg:w-80
                shrink-0 order-1
              "
            >
              {/* Aspect on mobile/tablet, fixed height on lg */}
              <div className="relative  rounded-xl aspect-[3/4] lg:aspect-auto lg:h-[400px]">
                <Image
                  src={CONTENT_DATA.image.src}
                  alt={CONTENT_DATA.image.alt}
                  fill
                  className="object-cover object-center rounded-md"
                  priority
                  sizes="(max-width: 1024px) 60vw, 320px"
                />

                {/* Socials OVER the image on all sizes */}
                <div className="absolute w-full -bottom-8 lg:-bottom-12 flex justify-center">
                  <div
                    className="
                    
                      flex gap-2 lg:gap-3 
                      bg-white/70 dark:bg-gray-700/40 
                      backdrop-blur-sm 
                      p-2.5 lg:p-3 
                      shadow-xl shadow-gray-300/60 dark:shadow-black/10 
                      rounded-lg 
                      border border-white/40 dark:border-white/10
                    "
                  >
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="
                            w-9 h-9 sm:w-10 sm:h-10
                            bg-white/80 dark:bg-white/10 
                            rounded-lg flex items-center justify-center 
                            shadow-lg hover:shadow-xl 
                            transition-all duration-300 cursor-pointer group
                          "
                        >
                          <Icon
                            className={`w-5 h-5 ${social.color} dark:text-white ${social.hoverColor} group-hover:scale-110 transition-transform`}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text Section */}
          <Reveal y={24} delay={0.1} className="flex-1 order-2">
            <div className="w-full lg:p-8 xl:p-12 lg:pl-8 pt-2 lg:pt-0">
              <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  <span>Most Designers Create. </span>
                  <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                    I Build Businesses.
                  </span>
                </h1>

                {/* Collapsible copy; only this column expands */}
                <div className="overflow-hidden">
                  <div
                    className={`space-y-4 mb-6 transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-[420px]" : "max-h-20"
                    }`}
                  >
                    {!isExpanded ? (
                      <p className="text-gray-800 dark:text-gray-300 text-base leading-relaxed">
                        {CONTENT_DATA.description.preview}
                      </p>
                    ) : (
                      CONTENT_DATA.description.full.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))
                    )}
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm mb-8 transition-colors duration-200 group"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                  {isExpanded ? (
                    <ChevronUp
                      size={16}
                      className="group-hover:-translate-y-0.5 transition-transform"
                    />
                  ) : (
                    <ChevronDown
                      size={16}
                      className="group-hover:translate-y-0.5 transition-transform"
                    />
                  )}
                </button>

                {/* Call to Action */}
                <button
                  onClick={handleBookCall}
                  className="mx-auto lg:mx-0 font-semibold px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Book a Call
                  <Calendar size={18} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
};

export default AboutCard;
