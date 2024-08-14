// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socialLinks";
import { Icon as LucideIcon } from "lucide-react";
import { Mail } from "lucide-react";

const Footer: React.FC = () => {
  // Determine if the icon is a Lucide component or an image URL
  const renderIcon = (icon: any, name: string) => {
    if (typeof icon === "string") {
      return (
        <div className="fill-dark p-2 founded-full dark:bg-dark-1000 bg-light-100">
          <Image
            src={icon}
            alt={`${name} icon`}
            width={24}
            height={24}
            className=" "
          />
        </div>
      );
    } else {
      // Render the Lucide icon component directly
      const IconComponent = icon;
      return (
        <IconComponent
          size={24}
          className="fill-dark-900 dark:fill-dark-1000"
        />
      );
    }
  };

  return (
    <footer
      id="contact"
      className="dark:bg-gray-dark  text-light-100 dark:text-dark-300 py-12"
    >
      <div className="container mx-auto max-w-[1500px] px-4 text-center flex flex-col justify-center items-center ">
        <h2 className="text-xl mb-4">Get in Touch.</h2>
        <p className="mb-6">
          If you are looking to hire a product designer, I’m currently available
          for freelance and full time work.
        </p>
        <a
          href="mailto:mikadek82@gmail.com"
          className="flex gap-2 items-center dark:bg-dark-100 bg-light-100 text-light-1000 dark:text-dark-1000 px-4 sm:px-16 py-2 rounded-lg bg- mb-6"
        >
          <Mail className="" />
          mikadek82@gmail.com
        </a>
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              {renderIcon(link.icon, link.name)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
