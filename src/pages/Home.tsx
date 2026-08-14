import GitHubContributions from "../components/GitHubContributions"
import { Link } from "react-router-dom"
import {
  homeIntroParagraphs,
  homeProjectsTitle,
  homeName,
  homeSectionTitle,
  homeTechStackPreviewCount,
  homeTechStack,
} from "@/data/home"

export default function Home() {
  const visibleTechStack = homeTechStack.slice(0, homeTechStackPreviewCount)
  const hiddenTechCount = homeTechStack.length - visibleTechStack.length

  return (
    <section className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-2xl flex-col items-start justify-start py-6">
      <h1 className="m-0 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.06em] text-slate-50">
        {homeName}
      </h1>

      <div className="max-w-2xl py-10 space-y-5 text-base leading-7 text-white/85 lg:text-lg">
        {homeIntroParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph.map((segment, segmentIndex) =>
              segment.strong ? (
                <span key={segmentIndex} className="font-semibold text-white">
                  {segment.text}
                </span>
              ) : (
                <span key={segmentIndex}>{segment.text}</span>
              ),
            )}
          </p>
        ))}
      </div>

      <div className="w-full max-w-2xl py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            {homeProjectsTitle}
          </h2>

          <Link
            to="/projects"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            All Projects
          </Link>
        </div>
      </div>

      <div className="w-full max-w-2xl py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            {homeSectionTitle}
          </h2>

          <Link
            to="/tech-stack"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            View All
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {visibleTechStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 ? (
            <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">
              + {hiddenTechCount} more
            </span>
          ) : null}
        </div>
      </div>

      <GitHubContributions />
    </section>
  )
}
