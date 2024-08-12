// components/AboutMe.tsx
import Image from "next/image";
import React from "react";

const AboutMe: React.FC = () => {
  const src = "/images/about.png";
  return (
    <div className="font-manrope project text-white py-16 px-5 md:px-10  mx-auto">
      <div className=" flex flex-col md:gap-8 md:flex-row">
        <div className="flex-2">
          <h2 className="text-xl font-bold mb-6">A BIT ABOUT ME</h2>
          <p className="text-base mb-8 font-extralight">
            I am a UI/UX designer who is passionate about creating{" "}
            <span className="font-medium">
              beautiful and joyful digital experiences. Besides design, I love
              music, games, and travelling.
            </span>
          </p>
        </div>
        <div className="rounded-lg  flex justify-end ">
          <Image
            src={src}
            alt="Music"
            width={500}
            height={500}
            className="object-cover shrink-0  w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
