// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socialLinks";
import { Icon as LucideIcon } from "lucide-react";

const Footer: React.FC = () => {
  // Determine if the icon is a Lucide component or an image URL
  const renderIcon = (icon: any) => {
    if (typeof icon === "string") {
      return <Image src={icon} alt="social icon" width={24} height={24} />;
    } else {
      // Render the Lucide icon component directly
      const IconComponent = icon;
      return <IconComponent size={24} className="fill-current text-white" />;
    }
  };

  return (
    <footer className=" dark:bg-gray-dark dark:text-dark-900 text-light-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl mb-4">Get in Touch.</h2>
        <p className="mb-6">
          If you are looking to hire a product designer, I’m currently available
          for freelance and full time work.
        </p>
        <a href="mailto:mikadek82@gmail.com" className="block mb-6">
          mikadek82@gmail.com
        </a>
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 dark:text-dark-300 text-light-50 transition-colors"
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
