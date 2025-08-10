// No "use client" needed
import React from "react";
import { ArrowRight, UserPlus } from "lucide-react";
import HeroMetrics from "../heroMetrics";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hero",
});
const HeroText: React.FC = () => {
  return (
    <section
      className={`${epilogue.className} relative py-14 sm:py-20 min-h-[80vh] flex items-center`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Brand */}
        <div data-aos="fade-up" data-aos-delay="50" className="mb-6 sm:mb-8">
          <div className="relative inline-block">
            <h3 className="text-white/80 text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase px-4 py-2">
              MIKE LAKERS
            </h3>
            <div className="absolute inset-0 border-2 border-dotted border-white/30 rounded-lg animate-dash"></div>
          </div>
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="120"
          className="
            text-center text-[64px] leading-[80px] font-bold
            text-[#ECECEC]
            mb-6 sm:mb-8
            max-w-full
            sm:max-w-[1000px]
            max-sm:text-3xl max-sm:leading-snug
            sm:text-4xl sm:leading-[1.2]
            md:text-5xl md:leading-[1.2]
          "
        >
          Hire a Product Designer with a Founder’s Mindset —{" "}
          <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            No Equity
          </span>{" "}
          Required.
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="
            text-center text-[20px] leading-[32px] text-white/80
            mb-10 max-w-xl sm:max-w-3xl mx-auto
            max-sm:text-base max-sm:leading-6
          "
        >
          I dive deep into your business goals, user problems, and market
          realities before touching a single pixel.
        </p>

        {/* Metrics */}
        <div data-aos="fade-up" data-aos-delay="260" className="mb-10">
          <HeroMetrics />
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="320">
          <p className="text-white/60 text-sm sm:text-base mb-6">
            Ready to solve real problems, not just make things pretty?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#process"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center gap-3"
            >
              See My Process
              <ArrowRight size={20} />
            </a>

            <a
              href="#contact-me"
              className="border border-white/30 hover:border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-transform duration-300 hover:scale-105 hover:bg-white/5 flex items-center gap-3 transform hover:-translate-y-1"
            >
              <UserPlus size={20} />
              To Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
