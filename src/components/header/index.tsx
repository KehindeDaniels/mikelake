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
    <>
      <header className="header-light header-dark border-b border-dark-glassmorphism dark:border-dark-300 ">
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
            <ul className="hidden sm:flex gap-6">
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
              <div className="z-50">
                <ThemeSwitch />
              </div>
              <button className="hidden sm:flex bg-dark-1000 dark:bg-light-1000 text-light-1000 dark:text-dark-1000 px-4 py-1 rounded-xl">
                Download CV
              </button>

              {/* hamburger */}
              <div
                onClick={toggleMenu}
                className="sm:hidden relative h-6 w-6   flex justify-center items-center z-[100000] "
              >
                <div
                  className={`w-3/4 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45 bg-white" : "-translate-y-1.5"
                  }`}
                />
                <div
                  className={`w-3/4 h-0.5 bg-current absolute transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-0 " : "opacity-100"
                  }`}
                />
                <div
                  className={`w-3/4 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 bg-white" : "translate-y-1.5"
                  }`}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Nav */}
      {isOpen && (
        <nav className="fixed bg-light-1000 dark:bg-light-100 inset-0">
          <div className="fixed bg-light-1000 dark:bg-dark-1000 inset-y-0 right-0 left-1/4 z-50">
            {/* logo */}
            <div className="px-2 py-6">
              <Image
                className="w-24"
                src={logo}
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
            <ul className="border-y-[.5px]  border-dark-glassmorphism dark:border-dark-300">
              <div className="flex flex-col items-start gap-4 px-2 py-4 ">
                {navLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    className="text-light-300 dark:text-dark-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
