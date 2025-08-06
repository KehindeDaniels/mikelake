"use client";
import React from "react";
import Link from "next/link";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Code,
  Palette,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Featured Projects", href: "#featured-projects" },
    { name: "Contact", href: "#contact-me" },
    { name: "Experience", href: "#experience" },
  ];

  // Live Projects Data - you can move this to a separate data file later
  const liveProjects = [
    {
      name: "FinTech Banking App",
      url: "https://banking-demo.example.com",
      isLive: true,
    },
    {
      name: "E-Commerce Platform",
      url: "https://marketplace-demo.example.com",
      isLive: true,
    },
    {
      name: "AI Learning Platform",
      url: "https://learn-ai-demo.example.com",
      isLive: true,
    },
    {
      name: "Creative Portfolio",
      url: "https://creative-demo.example.com",
      isLive: true,
    },
    {
      name: "Healthcare Dashboard",
      url: "/case-studies/healthcare",
      isLive: false,
    },
    { name: "Smart City Hub", url: "/case-studies/smart-city", isLive: false },
  ];

  const externalLinks = [
    {
      name: "Projects on Behance",
      href: "https://behance.net/yourprofile",
      icon: Palette,
    },
    {
      name: "GitHub Repositories",
      href: "https://github.com/yourprofile",
      icon: Code,
    },
    {
      name: "Dribbble Shots",
      href: "https://dribbble.com/yourprofile",
      icon: Globe,
    },
  ];

  const services = [
    "UI/UX Design",
    "Web Development",
    "Mobile App Design",
    "Brand Identity",
    "Product Strategy",
    "User Research",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/yourprofile",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: Github,
      href: "https://github.com/yourprofile",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
      color: "hover:bg-blue-500",
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 -right-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-12">
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    ML
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Mike Lakers
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Crafting digital experiences that inspire, engage, and deliver
                  exceptional results for brands worldwide.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                  <a
                    href="mailto:mikadek82@gmail.com"
                    className="text-sm hover:underline"
                  >
                    mikadek82@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                  <a
                    href="tel:+2347045870603"
                    className="text-sm hover:underline"
                  >
                    +234 70 4587 0603
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group w-full text-left"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Projects */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Live Projects
              </h4>
              <ul className="space-y-3">
                {liveProjects.map((project, index) => (
                  <li key={index}>
                    <a
                      href={project.url}
                      target={project.isLive ? "_blank" : undefined}
                      rel={project.isLive ? "noopener noreferrer" : undefined}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.isLive
                            ? "bg-green-400 animate-pulse"
                            : "bg-gray-500"
                        }`}
                      ></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {project.name}
                      </span>
                      {project.isLive && (
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* External Links */}
              <div className="pt-4 border-t border-gray-700/50">
                <ul className="space-y-3">
                  {externalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <link.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm text-gray-300 group-hover:text-white">
                Back to top
              </span>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-white rotate-[-90deg] group-hover:translate-y-[-2px] transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Your Name. Made with{" "}
                <Heart className="w-4 h-4 text-red-500 inline-block mx-1" /> in
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
