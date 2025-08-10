// No "use client" needed
import Image from "next/image";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";
import type { FeaturedProject } from "@/types/interfaces";
import { Poppins, Lato } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function FeaturedProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index?: number;
}) {
  const { title, category, description, image, caseStudyUrl, isLive, liveUrl } =
    project;

  return (
    <article
      className={`${lato.className} relative overflow-hidden rounded-2xl
        bg-white/70 dark:bg-white/5
        backdrop-blur-sm
        border border-gray-200 dark:border-white/10
        shadow-sm hover:shadow-md transition-shadow
      `}
    >
      {/* Live badge */}
      {isLive && liveUrl && (
        <span
          className="
            absolute right-3 top-3 z-10
            inline-flex items-center gap-1
            px-2.5 py-1 rounded-full text-xs font-semibold
            bg-emerald-600 text-white
            shadow
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
          Live
        </span>
      )}

      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-t-2xl">
        <div className="relative aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index !== undefined && index < 2}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category (uppercase, muted) */}
        <div className="text-[11px] sm:text-xs font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400 mb-2">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          {/* Case Study (primary outlined pill) */}
          <a
            href={caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full px-5 py-3 text-sm font-semibold
              border-2 border-blue-500 text-blue-600
              hover:bg-blue-50 dark:hover:bg-blue-500/10
              transition-colors
            "
          >
            Case Study
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Live Site (filled) */}
          {isLive && liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-full px-5 py-3 text-sm font-semibold
                bg-blue-600 text-white hover:bg-blue-700
                transition-colors
              "
            >
              <Globe className="w-4 h-4" />
              Live Site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
