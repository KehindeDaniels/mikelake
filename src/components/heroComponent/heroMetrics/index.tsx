// No "use client" needed
import { Epilogue, Lato } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-epilogue",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const HeroMetrics: React.FC = () => {
  const metrics = [
    { value: "7+", label: "Startups Helped" },
    { value: "$50K+", label: "Funding Raised" },
    { value: "10+", label: "MVPs Launched" },
    { value: "500k+", label: "Users Reached" },
  ];

  return (
    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-6 py-6 shadow-lg max-w-3xl mx-auto mb-8">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-white/80">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center min-w-[100px]">
            <div
              className={` text-2xl sm:text-3xl font-medium text-white mb-1`}
            >
              {metric.value}
            </div>
            <div
              className={`${lato.className} text-xs sm:text-sm tracking-wide`}
            >
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroMetrics;
