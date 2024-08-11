import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";

const Hero: React.FC = () => {
  const profile = "/images/mike.png";
  const WhiteStar = "/starWhite.svg";
  const DarkStar = "/starDark.svg";
  const BlueStar = "/starBlue.svg";

  return (
    <section className=" bg-gradient-hero py-8 sm:py-20 font-manrope">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse items-center md:flex-row md:justify-between">
        {/* Left */}
        <div className="text-center md:text-left flex-1 flex flex-col items-center sm:items-start ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight z-50">
            Hi, I am <br />
            <span className="gradient-text text-6xl font-bold leading-[70px]">
              Michael Adeleke
            </span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 z-50 sm:z-0">
            A Product Designer
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 z-50 sm:z-0">
            I help businesses and companies reach their goals by designing
            user-centric digital products & interactive experiences.
          </p>
          <button className="bg-light-50 dark:bg-dark-50 text-dark-50 dark:text-light-50 py-3 px-6 w-64 justify-center rounded-xl flex gap-4 items-center hover:bg-light-900 transition duration-300 z-50 sm:z-0">
            <CiMail className="text-2xl font-bold" />
            Contact Me
          </button>
        </div>
        {/* Right */}
        <div className="mt-10 md:mt-0 flex-1 shrink-0 items-center justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full flex-1 ml-auto overflow-hidden">
            <Image
              src={profile}
              alt="Michael Adeleke"
              width={1000}
              height={1000}
              className="object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
        </div>
        {/* mesh and scribbles */}
        <div className="h-60 w-60 absolute sm:-top-16 sm:left-32 opacity-80 bg-dark-blur dark:bg-dark-blur filter blur-custom2 dark:blur-custom"></div>
        <div className="h-24 w-24 absolute bottom-0 right-0  bg-dark-blur filter blur-custom"></div>
        {/* Star */}
        <div className="">
          <div className="absolute -top-8 left-1/4">
            <Image
              src={WhiteStar}
              alt="star"
              width={1000}
              height={1000}
              className="w-8 h-8"
            />
          </div>
          <div className="absolute dark:hidden -top-8 left-1/4">
            <Image
              src={BlueStar}
              alt="star"
              width={1000}
              height={1000}
              className="w-8 h-8"
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src={DarkStar}
              alt="star"
              width={1000}
              height={1000}
              className="w-8 h-8"
            />
          </div>
          <div className="absolute dark:hidden bottom-0 right-0">
            <Image
              src={BlueStar}
              alt="star"
              width={1000}
              height={1000}
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
