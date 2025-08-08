// // No "use client" needed
// import React from "react";
// import { Epilogue, Lato } from "next/font/google";

// const epilogue = Epilogue({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-epi",
// });
// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-lato",
// });

// const HeroMetrics: React.FC = () => {
//   const metrics = [
//     { value: "7+", label: "Startups Helped" },
//     { value: "$50K+", label: "Funding Raised" },
//     { value: "10+", label: "MVPs Launched" },
//     { value: "500k+", label: "Users Reached" },
//   ];

//   return (
//     <div
//       className={`
//         relative overflow-hidden
//         backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-6 py-6 shadow-lg
//         max-w-3xl mx-auto mb-8
//         /* glossy sweep layer (pseudo-element) */
//         before:content-[''] before:absolute before:inset-y-[-20%] before:left-[-30%]
//         before:w-[35%] before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent
//         before:blur-2xl before:skew-x-[-20deg]
//         before:animate-[shine_3.2s_linear_infinite]
//         /* optional blend for extra sparkle */
//         before:mix-blend-screen
//       `}
//     >
//       <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-white/80">
//         {metrics.map((m) => (
//           <div key={m.label} className="text-center min-w-[100px]">
//             <div
//               className={`${epilogue.variable} font-[var(--font-epi)] text-2xl sm:text-3xl font-medium text-white mb-1`}
//             >
//               {m.value}
//             </div>
//             <div
//               className={`${lato.className} text-xs sm:text-sm tracking-wide`}
//             >
//               {m.label}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* local keyframes (Tailwind v4 supports arbitrary animations) */}
//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-60%) skewX(-20deg);
//             opacity: 0.35;
//           }
//           50% {
//             transform: translateX(60%) skewX(-20deg);
//             opacity: 0.45;
//           }
//           100% {
//             transform: translateX(160%) skewX(-20deg);
//             opacity: 0.35;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroMetrics;
