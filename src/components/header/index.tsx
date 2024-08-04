"use client";
import React, { useState } from "react";
import ThemeSwitch from "../theameSwitcher/ThemeSwitch";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logo = "/logo.svg";
  const navLinks = [
    { label: "About", url: "#" },
    { label: "Work", url: "#" },
    { label: "Contact", url: "#" },
  ];
  const actionButtons = [
    { label: "Log in", url: "/signin" },
    { label: "Start free trial", url: "/signup" },
  ];
  return (
    <header className="header-light header-dark border-b border-dark-glassmorphism dark:border-dark-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* logo */}
        <div className="">
          <Image
            className="w-28 "
            src={logo}
            alt="Logo"
            width={30}
            height={30}
          />
        </div>

        {/* link-cta */}
        <div className="flex items-center justify-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="text-light-300 dark:text-dark-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-4 ">
            <ThemeSwitch />
            <button className="bg-dark-1000 dark:bg-light-1000 text-light-1000 dark:text-dark-1000 px-4 py-1 rounded-xl">
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
