// "use client";
// import React from "react";

// const HeroBackground: React.FC = () => {
//   return (
//     <>
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Circles */}
//         <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-transparent bg-gradient-to-r from-red-400/30 to-pink-400/30 animate-spin-slow opacity-30 sm:opacity-60 scale-75 sm:scale-100">
//           <div className="absolute inset-2 rounded-full bg-white dark:bg-[#132238]"></div>
//         </div>

//         <div className="absolute top-32 right-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-transparent bg-gradient-to-br from-purple-400/40 to-blue-400/40 animate-pulse opacity-30 sm:opacity-70 scale-75 sm:scale-100">
//           <div className="absolute inset-2 rounded-full bg-white dark:bg-[#132238]"></div>
//         </div>

//         <div className="absolute bottom-40 left-[15%] w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-transparent bg-gradient-to-tr from-cyan-400/30 to-purple-400/30 animate-bounce opacity-30 sm:opacity-60 scale-75 sm:scale-100">
//           <div className="absolute inset-2 rounded-full bg-white dark:bg-[#132238]"></div>
//         </div>

//         <div className="absolute top-1/2 right-[10%] w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-transparent bg-gradient-to-bl from-orange-400/40 to-red-400/40 animate-spin-reverse opacity-30 sm:opacity-50 scale-75 sm:scale-100">
//           <div className="absolute inset-2 rounded-full bg-white dark:bg-[#132238]"></div>
//         </div>

//         {/* Floating Circles */}
//         <div className="absolute top-[45%] left-1/3 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-transparent bg-gradient-to-r from-pink-400/50 to-purple-400/50 animate-float opacity-30 sm:opacity-80 scale-75 sm:scale-100">
//           <div className="absolute inset-1 rounded-full bg-white dark:bg-[#132238]"></div>
//         </div>

//         <div className="absolute bottom-32 right-1/3 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-transparent bg-gradient-to-bl from-blue-400/40 to-indigo-400/40 animate-float-delayed opacity-30 sm:opacity-70 scale-75 sm:scale-100">
//           <div className="absolute inset-1 rounded-full bg-white dark:bg-[#132238]"></div>
//         </div>

//         {/* Animated Lines */}
//         <svg className="absolute top-0 left-0 w-full h-full opacity-10 sm:opacity-20">
//           <defs>
//             <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" />
//               <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
//               <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
//             </linearGradient>
//             <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
//               <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
//               <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
//             </linearGradient>
//           </defs>

//           <path
//             d="M100,200 Q300,100 500,300 T900,200"
//             fill="none"
//             stroke="url(#lineGrad1)"
//             strokeWidth="2"
//             className="animate-draw-line"
//           />
//           <path
//             d="M200,400 Q400,300 600,500 T1000,400"
//             fill="none"
//             stroke="url(#lineGrad2)"
//             strokeWidth="2"
//             className="animate-draw-line-delayed"
//           />
//         </svg>

//         {/* Background Orbs */}
//         <div className="absolute -top-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow opacity-20 sm:opacity-30 scale-90 sm:scale-100"></div>
//         <div
//           className="absolute -bottom-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow opacity-20 sm:opacity-30 scale-90 sm:scale-100"
//           style={{ animationDelay: "3s" }}
//         ></div>
//       </div>
//     </>
//   );
// };

// export default HeroBackground;
