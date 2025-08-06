// components/AboutCard.tsx
"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { SOCIAL_LINKS, CONTENT_DATA } from "../../data/aboutData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}

const AboutCard: React.FC<Props> = ({ isExpanded, setIsExpanded }) => {
  const handleBookCall = () => {
    window.open("https://calendly.com/your-username", "_blank");
  };

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.4 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="floating-bounce max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8"
    >
      <div className="p-8 md:p-16 lg:p-24 -mb-16 md:-mb-32 rounded-3xl shadow-2xl shadow-gray-300/80 flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0 backdrop-blur-sm border border-gray-100/50">
        {/* Image + Socials */}
        <div className="w-full max-w-sm lg:w-80 h-80 lg:h-[400px] lg:flex-1 relative order-1">
          <Image
            src={CONTENT_DATA.image.src}
            alt={CONTENT_DATA.image.alt}
            fill
            className="object-cover object-center block rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, 320px"
          />

          <div className="absolute w-full -bottom-8 lg:-bottom-12 flex justify-center">
            <div className="flex gap-2 lg:gap-3 bg-white p-3 lg:p-4 shadow-xl shadow-gray-300/80 rounded-lg">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <Icon
                      className={`w-5 h-5 ${social.color} ${social.hoverColor} group-hover:scale-110 transition-transform`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full lg:p-8 xl:p-12 lg:pl-8 pt-8 lg:pt-0 order-2">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {CONTENT_DATA.title.highlight}
              </span>
            </h1>

            <div className="overflow-hidden">
              <div
                className={`space-y-4 mb-6 transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-[400px]" : "max-h-20"
                } opacity-100`}
              >
                {!isExpanded ? (
                  <p className="text-gray-600 text-base leading-relaxed">
                    {CONTENT_DATA.description.preview}
                  </p>
                ) : (
                  CONTENT_DATA.description.full.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-base leading-relaxed"
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
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm mb-8 transition-colors duration-200 group"
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
              className="font-semibold px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Book a Call
              <Calendar size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
