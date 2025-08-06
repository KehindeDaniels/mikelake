"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/yourprofile",
      label: "Facebook",
    },
    {
      icon: Globe,
      href: "https://dribbble.com/yourprofile",
      label: "Dribbble",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
  ];

  const budgetOptions = [
    { value: "", label: "Select Budget Range" },
    { value: "$1,000 - $5,000", label: "$1,000 - $5,000" },
    { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
    { value: "$10,000 - $25,000", label: "$10,000 - $25,000" },
    { value: "$25,000+", label: "$25,000+" },
    { value: "Let's discuss", label: "Let's discuss" },
  ];

  return (
    <motion.section
      id="contact-me"
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 dark:from-[#111827] dark:via-[#0F172A] dark:to-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Glass Card */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                title: "My Email:",
                value: "mikadek82@gmail.com",
                href: "mailto:mikadek82@gmail.com",
                color: "blue",
              },
              {
                icon: Phone,
                title: "Call Me Now:",
                value: "+234 70 4587 0603",
                href: "tel:+2347045870603",
                color: "green",
              },
              {
                icon: Clock,
                title: "Response Time:",
                value: "Usually within 24 hours",
                color: "purple",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group flex items-start gap-4 p-6 border border-white/10 backdrop-blur-lg rounded-2xl transition-all duration-300 shadow-lg dark:shadow-blue-900/10 bg-white/40 dark:bg-white/5`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-${item.color}-100 dark:bg-${item.color}-800/30`}
                  >
                    <Icon
                      className={`w-5 h-5 text-${item.color}-600 dark:text-${item.color}-300`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-gray-700 dark:text-gray-300 hover:text-${item.color}-600 dark:hover:text-${item.color}-400 transition-colors`}
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
            <div className="bg-white/40 dark:bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
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

          {/* Contact Form Card */}
          <div className="backdrop-blur-lg bg-white/40 dark:bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-gray-700 dark:text-gray-200"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 text-gray-800 dark:text-gray-200"
              >
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone and Budget Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project... or send me a Hi😮‍💨"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-500/30 rounded-xl text-green-700 dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-500/30 rounded-xl text-red-700 dark:text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span>
                      Something went wrong. Please try again or email me
                      directly.
                    </span>
                  </div>
                )}
              </form>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
