"use client";
import React, { useState, useEffect } from "react";

const Loader = ({ duration = 3000 }: { duration?: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-ping"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Loader */}
      <div className="relative flex flex-col items-center space-y-8 text-center">
        <div className="relative">
          <div className="absolute -inset-8 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 m-0.5"></div>
          </div>
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse blur-sm"></div>
          <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
            <div className="absolute inset-2 bg-gradient-to-br from-blue-400/50 to-transparent rounded-full animate-pulse"></div>
            <span className="relative z-10 animate-bounce font-black tracking-wider">
              ML
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75 delay-500"></div>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            {"Mike Lakers".split("").map((char, i) => (
              <span
                key={i}
                className={`inline-block animate-bounce delay-${i * 100}`}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="text-blue-300 text-lg font-medium animate-pulse">
            Crafting Digital Experiences
          </p>
        </div>

        {/* Progress */}
        <div className="w-80 max-w-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 text-sm font-medium">
              Loading Portfolio
            </span>
            <span className="text-blue-400 text-sm font-bold">
              {Math.round(loadingProgress)}%
            </span>
          </div>
          <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
            <div
              className="relative h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-400 text-sm animate-pulse">
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
    </div>
  );
};

export default Loader;
