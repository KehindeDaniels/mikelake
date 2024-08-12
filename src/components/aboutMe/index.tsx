// components/AboutMe.tsx
import Image from "next/image";
import React from "react";

const AboutMe: React.FC = () => {
  const src = "/images/about.png";
  return (
    <div className="font-manrope project text-light-900 dark:text-dark-900 py-16 px-5 md:px-10  mx-auto ">
      <div className=" flex flex-col md:gap-8 max-h-[500px] md:flex-row">
        <div className="flex-1 pt-16">
          <h2 className="text-xl font-bold mb-6">A BIT ABOUT ME</h2>
          <p className="text-base mb-8 font-light">
            I am a UI/UX designer who is passionate about creating{" "}
            <span className="font-medium">
              beautiful and joyful digital experiences. Besides design, I love
              music, games, and travelling.
            </span>
          </p>
        </div>
        <div className="rounded-lg  flex flex-1 justify-end ">
          <Image
            src={src}
            alt="Music"
            width={500}
            height={500}
            className="object-center shrink-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
