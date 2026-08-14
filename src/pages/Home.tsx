import GitHubContributions from "../components/GitHubContributions"
import { Link } from "react-router-dom"
import { BriefcaseBusiness, FolderOpen } from "lucide-react"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  homeIntroParagraphs,
  homeExperienceTitle,
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
      <h1 className="m-0 text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-[0.04em] text-foreground">
        {homeName}
      </h1>

      <div className="max-w-2xl space-y-5 py-10 text-base leading-7 text-foreground/85 lg:text-base">
        {homeIntroParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph.map((segment, segmentIndex) =>
              segment.strong ? (
                <span key={segmentIndex} className="font-semibold text-foreground">
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
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {homeProjectsTitle}
          </h2>

          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            All Projects
          </Link>
        </div>

        <Empty className="min-h-48 py-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderOpen />
            </EmptyMedia>
            <EmptyTitle>Projects coming soon</EmptyTitle>
            <EmptyDescription>
              Detailed project case studies are being prepared.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>

      <div className="w-full max-w-2xl py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {homeSectionTitle}
          </h2>

          <Link
            to="/tech-stack"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View All
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {visibleTechStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 ? (
            <span className="inline-flex items-center rounded-md border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-foreground">
              + {hiddenTechCount} more
            </span>
          ) : null}
        </div>
      </div>

      <div className="w-full max-w-2xl py-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {homeExperienceTitle}
          </h2>

          <Link
            to="/experience"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View All
          </Link>
        </div>

        <Empty className="min-h-48 py-10">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <BriefcaseBusiness />
            </EmptyMedia>
            <EmptyTitle>Experience overview</EmptyTitle>
            <EmptyDescription>
              View my experience page for roles, responsibilities, and tools.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>

      <GitHubContributions />
    </section>
  )
}
