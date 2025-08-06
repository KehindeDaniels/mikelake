"use client";
import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact-me" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/yourprofile" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourprofile" },
    { icon: Twitter, href: "https://twitter.com/yourprofile" },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Mike Lakers</h3>
          <p className="text-sm">
            Building sleek and scalable digital experiences for modern brands.
          </p>
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:mikadek82@gmail.com">mikadek82@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a href="tel:+2347045870603">+234 704 587 0603</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" /> Lagos, Nigeria
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold">Socials</h4>
          <div className="flex gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <s.icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {currentYear} Mike Lakers. Made with ❤️ in Lagos, Nigeria.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-sm hover:text-white"
        >
          Back to top <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
