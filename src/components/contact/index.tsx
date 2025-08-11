"use client";

import React from "react";
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Twitter,
} from "lucide-react";
import ContactForm from "./ContactForm";
import { SiBehance } from "react-icons/si";

const socialLinks = [
  {
    icon: SiBehance,
    href: "https://behance.net/yourprofile",
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

// Tailwind can't parse dynamic class names like bg-${color}-100
// so we map them explicitly.
const colorStyles: Record<
  "blue" | "green" | "purple",
  { bg: string; text: string; hoverText: string }
> = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-800/30",
    text: "text-blue-600 dark:text-blue-300",
    hoverText: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-800/30",
    text: "text-green-600 dark:text-green-300",
    hoverText: "hover:text-green-600 dark:hover:text-green-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-800/30",
    text: "text-purple-600 dark:text-purple-300",
    hoverText: "hover:text-purple-600 dark:hover:text-purple-400",
  },
};

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact-me"
      data-aos="fade-up"
      data-aos-delay="60"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 dark:from-[#111827] dark:via-[#0F172A] dark:to-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s discuss your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, a question, or just want to say hello?
            I&apos;m always open to meaningful conversations and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left: Contact Info + Socials */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                title: "My Email:",
                value: "mikadek82@gmail.com",
                href: "mailto:mikadek82@gmail.com",
                color: "blue" as const,
              },
              {
                icon: Phone,
                title: "Call Me Now:",
                value: "+234 70 4587 0603",
                href: "tel:+2347045870603",
                color: "green" as const,
              },
              {
                icon: Clock,
                title: "Response Time:",
                value: "Usually within 24 hours",
                color: "purple" as const,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const c = colorStyles[item.color];
              return (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={120 + i * 80}
                  className="group flex items-start gap-4 p-6 border border-white/10 backdrop-blur-lg rounded-2xl transition-all duration-300 bg-white/40 dark:bg-white/5 shadow-sm hover:shadow-xl"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${c.bg}`}
                  >
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-gray-700 dark:text-gray-300 ${c.hoverText} transition-colors`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay={380}
              className="bg-white/40 dark:bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
