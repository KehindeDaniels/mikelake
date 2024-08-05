import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";

const Hero: React.FC = () => {
  const profile = "/images/profile.png";

  return (
    <section className="bg-gradient-hero py-20 font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse items-center md:flex-row md:justify-between">
        {/* Left */}
        <div className="text-center md:text-left flex-1 flex flex-col items-center sm:items-start ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I am <br />
            <span className="gradient-text">Michael Adeleke</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            A Product Designer
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            I help businesses and companies reach their goals by designing
            user-centric digital products & interactive experiences.
          </p>
          <button className="bg-light-50 dark:bg-dark-50 text-dark-50 dark:text-light-50 py-3 px-6 w-64 justify-center rounded-xl flex gap-4 items-center hover:bg-light-900 transition duration-300">
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
              width={288}
              height={288}
              className="object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
