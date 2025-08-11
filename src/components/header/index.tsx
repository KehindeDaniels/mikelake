"use client";
import React, { useState } from "react";
import ThemeSwitch from "../theameSwitcher/ThemeSwitch";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleContactScroll = () => {
    const section = document.getElementById("contact-me");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logo = "/logo.svg";
  const close = "/close.svg";
  const navLinks = [
    { label: "About", url: "/#about" },
    { label: "Work", url: "/#work" },
    { label: "Contact", url: "/#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-[10000] backdrop-blur-lg border-b border-dark-300 border-opacity-20 py-4 sm:py-0">
        <nav className="max-w-[90%] sm:max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-12 sm:h-16">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              alt="Logo"
              width={30}
              height={30}
              className="w-28"
            />
          </div>

          {/* Navigation + Theme + CTA */}
          <div className="flex items-center justify-center gap-6">
            <ul className="hidden sm:flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-slate-600 dark:text-dark-300 hover:text-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </ul>

            <div className="flex items-center justify-center gap-4">
              <div className="text-2xl text-white">
                <ThemeSwitch />
              </div>

              {/* CTA */}
              <button
                onClick={handleContactScroll}
                className="hidden sm:flex bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Contact Me
              </button>

              {/* Mobile Hamburger */}
              <div
                onClick={toggleMenu}
                className="sm:hidden relative h-6 w-6 flex justify-center items-center z-50"
              >
                <div className="w-3/4 h-0.5 bg-white rounded-full absolute -translate-y-1.5" />
                <div className="w-3/4 h-0.5 bg-white rounded-full absolute" />
                <div className="w-3/4 h-0.5 bg-white rounded-full absolute translate-y-1.5" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`fixed inset-0 z-[10000] transition-transform duration-300 transform ${
          isOpen ? "slide-in" : "slide-out"
        }`}
      >
        <div className="overlay inset-0 fixed bg-black/70 opacity-40"></div>
        <div className="fixed bg-black inset-y-0 right-0 left-1/4 z-50 py-8">
          <div
            onClick={toggleMenu}
            className="sm:hidden relative h-6 w-6 ml-4 flex justify-center items-center z-[100000]"
          >
            <Image
              src={close}
              alt="Close"
              width={30}
              height={30}
              className="w-6"
            />
          </div>

          <ul className="border-y-[1px] mt-6 border-white/10">
            <div className="flex flex-col items-start gap-4 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </ul>

          {/* Theme Toggle */}
          <div className="flex justify-between items-center px-4 pt-6">
            <p className="text-white">Switch Theme</p>
            <div className="text-2xl text-white">
              <ThemeSwitch />
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="grid px-4 mt-4 font-bold">
            <button
              onClick={() => {
                closeMenu();
                handleContactScroll();
              }}
              className="bg-white text-black px-4 py-2 rounded-xl"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
