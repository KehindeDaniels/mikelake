"use client";
import React, { useState, useEffect } from "react";

const Loader = ({ duration = 3000 }: { duration?: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mq.matches);
    }
  }, []);

  useEffect(() => {
    const t0 = performance.now();
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const elapsed = performance.now() - t0;
        // cap by duration to feel consistent
        const target = Math.min(100, (elapsed / duration) * 100);
        const next = Math.min(
          100,
          Math.max(prev + Math.random() * 12 + 4, target)
        );
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 400);
        }
        return next;
      });
    }, 140);

    return () => clearInterval(progressInterval);
  }, [duration]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-4 py-[max(env(safe-area-inset-top),1rem)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating Orbs (smaller on mobile) */}
        <div className="absolute -top-28 -left-28 w-56 h-56 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-28 w-48 h-48 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-28 left-1/3 w-56 h-56 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        {/* Grid Pattern (denser on mobile) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px] md:bg-[size:100px_100px] animate-pulse" />
        {/* Floating Particles (fewer on mobile) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`p-sm-${i}`}
            className={`absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400/30 rounded-full ${
              reducedMotion ? "" : "animate-ping"
            }`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2.5}s`,
              animationDuration: `${2 + Math.random() * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Loader */}
      <div className="relative flex w-full max-w-md flex-col items-center space-y-6 text-center md:space-y-8">
        {/* Logo */}
        <div className="relative">
          {/* Rotating ring */}
          <div
            className={`${
              reducedMotion ? "" : "animate-spin"
            } absolute -inset-6 md:-inset-8 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500`}
          >
            <div className="m-0.5 h-full w-full rounded-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
          </div>
          {/* Pulsing ring */}
          <div
            className={`${
              reducedMotion ? "" : "animate-pulse"
            } absolute -inset-5 md:-inset-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm`}
          />
          {/* Center circle */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-xl font-bold text-white shadow-2xl md:h-24 md:w-24 md:text-2xl">
            <div
              className={`${
                reducedMotion ? "" : "animate-pulse"
              } absolute inset-1.5 md:inset-2 rounded-full bg-gradient-to-br from-blue-400/50 to-transparent`}
            />
            <span
              className={`${
                reducedMotion ? "" : "animate-bounce"
              } relative z-10 font-black tracking-wider`}
            >
              ML
            </span>
            <div
              className={`${
                reducedMotion ? "hidden" : ""
              } absolute -top-1 -right-1 h-2 w-2 rounded-full bg-yellow-400 animate-ping opacity-75 md:h-3 md:w-3`}
            />
            <div
              className={`${
                reducedMotion ? "hidden" : ""
              } absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping opacity-75 [animation-delay:.5s] md:h-2 md:w-2`}
            />
          </div>
        </div>

        {/* Name */}
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-5xl">
            {"Mike Lakers".split("").map((char, i) => (
              <span
                key={i}
                className={`${
                  reducedMotion ? "" : "animate-bounce"
                } inline-block`}
                style={{
                  animationDelay: reducedMotion ? undefined : `${i * 0.06}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p
            className={`${
              reducedMotion ? "" : "animate-pulse"
            } text-sm font-medium text-blue-300 sm:text-base md:text-lg`}
          >
            Crafting Digital Experiences
          </p>
        </div>

        {/* Progress */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-300 sm:text-sm">
              Loading Portfolio
            </span>
            <span className="text-xs font-bold text-blue-400 sm:text-sm">
              {Math.round(loadingProgress)}%
            </span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800 shadow-inner">
            <div
              className={`${
                reducedMotion ? "hidden" : "animate-pulse"
              } absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20`}
            />
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>

        {/* Message */}
        <p
          className={`${
            reducedMotion ? "" : "animate-pulse"
          } text-xs text-gray-400 sm:text-sm`}
        >
          {loadingProgress < 30 && "Initializing creative workspace..."}
          {loadingProgress >= 30 &&
            loadingProgress < 60 &&
            "Loading design components..."}
          {loadingProgress >= 60 &&
            loadingProgress < 90 &&
            "Preparing portfolio showcase..."}
          {loadingProgress >= 90 && "Almost ready! ✨"}
        </p>
      </div>

      {/* Corners (hide on small to declutter) */}
      <div className="pointer-events-none absolute top-6 left-6 hidden h-10 w-10 rounded-tl-lg border-l-2 border-t-2 border-blue-500/30 md:block" />
      <div className="pointer-events-none absolute top-6 right-6 hidden h-10 w-10 rounded-tr-lg border-r-2 border-t-2 border-purple-500/30 md:block" />
      <div className="pointer-events-none absolute bottom-6 left-6 hidden h-10 w-10 rounded-bl-lg border-b-2 border-l-2 border-cyan-500/30 md:block" />
      <div className="pointer-events-none absolute bottom-6 right-6 hidden h-10 w-10 rounded-br-lg border-b-2 border-r-2 border-blue-500/30 md:block" />
    </div>
  );
};

export default Loader;
