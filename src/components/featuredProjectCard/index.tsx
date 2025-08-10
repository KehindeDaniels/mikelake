// No "use client" needed
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import type { FeaturedProject } from "@/types/interfaces";
// import type { FeaturedProject } from "@/types/featuredProject";

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
      className="
        relative overflow-hidden rounded-2xl
        bg-white/70 dark:bg-white/5
        backdrop-blur-sm
        border border-gray-200 dark:border-white/10
        shadow-sm hover:shadow-md transition-shadow
      "
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
        {/* Category tag */}
        <div className="mb-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-700 dark:text-blue-300 dark:bg-blue-500/10 capitalize">
            {category}
          </span>
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
        <div className="flex flex-wrap gap-2">
          <a
            href={caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                       bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10
                       hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700
                       dark:hover:bg-white/20 dark:hover:border-blue-400 dark:hover:text-blue-300
                       transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Case Study
          </a>

          {isLive && liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                         bg-blue-600 text-white hover:bg-blue-700 transition-colors"
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
