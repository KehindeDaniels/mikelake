"use client";
import React, { useState } from "react";
import ThemeSwitch from "../theameSwitcher/ThemeSwitch";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logo = "/logo.svg";
  const open = "/open.svg";
  const close = "/close.svg";
  const navLinks = [
    { label: "About", url: "/#about" },
    { label: "Work", url: "/#work" },
    { label: "Contact", url: "/#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-dark-glassmorphism dark:border-dark-300 dark:border-opacity-20 py-4 sm:py-0 z-[10000]">
        <nav className="mobile-header-dark max-w-[90%] sm:max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12 sm:h-16">
          {/* logo */}
          <div className="">
            <Image
              className="w-28"
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
                  key={link.label}
                  href={link.url}
                  className="text-light-300 dark:text-dark-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-4">
              <div className="text-2xl">
                <ThemeSwitch />
              </div>
              <button className="hidden sm:flex bg-dark-1000 dark:bg-light-1000 text-light-1000 dark:text-dark-1000 px-4 py-2 rounded-xl">
                Download CV
              </button>

              {/* hamburger */}
              <div
                onClick={toggleMenu}
                className="sm:hidden relative h-6 w-6 flex justify-center items-center z-50"
              >
                <div className="w-3/4 h-0.5 bg-light-100 dark:bg-dark-100 rounded-full absolute -translate-y-1.5" />
                <div className="w-3/4 h-0.5 bg-light-100 dark:bg-dark-100 rounded-full absolute" />
                <div className="w-3/4 h-0.5 bg-light-100 dark:bg-dark-100 rounded-full absolute translate-y-1.5" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <nav
        className={`fixed inset-0 z-[10000] transition-transform duration-300 transform ${
          isOpen ? "slide-in" : "slide-out"
        }`}
      >
        <div className="overlay inset-0 fixed bg-dark-blur dark:bg-dark-1000 opacity-40"></div>
        <div className="fixed bg-dark-1000 inset-y-0 right-0 left-1/4 z-50 py-8">
          <div
            onClick={toggleMenu}
            className="sm:hidden relative h-6 w-6 ml-4 flex justify-center items-center z-[100000]"
          >
            <Image
              className="w-28"
              src={close}
              alt="Close"
              width={30}
              height={30}
            />
          </div>

          <ul className="border-y-[1px] mt-6 border-dark-300 border-opacity-10">
            <div className="flex flex-col items-start gap-4 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-dark-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </ul>
          <div className="theme flex justify-between items-center px-4 pt-6">
            <p className="text-dark-300">Switch Theme</p>
            <div className="text-white text-2xl">
              <ThemeSwitch />
            </div>
          </div>
          <div className="grid px-4 mt-4 font-bold">
            <button className="bg-light-1000 text-dark-1000 px-4 py-1 rounded-xl">
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
