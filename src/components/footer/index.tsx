"use client";
import React, { useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Github,
  Linkedin,
  Twitter,
  Heart,
  ExternalLink,
} from "lucide-react";
import { SiBehance } from "react-icons/si";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Simulate AOS initialization
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-in");
      }, index * 100);
    });
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact-me" },
  ];

  const socials = [
    {
      icon: SiBehance,
      href: "https://www.behance.net/yourprofile",
      label: "Behance",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* CSS Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          [data-aos="fade-right"].animate-in {
            animation: fadeInRight 0.8s ease-out forwards;
          }
          
          [data-aos="fade-left"].animate-in {
            animation: fadeInLeft 0.8s ease-out forwards;
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .text-gradient {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glow-border {
            position: relative;
          }
          
          .glow-border::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask-composite: xor;
          }
          
          .backdrop-blur-sm { backdrop-filter: blur(4px); }
          .backdrop-blur { backdrop-filter: blur(8px); }
          
          .grid-pattern {
            background-image: radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0);
            background-size: 50px 50px;
          }
        `,
        }}
      />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        {/* Secondary glow */}
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl opacity-70"></div>
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-cyan-400/10 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 grid-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Brand Section - Enhanced */}
            <div
              data-aos="fade-right"
              className="lg:col-span-5 space-y-6 opacity-0"
            >
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-gradient">
                  Mike Lakers
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                  Crafting exceptional digital experiences through innovative
                  design and cutting-edge development for forward-thinking
                  brands worldwide.
                </p>
              </div>

              {/* Contact Info - Enhanced styling */}
              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-white/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:mikadek82@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    mikadek82@gmail.com
                  </a>
                </div>

                <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-white/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+2347045870603"
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    +234 704 587 0603
                  </a>
                </div>

                <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-white/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation - Enhanced */}
            <div data-aos="fade-up" className="lg:col-span-3 opacity-0">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {navLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 py-2"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 rounded-full"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div data-aos="fade-left" className="lg:col-span-4 opacity-0">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white relative">
                  Let&apos;s Connect
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glow-border relative p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 text-gray-500 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur">
                  <h5 className="text-white font-semibold mb-2">
                    Ready to collaborate?
                  </h5>
                  <p className="text-gray-400 text-sm mb-4">
                    Let&apos;s create something amazing together.
                  </p>
                  <a
                    href="#contact-me"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Get In Touch
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Enhanced */}
          <div
            data-aos="fade-up"
            className="opacity-0 border-t border-gray-700/50 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} Mike Lakers. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>in Lagos, Nigeria.</span>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
